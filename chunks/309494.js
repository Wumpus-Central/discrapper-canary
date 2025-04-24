n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(320161),
    o = n(572004),
    c = n(51144),
    d = n(785717),
    u = n(475413),
    m = n(388032),
    p = n(517895);
function g(e) {
    let { user: t, isHovering: n } = e,
        { trackUserProfileAction: r } = (0, d.KZ)();
    return o.wS
        ? (0, i.jsx)(a.Z, {
              text: m.intl.string(m.t.y5MwJy),
              delay: 0,
              'aria-label': !1,
              copyValue: c.ZP.getUserTag(t, {
                  decoration: 'never',
                  identifiable: 'always'
              }),
              onCopy: () => r({ action: 'COPY_USERNAME' }),
              children: (e) => {
                  var t, r;
                  return (0, i.jsx)(
                      u.kF,
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      (i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = i);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (r = r =
                          {
                              className: s()(p.hover, { [p.visible]: n }),
                              innerClassName: p.hover,
                              look: l.zxk.Looks.BLANK,
                              size: l.zxk.Sizes.NONE,
                              color: p.hoverColor,
                              themeColor: 'none',
                              grow: !1,
                              'aria-label': m.intl.string(m.t.y5MwJy),
                              children: (0, i.jsx)(l.TIy, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      t)
                  );
              }
          })
        : null;
}
