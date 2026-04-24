"use strict";
var i,
    r = n(840574);
n(308060);
var s = n(214958),
    a = n.n(s);
(window.platform = a()),
    null == window.ResizeObserver && (window.ResizeObserver = r.t),
    "object" != typeof globalThis && (window.globalThis = window),
    (Map.prototype.toJSON = function () {
        return Array.from(this);
    }),
    (Set.prototype.toJSON = function () {
        return Array.from(this);
    });
{
    class e {
        x;
        y;
        z;
        w;
        constructor(e = 0, t = 0, n = 0, i = 1) {
            (this.x = e), (this.y = t), (this.z = n), (this.w = i);
        }
        static fromPoint(t) {
            return new e(t.x, t.y, void 0 !== t.z ? t.z : 0, void 0 !== t.w ? t.w : 1);
        }
        matrixTransform(t) {
            return (t.is2D || t instanceof SVGMatrix) && 0 === this.z && 1 === this.w
                ? new e(this.x * t.a + this.y * t.c + t.e, this.x * t.b + this.y * t.d + t.f, 0, 1)
                : new e(
                      this.x * t.m11 + this.y * t.m21 + this.z * t.m31 + this.w * t.m41,
                      this.x * t.m12 + this.y * t.m22 + this.z * t.m32 + this.w * t.m42,
                      this.x * t.m13 + this.y * t.m23 + this.z * t.m33 + this.w * t.m43,
                      this.x * t.m14 + this.y * t.m24 + this.z * t.m34 + this.w * t.m44,
                  );
        }
        toJSON() {
            return { x: this.x, y: this.y, z: this.z, w: this.w };
        }
    }
    null == window.DOMPoint && (window.DOMPoint = e);
}
{
    class e {
        x;
        y;
        width;
        height;
        constructor(e = 0, t = 0, n = 0, i = 0) {
            (this.x = e), (this.y = t), (this.width = n), (this.height = i);
        }
        static fromRect(t) {
            return new e(t.x, t.y, t.width, t.height);
        }
        get top() {
            return this.y;
        }
        get left() {
            return this.x;
        }
        get right() {
            return this.x + this.width;
        }
        get bottom() {
            return this.y + this.height;
        }
        toJSON() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
                top: this.top,
                left: this.left,
                right: this.right,
                bottom: this.bottom,
            };
        }
    }
    null == window.DOMRect && (window.DOMRect = e);
}
null == window.TextEncoder && n(283346), n(890245);
var o = n(38405);
n(618714), n(547830), n(323874), n(14289), n(35956), n(321073), n(333405);
var l = n(636537),
    d = n(110259),
    _ = n(861638),
    u = n(183636),
    c = n(53943),
    E = n(652215),
    h = n(30076),
    m = n(209489),
    f = n(723702),
    g = n(998218),
    p = n(187207),
    A = n(472229);
let I = [
        "https://cdn.discordapp.com/bad-domains/updated_hashes.json",
        "https://cdn.discordapp.com/bad-domains/hashes.json",
    ],
    T = new p.n(),
    S = /\/api(\/v\d+)?\/science/;
