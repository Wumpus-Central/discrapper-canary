n.d(t, { A: () => p });
var r = n(627968),
    l = n(158954),
    i = n(732955),
    s = n(397927),
    o = n(49999),
    a = n(333354),
    u = n(985018),
    d = n(279648),
    c = n(314986);
function p(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: d.kL,
        children: [
            (0, r.jsx)("img", { alt: "", className: d.Sl, src: c }),
            (0, r.jsx)(l.EYj, {
                color: "always-white",
                variant: "text-md/semibold",
                children: u.intl.string(a.default.diMhWc),
            }),
            (0, r.jsx)(l.EYj, {
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
