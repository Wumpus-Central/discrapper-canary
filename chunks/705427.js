a.d(t, { A: () => f });
var s = a(477900);
a(582128);
var n = a(152367),
    l = a(661531),
    r = a(866665),
    i = a(939249),
    o = a(742589),
    c = a(497183),
    u = a(248675),
    d = a(105292),
    m = a(631417);
function f(e) {
    let { title: t, actions: a, breadcrumb: f, project: h, onOpenProjectSettings: x, transparent: g = !1 } = e,
        p = d.intl.string(u.default.FzfmQ8);
    return (0, s.jsx)(o.A, {
        hideSearch: !0,
        transparent: g,
        toolbar: a,
        className: m.wx,
        "aria-label": t,
        children: (0, s.jsxs)("div", {
            className: m.QF,
            children: [
                null == h
                    ? (0, s.jsx)(n.D, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: l.A.colors.ICON_STRONG,
                          className: m.Kk,
                      })
                    : null,
                null != f
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(o.A.Title, { onClick: f.onClick, children: f.title }),
                              (0, s.jsx)(o.A.Caret, {}),
                          ],
                      })
                    : null,
                null != h && null != x
                    ? (0, s.jsx)(r.m, {
                          asContainer: !0,
                          text: p,
                          position: "bottom",
                          children: (0, s.jsx)(i.D, {
                              className: m.FF,
                              onClick: x,
                              "aria-label": p,
                              children: (0, s.jsx)(c.A, { project: h, size: "header" }),
                          }),
                      })
                    : null,
                (0, s.jsx)(o.A.Title, { className: m.Qw, wrapperClassName: m.DD, children: t }),
            ],
        }),
    });
}
