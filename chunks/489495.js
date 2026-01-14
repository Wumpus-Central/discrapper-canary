n.d(t, {
    $j: () => b,
    Xv: () => u,
    cq: () => d,
    i0: () => p,
    yR: () => h,
    z: () => f,
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(781311),
    n(704826),
    n(35282),
    n(49124),
    n(853839),
    n(570086),
    n(479048),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var r = n(605387),
    i = n.n(r);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
let s = 22,
    l = (e) => i().decode(e),
    c = (e) => Math.round(e.frames.reduce((e, t) => e + t.delay, 0)),
    u = async (e, t, n) => ({
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: c(l(await t.arrayBuffer())),
        start: 0,
        position: {
            x: 0,
            y: 0,
        },
        zIndex: 100 + n,
        height: 880,
        width: 450,
        name: t.name,
    });
var d = (function (e) {
    return (e.THUMBNAIL = "Thumbnail"), (e.STATIC = "Static"), (e.REDUCED_MOTION = "Reduced Motion"), e;
})({});
let f = (e, t) => ({
        name: t.name,
        src: URL.createObjectURL(t),
        base64: e,
    }),
    p = (e, t) => {
        if (null == e) return;
        let n = new FileReader();
        (n.onload = (e) => {
            null != e.target && "string" == typeof e.target.result && (null == t || t(e.target.result));
        }),
            n.readAsDataURL(e);
    },
    _ = (e) => e.trim().replace(/\s+/g, "_").toLowerCase(),
    m = (e) => (null != e ? _(e.split("-")[0]) : ""),
    h = (e, t) => {
        let n = _(e);
        return (
            "PASTE THIS INTO THE DROP JSON:\n\n" +
            t
                .map((e) => {
                    let t = m(e.name);
                    return JSON.stringify(
                        o(
                            {
                                path: "effects/".concat(n, "/").concat(t, ".png"),
                                loop: e.loop,
                                start: e.start,
                                duration: e.duration,
                                loop_delay: e.loopDelay,
                                z_index: e.zIndex,
                            },
                            null != e.randomizedSources
                                ? { randomized_paths: e.randomizedSources.map((e) => e.src) }
                                : {},
                        ),
                        null,
                        4,
                    )
                        .split("\n")
                        .map((e) => " ".repeat(s) + e)
                        .join("\n");
                })
                .join(",\n") +
            "\n\nPASTE THIS INTO profile_effect_metadata.py:\n\n" +
            g(t)
        );
    },
    g = (e) => {
        let t = "[";
        return (
            e.forEach((e) => {
                let n = m(e.name);
                t += "\n              ProfileEffectKeyFrame(\n                  src='"
                    .concat(n, ".png',\n                  loop=")
                    .concat(e.loop ? "True" : "False", ",\n                  width=")
                    .concat(e.width, ",\n                  height=")
                    .concat(e.height, ",\n                  start=")
                    .concat(e.start, ",\n                  duration=")
                    .concat(e.duration, ",\n                  loop_delay=")
                    .concat(
                        e.loopDelay,
                        ",\n                  position=ProfileEffectPoint(x=0, y=0),\n                  z_index=",
                    )
                    .concat(e.zIndex, ",\n              ),\n          ");
            }),
            (t += "\n]")
        );
    },
    E = (e) => {
        let [t, n] = e.split(","),
            r = atob(n),
            i = t.split(";")[0],
            a = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++) a[e] = r.charCodeAt(e);
        return new Blob([a], { type: i });
    },
    b = (e) => {
        let t = E(e);
        return URL.createObjectURL(t);
    };
