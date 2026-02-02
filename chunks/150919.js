n(321073), n(896048), n(457529), n(65821), n(446912);
var r = n(73153),
    i = n(626584),
    a = n(865116),
    o = n(279263),
    s = n(961350),
    l = n(954571),
    c = n(728458),
    u = n(157016),
    d = n(548965),
    f = n(652215);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = new i.A("DispatcherBridge"),
    E = [o.A],
    y = {
        GUILD_MEMBER_ADD: (e) =>
            m(_({}, e), {
                currentUserId: s.default.getId(),
            }),
        CONNECTION_OPEN: (e) => ({
            guilds: e.guilds,
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
class b {
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
    constructor(e) {
        if ((p(this, "tokenToStore", new Map()), 0 === e.length)) return;
        const t = u.V;
        if (null == t) return void g.info("Not initializing DispatcherBridge, because kvStoreApi is unavailable.");
        try {
            const n = [];
            for (const r of e) {
                const e = r.getName(),
                    i = r.connectWithLibdiscore(t);
                this.tokenToStore.set(i, r),
                    n.push("".concat(e, " => [token: ").concat(i, ", mode: ").concat(r.getMode(), "]"));
            }
            g.info("Connected ".concat(e.length, " store(s), mapping: ").concat(n.join(", "), "."));
            const i = t.getRegisteredActionTypes();
            g.info("Registering ".concat(i.length, " bridged action(s): ").concat(i.join(", "), "."));
            const o = (e) => {
                let n,
                    r = y[e.type],
                    i = performance.now();
                n =
                    null != r
                        ? JSON.stringify(
                              _(
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
                    s = d.pd.shouldCollectMetrics(),
                    u = t.dispatchAction(n, s);
                if (!u.ok) {
                    let n = Error(u.error),
                        r = t.findStoresThatCanHandleActionType(e.type),
                        i = this.filterAuthorativeStores(r).map((e) => e.getName());
                    if (
                        (g.error("Failed to dispatch action", e.type, "authorative stores", i, "error:", n),
                        c.A.captureException(n, {
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
                let p = performance.now() - i,
                    { metrics: h, changes: m } = u.value;
                for (let t of m)
                    this.withStoreToken(t.storeToken, e.type, (e) => {
                        e.applyChanges(t.databaseChanges);
                    });
                for (let t of m)
                    this.withStoreToken(t.storeToken, e.type, (t) => {
                        t.doEmitChanges(e);
                    });
                if (null != h && s) {
                    let t = [o, ...h.timings];
                    if (a.Ay.get("libdiscore_verbose_telemetry_logging")) {
                        let n = t
                                .map((e) => {
                                    let { kind: t, durationMillis: n } = e;
                                    return " - ".concat(t, ": ").concat(n, "ms");
                                })
                                .join("\n"),
                            r = h.mutations
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
                            i = h.memory
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
                        g.info("Handling action ".concat(e.type, " took ").concat(p, "ms\n").concat(a));
                    }
                    l.default.track(f.HAw.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY, {
                        action_type: e.type,
                        total_duration_millis: p,
                        timings: JSON.stringify(t),
                        mutations: JSON.stringify(h.mutations),
                        memory_usage: JSON.stringify(h.memory),
                    }),
                        d.pd.didEmit();
                }
            };
            r.h.register(
                "LibDiscoreDispatcherBridge",
                Object.fromEntries(i.map((e) => [e, o])),
                () => {},
                r.A.Database,
            );
        } catch (e) {
            g.error("Failed to initialize the dispatcher bridge", e);
        }
    }
}
let O = new Set(["libdiscore", "typescript-libdiscore-dual-read"]);
new b(
    (function (e) {
        return __OVERLAY__
            ? (g.verbose("Not enabling rust implementation because we're in the legacy overlay"), [])
            : e.filter((e) => O.has(e.getMode()));
    })(E),
);
