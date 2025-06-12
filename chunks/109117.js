n.d(t, { S1: () => E });
var r = n(268146),
    i = n(433517),
    a = n(131951),
    o = n(594174),
    s = n(626135),
    l = n(358085),
    c = n(998502),
    u = n(729345),
    d = n(981631);
function _(e, t, n) {
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
function f(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let p = window.DiscordNative,
    h = ''.concat(d.rMx.APP_NATIVE_CRASH, 'Storage');
function m(e) {
    var t, n, r, i;
    return {
        did_crash: !0,
        electron_crash_reporter_did_crash: !0,
        child_process_crash_type: null != (n = null == (t = e.type) ? void 0 : t.toLowerCase()) ? n : null,
        child_process_crash_reason: null != (r = e.reason) ? r : null,
        child_process_crash_exit_code: null != (i = e.exitCode) ? i : null
    };
}
function g(e, t) {
    let n = m(t);
    s.default.track(d.rMx.APP_NATIVE_CRASH, n);
}
async function E() {
    var e;
    if (__OVERLAY__) return;
    let t = null == p || null == (e = p.processUtils) ? void 0 : e.getLastCrash;
    if (((0, l.isDesktop)() && c.ZP.on('CRASH_REPORTER_NEW_CRASH', g), null == t)) return void console.log('AppCrashedFatalReport: getLastCrash not supported.');
    let n = await t(),
        { didCrashReporterSeeCrash: r, didCrashOrUncleanExit: a } = b(i.K.get(h, {}), n),
        o = O(r, a, n);
    s.default.track(d.rMx.APP_NATIVE_CRASH, o), i.K.set(h, { lastId: null == n ? void 0 : n.id }), a && setTimeout(async () => await y(), 10000);
}
function b(e, t) {
    var n;
    let r = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
        i = null != (n = null == t ? void 0 : t.rendererCrashExitCode) ? n : null,
        a = r || (null != i && 0 !== i);
    return {
        didCrashReporterSeeCrash: r,
        didCrashOrUncleanExit: a
    };
}
async function y() {
    var e, t;
    if (null != (t = null == (e = o.default.getCurrentUser()) ? void 0 : e.isStaff()) && t)
        try {
            await a.Z.getMediaEngine().writeAudioDebugState(), await (0, u.E)(d.GU0.RTC), console.log('Successfully uploaded debug files');
        } catch (e) {
            console.log('Failed to upload debug files');
        }
}
function O(e, t, n) {
    var i, a, o, s, l, c, u, d, _, p, h, m, g, E, b, y, O, v, I;
    function T(e) {
        return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e];
    }
    function S(e) {
        return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e];
    }
    let A = {
        did_crash: t,
        renderer_crash_reason: null != (u = null == n ? void 0 : n.rendererCrashReason) ? u : null,
        renderer_crash_exit_code: null != (d = null == n ? void 0 : n.rendererCrashExitCode) ? d : null,
        child_process_crash_type: null,
        child_process_crash_reason: null,
        child_process_crash_exit_code: null,
        had_rtc_connection: T(r.X4.HasRTCConnection),
        was_sending_video: T(r.X4.IsSendingVideo),
        was_sending_stream: T(r.X4.IsSendingStream),
        was_receiving_video: T(r.X4.IsReceivingVideo),
        was_receiving_stream: T(r.X4.IsReceivingStream),
        video_media_session_id: S(r.X4.VideoMediaSessionId),
        stream_media_session_id: S(r.X4.StreamMediaSessionId),
        last_memory_usage_kb: null != (_ = null == n || null == (i = n.lastMemoryInformation) ? void 0 : i.memoryUsageKB) ? _ : null,
        last_used_js_heap_size_kb: null != (p = null == n || null == (a = n.lastMemoryInformation) ? void 0 : a.usedJSHeapSizeKB) ? p : null,
        last_memory_usage_uptime: null != (h = null == n || null == (o = n.lastMemoryInformation) ? void 0 : o.uptimeSeconds) ? h : null,
        highest_memory_usage_kb: null != (m = null == n || null == (s = n.highestMemoryInformation) ? void 0 : s.memoryUsageKB) ? m : null,
        highest_used_js_heap_size_kb: null != (g = null == n || null == (l = n.highestMemoryInformation) ? void 0 : l.usedJSHeapSizeKB) ? g : null,
        highest_memory_usage_uptime: null != (E = null == n || null == (c = n.highestMemoryInformation) ? void 0 : c.uptimeSeconds) ? E : null
    };
    if (!e || null == n)
        return f(
            {
                electron_crash_reporter_did_crash: !1,
                minidump_exception_type: null,
                minidump_exception_module_name: null,
                minidump_relative_crash_address: null,
                minidump_exception_module_version: null,
                minidump_exception_module_code_id: null
            },
            A
        );
    console.log('AppCrashedFatalReport lastCrash:', n, e);
    let N = null == n ? void 0 : n.minidumpInformation;
    return f(
        {
            electron_crash_reporter_did_crash: e,
            minidump_exception_type: null != (b = null == N ? void 0 : N.exceptionString) ? b : null,
            minidump_exception_module_name: null != (y = null == N ? void 0 : N.exceptionModuleName) ? y : null,
            minidump_relative_crash_address: null != (O = null == N ? void 0 : N.relativeCrashAddress) ? O : null,
            minidump_exception_module_version: null != (v = null == N ? void 0 : N.exceptionModuleVersion) ? v : null,
            minidump_exception_module_code_id: null != (I = null == N ? void 0 : N.exceptionModuleCodeId) ? I : null
        },
        A
    );
}
