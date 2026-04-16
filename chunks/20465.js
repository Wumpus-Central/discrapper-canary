n.d(t, { A: () => O, R: () => j });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(407045),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    h = n(367513),
    A = n(843472),
    _ = n(386467),
    m = n(465364),
    p = n(763754),
    g = n(448368),
    f = n(516287),
    E = n(378058),
    x = n(148355),
    I = n(320501),
    C = n(994500),
    N = n(486020),
    T = n(927813),
    S = n(403362),
    b = n(652215),
    y = n(838541),
    v = n(424366);
let j = 10 * T.A.Millis.SECOND;
function R(e) {
    let { message: t } = e,
        { isBlocked: n, isIgnored: s } = (0, d.cf)(
            [C.A],
            () => ({ isBlocked: C.A.isBlockedForMessage(t), isIgnored: C.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = (0, p.X4)(t),
        o = l.useContext(_.A),
        [u, I] = l.useState(!1),
        T = l.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (h.A.updateChatOpen(t.channel_id, !0),
                    A.A.jumpToMessage({ channelId: t.channel_id, messageId: t.id, flash: !0 }));
            },
            [t.channel_id, t.id],
        ),
        S = null != t.content && "" !== t.content ? (0, m.Ay)(t).content : null,
        {
            contentPlaceholder: b,
            renderedContent: j,
            trailingIcon: R,
            leadingIcon: O,
        } = (0, g.o)(t, S, n, s, v.BK, { trailingIconClass: v.sl, leadingIconClass: v.aG, iconSize: y.eJ }),
        L = (0, E.o6)(t),
        M =
            L.length > 0
                ? L.map((e) => (0, i.jsx)(x.A, { className: v.yI, size: 128, sticker: e, isInteracting: u }, e.id))
                : null;
    return (0, i.jsx)(f.x, {
        value: u,
        children: (0, i.jsxs)(c.DUT, {
            className: v.oR,
            onMouseEnter: () => {
                I(!0);
            },
            onMouseLeave: () => {
                I(!1);
            },
            onClick: T,
            children: [
                (0, i.jsxs)("div", {
                    className: a()(v.kn, { [v.mK]: t.mentioned }),
                    children: [
                        null != M ? null : O,
                        j ?? M ?? (0, i.jsx)("span", { children: b }),
                        null != M ? null : R,
                    ],
                }),
                (0, i.jsx)("img", {
                    alt: "",
                    src:
                        r?.guildMemberAvatar != null && null != o
                            ? (0, N.s7)({ guildId: o, userId: t.author.id, avatar: r.guildMemberAvatar })
                            : t.author.getAvatarURL(o, 32),
                    className: v.my,
                }),
            ],
        }),
    });
}
function O(e) {
    let { channelId: t, className: n } = e,
        [s, h] = l.useState(!1),
        { toastsHidden: A, toastMessages: _ } = (function (e) {
            let { channelId: t, isFrozen: n, count: i, lingerMs: s } = e,
                [a, r] = l.useState([]),
                [o, c] = l.useState(!1),
                h = l.useRef(null),
                A = l.useRef(void 0),
                _ = l.useCallback(() => {
                    r([]), c(!0);
                }, []);
            l.useEffect(() => {
                function e(e) {
                    let { channelId: n, message: i, optimistic: l } = e;
                    n !== t ||
                        i.type === b.lAJ.STAGE_START ||
                        i.type === b.lAJ.STAGE_END ||
                        i.type === b.lAJ.STAGE_TOPIC ||
                        i.type === b.lAJ.STAGE_SPEAKER ||
                        i.type === b.lAJ.STAGE_RAISE_HAND ||
                        l ||
                        (clearTimeout(A.current), (A.current = setTimeout(_, s)), r((e) => [...e, i.id]));
                }
                return (
                    u.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        u.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [t, _, i, s]),
                l.useEffect(
                    () => () => {
                        clearTimeout(A.current);
                    },
                    [],
                ),
                l.useEffect(() => {
                    a.length > 3 &&
                        r((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [a]),
                n && null == h.current ? (h.current = a) : n || null == h.current || (h.current = null);
            let m = h.current ?? a;
            return {
                toastsHidden: o,
                toastMessages: (0, d.yK)([I.A], () => m.map((e) => I.A.getMessage(t, e)), [t, m]).filter(S.Vq),
            };
        })({ channelId: t, isFrozen: s, count: 3, lingerMs: j }),
        m = l.useRef({}),
        [p, g] = l.useState({}),
        f = l.useCallback((e, t) => {
            null == t ? delete m.current[e] : (m.current[e] = t);
        }, []),
        E = l.useRef(p);
    l.useLayoutEffect(() => {
        E.current = p;
    }),
        l.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let n of _) {
                let i = m.current[n.id] ?? 0;
                (e[n.id] = t), (t += i + 8);
            }
            (0, r.isEqual)(e, E.current) || g(e);
        }, [_]);
    let x = _.map((e) => ({ message: e, height: m.current[e.id], y: p[e.id] })),
        C = (0, c.pnh)(x, {
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
                return { opacity: 0, translateY: A ? n : -(t ?? 0) - 8, pointerEvents: "none" };
            },
        });
    return (0, i.jsx)(c.NPJ, {
        theme: b.NJ8.DARK,
        children: (e) =>
            (0, i.jsx)("div", {
                className: a()(n, e),
                onMouseEnter: () => {
                    h(!0);
                },
                onMouseLeave: () => {
                    h(!1);
                },
                children: C((e, t) =>
                    (0, i.jsx)(o.animated.div, {
                        ref: (e) => f(t.message.id, null != e ? e.offsetHeight : null),
                        className: v.T_,
                        style: e,
                        children: (0, i.jsx)(R, { message: t.message }),
                    }),
                ),
            }),
    });
}
