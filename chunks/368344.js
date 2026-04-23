"use strict";
n.d(t, { DT: () => c, P5: () => o, _e: () => l, tS: () => u }), n(667532);
var r = n(214958),
    i = n.n(r),
    s = n(823598),
    a = n(713754);
function o(e, t) {
    let n = !1,
        r = t.map((t, r) => {
            let {
                guid: i,
                guid: s,
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
                    ? ((n = !0), (i = a.dx), (o = o.replace("default", "Default")))
                    : (i = null != i && "" !== i ? i : o),
                null != u && (r = u),
                {
                    id: i,
                    type: e,
                    index: r,
                    name: o,
                    originalName: l,
                    originalId: s,
                    facing: c,
                    hardwareId: d,
                    containerId: _,
                    effects: f,
                }
            );
        });
    return (
        e !== a.oh.VIDEO_INPUT &&
            !n &&
            i()?.os?.family != null &&
            /^win/i.test(i().os.family) &&
            r.unshift({ id: a.dx, type: e, index: -1, name: "Default" }),
        r
    );
}
function l() {
    return new Promise((e) => {
        (0, s.lE)().getInputDevices((t) => e(o(a.oh.AUDIO_INPUT, t)));
    });
}
function u() {
    return new Promise((e) => {
        (0, s.lE)().getOutputDevices((t) => e(o(a.oh.AUDIO_OUTPUT, t)));
    });
}
function c() {
    return new Promise((e) => {
        (0, s.lE)().getVideoInputDevices((t) => e(o(a.oh.VIDEO_INPUT, t)));
    });
}
