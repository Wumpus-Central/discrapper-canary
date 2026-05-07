"use strict";
n.d(t, { A: () => O });
var i = n(712963),
    r = n(626584),
    s = n(606076),
    a = n(289919),
    o = n(495544),
    l = n(134861),
    u = n(540999),
    c = n(17928),
    d = n(228366),
    _ = n(652215);
let f = 0;
class h extends c.Ay.Store {
    static displayName = "InstanceIdStore";
    getId() {
        return f;
    }
}
let p = new h(d.h, {
    RPC_SERVER_READY: function (e) {
        let { port: t } = e;
        f = _.xEi - t;
    },
});
var E = n(962052),
    m = n(723702),
    g = n(998218),
    A = n(19575);
let I = new r.A("Games"),
    T = null;
function S() {
    return null != T
        ? Promise.resolve(T)
        : (0, m.isDesktop)()
          ? A.Ay.ensureModule("discord_game_utils").then(() => {
                let e = A.Ay.getGameUtils();
                return null != e && null != e.findLaunchable
                    ? ((T = e), e)
                    : Promise.reject(Error("game utils not found"));
            })
          : Promise.reject(Error("not desktop client"));
}
function N(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, m.getPlatformName)()).map((e) => e.name),
        },
        n = e.aliases.map((e) => ({ ...t, name: e }));
    return [t, ...n];
}
async function y(e) {
    if (
        (Array.isArray(e) || (e = [e]),
        u.A.isDeveloper ||
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
function C(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    e()
        ? t()
        : setTimeout(() => {
              250 * i <= 12e4 ? C(e, t, n, i + 1) : n();
          }, 250);
}
function v(e) {
    return (
        I.info("launch", e),
        new Promise((t, n) => {
            null == g.A.safeParseWithQuery(e.launchTarget)
                ? n(Error(`Failed to parse launch target. ${e.launchTarget}`))
                : (window.open(e.launchTarget), t([]));
        })
    );
}
let O = {
    waitSubscribed: (e, t) => new Promise((n, i) => C(() => a.A.isSubscribed(e, t), n, i)),
    waitParentConnected: (e) => new Promise((t, n) => C(() => l.A.isChildConnected(e), t, n)),
    waitConnected(e) {
        return new Promise(C.bind(this, () => l.A.isConnected(e)));
    },
    waitParentSubscribed: (e, t) => new Promise((n, i) => C(() => a.A.isChildSubscribed(e, t), n, i)),
    isLaunchable: (e) =>
        y(N(e))
            .then((e) => null != e)
            .catch(() => !1),
    isGameLaunchable: (e) =>
        y({ id: e })
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => y(N(e)).then(v),
    launchDispatchApplication(e, t, n, r, a) {
        let {
            launchOptions: l,
            defaultLaunchOptionId: u,
            installPath: c,
            applicationId: d,
            branchId: f,
            buildId: h,
            shouldPatch: m,
        } = e;
        if (null == l || null == u || null == c) throw Error(`Couldn't construct launchable for ${e.applicationId}`);
        null == a && (a = u);
        let g = l[a];
        if (null == g) throw Error(`Couldn't construct launchable for ${e.applicationId}. No launch option.`);
        return (0, i.r)([f])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let { liveBuildId: n } = t;
                if (m && n !== h) return Promise.reject(Error("live build id changed"));
            })
            .then(() => E.A.runLaunchSetup(d, f))
            .then(() => {
                let e = (0, s.A)(c),
                    i = {
                        DISCORD_INSTANCE_ID: p.getId().toString(),
                        DISCORD_ACCESS_TOKEN: t ?? "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: r,
                        DISCORD_STORAGE_PATH: _.gkb.ROOT_STORAGE_PATH(e, o.default.getId()),
                    };
                return E.A.launch(d, f, g.name, i);
            });
    },
    removeShortcuts: (e) => ((0, m.isWindows)() ? S().then((t) => t.removeShortcuts?.(e) ?? !1) : Promise.resolve(!1)),
    createShortcuts(e, t, n, i, r) {
        if (null == r || !(0, m.isWindows)()) return Promise.resolve(!1);
        let s = `discord:///library/${i}/launch`,
            a = `${r}\\icon.ico`;
        return S().then((i) => i.createShortcuts?.(e, t, n, s, a) ?? !1);
    },
    launchGame: (e) => (l.A.isConnected(e) ? Promise.resolve() : y({ id: e }).then(v)),
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
