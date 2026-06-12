"use strict";
s.d(t, { G0: () => u, WK: () => v });
var i = s(825913),
    r = s(357710),
    l = s(250634),
    o = s(290424),
    a = s(318473),
    d = s(64700),
    n = s(492313);
let c = (0, d.createContext)({}),
    u = (0, d.createContext)(null),
    v = (0, d.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, c);
        let s = (function (e) {
                let { selectionMode: t = "single", disallowEmptySelection: s, isDisabled: i = !1 } = e,
                    [r, l] = (0, n.P)(
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
                    selectedKeys: r,
                    setSelectedKeys: l,
                    toggleKey(e) {
                        let i;
                        "multiple" === t
                            ? (i = new Set(r)).has(e) && (!s || i.size > 1)
                                ? i.delete(e)
                                : i.add(e)
                            : (i = new Set(r.has(e) && !s ? [] : [e])),
                            l(i);
                    },
                    setSelected(e, t) {
                        t !== r.has(e) && this.toggleKey(e);
                    },
                };
            })(e),
            { groupProps: v } = (0, l.$)(e, s, t),
            b = (0, i.Sl)({
                ...e,
                values: { isDisabled: s.isDisabled, state: s },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            p = (0, o.$)(e, { global: !0 });
        return d.createElement(
            "div",
            {
                ...(0, a.v)(p, b, v),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            d.createElement(u.Provider, { value: s }, d.createElement(r.D, null, b.children)),
        );
    });
