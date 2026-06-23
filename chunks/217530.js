l.d(t, { A: () => f });
var n = l(627968),
    s = l(64700),
    r = l(503698),
    i = l.n(r),
    a = l(607399),
    c = l(689175),
    d = l(834730),
    o = l(375708),
    u = l(883154);
function h(e) {
    let { text: t, hasScrolled: l } = e;
    return (0, n.jsxs)("div", {
        className: i()(u.kL, { [u.sz]: l }),
        children: [
            (0, n.jsx)("div", {
                className: u.lm,
                children: (0, n.jsx)(d.E, {
                    className: u.__invalid_label,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
            }),
            (0, n.jsx)("div", { className: u._p }),
        ],
    });
}
var m = l(760967);
function f(e) {
    let { children: t, className: l } = e,
        {
            horizontalScrollNotice: r,
            handleScroll: d,
            handleSetScrollerRef: u,
            handleSetContainerRef: f,
        } = (function () {
            let [e, t] = s.useState(),
                [l, r] = s.useState(),
                [i, a] = s.useState(!1),
                [c, d] = s.useState(!1);
            return (
                s.useEffect(() => {
                    null == e || null == l ? a(!1) : a(e < l);
                }, [e, l]),
                {
                    horizontalScrollNotice: s.useMemo(
                        () => (i ? (0, n.jsx)(h, { text: o.intl.string(o.t.RfAAH9), hasScrolled: c }) : null),
                        [i, c],
                    ),
                    handleScroll: function () {
                        return d(!0);
                    },
                    handleSetScrollerRef: function (e) {
                        return r(e?.getScrollerState()?.scrollWidth);
                    },
                    handleSetContainerRef: function (e) {
                        return t(e?.clientWidth);
                    },
                }
            );
        })(),
        x = (0, n.jsx)("div", {
            className: m.vi,
            children: (0, n.jsx)("div", { className: i()(m._s, l), children: t }),
        });
    return (
        a.Fr ||
            (x = (0, n.jsxs)(n.Fragment, {
                children: [
                    r,
                    (0, n.jsx)(c.Ch, { className: m.XG, orientation: "horizontal", ref: u, onScroll: d, children: x }),
                ],
            })),
        (0, n.jsx)("div", { className: m.Rc, ref: f, children: x })
    );
}
