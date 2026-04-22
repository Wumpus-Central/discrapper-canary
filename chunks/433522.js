n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(36525),
    r = n(555337),
    a = n(225315),
    o = n(861410),
    d = n(985018);
let c = () => {
    let { guild: e } = (0, l.bG)([r.A], () => r.A.getProps()),
        { submitting: t, welcomeSettings: n } = (0, l.bG)([o.A], () => o.A.getSettingsProps());
    return null == e
        ? null
        : (0, i.jsx)(s.A, {
              onSave: () => (0, a.i4)(e.id, n),
              onReset: a.oZ,
              submitting: t,
              onSaveText: d.intl.string(d.t["7NqTJn"]),
              message: d.intl.string(d.t["Z0/Wme"]),
          });
};
