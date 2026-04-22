n.d(t, { A: () => _ });
var r = n(627968),
    i = n(834730),
    l = n(408278),
    s = n(789645),
    a = n(49999),
    o = n(853513),
    d = n(985018),
    u = n(818905),
    c = n(314986);
function _(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)("div", {
        className: u.kL,
        children: [
            (0, r.jsx)("img", { alt: "", className: u.Sl, src: c }),
            (0, r.jsx)(i.E, {
                color: "always-white",
                variant: "text-md/semibold",
                children: d.intl.string(o.default.diMhWc),
            }),
            (0, r.jsx)(i.E, {
                color: "always-white",
                variant: "text-sm/medium",
                children: d.intl.string(o.default.pycxTr),
            }),
            (0, r.jsx)("div", {
                className: u.VN,
                children: (0, r.jsx)(l.K, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": d.intl.string(d.t.cpT0Cq),
                    onClick: () => {
                        t(a.i.USER_DISMISS);
                    },
                    icon: s.P,
                }),
            }),
        ],
    });
}
