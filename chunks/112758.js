n.d(t, {
    Am: () => O,
    Ck: () => B,
    G8: () => V,
    Ge: () => k,
    H9: () => T,
    I: () => b,
    Jo: () => R,
    T0: () => S,
    UY: () => D,
    U_: () => H,
    VL: () => P,
    Yq: () => M,
    m: () => y,
    r4: () => w,
    ri: () => U,
    yp: () => G,
}),
    n(938796);
var i = n(627968),
    l = n(64700),
    s = n(621466),
    r = n(665260),
    a = n(442433),
    o = n(720149),
    d = n(414798),
    c = n(267102),
    u = n(594061),
    m = n(734057),
    h = n(580745),
    g = n(232835),
    p = n(287809),
    A = n(174459),
    x = n(625494),
    f = n(723702),
    E = n(427262),
    C = n(841549),
    I = n(439147),
    v = n(81437),
    _ = n(652215);
function j(e, t, n) {
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
            let s = `@${E.Ay.getUserTag(l, { decoration: "never" })}`,
                r = `<@${e}>`;
            x._.dispatchToLastSubscribed(_.jej.INSERT_TEXT, { plainText: s, rawText: r }), d.A.startTyping(t);
        },
        [e, t, n],
    );
}
function y(e, t, n, i) {
    let l = j("usernameProfile", n, i);
    return N(e.author.id, t.id, l);
}
function T(e, t, n, i) {
    let l = j("referencedUsernameProfile", n, i);
    return N(e?.author.id, t.id, l);
}
function S(e, t, n, i) {
    let l = j("interactionUsernameProfile", n, i);
    return N(e?.user.id, t.id, l);
}
function b(e, t, n, i) {
    let l = j("referencedUsernameProfile", n, i);
    return N(e, t.id, l);
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
    return L(j("avatarProfile", e, t));
}
function k(e, t) {
    return L(j("referencedAvatarProfile", e, t));
}
function M(e, t) {
    return L(j("interactionAvatarProfile", e, t));
}
function P(e, t, s, o) {
    let { id: d } = t,
        { id: u, flags: p } = e,
        x = (0, r.Lt)(p, _.pr7.EPHEMERAL),
        E = (0, c.Us)();
    return l.useCallback(
        (e, t) => {
            if (x) return;
            if (!f.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let l = m.A.getChannel(d),
                r = g.A.getMessage(d, u),
                c = h.A.isEditing(d, u);
            null == l ||
                null == r ||
                c ||
                (A.default.track(_.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: d,
                    location: "right_click",
                }),
                s({ contextMenu: !0 }),
                (0, a.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("74389"),
                            n.e("80203"),
                            n.e("685"),
                            n.e("43908"),
                            n.e("5007"),
                            n.e("93110"),
                            n.e("79924"),
                            n.e("31227"),
                            n.e("54266"),
                            n.e("45550"),
                            n.e("18556"),
                            n.e("54531"),
                            n.e("14399"),
                            n.e("28951"),
                            n.e("72228"),
                            n.e("9023"),
                            n.e("73953"),
                            n.e("34552"),
                            n.e("93103"),
                            n.e("71210"),
                            n.e("88342"),
                            n.e("42451"),
                            n.e("98965"),
                            n.e("35313"),
                            n.e("36564"),
                            n.e("52229"),
                            n.e("3998"),
                            n.e("5557"),
                            n.e("95340"),
                            n.e("62718"),
                            n.e("56753"),
                            n.e("61268"),
                            n.e("91671"),
                            n.e("92295"),
                            n.e("58273"),
                            n.e("20930"),
                            n.e("26001"),
                            n.e("14591"),
                            n.e("52111"),
                            n.e("57458"),
                            n.e("59466"),
                            n.e("75133"),
                            n.e("42204"),
                            n.e("96804"),
                            n.e("28850"),
                            n.e("95998"),
                            n.e("78195"),
                            n.e("81189"),
                            n.e("203"),
                            n.e("4774"),
                            n.e("49629"),
                            n.e("78601"),
                            n.e("80407"),
                            n.e("21455"),
                            n.e("74021"),
                            n.e("13708"),
                            n.e("967"),
                            n.e("47018"),
                            n.e("6809"),
                            n.e("2329"),
                            n.e("49333"),
                            n.e("96268"),
                            n.e("77333"),
                            n.e("49490"),
                            n.e("44801"),
                            n.e("46149"),
                            n.e("84820"),
                            n.e("93907"),
                            n.e("60249"),
                            n.e("10014"),
                            n.e("10142"),
                            n.e("44912"),
                            n.e("11802"),
                            n.e("36674"),
                            n.e("7548"),
                            n.e("39735"),
                            n.e("59617"),
                            n.e("95841"),
                            n.e("10823"),
                            n.e("96680"),
                            n.e("97116"),
                            n.e("63874"),
                            n.e("53203"),
                            n.e("33416"),
                            n.e("39353"),
                            n.e("84783"),
                            n.e("18792"),
                            n.e("15799"),
                            n.e("69167"),
                            n.e("27687"),
                            n.e("12663"),
                            n.e("81754"),
                            n.e("3581"),
                        ]).then(n.bind(n, 720882));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: r, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => s({ contextMenu: !1 }), context: E },
                ));
        },
        [x, d, u, s, E, o],
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
function D(e, t, n) {
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
function O(e, t) {
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
            e.altKey && (e.preventDefault(), (0, I.A)(i, n));
        },
        [i, n],
    );
}
function G(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        s = n.author.id,
        r = `${t}:${s}`,
        a = l.useRef(i),
        [o, d] = l.useState(i);
    a.current = o || a.current;
    let c = l.useCallback(() => {
            (0, u.cE)(), o || (x._.dispatchKeyed(_.zOV.ANIMATE_CHAT_AVATAR, r, !0), d(!0));
        }, [o, r]),
        m = l.useCallback(() => {
            x._.dispatchKeyed(_.zOV.ANIMATE_CHAT_AVATAR, r, !1), d(!1);
        }, [r]);
    return { hasHovered: a.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: m };
}
function V(e, t) {
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
function B(e, t) {
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
        (null == t || (0, v.A)(t, i)) && i();
    }, [t, e]);
}
function H(e, t) {
    let n = j("interactionData", e, t);
    return l.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
