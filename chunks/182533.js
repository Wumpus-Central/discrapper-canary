"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(582754),
    o = n(397927),
    l = n(736653),
    u = n(818348),
    c = n(985018),
    d = n(926773),
    _ = n(369498),
    f = n(270498),
    p = n(261418),
    h = n(158802);
let m = function (e) {
    let t = (0, l.Ay)(),
        n = i.useRef(null),
        [m, g] = i.useState({}),
        E = (0, o.rdh)(o.LU0.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (i.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                r = window.getComputedStyle(e, "::placeholder"),
                i = t.getPropertyValue("font-family"),
                a = t.getPropertyValue("font-weight");
            g({
                base: {
                    fontFamily: i,
                    fontWeight: a,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: E,
                    padding: "12px",
                    "::placeholder": { color: r.getPropertyValue("color") },
                    borderRadius: o.LU0.radii.xs,
                },
            });
        }, [n, E]),
        e.type)
    ) {
        case u.he.PRZELEWY24: {
            let i = (0, s.Mw)(t) ? p : h,
                { onNameChange: l, onEmailChange: u, onP24BankChange: _, p24BankValue: f, billingAddressInfo: g } = e;
            return (0, r.jsx)("div", {
                className: d.rf,
                children: (0, r.jsxs)(o.BJc, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(o.ksK, {
                            label: c.intl.string(c.t["w/qqKK"]),
                            inputRef: n,
                            name: c.intl.string(c.t["w/qqKK"]),
                            placeholder: c.intl.string(c.t["w/qqKK"]),
                            onChange: (e) => u(e),
                            value: g.email,
                        }),
                        (0, r.jsx)(o.ksK, {
                            label: c.intl.string(c.t["yf7ms+"]),
                            name: c.intl.string(c.t["yf7ms+"]),
                            placeholder: c.intl.string(c.t["yf7ms+"]),
                            onChange: (e) => l(e),
                            value: g.name,
                        }),
                        (0, r.jsxs)(o.BJc, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    children: c.intl.string(c.t.De3b8t),
                                }),
                                (0, r.jsx)(a.P24BankElement, {
                                    options: { value: f, style: m },
                                    onChange: (e) => _(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case u.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: l, epsBankValue: u, billingAddressInfo: p } = e,
                h = (0, s.Mw)(t) ? _ : f;
            return (0, r.jsx)("div", {
                className: d.rf,
                children: (0, r.jsxs)(o.BJc, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(o.ksK, {
                            label: c.intl.string(c.t.sN3wrd),
                            inputRef: n,
                            name: c.intl.string(c.t.sN3wrd),
                            placeholder: c.intl.string(c.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: p.name,
                        }),
                        (0, r.jsxs)(o.BJc, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    children: c.intl.string(c.t.dFyV07),
                                }),
                                (0, r.jsx)(a.EpsBankElement, {
                                    options: { value: u, style: m },
                                    onChange: (e) => l(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.je,
                                    children: (0, r.jsx)("img", { src: h, alt: "EPS" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        default:
            throw Error("unknown payment source type");
    }
};
