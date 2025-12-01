n.d(t, {
    $3: () => K,
    Go: () => H,
    JC: () => j,
    NU: () => G,
    Nk: () => L,
    R9: () => k,
    RN: () => F,
    Wl: () => x,
    XO: () => D,
    Xn: () => z,
    bb: () => W,
    qo: () => Z,
    rY: () => U,
    sR: () => V,
    tn: () => Y,
    wq: () => B,
}),
    n(997841),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(374470),
    o = n(95015),
    s = n(239091),
    l = n(904245),
    c = n(144144),
    u = n(728285),
    d = n(992970),
    f = n(287941),
    p = n(235894),
    _ = n(675478),
    m = n(592125),
    h = n(323873),
    g = n(375954),
    E = n(594174),
    b = n(585483),
    y = n(358085),
    O = n(51144),
    v = n(91047),
    S = n(50284),
    I = n(804063),
    T = n(981631);
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
function P(e, t) {
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
function R(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function w(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = E.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let a = "@".concat(O.ZP.getUserTag(i, { decoration: "never" })),
                o = "<@".concat(e, ">");
            b.S.dispatchToLastSubscribed(T.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: o,
            }),
                c.Z.startTyping(t);
        },
        [e, t, n],
    );
}
function D(e, t, n, r) {
    let i = R("usernameProfile", n, r);
    return w(e.author.id, t.id, i);
}
function x(e, t, n, r) {
    let i = R("referencedUsernameProfile", n, r);
    return w(null == e ? void 0 : e.author.id, t.id, i);
}
function L(e, t, n, r) {
    let i = R("interactionUsernameProfile", n, r);
    return w(null == e ? void 0 : e.user.id, t.id, i);
}
function j(e, t, n, r) {
    let i = R("referencedUsernameProfile", n, r);
    return w(e, t.id, i);
}
function M(e) {
    return i.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function k(e, t) {
    return M(R("avatarProfile", e, t));
}
function U(e, t) {
    return M(R("referencedAvatarProfile", e, t));
}
function G(e, t) {
    return M(R("interactionAvatarProfile", e, t));
}
function Z(e, t, a, l) {
    let { id: c } = t,
        { id: d, flags: f } = e,
        p = (0, o.yE)(f, T.iLy.EPHEMERAL),
        _ = (0, u.bp)();
    return i.useCallback(
        (e, t) => {
            if (p) return;
            if (!y.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = m.Z.getChannel(c),
                o = g.Z.getMessage(c, d),
                u = h.Z.isEditing(c, d);
            null == i ||
                null == o ||
                u ||
                (a({ contextMenu: !0 }),
                (0, s.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("93375"),
                            n.e("38342"),
                            n.e("37220"),
                            n.e("79531"),
                        ]).then(n.bind(n, 225138));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                P(C({}, n), {
                                    message: o,
                                    channel: i,
                                    mediaItem: t,
                                    shouldHideMediaOptions: l,
                                }),
                            );
                    },
                    {
                        onClose: () => a({ contextMenu: !1 }),
                        context: _,
                    },
                ));
        },
        [p, c, d, a, _, l],
    );
}
function B(e, t) {
    return i.useCallback(
        (n) => {
            let r = E.default.getUser(e),
                i = m.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, v.Pv)(n, r, i));
        },
        [e, t],
    );
}
function F(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = E.default.getUser(e),
                a = m.Z.getChannel(t);
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
            let r = E.default.getUser(e),
                i = m.Z.getChannel(t);
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
            e.altKey && (e.preventDefault(), (0, S.Z)(r, n));
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
                (0, _.T6)(), u || (b.S.dispatchKeyed(T.LPv.ANIMATE_CHAT_AVATAR, s, !0), c(e), d(!0));
            },
            [u, s, c],
        ),
        p = i.useCallback(() => {
            b.S.dispatchKeyed(T.LPv.ANIMATE_CHAT_AVATAR, s, !1), d(!1);
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
        let { messageReference: n } = e,
            r = () => {
                l.Z.jumpToMessage({
                    channelId: n.channel_id,
                    messageId: n.message_id,
                    flash: !0,
                    returnMessageId: e.id,
                });
            };
        (null == t || (0, I.Z)(t, r)) && r();
    }, [t, e]);
}
function z(e, t) {
    let n = R("interactionData", e, t);
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
            if ((0, p.Uw)(e)) {
                let { x: t, y: n, width: i, height: a } = r.getBoundingClientRect();
                (0, f.Z)(
                    e,
                    {
                        x: t,
                        y: n,
                        w: i,
                        h: a,
                    },
                    !1,
                    d.LL.UserTriggered,
                );
            }
        },
        [e, t],
    );
}
