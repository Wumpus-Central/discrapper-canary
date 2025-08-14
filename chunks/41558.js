n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(388032),
    s = n(258253),
    l = (function (e) {
        return (e[(e.VIEW_MORE = 0)] = "VIEW_MORE"), (e[(e.VIEW_LESS = 1)] = "VIEW_LESS"), e;
    })(l || {});
function c(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, r.jsxs)("div", {
        className: s.header,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: t,
            }),
            null != n &&
                null != i &&
                (0, r.jsx)(o.P3F, {
                    className: s.viewMore,
                    onClick: i,
                    "aria-label": a.intl.formatToPlainString(a.t["bj/2kZ"], { title: t }),
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-brand",
                        children: 0 === n ? a.intl.format(a.t.gVw57u, {}) : a.intl.string(a.t.nPGLFR),
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
            children: (0, r.jsx)(o.Text, {
                className: s.hidden,
                variant: "text-md/medium",
                color: "header-primary",
                children: "_",
            }),
        });
    });
