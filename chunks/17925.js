n.d(t, {
    K4: () => d,
    th: () => f,
});
var r = n(595707),
    i = n(156748),
    a = n(190974),
    o = n(880016),
    s = n(158821),
    l = n(473749),
    c = n(395861);
let u = (0, l.createContext)({}),
    d = (0, l.createContext)(null),
    f = (0, l.forwardRef)(function (e, t) {
        [e, t] = (0, r.pE)(e, t, u);
        let n = (0, c.E)(e),
            { groupProps: f } = (0, a.C)(e, n, t),
            p = (0, r.aX)({
                ...e,
                values: {
                    isDisabled: n.isDisabled,
                    state: n,
                },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            _ = (0, o.z)(e, { global: !0 });
        return l.createElement(
            "div",
            {
                ...(0, s.d)(_, p, f),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            l.createElement(d.Provider, { value: n }, l.createElement(i.y, null, p.children)),
        );
    });
