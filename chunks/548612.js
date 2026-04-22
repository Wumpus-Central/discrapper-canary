l.d(n, { A: () => A });
var t = l(627968),
    i = l(64700),
    r = l(317097),
    s = l(265872),
    a = l(508274),
    o = l(939249),
    d = l(930349),
    c = l(985018),
    u = l(298387);
function g(e) {
    let { color: n, suggestedColors: l, disabled: d, ariaLabel: c, onSelect: g } = e,
        A = i.useRef(null),
        m = (0, r.Hl)(n);
    return (0, t.jsx)(s.Y, {
        targetElementRef: A,
        renderPopout: (e) => (0, t.jsx)(a.VN, { ...e, value: n, onChange: g, suggestedColors: l, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, t.jsx)(o.D, {
                ...l,
                innerRef: A,
                className: u.Dh,
                onClick: d ? void 0 : n,
                "aria-label": c,
                "aria-disabled": d,
                tabIndex: d ? -1 : 0,
                children: (0, t.jsx)("div", { className: u.Hy, style: { backgroundColor: m } }),
            });
        },
    });
}
function A(e) {
    let {
            primaryColor: n,
            secondaryColor: l,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: s,
            suggestedColors: a,
            disabled: o = !1,
        } = e,
        A = (0, r.Hl)(n),
        m = (0, r.Hl)(l),
        f = `linear-gradient(to bottom, ${A}, ${m})`,
        p = c.intl.formatToPlainString(c.t.FquTfm, { colorLabel: A }),
        x = c.intl.formatToPlainString(c.t.xOnm4z, { colorLabel: m });
    return (0, t.jsx)(d.Yt, {
        variant: "square",
        disabled: o,
        children: (0, t.jsxs)("div", {
            className: u.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(g, { color: n, suggestedColors: a, ariaLabel: p, onSelect: i, disabled: o }),
                (0, t.jsx)(g, { color: l, suggestedColors: a, ariaLabel: x, onSelect: s, disabled: o }),
            ],
        }),
    });
}
