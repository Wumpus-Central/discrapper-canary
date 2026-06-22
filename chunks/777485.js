"use strict";
n.d(t, { h: () => m, i: () => g });
var i = n(627968),
    r = n(64700),
    s = n(990078),
    a = n(834730),
    o = n(290136),
    l = n(353068),
    u = n(825913),
    c = n(650682),
    d = n(187322),
    _ = n(847374),
    h = n(167488);
function f(e) {
    let { children: t } = e;
    return (0, i.jsx)(l.kS, { className: h.nd, children: t });
}
function p(e) {
    let { children: t, ...n } = e,
        { isDisabled: r } = (0, u.CC)(c.k, "trigger");
    return (0, i.jsx)(d.vN, {
        children: (0, i.jsx)(c.$, {
            slot: "trigger",
            className: h.hZ,
            children: (0, i.jsxs)(a.E, {
                ...n,
                className: h.aQ,
                children: [t, !r && (0, i.jsx)(_.a, { size: "xs", color: "currentColor", className: h.ai })],
            }),
        }),
    });
}
var E = n(469362);
function m(e) {
    let {
            label: t,
            defaultExpanded: n = !1,
            onExpandedChange: s,
            isDisabled: a = !1,
            collapsedContent: o,
            children: u,
        } = e,
        [c, d] = r.useState(n),
        _ = r.useCallback(
            (e) => {
                d(e), null != s && s(e);
            },
            [s],
        );
    return (0, i.jsxs)(l.EN, {
        defaultExpanded: n,
        isDisabled: a,
        onExpandedChange: _,
        children: [
            (0, i.jsxs)("div", {
                className: E.wx,
                children: [
                    (0, i.jsx)(p, { variant: "text-md/medium", color: c ? "text-strong" : "text-muted", children: t }),
                    (!c || a) && o,
                ],
            }),
            (0, i.jsx)(f, { children: (0, i.jsx)("div", { className: E.CS, children: u }) }),
        ],
    });
}
function g(e) {
    let {
            label: t,
            labelSubText: n,
            value: l,
            color: u = "text-muted",
            valueColor: c = "text-muted",
            valueIcon: d,
            icon: _,
            tooltip: h,
            tooltipAriaLabel: f,
            subText: p,
            subTextColor: m = "text-muted",
            subTextHasStrikethrough: g,
        } = e,
        A = r.useMemo(() => {
            let e = (0, i.jsxs)(a.E, {
                variant: "text-md/normal",
                color: c,
                className: E.U4,
                children: [null != d && (0, i.jsx)(d, { size: "xs" }), l],
            });
            return null == p
                ? e
                : (0, i.jsxs)("div", {
                      className: E.Lm,
                      children: [
                          e,
                          (0, i.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: m,
                              className: g ? E.tP : void 0,
                              children: p,
                          }),
                      ],
                  });
        }, [l, d, p, g, c, m]),
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
        className: E.Yn,
        children: [
            (0, i.jsxs)(a.E, {
                variant: "text-md/normal",
                color: u,
                className: E.yB,
                children: [
                    _,
                    I,
                    null != h &&
                        (0, i.jsx)(s.m, { text: h, children: (0, i.jsx)(o.c, { size: "xs", "aria-label": f }) }),
                ],
            }),
            A,
        ],
    });
}
