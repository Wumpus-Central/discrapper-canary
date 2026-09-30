s.d(a, { A: () => p });
var r = s(477900),
    n = s(582128),
    t = s(574211),
    l = s(31300),
    i = s(646270),
    d = s(687966),
    o = s(140735),
    c = s(773669),
    m = s(108015),
    u = s(468039);
let h = { [t.Z.DESKTOP]: l.k, [t.Z.MOBILE]: i.u, [t.Z.CONSOLE]: d.GameControllerIcon };
function p(e) {
    let { platforms: a } = e,
        s = n.useMemo(() => (0, m.RV)(a), [a]),
        t = n.useMemo(() => new Intl.ListFormat(c.default.locale).format(s.map(m.n7)), [s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("span", {
                className: u.B,
                "aria-hidden": !0,
                children: s.map((e) => {
                    let a = h[e];
                    return (0, r.jsx)(
                        "span",
                        { className: u.t, children: (0, r.jsx)(a, { size: "xs", color: "currentColor" }) },
                        e,
                    );
                }),
            }),
            s.length > 0 && (0, r.jsx)(o.A, { children: t }),
        ],
    });
}
