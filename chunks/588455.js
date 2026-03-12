"use strict";
n.d(t, { d: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(964892),
    o = n(135564),
    l = n(206418),
    u = n(679970),
    c = n(985018),
    d = n(169993);
function _(e) {
    let { children: t, targetElementRef: n, delay: s, showSubtext: l, forceOpen: u } = e,
        [c, d] = i.useState(!1),
        _ = i.useRef(null),
        p = i.useCallback(() => {
            null != _.current && (clearTimeout(_.current), (_.current = null));
        }, []);
    i.useEffect(() => p, [p]);
    let h = i.useCallback(() => {
        p(),
            (_.current = window.setTimeout(() => {
                (_.current = null), d(!0);
            }, s));
    }, [s, p]);
    i.useEffect(() => {
        u && !c && h();
    }, [u, c, h]);
    let m = i.useCallback(() => {
            h();
        }, [h]),
        E = i.useCallback(() => {
            p(), d(!1);
        }, [p]);
    return (0, r.jsxs)("div", {
        onMouseEnter: m,
        onMouseLeave: E,
        children: [
            t,
            (0, r.jsxs)(a.x, {
                targetElementRef: n,
                shouldShow: !!(c || u),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, r.jsx)(f, { showSubtext: l }), (0, r.jsx)(o.F, {})],
            }),
        ],
    });
}
function f(e) {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(l.A, {
        assetComponent: (0, r.jsx)(u.A, { className: d.jc }),
        tooltipWordmarkComponent: (0, r.jsx)(s.DZT, {
            variant: "heading-md/extrabold",
            className: d.RK,
            children: c.intl.string(c.t.ElYQFS),
        }),
        children: [
            (0, r.jsx)(s.DZT, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : d.Qn,
                children: c.intl.string(c.t.lTHkqd),
            }),
            t
                ? (0, r.jsx)(s.EYj, { variant: "text-xs/normal", className: d.lV, children: c.intl.string(c.t.MEV0GI) })
                : void 0,
        ],
    });
}
