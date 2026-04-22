n.d(t, { h: () => c, i: () => d });
var a = n(627968),
    r = n(64700),
    l = n(990078),
    i = n(834730),
    s = n(290136),
    o = n(297689),
    u = n(469362);
function c(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: l,
            isDisabled: i = !1,
            collapsedContent: s,
            children: c,
        } = e,
        [d, m] = r.useState(n),
        p = r.useCallback(
            (e) => {
                m(e), null != l && l(e);
            },
            [l],
        );
    return (0, a.jsxs)(o.nD, {
        defaultExpanded: n,
        isDisabled: i,
        onExpandedChange: p,
        children: [
            (0, a.jsxs)("div", {
                className: u.wx,
                children: [
                    (0, a.jsx)(o.$m, {
                        variant: "text-md/medium",
                        color: d ? "text-strong" : "text-muted",
                        children: t,
                    }),
                    (!d || i) && s,
                ],
            }),
            (0, a.jsx)(o.vr, { children: (0, a.jsx)("div", { className: u.CS, children: c }) }),
        ],
    });
}
function d(e) {
    let {
            label: t,
            labelSubText: n,
            value: o,
            color: c = "text-muted",
            valueColor: d = "text-muted",
            valueIcon: m,
            icon: p,
            tooltip: _,
            tooltipAriaLabel: f,
            subText: g,
            subTextColor: b = "text-muted",
            subTextHasStrikethrough: v,
        } = e,
        x = r.useMemo(() => {
            let e = (0, a.jsxs)(i.E, {
                variant: "text-md/normal",
                color: d,
                className: u.U4,
                children: [null != m && (0, a.jsx)(m, { size: "xs" }), o],
            });
            return null == g
                ? e
                : (0, a.jsxs)("div", {
                      className: u.Lm,
                      children: [
                          e,
                          (0, a.jsx)(i.E, {
                              variant: "text-xs/medium",
                              color: b,
                              className: v ? u.tP : void 0,
                              children: g,
                          }),
                      ],
                  });
        }, [o, m, g, v, d, b]),
        h = r.useMemo(
            () =>
                null == n
                    ? t
                    : (0, a.jsxs)("div", {
                          children: [
                              t,
                              (0, a.jsx)(i.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                          ],
                      }),
            [t, n],
        );
    return (0, a.jsxs)("div", {
        className: u.Yn,
        children: [
            (0, a.jsxs)(i.E, {
                variant: "text-md/normal",
                color: c,
                className: u.yB,
                children: [
                    p,
                    h,
                    null != _ &&
                        (0, a.jsx)(l.m, { text: _, children: (0, a.jsx)(s.c, { size: "xs", "aria-label": f }) }),
                ],
            }),
            x,
        ],
    });
}
