n.d(t, { Z: () => h });
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    s = n(481060),
    a = n(518084),
    c = n(981631),
    d = n(388032),
    u = n(905763);
let h = function (e) {
    let t,
        { title: n, header: o, children: h, renderSettings: p, onDragStart: f } = e,
        g = r.useRef(null);
    return (
        (t =
            null != n
                ? (0, i.jsxs)(a.ZP.Bar, {
                      className: l()(u.header, u.draggableStartArea),
                      onMouseDown: f,
                      children: [
                          (0, i.jsx)(a.ZP.Content, {
                              className: l()(u.headerTitle, u.draggableStartArea),
                              dynamicSize: !0,
                              children: n
                          }),
                          (0, i.jsx)(a.ZP.Content, {
                              children: (0, i.jsx)(s.yRy, {
                                  targetElementRef: g,
                                  position: 'right',
                                  renderPopout: null != p ? p : c.dG4,
                                  autoInvert: !1,
                                  children: (e) => {
                                      var t, n;
                                      return (0, i.jsx)(
                                          a.ZP.Icon,
                                          ((t = (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      i = Object.keys(n);
                                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                                      (i = i.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          })
                                                      )),
                                                      i.forEach(function (t) {
                                                          var i;
                                                          ((i = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: i,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    })
                                                                  : (e[t] = i));
                                                      }));
                                              }
                                              return e;
                                          })({}, e)),
                                          (n = n =
                                              {
                                                  icon: s.ewm,
                                                  label: d.intl.string(d.t['3D5yo6']),
                                                  ref: g
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                              : (function (e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var i = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, i);
                                                    }
                                                    return n;
                                                })(Object(n)).forEach(function (e) {
                                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                }),
                                          t)
                                      );
                                  }
                              })
                          })
                      ]
                  })
                : o),
        (0, i.jsxs)('div', {
            className: u.sidebar,
            children: [
                t,
                (0, i.jsx)('div', {
                    className: u.children,
                    children: h
                })
            ]
        })
    );
};
