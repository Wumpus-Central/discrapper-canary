n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(642128),
    l = n(442837),
    o = n(481060),
    s = n(447543),
    c = n(587444),
    d = n(393238),
    u = n(388905),
    h = n(108427),
    _ = n(314897),
    m = n(701190),
    g = n(626135),
    p = n(768581),
    f = n(823379),
    x = n(264229),
    E = n(230224),
    I = n(617730),
    v = n(258356),
    C = n(981631),
    N = n(388032),
    b = n(526967);
function S() {
    return (0, i.jsx)('div', {
        className: b.centerFlex,
        children: (0, i.jsx)(o.$jN, {})
    });
}
let T = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case C.r2o.RESOLVED:
        case C.r2o.ACCEPTED:
        case C.r2o.APP_NOT_OPENED:
        case C.r2o.APP_OPENED:
        case C.r2o.ACCEPTING:
        case C.r2o.APP_OPENING:
            return 1;
        case C.r2o.EXPIRED:
        case C.r2o.BANNED:
        case C.r2o.ERROR:
            return 2;
        case C.r2o.RESOLVING:
            return 0;
        default:
            (0, f.vE)(n);
    }
};
function A(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return (null == t ? void 0 : t.state) === C.r2o.BANNED
        ? (0, i.jsx)(c.u, {
              text: N.intl.string(N.t['5AkWAQ']),
              buttonCta: N.intl.string(N.t['8osdkp']),
              onClick: n
          })
        : (0, i.jsx)(c.u, {
              text: N.intl.string(N.t['usP+MT']),
              buttonCta: N.intl.string(N.t['8osdkp']),
              onClick: n
          });
}
function R(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: l, innerStyle: s, ...c } = e,
        { invite: u } = c,
        [h, _] = r.useState(T(u)),
        { ref: m, height: g } = (0, d.Z)(),
        p = (0, o.q_F)({
            height: null != g && 0 !== g ? ''.concat(g, 'px') : ''.concat(l, 'px'),
            config: a.config.stiff
        });
    return (
        r.useEffect(() => {
            let e = T(u);
            e !== h && _(e);
        }, [u, h]),
        (0, i.jsxs)(a.animated.div, {
            className: b.inviteCard,
            style: p,
            children: [
                (0, i.jsx)(a.animated.div, {
                    className: b.inviteChildContainer,
                    style: p,
                    children: (0, i.jsx)('section', {
                        ref: m,
                        className: null == s ? void 0 : s(h),
                        children: t(h)
                    })
                }),
                n
            ]
        })
    );
}
function Z(e) {
    let { invite: t } = e;
    if (null == t || !(0, E.JI)(t)) return null;
    let n = (e) => (null == t ? null : 1 === e ? (0, i.jsx)(v.X, { invite: t }) : null);
    return (0, i.jsx)(R, {
        startAnimHeightPx: 0,
        innerStyle: () => b.guildInfoInner,
        ...e,
        children: (e) => n(e)
    });
}
function j(e) {
    let { invite: t } = e,
        n = (n) => {
            if (null == t) return (0, i.jsx)(S, {});
            switch (n) {
                case 1:
                    return (0, i.jsx)(I.Z, {
                        ...e,
                        invite: t
                    });
                case 2:
                    return (0, i.jsx)(A, {
                        ...e,
                        invite: t
                    });
                default:
                    return (0, i.jsx)(S, {});
            }
        },
        r = {
            1: b.inviteCardInner,
            2: b.inviteCardInnerError,
            0: b.inviteCardInnerLoading
        };
    return (0, i.jsx)(R, {
        startAnimHeightPx: 200,
        innerStyle: (e) => r[e],
        ...e,
        children: (e) => n(e)
    });
}
function O(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: r } = null != t ? t : {},
        a = {};
    if ((null == r ? void 0 : r.splash) != null) {
        let e = p.ZP.getGuildSplashURL({
            id: r.id,
            splash: r.splash
        });
        null != e && ((a.backgroundImage = 'url('.concat(e, ')')), (a.backgroundSize = 'cover'));
    }
    return (0, i.jsxs)(u.ZP, {
        theme: C.BRd.DARK,
        className: b.splashBackground,
        style: a,
        contentClassName: b.centerAuthBoxContent,
        children: [
            (0, i.jsx)(j, {
                ...e,
                onAcceptInvite: n
            }),
            (0, i.jsx)(Z, { ...e })
        ]
    });
}
function L(e) {
    let { inviteKey: t, transitionTo: n } = e,
        a = (0, l.e7)([m.Z], () => m.Z.getInvite(t));
    return (
        r.useEffect(() => {
            (0, h.e)('invite_mobile');
        }, []),
        r.useEffect(() => {
            null != a &&
                a.state === C.r2o.RESOLVED &&
                g.default.track(
                    C.rMx.INVITE_VIEWED,
                    {
                        invite_code: t,
                        friends_count: null == a ? void 0 : a.friends_count
                    },
                    { flush: !0 }
                );
        }, [a, t]),
        (0, i.jsx)(O, {
            invite: a,
            onAcceptInvite: (e) => {
                !(function (e, t, n) {
                    var i, r, a;
                    null == e || e.preventDefault(),
                        g.default.track(C.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, x.jX)(t),
                            guild_id: null == n ? void 0 : null === (i = n.guild) || void 0 === i ? void 0 : i.id,
                            channel_id: null == n ? void 0 : null === (r = n.channel) || void 0 === r ? void 0 : r.id,
                            inviter_id: null == n ? void 0 : null === (a = n.inviter) || void 0 === a ? void 0 : a.id
                        });
                    let l = null != n && n.state !== C.r2o.EXPIRED && n.state !== C.r2o.BANNED ? t : void 0,
                        o = _.default.getFingerprint(),
                        c = null != o ? o : _.default.getId(),
                        d = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                    s.Z.openApp(l, void 0, c, void 0, d);
                })(e, t, a);
            },
            transitionTo: n
        })
    );
}
