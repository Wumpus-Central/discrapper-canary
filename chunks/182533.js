"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(462887),
    o = n(602853),
    l = n(827734),
    u = n(331322),
    c = n(292666),
    d = n(834730),
    _ = n(736653),
    f = n(818348),
    p = n(985018),
    h = n(198650),
    E = n(369498),
    m = n(270498),
    g = n(261418),
    A = n(158802);
let I = function (e) {
    let t = (0, _.Ay)(),
        n = i.useRef(null),
        [I, T] = i.useState({}),
        S = (0, o.r)(l.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (i.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                r = window.getComputedStyle(e, "::placeholder"),
                i = t.getPropertyValue("font-family"),
                s = t.getPropertyValue("font-weight");
            T({
                base: {
                    fontFamily: i,
                    fontWeight: s,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: S,
                    padding: "12px",
                    "::placeholder": { color: r.getPropertyValue("color") },
                    borderRadius: l.A.radii.xs,
                },
            });
        }, [n, S]),
        e.type)
    ) {
        case f.he.PRZELEWY24: {
            let i = (0, a.M)(t) ? g : A,
                { onNameChange: o, onEmailChange: l, onP24BankChange: _, p24BankValue: f, billingAddressInfo: E } = e;
            return (0, r.jsx)("div", {
                className: h.rf,
                children: (0, r.jsxs)(u.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(c.k, {
                            label: p.intl.string(p.t["w/qqKK"]),
                            inputRef: n,
                            name: p.intl.string(p.t["w/qqKK"]),
                            placeholder: p.intl.string(p.t["w/qqKK"]),
                            onChange: (e) => l(e),
                            value: E.email,
                        }),
                        (0, r.jsx)(c.k, {
                            label: p.intl.string(p.t["yf7ms+"]),
                            name: p.intl.string(p.t["yf7ms+"]),
                            placeholder: p.intl.string(p.t["yf7ms+"]),
                            onChange: (e) => o(e),
                            value: E.name,
                        }),
                        (0, r.jsxs)(u.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(d.E, { variant: "text-sm/semibold", children: p.intl.string(p.t.De3b8t) }),
                                (0, r.jsx)(s.P24BankElement, {
                                    options: { value: f, style: I },
                                    onChange: (e) => _(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: h.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case f.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: o, epsBankValue: l, billingAddressInfo: _ } = e,
                f = (0, a.M)(t) ? E : m;
            return (0, r.jsx)("div", {
                className: h.rf,
                children: (0, r.jsxs)(u.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(c.k, {
                            label: p.intl.string(p.t.sN3wrd),
                            inputRef: n,
                            name: p.intl.string(p.t.sN3wrd),
                            placeholder: p.intl.string(p.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: _.name,
                        }),
                        (0, r.jsxs)(u.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(d.E, { variant: "text-sm/semibold", children: p.intl.string(p.t.dFyV07) }),
                                (0, r.jsx)(s.EpsBankElement, {
                                    options: { value: l, style: I },
                                    onChange: (e) => o(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: h.je,
                                    children: (0, r.jsx)("img", { src: f, alt: "EPS" }),
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
