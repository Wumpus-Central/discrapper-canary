n.d(t, { A: () => R, R: () => L });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(123924),
    c = n(17928),
    u = n(939249),
    d = n(866323),
    A = n(43990),
    E = n(228366),
    m = n(367513),
    h = n(720149),
    C = n(386467),
    g = n(465364),
    I = n(763754),
    p = n(805964),
    x = n(516287),
    T = n(68935),
    _ = n(148355),
    v = n(232835),
    N = n(994500),
    f = n(486020),
    j = n(927813),
    S = n(403362),
    b = n(652215),
    O = n(838541),
    y = n(561886);
let L = 10 * j.A.Millis.SECOND;
function M(e) {
    let { message: t } = e,
        { isBlocked: n, isIgnored: s } = (0, c.cf)(
            [N.A],
            () => ({ isBlocked: N.A.isBlockedForMessage(t), isIgnored: N.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = (0, I.X4)(t),
        o = i.useContext(C.A),
        [d, A] = i.useState(!1),
        E = i.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (m.A.updateChatOpen(t.channel_id, !0),
                    h.A.jumpToMessage({ channelId: t.channel_id, messageId: t.id, flash: !0 }));
            },
            [t.channel_id, t.id],
        ),
        v = null != t.content && "" !== t.content ? (0, g.Ay)(t).content : null,
        {
            contentPlaceholder: j,
            renderedContent: S,
            trailingIcon: b,
            leadingIcon: L,
        } = (0, p.o)(t, v, n, s, y.BK, { trailingIconClass: y.sl, leadingIconClass: y.aG, iconSize: O.eJ }),
        M = (0, T.o6)(t),
        R =
            M.length > 0
                ? M.map((e) => (0, l.jsx)(_.A, { className: y.yI, size: 128, sticker: e, isInteracting: d }, e.id))
                : null;
    return (0, l.jsx)(x.x, {
        value: d,
        children: (0, l.jsxs)(u.D, {
            className: y.oR,
            onMouseEnter: () => {
                A(!0);
            },
            onMouseLeave: () => {
                A(!1);
            },
            onClick: E,
            children: [
                (0, l.jsxs)("div", {
                    className: a()(y.kn, { [y.mK]: t.mentioned }),
                    children: [
                        null != R ? null : L,
                        S ?? R ?? (0, l.jsx)("span", { children: j }),
                        null != R ? null : b,
                    ],
                }),
                (0, l.jsx)("img", {
                    alt: "",
                    src:
                        r?.guildMemberAvatar != null && null != o
                            ? (0, f.s7)({ guildId: o, userId: t.author.id, avatar: r.guildMemberAvatar })
                            : t.author.getAvatarURL(o, 32),
                    className: y.my,
                }),
            ],
        }),
    });
}
function R(e) {
    let { channelId: t, className: n } = e,
        [s, u] = i.useState(!1),
        { toastsHidden: m, toastMessages: h } = (function (e) {
            let { channelId: t, isFrozen: n, count: l, lingerMs: s } = e,
                [a, r] = i.useState([]),
                [o, u] = i.useState(!1),
                d = i.useRef(null),
                A = i.useRef(void 0),
                m = i.useCallback(() => {
                    r([]), u(!0);
                }, []);
            i.useEffect(() => {
                function e(e) {
                    let { channelId: n, message: l, optimistic: i } = e;
                    n !== t ||
                        l.type === b.lAJ.STAGE_START ||
                        l.type === b.lAJ.STAGE_END ||
                        l.type === b.lAJ.STAGE_TOPIC ||
                        l.type === b.lAJ.STAGE_SPEAKER ||
                        l.type === b.lAJ.STAGE_RAISE_HAND ||
                        i ||
                        (clearTimeout(A.current), (A.current = setTimeout(m, s)), r((e) => [...e, l.id]));
                }
                return (
                    E.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        E.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [t, m, l, s]),
                i.useEffect(
                    () => () => {
                        clearTimeout(A.current);
                    },
                    [],
                ),
                i.useEffect(() => {
                    a.length > 3 &&
                        r((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [a]),
                n && null == d.current ? (d.current = a) : n || null == d.current || (d.current = null);
            let h = d.current ?? a;
            return {
                toastsHidden: o,
                toastMessages: (0, c.yK)([v.A], () => h.map((e) => v.A.getMessage(t, e)), [t, h]).filter(S.Vq),
            };
        })({ channelId: t, isFrozen: s, count: 3, lingerMs: L }),
        C = i.useRef({}),
        [g, I] = i.useState({}),
        p = i.useCallback((e, t) => {
            null == t ? delete C.current[e] : (C.current[e] = t);
        }, []),
        x = i.useRef(g);
    i.useLayoutEffect(() => {
        x.current = g;
    }),
        i.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let n of h) {
                let l = C.current[n.id] ?? 0;
                (e[n.id] = t), (t += l + 8);
            }
            (0, r.isEqual)(e, x.current) || I(e);
        }, [h]);
    let T = h.map((e) => ({ message: e, height: C.current[e.id], y: g[e.id] })),
        _ = (0, d.p)(T, {
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
                let { height: t, y: n } = e;
                return { opacity: 0, translateY: m ? n : -(t ?? 0) - 8, pointerEvents: "none" };
            },
        });
    return (0, l.jsx)(A.N, {
        theme: b.NJ8.DARK,
        children: (e) =>
            (0, l.jsx)("div", {
                className: a()(n, e),
                onMouseEnter: () => {
                    u(!0);
                },
                onMouseLeave: () => {
                    u(!1);
                },
                children: _((e, t) =>
                    (0, l.jsx)(o.animated.div, {
                        ref: (e) => p(t.message.id, null != e ? e.offsetHeight : null),
                        className: y.T_,
                        style: e,
                        children: (0, l.jsx)(M, { message: t.message }),
                    }),
                ),
            }),
    });
}
