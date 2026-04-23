"use strict";
let i;
n.d(t, { A: () => g });
var r = n(17928),
    s = n(228366),
    a = n(77729),
    o = n(723702),
    l = n(340829),
    d = n(985018);
let _ = {},
    u = (0, o.isWindows)()
        ? `${a.A.process.env.LOCALAPPDATA}\\DiscordGames`
        : (0, o.isMac)()
          ? "/Applications/DiscordGames"
          : "/tmp";
function c(e, t) {
    _ = { ..._, [e]: { ...(_[e] ?? {}), ...t } };
}
function E(e) {
    let { applicationId: t, branchId: n, installationPath: r } = e;
    null == i.installations[t] && (i.installations[t] = {}),
        (i.installations[t][n] = { installationPath: r }),
        i.installationPaths.has(r) || m({ path: r, metadata: {} });
}
function h(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == i.installations[t]) return !1;
    delete i.installations[t][n], 0 === Object.keys(i.installations[t]).length && delete i.installations[t];
}
function m(e) {
    if (i.installationPaths.has(e.path)) return !1;
    c(e.path, e.metadata);
    let t = new Set(i.installationPaths);
    t.add(e.path), (i.installationPaths = t);
}
class f extends r.Ay.PersistedStore {
    static displayName = "InstallationManagerStore";
    static persistKey = "InstallationManagerStore";
    initialize(e) {
        let t = { ...e };
        null == t.installations && (t.installations = {}),
            null == t.defaultInstallationPath && (t.defaultInstallationPath = u),
            null == t.installationPaths
                ? (t.installationPaths = new Set([t.defaultInstallationPath]))
                : (t.installationPaths = new Set(Array.from(t.installationPaths))),
            null == t.pathLabels && (t.pathLabels = {}),
            (i = t);
    }
    getState() {
        return i;
    }
    get defaultInstallationPath() {
        return i.defaultInstallationPath;
    }
    get installationPaths() {
        return Array.from(i.installationPaths).map((e) => ({ path: e, label: i.pathLabels[e] }));
    }
    get installationPathsMetadata() {
        return _;
    }
    hasGamesInstalledInPath(e) {
        let { installations: t } = i;
        for (let n in t) for (let i in t[n]) if (t[n][i].installationPath === e) return !0;
        return !1;
    }
    shouldBeInstalled(e, t) {
        return null != i.installations[e] && null != i.installations[e][t];
    }
    getInstallationPath(e, t) {
        return null == i.installations[e] || null == i.installations[e][t]
            ? null
            : i.installations[e][t].installationPath;
    }
    getLabelFromPath(e) {
        return e === u
            ? d.intl.string(d.t.VdDrjm)
            : (a.A.fileManager.basename(e) ??
                  e
                      .replace(/[/\\]+$/, "")
                      .split(/[/\\]+/g)
                      .slice(-1)[0] ??
                  "?");
    }
}
let g = new f(s.h, {
    DISPATCH_APPLICATION_INSTALL: E,
    DISPATCH_APPLICATION_UNINSTALL: h,
    DISPATCH_APPLICATION_CANCEL: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = l.A.getState(t, n);
        null != i && null == i.buildId && null == i.manifestIds && h({ applicationId: t, branchId: n });
    },
    INSTALLATION_LOCATION_ADD: m,
    INSTALLATION_LOCATION_REMOVE: function (e) {
        var t;
        let { path: n } = e;
        if (!i.installationPaths.has(n) || i.defaultInstallationPath === n) return !1;
        let r = new Set(i.installationPaths);
        r.delete(n),
            (i.installationPaths = r),
            (_ = { ..._ }),
            delete _[n],
            (t = n),
            null == i.pathLabels[t] || ((i.pathLabels = { ...i.pathLabels }), delete i.pathLabels[t]);
    },
    INSTALLATION_LOCATION_UPDATE: function (e) {
        let { path: t, label: n, isDefault: r } = e;
        if (!i.installationPaths.has(t)) return !1;
        null != n && "" !== n && i.pathLabels[t] !== n && (i.pathLabels = { ...i.pathLabels, [t]: n }),
            r && i.defaultInstallationPath !== t && (i.defaultInstallationPath = t);
    },
    INSTALLATION_LOCATION_FETCH_METADATA: function (e) {
        let { metadataPayload: t } = e;
        for (let e in t) c(e, t[e]);
    },
    DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: E,
});
