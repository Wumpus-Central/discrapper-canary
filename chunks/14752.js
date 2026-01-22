n.d(t, {
    Ay: () => u,
    GT: () => f,
    Mz: () => p,
    fB: () => b,
    qH: () => d,
    rs: () => m,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(733351),
    n(747238),
    n(812715),
    n(457529),
    n(801460),
    n(508300),
    n(650828),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var r = n(115943),
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

function s(e) {
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
let o = 22,
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
            null == e.target || ("string" == typeof e.target.result && (null == t || t(e.target.result)));
        }),
            n.readAsDataURL(e);
    },
    _ = (e) => e.trim().replace(/\s+/g, "_").toLowerCase(),
    h = (e) => (null != e ? _(e.split("-")[0]) : ""),
    m = (e, t) => {
        let n = _(e);
        return (
            "PASTE THIS INTO THE DROP JSON:\n\n" +
            t
                .map((e) => {
                    let t = h(e.name);
                    return JSON.stringify(
                        s(
                            {
                                path: "effects/".concat(n, "/").concat(t, ".png"),
                                loop: e.loop,
                                start: e.start,
                                duration: e.duration,
                                loop_delay: e.loopDelay,
                                z_index: e.zIndex,
                            },
                            null != e.randomizedSources
                                ? {
                                      randomized_paths: e.randomizedSources.map((e) => e.src),
                                  }
                                : {},
                        ),
                        null,
                        4,
                    )
                        .split("\n")
                        .map((e) => " ".repeat(o) + e)
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
                let n = h(e.name);
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
        return new Blob([a], {
            type: i,
        });
    },
    b = (e) => {
        let t = E(e);
        return URL.createObjectURL(t);
    };
