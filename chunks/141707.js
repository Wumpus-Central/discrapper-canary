n.d(t, { Z: () => a });
var l = n(54381),
    r = n(473749),
    s = n(692547),
    i = n(481060),
    o = n(302051);
let a = r.forwardRef(function (e, t) {
    let { isInventory: n, style: r, children: a } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: o.desktopTooltip,
        style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })({ marginTop: 8 * !!n }, r),
        children: [
            (0, l.jsx)(i.d3s, {
                size: "custom",
                className: o.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? s.Z.colors.TEXT_MUTED.css : s.Z.colors.WHITE.css,
            }),
            (0, l.jsx)(i.Text, {
                color: n ? "text-muted" : "always-white",
                variant: n ? "text-xs/normal" : "text-xxs/normal",
                children: a,
            }),
        ],
    });
});
