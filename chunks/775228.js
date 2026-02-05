"use strict";
let r;
n.d(t, { A: () => v });
var i = n(311907),
    a = n(73153),
    s = n(77729),
    o = n(723702),
    l = n(194871),
    u = n(985018);
let c = {},
    d = (0, o.isWindows)()
        ? `${s.A.process.env.LOCALAPPDATA}\\DiscordGames`
        : (0, o.isMac)()
          ? "/Applications/DiscordGames"
          : "/tmp";
function _(e, t) {
    c = { ...c, [e]: { ...(c[e] ?? {}), ...t } };
}
function f(e) {
    (c = { ...c }), delete c[e];
}
function p(e, t) {
    r.pathLabels = { ...r.pathLabels, [e]: t };
}
function h(e) {
    if (null == r.pathLabels[e]) return !1;
    (r.pathLabels = { ...r.pathLabels }), delete r.pathLabels[e];
}
function m(e) {
    let { applicationId: t, branchId: n, installationPath: i } = e;
    null == r.installations[t] && (r.installations[t] = {}),
        (r.installations[t][n] = { installationPath: i }),
        r.installationPaths.has(i) || A({ path: i, metadata: {} });
}
function g(e) {
    let { applicationId: t, branchId: n } = e,
        r = l.A.getState(t, n);
    null != r && null == r.buildId && null == r.manifestIds && E({ applicationId: t, branchId: n });
}
function E(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == r.installations[t]) return !1;
    delete r.installations[t][n], 0 === Object.keys(r.installations[t]).length && delete r.installations[t];
}
function A(e) {
    if (r.installationPaths.has(e.path)) return !1;
    _(e.path, e.metadata);
    let t = new Set(r.installationPaths);
    t.add(e.path), (r.installationPaths = t);
}
function I(e) {
    let { path: t } = e;
    if (!r.installationPaths.has(t) || r.defaultInstallationPath === t) return !1;
    let n = new Set(r.installationPaths);
    n.delete(t), (r.installationPaths = n), f(t), h(t);
}
function T(e) {
    let { path: t, label: n, isDefault: i } = e;
    if (!r.installationPaths.has(t)) return !1;
    null != n && "" !== n && r.pathLabels[t] !== n && p(t, n),
        i && r.defaultInstallationPath !== t && (r.defaultInstallationPath = t);
}
function y(e) {
    let { metadataPayload: t } = e;
    for (let e in t) _(e, t[e]);
}
class S extends i.Ay.PersistedStore {
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
        return c;
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
        return e === d
            ? u.intl.string(u.t.VdDrjm)
            : (s.A.fileManager.basename(e) ??
                  e
                      .replace(/[/\\]+$/, "")
                      .split(/[/\\]+/g)
                      .slice(-1)[0] ??
                  "?");
    }
}
let v = new S(a.h, {
    DISPATCH_APPLICATION_INSTALL: m,
    DISPATCH_APPLICATION_UNINSTALL: E,
    DISPATCH_APPLICATION_CANCEL: g,
    INSTALLATION_LOCATION_ADD: A,
    INSTALLATION_LOCATION_REMOVE: I,
    INSTALLATION_LOCATION_UPDATE: T,
    INSTALLATION_LOCATION_FETCH_METADATA: y,
    DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: m,
});
