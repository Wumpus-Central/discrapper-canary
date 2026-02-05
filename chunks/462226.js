i.d(t, { A: () => d });
var n = i(627968);
i(64700);
var a = i(397927),
    l = i(626584),
    r = i(833349),
    s = i(652215),
    o = i(985018);
function d(e) {
    let { activity: t, user: i, variant: d = "secondary", onAction: c, ...u } = e;
    return (0, r.A)(t, s.jUm.INSTANCE)
        ? (0, n.jsx)(a.Button, {
              text: o.intl.string(o.t.vwl1PK),
              variant: d,
              size: "sm",
              onClick: () => {
                  c?.(), new l.A("UserActivityActions").log("notify", i.id, t);
              },
              fullWidth: !0,
              ...u,
          })
        : null;
}
