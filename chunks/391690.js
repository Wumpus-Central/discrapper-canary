let i;
n.d(t, { Z: () => N }), n(47120), n(757143);
var r,
    a = n(442837),
    s = n(570140),
    o = n(579806),
    l = n(358085),
    u = n(417363),
    c = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = {},
    _ = (0, l.isWindows)() ? ''.concat(o.Z.process.env.LOCALAPPDATA, '\\DiscordGames') : (0, l.isMac)() ? '/Applications/DiscordGames' : '/tmp';
function p(e, t) {
    var n;
    f = {
        ...f,
        [e]: {
            ...(null !== (n = f[e]) && void 0 !== n ? n : {}),
            ...t
        }
    };
}
function h(e) {
    (f = { ...f }), delete f[e];
}
function m(e, t) {
    i.pathLabels = {
        ...i.pathLabels,
        [e]: t
    };
}
function g(e) {
    if (null == i.pathLabels[e]) return !1;
    (i.pathLabels = { ...i.pathLabels }), delete i.pathLabels[e];
}
function E(e) {
    let { applicationId: t, branchId: n, installationPath: r } = e;
    null == i.installations[t] && (i.installations[t] = {}),
        (i.installations[t][n] = { installationPath: r }),
        i.installationPaths.has(r) ||
            I({
                path: r,
                metadata: {}
            });
}
function v(e) {
    let { applicationId: t, branchId: n } = e,
        i = u.Z.getState(t, n);
    null != i &&
        null == i.buildId &&
        null == i.manifestIds &&
        y({
            applicationId: t,
            branchId: n
        });
}
function y(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == i.installations[t]) return !1;
    delete i.installations[t][n], 0 === Object.keys(i.installations[t]).length && delete i.installations[t];
}
function I(e) {
    if (i.installationPaths.has(e.path)) return !1;
    p(e.path, e.metadata);
    let t = new Set(i.installationPaths);
    t.add(e.path), (i.installationPaths = t);
}
function b(e) {
    let { path: t } = e;
    if (!i.installationPaths.has(t) || i.defaultInstallationPath === t) return !1;
    let n = new Set(i.installationPaths);
    n.delete(t), (i.installationPaths = n), h(t), g(t);
}
function T(e) {
    let { path: t, label: n, isDefault: r } = e;
    if (!i.installationPaths.has(t)) return !1;
    null != n && '' !== n && i.pathLabels[t] !== n && m(t, n), r && i.defaultInstallationPath !== t && (i.defaultInstallationPath = t);
}
function S(e) {
    let { metadataPayload: t } = e;
    for (let e in t) p(e, t[e]);
}
class A extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        let t = { ...e };
        null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = _), null == t.installationPaths ? (t.installationPaths = new Set([t.defaultInstallationPath])) : (t.installationPaths = new Set(Array.from(t.installationPaths))), null == t.pathLabels && (t.pathLabels = {}), (i = t);
    }
    getState() {
        return i;
    }
    get defaultInstallationPath() {
        return i.defaultInstallationPath;
    }
    get installationPaths() {
        return Array.from(i.installationPaths).map((e) => ({
            path: e,
            label: i.pathLabels[e]
        }));
    }
    get installationPathsMetadata() {
        return f;
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
        return null == i.installations[e] || null == i.installations[e][t] ? null : i.installations[e][t].installationPath;
    }
    getLabelFromPath(e) {
        var t, n;
        return e === _
            ? c.intl.string(c.t.VdDrjo)
            : null !==
                    (n =
                        null !== (t = o.Z.fileManager.basename(e)) && void 0 !== t
                            ? t
                            : e
                                  .replace(/[/\\]+$/, '')
                                  .split(/[/\\]+/g)
                                  .slice(-1)[0]) && void 0 !== n
              ? n
              : '?';
    }
}
d(A, 'displayName', 'InstallationManagerStore'), d(A, 'persistKey', 'InstallationManagerStore');
let N = new A(s.Z, {
    DISPATCH_APPLICATION_INSTALL: E,
    DISPATCH_APPLICATION_UNINSTALL: y,
    DISPATCH_APPLICATION_CANCEL: v,
    INSTALLATION_LOCATION_ADD: I,
    INSTALLATION_LOCATION_REMOVE: b,
    INSTALLATION_LOCATION_UPDATE: T,
    INSTALLATION_LOCATION_FETCH_METADATA: S,
    DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: E
});
