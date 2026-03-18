"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(985018),
    c = n(801985);
function d(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)("div", {
        className: r()(c.kL, { [c.sz]: n }),
        children: [
            (0, i.jsx)("div", {
                className: c.lm,
                children: (0, i.jsx)(a.Text, {
                    className: c.__invalid_label,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
            }),
            (0, i.jsx)("div", { className: c._p }),
        ],
    });
}
function u() {
    let [e, t] = s.useState(),
        [n, l] = s.useState(),
        [r, a] = s.useState(!1),
        [c, u] = s.useState(!1);
    return (
        s.useEffect(() => {
            null == e || null == n ? a(!1) : a(e < n);
        }, [e, n]),
        {
            horizontalScrollNotice: s.useMemo(
                () => (r ? (0, i.jsx)(d, { text: o.intl.string(o.t.RfAAH9), hasScrolled: c }) : null),
                [r, c],
            ),
            handleScroll: () => u(!0),
            handleSetScrollerRef: (e) => l(e?.getScrollerState()?.scrollWidth),
            handleSetContainerRef: (e) => t(e?.clientWidth),
        }
    );
}
