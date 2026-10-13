let i, r, a, s, l, o, d, c, u;
(n.r(t),
    n.d(t, {
        encodeProperties: () => I,
        isThrottled: () => eN,
        SpanComponentNames: () => J.yk,
        analyticsTrackingStoreMaker: () => q,
        getOS: () => eu,
        SpanTtiNames: () => J.wJ,
        getDevice: () => eA,
        getCampaignParams: () => ef,
        ImpressionNames: () => J.IJ,
        ImpressionGroups: () => Q.q,
        getBrowser: () => eE,
        getSuperPropertiesBase64: () => em,
        trackMaker: () => eC,
        AnalyticsActionHandlers: () => K,
        NetworkActionNames: () => J.D3,
        ImpressionTypes: () => Q.z,
        getSuperProperties: () => eT,
        extendSuperProperties: () => ep,
    }));
var _ = n(812729),
    E = n.n(_),
    A = n(284009),
    h = n.n(A),
    f = n(264572).Buffer;
function I(e) {
    try {
        return f.from(JSON.stringify(e)).toString("base64");
    } catch (e) {
        return null;
    }
}
(n(142703), n(667532), n(321073));
var p = n(132500);
n(423034);
var T = n(80703),
    m = n(17928),
    g = n(636537),
    S = n(187207),
    N = n(941426),
    C = n(818348);
