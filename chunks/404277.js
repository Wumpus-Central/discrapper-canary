a.d(r, { A: () => x });
var s = a(477900),
    t = a(582128),
    n = a(574211),
    l = a(31300),
    i = a(646270),
    o = a(687966),
    d = a(924895),
    h = a(140735),
    c = a(773669),
    m = a(108015),
    u = a(468039);
let p = { [n.Z.DESKTOP]: l.k, [n.Z.MOBILE]: i.u, [n.Z.CONSOLE]: o.GameControllerIcon, [n.Z.ROBLOX]: d.H };
function x(e) {
    let { platforms: r } = e,
        a = t.useMemo(() => (0, m.RV)(r), [r]),
        n = t.useMemo(() => new Intl.ListFormat(c.default.locale).format(a.map(m.n7)), [a]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("span", {
                className: u.B,
                "aria-hidden": !0,
                children: a.map((e) => {
                    let r = p[e];
                    return (0, s.jsx)(
                        "span",
                        { className: u.t, children: (0, s.jsx)(r, { size: "xs", color: "currentColor" }) },
                        e,
                    );
                }),
            }),
            a.length > 0 && (0, s.jsx)(h.A, { children: n }),
        ],
    });
}
