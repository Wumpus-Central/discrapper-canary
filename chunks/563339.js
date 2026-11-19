r.d(t, { A: () => x });
var l = r(477900);
r(582128);
var n = r(152367),
    a = r(646514),
    i = r(866665),
    s = r(939249),
    o = r(834730),
    c = r(22231),
    u = r(742589),
    d = r(855986),
    f = r(71393),
    m = r(191850),
    p = r(792996),
    h = r(845079),
    g = r(631417);
function x(e) {
    var t;
    let r,
        x,
        {
            title: b,
            actions: j,
            breadcrumb: v,
            project: y,
            onOpenProjectSettings: C,
            transparent: w = !1,
            hideShareTarget: N = !1,
            draft: k = !1,
        } = e,
        R = p.intl.string(m.default.FzfmQ8),
        S =
            ((t = N ? null : (y ?? null)),
            ((r = t?.guild_id),
            (x = (0, d.bG)([f.A], () => (null != r ? (f.A.getGuild(r) ?? null) : null), [r])),
            null == t
                ? null
                : "user" === t.install_scope
                  ? { kind: "user", label: p.intl.string(m.default.KxFFKT) }
                  : null != x
                    ? { kind: "guild", label: x.name, guild: x }
                    : null)?.label ?? null);
    return (0, l.jsx)(u.A, {
        hideSearch: !0,
        transparent: w,
        toolbar: j,
        className: g.wx,
        "aria-label": b,
        children: (0, l.jsxs)("div", {
            className: g.QF,
            children: [
                null == y
                    ? (0, l.jsx)(n.MagicWandIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: a.A.colors.ICON_STRONG,
                          className: g.Kk,
                      })
                    : null,
                null != v
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.A.Title, { onClick: v.onClick, children: v.title }),
                              (0, l.jsx)(u.A.Caret, {}),
                          ],
                      })
                    : null,
                null != y && null != C
                    ? (0, l.jsx)(i.m, {
                          asContainer: !0,
                          text: R,
                          position: "bottom",
                          children: (0, l.jsx)(s.D, {
                              className: g.FF,
                              onClick: C,
                              "aria-label": R,
                              children: (0, l.jsx)(h.A, { project: y, size: "title" }),
                          }),
                      })
                    : null,
                (0, l.jsx)(u.A.Title, { className: g.Qw, wrapperClassName: g.DD, children: b }),
                k
                    ? (0, l.jsxs)(o.E, {
                          tag: "span",
                          variant: "body-xs/medium",
                          color: "text-subtle",
                          className: g.qY,
                          children: [
                              (0, l.jsx)(c.PencilIcon, {
                                  size: "xxs",
                                  color: a.A.colors.ICON_SUBTLE,
                                  "aria-hidden": !0,
                              }),
                              p.intl.string(m.default["2+GiMw"]),
                          ],
                      })
                    : null,
                null != S
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.A.Divider, { className: g.uN }),
                              (0, l.jsx)(o.E, {
                                  tag: "span",
                                  variant: "body-sm/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  className: g.l0,
                                  children: S,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
