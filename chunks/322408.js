"use strict";
n.d(t, { G0: () => d, WK: () => _ });
var i = n(825913),
    r = n(357710),
    s = n(250634),
    a = n(290424),
    o = n(318473),
    l = n(64700),
    u = n(492313);
let c = (0, l.createContext)({}),
    d = (0, l.createContext)(null),
    _ = (0, l.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, c);
        let n = (function (e) {
                let { selectionMode: t = "single", disallowEmptySelection: n, isDisabled: i = !1 } = e,
                    [r, s] = (0, u.P)(
                        (0, l.useMemo)(() => (e.selectedKeys ? new Set(e.selectedKeys) : void 0), [e.selectedKeys]),
                        (0, l.useMemo)(
                            () => (e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set()),
                            [e.defaultSelectedKeys],
                        ),
                        e.onSelectionChange,
                    );
                return {
                    selectionMode: t,
                    isDisabled: i,
                    selectedKeys: r,
                    setSelectedKeys: s,
                    toggleKey(e) {
                        let i;
                        "multiple" === t
                            ? (i = new Set(r)).has(e) && (!n || i.size > 1)
                                ? i.delete(e)
                                : i.add(e)
                            : (i = new Set(r.has(e) && !n ? [] : [e])),
                            s(i);
                    },
                    setSelected(e, t) {
                        t !== r.has(e) && this.toggleKey(e);
                    },
                };
            })(e),
            { groupProps: _ } = (0, s.$)(e, n, t),
            h = (0, i.Sl)({
                ...e,
                values: { isDisabled: n.isDisabled, state: n },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            f = (0, a.$)(e, { global: !0 });
        return l.createElement(
            "div",
            {
                ...(0, o.v)(f, h, _),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            l.createElement(d.Provider, { value: n }, l.createElement(r.D, null, h.children)),
        );
    });
