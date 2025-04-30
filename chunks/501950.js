n.d(t, {
    C1: () => s,
    HS: () => c,
    Hg: () => l,
    l0: () => u
}),
    n(35282),
    n(704826),
    n(290780);
var r = n(264344),
    i = n.n(r),
    o = n(992774),
    a = n(149396);
function s(e, t) {
    var n;
    let r = !1,
        o = t.map((t, n) => {
            let { guid: i, guid: o, name: s, name: l, index: c, facing: u, hardwareId: d, containerId: f } = t;
            return (
                /^default/.test(s) ? ((r = !0), (i = a.w5), (s = s.replace('default', 'Default'))) : (i = null != i && '' !== i ? i : s),
                null != c && (n = c),
                {
                    id: i,
                    type: e,
                    index: n,
                    name: s,
                    originalName: l,
                    originalId: o,
                    facing: u,
                    hardwareId: d,
                    containerId: f
                }
            );
        });
    return (
        e !== a.h7.VIDEO_INPUT &&
            !r &&
            (null === i() || void 0 === i() || null == (n = i().os) ? void 0 : n.family) != null &&
            /^win/i.test(i().os.family) &&
            o.unshift({
                id: a.w5,
                type: e,
                index: -1,
                name: 'Default'
            }),
        o
    );
}
function l() {
    return new Promise((e) => {
        (0, o.zS)().getInputDevices((t) => e(s(a.h7.AUDIO_INPUT, t)));
    });
}
function c() {
    return new Promise((e) => {
        (0, o.zS)().getOutputDevices((t) => e(s(a.h7.AUDIO_OUTPUT, t)));
    });
}
function u() {
    return new Promise((e) => {
        (0, o.zS)().getVideoInputDevices((t) => e(s(a.h7.VIDEO_INPUT, t)));
    });
}
