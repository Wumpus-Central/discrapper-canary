n.d(t, { A: () => _, S: () => s });
var i = n(674378),
    r = n(723702),
    a = n(19575);
function s() {
    return ((0, r.isWindows)() && "arm64" !== a.Ay.architecture) || (0, r.isMac)();
}
function _(e) {
    let {
        LibraryApplicationStore: t,
        LaunchableGameStore: n,
        DispatchApplicationStore: r,
        ConnectedAppsStore: a,
        applicationId: s,
        branchId: _,
    } = e;
    if (a.isConnected(s) || (null == _ && (_ = s), r.isLaunchable(s, _))) return !0;
    let l = t.getLibraryApplication(s, _);
    return !(null != l && (0, i.XZ)(l)) && n.isLaunchable(s);
}
