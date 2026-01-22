n.d(t, {
    DT: () => u,
    P5: () => o,
    _e: () => l,
    tS: () => c,
}),
    n(747238),
    n(812715),
    n(667532);
var r = n(214958),
    i = n.n(r),
    a = n(823598),
    s = n(713754);

function o(e, t) {
    var n;
    let r = !1,
        a = t.map((t, n) => {
            let {
                guid: i,
                guid: a,
                name: o,
                name: l,
                index: c,
                facing: u,
                hardwareId: d,
                containerId: f,
                effects: p,
            } = t;
            return (
                /^default/.test(o)
                    ? ((r = !0), (i = s.dx), (o = o.replace("default", "Default")))
                    : (i = null != i && "" !== i ? i : o),
                null != c && (n = c),
                {
                    id: i,
                    type: e,
                    index: n,
                    name: o,
                    originalName: l,
                    originalId: a,
                    facing: u,
                    hardwareId: d,
                    containerId: f,
                    effects: p,
                }
            );
        });
    return (
        e !== s.oh.VIDEO_INPUT &&
            !r &&
            (null === i() || void 0 === i() || null == (n = i().os) ? void 0 : n.family) != null &&
            /^win/i.test(i().os.family) &&
            a.unshift({
                id: s.dx,
                type: e,
                index: -1,
                name: "Default",
            }),
        a
    );
}

function l() {
    return new Promise((e) => {
        (0, a.lE)().getInputDevices((t) => e(o(s.oh.AUDIO_INPUT, t)));
    });
}

function c() {
    return new Promise((e) => {
        (0, a.lE)().getOutputDevices((t) => e(o(s.oh.AUDIO_OUTPUT, t)));
    });
}

function u() {
    return new Promise((e) => {
        (0, a.lE)().getVideoInputDevices((t) => e(o(s.oh.VIDEO_INPUT, t)));
    });
}
