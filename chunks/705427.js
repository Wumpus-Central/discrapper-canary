n.d(t, { A: () => f });
var s = n(477900);
n(582128);
var a = n(152367),
    l = n(661531),
    r = n(866665),
    i = n(939249),
    o = n(742589),
    c = n(497183),
    u = n(248675),
    d = n(105292),
    m = n(631417);
function f(e) {
    let { title: t, actions: n, breadcrumb: f, project: h, onOpenProjectSettings: x, transparent: g = !1 } = e,
        p = d.intl.string(u.default.FzfmQ8);
    return (0, s.jsx)(o.A, {
        hideSearch: !0,
        transparent: g,
        toolbar: n,
        className: m.wx,
        "aria-label": t,
        children: (0, s.jsxs)("div", {
            className: m.QF,
            children: [
                null == h
                    ? (0, s.jsx)(a.D, {
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
