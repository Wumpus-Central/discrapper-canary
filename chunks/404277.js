s.d(a, { A: () => p });
var r = s(477900),
    n = s(582128),
    l = s(574211),
    t = s(31300),
    i = s(646270),
    o = s(687966),
    d = s(140735),
    c = s(773669),
    m = s(891843),
    u = s(468039);
let h = { [l.Z.DESKTOP]: t.k, [l.Z.MOBILE]: i.u, [l.Z.CONSOLE]: o.GameControllerIcon };
function p(e) {
    let { platforms: a } = e,
        s = n.useMemo(() => (0, m.RV)(a), [a]),
        l = n.useMemo(() => new Intl.ListFormat(c.default.locale).format(s.map(m.n7)), [s]);
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
            s.length > 0 && (0, r.jsx)(d.A, { children: l }),
        ],
    });
}
