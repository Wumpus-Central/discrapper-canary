n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var o = n(481060),
    a = n(946273),
    i = n(441110),
    s = n(388032),
    c = n(374701);
function l(e) {
    let { guild: t, message: n } = e;
    return (0, a.vV)(t.id, n.author.id)
        ? (0, r.jsx)(o.yRy, {
              animation: o.yRy.Animation.TRANSLATE,
              align: 'center',
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: o } = e;
                  return (0, r.jsx)(i.Z, {
                      guild: t,
                      message: n,
                      onClose: o
                  });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(o.P3F, {
                      onClick: t,
                      tag: 'span',
                      children: (0, r.jsx)(o.ua7, {
                          text: s.NW.string(s.t['v/OYd3']),
                          children: (e) => {
                              var t, n;
                              return (0, r.jsx)(
                                  'div',
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
                                  })({ className: c.newMemberBadge }, e)),
                                  (n = n =
                                      {
                                          children: (0, r.jsx)(o.hg2, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 20,
                                              height: 20
                                          })
                                      }),
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
                          }
                      })
                  });
              }
          })
        : null;
}
