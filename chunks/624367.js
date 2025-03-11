n.d(t, { Z: () => k }), n(47120), n(266796), n(566702);
var r = n(200651);
n(192379);
var i = n(666572),
    a = n(373793),
    o = n(399606),
    l = n(477690),
    s = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(783097),
    p = n(606192),
    m = n(213459),
    f = n(321231),
    h = n(506895),
    g = n(230171),
    _ = n(835473),
    b = n(749681),
    v = n(258971),
    y = n(914010),
    x = n(624138),
    O = n(135431),
    E = n(566620),
    j = n(365415),
    N = n(574952),
    C = n(147865),
    I = n(778569),
    S = n(50523),
    T = n(49898),
    P = n(388032),
    A = n(587494);
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
let Z = (0, x.Mg)(l.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function k(e) {
    var t, n, l, x;
    let { applicationId: k, customId: R, referrerId: D, embedUrl: L, linkId: M } = e,
        { analyticsLocations: W } = (0, d.ZP)(c.Z.ACTIVITY_BOOKMARK),
        [F] = (0, _.Z)([k]),
        U = (0, o.e7)([y.Z], () => {
            var e;
            return null !== (e = y.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        B = null == F ? void 0 : null === (t = F.bot) || void 0 === t ? void 0 : t.id,
        G = null != F && (0, u.ye)(F),
        { currentChannelId: H, instanceId: V, isCurrentlyInInstance: z, canLaunchInChannel: K } = (0, h.c)(k),
        Y = (0, N.Z)(),
        X = (0, C.ZP)(null !== (l = null == F ? void 0 : F.maxParticipants) && void 0 !== l ? l : 0),
        q = (0, I.Z)({
            applicationId: k,
            size: Z,
            names: ['embedded_cover']
        }),
        Q = null !== (x = null == F ? void 0 : F.id) && void 0 !== x ? x : '0',
        J = (0, O.TK)(Q, (0, m.PL)(!0, !1)),
        $ = (0, O.TK)(Q, (0, m.LD)(U, !1)),
        ee = async () => {
            if ((null == F ? void 0 : F.id) != null) {
                if (K)
                    (0, E.G6)({
                        channelId: null != H ? H : void 0,
                        applicationId: F.id,
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
                        await (0, p.W)({
                            appId: F.id,
                            botId: B,
                            analyticsLocations: W,
                            customId: R,
                            referrerId: D
                        });
                    } catch (e) {}
                }
            }
        },
        { enabled: et } = f.G.useExperiment({ location: 'ActivityBookmarkEmbed' }),
        en = (0, i._)(M),
        { data: er, error: ei } = (0, j.h)(null == F ? void 0 : F.id, en);
    if (null == F || !1 === G) return null;
    if (null != M && null == ei)
        return null == er
            ? null
            : (0, r.jsx)(S.b, {
                  application: F,
                  customId: R,
                  customLink: er,
                  embedUrl: L,
                  referrerId: D
              });
    if (et)
        return (0, r.jsx)(d.Gt, {
            value: W,
            children: (0, r.jsx)(g.O, {
                app: F,
                embedUrl: L,
                linkType: g.U.ACTIVITY,
                activityCustomId: R,
                activityReferrerId: D
            })
        });
    let ea = K ? (null == V ? P.NW.string(P.t.cnBQPD) : P.NW.string(P.t.VJlc0d)) : P.NW.string(P.t.JeK1Wl),
        eo = z ? P.NW.string(P.t.wJNK8P) : void 0,
        el = (e) => {
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
                        onClick: ee,
                        className: A.button,
                        color: s.Ttl.GREEN,
                        disabled: null != eo
                    },
                    e
                )),
                (n = n = { children: ea }),
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
    return (0, r.jsx)(d.Gt, {
        value: W,
        children: (0, r.jsxs)('div', {
            className: A.container,
            children: [
                (0, r.jsx)('div', {
                    className: A.imgContainer,
                    children: (0, r.jsx)('img', {
                        className: A.img,
                        alt: F.name,
                        src: q.url
                    })
                }),
                (0, r.jsxs)('div', {
                    className: A.content,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            className: A.heading,
                            variant: 'heading-xl/semibold',
                            children: F.name
                        }),
                        (0, r.jsx)(s.X6q, {
                            className: A.description,
                            variant: 'heading-sm/medium',
                            children: null === (n = F.description) || void 0 === n ? void 0 : n.trim()
                        }),
                        (0, r.jsxs)('div', {
                            className: A.cta,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: A.maxParticipants,
                                    children: [
                                        (0, r.jsx)(s.BFJ, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: A.peopleIcon
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-xs/semibold',
                                            children: X
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: A.buttonWrapper,
                                    children: [
                                        null != F &&
                                            (0, r.jsx)(s.zxk, {
                                                onClick: () => {
                                                    var e;
                                                    null != F &&
                                                        (a.Y.USER_INSTALL in (null !== (e = F.integrationTypesConfig) && void 0 !== e ? e : {}) || J || $
                                                            ? (0, u.X)(F.id)
                                                            : (0, b.transitionToGlobalDiscovery)({
                                                                  tab: T.GlobalDiscoveryTab.APPS,
                                                                  applicationId: F.id,
                                                                  newSessionState: {
                                                                      entrypoint: { name: v.xF.OAUTH2_EMBED },
                                                                      guildId: U
                                                                  }
                                                              }));
                                                },
                                                className: A.button,
                                                color: s.Ttl.PRIMARY,
                                                children: P.NW.string(P.t.fbcCzc)
                                            }),
                                        null != eo
                                            ? (0, r.jsx)(
                                                  s.ua7,
                                                  {
                                                      text: eo,
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
                                                  ea
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
