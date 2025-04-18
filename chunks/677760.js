n.d(t, { Z: () => w }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(200100),
    o = n(442837),
    l = n(481060),
    a = n(447543),
    c = n(587444),
    u = n(393238),
    d = n(388905),
    h = n(108427),
    g = n(314897),
    p = n(701190),
    m = n(626135),
    f = n(768581),
    _ = n(823379),
    x = n(264229),
    N = n(230224),
    b = n(617730),
    E = n(258356),
    v = n(981631),
    j = n(388032),
    I = n(534962);
function O(e) {
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
function y() {
    return (0, r.jsx)('div', {
        className: I.centerFlex,
        children: (0, r.jsx)(l.$jN, {})
    });
}
let C = (e) => {
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
            (0, _.vE)(n);
    }
};
function P(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return (null == t ? void 0 : t.state) === v.r2o.BANNED
        ? (0, r.jsx)(c.u, {
              text: j.NW.string(j.t['5AkWAQ']),
              buttonCta: j.NW.string(j.t['8osdkp']),
              onClick: n
          })
        : (0, r.jsx)(c.u, {
              text: j.NW.string(j.t['usP+MT']),
              buttonCta: j.NW.string(j.t['8osdkp']),
              onClick: n
          });
}
function A(e) {
    var { children: t, cardChildren: n, startAnimHeightPx: o, innerStyle: a } = e;
    let { invite: c } = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['children', 'cardChildren', 'startAnimHeightPx', 'innerStyle']),
        [d, h] = i.useState(C(c)),
        { ref: g, height: p } = (0, u.ZP)(),
        m = (0, l.q_F)({
            height: null != p && 0 !== p ? ''.concat(p, 'px') : ''.concat(o, 'px'),
            config: s.config.stiff
        });
    return (
        i.useEffect(() => {
            let e = C(c);
            e !== d && h(e);
        }, [c, d]),
        (0, r.jsxs)(s.animated.div, {
            className: I.inviteCard,
            style: m,
            children: [
                (0, r.jsx)(s.animated.div, {
                    className: I.inviteChildContainer,
                    style: m,
                    children: (0, r.jsx)('section', {
                        ref: g,
                        className: null == a ? void 0 : a(d),
                        children: t(d)
                    })
                }),
                n
            ]
        })
    );
}
function T(e) {
    let { invite: t } = e;
    if (null == t || !(0, N.JI)(t)) return null;
    let n = (e) => (null == t ? null : 1 === e ? (0, r.jsx)(E.X, { invite: t }) : null);
    return (0, r.jsx)(
        A,
        S(
            O(
                {
                    startAnimHeightPx: 0,
                    innerStyle: () => I.guildInfoInner
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
            if (null == t) return (0, r.jsx)(y, {});
            switch (n) {
                case 1:
                    return (0, r.jsx)(b.Z, S(O({}, e), { invite: t }));
                case 2:
                    return (0, r.jsx)(P, S(O({}, e), { invite: t }));
                default:
                    return (0, r.jsx)(y, {});
            }
        },
        i = {
            1: I.inviteCardInner,
            2: I.inviteCardInnerError,
            0: I.inviteCardInnerLoading
        };
    return (0, r.jsx)(
        A,
        S(
            O(
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
        s = {};
    if ((null == i ? void 0 : i.splash) != null) {
        let e = f.ZP.getGuildSplashURL({
            id: i.id,
            splash: i.splash
        });
        null != e && ((s.backgroundImage = 'url('.concat(e, ')')), (s.backgroundSize = 'cover'));
    }
    return (0, r.jsxs)(d.ZP, {
        theme: v.BRd.DARK,
        className: I.splashBackground,
        style: s,
        contentClassName: I.centerAuthBoxContent,
        children: [(0, r.jsx)(Z, S(O({}, e), { onAcceptInvite: n })), (0, r.jsx)(T, O({}, e))]
    });
}
function w(e) {
    let { inviteKey: t, transitionTo: n } = e,
        s = (0, o.e7)([p.Z], () => p.Z.getInvite(t));
    return (
        i.useEffect(() => {
            (0, h.e)('invite_mobile');
        }, []),
        i.useEffect(() => {
            null != s &&
                s.state === v.r2o.RESOLVED &&
                m.default.track(
                    v.rMx.INVITE_VIEWED,
                    {
                        invite_code: t,
                        friends_count: null == s ? void 0 : s.friends_count
                    },
                    { flush: !0 }
                );
        }, [s, t]),
        (0, r.jsx)(R, {
            invite: s,
            onAcceptInvite: (e) => {
                !(function (e, t, n) {
                    var r, i, s;
                    null == e || e.preventDefault(),
                        m.default.track(v.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, x.jX)(t),
                            guild_id: null == n || null == (r = n.guild) ? void 0 : r.id,
                            channel_id: null == n || null == (i = n.channel) ? void 0 : i.id,
                            inviter_id: null == n || null == (s = n.inviter) ? void 0 : s.id
                        });
                    let o = null != n && n.state !== v.r2o.EXPIRED && n.state !== v.r2o.BANNED ? t : void 0,
                        l = g.default.getFingerprint(),
                        c = null != l ? l : g.default.getId(),
                        u = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                    a.ZP.openApp(o, void 0, c, void 0, u);
                })(e, t, s);
            },
            transitionTo: n
        })
    );
}
