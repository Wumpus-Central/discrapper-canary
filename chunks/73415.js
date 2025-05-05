e.d(c, { default: () => b });
var n = e(255367);
e(73800);
var a = e(979554),
    d = e(98278),
    s = e(792254),
    o = e(790527),
    f = e(474936),
    r = e(388032);
function b(t) {
    var { collectableType: c, onClose: e, analyticsSource: b, analyticsLocation: i, onSecondaryClick: p } = t,
        A = (function (t, c) {
            if (null == t) return {};
            var e,
                n,
                a = (function (t, c) {
                    if (null == t) return {};
                    var e,
                        n,
                        a = {},
                        d = Object.keys(t);
                    for (n = 0; n < d.length; n++) (e = d[n]), c.indexOf(e) >= 0 || (a[e] = t[e]);
                    return a;
                })(t, c);
            if (Object.getOwnPropertySymbols) {
                var d = Object.getOwnPropertySymbols(t);
                for (n = 0; n < d.length; n++) (e = d[n]), !(c.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (a[e] = t[e]);
            }
            return a;
        })(t, ['collectableType', 'onClose', 'analyticsSource', 'analyticsLocation', 'onSecondaryClick']);
    let l = c === a.Z.AVATAR_DECORATION || c === a.Z.PROFILE_EFFECT,
        u = (0, s.Z)(c === a.Z.AVATAR_DECORATION ? f.cd.AVATAR_DECORATION_MODAL_UPSELL : f.cd.PROFILE_EFFECT_MODAL_UPSELL);
    return l
        ? (0, n.jsx)(
              o.Z,
              (function (t) {
                  for (var c = 1; c < arguments.length; c++) {
                      var e = null != arguments[c] ? arguments[c] : {},
                          n = Object.keys(e);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(e).filter(function (t) {
                                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                              })
                          )),
                          n.forEach(function (c) {
                              var n;
                              (n = e[c]),
                                  c in t
                                      ? Object.defineProperty(t, c, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (t[c] = n);
                          });
                  }
                  return t;
              })(
                  {
                      artURL: u,
                      type: c === a.Z.AVATAR_DECORATION ? f.cd.AVATAR_DECORATION_MODAL_UPSELL : f.cd.PROFILE_EFFECT_MODAL_UPSELL,
                      title: c === a.Z.AVATAR_DECORATION ? r.intl.string(r.t.JI7uhY) : r.intl.string(r.t.sYm15e),
                      body: c === a.Z.AVATAR_DECORATION ? r.intl.string(r.t['5XvsdX']) : r.intl.string(r.t['Hza+Bg']),
                      glowUp: c === a.Z.AVATAR_DECORATION ? r.intl.string(r.t['5XvsdX']) : r.intl.string(r.t['Hza+Bg']),
                      onSecondaryClick: () => {
                          p(), (0, d.$)(e);
                      },
                      secondaryCTA: r.intl.string(r.t.PcTCBw),
                      onClose: e,
                      enableArtBoxShadow: !1,
                      analyticsSource: b,
                      analyticsLocation: i,
                      hideBackButton: !0,
                      showEnhancedUpsell: !0
                  },
                  A
              )
          )
        : null;
}
