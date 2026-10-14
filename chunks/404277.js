s.d(r, { A: () => x });
var t = s(477900),
    a = s(582128),
    n = s(574211),
    l = s(31300),
    i = s(646270),
    o = s(687966),
    d = s(924895),
    h = s(140735),
    c = s(773669),
    m = s(108015),
    u = s(468039);
let p = { [n.Z.DESKTOP]: l.k, [n.Z.MOBILE]: i.u, [n.Z.CONSOLE]: o.GameControllerIcon, [n.Z.ROBLOX]: d.H };
function x(e) {
    let { platforms: r } = e,
        s = a.useMemo(() => (0, m.RV)(r), [r]),
        n = a.useMemo(() => new Intl.ListFormat(c.default.locale).format(s.map(m.n7)), [s]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("span", {
                className: u.B,
                "aria-hidden": !0,
                children: s.map((e) => {
                    let r = p[e];
                    return (0, t.jsx)(
                        "span",
                        { className: u.t, children: (0, t.jsx)(r, { size: "xs", color: "currentColor" }) },
                        e,
                    );
                }),
            }),
            s.length > 0 && (0, t.jsx)(h.A, { children: n }),
        ],
    });
}
