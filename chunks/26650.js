n.d(t, { Z: () => o });
var r = n(54381),
    l = n(473749),
    s = n(481060),
    i = n(377171),
    a = n(539271);
let o = l.forwardRef(function (e, t) {
    let { isInventory: n, style: l, children: o } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: a.desktopTooltip,
        style: (function (e) {
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
        })({ marginTop: 8 * !!n }, l),
        children: [
            (0, r.jsx)(s.d3s, {
                size: "custom",
                className: a.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? i.Z.TEXT_MUTED : i.Z.WHITE,
            }),
            (0, r.jsx)(s.Text, {
                color: n ? "text-muted" : "always-white",
                variant: n ? "text-xs/normal" : "text-xxs/normal",
                children: o,
            }),
        ],
    });
});
