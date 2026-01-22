n.d(t, {
    A: () => h,
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(397927),
    a = n(855790),
    c = n(652215),
    d = n(985018),
    u = n(694869);
let h = function (e) {
    let t,
        { title: n, header: s, children: h, renderSettings: p, onDragStart: f } = e,
        b = r.useRef(null);
    return (
        (t =
            null != n
                ? (0, i.jsxs)(a.Ay.Bar, {
                      className: l()(u.wx, u.bl),
                      onMouseDown: f,
                      children: [
                          (0, i.jsx)(a.Ay.Content, {
                              className: l()(u.qd, u.bl),
                              dynamicSize: !0,
                              children: n,
                          }),
                          (0, i.jsx)(a.Ay.Content, {
                              children: (0, i.jsx)(o.YNO, {
                                  targetElementRef: b,
                                  position: "right",
                                  renderPopout: null != p ? p : c.tEg,
                                  autoInvert: !1,
                                  children: (e) => {
                                      var t, n;
                                      return (0, i.jsx)(
                                          a.Ay.Icon,
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
                                                  icon: o.Zes,
                                                  label: d.intl.string(d.t["3D5yo/"]),
                                                  ref: b,
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
            className: u.pz,
            children: [
                t,
                (0, i.jsx)("div", {
                    className: u.Y_,
                    children: h,
                }),
            ],
        })
    );
};
