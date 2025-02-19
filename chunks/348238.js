n.d(t, {
    $3: () => V,
    Go: () => B,
    JC: () => Z,
    NU: () => D,
    Nk: () => w,
    R9: () => R,
    RN: () => F,
    Wl: () => A,
    XO: () => T,
    Xn: () => z,
    bb: () => H,
    qo: () => M,
    rY: () => L,
    sR: () => U,
    tn: () => G,
    wq: () => W
}),
    n(789020),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(668781),
    o = n(239091),
    l = n(904245),
    s = n(144144),
    c = n(40851),
    d = n(407477),
    u = n(992970),
    p = n(287941),
    m = n(235894),
    f = n(675478),
    h = n(592125),
    g = n(323873),
    _ = n(375954),
    b = n(594174),
    v = n(585483),
    y = n(5967),
    x = n(630388),
    O = n(358085),
    E = n(51144),
    j = n(91047),
    N = n(50284),
    C = n(981631),
    I = n(388032);
function S(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function P(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = b.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) {
                n();
                return;
            }
            let a = '@'.concat(E.ZP.getUserTag(i, { decoration: 'never' })),
                o = '<@'.concat(e, '>');
            v.S.dispatchToLastSubscribed(C.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: o
            }),
                s.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function T(e, t, n, r) {
    let i = S('usernameProfile', n, r);
    return P(e.author.id, t.id, i);
}
function A(e, t, n, r) {
    let i = S('referencedUsernameProfile', n, r);
    return P(null == e ? void 0 : e.author.id, t.id, i);
}
function w(e, t, n, r) {
    let i = S('interactionUsernameProfile', n, r);
    return P(null == e ? void 0 : e.user.id, t.id, i);
}
function Z(e, t, n, r) {
    let i = S('referencedUsernameProfile', n, r);
    return P(e, t.id, i);
}
function k(e) {
    return i.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function R(e, t) {
    return k(S('avatarProfile', e, t));
}
function L(e, t) {
    return k(S('referencedAvatarProfile', e, t));
}
function D(e, t) {
    return k(S('interactionAvatarProfile', e, t));
}
function M(e, t, a, l) {
    let { id: s } = t,
        { id: d, flags: u } = e,
        p = (0, x.yE)(u, C.iLy.EPHEMERAL),
        m = (0, c.bp)();
    return i.useCallback(
        (e, t) => {
            if (p) return;
            if (!O.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = h.Z.getChannel(s),
                c = _.Z.getMessage(s, d),
                u = g.Z.isEditing(s, d);
            null != i &&
                null != c &&
                !u &&
                (a({ contextMenu: !0 }),
                (0, o.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('33862'), n.e('93375'), n.e('37220'), n.e('22315')]).then(n.bind(n, 225138));
                        return (n) => {
                            var a, o;
                            return (0, r.jsx)(
                                e,
                                ((a = (function (e) {
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
                                (o = o =
                                    {
                                        message: c,
                                        channel: i,
                                        mediaItem: t,
                                        shouldHideMediaOptions: l
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(o)).forEach(function (e) {
                                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                                      }),
                                a)
                            );
                        };
                    },
                    {
                        onClose: () => a({ contextMenu: !1 }),
                        context: m
                    }
                ));
        },
        [p, s, d, a, m, l]
    );
}
function W(e, t) {
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
                a = h.Z.getChannel(t);
            null != i &&
                null != a &&
                (r.stopPropagation(),
                (0, j._j)(r, {
                    user: i,
                    channel: a,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function U(e, t) {
    return i.useCallback(
        (n) => {
            let r = b.default.getUser(e),
                i = h.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, j.xS)(n, r, i.guild_id));
        },
        [e, t]
    );
}
function B(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, N.Z)(r, n));
        },
        [r, n]
    );
}
function G(e) {
    var t, n;
    let { groupId: r, message: a, defaultValue: o, popouts: l } = e,
        { canShowReactionsOnMessageHover: s } = d.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        c = a.author.id,
        h = ''.concat(r, ':').concat(c),
        g = i.useRef(o),
        _ =
            ((t = a),
            (n = l),
            i.useCallback(
                (e) => {
                    if (null == e || !(e.nativeEvent instanceof MouseEvent) || Object.values(n).some((e) => e)) return;
                    let r = e.target;
                    if ((0, m.Uw)(t)) {
                        let { x: e, y: n, width: i, height: a } = r.getBoundingClientRect();
                        (0, p.Z)(
                            t,
                            {
                                x: e,
                                y: n,
                                w: i,
                                h: a
                            },
                            !1,
                            u.LL.UserTriggered
                        );
                    }
                },
                [t, n]
            )),
        [b, y] = i.useState(o);
    g.current = b || g.current;
    let x = i.useCallback(
            (e) => {
                s && (0, f.T6)(), b || (v.S.dispatchKeyed(C.LPv.ANIMATE_CHAT_AVATAR, h, !0), _(e), y(!0));
            },
            [b, h, s, _]
        ),
        O = i.useCallback(() => {
            v.S.dispatchKeyed(C.LPv.ANIMATE_CHAT_AVATAR, h, !1), y(!1);
        }, [h]);
    return {
        hasHovered: g.current,
        isHovered: b,
        handleMouseEnter: x,
        handleMouseLeave: O
    };
}
function H(e, t) {
    let [n, r] = i.useState(!1),
        [a, o] = i.useState(!1);
    return {
        handleFocus: i.useCallback(
            (t) => {
                var n, i;
                let a = null !== (i = null === (n = (0, y.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== i ? i : null;
                (t.target === t.currentTarget || t.currentTarget.contains(a)) && (o(!0), r(!0)), null != e && e(t);
            },
            [e]
        ),
        handleBlur: i.useCallback(
            (e) => {
                var n, i;
                let a = null !== (i = null === (n = (0, y.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== i ? i : null;
                (e.target !== e.currentTarget && e.currentTarget.contains(a)) || r(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: a
    };
}
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return i.useCallback(() => {
        null != t &&
            (n
                ? a.Z.show({
                      title: I.NW.string(I.t['j7eA/v']),
                      body: I.NW.formatToPlainString(I.t.dTNNgo, { name: t.author.username }),
                      confirmText: I.NW.string(I.t.BddRzc)
                  })
                : r
                  ? a.Z.show({
                        title: I.NW.string(I.t.XyWoKS),
                        body: I.NW.formatToPlainString(I.t['8t8doK'], { name: t.author.username }),
                        confirmText: I.NW.string(I.t.BddRzc)
                    })
                  : l.Z.jumpToMessage({
                        channelId: t.channel_id,
                        messageId: t.id,
                        flash: !0,
                        returnMessageId: e.id
                    }));
    }, [n, r, e.id, t]);
}
function z(e, t) {
    let n = S('interactionData', e, t);
    return i.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
