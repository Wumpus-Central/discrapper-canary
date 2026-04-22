n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    a = n(342393),
    r = n(462887),
    s = n(602853),
    o = n(827734),
    u = n(331322),
    c = n(292666),
    d = n(834730),
    p = n(736653),
    m = n(818348),
    h = n(985018),
    A = n(198650),
    _ = n(369498),
    C = n(270498),
    E = n(261418),
    y = n(158802);
let f = function (e) {
    let t = (0, p.Ay)(),
        n = i.useRef(null),
        [f, P] = i.useState({}),
        S = (0, s.r)(o.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (i.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                l = window.getComputedStyle(e, "::placeholder"),
                i = t.getPropertyValue("font-family"),
                a = t.getPropertyValue("font-weight");
            P({
                base: {
                    fontFamily: i,
                    fontWeight: a,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: S,
                    padding: "12px",
                    "::placeholder": { color: l.getPropertyValue("color") },
                    borderRadius: o.A.radii.xs,
                },
            });
        }, [n, S]),
        e.type)
    ) {
        case m.he.PRZELEWY24: {
            let i = (0, r.M)(t) ? E : y,
                { onNameChange: s, onEmailChange: o, onP24BankChange: p, p24BankValue: m, billingAddressInfo: _ } = e;
            return (0, l.jsx)("div", {
                className: A.rf,
                children: (0, l.jsxs)(u.B, {
                    gap: 16,
                    children: [
                        (0, l.jsx)(c.k, {
                            label: h.intl.string(h.t["w/qqKK"]),
                            inputRef: n,
                            name: h.intl.string(h.t["w/qqKK"]),
                            placeholder: h.intl.string(h.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: _.email,
                        }),
                        (0, l.jsx)(c.k, {
                            label: h.intl.string(h.t["yf7ms+"]),
                            name: h.intl.string(h.t["yf7ms+"]),
                            placeholder: h.intl.string(h.t["yf7ms+"]),
                            onChange: (e) => s(e),
                            value: _.name,
                        }),
                        (0, l.jsxs)(u.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(d.E, { variant: "text-sm/semibold", children: h.intl.string(h.t.De3b8t) }),
                                (0, l.jsx)(a.P24BankElement, {
                                    options: { value: m, style: f },
                                    onChange: (e) => p(e.value),
                                }),
                                (0, l.jsx)("div", {
                                    className: A.je,
                                    children: (0, l.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case m.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: s, epsBankValue: o, billingAddressInfo: p } = e,
                m = (0, r.M)(t) ? _ : C;
            return (0, l.jsx)("div", {
                className: A.rf,
                children: (0, l.jsxs)(u.B, {
                    gap: 16,
                    children: [
                        (0, l.jsx)(c.k, {
                            label: h.intl.string(h.t.sN3wrd),
                            inputRef: n,
                            name: h.intl.string(h.t.sN3wrd),
                            placeholder: h.intl.string(h.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: p.name,
                        }),
                        (0, l.jsxs)(u.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(d.E, { variant: "text-sm/semibold", children: h.intl.string(h.t.dFyV07) }),
                                (0, l.jsx)(a.EpsBankElement, {
                                    options: { value: o, style: f },
                                    onChange: (e) => s(e.value),
                                }),
                                (0, l.jsx)("div", {
                                    className: A.je,
                                    children: (0, l.jsx)("img", { src: m, alt: "EPS" }),
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
