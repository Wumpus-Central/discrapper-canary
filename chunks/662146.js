n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(533391);
function c(e) {
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
}
function u(e) {
    let {
        children: t,
        text: n,
        color: l,
        disableWrapper: u = !1,
        disabled: d = !1,
        hideOnClick: p = !0,
        shouldShow: h,
        forceOpen: f,
        selected: g = !1,
        tooltipClass: m,
        tooltipContentClass: b,
    } = e;
    return (0, r.jsx)(a.aML, {
        shouldShow: h,
        forceOpen: f,
        spacing: 12,
        hideOnClick: p,
        text: d ? null : n,
        position: "right",
        color: l,
        "aria-label": !1,
        tooltipClassName: o()(s.listItemTooltip, m),
        tooltipContentClassName: b,
        children: (e) => {
            var n, l;
            return u
                ? i.cloneElement(i.Children.only(t), c({}, e))
                : (0, r.jsx)(
                      "div",
                      ((n = c({ className: o()(s.listItemWrapper, { [s.selected]: g }) }, e)),
                      (l = l = { children: t }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(l)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                            }),
                      n),
                  );
        },
    });
}
