n.d(t, { A: () => L });
var i = n(712963),
    r = n(626584),
    a = n(606076),
    s = n(289919),
    l = n(280450),
    o = n(134861),
    d = n(540999),
    c = n(17928),
    u = n(228366),
    _ = n(652215);
let E = 0;
class A extends c.Ay.Store {
    static displayName = "InstanceIdStore";
    getId() {
        return E;
    }
}
let h = new A(u.h, {
    RPC_SERVER_READY: function (e) {
        let { port: t } = e;
        E = _.xEi - t;
    },
});
var I = n(962052),
    f = n(723702),
    p = n(998218),
    T = n(19575);
let m = new r.A("Games"),
    g = null;
function S() {
    return null != g
        ? Promise.resolve(g)
        : (0, f.isDesktop)()
          ? T.Ay.ensureModule("discord_game_utils").then(() => {
                let e = T.Ay.getGameUtils();
                return null != e && null != e.findLaunchable
                    ? ((g = e), e)
                    : Promise.reject(Error("game utils not found"));
            })
          : Promise.reject(Error("not desktop client"));
}
function N(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, f.getPlatformName)()).map((e) => e.name),
        },
        n = e.aliases.map((e) => ({ ...t, name: e }));
    return [t, ...n];
}
async function C(e) {
    if (
        (Array.isArray(e) || (e = [e]),
        d.A.isDeveloper ||
            (e = e.filter(
                (e) =>
                    null == e.thirdPartySkus ||
                    -1 ===
                        e.thirdPartySkus.findIndex((e) => {
                            let { distributor: t } = e;
                            return t === _.d3x.BATTLENET;
                        }),
            )),
        0 === e.length)
    )
        throw Error("No remaining launchable queries");
    let t = await S();
    for (let n of e) {
        let e = await new Promise((e) => t.findLaunchable(n, e));
        if (null != e) return e;
    }
    throw Error("could not find launchable");
}
function O(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    e()
        ? t()
        : setTimeout(() => {
              250 * i <= 12e4 ? O(e, t, n, i + 1) : n();
          }, 250);
}
function R(e) {
    return (
        m.info("launch", e),
        new Promise((t, n) => {
            null == p.A.safeParseWithQuery(e.launchTarget)
                ? n(Error(`Failed to parse launch target. ${e.launchTarget}`))
                : (window.open(e.launchTarget), t([]));
        })
    );
}
let L = {
    waitSubscribed: (e, t) => new Promise((n, i) => O(() => s.A.isSubscribed(e, t), n, i)),
    waitParentConnected: (e) => new Promise((t, n) => O(() => o.A.isChildConnected(e), t, n)),
    waitConnected(e) {
        return new Promise(O.bind(this, () => o.A.isConnected(e)));
    },
    waitParentSubscribed: (e, t) => new Promise((n, i) => O(() => s.A.isChildSubscribed(e, t), n, i)),
    isLaunchable: (e) =>
        C(N(e))
            .then((e) => null != e)
            .catch(() => !1),
    isGameLaunchable: (e) =>
        C({ id: e })
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => C(N(e)).then(R),
    launchDispatchApplication(e, t, n, r, s) {
        let {
            launchOptions: o,
            defaultLaunchOptionId: d,
            installPath: c,
            applicationId: u,
            branchId: E,
            buildId: A,
            shouldPatch: f,
        } = e;
        if (null == o || null == d || null == c) throw Error(`Couldn't construct launchable for ${e.applicationId}`);
        null == s && (s = d);
        let p = o[s];
        if (null == p) throw Error(`Couldn't construct launchable for ${e.applicationId}. No launch option.`);
        return (0, i.r)([E])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let { liveBuildId: n } = t;
                if (f && n !== A) return Promise.reject(Error("live build id changed"));
            })
            .then(() => I.A.runLaunchSetup(u, E))
            .then(() => {
                let e = (0, a.A)(c),
                    i = {
                        DISCORD_INSTANCE_ID: h.getId().toString(),
                        DISCORD_ACCESS_TOKEN: t ?? "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: r,
                        DISCORD_STORAGE_PATH: _.gkb.ROOT_STORAGE_PATH(e, l.default.getId()),
                    };
                return I.A.launch(u, E, p.name, i);
            });
    },
    removeShortcuts: (e) => ((0, f.isWindows)() ? S().then((t) => t.removeShortcuts?.(e) ?? !1) : Promise.resolve(!1)),
    createShortcuts(e, t, n, i, r) {
        if (null == r || !(0, f.isWindows)()) return Promise.resolve(!1);
        let a = `discord:///library/${i}/launch`,
            s = `${r}\\icon.ico`;
        return S().then((i) => i.createShortcuts?.(e, t, n, a, s) ?? !1);
    },
    launchGame: (e) => (o.A.isConnected(e) ? Promise.resolve() : C({ id: e }).then(R)),
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
