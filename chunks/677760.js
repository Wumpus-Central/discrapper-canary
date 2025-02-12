n.d(t, { Z: () => L }), n(47120);
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
    m = n(626135),
    p = n(768581),
    f = n(823379),
    E = n(264229),
    x = n(230224),
    I = n(617730),
    C = n(258356),
    v = n(981631),
    N = n(388032),
    S = n(526967);
function T() {
    return (0, i.jsx)('div', {
        className: S.centerFlex,
        children: (0, i.jsx)(o.$jN, {})
    });
}
let b = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case v.r2o.RESOLVED:
        case v.r2o.ACCEPTED:
        case v.r2o.APP_NOT_OPENED:
        case v.r2o.APP_OPENED:
        case v.r2o.ACCEPTING:
        case v.r2o.APP_OPENING:
            return 1;
        case v.r2o.EXPIRED:
        case v.r2o.BANNED:
        case v.r2o.ERROR:
            return 2;
        case v.r2o.RESOLVING:
            return 0;
        default:
            (0, f.vE)(n);
    }
};
function A(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return (null == t ? void 0 : t.state) === v.r2o.BANNED
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
    let { children: t, cardChildren: n, startAnimHeightPx: a, innerStyle: s, ...c } = e,
        { invite: u } = c,
        [h, _] = r.useState(b(u)),
        { ref: g, height: m } = (0, d.Z)(),
        p = (0, o.q_F)({
            height: null != m && 0 !== m ? ''.concat(m, 'px') : ''.concat(a, 'px'),
            config: l.config.stiff
        });
    return (
        r.useEffect(() => {
            let e = b(u);
            e !== h && _(e);
        }, [u, h]),
        (0, i.jsxs)(l.animated.div, {
            className: S.inviteCard,
            style: p,
            children: [
                (0, i.jsx)(l.animated.div, {
                    className: S.inviteChildContainer,
                    style: p,
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
function Z(e) {
    let { invite: t } = e;
    if (null == t || !(0, x.JI)(t)) return null;
    let n = (e) => (null == t ? null : 1 === e ? (0, i.jsx)(C.X, { invite: t }) : null);
    return (0, i.jsx)(R, {
        startAnimHeightPx: 0,
        innerStyle: () => S.guildInfoInner,
        ...e,
        children: (e) => n(e)
    });
}
function O(e) {
    let { invite: t } = e,
        n = (n) => {
            if (null == t) return (0, i.jsx)(T, {});
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
                    return (0, i.jsx)(T, {});
            }
        },
        r = {
            1: S.inviteCardInner,
            2: S.inviteCardInnerError,
            0: S.inviteCardInnerLoading
        };
    return (0, i.jsx)(R, {
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
        let e = p.ZP.getGuildSplashURL({
            id: r.id,
            splash: r.splash
        });
        null != e && ((l.backgroundImage = 'url('.concat(e, ')')), (l.backgroundSize = 'cover'));
    }
    return (0, i.jsxs)(u.ZP, {
        theme: v.BRd.DARK,
        className: S.splashBackground,
        style: l,
        contentClassName: S.centerAuthBoxContent,
        children: [
            (0, i.jsx)(O, {
                ...e,
                onAcceptInvite: n
            }),
            (0, i.jsx)(Z, { ...e })
        ]
    });
}
function L(e) {
    let { inviteKey: t, transitionTo: n } = e,
        l = (0, a.e7)([g.Z], () => g.Z.getInvite(t));
    return (
        r.useEffect(() => {
            (0, h.e)('invite_mobile');
        }, []),
        r.useEffect(() => {
            null != l &&
                l.state === v.r2o.RESOLVED &&
                m.default.track(
                    v.rMx.INVITE_VIEWED,
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
                        m.default.track(v.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, E.jX)(t),
                            guild_id: null == n ? void 0 : null === (i = n.guild) || void 0 === i ? void 0 : i.id,
                            channel_id: null == n ? void 0 : null === (r = n.channel) || void 0 === r ? void 0 : r.id,
                            inviter_id: null == n ? void 0 : null === (l = n.inviter) || void 0 === l ? void 0 : l.id
                        });
                    let a = null != n && n.state !== v.r2o.EXPIRED && n.state !== v.r2o.BANNED ? t : void 0,
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
