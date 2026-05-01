"use strict";
n.d(t, { A: () => o, S: () => a });
var i = n(674378),
    r = n(723702),
    s = n(19575);
function a() {
    return ((0, r.isWindows)() && "arm64" !== s.Ay.architecture) || (0, r.isMac)();
}
function o(e) {
    let {
        LibraryApplicationStore: t,
        LaunchableGameStore: n,
        DispatchApplicationStore: r,
        ConnectedAppsStore: s,
        applicationId: a,
        branchId: o,
    } = e;
    if (s.isConnected(a) || (null == o && (o = a), r.isLaunchable(a, o))) return !0;
    let l = t.getLibraryApplication(a, o);
    return !(null != l && (0, i.XZ)(l)) && n.isLaunchable(a);
}
