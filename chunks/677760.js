n.d(t, { Z: () => w }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(442837),
    l = n(481060),
    s = n(447543),
    c = n(587444),
    u = n(393238),
    d = n(388905),
    h = n(108427),
    p = n(314897),
    _ = n(701190),
    g = n(626135),
    f = n(768581),
    m = n(823379),
    b = n(264229),
    N = n(230224),
    x = n(617730),
    v = n(258356),
    E = n(981631),
    I = n(388032),
    O = n(778710);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function S(e, t) {
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
function j() {
    return (0, r.jsx)('div', {
        className: O.centerFlex,
        children: (0, r.jsx)(l.$jN, {})
    });
}
let y = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case E.r2o.RESOLVED:
        case E.r2o.ACCEPTED:
        case E.r2o.APP_NOT_OPENED:
        case E.r2o.APP_OPENED:
        case E.r2o.ACCEPTING:
        case E.r2o.APP_OPENING:
            return 1;
        case E.r2o.EXPIRED:
        case E.r2o.BANNED:
        case E.r2o.ERROR:
            return 2;
        case E.r2o.RESOLVING:
            return 0;
        default:
            (0, m.vE)(n);
    }
};
function T(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return (null == t ? void 0 : t.state) === E.r2o.BANNED
        ? (0, r.jsx)(c.u, {
              text: I.NW.string(I.t['5AkWAQ']),
              buttonCta: I.NW.string(I.t['8osdkp']),
              onClick: n
          })
        : (0, r.jsx)(c.u, {
              text: I.NW.string(I.t['usP+MT']),
              buttonCta: I.NW.string(I.t['8osdkp']),
              onClick: n
          });
}
function A(e) {
    var { children: t, cardChildren: n, startAnimHeightPx: a, innerStyle: s } = e;
    let { invite: c } = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['children', 'cardChildren', 'startAnimHeightPx', 'innerStyle']),
        [d, h] = i.useState(y(c)),
        { ref: p, height: _ } = (0, u.Z)(),
        g = (0, l.q_F)({
            height: null != _ && 0 !== _ ? ''.concat(_, 'px') : ''.concat(a, 'px'),
            config: o.config.stiff
        });
    return (
        i.useEffect(() => {
            let e = y(c);
            e !== d && h(e);
        }, [c, d]),
        (0, r.jsxs)(o.animated.div, {
            className: O.inviteCard,
            style: g,
            children: [
                (0, r.jsx)(o.animated.div, {
                    className: O.inviteChildContainer,
                    style: g,
                    children: (0, r.jsx)('section', {
                        ref: p,
                        className: null == s ? void 0 : s(d),
                        children: t(d)
                    })
                }),
                n
            ]
        })
    );
}
function R(e) {
    let { invite: t } = e;
    if (null == t || !(0, N.JI)(t)) return null;
    let n = (e) => (null == t ? null : 1 === e ? (0, r.jsx)(v.X, { invite: t }) : null);
    return (0, r.jsx)(
        A,
        S(
            C(
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
function P(e) {
    let { invite: t } = e,
        n = (n) => {
            if (null == t) return (0, r.jsx)(j, {});
            switch (n) {
                case 1:
                    return (0, r.jsx)(x.Z, S(C({}, e), { invite: t }));
                case 2:
                    return (0, r.jsx)(T, S(C({}, e), { invite: t }));
                default:
                    return (0, r.jsx)(j, {});
            }
        },
        i = {
            1: O.inviteCardInner,
            2: O.inviteCardInnerError,
            0: O.inviteCardInnerLoading
        };
    return (0, r.jsx)(
        A,
        S(
            C(
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
function Z(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = null != t ? t : {},
        o = {};
    if ((null == i ? void 0 : i.splash) != null) {
        let e = f.ZP.getGuildSplashURL({
            id: i.id,
            splash: i.splash
        });
        null != e && ((o.backgroundImage = 'url('.concat(e, ')')), (o.backgroundSize = 'cover'));
    }
    return (0, r.jsxs)(d.ZP, {
        theme: E.BRd.DARK,
        className: O.splashBackground,
        style: o,
        contentClassName: O.centerAuthBoxContent,
        children: [(0, r.jsx)(P, S(C({}, e), { onAcceptInvite: n })), (0, r.jsx)(R, C({}, e))]
    });
}
function w(e) {
    let { inviteKey: t, transitionTo: n } = e,
        o = (0, a.e7)([_.Z], () => _.Z.getInvite(t));
    return (
        i.useEffect(() => {
            (0, h.e)('invite_mobile');
        }, []),
        i.useEffect(() => {
            null != o &&
                o.state === E.r2o.RESOLVED &&
                g.default.track(
                    E.rMx.INVITE_VIEWED,
                    {
                        invite_code: t,
                        friends_count: null == o ? void 0 : o.friends_count
                    },
                    { flush: !0 }
                );
        }, [o, t]),
        (0, r.jsx)(Z, {
            invite: o,
            onAcceptInvite: (e) => {
                !(function (e, t, n) {
                    var r, i, o;
                    null == e || e.preventDefault(),
                        g.default.track(E.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, b.jX)(t),
                            guild_id: null == n ? void 0 : null === (r = n.guild) || void 0 === r ? void 0 : r.id,
                            channel_id: null == n ? void 0 : null === (i = n.channel) || void 0 === i ? void 0 : i.id,
                            inviter_id: null == n ? void 0 : null === (o = n.inviter) || void 0 === o ? void 0 : o.id
                        });
                    let a = null != n && n.state !== E.r2o.EXPIRED && n.state !== E.r2o.BANNED ? t : void 0,
                        l = p.default.getFingerprint(),
                        c = null != l ? l : p.default.getId(),
                        u = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                    s.Z.openApp(a, void 0, c, void 0, u);
                })(e, t, o);
            },
            transitionTo: n
        })
    );
}
