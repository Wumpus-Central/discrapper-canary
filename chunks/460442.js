var n = e(477900);
e(582128);
var r = e(503698),
    i = e.n(r),
    o = e(646514),
    c = e(947641),
    l = e(834730),
    a = e(559758),
    u = e(492518),
    d = e(792996),
    h = e(279646);
function x(t) {
    let { icon: s, style: e } = t;
    return (0, n.jsx)("div", { className: i()(h.Lw, e), children: s });
}
e.d(
    s,
    {},
    {
        Yb: function (t) {
            let { count: s } = t;
            return (0, n.jsx)(x, {
                style: h.RF,
                icon: (0, n.jsx)(l.E, {
                    variant: "body-sm/medium",
                    color: "text-overlay-light",
                    children: d.intl.format(d.t.F6iMs4, { count: s }),
                }),
            });
        },
        gS: function (t) {
            let { isHoveringOrFocusing: s } = t;
            return (0, n.jsx)(x, {
                style: i()(h.AI, s && h.mW),
                icon: (0, n.jsx)(c.CheckmarkLargeBoldIcon, {
                    size: "custom",
                    color: o.A.colors.WHITE,
                    width: 38,
                    height: 38,
                    className: i()(h.x6, h.AI),
                    "aria-label": d.intl.string(d.t.L5Pt9L),
                }),
            });
        },
        oU: function (t) {
            let { isHoveringOrFocusing: s, loading: e } = t;
            return (0, n.jsx)(x, {
                style: i()(h.U4, { [h.HI]: s || e }),
                icon: e
                    ? (0, n.jsx)(u.k, {})
                    : (0, n.jsx)(a.HeartOutlineIcon, { size: "lg", color: o.A.unsafe_rawColors.WHITE_500 }),
            });
        },
    },
);
