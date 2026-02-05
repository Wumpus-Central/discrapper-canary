"use strict";
n.d(t, { A: () => O });
var r = n(781763),
    i = n(626584),
    a = n(606076),
    s = n(474951),
    o = n(961350),
    l = n(134861),
    u = n(540999),
    c = n(648484),
    d = n(962052),
    _ = n(723702),
    f = n(998218),
    p = n(837921),
    h = n(652215);
let m = new i.A("Games"),
    g = {},
    E = 0,
    A = null,
    I = 250,
    T = 12e4,
    y = 36e5;
function S() {
    return null != A
        ? Promise.resolve(A)
        : (0, _.isDesktop)()
          ? p.Ay.ensureModule("discord_game_utils").then(() => {
                let e = p.Ay.getGameUtils();
                return null != e && null != e.findLaunchable
                    ? ((A = e), e)
                    : Promise.reject(Error("game utils not found"));
            })
          : Promise.reject(Error("not desktop client"));
}
function v(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, _.getPlatformName)()).map((e) => e.name),
        },
        n = e.aliases.map((e) => ({ ...t, name: e }));
    return [t, ...n];
}
function C(e) {
    return { id: e };
}
async function b(e) {
    if (
        (Array.isArray(e) || (e = [e]),
        u.A.isDeveloper ||
            (e = e.filter(
                (e) =>
                    null == e.thirdPartySkus ||
                    -1 ===
                        e.thirdPartySkus.findIndex((e) => {
                            let { distributor: t } = e;
                            return t === h.d3x.BATTLENET;
                        }),
            )),
        0 === e.length)
    )
        throw Error("No remaining launchable queries");
    let t = Date.now();
    t > E && ((E = t + y), (g = {}));
    let n = await S();
    for (let t of e) {
        let e = g[t.id];
        if (null != e) return e;
        let r = await new Promise((e) => n.findLaunchable(t, e));
        if (null != r) return (g[t.id] = r), r;
    }
    throw Error("could not find launchable");
}
function N(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    e()
        ? t()
        : setTimeout(() => {
              r * I <= T ? N(e, t, n, r + 1) : n();
          }, I);
}
function R(e) {
    return (
        m.info("launch", e),
        new Promise((t, n) => {
            null == f.A.safeParseWithQuery(e.launchTarget)
                ? n(Error(`Failed to parse launch target. ${e.launchTarget}`))
                : (window.open(e.launchTarget), t([]));
        })
    );
}
let O = {
    waitSubscribed: (e, t) => new Promise((n, r) => N(() => s.A.isSubscribed(e, t), n, r)),
    waitConnected(e) {
        return new Promise(N.bind(this, () => l.A.isConnected(e)));
    },
    isLaunchable: (e) =>
        b(v(e))
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => b(v(e)).then(R),
    launchDispatchApplication(e, t, n, i, s) {
        let {
            launchOptions: l,
            defaultLaunchOptionId: u,
            installPath: _,
            applicationId: f,
            branchId: p,
            buildId: m,
            shouldPatch: g,
        } = e;
        if (null == l || null == u || null == _) throw Error(`Couldn't construct launchable for ${e.applicationId}`);
        null == s && (s = u);
        let E = l[s];
        if (null == E) throw Error(`Couldn't construct launchable for ${e.applicationId}. No launch option.`);
        return (0, r.r)([p])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let { liveBuildId: n } = t;
                if (g && n !== m) return Promise.reject(Error("live build id changed"));
            })
            .then(() => d.A.runLaunchSetup(f, p))
            .then(() => {
                let e = (0, a.A)(_),
                    r = {
                        DISCORD_INSTANCE_ID: c.A.getId().toString(),
                        DISCORD_ACCESS_TOKEN: t ?? "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: i,
                        DISCORD_STORAGE_PATH: h.gkb.ROOT_STORAGE_PATH(e, o.default.getId()),
                    };
                return d.A.launch(f, p, E.name, r);
            });
    },
    removeShortcuts: (e) => ((0, _.isWindows)() ? S().then((t) => t.removeShortcuts?.(e) ?? !1) : Promise.resolve(!1)),
    createShortcuts(e, t, n, r, i) {
        if (null == i || !(0, _.isWindows)()) return Promise.resolve(!1);
        let a = `discord:///library/${r}/launch`,
            s = `${i}\\icon.ico`;
        return S().then((r) => r.createShortcuts?.(e, t, n, a, s) ?? !1);
    },
    isGameLaunchable: (e) =>
        b(C(e))
            .then((e) => null != e)
            .catch(() => !1),
    launchGame: (e) => (l.A.isConnected(e) ? Promise.resolve() : b(C(e)).then(R)),
    isProtocolRegistered: (e) =>
        S()
            .then((t) => t.isProtocolSchemeRegistered?.(e) ?? !1)
            .catch(() => !1),
    setRecentGames(e) {
        S()
            .then((t) => t.setRecentGames?.(e))
            .catch(() => {});
    },
};
