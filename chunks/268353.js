var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(928518),
    l = r(451478),
    u = r(228488),
    c = r(871499),
    d = r(388032);
function f(e) {
    let { enabled: n, ...r } = e,
        a = n ? d.intl.string(d.t.Z7MyND) : d.intl.string(d.t.OIDkcn),
        s = n ? o.FullscreenExitIcon : o.FullscreenEnterIcon;
    return (0, i.jsx)(c.Z, {
        label: a,
        iconComponent: s,
        ...r
    });
}
n.Z = a.ZP.connectStores([l.Z, s.Z], (e) => {
    let { node: n, guestWindow: r } = e;
    return { enabled: (0, u.rB)(n, null == r ? void 0 : r.document) };
})(f);
