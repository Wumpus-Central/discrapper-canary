(n.d(t, {
    $3: () => H,
    Go: () => B,
    JC: () => w,
    NU: () => L,
    Nk: () => A,
    R9: () => R,
    RN: () => U,
    Wl: () => P,
    XO: () => N,
    Xn: () => z,
    bb: () => V,
    qo: () => M,
    rY: () => D,
    sR: () => F,
    tn: () => G,
    wq: () => k
}),
    n(997841),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(239091),
    a = n(904245),
    o = n(144144),
    s = n(40851),
    c = n(407477),
    u = n(992970),
    d = n(287941),
    p = n(235894),
    m = n(675478),
    f = n(592125),
    g = n(323873),
    _ = n(375954),
    h = n(594174),
    b = n(585483),
    E = n(5967),
    C = n(630388),
    v = n(358085),
    O = n(51144),
    x = n(91047),
    y = n(50284),
    I = n(804063),
    j = n(981631);
function S(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function T(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = h.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let l = '@'.concat(O.ZP.getUserTag(i, { decoration: 'never' })),
                a = '<@'.concat(e, '>');
            (b.S.dispatchToLastSubscribed(j.CkL.INSERT_TEXT, {
                plainText: l,
                rawText: a
            }),
                o.Z.startTyping(t));
        },
        [e, t, n]
    );
}
function N(e, t, n, r) {
    let i = S('usernameProfile', n, r);
    return T(e.author.id, t.id, i);
}
function P(e, t, n, r) {
    let i = S('referencedUsernameProfile', n, r);
    return T(null == e ? void 0 : e.author.id, t.id, i);
}
function A(e, t, n, r) {
    let i = S('interactionUsernameProfile', n, r);
    return T(null == e ? void 0 : e.user.id, t.id, i);
}
function w(e, t, n, r) {
    let i = S('referencedUsernameProfile', n, r);
    return T(e, t.id, i);
}
function Z(e) {
    return i.useCallback(
        (t) => {
            (t.preventDefault(), t.stopPropagation(), e());
        },
        [e]
    );
}
function R(e, t) {
    return Z(S('avatarProfile', e, t));
}
function D(e, t) {
    return Z(S('referencedAvatarProfile', e, t));
}
function L(e, t) {
    return Z(S('interactionAvatarProfile', e, t));
}
function M(e, t, a, o) {
    let { id: c } = t,
        { id: u, flags: d } = e,
        p = (0, C.yE)(d, j.iLy.EPHEMERAL),
        m = (0, s.bp)();
    return i.useCallback(
        (e, t) => {
            if (p) return;
            if (!v.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = f.Z.getChannel(c),
                s = _.Z.getMessage(c, u),
                d = g.Z.isEditing(c, u);
            null == i ||
                null == s ||
                d ||
                (a({ contextMenu: !0 }),
                (0, l.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('79381'), n.e('16705'), n.e('37220'), n.e('41629')]).then(n.bind(n, 225138));
                        return (n) => {
                            var l, a;
                            return (0, r.jsx)(
                                e,
                                ((l = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, n)),
                                (a = a =
                                    {
                                        message: s,
                                        channel: i,
                                        mediaItem: t,
                                        shouldHideMediaOptions: o
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                l)
                            );
                        };
                    },
                    {
                        onClose: () => a({ contextMenu: !1 }),
                        context: m
                    }
                ));
        },
        [p, c, u, a, m, o]
    );
}
function k(e, t) {
    return i.useCallback(
        (n) => {
            let r = h.default.getUser(e),
                i = f.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, x.Pv)(n, r, i));
        },
        [e, t]
    );
}
function U(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = h.default.getUser(e),
                l = f.Z.getChannel(t);
            null != i &&
                null != l &&
                (r.stopPropagation(),
                (0, x._j)(r, {
                    user: i,
                    channel: l,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function F(e, t) {
    return i.useCallback(
        (n) => {
            let r = h.default.getUser(e),
                i = f.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, x.xS)(n, r, i.guild_id));
        },
        [e, t]
    );
}
function B(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, y.Z)(r, n));
        },
        [r, n]
    );
}
function G(e) {
    var t, n;
    let { groupId: r, message: l, defaultValue: a, popouts: o } = e,
        { canShowReactionsOnMessageHover: s } = c.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        f = l.author.id,
        g = ''.concat(r, ':').concat(f),
        _ = i.useRef(a),
        h =
            ((t = l),
            (n = o),
            i.useCallback(
                (e) => {
                    if (null == e || !(e.nativeEvent instanceof MouseEvent) || Object.values(n).some((e) => e)) return;
                    let r = e.target;
                    if ((0, p.Uw)(t)) {
                        let { x: e, y: n, width: i, height: l } = r.getBoundingClientRect();
                        (0, d.Z)(
                            t,
                            {
                                x: e,
                                y: n,
                                w: i,
                                h: l
                            },
                            !1,
                            u.LL.UserTriggered
                        );
                    }
                },
                [t, n]
            )),
        [E, C] = i.useState(a);
    _.current = E || _.current;
    let v = i.useCallback(
            (e) => {
                (s && (0, m.T6)(), E || (b.S.dispatchKeyed(j.LPv.ANIMATE_CHAT_AVATAR, g, !0), h(e), C(!0)));
            },
            [E, g, s, h]
        ),
        O = i.useCallback(() => {
            (b.S.dispatchKeyed(j.LPv.ANIMATE_CHAT_AVATAR, g, !1), C(!1));
        }, [g]);
    return {
        hasHovered: _.current,
        isHovered: E,
        handleMouseEnter: v,
        handleMouseLeave: O
    };
}
function V(e, t) {
    let [n, r] = i.useState(!1),
        [l, a] = i.useState(!1);
    return {
        handleFocus: i.useCallback(
            (t) => {
                var n, i;
                let l = null != (i = null == (n = (0, E.uB)(t)) ? void 0 : n.activeElement) ? i : null;
                ((t.target === t.currentTarget || t.currentTarget.contains(l)) && (a(!0), r(!0)), null != e && e(t));
            },
            [e]
        ),
        handleBlur: i.useCallback(
            (e) => {
                var n, i;
                let l = null != (i = null == (n = (0, E.uB)(e)) ? void 0 : n.activeElement) ? i : null;
                ((e.target !== e.currentTarget && e.currentTarget.contains(l)) || r(!1), null != t && t(e));
            },
            [t]
        ),
        isFocused: n,
        hasFocused: l
    };
}
function H(e, t) {
    return i.useCallback(() => {
        let { messageReference: n } = e;
        (null == t || (0, I.Z)(t)) &&
            a.Z.jumpToMessage({
                channelId: n.channel_id,
                messageId: n.message_id,
                flash: !0,
                returnMessageId: e.id
            });
    }, [t, e]);
}
function z(e, t) {
    let n = S('interactionData', e, t);
    return i.useCallback(
        (e) => {
            (e.preventDefault(), e.stopPropagation(), n());
        },
        [n]
    );
}
