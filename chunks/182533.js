n.d(t, {
    A: () => m,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(582754),
    o = n(397927),
    l = n(736653),
    c = n(818348),
    u = n(985018),
    d = n(926773),
    f = n(369498),
    p = n(270498),
    _ = n(261418),
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
                    "::placeholder": {
                        color: r.getPropertyValue("color"),
                    },
                    borderRadius: o.LU0.radii.xs,
                },
            });
        }, [n, E]),
        e.type)
    ) {
        case c.he.PRZELEWY24: {
            let i = (0, s.Mw)(t) ? _ : h,
                { onNameChange: l, onEmailChange: c, onP24BankChange: f, p24BankValue: p, billingAddressInfo: g } = e;
            return (0, r.jsx)("div", {
                className: d.rf,
                children: (0, r.jsxs)(o.BJc, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(o.ksK, {
                            label: u.intl.string(u.t["w/qqKK"]),
                            inputRef: n,
                            name: u.intl.string(u.t["w/qqKK"]),
                            placeholder: u.intl.string(u.t["w/qqKK"]),
                            onChange: (e) => c(e),
                            value: g.email,
                        }),
                        (0, r.jsx)(o.ksK, {
                            label: u.intl.string(u.t["yf7ms+"]),
                            name: u.intl.string(u.t["yf7ms+"]),
                            placeholder: u.intl.string(u.t["yf7ms+"]),
                            onChange: (e) => l(e),
                            value: g.name,
                        }),
                        (0, r.jsxs)(o.BJc, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    children: u.intl.string(u.t.De3b8t),
                                }),
                                (0, r.jsx)(a.P24BankElement, {
                                    options: {
                                        value: p,
                                        style: m,
                                    },
                                    onChange: (e) => f(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.je,
                                    children: (0, r.jsx)("img", {
                                        src: i,
                                        alt: "Przelewy24",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case c.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: l, epsBankValue: c, billingAddressInfo: _ } = e,
                h = (0, s.Mw)(t) ? f : p;
            return (0, r.jsx)("div", {
                className: d.rf,
                children: (0, r.jsxs)(o.BJc, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(o.ksK, {
                            label: u.intl.string(u.t.sN3wrd),
                            inputRef: n,
                            name: u.intl.string(u.t.sN3wrd),
                            placeholder: u.intl.string(u.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: _.name,
                        }),
                        (0, r.jsxs)(o.BJc, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    children: u.intl.string(u.t.dFyV07),
                                }),
                                (0, r.jsx)(a.EpsBankElement, {
                                    options: {
                                        value: c,
                                        style: m,
                                    },
                                    onChange: (e) => l(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.je,
                                    children: (0, r.jsx)("img", {
                                        src: h,
                                        alt: "EPS",
                                    }),
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
