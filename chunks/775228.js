"use strict";
let i;
n.d(t, { A: () => m });
var r = n(17928),
    s = n(228366),
    a = n(77729),
    o = n(723702),
    l = n(340829),
    u = n(375708);
let c = {},
    d = (0, o.isWindows)()
        ? `${a.A.process.env.LOCALAPPDATA}\\DiscordGames`
        : (0, o.isMac)()
          ? "/Applications/DiscordGames"
          : "/tmp";
function _(e, t) {
    c = { ...c, [e]: { ...(c[e] ?? {}), ...t } };
}
function h(e) {
    let { applicationId: t, branchId: n, installationPath: r } = e;
    null == i.installations[t] && (i.installations[t] = {}),
        (i.installations[t][n] = { installationPath: r }),
        i.installationPaths.has(r) || p({ path: r, metadata: {} });
}
function f(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == i.installations[t]) return !1;
    delete i.installations[t][n], 0 === Object.keys(i.installations[t]).length && delete i.installations[t];
}
function p(e) {
    if (i.installationPaths.has(e.path)) return !1;
    _(e.path, e.metadata);
    let t = new Set(i.installationPaths);
    t.add(e.path), (i.installationPaths = t);
}
class E extends r.Ay.PersistedStore {
    static displayName = "InstallationManagerStore";
    static persistKey = "InstallationManagerStore";
    initialize(e) {
        let t = { ...e };
        null == t.installations && (t.installations = {}),
            null == t.defaultInstallationPath && (t.defaultInstallationPath = d),
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
        return c;
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
        return e === d
            ? u.intl.string(u.t.VdDrjm)
            : (a.A.fileManager.basename(e) ??
                  e
                      .replace(/[/\\]+$/, "")
                      .split(/[/\\]+/g)
                      .slice(-1)[0] ??
                  "?");
    }
}
let m = new E(s.h, {
    DISPATCH_APPLICATION_INSTALL: h,
    DISPATCH_APPLICATION_UNINSTALL: f,
    DISPATCH_APPLICATION_CANCEL: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = l.A.getState(t, n);
        null != i && null == i.buildId && null == i.manifestIds && f({ applicationId: t, branchId: n });
    },
    INSTALLATION_LOCATION_ADD: p,
    INSTALLATION_LOCATION_REMOVE: function (e) {
        var t;
        let { path: n } = e;
        if (!i.installationPaths.has(n) || i.defaultInstallationPath === n) return !1;
        let r = new Set(i.installationPaths);
        r.delete(n),
            (i.installationPaths = r),
            (c = { ...c }),
            delete c[n],
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
        for (let e in t) _(e, t[e]);
    },
    DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: h,
});
