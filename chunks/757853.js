n.d(t, { F: () => u });
var r = n(54381),
    a = n(473749),
    o = n(91192),
    l = n(481060),
    c = n(724757),
    s = n(217031);
function i(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
function u(e) {
    var {
            rowData: t,
            message: n,
            originChannel: u,
            selectedDestinations: d,
            handleToggleDestination: b,
            disableSelection: f,
            rowClassName: p,
        } = e,
        g = i(e, [
            "rowData",
            "message",
            "originChannel",
            "selectedDestinations",
            "handleToggleDestination",
            "disableSelection",
            "rowClassName",
        ]);
    let {
            sections: h,
            sectionHeight: m,
            renderRow: y,
            rowHeight: O,
        } = (0, s.Y)({
            rowData: t,
            message: n,
            originChannel: u,
            selectedDestinations: d,
            handleToggleDestination: b,
            disableSelection: f,
            rowClassName: p,
        }),
        C = a.useRef(null),
        j = (0, c.Z)("forward-modal", C);
    return (0, r.jsx)(o.bG, {
        navigator: j,
        children: (0, r.jsx)(o.SJ, {
            children: (e) => {
                var t,
                    n,
                    { ref: a } = e,
                    o = i(e, ["ref"]);
                return (0, r.jsx)(
                    l.Tvr,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            ref: (e) => {
                                var t;
                                (C.current = e),
                                    (a.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                            },
                        },
                        o,
                        g,
                    )),
                    (n = n =
                        {
                            sections: h,
                            sectionHeight: m,
                            renderRow: y,
                            rowHeight: O,
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
                    t),
                );
            },
        }),
    });
}
