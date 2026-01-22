l.d(t, { A: () => f });
var r = l(627968),
    n = l(158954),
    i = l(732955),
    s = l(397927),
    o = l(49999),
    a = l(333354),
    u = l(985018),
    d = l(279648),
    c = l(314986);
function f(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: d.kL,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: d.Sl,
                src: c,
            }),
            (0, r.jsx)(n.EYj, {
                color: "always-white",
                variant: "text-md/semibold",
                children: u.intl.string(a.default.diMhWc),
            }),
            (0, r.jsx)(n.EYj, {
                color: "always-white",
                variant: "text-sm/medium",
                children: u.intl.string(a.default.pycxTr),
            }),
            (0, r.jsx)("div", {
                className: d.VN,
                children: (0, r.jsx)(i.K0, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": u.intl.string(u.t.cpT0Cq),
                    onClick: () => {
                        t(o.i.USER_DISMISS);
                    },
                    icon: s.PGe,
                }),
            }),
        ],
    });
}