(0, l.IA)({
    prepareRequest(e) {
        let { default: t } = n(495544),
            { default: i } = n(111162),
            { default: r } = n(773669),
            { default: s } = n(287809),
            { default: a } = n(954571),
            { isPlatformEmbedded: E } = n(723702);
        if ("/" === e.url[0]) {
            let n, o, c, h, m;
            (e.url = (0, l.TP)() + e.url),
                "Authorization" in e.header || "authorization" in e.header || e.set("Authorization", t.getToken()),
                (n = (0, _.Vc)()),
                (o = (0, d.getSuperProperties)()),
                (c = {}),
                (h = n?.uuid) !== o?.client_heartbeat_session_id && (c.client_heartbeat_session_id = h),
                (m = u.A.getState()) !== o?.client_app_state && (c.client_app_state = m),
                Object.keys(c).length > 0 && (0, d.extendSuperProperties)(c);
            let f = a.getSuperPropertiesBase64();
            null != f && e.set("X-Super-Properties", f);
            let p = t.getFingerprint();
            null != p && "" !== p && e.set("X-Fingerprint", p);
            let I = t.getInstallationForTracking();
            if ((null != I && "" !== I && e.set("X-Installation-ID", I), E)) {
                let t,
                    n = [];
                null != navigator && (n = [...navigator.languages] ?? []);
                let i =
                    ((t = 10),
                    n
                        .reduce(
                            (e, n) => (10 === t ? e.push(n) : e.push(`${n};q=0.${t}`), (t = Math.max(t - 1, 1)), e),
                            [],
                        )
                        .join(","));
                e.set("Accept-Language", i);
            }
            e.set("X-Discord-Locale", r.locale);
            let N = (0, A.A)();
            null != N && e.set("X-Discord-Timezone", N);
            let C = i.getDebugOptionsHeaderValue();
            if ((null != C && "" !== C && e.set("X-Debug-Options", C), i.isTracingRequests)) {
                let t = s.getCurrentUser(),
                    n = T.generate(t?.id ?? "0");
                e.set("x-client-trace-id", n);
                try {
                    let t = new URL(e.url).pathname;
                    if (
                        !(function (e) {
                            try {
                                let t = new URL(e).pathname;
                                return S.test(t);
                            } catch {
                                return S.test(e);
                            }
                        })(t)
                    ) {
                        let i,
                            r,
                            s =
                                ((i = new URLSearchParams()).append("query", `@http.x_client_trace_id:"${n}"`),
                                i.append("showAllSpans", "true"),
                                (r = g.A.toURLSafe(`traces?${i.toString()}`, "https://datadog.discord.tools/apm/")),
                                null == r ? null : r.toString());
                        null !== s && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, s);
                    }
                } catch (e) {
                    console.error("error while printing tracing log", e);
                }
            }
        }
        e.url,
            e.method,
            c.z8("Network", `Sending ${e.method} to ${e.url}`),
            e.on("response", (t) => {
                let n = null != t && t.status >= 400 ? t.text : null,
                    i = null == n ? "" : `and body: ${n}`;
                c.z8("Network", `Completed ${e.method} to ${e.url} with status: ${t?.status} ${i}`);
            }),
            e.on("error", (t, n) => {
                if (
                    (c.z8("Network", `Failed ${e.method} to ${e.url} with status ${t?.status} and body: ${n?.text}`),
                    null != t && "parse" in t && t.parse)
                ) {
                    let n = "[FILTERED]";
                    I.includes(e.url) && (n = e.xhr?.responseText?.slice(0, 1e3)),
                        o.A.addBreadcrumb({
                            category: "superagent",
                            message: "Failed to parse HTTP response.",
                            data: { method: e.method, url: e.url, responseText: n, status: t.status },
                        });
                }
            });
    },
    interceptResponse(e, t, i) {
        var r, s;
        return 400 === e.statusCode && e.body?.captcha_key
            ? (Promise.all([n.e("36037").then(n.bind(n, 165508)), Promise.resolve().then(n.bind(n, 888548))])
                  .then((t) => {
                      let [{ default: n }, { extractCaptchaPropsFromResponse: i }] = t;
                      return n.showCaptchaAsync(i(e.body));
                  })
                  .then((e) => {
                      let { captcha_key: n, captcha_rqtoken: i, captcha_session_id: r } = e,
                          s = { "X-Captcha-Key": n };
                      null != i && (s["X-Captcha-Rqtoken"] = i), null != r && (s["X-Captcha-Session-Id"] = r), t(s);
                  })
                  .catch(i),
              !0)
            : 401 === e.statusCode && e.body?.code === E.t02.MFA_REQUIRED && e.body?.mfa
              ? (Promise.all([n.e("90966"), n.e("60865")])
                    .then(n.bind(n, 522238))
                    .then((n) => {
                        let { openMFAModal: r } = n;
                        r(e.body.mfa, t, i);
                    })
                    .catch(i),
                !0)
              : (0, h.O)(e.statusCode, e.body?.code)
                ? (Promise.resolve()
                      .then(n.bind(n, 700241))
                      .then((e) => {
                          let { default: t } = e;
                          t();
                      }),
                  !1)
                : (((r = e.statusCode),
                  (s = e.body?.code),
                  403 === r &&
                      null != s &&
                      s >= E.t02.GUILD_LIMITED_ACCESS_DEFAULT &&
                      s <= E.t02.GUILD_LIMITED_ACCESS_MAX)
                      ? n
                            .e("52729")
                            .then(n.bind(n, 116960))
                            .then((t) => {
                                let { default: n } = t;
                                n(e.body?.guild_id);
                            })
                      : 403 === e.statusCode &&
                        e.body?.code === E.t02.RESTRICTED_HOURS_ACTIVE &&
                        Promise.resolve()
                            .then(n.bind(n, 580296))
                            .then((e) => {
                                let { openRestrictedHoursModal: t } = e;
                                t();
                            }),
                  !1);
    },
}),
    (0, l.Cu)(async (e) => {
        c.z8("Network", `Request to ${e} failed, will retry.`),
            m.A.isOnline() || (await m.A.awaitOnline(), c.z8("Network", `Network detected online, retrying ${e}`));
    });
