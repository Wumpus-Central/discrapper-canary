n.d(t, { A: () => c });
var i = n(523527),
    r = n(267102),
    a = n(567249),
    s = n(574172),
    l = n(494126),
    o = n(652215);
async function d(e) {
    let t = (0, r.zd)();
    a.A.getWindowOpen(o.MLl.ACTIVITY_POPOUT) && (0, s.close)(o.MLl.ACTIVITY_POPOUT);
    let n = await l.launchFrame(e);
    return t === o.BRT.POPOUT && (0, i.A)(), n;
}
let c = { ...l, launchFrame: d };
