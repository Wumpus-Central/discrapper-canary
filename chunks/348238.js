n.d(t, {
    $3: () => K,
    Go: () => H,
    JC: () => M,
    NU: () => G,
    Nk: () => L,
    R9: () => k,
    RN: () => F,
    Wl: () => x,
    XO: () => D,
    Xn: () => z,
    bb: () => W,
    qo: () => B,
    rY: () => U,
    sR: () => V,
    tn: () => Y,
    wq: () => Z,
}),
    n(997841),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(374470),
    o = n(239091),
    s = n(904245),
    l = n(144144),
    c = n(728285),
    u = n(992970),
    d = n(287941),
    f = n(235894),
    _ = n(675478),
    p = n(592125),
    h = n(323873),
    m = n(375954),
    g = n(594174),
    E = n(585483),
    b = n(630388),
    y = n(358085),
    O = n(51144),
    v = n(91047),
    I = n(50284),
    T = n(804063),
    S = n(981631);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function w(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = g.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let a = "@".concat(O.ZP.getUserTag(i, { decoration: "never" })),
                o = "<@".concat(e, ">");
            E.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: o,
            }),
                l.Z.startTyping(t);
        },
        [e, t, n],
    );
}
function D(e, t, n, r) {
    let i = P("usernameProfile", n, r);
    return w(e.author.id, t.id, i);
}
function x(e, t, n, r) {
    let i = P("referencedUsernameProfile", n, r);
    return w(null == e ? void 0 : e.author.id, t.id, i);
}
function L(e, t, n, r) {
    let i = P("interactionUsernameProfile", n, r);
    return w(null == e ? void 0 : e.user.id, t.id, i);
}
function M(e, t, n, r) {
    let i = P("referencedUsernameProfile", n, r);
    return w(e, t.id, i);
}
function j(e) {
    return i.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function k(e, t) {
    return j(P("avatarProfile", e, t));
}
function U(e, t) {
    return j(P("referencedAvatarProfile", e, t));
}
function G(e, t) {
    return j(P("interactionAvatarProfile", e, t));
}
function B(e, t, a, s) {
    let { id: l } = t,
        { id: u, flags: d } = e,
        f = (0, b.yE)(d, S.iLy.EPHEMERAL),
        _ = (0, c.bp)();
    return i.useCallback(
        (e, t) => {
            if (f) return;
            if (!y.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = p.Z.getChannel(l),
                c = m.Z.getMessage(l, u),
                d = h.Z.isEditing(l, u);
            null == i ||
                null == c ||
                d ||
                (a({ contextMenu: !0 }),
                (0, o.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("93375"),
                            n.e("38342"),
                            n.e("37220"),
                            n.e("26503"),
                            n.e("73826"),
                        ]).then(n.bind(n, 225138));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                R(C({}, n), {
                                    message: c,
                                    channel: i,
                                    mediaItem: t,
                                    shouldHideMediaOptions: s,
                                }),
                            );
                    },
                    {
                        onClose: () => a({ contextMenu: !1 }),
                        context: _,
                    },
                ));
        },
        [f, l, u, a, _, s],
    );
}
function Z(e, t) {
    return i.useCallback(
        (n) => {
            let r = g.default.getUser(e),
                i = p.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, v.Pv)(n, r, i));
        },
        [e, t],
    );
}
function F(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = g.default.getUser(e),
                a = p.Z.getChannel(t);
            null != i &&
                null != a &&
                (r.stopPropagation(),
                (0, v._j)(r, {
                    user: i,
                    channel: a,
                    moderationAlertId: n,
                }));
        },
        [e, t, n],
    );
}
function V(e, t) {
    return i.useCallback(
        (n) => {
            let r = g.default.getUser(e),
                i = p.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, v.xS)(n, r, i.guild_id));
        },
        [e, t],
    );
}
function H(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, I.Z)(r, n));
        },
        [r, n],
    );
}
function Y(e) {
    let { groupId: t, message: n, defaultValue: r, popouts: a } = e,
        o = n.author.id,
        s = "".concat(t, ":").concat(o),
        l = i.useRef(r),
        c = q(n, a),
        [u, d] = i.useState(r);
    l.current = u || l.current;
    let f = i.useCallback(
            (e) => {
                (0, _.T6)(), u || (E.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, s, !0), c(e), d(!0));
            },
            [u, s, c],
        ),
        p = i.useCallback(() => {
            E.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, s, !1), d(!1);
        }, [s]);
    return {
        hasHovered: l.current,
        isHovered: u,
        handleMouseEnter: f,
        handleMouseLeave: p,
    };
}
function W(e, t) {
    let [n, r] = i.useState(!1),
        [o, s] = i.useState(!1);
    return {
        handleFocus: i.useCallback(
            (t) => {
                var n, i;
                let o = null != (i = null == (n = (0, a.uB)(t)) ? void 0 : n.activeElement) ? i : null;
                (t.target === t.currentTarget || t.currentTarget.contains(o)) && (s(!0), r(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: i.useCallback(
            (e) => {
                var n, i;
                let o = null != (i = null == (n = (0, a.uB)(e)) ? void 0 : n.activeElement) ? i : null;
                (e.target !== e.currentTarget && e.currentTarget.contains(o)) || r(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: o,
    };
}
function K(e, t) {
    return i.useCallback(() => {
        let { messageReference: n } = e;
        (null == t || (0, T.Z)(t)) &&
            s.Z.jumpToMessage({
                channelId: n.channel_id,
                messageId: n.message_id,
                flash: !0,
                returnMessageId: e.id,
            });
    }, [t, e]);
}
function z(e, t) {
    let n = P("interactionData", e, t);
    return i.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
function q(e, t) {
    return i.useCallback(
        (n) => {
            if (null == n || !(n.nativeEvent instanceof MouseEvent) || Object.values(t).some((e) => e)) return;
            let r = n.target;
            if ((0, f.Uw)(e)) {
                let { x: t, y: n, width: i, height: a } = r.getBoundingClientRect();
                (0, d.Z)(
                    e,
                    {
                        x: t,
                        y: n,
                        w: i,
                        h: a,
                    },
                    !1,
                    u.LL.UserTriggered,
                );
            }
        },
        [e, t],
    );
}
