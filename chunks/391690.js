let i;
var a,
    o = r(47120);
var s = r(757143);
var l = r(442837),
    u = r(570140),
    c = r(579806),
    d = r(358085),
    f = r(417363),
    p = r(388032);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = {},
    m = (() => ((0, d.isWindows)() ? ''.concat(c.Z.process.env.LOCALAPPDATA, '\\DiscordGames') : (0, d.isMac)() ? '/Applications/DiscordGames' : '/tmp'))();
function g(e, n) {
    var r;
    _ = {
        ..._,
        [e]: {
            ...(null !== (r = _[e]) && void 0 !== r ? r : {}),
            ...n
        }
    };
}
function E(e) {
    (_ = { ..._ }), delete _[e];
}
function v(e, n) {
    i.pathLabels = {
        ...i.pathLabels,
        [e]: n
    };
}
function y(e) {
    if (null == i.pathLabels[e]) return !1;
    (i.pathLabels = { ...i.pathLabels }), delete i.pathLabels[e];
}
function b(e) {
    let { applicationId: n, branchId: r, installationPath: a } = e;
    null == i.installations[n] && (i.installations[n] = {}),
        (i.installations[n][r] = { installationPath: a }),
        !i.installationPaths.has(a) &&
            S({
                path: a,
                metadata: {}
            });
}
function I(e) {
    let { applicationId: n, branchId: r } = e,
        i = f.Z.getState(n, r);
    null != i &&
        null == i.buildId &&
        null == i.manifestIds &&
        T({
            applicationId: n,
            branchId: r
        });
}
function T(e) {
    let { applicationId: n, branchId: r } = e;
    if (null == i.installations[n]) return !1;
    delete i.installations[n][r], 0 === Object.keys(i.installations[n]).length && delete i.installations[n];
}
function S(e) {
    if (i.installationPaths.has(e.path)) return !1;
    g(e.path, e.metadata);
    let n = new Set(i.installationPaths);
    n.add(e.path), (i.installationPaths = n);
}
function A(e) {
    let { path: n } = e;
    if (!i.installationPaths.has(n) || i.defaultInstallationPath === n) return !1;
    let r = new Set(i.installationPaths);
    r.delete(n), (i.installationPaths = r), E(n), y(n);
}
function C(e) {
    let { path: n, label: r, isDefault: a } = e;
    if (!i.installationPaths.has(n)) return !1;
    null != r && '' !== r && i.pathLabels[n] !== r && v(n, r), a && i.defaultInstallationPath !== n && (i.defaultInstallationPath = n);
}
function N(e) {
    let { metadataPayload: n } = e;
    for (let e in n) g(e, n[e]);
}
class R extends (a = l.ZP.PersistedStore) {
    initialize(e) {
        let n = { ...e };
        null == n.installations && (n.installations = {}), null == n.defaultInstallationPath && (n.defaultInstallationPath = m), null == n.installationPaths ? (n.installationPaths = new Set([n.defaultInstallationPath])) : (n.installationPaths = new Set(Array.from(n.installationPaths))), null == n.pathLabels && (n.pathLabels = {}), (i = n);
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
        return _;
    }
    hasGamesInstalledInPath(e) {
        let { installations: n } = i;
        for (let r in n) for (let i in n[r]) if (n[r][i].installationPath === e) return !0;
        return !1;
    }
    shouldBeInstalled(e, n) {
        return null != i.installations[e] && null != i.installations[e][n];
    }
    getInstallationPath(e, n) {
        return null == i.installations[e] || null == i.installations[e][n] ? null : i.installations[e][n].installationPath;
    }
    getLabelFromPath(e) {
        var n, r;
        return e === m
            ? p.intl.string(p.t.VdDrjo)
            : null !==
                    (r =
                        null !== (n = c.Z.fileManager.basename(e)) && void 0 !== n
                            ? n
                            : e
                                  .replace(/[/\\]+$/, '')
                                  .split(/[/\\]+/g)
                                  .slice(-1)[0]) && void 0 !== r
              ? r
              : '?';
    }
}
h(R, 'displayName', 'InstallationManagerStore'),
    h(R, 'persistKey', 'InstallationManagerStore'),
    (n.Z = new R(u.Z, {
        DISPATCH_APPLICATION_INSTALL: b,
        DISPATCH_APPLICATION_UNINSTALL: T,
        DISPATCH_APPLICATION_CANCEL: I,
        INSTALLATION_LOCATION_ADD: S,
        INSTALLATION_LOCATION_REMOVE: A,
        INSTALLATION_LOCATION_UPDATE: C,
        INSTALLATION_LOCATION_FETCH_METADATA: N,
        DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: b
    }));
