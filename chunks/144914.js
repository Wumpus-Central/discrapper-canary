var i = n(674378),
    r = n(723702),
    a = n(253400);
n.d(
    t,
    {},
    {
        A: function (e) {
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
        },
        S: function () {
            return ((0, r.uF)() && "arm64" !== a.Ay.architecture) || (0, r.cX)();
        },
    },
);
