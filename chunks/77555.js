r.d(t, { z: () => u });
var n = r(627968),
    a = r(64700),
    l = r(837381),
    o = r(397927),
    s = r(928039),
    c = r(61916);
function i(e, t) {
    if (null == e) return {};
    var r,
        n,
        a,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++)
            (n = r[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = {},
                l = Object.getOwnPropertyNames(e);
            for (n = 0; n < l.length; n++)
                (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            return a;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            (n = r[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l;
}
function u(e) {
    let {
            rowData: t,
            message: r,
            originChannel: u,
            selectedDestinations: d,
            handleToggleDestination: f,
            disableSelection: b,
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
        ]),
        {
            sections: y,
            sectionHeight: h,
            renderRow: O,
            rowHeight: m,
        } = (0, c.s)({
            rowData: t,
            message: r,
            originChannel: u,
            selectedDestinations: d,
            handleToggleDestination: f,
            disableSelection: b,
            rowClassName: p,
        }),
        j = a.useRef(null),
        w = (0, s.A)("forward-modal", j);
    return (0, n.jsx)(l.hD, {
        navigator: w,
        children: (0, n.jsx)(l.PR, {
            children: (e) => {
                var t, r;
                let { ref: a } = e,
                    l = i(e, ["ref"]);
                return (0, n.jsx)(
                    o.OZj,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })(
                        {
                            ref: (e) => {
                                var t;
                                (j.current = e),
                                    (a.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                            },
                        },
                        l,
                        g,
                    )),
                    (r = r =
                        {
                            sections: y,
                            sectionHeight: h,
                            renderRow: O,
                            rowHeight: m,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t),
                );
            },
        }),
    });
}
