n.d(t, { Z: () => u });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(946273),
    s = n(441110),
    a = n(388032),
    c = n(374701);
function u(e) {
    let { guild: t, message: n } = e,
        u = l.useRef(null);
    return (0, i.vV)(t.id, n.author.id)
        ? (0, r.jsx)(o.yRy, {
              targetElementRef: u,
              animation: o.yRy.Animation.TRANSLATE,
              align: 'center',
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, r.jsx)(s.Z, {
                      guild: t,
                      message: n,
                      onClose: l
                  });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(o.P3F, {
                      onClick: t,
                      tag: 'span',
                      innerRef: u,
                      children: (0, r.jsx)(o.ua7, {
                          text: a.intl.string(a.t['v/OYd3']),
                          children: (e) => {
                              var t, n;
                              return (0, r.jsx)(
                                  'div',
                                  ((t = (function (e) {
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
