n.d(t, {
    Am: () => k,
    Ck: () => F,
    G8: () => B,
    Ge: () => P,
    H9: () => y,
    I: () => j,
    Jo: () => R,
    T0: () => N,
    UY: () => w,
    U_: () => H,
    VL: () => O,
    Yq: () => M,
    m: () => S,
    r4: () => D,
    ri: () => U,
    yp: () => G,
}),
    n(938796);
var i = n(627968),
    r = n(64700),
    a = n(621466),
    l = n(665260),
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
    return r.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function v(e, t, n) {
    return r.useCallback(
        (i) => {
            let r = p.default.getUser(e);
            if (null == r) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let a = `@${f.Ay.getUserTag(r, { decoration: "never" })}`,
                l = `<@${e}>`;
            A._.dispatchToLastSubscribed(b.jej.INSERT_TEXT, { plainText: a, rawText: l }), d.A.startTyping(t);
        },
        [e, t, n],
    );
}
function S(e, t, n, i) {
    let r = T("usernameProfile", n, i);
    return v(e.author.id, t.id, r);
}
function y(e, t, n, i) {
    let r = T("referencedUsernameProfile", n, i);
    return v(e?.author.id, t.id, r);
}
function N(e, t, n, i) {
    let r = T("interactionUsernameProfile", n, i);
    return v(e?.user.id, t.id, r);
}
function j(e, t, n, i) {
    let r = T("referencedUsernameProfile", n, i);
    return v(e, t.id, r);
}
function L(e) {
    return r.useCallback(
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
function O(e, t, a, o) {
    let { id: d } = t,
        { id: u, flags: p } = e,
        A = (0, l.Lt)(p, b.pr7.EPHEMERAL),
        f = (0, c.Us)();
    return r.useCallback(
        (e, t) => {
            if (A) return;
            if (!x.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let r = _.A.getChannel(d),
                l = h.A.getMessage(d, u),
                c = m.A.isEditing(d, u);
            null == r ||
                null == l ||
                c ||
                (g.default.track(b.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: d,
                    location: "right_click",
                }),
                a({ contextMenu: !0 }),
                (0, s.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("3795"),
                            n.e("3183"),
                            n.e("91991"),
                            n.e("24202"),
                            n.e("21597"),
                            n.e("5873"),
                            n.e("1636"),
                            n.e("24172"),
                        ]).then(n.bind(n, 547983));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: l, channel: r, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => a({ contextMenu: !1 }), context: f },
                ));
        },
        [A, d, u, a, f, o],
    );
}
function D(e, t) {
    return r.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                r = _.A.getChannel(t);
            null != i && null != r && (n.stopPropagation(), (0, C.wQ)(n, i, r));
        },
        [e, t],
    );
}
function w(e, t, n) {
    return r.useCallback(
        (i) => {
            let r = p.default.getUser(e),
                a = _.A.getChannel(t);
            null != r &&
                null != a &&
                (i.stopPropagation(), (0, C.B8)(i, { user: r, channel: a, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function k(e, t) {
    return r.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                r = _.A.getChannel(t);
            null != i && null != r && (n.stopPropagation(), (0, C.pB)(n, i, r.guild_id));
        },
        [e, t],
    );
}
function U(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return r.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, E.A)(i, n));
        },
        [i, n],
    );
}
function G(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        a = n.author.id,
        l = `${t}:${a}`,
        s = r.useRef(i),
        [o, d] = r.useState(i);
    s.current = o || s.current;
    let c = r.useCallback(() => {
            (0, u.cE)(), o || (A._.dispatchKeyed(b.zOV.ANIMATE_CHAT_AVATAR, l, !0), d(!0));
        }, [o, l]),
        _ = r.useCallback(() => {
            A._.dispatchKeyed(b.zOV.ANIMATE_CHAT_AVATAR, l, !1), d(!1);
        }, [l]);
    return { hasHovered: s.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: _ };
}
function B(e, t) {
    let [n, i] = r.useState(!1),
        [l, s] = r.useState(!1);
    return {
        handleFocus: r.useCallback(
            (t) => {
                let n = (0, a.BF)(t)?.activeElement ?? null;
                (t.target === t.currentTarget || t.currentTarget.contains(n)) && (s(!0), i(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: r.useCallback(
            (e) => {
                let n = (0, a.BF)(e)?.activeElement ?? null;
                (e.target !== e.currentTarget && e.currentTarget.contains(n)) || i(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: l,
    };
}
function F(e, t) {
    return r.useCallback(() => {
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
    return r.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
