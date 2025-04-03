n.d(t, { S1: () => p });
var r = n(268146),
    i = n(433517),
    o = n(131951),
    a = n(594174),
    s = n(626135),
    l = n(729345),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = window.DiscordNative,
    _ = ''.concat(c.rMx.APP_NATIVE_CRASH, 'Storage');
async function p() {
    var e;
    if (__OVERLAY__) return;
    let t = null == f || null == (e = f.processUtils) ? void 0 : e.getLastCrash;
    if (null == t) return void console.log('AppCrashedFatalReport: getLastCrash not supported.');
    let n = await t(),
        { didCrashReporterSeeCrash: r, didCrashOrUncleanExit: o } = h(i.K.get(_, {}), n),
        a = g(r, o, n);
    s.default.track(c.rMx.APP_NATIVE_CRASH, a), i.K.set(_, { lastId: null == n ? void 0 : n.id }), o && setTimeout(async () => await m(), 10000);
}
function h(e, t) {
    var n;
    let r = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
        i = null != (n = null == t ? void 0 : t.rendererCrashExitCode) ? n : null,
        o = r || (null != i && 0 !== i);
    return {
        didCrashReporterSeeCrash: r,
        didCrashOrUncleanExit: o
    };
}
async function m() {
    var e, t;
    if (null != (t = null == (e = a.default.getCurrentUser()) ? void 0 : e.isStaff()) && t)
        try {
            await o.Z.getMediaEngine().writeAudioDebugState(), await (0, l.E)(c.GU0.RTC), console.log('Successfully uploaded debug files');
        } catch (e) {
            console.log('Failed to upload debug files');
        }
}
function g(e, t, n) {
    var i, o, a, s, l, c, u, f, _, p, h, m, g, E, b, y, v, O, I;
    function S(e) {
        return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e];
    }
    function T(e) {
        return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e];
    }
    let N = {
        did_crash: t,
        renderer_crash_reason: null != (u = null == n ? void 0 : n.rendererCrashReason) ? u : null,
        renderer_crash_exit_code: null != (f = null == n ? void 0 : n.rendererCrashExitCode) ? f : null,
        had_rtc_connection: S(r.X4.HasRTCConnection),
        was_sending_video: S(r.X4.IsSendingVideo),
        was_sending_stream: S(r.X4.IsSendingStream),
        was_receiving_video: S(r.X4.IsReceivingVideo),
        was_receiving_stream: S(r.X4.IsReceivingStream),
        video_media_session_id: T(r.X4.VideoMediaSessionId),
        stream_media_session_id: T(r.X4.StreamMediaSessionId),
        last_memory_usage_kb: null != (_ = null == n || null == (i = n.lastMemoryInformation) ? void 0 : i.memoryUsageKB) ? _ : null,
        last_used_js_heap_size_kb: null != (p = null == n || null == (o = n.lastMemoryInformation) ? void 0 : o.usedJSHeapSizeKB) ? p : null,
        last_memory_usage_uptime: null != (h = null == n || null == (a = n.lastMemoryInformation) ? void 0 : a.uptimeSeconds) ? h : null,
        highest_memory_usage_kb: null != (m = null == n || null == (s = n.highestMemoryInformation) ? void 0 : s.memoryUsageKB) ? m : null,
        highest_used_js_heap_size_kb: null != (g = null == n || null == (l = n.highestMemoryInformation) ? void 0 : l.usedJSHeapSizeKB) ? g : null,
        highest_memory_usage_uptime: null != (E = null == n || null == (c = n.highestMemoryInformation) ? void 0 : c.uptimeSeconds) ? E : null
    };
    if (!e || null == n)
        return d(
            {
                electron_crash_reporter_did_crash: !1,
                minidump_exception_type: null,
                minidump_exception_module_name: null,
                minidump_relative_crash_address: null,
                minidump_exception_module_version: null,
                minidump_exception_module_code_id: null
            },
            N
        );
    console.log('AppCrashedFatalReport lastCrash:', n, e);
    let A = null == n ? void 0 : n.minidumpInformation;
    return d(
        {
            electron_crash_reporter_did_crash: e,
            minidump_exception_type: null != (b = null == A ? void 0 : A.exceptionString) ? b : null,
            minidump_exception_module_name: null != (y = null == A ? void 0 : A.exceptionModuleName) ? y : null,
            minidump_relative_crash_address: null != (v = null == A ? void 0 : A.relativeCrashAddress) ? v : null,
            minidump_exception_module_version: null != (O = null == A ? void 0 : A.exceptionModuleVersion) ? O : null,
            minidump_exception_module_code_id: null != (I = null == A ? void 0 : A.exceptionModuleCodeId) ? I : null
        },
        N
    );
}
