n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(852860),
    s = n(999382),
    a = n(524329),
    o = n(575258),
    c = n(388032);
let u = () => {
    let { guild: e } = (0, i.e7)([s.Z], () => s.Z.getProps()),
        { submitting: t, welcomeSettings: n } = (0, i.e7)([o.Z], () => o.Z.getSettingsProps());
    return null == e
        ? null
        : (0, r.jsx)(l.Z, {
              onSave: () => (0, a.Es)(e.id, n),
              onReset: a.Xb,
              submitting: t,
              onSaveText: c.intl.string(c.t['7NqTJi']),
              message: c.intl.string(c.t['Z0/WmZ'])
          });
};
