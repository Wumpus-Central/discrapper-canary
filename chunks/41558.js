n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(388032),
    s = n(194370),
    l = (function (e) {
        return (e[(e.VIEW_MORE = 0)] = "VIEW_MORE"), (e[(e.VIEW_LESS = 1)] = "VIEW_LESS"), e;
    })(l || {});
function c(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, r.jsxs)("div", {
        className: s.header,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: t,
            }),
            null != n &&
                null != i &&
                (0, r.jsx)(a.P3F, {
                    className: s.viewMore,
                    onClick: i,
                    "aria-label": o.intl.formatToPlainString(o.t["bj/2kV"], { title: t }),
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "text-brand",
                        children: 0 === n ? o.intl.format(o.t.gVw57p, {}) : o.intl.string(o.t.nPGLFQ),
                    }),
                }),
        ],
    });
}
(c.buttonTypes = l),
    (c.Loading = function () {
        let e = i.useMemo(() => ({ width: "".concat(10 + 20 * Math.random(), "%") }), []);
        return (0, r.jsx)("div", {
            className: s.loadingHeader,
            style: e,
            children: (0, r.jsx)(a.Text, {
                className: s.hidden,
                variant: "text-md/medium",
                color: "text-strong",
                children: "_",
            }),
        });
    });
