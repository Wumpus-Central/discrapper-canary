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
            value: n,
            color: o = "text-muted",
            valueColor: u = "text-muted",
            valueIcon: c,
            icon: d,
            tooltip: _,
            tooltipAriaLabel: f,
            subText: p,
            subTextHasStrikethrough: h,
        } = e,
        m = i.useMemo(() => {
            let e = (0, r.jsxs)(a.Text, {
                variant: "text-md/normal",
                color: u,
                className: l.U4,
                children: [null != c && (0, r.jsx)(c, { size: "xs" }), n],
            });
            return null == p
                ? e
                : (0, r.jsxs)("div", {
                      className: l.Lm,
                      children: [
                          e,
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              className: h ? l.tP : void 0,
                              children: p,
                          }),
                      ],
                  });
        }, [n, c, p, h, u]);
    return (0, r.jsxs)("div", {
        className: l.Yn,
        children: [
            (0, r.jsxs)(a.Text, {
                variant: "text-md/normal",
                color: o,
                className: l.yB,
                children: [
                    d,
                    t,
                    null != _ &&
                        (0, r.jsx)(s.m_, { text: _, children: (0, r.jsx)(a.cBN, { size: "xs", "aria-label": f }) }),
                ],
            }),
            m,
        ],
    });
}
