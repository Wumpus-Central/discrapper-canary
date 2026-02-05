"use strict";
n.d(t, { d: () => u });
var r = n(627968),
    i = n(64700),
    a = n(844222),
    s = n(460890),
    o = n(553270),
    l = n(395515);
function u(e) {
    let t = i.useContext(s.VO),
        n = t?.experiments?.enabledExperiments?.includes("mana-toggle-inputs"),
        { switchIconsEnabled: u } = i.useContext(a.C);
    if (n) {
        let t = void 0 !== e.hasIcon ? e.hasIcon : u;
        return (0, r.jsx)(o.A, { ...e, hasIcon: t });
    }
    return (0, r.jsx)(l.T, { ...e });
}
