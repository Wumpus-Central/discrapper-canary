(n.d(t, {
    $3: () => V,
    Go: () => B,
    JC: () => w,
    NU: () => L,
    Nk: () => A,
    R9: () => R,
    RN: () => U,
    Wl: () => P,
    XO: () => N,
    Xn: () => z,
    bb: () => H,
    qo: () => D,
    rY: () => k,
    sR: () => F,
    tn: () => G,
    wq: () => M
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
    h = n(375954),
    _ = n(594174),
    b = n(585483),
    E = n(5967),
    x = n(630388),
    v = n(358085),
    C = n(51144),
    y = n(91047),
    O = n(50284),
    j = n(804063),
    I = n(981631);
function S(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function T(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = _.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let l = '@'.concat(C.ZP.getUserTag(i, { decoration: 'never' })),
                a = '<@'.concat(e, '>');
            (b.S.dispatchToLastSubscribed(I.CkL.INSERT_TEXT, {
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
function k(e, t) {
    return Z(S('referencedAvatarProfile', e, t));
}
function L(e, t) {
    return Z(S('interactionAvatarProfile', e, t));
}
function D(e, t, a, o) {
    let { id: c } = t,
        { id: u, flags: d } = e,
        p = (0, x.yE)(d, I.iLy.EPHEMERAL),
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
                s = h.Z.getMessage(c, u),
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
function M(e, t) {
    return i.useCallback(
        (n) => {
            let r = _.default.getUser(e),
                i = f.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, y.Pv)(n, r, i));
        },
        [e, t]
    );
}
function U(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = _.default.getUser(e),
                l = f.Z.getChannel(t);
            null != i &&
                null != l &&
                (r.stopPropagation(),
                (0, y._j)(r, {
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
            let r = _.default.getUser(e),
                i = f.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, y.xS)(n, r, i.guild_id));
        },
        [e, t]
    );
}
function B(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, O.Z)(r, n));
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
        h = i.useRef(a),
        _ =
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
        [E, x] = i.useState(a);
    h.current = E || h.current;
    let v = i.useCallback(
            (e) => {
                (s && (0, m.T6)(), E || (b.S.dispatchKeyed(I.LPv.ANIMATE_CHAT_AVATAR, g, !0), _(e), x(!0)));
            },
            [E, g, s, _]
        ),
        C = i.useCallback(() => {
            (b.S.dispatchKeyed(I.LPv.ANIMATE_CHAT_AVATAR, g, !1), x(!1));
        }, [g]);
    return {
        hasHovered: h.current,
        isHovered: E,
        handleMouseEnter: v,
        handleMouseLeave: C
    };
}
function H(e, t) {
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
function V(e, t) {
    return i.useCallback(() => {
        let { messageReference: n } = e;
        (null == t || (0, j.Z)(t)) &&
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
