t.d(s, { G0: () => u, WK: () => b });
var i = t(980807),
    d = t(3112),
    l = t(630165),
    o = t(892730),
    a = t(519837),
    r = t(582128),
    n = t(500243);
let c = (0, r.createContext)({}),
    u = (0, r.createContext)(null),
    b = (0, r.forwardRef)(function (e, s) {
        [e, s] = (0, i.JT)(e, s, c);
        let t = (function (e) {
                let { selectionMode: s = "single", disallowEmptySelection: t, isDisabled: i = !1 } = e,
                    [d, l] = (0, n.P)(
                        (0, r.useMemo)(() => (e.selectedKeys ? new Set(e.selectedKeys) : void 0), [e.selectedKeys]),
                        (0, r.useMemo)(
                            () => (e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set()),
                            [e.defaultSelectedKeys],
                        ),
                        e.onSelectionChange,
                    );
                return {
                    selectionMode: s,
                    isDisabled: i,
                    selectedKeys: d,
                    setSelectedKeys: l,
                    toggleKey(e) {
                        let i;
                        ("multiple" === s
                            ? (i = new Set(d)).has(e) && (!t || i.size > 1)
                                ? i.delete(e)
                                : i.add(e)
                            : (i = new Set(d.has(e) && !t ? [] : [e])),
                            l(i));
                    },
                    setSelected(e, s) {
                        s !== d.has(e) && this.toggleKey(e);
                    },
                };
            })(e),
            { groupProps: b } = (0, l.$)(e, t, s),
            v = (0, i.Sl)({
                ...e,
                values: { orientation: e.orientation || "horizontal", isDisabled: t.isDisabled, state: t },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            S = (0, o.$)(e, { global: !0 });
        return r.createElement(
            i.tT.div,
            {
                ...(0, a.v)(S, v, b),
                ref: s,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            r.createElement(u.Provider, { value: t }, r.createElement(d.D, null, v.children)),
        );
    });
