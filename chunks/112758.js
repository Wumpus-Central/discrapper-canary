n.d(t, {
    Am: () => U,
    Ck: () => F,
    G8: () => B,
    Ge: () => M,
    H9: () => b,
    I: () => j,
    Jo: () => L,
    T0: () => y,
    UY: () => k,
    U_: () => H,
    VL: () => P,
    Yq: () => O,
    m: () => S,
    r4: () => D,
    ri: () => w,
    yp: () => G,
}),
    n(938796);
var i = n(627968),
    l = n(64700),
    a = n(621466),
    r = n(665260),
    s = n(442433),
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
    E = n(841549),
    C = n(439147),
    I = n(81437),
    T = n(652215);
function v(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function N(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = p.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let a = `@${x.Ay.getUserTag(l, { decoration: "never" })}`,
                r = `<@${e}>`;
            A._.dispatchToLastSubscribed(T.jej.INSERT_TEXT, { plainText: a, rawText: r }), d.A.startTyping(t);
        },
        [e, t, n],
    );
}
function S(e, t, n, i) {
    let l = v("usernameProfile", n, i);
    return N(e.author.id, t.id, l);
}
function b(e, t, n, i) {
    let l = v("referencedUsernameProfile", n, i);
    return N(e?.author.id, t.id, l);
}
function y(e, t, n, i) {
    let l = v("interactionUsernameProfile", n, i);
    return N(e?.user.id, t.id, l);
}
function j(e, t, n, i) {
    let l = v("referencedUsernameProfile", n, i);
    return N(e, t.id, l);
}
function R(e) {
    return l.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function L(e, t) {
    return R(v("avatarProfile", e, t));
}
function M(e, t) {
    return R(v("referencedAvatarProfile", e, t));
}
function O(e, t) {
    return R(v("interactionAvatarProfile", e, t));
}
function P(e, t, a, o) {
    let { id: d } = t,
        { id: u, flags: p } = e,
        A = (0, r.Lt)(p, T.pr7.EPHEMERAL),
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
                r = h.A.getMessage(d, u),
                c = _.A.isEditing(d, u);
            null == l ||
                null == r ||
                c ||
                (g.default.track(T.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: d,
                    location: "right_click",
                }),
                a({ contextMenu: !0 }),
                (0, s.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("24202"),
                            n.e("6502"),
                            n.e("1636"),
                            n.e("31807"),
                        ]).then(n.bind(n, 547983));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: r, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => a({ contextMenu: !1 }), context: x },
                ));
        },
        [A, d, u, a, x, o],
    );
}
function D(e, t) {
    return l.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                l = m.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, E.wQ)(n, i, l));
        },
        [e, t],
    );
}
function k(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = p.default.getUser(e),
                a = m.A.getChannel(t);
            null != l &&
                null != a &&
                (i.stopPropagation(), (0, E.B8)(i, { user: l, channel: a, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function U(e, t) {
    return l.useCallback(
        (n) => {
            let i = p.default.getUser(e),
                l = m.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, E.pB)(n, i, l.guild_id));
        },
        [e, t],
    );
}
function w(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return l.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, C.A)(i, n));
        },
        [i, n],
    );
}
function G(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        a = n.author.id,
        r = `${t}:${a}`,
        s = l.useRef(i),
        [o, d] = l.useState(i);
    s.current = o || s.current;
    let c = l.useCallback(() => {
            (0, u.cE)(), o || (A._.dispatchKeyed(T.zOV.ANIMATE_CHAT_AVATAR, r, !0), d(!0));
        }, [o, r]),
        m = l.useCallback(() => {
            A._.dispatchKeyed(T.zOV.ANIMATE_CHAT_AVATAR, r, !1), d(!1);
        }, [r]);
    return { hasHovered: s.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: m };
}
function B(e, t) {
    let [n, i] = l.useState(!1),
        [r, s] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                let n = (0, a.BF)(t)?.activeElement ?? null;
                (t.target === t.currentTarget || t.currentTarget.contains(n)) && (s(!0), i(!0)), null != e && e(t);
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
    let n = v("interactionData", e, t);
    return l.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
