n.d(t, {
    A: () => o,
    S: () => s,
});
var r = n(674378),
    i = n(723702),
    a = n(837921);

function s() {
    return ((0, i.isWindows)() && "arm64" !== a.Ay.architecture) || (0, i.isMac)();
}

function o(e) {
    let {
        LibraryApplicationStore: t,
        LaunchableGameStore: n,
        DispatchApplicationStore: i,
        ConnectedAppsStore: a,
        applicationId: s,
        branchId: o,
    } = e;
    if (a.isConnected(s) || (null == o && (o = s), i.isLaunchable(s, o))) return !0;
    let l = t.getLibraryApplication(s, o);
    return !(null != l && (0, r.XZ)(l)) && n.isLaunchable(s);
}
