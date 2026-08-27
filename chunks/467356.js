s.d(t, { G0: () => u, WK: () => b });
var i = s(407815),
    l = s(986664),
    r = s(940404),
    o = s(961082),
    a = s(184093),
    d = s(582128),
    n = s(526739);
let c = (0, d.createContext)({}),
    u = (0, d.createContext)(null),
    b = (0, d.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, c);
        let s = (function (e) {
                let { selectionMode: t = "single", disallowEmptySelection: s, isDisabled: i = !1 } = e,
                    [l, r] = (0, n.P)(
                        (0, d.useMemo)(() => (e.selectedKeys ? new Set(e.selectedKeys) : void 0), [e.selectedKeys]),
                        (0, d.useMemo)(
                            () => (e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set()),
                            [e.defaultSelectedKeys],
                        ),
                        e.onSelectionChange,
                    );
                return {
                    selectionMode: t,
                    isDisabled: i,
                    selectedKeys: l,
                    setSelectedKeys: r,
                    toggleKey(e) {
                        let i;
                        "multiple" === t
                            ? (i = new Set(l)).has(e) && (!s || i.size > 1)
                                ? i.delete(e)
                                : i.add(e)
                            : (i = new Set(l.has(e) && !s ? [] : [e])),
                            r(i);
                    },
                    setSelected(e, t) {
                        t !== l.has(e) && this.toggleKey(e);
                    },
                };
            })(e),
            { groupProps: b } = (0, r.$)(e, s, t),
            v = (0, i.Sl)({
                ...e,
                values: { orientation: e.orientation || "horizontal", isDisabled: s.isDisabled, state: s },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            f = (0, o.$)(e, { global: !0 });
        return d.createElement(
            i.tT.div,
            {
                ...(0, a.v)(f, v, b),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            d.createElement(u.Provider, { value: s }, d.createElement(l.D, null, v.children)),
        );
    });
