n(321073), n(896048), n(457529), n(65821), n(446912);
var r = n(73153),
    i = n(626584),
    a = n(865116),
    o = n(608960),
    s = n(41237),
    l = n(279263),
    c = n(961350),
    u = n(317525),
    d = n(71393),
    f = n(954571),
    p = n(728458),
    _ = n(157016),
    h = n(548965),
    m = n(652215);

function g(e, t, n) {
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

function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = new i.A("DispatcherBridge"),
    v = [l.A, d.A, u.A, o.A, s.A],
    A = {
        GUILD_MEMBER_ADD: (e) =>
            b(E({}, e), {
                currentUserId: c.default.getId(),
            }),
        CONNECTION_OPEN: (e) => ({
            guilds: e.guilds,
            unavailableGuilds: e.unavailableGuilds,
        }),
        CACHE_LOADED: (e) => ({
            guilds: e.guilds,
        }),
        CACHE_LOADED_LAZY: (e) => ({
            guilds: e.guilds,
        }),
        BACKGROUND_SYNC: (e) => ({
            guilds: e.guilds,
        }),
    };
class I {
    withStoreToken(e, t, n) {
        let r = this.tokenToStore.get(e);
        null == r ? O.warn("When dispatching action", t, "we got a store token", e, "that is unknown") : n(r);
    }
    filterAuthorativeStores(e) {
        let t = [];
        for (let n of e) {
            let e = this.tokenToStore.get(n);
            null != e && "libdiscore" === e.getMode() && t.push(e);
        }
        return t;
    }
    constructor(e) {
        if ((g(this, "tokenToStore", new Map()), 0 === e.length)) return;
        const t = _.V;
        if (null == t) return void O.info("Not initializing DispatcherBridge, because kvStoreApi is unavailable.");
        try {
            const n = [];
            for (const r of e) {
                const e = r.getName(),
                    i = r.connectWithLibdiscore(t);
                this.tokenToStore.set(i, r),
                    n.push("".concat(e, " => [token: ").concat(i, ", mode: ").concat(r.getMode(), "]"));
            }
            O.info("Connected ".concat(e.length, " store(s), mapping: ").concat(n.join(", "), "."));
            const i = t.getRegisteredActionTypes();
            O.info("Registering ".concat(i.length, " bridged action(s): ").concat(i.join(", "), "."));
            const o = (e) => {
                let n,
                    r = A[e.type],
                    i = performance.now();
                n =
                    null != r
                        ? JSON.stringify(
                              E(
                                  {
                                      type: e.type,
                                  },
                                  r(e),
                              ),
                          )
                        : JSON.stringify(e);
                let o = {
                        kind: "json_stringify_action",
                        durationMillis: performance.now() - i,
                    },
                    s = h.pd.shouldCollectMetrics(),
                    l = t.dispatchAction(n, s);
                if (!l.ok) {
                    let n = Error(l.error),
                        r = t.findStoresThatCanHandleActionType(e.type),
                        i = this.filterAuthorativeStores(r).map((e) => e.getName());
                    if (
                        (O.error("Failed to dispatch action", e.type, "authorative stores", i, "error:", n),
                        p.A.captureException(n, {
                            extra: {
                                authorativeStores: i.join(", "),
                            },
                            tags: {
                                source: "libdiscore",
                            },
                        }),
                        i.length > 0)
                    )
                        throw n;
                    return;
                }
                let c = performance.now() - i,
                    { metrics: u, changes: d } = l.value;
                for (let t of d)
                    this.withStoreToken(t.storeToken, e.type, (e) => {
                        e.applyChanges(t.databaseChanges);
                    });
                for (let t of d)
                    this.withStoreToken(t.storeToken, e.type, (t) => {
                        t.doEmitChanges(e);
                    });
                if (null != u && s) {
                    let t = [o, ...u.timings];
                    if (a.Ay.get("libdiscore_verbose_telemetry_logging")) {
                        let n = t
                                .map((e) => {
                                    let { kind: t, durationMillis: n } = e;
                                    return " - ".concat(t, ": ").concat(n, "ms");
                                })
                                .join("\n"),
                            r = u.mutations
                                .map((e) => {
                                    let { recordType: t, metrics: n } = e,
                                        r = Object.entries(n)
                                            .filter((e) => {
                                                let [t, n] = e;
                                                return 0 !== n;
                                            })
                                            .map((e) => {
                                                let [t, n] = e;
                                                return " - ".concat(t, ": ").concat(n);
                                            })
                                            .join("\n");
                                    return " * Record Type: ".concat(t, "\n").concat(r);
                                })
                                .join("\n"),
                            i = u.memory
                                .map((e) => {
                                    let { recordType: t, statistics: n } = e,
                                        r = Object.entries(n)
                                            .map((e) => {
                                                let [t, n] = e;
                                                return " - ".concat(t, ": ").concat(JSON.stringify(n));
                                            })
                                            .join("\n");
                                    return " * Record Type: ".concat(t, "\n").concat(r);
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
                                    return "".concat(t, ":\n").concat(n);
                                })
                                .join("\n\n");
                        O.info("Handling action ".concat(e.type, " took ").concat(c, "ms\n").concat(a));
                    }
                    f.default.track(m.HAw.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY, {
                        action_type: e.type,
                        total_duration_millis: c,
                        timings: JSON.stringify(t),
                        mutations: JSON.stringify(u.mutations),
                        memory_usage: JSON.stringify(u.memory),
                    }),
                        h.pd.didEmit();
                }
            };
            r.h.register(
                "LibDiscoreDispatcherBridge",
                Object.fromEntries(i.map((e) => [e, o])),
                () => {},
                r.A.Database,
            );
        } catch (e) {
            O.error("Failed to initialize the dispatcher bridge", e);
        }
    }
}
let S = new Set(["libdiscore", "typescript-libdiscore-dual-read"]);
new I(
    (function (e) {
        return __OVERLAY__
            ? (O.verbose("Not enabling rust implementation because we're in the legacy overlay"), [])
            : e.filter((e) => S.has(e.getMode()));
    })(v),
);
