"use strict";
n.d(t, { A: () => o, S: () => a });
var r = n(674378),
    i = n(723702),
    s = n(837921);
function a() {
    return ((0, i.isWindows)() && "arm64" !== s.Ay.architecture) || (0, i.isMac)();
}
function o(e) {
    let {
        LibraryApplicationStore: t,
        LaunchableGameStore: n,
        DispatchApplicationStore: i,
        ConnectedAppsStore: s,
        applicationId: a,
        branchId: o,
    } = e;
    if (s.isConnected(a) || (null == o && (o = a), i.isLaunchable(a, o))) return !0;
    let l = t.getLibraryApplication(a, o);
    return !(null != l && (0, r.XZ)(l)) && n.isLaunchable(a);
}
