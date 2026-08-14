i.d(n, { A: () => d });
var l = i(477900);
i(582128);
var t = i(192308),
    o = i(477782),
    a = i(588190),
    r = i(770666),
    c = i(823508),
    s = i(375708);
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        d = (0, r.A)(e),
        u = (0, c.A)();
    return d
        ? (0, l.jsx)(o.Dr, {
              id: "create-event",
              label: s.intl.string(s.t["60lJ0C"]),
              icon: n ? a.U : void 0,
              leadingAccessory: n ? { type: "icon", icon: a.U } : void 0,
              action: function () {
                  (0, t.openModalLazy)(async () => {
                      let { default: n } = await Promise.all([
                          i.e("925996"),
                          i.e("354948"),
                          i.e("385251"),
                          i.e("28634"),
                          i.e("942725"),
                          i.e("166509"),
                          i.e("103142"),
                          i.e("476684"),
                          i.e("773193"),
                          i.e("315214"),
                          i.e("88972"),
                          i.e("695367"),
                          i.e("121149"),
                          i.e("717595"),
                          i.e("322552"),
                          i.e("147626"),
                          i.e("159957"),
                          i.e("728136"),
                          i.e("216084"),
                          i.e("409391"),
                          i.e("810262"),
                          i.e("756684"),
                          i.e("901922"),
                          i.e("970644"),
                          i.e("449347"),
                          i.e("464287"),
                          i.e("853934"),
                          i.e("468248"),
                          i.e("670089"),
                          i.e("870160"),
                          i.e("469647"),
                          i.e("454450"),
                          i.e("560423"),
                      ]).then(i.bind(i, 729398));
                      return (i) => (0, l.jsx)(n, { ...i, guildId: e });
                  }, u);
              },
          })
        : null;
}
