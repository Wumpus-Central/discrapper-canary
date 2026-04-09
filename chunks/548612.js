n.d(l, { A: () => m });
var t = n(627968),
    i = n(64700),
    s = n(317097),
    a = n(397927),
    r = n(930349),
    o = n(652215),
    d = n(985018),
    c = n(595696);
function u(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: d, onSelect: u } = e,
        m = i.useRef(null),
        x = (0, s.Hl)(l);
    return (0, t.jsx)(a.YNO, {
        targetElementRef: m,
        renderPopout: (e) => (0, t.jsx)(a.VNw, { ...e, value: l, onChange: u, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(a.DUT, {
                ...n,
                innerRef: m,
                className: c.Dh,
                onClick: r ? o.tEg : l,
                "aria-label": d,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: c.Hy, style: { backgroundColor: x } }),
            });
        },
    });
}
function m(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: a,
            suggestedColors: o,
            disabled: m = !1,
        } = e,
        x = (0, s.Hl)(l),
        p = (0, s.Hl)(n),
        A = `linear-gradient(to bottom, ${x}, ${p})`,
        g = d.intl.formatToPlainString(d.t.FquTfm, { colorLabel: x }),
        f = d.intl.formatToPlainString(d.t.xOnm4z, { colorLabel: p });
    return (0, t.jsx)(r.Yt, {
        variant: "square",
        children: (0, t.jsxs)("div", {
            className: c.D7,
            style: { background: A },
            children: [
                (0, t.jsx)(u, { color: l, suggestedColors: o, disabled: m, ariaLabel: g, onSelect: i }),
                (0, t.jsx)(u, { color: n, suggestedColors: o, disabled: m, ariaLabel: f, onSelect: a }),
            ],
        }),
    });
}
