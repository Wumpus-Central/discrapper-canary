n.d(t, {
    $3: () => Y,
    Go: () => B,
    JC: () => x,
    NU: () => k,
    Nk: () => D,
    R9: () => j,
    RN: () => Z,
    Wl: () => R,
    XO: () => w,
    Xn: () => W,
    bb: () => H,
    qo: () => U,
    rY: () => M,
    sR: () => F,
    tn: () => V,
    wq: () => G,
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
    d = n(675478),
    f = n(592125),
    p = n(323873),
    _ = n(375954),
    h = n(594174),
    m = n(626135),
    g = n(585483),
    E = n(358085),
    b = n(51144),
    y = n(91047),
    O = n(50284),
    v = n(804063),
    S = n(981631);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function P(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = h.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let a = "@".concat(b.ZP.getUserTag(i, { decoration: "never" })),
                o = "<@".concat(e, ">");
            g.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: o,
            }),
                c.Z.startTyping(t);
        },
        [e, t, n],
    );
}
function w(e, t, n, r) {
    let i = N("usernameProfile", n, r);
    return P(e.author.id, t.id, i);
}
function R(e, t, n, r) {
    let i = N("referencedUsernameProfile", n, r);
    return P(null == e ? void 0 : e.author.id, t.id, i);
}
function D(e, t, n, r) {
    let i = N("interactionUsernameProfile", n, r);
    return P(null == e ? void 0 : e.user.id, t.id, i);
}
function x(e, t, n, r) {
    let i = N("referencedUsernameProfile", n, r);
    return P(e, t.id, i);
}
function L(e) {
    return i.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function j(e, t) {
    return L(N("avatarProfile", e, t));
}
function M(e, t) {
    return L(N("referencedAvatarProfile", e, t));
}
function k(e, t) {
    return L(N("interactionAvatarProfile", e, t));
}
function U(e, t, a, l) {
    let { id: c } = t,
        { id: d, flags: h } = e,
        g = (0, o.yE)(h, S.iLy.EPHEMERAL),
        b = (0, u.bp)();
    return i.useCallback(
        (e, t) => {
            if (g) return;
            if (!E.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = f.Z.getChannel(c),
                o = _.Z.getMessage(c, d),
                u = p.Z.isEditing(c, d);
            null == i ||
                null == o ||
                u ||
                (m.default.track(S.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: d,
                    channel: c,
                    location: "right_click",
                }),
                a({ contextMenu: !0 }),
                (0, s.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("93375"),
                            n.e("76676"),
                            n.e("37220"),
                            n.e("26503"),
                            n.e("7150"),
                        ]).then(n.bind(n, 225138));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                A(T({}, n), {
                                    message: o,
                                    channel: i,
                                    mediaItem: t,
                                    shouldHideMediaOptions: l,
                                }),
                            );
                    },
                    {
                        onClose: () => a({ contextMenu: !1 }),
                        context: b,
                    },
                ));
        },
        [g, c, d, a, b, l],
    );
}
function G(e, t) {
    return i.useCallback(
        (n) => {
            let r = h.default.getUser(e),
                i = f.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, y.Pv)(n, r, i));
        },
        [e, t],
    );
}
function Z(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = h.default.getUser(e),
                a = f.Z.getChannel(t);
            null != i &&
                null != a &&
                (r.stopPropagation(),
                (0, y._j)(r, {
                    user: i,
                    channel: a,
                    moderationAlertId: n,
                }));
        },
        [e, t, n],
    );
}
function F(e, t) {
    return i.useCallback(
        (n) => {
            let r = h.default.getUser(e),
                i = f.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, y.xS)(n, r, i.guild_id));
        },
        [e, t],
    );
}
function B(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, O.Z)(r, n));
        },
        [r, n],
    );
}
function V(e) {
    let { groupId: t, message: n, defaultValue: r } = e,
        a = n.author.id,
        o = "".concat(t, ":").concat(a),
        s = i.useRef(r),
        [l, c] = i.useState(r);
    s.current = l || s.current;
    let u = i.useCallback(() => {
            (0, d.T6)(), l || (g.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, o, !0), c(!0));
        }, [l, o]),
        f = i.useCallback(() => {
            g.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, o, !1), c(!1);
        }, [o]);
    return {
        hasHovered: s.current,
        isHovered: l,
        handleMouseEnter: u,
        handleMouseLeave: f,
    };
}
function H(e, t) {
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
function Y(e, t) {
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
        (null == t || (0, v.Z)(t, r)) && r();
    }, [t, e]);
}
function W(e, t) {
    let n = N("interactionData", e, t);
    return i.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
