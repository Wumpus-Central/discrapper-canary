n.d(t, {
    Am: () => F,
    Ck: () => W,
    G8: () => Y,
    Ge: () => M,
    H9: () => P,
    I: () => x,
    Jo: () => j,
    T0: () => D,
    UY: () => V,
    U_: () => K,
    VL: () => U,
    Yq: () => k,
    m: () => w,
    r4: () => G,
    ri: () => B,
    yp: () => H,
}),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(621466),
    s = n(665260),
    o = n(442433),
    l = n(843472),
    c = n(414798),
    u = n(267102),
    d = n(594061),
    f = n(734057),
    p = n(580745),
    _ = n(320501),
    h = n(287809),
    m = n(954571),
    g = n(203982),
    E = n(723702),
    b = n(427262),
    y = n(841549),
    O = n(439147),
    A = n(81437),
    v = n(652215);

function S(e, t, n) {
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

function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}

function T(e, t) {
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

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function N(e, t, n) {
    return i.useCallback(() => {
        n({
            [e]: !t,
        });
    }, [e, n, t]);
}

function R(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = h.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let a = "@".concat(
                    b.Ay.getUserTag(i, {
                        decoration: "never",
                    }),
                ),
                s = "<@".concat(e, ">");
            g._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, {
                plainText: a,
                rawText: s,
            }),
                c.A.startTyping(t);
        },
        [e, t, n],
    );
}

function w(e, t, n, r) {
    let i = N("usernameProfile", n, r);
    return R(e.author.id, t.id, i);
}

function P(e, t, n, r) {
    let i = N("referencedUsernameProfile", n, r);
    return R(null == e ? void 0 : e.author.id, t.id, i);
}

function D(e, t, n, r) {
    let i = N("interactionUsernameProfile", n, r);
    return R(null == e ? void 0 : e.user.id, t.id, i);
}

function x(e, t, n, r) {
    let i = N("referencedUsernameProfile", n, r);
    return R(e, t.id, i);
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
        g = (0, s.Lt)(h, v.pr7.EPHEMERAL),
        b = (0, u.Us)();
    return i.useCallback(
        (e, t) => {
            if (g) return;
            if (!E.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = f.A.getChannel(c),
                s = _.A.getMessage(c, d),
                u = p.A.isEditing(c, d);
            null == i ||
                null == s ||
                u ||
                (m.default.track(v.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: d,
                    channel: c,
                    location: "right_click",
                }),
                a({
                    contextMenu: !0,
                }),
                (0, o.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("24202"),
                            n.e("6502"),
                            n.e("1636"),
                            n.e("27687"),
                            n.e("42897"),
                        ]).then(n.bind(n, 547983));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                C(I({}, n), {
                                    message: s,
                                    channel: i,
                                    mediaItem: t,
                                    shouldHideMediaOptions: l,
                                }),
                            );
                    },
                    {
                        onClose: () =>
                            a({
                                contextMenu: !1,
                            }),
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
                i = f.A.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, y.wQ)(n, r, i));
        },
        [e, t],
    );
}

function V(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = h.default.getUser(e),
                a = f.A.getChannel(t);
            null != i &&
                null != a &&
                (r.stopPropagation(),
                (0, y.B8)(r, {
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
                i = f.A.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, y.pB)(n, r, i.guild_id));
        },
        [e, t],
    );
}

function B(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, O.A)(r, n));
        },
        [r, n],
    );
}

function H(e) {
    let { groupId: t, message: n, defaultValue: r } = e,
        a = n.author.id,
        s = "".concat(t, ":").concat(a),
        o = i.useRef(r),
        [l, c] = i.useState(r);
    o.current = l || o.current;
    let u = i.useCallback(() => {
            (0, d.cE)(), l || (g._.dispatchKeyed(v.zOV.ANIMATE_CHAT_AVATAR, s, !0), c(!0));
        }, [l, s]),
        f = i.useCallback(() => {
            g._.dispatchKeyed(v.zOV.ANIMATE_CHAT_AVATAR, s, !1), c(!1);
        }, [s]);
    return {
        hasHovered: o.current,
        isHovered: l,
        handleMouseEnter: u,
        handleMouseLeave: f,
    };
}

function Y(e, t) {
    let [n, r] = i.useState(!1),
        [s, o] = i.useState(!1);
    return {
        handleFocus: i.useCallback(
            (t) => {
                var n, i;
                let s = null != (n = null == (i = (0, a.BF)(t)) ? void 0 : i.activeElement) ? n : null;
                (t.target === t.currentTarget || t.currentTarget.contains(s)) && (o(!0), r(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: i.useCallback(
            (e) => {
                var n, i;
                let s = null != (n = null == (i = (0, a.BF)(e)) ? void 0 : i.activeElement) ? n : null;
                (e.target !== e.currentTarget && e.currentTarget.contains(s)) || r(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: s,
    };
}

function W(e, t) {
    return i.useCallback(() => {
        let { messageReference: n } = e,
            r = () => {
                l.A.jumpToMessage({
                    channelId: n.channel_id,
                    messageId: n.message_id,
                    flash: !0,
                    returnMessageId: e.id,
                });
            };
        (null == t || (0, A.A)(t, r)) && r();
    }, [t, e]);
}

function K(e, t) {
    let n = N("interactionData", e, t);
    return i.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
