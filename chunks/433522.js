"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(36525),
    r = n(555337),
    a = n(447696),
    o = n(861410),
    d = n(985018);
let c = () => {
    let { guild: e } = (0, s.bG)([r.A], () => r.A.getProps()),
        { submitting: t, welcomeSettings: n } = (0, s.bG)([o.A], () => o.A.getSettingsProps());
    return null == e
        ? null
        : (0, i.jsx)(l.A, {
              onSave: () => (0, a.i4)(e.id, n),
              onReset: a.oZ,
              submitting: t,
              onSaveText: d.intl.string(d.t["7NqTJn"]),
              message: d.intl.string(d.t["Z0/Wme"]),
          });
};
