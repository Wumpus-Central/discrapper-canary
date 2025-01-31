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
    h = n(235894),
    _ = n(675478),
    p = n(592125),
    g = n(323873),
    f = n(375954),
    x = n(594174),
    E = n(585483),
    C = n(5967),
    v = n(630388),
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
            E.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
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
        m = (0, v.yE)(u, b.iLy.EPHEMERAL),
        h = (0, c.bp)();
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
                        context: h
                    }
                ));
        },
        [m, o, d, a, h, s]
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
    var t;
    let { groupId: n, message: i, defaultValue: a } = e,
        { canShowReactionsOnMessageHover: r } = d.ZP.useExperiment({ location: 'useHoveredMessage' }, { autoTrackExposure: !1 }),
        s = i.author.id,
        o = ''.concat(n, ':').concat(s),
        c = l.useRef(a),
        p =
            ((t = i),
            l.useCallback(
                (e) => {
                    if (null == e || !(e.nativeEvent instanceof MouseEvent)) return;
                    let n = e.target;
                    if ((0, h.Uw)(t)) {
                        let { x: e, y: i, width: l, height: a } = n.getBoundingClientRect();
                        (0, m.Z)(
                            t,
                            {
                                x: e,
                                y: i,
                                w: l,
                                h: a
                            },
                            !1,
                            u.LL.UserTriggered
                        );
                    }
                },
                [t]
            )),
        [g, f] = l.useState(a);
    c.current = g || c.current;
    let x = l.useCallback(
            (e) => {
                r && (0, _.T6)(), g || (E.S.dispatchKeyed(b.LPv.ANIMATE_CHAT_AVATAR, o, !0), p(e), f(!0));
            },
            [g, o, r, p]
        ),
        C = l.useCallback(() => {
            E.S.dispatchKeyed(b.LPv.ANIMATE_CHAT_AVATAR, o, !1), f(!1);
        }, [o]);
    return {
        hasHovered: c.current,
        isHovered: g,
        handleMouseEnter: x,
        handleMouseLeave: C
    };
}
function V(e, t) {
    let [n, i] = l.useState(!1),
        [a, r] = l.useState(!1);
    return {
        handleFocus: l.useCallback(
            (t) => {
                var n, l;
                let a = null !== (l = null === (n = (0, C.uB)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== l ? l : null;
                (t.target === t.currentTarget || t.currentTarget.contains(a)) && (r(!0), i(!0)), null != e && e(t);
            },
            [e]
        ),
        handleBlur: l.useCallback(
            (e) => {
                var n, l;
                let a = null !== (l = null === (n = (0, C.uB)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== l ? l : null;
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
