"use strict";
n.d(t, { A: () => l, S: () => s });
var i = n(674378),
    r = n(723702),
    a = n(19575);
function s() {
    return ((0, r.isWindows)() && "arm64" !== a.Ay.architecture) || (0, r.isMac)();
}
function l(e) {
    let {
        LibraryApplicationStore: t,
        LaunchableGameStore: n,
        DispatchApplicationStore: r,
        ConnectedAppsStore: a,
        applicationId: s,
        branchId: l,
    } = e;
    if (a.isConnected(s) || (null == l && (l = s), r.isLaunchable(s, l))) return !0;
    let o = t.getLibraryApplication(s, l);
    return !(null != o && (0, i.XZ)(o)) && n.isLaunchable(s);
}