let O = "x-science-test",
    R = new N.Vy("AnalyticsTrackingStore"),
    L = [0, 100, 1e3],
    y = 1500,
    D = 0,
    v = 0,
    b = 0,
    M = 0,
    P = 0,
    U = null,
    w = 0,
    G = Number.MAX_SAFE_INTEGER,
    x = 0,
    k = 0,
    F = null,
    B = !1,
    V = null,
    H = null;
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let W = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    Y = new S.n(),
    K = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    $ = [],
    z = null,
    X = !1,
    Z = () => Promise.resolve({ sessionId: void 0 }),
    q = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: a,
            getSessionId: s = Z,
            TRACKING_URL: l,
            drainTimeoutOverride: o,
            waitFor: d,
            scheduleWhenIdle: c = W,
            getLaunchSignature: u = () => null,
            submitEvents: _,
            sendUnloadRequest: E,
        } = e;
        function A() {
            return 0 !== $.length && (null != r ? null != i : null != a());
        }
        function h(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == z && A() && (z = t ? setTimeout(f, 0) : c(f, { timeout: y }));
        }
        function f() {
            if (((z = null), !A())) return Promise.resolve();
            let e = $.slice();
            (($ = []), (w = j(w)));
            let t = e.length;
            ((G = Math.min(G, t)), (x = Math.max(x, t)), (k = j(k, t)));
            let n = I(e);
            return (
                n.then(
                    () => {
                        (e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (b = j(b)));
                    },
                    (t) => {
                        ($.unshift(...e), (M = j(M)));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function I(e, t) {
            let n = Date.now(),
                r = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } }));
            if (null != _) return _(r, i);
            let a = {};
            return (
                B || ((H = (0, p.A)()), (a[O] = H), (B = !0)),
                g.Bo.post({
                    url: t ?? l,
                    headers: a,
                    body: { token: i, events: r },
                    retries: 3,
                    rejectWithError: !1,
                }).then((e) => (a[O] && (V = e?.headers?.[O] ?? null), e))
            );
        }
        function S() {
            if (null != _ || null == E || 0 === $.length || !A()) return !1;
            let e = $.slice(),
                t = Date.now(),
                n = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: t } }));
            return (
                !!E(l, JSON.stringify({ token: i, events: n })) &&
                (($ = []), (z = null), e.forEach((e) => e.resolve?.()), !0)
            );
        }
        function N() {
            let e = {
                type: C.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: b,
                    rpc_failure_count: M,
                    first_seen_event_sequence_number: P,
                    last_seen_event_sequence_number: D,
                    telemetry_period_start_timestamp: U,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: v,
                    event_queue_batch_count: w,
                    event_queue_batch_min_size: G === Number.MAX_SAFE_INTEGER ? 0 : G,
                    event_queue_batch_max_size: x,
                    event_queue_batch_avg_size: w > 0 ? k / w : 0,
                    science_request_id: H,
                    science_response: V,
                    launch_signature: u(),
                },
            };
            return (
                (v = 0),
                (b = 0),
                (M = 0),
                (w = 0),
                (G = Number.MAX_SAFE_INTEGER),
                (x = 0),
                (k = 0),
                (U = Date.now()),
                (P = D),
                I([e], C.mX.CLIENT_TELEMETRY).catch((e) => {
                    R.trace(`client telemetry flush failed (status ${e?.status ?? "unknown"})`);
                })
            );
        }
        ((y = o ?? 1500),
            !X &&
                "u" > typeof document &&
                ((X = !0),
                document.addEventListener("visibilitychange", () => {
                    "hidden" === document.visibilityState && S();
                }),
                window.addEventListener("pagehide", S)),
            (K.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (i = t),
                    null != n.id && (r = n.id),
                    !(function () {
                        if (null != F) return;
                        let e = () => {
                            F = {
                                type: "timeout",
                                id: setTimeout(
                                    () => {
                                        (N(), e());
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        F = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    (N(), e());
                                },
                                Math.floor(354e4 * Math.random() + 6e4),
                            ),
                        };
                    })(),
                    h({ shouldFlushOnNextTick: !1 }),
                    !1
                );
            }),
            (K.handleConnectionClosed = function () {
                return (
                    f(),
                    (function () {
                        if (null == F) return;
                        switch (F.type) {
                            case "timeout":
                                clearTimeout(F.id);
                                break;
                            case "interval":
                                clearInterval(F.id);
                                break;
                            default:
                                F.type;
                        }
                        F = null;
                    })(),
                    (i = null),
                    (r = null),
                    !1
                );
            }),
            (K.handleFingerprint = function () {
                return (f(), !1);
            }),
            (K.handleTrack = function (e) {
                let { event: t, properties: n, flush: i, fingerprint: l, resolve: o } = e;
                return (
                    s().then((e) => {
                        let { sessionId: s } = e,
                            d = {
                                type: t,
                                fingerprint: l,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: s,
                                    event_sequence_number: ++D,
                                    ...n,
                                },
                                resolve: o,
                            },
                            c = (function (e) {
                                if (null != r) return r;
                                let t = e.fingerprint ?? a();
                                return null != t ? (0, T.d)(t) : null;
                            })(d);
                        if ((null != c && (d.properties.client_uuid = Y.generate(c)), $.push(d), $.length > 1e4)) {
                            let e = $.length - 1e4;
                            ((v = j(v, e)), ($ = $.slice(-1e4)));
                        }
                        i ? h({ shouldFlushOnNextTick: !0 }) : h({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (K.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return (null == i && null != t && ((i = t), (r = n), h({ shouldFlushOnNextTick: !1 })), !1);
            }));
        class q extends m.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != d && this.waitFor(...d);
            }
            submitEventsImmediately = I;
            requestDrain = () => {
                for (let e of (f(), L))
                    setTimeout(() => {
                        f();
                    }, e);
            };
        }
        return new q(t, n);
    };
var Q = n(412728),
    J = n(239947),
    ee = n(214958),
    et = n.n(ee);
n(689953);
var en = n(70298),
    ei = n(175259),
    er = n(506774),
    ea = n(362474),
    es = n(71931);
let el = "deviceProperties",
    eo = "referralProperties";
function ed() {}
let ec = window.DiscordNative;
if (null != ec) {
    let e,
        t = ec.app.getVersion(),
        n = ec.process.platform,
        i = ec.os.release,
        r = ec.os.arch,
        s = ec.os.appArch,
        l = ec.app.getReleaseChannel(),
        o = (0, ei.c)();
    switch (n) {
        case "win32":
            e = "Windows";
            break;
        case "darwin":
            e = "Mac OS X";
            break;
        case "linux":
            e = "Linux";
            break;
        default:
            e = n;
    }
    if (
        ((a = {
            os: e,
            browser: "Discord Client",
            release_channel: l || "unknown",
            client_version: t,
            os_version: i,
            os_arch: r,
            app_arch: s,
            system_locale: o,
            has_client_mods: (0, en.b)(),
            client_launch_id: es.C,
        }),
        et().name?.toLocaleLowerCase() === "electron" &&
            ((a.browser_user_agent = et().ua || ""), (a.browser_version = et().version || "")),
        "linux" === n)
    ) {
        let e = ec.crashReporter.getMetadata();
        ((a.window_manager = e.wm),
            (a.distro = e.distro),
            (a.runtime_environment = e.runtime_environment),
            (a.display_server = e.display_server));
    } else
        "darwin" === n ? (a.os_sdk_version = i?.split(".")[0]) : "win32" === n && (a.os_sdk_version = i?.split(".")[2]);
}
function eu() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
    if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
    if (/Android/.test(e)) return "Android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Mac/i.test(e))
        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
    else if (/Linux/i.test(e)) return "Linux";
    else return "";
}
function e_(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function eE() {
    let { userAgent: e, vendor: t = "" } = window.navigator,
        { opera: n } = window,
        i = (function (e) {
            let { userAgentData: t } = window.navigator;
            for (let { brand: n } of t?.brands ?? []) {
                if ("Microsoft Edge" === n) return "Edge";
                if ("Opera" === n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
            }
            return null;
        })(e);
    if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/FBIOS/.test(e)) return "Facebook Mobile";
    if (/CriOS/.test(e)) return "Chrome iOS";
    if (/FxiOS/.test(e)) return "Firefox iOS";
    else if (/EdgiOS/.test(e)) return "Edge iOS";
    else if (/EdgA/.test(e)) return "Android Edge";
    else if (/Apple/.test(t))
        return /Mobile/.test(e) || (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2)
            ? "Mobile Safari"
            : "Safari";
    else if (null !== i) return i;
    else if (/Android/.test(e))
        return /Firefox/.test(e) ? "Android Firefox" : /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
    else if (/Edge/.test(e)) return "Edge";
    else if (/Chrome/.test(e)) return "Chrome";
    else if (/Konqueror/.test(e)) return "Konqueror";
    else if (/Firefox/.test(e)) return "Firefox";
    else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
    else if (/Gecko/.test(e)) return "Mozilla";
    else return "";
}
function eA() {
    let e = ed(),
        { userAgent: t } = window.navigator;
    if (null != e) return e.device;
    if (/(BlackBerry|PlayBook|BB10)/i.test(t)) return "BlackBerry";
    if (/Windows Phone/i.test(t)) return "Windows Phone";
    if (/Android/.test(t)) return "Android";
    if (/iPhone/.test(t)) return "iPhone";
    else if (/iPad/.test(t)) return "iPad";
    else return "";
}
let eh = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function ef(e) {
    let t = {};
    return (
        eh.forEach((n) => {
            let i = e_(e, n);
            i.length > 0 && (t[n] = i);
        }),
        t
    );
}
function eI() {
    let e,
        t = {};
    return (
        (t.referrer = document.referrer),
        (t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : ""),
        (t = {
            ...t,
            ...ef(window.location.href),
            ...(function () {
                let e,
                    t = {},
                    n = document.referrer,
                    i =
                        0 === (e = document.referrer).search("https?://(.*)google.([^/?]*)")
                            ? "google"
                            : 0 === e.search("https?://(.*)bing.com")
                              ? "bing"
                              : 0 === e.search("https?://(.*)yahoo.com")
                                ? "yahoo"
                                : 0 === e.search("https?://(.*)duckduckgo.com")
                                  ? "duckduckgo"
                                  : null;
                if (null != i) {
                    t.search_engine = i;
                    let e = e_(n, "yahoo" !== i ? "q" : "p");
                    e.length > 0 && (t.mp_keyword = e);
                }
                return t;
            })(),
        })
    );
}
if (null == a)
    try {
        a = (function () {
            let e,
                t,
                n = er.w.get(el);
            if (null == n) {
                let e;
                (((e = {}).os = eu()),
                    (e.browser = eE()),
                    (e.device = eA()),
                    (e.system_locale = (0, ei.c)()),
                    (e.has_client_mods = (0, en.b)()),
                    (n = e),
                    er.w.set(el, n));
            }
            let i = er.w.get(eo);
            null == i && ((i = eI()), er.w.set(eo, i));
            let r = ea.u.get(eo);
            if (null == r) {
                var a;
                let e;
                ((a = eI()), (e = {}), Object.keys(a).map((t) => (e[`${t}_current`] = a[t])), (r = e), ea.u.set(eo, r));
            }
            return {
                ...n,
                ...((e = { browser_user_agent: window.navigator.userAgent || "", browser_version: et().version || "" }),
                (t = ed()),
                null != t
                    ? { ...e, os_version: t.systemVersion || "" }
                    : { ...e, os_version: et()?.os?.version ?? "" }),
                ...i,
                ...r,
            };
        })();
    } catch (e) {
        a = {};
    }
function ep(e) {
    s = I((a = { ...a, ...e }));
}
function eT() {
    return a;
}
function em() {
    return s;
}
ep(
    ((l = {}),
    (o = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == l.release_channel || "" === l.release_channel) &&
        (l.release_channel = o.split("-")[0]),
    isNaN((d = parseInt("636200", 10))) || (l.client_build_number = d),
    null == (c = ec?.app.getBuildNumber()) || isNaN(c) || (l.native_build_number = c),
    (l.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (l.has_client_mods = (0, en.b)()),
    (l.client_launch_id = es.C),
    null != (u = ed()?.installSource) && (l.install_source = u),
    l),
);
let eg = {},
    eS = {};
function eN(e) {
    return null != eg[e] && eg[e] > Date.now();
}
let eC = (e) => {
    let { addBreadcrumb: t, analyticEventConfigs: i, dispatcher: r, TRACK_ACTION_NAME: a } = e,
        s = function (e, t, n) {
            return new Promise((i) => {
                r.dispatch({
                    type: a,
                    event: e,
                    properties: t,
                    flush: n?.flush ?? !1,
                    fingerprint: n?.fingerprint,
                    resolve: i,
                });
            });
        };
    return function (e, r) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let l = r ?? {},
            o = i[e];
        if (("function" == typeof o && (o = o(l) ?? null), null != o))
            if ("throttlePeriod" in o) {
                let t = [e, ...o.throttleKeys(l)].join("_");
                if (eN(t) || ("number" == typeof o.throttlePercent && Math.random() > o.throttlePercent))
                    return Promise.resolve();
                if (o.deduplicate) {
                    let e = eS[t];
                    if (E()(e, l)) return Promise.resolve();
                    eS[t] = l;
                }
                eg[t] = Date.now() + o.throttlePeriod;
            } else if ("throttlePercent" in o) {
                if (Math.random() > o.throttlePercent) return Promise.resolve();
            } else h()(!1, `Unsupported analytics event config: ${o}`);
        return (t?.(e), s(e, r, a));
    };
};
