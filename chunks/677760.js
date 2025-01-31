n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(642128),
    a = n(442837),
    o = n(481060),
    s = n(447543),
    c = n(587444),
    d = n(393238),
    u = n(388905),
    h = n(108427),
    _ = n(314897),
    g = n(701190),
    p = n(626135),
    m = n(768581),
    f = n(823379),
    E = n(264229),
    I = n(230224),
    x = n(617730),
    C = n(258356),
    N = n(981631),
    v = n(388032),
    T = n(357070);
function S() {
    return (0, i.jsx)('div', {
        className: T.centerFlex,
        children: (0, i.jsx)(o.$jN, {})
    });
}
let A = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case N.r2o.RESOLVED:
        case N.r2o.ACCEPTED:
        case N.r2o.APP_NOT_OPENED:
        case N.r2o.APP_OPENED:
        case N.r2o.ACCEPTING:
        case N.r2o.APP_OPENING:
            return 1;
        case N.r2o.EXPIRED:
        case N.r2o.BANNED:
        case N.r2o.ERROR:
            return 2;
        case N.r2o.RESOLVING:
            return 0;
        default:
            (0, f.vE)(n);
    }
};
function b(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return (null == t ? void 0 : t.state) === N.r2o.BANNED
        ? (0, i.jsx)(c.u, {
              text: v.intl.string(v.t['5AkWAQ']),
              buttonCta: v.intl.string(v.t['8osdkp']),
              onClick: n
          })
        : (0, i.jsx)(c.u, {
              text: v.intl.string(v.t['usP+MT']),
              buttonCta: v.intl.string(v.t['8osdkp']),
              onClick: n
          });
}
function Z(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: a, innerStyle: s, ...c } = e,
        { invite: u } = c,
        [h, _] = r.useState(A(u)),
        { ref: g, height: p } = (0, d.Z)(),
        m = (0, o.q_F)({
            height: null != p && 0 !== p ? ''.concat(p, 'px') : ''.concat(a, 'px'),
            config: l.config.stiff
        });
    return (
        r.useEffect(() => {
            let e = A(u);
            e !== h && _(e);
        }, [u, h]),
        (0, i.jsxs)(l.animated.div, {
            className: T.inviteCard,
            style: m,
            children: [
                (0, i.jsx)(l.animated.div, {
                    className: T.inviteChildContainer,
                    style: m,
                    children: (0, i.jsx)('section', {
                        ref: g,
                        className: null == s ? void 0 : s(h),
                        children: t(h)
                    })
                }),
                n
            ]
        })
    );
}
function R(e) {
    let { invite: t } = e;
    if (null == t || !(0, I.JI)(t)) return null;
    let n = (e) => (null == t ? null : 1 === e ? (0, i.jsx)(C.X, { invite: t }) : null);
    return (0, i.jsx)(Z, {
        startAnimHeightPx: 0,
        innerStyle: () => T.guildInfoInner,
        ...e,
        children: (e) => n(e)
    });
}
function L(e) {
    let { invite: t } = e,
        n = (n) => {
            if (null == t) return (0, i.jsx)(S, {});
            switch (n) {
                case 1:
                    return (0, i.jsx)(x.Z, {
                        ...e,
                        invite: t
                    });
                case 2:
                    return (0, i.jsx)(b, {
                        ...e,
                        invite: t
                    });
                default:
                    return (0, i.jsx)(S, {});
            }
        },
        r = {
            1: T.inviteCardInner,
            2: T.inviteCardInnerError,
            0: T.inviteCardInnerLoading
        };
    return (0, i.jsx)(Z, {
        startAnimHeightPx: 200,
        innerStyle: (e) => r[e],
        ...e,
        children: (e) => n(e)
    });
}
function j(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: r } = null != t ? t : {},
        l = {};
    if ((null == r ? void 0 : r.splash) != null) {
        let e = m.ZP.getGuildSplashURL({
            id: r.id,
            splash: r.splash
        });
        null != e && ((l.backgroundImage = 'url('.concat(e, ')')), (l.backgroundSize = 'cover'));
    }
    return (0, i.jsxs)(u.ZP, {
        theme: N.BRd.DARK,
        className: T.splashBackground,
        style: l,
        contentClassName: T.centerAuthBoxContent,
        children: [
            (0, i.jsx)(L, {
                ...e,
                onAcceptInvite: n
            }),
            (0, i.jsx)(R, { ...e })
        ]
    });
}
function O(e) {
    let { inviteKey: t, transitionTo: n } = e,
        l = (0, a.e7)([g.Z], () => g.Z.getInvite(t));
    return (
        r.useEffect(() => {
            (0, h.e)('invite_mobile');
        }, []),
        r.useEffect(() => {
            null != l &&
                l.state === N.r2o.RESOLVED &&
                p.default.track(
                    N.rMx.INVITE_VIEWED,
                    {
                        invite_code: t,
                        friends_count: null == l ? void 0 : l.friends_count
                    },
                    { flush: !0 }
                );
        }, [l, t]),
        (0, i.jsx)(j, {
            invite: l,
            onAcceptInvite: (e) => {
                !(function (e, t, n) {
                    var i, r, l;
                    null == e || e.preventDefault(),
                        p.default.track(N.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, E.jX)(t),
                            guild_id: null == n ? void 0 : null === (i = n.guild) || void 0 === i ? void 0 : i.id,
                            channel_id: null == n ? void 0 : null === (r = n.channel) || void 0 === r ? void 0 : r.id,
                            inviter_id: null == n ? void 0 : null === (l = n.inviter) || void 0 === l ? void 0 : l.id
                        });
                    let a = null != n && n.state !== N.r2o.EXPIRED && n.state !== N.r2o.BANNED ? t : void 0,
                        o = _.default.getFingerprint(),
                        c = null != o ? o : _.default.getId(),
                        d = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                    s.Z.openApp(a, void 0, c, void 0, d);
                })(e, t, l);
            },
            transitionTo: n
        })
    );
}
