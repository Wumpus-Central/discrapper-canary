n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(443603),
    c = n(388032),
    u = n(91252);
function d(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: u.separator }),
            (0, r.jsx)("div", {
                className: u.container,
                children: (0, r.jsx)("div", {
                    className: u.buttonContainer,
                    children: (0, r.jsx)(l.Z, {
                        className: u.button,
                        childClassName: o()(u.buttonChild, {
                            [u.disabled]: n,
                            [u.activeButtonChild]: !n,
                        }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": c.intl.string(c.t.oeb1vg),
                        children: (0, r.jsx)(s.Uuj, {
                            size: "xs",
                            color: "currentColor",
                            className: u.sendIcon,
                        }),
                    }),
                }),
            }),
        ],
    });
}
let f = i.memo(d);
