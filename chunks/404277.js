r.d(a, { A: () => p });
var n = r(477900),
    s = r(582128),
    t = r(574211),
    l = r(31300),
    o = r(646270),
    i = r(687966),
    c = r(140735),
    d = r(773669),
    m = r(108015),
    h = r(468039);
let u = { [t.Z.DESKTOP]: l.k, [t.Z.MOBILE]: o.u, [t.Z.CONSOLE]: i.GameControllerIcon };
function p(e) {
    let { platforms: a } = e,
        r = s.useMemo(() => (0, m.RV)(a), [a]),
        t = s.useMemo(() => new Intl.ListFormat(d.default.locale).format(r.map(m.n7)), [r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("span", {
                className: h.B,
                "aria-hidden": !0,
                children: r.map((e) => {
                    let a = u[e];
                    return (0, n.jsx)(
                        "span",
                        { className: h.t, children: (0, n.jsx)(a, { size: "xs", color: "currentColor" }) },
                        e,
                    );
                }),
            }),
            r.length > 0 && (0, n.jsx)(c.A, { children: t }),
        ],
    });
}
