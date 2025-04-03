n.d(t, { Z: () => R }), n(47120), n(266796), n(566702);
var r = n(200651);
n(192379);
var i = n(666572),
    a = n(373793),
    l = n(399606),
    o = n(477690),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(915346),
    p = n(783097),
    m = n(176412),
    f = n(213459),
    h = n(581364),
    g = n(321231),
    _ = n(506895),
    b = n(230171),
    x = n(835473),
    y = n(749681),
    E = n(258971),
    v = n(914010),
    O = n(624138),
    N = n(566620),
    j = n(365415),
    C = n(574952),
    I = n(147865),
    S = n(778569),
    T = n(50523),
    P = n(49898),
    A = n(388032),
    w = n(536231);
function Z() {
    return (Z =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
let k = (0, O.Mg)(o.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function R(e) {
    var t, n, o, O;
    let { applicationId: R, customId: D, referrerId: L, embedUrl: M, linkId: W } = e,
        { analyticsLocations: U } = (0, u.ZP)(c.Z.ACTIVITY_BOOKMARK),
        [F] = (0, x.Z)([R]),
        B = (0, l.e7)([v.Z], () => {
            var e;
            return null != (e = v.Z.getGuildId()) ? e : void 0;
        }),
        G = null == F || null == (t = F.bot) ? void 0 : t.id,
        H = null != F && (0, p.ye)(F),
        { currentChannelId: V, instanceId: z, isCurrentlyInInstance: K, canLaunchInChannel: Y } = (0, _.c)(R),
        X = (0, C.Z)(),
        q = (0, I.ZP)(null != (o = null == F ? void 0 : F.maxParticipants) ? o : 0),
        Q = (0, S.Z)({
            applicationId: R,
            size: k,
            names: ['embedded_cover']
        }),
        J = null != (O = null == F ? void 0 : F.id) ? O : '0',
        $ = (0, h.TK)(J, (0, f.PL)(!0, !1)),
        ee = (0, h.TK)(J, (0, f.LD)(B, !1)),
        et = async () => {
            if ((null == F ? void 0 : F.id) != null)
                if (Y)
                    (0, N.G6)({
                        channelId: null != V ? V : void 0,
                        applicationId: F.id,
                        isStart: null == z,
                        instanceId: null != z ? z : void 0,
                        embeddedActivitiesManager: X,
                        customId: D,
                        referrerId: L,
                        analyticsLocations: U
                    });
                else {
                    if (null == G) return;
                    try {
                        await (0, d.W)({
                            appId: F.id,
                            botId: G,
                            analyticsLocations: U,
                            customId: D,
                            referrerId: L
                        });
                    } catch (e) {}
                }
        },
        { enabled: en } = g.G.useExperiment({ location: 'ActivityBookmarkEmbed' }),
        er = (0, i._)(W),
        { data: ei, error: ea } = (0, j.h)(null == F ? void 0 : F.id, er);
    if (null == F || !1 === H) return null;
    if (en)
        return null != W && null == ea && null != ei
            ? (0, r.jsx)(T.b, {
                  application: F,
                  customId: D,
                  customLink: ei,
                  embedUrl: M,
                  referrerId: L
              })
            : (0, r.jsx)(u.Gt, {
                  value: U,
                  children: (0, r.jsx)(b.O, {
                      app: F,
                      embedUrl: M,
                      linkType: b.U.ACTIVITY,
                      activityCustomId: D,
                      activityReferrerId: L
                  })
              });
    let el = Y ? (null == z ? A.NW.string(A.t.cnBQPD) : A.NW.string(A.t.VJlc0d)) : A.NW.string(A.t.JeK1Wl),
        eo = K ? A.NW.string(A.t.wJNK8P) : void 0,
        es = (e) => {
            var t, n;
            return (0, r.jsx)(
                s.zxk,
                ((t = (function (e) {
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
                })(
                    {
                        onClick: et,
                        className: w.button,
                        color: s.Ttl.GREEN,
                        disabled: null != eo
                    },
                    e
                )),
                (n = n = { children: el }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        };
    return (0, r.jsx)(u.Gt, {
        value: U,
        children: (0, r.jsxs)('div', {
            className: w.container,
            children: [
                (0, r.jsx)('div', {
                    className: w.imgContainer,
                    children: (0, r.jsx)('img', {
                        className: w.img,
                        alt: F.name,
                        src: Q.url
                    })
                }),
                (0, r.jsxs)('div', {
                    className: w.content,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            className: w.heading,
                            variant: 'heading-xl/semibold',
                            children: F.name
                        }),
                        (0, r.jsx)(s.X6q, {
                            className: w.description,
                            variant: 'heading-sm/medium',
                            children: null == (n = F.description) ? void 0 : n.trim()
                        }),
                        (0, r.jsxs)('div', {
                            className: w.cta,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: w.maxParticipants,
                                    children: [
                                        (0, r.jsx)(s.BFJ, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: w.peopleIcon
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-xs/semibold',
                                            children: q
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: w.buttonWrapper,
                                    children: [
                                        null != F &&
                                            (0, r.jsx)(s.zxk, {
                                                onClick: () => {
                                                    var e;
                                                    null != F &&
                                                        (a.Y.USER_INSTALL in (null != (e = F.integrationTypesConfig) ? e : {}) || $ || ee
                                                            ? (0, m.X)(F.id)
                                                            : (0, y.transitionToGlobalDiscovery)({
                                                                  tab: P.GlobalDiscoveryTab.APPS,
                                                                  applicationId: F.id,
                                                                  newSessionState: {
                                                                      entrypoint: { name: E.xF.OAUTH2_EMBED },
                                                                      guildId: B
                                                                  }
                                                              }));
                                                },
                                                className: w.button,
                                                color: s.Ttl.PRIMARY,
                                                children: A.NW.string(A.t.fbcCzc)
                                            }),
                                        null != eo
                                            ? (0, r.jsx)(
                                                  s.ua7,
                                                  {
                                                      text: eo,
                                                      children: (e) =>
                                                          es(
                                                              Z(
                                                                  {},
                                                                  (function (e) {
                                                                      if (null == e) throw TypeError('Cannot destructure ' + e);
                                                                      return e;
                                                                  })(e)
                                                              )
                                                          )
                                                  },
                                                  el
                                              )
                                            : es()
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
