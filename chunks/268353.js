n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(928518),
    o = n(451478),
    l = n(228488),
    u = n(871499),
    c = n(388032);
function d(e) {
    let { enabled: t, ...n } = e,
        r = t ? c.intl.string(c.t.Z7MyND) : c.intl.string(c.t.OIDkcn),
        s = t ? a.wvt : a.NpZ;
    return (0, i.jsx)(u.Z, {
        label: r,
        iconComponent: s,
        ...n
    });
}
let f = r.ZP.connectStores([o.Z, s.Z], (e) => {
    let { node: t, guestWindow: n } = e;
    return { enabled: (0, l.rB)(t, null == n ? void 0 : n.document) };
})(d);
