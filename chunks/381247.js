"use strict";
n.d(t, { h: () => c, i: () => d });
var i = n(627968),
    r = n(64700),
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
        [d, _] = r.useState(n),
        h = r.useCallback(
            (e) => {
                _(e), null != s && s(e);
            },
            [s],
        );
    return (0, i.jsxs)(l.nD, {
        defaultExpanded: n,
        isDisabled: a,
        onExpandedChange: h,
        children: [
            (0, i.jsxs)("div", {
                className: u.wx,
                children: [
                    (0, i.jsx)(l.$m, {
                        variant: "text-md/medium",
                        color: d ? "text-strong" : "text-muted",
                        children: t,
                    }),
                    (!d || a) && o,
                ],
            }),
            (0, i.jsx)(l.vr, { children: (0, i.jsx)("div", { className: u.CS, children: c }) }),
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
            icon: h,
            tooltip: f,
            tooltipAriaLabel: p,
            subText: E,
            subTextColor: m = "text-muted",
            subTextHasStrikethrough: g,
        } = e,
        A = r.useMemo(() => {
            let e = (0, i.jsxs)(a.E, {
                variant: "text-md/normal",
                color: d,
                className: u.U4,
                children: [null != _ && (0, i.jsx)(_, { size: "xs" }), l],
            });
            return null == E
                ? e
                : (0, i.jsxs)("div", {
                      className: u.Lm,
                      children: [
                          e,
                          (0, i.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: m,
                              className: g ? u.tP : void 0,
                              children: E,
                          }),
                      ],
                  });
        }, [l, _, E, g, d, m]),
        I = r.useMemo(
            () =>
                null == n
                    ? t
                    : (0, i.jsxs)("div", {
                          children: [
                              t,
                              (0, i.jsx)(a.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                          ],
                      }),
            [t, n],
        );
    return (0, i.jsxs)("div", {
        className: u.Yn,
        children: [
            (0, i.jsxs)(a.E, {
                variant: "text-md/normal",
                color: c,
                className: u.yB,
                children: [
                    h,
                    I,
                    null != f &&
                        (0, i.jsx)(s.m, { text: f, children: (0, i.jsx)(o.c, { size: "xs", "aria-label": p }) }),
                ],
            }),
            A,
        ],
    });
}
