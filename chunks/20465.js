s.d(t, { A: () => I, R: () => R });
var n = s(477900),
    l = s(582128),
    a = s(503698),
    r = s.n(a),
    u = s(435558),
    i = s(29477),
    c = s(17928),
    o = s(939249),
    d = s(866323),
    A = s(43990),
    E = s(73153),
    h = s(386467),
    f = s(763754),
    m = s(448368),
    g = s(516287),
    S = s(538355),
    p = s(378058),
    C = s(148355),
    T = s(232835),
    y = s(994500),
    b = s(486020),
    v = s(927813),
    M = s(403362),
    _ = s(240248),
    k = s(652215),
    N = s(838541),
    x = s(538347);
let R = 10 * v.A.Millis.SECOND,
    j = { allowGameMentions: !0 };
function G(e) {
    let { message: t, onToastClick: s } = e,
        { isBlocked: a, isIgnored: u } = (0, c.cf)(
            [y.A],
            () => ({ isBlocked: y.A.isBlockedForMessage(t), isIgnored: y.A.isIgnoredForMessage(t) }),
            [t],
        ),
        i = (0, f.X4)(t),
        d = l.useContext(h.A),
        [A, E] = l.useState(!1),
        T = l.useCallback(
            (e) => {
                "A" !== e.target.nodeName && s(t);
            },
            [t, s],
        ),
        { content: v } = (0, S.A)(t, j),
        M = (0, _.uJ)(t.content) ? null : v,
        {
            contentPlaceholder: k,
            renderedContent: R,
            trailingIcon: G,
            leadingIcon: I,
        } = (0, m.o)(t, M, a, u, x.BK, { trailingIconClass: x.sl, leadingIconClass: x.aG, iconSize: N.eJ }),
        L = (0, p.o6)(t),
        J =
            L.length > 0
                ? L.map((e) => (0, n.jsx)(C.A, { className: x.yI, size: 128, sticker: e, isInteracting: A }, e.id))
                : null;
    return (0, n.jsx)(g.x, {
        value: A,
        children: (0, n.jsxs)(o.D, {
            className: x.oR,
            onMouseEnter: () => {
                E(!0);
            },
            onMouseLeave: () => {
                E(!1);
            },
            onClick: T,
            children: [
                (0, n.jsxs)("div", {
                    className: r()(x.kn, { [x.mK]: t.mentioned }),
                    children: [
                        null != J ? null : I,
                        R ?? J ?? (0, n.jsx)("span", { children: k }),
                        null != J ? null : G,
                    ],
                }),
                (0, n.jsx)("img", {
                    alt: "",
                    src:
                        i?.guildMemberAvatar != null && null != d
                            ? (0, b.s7)({ guildId: d, userId: t.author.id, avatar: i.guildMemberAvatar })
                            : t.author.getAvatarURL(d, 32),
                    className: x.my,
                }),
            ],
        }),
    });
}
function I(e) {
    let { channelId: t, className: s, onToastClick: a } = e,
        [o, h] = l.useState(!1),
        { toastsHidden: f, toastMessages: m } = (function (e) {
            let { channelId: t, isFrozen: s, count: n, lingerMs: a } = e,
                [r, u] = l.useState([]),
                [i, o] = l.useState(!1),
                d = l.useRef(null),
                A = l.useRef(void 0),
                h = l.useCallback(() => {
                    (u([]), o(!0));
                }, []);
            (l.useEffect(() => {
                function e(e) {
                    let { channelId: s, message: n, optimistic: l } = e;
                    s !== t ||
                        n.type === k.lAJ.STAGE_START ||
                        n.type === k.lAJ.STAGE_END ||
                        n.type === k.lAJ.STAGE_TOPIC ||
                        n.type === k.lAJ.STAGE_SPEAKER ||
                        n.type === k.lAJ.STAGE_RAISE_HAND ||
                        l ||
                        (clearTimeout(A.current), (A.current = setTimeout(h, a)), u((e) => [...e, n.id]));
                }
                return (
                    E.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        E.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [t, h, n, a]),
                l.useEffect(
                    () => () => {
                        clearTimeout(A.current);
                    },
                    [],
                ),
                l.useEffect(() => {
                    r.length > 3 &&
                        u((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [r]),
                s && null == d.current ? (d.current = r) : s || null == d.current || (d.current = null));
            let f = d.current ?? r;
            return {
                toastsHidden: i,
                toastMessages: (0, c.yK)([T.A], () => f.map((e) => T.A.getMessage(t, e)), [t, f]).filter(M.Vq),
            };
        })({ channelId: t, isFrozen: o, count: 3, lingerMs: R }),
        g = l.useRef({}),
        [S, p] = l.useState({}),
        C = l.useCallback((e, t) => {
            null == t ? delete g.current[e] : (g.current[e] = t);
        }, []),
        y = l.useRef(S);
    (l.useLayoutEffect(() => {
        y.current = S;
    }),
        l.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let s of m) {
                let n = g.current[s.id] ?? 0;
                ((e[s.id] = t), (t += n + 8));
            }
            (0, u.isEqual)(e, y.current) || p(e);
        }, [m]));
    let b = m.map((e) => ({ message: e, height: g.current[e.id], y: S[e.id] })),
        v = (0, d.p)(b, {
            keys: (e) => e.message.id,
            from: () => ({ opacity: 0 }),
            enter: (e) => {
                let { y: t } = e;
                return { opacity: 1, translateY: t };
            },
            update: (e) => {
                let { y: t } = e;
                return { translateY: t };
            },
            leave: (e) => {
                let { height: t, y: s } = e;
                return { opacity: 0, translateY: f ? s : -(t ?? 0) - 8, pointerEvents: "none" };
            },
        });
    return (0, n.jsx)(A.N, {
        theme: k.NJ8.DARK,
        children: (e) =>
            (0, n.jsx)("div", {
                className: r()(s, e),
                onMouseEnter: () => {
                    h(!0);
                },
                onMouseLeave: () => {
                    h(!1);
                },
                children: v((e, t) =>
                    (0, n.jsx)(i.animated.div, {
                        ref: (e) => C(t.message.id, null != e ? e.offsetHeight : null),
                        className: x.T_,
                        style: e,
                        children: (0, n.jsx)(G, { message: t.message, onToastClick: a }),
                    }),
                ),
            }),
    });
}
