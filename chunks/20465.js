n.d(t, { A: () => R, R: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(92674),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    h = n(367513),
    A = n(843472),
    g = n(386467),
    m = n(465364),
    p = n(763754),
    _ = n(448368),
    x = n(378058),
    f = n(148355),
    E = n(320501),
    C = n(994500),
    I = n(486020),
    S = n(927813),
    b = n(403362),
    N = n(652215),
    T = n(838541),
    j = n(279633);
let v = 10 * S.A.Millis.SECOND;
function y(e) {
    let { message: t } = e,
        { isBlocked: n, isIgnored: s } = (0, d.cf)(
            [C.A],
            () => ({ isBlocked: C.A.isBlockedForMessage(t), isIgnored: C.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = (0, p.X4)(t),
        o = l.useContext(g.A),
        [u, E] = l.useState(!1),
        S = l.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (h.A.updateChatOpen(t.channel_id, !0),
                    A.A.jumpToMessage({ channelId: t.channel_id, messageId: t.id, flash: !0 }));
            },
            [t.channel_id, t.id],
        ),
        b = null != t.content && "" !== t.content ? (0, m.Ay)(t, { isInteracting: u }).content : null,
        {
            contentPlaceholder: N,
            renderedContent: v,
            trailingIcon: y,
            leadingIcon: R,
        } = (0, _.o)(t, b, n, s, j.BK, { trailingIconClass: j.sl, leadingIconClass: j.aG, iconSize: T.eJ }),
        O = (0, x.o6)(t),
        L =
            O.length > 0
                ? O.map((e) => (0, i.jsx)(f.A, { className: j.yI, size: 128, sticker: e, isInteracting: u }, e.id))
                : null;
    return (0, i.jsxs)(c.DUT, {
        className: j.oR,
        onMouseEnter: () => {
            E(!0);
        },
        onMouseLeave: () => {
            E(!1);
        },
        onClick: S,
        children: [
            (0, i.jsxs)("div", {
                className: a()(j.kn, { [j.mK]: t.mentioned }),
                children: [null != L ? null : R, v ?? L ?? (0, i.jsx)("span", { children: N }), null != L ? null : y],
            }),
            (0, i.jsx)("img", {
                alt: "",
                src:
                    r?.guildMemberAvatar != null && null != o
                        ? (0, I.s7)({ guildId: o, userId: t.author.id, avatar: r.guildMemberAvatar })
                        : t.author.getAvatarURL(o, 32),
                className: j.my,
            }),
        ],
    });
}
function R(e) {
    let { channelId: t, className: n } = e,
        [s, h] = l.useState(!1),
        { toastsHidden: A, toastMessages: g } = (function (e) {
            let { channelId: t, isFrozen: n, count: i, lingerMs: s } = e,
                [a, r] = l.useState([]),
                [o, c] = l.useState(!1),
                h = l.useRef(null),
                A = l.useRef(void 0),
                g = l.useCallback(() => {
                    r([]), c(!0);
                }, []);
            l.useEffect(() => {
                function e(e) {
                    let { channelId: n, message: i, optimistic: l } = e;
                    n !== t ||
                        i.type === N.lAJ.STAGE_START ||
                        i.type === N.lAJ.STAGE_END ||
                        i.type === N.lAJ.STAGE_TOPIC ||
                        i.type === N.lAJ.STAGE_SPEAKER ||
                        i.type === N.lAJ.STAGE_RAISE_HAND ||
                        l ||
                        (clearTimeout(A.current), (A.current = setTimeout(g, s)), r((e) => [...e, i.id]));
                }
                return (
                    u.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        u.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [t, g, i, s]),
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
                toastMessages: (0, d.yK)([E.A], () => m.map((e) => E.A.getMessage(t, e)), [t, m]).filter(b.Vq),
            };
        })({ channelId: t, isFrozen: s, count: 3, lingerMs: v }),
        m = l.useRef({}),
        [p, _] = l.useState({}),
        x = l.useCallback((e, t) => {
            null == t ? delete m.current[e] : (m.current[e] = t);
        }, []),
        f = l.useRef(p);
    l.useLayoutEffect(() => {
        f.current = p;
    }),
        l.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let n of g) {
                let i = m.current[n.id] ?? 0;
                (e[n.id] = t), (t += i + 8);
            }
            (0, r.isEqual)(e, f.current) || _(e);
        }, [g]);
    let C = g.map((e) => ({ message: e, height: m.current[e.id], y: p[e.id] })),
        I = (0, c.pnh)(C, {
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
        theme: N.NJ8.DARK,
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
                        ref: (e) => x(t.message.id, null != e ? e.offsetHeight : null),
                        className: j.T_,
                        style: e,
                        children: (0, i.jsx)(y, { message: t.message }),
                    }),
                ),
            }),
    });
}
