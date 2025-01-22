var i = r(442837),
    a = r(481060),
    o = r(38618),
    s = r(84615),
    l = r(272423),
    u = r(823385),
    c = r(819640);
let d = () => {
    let e = (0, i.e7)([c.Z], () => c.Z.hasLayers()),
        n = (0, s.QP)((e) => e.fullScreenLayers.length > 0),
        r = (0, l.EV)(),
        d = (0, a.useModalsStore)(a.hasAnyModalOpen),
        f = (0, i.e7)([o.Z], () => o.Z.isConnected()),
        p = (0, i.e7)([u.Z], () => u.Z.isOpen());
    return e || n || d || r || !f || p;
};
n.Z = d;
