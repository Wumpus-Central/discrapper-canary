n.d(t, {
    Am: () => O,
    Ck: () => F,
    G8: () => B,
    Ge: () => P,
    H9: () => y,
    I: () => j,
    Jo: () => R,
    T0: () => N,
    UY: () => k,
    U_: () => H,
    VL: () => w,
    Yq: () => M,
    m: () => S,
    r4: () => D,
    ri: () => U,
    yp: () => G,
}),
    n(938796);
var i = n(627968),
    l = n(64700),
    r = n(621466),
    a = n(665260),
    s = n(442433),
    o = n(843472),
    d = n(414798),
    c = n(267102),
    u = n(594061),
    _ = n(734057),
    m = n(580745),
    h = n(320501),
    p = n(287809),
    g = n(954571),
    A = n(203982),
    x = n(723702),
    f = n(427262),
    C = n(841549),
    E = n(439147),
    I = n(81437),
    b = n(652215);
function T(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function v(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = p.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let r = `@${f.Ay.getUserTag(l, { decoration: "never" })}`,
                a = `<@${e}>`;
            A._.dispatchToLastSubscribed(b.jej.INSERT_TEXT, { plainText: r, rawText: a }), d.A.startTyping(t);
        },
        [e, t, n],
    );
}
function S(e, t, n, i) {
    let l = T("usernameProfile", n, i);
    return v(e.author.id, t.id, l);
}
function y(e, t, n, i) {
    let l = T("referencedUsernameProfile", n, i);
    return v(e?.author.id, t.id, l);
}
function N(e, t, n, i) {
    let l = T("interactionUsernameProfile", n, i);
    return v(e?.user.id, t.id, l);
}
function j(e, t, n, i) {
    let l = T("referencedUsernameProfile", n, i);
    return v(e, t.id, l);
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
    return L(T("avatarProfile", e, t));
}
function P(e, t) {
    return L(T("referencedAvatarProfile", e, t));
}
function M(e, t) {
    return L(T("interactionAvatarProfile", e, t));
}
function w(e, t, r, o) {
    let { id: d } = t,
        { id: u, flags: p } = e,
        A = (0, a.Lt)(p, b.pr7.EPHEMERAL),
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
            let l = _.A.getChannel(d),
                a = h.A.getMessage(d, u),
                c = m.A.isEditing(d, u);
            null == l ||
                null == a ||
                c ||
                (g.default.track(b.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: d,
                    location: "right_click",
                }),
                r({ contextMenu: !0 }),
                (0, s.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("3795"),
                            n.e("3183"),
                            n.e("53890"),
                            n.e("24202"),
                            n.e("73368"),
                            n.e("5873"),
                            n.e("1636"),
                            n.e("79652"),
                        ]).then(n.bind(n, 547983));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: a, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => r({ contextMenu: !1 }), context: f },
                ));
        },
        [A, d, u, r, f, o],
    );
}
function D(e, t) {
    return l.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                l = _.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, C.wQ)(n, i, l));
        },
        [e, t],
    );
}
function k(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = p.default.getUser(e),
                r = _.A.getChannel(t);
            null != l &&
                null != r &&
                (i.stopPropagation(), (0, C.B8)(i, { user: l, channel: r, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function O(e, t) {
    return l.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                l = _.A.getChannel(t);
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
        r = n.author.id,
        a = `${t}:${r}`,
        s = l.useRef(i),
        [o, d] = l.useState(i);
    s.current = o || s.current;
    let c = l.useCallback(() => {
            (0, u.cE)(), o || (A._.dispatchKeyed(b.zOV.ANIMATE_CHAT_AVATAR, a, !0), d(!0));
        }, [o, a]),
        _ = l.useCallback(() => {
            A._.dispatchKeyed(b.zOV.ANIMATE_CHAT_AVATAR, a, !1), d(!1);
        }, [a]);
    return { hasHovered: s.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: _ };
}
function B(e, t) {
    let [n, i] = l.useState(!1),
        [a, s] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                let n = (0, r.BF)(t)?.activeElement ?? null;
                (t.target === t.currentTarget || t.currentTarget.contains(n)) && (s(!0), i(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: l.useCallback(
            (e) => {
                let n = (0, r.BF)(e)?.activeElement ?? null;
                (e.target !== e.currentTarget && e.currentTarget.contains(n)) || i(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: a,
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
    let n = T("interactionData", e, t);
    return l.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
