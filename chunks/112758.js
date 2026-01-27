n.d(t, {
    Am: () => k,
    Ck: () => F,
    G8: () => B,
    Ge: () => w,
    H9: () => I,
    I: () => T,
    Jo: () => P,
    T0: () => S,
    UY: () => M,
    U_: () => H,
    VL: () => D,
    Yq: () => R,
    m: () => C,
    r4: () => L,
    ri: () => U,
    yp: () => G,
}),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(621466),
    a = n(665260),
    s = n(442433),
    o = n(843472),
    c = n(414798),
    u = n(267102),
    d = n(594061),
    p = n(734057),
    m = n(580745),
    f = n(320501),
    g = n(287809),
    h = n(954571),
    _ = n(203982),
    b = n(723702),
    A = n(427262),
    y = n(841549),
    v = n(439147),
    x = n(81437),
    O = n(652215);

function E(e, t, n) {
    return i.useCallback(() => {
        n({
            [e]: !t,
        });
    }, [e, n, t]);
}

function j(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = g.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let l = "@".concat(
                    A.Ay.getUserTag(i, {
                        decoration: "never",
                    }),
                ),
                a = "<@".concat(e, ">");
            _._.dispatchToLastSubscribed(O.jej.INSERT_TEXT, {
                plainText: l,
                rawText: a,
            }),
                c.A.startTyping(t);
        },
        [e, t, n],
    );
}

function C(e, t, n, r) {
    let i = E("usernameProfile", n, r);
    return j(e.author.id, t.id, i);
}

function I(e, t, n, r) {
    let i = E("referencedUsernameProfile", n, r);
    return j(null == e ? void 0 : e.author.id, t.id, i);
}

function S(e, t, n, r) {
    let i = E("interactionUsernameProfile", n, r);
    return j(null == e ? void 0 : e.user.id, t.id, i);
}

function T(e, t, n, r) {
    let i = E("referencedUsernameProfile", n, r);
    return j(e, t.id, i);
}

function N(e) {
    return i.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e],
    );
}

function P(e, t) {
    return N(E("avatarProfile", e, t));
}

function w(e, t) {
    return N(E("referencedAvatarProfile", e, t));
}

function R(e, t) {
    return N(E("interactionAvatarProfile", e, t));
}

function D(e, t, l, o) {
    let { id: c } = t,
        { id: d, flags: g } = e,
        _ = (0, a.Lt)(g, O.pr7.EPHEMERAL),
        A = (0, u.Us)();
    return i.useCallback(
        (e, t) => {
            if (_) return;
            if (!b.isPlatformEmbedded) {
                let t = e.target;
                if (("A" === t.tagName && "" !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = p.A.getChannel(c),
                a = f.A.getMessage(c, d),
                u = m.A.isEditing(c, d);
            null == i ||
                null == a ||
                u ||
                (h.default.track(O.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: d,
                    channel: c,
                    location: "right_click",
                }),
                l({
                    contextMenu: !0,
                }),
                (0, s.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("24202"),
                            n.e("6502"),
                            n.e("1636"),
                            n.e("27687"),
                            n.e("92750"),
                        ]).then(n.bind(n, 547983));
                        return (n) => {
                            var l, s;
                            return (0, r.jsx)(
                                e,
                                ((l = (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (s = s =
                                    {
                                        message: a,
                                        channel: i,
                                        mediaItem: t,
                                        shouldHideMediaOptions: o,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(s)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                      }),
                                l),
                            );
                        };
                    },
                    {
                        onClose: () =>
                            l({
                                contextMenu: !1,
                            }),
                        context: A,
                    },
                ));
        },
        [_, c, d, l, A, o],
    );
}

function L(e, t) {
    return i.useCallback(
        (n) => {
            let r = g.default.getUser(e),
                i = p.A.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, y.wQ)(n, r, i));
        },
        [e, t],
    );
}

function M(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = g.default.getUser(e),
                l = p.A.getChannel(t);
            null != i &&
                null != l &&
                (r.stopPropagation(),
                (0, y.B8)(r, {
                    user: i,
                    channel: l,
                    moderationAlertId: n,
                }));
        },
        [e, t, n],
    );
}

function k(e, t) {
    return i.useCallback(
        (n) => {
            let r = g.default.getUser(e),
                i = p.A.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, y.pB)(n, r, i.guild_id));
        },
        [e, t],
    );
}

function U(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, v.A)(r, n));
        },
        [r, n],
    );
}

function G(e) {
    let { groupId: t, message: n, defaultValue: r } = e,
        l = n.author.id,
        a = "".concat(t, ":").concat(l),
        s = i.useRef(r),
        [o, c] = i.useState(r);
    s.current = o || s.current;
    let u = i.useCallback(() => {
            (0, d.cE)(), o || (_._.dispatchKeyed(O.zOV.ANIMATE_CHAT_AVATAR, a, !0), c(!0));
        }, [o, a]),
        p = i.useCallback(() => {
            _._.dispatchKeyed(O.zOV.ANIMATE_CHAT_AVATAR, a, !1), c(!1);
        }, [a]);
    return {
        hasHovered: s.current,
        isHovered: o,
        handleMouseEnter: u,
        handleMouseLeave: p,
    };
}

function B(e, t) {
    let [n, r] = i.useState(!1),
        [a, s] = i.useState(!1);
    return {
        handleFocus: i.useCallback(
            (t) => {
                var n, i;
                let a = null != (n = null == (i = (0, l.BF)(t)) ? void 0 : i.activeElement) ? n : null;
                (t.target === t.currentTarget || t.currentTarget.contains(a)) && (s(!0), r(!0)), null != e && e(t);
            },
            [e],
        ),
        handleBlur: i.useCallback(
            (e) => {
                var n, i;
                let a = null != (n = null == (i = (0, l.BF)(e)) ? void 0 : i.activeElement) ? n : null;
                (e.target !== e.currentTarget && e.currentTarget.contains(a)) || r(!1), null != t && t(e);
            },
            [t],
        ),
        isFocused: n,
        hasFocused: a,
    };
}

function F(e, t) {
    return i.useCallback(() => {
        let { messageReference: n } = e,
            r = () => {
                o.A.jumpToMessage({
                    channelId: n.channel_id,
                    messageId: n.message_id,
                    flash: !0,
                    returnMessageId: e.id,
                });
            };
        (null == t || (0, x.A)(t, r)) && r();
    }, [t, e]);
}

function H(e, t) {
    let n = E("interactionData", e, t);
    return i.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n],
    );
}
