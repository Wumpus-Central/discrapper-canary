n.d(t, { w: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(607070),
    s = n(210887),
    l = n(264783);
function c(e) {
    let { children: t } = e,
        { saturation: n, theme: c } = (0, i.cj)([a.Z, s.Z], () => ({
            saturation: a.Z.saturation,
            theme: s.Z.theme
        })),
        u = 0;
    1 !== n && (u = (0, o.OdO)(u, o.bgu.REDUCE_SATURATION_ENABLED));
    let d = (0, l.A)();
    return (0, r.jsx)(o.wMY, {
        theme: c,
        flags: u,
        saturation: n,
        density: d,
        children: t
    });
}
