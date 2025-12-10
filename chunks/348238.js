n.d(t, {
    $3: () => z,
    Go: () => Y,
    JC: () => M,
    NU: () => Z,
    Nk: () => j,
    R9: () => U,
    RN: () => V,
    Wl: () => L,
    XO: () => x,
    Xn: () => q,
    bb: () => K,
    qo: () => B,
    rY: () => G,
    sR: () => H,
    tn: () => W,
    wq: () => F,
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
    b = n(626135),
    y = n(585483),
    O = n(358085),
    v = n(51144),
    S = n(91047),
    I = n(50284),
    T = n(804063),
    C = n(981631);
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
function N(e) {
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
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t, n) {
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
            let a = "@".concat(v.ZP.getUserTag(i, { decoration: "never" })),
                o = "<@".concat(e, ">");
            y.S.dispatchToLastSubscribed(C.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: o,
            }),
                c.Z.startTyping(t);
        },
        [e, t, n],
    );
}
function x(e, t, n, r) {
    let i = D("usernameProfile", n, r);
    return w(e.author.id, t.id, i);
}
function L(e, t, n, r) {
    let i = D("referencedUsernameProfile", n, r);
    return w(null == e ? void 0 : e.author.id, t.id, i);
}
function j(e, t, n, r) {
    let i = D("interactionUsernameProfile", n, r);
    return w(null == e ? void 0 : e.user.id, t.id, i);
}
function M(e, t, n, r) {
    let i = D("referencedUsernameProfile", n, r);
    return w(e, t.id, i);
}
function k(e) {
    return i.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}
function U(e, t) {
    return k(D("avatarProfile", e, t));
}
function G(e, t) {
    return k(D("referencedAvatarProfile", e, t));
}
function Z(e, t) {
    return k(D("interactionAvatarProfile", e, t));
}
function B(e, t, a, l) {
    let { id: c } = t,
        { id: d, flags: f } = e,
        p = (0, o.yE)(f, C.iLy.EPHEMERAL),
        _ = (0, u.bp)();
    return i.useCallback(
        (e, t) => {
            if (p) return;
            if (!O.isPlatformEmbedded) {
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
                (b.default.track(C.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
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
                            n.e("38342"),
                            n.e("37220"),
                            n.e("79531"),
                        ]).then(n.bind(n, 225138));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                R(N({}, n), {
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
function F(e, t) {
    return i.useCallback(
        (n) => {
            let r = E.default.getUser(e),
                i = m.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, S.Pv)(n, r, i));
        },
        [e, t],
    );
}
function V(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = E.default.getUser(e),
                a = m.Z.getChannel(t);
            null != i &&
                null != a &&
                (r.stopPropagation(),
                (0, S._j)(r, {
                    user: i,
                    channel: a,
                    moderationAlertId: n,
                }));
        },
        [e, t, n],
    );
}
function H(e, t) {
    return i.useCallback(
        (n) => {
            let r = E.default.getUser(e),
                i = m.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, S.xS)(n, r, i.guild_id));
        },
        [e, t],
    );
}
function Y(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, I.Z)(r, n));
        },
        [r, n],
    );
}
function W(e) {
    let { groupId: t, message: n, defaultValue: r, popouts: a } = e,
        o = n.author.id,
        s = "".concat(t, ":").concat(o),
        l = i.useRef(r),
        c = Q(n, a),
        [u, d] = i.useState(r);
    l.current = u || l.current;
    let f = i.useCallback(
            (e) => {
                (0, _.T6)(), u || (y.S.dispatchKeyed(C.LPv.ANIMATE_CHAT_AVATAR, s, !0), c(e), d(!0));
            },
            [u, s, c],
        ),
        p = i.useCallback(() => {
            y.S.dispatchKeyed(C.LPv.ANIMATE_CHAT_AVATAR, s, !1), d(!1);
        }, [s]);
    return {
        hasHovered: l.current,
        isHovered: u,
        handleMouseEnter: f,
        handleMouseLeave: p,
    };
}
function K(e, t) {
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
function z(e, t) {
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
        (null == t || (0, T.Z)(t, r)) && r();
    }, [t, e]);
}
function q(e, t) {
    let n = D("interactionData", e, t);
    return i.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
function Q(e, t) {
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
