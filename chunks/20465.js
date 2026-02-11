n.d(t, { A: () => R, R: () => y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(563495),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    h = n(367513),
    A = n(843472),
    m = n(386467),
    p = n(465364),
    g = n(763754),
    _ = n(448368),
    f = n(378058),
    x = n(148355),
    C = n(320501),
    E = n(994500),
    I = n(486020),
    b = n(927813),
    N = n(403362),
    S = n(652215),
    T = n(838541),
    v = n(262159);
let y = 10 * b.A.Millis.SECOND;
function j(e) {
    let { message: t } = e,
        { isBlocked: n, isIgnored: s } = (0, d.cf)(
            [E.A],
            () => ({ isBlocked: E.A.isBlockedForMessage(t), isIgnored: E.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = (0, g.X4)(t),
        o = l.useContext(m.A),
        [u, C] = l.useState(!1),
        b = l.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (h.A.updateChatOpen(t.channel_id, !0),
                    A.A.jumpToMessage({ channelId: t.channel_id, messageId: t.id, flash: !0 }));
            },
            [t.channel_id, t.id],
        ),
        N = null != t.content && "" !== t.content ? (0, p.Ay)(t, { isInteracting: u }).content : null,
        {
            contentPlaceholder: S,
            renderedContent: y,
            trailingIcon: j,
            leadingIcon: R,
        } = (0, _.o)(t, N, n, s, v.BK, { trailingIconClass: v.sl, leadingIconClass: v.aG, iconSize: T.eJ }),
        O = (0, f.o6)(t),
        L =
            O.length > 0
                ? O.map((e) => (0, i.jsx)(x.A, { className: v.yI, size: 128, sticker: e, isInteracting: u }, e.id))
                : null;
    return (0, i.jsxs)(c.DUT, {
        className: v.oR,
        onMouseEnter: () => {
            C(!0);
        },
        onMouseLeave: () => {
            C(!1);
        },
        onClick: b,
        children: [
            (0, i.jsxs)("div", {
                className: a()(v.kn, { [v.mK]: t.mentioned }),
                children: [null != L ? null : R, y ?? L ?? (0, i.jsx)("span", { children: S }), null != L ? null : j],
            }),
            (0, i.jsx)("img", {
                alt: "",
                src:
                    r?.guildMemberAvatar != null && null != o
                        ? (0, I.s7)({ guildId: o, userId: t.author.id, avatar: r.guildMemberAvatar })
                        : t.author.getAvatarURL(o, 32),
                className: v.my,
            }),
        ],
    });
}
function R(e) {
    let { channelId: t, className: n } = e,
        [s, h] = l.useState(!1),
        { toastsHidden: A, toastMessages: m } = (function (e) {
            let { channelId: t, isFrozen: n, count: i, lingerMs: s } = e,
                [a, r] = l.useState([]),
                [o, c] = l.useState(!1),
                h = l.useRef(null),
                A = l.useRef(void 0),
                m = l.useCallback(() => {
                    r([]), c(!0);
                }, []);
            l.useEffect(() => {
                function e(e) {
                    let { channelId: n, message: i, optimistic: l } = e;
                    n !== t ||
                        i.type === S.lAJ.STAGE_START ||
                        i.type === S.lAJ.STAGE_END ||
                        i.type === S.lAJ.STAGE_TOPIC ||
                        i.type === S.lAJ.STAGE_SPEAKER ||
                        i.type === S.lAJ.STAGE_RAISE_HAND ||
                        l ||
                        (clearTimeout(A.current), (A.current = setTimeout(m, s)), r((e) => [...e, i.id]));
                }
                return (
                    u.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        u.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [t, m, i, s]),
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
            let p = h.current ?? a;
            return {
                toastsHidden: o,
                toastMessages: (0, d.yK)([C.A], () => p.map((e) => C.A.getMessage(t, e)), [t, p]).filter(N.Vq),
            };
        })({ channelId: t, isFrozen: s, count: 3, lingerMs: y }),
        p = l.useRef({}),
        [g, _] = l.useState({}),
        f = l.useCallback((e, t) => {
            null == t ? delete p.current[e] : (p.current[e] = t);
        }, []),
        x = l.useRef(g);
    l.useLayoutEffect(() => {
        x.current = g;
    }),
        l.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let n of m) {
                let i = p.current[n.id] ?? 0;
                (e[n.id] = t), (t += i + 8);
            }
            (0, r.isEqual)(e, x.current) || _(e);
        }, [m]);
    let E = m.map((e) => ({ message: e, height: p.current[e.id], y: g[e.id] })),
        I = (0, c.pnh)(E, {
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
        theme: S.NJ8.DARK,
        children: (e) =>
            (0, i.jsx)("div", {
                className: a()(n, e),
                onMouseEnter: () => {
                    h(!0);
                },
                onMouseLeave: () => {
                    h(!1);
                },
                children: I((e, t) =>
                    (0, i.jsx)(o.animated.div, {
                        ref: (e) => f(t.message.id, null != e ? e.offsetHeight : null),
                        className: v.T_,
                        style: e,
                        children: (0, i.jsx)(j, { message: t.message }),
                    }),
                ),
            }),
    });
}
