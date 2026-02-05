"use strict";
n(321073);
var r = n(73153),
    i = n(626584),
    a = n(865116),
    s = n(608960),
    o = n(41237),
    l = n(279263),
    u = n(961350),
    c = n(317525),
    d = n(71393),
    _ = n(954571),
    f = n(728458),
    p = n(157016),
    h = n(548965),
    m = n(652215);
let g = new i.A("DispatcherBridge"),
    E = [l.A, d.A, c.A, s.A, o.A],
    A = {
        GUILD_MEMBER_ADD: (e) => ({ ...e, currentUserId: u.default.getId() }),
        CONNECTION_OPEN: (e) => ({ guilds: e.guilds, unavailableGuilds: e.unavailableGuilds }),
        CACHE_LOADED: (e) => ({ guilds: e.guilds }),
        CACHE_LOADED_LAZY: (e) => ({ guilds: e.guilds }),
        BACKGROUND_SYNC: (e) => ({ guilds: e.guilds }),
    };
class I {
    tokenToStore = new Map();
    constructor(e) {
        if (0 === e.length) return;
        const t = p.V;
        if (null == t) return void g.info("Not initializing DispatcherBridge, because kvStoreApi is unavailable.");
        try {
            const n = [];
            for (const r of e) {
                const e = r.getName(),
                    i = r.connectWithLibdiscore(t);
                this.tokenToStore.set(i, r), n.push(`${e} => [token: ${i}, mode: ${r.getMode()}]`);
            }
            g.info(`Connected ${e.length} store(s), mapping: ${n.join(", ")}.`);
            const i = t.getRegisteredActionTypes();
            g.info(`Registering ${i.length} bridged action(s): ${i.join(", ")}.`);
            const s = (e) => {
                let n,
                    r = A[e.type],
                    i = performance.now();
                n = null != r ? JSON.stringify({ type: e.type, ...r(e) }) : JSON.stringify(e);
                let s = { kind: "json_stringify_action", durationMillis: performance.now() - i },
                    o = h.pd.shouldCollectMetrics(),
                    l = t.dispatchAction(n, o);
                if (!l.ok) {
                    let n = Error(l.error),
                        r = t.findStoresThatCanHandleActionType(e.type),
                        i = this.filterAuthorativeStores(r).map((e) => e.getName());
                    if (
                        (g.error("Failed to dispatch action", e.type, "authorative stores", i, "error:", n),
                        f.A.captureException(n, {
                            extra: { authorativeStores: i.join(", ") },
                            tags: { source: "libdiscore" },
                        }),
                        i.length > 0)
                    )
                        throw n;
                    return;
                }
                let u = performance.now() - i,
                    { metrics: c, changes: d } = l.value;
                for (let t of d)
                    this.withStoreToken(t.storeToken, e.type, (e) => {
                        e.applyChanges(t.databaseChanges);
                    });
                for (let t of d)
                    this.withStoreToken(t.storeToken, e.type, (t) => {
                        t.doEmitChanges(e);
                    });
                if (null != c && o) {
                    let t = [s, ...c.timings];
                    if (a.Ay.get("libdiscore_verbose_telemetry_logging")) {
                        let n = t
                                .map((e) => {
                                    let { kind: t, durationMillis: n } = e;
                                    return ` - ${t}: ${n}ms`;
                                })
                                .join("\n"),
                            r = c.mutations
                                .map((e) => {
                                    let { recordType: t, metrics: n } = e,
                                        r = Object.entries(n)
                                            .filter((e) => {
                                                let [t, n] = e;
                                                return 0 !== n;
                                            })
                                            .map((e) => {
                                                let [t, n] = e;
                                                return ` - ${t}: ${n}`;
                                            })
                                            .join("\n");
                                    return ` * Record Type: ${t}
${r}`;
                                })
                                .join("\n"),
                            i = c.memory
                                .map((e) => {
                                    let { recordType: t, statistics: n } = e,
                                        r = Object.entries(n)
                                            .map((e) => {
                                                let [t, n] = e;
                                                return ` - ${t}: ${JSON.stringify(n)}`;
                                            })
                                            .join("\n");
                                    return ` * Record Type: ${t}
${r}`;
                                })
                                .join("\n"),
                            a = [
                                ["Timings", n],
                                ["Mutations", r],
                                ["Memory Usage", i],
                            ]
                                .filter((e) => {
                                    let [, t] = e;
                                    return t.length > 0;
                                })
                                .map((e) => {
                                    let [t, n] = e;
                                    return `${t}:
${n}`;
                                })
                                .join("\n\n");
                        g.info(`Handling action ${e.type} took ${u}ms
${a}`);
                    }
                    _.default.track(m.HAw.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY, {
                        action_type: e.type,
                        total_duration_millis: u,
                        timings: JSON.stringify(t),
                        mutations: JSON.stringify(c.mutations),
                        memory_usage: JSON.stringify(c.memory),
                    }),
                        h.pd.didEmit();
                }
            };
            r.h.register(
                "LibDiscoreDispatcherBridge",
                Object.fromEntries(i.map((e) => [e, s])),
                () => {},
                r.A.Database,
            );
        } catch (e) {
            g.error("Failed to initialize the dispatcher bridge", e);
        }
    }
    withStoreToken(e, t, n) {
        let r = this.tokenToStore.get(e);
        null == r ? g.warn("When dispatching action", t, "we got a store token", e, "that is unknown") : n(r);
    }
    filterAuthorativeStores(e) {
        let t = [];
        for (let n of e) {
            let e = this.tokenToStore.get(n);
            null != e && "libdiscore" === e.getMode() && t.push(e);
        }
        return t;
    }
}
let T = new Set(["libdiscore", "typescript-libdiscore-dual-read"]);
new I(
    (function (e) {
        return __OVERLAY__
            ? (g.verbose("Not enabling rust implementation because we're in the legacy overlay"), [])
            : e.filter((e) => T.has(e.getMode()));
    })(E),
);
