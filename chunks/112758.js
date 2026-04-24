n.d(t, {
    Am: () => O,
    Ck: () => V,
    G8: () => B,
    Ge: () => R,
    H9: () => j,
    I: () => S,
    Jo: () => L,
    T0: () => N,
    UY: () => M,
    U_: () => F,
    VL: () => P,
    Yq: () => w,
    m: () => T,
    r4: () => D,
    ri: () => U,
    yp: () => G,
}),
    n(938796);
var i = n(627968),
    l = n(64700),
    a = n(621466),
    r = n(665260),
    s = n(442433),
    o = n(720149),
    c = n(414798),
    d = n(267102),
    u = n(594061),
    _ = n(734057),
    m = n(580745),
    h = n(232835),
    p = n(287809),
    g = n(954571),
    f = n(625494),
    x = n(723702),
    A = n(427262),
    C = n(841549),
    v = n(439147),
    I = n(81437),
    E = n(652215);
function b(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function y(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = p.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let a = `@${A.Ay.getUserTag(l, { decoration: "never" })}`,
                r = `<@${e}>`;
            f._.dispatchToLastSubscribed(E.jej.INSERT_TEXT, { plainText: a, rawText: r }), c.A.startTyping(t);
        },
        [e, t, n],
    );
}
function T(e, t, n, i) {
    let l = b("usernameProfile", n, i);
    return y(e.author.id, t.id, l);
}
function j(e, t, n, i) {
    let l = b("referencedUsernameProfile", n, i);
    return y(e?.author.id, t.id, l);
}
function N(e, t, n, i) {
    let l = b("interactionUsernameProfile", n, i);
    return y(e?.user.id, t.id, l);
}
function S(e, t, n, i) {
    let l = b("referencedUsernameProfile", n, i);
    return y(e, t.id, l);
}
function k(e) {
    return l.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function L(e, t) {
    return k(b("avatarProfile", e, t));
}
function R(e, t) {
    return k(b("referencedAvatarProfile", e, t));
}
function w(e, t) {
    return k(b("interactionAvatarProfile", e, t));
}
function P(e, t, a, o) {
    let { id: c } = t,
        { id: u, flags: p } = e,
        f = (0, r.Lt)(p, E.pr7.EPHEMERAL),
        A = (0, d.Us)();
    return l.useCallback(
        (e, t) => {
            if (f) return;
            if (!x.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let l = _.A.getChannel(c),
                r = h.A.getMessage(c, u),
                d = m.A.isEditing(c, u);
            null == l ||
                null == r ||
                d ||
                (g.default.track(E.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: c,
                    location: "right_click",
                }),
                a({ contextMenu: !0 }),
                (0, s.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("93103"),
                            n.e("88342"),
                            n.e("35313"),
                            n.e("62718"),
                            n.e("24170"),
                            n.e("29594"),
                            n.e("7637"),
                            n.e("44647"),
                            n.e("25657"),
                            n.e("62092"),
                            n.e("98970"),
                            n.e("91139"),
                            n.e("47568"),
                            n.e("26297"),
                            n.e("96234"),
                            n.e("44348"),
                        ]).then(n.bind(n, 783144));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: r, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => a({ contextMenu: !1 }), context: A },
                ));
        },
        [f, c, u, a, A, o],
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
function M(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = p.default.getUser(e),
                a = _.A.getChannel(t);
            null != l &&
                null != a &&
                (i.stopPropagation(), (0, C.B8)(i, { user: l, channel: a, moderationAlertId: n }));
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
            e.altKey && (e.preventDefault(), (0, v.A)(i, n));
        },
        [i, n],
    );
}
function G(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        a = n.author.id,
        r = `${t}:${a}`,
        s = l.useRef(i),
        [o, c] = l.useState(i);
    s.current = o || s.current;
    let d = l.useCallback(() => {
            (0, u.cE)(), o || (f._.dispatchKeyed(E.zOV.ANIMATE_CHAT_AVATAR, r, !0), c(!0));
        }, [o, r]),
        _ = l.useCallback(() => {
            f._.dispatchKeyed(E.zOV.ANIMATE_CHAT_AVATAR, r, !1), c(!1);
        }, [r]);
    return { hasHovered: s.current, isHovered: o, handleMouseEnter: d, handleMouseLeave: _ };
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
function V(e, t) {
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
function F(e, t) {
    let n = b("interactionData", e, t);
    return l.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
