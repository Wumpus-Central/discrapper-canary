n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(377171),
    s = n(332173);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    let { isInventory: n, style: i, children: l } = e;
    return (0, r.jsxs)("div", {
        ref: t,
        className: s.desktopTooltip,
        style: c({ marginTop: 8 * !!n }, i),
        children: [
            (0, r.jsx)(o.d3s, {
                size: "custom",
                className: s.infoIcon,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? a.Z.TEXT_MUTED : a.Z.WHITE,
            }),
            (0, r.jsx)(o.Text, {
                color: n ? "text-muted" : "always-white",
                variant: n ? "text-xs/normal" : "text-xxs/normal",
                children: l,
            }),
        ],
    });
}
let d = i.forwardRef(u);
