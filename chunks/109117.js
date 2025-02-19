n.d(t, { S1: () => _ });
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
    p = ''.concat(c.rMx.APP_NATIVE_CRASH, 'Storage');
async function _() {
    var e;
    if (__OVERLAY__) return;
    let t = null == f ? void 0 : null === (e = f.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
    if (null == t) {
        console.log('AppCrashedFatalReport: getLastCrash not supported.');
        return;
    }
    let n = await t(),
        { didCrashReporterSeeCrash: r, didCrashOrUncleanExit: o } = h(i.K.get(p, {}), n),
        a = g(r, o, n);
    s.default.track(c.rMx.APP_NATIVE_CRASH, a), i.K.set(p, { lastId: null == n ? void 0 : n.id }), o && setTimeout(async () => await m(), 10000);
}
function h(e, t) {
    var n;
    let r = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
        i = null !== (n = null == t ? void 0 : t.rendererCrashExitCode) && void 0 !== n ? n : null,
        o = r || (null != i && 0 !== i);
    return {
        didCrashReporterSeeCrash: r,
        didCrashOrUncleanExit: o
    };
}
async function m() {
    var e, t;
    if (null !== (t = null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t)
        try {
            await o.Z.getMediaEngine().writeAudioDebugState(), await (0, l.E)(c.GU0.RTC), console.log('Successfully uploaded debug files');
        } catch (e) {
            console.log('Failed to upload debug files');
        }
}
function g(e, t, n) {
    var i, o, a, s, l, c, u, f, p, _, h, m, g, E, v, b, y, O, S;
    function I(e) {
        return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e];
    }
    function T(e) {
        return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e];
    }
    let N = {
        did_crash: t,
        renderer_crash_reason: null !== (u = null == n ? void 0 : n.rendererCrashReason) && void 0 !== u ? u : null,
        renderer_crash_exit_code: null !== (f = null == n ? void 0 : n.rendererCrashExitCode) && void 0 !== f ? f : null,
        had_rtc_connection: I(r.X4.HasRTCConnection),
        was_sending_video: I(r.X4.IsSendingVideo),
        was_sending_stream: I(r.X4.IsSendingStream),
        was_receiving_video: I(r.X4.IsReceivingVideo),
        was_receiving_stream: I(r.X4.IsReceivingStream),
        video_media_session_id: T(r.X4.VideoMediaSessionId),
        stream_media_session_id: T(r.X4.StreamMediaSessionId),
        last_memory_usage_kb: null !== (p = null == n ? void 0 : null === (i = n.lastMemoryInformation) || void 0 === i ? void 0 : i.memoryUsageKB) && void 0 !== p ? p : null,
        last_used_js_heap_size_kb: null !== (_ = null == n ? void 0 : null === (o = n.lastMemoryInformation) || void 0 === o ? void 0 : o.usedJSHeapSizeKB) && void 0 !== _ ? _ : null,
        last_memory_usage_uptime: null !== (h = null == n ? void 0 : null === (a = n.lastMemoryInformation) || void 0 === a ? void 0 : a.uptimeSeconds) && void 0 !== h ? h : null,
        highest_memory_usage_kb: null !== (m = null == n ? void 0 : null === (s = n.highestMemoryInformation) || void 0 === s ? void 0 : s.memoryUsageKB) && void 0 !== m ? m : null,
        highest_used_js_heap_size_kb: null !== (g = null == n ? void 0 : null === (l = n.highestMemoryInformation) || void 0 === l ? void 0 : l.usedJSHeapSizeKB) && void 0 !== g ? g : null,
        highest_memory_usage_uptime: null !== (E = null == n ? void 0 : null === (c = n.highestMemoryInformation) || void 0 === c ? void 0 : c.uptimeSeconds) && void 0 !== E ? E : null
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
            minidump_exception_type: null !== (v = null == A ? void 0 : A.exceptionString) && void 0 !== v ? v : null,
            minidump_exception_module_name: null !== (b = null == A ? void 0 : A.exceptionModuleName) && void 0 !== b ? b : null,
            minidump_relative_crash_address: null !== (y = null == A ? void 0 : A.relativeCrashAddress) && void 0 !== y ? y : null,
            minidump_exception_module_version: null !== (O = null == A ? void 0 : A.exceptionModuleVersion) && void 0 !== O ? O : null,
            minidump_exception_module_code_id: null !== (S = null == A ? void 0 : A.exceptionModuleCodeId) && void 0 !== S ? S : null
        },
        N
    );
}
