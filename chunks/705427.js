s.d(t, { A: () => x });
var n = s(477900);
s(582128);
var l = s(152367),
    r = s(661531),
    a = s(866665),
    i = s(939249),
    c = s(834730),
    o = s(742589),
    u = s(465006),
    d = s(845079),
    m = s(87501),
    f = s(105292),
    h = s(631417);
function x(e) {
    let { title: t, actions: s, breadcrumb: x, project: g, onOpenProjectSettings: p, transparent: j = !1 } = e,
        v = f.intl.string(m.default.FzfmQ8),
        N = (0, u.A)(g ?? null);
    return (0, n.jsx)(o.A, {
        hideSearch: !0,
        transparent: j,
        toolbar: s,
        className: h.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: h.QF,
            children: [
                null == g
                    ? (0, n.jsx)(l.D, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: r.A.colors.ICON_STRONG,
                          className: h.Kk,
                      })
                    : null,
                null != x
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(o.A.Title, { onClick: x.onClick, children: x.title }),
                              (0, n.jsx)(o.A.Caret, {}),
                          ],
                      })
                    : null,
                null != g && null != p
                    ? (0, n.jsx)(a.m, {
                          asContainer: !0,
                          text: v,
                          position: "bottom",
                          children: (0, n.jsx)(i.D, {
                              className: h.FF,
                              onClick: p,
                              "aria-label": v,
                              children: (0, n.jsx)(d.A, { project: g, size: "header" }),
                          }),
                      })
                    : null,
                (0, n.jsx)(o.A.Title, { className: h.Qw, wrapperClassName: h.DD, children: t }),
                null != N
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(o.A.Divider, { className: h.uN }),
                              (0, n.jsx)(c.E, {
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
