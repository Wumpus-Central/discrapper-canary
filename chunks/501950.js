n.d(t, {
    C1: () => o,
    HS: () => u,
    Hg: () => l,
    l0: () => c
}),
    n(757143),
    n(733860);
var i = n(264344),
    r = n.n(i),
    a = n(992774),
    s = n(149396);
function o(e, t) {
    var n;
    let i = !1,
        a = t.map((t, n) => {
            let { guid: r, guid: a, name: o, name: l, index: u, facing: c } = t;
            return (
                /^default/.test(o) ? ((i = !0), (r = s.w5), (o = o.replace('default', 'Default'))) : (r = null != r && '' !== r ? r : o),
                null != u && (n = u),
                {
                    id: r,
                    type: e,
                    index: n,
                    name: o,
                    originalName: l,
                    originalId: a,
                    facing: c
                }
            );
        });
    return (
        e !== s.h7.VIDEO_INPUT &&
            !i &&
            (null === r() || void 0 === r() ? void 0 : null === (n = r().os) || void 0 === n ? void 0 : n.family) != null &&
            /^win/i.test(r().os.family) &&
            a.unshift({
                id: s.w5,
                type: e,
                index: -1,
                name: 'Default'
            }),
        a
    );
}
function l() {
    return new Promise((e) => {
        (0, a.zS)().getInputDevices((t) => e(o(s.h7.AUDIO_INPUT, t)));
    });
}
function u() {
    return new Promise((e) => {
        (0, a.zS)().getOutputDevices((t) => e(o(s.h7.AUDIO_OUTPUT, t)));
    });
}
function c() {
    return new Promise((e) => {
        (0, a.zS)().getVideoInputDevices((t) => e(o(s.h7.VIDEO_INPUT, t)));
    });
}
