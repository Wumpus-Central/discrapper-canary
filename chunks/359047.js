t.d(n, { A: () => c });
var l = t(627968);
t(64700);
var i = t(192308),
    a = t(477782),
    r = t(588190),
    s = t(770666),
    o = t(823508),
    d = t(985018);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        c = (0, s.A)(e),
        u = (0, o.A)();
    return c
        ? (0, l.jsx)(a.Dr, {
              id: "create-event",
              label: d.intl.string(d.t["60lJ0C"]),
              icon: n ? r.U : void 0,
              leadingAccessory: n ? { type: "icon", icon: r.U } : void 0,
              action: () => {
                  (0, i.openModalLazy)(async () => {
                      let { default: n } = await Promise.all([
                          t.e("28136"),
                          t.e("68883"),
                          t.e("68587"),
                          t.e("22021"),
                          t.e("60423"),
                          t.e("80087"),
                      ]).then(t.bind(t, 729398));
                      return (t) => (0, l.jsx)(n, { ...t, guildId: e });
                  }, u);
              },
          })
        : null;
}
