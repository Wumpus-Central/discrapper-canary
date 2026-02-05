i.d(t, { A: () => d });
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    r = i(882997),
    s = i(962173),
    o = i(985018);
function d(e) {
    let { platform: t, variant: i = "secondary", size: d = "sm", onAction: c, icon: u, ...m } = e;
    return (0, a.bG)([s.A], () => s.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, n.jsx)(l.Button, {
              onClick: () => {
                  c?.(), (0, r.A)({ platformType: t.type, location: "Activity Action" });
              },
              variant: i,
              size: d,
              icon: u,
              text: o.intl.format(o.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...m,
          });
}
