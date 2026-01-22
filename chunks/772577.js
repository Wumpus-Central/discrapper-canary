n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(567305),
    c = n(985018),
    u = n(801985);

function d(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(u.kL, {
            [u.sz]: n,
        }),
        children: [
            (0, r.jsx)("div", {
                className: u.lm,
                children: (0, r.jsx)(s.Text, {
                    className: u.__invalid_label,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
            }),
            (0, r.jsx)("div", {
                className: u._p,
            }),
        ],
    });
}

function f(e) {
    let [t, n] = l.useState(),
        [i, a] = l.useState(),
        [s, u] = l.useState(!1),
        [f, p] = l.useState(!1),
        { enabled: h } = (0, o.DN)(e);
    return (
        l.useEffect(() => {
            h && null != t && null != i ? u(t < i) : u(!1);
        }, [h, t, i]),
        {
            horizontalScrollNotice: l.useMemo(
                () =>
                    s
                        ? (0, r.jsx)(d, {
                              text: c.intl.string(c.t.RfAAH9),
                              hasScrolled: f,
                          })
                        : null,
                [s, f],
            ),
            handleScroll: () => p(!0),
            handleSetScrollerRef: (e) => {
                var t;
                return a(null == e || null == (t = e.getScrollerState()) ? void 0 : t.scrollWidth);
            },
            handleSetContainerRef: (e) => n(null == e ? void 0 : e.clientWidth),
        }
    );
}
