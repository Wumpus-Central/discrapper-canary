l.d(e, { A: () => u });
var a,
    i = l(627968);
l(64700);
var s = l(503698),
    n = l.n(s),
    A = l(607399),
    r = l(939249),
    _ = l(285796),
    I = l(789645),
    E = l(985018),
    h = l(589753),
    d = (((a = d || {}).DEFAULT = ""), (a.BOLD = "Bold"), (a.SOLID = "Solid"), a);
function u(t) {
    let { closeAction: e, variant: l = "", keybind: a, className: s } = t;
    return (0, i.jsxs)("div", {
        className: n()(h.kL, s),
        children: [
            (0, i.jsx)(r.D, {
                className: n()(h.b, { [h.EH]: "Bold" === l, [h.O3]: "Solid" === l }),
                onClick: e,
                "aria-label": E.intl.string(E.t.cpT0Cq),
                children:
                    "Solid" === l
                        ? (0, i.jsx)(_.a, { size: "md", color: "currentColor", "aria-hidden": !0 })
                        : (0, i.jsx)(I.P, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            }),
            A.Fr ? null : (0, i.jsx)("div", { className: h.P, "aria-hidden": !0, children: a }),
        ],
    });
}
u.Variants = d;
