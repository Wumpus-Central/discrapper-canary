"use strict";
n.d(t, { A: () => v });
var r = n(781763),
    i = n(626584),
    s = n(606076),
    a = n(474951),
    o = n(961350),
    l = n(134861),
    u = n(540999),
    c = n(648484),
    d = n(962052),
    _ = n(723702),
    f = n(998218),
    p = n(837921),
    h = n(652215);
let E = new i.A("Games"),
    m = {},
    g = 0,
    A = null;
function I() {
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
function T(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, _.getPlatformName)()).map((e) => e.name),
        },
        n = e.aliases.map((e) => ({ ...t, name: e }));
    return [t, ...n];
}
async function S(e) {
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
    t > g && ((g = t + 36e5), (m = {}));
    let n = await I();
    for (let t of e) {
        let e = m[t.id];
        if (null != e) return e;
        let r = await new Promise((e) => n.findLaunchable(t, e));
        if (null != r) return (m[t.id] = r), r;
    }
    throw Error("could not find launchable");
}
function y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    e()
        ? t()
        : setTimeout(() => {
              250 * r <= 12e4 ? y(e, t, n, r + 1) : n();
          }, 250);
}
function N(e) {
    return (
        E.info("launch", e),
        new Promise((t, n) => {
            null == f.A.safeParseWithQuery(e.launchTarget)
                ? n(Error(`Failed to parse launch target. ${e.launchTarget}`))
                : (window.open(e.launchTarget), t([]));
        })
    );
}
let v = {
    waitSubscribed: (e, t) => new Promise((n, r) => y(() => a.A.isSubscribed(e, t), n, r)),
    waitParentConnected: (e) => new Promise((t, n) => y(() => l.A.isChildConnected(e), t, n)),
    waitConnected(e) {
        return new Promise(y.bind(this, () => l.A.isConnected(e)));
    },
    waitParentSubscribed: (e, t) => new Promise((n, r) => y(() => a.A.isChildSubscribed(e, t), n, r)),
    isLaunchable: (e) =>
        S(T(e))
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => S(T(e)).then(N),
    launchDispatchApplication(e, t, n, i, a) {
        let {
            launchOptions: l,
            defaultLaunchOptionId: u,
            installPath: _,
            applicationId: f,
            branchId: p,
            buildId: E,
            shouldPatch: m,
        } = e;
        if (null == l || null == u || null == _) throw Error(`Couldn't construct launchable for ${e.applicationId}`);
        null == a && (a = u);
        let g = l[a];
        if (null == g) throw Error(`Couldn't construct launchable for ${e.applicationId}. No launch option.`);
        return (0, r.r)([p])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let { liveBuildId: n } = t;
                if (m && n !== E) return Promise.reject(Error("live build id changed"));
            })
            .then(() => d.A.runLaunchSetup(f, p))
            .then(() => {
                let e = (0, s.A)(_),
                    r = {
                        DISCORD_INSTANCE_ID: c.A.getId().toString(),
                        DISCORD_ACCESS_TOKEN: t ?? "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: i,
                        DISCORD_STORAGE_PATH: h.gkb.ROOT_STORAGE_PATH(e, o.default.getId()),
                    };
                return d.A.launch(f, p, g.name, r);
            });
    },
    removeShortcuts: (e) => ((0, _.isWindows)() ? I().then((t) => t.removeShortcuts?.(e) ?? !1) : Promise.resolve(!1)),
    createShortcuts(e, t, n, r, i) {
        if (null == i || !(0, _.isWindows)()) return Promise.resolve(!1);
        let s = `discord:///library/${r}/launch`,
            a = `${i}\\icon.ico`;
        return I().then((r) => r.createShortcuts?.(e, t, n, s, a) ?? !1);
    },
    isGameLaunchable: (e) =>
        S({ id: e })
            .then((e) => null != e)
            .catch(() => !1),
    launchGame: (e) => (l.A.isConnected(e) ? Promise.resolve() : S({ id: e }).then(N)),
    isProtocolRegistered: (e) =>
        I()
            .then((t) => t.isProtocolSchemeRegistered?.(e) ?? !1)
            .catch(() => !1),
    setRecentGames(e) {
        I()
            .then((t) => t.setRecentGames?.(e))
            .catch(() => {});
    },
};
