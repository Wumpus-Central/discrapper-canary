n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(821609),
    a = n(626584),
    s = n(833349),
    r = n(652215),
    o = n(985018);
function c(e) {
    let { activity: t, user: n, variant: c = "secondary", onAction: d, ...u } = e;
    return (0, s.A)(t, r.jUm.INSTANCE)
        ? (0, i.jsx)(l.$, {
              text: o.intl.string(o.t.vwl1PK),
              variant: c,
              size: "sm",
              onClick: () => {
                  d?.(), new a.A("UserActivityActions").log("notify", n.id, t);
              },
              fullWidth: !0,
              ...u,
          })
        : null;
}
