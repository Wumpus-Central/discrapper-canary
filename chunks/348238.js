n.d(t, {
    $3: () => V,
    Go: () => B,
    JC: () => w,
    NU: () => D,
    Nk: () => A,
    R9: () => R,
    RN: () => U,
    Wl: () => P,
    XO: () => T,
    Xn: () => z,
    bb: () => H,
    qo: () => L,
    rY: () => k,
    sR: () => F,
    tn: () => G,
    wq: () => M
}),
    n(997841),
    n(388685);
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
    h = n(323873),
    g = n(375954),
    _ = n(594174),
    b = n(585483),
    E = n(5967),
    y = n(630388),
    x = n(358085),
    v = n(51144),
    O = n(91047),
    C = n(50284),
    j = n(804063),
    S = n(981631);
function I(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function N(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = _.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let l = '@'.concat(v.ZP.getUserTag(i, { decoration: 'never' })),
                a = '<@'.concat(e, '>');
            b.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
                plainText: l,
                rawText: a
            }),
                o.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function T(e, t, n, r) {
    let i = I('usernameProfile', n, r);
    return N(e.author.id, t.id, i);
}
function P(e, t, n, r) {
    let i = I('referencedUsernameProfile', n, r);
    return N(null == e ? void 0 : e.author.id, t.id, i);
}
function A(e, t, n, r) {
    let i = I('interactionUsernameProfile', n, r);
    return N(null == e ? void 0 : e.user.id, t.id, i);
}
function w(e, t, n, r) {
    let i = I('referencedUsernameProfile', n, r);
    return N(e, t.id, i);
}
function Z(e) {
    return i.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function R(e, t) {
    return Z(I('avatarProfile', e, t));
}
function k(e, t) {
    return Z(I('referencedAvatarProfile', e, t));
}
function D(e, t) {
    return Z(I('interactionAvatarProfile', e, t));
}
function L(e, t, a, o) {
    let { id: c } = t,
        { id: u, flags: d } = e,
        p = (0, y.yE)(d, S.iLy.EPHEMERAL),
        m = (0, s.bp)();
    return i.useCallback(
        (e, t) => {
            if (p) return;
            if (!x.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = f.Z.getChannel(c),
                s = g.Z.getMessage(c, u),
                d = h.Z.isEditing(c, u);
            null == i ||
                null == s ||
                d ||
                (a({ contextMenu: !0 }),
                (0, l.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('93375'), n.e('37220'), n.e('10678')]).then(n.bind(n, 225138));
                        return (n) => {
                            var l, a;
                            return (0, r.jsx)(
                                e,
                                ((l = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
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
            null != r && null != i && (n.stopPropagation(), (0, O.Pv)(n, r, i));
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
                (0, O._j)(r, {
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
            null != r && null != i && (n.stopPropagation(), (0, O.xS)(n, r, i.guild_id));
        },
        [e, t]
    );
}
function B(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, C.Z)(r, n));
        },
        [r, n]
    );
}
function G(e) {
    var t, n;
    let { groupId: r, message: l, defaultValue: a, popouts: o } = e,
        { canShowReactionsOnMessageHover: s } = c.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        f = l.author.id,
        h = ''.concat(r, ':').concat(f),
        g = i.useRef(a),
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
        [E, y] = i.useState(a);
    g.current = E || g.current;
    let x = i.useCallback(
            (e) => {
                s && (0, m.T6)(), E || (b.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, h, !0), _(e), y(!0));
            },
            [E, h, s, _]
        ),
        v = i.useCallback(() => {
            b.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, h, !1), y(!1);
        }, [h]);
    return {
        hasHovered: g.current,
        isHovered: E,
        handleMouseEnter: x,
        handleMouseLeave: v
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
                (t.target === t.currentTarget || t.currentTarget.contains(l)) && (a(!0), r(!0)), null != e && e(t);
            },
            [e]
        ),
        handleBlur: i.useCallback(
            (e) => {
                var n, i;
                let l = null != (i = null == (n = (0, E.uB)(e)) ? void 0 : n.activeElement) ? i : null;
                (e.target !== e.currentTarget && e.currentTarget.contains(l)) || r(!1), null != t && t(e);
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
    let n = I('interactionData', e, t);
    return i.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
