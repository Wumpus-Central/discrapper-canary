"use strict";
n.d(t, { d: () => f });
var r = n(627968),
    i = n(64700),
    s = n(534514),
    a = n(834730),
    o = n(964892),
    l = n(135564),
    u = n(206418),
    c = n(679970),
    d = n(985018),
    _ = n(414690);
function f(e) {
    let { children: t, targetElementRef: n, delay: s, showSubtext: a, forceOpen: u } = e,
        [c, d] = i.useState(!1),
        _ = i.useRef(null),
        f = i.useCallback(() => {
            null != _.current && (clearTimeout(_.current), (_.current = null));
        }, []);
    i.useEffect(() => f, [f]);
    let h = i.useCallback(() => {
        f(),
            (_.current = window.setTimeout(() => {
                (_.current = null), d(!0);
            }, s));
    }, [s, f]);
    i.useEffect(() => {
        u && !c && h();
    }, [u, c, h]);
    let E = i.useCallback(() => {
            h();
        }, [h]),
        m = i.useCallback(() => {
            f(), d(!1);
        }, [f]);
    return (0, r.jsxs)("div", {
        onMouseEnter: E,
        onMouseLeave: m,
        children: [
            t,
            (0, r.jsxs)(o.x, {
                targetElementRef: n,
                shouldShow: !!(c || u),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, r.jsx)(p, { showSubtext: a }), (0, r.jsx)(l.F, {})],
            }),
        ],
    });
}
function p(e) {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(u.A, {
        assetComponent: (0, r.jsx)(c.A, { className: _.jc }),
        tooltipWordmarkComponent: (0, r.jsx)(s.D, {
            variant: "heading-md/extrabold",
            className: _.RK,
            children: d.intl.string(d.t.ElYQFS),
        }),
        children: [
            (0, r.jsx)(s.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : _.Qn,
                children: d.intl.string(d.t.lTHkqd),
            }),
            t
                ? (0, r.jsx)(a.E, { variant: "text-xs/normal", className: _.lV, children: d.intl.string(d.t.MEV0GI) })
                : void 0,
        ],
    });
}
