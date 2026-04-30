"use strict";
s.d(t, { G0: () => c, WK: () => p });
var i = s(825913),
    l = s(357710),
    r = s(250634),
    a = s(290424),
    o = s(318473),
    d = s(64700),
    n = s(492313);
let u = (0, d.createContext)({}),
    c = (0, d.createContext)(null),
    p = (0, d.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, u);
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
            { groupProps: p } = (0, r.$)(e, s, t),
            h = (0, i.Sl)({
                ...e,
                values: { isDisabled: s.isDisabled, state: s },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            b = (0, a.$)(e, { global: !0 });
        return d.createElement(
            "div",
            {
                ...(0, o.v)(b, h, p),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            d.createElement(c.Provider, { value: s }, d.createElement(l.D, null, h.children)),
        );
    });
