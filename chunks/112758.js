n.d(t, {
    Am: () => O,
    Ck: () => B,
    G8: () => V,
    Ge: () => R,
    H9: () => y,
    I: () => b,
    Jo: () => L,
    T0: () => S,
    UY: () => w,
    U_: () => H,
    VL: () => M,
    Yq: () => P,
    m: () => T,
    r4: () => D,
    ri: () => U,
    yp: () => G,
}),
    n(938796);
var i = n(627968),
    l = n(64700),
    s = n(621466),
    a = n(665260),
    r = n(442433),
    o = n(720149),
    d = n(414798),
    c = n(267102),
    u = n(594061),
    m = n(734057),
    h = n(580745),
    g = n(232835),
    A = n(287809),
    p = n(954571),
    x = n(625494),
    f = n(723702),
    C = n(427262),
    E = n(841549),
    v = n(439147),
    I = n(81437),
    _ = n(652215);
function j(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function N(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = A.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) return void n();
            let s = `@${C.Ay.getUserTag(l, { decoration: "never" })}`,
                a = `<@${e}>`;
            x._.dispatchToLastSubscribed(_.jej.INSERT_TEXT, { plainText: s, rawText: a }), d.A.startTyping(t);
        },
        [e, t, n],
    );
}
function T(e, t, n, i) {
    let l = j("usernameProfile", n, i);
    return N(e.author.id, t.id, l);
}
function y(e, t, n, i) {
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
function k(e) {
    return l.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function L(e, t) {
    return k(j("avatarProfile", e, t));
}
function R(e, t) {
    return k(j("referencedAvatarProfile", e, t));
}
function P(e, t) {
    return k(j("interactionAvatarProfile", e, t));
}
function M(e, t, s, o) {
    let { id: d } = t,
        { id: u, flags: A } = e,
        x = (0, a.Lt)(A, _.pr7.EPHEMERAL),
        C = (0, c.Us)();
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
                a = g.A.getMessage(d, u),
                c = h.A.isEditing(d, u);
            null == l ||
                null == a ||
                c ||
                (p.default.track(_.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: u,
                    channel: d,
                    location: "right_click",
                }),
                s({ contextMenu: !0 }),
                (0, r.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("92652"),
                            n.e("63397"),
                            n.e("6287"),
                            n.e("45229"),
                            n.e("78029"),
                            n.e("81788"),
                            n.e("32101"),
                            n.e("31788"),
                            n.e("19415"),
                            n.e("77044"),
                            n.e("34552"),
                            n.e("55411"),
                            n.e("93103"),
                            n.e("13708"),
                            n.e("91007"),
                            n.e("88342"),
                            n.e("42451"),
                            n.e("98965"),
                            n.e("35313"),
                            n.e("60249"),
                            n.e("36564"),
                            n.e("10014"),
                            n.e("84783"),
                            n.e("33416"),
                            n.e("61268"),
                            n.e("37752"),
                            n.e("3217"),
                            n.e("47678"),
                            n.e("5557"),
                            n.e("52229"),
                            n.e("19871"),
                            n.e("95340"),
                            n.e("62718"),
                            n.e("24170"),
                            n.e("93907"),
                            n.e("3998"),
                            n.e("15188"),
                            n.e("91671"),
                            n.e("58273"),
                            n.e("92295"),
                            n.e("94503"),
                            n.e("20930"),
                            n.e("44801"),
                            n.e("26001"),
                            n.e("14591"),
                            n.e("52111"),
                            n.e("57458"),
                            n.e("42204"),
                            n.e("76413"),
                            n.e("78195"),
                            n.e("3303"),
                            n.e("80945"),
                            n.e("18265"),
                            n.e("96804"),
                            n.e("95998"),
                            n.e("36419"),
                            n.e("28850"),
                            n.e("74021"),
                            n.e("20045"),
                            n.e("967"),
                            n.e("81189"),
                            n.e("47018"),
                            n.e("10520"),
                            n.e("203"),
                            n.e("4774"),
                            n.e("49629"),
                            n.e("78601"),
                            n.e("80407"),
                            n.e("47057"),
                            n.e("31638"),
                            n.e("64072"),
                            n.e("6809"),
                            n.e("2329"),
                            n.e("49333"),
                            n.e("65065"),
                            n.e("84820"),
                            n.e("49490"),
                            n.e("10142"),
                            n.e("44912"),
                            n.e("18792"),
                            n.e("36674"),
                            n.e("61099"),
                            n.e("4551"),
                            n.e("59791"),
                            n.e("96680"),
                            n.e("83799"),
                            n.e("63874"),
                            n.e("68214"),
                            n.e("98425"),
                            n.e("33973"),
                            n.e("91139"),
                            n.e("25660"),
                            n.e("95841"),
                            n.e("37801"),
                            n.e("53203"),
                            n.e("39353"),
                            n.e("46149"),
                            n.e("2098"),
                            n.e("17810"),
                            n.e("21750"),
                            n.e("48725"),
                            n.e("97116"),
                            n.e("91708"),
                            n.e("6996"),
                            n.e("6339"),
                            n.e("57856"),
                            n.e("28916"),
                            n.e("6699"),
                            n.e("30066"),
                            n.e("27687"),
                            n.e("10711"),
                            n.e("59373"),
                            n.e("69257"),
                        ]).then(n.bind(n, 783144));
                        return (n) =>
                            (0, i.jsx)(e, { ...n, message: a, channel: l, mediaItem: t, shouldHideMediaOptions: o });
                    },
                    { onClose: () => s({ contextMenu: !1 }), context: C },
                ));
        },
        [x, d, u, s, C, o],
    );
}
function D(e, t) {
    return l.useCallback(
        (n) => {
            let i = A.default.getUser(e),
                l = m.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, E.wQ)(n, i, l));
        },
        [e, t],
    );
}
function w(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = A.default.getUser(e),
                s = m.A.getChannel(t);
            null != l &&
                null != s &&
                (i.stopPropagation(), (0, E.B8)(i, { user: l, channel: s, moderationAlertId: n }));
        },
        [e, t, n],
    );
}
function O(e, t) {
    return l.useCallback(
        (n) => {
            let i = A.default.getUser(e),
                l = m.A.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, E.pB)(n, i, l.guild_id));
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
        s = n.author.id,
        a = `${t}:${s}`,
        r = l.useRef(i),
        [o, d] = l.useState(i);
    r.current = o || r.current;
    let c = l.useCallback(() => {
            (0, u.cE)(), o || (x._.dispatchKeyed(_.zOV.ANIMATE_CHAT_AVATAR, a, !0), d(!0));
        }, [o, a]),
        m = l.useCallback(() => {
            x._.dispatchKeyed(_.zOV.ANIMATE_CHAT_AVATAR, a, !1), d(!1);
        }, [a]);
    return { hasHovered: r.current, isHovered: o, handleMouseEnter: c, handleMouseLeave: m };
}
function V(e, t) {
    let [n, i] = l.useState(!1),
        [a, r] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                let n = (0, s.BF)(t)?.activeElement ?? null;
                (t.target === t.currentTarget || t.currentTarget.contains(n)) && (r(!0), i(!0)), null != e && e(t);
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
        hasFocused: a,
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
        (null == t || (0, I.A)(t, i)) && i();
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
