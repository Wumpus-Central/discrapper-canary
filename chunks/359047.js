i.d(n, { A: () => d });
var l = i(627968);
i(64700);
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
                          i.e("53176"),
                          i.e("78092"),
                          i.e("45563"),
                          i.e("16034"),
                          i.e("42033"),
                          i.e("79334"),
                          i.e("61726"),
                          i.e("19204"),
                          i.e("27565"),
                          i.e("88950"),
                          i.e("40548"),
                          i.e("461"),
                          i.e("8574"),
                          i.e("87073"),
                          i.e("26903"),
                          i.e("53591"),
                          i.e("66000"),
                          i.e("47626"),
                          i.e("61156"),
                          i.e("16767"),
                          i.e("59957"),
                          i.e("6841"),
                          i.e("28136"),
                          i.e("16084"),
                          i.e("10262"),
                          i.e("71329"),
                          i.e("70644"),
                          i.e("1922"),
                          i.e("49347"),
                          i.e("64287"),
                          i.e("53934"),
                          i.e("68248"),
                          i.e("70089"),
                          i.e("70160"),
                          i.e("69647"),
                          i.e("54450"),
                          i.e("60423"),
                      ]).then(i.bind(i, 729398));
                      return (i) => (0, l.jsx)(n, { ...i, guildId: e });
                  }, u);
              },
          })
        : null;
}
