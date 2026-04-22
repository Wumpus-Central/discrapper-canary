n.d(t, {
    Am: () => M,
    Ck: () => F,
    G8: () => B,
    Ge: () => P,
    H9: () => y,
    I: () => j,
    Jo: () => R,
    T0: () => N,
    UY: () => O,
    U_: () => H,
    VL: () => D,
    Yq: () => w,
    m: () => S,
    r4: () => k,
    ri: () => U,
    yp: () => G,
}),
    n(938796);
var i = n(627968),
    l = n(64700),
    a = n(621466),
    s = n(665260),
    r = n(442433),
    o = n(843472),
    d = n(414798),
    c = n(267102),
    u = n(594061),
    m = n(734057),
    _ = n(580745),
    h = n(320501),
    p = n(287809),
    g = n(954571),
    A = n(203982),
    f = n(723702),
    x = n(427262),
    C = n(841549),
    E = n(439147),
    I = n(81437),
    v = n(652215);
function b(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function T(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = p.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let a = `@${x.Ay.getUserTag(l, { decoration: "never" })}`,
                s = `<@${e}>`;
            A._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, { plainText: a, rawText: s }), d.A.startTyping(t);
        },
        [e, t, n],
    );
}
function S(e, t, n, i) {
    let l = b("usernameProfile", n, i);
    return T(e.author.id, t.id, l);
}
function y(e, t, n, i) {
    let l = b("referencedUsernameProfile", n, i);
    return T(e?.author.id, t.id, l);
}
function N(e, t, n, i) {
    let l = b("interactionUsernameProfile", n, i);
    return T(e?.user.id, t.id, l);
}
function j(e, t, n, i) {
    let l = b("referencedUsernameProfile", n, i);
    return T(e, t.id, l);
}
function L(e) {
    return l.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function R(e, t) {
    return L(b("avatarProfile", e, t));
}
function P(e, t) {
    return L(b("referencedAvatarProfile", e, t));
}
function w(e, t) {
    return L(b("interactionAvatarProfile", e, t));
}
function D(e, t, a, o) {
    let { id: d } = t,
        { id: u, flags: p } = e,
        A = (0, s.Lt)(p, v.pr7.EPHEMERAL),
        x = (0, c.Us)();
    return l.useCallback(
        (e, t) => {
            if (A) return;
            if (!f.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let l = m.A.getChannel(d),
                s = h.A.getMessage(d, u),
                c = _.A.isEditing(d, u);
            null == l ||
                null == s ||
                c ||
                (g.default.track(v.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: d,
                    location: "right_click",
                }),
                a({ contextMenu: !0 }),
                (0, r.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("92493"),
                            n.e("93103"),
                            n.e("97278"),
                            n.e("35313"),
                            n.e("56403"),
                            n.e("84560"),
                            n.e("93764"),
                            n.e("31667"),
                            n.e("64879"),
                            n.e("1636"),
                            n.e("94840"),
                        ]).then(n.bind(n, 547983));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: s, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => a({ contextMenu: !1 }), context: x },
                ));
        },
        [A, d, u, a, x, o],
    );
}
function k(e, t) {
    return l.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                l = m.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, C.wQ)(n, i, l));
        },
        [e, t],
    );
}
function O(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = p.default.getUser(e),
                a = m.A.getChannel(t);
            null != l &&
                null != a &&
                (i.stopPropagation(), (0, C.B8)(i, { user: l, channel: a, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function M(e, t) {
    return l.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                l = m.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, C.pB)(n, i, l.guild_id));
        },
        [e, t],
    );
}
function U(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return l.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, E.A)(i, n));
        },
        [i, n],
    );
}
function G(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        a = n.author.id,
        s = `${t}:${a}`,
        r = l.useRef(i),
        [o, d] = l.useState(i);
    r.current = o || r.current;
    let c = l.useCallback(() => {
            (0, u.cE)(), o || (A._.dispatchKeyed(v.zOV.ANIMATE_CHAT_AVATAR, s, !0), d(!0));
        }, [o, s]),
        m = l.useCallback(() => {
            A._.dispatchKeyed(v.zOV.ANIMATE_CHAT_AVATAR, s, !1), d(!1);
        }, [s]);
    return { hasHovered: r.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: m };
}
function B(e, t) {
    let [n, i] = l.useState(!1),
        [s, r] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                let n = (0, a.BF)(t)?.activeElement ?? null;
                (t.target === t.currentTarget || t.currentTarget.contains(n)) && (r(!0), i(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: l.useCallback(
            (e) => {
                let n = (0, a.BF)(e)?.activeElement ?? null;
                (e.target !== e.currentTarget && e.currentTarget.contains(n)) || i(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: s,
    };
}
function F(e, t) {
    return l.useCallback(() => {
        let { messageReference: n } = e,
            i = () => {
                o.A.jumpToMessage({
                    channelId: n.channel_id,
                    messageId: n.message_id,
                    flash: !0,
                    returnMessageId: e.id,
                });
            };
        (null == t || (0, I.A)(t, i)) && i();
    }, [t, e]);
}
function H(e, t) {
    let n = b("interactionData", e, t);
    return l.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
