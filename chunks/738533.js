"use strict";
n.d(t, { A: () => D });
var i = n(712963),
    r = n(626584),
    s = n(606076),
    a = n(289919),
    o = n(495544),
    l = n(134861),
    d = n(540999),
    _ = n(17928),
    u = n(228366),
    c = n(652215);
let E = 0;
class h extends _.Ay.Store {
    static displayName = "InstanceIdStore";
    getId() {
        return E;
    }
}
let m = new h(u.h, {
    RPC_SERVER_READY: function (e) {
        let { port: t } = e;
        E = c.xEi - t;
    },
});
var f = n(962052),
    g = n(723702),
    p = n(998218),
    A = n(19575);
let I = new r.A("Games"),
    T = {},
    S = 0,
    N = null;
function C() {
    return null != N
        ? Promise.resolve(N)
        : (0, g.isDesktop)()
          ? A.Ay.ensureModule("discord_game_utils").then(() => {
                let e = A.Ay.getGameUtils();
                return null != e && null != e.findLaunchable
                    ? ((N = e), e)
                    : Promise.reject(Error("game utils not found"));
            })
          : Promise.reject(Error("not desktop client"));
}
function R(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, g.getPlatformName)()).map((e) => e.name),
        },
        n = e.aliases.map((e) => ({ ...t, name: e }));
    return [t, ...n];
}
async function O(e) {
    if (
        (Array.isArray(e) || (e = [e]),
        d.A.isDeveloper ||
            (e = e.filter(
                (e) =>
                    null == e.thirdPartySkus ||
                    -1 ===
                        e.thirdPartySkus.findIndex((e) => {
                            let { distributor: t } = e;
                            return t === c.d3x.BATTLENET;
                        }),
            )),
        0 === e.length)
    )
        throw Error("No remaining launchable queries");
    let t = Date.now();
    t > S && ((S = t + 36e5), (T = {}));
    let n = await C();
    for (let t of e) {
        let e = T[t.id];
        if (null != e) return e;
        let i = await new Promise((e) => n.findLaunchable(t, e));
        if (null != i) return (T[t.id] = i), i;
    }
    throw Error("could not find launchable");
}
function y(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    e()
        ? t()
        : setTimeout(() => {
              250 * i <= 12e4 ? y(e, t, n, i + 1) : n();
          }, 250);
}
function v(e) {
    return (
        I.info("launch", e),
        new Promise((t, n) => {
            null == p.A.safeParseWithQuery(e.launchTarget)
                ? n(Error(`Failed to parse launch target. ${e.launchTarget}`))
                : (window.open(e.launchTarget), t([]));
        })
    );
}
let D = {
    waitSubscribed: (e, t) => new Promise((n, i) => y(() => a.A.isSubscribed(e, t), n, i)),
    waitParentConnected: (e) => new Promise((t, n) => y(() => l.A.isChildConnected(e), t, n)),
    waitConnected(e) {
        return new Promise(y.bind(this, () => l.A.isConnected(e)));
    },
    waitParentSubscribed: (e, t) => new Promise((n, i) => y(() => a.A.isChildSubscribed(e, t), n, i)),
    isLaunchable: (e) =>
        O(R(e))
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => O(R(e)).then(v),
    launchDispatchApplication(e, t, n, r, a) {
        let {
            launchOptions: l,
            defaultLaunchOptionId: d,
            installPath: _,
            applicationId: u,
            branchId: E,
            buildId: h,
            shouldPatch: g,
        } = e;
        if (null == l || null == d || null == _) throw Error(`Couldn't construct launchable for ${e.applicationId}`);
        null == a && (a = d);
        let p = l[a];
        if (null == p) throw Error(`Couldn't construct launchable for ${e.applicationId}. No launch option.`);
        return (0, i.r)([E])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let { liveBuildId: n } = t;
                if (g && n !== h) return Promise.reject(Error("live build id changed"));
            })
            .then(() => f.A.runLaunchSetup(u, E))
            .then(() => {
                let e = (0, s.A)(_),
                    i = {
                        DISCORD_INSTANCE_ID: m.getId().toString(),
                        DISCORD_ACCESS_TOKEN: t ?? "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: r,
                        DISCORD_STORAGE_PATH: c.gkb.ROOT_STORAGE_PATH(e, o.default.getId()),
                    };
                return f.A.launch(u, E, p.name, i);
            });
    },
    removeShortcuts: (e) => ((0, g.isWindows)() ? C().then((t) => t.removeShortcuts?.(e) ?? !1) : Promise.resolve(!1)),
    createShortcuts(e, t, n, i, r) {
        if (null == r || !(0, g.isWindows)()) return Promise.resolve(!1);
        let s = `discord:///library/${i}/launch`,
            a = `${r}\\icon.ico`;
        return C().then((i) => i.createShortcuts?.(e, t, n, s, a) ?? !1);
    },
    isGameLaunchable: (e) =>
        O({ id: e })
            .then((e) => null != e)
            .catch(() => !1),
    launchGame: (e) => (l.A.isConnected(e) ? Promise.resolve() : O({ id: e }).then(v)),
    isProtocolRegistered: (e) =>
        C()
            .then((t) => t.isProtocolSchemeRegistered?.(e) ?? !1)
            .catch(() => !1),
    setRecentGames(e) {
        C()
            .then((t) => t.setRecentGames?.(e))
            .catch(() => {});
    },
};