var N = n(495544);
n(736056), n(930839);
var C = n(247775),
    R = n(143236),
    O = (((i = O || {}).VERTICAL = "vertical"), (i.HORIZONTAL = "horizontal"), i);
let y = { open: !1, orientation: null };
class v extends R.EventEmitter {
    constructor() {
        super(), setInterval(() => this.check(), 500);
    }
    get orientations() {
        return Object.values(O);
    }
    get state() {
        return y;
    }
    check() {
        let e =
                (function () {
                    try {
                        return window.outerWidth - window.innerWidth;
                    } catch (e) {
                        return 0;
                    }
                })() > 160,
            t =
                (function () {
                    try {
                        return window.outerHeight - window.innerHeight;
                    } catch (e) {
                        return 0;
                    }
                })() > 160,
            n = e ? "vertical" : "horizontal";
        if (!(t && e) && (e || t)) {
            let e = y.open;
            (y = { open: !0, orientation: n }), (e && y.orientation === n) || this.emit("changed", y);
        } else y.open && ((y.open = !1), this.emit("changed", y));
    }
}
var D = n(607399),
    L = n(855522);
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (null != L.A.Messages.SELF_XSS_HEADER)
        if (
            (console.log(
                `%c${L.A.Messages.SELF_XSS_HEADER}`,
                "color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;",
            ),
            console.log(`%c${L.A.Messages.SELF_XSS_LINE_1}`, "font-size: 16px;"),
            console.log(`%c${L.A.Messages.SELF_XSS_LINE_2}`, "font-size: 18px; font-weight: bold; color: red;"),
            e >= 4)
        ) {
            console.log(`%c${L.A.Messages.SELF_XSS_LINE_3}`, "font-size: 16px;");
            let e = L.A.Messages.SELF_XSS_LINE_4.format({
                url: `${location.protocol}${window.GLOBAL_ENV.MARKETING_ENDPOINT}/jobs`,
            });
            console.log(`%c${e}`, "font-size: 16px;");
        } else setTimeout(() => b(e + 1), 1e3);
}
var w = n(121894),
    P = n(17928),
    k = n(413323),
    M = n(187322),
    U = n(775602),
    x = n(627968);
n(64700);
var G = n(791332),
    V = n.n(G),
    F = n(349288),
    B = n(77729),
    H = n(502229),
    j = n(873298),
    W = n(97469),
    Y = n(363195),
    K = n(253932),
    z = n(617617),
    $ = n(954571),
    q = n(53298);
let X = q.O.NONE,
    Z = window.matchMedia("(prefers-color-scheme: dark)"),
    Q = window.matchMedia("(prefers-color-scheme: light)"),
    J = window.matchMedia("(inverted-colors: inverted)"),
    ee = window.matchMedia("(prefers-contrast: more)"),
    et = window.matchMedia("(forced-colors: active)");
function en(e, t) {
    t ? (X |= e) : (X &= ~e);
}
n(937982);
var ei = n(141931),
    er = n(506774),
    es = n(969341),
    ea = n(287809),
    eo = n(19575),
    el = n(77138);
let ed = window.DiscordNative,
    e_ = `${E.HAw.APP_NATIVE_CRASH}Storage`;
