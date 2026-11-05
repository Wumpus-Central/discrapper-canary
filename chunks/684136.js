var t,
    r = n(477900);
n(582128);
var i = n(503698),
    o = n.n(i),
    a = n(607399),
    s = n(939249),
    u = n(285796),
    d = n(789645),
    c = n(834730),
    T = n(792996),
    E = n(563744),
    I = (((t = I || {}).DEFAULT = ""), (t.BOLD = "Bold"), (t.SOLID = "Solid"), t);
function N(e) {
    let { closeAction: l, variant: n = "", keybind: t, className: i } = e;
    return (0, r.jsxs)("div", {
        className: o()(E.kL, i),
        children: [
            (0, r.jsx)(s.D, {
                className: o()(E.b, { [E.EH]: "Bold" === n, [E.O3]: "Solid" === n }),
                onClick: l,
                "aria-label": T.intl.string(T.t.cpT0Cq),
                children:
                    "Solid" === n
                        ? (0, r.jsx)(u.CircleXIcon, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, r.jsx)(d.XSmallIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            a.Fr
                ? null
                : (0, r.jsx)(c.E, { variant: "body-xs/semibold", className: E.P, "aria-hidden": !0, children: t }),
        ],
    });
}
((N.Variants = I), n.d(l, {}, { A: N }));
