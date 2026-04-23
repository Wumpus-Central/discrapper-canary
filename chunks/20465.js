t.d(n, { A: () => M, R: () => L });
var l = t(627968),
    i = t(64700),
    a = t(503698),
    s = t.n(a),
    r = t(735438),
    o = t(419354),
    c = t(311907),
    u = t(939249),
    d = t(866323),
    A = t(43990),
    h = t(73153),
    p = t(367513),
    m = t(843472),
    g = t(386467),
    f = t(465364),
    C = t(763754),
    E = t(448368),
    v = t(516287),
    I = t(378058),
    x = t(148355),
    T = t(320501),
    _ = t(994500),
    j = t(486020),
    N = t(927813),
    b = t(403362),
    y = t(652215),
    S = t(838541),
    O = t(561886);
let L = 10 * N.A.Millis.SECOND;
function R(e) {
    let { message: n } = e,
        { isBlocked: t, isIgnored: a } = (0, c.cf)(
            [_.A],
            () => ({ isBlocked: _.A.isBlockedForMessage(n), isIgnored: _.A.isIgnoredForMessage(n) }),
            [n],
        ),
        r = (0, C.X4)(n),
        o = i.useContext(g.A),
        [d, A] = i.useState(!1),
        h = i.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (p.A.updateChatOpen(n.channel_id, !0),
                    m.A.jumpToMessage({ channelId: n.channel_id, messageId: n.id, flash: !0 }));
            },
            [n.channel_id, n.id],
        ),
        T = null != n.content && "" !== n.content ? (0, f.Ay)(n).content : null,
        {
            contentPlaceholder: N,
            renderedContent: b,
            trailingIcon: y,
            leadingIcon: L,
        } = (0, E.o)(n, T, t, a, O.BK, { trailingIconClass: O.sl, leadingIconClass: O.aG, iconSize: S.eJ }),
        R = (0, I.o6)(n),
        M =
            R.length > 0
                ? R.map((e) => (0, l.jsx)(x.A, { className: O.yI, size: 128, sticker: e, isInteracting: d }, e.id))
                : null;
    return (0, l.jsx)(v.x, {
        value: d,
        children: (0, l.jsxs)(u.D, {
            className: O.oR,
            onMouseEnter: () => {
                A(!0);
            },
            onMouseLeave: () => {
                A(!1);
            },
            onClick: h,
            children: [
                (0, l.jsxs)("div", {
                    className: s()(O.kn, { [O.mK]: n.mentioned }),
                    children: [
                        null != M ? null : L,
                        b ?? M ?? (0, l.jsx)("span", { children: N }),
                        null != M ? null : y,
                    ],
                }),
                (0, l.jsx)("img", {
                    alt: "",
                    src:
                        r?.guildMemberAvatar != null && null != o
                            ? (0, j.s7)({ guildId: o, userId: n.author.id, avatar: r.guildMemberAvatar })
                            : n.author.getAvatarURL(o, 32),
                    className: O.my,
                }),
            ],
        }),
    });
}
function M(e) {
    let { channelId: n, className: t } = e,
        [a, u] = i.useState(!1),
        { toastsHidden: p, toastMessages: m } = (function (e) {
            let { channelId: n, isFrozen: t, count: l, lingerMs: a } = e,
                [s, r] = i.useState([]),
                [o, u] = i.useState(!1),
                d = i.useRef(null),
                A = i.useRef(void 0),
                p = i.useCallback(() => {
                    r([]), u(!0);
                }, []);
            i.useEffect(() => {
                function e(e) {
                    let { channelId: t, message: l, optimistic: i } = e;
                    t !== n ||
                        l.type === y.lAJ.STAGE_START ||
                        l.type === y.lAJ.STAGE_END ||
                        l.type === y.lAJ.STAGE_TOPIC ||
                        l.type === y.lAJ.STAGE_SPEAKER ||
                        l.type === y.lAJ.STAGE_RAISE_HAND ||
                        i ||
                        (clearTimeout(A.current), (A.current = setTimeout(p, a)), r((e) => [...e, l.id]));
                }
                return (
                    h.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        h.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [n, p, l, a]),
                i.useEffect(
                    () => () => {
                        clearTimeout(A.current);
                    },
                    [],
                ),
                i.useEffect(() => {
                    s.length > 3 &&
                        r((e) => {
                            let n = e.length - 3;
                            return [...e.slice(n)];
                        });
                }, [s]),
                t && null == d.current ? (d.current = s) : t || null == d.current || (d.current = null);
            let m = d.current ?? s;
            return {
                toastsHidden: o,
                toastMessages: (0, c.yK)([T.A], () => m.map((e) => T.A.getMessage(n, e)), [n, m]).filter(b.Vq),
            };
        })({ channelId: n, isFrozen: a, count: 3, lingerMs: L }),
        g = i.useRef({}),
        [f, C] = i.useState({}),
        E = i.useCallback((e, n) => {
            null == n ? delete g.current[e] : (g.current[e] = n);
        }, []),
        v = i.useRef(f);
    i.useLayoutEffect(() => {
        v.current = f;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                n = 0;
            for (let t of m) {
                let l = g.current[t.id] ?? 0;
                (e[t.id] = n), (n += l + 8);
            }
            (0, r.isEqual)(e, v.current) || C(e);
        }, [m]);
    let I = m.map((e) => ({ message: e, height: g.current[e.id], y: f[e.id] })),
        x = (0, d.p)(I, {
            keys: (e) => e.message.id,
            from: () => ({ opacity: 0 }),
            enter: (e) => {
                let { y: n } = e;
                return { opacity: 1, translateY: n };
            },
            update: (e) => {
                let { y: n } = e;
                return { translateY: n };
            },
            leave: (e) => {
                let { height: n, y: t } = e;
                return { opacity: 0, translateY: p ? t : -(n ?? 0) - 8, pointerEvents: "none" };
            },
        });
    return (0, l.jsx)(A.N, {
        theme: y.NJ8.DARK,
        children: (e) =>
            (0, l.jsx)("div", {
                className: s()(t, e),
                onMouseEnter: () => {
                    u(!0);
                },
                onMouseLeave: () => {
                    u(!1);
                },
                children: x((e, n) =>
                    (0, l.jsx)(o.animated.div, {
                        ref: (e) => E(n.message.id, null != e ? e.offsetHeight : null),
                        className: O.T_,
                        style: e,
                        children: (0, l.jsx)(R, { message: n.message }),
                    }),
                ),
            }),
    });
}
