n.d(t, { A: () => x });
var s = n(477900);
n(582128);
var r = n(152367),
    l = n(661531),
    a = n(866665),
    i = n(939249),
    c = n(834730),
    o = n(742589),
    u = n(465006),
    d = n(845079),
    m = n(809526),
    f = n(105292),
    h = n(631417);
function x(e) {
    let { title: t, actions: n, breadcrumb: x, project: g, onOpenProjectSettings: p, transparent: j = !1 } = e,
        v = f.intl.string(m.default.FzfmQ8),
        N = (0, u.A)(g ?? null);
    return (0, s.jsx)(o.A, {
        hideSearch: !0,
        transparent: j,
        toolbar: n,
        className: h.wx,
        "aria-label": t,
        children: (0, s.jsxs)("div", {
            className: h.QF,
            children: [
                null == g
                    ? (0, s.jsx)(r.D, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: l.A.colors.ICON_STRONG,
                          className: h.Kk,
                      })
                    : null,
                null != x
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(o.A.Title, { onClick: x.onClick, children: x.title }),
                              (0, s.jsx)(o.A.Caret, {}),
                          ],
                      })
                    : null,
                null != g && null != p
                    ? (0, s.jsx)(a.m, {
                          asContainer: !0,
                          text: v,
                          position: "bottom",
                          children: (0, s.jsx)(i.D, {
                              className: h.FF,
                              onClick: p,
                              "aria-label": v,
                              children: (0, s.jsx)(d.A, { project: g, size: "header" }),
                          }),
                      })
                    : null,
                (0, s.jsx)(o.A.Title, { className: h.Qw, wrapperClassName: h.DD, children: t }),
                null != N
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(o.A.Divider, { className: h.uN }),
                              (0, s.jsx)(c.E, {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  className: h.l0,
                                  children: N,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
