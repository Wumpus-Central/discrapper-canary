"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(985018),
    c = n(801985);
function d(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(c.kL, { [c.sz]: n }),
        children: [
            (0, i.jsx)("div", {
                className: c.lm,
                children: (0, i.jsx)(r.Text, {
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
        [a, r] = s.useState(!1),
        [c, u] = s.useState(!1);
    return (
        s.useEffect(() => {
            null == e || null == n ? r(!1) : r(e < n);
        }, [e, n]),
        {
            horizontalScrollNotice: s.useMemo(
                () => (a ? (0, i.jsx)(d, { text: o.intl.string(o.t.RfAAH9), hasScrolled: c }) : null),
                [a, c],
            ),
            handleScroll: () => u(!0),
            handleSetScrollerRef: (e) => l(e?.getScrollerState()?.scrollWidth),
            handleSetContainerRef: (e) => t(e?.clientWidth),
        }
    );
}
