l.d(t, { A: () => u });
var n = l(627968),
    i = l(64700),
    s = l(317097),
    a = l(397927),
    r = l(930349),
    o = l(985018),
    d = l(881091);
function c(e) {
    let { color: t, suggestedColors: l, disabled: r, ariaLabel: o, onSelect: c } = e,
        u = i.useRef(null),
        m = (0, s.Hl)(t);
    return (0, n.jsx)(a.YNO, {
        targetElementRef: u,
        renderPopout: (e) => (0, n.jsx)(a.VNw, { ...e, value: t, onChange: c, suggestedColors: l, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: t, ...l } = e;
            return (0, n.jsx)(a.DUT, {
                ...l,
                innerRef: u,
                className: d.Dh,
                onClick: r ? void 0 : t,
                "aria-label": o,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, n.jsx)("div", { className: d.Hy, style: { backgroundColor: m } }),
            });
        },
    });
}
function u(e) {
    let {
            primaryColor: t,
            secondaryColor: l,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: a,
            suggestedColors: u,
            disabled: m = !1,
        } = e,
        p = (0, s.Hl)(t),
        x = (0, s.Hl)(l),
        A = `linear-gradient(to bottom, ${p}, ${x})`,
        g = o.intl.formatToPlainString(o.t.FquTfm, { colorLabel: p }),
        f = o.intl.formatToPlainString(o.t.xOnm4z, { colorLabel: x });
    return (0, n.jsx)(r.Yt, {
        variant: "square",
        disabled: m,
        children: (0, n.jsxs)("div", {
            className: d.D7,
            style: { background: A },
            children: [
                (0, n.jsx)(c, { color: t, suggestedColors: u, ariaLabel: g, onSelect: i, disabled: m }),
                (0, n.jsx)(c, { color: l, suggestedColors: u, ariaLabel: f, onSelect: a, disabled: m }),
            ],
        }),
    });
}
