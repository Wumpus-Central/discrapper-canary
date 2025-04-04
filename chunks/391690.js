let r;
n.d(t, { Z: () => R }), n(47120), n(757143), n(301563);
var i,
    o = n(442837),
    a = n(570140),
    s = n(579806),
    l = n(358085),
    c = n(417363),
    u = n(388032);
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {},
    m = (0, l.isWindows)() ? ''.concat(s.Z.process.env.LOCALAPPDATA, '\\DiscordGames') : (0, l.isMac)() ? '/Applications/DiscordGames' : '/tmp';
function g(e, t) {
    var n;
    h = p(f({}, h), { [e]: f({}, null != (n = h[e]) ? n : {}, t) });
}
function E(e) {
    (h = f({}, h)), delete h[e];
}
function b(e, t) {
    r.pathLabels = p(f({}, r.pathLabels), { [e]: t });
}
function y(e) {
    if (null == r.pathLabels[e]) return !1;
    (r.pathLabels = f({}, r.pathLabels)), delete r.pathLabels[e];
}
function v(e) {
    let { applicationId: t, branchId: n, installationPath: i } = e;
    null == r.installations[t] && (r.installations[t] = {}),
        (r.installations[t][n] = { installationPath: i }),
        r.installationPaths.has(i) ||
            S({
                path: i,
                metadata: {}
            });
}
function O(e) {
    let { applicationId: t, branchId: n } = e,
        r = c.Z.getState(t, n);
    null != r &&
        null == r.buildId &&
        null == r.manifestIds &&
        I({
            applicationId: t,
            branchId: n
        });
}
function I(e) {
    let { applicationId: t, branchId: n } = e;
    if (null == r.installations[t]) return !1;
    delete r.installations[t][n], 0 === Object.keys(r.installations[t]).length && delete r.installations[t];
}
function S(e) {
    if (r.installationPaths.has(e.path)) return !1;
    g(e.path, e.metadata);
    let t = new Set(r.installationPaths);
    t.add(e.path), (r.installationPaths = t);
}
function T(e) {
    let { path: t } = e;
    if (!r.installationPaths.has(t) || r.defaultInstallationPath === t) return !1;
    let n = new Set(r.installationPaths);
    n.delete(t), (r.installationPaths = n), E(t), y(t);
}
function N(e) {
    let { path: t, label: n, isDefault: i } = e;
    if (!r.installationPaths.has(t)) return !1;
    null != n && '' !== n && r.pathLabels[t] !== n && b(t, n), i && r.defaultInstallationPath !== t && (r.defaultInstallationPath = t);
}
function A(e) {
    let { metadataPayload: t } = e;
    for (let e in t) g(e, t[e]);
}
class C extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        let t = f({}, e);
        null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = m), null == t.installationPaths ? (t.installationPaths = new Set([t.defaultInstallationPath])) : (t.installationPaths = new Set(Array.from(t.installationPaths))), null == t.pathLabels && (t.pathLabels = {}), (r = t);
    }
    getState() {
        return r;
    }
    get defaultInstallationPath() {
        return r.defaultInstallationPath;
    }
    get installationPaths() {
        return Array.from(r.installationPaths).map((e) => ({
            path: e,
            label: r.pathLabels[e]
        }));
    }
    get installationPathsMetadata() {
        return h;
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
        return null == r.installations[e] || null == r.installations[e][t] ? null : r.installations[e][t].installationPath;
    }
    getLabelFromPath(e) {
        var t, n;
        return e === m
            ? u.NW.string(u.t.VdDrjo)
            : null !=
                (n =
                    null != (t = s.Z.fileManager.basename(e))
                        ? t
                        : e
                              .replace(/[/\\]+$/, '')
                              .split(/[/\\]+/g)
                              .slice(-1)[0])
              ? n
              : '?';
    }
}
d(C, 'displayName', 'InstallationManagerStore'), d(C, 'persistKey', 'InstallationManagerStore');
let R = new C(a.Z, {
    DISPATCH_APPLICATION_INSTALL: v,
    DISPATCH_APPLICATION_UNINSTALL: I,
    DISPATCH_APPLICATION_CANCEL: O,
    INSTALLATION_LOCATION_ADD: S,
    INSTALLATION_LOCATION_REMOVE: T,
    INSTALLATION_LOCATION_UPDATE: N,
    INSTALLATION_LOCATION_FETCH_METADATA: A,
    DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: v
});
