n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(320161),
    o = n(572004),
    c = n(51144),
    d = n(785717),
    u = n(475413),
    m = n(388032),
    g = n(517895);
function p(e) {
    let { user: t, isHovering: n } = e,
        { trackUserProfileAction: i } = (0, d.KZ)();
    return o.wS
        ? (0, r.jsx)(l.Z, {
              text: m.NW.string(m.t.y5MwJy),
              delay: 0,
              'aria-label': !1,
              copyValue: c.ZP.getUserTag(t, {
                  decoration: 'never',
                  identifiable: 'always'
              }),
              onCopy: () => i({ action: 'COPY_USERNAME' }),
              children: (e) => {
                  var t, i;
                  return (0, r.jsx)(
                      u.kF,
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
                      })({}, e)),
                      (i = i =
                          {
                              className: s()(g.hover, { [g.visible]: n }),
                              innerClassName: g.hover,
                              look: a.zxk.Looks.BLANK,
                              size: a.zxk.Sizes.NONE,
                              color: g.hoverColor,
                              themeColor: 'none',
                              grow: !1,
                              'aria-label': m.NW.string(m.t.y5MwJy),
                              children: (0, r.jsx)(a.TIy, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      t)
                  );
              }
          })
        : null;
}
