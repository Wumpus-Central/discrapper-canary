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
    _ = n(110259),
    d = n(861638),
    u = n(183636),
    c = n(53943),
    E = n(652215),
    h = n(954571);
let m = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-http-request-sample",
    defaultConfig: { sampleRate: 0 },
    variations: { 1: { sampleRate: 1e-4 } },
});
var f = n(30076),
    g = n(209489),
    I = n(723702),
    A = n(998218),
    p = n(187207),
    T = n(472229);
let S = [
        "https://cdn.discordapp.com/bad-domains/updated_hashes.json",
        "https://cdn.discordapp.com/bad-domains/hashes.json",
    ],
    N = new p.n(),
    O = /\/api(\/v\d+)?\/science/;
function R(e) {
    try {
        let t = new URL(e).pathname;
        return O.test(t);
    } catch {
        return O.test(e);
    }
}
(0, l.IA)({
    prepareRequest(e) {
        let { default: t } = n(495544),
            { default: i } = n(111162),
            { default: r } = n(773669),
            { default: s } = n(287809),
            { default: a } = n(954571),
            { isPlatformEmbedded: f } = n(723702),
            g = performance.now();
        if ("/" === e.url[0]) {
            let n, o, c, E, h;
            (e.url = (0, l.TP)() + e.url),
                "Authorization" in e.header || "authorization" in e.header || e.set("Authorization", t.getToken()),
                (n = (0, d.Vc)()),
                (o = (0, _.getSuperProperties)()),
                (c = {}),
                (E = n?.uuid) !== o?.client_heartbeat_session_id && (c.client_heartbeat_session_id = E),
                (h = u.A.getState()) !== o?.client_app_state && (c.client_app_state = h),
                Object.keys(c).length > 0 && (0, _.extendSuperProperties)(c);
            let m = a.getSuperPropertiesBase64();
            null != m && e.set("X-Super-Properties", m);
            let g = t.getFingerprint();
            null != g && "" !== g && e.set("X-Fingerprint", g);
            let I = t.getInstallationForTracking();
            if ((null != I && "" !== I && e.set("X-Installation-ID", I), f)) {
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
            let p = (0, T.A)();
            null != p && e.set("X-Discord-Timezone", p);
            let S = i.getDebugOptionsHeaderValue();
            if ((null != S && "" !== S && e.set("X-Debug-Options", S), i.isTracingRequests)) {
                let t = s.getCurrentUser(),
                    n = N.generate(t?.id ?? "0");
                e.set("x-client-trace-id", n);
                try {
                    let t = new URL(e.url).pathname;
                    if (!R(t)) {
                        let i,
                            r,
                            s =
                                ((i = new URLSearchParams()).append("query", `@http.x_client_trace_id:"${n}"`),
                                i.append("showAllSpans", "true"),
                                (r = A.A.toURLSafe(`traces?${i.toString()}`, "https://datadog.discord.tools/apm/")),
                                null == r ? null : r.toString());
                        null !== s && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, t, s);
                    }
                } catch (e) {
                    console.error("error while printing tracing log", e);
                }
            }
        }
        let I = !R(e.url);
        function p(t) {
            if (I) {
                var n, i;
                let r;
                (r = {
                    ...(n = {
                        url: e.url,
                        method: e.method,
                        status_code: t?.status,
                        duration_ms: Math.round(performance.now() - g),
                    }),
                    url: null == (i = n.url) ? i : i.split(/[?#]/)[0].replace(/\d+/g, "#"),
                }),
                    Math.random() <
                        (function () {
                            let { sampleRate: e } = m.getConfig({ location: "track_http_request" });
                            return e;
                        })() && h.default.track(E.HAw.HTTP_REQUEST, { ...r, source: "sample" }),
                    (I = !1);
            }
        }
        c.z8("Network", `Sending ${e.method} to ${e.url}`),
            e.on("response", (t) => {
                let n = null != t && t.status >= 400 ? t.text : null,
                    i = null == n ? "" : `and body: ${n}`;
                c.z8("Network", `Completed ${e.method} to ${e.url} with status: ${t?.status} ${i}`), p(t);
            }),
            e.on("error", (t, n) => {
                if (
                    (c.z8("Network", `Failed ${e.method} to ${e.url} with status ${t?.status} and body: ${n?.text}`),
                    null != t && "parse" in t && t.parse)
                ) {
                    let n = "[FILTERED]";
                    S.includes(e.url) && (n = e.xhr?.responseText?.slice(0, 1e3)),
                        o.A.addBreadcrumb({
                            category: "superagent",
                            message: "Failed to parse HTTP response.",
                            data: { method: e.method, url: e.url, responseText: n, status: t.status },
                        });
                }
                p(n);
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
              : (0, f.O)(e.statusCode, e.body?.code)
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
            g.A.isOnline() || (await g.A.awaitOnline(), c.z8("Network", `Network detected online, retrying ${e}`));
    });
var C = n(495544);
n(736056), n(930839);
var y = n(247775),
    D = n(143236),
    L = (((i = L || {}).VERTICAL = "vertical"), (i.HORIZONTAL = "horizontal"), i);
let v = { open: !1, orientation: null };
class w extends D.EventEmitter {
    constructor() {
        super(), setInterval(() => this.check(), 500);
    }
    get orientations() {
        return Object.values(L);
    }
    get state() {
        return v;
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
            let e = v.open;
            (v = { open: !0, orientation: n }), (e && v.orientation === n) || this.emit("changed", v);
        } else v.open && ((v.open = !1), this.emit("changed", v));
    }
}
var P = n(607399),
    b = n(855522);
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (null != b.A.Messages.SELF_XSS_HEADER)
        if (
            (console.log(
                `%c${b.A.Messages.SELF_XSS_HEADER}`,
                "color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;",
            ),
            console.log(`%c${b.A.Messages.SELF_XSS_LINE_1}`, "font-size: 16px;"),
            console.log(`%c${b.A.Messages.SELF_XSS_LINE_2}`, "font-size: 18px; font-weight: bold; color: red;"),
            e >= 4)
        ) {
            console.log(`%c${b.A.Messages.SELF_XSS_LINE_3}`, "font-size: 16px;");
            let e = b.A.Messages.SELF_XSS_LINE_4.format({
                url: `${location.protocol}${window.GLOBAL_ENV.MARKETING_ENDPOINT}/jobs`,
            });
            console.log(`%c${e}`, "font-size: 16px;");
        } else setTimeout(() => k(e + 1), 1e3);
}
var U = n(121894),
    M = n(17928),
    G = n(413323),
    x = n(187322),
    V = n(775602),
    F = n(627968);
n(64700);
var B = n(791332),
    H = n.n(B),
    Y = n(349288),
    W = n(77729),
    K = n(502229),
    j = n(873298),
    $ = n(97469),
    z = n(363195),
    q = n(253932),
    X = n(617617),
    Q = n(53298);
let J = Q.O.NONE,
    Z = window.matchMedia("(prefers-color-scheme: dark)"),
    ee = window.matchMedia("(prefers-color-scheme: light)"),
    et = window.matchMedia("(inverted-colors: inverted)"),
    en = window.matchMedia("(prefers-contrast: more)"),
    ei = window.matchMedia("(forced-colors: active)");
function er(e, t) {
    t ? (J |= e) : (J &= ~e);
}
n(937982);
var es = n(141931),
    ea = n(506774),
    eo = n(969341),
    el = n(287809),
    e_ = n(19575),
    ed = n(77138);
let eu = window.DiscordNative,
    ec = `${E.HAw.APP_NATIVE_CRASH}Storage`;
function eE(e, t) {
    let n = {
        did_crash: !0,
        electron_crash_reporter_did_crash: !0,
        child_process_crash_type: t.type?.toLowerCase() ?? null,
        child_process_crash_reason: t.reason ?? null,
        child_process_crash_exit_code: t.exitCode ?? null,
    };
    h.default.track(E.HAw.APP_NATIVE_CRASH, n);
}
async function eh() {
    var e, t;
    let n, i;
    if (__OVERLAY__) return;
    let r = eu?.processUtils?.getLastCrash;
    if (((0, I.isDesktop)() && e_.Ay.on("CRASH_REPORTER_NEW_CRASH", eE), null == r))
        return void console.log("AppCrashedFatalReport: getLastCrash not supported.");
    let s = await r(),
        { didCrashReporterSeeCrash: a, didCrashOrUncleanExit: o } =
            ((e = ea.w.get(ec, {})),
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
                    had_rtc_connection: i(es.du.HasRTCConnection),
                    was_sending_video: i(es.du.IsSendingVideo),
                    was_sending_stream: i(es.du.IsSendingStream),
                    was_receiving_video: i(es.du.IsReceivingVideo),
                    was_receiving_stream: i(es.du.IsReceivingStream),
                    video_media_session_id: r(es.du.VideoMediaSessionId),
                    stream_media_session_id: r(es.du.StreamMediaSessionId),
                    intentional_crash_reason: r(es.du.IntentionalCrashReason),
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
    h.default.track(E.HAw.APP_NATIVE_CRASH, l),
        ea.w.set(ec, { lastId: s?.id }),
        o && setTimeout(async () => await em(), 1e4);
}
async function em() {
    if (el.default.getCurrentUser()?.isStaff())
        try {
            await eo.Ay.getMediaEngine().writeAudioDebugState(),
                await (0, ed.a)(E.Umv.RTC),
                console.log("Successfully uploaded debug files");
        } catch (e) {
            console.log("Failed to upload debug files");
        }
}
var ef = n(626584),
    eg = n(228366),
    eI = n(865116),
    eA = n(608960),
    ep = n(41237),
    eT = n(279263),
    eS = n(317525),
    eN = n(71393),
    eO = n(157016),
    eR = n(548965);
let eC = new ef.A("DispatcherBridge"),
    ey = [eT.A, eN.A, eS.A, eA.A, ep.A],
    eD = {
        GUILD_MEMBER_ADD: (e) => ({ ...e, currentUserId: C.default.getId() }),
        CONNECTION_OPEN: (e) => ({ guilds: e.guilds, unavailableGuilds: e.unavailableGuilds }),
        CACHE_LOADED: (e) => ({ guilds: e.guilds }),
        CACHE_LOADED_LAZY: (e) => ({ guilds: e.guilds }),
        BACKGROUND_SYNC: (e) => ({ guilds: e.guilds }),
    };
class eL {
    tokenToStore = new Map();
    disabledFromFatalError = !1;
    constructor(e) {
        if (0 === e.length) return;
        const t = eO.V;
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
                let i = eD[e.type],
                    r = performance.now();
                n = null != i ? JSON.stringify({ type: e.type, ...i(e) }) : JSON.stringify(e);
                let s = { kind: "json_stringify_action", durationMillis: performance.now() - r },
                    a = eR.pd.shouldCollectMetrics(),
                    o = t.dispatchAction(n, a);
                if (!o.ok) return void this.handleFatalError(o.error, e.type);
                let l = performance.now() - r,
                    { metrics: _, storeResults: d } = o.value,
                    u = [];
                for (let t of d) null != t.error ? this.handleStoreError(t, e.type) : u.push(t);
                for (let t of u)
                    this.withStoreToken(t.storeToken, e.type, (e) => {
                        e.applyChanges(t.databaseChanges);
                    });
                for (let t of u)
                    this.withStoreToken(t.storeToken, e.type, (t) => {
                        t.doEmitChanges(e);
                    });
                if (null != _ && a) {
                    let t = [s, ..._.timings];
                    if (eI.Ay.get("libdiscore_verbose_telemetry_logging")) {
                        let n = t
                                .map((e) => {
                                    let { kind: t, durationMillis: n } = e;
                                    return ` - ${t}: ${n}ms`;
                                })
                                .join("\n"),
                            i = _.mutations
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
                            r = _.memory
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
                    h.default.track(E.HAw.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY, {
                        action_type: e.type,
                        total_duration_millis: l,
                        timings: JSON.stringify(t),
                        mutations: JSON.stringify(_.mutations),
                        memory_usage: JSON.stringify(_.memory),
                    }),
                        eR.pd.didEmit();
                }
            };
            eg.h.register(
                "LibDiscoreDispatcherBridge",
                Object.fromEntries(i.map((e) => [e, r])),
                () => {},
                eg.A.Database,
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
            throw ((0, eR.pX)(), n);
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
        else if ("libdiscore" === r) throw ((0, eR.pX)(), s);
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
    (new eL(
        __OVERLAY__
            ? (eC.verbose("Not enabling rust implementation because we're in the legacy overlay"), [])
            : ey.filter((e) => ev.has(e.getMode())),
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
(0, G.Zs)(function (e) {
    return (
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, t, n) {
                return (0, F.jsx)("p", { children: t(e.content, n) }, n.key);
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
                    null == i.onClick && (i.href = H().sanitizeUrl(e.target)),
                    (0, F.jsx)(Y.Anchor, { title: e.title, ...i, children: t(e.content, n) }, n.key)
                );
            },
        }),
        e
    );
}),
    (function (e, t) {
        if (null != t && "0.0.0" === t.app.getVersion()) return;
        let n = new w();
        if (null != t)
            if (null != t.window.setDevtoolsCallbacks)
                t.window.setDevtoolsCallbacks(
                    () => {
                        e.hideToken(), k();
                    },
                    () => {
                        e.showToken();
                    },
                );
            else {
                let n = t.window.webContents;
                n.removeAllListeners("devtools-opened"),
                    n.on("devtools-opened", () => {
                        e.hideToken(), k();
                    }),
                    n.on("devtools-closed", e.showToken);
            }
        else
            P.Fr ||
                P.v1 ||
                n.on("changed", (t) => {
                    let { open: n } = t;
                    n ? (e.hideToken(), k()) : e.showToken();
                });
        window.addEventListener("beforeunload", (t) => {
            t.isTrusted && e.showToken();
        });
    })(y, W.A),
    M.Ay.Emitter.injectBatchEmitChanges(U.r),
    (M.Ay.PersistedStore.disableWrites = __OVERLAY__),
    M.Ay.initialize(),
    n.e("94459").then(n.t.bind(n, 868086, 19));
let ew = window.GLOBAL_ENV.RELEASE_CHANNEL;
new ef.A().log(
    `[BUILD INFO] Release Channel: ${ew}, Build Number: 535247, Version Hash: 8a58f961a5218604dd508130698fd25a3b3dc6b5`,
),
    o.A.setTags({ appContext: E.QCW }),
    K.A.initBasic(),
    {
        init() {
            V.A.addChangeListener(this.handleAccessibilityStoreChanged),
                z.A.addChangeListener(this.handleAccessibilityStoreChanged),
                X.A.addChangeListener(this.handleUiDensityChanged),
                Z.addListener(this.handlePrefersColorSchemeDarkChanged),
                this.handlePrefersColorSchemeDarkChanged(Z),
                ee.addListener(this.handlePrefersColorSchemeLightChanged),
                this.handlePrefersColorSchemeLightChanged(ee),
                en.addListener(this.handlePrefersMoreContrastChanged),
                this.handlePrefersMoreContrastChanged(en),
                ei.addListener(this.handlePrefersForcedColorsChanged),
                this.handlePrefersForcedColorsChanged(ei),
                et.addListener(this.handleInvertColorsChanged),
                this.handleInvertColorsChanged(et),
                h.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
        },
        getActiveFeatures: () => J,
        handlePrefersColorSchemeDarkChanged(e) {
            er(Q.O.PREFERS_COLOR_SCHEME_DARK, e.matches);
        },
        handlePrefersColorSchemeLightChanged(e) {
            er(Q.O.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
        },
        handlePrefersMoreContrastChanged(e) {
            er(Q.O.HIGH_CONTRAST, e.matches);
        },
        handlePrefersForcedColorsChanged(e) {
            er(Q.O.FORCED_COLORS, e.matches);
        },
        handleInvertColorsChanged(e) {
            er(Q.O.INVERT_COLORS, e.matches);
        },
        handleUiDensityChanged() {
            let e = q.Xi.getSetting();
            er(Q.O.UI_DENSITY_COMPACT, e === j.NS.COMPACT), er(Q.O.UI_DENSITY_SPACIOUS, e === j.NS.COZY);
        },
        handleAccessibilityStoreChanged() {
            er(Q.O.REDUCED_MOTION, V.A.useReducedMotion),
                er(Q.O.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== V.A.rawPrefersReducedMotion),
                er(Q.O.FORCED_COLORS_FROM_USER_SETTINGS, V.A.syncForcedColors),
                er(Q.O.CHAT_FONT_SCALE_DECREASED, V.A.isFontScaledDown),
                er(Q.O.CHAT_FONT_SCALE_INCREASED, V.A.isFontScaledUp),
                er(Q.O.ZOOM_LEVEL_DECREASED, V.A.isZoomedOut),
                er(Q.O.ZOOM_LEVEL_INCREASED, V.A.isZoomedIn),
                er(Q.O.MESSAGE_GROUP_SPACING_DECREASED, V.A.isMessageGroupSpacingDecreased),
                er(Q.O.MESSAGE_GROUP_SPACING_INCREASED, V.A.isMessageGroupSpacingIncreased),
                er(Q.O.DARK_SIDEBAR, (0, $.$i)()),
                er(Q.O.SATURATION_LEVEL_DECREASED, V.A.saturation < 1),
                er(Q.O.ROLE_STYLE_ADJUSTED, "username" !== V.A.roleStyle),
                er(Q.O.SYNC_PROFILE_THEME_WITH_USER_THEME, V.A.syncProfileThemeWithUserTheme),
                er(Q.O.CONTRAST_LEVEL_INCREASED, V.A.isHighContrastModeEnabled);
        },
    }.init(),
    {
        init() {
            V.A.addChangeListener(() => {
                V.A.keyboardModeEnabled
                    ? (x.oP.setRingsEnabled(!0), x.oP.enableAnimationTracking())
                    : (x.oP.setRingsEnabled(!1), x.oP.disableAnimationTracking());
            });
        },
    }.init(),
    eh();
