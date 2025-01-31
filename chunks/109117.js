n.d(t, { S1: () => f });
var i = n(268146),
    r = n(433517),
    a = n(131951),
    s = n(594174),
    o = n(626135),
    l = n(729345),
    u = n(981631);
let c = window.DiscordNative,
    d = ''.concat(u.rMx.APP_NATIVE_CRASH, 'Storage');
async function f() {
    var e;
    if (__OVERLAY__) return;
    let t = null == c ? void 0 : null === (e = c.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
    if (null == t) {
        console.log('AppCrashedFatalReport: getLastCrash not supported.');
        return;
    }
    let n = await t(),
        { didCrashReporterSeeCrash: i, didCrashOrUncleanExit: a } = _(r.K.get(d, {}), n),
        s = h(i, a, n);
    o.default.track(u.rMx.APP_NATIVE_CRASH, s), r.K.set(d, { lastId: null == n ? void 0 : n.id }), a && setTimeout(async () => await p(), 10000);
}
function _(e, t) {
    var n;
    let i = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
        r = null !== (n = null == t ? void 0 : t.rendererCrashExitCode) && void 0 !== n ? n : null,
        a = i || (null != r && 0 !== r);
    return {
        didCrashReporterSeeCrash: i,
        didCrashOrUncleanExit: a
    };
}
async function p() {
    var e, t;
    if (null !== (t = null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t)
        try {
            await a.Z.getMediaEngine().writeAudioDebugState(), await (0, l.E)(u.GU0.RTC), console.log('Successfully uploaded debug files');
        } catch (e) {
            console.log('Failed to upload debug files');
        }
}
function h(e, t, n) {
    var r, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, y, I, b;
    function T(e) {
        return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e];
    }
    function S(e) {
        return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e];
    }
    let A = {
        did_crash: t,
        renderer_crash_reason: null !== (c = null == n ? void 0 : n.rendererCrashReason) && void 0 !== c ? c : null,
        renderer_crash_exit_code: null !== (d = null == n ? void 0 : n.rendererCrashExitCode) && void 0 !== d ? d : null,
        had_rtc_connection: T(i.X4.HasRTCConnection),
        was_sending_video: T(i.X4.IsSendingVideo),
        was_sending_stream: T(i.X4.IsSendingStream),
        was_receiving_video: T(i.X4.IsReceivingVideo),
        was_receiving_stream: T(i.X4.IsReceivingStream),
        video_media_session_id: S(i.X4.VideoMediaSessionId),
        stream_media_session_id: S(i.X4.StreamMediaSessionId),
        last_memory_usage_kb: null !== (f = null == n ? void 0 : null === (r = n.lastMemoryInformation) || void 0 === r ? void 0 : r.memoryUsageKB) && void 0 !== f ? f : null,
        last_used_js_heap_size_kb: null !== (_ = null == n ? void 0 : null === (a = n.lastMemoryInformation) || void 0 === a ? void 0 : a.usedJSHeapSizeKB) && void 0 !== _ ? _ : null,
        last_memory_usage_uptime: null !== (p = null == n ? void 0 : null === (s = n.lastMemoryInformation) || void 0 === s ? void 0 : s.uptimeSeconds) && void 0 !== p ? p : null,
        highest_memory_usage_kb: null !== (h = null == n ? void 0 : null === (o = n.highestMemoryInformation) || void 0 === o ? void 0 : o.memoryUsageKB) && void 0 !== h ? h : null,
        highest_used_js_heap_size_kb: null !== (m = null == n ? void 0 : null === (l = n.highestMemoryInformation) || void 0 === l ? void 0 : l.usedJSHeapSizeKB) && void 0 !== m ? m : null,
        highest_memory_usage_uptime: null !== (g = null == n ? void 0 : null === (u = n.highestMemoryInformation) || void 0 === u ? void 0 : u.uptimeSeconds) && void 0 !== g ? g : null
    };
    if (!e || null == n)
        return {
            electron_crash_reporter_did_crash: !1,
            minidump_exception_type: null,
            minidump_exception_module_name: null,
            minidump_relative_crash_address: null,
            minidump_exception_module_version: null,
            minidump_exception_module_code_id: null,
            ...A
        };
    console.log('AppCrashedFatalReport lastCrash:', n, e);
    let N = null == n ? void 0 : n.minidumpInformation;
    return {
        electron_crash_reporter_did_crash: e,
        minidump_exception_type: null !== (E = null == N ? void 0 : N.exceptionString) && void 0 !== E ? E : null,
        minidump_exception_module_name: null !== (v = null == N ? void 0 : N.exceptionModuleName) && void 0 !== v ? v : null,
        minidump_relative_crash_address: null !== (y = null == N ? void 0 : N.relativeCrashAddress) && void 0 !== y ? y : null,
        minidump_exception_module_version: null !== (I = null == N ? void 0 : N.exceptionModuleVersion) && void 0 !== I ? I : null,
        minidump_exception_module_code_id: null !== (b = null == N ? void 0 : N.exceptionModuleCodeId) && void 0 !== b ? b : null,
        ...A
    };
}
