t.d(n, { A: () => A });
var l = t(627968),
    i = t(64700),
    r = t(317097),
    a = t(265872),
    s = t(508274),
    o = t(939249),
    d = t(930349),
    u = t(985018),
    c = t(298387);
function g(e) {
    let { color: n, suggestedColors: t, disabled: d, ariaLabel: u, onSelect: g } = e,
        A = i.useRef(null),
        m = (0, r.Hl)(n);
    return (0, l.jsx)(a.Y, {
        targetElementRef: A,
        renderPopout: (e) => (0, l.jsx)(s.VN, { ...e, value: n, onChange: g, suggestedColors: t, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...t } = e;
            return (0, l.jsx)(o.D, {
                ...t,
                innerRef: A,
                className: c.Dh,
                onClick: d ? void 0 : n,
                "aria-label": u,
                "aria-disabled": d,
                tabIndex: d ? -1 : 0,
                children: (0, l.jsx)("div", { className: c.Hy, style: { backgroundColor: m } }),
            });
        },
    });
}
function A(e) {
    let {
            primaryColor: n,
            secondaryColor: t,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
        } = e,
        A = (0, r.Hl)(n),
        m = (0, r.Hl)(t),
        f = `linear-gradient(to bottom, ${A}, ${m})`,
        p = u.intl.formatToPlainString(u.t.FquTfm, { colorLabel: A }),
        x = u.intl.formatToPlainString(u.t.xOnm4z, { colorLabel: m });
    return (0, l.jsx)(d.Yt, {
        variant: "square",
        disabled: o,
        children: (0, l.jsxs)("div", {
            className: c.D7,
            style: { background: f },
            children: [
                (0, l.jsx)(g, { color: n, suggestedColors: s, ariaLabel: p, onSelect: i, disabled: o }),
                (0, l.jsx)(g, { color: t, suggestedColors: s, ariaLabel: x, onSelect: a, disabled: o }),
            ],
        }),
    });
}
