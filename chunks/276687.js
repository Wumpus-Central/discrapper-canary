n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(796027),
    a = n(999382),
    s = n(524329),
    o = n(575258),
    c = n(388032);
let d = () => {
    let { guild: e } = (0, i.e7)([a.Z], () => a.Z.getProps()),
        { submitting: t, welcomeSettings: n } = (0, i.e7)([o.Z], () => o.Z.getSettingsProps());
    return null == e
        ? null
        : (0, r.jsx)(l.Z, {
              onSave: () => (0, s.Es)(e.id, n),
              onReset: s.Xb,
              submitting: t,
              onSaveText: c.intl.string(c.t["7NqTJn"]),
              message: c.intl.string(c.t["Z0/Wme"]),
          });
};
