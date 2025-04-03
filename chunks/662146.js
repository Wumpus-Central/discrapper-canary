n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(540059),
    c = n(991315);
function u(e) {
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
}
function d(e) {
    let { children: t, text: n, color: l, disableWrapper: d = !1, disabled: p = !1, hideOnClick: h = !0, shouldShow: f, forceOpen: g, selected: m = !1, tooltipClass: b, tooltipContentClass: y } = e,
        _ = (0, s.Q3)('ListItemTooltip');
    return (0, r.jsx)(a.ua7, {
        shouldShow: f,
        forceOpen: g,
        spacing: _ ? 12 : 20,
        hideOnClick: h,
        text: p ? null : n,
        position: 'right',
        color: l,
        'aria-label': !1,
        tooltipClassName: o()(c.listItemTooltip, b),
        tooltipContentClassName: y,
        children: (e) => {
            var n, l;
            return d
                ? i.cloneElement(i.Children.only(t), u({}, e))
                : (0, r.jsx)(
                      'div',
                      ((n = u({ className: o()(c.listItemWrapper, { [c.selected]: m }) }, e)),
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
                      n)
                  );
        }
    });
}