function eu(e, t) {
    let n = {
        did_crash: !0,
        electron_crash_reporter_did_crash: !0,
        child_process_crash_type: t.type?.toLowerCase() ?? null,
        child_process_crash_reason: t.reason ?? null,
        child_process_crash_exit_code: t.exitCode ?? null,
    };
    $.default.track(E.HAw.APP_NATIVE_CRASH, n);
}
async function ec() {
    var e, t;
    let n, i;
    if (__OVERLAY__) return;
    let r = ed?.processUtils?.getLastCrash;
    if (((0, f.isDesktop)() && eo.Ay.on("CRASH_REPORTER_NEW_CRASH", eu), null == r))
        return void console.log("AppCrashedFatalReport: getLastCrash not supported.");
    let s = await r(),
        { didCrashReporterSeeCrash: a, didCrashOrUncleanExit: o } =
            ((e = er.w.get(e_, {})),
            (t = s),
            (n = e?.lastId !== t?.id && t?.id != null),
            (i = t?.rendererCrashExitCode ?? null),
            { didCrashReporterSeeCrash: n, didCrashOrUncleanExit: n || (null != i && 0 !== i) }),
        l = (function (e, t, n) {
            function i(e) {
                return n?.storedInformation != null && 1 === n.storedInformation[e];
            }
            function r(e) {
                return n?.storedInformation == null || null == n.storedInformation[e] ? null : n.storedInformation[e];
            }
            let s = {
                    did_crash: t,
                    renderer_crash_reason: n?.rendererCrashReason ?? null,
                    renderer_crash_exit_code: n?.rendererCrashExitCode ?? null,
                    child_process_crash_type: null,
                    child_process_crash_reason: null,
                    child_process_crash_exit_code: null,
                    had_rtc_connection: i(ei.du.HasRTCConnection),
                    was_sending_video: i(ei.du.IsSendingVideo),
                    was_sending_stream: i(ei.du.IsSendingStream),
                    was_receiving_video: i(ei.du.IsReceivingVideo),
                    was_receiving_stream: i(ei.du.IsReceivingStream),
                    video_media_session_id: r(ei.du.VideoMediaSessionId),
                    stream_media_session_id: r(ei.du.StreamMediaSessionId),
                    intentional_crash_reason: r(ei.du.IntentionalCrashReason),
                    last_memory_usage_kb: n?.lastMemoryInformation?.memoryUsageKB ?? null,
                    last_used_js_heap_size_kb: n?.lastMemoryInformation?.usedJSHeapSizeKB ?? null,
                    last_memory_usage_uptime: n?.lastMemoryInformation?.uptimeSeconds ?? null,
                    highest_memory_usage_kb: n?.highestMemoryInformation?.memoryUsageKB ?? null,
                    highest_used_js_heap_size_kb: n?.highestMemoryInformation?.usedJSHeapSizeKB ?? null,
                    highest_memory_usage_uptime: n?.highestMemoryInformation?.uptimeSeconds ?? null,
                },
                a = n?.minidumpInformation;
            return {
                electron_crash_reporter_did_crash: e,
                minidump_exception_type: a?.exceptionString ?? null,
                minidump_exception_module_name: a?.exceptionModuleName ?? null,
                minidump_relative_crash_address: a?.relativeCrashAddress ?? null,
                minidump_exception_module_version: a?.exceptionModuleVersion ?? null,
                minidump_exception_module_code_id: a?.exceptionModuleCodeId ?? null,
                minidump_exception_thread_name: a?.exceptionThreadName ?? null,
                ...s,
            };
        })(a, o, s);
    $.default.track(E.HAw.APP_NATIVE_CRASH, l),
        er.w.set(e_, { lastId: s?.id }),
        o && setTimeout(async () => await eE(), 1e4);
}
async function eE() {
    if (ea.default.getCurrentUser()?.isStaff())
        try {
            await es.Ay.getMediaEngine().writeAudioDebugState(),
                await (0, el.a)(E.Umv.RTC),
                console.log("Successfully uploaded debug files");
        } catch (e) {
            console.log("Failed to upload debug files");
        }
}
var eh = n(626584),
    em = n(228366),
    ef = n(865116),
    eg = n(608960),
    ep = n(41237),
    eA = n(279263),
    eI = n(317525),
    eT = n(71393),
    eS = n(157016),
    eN = n(548965);
