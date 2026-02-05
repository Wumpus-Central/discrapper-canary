"use strict";
n.d(t, { DT: () => c, P5: () => o, _e: () => l, tS: () => u }), n(667532);
var r = n(214958),
    i = n.n(r),
    a = n(823598),
    s = n(713754);
function o(e, t) {
    let n = !1,
        r = t.map((t, r) => {
            let {
                guid: i,
                guid: a,
                name: o,
                name: l,
                index: u,
                facing: c,
                hardwareId: d,
                containerId: _,
                effects: f,
            } = t;
            return (
                /^default/.test(o)
                    ? ((n = !0), (i = s.dx), (o = o.replace("default", "Default")))
                    : (i = null != i && "" !== i ? i : o),
                null != u && (r = u),
                {
                    id: i,
                    type: e,
                    index: r,
                    name: o,
                    originalName: l,
                    originalId: a,
                    facing: c,
                    hardwareId: d,
                    containerId: _,
                    effects: f,
                }
            );
        });
    return (
        e !== s.oh.VIDEO_INPUT &&
            !n &&
            i()?.os?.family != null &&
            /^win/i.test(i().os.family) &&
            r.unshift({ id: s.dx, type: e, index: -1, name: "Default" }),
        r
    );
}
function l() {
    return new Promise((e) => {
        (0, a.lE)().getInputDevices((t) => e(o(s.oh.AUDIO_INPUT, t)));
    });
}
function u() {
    return new Promise((e) => {
        (0, a.lE)().getOutputDevices((t) => e(o(s.oh.AUDIO_OUTPUT, t)));
    });
}
function c() {
    return new Promise((e) => {
        (0, a.lE)().getVideoInputDevices((t) => e(o(s.oh.VIDEO_INPUT, t)));
    });
}
