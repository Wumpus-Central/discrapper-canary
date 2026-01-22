n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(864145),
    a = n(14400),
    s = n(420650),
    o = n(985018);
function l() {
    let { volume: e, onVolumeChange: t } = (0, a.A)();
    return (0, i.X9)({ location: "UserSettingsSoundmojiVolume" })
        ? (0, r.jsx)(s.A, {
              label: o.intl.string(o.t["2JbvKw"]),
              description: o.intl.string(o.t.INenzY),
              volume: e,
              onVolumeChange: t,
          })
        : null;
}
