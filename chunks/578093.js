n.d(t, {
    j: () => y,
}),
    n(896048);
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(311907),
    s = n(435371),
    o = n(397927),
    u = n(996439),
    c = n(914853),
    d = n(406595),
    h = n(74395),
    p = n(652215),
    f = n(895867),
    g = n(985018),
    m = n(168389);

function y(e) {
    let {
            tab: t,
            targetId: n,
            widgetType: r = p.uss.FRIENDS,
            showTooltip: y = !0,
            shouldStopPropagation: A = !0,
            className: v,
        } = e,
        [b] = (0, a.bG)([d.A], () => d.A.isFavorite(t, n), [t, n], u.D),
        E = (0, h.t)({
            tab: t,
            targetId: n,
            shouldStopPropagation: A,
            widgetType: r,
        }),
        O = b ? o.Gg5 : o.yA2,
        x = (0, o.rdh)(o.LU0.colors.ICON_FEEDBACK_WARNING),
        _ = (0, o.rdh)(o.LU0.colors.ICON_DEFAULT),
        S =
            t === c.x.FRIENDS
                ? b
                    ? g.intl.string(f.default.Xr8XHk)
                    : g.intl.string(f.default.w1MU8Y)
                : b
                  ? g.intl.string(f.default.dvUElD)
                  : g.intl.string(f.default.iK1QsY);
    return y
        ? (0, i.jsx)(s.m_, {
              text: S,
              "aria-label": S,
              children: (0, i.jsx)(o.DUT, {
                  className: l()(m.$r, v),
                  "aria-label": S,
                  onClick: E,
                  role: "button",
                  children: (0, i.jsx)(O, {
                      size: "sm",
                      color: b ? x.hex() : _.hex(),
                  }),
              }),
          })
        : (0, i.jsx)(o.DUT, {
              className: l()(m.$r, v),
              "aria-label": S,
              onClick: E,
              role: "button",
              children: (0, i.jsx)(O, {
                  size: "sm",
                  color: b ? x.hex() : _.hex(),
              }),
          });
}
