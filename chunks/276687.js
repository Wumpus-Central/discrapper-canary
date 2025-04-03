n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(852860),
    a = n(999382),
    l = n(524329),
    o = n(575258),
    c = n(388032);
let d = () => {
    let { guild: e } = (0, i.e7)([a.Z], () => a.Z.getProps()),
        { submitting: t, welcomeSettings: n } = (0, i.e7)([o.Z], () => o.Z.getSettingsProps());
    return null == e
        ? null
        : (0, r.jsx)(s.Z, {
              onSave: () => (0, l.Es)(e.id, n),
              onReset: l.Xb,
              submitting: t,
              onSaveText: c.NW.string(c.t['7NqTJi']),
              message: c.NW.string(c.t['Z0/WmZ'])
          });
};
