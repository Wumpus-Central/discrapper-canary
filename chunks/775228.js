"use strict";
let i;
n.d(t, { A: () => f });
var r = n(17928),
    a = n(228366),
    s = n(77729),
    l = n(723702),
    o = n(340829),
    d = n(375708);
let c = {},
    u = (0, l.isWindows)()
        ? `${s.A.process.env.LOCALAPPDATA}\\DiscordGames`
        : (0, l.isMac)()
          ? "/Applications/DiscordGames"
          : "/tmp";
function _(e, t) {
    c = { ...c, [e]: { ...(c[e] ?? {}), ...t } };
}
function E(e) {
    let { applicationId: t, branchId: n, installationPath: r } = e;
    null == i.installations[t] && (i.installations[t] = {}),
        (i.installations[t][n] = { installationPath: r }),
        i.installationPaths.has(r) || h({ path: r, metadata: {} });
}
function A(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == i.installations[t]) return !1;
    delete i.installations[t][n], 0 === Object.keys(i.installations[t]).length && delete i.installations[t];
}
function h(e) {
    if (i.installationPaths.has(e.path)) return !1;
    _(e.path, e.metadata);
    let t = new Set(i.installationPaths);
    t.add(e.path), (i.installationPaths = t);
}
class I extends r.Ay.PersistedStore {
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
        return e === u
            ? d.intl.string(d.t.VdDrjm)
            : (s.A.fileManager.basename(e) ??
                  e
                      .replace(/[/\\]+$/, "")
                      .split(/[/\\]+/g)
                      .slice(-1)[0] ??
                  "?");
    }
}
let f = new I(a.h, {
    DISPATCH_APPLICATION_INSTALL: E,
    DISPATCH_APPLICATION_UNINSTALL: A,
    DISPATCH_APPLICATION_CANCEL: function (e) {
        let { applicationId: t, branchId: n } = e,
            i = o.A.getState(t, n);
        null != i && null == i.buildId && null == i.manifestIds && A({ applicationId: t, branchId: n });
    },
    INSTALLATION_LOCATION_ADD: h,
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
    DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: E,
});
