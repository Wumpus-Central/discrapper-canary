n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i,
    r,
    s = n(200651),
    l = n(192379),
    o = n(476183),
    a = n(442837),
    c = n(481060),
    d = n(447543),
    u = n(587444),
    h = n(393238),
    f = n(388905),
    g = n(108427),
    m = n(314897),
    p = n(701190),
    x = n(626135),
    _ = n(768581),
    E = n(823379),
    I = n(264229),
    v = n(230224),
    N = n(617730),
    C = n(258356),
    b = n(981631),
    T = n(388032),
    Z = n(357070);
function S() {
    return (0, s.jsx)('div', {
        className: Z.centerFlex,
        children: (0, s.jsx)(c.Spinner, {})
    });
}
((r = i || (i = {}))[(r.LOADING = 0)] = 'LOADING'), (r[(r.DETAILS = 1)] = 'DETAILS'), (r[(r.ERROR = 2)] = 'ERROR');
let A = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case b.r2o.RESOLVED:
        case b.r2o.ACCEPTED:
        case b.r2o.APP_NOT_OPENED:
        case b.r2o.APP_OPENED:
        case b.r2o.ACCEPTING:
        case b.r2o.APP_OPENING:
            return 1;
        case b.r2o.EXPIRED:
        case b.r2o.BANNED:
        case b.r2o.ERROR:
            return 2;
        case b.r2o.RESOLVING:
            return 0;
        default:
            (0, E.vE)(n);
    }
};
function j(e) {
    let { invite: t, onAcceptInvite: n } = e;
    if ((null == t ? void 0 : t.state) === b.r2o.BANNED)
        return (0, s.jsx)(u.u, {
            text: T.intl.string(T.t['5AkWAQ']),
            buttonCta: T.intl.string(T.t['8osdkp']),
            onClick: n
        });
    return (0, s.jsx)(u.u, {
        text: T.intl.string(T.t['usP+MT']),
        buttonCta: T.intl.string(T.t['8osdkp']),
        onClick: n
    });
}
function R(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, innerStyle: r, ...a } = e,
        { invite: d } = a,
        [u, f] = l.useState(A(d)),
        { ref: g, height: m } = (0, h.Z)(),
        p = (0, c.useSpring)({
            height: null != m && 0 !== m ? ''.concat(m, 'px') : ''.concat(i, 'px'),
            config: o.config.stiff
        });
    return (
        l.useEffect(() => {
            let e = A(d);
            e !== u && f(e);
        }, [d, u]),
        (0, s.jsxs)(o.animated.div, {
            className: Z.inviteCard,
            style: p,
            children: [
                (0, s.jsx)(o.animated.div, {
                    className: Z.inviteChildContainer,
                    style: p,
                    children: (0, s.jsx)('section', {
                        ref: g,
                        className: null == r ? void 0 : r(u),
                        children: t(u)
                    })
                }),
                n
            ]
        })
    );
}
function P(e) {
    let { invite: t } = e;
    if (null == t || !(0, v.JI)(t)) return null;
    let n = (e) => {
        if (null == t) return null;
        if (1 === e) return (0, s.jsx)(C.X, { invite: t });
        return null;
    };
    return (0, s.jsx)(R, {
        startAnimHeightPx: 0,
        innerStyle: () => Z.guildInfoInner,
        ...e,
        children: (e) => n(e)
    });
}
function L(e) {
    let { invite: t } = e,
        n = (n) => {
            if (null == t) return (0, s.jsx)(S, {});
            switch (n) {
                case 1:
                    return (0, s.jsx)(N.Z, {
                        ...e,
                        invite: t
                    });
                case 2:
                    return (0, s.jsx)(j, {
                        ...e,
                        invite: t
                    });
                default:
                    return (0, s.jsx)(S, {});
            }
        },
        i = {
            1: Z.inviteCardInner,
            2: Z.inviteCardInnerError,
            0: Z.inviteCardInnerLoading
        };
    return (0, s.jsx)(R, {
        startAnimHeightPx: 200,
        innerStyle: (e) => i[e],
        ...e,
        children: (e) => n(e)
    });
}
function O(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = null != t ? t : {},
        r = {};
    if ((null == i ? void 0 : i.splash) != null) {
        let e = _.ZP.getGuildSplashURL({
            id: i.id,
            splash: i.splash
        });
        null != e && ((r.backgroundImage = 'url('.concat(e, ')')), (r.backgroundSize = 'cover'));
    }
    return (0, s.jsxs)(f.ZP, {
        theme: b.BRd.DARK,
        className: Z.splashBackground,
        style: r,
        contentClassName: Z.centerAuthBoxContent,
        children: [
            (0, s.jsx)(L, {
                ...e,
                onAcceptInvite: n
            }),
            (0, s.jsx)(P, { ...e })
        ]
    });
}
function y(e) {
    let { inviteKey: t, transitionTo: n } = e,
        i = (0, a.e7)([p.Z], () => p.Z.getInvite(t));
    return (
        l.useEffect(() => {
            (0, g.e)('invite_mobile');
        }, []),
        l.useEffect(() => {
            null != i &&
                i.state === b.r2o.RESOLVED &&
                x.default.track(
                    b.rMx.INVITE_VIEWED,
                    {
                        invite_code: t,
                        friends_count: null == i ? void 0 : i.friends_count
                    },
                    { flush: !0 }
                );
        }, [i, t]),
        (0, s.jsx)(O, {
            invite: i,
            onAcceptInvite: (e) => {
                !(function (e, t, n) {
                    var i, r, s;
                    null == e || e.preventDefault(),
                        x.default.track(b.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, I.jX)(t),
                            guild_id: null == n ? void 0 : null === (i = n.guild) || void 0 === i ? void 0 : i.id,
                            channel_id: null == n ? void 0 : null === (r = n.channel) || void 0 === r ? void 0 : r.id,
                            inviter_id: null == n ? void 0 : null === (s = n.inviter) || void 0 === s ? void 0 : s.id
                        });
                    let l = null != n && n.state !== b.r2o.EXPIRED && n.state !== b.r2o.BANNED ? t : void 0,
                        o = m.default.getFingerprint(),
                        a = null != o ? o : m.default.getId(),
                        c = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                    d.Z.openApp(l, void 0, a, void 0, c);
                })(e, t, i);
            },
            transitionTo: n
        })
    );
}
