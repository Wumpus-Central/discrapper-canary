n.d(t, { A: () => y });
var i = n(712963),
    r = n(626584),
    a = n(216132),
    s = n(606076),
    l = n(289919),
    o = n(280450),
    d = n(134861),
    c = n(540999),
    u = n(17928),
    _ = n(73153),
    E = n(652215);
let A = 0;
class h extends u.Ay.Store {
    static displayName = "InstanceIdStore";
    getId() {
        return A;
    }
}
let f = new h(_.h, {
    RPC_SERVER_READY: function (e) {
        let { port: t } = e;
        A = E.xEi - t;
    },
});
var I = n(962052),
    p = n(723702),
    T = n(998218),
    m = n(19575);
let g = new r.A("Games"),
    S = null;
function N() {
    return null != S
        ? Promise.resolve(S)
        : (0, p.isDesktop)()
          ? m.Ay.ensureModule("discord_game_utils").then(() => {
                let e = m.Ay.getGameUtils();
                return null != e && null != e.findLaunchable
                    ? ((S = e), e)
                    : Promise.reject(Error("game utils not found"));
            })
          : Promise.reject(Error("not desktop client"));
}
function C(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, p.getPlatformName)()).map((e) => e.name),
        },
        n = e.aliases.map((e) => ({ ...t, name: e }));
    return [t, ...n];
}
async function O(e) {
    if (
        (Array.isArray(e) || (e = [e]),
        c.A.isDeveloper ||
            (e = e.filter(
                (e) =>
                    null == e.thirdPartySkus ||
                    -1 ===
                        e.thirdPartySkus.findIndex((e) => {
                            let { distributor: t } = e;
                            return t === E.d3x.BATTLENET;
                        }),
            )),
        0 === e.length)
    )
        throw Error("No remaining launchable queries");
    let t = await N();
    for (let n of e) {
        let e = await new Promise((e) => t.findLaunchable(n, e));
        if (null != e) return e;
    }
    throw Error("could not find launchable");
}
function R(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    e()
        ? t()
        : setTimeout(() => {
              250 * i <= 12e4 ? R(e, t, n, i + 1) : n();
          }, 250);
}
function L(e) {
    return (
        g.info("launch", e),
        new Promise((t, n) => {
            null == T.A.safeParseWithQuery(e.launchTarget)
                ? n(Error(`Failed to parse launch target. ${e.launchTarget}`))
                : (window.open(e.launchTarget), t([]));
        })
    );
}
let y = {
    waitSubscribed: (e, t) => new Promise((n, i) => R(() => l.A.isSubscribed(e, t), n, i)),
    waitFrameSubscribed: (e, t) => {
        var n;
        return ((n = l.A), n.waitForSubscription(t, (t) => (0, a.A)(t.socket)?.id === e, 12e4));
    },
    waitParentConnected: (e) => new Promise((t, n) => R(() => d.A.isChildConnected(e), t, n)),
    waitConnected(e) {
        return new Promise(R.bind(this, () => d.A.isConnected(e)));
    },
    waitParentSubscribed: (e, t) => new Promise((n, i) => R(() => l.A.isChildSubscribed(e, t), n, i)),
    isLaunchable: (e) =>
        O(C(e))
            .then((e) => null != e)
            .catch(() => !1),
    isGameLaunchable: (e) =>
        O({ id: e })
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => O(C(e)).then(L),
    launchDispatchApplication(e, t, n, r, a) {
        let {
            launchOptions: l,
            defaultLaunchOptionId: d,
            installPath: c,
            applicationId: u,
            branchId: _,
            buildId: A,
            shouldPatch: h,
        } = e;
        if (null == l || null == d || null == c) throw Error(`Couldn't construct launchable for ${e.applicationId}`);
        null == a && (a = d);
        let p = l[a];
        if (null == p) throw Error(`Couldn't construct launchable for ${e.applicationId}. No launch option.`);
        return (0, i.r)([_])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let { liveBuildId: n } = t;
                if (h && n !== A) return Promise.reject(Error("live build id changed"));
            })
            .then(() => I.A.runLaunchSetup(u, _))
            .then(() => {
                let e = (0, s.A)(c),
                    i = {
                        DISCORD_INSTANCE_ID: f.getId().toString(),
                        DISCORD_ACCESS_TOKEN: t ?? "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: r,
                        DISCORD_STORAGE_PATH: E.gkb.ROOT_STORAGE_PATH(e, o.default.getId()),
                    };
                return I.A.launch(u, _, p.name, i);
            });
    },
    removeShortcuts: (e) => ((0, p.isWindows)() ? N().then((t) => t.removeShortcuts?.(e) ?? !1) : Promise.resolve(!1)),
    createShortcuts(e, t, n, i, r) {
        if (null == r || !(0, p.isWindows)()) return Promise.resolve(!1);
        let a = `discord:///library/${i}/launch`,
            s = `${r}\\icon.ico`;
        return N().then((i) => i.createShortcuts?.(e, t, n, a, s) ?? !1);
    },
    launchGame: (e) => (d.A.isConnected(e) ? Promise.resolve() : O({ id: e }).then(L)),
    isProtocolRegistered: (e) =>
        N()
            .then((t) => t.isProtocolSchemeRegistered?.(e) ?? !1)
            .catch(() => !1),
    setRecentGames(e) {
        N()
            .then((t) => t.setRecentGames?.(e))
            .catch(() => {});
    },
};
