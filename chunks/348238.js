(n.d(t, {
    $3: () => z,
    Go: () => Y,
    JC: () => j,
    NU: () => B,
    Nk: () => k,
    R9: () => U,
    RN: () => V,
    Wl: () => x,
    XO: () => L,
    Xn: () => q,
    bb: () => K,
    qo: () => Z,
    rY: () => G,
    sR: () => H,
    tn: () => W,
    wq: () => F
}),
    n(997841),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(239091),
    o = n(904245),
    s = n(144144),
    l = n(40851),
    c = n(407477),
    u = n(992970),
    d = n(287941),
    f = n(235894),
    _ = n(675478),
    p = n(592125),
    h = n(323873),
    m = n(375954),
    g = n(594174),
    E = n(585483),
    b = n(5967),
    y = n(630388),
    O = n(358085),
    v = n(51144),
    I = n(91047),
    T = n(50284),
    S = n(804063),
    A = n(981631);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
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
                N(e, t, n[t]);
            }));
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t, n) {
    return i.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function D(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = g.default.getUser(e);
            if (null == i) return;
            if ((r.preventDefault(), r.stopPropagation(), !r.shiftKey)) return void n();
            let a = '@'.concat(v.ZP.getUserTag(i, { decoration: 'never' })),
                o = '<@'.concat(e, '>');
            (E.S.dispatchToLastSubscribed(A.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: o
            }),
                s.Z.startTyping(t));
        },
        [e, t, n]
    );
}
function L(e, t, n, r) {
    let i = P('usernameProfile', n, r);
    return D(e.author.id, t.id, i);
}
function x(e, t, n, r) {
    let i = P('referencedUsernameProfile', n, r);
    return D(null == e ? void 0 : e.author.id, t.id, i);
}
function k(e, t, n, r) {
    let i = P('interactionUsernameProfile', n, r);
    return D(null == e ? void 0 : e.user.id, t.id, i);
}
function j(e, t, n, r) {
    let i = P('referencedUsernameProfile', n, r);
    return D(e, t.id, i);
}
function M(e) {
    return i.useCallback(
        (t) => {
            (t.preventDefault(), t.stopPropagation(), e());
        },
        [e]
    );
}
function U(e, t) {
    return M(P('avatarProfile', e, t));
}
function G(e, t) {
    return M(P('referencedAvatarProfile', e, t));
}
function B(e, t) {
    return M(P('interactionAvatarProfile', e, t));
}
function Z(e, t, o, s) {
    let { id: c } = t,
        { id: u, flags: d } = e,
        f = (0, y.yE)(d, A.iLy.EPHEMERAL),
        _ = (0, l.bp)();
    return i.useCallback(
        (e, t) => {
            if (f) return;
            if (!O.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let i = p.Z.getChannel(c),
                l = m.Z.getMessage(c, u),
                d = h.Z.isEditing(c, u);
            null == i ||
                null == l ||
                d ||
                (o({ contextMenu: !0 }),
                (0, a.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 225138));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                R(C({}, n), {
                                    message: l,
                                    channel: i,
                                    mediaItem: t,
                                    shouldHideMediaOptions: s
                                })
                            );
                    },
                    {
                        onClose: () => o({ contextMenu: !1 }),
                        context: _
                    }
                ));
        },
        [f, c, u, o, _, s]
    );
}
function F(e, t) {
    return i.useCallback(
        (n) => {
            let r = g.default.getUser(e),
                i = p.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, I.Pv)(n, r, i));
        },
        [e, t]
    );
}
function V(e, t, n) {
    return i.useCallback(
        (r) => {
            let i = g.default.getUser(e),
                a = p.Z.getChannel(t);
            null != i &&
                null != a &&
                (r.stopPropagation(),
                (0, I._j)(r, {
                    user: i,
                    channel: a,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function H(e, t) {
    return i.useCallback(
        (n) => {
            let r = g.default.getUser(e),
                i = p.Z.getChannel(t);
            null != r && null != i && (n.stopPropagation(), (0, I.xS)(n, r, i.guild_id));
        },
        [e, t]
    );
}
function Y(e, t) {
    let { id: n } = e,
        { id: r } = t;
    return i.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, T.Z)(r, n));
        },
        [r, n]
    );
}
function W(e) {
    let { groupId: t, message: n, defaultValue: r, popouts: a } = e,
        { canShowReactionsOnMessageHover: o } = c.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        s = n.author.id,
        l = ''.concat(t, ':').concat(s),
        u = i.useRef(r),
        d = $(n, a),
        [f, p] = i.useState(r);
    u.current = f || u.current;
    let h = i.useCallback(
            (e) => {
                (o && (0, _.T6)(), f || (E.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, l, !0), d(e), p(!0)));
            },
            [f, l, o, d]
        ),
        m = i.useCallback(() => {
            (E.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, l, !1), p(!1));
        }, [l]);
    return {
        hasHovered: u.current,
        isHovered: f,
        handleMouseEnter: h,
        handleMouseLeave: m
    };
}
function K(e, t) {
    let [n, r] = i.useState(!1),
        [a, o] = i.useState(!1);
    return {
        handleFocus: i.useCallback(
            (t) => {
                var n, i;
                let a = null != (i = null == (n = (0, b.uB)(t)) ? void 0 : n.activeElement) ? i : null;
                ((t.target === t.currentTarget || t.currentTarget.contains(a)) && (o(!0), r(!0)), null != e && e(t));
            },
            [e]
        ),
        handleBlur: i.useCallback(
            (e) => {
                var n, i;
                let a = null != (i = null == (n = (0, b.uB)(e)) ? void 0 : n.activeElement) ? i : null;
                ((e.target !== e.currentTarget && e.currentTarget.contains(a)) || r(!1), null != t && t(e));
            },
            [t]
        ),
        isFocused: n,
        hasFocused: a
    };
}
function z(e, t) {
    return i.useCallback(() => {
        let { messageReference: n } = e;
        (null == t || (0, S.Z)(t)) &&
            o.Z.jumpToMessage({
                channelId: n.channel_id,
                messageId: n.message_id,
                flash: !0,
                returnMessageId: e.id
            });
    }, [t, e]);
}
function q(e, t) {
    let n = P('interactionData', e, t);
    return i.useCallback(
        (e) => {
            (e.preventDefault(), e.stopPropagation(), n());
        },
        [n]
    );
}
function $(e, t) {
    return i.useCallback(
        (n) => {
            if (null == n || !(n.nativeEvent instanceof MouseEvent) || Object.values(t).some((e) => e)) return;
            let r = n.target;
            if ((0, f.Uw)(e)) {
                let { x: t, y: n, width: i, height: a } = r.getBoundingClientRect();
                (0, d.Z)(
                    e,
                    {
                        x: t,
                        y: n,
                        w: i,
                        h: a
                    },
                    !1,
                    u.LL.UserTriggered
                );
            }
        },
        [e, t]
    );
}
