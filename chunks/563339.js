r.d(t, { A: () => v });
var l = r(477900);
r(582128);
var n = r(503698),
    a = r.n(n),
    i = r(866665),
    s = r(939249),
    o = r(548411),
    c = r(152367),
    u = r(646514),
    d = r(237528),
    f = r(834730),
    m = r(742589),
    p = r(855986),
    h = r(71393),
    g = r(191850),
    x = r(792996),
    b = r(845079),
    j = r(631417);
function v(e) {
    var t;
    let r,
        n,
        {
            title: v,
            actions: C,
            breadcrumb: w,
            project: y,
            onOpenProjectSettings: N,
            transparent: k = !1,
            onBack: R,
            hideShareTarget: A = !1,
            preview: S = !1,
            draft: T = !1,
        } = e,
        I = x.intl.string(g.default.FzfmQ8),
        L = x.intl.string(g.default["/Tl7an"]),
        E =
            ((t = A ? null : (y ?? null)),
            ((r = t?.guild_id),
            (n = (0, p.bG)([h.A], () => (null != r ? (h.A.getGuild(r) ?? null) : null), [r])),
            null == t
                ? null
                : "user" === t.install_scope
                  ? { kind: "user", label: x.intl.string(g.default.KxFFKT) }
                  : null != n
                    ? { kind: "guild", label: n.name, guild: n }
                    : null)?.label ?? null);
    return (0, l.jsx)(m.A, {
        hideSearch: !0,
        transparent: k,
        toolbar: C,
        className: a()(j.wx, { [j.VH]: S }),
        "aria-label": v,
        children: (0, l.jsxs)("div", {
            className: j.QF,
            children: [
                null != R
                    ? (0, l.jsx)(i.m, {
                          asContainer: !0,
                          text: L,
                          position: "bottom",
                          children: (0, l.jsx)(s.D, {
                              className: j.Gv,
                              onClick: R,
                              "aria-label": L,
                              children: (0, l.jsx)(o.ArrowLargeLeftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      })
                    : null,
                null == y
                    ? (0, l.jsx)(c.MagicWandIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: u.A.colors.ICON_STRONG,
                          className: j.Kk,
                      })
                    : null,
                null != w
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(m.A.Title, { onClick: w.onClick, children: w.title }),
                              (0, l.jsx)(m.A.Caret, {}),
                          ],
                      })
                    : null,
                null != y && null != N
                    ? (0, l.jsx)(i.m, {
                          asContainer: !0,
                          text: I,
                          position: "bottom",
                          children: (0, l.jsx)(s.D, {
                              className: j.FF,
                              onClick: N,
                              "aria-label": I,
                              children: (0, l.jsx)(b.A, { project: y, size: "header" }),
                          }),
                      })
                    : null,
                (0, l.jsx)(m.A.Title, { className: j.Qw, wrapperClassName: j.DD, children: v }),
                T
                    ? (0, l.jsx)("span", {
                          className: j.kK,
                          children: (0, l.jsx)(d.v, {
                              text: x.intl.string(g.default["2+GiMw"]),
                              variant: "orangeLight",
                          }),
                      })
                    : null,
                null != E
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(m.A.Divider, { className: j.uN }),
                              (0, l.jsx)(f.E, {
                                  tag: "span",
                                  variant: "body-sm/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  className: j.l0,
                                  children: E,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
