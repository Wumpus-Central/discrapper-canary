"use strict";
r.d(t, { G0: () => d, WK: () => f });
var n = r(825913),
    a = r(357710),
    s = r(250634),
    i = r(290424),
    o = r(318473),
    l = r(64700),
    u = r(492313);
let c = (0, l.createContext)({}),
    d = (0, l.createContext)(null),
    f = (0, l.forwardRef)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, c);
        let r = (function (e) {
                let { selectionMode: t = "single", disallowEmptySelection: r, isDisabled: n = !1 } = e,
                    [a, s] = (0, u.P)(
                        (0, l.useMemo)(() => (e.selectedKeys ? new Set(e.selectedKeys) : void 0), [e.selectedKeys]),
                        (0, l.useMemo)(
                            () => (e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set()),
                            [e.defaultSelectedKeys],
                        ),
                        e.onSelectionChange,
                    );
                return {
                    selectionMode: t,
                    isDisabled: n,
                    selectedKeys: a,
                    setSelectedKeys: s,
                    toggleKey(e) {
                        let n;
                        "multiple" === t
                            ? (n = new Set(a)).has(e) && (!r || n.size > 1)
                                ? n.delete(e)
                                : n.add(e)
                            : (n = new Set(a.has(e) && !r ? [] : [e])),
                            s(n);
                    },
                    setSelected(e, t) {
                        t !== a.has(e) && this.toggleKey(e);
                    },
                };
            })(e),
            { groupProps: f } = (0, s.$)(e, r, t),
            p = (0, n.Sl)({
                ...e,
                values: { isDisabled: r.isDisabled, state: r },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            h = (0, i.$)(e, { global: !0 });
        return l.createElement(
            "div",
            {
                ...(0, o.v)(h, p, f),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            l.createElement(d.Provider, { value: r }, l.createElement(a.D, null, p.children)),
        );
    });
