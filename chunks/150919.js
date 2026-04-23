"use strict";
n(321073);
var r = n(73153),
    i = n(626584),
    s = n(865116),
    a = n(608960),
    o = n(41237),
    l = n(279263),
    u = n(961350),
    c = n(317525),
    d = n(71393),
    _ = n(954571),
    f = n(728458),
    p = n(157016),
    h = n(548965),
    E = n(652215);
let m = new i.A("DispatcherBridge"),
    g = [l.A, d.A, c.A, a.A, o.A],
    A = {
        GUILD_MEMBER_ADD: (e) => ({ ...e, currentUserId: u.default.getId() }),
        CONNECTION_OPEN: (e) => ({ guilds: e.guilds, unavailableGuilds: e.unavailableGuilds }),
        CACHE_LOADED: (e) => ({ guilds: e.guilds }),
        CACHE_LOADED_LAZY: (e) => ({ guilds: e.guilds }),
        BACKGROUND_SYNC: (e) => ({ guilds: e.guilds }),
    };
class I {
    tokenToStore = new Map();
    disabledFromFatalError = !1;
    constructor(e) {
        if (0 === e.length) return;
        const t = p.V;
        if (null == t) return void m.info("Not initializing DispatcherBridge, because kvStoreApi is unavailable.");
        try {
            const n = [];
            for (const r of e) {
                const e = r.getName(),
                    i = r.connectWithLibdiscore(t);
                this.tokenToStore.set(i, r), n.push(`${e} => [token: ${i}, mode: ${r.getMode()}]`);
            }
            m.info(`Connected ${e.length} store(s), mapping: ${n.join(", ")}.`);
            const i = t.getRegisteredActionTypes();
            m.info(`Registering ${i.length} bridged action(s): ${i.join(", ")}.`);
            const a = (e) => {
                let n;
                if (this.disabledFromFatalError) return;
                let r = A[e.type],
                    i = performance.now();
                n = null != r ? JSON.stringify({ type: e.type, ...r(e) }) : JSON.stringify(e);
                let a = { kind: "json_stringify_action", durationMillis: performance.now() - i },
                    o = h.pd.shouldCollectMetrics(),
                    l = t.dispatchAction(n, o);
                if (!l.ok) return void this.handleFatalError(l.error, e.type);
                let u = performance.now() - i,
                    { metrics: c, storeResults: d } = l.value,
                    f = [];
                for (let t of d) null != t.error ? this.handleStoreError(t, e.type) : f.push(t);
                for (let t of f)
                    this.withStoreToken(t.storeToken, e.type, (e) => {
                        e.applyChanges(t.databaseChanges);
                    });
                for (let t of f)
                    this.withStoreToken(t.storeToken, e.type, (t) => {
                        t.doEmitChanges(e);
                    });
                if (null != c && o) {
                    let t = [a, ...c.timings];
                    if (s.Ay.get("libdiscore_verbose_telemetry_logging")) {
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
                            s = [
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
                        m.info(`Handling action ${e.type} took ${u}ms
${s}`);
                    }
                    _.default.track(E.HAw.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY, {
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
                Object.fromEntries(i.map((e) => [e, a])),
                () => {},
                r.A.Database,
            );
        } catch (e) {
            m.error("Failed to initialize the dispatcher bridge", e);
        }
    }
    handleFatalError(e, t) {
        let n = Error(e),
            r = this.hasAnyAuthoritativeStore();
        if (
            (m.error("Fatal dispatch error for action", t, "hasAuthoritativeStore:", r, n),
            f.A.captureException(n, {
                extra: { actionType: t, hasAuthoritativeStore: r },
                tags: { source: "libdiscore", errorKind: "fatal_dispatch" },
            }),
            r)
        )
            throw ((0, h.pX)(), n);
        for (let e of (m.warn("Disabling DispatcherBridge until restart"),
        (this.disabledFromFatalError = !0),
        this.tokenToStore.values()))
            e.disableDualReadValidation();
    }
    handleStoreError(e, t) {
        let n = this.tokenToStore.get(e.storeToken),
            r = n?.getName() ?? `unknown(token:${e.storeToken})`,
            i = n?.getMode(),
            s = Error(e.error ?? "unknown store error");
        if (
            (m.error("Store", r, "failed to handle action", t, "mode:", i, s),
            f.A.captureException(s, {
                extra: { actionType: t, storeName: r, storeMode: i },
                tags: { source: "libdiscore", errorKind: "store_dispatch" },
            }),
            "typescript-libdiscore-dual-read" === i)
        )
            m.warn(`Store: ${r} had unexpected error in Rust implementation, disabling moving forward`),
                n?.disableDualReadValidation();
        else if ("libdiscore" === i) throw ((0, h.pX)(), s);
        else throw Error(`unexpected storeMode '${i}' for store ${r}`);
    }
    withStoreToken(e, t, n) {
        let r = this.tokenToStore.get(e);
        null == r ? m.warn("When dispatching action", t, "we got a store token", e, "that is unknown") : n(r);
    }
    hasAnyAuthoritativeStore() {
        for (let e of this.tokenToStore.values()) if ("libdiscore" === e.getMode()) return !0;
        return !1;
    }
}
let T = new Set(["libdiscore", "typescript-libdiscore-dual-read"]);
new I(
    __OVERLAY__
        ? (m.verbose("Not enabling rust implementation because we're in the legacy overlay"), [])
        : g.filter((e) => T.has(e.getMode())),
);
