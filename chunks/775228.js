let r;
n.d(t, { A: () => R }), n(896048), n(747238), n(812715);
var i,
    a = n(311907),
    s = n(73153),
    o = n(77729),
    l = n(723702),
    c = n(194871),
    u = n(985018);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {},
    m = (0, l.isWindows)()
        ? "".concat(o.A.process.env.LOCALAPPDATA, "\\DiscordGames")
        : (0, l.isMac)()
          ? "/Applications/DiscordGames"
          : "/tmp";
function g(e, t) {
    var n;
    h = _(f({}, h), { [e]: f({}, null != (n = h[e]) ? n : {}, t) });
}
function E(e) {
    (h = f({}, h)), delete h[e];
}
function b(e, t) {
    r.pathLabels = _(f({}, r.pathLabels), { [e]: t });
}
function y(e) {
    if (null == r.pathLabels[e]) return !1;
    (r.pathLabels = f({}, r.pathLabels)), delete r.pathLabels[e];
}
function O(e) {
    let { applicationId: t, branchId: n, installationPath: i } = e;
    null == r.installations[t] && (r.installations[t] = {}),
        (r.installations[t][n] = { installationPath: i }),
        r.installationPaths.has(i) ||
            S({
                path: i,
                metadata: {},
            });
}
function A(e) {
    let { applicationId: t, branchId: n } = e,
        r = c.A.getState(t, n);
    null != r &&
        null == r.buildId &&
        null == r.manifestIds &&
        v({
            applicationId: t,
            branchId: n,
        });
}
function v(e) {
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
function I(e) {
    let { path: t } = e;
    if (!r.installationPaths.has(t) || r.defaultInstallationPath === t) return !1;
    let n = new Set(r.installationPaths);
    n.delete(t), (r.installationPaths = n), E(t), y(t);
}
function T(e) {
    let { path: t, label: n, isDefault: i } = e;
    if (!r.installationPaths.has(t)) return !1;
    null != n && "" !== n && r.pathLabels[t] !== n && b(t, n),
        i && r.defaultInstallationPath !== t && (r.defaultInstallationPath = t);
}
function C(e) {
    let { metadataPayload: t } = e;
    for (let e in t) g(e, t[e]);
}
class N extends (i = a.Ay.PersistedStore) {
    initialize(e) {
        let t = f({}, e);
        null == t.installations && (t.installations = {}),
            null == t.defaultInstallationPath && (t.defaultInstallationPath = m),
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
        return Array.from(r.installationPaths).map((e) => ({
            path: e,
            label: r.pathLabels[e],
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
        return null == r.installations[e] || null == r.installations[e][t]
            ? null
            : r.installations[e][t].installationPath;
    }
    getLabelFromPath(e) {
        var t, n;
        return e === m
            ? u.intl.string(u.t.VdDrjm)
            : null !=
                (t =
                    null != (n = o.A.fileManager.basename(e))
                        ? n
                        : e
                              .replace(/[/\\]+$/, "")
                              .split(/[/\\]+/g)
                              .slice(-1)[0])
              ? t
              : "?";
    }
}
d(N, "displayName", "InstallationManagerStore"), d(N, "persistKey", "InstallationManagerStore");
let R = new N(s.h, {
    DISPATCH_APPLICATION_INSTALL: O,
    DISPATCH_APPLICATION_UNINSTALL: v,
    DISPATCH_APPLICATION_CANCEL: A,
    INSTALLATION_LOCATION_ADD: S,
    INSTALLATION_LOCATION_REMOVE: I,
    INSTALLATION_LOCATION_UPDATE: T,
    INSTALLATION_LOCATION_FETCH_METADATA: C,
    DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: O,
});
