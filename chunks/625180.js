var i = n(991690),
    r = n(523527),
    a = n(267102),
    s = n(293432),
    l = n(574172),
    o = n(456006),
    d = n(652215);
let c = {
    ...o,
    launchFrame: async function (e) {
        let t = (0, a.zd)();
        e.surface.type !== i.U.OVERLAY &&
            s.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT) &&
            (0, l.close)(d.MLl.ACTIVITY_POPOUT);
        let n = await o.launchFrame(e);
        return (t === d.BRT.POPOUT && null == e.hostWindowKey && (0, r.A)(), n);
    },
};
n.d(t, {}, { A: c });
