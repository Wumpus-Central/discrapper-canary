"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(311907),
    d = n(585958),
    c = n(760751),
    u = n(677230);
function m(e) {
    let { applicationId: t, selected: n, onClick: l, disabled: m } = e,
        { isFetching: g, coverImageUrl: x } = (0, d.n)(t, { coverImageSize: 256 }),
        h = (0, o.bG)([c.A], () => c.A.getDetectableGame(t)?.name ?? ""),
        _ = s.useCallback(() => {
            l?.(t);
        }, [t, l]),
        A = s.useMemo(
            () =>
                g
                    ? null
                    : null == x
                      ? (0, i.jsx)("div", { className: u.gP, children: (0, i.jsx)(a._7Z, { size: "lg" }) })
                      : (0, i.jsx)("img", { className: u.Su, alt: h, src: x }),
            [x, g, h],
        );
    return (0, i.jsxs)("div", {
        className: r()(u.id, { [u.rX]: !n, [u.r9]: m }),
        children: [
            (0, i.jsxs)(a.DUT, {
                "aria-disabled": m,
                tabIndex: m ? -1 : 0,
                onClick: m ? void 0 : _,
                className: r()(u.a8, { [u.AL]: g, [u.r9]: m }),
                children: [n && (0, i.jsx)("div", { className: u.jK, children: (0, i.jsx)(a.P7L, { checked: n }) }), A],
            }),
            (0, i.jsx)(a.Text, { className: u.mO, variant: "text-xs/medium", color: "text-strong", children: h }),
        ],
    });
}
