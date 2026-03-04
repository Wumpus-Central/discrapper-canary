"use strict";
n.d(t, { DT: () => p, _e: () => _, gY: () => o, oG: () => h, sq: () => a, tS: () => f });
var r = n(223926),
    i = n.n(r),
    s = n(731854);
let a = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    o = a && "setSinkId" in HTMLAudioElement.prototype;
function l(e) {
    return { id: s.dx, type: e, index: 0, name: "Default" };
}
function u() {
    return {
        [s.oh.AUDIO_INPUT]: [l(s.oh.AUDIO_INPUT)],
        [s.oh.AUDIO_OUTPUT]: [l(s.oh.AUDIO_OUTPUT)],
        [s.oh.VIDEO_INPUT]: [l(s.oh.VIDEO_INPUT)],
    };
}
function c(e, t) {
    return {
        id: e.deviceId,
        type: e.kind,
        index: t,
        name: null != e.label && "" !== e.label ? e.label : 0 === t ? "Default" : `Device ${t}`,
    };
}
async function d() {
    if (!a) return u();
    try {
        let e = await navigator.mediaDevices.enumerateDevices(),
            { [s.oh.AUDIO_INPUT]: t = [], [s.oh.AUDIO_OUTPUT]: n = [], [s.oh.VIDEO_INPUT]: r = [] } = i()(e, "kind"),
            [a, u, d] = [t, n, r].map((e) => e.map(c));
        return { [s.oh.AUDIO_INPUT]: a, [s.oh.AUDIO_OUTPUT]: o ? u : [l(s.oh.AUDIO_OUTPUT)], [s.oh.VIDEO_INPUT]: d };
    } catch {
        return u();
    }
}
async function _() {
    return (await d())[s.oh.AUDIO_INPUT];
}
async function f() {
    return (await d())[s.oh.AUDIO_OUTPUT];
}
async function p() {
    return (await d())[s.oh.VIDEO_INPUT];
}
async function h() {
    let e = await d();
    return [e[s.oh.AUDIO_INPUT], e[s.oh.AUDIO_OUTPUT], e[s.oh.VIDEO_INPUT]];
}
