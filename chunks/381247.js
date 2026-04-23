"use strict";
n.d(t, { h: () => c, i: () => d });
var r = n(627968),
    i = n(64700),
    s = n(990078),
    a = n(834730),
    o = n(290136),
    l = n(297689),
    u = n(469362);
function c(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: s,
            isDisabled: a = !1,
            collapsedContent: o,
            children: c,
        } = e,
        [d, _] = i.useState(n),
        f = i.useCallback(
            (e) => {
                _(e), null != s && s(e);
            },
            [s],
        );
    return (0, r.jsxs)(l.nD, {
        defaultExpanded: n,
        isDisabled: a,
        onExpandedChange: f,
        children: [
            (0, r.jsxs)("div", {
                className: u.wx,
                children: [
                    (0, r.jsx)(l.$m, {
                        variant: "text-md/medium",
                        color: d ? "text-strong" : "text-muted",
                        children: t,
                    }),
                    (!d || a) && o,
                ],
            }),
            (0, r.jsx)(l.vr, { children: (0, r.jsx)("div", { className: u.CS, children: c }) }),
        ],
    });
}
function d(e) {
    let {
            label: t,
            labelSubText: n,
            value: l,
            color: c = "text-muted",
            valueColor: d = "text-muted",
            valueIcon: _,
            icon: f,
            tooltip: p,
            tooltipAriaLabel: h,
            subText: E,
            subTextColor: m = "text-muted",
            subTextHasStrikethrough: g,
        } = e,
        A = i.useMemo(() => {
            let e = (0, r.jsxs)(a.E, {
                variant: "text-md/normal",
                color: d,
                className: u.U4,
                children: [null != _ && (0, r.jsx)(_, { size: "xs" }), l],
            });
            return null == E
                ? e
                : (0, r.jsxs)("div", {
                      className: u.Lm,
                      children: [
                          e,
                          (0, r.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: m,
                              className: g ? u.tP : void 0,
                              children: E,
                          }),
                      ],
                  });
        }, [l, _, E, g, d, m]),
        I = i.useMemo(
            () =>
                null == n
                    ? t
                    : (0, r.jsxs)("div", {
                          children: [
                              t,
                              (0, r.jsx)(a.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                          ],
                      }),
            [t, n],
        );
    return (0, r.jsxs)("div", {
        className: u.Yn,
        children: [
            (0, r.jsxs)(a.E, {
                variant: "text-md/normal",
                color: c,
                className: u.yB,
                children: [
                    f,
                    I,
                    null != p &&
                        (0, r.jsx)(s.m, { text: p, children: (0, r.jsx)(o.c, { size: "xs", "aria-label": h }) }),
                ],
            }),
            A,
        ],
    });
}
