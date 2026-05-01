n.d(t, { A: () => l, S: () => s });
var i = n(674378),
    a = n(723702),
    r = n(19575);
function s() {
    return ((0, a.isWindows)() && "arm64" !== r.Ay.architecture) || (0, a.isMac)();
}
function l(e) {
    let {
        LibraryApplicationStore: t,
        LaunchableGameStore: n,
        DispatchApplicationStore: a,
        ConnectedAppsStore: r,
        applicationId: s,
        branchId: l,
    } = e;
    if (r.isConnected(s) || (null == l && (l = s), a.isLaunchable(s, l))) return !0;
    let o = t.getLibraryApplication(s, l);
    return !(null != o && (0, i.XZ)(o)) && n.isLaunchable(s);
}
