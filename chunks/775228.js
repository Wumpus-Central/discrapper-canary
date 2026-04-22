"use strict";
let r;
n.d(t, { A: () => m });
var i = n(311907),
    s = n(73153),
    a = n(77729),
    o = n(723702),
    l = n(194871),
    u = n(985018);
let d = {},
    c = (0, o.isWindows)()
        ? `${a.A.process.env.LOCALAPPDATA}\\DiscordGames`
        : (0, o.isMac)()
          ? "/Applications/DiscordGames"
          : "/tmp";
function _(e, t) {
    d = { ...d, [e]: { ...(d[e] ?? {}), ...t } };
}
function f(e) {
    let { applicationId: t, branchId: n, installationPath: i } = e;
    null == r.installations[t] && (r.installations[t] = {}),
        (r.installations[t][n] = { installationPath: i }),
        r.installationPaths.has(i) || h({ path: i, metadata: {} });
}
function E(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == r.installations[t]) return !1;
    delete r.installations[t][n], 0 === Object.keys(r.installations[t]).length && delete r.installations[t];
}
function h(e) {
    if (r.installationPaths.has(e.path)) return !1;
    _(e.path, e.metadata);
    let t = new Set(r.installationPaths);
    t.add(e.path), (r.installationPaths = t);
}
class p extends i.Ay.PersistedStore {
    static displayName = "InstallationManagerStore";
    static persistKey = "InstallationManagerStore";
    initialize(e) {
        let t = { ...e };
        null == t.installations && (t.installations = {}),
            null == t.defaultInstallationPath && (t.defaultInstallationPath = c),
            null == t.installationPaths
                ? (t.installationPaths = new Set([t.defaultInstallationPath]))
                : (t.installationPaths = new Set(Array.from(t.installationPaths))),
            null == t.pathLabels && (t.pathLabels = {}),
            (r = t);
    }
    getState() {
        return r;
    }
    get defaultInstallationPath() {
        return r.defaultInstallationPath;
    }
    get installationPaths() {
        return Array.from(r.installationPaths).map((e) => ({ path: e, label: r.pathLabels[e] }));
    }
    get installationPathsMetadata() {
        return d;
    }
    hasGamesInstalledInPath(e) {
        let { installations: t } = r;
        for (let n in t) for (let r in t[n]) if (t[n][r].installationPath === e) return !0;
        return !1;
    }
    shouldBeInstalled(e, t) {
        return null != r.installations[e] && null != r.installations[e][t];
    }
    getInstallationPath(e, t) {
        return null == r.installations[e] || null == r.installations[e][t]
            ? null
            : r.installations[e][t].installationPath;
    }
    getLabelFromPath(e) {
        return e === c
            ? u.intl.string(u.t.VdDrjm)
            : (a.A.fileManager.basename(e) ??
                  e
                      .replace(/[/\\]+$/, "")
                      .split(/[/\\]+/g)
                      .slice(-1)[0] ??
                  "?");
    }
}
let m = new p(s.h, {
    DISPATCH_APPLICATION_INSTALL: f,
    DISPATCH_APPLICATION_UNINSTALL: E,
    DISPATCH_APPLICATION_CANCEL: function (e) {
        let { applicationId: t, branchId: n } = e,
            r = l.A.getState(t, n);
        null != r && null == r.buildId && null == r.manifestIds && E({ applicationId: t, branchId: n });
    },
    INSTALLATION_LOCATION_ADD: h,
    INSTALLATION_LOCATION_REMOVE: function (e) {
        var t;
        let { path: n } = e;
        if (!r.installationPaths.has(n) || r.defaultInstallationPath === n) return !1;
        let i = new Set(r.installationPaths);
        i.delete(n),
            (r.installationPaths = i),
            (d = { ...d }),
            delete d[n],
            (t = n),
            null == r.pathLabels[t] || ((r.pathLabels = { ...r.pathLabels }), delete r.pathLabels[t]);
    },
    INSTALLATION_LOCATION_UPDATE: function (e) {
        let { path: t, label: n, isDefault: i } = e;
        if (!r.installationPaths.has(t)) return !1;
        null != n && "" !== n && r.pathLabels[t] !== n && (r.pathLabels = { ...r.pathLabels, [t]: n }),
            i && r.defaultInstallationPath !== t && (r.defaultInstallationPath = t);
    },
    INSTALLATION_LOCATION_FETCH_METADATA: function (e) {
        let { metadataPayload: t } = e;
        for (let e in t) _(e, t[e]);
    },
    DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: f,
});
