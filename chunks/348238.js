n.d(t, {
    $3: function () {
        return V;
    },
    Go: function () {
        return w;
    },
    JC: function () {
        return P;
    },
    NU: function () {
        return M;
    },
    Nk: function () {
        return Z;
    },
    R9: function () {
        return y;
    },
    RN: function () {
        return B;
    },
    Wl: function () {
        return R;
    },
    XO: function () {
        return j;
    },
    Xn: function () {
        return H;
    },
    bb: function () {
        return G;
    },
    qo: function () {
        return k;
    },
    rY: function () {
        return O;
    },
    sR: function () {
        return U;
    },
    tn: function () {
        return F;
    },
    wq: function () {
        return D;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(668781),
    a = n(239091),
    o = n(904245),
    s = n(144144),
    c = n(40851),
    u = n(407477),
    d = n(287941),
    m = n(675478),
    h = n(592125),
    f = n(323873),
    p = n(375954),
    _ = n(594174),
    g = n(585483),
    E = n(5967),
    C = n(630388),
    I = n(358085),
    x = n(51144),
    N = n(91047),
    v = n(50284),
    T = n(981631),
    S = n(388032);
function A(e, t, n) {
    return r.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function b(e, t, n) {
    return r.useCallback(
        (i) => {
            let r = _.default.getUser(e);
            if (null == r) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) {
                n();
                return;
            }
            let l = '@'.concat(x.ZP.getUserTag(r, { decoration: 'never' })),
                a = '<@'.concat(e, '>');
            g.S.dispatchToLastSubscribed(T.CkL.INSERT_TEXT, {
                plainText: l,
                rawText: a
            }),
                s.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function j(e, t, n, i) {
    let r = A('usernameProfile', n, i);
    return b(e.author.id, t.id, r);
}
function R(e, t, n, i) {
    let r = A('referencedUsernameProfile', n, i);
    return b(null == e ? void 0 : e.author.id, t.id, r);
}
function Z(e, t, n, i) {
    let r = A('interactionUsernameProfile', n, i);
    return b(null == e ? void 0 : e.user.id, t.id, r);
}
function P(e, t, n, i) {
    let r = A('referencedUsernameProfile', n, i);
    return b(e, t.id, r);
}
function L(e) {
    return r.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function y(e, t) {
    return L(A('avatarProfile', e, t));
}
function O(e, t) {
    return L(A('referencedAvatarProfile', e, t));
}
function M(e, t) {
    return L(A('interactionAvatarProfile', e, t));
}
function k(e, t, l, o) {
    let { id: s } = t,
        { id: u, flags: d } = e,
        m = (0, C.yE)(d, T.iLy.EPHEMERAL),
        _ = (0, c.bp)();
    return r.useCallback(
        (e, t) => {
            if (m) return;
            if (!I.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let r = h.Z.getChannel(s),
                c = p.Z.getMessage(s, u),
                d = f.Z.isEditing(s, u);
            if (null != r && null != c && !d)
                l({ contextMenu: !0 }),
                    (0, a.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('33862'), n.e('93375'), n.e('37220'), n.e('49315')]).then(n.bind(n, 225138));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    message: c,
                                    channel: r,
                                    mediaItem: t,
                                    shouldHideMediaOptions: o
                                });
                        },
                        {
                            onClose: () => l({ contextMenu: !1 }),
                            context: _
                        }
                    );
        },
        [m, s, u, l, _, o]
    );
}
function D(e, t) {
    return r.useCallback(
        (n) => {
            let i = _.default.getUser(e),
                r = h.Z.getChannel(t);
            null != i && null != r && (n.stopPropagation(), (0, N.Pv)(n, i, r));
        },
        [e, t]
    );
}
function B(e, t, n) {
    return r.useCallback(
        (i) => {
            let r = _.default.getUser(e),
                l = h.Z.getChannel(t);
            null != r &&
                null != l &&
                (i.stopPropagation(),
                (0, N._j)(i, {
                    user: r,
                    channel: l,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function U(e, t) {
    return r.useCallback(
        (n) => {
            let i = _.default.getUser(e),
                r = h.Z.getChannel(t);
            null != i && null != r && (n.stopPropagation(), (0, N.xS)(n, i, r.guild_id));
        },
        [e, t]
    );
}
function w(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return r.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, v.Z)(i, n));
        },
        [i, n]
    );
}
function F(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        { canShowReactionsOnMessageHover: l } = u.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        a = n.author.id,
        o = ''.concat(t, ':').concat(a),
        s = r.useRef(i),
        c = (function (e) {
            return r.useCallback(() => {
                e.hasPotions() && (0, d.Z)(e);
            }, [e]);
        })(n),
        [h, f] = r.useState(i);
    s.current = h || s.current;
    let p = r.useCallback(() => {
            l && (0, m.T6)(), !h && (g.S.dispatchKeyed(T.LPv.ANIMATE_CHAT_AVATAR, o, !0), c(), f(!0));
        }, [h, o, l, c]),
        _ = r.useCallback(() => {
            g.S.dispatchKeyed(T.LPv.ANIMATE_CHAT_AVATAR, o, !1), f(!1);
        }, [o]);
    return {
        hasHovered: s.current,
        isHovered: h,
        handleMouseEnter: p,
        handleMouseLeave: _
    };
}
function G(e, t) {
    let [n, i] = r.useState(!1),
        [l, a] = r.useState(!1),
        o = r.useCallback(
            (t) => {
                var n, r;
                let l = null !== (r = null === (n = (0, E.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== r ? r : null;
                (t.target === t.currentTarget || t.currentTarget.contains(l)) && (a(!0), i(!0)), null != e && e(t);
            },
            [e]
        );
    return {
        handleFocus: o,
        handleBlur: r.useCallback(
            (e) => {
                var n, r;
                let l = null !== (r = null === (n = (0, E.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== r ? r : null;
                (e.target === e.currentTarget || !e.currentTarget.contains(l)) && i(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: l
    };
}
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return r.useCallback(() => {
        null != t &&
            (n
                ? l.Z.show({
                      title: S.intl.string(S.t['j7eA/v']),
                      body: S.intl.formatToPlainString(S.t.dTNNgo, { name: t.author.username }),
                      confirmText: S.intl.string(S.t.BddRzc)
                  })
                : i
                  ? l.Z.show({
                        title: S.intl.string(S.t.XyWoKS),
                        body: S.intl.formatToPlainString(S.t['8t8doK'], { name: t.author.username }),
                        confirmText: S.intl.string(S.t.BddRzc)
                    })
                  : o.Z.jumpToMessage({
                        channelId: t.channel_id,
                        messageId: t.id,
                        flash: !0,
                        returnMessageId: e.id
                    }));
    }, [n, i, e.id, t]);
}
function H(e, t) {
    let n = A('interactionData', e, t);
    return r.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
