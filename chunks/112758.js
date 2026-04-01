n.d(t, {
    Am: () => O,
    Ck: () => F,
    G8: () => G,
    Ge: () => P,
    H9: () => S,
    I: () => j,
    Jo: () => R,
    T0: () => N,
    UY: () => k,
    U_: () => H,
    VL: () => M,
    Yq: () => w,
    m: () => y,
    r4: () => D,
    ri: () => U,
    yp: () => B,
}),
    n(938796);
var i = n(627968),
    a = n(64700),
    r = n(621466),
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
    I = n(439147),
    E = n(81437),
    b = n(652215);
function v(e, t, n) {
    return a.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function T(e, t, n) {
    return a.useCallback(
        (i) => {
            let a = p.default.getUser(e);
            if (null == a) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let r = `@${f.Ay.getUserTag(a, { decoration: "never" })}`,
                l = `<@${e}>`;
            A._.dispatchToLastSubscribed(b.jej.INSERT_TEXT, { plainText: r, rawText: l }), d.A.startTyping(t);
        },
        [e, t, n],
    );
}
function y(e, t, n, i) {
    let a = v("usernameProfile", n, i);
    return T(e.author.id, t.id, a);
}
function S(e, t, n, i) {
    let a = v("referencedUsernameProfile", n, i);
    return T(e?.author.id, t.id, a);
}
function N(e, t, n, i) {
    let a = v("interactionUsernameProfile", n, i);
    return T(e?.user.id, t.id, a);
}
function j(e, t, n, i) {
    let a = v("referencedUsernameProfile", n, i);
    return T(e, t.id, a);
}
function L(e) {
    return a.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function R(e, t) {
    return L(v("avatarProfile", e, t));
}
function P(e, t) {
    return L(v("referencedAvatarProfile", e, t));
}
function w(e, t) {
    return L(v("interactionAvatarProfile", e, t));
}
function M(e, t, r, o) {
    let { id: d } = t,
        { id: u, flags: p } = e,
        A = (0, l.Lt)(p, b.pr7.EPHEMERAL),
        f = (0, c.Us)();
    return a.useCallback(
        (e, t) => {
            if (A) return;
            if (!x.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let a = _.A.getChannel(d),
                l = h.A.getMessage(d, u),
                c = m.A.isEditing(d, u);
            null == a ||
                null == l ||
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
                            n.e("11478"),
                            n.e("84609"),
                            n.e("76122"),
                            n.e("79463"),
                            n.e("54816"),
                            n.e("11902"),
                            n.e("1636"),
                            n.e("35689"),
                        ]).then(n.bind(n, 547983));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: l, channel: a, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => r({ contextMenu: !1 }), context: f },
                ));
        },
        [A, d, u, r, f, o],
    );
}
function D(e, t) {
    return a.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                a = _.A.getChannel(t);
            null != i && null != a && (n.stopPropagation(), (0, C.wQ)(n, i, a));
        },
        [e, t],
    );
}
function k(e, t, n) {
    return a.useCallback(
        (i) => {
            let a = p.default.getUser(e),
                r = _.A.getChannel(t);
            null != a &&
                null != r &&
                (i.stopPropagation(), (0, C.B8)(i, { user: a, channel: r, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function O(e, t) {
    return a.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                a = _.A.getChannel(t);
            null != i && null != a && (n.stopPropagation(), (0, C.pB)(n, i, a.guild_id));
        },
        [e, t],
    );
}
function U(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return a.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, I.A)(i, n));
        },
        [i, n],
    );
}
function B(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        r = n.author.id,
        l = `${t}:${r}`,
        s = a.useRef(i),
        [o, d] = a.useState(i);
    s.current = o || s.current;
    let c = a.useCallback(() => {
            (0, u.cE)(), o || (A._.dispatchKeyed(b.zOV.ANIMATE_CHAT_AVATAR, l, !0), d(!0));
        }, [o, l]),
        _ = a.useCallback(() => {
            A._.dispatchKeyed(b.zOV.ANIMATE_CHAT_AVATAR, l, !1), d(!1);
        }, [l]);
    return { hasHovered: s.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: _ };
}
function G(e, t) {
    let [n, i] = a.useState(!1),
        [l, s] = a.useState(!1);
    return {
        handleFocus: a.useCallback(
            (t) => {
                let n = (0, r.BF)(t)?.activeElement ?? null;
                (t.target === t.currentTarget || t.currentTarget.contains(n)) && (s(!0), i(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: a.useCallback(
            (e) => {
                let n = (0, r.BF)(e)?.activeElement ?? null;
                (e.target !== e.currentTarget && e.currentTarget.contains(n)) || i(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: l,
    };
}
function F(e, t) {
    return a.useCallback(() => {
        let { messageReference: n } = e,
            i = () => {
                o.A.jumpToMessage({
                    channelId: n.channel_id,
                    messageId: n.message_id,
                    flash: !0,
                    returnMessageId: e.id,
                });
            };
        (null == t || (0, E.A)(t, i)) && i();
    }, [t, e]);
}
function H(e, t) {
    let n = v("interactionData", e, t);
    return a.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
