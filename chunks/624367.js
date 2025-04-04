n.d(t, { Z: () => k }), n(388685), n(953529), n(781311);
var r = n(200651);
n(192379);
var i = n(373793),
    a = n(399606),
    l = n(477690),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(915346),
    d = n(783097),
    p = n(176412),
    m = n(213459),
    f = n(581364),
    h = n(321231),
    g = n(506895),
    _ = n(230171),
    b = n(835473),
    x = n(749681),
    y = n(258971),
    v = n(914010),
    E = n(624138),
    O = n(566620),
    N = n(365415),
    j = n(574952),
    C = n(147865),
    I = n(778569),
    S = n(50523),
    T = n(49898),
    P = n(388032),
    A = n(536231);
function w() {
    return (w =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
let Z = (0, E.Mg)(l.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function k(e) {
    var t, n, l, E;
    let { applicationId: k, customId: R, referrerId: D, embedUrl: L, linkId: M } = e,
        { analyticsLocations: W } = (0, c.ZP)(s.Z.ACTIVITY_BOOKMARK),
        [U] = (0, b.Z)([k]),
        F = (0, a.e7)([v.Z], () => {
            var e;
            return null != (e = v.Z.getGuildId()) ? e : void 0;
        }),
        B = null == U || null == (t = U.bot) ? void 0 : t.id,
        G = null != U && (0, d.ye)(U),
        { currentChannelId: H, instanceId: V, isCurrentlyInInstance: z, canLaunchInChannel: K } = (0, g.c)(k),
        Y = (0, j.Z)(),
        X = (0, C.ZP)(null != (l = null == U ? void 0 : U.maxParticipants) ? l : 0),
        q = (0, I.Z)({
            applicationId: k,
            size: Z,
            names: ['embedded_cover']
        }),
        Q = null != (E = null == U ? void 0 : U.id) ? E : '0',
        J = (0, f.TK)(Q, (0, m.PL)(!0, !1)),
        $ = (0, f.TK)(Q, (0, m.LD)(F, !1)),
        ee = async () => {
            if ((null == U ? void 0 : U.id) != null)
                if (K)
                    (0, O.G6)({
                        channelId: null != H ? H : void 0,
                        applicationId: U.id,
                        isStart: null == V,
                        instanceId: null != V ? V : void 0,
                        embeddedActivitiesManager: Y,
                        customId: R,
                        referrerId: D,
                        analyticsLocations: W
                    });
                else {
                    if (null == B) return;
                    try {
                        await (0, u.W)({
                            appId: U.id,
                            botId: B,
                            analyticsLocations: W,
                            customId: R,
                            referrerId: D
                        });
                    } catch (e) {}
                }
        },
        { enabled: et } = h.G.useExperiment({ location: 'ActivityBookmarkEmbed' }),
        { data: en, error: er } = (0, N.h)(null == U ? void 0 : U.id, M);
    if (null == U || !1 === G) return null;
    if (et)
        return null != M && null == er && null != en
            ? (0, r.jsx)(S.b, {
                  application: U,
                  customId: R,
                  customLink: en,
                  embedUrl: L,
                  referrerId: D
              })
            : (0, r.jsx)(c.Gt, {
                  value: W,
                  children: (0, r.jsx)(_.O, {
                      app: U,
                      embedUrl: L,
                      linkType: _.U.ACTIVITY,
                      activityCustomId: R,
                      activityReferrerId: D
                  })
              });
    let ei = K ? (null == V ? P.NW.string(P.t.cnBQPD) : P.NW.string(P.t.VJlc0d)) : P.NW.string(P.t.JeK1Wl),
        ea = z ? P.NW.string(P.t.wJNK8P) : void 0,
        el = (e) => {
            var t, n;
            return (0, r.jsx)(
                o.zxk,
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
                        onClick: ee,
                        className: A.button,
                        color: o.Ttl.GREEN,
                        disabled: null != ea
                    },
                    e
                )),
                (n = n = { children: ei }),
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
    return (0, r.jsx)(c.Gt, {
        value: W,
        children: (0, r.jsxs)('div', {
            className: A.container,
            children: [
                (0, r.jsx)('div', {
                    className: A.imgContainer,
                    children: (0, r.jsx)('img', {
                        className: A.img,
                        alt: U.name,
                        src: q.url
                    })
                }),
                (0, r.jsxs)('div', {
                    className: A.content,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            className: A.heading,
                            variant: 'heading-xl/semibold',
                            children: U.name
                        }),
                        (0, r.jsx)(o.X6q, {
                            className: A.description,
                            variant: 'heading-sm/medium',
                            children: null == (n = U.description) ? void 0 : n.trim()
                        }),
                        (0, r.jsxs)('div', {
                            className: A.cta,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: A.maxParticipants,
                                    children: [
                                        (0, r.jsx)(o.BFJ, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: A.peopleIcon
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'text-xs/semibold',
                                            children: X
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: A.buttonWrapper,
                                    children: [
                                        null != U &&
                                            (0, r.jsx)(o.zxk, {
                                                onClick: () => {
                                                    var e;
                                                    null != U &&
                                                        (i.Y.USER_INSTALL in (null != (e = U.integrationTypesConfig) ? e : {}) || J || $
                                                            ? (0, p.X)(U.id)
                                                            : (0, x.transitionToGlobalDiscovery)({
                                                                  tab: T.GlobalDiscoveryTab.APPS,
                                                                  applicationId: U.id,
                                                                  newSessionState: {
                                                                      entrypoint: { name: y.xF.OAUTH2_EMBED },
                                                                      guildId: F
                                                                  }
                                                              }));
                                                },
                                                className: A.button,
                                                color: o.Ttl.PRIMARY,
                                                children: P.NW.string(P.t.fbcCzc)
                                            }),
                                        null != ea
                                            ? (0, r.jsx)(
                                                  o.ua7,
                                                  {
                                                      text: ea,
                                                      children: (e) =>
                                                          el(
                                                              w(
                                                                  {},
                                                                  (function (e) {
                                                                      if (null == e) throw TypeError('Cannot destructure ' + e);
                                                                      return e;
                                                                  })(e)
                                                              )
                                                          )
                                                  },
                                                  ei
                                              )
                                            : el()
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
