n.d(t, {
    $3: function () {
        return H;
    },
    Go: function () {
        return F;
    },
    JC: function () {
        return L;
    },
    NU: function () {
        return D;
    },
    Nk: function () {
        return P;
    },
    R9: function () {
        return O;
    },
    RN: function () {
        return B;
    },
    Wl: function () {
        return Z;
    },
    XO: function () {
        return R;
    },
    Xn: function () {
        return z;
    },
    bb: function () {
        return V;
    },
    qo: function () {
        return k;
    },
    rY: function () {
        return M;
    },
    sR: function () {
        return w;
    },
    tn: function () {
        return G;
    },
    wq: function () {
        return U;
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
    d = n(407477),
    u = n(287941),
    m = n(235894),
    h = n(675478),
    f = n(592125),
    p = n(323873),
    _ = n(375954),
    g = n(594174),
    E = n(585483),
    C = n(5967),
    I = n(630388),
    x = n(358085),
    N = n(51144),
    v = n(91047),
    T = n(50284),
    S = n(981631),
    A = n(388032);
function b(e, t, n) {
    return r.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function j(e, t, n) {
    return r.useCallback(
        (i) => {
            let r = g.default.getUser(e);
            if (null == r) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) {
                n();
                return;
            }
            let l = '@'.concat(N.ZP.getUserTag(r, { decoration: 'never' })),
                a = '<@'.concat(e, '>');
            E.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
                plainText: l,
                rawText: a
            }),
                s.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function R(e, t, n, i) {
    let r = b('usernameProfile', n, i);
    return j(e.author.id, t.id, r);
}
function Z(e, t, n, i) {
    let r = b('referencedUsernameProfile', n, i);
    return j(null == e ? void 0 : e.author.id, t.id, r);
}
function P(e, t, n, i) {
    let r = b('interactionUsernameProfile', n, i);
    return j(null == e ? void 0 : e.user.id, t.id, r);
}
function L(e, t, n, i) {
    let r = b('referencedUsernameProfile', n, i);
    return j(e, t.id, r);
}
function y(e) {
    return r.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function O(e, t) {
    return y(b('avatarProfile', e, t));
}
function M(e, t) {
    return y(b('referencedAvatarProfile', e, t));
}
function D(e, t) {
    return y(b('interactionAvatarProfile', e, t));
}
function k(e, t, l, o) {
    let { id: s } = t,
        { id: d, flags: u } = e,
        m = (0, I.yE)(u, S.iLy.EPHEMERAL),
        h = (0, c.bp)();
    return r.useCallback(
        (e, t) => {
            if (m) return;
            if (!x.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let r = f.Z.getChannel(s),
                c = _.Z.getMessage(s, d),
                u = p.Z.isEditing(s, d);
            if (null != r && null != c && !u)
                l({ contextMenu: !0 }),
                    (0, a.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('33862'), n.e('93375'), n.e('37220'), n.e('56344')]).then(n.bind(n, 225138));
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
                            context: h
                        }
                    );
        },
        [m, s, d, l, h, o]
    );
}
function U(e, t) {
    return r.useCallback(
        (n) => {
            let i = g.default.getUser(e),
                r = f.Z.getChannel(t);
            null != i && null != r && (n.stopPropagation(), (0, v.Pv)(n, i, r));
        },
        [e, t]
    );
}
function B(e, t, n) {
    return r.useCallback(
        (i) => {
            let r = g.default.getUser(e),
                l = f.Z.getChannel(t);
            null != r &&
                null != l &&
                (i.stopPropagation(),
                (0, v._j)(i, {
                    user: r,
                    channel: l,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function w(e, t) {
    return r.useCallback(
        (n) => {
            let i = g.default.getUser(e),
                r = f.Z.getChannel(t);
            null != i && null != r && (n.stopPropagation(), (0, v.xS)(n, i, r.guild_id));
        },
        [e, t]
    );
}
function F(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return r.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, T.Z)(i, n));
        },
        [i, n]
    );
}
function G(e) {
    let { groupId: t, message: n, defaultValue: i } = e,
        { canShowReactionsOnMessageHover: l } = d.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        a = n.author.id,
        o = ''.concat(t, ':').concat(a),
        s = r.useRef(i),
        c = (function (e) {
            return r.useCallback(
                (t) => {
                    if (!(t.nativeEvent instanceof MouseEvent)) return;
                    let n = t.target;
                    if ((0, m.U)(e)) {
                        let { x: t, y: i, width: r, height: l } = n.getBoundingClientRect();
                        (0, u.Z)(e, {
                            x: t,
                            y: i,
                            w: r,
                            h: l
                        });
                    }
                },
                [e]
            );
        })(n),
        [f, p] = r.useState(i);
    s.current = f || s.current;
    let _ = r.useCallback(
            (e) => {
                l && (0, h.T6)(), !f && (E.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, o, !0), c(e), p(!0));
            },
            [f, o, l, c]
        ),
        g = r.useCallback(() => {
            E.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, o, !1), p(!1);
        }, [o]);
    return {
        hasHovered: s.current,
        isHovered: f,
        handleMouseEnter: _,
        handleMouseLeave: g
    };
}
function V(e, t) {
    let [n, i] = r.useState(!1),
        [l, a] = r.useState(!1),
        o = r.useCallback(
            (t) => {
                var n, r;
                let l = null !== (r = null === (n = (0, C.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== r ? r : null;
                (t.target === t.currentTarget || t.currentTarget.contains(l)) && (a(!0), i(!0)), null != e && e(t);
            },
            [e]
        );
    return {
        handleFocus: o,
        handleBlur: r.useCallback(
            (e) => {
                var n, r;
                let l = null !== (r = null === (n = (0, C.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== r ? r : null;
                (e.target === e.currentTarget || !e.currentTarget.contains(l)) && i(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: l
    };
}
function H(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return r.useCallback(() => {
        null != t &&
            (n
                ? l.Z.show({
                      title: A.intl.string(A.t['j7eA/v']),
                      body: A.intl.formatToPlainString(A.t.dTNNgo, { name: t.author.username }),
                      confirmText: A.intl.string(A.t.BddRzc)
                  })
                : i
                  ? l.Z.show({
                        title: A.intl.string(A.t.XyWoKS),
                        body: A.intl.formatToPlainString(A.t['8t8doK'], { name: t.author.username }),
                        confirmText: A.intl.string(A.t.BddRzc)
                    })
                  : o.Z.jumpToMessage({
                        channelId: t.channel_id,
                        messageId: t.id,
                        flash: !0,
                        returnMessageId: e.id
                    }));
    }, [n, i, e.id, t]);
}
function z(e, t) {
    let n = b('interactionData', e, t);
    return r.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
