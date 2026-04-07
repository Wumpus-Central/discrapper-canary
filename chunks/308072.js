"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(311907),
    d = n(885151),
    c = n(760751),
    u = n(998218),
    m = n(354285);
function g(e) {
    let { applicationId: t, selected: n, onClick: l, disabled: g } = e,
        { data: x, isLoading: h } = (0, d.k)(t),
        _ = s.useMemo(() => {
            let e = x?.getCoverURL();
            if (null == e) return;
            let t = u.A.toURLSafe(e);
            return null == t ? e : (t.searchParams.set("size", "256"), t.toString());
        }, [x]),
        p = (0, o.bG)([c.A], () => c.A.getDetectableGame(t)?.name ?? ""),
        A = s.useCallback(() => {
            l?.(t);
        }, [t, l]),
        f = s.useMemo(
            () =>
                h
                    ? null
                    : null == _
                      ? (0, i.jsx)("div", { className: m.gP, children: (0, i.jsx)(a._7Z, { size: "lg" }) })
                      : (0, i.jsx)("img", { className: m.Su, alt: p, src: _ }),
            [_, h, p],
        );
    return (0, i.jsxs)("div", {
        className: r()(m.id, { [m.rX]: !n, [m.r9]: g }),
        children: [
            (0, i.jsxs)(a.DUT, {
                "aria-disabled": g,
                tabIndex: g ? -1 : 0,
                onClick: g ? void 0 : A,
                className: r()(m.a8, { [m.AL]: h, [m.r9]: g }),
                children: [n && (0, i.jsx)("div", { className: m.jK, children: (0, i.jsx)(a.P7L, { checked: n }) }), f],
            }),
            (0, i.jsx)(a.Text, { className: m.mO, variant: "text-xs/medium", color: "text-strong", children: p }),
        ],
    });
}
