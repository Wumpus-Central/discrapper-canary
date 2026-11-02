n.d(t, { A: () => g });
var r = n(477900);
n(582128);
var l = n(866665),
    a = n(939249),
    i = n(548411),
    s = n(152367),
    o = n(661531),
    c = n(834730),
    u = n(742589),
    d = n(465006),
    f = n(845079),
    m = n(809526),
    p = n(105292),
    h = n(631417);
function g(e) {
    let {
            title: t,
            actions: n,
            breadcrumb: g,
            project: x,
            onOpenProjectSettings: j,
            transparent: b = !1,
            onBack: v,
            hideShareTarget: y = !1,
        } = e,
        w = p.intl.string(m.default.FzfmQ8),
        C = p.intl.string(m.default["/Tl7an"]),
        N = (0, d.Ay)(y ? null : (x ?? null));
    return (0, r.jsx)(u.A, {
        hideSearch: !0,
        transparent: b,
        toolbar: n,
        className: h.wx,
        "aria-label": t,
        children: (0, r.jsxs)("div", {
            className: h.QF,
            children: [
                null != v
                    ? (0, r.jsx)(l.m, {
                          asContainer: !0,
                          text: C,
                          position: "bottom",
                          children: (0, r.jsx)(a.D, {
                              className: h.Gv,
                              onClick: v,
                              "aria-label": C,
                              children: (0, r.jsx)(i.Z, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      })
                    : null,
                null == x
                    ? (0, r.jsx)(s.D, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: o.A.colors.ICON_STRONG,
                          className: h.Kk,
                      })
                    : null,
                null != g
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.A.Title, { onClick: g.onClick, children: g.title }),
                              (0, r.jsx)(u.A.Caret, {}),
                          ],
                      })
                    : null,
                null != x && null != j
                    ? (0, r.jsx)(l.m, {
                          asContainer: !0,
                          text: w,
                          position: "bottom",
                          children: (0, r.jsx)(a.D, {
                              className: h.FF,
                              onClick: j,
                              "aria-label": w,
                              children: (0, r.jsx)(f.A, { project: x, size: "header" }),
                          }),
                      })
                    : null,
                (0, r.jsx)(u.A.Title, { className: h.Qw, wrapperClassName: h.DD, children: t }),
                null != N
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.A.Divider, { className: h.uN }),
                              (0, r.jsx)(c.E, {
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
