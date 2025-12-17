n.d(t, { Z: () => f });
var i = n(54381),
    r = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(518084),
    c = n(981631),
    d = n(388032),
    u = n(74739);
let f = function (e) {
    let t,
        { title: n, header: a, children: f, renderSettings: h, onDragStart: p } = e,
        g = r.useRef(null);
    return (
        (t =
            null != n
                ? (0, i.jsxs)(l.ZP.Bar, {
                      className: s()(u.header, u.draggableStartArea),
                      onMouseDown: p,
                      children: [
                          (0, i.jsx)(l.ZP.Content, {
                              className: s()(u.headerTitle, u.draggableStartArea),
                              dynamicSize: !0,
                              children: n,
                          }),
                          (0, i.jsx)(l.ZP.Content, {
                              children: (0, i.jsx)(o.yRy, {
                                  targetElementRef: g,
                                  position: "right",
                                  renderPopout: null != h ? h : c.dG4,
                                  autoInvert: !1,
                                  children: (e) => {
                                      var t, n;
                                      return (0, i.jsx)(
                                          l.ZP.Icon,
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
                                                  icon: o.ewm,
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
                : a),
        (0, i.jsxs)("div", {
            className: u.sidebar,
            children: [
                t,
                (0, i.jsx)("div", {
                    className: u.children,
                    children: f,
                }),
            ],
        })
    );
};
