l.d(t, { h: () => u, i: () => o });
var s = l(627968),
    a = l(64700),
    n = l(990078),
    i = l(834730),
    r = l(290136),
    d = l(297689),
    c = l(469362);
function u(e) {
    let {
            label: t,
            defaultExpanded: l = !1,
            onExpandedChange: n,
            isDisabled: i = !1,
            collapsedContent: r,
            children: u,
        } = e,
        [o, m] = a.useState(l),
        x = a.useCallback(
            (e) => {
                m(e), null != n && n(e);
            },
            [n],
        );
    return (0, s.jsxs)(d.nD, {
        defaultExpanded: l,
        isDisabled: i,
        onExpandedChange: x,
        children: [
            (0, s.jsxs)("div", {
                className: c.wx,
                children: [
                    (0, s.jsx)(d.$m, {
                        variant: "text-md/medium",
                        color: o ? "text-strong" : "text-muted",
                        children: t,
                    }),
                    (!o || i) && r,
                ],
            }),
            (0, s.jsx)(d.vr, { children: (0, s.jsx)("div", { className: c.CS, children: u }) }),
        ],
    });
}
function o(e) {
    let {
            label: t,
            labelSubText: l,
            value: d,
            color: u = "text-muted",
            valueColor: o = "text-muted",
            valueIcon: m,
            icon: x,
            tooltip: h,
            tooltipAriaLabel: j,
            subText: v,
            subTextColor: p = "text-muted",
            subTextHasStrikethrough: g,
        } = e,
        f = a.useMemo(() => {
            let e = (0, s.jsxs)(i.E, {
                variant: "text-md/normal",
                color: o,
                className: c.U4,
                children: [null != m && (0, s.jsx)(m, { size: "xs" }), d],
            });
            return null == v
                ? e
                : (0, s.jsxs)("div", {
                      className: c.Lm,
                      children: [
                          e,
                          (0, s.jsx)(i.E, {
                              variant: "text-xs/medium",
                              color: p,
                              className: g ? c.tP : void 0,
                              children: v,
                          }),
                      ],
                  });
        }, [d, m, v, g, o, p]),
        N = a.useMemo(
            () =>
                null == l
                    ? t
                    : (0, s.jsxs)("div", {
                          children: [
                              t,
                              (0, s.jsx)(i.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
                          ],
                      }),
            [t, l],
        );
    return (0, s.jsxs)("div", {
        className: c.Yn,
        children: [
            (0, s.jsxs)(i.E, {
                variant: "text-md/normal",
                color: u,
                className: c.yB,
                children: [
                    x,
                    N,
                    null != h &&
                        (0, s.jsx)(n.m, { text: h, children: (0, s.jsx)(r.c, { size: "xs", "aria-label": j }) }),
                ],
            }),
            f,
        ],
    });
}
