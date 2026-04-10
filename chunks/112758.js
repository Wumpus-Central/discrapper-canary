n.d(t, {
    Am: () => k,
    Ck: () => F,
    G8: () => G,
    Ge: () => P,
    H9: () => N,
    I: () => j,
    Jo: () => R,
    T0: () => S,
    UY: () => O,
    U_: () => H,
    VL: () => M,
    Yq: () => D,
    m: () => y,
    r4: () => w,
    ri: () => U,
    yp: () => B,
}),
    n(938796);
var i = n(627968),
    l = n(64700),
    s = n(621466),
    r = n(665260),
    a = n(442433),
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
    x = n(723702),
    f = n(427262),
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
            let s = `@${f.Ay.getUserTag(l, { decoration: "never" })}`,
                r = `<@${e}>`;
            A._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, { plainText: s, rawText: r }), d.A.startTyping(t);
        },
        [e, t, n],
    );
}
function y(e, t, n, i) {
    let l = b("usernameProfile", n, i);
    return T(e.author.id, t.id, l);
}
function N(e, t, n, i) {
    let l = b("referencedUsernameProfile", n, i);
    return T(e?.author.id, t.id, l);
}
function S(e, t, n, i) {
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
function D(e, t) {
    return L(b("interactionAvatarProfile", e, t));
}
function M(e, t, s, o) {
    let { id: d } = t,
        { id: u, flags: p } = e,
        A = (0, r.Lt)(p, v.pr7.EPHEMERAL),
        f = (0, c.Us)();
    return l.useCallback(
        (e, t) => {
            if (A) return;
            if (!x.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let l = m.A.getChannel(d),
                r = h.A.getMessage(d, u),
                c = _.A.isEditing(d, u);
            null == l ||
                null == r ||
                c ||
                (g.default.track(v.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: d,
                    location: "right_click",
                }),
                s({ contextMenu: !0 }),
                (0, a.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("3795"),
                            n.e("21393"),
                            n.e("91139"),
                            n.e("51432"),
                            n.e("64879"),
                            n.e("95207"),
                            n.e("1636"),
                            n.e("92229"),
                        ]).then(n.bind(n, 547983));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: r, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => s({ contextMenu: !1 }), context: f },
                ));
        },
        [A, d, u, s, f, o],
    );
}
function w(e, t) {
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
                s = m.A.getChannel(t);
            null != l &&
                null != s &&
                (i.stopPropagation(), (0, C.B8)(i, { user: l, channel: s, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function k(e, t) {
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
function B(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        s = n.author.id,
        r = `${t}:${s}`,
        a = l.useRef(i),
        [o, d] = l.useState(i);
    a.current = o || a.current;
    let c = l.useCallback(() => {
            (0, u.cE)(), o || (A._.dispatchKeyed(v.zOV.ANIMATE_CHAT_AVATAR, r, !0), d(!0));
        }, [o, r]),
        m = l.useCallback(() => {
            A._.dispatchKeyed(v.zOV.ANIMATE_CHAT_AVATAR, r, !1), d(!1);
        }, [r]);
    return { hasHovered: a.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: m };
}
function G(e, t) {
    let [n, i] = l.useState(!1),
        [r, a] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                let n = (0, s.BF)(t)?.activeElement ?? null;
                (t.target === t.currentTarget || t.currentTarget.contains(n)) && (a(!0), i(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: l.useCallback(
            (e) => {
                let n = (0, s.BF)(e)?.activeElement ?? null;
                (e.target !== e.currentTarget && e.currentTarget.contains(n)) || i(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: r,
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
