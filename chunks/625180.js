n.d(t, { A: () => _ });
var i = n(523527),
    r = n(267102),
    a = n(567249),
    l = n(574172),
    s = n(494126),
    o = n(652215);
async function u(e) {
    let t = (0, r.zd)();
    a.A.getWindowOpen(o.MLl.ACTIVITY_POPOUT) && (0, l.close)(o.MLl.ACTIVITY_POPOUT),
        await s.launchFrame(e),
        t === o.BRT.POPOUT && (0, i.A)();
}
let _ = { ...s, launchFrame: u };
