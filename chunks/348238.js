n.d(t, {
    $3: () => z,
    Go: () => G,
    JC: () => P,
    NU: () => D,
    Nk: () => L,
    R9: () => M,
    RN: () => U,
    Wl: () => R,
    XO: () => Z,
    Xn: () => W,
    bb: () => V,
    qo: () => w,
    rY: () => O,
    sR: () => B,
    tn: () => H,
    wq: () => F
}),
    n(789020),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(668781),
    r = n(239091),
    s = n(904245),
    o = n(144144),
    c = n(40851),
    d = n(407477),
    u = n(992970),
    m = n(287941),
    _ = n(235894),
    h = n(675478),
    p = n(592125),
    g = n(323873),
    f = n(375954),
    x = n(594174),
    C = n(585483),
    v = n(5967),
    E = n(630388),
    I = n(358085),
    N = n(51144),
    S = n(91047),
    T = n(50284),
    b = n(981631),
    A = n(388032);
function j(e, t, n) {
    return l.useCallback(() => {
        n({ [e]: !t });
    }, [e, n, t]);
}
function y(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = x.default.getUser(e);
            if (null == l) return;
            if ((i.preventDefault(), i.stopPropagation(), !i.shiftKey)) {
                n();
                return;
            }
            let a = '@'.concat(N.ZP.getUserTag(l, { decoration: 'never' })),
                r = '<@'.concat(e, '>');
            C.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
                plainText: a,
                rawText: r
            }),
                o.Z.startTyping(t);
        },
        [e, t, n]
    );
}
function Z(e, t, n, i) {
    let l = j('usernameProfile', n, i);
    return y(e.author.id, t.id, l);
}
function R(e, t, n, i) {
    let l = j('referencedUsernameProfile', n, i);
    return y(null == e ? void 0 : e.author.id, t.id, l);
}
function L(e, t, n, i) {
    let l = j('interactionUsernameProfile', n, i);
    return y(null == e ? void 0 : e.user.id, t.id, l);
}
function P(e, t, n, i) {
    let l = j('referencedUsernameProfile', n, i);
    return y(e, t.id, l);
}
function k(e) {
    return l.useCallback(
        (t) => {
            t.preventDefault(), t.stopPropagation(), e();
        },
        [e]
    );
}
function M(e, t) {
    return k(j('avatarProfile', e, t));
}
function O(e, t) {
    return k(j('referencedAvatarProfile', e, t));
}
function D(e, t) {
    return k(j('interactionAvatarProfile', e, t));
}
function w(e, t, a, s) {
    let { id: o } = t,
        { id: d, flags: u } = e,
        m = (0, E.yE)(u, b.iLy.EPHEMERAL),
        _ = (0, c.bp)();
    return l.useCallback(
        (e, t) => {
            if (m) return;
            if (!I.isPlatformEmbedded) {
                let t = e.target;
                if (('A' === t.tagName && '' !== t.textContent) || null == window.getSelection) return;
                let n = window.getSelection();
                if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return;
            }
            let l = p.Z.getChannel(o),
                c = f.Z.getMessage(o, d),
                u = g.Z.isEditing(o, d);
            null != l &&
                null != c &&
                !u &&
                (a({ contextMenu: !0 }),
                (0, r.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e('33862'), n.e('93375'), n.e('37220'), n.e('49315')]).then(n.bind(n, 225138));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                message: c,
                                channel: l,
                                mediaItem: t,
                                shouldHideMediaOptions: s
                            });
                    },
                    {
                        onClose: () => a({ contextMenu: !1 }),
                        context: _
                    }
                ));
        },
        [m, o, d, a, _, s]
    );
}
function F(e, t) {
    return l.useCallback(
        (n) => {
            let i = x.default.getUser(e),
                l = p.Z.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, S.Pv)(n, i, l));
        },
        [e, t]
    );
}
function U(e, t, n) {
    return l.useCallback(
        (i) => {
            let l = x.default.getUser(e),
                a = p.Z.getChannel(t);
            null != l &&
                null != a &&
                (i.stopPropagation(),
                (0, S._j)(i, {
                    user: l,
                    channel: a,
                    moderationAlertId: n
                }));
        },
        [e, t, n]
    );
}
function B(e, t) {
    return l.useCallback(
        (n) => {
            let i = x.default.getUser(e),
                l = p.Z.getChannel(t);
            null != i && null != l && (n.stopPropagation(), (0, S.xS)(n, i, l.guild_id));
        },
        [e, t]
    );
}
function G(e, t) {
    let { id: n } = e,
        { id: i } = t;
    return l.useCallback(
        (e) => {
            e.altKey && (e.preventDefault(), (0, T.Z)(i, n));
        },
        [i, n]
    );
}
function H(e) {
    var t, n;
    let { groupId: i, message: a, defaultValue: r, popouts: s } = e,
        { canShowReactionsOnMessageHover: o } = d.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        c = a.author.id,
        p = ''.concat(i, ':').concat(c),
        g = l.useRef(r),
        f =
            ((t = a),
            (n = s),
            l.useCallback(
                (e) => {
                    if (null == e || !(e.nativeEvent instanceof MouseEvent) || Object.values(n).some((e) => e)) return;
                    let i = e.target;
                    if ((0, _.Uw)(t)) {
                        let { x: e, y: n, width: l, height: a } = i.getBoundingClientRect();
                        (0, m.Z)(
                            t,
                            {
                                x: e,
                                y: n,
                                w: l,
                                h: a
                            },
                            !1,
                            u.LL.UserTriggered
                        );
                    }
                },
                [t, n]
            )),
        [x, v] = l.useState(r);
    g.current = x || g.current;
    let E = l.useCallback(
            (e) => {
                o && (0, h.T6)(), x || (C.S.dispatchKeyed(b.LPv.ANIMATE_CHAT_AVATAR, p, !0), f(e), v(!0));
            },
            [x, p, o, f]
        ),
        I = l.useCallback(() => {
            C.S.dispatchKeyed(b.LPv.ANIMATE_CHAT_AVATAR, p, !1), v(!1);
        }, [p]);
    return {
        hasHovered: g.current,
        isHovered: x,
        handleMouseEnter: E,
        handleMouseLeave: I
    };
}
function V(e, t) {
    let [n, i] = l.useState(!1),
        [a, r] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                var n, l;
                let a = null !== (l = null === (n = (0, v.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== l ? l : null;
                (t.target === t.currentTarget || t.currentTarget.contains(a)) && (r(!0), i(!0)), null != e && e(t);
            },
            [e]
        ),
        handleBlur: l.useCallback(
            (e) => {
                var n, l;
                let a = null !== (l = null === (n = (0, v.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== l ? l : null;
                (e.target !== e.currentTarget && e.currentTarget.contains(a)) || i(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n,
        hasFocused: a
    };
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return l.useCallback(() => {
        null != t &&
            (n
                ? a.Z.show({
                      title: A.intl.string(A.t['j7eA/v']),
                      body: A.intl.formatToPlainString(A.t.dTNNgo, { name: t.author.username }),
                      confirmText: A.intl.string(A.t.BddRzc)
                  })
                : i
                  ? a.Z.show({
                        title: A.intl.string(A.t.XyWoKS),
                        body: A.intl.formatToPlainString(A.t['8t8doK'], { name: t.author.username }),
                        confirmText: A.intl.string(A.t.BddRzc)
                    })
                  : s.Z.jumpToMessage({
                        channelId: t.channel_id,
                        messageId: t.id,
                        flash: !0,
                        returnMessageId: e.id
                    }));
    }, [n, i, e.id, t]);
}
function W(e, t) {
    let n = j('interactionData', e, t);
    return l.useCallback(
        (e) => {
            e.preventDefault(), e.stopPropagation(), n();
        },
        [n]
    );
}
