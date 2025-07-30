(n.d(t, { Z: () => w }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(778141),
    s = n(442837),
    a = n(481060),
    o = n(447543),
    c = n(587444),
    u = n(393238),
    d = n(388905),
    h = n(108427),
    p = n(314897),
    g = n(701190),
    m = n(626135),
    f = n(768581),
    _ = n(823379),
    x = n(264229),
    b = n(230224),
    E = n(617730),
    v = n(258356),
    I = n(981631),
    j = n(388032),
    O = n(534962);
function S(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N() {
    return (0, r.jsx)('div', {
        className: O.centerFlex,
        children: (0, r.jsx)(a.$jN, {})
    });
}
let C = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case I.r2o.RESOLVED:
        case I.r2o.ACCEPTED:
        case I.r2o.APP_NOT_OPENED:
        case I.r2o.APP_OPENED:
        case I.r2o.ACCEPTING:
        case I.r2o.APP_OPENING:
            return 1;
        case I.r2o.EXPIRED:
        case I.r2o.BANNED:
        case I.r2o.ERROR:
            return 2;
        case I.r2o.RESOLVING:
            return 0;
        default:
            (0, _.vE)(n);
    }
};
function T(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return (null == t ? void 0 : t.state) === I.r2o.BANNED
        ? (0, r.jsx)(c.u, {
              text: j.intl.string(j.t['5AkWAQ']),
              buttonCta: j.intl.string(j.t['8osdkp']),
              onClick: n
          })
        : (0, r.jsx)(c.u, {
              text: j.intl.string(j.t['usP+MT']),
              buttonCta: j.intl.string(j.t['8osdkp']),
              onClick: n
          });
}
function A(e) {
    var { children: t, cardChildren: n, startAnimHeightPx: s, innerStyle: o } = e;
    let { invite: c } = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['children', 'cardChildren', 'startAnimHeightPx', 'innerStyle']),
        [d, h] = i.useState(C(c)),
        { ref: p, height: g } = (0, u.ZP)(),
        m = (0, a.q_F)({
            height: null != g && 0 !== g ? ''.concat(g, 'px') : ''.concat(s, 'px'),
            config: l.config.stiff
        });
    return (
        i.useEffect(() => {
            let e = C(c);
            e !== d && h(e);
        }, [c, d]),
        (0, r.jsxs)(l.animated.div, {
            className: O.inviteCard,
            style: m,
            children: [
                (0, r.jsx)(l.animated.div, {
                    className: O.inviteChildContainer,
                    style: m,
                    children: (0, r.jsx)('section', {
                        ref: p,
                        className: null == o ? void 0 : o(d),
                        children: t(d)
                    })
                }),
                n
            ]
        })
    );
}
function P(e) {
    let { invite: t } = e;
    if (null == t || !(0, b.JI)(t)) return null;
    let n = (e) => (null == t ? null : 1 === e ? (0, r.jsx)(v.X, { invite: t }) : null);
    return (0, r.jsx)(
        A,
        y(
            S(
                {
                    startAnimHeightPx: 0,
                    innerStyle: () => O.guildInfoInner
                },
                e
            ),
            { children: (e) => n(e) }
        )
    );
}
function Z(e) {
    let { invite: t } = e,
        n = (n) => {
            if (null == t) return (0, r.jsx)(N, {});
            switch (n) {
                case 1:
                    return (0, r.jsx)(E.Z, y(S({}, e), { invite: t }));
                case 2:
                    return (0, r.jsx)(T, y(S({}, e), { invite: t }));
                default:
                    return (0, r.jsx)(N, {});
            }
        },
        i = {
            1: O.inviteCardInner,
            2: O.inviteCardInnerError,
            0: O.inviteCardInnerLoading
        };
    return (0, r.jsx)(
        A,
        y(
            S(
                {
                    startAnimHeightPx: 200,
                    innerStyle: (e) => i[e]
                },
                e
            ),
            { children: (e) => n(e) }
        )
    );
}
function R(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = null != t ? t : {},
        l = {};
    if ((null == i ? void 0 : i.splash) != null) {
        let e = f.ZP.getGuildSplashURL({
            id: i.id,
            splash: i.splash
        });
        null != e && ((l.backgroundImage = 'url('.concat(e, ')')), (l.backgroundSize = 'cover'));
    }
    return (0, r.jsxs)(d.ZP, {
        theme: I.BRd.DARK,
        className: O.splashBackground,
        style: l,
        contentClassName: O.centerAuthBoxContent,
        children: [(0, r.jsx)(Z, y(S({}, e), { onAcceptInvite: n })), (0, r.jsx)(P, S({}, e))]
    });
}
function w(e) {
    let { inviteKey: t, transitionTo: n } = e,
        l = (0, s.e7)([g.Z], () => g.Z.getInvite(t));
    return (
        i.useEffect(() => {
            (0, h.e)('invite_mobile');
        }, []),
        i.useEffect(() => {
            null != l &&
                l.state === I.r2o.RESOLVED &&
                m.default.track(
                    I.rMx.INVITE_VIEWED,
                    {
                        invite_code: t,
                        friends_count: null == l ? void 0 : l.friends_count
                    },
                    { flush: !0 }
                );
        }, [l, t]),
        (0, r.jsx)(R, {
            invite: l,
            onAcceptInvite: (e) => {
                !(function (e, t, n) {
                    var r, i, l;
                    (null == e || e.preventDefault(),
                        m.default.track(I.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, x.jX)(t),
                            guild_id: null == n || null == (r = n.guild) ? void 0 : r.id,
                            channel_id: null == n || null == (i = n.channel) ? void 0 : i.id,
                            inviter_id: null == n || null == (l = n.inviter) ? void 0 : l.id
                        }));
                    let s = null != n && n.state !== I.r2o.EXPIRED && n.state !== I.r2o.BANNED ? t : void 0,
                        a = p.default.getFingerprint(),
                        c = null != a ? a : p.default.getId(),
                        u = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                    o.ZP.openApp(s, void 0, c, void 0, u);
                })(e, t, l);
            },
            transitionTo: n
        })
    );
}