let eC = new eh.A("DispatcherBridge"),
    eR = [eA.A, eT.A, eI.A, eg.A, ep.A],
    eO = {
        GUILD_MEMBER_ADD: (e) => ({ ...e, currentUserId: N.default.getId() }),
        CONNECTION_OPEN: (e) => ({ guilds: e.guilds, unavailableGuilds: e.unavailableGuilds }),
        CACHE_LOADED: (e) => ({ guilds: e.guilds }),
        CACHE_LOADED_LAZY: (e) => ({ guilds: e.guilds }),
        BACKGROUND_SYNC: (e) => ({ guilds: e.guilds }),
    };
class ey {
    tokenToStore = new Map();
    disabledFromFatalError = !1;
    constructor(e) {
        if (0 === e.length) return;
        const t = eS.V;
        if (null == t) return void eC.info("Not initializing DispatcherBridge, because kvStoreApi is unavailable.");
        try {
            const n = [];
            for (const i of e) {
                const e = i.getName(),
                    r = i.connectWithLibdiscore(t);
                this.tokenToStore.set(r, i), n.push(`${e} => [token: ${r}, mode: ${i.getMode()}]`);
            }
            eC.info(`Connected ${e.length} store(s), mapping: ${n.join(", ")}.`);
            const i = t.getRegisteredActionTypes();
            eC.info(`Registering ${i.length} bridged action(s): ${i.join(", ")}.`);
            const r = (e) => {
                let n;
                if (this.disabledFromFatalError) return;
                let i = eO[e.type],
                    r = performance.now();
                n = null != i ? JSON.stringify({ type: e.type, ...i(e) }) : JSON.stringify(e);
                let s = { kind: "json_stringify_action", durationMillis: performance.now() - r },
                    a = eN.pd.shouldCollectMetrics(),
                    o = t.dispatchAction(n, a);
                if (!o.ok) return void this.handleFatalError(o.error, e.type);
                let l = performance.now() - r,
                    { metrics: d, storeResults: _ } = o.value,
                    u = [];
                for (let t of _) null != t.error ? this.handleStoreError(t, e.type) : u.push(t);
                for (let t of u)
                    this.withStoreToken(t.storeToken, e.type, (e) => {
                        e.applyChanges(t.databaseChanges);
                    });
                for (let t of u)
                    this.withStoreToken(t.storeToken, e.type, (t) => {
                        t.doEmitChanges(e);
                    });
                if (null != d && a) {
                    let t = [s, ...d.timings];
                    if (ef.Ay.get("libdiscore_verbose_telemetry_logging")) {
                        let n = t
                                .map((e) => {
                                    let { kind: t, durationMillis: n } = e;
                                    return ` - ${t}: ${n}ms`;
                                })
                                .join("\n"),
                            i = d.mutations
                                .map((e) => {
                                    let { recordType: t, metrics: n } = e,
                                        i = Object.entries(n)
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
${i}`;
                                })
                                .join("\n"),
                            r = d.memory
                                .map((e) => {
                                    let { recordType: t, statistics: n } = e,
                                        i = Object.entries(n)
                                            .map((e) => {
                                                let [t, n] = e;
                                                return ` - ${t}: ${JSON.stringify(n)}`;
                                            })
                                            .join("\n");
                                    return ` * Record Type: ${t}
${i}`;
                                })
                                .join("\n"),
                            s = [
                                ["Timings", n],
                                ["Mutations", i],
                                ["Memory Usage", r],
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
                        eC.info(`Handling action ${e.type} took ${l}ms
${s}`);
                    }
                    $.default.track(E.HAw.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY, {
                        action_type: e.type,
                        total_duration_millis: l,
                        timings: JSON.stringify(t),
                        mutations: JSON.stringify(d.mutations),
                        memory_usage: JSON.stringify(d.memory),
                    }),
                        eN.pd.didEmit();
                }
            };
            em.h.register(
                "LibDiscoreDispatcherBridge",
                Object.fromEntries(i.map((e) => [e, r])),
                () => {},
                em.A.Database,
            );
        } catch (e) {
            eC.error("Failed to initialize the dispatcher bridge", e);
        }
    }
    handleFatalError(e, t) {
        let n = Error(e),
            i = this.hasAnyAuthoritativeStore();
        if (
            (eC.error("Fatal dispatch error for action", t, "hasAuthoritativeStore:", i, n),
            o.A.captureException(n, {
                extra: { actionType: t, hasAuthoritativeStore: i },
                tags: { source: "libdiscore", errorKind: "fatal_dispatch" },
            }),
            i)
        )
            throw ((0, eN.pX)(), n);
        for (let e of (eC.warn("Disabling DispatcherBridge until restart"),
        (this.disabledFromFatalError = !0),
        this.tokenToStore.values()))
            e.disableDualReadValidation();
    }
    handleStoreError(e, t) {
        let n = this.tokenToStore.get(e.storeToken),
            i = n?.getName() ?? `unknown(token:${e.storeToken})`,
            r = n?.getMode(),
            s = Error(e.error ?? "unknown store error");
        if (
            (eC.error("Store", i, "failed to handle action", t, "mode:", r, s),
            o.A.captureException(s, {
                extra: { actionType: t, storeName: i, storeMode: r },
                tags: { source: "libdiscore", errorKind: "store_dispatch" },
            }),
            "typescript-libdiscore-dual-read" === r)
        )
            eC.warn(`Store: ${i} had unexpected error in Rust implementation, disabling moving forward`),
                n?.disableDualReadValidation();
        else if ("libdiscore" === r) throw ((0, eN.pX)(), s);
        else throw Error(`unexpected storeMode '${r}' for store ${i}`);
    }
    withStoreToken(e, t, n) {
        let i = this.tokenToStore.get(e);
        null == i ? eC.warn("When dispatching action", t, "we got a store token", e, "that is unknown") : n(i);
    }
    hasAnyAuthoritativeStore() {
        for (let e of this.tokenToStore.values()) if ("libdiscore" === e.getMode()) return !0;
        return !1;
    }
}
let ev = new Set(["libdiscore", "typescript-libdiscore-dual-read"]);
if (
    (new ey(
        __OVERLAY__
            ? (eC.verbose("Not enabling rust implementation because we're in the legacy overlay"), [])
            : eR.filter((e) => ev.has(e.getMode())),
    ),
    (n.p = (window.GLOBAL_ENV.STATIC_ENDPOINT ?? "") + window.GLOBAL_ENV.PUBLIC_PATH),
    !0 === window.__METICULOUS_ENABLED &&
        n
            .e("3321")
            .then(n.bind(n, 342400))
            .then((e) => e.init()),
    window.Meticulous?.isRunningAsTest === !0)
) {
    let { initWasmTracking: e } = n(474570);
    e(),
        n
            .e("60649")
            .then(n.bind(n, 38896))
            .then((e) => e.init());
}
(0, k.Zs)(function (e) {
    return (
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, t, n) {
                return (0, x.jsx)("p", { children: t(e.content, n) }, n.key);
            },
        }),
        (e.link = {
            ...e.link,
            react: function (e, t, n) {
                let i = {};
                if (null != e.context) {
                    let t = e.context[e.target];
                    t && t.onClick ? ((i.onClick = t.onClick), (i.onContextMenu = t.onContextMenu)) : (i.onClick = t);
                }
                return (
                    null == i.onClick && (i.href = V().sanitizeUrl(e.target)),
                    (0, x.jsx)(F.Anchor, { title: e.title, ...i, children: t(e.content, n) }, n.key)
                );
            },
        }),
        e
    );
}),
    (function (e, t) {
        if (null != t && "0.0.0" === t.app.getVersion()) return;
        let n = new v();
        if (null != t)
            if (null != t.window.setDevtoolsCallbacks)
                t.window.setDevtoolsCallbacks(
                    () => {
                        e.hideToken(), b();
                    },
                    () => {
                        e.showToken();
                    },
                );
            else {
                let n = t.window.webContents;
                n.removeAllListeners("devtools-opened"),
                    n.on("devtools-opened", () => {
                        e.hideToken(), b();
                    }),
                    n.on("devtools-closed", e.showToken);
            }
        else
            D.Fr ||
                D.v1 ||
                n.on("changed", (t) => {
                    let { open: n } = t;
                    n ? (e.hideToken(), b()) : e.showToken();
                });
        window.addEventListener("beforeunload", (t) => {
            t.isTrusted && e.showToken();
        });
    })(C, B.A),
    P.Ay.Emitter.injectBatchEmitChanges(w.r),
    (P.Ay.PersistedStore.disableWrites = __OVERLAY__),
    P.Ay.initialize(),
    n.e("94459").then(n.t.bind(n, 868086, 19));
let eD = window.GLOBAL_ENV.RELEASE_CHANNEL;
new eh.A().log(
    `[BUILD INFO] Release Channel: ${eD}, Build Number: 534558, Version Hash: 3680e364ce15ba327c79f75cc0360e50254745b6`,
),
    o.A.setTags({ appContext: E.QCW }),
    H.A.initBasic(),
    {
        init() {
            U.A.addChangeListener(this.handleAccessibilityStoreChanged),
                Y.A.addChangeListener(this.handleAccessibilityStoreChanged),
                z.A.addChangeListener(this.handleUiDensityChanged),
                Z.addListener(this.handlePrefersColorSchemeDarkChanged),
                this.handlePrefersColorSchemeDarkChanged(Z),
                Q.addListener(this.handlePrefersColorSchemeLightChanged),
                this.handlePrefersColorSchemeLightChanged(Q),
                ee.addListener(this.handlePrefersMoreContrastChanged),
                this.handlePrefersMoreContrastChanged(ee),
                et.addListener(this.handlePrefersForcedColorsChanged),
                this.handlePrefersForcedColorsChanged(et),
                J.addListener(this.handleInvertColorsChanged),
                this.handleInvertColorsChanged(J),
                $.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
        },
        getActiveFeatures: () => X,
        handlePrefersColorSchemeDarkChanged(e) {
            en(q.O.PREFERS_COLOR_SCHEME_DARK, e.matches);
        },
        handlePrefersColorSchemeLightChanged(e) {
            en(q.O.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
        },
        handlePrefersMoreContrastChanged(e) {
            en(q.O.HIGH_CONTRAST, e.matches);
        },
        handlePrefersForcedColorsChanged(e) {
            en(q.O.FORCED_COLORS, e.matches);
        },
        handleInvertColorsChanged(e) {
            en(q.O.INVERT_COLORS, e.matches);
        },
        handleUiDensityChanged() {
            let e = K.Xi.getSetting();
            en(q.O.UI_DENSITY_COMPACT, e === j.NS.COMPACT), en(q.O.UI_DENSITY_SPACIOUS, e === j.NS.COZY);
        },
        handleAccessibilityStoreChanged() {
            en(q.O.REDUCED_MOTION, U.A.useReducedMotion),
                en(q.O.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== U.A.rawPrefersReducedMotion),
                en(q.O.FORCED_COLORS_FROM_USER_SETTINGS, U.A.syncForcedColors),
                en(q.O.CHAT_FONT_SCALE_DECREASED, U.A.isFontScaledDown),
                en(q.O.CHAT_FONT_SCALE_INCREASED, U.A.isFontScaledUp),
                en(q.O.ZOOM_LEVEL_DECREASED, U.A.isZoomedOut),
                en(q.O.ZOOM_LEVEL_INCREASED, U.A.isZoomedIn),
                en(q.O.MESSAGE_GROUP_SPACING_DECREASED, U.A.isMessageGroupSpacingDecreased),
                en(q.O.MESSAGE_GROUP_SPACING_INCREASED, U.A.isMessageGroupSpacingIncreased),
                en(q.O.DARK_SIDEBAR, (0, W.$i)()),
                en(q.O.SATURATION_LEVEL_DECREASED, U.A.saturation < 1),
                en(q.O.ROLE_STYLE_ADJUSTED, "username" !== U.A.roleStyle),
                en(q.O.SYNC_PROFILE_THEME_WITH_USER_THEME, U.A.syncProfileThemeWithUserTheme),
                en(q.O.CONTRAST_LEVEL_INCREASED, U.A.isHighContrastModeEnabled);
        },
    }.init(),
    {
        init() {
            U.A.addChangeListener(() => {
                U.A.keyboardModeEnabled
                    ? (M.oP.setRingsEnabled(!0), M.oP.enableAnimationTracking())
                    : (M.oP.setRingsEnabled(!1), M.oP.disableAnimationTracking());
            });
        },
    }.init(),
    ec();
