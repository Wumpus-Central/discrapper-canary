n.d(t, { Z: () => f }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(502762),
    l = n(388032),
    c = n(982629);
let u = !1;
function d() {
    let [e, t] = i.useState(!1),
        n = i.useCallback(() => {
            t(!0);
        }, []),
        d = i.useCallback(() => {
            t(!0);
        }, []);
    return (i.useEffect(
        () => () => {
            e && (u = !0);
        },
        [e],
    ),
    e)
        ? (0, r.jsx)(s.Z.Overlay, {
              className: c.container,
              children: (0, r.jsx)("div", {
                  className: c.content,
                  children: (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      className: c.description,
                      children: l.intl.string(l.t.X0TrNT),
                  }),
              }),
          })
        : (0, r.jsx)(s.Z.Overlay, {
              className: c.container,
              children: (0, r.jsxs)("div", {
                  className: c.content,
                  children: [
                      (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          className: c.description,
                          children: l.intl.string(l.t.Qian09),
                      }),
                      (0, r.jsxs)("div", {
                          className: c.buttons,
                          children: [
                              (0, r.jsx)(a.zx, {
                                  size: a.zx.Sizes.SMALL,
                                  look: a.zx.Looks.FILLED,
                                  color: a.zx.Colors.PRIMARY,
                                  onClick: n,
                                  className: c.button,
                                  children: l.intl.string(l.t.p89ACg),
                              }),
                              (0, r.jsx)(a.zx, {
                                  size: a.zx.Sizes.SMALL,
                                  look: a.zx.Looks.FILLED,
                                  color: a.zx.Colors.PRIMARY,
                                  onClick: d,
                                  className: c.button,
                                  children: l.intl.string(l.t.gm1Ven),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
function f() {
    return u ? null : (0, r.jsx)(d, {});
}
