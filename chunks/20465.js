"use strict";
n.d(t, { A: () => R, R: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(382222),
    c = n(311907),
    d = n(397927),
    u = n(73153),
    h = n(367513),
    A = n(843472),
    m = n(386467),
    _ = n(465364),
    p = n(763754),
    g = n(448368),
    f = n(378058),
    x = n(148355),
    C = n(320501),
    E = n(994500),
    I = n(486020),
    N = n(927813),
    b = n(403362),
    S = n(652215),
    T = n(838541),
    v = n(424366);
let y = 10 * N.A.Millis.SECOND;
function j(e) {
    let { message: t } = e,
        { isBlocked: n, isIgnored: l } = (0, c.cf)(
            [E.A],
            () => ({ isBlocked: E.A.isBlockedForMessage(t), isIgnored: E.A.isIgnoredForMessage(t) }),
            [t],
        ),
        r = (0, p.X4)(t),
        o = s.useContext(m.A),
        [u, C] = s.useState(!1),
        N = s.useCallback(
            (e) => {
                "A" !== e.target.nodeName &&
                    (h.A.updateChatOpen(t.channel_id, !0),
                    A.A.jumpToMessage({ channelId: t.channel_id, messageId: t.id, flash: !0 }));
            },
            [t.channel_id, t.id],
        ),
        b = null != t.content && "" !== t.content ? (0, _.Ay)(t, { isInteracting: u }).content : null,
        {
            contentPlaceholder: S,
            renderedContent: y,
            trailingIcon: j,
            leadingIcon: R,
        } = (0, g.o)(t, b, n, l, v.BK, { trailingIconClass: v.sl, leadingIconClass: v.aG, iconSize: T.eJ }),
        O = (0, f.o6)(t),
        L =
            O.length > 0
                ? O.map((e) => (0, i.jsx)(x.A, { className: v.yI, size: 128, sticker: e, isInteracting: u }, e.id))
                : null;
    return (0, i.jsxs)(d.DUT, {
        className: v.oR,
        onMouseEnter: () => {
            C(!0);
        },
        onMouseLeave: () => {
            C(!1);
        },
        onClick: N,
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
        [l, h] = s.useState(!1),
        { toastsHidden: A, toastMessages: m } = (function (e) {
            let { channelId: t, isFrozen: n, count: i, lingerMs: l } = e,
                [a, r] = s.useState([]),
                [o, d] = s.useState(!1),
                h = s.useRef(null),
                A = s.useRef(void 0),
                m = s.useCallback(() => {
                    r([]), d(!0);
                }, []);
            s.useEffect(() => {
                function e(e) {
                    let { channelId: n, message: i, optimistic: s } = e;
                    n !== t ||
                        i.type === S.lAJ.STAGE_START ||
                        i.type === S.lAJ.STAGE_END ||
                        i.type === S.lAJ.STAGE_TOPIC ||
                        i.type === S.lAJ.STAGE_SPEAKER ||
                        i.type === S.lAJ.STAGE_RAISE_HAND ||
                        s ||
                        (clearTimeout(A.current), (A.current = setTimeout(m, l)), r((e) => [...e, i.id]));
                }
                return (
                    u.h.subscribe("MESSAGE_CREATE", e),
                    () => {
                        u.h.unsubscribe("MESSAGE_CREATE", e);
                    }
                );
            }, [t, m, i, l]),
                s.useEffect(
                    () => () => {
                        clearTimeout(A.current);
                    },
                    [],
                ),
                s.useEffect(() => {
                    a.length > 3 &&
                        r((e) => {
                            let t = e.length - 3;
                            return [...e.slice(t)];
                        });
                }, [a]),
                n && null == h.current ? (h.current = a) : n || null == h.current || (h.current = null);
            let _ = h.current ?? a;
            return {
                toastsHidden: o,
                toastMessages: (0, c.yK)([C.A], () => _.map((e) => C.A.getMessage(t, e)), [t, _]).filter(b.Vq),
            };
        })({ channelId: t, isFrozen: l, count: 3, lingerMs: y }),
        _ = s.useRef({}),
        [p, g] = s.useState({}),
        f = s.useCallback((e, t) => {
            null == t ? delete _.current[e] : (_.current[e] = t);
        }, []),
        x = s.useRef(p);
    s.useLayoutEffect(() => {
        x.current = p;
    }),
        s.useLayoutEffect(() => {
            let e = {},
                t = 0;
            for (let n of m) {
                let i = _.current[n.id] ?? 0;
                (e[n.id] = t), (t += i + 8);
            }
            (0, r.isEqual)(e, x.current) || g(e);
        }, [m]);
    let E = m.map((e) => ({ message: e, height: _.current[e.id], y: p[e.id] })),
        I = (0, d.pnh)(E, {
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
    return (0, i.jsx)(d.NPJ, {
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
