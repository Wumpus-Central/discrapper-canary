var n = s(477900),
    l = s(582128),
    a = s(503698),
    r = s.n(a),
    u = s(435558),
    i = s(120692),
    c = s(855986),
    o = s(939249),
    d = s(866323),
    A = s(43990),
    E = s(73153),
    h = s(386467),
    f = s(763754),
    g = s(448368),
    m = s(516287),
    S = s(538355),
    p = s(378058),
    C = s(148355),
    T = s(596344),
    y = s(994500),
    b = s(486020),
    v = s(927813),
    _ = s(403362),
    k = s(240248),
    M = s(652215);
s(838541);
var N = s(538347);
let x = 10 * v.A.Millis.SECOND,
    R = {};
function j(e) {
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
        { content: v } = (0, S.A)(t, R),
        _ = (0, k.uJ)(t.content) ? null : v,
        {
            contentPlaceholder: M,
            renderedContent: x,
            trailingIcon: j,
            leadingIcon: I,
        } = (0, g.o)(t, _, a, u, N.BK, { trailingIconClass: N.sl, leadingIconClass: N.aG, iconSize: 20 }),
        G = (0, p.o6)(t),
        L =
            G.length > 0
                ? G.map((e) => (0, n.jsx)(C.A, { className: N.yI, size: 128, sticker: e, isInteracting: A }, e.id))
                : null;
    return (0, n.jsx)(m.x, {
        value: A,
        children: (0, n.jsxs)(o.D, {
            className: N.oR,
            onMouseEnter: () => {
                E(!0);
            },
            onMouseLeave: () => {
                E(!1);
            },
            onClick: T,
            children: [
                (0, n.jsxs)("div", {
                    className: r()(N.kn, { [N.mK]: t.mentioned }),
                    children: [
                        null != L ? null : I,
                        x ?? L ?? (0, n.jsx)("span", { children: M }),
                        null != L ? null : j,
                    ],
                }),
                (0, n.jsx)("img", {
                    alt: "",
                    src:
                        i?.guildMemberAvatar != null && null != d
                            ? (0, b.s7)({ guildId: d, userId: t.author.id, avatar: i.guildMemberAvatar })
                            : t.author.getAvatarURL(d, 32),
                    className: N.my,
                }),
            ],
        }),
    });
}
s.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, className: s, onToastClick: a } = e,
                [o, h] = l.useState(!1),
                { toastsHidden: f, toastMessages: g } = (function (e) {
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
                                n.type === M.lAJ.STAGE_START ||
                                n.type === M.lAJ.STAGE_END ||
                                n.type === M.lAJ.STAGE_TOPIC ||
                                n.type === M.lAJ.STAGE_SPEAKER ||
                                n.type === M.lAJ.STAGE_RAISE_HAND ||
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
                        toastMessages: (0, c.yK)([T.A], () => f.map((e) => T.A.getMessage(t, e)), [t, f]).filter(_.Vq),
                    };
                })({ channelId: t, isFrozen: o, count: 3, lingerMs: x }),
                m = l.useRef({}),
                [S, p] = l.useState({}),
                C = l.useCallback((e, t) => {
                    null == t ? delete m.current[e] : (m.current[e] = t);
                }, []),
                y = l.useRef(S);
            (l.useLayoutEffect(() => {
                y.current = S;
            }),
                l.useLayoutEffect(() => {
                    let e = {},
                        t = 0;
                    for (let s of g) {
                        let n = m.current[s.id] ?? 0;
                        ((e[s.id] = t), (t += n + 8));
                    }
                    (0, u.isEqual)(e, y.current) || p(e);
                }, [g]));
            let b = g.map((e) => ({ message: e, height: m.current[e.id], y: S[e.id] })),
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
                theme: M.NJ8.DARK,
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
                                className: N.T_,
                                style: e,
                                children: (0, n.jsx)(j, { message: t.message, onToastClick: a }),
                            }),
                        ),
                    }),
            });
        },
        R: x,
    },
);
