n.d(t, {
    $3: () => z,
    Go: () => G,
    JC: () => Z,
    NU: () => L,
    Nk: () => w,
    R9: () => k,
    RN: () => F,
    Wl: () => A,
    XO: () => P,
    Xn: () => W,
    bb: () => V,
    qo: () => M,
    rY: () => D,
    sR: () => B,
    tn: () => H,
    wq: () => U
}),
    n(997841),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(668781),
    a = n(239091),
    o = n(904245),
    s = n(144144),
    c = n(40851),
    u = n(407477),
    d = n(992970),
    p = n(287941),
    m = n(235894),
    f = n(675478),
    h = n(592125),
    g = n(323873),
    _ = n(375954),
    b = n(594174),
    x = n(585483),
    y = n(5967),
    E = n(630388),
    v = n(358085),
    O = n(51144),
    j = n(91047),
    C = n(50284),
    S = n(981631),
    I = n(388032);
function N(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function T(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = b.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let l = '@'.concat(O.ZP.getUserTag(i, { decoration: 'never' })),
                a = '<@'.concat(e, '>');
            x.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
                plainText: l,
                rawText: a
            }),
                s.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function P(e, t, n, r) {
    let i = N('usernameProfile', n, r);
    return T(e.author.id, t.id, i);
}
function A(e, t, n, r) {
    let i = N('referencedUsernameProfile', n, r);
    return T(null == e ? void 0 : e.author.id, t.id, i);
}
function w(e, t, n, r) {
    let i = N('interactionUsernameProfile', n, r);
    return T(null == e ? void 0 : e.user.id, t.id, i);
}
function Z(e, t, n, r) {
    let i = N('referencedUsernameProfile', n, r);
    return T(e, t.id, i);
}
function R(e) {
    return i.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function k(e, t) {
    return R(N('avatarProfile', e, t));
}
function D(e, t) {
    return R(N('referencedAvatarProfile', e, t));
}
function L(e, t) {
    return R(N('interactionAvatarProfile', e, t));
}
function M(e, t, l, o) {
    let { id: s } = t,
        { id: u, flags: d } = e,
        p = (0, E.yE)(d, S.iLy.EPHEMERAL),
        m = (0, c.bp)();
    return i.useCallback(
        (e, t) => {
            if (p) return;
            if (!v.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = h.Z.getChannel(s),
                c = _.Z.getMessage(s, u),
                d = g.Z.isEditing(s, u);
            null == i ||
                null == c ||
                d ||
                (l({ contextMenu: !0 }),
                (0, a.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('93375'), n.e('37220'), n.e('2089')]).then(n.bind(n, 225138));
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
                                        message: c,
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
                        onClose: () => l({ contextMenu: !1 }),
                        context: m
                    }
                ));
        },
        [p, s, u, l, m, o]
    );
}
function U(e, t) {
    return i.useCallback(
        (n) => {
            let r = b.default.getUser(e),
                i = h.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, j.Pv)(n, r, i));
        },
        [e, t]
    );
}
function F(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = b.default.getUser(e),
                l = h.Z.getChannel(t);
            null != i &&
                null != l &&
                (r.stopPropagation(),
                (0, j._j)(r, {
                    user: i,
                    channel: l,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function B(e, t) {
    return i.useCallback(
        (n) => {
            let r = b.default.getUser(e),
                i = h.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, j.xS)(n, r, i.guild_id));
        },
        [e, t]
    );
}
function G(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, C.Z)(r, n));
        },
        [r, n]
    );
}
function H(e) {
    var t, n;
    let { groupId: r, message: l, defaultValue: a, popouts: o } = e,
        { canShowReactionsOnMessageHover: s } = u.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        c = l.author.id,
        h = ''.concat(r, ':').concat(c),
        g = i.useRef(a),
        _ =
            ((t = l),
            (n = o),
            i.useCallback(
                (e) => {
                    if (null == e || !(e.nativeEvent instanceof MouseEvent) || Object.values(n).some((e) => e)) return;
                    let r = e.target;
                    if ((0, m.Uw)(t)) {
                        let { x: e, y: n, width: i, height: l } = r.getBoundingClientRect();
                        (0, p.Z)(
                            t,
                            {
                                x: e,
                                y: n,
                                w: i,
                                h: l
                            },
                            !1,
                            d.LL.UserTriggered
                        );
                    }
                },
                [t, n]
            )),
        [b, y] = i.useState(a);
    g.current = b || g.current;
    let E = i.useCallback(
            (e) => {
                s && (0, f.T6)(), b || (x.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, h, !0), _(e), y(!0));
            },
            [b, h, s, _]
        ),
        v = i.useCallback(() => {
            x.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, h, !1), y(!1);
        }, [h]);
    return {
        hasHovered: g.current,
        isHovered: b,
        handleMouseEnter: E,
        handleMouseLeave: v
    };
}
function V(e, t) {
    let [n, r] = i.useState(!1),
        [l, a] = i.useState(!1);
    return {
        handleFocus: i.useCallback(
            (t) => {
                var n, i;
                let l = null != (i = null == (n = (0, y.uB)(t)) ? void 0 : n.activeElement) ? i : null;
                (t.target === t.currentTarget || t.currentTarget.contains(l)) && (a(!0), r(!0)), null != e && e(t);
            },
            [e]
        ),
        handleBlur: i.useCallback(
            (e) => {
                var n, i;
                let l = null != (i = null == (n = (0, y.uB)(e)) ? void 0 : n.activeElement) ? i : null;
                (e.target !== e.currentTarget && e.currentTarget.contains(l)) || r(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: l
    };
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return i.useCallback(() => {
        null != t &&
            (n
                ? l.Z.show({
                      title: I.intl.string(I.t['j7eA/v']),
                      body: I.intl.formatToPlainString(I.t.dTNNgo, { name: t.author.username }),
                      confirmText: I.intl.string(I.t.BddRzc)
                  })
                : r
                  ? l.Z.show({
                        title: I.intl.string(I.t.XyWoKS),
                        body: I.intl.formatToPlainString(I.t['8t8doK'], { name: t.author.username }),
                        confirmText: I.intl.string(I.t.BddRzc)
                    })
                  : o.Z.jumpToMessage({
                        channelId: t.channel_id,
                        messageId: t.id,
                        flash: !0,
                        returnMessageId: e.id
                    }));
    }, [n, r, e.id, t]);
}
function W(e, t) {
    let n = N('interactionData', e, t);
    return i.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
