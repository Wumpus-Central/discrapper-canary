"use strict";
n.d(t, { h: () => u, i: () => c });
var r = n(627968),
    i = n(64700),
    s = n(435371),
    a = n(397927),
    o = n(297689),
    l = n(861175);
function u(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: s,
            isDisabled: a = !1,
            collapsedContent: u,
            children: c,
        } = e,
        [d, _] = i.useState(n),
        f = i.useCallback(
            (e) => {
                _(e), null != s && s(e);
            },
            [s],
        );
    return (0, r.jsxs)(o.nD, {
        defaultExpanded: n,
        isDisabled: a,
        onExpandedChange: f,
        children: [
            (0, r.jsxs)("div", {
                className: l.wx,
                children: [
                    (0, r.jsx)(o.$m, {
                        variant: "text-md/medium",
                        color: d ? "text-strong" : "text-muted",
                        children: t,
                    }),
                    (!d || a) && u,
                ],
            }),
            (0, r.jsx)(o.vr, { children: (0, r.jsx)("div", { className: l.CS, children: c }) }),
        ],
    });
}
function c(e) {
    let {
            label: t,
            labelSubText: n,
            value: o,
            color: u = "text-muted",
            valueColor: c = "text-muted",
            valueIcon: d,
            icon: _,
            tooltip: f,
            tooltipAriaLabel: p,
            subText: h,
            subTextColor: m = "text-muted",
            subTextHasStrikethrough: E,
        } = e,
        g = i.useMemo(() => {
            let e = (0, r.jsxs)(a.Text, {
                variant: "text-md/normal",
                color: c,
                className: l.U4,
                children: [null != d && (0, r.jsx)(d, { size: "xs" }), o],
            });
            return null == h
                ? e
                : (0, r.jsxs)("div", {
                      className: l.Lm,
                      children: [
                          e,
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/medium",
                              color: m,
                              className: E ? l.tP : void 0,
                              children: h,
                          }),
                      ],
                  });
        }, [o, d, h, E, c, m]),
        A = i.useMemo(
            () =>
                null == n
                    ? t
                    : (0, r.jsxs)("div", {
                          children: [
                              t,
                              (0, r.jsx)(a.Text, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                          ],
                      }),
            [t, n],
        );
    return (0, r.jsxs)("div", {
        className: l.Yn,
        children: [
            (0, r.jsxs)(a.Text, {
                variant: "text-md/normal",
                color: u,
                className: l.yB,
                children: [
                    _,
                    A,
                    null != f &&
                        (0, r.jsx)(s.m_, { text: f, children: (0, r.jsx)(a.cBN, { size: "xs", "aria-label": p }) }),
                ],
            }),
            g,
        ],
    });
}
