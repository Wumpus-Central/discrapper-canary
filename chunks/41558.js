n.d(t, { Z: () => u });
var i,
    l = n(951288),
    r = n(647438),
    a = n(481060),
    o = n(388032),
    s = n(258253),
    c = (((i = c || {})[(i.VIEW_MORE = 0)] = "VIEW_MORE"), (i[(i.VIEW_LESS = 1)] = "VIEW_LESS"), i);
function u(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, l.jsxs)("div", {
        className: s.header,
        children: [
            (0, l.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: t,
            }),
            null != n &&
                null != i &&
                (0, l.jsx)(a.P3F, {
                    className: s.viewMore,
                    onClick: i,
                    "aria-label": o.intl.formatToPlainString(o.t["bj/2kV"], { title: t }),
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "text-brand",
                        children: 0 === n ? o.intl.format(o.t.gVw57p, {}) : o.intl.string(o.t.nPGLFQ),
                    }),
                }),
        ],
    });
}
(u.buttonTypes = c),
    (u.Loading = function () {
        let e = r.useMemo(() => ({ width: "".concat(10 + 20 * Math.random(), "%") }), []);
        return (0, l.jsx)("div", {
            className: s.loadingHeader,
            style: e,
            children: (0, l.jsx)(a.Text, {
                className: s.hidden,
                variant: "text-md/medium",
                color: "header-primary",
                children: "_",
            }),
        });
    });
