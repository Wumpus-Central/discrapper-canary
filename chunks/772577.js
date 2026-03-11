"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(567305),
    c = n(985018),
    d = n(46127);
function u(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(d.kL, { [d.sz]: n }),
        children: [
            (0, i.jsx)("div", {
                className: d.lm,
                children: (0, i.jsx)(r.Text, {
                    className: d.__invalid_label,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", { className: d._p }),
        ],
    });
}
function h(e) {
    let [t, n] = s.useState(),
        [l, a] = s.useState(),
        [r, d] = s.useState(!1),
        [h, A] = s.useState(!1),
        { enabled: m } = (0, o.DN)(e);
    return (
        s.useEffect(() => {
            m && null != t && null != l ? d(t < l) : d(!1);
        }, [m, t, l]),
        {
            horizontalScrollNotice: s.useMemo(
                () => (r ? (0, i.jsx)(u, { text: c.intl.string(c.t.RfAAH9), hasScrolled: h }) : null),
                [r, h],
            ),
            handleScroll: () => A(!0),
            handleSetScrollerRef: (e) => a(e?.getScrollerState()?.scrollWidth),
            handleSetContainerRef: (e) => n(e?.clientWidth),
        }
    );
}
