e.d(t, { default: () => b });
var n = e(200651);
e(192379);
var a = e(979554),
    d = e(98278),
    s = e(792254),
    o = e(790527),
    f = e(474936),
    r = e(388032);
function b(c) {
    var { collectableType: t, onClose: e, analyticsSource: b, analyticsLocation: p, onSecondaryClick: i } = c,
        A = (function (c, t) {
            if (null == c) return {};
            var e,
                n,
                a = (function (c, t) {
                    if (null == c) return {};
                    var e,
                        n,
                        a = {},
                        d = Object.keys(c);
                    for (n = 0; n < d.length; n++) (e = d[n]), t.indexOf(e) >= 0 || (a[e] = c[e]);
                    return a;
                })(c, t);
            if (Object.getOwnPropertySymbols) {
                var d = Object.getOwnPropertySymbols(c);
                for (n = 0; n < d.length; n++) (e = d[n]), !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(c, e) && (a[e] = c[e]);
            }
            return a;
        })(c, ['collectableType', 'onClose', 'analyticsSource', 'analyticsLocation', 'onSecondaryClick']);
    let u = t === a.Z.AVATAR_DECORATION || t === a.Z.PROFILE_EFFECT,
        l = (0, s.Z)(t === a.Z.AVATAR_DECORATION ? f.cd.AVATAR_DECORATION_MODAL_UPSELL : f.cd.PROFILE_EFFECT_MODAL_UPSELL);
    return u
        ? (0, n.jsx)(
              o.Z,
              (function (c) {
                  for (var t = 1; t < arguments.length; t++) {
                      var e = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(e);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(e).filter(function (c) {
                                  return Object.getOwnPropertyDescriptor(e, c).enumerable;
                              })
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = e[t]),
                                  t in c
                                      ? Object.defineProperty(c, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (c[t] = n);
                          });
                  }
                  return c;
              })(
                  {
                      artURL: l,
                      type: t === a.Z.AVATAR_DECORATION ? f.cd.AVATAR_DECORATION_MODAL_UPSELL : f.cd.PROFILE_EFFECT_MODAL_UPSELL,
                      title: t === a.Z.AVATAR_DECORATION ? r.NW.string(r.t.JI7uhY) : r.NW.string(r.t.sYm15e),
                      body: t === a.Z.AVATAR_DECORATION ? r.NW.string(r.t['5XvsdX']) : r.NW.string(r.t['Hza+Bg']),
                      glowUp: t === a.Z.AVATAR_DECORATION ? r.NW.string(r.t['5XvsdX']) : r.NW.string(r.t['Hza+Bg']),
                      onSecondaryClick: () => {
                          i(), (0, d.$)(e);
                      },
                      secondaryCTA: r.NW.string(r.t.PcTCBw),
                      onClose: e,
                      enableArtBoxShadow: !1,
                      analyticsSource: b,
                      analyticsLocation: p,
                      hideBackButton: !0,
                      showEnhancedUpsell: !0
                  },
                  A
              )
          )
        : null;
}
