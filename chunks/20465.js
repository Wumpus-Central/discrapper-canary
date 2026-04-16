n.d(t, { A: () => R, R: () => v });
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
    f = n(378058),
    E = n(148355),
    x = n(320501),
    I = n(994500),
    C = n(486020),
    N = n(927813),
    T = n(403362),
    S = n(652215),
    b = n(838541),
    y = n(424366);
let v = 10 * N.A.Millis.SECOND;
function j(e) {
    let { message: t } = e,
        { isBlocked: n, isIgnored: s } = (0, d.cf)(
            [I.A],
            () => ({ isBlocked: I.A.isBlockedForMessage(t), isIgnored: I.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = (0, p.X4)(t),
        o = l.useContext(_.A),
        [u, x] = l.useState(!1),
        N = l.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (h.A.updateChatOpen(t.channel_id, !0),
                    A.A.jumpToMessage({ channelId: t.channel_id, messageId: t.id, flash: !0 }));
            },
            [t.channel_id, t.id],
        ),
        T = null != t.content && "" !== t.content ? (0, m.Ay)(t, { isInteracting: u }).content : null,
        {
            contentPlaceholder: S,
            renderedContent: v,
            trailingIcon: j,
            leadingIcon: R,
        } = (0, g.o)(t, T, n, s, y.BK, { trailingIconClass: y.sl, leadingIconClass: y.aG, iconSize: b.eJ }),
        O = (0, f.o6)(t),
        L =
            O.length > 0
                ? O.map((e) => (0, i.jsx)(E.A, { className: y.yI, size: 128, sticker: e, isInteracting: u }, e.id))
                : null;
    return (0, i.jsxs)(c.DUT, {
        className: y.oR,
        onMouseEnter: () => {
            x(!0);
        },
        onMouseLeave: () => {
            x(!1);
        },
        onClick: N,
        children: [
            (0, i.jsxs)("div", {
                className: a()(y.kn, { [y.mK]: t.mentioned }),
                children: [null != L ? null : R, v ?? L ?? (0, i.jsx)("span", { children: S }), null != L ? null : j],
            }),
            (0, i.jsx)("img", {
                alt: "",
                src:
                    r?.guildMemberAvatar != null && null != o
                        ? (0, C.s7)({ guildId: o, userId: t.author.id, avatar: r.guildMemberAvatar })
                        : t.author.getAvatarURL(o, 32),
                className: y.my,
            }),
        ],
    });
}
function R(e) {
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
                        i.type === S.lAJ.STAGE_START ||
                        i.type === S.lAJ.STAGE_END ||
                        i.type === S.lAJ.STAGE_TOPIC ||
                        i.type === S.lAJ.STAGE_SPEAKER ||
                        i.type === S.lAJ.STAGE_RAISE_HAND ||
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
                toastMessages: (0, d.yK)([x.A], () => m.map((e) => x.A.getMessage(t, e)), [t, m]).filter(T.Vq),
            };
        })({ channelId: t, isFrozen: s, count: 3, lingerMs: v }),
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
    let I = _.map((e) => ({ message: e, height: m.current[e.id], y: p[e.id] })),
        C = (0, c.pnh)(I, {
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
                children: C((e, t) =>
                    (0, i.jsx)(o.animated.div, {
                        ref: (e) => f(t.message.id, null != e ? e.offsetHeight : null),
                        className: y.T_,
                        style: e,
                        children: (0, i.jsx)(j, { message: t.message }),
                    }),
                ),
            }),
    });
}
