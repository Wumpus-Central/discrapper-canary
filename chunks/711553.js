n.d(t, { Z: () => p });
var i = n(951288),
    r = n(647438),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    a = n(518084),
    c = n(981631),
    d = n(388032),
    u = n(71264);
let p = function (e) {
    let t,
        { title: n, header: s, children: p, renderSettings: h, onDragStart: f } = e,
        g = r.useRef(null);
    return (
        (t =
            null != n
                ? (0, i.jsxs)(a.ZP.Bar, {
                      className: o()(u.header, u.draggableStartArea),
                      onMouseDown: f,
                      children: [
                          (0, i.jsx)(a.ZP.Content, {
                              className: o()(u.headerTitle, u.draggableStartArea),
                              dynamicSize: !0,
                              children: n,
                          }),
                          (0, i.jsx)(a.ZP.Content, {
                              children: (0, i.jsx)(l.yRy, {
                                  targetElementRef: g,
                                  position: "right",
                                  renderPopout: null != h ? h : c.dG4,
                                  autoInvert: !1,
                                  children: (e) => {
                                      var t, n;
                                      return (0, i.jsx)(
                                          a.ZP.Icon,
                                          ((t = (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      i = Object.keys(n);
                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                      (i = i.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          }),
                                                      )),
                                                      i.forEach(function (t) {
                                                          var i;
                                                          (i = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: i,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0,
                                                                    })
                                                                  : (e[t] = i);
                                                      });
                                              }
                                              return e;
                                          })({}, e)),
                                          (n = n =
                                              {
                                                  icon: l.ewm,
                                                  label: d.intl.string(d.t["3D5yo/"]),
                                                  ref: g,
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
                                          t),
                                      );
                                  },
                              }),
                          }),
                      ],
                  })
                : s),
        (0, i.jsxs)("div", {
            className: u.sidebar,
            children: [
                t,
                (0, i.jsx)("div", {
                    className: u.children,
                    children: p,
                }),
            ],
        })
    );
};
