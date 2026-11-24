let i, n, r;
a.d(t, { default: () => a_ });
var l,
    o = a(477900),
    s = a(582128),
    u = a(503698),
    h = a.n(u),
    c = a(935462),
    f = a(43990),
    d = a(855986),
    m = a(834730),
    g = a(318254),
    p = a(646514),
    w = a(911608),
    v = a(815021),
    x = a(775602),
    y = a(20504),
    b = a(218394),
    A = a(442928),
    S = a(422533);
function R(e) {
    return Math.max(0, Math.min(1, e));
}
function k(e, t, a) {
    var i, n, r;
    return [((i = e[0]), i + (t[0] - i) * a), ((n = e[1]), n + (t[1] - n) * a), ((r = e[2]), r + (t[2] - r) * a)];
}
function T(e, t, a) {
    let i = R((a - e) / (t - e));
    return i * i * (3 - 2 * i);
}
function M(e, t, a) {
    return null == t ? e : e * (1 + (t - 1) * a);
}
function E(e, t) {
    let a = R(t),
        i = e.agitation;
    return {
        ...e,
        radius: M(e.radius, i.radius, a),
        glowIntensity: M(e.glowIntensity, i.glowIntensity, a),
        glowWidth: M(e.glowWidth, i.glowWidth, a),
        noiseSpeed: M(e.noiseSpeed, i.noiseSpeed, a),
        glowTint: k(e.glowTint, i.glowTint, a),
    };
}
let F = [0.5, 0.5],
    P = { coreRadius: 0.25, glowIntensity: 1.8, layerIntensity: 0.6 };
function L(e) {
    let { look: t, agitation: a, surge: i } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
    return E(t.core, a).radius * (1 + n.coreRadius * Math.max(0, i));
}
let C = { Haze: "haze", Streaks: "streaks", Swirl: "swirl", "Swirl echo": "echo" },
    I = [
        {
            strength: 0.5,
            haze: [0.25, 0.4, 0.75],
            streaks: [0.6, 0.7, 0.85],
            swirl: [0.62, 0.85, 0.95],
            echo: [0.55, 0.6, 0.8],
            core: [0.7, 0.9, 1],
            heat: [0.85, 0.9, 1],
        },
        {
            strength: 0.55,
            haze: [0.12, 0.3, 0.8],
            streaks: [0.45, 0.62, 0.9],
            swirl: [0.4, 0.8, 0.97],
            echo: [0.45, 0.55, 0.9],
            core: [0.5, 0.85, 1],
            heat: [0.75, 0.85, 1],
        },
        {
            strength: 0.6,
            haze: [0.05, 0.22, 0.85],
            streaks: [0.3, 0.55, 0.95],
            swirl: [0.2, 0.75, 0.98],
            echo: [0.35, 0.5, 1],
            core: [0.3, 0.8, 1],
            heat: [0.7, 0.8, 1],
        },
        {
            strength: 0.65,
            haze: [0.03, 0.12, 1],
            streaks: [0.15, 0.4, 1],
            swirl: [0.05, 0.6, 1],
            echo: [0.25, 0.35, 1],
            core: [0.1, 0.65, 1],
            heat: [0.6, 0.7, 1],
        },
        {
            strength: 0.7,
            haze: [0, 0.35, 0.6],
            streaks: [0.15, 0.7, 0.8],
            swirl: [0.05, 0.95, 0.85],
            echo: [0.1, 0.6, 0.9],
            core: [0.1, 1, 0.9],
            heat: [0.7, 1, 0.9],
        },
        {
            strength: 0.7,
            haze: [0, 0.45, 0.25],
            streaks: [0.2, 0.8, 0.45],
            swirl: [0.3, 0.95, 0.25],
            echo: [0.1, 0.75, 0.55],
            core: [0.35, 1, 0.3],
            heat: [0.8, 1, 0.6],
        },
        {
            strength: 0.75,
            haze: [0, 0.4, 0.3],
            streaks: [0.58, 0.43, 0.96],
            swirl: [0.2, 0.9, 0.2],
            echo: [0.58, 0.43, 0.96],
            core: [0.25, 1, 0.3],
            heat: [0.7, 0.5, 1],
        },
        {
            strength: 0.75,
            haze: [0.27, 0.05, 0.65],
            streaks: [0.2, 0.27, 1],
            swirl: [0.96, 0.14, 1],
            echo: [0.2, 0.27, 1],
            core: [1, 0.25, 1],
            heat: [1, 0.6, 1],
        },
        {
            strength: 0.75,
            haze: [0.33, 0.03, 0.63],
            streaks: [0.46, 0.33, 1],
            swirl: [0.99, 0.1, 0.45],
            echo: [0, 0.68, 0.66],
            core: [1, 0.39, 0.69],
            heat: [1, 0.7, 0.85],
        },
        {
            strength: 0.8,
            haze: [0.55, 0, 0.1],
            streaks: [1, 0, 0.38],
            swirl: [1, 0.55, 0],
            echo: [1, 0, 0.88],
            core: [1, 0.77, 0],
            heat: [1, 0.92, 0.6],
        },
    ].map((e, t) => ({ ...e, coreScale: 1 + 0.04 * t }));
a(321073);
class _ {
    behind = 0;
    heldAt = null;
    resumedAt = -1 / 0;
    listeners = new Set();
    steps = new Set();
    frame = 0;
    get paused() {
        return null != this.heldAt;
    }
    now() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
        return this.heldAt ?? Math.max(this.resumedAt, e - this.behind);
    }
    setPaused(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now(),
            a = this.heldAt;
        e !== (null != a) &&
            (null == a
                ? (this.heldAt = this.now(t))
                : ((this.resumedAt = a), (this.behind = t - a), (this.heldAt = null)),
            this.schedule(),
            this.listeners.forEach((t) => t(e)));
    }
    watch(e) {
        return (
            this.listeners.add(e),
            () => {
                this.listeners.delete(e);
            }
        );
    }
    run(e) {
        return (
            this.steps.add(e),
            this.schedule(),
            () => {
                (this.steps.delete(e), this.schedule());
            }
        );
    }
    schedule() {
        let e = !this.paused && this.steps.size > 0;
        e && 0 === this.frame
            ? (this.frame = requestAnimationFrame(this.tick))
            : e || 0 === this.frame || (cancelAnimationFrame(this.frame), (this.frame = 0));
    }
    tick = (e) => {
        ((this.frame = 0), this.schedule());
        let t = this.now(e);
        this.steps.forEach((e) => e(t));
    };
}
let W = {
    chroma: 0,
    chromaStart: 0.3,
    chromaFalloff: 1.5,
    chromaTwist: 0,
    chromaSamples: 3,
    chromaWave: 0,
    wave: 0,
    waveLift: 0,
    waveLength: 0.3,
    waveSpeed: 0.15,
    waveSpiral: 0,
    waveReach: 1,
    waveSwell: 0,
    waveSwellSeconds: 5,
    flare: 0,
    flareTint: [1, 0.85, 0.7],
    flareAngle: 2.3,
    flareOrbit: 0,
    flareDistance: 1,
    flareSource: 1,
    flareRays: 0.6,
    flareGhosts: 0.5,
    flareHalo: 0.3,
    vignette: 0,
    tremor: 0,
    heatBoost: 1,
};
function O(e, t, a) {
    var i;
    return null == e && null == t ? void 0 : (i = e ?? 1) + ((t ?? 1) - i) * a;
}
function G(e, t, a) {
    var i, n, r, l, o, s, u, h, c, f, d, m, g, p, w;
    return a <= 0
        ? e
        : a >= 1
          ? t
          : {
                layers: t.layers.map((t, i) => {
                    var n, r, l, o, s, u, h, c, f, d, m, g, p, w, v, x, y, b, A, S, R, T, M, E, F;
                    return (
                        (n = e.layers[i]),
                        {
                            ...t,
                            agitation:
                                ((r = n.agitation),
                                (l = t.agitation),
                                {
                                    opacity: O(r.opacity, l.opacity, a),
                                    waveSpeed: O(r.waveSpeed, l.waveSpeed, a),
                                    flowAmount: O(r.flowAmount, l.flowAmount, a),
                                    spin: O(r.spin, l.spin, a),
                                    maskOuter: O(r.maskOuter, l.maskOuter, a),
                                    scale: O(r.scale, l.scale, a),
                                    intensity: O(r.intensity, l.intensity, a),
                                    glow: O(r.glow, l.glow, a),
                                    tint: k(r.tint, l.tint, a),
                                }),
                            tint: k(n.tint, t.tint, a),
                            opacity: ((o = n.opacity), o + (t.opacity - o) * a),
                            intensity: ((s = n.intensity), s + (t.intensity - s) * a),
                            blackPoint: ((u = n.blackPoint), u + (t.blackPoint - u) * a),
                            gamma: ((h = n.gamma), h + (t.gamma - h) * a),
                            glow: ((c = n.glow), c + (t.glow - c) * a),
                            glowTail: ((f = n.glowTail), f + (t.glowTail - f) * a),
                            glowReach: ((d = n.glowReach), d + (t.glowReach - d) * a),
                            ...(null == n.glowTint && null == t.glowTint
                                ? { glowTint: void 0, glowTintFollow: void 0 }
                                : {
                                      glowTint: k(n.glowTint ?? n.tint, t.glowTint ?? t.tint, a),
                                      glowTintFollow: ((m = +(null == n.glowTint)), m + ((null == t.glowTint) - m) * a),
                                  }),
                            ...(null == n.glowMaskOuter && null == t.glowMaskOuter
                                ? { glowMaskOuter: void 0, glowMaskFollow: void 0 }
                                : {
                                      glowMaskOuter:
                                          ((g = n.glowMaskOuter ?? n.maskOuter),
                                          g + ((t.glowMaskOuter ?? t.maskOuter) - g) * a),
                                      glowMaskFollow:
                                          ((p = +(null == n.glowMaskOuter)), p + ((null == t.glowMaskOuter) - p) * a),
                                  }),
                            whiteout: ((w = n.whiteout), w + (t.whiteout - w) * a),
                            scale: ((v = n.scale), v + (t.scale - v) * a),
                            rotation: ((x = n.rotation), x + (t.rotation - x) * a),
                            spin: ((y = n.spin), y + (t.spin - y) * a),
                            maskInner: ((b = n.maskInner), b + (t.maskInner - b) * a),
                            maskOuter: ((A = n.maskOuter), A + (t.maskOuter - A) * a),
                            waveSpeed: ((S = n.waveSpeed), S + (t.waveSpeed - S) * a),
                            flowAmount: ((R = n.flowAmount), R + (t.flowAmount - R) * a),
                            swirl: ((T = n.swirl), T + (t.swirl - T) * a),
                            pull: ((M = n.pull), M + (t.pull - M) * a),
                            noiseScale: ((E = n.noiseScale), E + (t.noiseScale - E) * a),
                            noiseSeed: ((F = n.noiseSeed), F + (t.noiseSeed - F) * a),
                        }
                    );
                }),
                core:
                    ((i = e.core),
                    (n = t.core),
                    {
                        ...n,
                        agitation:
                            ((r = i.agitation),
                            (l = n.agitation),
                            {
                                radius: O(r.radius, l.radius, a),
                                glowIntensity: O(r.glowIntensity, l.glowIntensity, a),
                                glowWidth: O(r.glowWidth, l.glowWidth, a),
                                noiseSpeed: O(r.noiseSpeed, l.noiseSpeed, a),
                                glowTint: k(r.glowTint, l.glowTint, a),
                            }),
                        radius: ((o = i.radius), o + (n.radius - o) * a),
                        softness: ((s = i.softness), s + (n.softness - s) * a),
                        noiseAmount: ((u = i.noiseAmount), u + (n.noiseAmount - u) * a),
                        noiseScale: ((h = i.noiseScale), h + (n.noiseScale - h) * a),
                        noiseSpeed: ((c = i.noiseSpeed), c + (n.noiseSpeed - c) * a),
                        glowTint: k(i.glowTint, n.glowTint, a),
                        glowIntensity: ((f = i.glowIntensity), f + (n.glowIntensity - f) * a),
                        glowOffset: ((d = i.glowOffset), d + (n.glowOffset - d) * a),
                        glowWidth: ((m = i.glowWidth), m + (n.glowWidth - m) * a),
                        glowTail: ((g = i.glowTail), g + (n.glowTail - g) * a),
                        glowWhiteout: ((p = i.glowWhiteout), p + (n.glowWhiteout - p) * a),
                    }),
                grade: { saturation: ((w = e.grade.saturation), w + (t.grade.saturation - w) * a) },
            };
}
let D = Object.keys(W).filter((e) => "number" == typeof W[e]);
function U(e, t, a, i) {
    for (let r of D) {
        var n;
        i[r] = ((n = e[r]), n + (t[r] - n) * a);
    }
    i.flareTint = k(e.flareTint, t.flareTint, a);
    let r = T(0, 1, 2 * Math.abs(a - 0.5));
    return (
        (i.chromaSamples = a < 0.5 ? e.chromaSamples : t.chromaSamples),
        e.chromaSamples !== t.chromaSamples && ((i.chroma *= r), (i.chromaWave *= r)),
        (i.waveSpiral = a < 0.5 ? e.waveSpiral : t.waveSpiral),
        e.waveSpiral !== t.waveSpiral && ((i.wave *= r), (i.waveLift *= r), (i.chromaWave *= r)),
        i
    );
}
function B(e, t) {
    return {
        ...e,
        layers: e.layers.map((e) => ({
            ...e,
            intensity: e.intensity * t.intensity,
            waveSpeed: e.waveSpeed * t.speed,
            spin: e.spin * t.spin,
            flowAmount: e.flowAmount * t.flow,
        })),
        core: {
            ...e.core,
            radius: e.core.radius * t.coreRadius,
            glowIntensity: e.core.glowIntensity * t.glow,
            noiseSpeed: e.core.noiseSpeed * t.speed,
        },
    };
}
function N(e, t) {
    return {
        layers: e.layers.map((e) => {
            let a = t.layers?.[e.name];
            return null == a ? e : { ...e, ...a, agitation: { ...e.agitation, ...a.agitation } };
        }),
        core: { ...e.core, ...t.core, agitation: { ...e.core.agitation, ...t.core?.agitation } },
        grade: t.grade ?? e.grade,
    };
}
function X(e, t) {
    return null == e ? void 0 : 1 + (e - 1) * t;
}
function z(e, t) {
    let a = e.core.agitation;
    return {
        ...e,
        layers: e.layers.map((e) => ({
            ...e,
            agitation: { ...e.agitation, intensity: X(e.agitation.intensity, t), glow: X(e.agitation.glow, t) },
        })),
        core: {
            ...e.core,
            agitation: {
                ...a,
                radius: X(a.radius, t),
                glowIntensity: X(a.glowIntensity, t),
                glowWidth: X(a.glowWidth, t),
            },
        },
    };
}
let j = {
    phases:
        ((i = N(
            (l = {
                layers: [
                    {
                        name: "Haze",
                        blendMode: "add",
                        channel: "b",
                        tint: [0, 0.1, 1],
                        opacity: 1.0632,
                        intensity: 1.9,
                        blackPoint: 0.0116,
                        gamma: 1.1,
                        glow: 2.1368,
                        glowTail: 0.2912,
                        glowReach: 5,
                        whiteout: 0.8,
                        scale: 1.2716,
                        rotation: 0,
                        spin: -0.1053,
                        maskInner: 0,
                        maskOuter: 1.35,
                        waveSpeed: 0.35,
                        flowAmount: 0.2026,
                        swirl: 0.5,
                        pull: 0.2,
                        noiseScale: 1.6,
                        noiseSeed: 0,
                        agitation: { maskOuter: 1.11, intensity: 1.35, waveSpeed: 2.57, tint: [0.43, 0.09, 0.85] },
                    },
                    {
                        name: "Streaks",
                        blendMode: "add",
                        channel: "g",
                        tint: [0.35, 0.34, 1],
                        opacity: 1.0263,
                        intensity: 1.1789,
                        blackPoint: 0,
                        gamma: 1.2,
                        glow: 1.0632,
                        glowTail: 0.3754,
                        glowReach: 5,
                        whiteout: 0.8,
                        scale: 1.0063,
                        rotation: 0,
                        spin: -0.153,
                        maskInner: 0.2,
                        maskOuter: 1.56,
                        waveSpeed: 0.6737,
                        flowAmount: 0.124,
                        swirl: 1.35,
                        pull: 0.55,
                        noiseScale: 0.5,
                        noiseSeed: 11.3,
                        agitation: {
                            opacity: 1.0526,
                            intensity: 1.32,
                            glow: 1.2807,
                            waveSpeed: 0.6842,
                            flowAmount: 1.2632,
                            spin: 2.5614,
                            maskOuter: 1.7018,
                            tint: [0.5, 0.45, 1],
                        },
                    },
                    {
                        name: "Swirl",
                        blendMode: "add",
                        channel: "r",
                        tint: [0, 0.95, 0.96],
                        opacity: 0.9684,
                        intensity: 3.2,
                        blackPoint: 0.0042,
                        gamma: 1.4274,
                        glow: 0.1368,
                        glowTail: 0.6526,
                        glowReach: 5,
                        whiteout: 0.2386,
                        scale: 1,
                        rotation: 0,
                        spin: -0.2147,
                        maskInner: 0.1,
                        maskOuter: 1.4937,
                        waveSpeed: 0.7439,
                        flowAmount: 0.0393,
                        swirl: 1.7,
                        pull: 0.4,
                        noiseScale: 1.68,
                        noiseSeed: 24.7,
                        agitation: {
                            intensity: 5,
                            glow: 3.2807,
                            waveSpeed: 3.1053,
                            flowAmount: 1.8772,
                            spin: 3,
                            maskOuter: 5,
                            tint: [1, 0.4, 0.8],
                        },
                    },
                    {
                        name: "Swirl echo",
                        blendMode: "add",
                        channel: "r",
                        echoOf: "Swirl",
                        tint: [0.62, 0.3, 1],
                        opacity: 0,
                        intensity: 2.6,
                        blackPoint: 0.0042,
                        gamma: 1.4274,
                        glow: 0.3,
                        glowTail: 0.6526,
                        glowReach: 5,
                        whiteout: 0.2386,
                        scale: 1.0063,
                        rotation: 0.8929,
                        spin: -0.27,
                        maskInner: 0.1,
                        maskOuter: 1.4,
                        waveSpeed: 0.7439,
                        flowAmount: 0.0393,
                        swirl: 1.7,
                        pull: 0.4,
                        noiseScale: 1.68,
                        noiseSeed: 24.7,
                        agitation: {
                            intensity: 4,
                            glow: 3,
                            waveSpeed: 3.1053,
                            flowAmount: 1.8772,
                            spin: 3,
                            maskOuter: 5,
                            tint: [1, 0.35, 0.6],
                        },
                    },
                ],
                core: {
                    radius: 0.334,
                    softness: 0.1,
                    noiseAmount: 0.08,
                    noiseScale: 4.1439,
                    noiseSpeed: 0.2632,
                    glowTint: [0, 0.95, 0.96],
                    glowIntensity: 1.1263,
                    glowOffset: -0.0042,
                    glowWidth: 0.1218,
                    glowTail: 0.1018,
                    glowWhiteout: 0.4,
                    agitation: {
                        radius: 1.5614,
                        glowIntensity: 1.4035,
                        glowWidth: 2.1228,
                        noiseSpeed: 4.5789,
                        glowTint: [1, 0.4, 0.8],
                    },
                },
                grade: { saturation: 1 },
            }),
            {
                layers: {
                    Haze: {
                        intensity: 2.185,
                        spin: -0.1316,
                        waveSpeed: 0.455,
                        flowAmount: 0.2229,
                        glowTint: [0, 0.1, 1],
                        glowMaskOuter: 1.35,
                    },
                    Streaks: {
                        intensity: 1.3557,
                        spin: -0.1913,
                        waveSpeed: 0.8758,
                        flowAmount: 0.1364,
                        glowTint: [0.35, 0.34, 1],
                        glowMaskOuter: 1.56,
                    },
                    Swirl: {
                        intensity: 3.68,
                        spin: -0.2684,
                        waveSpeed: 0.9671,
                        flowAmount: 0.0432,
                        glowTint: [0, 0.95, 0.96],
                        glowMaskOuter: 1.4937,
                    },
                    "Swirl echo": {
                        tint: [0.78, 0.3, 1],
                        opacity: 0.9105,
                        intensity: 5.8386,
                        glow: 0.4211,
                        spin: -0.3804,
                        waveSpeed: 0.9671,
                        flowAmount: 0.0432,
                        glowTint: [0.3, 0.66, 1],
                        glowMaskOuter: 1.4,
                    },
                },
                core: { radius: 0.3741, noiseSpeed: 0.3422, glowIntensity: 1.4642 },
            },
        )),
        (n = N(B(l, { coreRadius: 1.25, glow: 1.5, intensity: 1.25, speed: 1.6, spin: 1.5, flow: 1.3 }), {
            layers: {
                Haze: { tint: [0.22, 0.04, 0.95], agitation: { tint: [0.55, 0.05, 0.8] } },
                Streaks: { tint: [0.55, 0.3, 1], agitation: { tint: [0.85, 0.4, 1] } },
                Swirl: { tint: [0.8, 0.3, 1], agitation: { tint: [1, 0.3, 0.6] } },
                "Swirl echo": { opacity: 0.75, tint: [0, 0.9, 0.96], agitation: { tint: [0.5, 1, 1] } },
            },
            core: { glowTint: [0.8, 0.3, 1], agitation: { glowTint: [1, 0.3, 0.6] } },
        })),
        (r = N(B(l, { coreRadius: 1.4, glow: 1.9, intensity: 1.4, speed: 2, spin: 1.9, flow: 1.5 }), {
            layers: {
                Haze: { tint: [0.4, 0.04, 0.85], agitation: { tint: [0.7, 0.1, 0.6], scale: 1.2 } },
                Streaks: { tint: [0.75, 0.45, 1], agitation: { tint: [1, 0.6, 0.9], scale: 1.15 } },
                Swirl: { tint: [1, 0.4, 0.75], whiteout: 0.5, agitation: { tint: [1, 0.75, 0.6] } },
                "Swirl echo": { opacity: 1, tint: [0.55, 0.35, 1], whiteout: 0.4, agitation: { tint: [0.9, 0.6, 1] } },
            },
            core: { glowTint: [1, 0.8, 0.65], glowWhiteout: 0.7, agitation: { glowTint: [1, 0.95, 0.9] } },
            grade: { ...l.grade, saturation: 1.15 },
        })),
        [
            {
                name: "Stirring",
                threshold: 0,
                look: l,
                fx: { ...W, heatBoost: 1.5 },
                intro: {
                    inhaleSeconds: 0,
                    rings: 1,
                    ringSpacing: 0,
                    ringGain: 0.6,
                    ringFalloff: 1,
                    shake: 0.25,
                    flash: 0,
                    chromaSpike: 0,
                    flareSpike: 0,
                },
            },
            {
                name: "Hungry",
                threshold: 25,
                look: z(i, 0.7),
                fx: {
                    ...W,
                    vignette: 0.15,
                    wave: 0.01929824561403509,
                    waveLift: 3,
                    waveSpeed: -0.0736842105263158,
                    waveSpiral: 3,
                    heatBoost: 1.5,
                },
                intro: {
                    inhaleSeconds: 0.6,
                    rings: 1,
                    ringSpacing: 0,
                    ringGain: 1.2533333333333332,
                    ringFalloff: 1,
                    shake: 1,
                    flash: 0,
                    chromaSpike: 0.023157894736842106,
                    flareSpike: 0.22456140350877193,
                },
            },
            {
                name: "Ravenous",
                threshold: 100,
                look: z(n, 0.5),
                fx: {
                    ...W,
                    chroma: 0.009824561403508772,
                    chromaWave: 0.01,
                    flare: 0.9157894736842105,
                    flareTint: [0.64, 0.4, 1],
                    flareDistance: 0.9333333333333333,
                    flareRays: 0,
                    flareGhosts: 0.4842105263157895,
                    flareHalo: 0,
                    wave: 0.04421052631578948,
                    waveLift: 2.810526315789474,
                    waveLength: 0.1568421052631579,
                    waveSpeed: -0.06666666666666665,
                    waveSpiral: 4,
                    waveReach: 0.38491228070175443,
                    waveSwell: 0.5,
                    waveSwellSeconds: 5,
                    vignette: 0.25,
                    tremor: 0.25,
                    heatBoost: 2,
                },
                intro: {
                    inhaleSeconds: 0.8,
                    rings: 2,
                    ringSpacing: 0.22,
                    ringGain: 1.4,
                    ringFalloff: 0.7,
                    shake: 0.9,
                    flash: 0.35,
                    chromaSpike: 0.06,
                    flareSpike: 0,
                },
            },
            {
                name: "Singularity",
                threshold: 250,
                look: z(r, 0.4),
                fx: {
                    ...W,
                    chroma: 0.023157894736842106,
                    chromaStart: 0.3526,
                    chromaFalloff: 1.9747368421052633,
                    chromaTwist: 0.15789473684210525,
                    chromaSamples: 9,
                    chromaWave: 0.0274,
                    flare: 1.3578947368421053,
                    flareTint: [0.88, 0.32, 0.76],
                    flareAngle: 2.4141,
                    flareOrbit: -0.0105,
                    flareDistance: 0.9275,
                    flareSource: 0.6533,
                    flareRays: 0.4,
                    flareGhosts: 2.0842,
                    flareHalo: 0,
                    vignette: 0.35,
                    tremor: 0.5,
                    wave: 0.04666666666666667,
                    waveLift: 3,
                    waveLength: 0.19245614035087721,
                    waveSpeed: -0.09473684210526312,
                    waveSpiral: 3,
                    waveReach: 0.3950877192982456,
                    waveSwell: 0,
                    waveSwellSeconds: 0.5,
                    heatBoost: 2,
                },
                intro: {
                    inhaleSeconds: 1.5,
                    rings: 3,
                    ringSpacing: 0.2,
                    ringGain: 1.8,
                    ringFalloff: 0.8,
                    shake: 1,
                    flash: 0.8,
                    chromaSpike: 0.1,
                    flareSpike: 1.5,
                },
            },
        ]),
    overdrive: {
        span: 300,
        speed: 1.6,
        spin: 1.5,
        glow: 1.3,
        chroma: 1.8,
        flare: 1.6,
        wave: 1.6,
        heatScale: 2.5,
        ringEvery: 50,
        ringGain: 0.9,
    },
};
function V(e, t) {
    let a = 0;
    for (let i = 0; i < e.length; i++) t >= e[i].threshold && (a = i);
    return a;
}
let H = {
        life: 1.8,
        attack: 0,
        speed: 0.5172,
        ease: 6,
        width: 0.0329,
        soften: 10,
        fade: 4,
        push: 0.3,
        brightness: 0.9649122807017543,
        lift: 4,
        ripple: 0.2137,
        rippleScale: 1.1456,
        spin: 1.5,
    },
    Y = {
        life: 3.2,
        attack: 0.6,
        speed: 0.3,
        ease: 2,
        width: 0.12,
        soften: 0.5,
        fade: 2.5,
        push: 0,
        brightness: 0.5,
        lift: 1.2,
        ripple: 0.04,
        rippleScale: 1.1456,
        spin: 0,
    },
    $ = { push: 0.06, width: 0.05, length: 0.3, glow: 0.3 },
    q = { ...$, push: 0, glow: 0 };
function K(e, t) {
    (e.pulses.push(t), e.pulses.length > 6 && e.pulses.splice(0, e.pulses.length - 6));
}
function Q(e, t) {
    (e.impacts.push(t), e.impacts.length > 8 && e.impacts.splice(0, e.impacts.length - 8));
}
let J = {
    heatPerOrb: 0.05,
    coolSeconds: 2.5,
    graceSeconds: 0.15,
    settleAfterSeconds: 3,
    settleBlendSeconds: 2,
    burstSeconds: 0.5,
    burstAttackSeconds: 0,
    inhaleReleaseSeconds: 0,
    riseBlendSeconds: 0.35,
    riseBlendEaseIn: 0,
    flashSeconds: 0.2,
    flashScale: 1,
    flashAttackSeconds: 0,
    spikeScale: 1,
    maxRings: 0,
    openingDelay: 0.35,
    playOpening: !0,
    motion: 1,
    milestoneShake: 0.5,
    overdriveSmoothing: 0.6,
    impactLife: 0.8,
    pulseLife: H.life,
};
function Z(e) {
    return 1 - (1 - e) ** 3;
}
class ee {
    renderState;
    clock = new _();
    arc;
    tuning;
    fed = 0;
    phaseIndex;
    heat = 0;
    lastTossAt = -1 / 0;
    lastFedAt = -1 / 0;
    lastStepAt = null;
    transition = null;
    opening = { startsAt: null, ringsSent: 0 };
    restFx;
    overdrive = 0;
    flash = null;
    look;
    palette = null;
    recolour = null;
    painted = null;
    listeners = new Set();
    constructor(e, t = J) {
        ((this.arc = e), (this.tuning = t), (this.phaseIndex = V(e.phases, this.fed)));
        let a = e.phases[this.phaseIndex];
        ((this.renderState = {
            look: a.look,
            agitation: 0,
            surge: 0,
            fx: { ...a.fx },
            flash: 0,
            motion: 1,
            impacts: [],
            pulses: [],
            wakes: [],
        }),
            (this.renderState.motion = t.motion),
            (this.look = a.look),
            (this.restFx = { ...a.fx }));
    }
    setTuning(e) {
        this.tuning = e;
    }
    tossOrb(e) {
        ((this.heat = Math.min(1, this.heat + this.tuning.heatPerOrb)), (this.lastTossAt = e), (this.lastFedAt = e));
    }
    consume(e, t, a) {
        ((this.fed += 1), (this.lastFedAt = a), Q(this.renderState, { angle: e, radius: t, bornAt: a }));
        let { phases: i, overdrive: n } = this.arc,
            r = this.fed - i[i.length - 1].threshold,
            l = null == this.transition,
            o = this.phaseIndex === i.length - 1,
            s = n.ringEvery > 0,
            u = r % n.ringEvery == 0;
        l &&
            o &&
            s &&
            r > 0 &&
            u &&
            K(this.renderState, { bornAt: a, gain: n.ringGain, shake: this.tuning.milestoneShake });
    }
    swallow(e, t, a) {
        (Q(this.renderState, { angle: e, radius: t, bornAt: a }),
            K(this.renderState, { bornAt: a, gain: 1.2, shake: 0.5 }));
    }
    setPalette(e) {
        ((this.palette = e), (this.recolour = null));
    }
    earnTier(e, t) {
        ((this.recolour = { from: this.paletteAt(t), startsAt: t + 350, ringSent: !1 }),
            (this.palette = e),
            this.listeners.forEach((e) => e(0.35, 1.3)));
    }
    step(e) {
        var t, a, i, n, r, l, o;
        let s,
            u = null == this.lastStepAt ? 0 : Math.min(0.1, (e - this.lastStepAt) / 1e3);
        this.lastStepAt = e;
        let { tuning: h, renderState: c, arc: f } = this,
            { phases: d } = f;
        ((e - this.lastTossAt) / 1e3 > h.graceSeconds &&
            (this.heat = Math.max(0, this.heat - u / Math.max(0.1, h.coolSeconds))),
            (c.agitation = this.heat),
            (c.motion = h.motion));
        let m = h.settleAfterSeconds > 0 && (e - this.lastFedAt) / 1e3 > h.settleAfterSeconds;
        if (null == this.transition && m && this.fed > 0)
            if (0 === this.phaseIndex) this.fed = 0;
            else {
                let t = this.phaseIndex - 1;
                ((this.fed = d[t].threshold),
                    (this.transition = {
                        from: this.look,
                        fromFx: { ...c.fx },
                        toIndex: t,
                        startedAt: e,
                        ringsSent: 0,
                        settling: !0,
                    }),
                    (this.overdrive = 0));
            }
        let g = V(d, this.fed);
        if (null == this.transition && g !== this.phaseIndex) {
            ((this.transition = {
                from: this.look,
                fromFx: { ...this.restFx },
                toIndex: g,
                startedAt: e,
                ringsSent: 0,
                settling: !1,
            }),
                (this.opening = null));
            let { inhaleSeconds: t } = d[g].intro;
            this.listeners.forEach((e) => e(t, 1));
        }
        let p = 0,
            w = 0,
            v = 0;
        c.flash = 0;
        let x = this.transition;
        if (null == x)
            ((c.look = d[this.phaseIndex].look), Object.assign(this.restFx, d[this.phaseIndex].fx), (c.surge = 0));
        else if (x.settling) {
            let t = d[x.toIndex],
                a = Math.min(1, (e - x.startedAt) / 1e3 / Math.max(0.01, h.settleBlendSeconds)),
                i = T(0, 1, a);
            ((c.look = G(x.from, t.look, i)),
                U(x.fromFx, t.fx, i, this.restFx),
                (c.surge = 0),
                a >= 1 &&
                    ((this.phaseIndex = x.toIndex),
                    (this.transition = null),
                    (c.look = t.look),
                    Object.assign(this.restFx, t.fx)));
        } else {
            let t = d[x.toIndex],
                a = t.intro,
                i = a.inhaleSeconds,
                n = (e - x.startedAt) / 1e3;
            if (n < i)
                ((c.look = x.from),
                    Object.assign(this.restFx, x.fromFx),
                    (v = T(0, 1, n / Math.max(0.01, i))),
                    (c.surge = 0));
            else {
                let r = n - i;
                x.ringsSent = this.sendRings(a, x.ringsSent, r, e);
                let l = Math.min(1, r / Math.max(0.01, h.riseBlendSeconds)),
                    o = Z(l) + (T(0, 1, l) - Z(l)) * h.riseBlendEaseIn;
                ((c.look = G(x.from, t.look, o)), U(x.fromFx, t.fx, o, this.restFx));
                let s =
                    (h.burstAttackSeconds > 0 ? T(0, 1, r / h.burstAttackSeconds) : 1) *
                    Math.exp(-r / Math.max(0.01, h.burstSeconds));
                ((c.surge = s), h.inhaleReleaseSeconds > 0 && (v = Math.exp(-r / h.inhaleReleaseSeconds)));
                let u = x.startedAt + 1e3 * i;
                (this.flash?.startedAt !== u && (this.flash = { startedAt: u, amount: a.flash }),
                    (p = a.chromaSpike * h.spikeScale * s),
                    (w = a.flareSpike * h.spikeScale * s));
                let f = x.ringsSent >= this.ringsFor(a),
                    d = v < 0.02;
                o >= 1 &&
                    r > h.burstAttackSeconds &&
                    s < 0.02 &&
                    d &&
                    f &&
                    ((this.phaseIndex = x.toIndex),
                    (this.transition = null),
                    (c.look = t.look),
                    Object.assign(this.restFx, t.fx),
                    (c.surge = 0));
            }
        }
        h.playOpening || (this.opening = null);
        let y = this.opening;
        if (null != y && null == this.transition) {
            null == y.startsAt && (y.startsAt = e + 1e3 * h.openingDelay);
            let t = (e - y.startsAt) / 1e3;
            if (t >= 0) {
                let a = d[this.phaseIndex].intro;
                ((y.ringsSent = this.sendRings(a, y.ringsSent, t, e)),
                    this.flash?.startedAt !== y.startsAt && (this.flash = { startedAt: y.startsAt, amount: a.flash }),
                    y.ringsSent >= this.ringsFor(a) && t > 1 && (this.opening = null));
            }
        }
        if (null != this.flash) {
            let t = this.flash.amount * this.flashAt((e - this.flash.startedAt) / 1e3);
            t < 1e-4 && e - this.flash.startedAt > 1e3 * h.flashAttackSeconds ? (this.flash = null) : (c.flash = t);
        }
        let b =
            null == this.transition && this.phaseIndex === d.length - 1
                ? (s = this.fed - f.phases[f.phases.length - 1].threshold) <= 0
                    ? 0
                    : 1 - Math.exp(-s / Math.max(1, f.overdrive.span))
                : 0;
        if (
            ((this.overdrive += (b - this.overdrive) * Math.min(1, u / Math.max(0.01, h.overdriveSmoothing))),
            this.overdrive > 0.001)
        ) {
            let e, s, u, h, d;
            ((t = c.look),
                (a = f.overdrive),
                (i = this.overdrive),
                (e = 1 + (a.speed - 1) * i),
                (s = 1 + (a.spin - 1) * i),
                (u = 1 + (a.glow - 1) * i),
                (h = 1 + (a.heatScale - 1) * i),
                (c.look = {
                    ...t,
                    layers: t.layers.map((t) => ({
                        ...t,
                        agitation:
                            null != t.agitation.scale
                                ? { ...t.agitation, scale: 1 + (t.agitation.scale - 1) * h }
                                : t.agitation,
                        waveSpeed: t.waveSpeed * e,
                        spin: t.spin * s,
                        intensity: t.intensity * u,
                    })),
                    core: { ...t.core, noiseSpeed: t.core.noiseSpeed * e, glowIntensity: t.core.glowIntensity * u },
                }),
                (n = this.restFx),
                (r = f.overdrive),
                (l = this.overdrive),
                Object.assign((o = c.fx), n),
                (o.chroma = n.chroma * (1 + (r.chroma - 1) * l)),
                (o.flare = n.flare * (1 + (r.flare - 1) * l)),
                (d = 1 + (r.wave - 1) * l),
                (o.wave = n.wave * d),
                (o.waveLift = n.waveLift * d),
                (o.chromaWave = n.chromaWave * (1 + (r.chroma - 1) * l)),
                (o.waveSpeed = n.waveSpeed * (1 + (r.speed - 1) * l)));
        } else Object.assign(c.fx, this.restFx);
        ((c.fx.chroma += p),
            (c.fx.flare = c.fx.flare * (1 - v) + w),
            (c.fx.vignette = Math.min(1, c.fx.vignette + 0.3 * v)));
        let A = this.recolour;
        (null != A &&
            !A.ringSent &&
            e >= A.startsAt &&
            ((A.ringSent = !0), K(c, { bornAt: e, gain: 1.5, shake: 0.8, size: 1.35, egg: !0 })),
            (this.look = c.look),
            (c.look = this.paint(this.look, e)));
        let S = 1e3 * h.impactLife,
            R = c.impacts;
        for (; R.length > 0 && e - R[0].bornAt > S;) R.shift();
        let k = 1e3 * h.pulseLife,
            M = c.pulses;
        for (; M.length > 0 && e - M[0].bornAt > k;) M.shift();
        return c;
    }
    subscribe(e) {
        return (
            this.listeners.add(e),
            () => {
                this.listeners.delete(e);
            }
        );
    }
    recolourSeconds() {
        return Math.max(0.6, this.tuning.riseBlendSeconds);
    }
    paletteAt(e) {
        var t, a, i, n, r, l;
        let o = this.recolour;
        if (null == o) return this.palette;
        let s = (e - o.startsAt) / 1e3 / this.recolourSeconds();
        return s <= 0
            ? o.from
            : s >= 1
              ? ((this.recolour = null), this.palette)
              : ((t = o.from),
                (a = this.palette),
                (i = Z(s)),
                null == t
                    ? null == a
                        ? null
                        : { ...a, strength: a.strength * i, coreScale: 1 + (a.coreScale - 1) * i }
                    : null == a
                      ? { ...t, strength: t.strength * (1 - i), coreScale: (n = t.coreScale) + (1 - n) * i }
                      : {
                            strength: ((r = t.strength), r + (a.strength - r) * i),
                            haze: k(t.haze, a.haze, i),
                            streaks: k(t.streaks, a.streaks, i),
                            swirl: k(t.swirl, a.swirl, i),
                            echo: k(t.echo, a.echo, i),
                            core: k(t.core, a.core, i),
                            heat: k(t.heat, a.heat, i),
                            coreScale: ((l = t.coreScale), l + (a.coreScale - l) * i),
                        });
    }
    paint(e, t) {
        let a = this.paletteAt(t);
        if (null == a) return e;
        let i = this.painted;
        if (null != i && i.source === e && i.palette === a) return i.look;
        let n = (function (e, t) {
            let { strength: a, coreScale: i } = t;
            return a <= 0 && 1 === i
                ? e
                : {
                      ...e,
                      layers: e.layers.map((e) => {
                          let i = C[e.name];
                          if (null == i) return e;
                          let n = t[i],
                              r = "swirl" === i || "echo" === i ? t.heat : k(n, t.heat, 0.4);
                          return {
                              ...e,
                              tint: k(e.tint, n, a),
                              glowTint: null == e.glowTint ? void 0 : k(e.glowTint, n, a),
                              agitation: { ...e.agitation, tint: k(e.agitation.tint, r, a) },
                          };
                      }),
                      core: {
                          ...e.core,
                          radius: e.core.radius * i,
                          glowTint: k(e.core.glowTint, t.core, a),
                          agitation: { ...e.core.agitation, glowTint: k(e.core.agitation.glowTint, t.heat, a) },
                      },
                  };
        })(e, a);
        return ((this.painted = { source: e, palette: a, look: n }), n);
    }
    sendRings(e, t, a, i) {
        let n = t,
            r = this.ringsFor(e);
        for (; n < r && a >= n * e.ringSpacing;) {
            let t = e.ringFalloff ** n;
            (K(this.renderState, { bornAt: i, gain: e.ringGain * t, shake: Math.min(1, e.shake * t) }), n++);
        }
        return n;
    }
    flashAt(e) {
        let { flashScale: t, flashAttackSeconds: a, flashSeconds: i } = this.tuning;
        return t * (a > 0 ? T(0, 1, e / a) : 1) * Math.exp(-e / Math.max(0.01, i));
    }
    ringsFor(e) {
        let t = this.tuning.maxRings;
        return t > 0 ? Math.min(e.rings, t) : e.rings;
    }
}
let et = {
        count: 234,
        sizeMin: 0.008,
        sizeMax: 0.0216,
        spawnRadius: 1.5,
        orbitSpeed: 0.4053,
        orbitFalloff: 1.5702,
        inwardSpeed: 0.035,
        sinkSpread: 0.6,
        heatSpeed: 2.1228,
        lumpiness: 0.6316,
        tumble: 5.2632,
        bodyTint: [0.03, 0.02, 0.06],
        rimIntensity: 2.5,
        rimWidth: 0.35,
        rimWrap: 0.4,
        rimFalloff: 3,
        impactKick: 1.6842,
        impactReach: 0.4158,
        wakePush: 2.5,
        pulseKick: 0.9333,
        settle: 3.1639,
        tether: 1.5,
        looseShare: 0.25,
        anchoredGive: 0.35,
        kickCap: 1.2,
        eggShare: 0.0075,
        eggMaxLive: 2,
    },
    ea = { ...et, orbitSpeed: 0, inwardSpeed: 0, tumble: 0, impactKick: 0, wakePush: 0, pulseKick: 0 },
    ei = {
        motesPerOrb: 6,
        pulse: H,
        wake: $,
        surge: P,
        rocks: et,
        director: { ...J, pulseLife: Math.max(H.life, 1.2) },
    },
    en = {
        motesPerOrb: 0,
        pulse: Y,
        wake: q,
        surge: { coreRadius: 0.1, glowIntensity: 0.9, layerIntensity: 0.3 },
        rocks: ea,
        director: {
            ...J,
            motion: 0,
            playOpening: !1,
            flashScale: 0.5,
            flashAttackSeconds: 1,
            flashSeconds: 1.4,
            spikeScale: 0,
            maxRings: 1,
            burstAttackSeconds: 0.5,
            burstSeconds: 1.2,
            inhaleReleaseSeconds: 0.8,
            riseBlendSeconds: 1.4,
            riseBlendEaseIn: 1,
            pulseLife: Math.max(Y.life, 1.2),
        },
    };
var er = a(333007),
    el = a(47322);
function eo(e) {
    let { director: t, host: a } = e,
        i = s.useRef(null),
        n = s.useRef(null);
    return (
        s.useEffect(() => {
            let e = i.current,
                r = n.current;
            if (null == e || null == r) return;
            let l = t.clock.now();
            function o() {
                if (null == e || null == r) return;
                let i = a.getBoundingClientRect(),
                    n = a.offsetWidth > 0 ? i.width / a.offsetWidth : 1;
                ((e.style.left = `${-i.left / n}px`),
                    (e.style.top = `${-i.top / n}px`),
                    (e.style.width = `${window.innerWidth / n}px`),
                    (e.style.height = `${window.innerHeight / n}px`));
                let o = 1 - (1 - Math.min(1, (t.clock.now() - l) / 3e5)) ** 2;
                ((e.style.opacity = (+o).toFixed(3)),
                    (r.style.opacity = (1 - o).toFixed(3)),
                    e.style.setProperty("--custom-void-darkening-reach", `${(100 * (0.75 + -0.5 * o)).toFixed(1)}%`));
            }
            o();
            let s = setInterval(o, 1e3);
            return (
                window.addEventListener("resize", o),
                () => {
                    (clearInterval(s), window.removeEventListener("resize", o));
                }
            );
        }, [t, a]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, er.createPortal)((0, o.jsx)("div", { ref: i, className: el.G, "aria-hidden": !0 }), a),
                (0, o.jsx)("div", { ref: n, className: el.n, "aria-hidden": !0 }),
            ],
        })
    );
}
var es = a(982240),
    eu = a(602674),
    eh = a(988468),
    ec = a(164562),
    ef = a(158390),
    ed = a(531685);
let em = new Map(),
    eg = new Map(),
    ep = new Map(),
    ew = 0,
    ev = null,
    ex = 0;
function ey() {
    ((ev = null), (ex += 1), em.clear(), eg.clear(), ep.clear());
}
function eb(e, t) {
    let a = em.get(t);
    if (null != a) return Promise.resolve(a);
    let i = eg.get(t);
    if (null == i) {
        let a = ep.get(t);
        if (null != a && performance.now() < a.retryAt) return Promise.reject(a.error);
        ((i = (async function (e, t) {
            let a = ex;
            try {
                let i = await fetch(t);
                if (!i.ok) throw Error(`Void sound fetch failed with ${i.status}`);
                let n = await e.decodeAudioData(await i.arrayBuffer());
                return (a === ex && (em.set(t, n), ep.delete(t)), n);
            } catch (r) {
                var i, n;
                let e;
                throw (
                    a === ex &&
                        ((i = t),
                        (n = r),
                        (e = ep.get(i)?.backoff ?? new ef.A(1e3, 6e4)),
                        ep.set(i, {
                            backoff: e,
                            retryAt: performance.now() + e.fail(),
                            error: n instanceof Error ? n : Error(String(n)),
                        })),
                    r
                );
            } finally {
                a === ex && eg.delete(t);
            }
        })(e, t)),
            eg.set(t, i));
    }
    return i;
}
async function eA(e, t) {
    try {
        await eb(e, t);
    } catch {}
}
async function eS(e) {
    if ("running" !== e.state && "closed" !== e.state)
        try {
            await e.resume();
        } catch {}
}
function eR(e) {
    return "running" === e.state && ed.A.isVisible();
}
async function ek(e, t) {
    if (eR(e)) return void t();
    if (!ed.A.isVisible()) return;
    let a = performance.now();
    (await eS(e), performance.now() - a <= 100 && eR(e) && t());
}
var eT = a(792251),
    eM = a(803224),
    eE = a(351906);
let eF = [eE.A, eM.A];
function eP() {
    return eE.A.disableSounds || eM.A.getDisableAllSounds();
}
function eL() {
    return (0, eT.w)(S.A.soundLevel, 1);
}
let eC =
        "https://cdn.discordapp.com/assets/content/7dc3297fee2fdfa4133f6d7f6bcd5e7aa04a74b494669580d3ecae9c5680ab9f.mp3",
    eI = [
        "https://cdn.discordapp.com/assets/content/9aa2152d00fccd7f6291ee5f0bc6d112388d200d860fa1437a992843f9f2a441.mp3",
        "https://cdn.discordapp.com/assets/content/026ade3d488417a6c05b705f1b20ad25ab8fd881c6834faf0f01eed851b2342f.mp3",
    ],
    e_ = [
        "https://cdn.discordapp.com/assets/content/1569dc17cc57cdfa7cfef62d6927d6e57716668dcc01c5a34ec60020cc922b80.mp3",
        "https://cdn.discordapp.com/assets/content/f54ea3b51aa4f3743dc25f21d1c037be1e450f5decc2dac1709801fe0d7ce332.mp3",
    ],
    eW =
        "https://cdn.discordapp.com/assets/content/175b8dfc759db0a348f8271a91981f2f2d8947d59e5d3af93c0c7d035cfbbdff.mp3",
    eO = { active: 0, max: 10 },
    eG = { active: 0, max: 6 },
    eD = { active: 0, max: 6 },
    eU = { active: 0, max: 2 },
    eB = { urls: eI, lastIndex: -1, consecutivePlays: 0 },
    eN = { urls: e_, lastIndex: -1, consecutivePlays: 0 },
    eX = 0,
    ez = 0,
    ej = null;
function eV() {
    ((eX = 0), (ez = 0), null != ej && clearTimeout(ej), (ej = null));
}
function eH(e) {
    for (let t of [eC, ...eI, ...e_, eW]) eA(e, t);
}
function eY(e) {
    let { urls: t } = e,
        a = Math.floor(Math.random() * t.length);
    return (
        a === e.lastIndex &&
            e.consecutivePlays >= 2 &&
            (a = (a + 1 + Math.floor(Math.random() * (t.length - 1))) % t.length),
        (e.consecutivePlays = a === e.lastIndex ? e.consecutivePlays + 1 : 1),
        (e.lastIndex = a),
        t[a]
    );
}
function e$() {
    return 1 + (2 * Math.random() - 1) * 0.1;
}
function eq(e, t, a, i) {
    let {
            rate: n = 1,
            startsIn: r = 0,
            endsIn: l,
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        o = em.get(t);
    if (null == o || a.active >= a.max || !eR(e)) return;
    let s = 2 * i * eL() * (eh.Ay.getOutputVolume() / 100);
    if (s <= 0) return;
    let u = e.createGain();
    ((u.gain.value = s), u.connect(e.destination));
    let h = e.createBufferSource();
    ((h.buffer = o),
        (h.playbackRate.value = n),
        h.connect(u),
        (a.active += 1),
        (h.onended = () => {
            ((a.active -= 1), h.disconnect(), u.disconnect());
        }));
    let c = e.currentTime,
        f = null == l ? r : l - o.duration / n;
    f >= 0
        ? h.start(c + f)
        : (u.gain.setValueAtTime(0, c), u.gain.linearRampToValueAtTime(s, c + 0.02), h.start(c, -f * n));
}
let eK =
        "https://cdn.discordapp.com/assets/content/380f46df8cf6698285b496284553910748c0f8e1e40536990388e29342f64919.mp3",
    eQ = { active: 0, max: 1 / 0 };
function eJ() {
    return 0.7 + 0.05 * Math.max(0, (0, ec.VL)((0, ec.ol)(), S.A.getDisplayedTotal() ?? 0));
}
async function eZ(e, t, a, i, n) {
    try {
        let r = await eb(e, t);
        if (i()) return null;
        let l = e.createBufferSource();
        return (
            (l.buffer = r),
            (l.loop = !0),
            (l.loopStart = 0.5),
            (l.loopEnd = 15.5),
            l.connect(a),
            l.start(0, 0.5),
            n?.(),
            l
        );
    } catch {
        return null;
    }
}
var e0 = a(400492);
let e1 = "stage_waiting";
var e2 = a(411259);
let e5 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    e3 = e5.length - 1,
    e6 = {
        cells: e5,
        step(e, t) {
            let a = e === e3 ? 0 : e;
            return a === t
                ? null
                : 9 === a && 0 === t
                  ? { cell: e3, isInstant: !1 }
                  : 0 === a && 9 === t && e !== e3
                    ? { cell: e3, isInstant: !0 }
                    : { cell: t, isInstant: !1 };
        },
        rest: (e) => (e === e3 ? 0 : null),
    },
    e4 = {
        cells: [...e5.slice(0, 10), ...e5.slice(0, 10)],
        step(e, t) {
            let a = e % 10;
            return a === t
                ? null
                : t > a
                  ? { cell: e - a + t, isInstant: !1 }
                  : e < 10
                    ? { cell: t + 10, isInstant: !1 }
                    : { cell: a, isInstant: !0 };
        },
        rest: (e) => (e >= 10 ? e - 10 : null),
    };
class e8 {
    element = null;
    rules;
    digit;
    cell;
    frame = 0;
    constructor(e, t) {
        ((this.rules = e), (this.digit = t), (this.cell = t));
    }
    show(e, t, a) {
        ((this.element = e), (this.digit = t), (this.rules = a), 0 === this.frame && this.roll());
    }
    settle() {
        if (0 !== this.frame) return;
        let e = this.rules.rest(this.cell);
        null != e && (this.place(e, !0), this.rollAfterFrame());
    }
    stop() {
        (cancelAnimationFrame(this.frame), (this.frame = 0));
    }
    roll() {
        let e = this.rules.step(this.cell, this.digit) ?? { cell: this.cell, isInstant: !1 };
        (this.place(e.cell, e.isInstant), e.isInstant && this.rollAfterFrame());
    }
    rollAfterFrame() {
        this.frame = requestAnimationFrame(() => {
            ((this.frame = 0), this.roll());
        });
    }
    place(e, t) {
        ((this.cell = e),
            null != this.element &&
                (this.element.classList.toggle(e2.uR, t),
                this.element.style.setProperty("--custom-rolling-cell", String(e))));
    }
}
function e7(e) {
    let { digit: t, rules: a } = e,
        i = s.useRef(null),
        [n] = s.useState(() => new e8(a, t)),
        [r] = s.useState(() => ({ "--custom-rolling-cell": t }));
    (s.useLayoutEffect(() => {
        n.show(i.current, t, a);
    }, [t, a, n]),
        s.useEffect(() => () => n.stop(), [n]));
    let l = s.useCallback(() => n.settle(), [n]);
    return (0, o.jsx)("span", {
        className: e2.x,
        "aria-hidden": !0,
        children: (0, o.jsx)("span", {
            ref: i,
            className: e2.bB,
            style: r,
            onTransitionEnd: l,
            children: a.cells.map((e, t) => (0, o.jsx)("span", { className: e2.U2, children: e }, t)),
        }),
    });
}
let e9 = /^[0-9]$/;
function te(e) {
    let { value: t, forwardsOnly: a = !1 } = e,
        i = a ? e4 : e6,
        n = t.toLocaleString(),
        r = n.split(""),
        l = r.filter((e) => e9.test(e)).length;
    return (0, o.jsxs)("span", {
        className: e2.PB,
        children: [
            (0, o.jsx)("span", { className: e2.HD, children: n }),
            r.map((e, t) => {
                if (!e9.test(e)) return (0, o.jsx)("span", { "aria-hidden": !0, children: e }, `separator-${t}`);
                let a = l--;
                return (0, o.jsx)(e7, { digit: Number(e), rules: i }, a);
            }),
        ],
    });
}
var tt = a(765548),
    ta = a(31978);
function ti(e) {
    let { title: t, note: a, icon: i, onDone: n } = e,
        [r, l] = s.useState(!1),
        u = (0, tt.A)(n);
    return (
        s.useEffect(() => {
            let e = setTimeout(() => l(!0), 3e3),
                t = setTimeout(() => u(), 3520);
            return () => {
                (clearTimeout(e), clearTimeout(t));
            };
        }, [u]),
        (0, o.jsxs)("div", {
            className: h()(ta.oR, r ? ta.KS : ta.bY),
            role: "status",
            children: [
                null != i && (0, o.jsx)("img", { className: ta.Kk, src: i, alt: "", "aria-hidden": !0 }),
                (0, o.jsxs)("div", {
                    className: ta.Qs,
                    children: [
                        (0, o.jsx)(m.E, {
                            tag: "span",
                            variant: "heading-xs/semibold",
                            color: "text-default",
                            children: t,
                        }),
                        (0, o.jsx)(m.E, { variant: "body-xs/medium", color: "text-subtle", children: a }),
                    ],
                }),
            ],
        })
    );
}
var tn = a(559106),
    tr = a(66455);
function tl() {
    return { x: 0, y: 0, shown: !1, pressedAt: null, onChange: null };
}
let to = [
        [0, 1],
        [0.25, 0.7],
        [0.6, 1.25],
        [1, 1],
    ],
    ts = [0.2, 0.8, 0.3, 1];
function tu(e, t, a) {
    let i = 1 - a;
    return 3 * i * i * a * e + 3 * i * a * a * t + a * a * a;
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
let th = [0, 0.06, 0.14, 0.3],
    tc = 0.9880701754385965;
function tf(e, t) {
    return 0.4 + e + tc * (1 - t) * (1 - t);
}
function td(e, t) {
    return Math.hypot(e, 2 * th[t]);
}
let tm = tf(0, 1),
    tg = Math.log(td(tf(1, 0), th.length - 1) / tm) / 47;
function tp(e) {
    return tm * Math.exp(e * tg);
}
function tw(e) {
    return 1 / (0.9 * (1 - Math.exp(-0.5 / (e * e))));
}
let tv = Array.from({ length: 48 }, (e, t) => 1 + 3 * tp(t)),
    tx = Array.from({ length: 48 }, (e, t) => tw(tp(t)));
function ty(e, t, a, i) {
    let n = Math.max(0, Math.min(47, Math.round(Math.log(i / tm) / tg))),
        r = a * tv[n],
        l = e.globalAlpha,
        o = e.imageSmoothingQuality;
    ((e.globalAlpha = l / tx[n]),
        (e.imageSmoothingQuality = "medium"),
        e.drawImage(t, (n % 8) * 64, 64 * Math.floor(n / 8), 64, 64, -r / 2, -r / 2, r, r),
        (e.imageSmoothingQuality = o),
        (e.globalAlpha = l));
}
function tb(e, t, a) {
    let i = 43758.5453 * Math.sin(12.9898 * e + 78.233 * t + 37.719 * a);
    return i - Math.floor(i);
}
let tA = (function () {
    let e = [0.1 * tb(6, 0, 9) - 0.05, 0.1 * tb(6, 1, 9) - 0.05],
        t = [];
    for (let e = 0; e < 6; e++) {
        let a = ((e + (tb(6, e, 8) - 0.5) * 0.7) / 6) * Math.PI * 2;
        t.push([1.1 * Math.cos(a), 1.1 * Math.sin(a)]);
    }
    return t.map((a, i) => {
        let n = t[(i + 1) % 6];
        return {
            points: [e, a, n],
            cx: (e[0] + 0.5 * a[0] + 0.5 * n[0]) / 2,
            cy: (e[1] + 0.5 * a[1] + 0.5 * n[1]) / 2,
        };
    });
})();
function tS(e, t, a, i) {
    let n = e.globalAlpha,
        r = e.globalCompositeOperation;
    ((e.globalCompositeOperation = "lighter"),
        (e.globalAlpha = n * i),
        e.drawImage(t, -a / 2, -a / 2, a, a),
        (e.globalCompositeOperation = r),
        (e.globalAlpha = n));
}
let tR = Math.PI / 4;
function tk(e) {
    let t = document.createElement("canvas");
    ((t.width = 32), (t.height = 32));
    let a = t.getContext("2d");
    if (null == a) return t;
    let [i, n, r] = e.map((e) => Math.round(255 * R(e))),
        l = a.createRadialGradient(16, 16, 0, 16, 16, 16);
    return (
        l.addColorStop(0, "rgba(255, 255, 255, 1)"),
        l.addColorStop(0.25, `rgba(${i}, ${n}, ${r}, 0.9)`),
        l.addColorStop(1, `rgba(${i}, ${n}, ${r}, 0)`),
        (a.fillStyle = l),
        a.fillRect(0, 0, 32, 32),
        t
    );
}
var tT = a(690941);
let tM = 320;
function tE(e, t, a) {
    let i = t * t,
        n = e.radius + (a - e.radius) * i,
        r = e.angle + e.sweep * Math.pow(t, 1.3);
    return { x: Math.cos(r) * n, y: Math.sin(r) * n, angle: r, radius: n, scale: 1 - 0.8666666666666667 * i, fall: i };
}
function tF(e, t, a) {
    let i = tE(e, t, a),
        n = tE(e, Math.min(1, t + 0.02), a),
        r = (0.02 * e.duration) / 1e3;
    return [(n.x - i.x) / r, (n.y - i.y) / r];
}
function tP(e) {
    let {
            ref: t,
            director: a,
            motesPerOrb: i,
            surge: n,
            wake: r,
            pixelRatio: l,
            fixedCoreRadius: u,
            view: h,
            cursor: c,
            onToss: f,
        } = e,
        d = s.useRef(null),
        m = s.useRef([]),
        g = s.useRef([]),
        p = s.useRef(null),
        w = (0, tr.A)({ motesPerOrb: i, surge: n, wake: r, pixelRatio: l, fixedCoreRadius: u, view: h, onToss: f }),
        v = s.useCallback(() => w.current.fixedCoreRadius ?? L(a.renderState, w.current.surge), [a, w]),
        x = s.useRef(null),
        y = s.useCallback(() => {
            let e = d.current;
            return null == e ? 0 : ((x.current ??= e.clientWidth), x.current);
        }, []);
    s.useEffect(() => {
        let e = d.current;
        if (null == e) return;
        let t = new (e.ownerDocument.defaultView ?? window).ResizeObserver(() => {
            x.current = null;
        });
        return (t.observe(e), () => t.disconnect());
    }, []);
    let b = s.useCallback(
            (e, t) => {
                let a = y();
                if (0 === a) return [0, 1];
                let { view: i } = w.current,
                    n = e - a / 2 - i.x,
                    r = t - a / 2 - i.y,
                    l = Math.cos(i.turn),
                    o = Math.sin(i.turn),
                    s = a / 2 + (n * l + r * o) / i.zoom,
                    u = a / 2 + (r * l - n * o) / i.zoom,
                    h = (s / a - F["0"]) / 0.32,
                    c = (u / a - F["1"]) / 0.32;
                return [Math.atan2(c, h), Math.hypot(h, c)];
            },
            [y, w],
        ),
        A = s.useCallback(
            (e, t) => {
                if (w.current.onToss?.(e, t) === !1) return !1;
                let i = a.clock.now(),
                    [n, r] = b(e, t);
                a.tossOrb(i);
                let l = v(),
                    o = 0.75 + 0.5 * Math.random(),
                    s = 0.18933333333333333 * (0.85 + 0.3 * Math.random()),
                    u = Math.max(r, l + 0.12);
                return (
                    m.current.push({
                        bornAt: i,
                        duration: 1.16 * o * 1e3,
                        angle: n,
                        radius: u,
                        sweep: 1.6 * o * Math.min(1.5, Math.max(0.5, r)),
                        size: s,
                        spin: (Math.random() - 0.5) * 6,
                        seed: 1e3 * Math.random(),
                    }),
                    !0
                );
            },
            [a, v, w, b],
        );
    return (
        s.useImperativeHandle(
            t,
            () => ({
                press(e, t) {
                    A(e, t) && (p.current = { x: e, y: t, since: a.clock.now(), owed: 0 });
                },
                move(e, t) {
                    let a = p.current;
                    null != a && ((a.x = e), (a.y = t));
                },
                release() {
                    p.current = null;
                },
                tossOnce(e, t) {
                    A(e, t);
                },
            }),
            [a, A],
        ),
        s.useEffect(() => {
            let e,
                t = d.current,
                i = t?.getContext("2d");
            if (null == t || null == i) return;
            let n = new Image(),
                r = null,
                l = null,
                o = !1;
            ((n.onload = () => {
                ((r = th.map((e) => {
                    let t = document.createElement("canvas");
                    ((t.width = 240), (t.height = 240));
                    let a = t.getContext("2d");
                    return (
                        null == a ||
                            (e > 0 && (a.filter = `blur(${(96 * e).toFixed(1)}px)`), a.drawImage(n, 72, 72, 96, 96)),
                        t
                    );
                })),
                    (l = (function (e) {
                        let t = (function (e) {
                                let t = document.createElement("canvas");
                                ((t.width = 12), (t.height = 12));
                                let a = t.getContext("2d", { willReadFrequently: !0 });
                                if (null == a) return null;
                                ((a.imageSmoothingQuality = "high"), a.drawImage(e, 0, 0, 12, 12));
                                let i = a.getImageData(0, 0, 12, 12).data,
                                    n = new Float32Array(144);
                                for (let e = 0; e < n.length; e++) n[e] = i[4 * e + 3] / 255;
                                return n;
                            })(e),
                            a = document.createElement("canvas");
                        ((a.width = 512), (a.height = 384));
                        let i = a.getContext("2d");
                        if (null == t || null == i) return null;
                        let n = i.createImageData(a.width, a.height);
                        n.data.fill(255);
                        let r = new Float64Array(768),
                            l = new Float64Array(768),
                            o = new Float64Array(64);
                        for (let e = 0; e < 48; e++) {
                            let i = tp(e),
                                s = i / 2,
                                u = 1 + 3 * i;
                            for (let e = 0; e < 64; e++) {
                                let t = ((e + 0.5) / 64 - 0.5) * u;
                                for (let a = 0; a < 12; a++) {
                                    let i = (t - ((a + 0.5) / 12 - 0.5)) / s;
                                    r[12 * e + a] = Math.exp(-0.5 * i * i) / (s * Math.sqrt(2 * Math.PI) * 12);
                                }
                            }
                            for (let e = 0; e < 12; e++)
                                for (let a = 0; a < 64; a++) {
                                    let i = 0;
                                    for (let n = 0; n < 12; n++) i += t[12 * e + n] * r[12 * a + n];
                                    l[64 * e + a] = i;
                                }
                            let h = 0.9 * tw(i) * 255,
                                c = (e % 8) * 64,
                                f = 64 * Math.floor(e / 8);
                            for (let e = 0; e < 64; e++) {
                                o.fill(0);
                                for (let t = 0; t < 12; t++) {
                                    let a = r[12 * e + t];
                                    for (let e = 0; e < 64; e++) o[e] += l[64 * t + e] * a;
                                }
                                let t = ((f + e) * a.width + c) * 4 + 3;
                                for (let e = 0; e < 64; e++) n.data[t + 4 * e] = o[e] * h;
                            }
                        }
                        return (i.putImageData(n, 0, 0), a);
                    })(n)));
            }),
                (n.crossOrigin = "anonymous"),
                (n.src =
                    "https://cdn.discordapp.com/assets/content/4ace3ad50e89d2094a2794a2239680b88722af7f48d21bf0f89470083a68fe97.png"));
            let s = null,
                u =
                    (((e = new Image()).src =
                        `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M11.75 7.57a5.12 5.12 0 0 1-3.86 3.87.42.42 0 0 0 0 .82 5.1 5.1 0 0 1 3.86 3.86.42.42 0 0 0 .81 0 5.12 5.12 0 0 1 3.87-3.86.42.42 0 0 0 0-.82 5.15 5.15 0 0 1-3.87-3.86.42.42 0 0 0-.81-.01Z"/><path fill="#fff" fill-rule="evenodd" clip-rule="evenodd" d="M11.64.22c.3-.12.62-.12.91 0l7.49 3.1c.29.12.52.35.64.64l3.1 7.49c.12.29.12.62 0 .9l-3.1 7.5c-.12.28-.35.51-.64.63l-7.49 3.1c-.29.13-.62.13-.9 0l-7.5-3.1c-.28-.12-.52-.35-.64-.64l-3.1-7.48c-.12-.3-.12-.62 0-.91l3.1-7.49c.12-.29.36-.52.65-.64l7.48-3.1ZM20.6 11.5 12.5 3.4a.56.56 0 0 0-.8 0l-8.1 8.1a.56.56 0 0 0 0 .8l8.1 8.1c.22.22.57.22.8 0l8.1-8.1a.56.56 0 0 0 0-.8Zm-8.85-3.94a5.12 5.12 0 0 1-3.86 3.87.42.42 0 0 0 0 .82 5.1 5.1 0 0 1 3.86 3.86.42.42 0 0 0 .81 0 5.12 5.12 0 0 1 3.87-3.86.42.42 0 0 0 0-.82 5.15 5.15 0 0 1-3.87-3.86.42.42 0 0 0-.81-.01Z"/></svg>')}`),
                    e),
                h = null,
                f = tk([1, 1, 1]),
                x = null,
                b = [0, 0, 0],
                [S, k, M] = [0, 0, 0],
                E = document.createElement("canvas");
            ((E.width = 128), (E.height = 128));
            let P = E.getContext("2d"),
                L = [],
                C = [],
                I = !0,
                _ = { shown: !1, x: 0, y: 0, scale: 1 },
                W = null,
                O = 1,
                G = 1;
            function D() {
                if (((_.shown = null != W), null == W)) return;
                ((_.x = c.x), (_.y = c.y), (_.scale = O));
                let e = 28 * O;
                (i.setTransform(G, 0, 0, G, 0, 0),
                    (i.globalAlpha = 0.6),
                    i.drawImage(W, c.x - e / 2, c.y - e / 2, e, e),
                    (i.globalAlpha = 1));
            }
            let U = a.clock.now();
            function B(e) {
                let d = Math.min(0.1, (e - U) / 1e3);
                U = e;
                let E = p.current;
                if (null != E) {
                    let t = Math.min(1, (e - E.since) / 1e3 / 4);
                    for (E.owed += d * (3 + 21 * t * t); E.owed >= 1;)
                        if (((E.owed -= 1), !A(E.x, E.y))) {
                            p.current = null;
                            break;
                        }
                }
                let B = y();
                if (0 === B) return;
                let N = Math.round(B * Math.min(devicePixelRatio > 0 ? devicePixelRatio : 1, w.current.pixelRatio));
                ((t.width !== N || t.height !== N) && ((t.width = N), (t.height = N)),
                    (G = N / B),
                    i.setTransform(1, 0, 0, 1, 0, 0));
                let X = u.complete && u.naturalWidth > 0 ? u : null;
                O =
                    null != (W = c.shown ? X : null)
                        ? (function (e, t) {
                              if (null == e.pressedAt) return 1;
                              let a = (t - e.pressedAt) / 240;
                              if (a <= 0 || a >= 1) return 1;
                              let i = (function (e) {
                                  let [t, a, i, n] = ts,
                                      r = 0,
                                      l = 1;
                                  for (let a = 0; a < 16; a++) {
                                      let a = (r + l) / 2;
                                      tu(t, i, a) < e ? (r = a) : (l = a);
                                  }
                                  return tu(a, n, (r + l) / 2);
                              })(a);
                              for (let e = 1; e < to.length; e++) {
                                  let [t, a] = to[e - 1],
                                      [n, r] = to[e];
                                  if (i <= n) return a + ((r - a) * (i - t)) / (n - t);
                              }
                              return 1;
                          })(c, performance.now())
                        : 1;
                let z = null == W ? _.shown : !_.shown || c.x !== _.x || c.y !== _.y || O !== _.scale,
                    j = 0 === m.current.length && 0 === g.current.length,
                    V = !j || I || z;
                if ((V && i.clearRect(0, 0, t.width, t.height), (I = !j), j)) {
                    (a.renderState.wakes.length > 0 && (a.renderState.wakes = []), V && D());
                    return;
                }
                let H = 0.32 * N,
                    { view: Y } = w.current,
                    $ = Math.cos(Y.turn) * Y.zoom,
                    q = Math.sin(Y.turn) * Y.zoom,
                    K = (F["0"] - 0.5) * N,
                    Q = (F["1"] - 0.5) * N;
                i.setTransform(
                    $ * H,
                    q * H,
                    -q * H,
                    $ * H,
                    N / 2 + Y.x * G + $ * K - q * Q,
                    N / 2 + Y.y * G + q * K + $ * Q,
                );
                let J = v(),
                    Z = a.renderState.look.core.glowTint;
                (null == s || Z[0] !== b[0] || Z[1] !== b[1] || Z[2] !== b[2]) &&
                    ((s = tk(Z)),
                    (b[0] = Z[0]),
                    (b[1] = Z[1]),
                    (b[2] = Z[2]),
                    (x = null),
                    (o = !1),
                    ([S, k, M] = Z.map((e) => Math.round(255 * e))));
                let ee = n.complete && n.naturalWidth > 0,
                    et = m.current;
                ((L.length = 0), (C.length = 0));
                let ea = 0;
                for (let t of et) {
                    let u = Math.max(0, (e - t.bornAt) / t.duration);
                    if (u >= 1) {
                        let i = tE(t, 1, J);
                        a.consume(i.angle, i.radius, e);
                        for (let t = 0; t < w.current.motesPerOrb; t++)
                            g.current.push({
                                bornAt: e,
                                life: 0.9 * (0.6 + 0.8 * Math.random()) * 1e3,
                                angle: i.angle + (Math.random() - 0.5) * 0.5,
                                lift: 0.05 + 0.25 * Math.random(),
                                orbit: 1.5 + 2 * Math.random(),
                                size: 0.015 + 0.025 * Math.random(),
                            });
                        continue;
                    }
                    et[ea++] = t;
                    let c = Math.max(0, e - t.bornAt),
                        d = c - tM,
                        m = tE(t, u, J),
                        p = R(d / 1e3 / 0.32),
                        v = d < 0,
                        y = v
                            ? 1
                            : (function (e) {
                                  let t = e / 1e3 / 0.32596491228070174;
                                  return t >= 1
                                      ? 1
                                      : 1 + 1.4203508771929825 * Math.exp(-4.6 * t) * Math.sin(3 * Math.PI * t);
                              })(d),
                        b = t.size * m.scale * y;
                    (L.push(t), C.push(u));
                    let A = 0.003157894736842105 * m.fall,
                        E = (u > 0.85 ? (1 - u) / 0.15 : 1) * (1 - 0.3157894736842105 * m.fall),
                        F = c / tM;
                    if (null != X && F < 1.3) {
                        let e = 1 + 0.35 * (1 - T(0, 1, 4 * F)),
                            a = t.size * m.scale * 1.1 * e;
                        if ((i.save(), (i.globalCompositeOperation = "lighter"), i.translate(m.x, m.y), F < 0.3)) {
                            let e = 1.6 * a * (0.5 + F);
                            ((i.globalAlpha = 1 - F / 0.3), i.drawImage(f, -e / 2, -e / 2, e, e));
                        }
                        let n = T(0, 1, 12 * F) * (1 - T(0, 1, (F - 0.45) / (1.3 - 0.45)));
                        (n > 0 &&
                            ((i.globalAlpha = n),
                            (function (e, t, a) {
                                let i = a * (1 + 3 * 0.3);
                                e.drawImage(t, -i / 2, -i / 2, i, i);
                            })(
                                i,
                                (h ??= (function (e) {
                                    let t = document.createElement("canvas");
                                    ((t.width = 96), (t.height = 96));
                                    let a = t.getContext("2d");
                                    if (null == a) return t;
                                    let i = 96 / (1 + 3 * 0.3),
                                        n = (96 - 96 / (1 + 3 * 0.3)) / 2;
                                    return (
                                        (a.shadowColor = "rgba(255, 255, 255, 0.7)"),
                                        (a.shadowBlur = 0.3 * i),
                                        (a.shadowOffsetX = 96),
                                        a.drawImage(e, n - 96, n, i, i),
                                        t
                                    );
                                })(X)),
                                a,
                            ),
                            i.drawImage(X, -a / 2, -a / 2, a, a)),
                            i.restore());
                    }
                    let I = ee
                            ? (x ??= (function (e, t) {
                                  let a = document.createElement("canvas");
                                  ((a.width = 128), (a.height = 128));
                                  let i = a.getContext("2d");
                                  if (null == i) return a;
                                  let [n, r, l] = t.map((e) => Math.round(255 * R(e)));
                                  return (
                                      i.drawImage(e, 0, 0, 128, 128),
                                      (i.globalCompositeOperation = "color"),
                                      (i.fillStyle = `rgba(${n}, ${r}, ${l}, 0.631578947368421)`),
                                      i.fillRect(0, 0, 128, 128),
                                      (i.globalCompositeOperation = "screen"),
                                      (i.fillStyle = `rgba(${n}, ${r}, ${l}, 0.39649122807017545)`),
                                      i.fillRect(0, 0, 128, 128),
                                      (i.globalCompositeOperation = "destination-in"),
                                      i.drawImage(e, 0, 0, 128, 128),
                                      a
                                  );
                              })(n, Z))
                            : null,
                        _ = T(0, 1, d / 50);
                    (i.save(), (i.globalAlpha = E), i.translate(m.x, m.y));
                    let W = t.spin * u;
                    if ((i.rotate(W), v)) {
                        let e = c / tM;
                        if (e > 0) {
                            (i.save(), (i.globalCompositeOperation = "lighter"), (i.globalAlpha = e * e * 0.9));
                            let t = b * (1 + e) * 1.8;
                            (i.drawImage(s, -t / 2, -t / 2, t, t), i.restore());
                        }
                        (null != I &&
                            (function (e, t, a) {
                                let { size: i, reach: n, seed: r, u: l } = a,
                                    o = e.globalAlpha;
                                tA.forEach((a, s) => {
                                    let u = 0.4 * tb(r, s, 0),
                                        h = T(0, 1, (l - 0.6 * u) / 0.4);
                                    if (h <= 0) return;
                                    let c = R((l - u) / 0.6),
                                        f = 1 - c * c,
                                        d = Math.atan2(a.cy, a.cx) + (tb(r, s, 1) - 0.5) * 0.9,
                                        m = 1.1866666666666665 * n * (0.6 + 0.8 * tb(r, s, 2)) * f;
                                    (e.save(),
                                        (e.globalAlpha = o * Math.min(1, 2 * h)),
                                        e.translate(Math.cos(d) * m, Math.sin(d) * m),
                                        e.translate(a.cx * i, a.cy * i),
                                        e.rotate((tb(r, s, 3) - 0.5) * 3.5 * f),
                                        e.scale(h, h),
                                        e.translate(-a.cx * i, -a.cy * i),
                                        e.beginPath(),
                                        a.points.forEach((t, a) => {
                                            let [n, r] = t;
                                            return 0 === a ? e.moveTo(n * i, r * i) : e.lineTo(n * i, r * i);
                                        }),
                                        e.closePath(),
                                        e.clip(),
                                        e.drawImage(t, -i / 2, -i / 2, i, i),
                                        tS(e, t, i, 0.7087719298245614),
                                        e.restore());
                                });
                            })(i, I, { size: b, reach: t.size * m.scale, seed: t.seed, u: e }),
                            i.restore());
                        continue;
                    }
                    let O = tf(m.fall, p);
                    if (
                        (null == l
                            ? ((i.shadowColor = `rgba(${S}, ${k}, ${M}, 0.9)`), (i.shadowBlur = b * H * O))
                            : o ||
                              (!(function (e, t, a, i) {
                                  let n = e.getContext("2d");
                                  null != n &&
                                      ((n.globalCompositeOperation = "source-in"),
                                      (n.fillStyle = `rgb(${t}, ${a}, ${i})`),
                                      n.fillRect(0, 0, e.width, e.height));
                              })(l, S, k, M),
                              (o = !0)),
                        ee)
                    ) {
                        if (
                            (!(function (e, t, a, i, n) {
                                let { size: r, blur: l, spread: o } = n;
                                if (null == a || l <= 0) {
                                    (null != i && ty(e, i, r, o), e.drawImage(t, -r / 2, -r / 2, r, r));
                                    return;
                                }
                                let s = l / Math.max(r, 1e-4),
                                    u = th.length - 1,
                                    h = th.findIndex((e) => e >= s),
                                    c = -1 === h ? u : Math.max(1, h),
                                    f = c - 1,
                                    d = R((s - th[f]) / (th[c] - th[f])),
                                    m = 2.5 * r,
                                    g = e.globalAlpha;
                                ((e.globalAlpha = g * (1 - d)),
                                    null != i && ty(e, i, r, td(o, f)),
                                    e.drawImage(a[f], -m / 2, -m / 2, m, m),
                                    (e.globalAlpha = g * d),
                                    null != i && ty(e, i, r, td(o, c)),
                                    e.drawImage(a[c], -m / 2, -m / 2, m, m),
                                    (e.globalAlpha = g));
                            })(i, n, r, l, { size: b, blur: A, spread: O }),
                            (i.shadowBlur = 0),
                            null != I && _ < 1)
                        ) {
                            let e = i.globalAlpha;
                            ((i.globalAlpha = e * (1 - _)),
                                i.drawImage(I, -b / 2, -b / 2, b, b),
                                tS(i, I, b, 0.7087719298245614 * (1 - _)),
                                (i.globalAlpha = e));
                        }
                        p < 1 &&
                            null != P &&
                            (function (e, t, a, i) {
                                let { size: n, t: r, turned: l } = i,
                                    o = (r - 0.12) / 0.88;
                                if (o <= 0 || o >= 1) return;
                                let s = (2 * (o < 0.5 ? 2 * o * o : 1 - 2 * (1 - o) * (1 - o)) - 1) * 121.6,
                                    u = tR - l,
                                    h = Math.cos(u),
                                    c = Math.sin(u);
                                if (Math.abs(s) - 28.16 >= 64 * (Math.abs(h) + Math.abs(c))) return;
                                let f = 64 + h * s,
                                    d = 64 + c * s,
                                    m = t.createLinearGradient(
                                        f - 28.16 * h,
                                        d - 28.16 * c,
                                        f + 28.16 * h,
                                        d + 28.16 * c,
                                    );
                                (m.addColorStop(0, "rgba(255, 255, 255, 0)"),
                                    m.addColorStop(0.42, "rgba(255, 255, 255, 0.5)"),
                                    m.addColorStop(0.5, "rgba(255, 255, 255, 1)"),
                                    m.addColorStop(0.58, "rgba(255, 255, 255, 0.5)"),
                                    m.addColorStop(1, "rgba(255, 255, 255, 0)"),
                                    (t.globalCompositeOperation = "source-over"),
                                    t.clearRect(0, 0, 128, 128),
                                    (t.fillStyle = m),
                                    t.fillRect(0, 0, 128, 128),
                                    (t.globalCompositeOperation = "destination-in"),
                                    t.drawImage(a, 0, 0, 128, 128));
                                let g = e.globalCompositeOperation,
                                    p = e.globalAlpha;
                                e.globalCompositeOperation = "lighter";
                                for (let a = 1.2350877192982457; a > 0; a -= 1)
                                    ((e.globalAlpha = p * Math.min(1, a)), e.drawImage(t.canvas, -n / 2, -n / 2, n, n));
                                ((e.globalCompositeOperation = g), (e.globalAlpha = p));
                            })(i, P, n, { size: b, t: p, turned: W });
                    } else
                        ((i.fillStyle = `rgb(${S}, ${k}, ${M})`),
                            i.beginPath(),
                            i.arc(0, 0, b / 2, 0, 2 * Math.PI),
                            i.fill());
                    i.restore();
                }
                et.length = ea;
                let ei = [],
                    en = Math.max(1, Math.min(4, Math.floor(24 / Math.max(1, L.length)))),
                    er = w.current.wake.length;
                for (let e = L.length - 1; e >= 0 && ei.length < 24; e--)
                    !(function (e, t, a, i, n) {
                        let { trail: r, segments: l } = n,
                            o = Math.min(1, 6 * a) * (1 - Math.max(0, (a - 0.85) / 0.15));
                        if (o <= 0) return;
                        let s = r / l,
                            [u, h] = tF(t, a, i),
                            c = Math.hypot(u, h),
                            f = c > 1e-4 ? s / (c * (t.duration / 1e3)) : 0;
                        for (let n = 0; n < l; n++) {
                            let c = a - n * f;
                            if (c <= 0 && n > 0) break;
                            let d = tE(t, Math.max(0, c), i),
                                [m, g] = 0 === n ? [u, h] : tF(t, Math.max(0, c), i),
                                p = n * s;
                            e.push({
                                x: d.x,
                                y: d.y,
                                vx: m,
                                vy: g,
                                strength: o * Math.exp(-p / Math.max(r, 0.001)),
                                spacing: s,
                                widthScale: 1 + 3 * p,
                                head: 0 === n,
                                tail: n === l - 1 || a - (n + 1) * f <= 0,
                            });
                        }
                    })(ei, L[e], C[e], J, { trail: er, segments: Math.min(en, 24 - ei.length) });
                a.renderState.wakes = ei;
                let el = g.current;
                for (let t of ((i.globalCompositeOperation = "lighter"), (ea = 0), el)) {
                    let a = Math.max(0, (e - t.bornAt) / t.life);
                    if (a >= 1) continue;
                    el[ea++] = t;
                    let n = J * (1 + t.lift * (1 - a)),
                        r = t.angle + t.orbit * a * (t.life / 1e3),
                        l = t.size * (1 - 0.5 * a);
                    ((i.globalAlpha = 1 - a), i.drawImage(s, Math.cos(r) * n - l, Math.sin(r) * n - l, 2 * l, 2 * l));
                }
                ((el.length = ea), (i.globalCompositeOperation = "source-over"), (i.globalAlpha = 1), D());
            }
            let N = 0;
            c.onChange = () => {
                a.clock.paused &&
                    0 === N &&
                    (N = requestAnimationFrame(() => {
                        ((N = 0), B(a.clock.now()));
                    }));
            };
            let X = a.clock.run(B);
            return () => {
                (X(), cancelAnimationFrame(N), (c.onChange = null), (n.onload = null));
            };
        }, [c, a, A, y, v, w]),
        (0, o.jsx)("canvas", { ref: d, className: tT.q, "aria-hidden": !0 })
    );
}
let tL = new (a(626584).A)("OrbVoid");
function tC(e) {
    return e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function tI(e) {
    return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
}
function t_(e, t, a) {
    let i = e.createShader(e.VERTEX_SHADER),
        n = e.createShader(e.FRAGMENT_SHADER),
        r = null != i && null != n ? e.createProgram() : null;
    return null == i || null == n || null == r
        ? (e.deleteShader(i), e.deleteShader(n), null)
        : (e.shaderSource(i, t),
          e.compileShader(i),
          e.shaderSource(n, a),
          e.compileShader(n),
          e.attachShader(r, i),
          e.attachShader(r, n),
          e.linkProgram(r),
          { program: r, vertex: i, fragment: n });
}
function tW(e, t, a) {
    let i = e.getExtension("KHR_parallel_shader_compile"),
        n = 0;
    return (
        !(function r() {
            ((n = 0),
                null != i &&
                !e.isContextLost() &&
                t.some((t) => null != t && !1 === e.getProgramParameter(t.program, i.COMPLETION_STATUS_KHR))
                    ? (n = requestAnimationFrame(r))
                    : a());
        })(),
        () => cancelAnimationFrame(n)
    );
}
function tO(e, t) {
    if (null == t) return null;
    let { program: a, vertex: i, fragment: n } = t,
        r = !0 === e.getProgramParameter(a, e.LINK_STATUS);
    if (!r) {
        for (let t of [i, n])
            !0 !== e.getShaderParameter(t, e.COMPILE_STATUS) &&
                tL.error("shader failed to compile", e.getShaderInfoLog(t));
        tL.error("program failed to link", e.getProgramInfoLog(a));
    }
    return (e.deleteShader(i), e.deleteShader(n), r) ? a : (e.deleteProgram(a), null);
}
function tG(e, t) {
    null != t && (e.deleteShader(t.vertex), e.deleteShader(t.fragment), e.deleteProgram(t.program));
}
function tD(e, t) {
    let a = new Map();
    return (i) => {
        if (null == t) return null;
        let n = a.get(i);
        return (void 0 === n && ((n = e.getUniformLocation(t, i)), a.set(i, n)), n);
    };
}
function tU(e, t) {
    e.isConnected || t.getExtension("WEBGL_lose_context")?.loseContext();
}
function tB(e) {
    return new Promise((t, a) => {
        let i = new Image();
        ((i.onload = () => t(i)),
            (i.onerror = () => a(Error(`could not load ${e}`))),
            (i.crossOrigin = "anonymous"),
            (i.src = e));
    });
}
var tN = a(463297);
let tX =
        "https://cdn.discordapp.com/assets/content/09b8825721e9829ee508c103dd42eab4e76d12012702f0bbf9e96a652e80bbb2.webp",
    tz = ["r", "g", "b"];
function tj(e) {
    return `${(0.32 * e * 200).toFixed(2)}%`;
}
function tV(e) {
    let { look: t } = e,
        [a] = s.useState(() => ({
            matrix: (function (e) {
                let { layers: t } = e;
                return [0, 1, 2]
                    .map((e) => {
                        let a = tz.map((a) =>
                            t
                                .filter((e) => e.channel === a)
                                .reduce((t, a) => t + tC(a.tint[e]) * a.opacity * a.intensity, 0)
                                .toFixed(4),
                        );
                        return `${a.join(" ")} 0 0`;
                    })
                    .concat("0 0 0 1 0")
                    .join(" ");
            })(t),
            core: (function (e) {
                let { core: t } = e,
                    a = R(t.glowIntensity - 0.65) * t.glowWhiteout,
                    i = t.glowTint.map((e) => Math.round((e + (1 - e) * a) * 255)).join(" "),
                    n = t.radius + t.glowOffset,
                    r = `rgb(0 0 0) ${tj(t.radius - t.softness)}, rgb(${i}) ${tj(n)}, rgb(${i} / 50%) ${tj(n + t.glowWidth)}, rgb(${i} / 0%) ${tj(n + 3 * t.glowWidth)}`;
                return `radial-gradient(circle closest-side at ${100 * F["0"]}% ${100 * F["1"]}%, ${r})`;
            })(t),
        })),
        i = s.useId();
    return (0, o.jsxs)("div", {
        className: tN.Hc,
        children: [
            (0, o.jsx)("svg", {
                className: tN.pb,
                "aria-hidden": !0,
                children: (0, o.jsx)("filter", {
                    id: i,
                    colorInterpolationFilters: "linearRGB",
                    children: (0, o.jsx)("feColorMatrix", { type: "matrix", values: a.matrix }),
                }),
            }),
            (0, o.jsx)("img", { className: tN.pN, src: tX, alt: "", draggable: !1, style: { filter: `url("#${i}")` } }),
            (0, o.jsx)("div", { className: tN.I8, style: { background: a.core } }),
        ],
    });
}
let tH = new Float32Array(1),
    tY = new Int32Array(tH.buffer);
function t$(e, t, a, i, n) {
    for (let o = a; o < i; o++)
        if (e[o] !== t[o]) {
            var r, l;
            if (n <= 0 || !(Math.abs(((r = e[o]), (tY[0] = r), tH[0] - ((l = t[o]), (tY[0] = l), tH[0]))) <= n))
                return !1;
        }
    return !0;
}
class tq {
    floats = new Float32Array(1024);
    ints = new Int32Array(this.floats.buffer);
    calls = [];
    locations = [];
    sizes = [];
    count = 0;
    length = 0;
    sentCount = -1;
    changed = !1;
    reshaped = !1;
    stirred = !1;
    sent = null;
    begin() {
        ((this.count = 0), (this.length = 0), (this.stirred = !1));
    }
    differs() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        if (!this.changed && this.count === this.sentCount) return !1;
        if (e <= 0 || this.reshaped || this.count !== this.sentCount) return !0;
        let { ints: t, sent: a } = this;
        if (null == a) return ((this.sent = new Int32Array(t.length)), !0);
        let i = 0;
        for (let n = 0; n < this.count; n++) {
            let r = i + this.sizes[n];
            if (!t$(t, a, i, r, "uniform1i" === this.calls[n] || "uniform1iv" === this.calls[n] ? 0 : e)) return !0;
            i = r;
        }
        return !1;
    }
    moved() {
        return this.stirred;
    }
    send(e) {
        let { floats: t, ints: a } = this,
            i = 0;
        for (let n = 0; n < this.count; n++) {
            let r = this.calls[n],
                l = this.locations[n],
                o = this.sizes[n];
            switch (r) {
                case "uniform1f":
                    e.uniform1f(l, t[i]);
                    break;
                case "uniform2f":
                    e.uniform2f(l, t[i], t[i + 1]);
                    break;
                case "uniform3f":
                    e.uniform3f(l, t[i], t[i + 1], t[i + 2]);
                    break;
                case "uniform1i":
                    e.uniform1i(l, a[i]);
                    break;
                case "uniform1iv":
                    e.uniform1iv(l, a, i, o);
                    break;
                default:
                    e[r](l, t, i, o);
            }
            i += o;
        }
        ((this.sentCount = this.count),
            (this.changed = !1),
            (this.reshaped = !1),
            null != this.sent &&
                (this.sent.length < this.length && (this.sent = new Int32Array(a.length)),
                this.sent.set(a.subarray(0, this.length))));
    }
    uniform1f(e, t) {
        (this.set("uniform1f", e, 1), this.holdFloat(t));
    }
    uniform2f(e, t, a) {
        (this.set("uniform2f", e, 2), this.holdFloat(t), this.holdFloat(a));
    }
    uniform3f(e, t, a, i) {
        (this.set("uniform3f", e, 3), this.holdFloat(t), this.holdFloat(a), this.holdFloat(i));
    }
    uniform1i(e, t) {
        (this.set("uniform1i", e, 1), this.hold(t));
    }
    uniform1fv(e, t) {
        this.setFloats("uniform1fv", e, t);
    }
    uniform2fv(e, t) {
        this.setFloats("uniform2fv", e, t);
    }
    uniform3fv(e, t) {
        this.setFloats("uniform3fv", e, t);
    }
    uniform4fv(e, t) {
        this.setFloats("uniform4fv", e, t);
    }
    uniform1iv(e, t) {
        this.set("uniform1iv", e, t.length);
        for (let e = 0; e < t.length; e++) this.hold(t[e]);
    }
    setFloats(e, t, a) {
        this.set(e, t, a.length);
        for (let e = 0; e < a.length; e++) this.holdFloat(a[e]);
    }
    set(e, t, a) {
        let i = this.count++;
        (this.calls[i] !== e || this.locations[i] !== t || this.sizes[i] !== a) &&
            ((this.calls[i] = e),
            (this.locations[i] = t),
            (this.sizes[i] = a),
            (this.changed = !0),
            (this.reshaped = !0),
            (this.stirred = !0));
    }
    holdFloat(e) {
        ((tH[0] = e), this.hold(tY[0]));
    }
    hold(e) {
        let t = this.length++;
        (t === this.ints.length && this.grow(),
            this.ints[t] !== e && ((this.ints[t] = e), (this.changed = !0), (this.stirred = !0)));
    }
    grow() {
        let e = new Int32Array(2 * this.ints.length);
        (e.set(this.ints), (this.ints = e), (this.floats = new Float32Array(e.buffer)));
    }
}
class tK {
    instances = new Float32Array(1792);
    x = new Float32Array(256);
    y = new Float32Array(256);
    vr = new Float32Array(256);
    vt = new Float32Array(256);
    size = new Float32Array(256);
    seed = new Float32Array(256);
    rotation = new Float32Array(256);
    tumbleRate = new Float32Array(256);
    age = new Float32Array(256);
    sink = new Float32Array(256);
    home = new Float32Array(256);
    give = new Float32Array(256);
    loose = new Uint8Array(256);
    shape = new Int8Array(256).fill(-1);
    liveSilhouettes = 0;
    filled = !1;
    kickedImpacts = new WeakSet();
    kickedPulses = new WeakSet();
    wakeWidthSquared = [];
    step(e) {
        let { tuning: t } = e,
            a = Math.max(0, Math.min(256, Math.round(t.count)));
        if (!this.filled) {
            for (let t = 0; t < a; t++) this.spawn(t, e, !0);
            this.filled = !0;
        }
        let i = Math.min(Math.max(e.dt, 0), 0.05),
            n = 1 + (t.heatSpeed - 1) * R(e.agitation);
        (this.applyImpacts(e, a), this.applyPulses(e, a));
        let { wakes: r } = e,
            l = 0 !== t.wakePush ? r.length : 0,
            { wakeWidthSquared: o } = this;
        for (let t = 0; t < l; t++) {
            let a = Math.max(e.wake.width * r[t].widthScale * 2, 0.001);
            o[t] = a * a;
        }
        let s = 1 - Math.exp(-t.settle * i),
            u = t.spawnRadius + 0.25;
        for (let h = 0; h < a; h++) {
            let a = this.x[h],
                c = this.y[h],
                f = Math.max(Math.hypot(a, c), 1e-4),
                d = Math.atan2(c, a);
            if (l > 0) {
                let e = 0,
                    n = 0;
                for (let t = 0; t < l; t++) {
                    let i = r[t],
                        l = a - i.x,
                        s = c - i.y,
                        u = Math.exp(-(l * l + s * s) / o[t]) * i.strength;
                    ((e += i.vx * u), (n += i.vy * u));
                }
                let s = t.wakePush * this.give[h] * i;
                this.push(h, f, e * s, n * s);
            }
            let m = t.inwardSpeed * n * this.sink[h];
            this.home[h] -= m * i;
            let g = t.tether * (1 === this.loose[h] ? 0.3 : 1),
                p = t.orbitSpeed * n * Math.max(f, 0.2) ** -t.orbitFalloff;
            ((this.vr[h] += (-m - g * (f - this.home[h]) - this.vr[h]) * s), (this.vt[h] += (p * f - this.vt[h]) * s));
            let w = Math.max(f + this.vr[h] * i, 1e-4),
                v = Math.min(0.95 * e.coreRadius, this.home[h]);
            (0 === this.loose[h] && w < v && ((w = v), (this.vr[h] = Math.max(this.vr[h], 0))),
                (d += (this.vt[h] / f) * i),
                (this.x[h] = Math.cos(d) * w),
                (this.y[h] = Math.sin(d) * w));
            let x = this.shape[h] >= 0 ? 0.25 : 1;
            ((this.rotation[h] += this.tumbleRate[h] * t.tumble * x * n * i),
                (this.age[h] += i),
                (w < 0.8 * e.coreRadius || w > u + 0.5) && this.spawn(h, e, !1),
                this.write(h, e));
        }
        return a;
    }
    push(e, t, a, i) {
        let n = this.x[e] / t,
            r = this.y[e] / t;
        ((this.vr[e] += a * n + i * r), (this.vt[e] += -a * r + i * n));
    }
    spawn(e, t, a) {
        let { tuning: i, coreRadius: n } = t,
            r = Math.random() * Math.PI * 2,
            l = Math.max(1.3 * n, 0.2),
            o = a ? l + Math.random() * (i.spawnRadius + 0.25 - l) : i.spawnRadius + 0.25 * Math.random();
        ((this.x[e] = Math.cos(r) * o), (this.y[e] = Math.sin(r) * o));
        let s = R(i.sinkSpread);
        ((this.sink[e] = 1 + s * (2 * Math.random() - 1)),
            (this.vr[e] = -i.inwardSpeed * this.sink[e]),
            (this.vt[e] = i.orbitSpeed * Math.max(o, 0.2) ** -i.orbitFalloff * o),
            (this.home[e] = o));
        let u = Math.random() ** 2.2;
        ((this.size[e] = i.sizeMin + (i.sizeMax - i.sizeMin) * u),
            this.shape[e] >= 0 && this.liveSilhouettes--,
            (this.shape[e] = this.pickSilhouette(t)),
            this.shape[e] >= 0 && ((this.size[e] = 0.028 + (0.036 - 0.028) * Math.random()), this.liveSilhouettes++),
            (this.seed[e] = Math.random()),
            (this.rotation[e] = Math.random() * Math.PI * 2),
            (this.tumbleRate[e] = (2 * Math.random() - 1) * (0.3 + 0.7 * (1 - u))),
            (this.loose[e] = +(Math.random() < i.looseShare)),
            (this.give[e] = (1 === this.loose[e] ? 1 : R(i.anchoredGive)) * (1 - 0.4 * u)),
            (this.age[e] = 0.8 * !!a));
    }
    hatch(e, t) {
        if (0 === e.eggLayers) return;
        let { tuning: a, coreRadius: i } = e,
            n = 1.6 * i,
            r = -1,
            l = 0,
            o = 0;
        for (let e = 0; e < t; e++) {
            if (this.shape[e] >= 0) continue;
            let t = Math.hypot(this.x[e], this.y[e]);
            t >= n && t <= 1.1 ? Math.random() * ++o < 1 && (r = e) : 0 === o && Math.random() * ++l < 1 && (r = e);
        }
        r < 0 ||
            ((this.shape[r] = Math.floor(Math.random() * e.eggLayers)),
            (this.size[r] = 0.028 + (0.036 - 0.028) * Math.random()),
            this.liveSilhouettes++,
            (this.loose[r] = 0),
            (this.give[r] = R(a.anchoredGive)),
            (this.vr[r] = -a.inwardSpeed * this.sink[r]),
            (this.age[r] = 0));
    }
    pickSilhouette(e) {
        let { eggShare: t, eggMaxLive: a } = e.tuning;
        return 0 === e.eggLayers || this.liveSilhouettes >= a || Math.random() >= t
            ? -1
            : Math.floor(Math.random() * e.eggLayers);
    }
    write(e, t) {
        let { tuning: a, coreRadius: i } = t,
            n = Math.hypot(this.x[e], this.y[e]),
            r = T(0.85 * i, 1.15 * i, n),
            l = r * T(0, 0.8, this.age[e]) * (1 - T(a.spawnRadius + 0.25, a.spawnRadius + 0.25 + 0.3, n)),
            o = 7 * e;
        ((this.instances[o] = this.x[e]),
            (this.instances[o + 1] = this.y[e]),
            (this.instances[o + 2] = this.size[e] * (0.5 + 0.5 * r)),
            (this.instances[o + 3] = this.rotation[e]),
            (this.instances[o + 4] = this.seed[e]),
            (this.instances[o + 5] = l),
            (this.instances[o + 6] = this.shape[e]));
    }
    applyImpacts(e, t) {
        let { tuning: a } = e,
            i = Math.max(a.impactReach, 0.001);
        for (let n of e.impacts) {
            if (this.kickedImpacts.has(n)) continue;
            this.kickedImpacts.add(n);
            let e = Math.cos(n.angle) * n.radius,
                r = Math.sin(n.angle) * n.radius;
            for (let n = 0; n < t; n++) {
                let t = this.x[n] - e,
                    l = this.y[n] - r,
                    o = Math.max(Math.hypot(t, l), 1e-4),
                    s = this.kick(a, n, a.impactKick * Math.exp(-((o / i) ** 2))),
                    u = Math.max(Math.hypot(this.x[n], this.y[n]), 1e-4);
                this.push(n, u, (t / o) * s, (l / o) * s);
            }
        }
    }
    applyPulses(e, t) {
        let { tuning: a } = e;
        for (let i of e.pulses)
            if (!(i.bornAt > e.now || this.kickedPulses.has(i))) {
                this.kickedPulses.add(i);
                for (let e = 0; e < t; e++) {
                    let t = Math.max(Math.hypot(this.x[e], this.y[e]), 1e-4);
                    this.vr[e] += this.kick(a, e, (a.pulseKick * i.gain) / Math.max(t, 0.5));
                }
                !0 === i.egg && this.hatch(e, t);
            }
    }
    kick(e, t, a) {
        let i = Math.max(e.kickCap, 0.001);
        return i * Math.tanh((a * this.give[t]) / i);
    }
}
function tQ() {
    return { x: 0, y: 0, turn: 0, zoom: 1 };
}
let tJ = [
    {
        id: "mushroom",
        src: "https://cdn.discordapp.com/assets/content/66f00596e147cc3e98bc676b44cd1d5ec4e16af04b514ddac9e4a4446a67501e.svg",
    },
    {
        id: "pickaxe",
        src: "https://cdn.discordapp.com/assets/content/c8e34520b14f4625fd684a878a7d145a8fcb4246543da5116f7b473ab6293396.svg",
    },
    {
        id: "rubberDucky",
        src: "https://cdn.discordapp.com/assets/content/edeec4bbf1960d0974db5d5c39cffd5db85784fcd9c518b81e9a136ca63469ac.svg",
    },
    {
        id: "wumpusLeaf",
        src: "https://cdn.discordapp.com/assets/content/d9503e74fd5682aa3aefbc412182292a416c616b196a0b55e076c36b85f1d6d5.svg",
    },
];
function tZ(e, t, a, i, n) {
    let { sourceCosts: r, nearestSamples: l, boundaries: o } = n;
    ((l[0] = 0), (o[0] = -1e20), (o[1] = 1e20), (r[0] = e[t]));
    for (let n = 1, s = 0, u = 0; n < i; n++) {
        r[n] = e[t + n * a];
        let i = n * n;
        do {
            let e = l[s];
            u = (r[n] - r[e] + i - e * e) / (n - e) / 2;
        } while (u <= o[s] && --s > -1);
        ((l[++s] = n), (o[s] = u), (o[s + 1] = 1e20));
    }
    for (let n = 0, s = 0; n < i; n++) {
        for (; o[s + 1] < n;) s++;
        let i = l[s],
            u = n - i;
        e[t + n * a] = r[i] + u * u;
    }
}
function t0(e, t, a) {
    for (let i = 0; i < t; i++) tZ(e, i, t, t, a);
    for (let i = 0; i < t; i++) tZ(e, i * t, 1, t, a);
}
let t1 = null,
    t2 = `
float travel(float age, float ease) {
  return 1.0 - pow(1.0 - clamp(age, 0.0, 1.0), max(ease, 1.0));
}
`,
    t5 = `
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float total = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    total += valueNoise(p) * amplitude;
    p *= 2.02;
    amplitude *= 0.5;
  }
  return total;
}
`,
    t3 = `
vec3 linearToSrgb(vec3 c) {
  vec3 lo = c * 12.92;
  vec3 hi = 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(vec3(0.0031308), c));
}
`,
    t6 = `
float waveAt(float r, float theta, float coreR, float wavelength, float cycle, float spiral, float reach) {
  float beyond = r - coreR;
  if (beyond <= 0.0) return 0.0;
  float envelope = smoothstep(0.0, 0.08, beyond) * exp(-beyond / max(reach, 1e-3));
  float phase = 6.2831853 * (beyond / max(wavelength, 1e-3) - cycle) + spiral * theta;
  return sin(phase) * envelope;
}
`,
    t4 = `#version 300 es
in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  vUv.y = 1.0 - vUv.y;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,
    t8 = `#version 300 es
precision highp float;

#define MAX_LAYERS 8
#define MAX_IMPACTS 8
#define MAX_PULSES 6
#define MAX_WAKES 24
#define GLOW_LEVELS 9
#define MIP_GLOW_LEVELS 5

in vec2 vUv;
out vec4 fragColor;

/**
 * The packed plate. Each channel is a separate layer's art. It is uploaded as
 * sRGB, so reads come back in linear light and everything below composites
 * the way Nuke does. It carries mips, which are the glows: each level is the
 * art blurred to twice the size of the one before, already in linear light.
 */
uniform sampler2D uPlate;
/**
 * The plate's widest glows: layer n is the plate blurred by the octave
 * MIP_GLOW_LEVELS + 1 + n, as a Gaussian, in linear light.
 */
uniform highp sampler2DArray uWideGlow;
/**
 * 1 for art authored to fill the frame, whose corners are real art rather
 * than whatever lies past a disc. Off, every layer fades out before the
 * plate's safe radius so a turning read never runs off its edge.
 */
uniform float uPlateFill;

/** Where the void sits on screen, uv. The plate's art is centred on the same point. */
uniform vec2 uCenter;
uniform vec2 uRadius;

// --- Core -----------------------------------------------------------------
// Distances are in rim units, like the layer masks.
uniform float uCoreRadius;
uniform float uCoreSoftness;
/** Edge wander as a fraction of the radius. */
uniform float uCoreNoise;
uniform float uCoreNoiseScale;
/** The edge's own clock, integrated on the CPU at its noise speed. */
uniform float uCoreTime;
uniform vec3 uGlowTint;
uniform float uGlowIntensity;
uniform float uGlowOffset;
uniform float uGlowWidth;
uniform float uGlowTail;
uniform float uGlowWhiteout;

/** Saturation over the whole composite. 1 leaves it untouched. */
uniform float uSaturation;

// --- Impacts ----------------------------------------------------------------
uniform int uImpactCount;
/** x: angle, y: radius in rim units, z: age in seconds, w: strength. */
uniform vec4 uImpact[MAX_IMPACTS];
uniform float uImpactLife;
uniform float uImpactRingSpeed;
uniform float uImpactRingWidth;
uniform float uImpactSoften;
/** 1 travels at constant speed; above 1 starts faster and settles to a stop, reaching the same distance. */
uniform float uImpactEase;
uniform float uImpactNoise;
uniform float uImpactPush;
uniform float uImpactFlare;
uniform float uImpactFlareSize;
/** How much the ring brightens the art it crosses, as a gain on it. */
uniform float uImpactLift;
uniform float uImpactBulge;

// --- Pulses -----------------------------------------------------------------
uniform int uPulseCount;
/** Age in seconds and gain. */
uniform vec2 uPulse[MAX_PULSES];
/** Each pulse's own noise seed, fixed for its life, so its ripple doesn't change when an older ring leaves the list. */
uniform float uPulseSeed[MAX_PULSES];
/** Each pulse's width as a multiple of the tuned width: 1 for a level-up's ring, more for a badge tier's. */
uniform float uPulseSize[MAX_PULSES];
uniform float uPulseLife;
/** Seconds a ring takes to fade in. 0 arrives at full strength. */
uniform float uPulseAttack;
uniform float uPulseSpeed;
uniform float uPulseWidth;
uniform float uPulseSoften;
uniform float uPulseFade;
uniform float uPulseEase;
/** How much a passing ring brightens the art, as a gain on it. */
uniform float uPulseLift;
uniform float uPulsePush;
uniform float uPulseBrightness;
uniform float uPulseRipple;
uniform float uPulseRippleScale;
/** Radians the ripple turns over a pulse's life. */
uniform float uPulseSpin;

// --- Wave ---------------------------------------------------------------------
/** Push at a crest, rim units, with the swell and heat already in. 0 skips it. */
uniform float uWave;
/** Lift at a crest, likewise. */
uniform float uWaveLift;
uniform float uWaveLength;
uniform float uWaveCycle;
/** Whole spiral arms, rounded on the CPU: a fraction would leave a seam where the angle wraps. */
uniform float uWaveSpiral;
uniform float uWaveReach;

${t6}

// --- Wakes ------------------------------------------------------------------
uniform int uWakeCount;
/** xy: position in rim units, zw: velocity in rim units per second. */
uniform vec4 uWake[MAX_WAKES];
/** x: strength, y: spacing to the neighbouring samples, z: width scale, w: 1 head + 2 tail. */
uniform vec4 uWakeShape[MAX_WAKES];
uniform float uWakePush;
uniform float uWakeWidth;
uniform float uWakeLength;
uniform float uWakeGlow;

uniform int uLayerCount;
/** Picks the layer's channel by dotting against the texel. */
uniform vec3 uChannelMask[MAX_LAYERS];
uniform vec3 uTint[MAX_LAYERS];
uniform float uOpacity[MAX_LAYERS];
uniform float uIntensity[MAX_LAYERS];
uniform float uBlackPoint[MAX_LAYERS];
uniform float uGamma[MAX_LAYERS];
uniform float uLayerGlow[MAX_LAYERS];
uniform float uLayerGlowTail[MAX_LAYERS];
/** How many octaves the glow spans. */
uniform int uLayerGlowReach[MAX_LAYERS];
/** The glow's own color, linear. The layer's tint unless it was given one. */
uniform vec3 uGlowTintLayer[MAX_LAYERS];
/** The glow's own outer mask, so a bloom can spread past the art it comes from. */
uniform float uGlowMaskOuter[MAX_LAYERS];
uniform float uWhiteout[MAX_LAYERS];
uniform float uScale[MAX_LAYERS];
/**
 * Static offset plus everything spin has turned the layer through, integrated
 * on the CPU. Never time * spin here: spin changes with agitation and phases,
 * and multiplying a new spin by the whole elapsed time jumps the layer.
 */
uniform float uRotation[MAX_LAYERS];
uniform float uMaskInner[MAX_LAYERS];
uniform float uMaskOuter[MAX_LAYERS];
uniform float uFlowAmount[MAX_LAYERS];
uniform float uSwirl[MAX_LAYERS];
uniform float uPull[MAX_LAYERS];
uniform float uNoiseScale[MAX_LAYERS];
uniform float uNoiseSeed[MAX_LAYERS];
/** Each layer's own clock, integrated on the CPU at its own wave speed. */
uniform float uFlowTime[MAX_LAYERS];
/** 0 adds the layer to what is beneath; 1 composites it over, dimming what is behind. */
uniform int uBlendMode[MAX_LAYERS];
/** The layer whose flow each layer rides: its own index, or an echo's source. */
uniform int uFlowSource[MAX_LAYERS];
/** Whether a layer's flow has to be computed: it is visible itself, or a visible echo rides it. */
uniform int uFlowNeeded[MAX_LAYERS];

${t3}
${t2}
${t5}

/**
 * Curl of a noise field. Taking the perpendicular of the gradient gives a
 * divergence-free field -- nothing piles up or thins out -- which is the
 * difference between smoke rolling over itself and every wisp sliding the
 * same direction.
 */
vec2 curlNoise(vec2 p, float t) {
  const float e = 0.015;
  vec2 drift = vec2(0.0, t * 0.02);
  float n = fbm(p + drift);
  float nx = fbm(p + vec2(e, 0.0) + drift);
  float ny = fbm(p + vec2(0.0, e) + drift);
  vec2 gradient = vec2(nx - n, ny - n) / e;
  return vec2(gradient.y, -gradient.x);
}

/**
 * Reads a layer's channel from the plate at a mip level. The level is always
 * explicit: left to the hardware, the polar read's derivatives jump where atan
 * wraps and near the centre, and it would pick a blurred level along that seam.
 */
float sampleLayer(vec3 mask, vec2 uv, float level) {
  return dot(textureLod(uPlate, uv, level).rgb, mask);
}

/** Nuke Grade's blackpoint: this much of the channel reads as black, and the rest is stretched back to 0-1. */
float grade(float value, float blackPoint) {
  return max(value - blackPoint, 0.0) / max(1.0 - blackPoint, 1e-3);
}

/**
 * Largest radius whose full circle still fits inside the plate, rim units. Past
 * it a read runs off the edge along the axes while the corners are still valid
 * texels, which is what turns the composite into a rotating polygon.
 */
float plateSafeRadius() {
  return min(
    min(uCenter.x, 1.0 - uCenter.x) / uRadius.x,
    min(uCenter.y, 1.0 - uCenter.y) / uRadius.y
  );
}

/**
 * Untouched up to knee, then eased toward limit without reaching it. The slope
 * starts at 1 and only falls, so it never runs backwards.
 */
float squeeze(float x, float knee, float limit) {
  float room = max(limit - knee, 1e-4);
  return x <= knee ? x : knee + room * (1.0 - exp(-(x - knee) / room));
}

/**
 * Pulls a flowed read back onto the art. The flow is added in uv after the
 * plate fades are worked out, so a read whose base sits well inside the safe
 * circle can still be carried a quarter of the frame past it. Unchecked, it
 * lands on the plate's corners, which turn as square edges, or off the plate.
 *
 * The squeeze only ever compresses: it never folds. Pulling the coordinate
 * back to the pixel's own texel did fold -- a read sliding back along the
 * flow -- and a fold mirrors the art, so arcs at the edge curved the wrong way.
 */
vec2 keepOnPlate(vec2 uv) {
  if (uPlateFill > 0.5) {
    // Art to the corners has the whole square, so keep each axis inside it.
    vec2 off = uv - 0.5;
    vec2 held = vec2(squeeze(abs(off.x), 0.46, 0.499), squeeze(abs(off.y), 0.46, 0.499));
    return 0.5 + sign(off) * held;
  }
  // A disc of art has its safe circle, and the squeeze starts where the
  // layers' fade does, so what it compresses is already on its way out.
  float safeR = plateSafeRadius();
  vec2 rel = (uv - uCenter) / uRadius;
  float rr = length(rel);
  float held = squeeze(rr, safeR * 0.80, safeR * 0.98);
  return uCenter + rel * (held / max(rr, 1e-5)) * uRadius;
}

/**
 * One read of a layer about a base position: the two flow samples crossfaded
 * and graded, and its glow, kept apart because each has its own tint and mask.
 */
vec2 readLayer(
  vec3 mask,
  vec2 baseUv,
  vec2 flowA,
  vec2 flowB,
  float blend,
  float blackPoint,
  float gamma,
  float glowAmount,
  float glowTail,
  int glowReach
) {
  vec2 uvA = keepOnPlate(baseUv + flowA);
  vec2 uvB = keepOnPlate(baseUv + flowB);

  float value = mix(sampleLayer(mask, uvA, 0.0), sampleLayer(mask, uvB, 0.0), blend);
  value = pow(grade(value, blackPoint), max(gamma, 0.01));

  // --- Glow ----------------------------------------------------------------
  // Nuke's exponential glow: the art blurred at doubling sizes, each weighted
  // tail times the one before. The mips are the finer blurs for free; the
  // widest come from the Gaussians. A tail above 1 weights the wide end
  // heaviest, which is how a big soft bloom is built. It shares the
  // blackpoint, so the floor stays black, but not the gamma -- crushing a
  // blur's low end is crushing its tail. One read at the crossfaded position
  // is enough; the blend is invisible at this softness and it halves the taps.
  float glow = 0.0;
  if (glowAmount > 0.001) {
    vec2 glowUv = mix(uvA, uvB, blend);
    float weight = 1.0;
    float total = 0.0;
    float bloom = 0.0;
    for (int k = 1; k <= GLOW_LEVELS; k++) {
      if (k > glowReach) break;
      float blurred = k <= MIP_GLOW_LEVELS
        ? sampleLayer(mask, glowUv, float(k))
        : dot(textureLod(uWideGlow, vec3(glowUv, float(k - MIP_GLOW_LEVELS - 1)), 0.0).rgb, mask);
      bloom += grade(blurred, blackPoint) * weight;
      total += weight;
      weight *= glowTail;
    }
    glow = glowAmount * bloom / max(total, 1e-4);
  }
  return vec2(value, glow);
}
/**
 * Softened rings the core glow stacks, each twice the width of the one before.
 * Four keeps the widest at 8 widths. Past that the tail is too faint to see as
 * a glow but not faint enough to vanish: encoded to sRGB, a linear 0.005 is a
 * visible floor, and it lays a wash of the glow color over every gap.
 */
#define GLOW_OCTAVES 4

void main() {
  // Normalise into a circle so a tilted ellipse could be treated as polar.
  vec2 d = (vUv - uCenter) / uRadius;

  // Every layer is faded out before the plate's safe circle, whatever its mask
  // is set to -- and so is anything that lights the void, or it would draw the
  // plate's square on its own.
  float safeR = plateSafeRadius();
  // Art that fills the frame has no such edge, and fading there is a wall
  // that stops pulses dead a third of the way to the corners.
  float inArt = max(1.0 - smoothstep(safeR * 0.7, safeR * 0.98, length(d)), uPlateFill);

  // --- Impacts ---------------------------------------------------------------
  // Each landing sends a ring outward from the point it struck. The ring
  // displaces where everything below is read from, so the art itself is shoved
  // aside as it passes rather than having a ring drawn over it. The point
  // flares, and the core's edge swells toward the side it was fed from.
  //
  // The ring dissipates as it goes: it widens, its push spreads thinner over
  // that width, and noise bends it further out of round the older it gets. The
  // fade is squared, so it is mostly gone by the middle of its life.
  vec2 push = vec2(0.0);
  float flare = 0.0;
  float bulge = 0.0;
  float impactLift = 0.0;
  float pixelTheta = atan(d.y, d.x);
  for (int i = 0; i < MAX_IMPACTS; i++) {
    if (i >= uImpactCount) break;
    vec4 impact = uImpact[i];
    float age = impact.z / max(uImpactLife, 0.01);
    if (age >= 1.0) continue;
    float fade = (1.0 - age) * (1.0 - age);
    float strength = impact.w * fade;
    vec2 at = vec2(cos(impact.x), sin(impact.x)) * impact.y;
    vec2 away = d - at;
    float dist = length(away);
    vec2 heading = away / max(dist, 1e-4);
    // Noise read by direction from the landing, so it bends the ring rather
    // than speckling it. Seeded per slot so neighbouring rings differ.
    float warp = (fbm(heading * 1.7 + float(i) * 13.1 + impact.z * 0.8) - 0.5) * 2.0 * uImpactNoise * age;
    float width = uImpactRingWidth * (1.0 + impact.z * uImpactSoften);
    float reach = uImpactRingSpeed * uImpactLife * travel(age, uImpactEase);
    float ringDistance = (dist + warp - reach) / max(width, 1e-3);
    // Spread thinner as it widens, so a softened ring is also a weaker one.
    float ring = exp(-ringDistance * ringDistance) * uImpactRingWidth / max(width, 1e-3);
    push += heading * ring * strength * uImpactPush;
    impactLift += ring * strength * uImpactLift;
    float spot = dist / max(uImpactFlareSize, 1e-3);
    flare += (exp(-spot * spot) * fade + ring * 0.3) * strength;
    // Angular distance, wrapped so the swell is continuous across atan's seam.
    float turn = atan(sin(pixelTheta - impact.x), cos(pixelTheta - impact.x));
    bulge += exp(-turn * turn * 4.0) * strength;
  }

  // --- Pulses ----------------------------------------------------------------
  // A phase break's rings. They leave from the core's edge, not its centre, so
  // they appear the instant they fire, and run out to the frame. The ripple is
  // noise read around the ring, drifting with its age, so each ring wobbles on
  // its way out, and the direction it is read in turns with the ring's travel,
  // so the wobble spins as it goes. Like the impact rings, they widen as
  // they go, and fade over their life. Gain -- higher each phase -- brightens without
  // pushing harder, so a late level-up burns hotter without tearing the art.
  // They are not masked by inArt, so they run their whole life out past the frame.
  float pulseGlow = 0.0;
  float pulseLift = 0.0;
  vec2 heading0 = d / max(length(d), 1e-4);
  for (int i = 0; i < MAX_PULSES; i++) {
    if (i >= uPulseCount) break;
    vec2 pulse = uPulse[i];
    if (pulse.x < 0.0) continue;
    float life = max(uPulseLife, 0.01);
    float age = pulse.x / life;
    if (age >= 1.0) continue;
    float fade = pow(1.0 - age, max(uPulseFade, 0.05));
    if (uPulseAttack > 0.0) fade *= smoothstep(0.0, uPulseAttack, pulse.x);
    float travelled = travel(age, uPulseEase);
    // Reading the noise at a direction turned backwards makes the pattern
    // itself turn forwards.
    float turn = -uPulseSpin * travelled;
    vec2 spun = mat2(cos(turn), sin(turn), -sin(turn), cos(turn)) * heading0;
    float ripple = (fbm(spun * uPulseRippleScale + uPulseSeed[i] * 7.7 + pulse.x * 0.9) - 0.5) * 2.0 * uPulseRipple;
    float front = uCoreRadius + uPulseSpeed * life * travelled + ripple;
    float width = uPulseWidth * uPulseSize[i] * (1.0 + pulse.x * uPulseSoften);
    float ringDistance = (length(d) - front) / max(width, 1e-3);
    // Softening only widens the ring; how it dims is left to the life fade.
    float ring = exp(-ringDistance * ringDistance) * fade;
    push += heading0 * ring * uPulsePush;
    pulseGlow += ring * uPulseBrightness * pulse.y;
    pulseLift += ring * uPulseLift * pulse.y;
  }

  // --- Wave ------------------------------------------------------------------
  // A constant ripple running out from the core: it bends where the art is
  // read from, as the rings do, and its crests lift what they pass over.
  if (uWave > 0.0 || uWaveLift > 0.0) {
    float wave = waveAt(length(d), atan(d.y, d.x), uCoreRadius, uWaveLength, uWaveCycle, uWaveSpiral, uWaveReach) * inArt;
    push += heading0 * wave * uWave;
    float crest = max(wave, 0.0);
    pulseLift += crest * crest * uWaveLift;
  }

  // --- Wakes -----------------------------------------------------------------
  // Each orb in flight drags the art along its heading. The wake is short ahead
  // of the orb and trails behind it, widening as it goes, so it reads as the
  // void being stirred by something passing through it.
  //
  // A wake arrives as a chain of samples along the orb's actual path. Between
  // samples each one fades linearly into its neighbour, so where two overlap
  // they sum to exactly one -- the chain reads as one continuous trail that
  // bends at every sample rather than as beads. Only the ends differ: the head
  // keeps a soft lead ahead of the orb, and the tail trails off exponentially.
  float wakeGlow = 0.0;
  for (int i = 0; i < MAX_WAKES; i++) {
    if (i >= uWakeCount) break;
    vec4 wake = uWake[i];
    float speed = length(wake.zw);
    if (speed < 1e-4) continue;
    vec2 ahead = wake.zw / speed;
    vec2 side = vec2(-ahead.y, ahead.x);
    vec2 rel = d - wake.xy;
    float along = dot(rel, ahead);
    float across = dot(rel, side);
    float behind = max(-along, 0.0);
    vec4 form = uWakeShape[i];
    float spacing = max(form.y, 1e-3);
    bool head = mod(form.w, 2.0) >= 1.0;
    bool tail = form.w >= 2.0;
    float lengthwise = along < 0.0
      ? (tail ? exp(along / max(uWakeLength, 1e-3)) : max(0.0, 1.0 + along / spacing))
      : (head ? exp(-(along * along) / max(uWakeWidth * uWakeWidth, 1e-6)) : max(0.0, 1.0 - along / spacing));
    float spread = uWakeWidth * form.z * (1.0 + behind * 3.0);
    float sideways = exp(-(across * across) / max(spread * spread, 1e-6));
    float shape = lengthwise * sideways * form.x * uWakeWidth / spread;
    push += ahead * shape * uWakePush;
    wakeGlow += shape;
  }
  // The core is drawn from where the pixel really is, not where the push reads
  // from: displacing its coordinates drags the black disc around with the art,
  // which at any real push strength reads as a rendering fault.
  vec2 still = d;
  float stillR = length(still);
  d -= push;

  float r = length(d);
  float theta = atan(d.y, d.x);

  vec2 border = min(vUv, 1.0 - vUv);
  float frameFade = smoothstep(0.0, 0.02, min(border.x, border.y));


  vec3 accum = vec3(0.0);

  // --- Flow fields -------------------------------------------------------------
  // Worked out up front, once per layer that needs one, so an echo can ride its
  // source's field rather than paying for its own. The density flicker comes
  // from the same field, so it is shared the same way.
  vec2 flows[MAX_LAYERS];
  float densities[MAX_LAYERS];
  for (int i = 0; i < MAX_LAYERS; i++) {
    flows[i] = vec2(0.0);
    densities[i] = 0.5;
    if (i >= uLayerCount) break;
    if (uFlowNeeded[i] == 0) continue;
    // The seed is what keeps each layer's distortion its own.
    vec2 noiseUv = vUv * uNoiseScale[i] + uNoiseSeed[i];
    float t = uFlowTime[i];
    vec2 flow = curlNoise(noiseUv, t) * 0.9;
    flow += curlNoise(noiseUv * 0.46 + 4.7, t * 1.7) * 0.6;
    flows[i] = flow;
    // Density flicker: brighten where the flow compresses, so strands read as
    // thickening and thinning rather than only moving.
    densities[i] = fbm(noiseUv * 1.5 + flow * 0.5 + vec2(0.0, t * 0.05));
  }

  for (int i = 0; i < MAX_LAYERS; i++) {
    if (i >= uLayerCount) break;
    float opacity = uOpacity[i];
    if (opacity <= 0.001) continue;

    float flowTime = uFlowTime[i];
    int flowSource = uFlowSource[i];

    // The layer's own polar frame: scaled, turned, and turning.
    float layerR = r / max(uScale[i], 0.01);
    float layerTheta = theta + uRotation[i];
    vec2 around = vec2(cos(layerTheta), sin(layerTheta));

    // --- Flow ------------------------------------------------------------
    // Displacing a still image can only ever wobble it: the offset has to return
    // to zero or the picture tears, so the cloud oscillates around a rest pose.
    // Advection instead lets material travel continuously along a flow field,
    // and two half-cycle-offset samples crossfaded together hide the reset.
    vec2 flow = flows[flowSource];

    vec2 tangential = vec2(-sin(theta), cos(theta));
    vec2 inward = normalize(uCenter - vUv + vec2(1e-5));
    vec2 velocity = flow + tangential * uSwirl[i] + inward * uPull[i];

    float rate = 0.14;
    float phaseA = fract(flowTime * rate);
    float phaseB = fract(flowTime * rate + 0.5);
    // Weight each sample by how far it is from its own reset, so the one about
    // to snap back is always the one fading out.
    float blend = abs(1.0 - 2.0 * phaseA);
    // Not eased off at the frame's edge: ramping a quarter-frame offset to 0
    // over a 2% border folds the read there and mirrors the art. Reads are
    // kept on the plate by keepOnPlate instead.
    float amount = uFlowAmount[i];
    vec2 flowA = velocity * (phaseA - 0.5) * amount;
    vec2 flowB = velocity * (phaseB - 0.5) * amount;

    vec3 mask = uChannelMask[i];
    float blackPoint = uBlackPoint[i];
    float gamma = uGamma[i];
    float glowAmount = uLayerGlow[i];
    float glowTail = uLayerGlowTail[i];
    int glowReach = uLayerGlowReach[i];

    // The plate's own limit, applied in the layer's frame because that is where
    // the read happens. A generous mask can never outrun the artwork.
    // Art that fills the frame skips it: its reads only run off the plate once
    // turned, and those already fall back to the pixel's own texel.
    float inPlate = max(1.0 - smoothstep(safeR * 0.80, safeR * 0.98, layerR), uPlateFill);

    vec2 baseUv = uCenter + around * layerR * uRadius;
    vec2 value = readLayer(mask, baseUv, flowA, flowB, blend, blackPoint, gamma, glowAmount, glowTail, glowReach) * inPlate;

    value *= 1.0 + (densities[flowSource] - 0.5) * 0.35;

    // --- Radial mask -------------------------------------------------------
    // The inner edge keeps a layer off the core; the outer edge is what hides
    // art that runs to the frame, so a scaled or turned layer never drags a
    // straight edge through the composite.
    float inner = smoothstep(uMaskInner[i], uMaskInner[i] + 0.22, layerR);
    float outer = 1.0 - smoothstep(uMaskOuter[i] - 0.35, uMaskOuter[i], layerR);
    // The glow has its own outer edge, so a bloom can spread past the art that
    // casts it, the way a Nuke glow of a masked layer does.
    float glowOuter = 1.0 - smoothstep(uGlowMaskOuter[i] - 0.35, uGlowMaskOuter[i], layerR);
    float keep = inner * opacity;
    float sharp = max(value.x * outer * keep, 0.0);
    float bloomed = max(value.y * glowOuter * keep, 0.0);

    // A hot layer can blow toward white, the way an overexposed glow does. It
    // is a trade: every step toward white is a step away from the tint, so a
    // layer meant to stay saturated wants this at 0.
    float gain = uIntensity[i];
    float total = (sharp + bloomed) * gain;
    float hot = clamp(total - 0.65, 0.0, 1.0) * uWhiteout[i];
    vec3 light = (mix(uTint[i], vec3(1.0), hot) * sharp + mix(uGlowTintLayer[i], vec3(1.0), hot) * bloomed) * gain;

    if (uBlendMode[i] == 1) {
      // Over: the layer sits on top and hides what is behind it by its own
      // coverage. This is the only mode where the stack's order is visible.
      float a = clamp(total, 0.0, 1.0);
      accum = accum * (1.0 - a) + light / max(total, 1e-4) * a;
    } else {
      // Add: glow on glow. Addition commutes, so ordering these is a no-op.
      accum += light;
    }
  }

  // The void brightens under a passing pulse -- a gain on the art itself, so
  // the ring lights what it crosses rather than only laying glow over it.
  // Landings can do the same: light running back out of the hole.
  accum *= 1.0 + pulseLift + impactLift;

  // --- Core ----------------------------------------------------------------
  // The edge is displaced by noise sampled in the plane rather than around the
  // angle, so there is no seam where atan wraps, and the bumps break up
  // radially as well as around -- a boiling edge rather than a wobbling circle.
  // Turning the noise domain makes the bumps travel around the rim; drifting it
  // makes them change shape as they go. The domain turns backwards so the
  // bumps turn forwards -- clockwise on screen, with the stack and the orbs.
  // (GLSL's mat2 is column-major: mat2(cs, sn, -sn, cs) turns forwards.)
  float ct = uCoreTime;
  float cs = cos(ct * 0.35);
  float sn = sin(ct * 0.35);
  vec2 coreP = mat2(cs, -sn, sn, cs) * still * uCoreNoiseScale;
  float edgeNoise = fbm(coreP + vec2(ct * 0.4, -ct * 0.25)) * 0.65
    + fbm(coreP * 2.3 - vec2(ct * 0.3, ct * 0.5) + 17.0) * 0.35;
  float edge = uCoreRadius * (1.0 + uCoreNoise * (edgeNoise - 0.5) * 2.0 + bulge * uImpactBulge);

  // The glow follows the same noisy edge, so the halo breathes with the hole.
  // It is built like Nuke's exponential glow: soft rings at doubling widths,
  // the first at half brightness one width from the peak, each weighted tail
  // times the one before and normalised so the peak stays at intensity. Every
  // ring still falls to nothing, so however long the tail, the void past it
  // stays black -- a single power-law fall never quite gets there.
  float glowDistance = abs(stillR - (edge + uGlowOffset)) / max(uGlowWidth, 1e-3);
  float glowWeight = 1.0;
  float glowTotal = 0.0;
  float glowShape = 0.0;
  for (int k = 0; k < GLOW_OCTAVES; k++) {
    float x = glowDistance / exp2(float(k));
    glowShape += exp(-x * x * 0.6931) * glowWeight;
    glowTotal += glowWeight;
    glowWeight *= uGlowTail;
  }
  float glow = uGlowIntensity * glowShape / glowTotal * inArt;
  // Landing flares burn in the glow's color, so an impact reads as the rim
  // catching light rather than as a separate effect laid over it.
  // Masked like the rim glow: an orb tossed from a corner starts outside the
  // art, and its wake would otherwise light a streak over the empty frame.
  glow += (flare * uImpactFlare + wakeGlow * uWakeGlow) * inArt + pulseGlow;
  vec3 glowColor = mix(uGlowTint, vec3(1.0), clamp(glow - 0.65, 0.0, 1.0) * uGlowWhiteout);
  accum += glowColor * glow;

  // --- Grade -----------------------------------------------------------------
  // Saturation over the merged result, about Rec. 709 luminance in linear
  // light, as Nuke's Saturation node does it. Above 1 a channel can be pushed
  // below zero; it is clamped there, which is the most saturated that color
  // can be.
  float luma = dot(accum, vec3(0.2126, 0.7152, 0.0722));
  accum = max(vec3(luma) + (accum - vec3(luma)) * uSaturation, vec3(0.0));

  // The hole goes on last and covers everything, glow included. Its soft edge
  // is what eats into the inside of the halo and leaves the dark lip.
  float hole = 1.0 - smoothstep(edge - uCoreSoftness, edge, stillR);
  accum *= 1.0 - hole;

  accum *= frameFade;

  // The drawing buffer is premultiplied, which *requires* rgb <= alpha on every
  // pixel; past that the result is undefined and a compositor is free to drop
  // the whole surface. Deriving alpha from the accumulated coverage let the two
  // disagree, because coverage is a sum of layer values while the color is not.
  // Taking alpha from the color itself makes the pair valid by construction:
  // the void is glow on a dark surface, so its brightest channel *is* its
  // opacity, and dark gaps stay honestly transparent. The hole is the
  // exception: it is black *and* opaque, so it reads as a hole in whatever
  // the surface sits over rather than a window onto it.
  // Encoding first matters: alpha has to match the color as displayed.
  vec3 rgb = clamp(linearToSrgb(max(accum, vec3(0.0))), 0.0, 1.0);
  float alpha = clamp(max(max(max(rgb.r, rgb.g), rgb.b), hole * frameFade), 0.0, 1.0);
  rgb = min(rgb, vec3(alpha));
  fragColor = vec4(rgb, alpha);
}`;
function t7(e, t, a, i, n) {
    let r = 2 * a + 1;
    for (let o = 0; o < 256; o++)
        for (let s = 0; s < 3; s++) {
            function l(e) {
                return (i ? 256 * o + e : 256 * e + o) * 3 + s;
            }
            for (let t = 0; t < 256; t++) n[t] = e[l(t)];
            let u = 0;
            for (let e = -a; e <= a; e++) e >= 0 && e < 256 && (u += n[e]);
            for (let e = 0; e < 256; e++) {
                t[l(e)] = u / r;
                let i = e - a,
                    o = e + a + 1;
                (i >= 0 && (u -= n[i]), o < 256 && (u += n[o]));
            }
        }
}
let t9 = `#version 300 es
in vec2 aPosition;
out vec2 vTex;
void main() {
  // Unflipped, unlike the void's: this reads back a texture drawn in GL's own
  // orientation, so the pixel it reads is the pixel it writes.
  vTex = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,
    ae = `#version 300 es
precision highp float;

#define MAX_CHROMA_SAMPLES 9
#define GHOSTS 5

in vec2 vTex;
out vec4 fragColor;

uniform sampler2D uScene;
/** The void's centre, in this pass's texture space. */
uniform vec2 uCenter;
/** Width over height, so circles stay circles. */
uniform float uAspect;
/** The rim's radius in the square units below, where y spans the frame. */
uniform float uRim;

/** How far the colors split at the rim, as a fraction of the rim's radius. */
uniform float uChroma;
/** Rim units before the split starts. */
uniform float uChromaStart;
/** How it ramps from there: 1 linear, higher rushes in at the edge. */
uniform float uChromaFalloff;
/** 0 splits straight out, 1 smears around the centre. */
uniform float uChromaTwist;
/** Reads across the split, 3 to MAX_CHROMA_SAMPLES. */
uniform int uChromaSamples;
/** The most the split may reach, everything summed, as a fraction of the rim's radius. 0 is no ceiling. */
uniform float uChromaLimit;
/** Extra split on the wave's crests, as a fraction of the rim's radius. */
uniform float uChromaWave;
/** The wave, exactly as the void draws it. */
uniform float uCoreRadius;
uniform float uWaveLength;
uniform float uWaveCycle;
uniform float uWaveSpiral;
uniform float uWaveReach;

${t6}

uniform float uFlare;
/** Display color; the scene is already encoded for display. */
uniform vec3 uFlareTint;
/** Where the light sits, square units from the void's centre. */
uniform vec2 uFlareSource;
/** Size of the source's glow, as a multiple of the default. */
uniform float uFlareSize;
uniform float uFlareRays;
uniform float uFlareGhosts;
uniform float uFlareHalo;
/** Radians the starburst has turned, so it wheels as the light drifts. */
uniform float uFlareTurn;

uniform float uVignette;
uniform float uFlash;

/** Where each ghost sits along the line from the light back through the centre, as a multiple of the light's offset. */
const float GHOST_AT[GHOSTS] = float[](-0.35, -0.7, -1.15, -1.65, 0.45);
/** Each ghost's radius, square units. */
const float GHOST_SIZE[GHOSTS] = float[](0.035, 0.07, 0.022, 0.11, 0.016);
/** The hue each ghost leans toward: real ghosts pick up a cast from each lens coating. */
const vec3 GHOST_HUE[GHOSTS] = vec3[](
  vec3(1.0, 0.6, 0.3),
  vec3(0.45, 0.8, 1.0),
  vec3(0.7, 1.0, 0.5),
  vec3(1.0, 0.45, 0.8),
  vec3(0.6, 0.6, 1.0)
);

/** A soft disc with a brighter rim, which is how an aperture ghost reads. */
float ghost(vec2 p, vec2 at, float size) {
  float r = length(p - at) / size;
  float body = 1.0 - smoothstep(0.75, 1.0, r);
  // Squared by hand: pow is undefined for the negative side inside the rim.
  float edgeD = (r - 0.92) / 0.08;
  float edge = exp(-edgeD * edgeD);
  return body * 0.35 + edge * 0.65;
}

/** Red, green and blue weights across the split: red at one end, green mid, blue at the other. */
vec3 spectrum(float t) {
  return max(vec3(0.0), 1.0 - abs(vec3(t) - vec3(0.0, 0.5, 1.0)) * 2.0);
}

/**
 * The split's soft ceiling: untouched up to half the limit, then easing into
 * it, so heat, overdrive, a break's spike and the wave stack up to a strong
 * split rather than a pile of copies.
 */
float limitSplit(float amount, float limit) {
  if (limit <= 0.0) return amount;
  float knee = limit * 0.5;
  if (amount <= knee) return amount;
  return knee + knee * tanh((amount - knee) / knee);
}

/**
 * One texture read across the split, each read weighted toward its color.
 * Past three reads the reads are nudged apart per pixel, by under a step, so
 * a wide split smears into a spectrum instead of stepping into copies.
 */
vec4 splitRead(sampler2D tex, vec2 stride, float jitter) {
  vec3 color = vec3(0.0);
  vec3 weight = vec3(0.0);
  float coverage = 0.0;
  float steps = float(max(uChromaSamples - 1, 1));
  float nudge = uChromaSamples > 3 ? (jitter - 0.5) / steps : 0.0;
  for (int i = 0; i < MAX_CHROMA_SAMPLES; i++) {
    if (i >= uChromaSamples) break;
    float t = clamp(float(i) / steps + nudge, 0.0, 1.0);
    vec4 tap = texture(tex, vTex + stride * (t * 2.0 - 1.0));
    vec3 w = spectrum(t);
    color += tap.rgb * w;
    weight += w;
    coverage = max(coverage, tap.a);
  }
  return vec4(color / max(weight, vec3(1e-4)), coverage);
}

void main() {
  vec2 d = vTex - uCenter;
  // Square units, so distances read the same both ways.
  vec2 p = vec2(d.x * uAspect, d.y);
  float rimR = length(p) / max(uRim, 1e-4);

  // --- Color split --------------------------------------------------------
  // Each color is read from a little further in or out along the split, so
  // red spreads one way and blue the other. Normalised to reach exactly
  // uChroma at the rim, wherever it starts and however it ramps.
  vec4 scene = texture(uScene, vTex);
  float ramp = pow(max(rimR - uChromaStart, 0.0) / max(1.0 - uChromaStart, 1e-3), uChromaFalloff);
  // The wave's split sits on its crests and travels with them. The void's
  // frame runs y down, this pass's y up, so the angle is read mirrored.
  float waveCrest = 0.0;
  if (uChromaWave > 0.0) {
    waveCrest = max(waveAt(rimR, atan(-p.y, p.x), uCoreRadius, uWaveLength, uWaveCycle, uWaveSpiral, uWaveReach), 0.0);
  }
  float amount = limitSplit(uChroma * ramp + uChromaWave * waveCrest, uChromaLimit) * uRim;
  if (amount > 1e-5) {
    vec2 radial = p / max(length(p), 1e-4);
    vec2 around = vec2(-radial.y, radial.x);
    vec2 heading = normalize(mix(radial, around, uChromaTwist) + vec2(1e-5));
    // Back from square units to texture space.
    vec2 stride = vec2(heading.x / uAspect, heading.y) * amount;
    // Interleaved gradient noise: fixed per pixel, so it reads as a fine
    // dither in the smear rather than a flicker.
    float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    scene = splitRead(uScene, stride, jitter);
  }
  vec3 rgb = scene.rgb;
  float alpha = scene.a;

  // --- Lens flare ----------------------------------------------------------
  // A light caught at the rim: its glow and starburst where it sits, ghosts
  // strung back through the centre the way a lens reflects them, and a faint
  // halo round the frame, brightest on the light's side.
  if (uFlare > 0.0) {
    vec2 q = p - uFlareSource;
    float dist = length(q);
    float size = 0.05 * uFlareSize;
    float source = exp(-dist / size) + 0.35 * exp(-dist / (size * 4.0));

    float angle = atan(q.y, q.x) + uFlareTurn;
    float rays = pow(abs(cos(angle * 3.0)), 60.0)
      + 0.6 * pow(abs(cos(angle * 5.0 + 0.7)), 90.0)
      + 0.4 * pow(abs(cos(angle * 8.0 + 1.9)), 140.0);
    rays *= exp(-dist / (0.32 * uFlareSize));

    vec3 light = uFlareTint * (source + rays * uFlareRays);

    // Ghosts fade as the light swings toward the centre, where a real lens
    // would see them stack up behind it.
    float spread = clamp(length(uFlareSource) / max(uRim, 1e-4), 0.0, 1.0);
    for (int i = 0; i < GHOSTS; i++) {
      float g = ghost(p, uFlareSource * GHOST_AT[i], GHOST_SIZE[i]);
      light += mix(uFlareTint, GHOST_HUE[i], 0.6) * g * uFlareGhosts * 0.18 * spread;
    }

    float haloR = 0.42;
    float haloL = length(p);
    // Squared by hand, as pow is undefined for the negative side inside the halo.
    float haloRed = (haloL - haloR - 0.008) / 0.018;
    float haloGreen = (haloL - haloR) / 0.018;
    float haloBlue = (haloL - haloR + 0.008) / 0.018;
    vec3 halo = vec3(exp(-haloRed * haloRed), exp(-haloGreen * haloGreen), exp(-haloBlue * haloBlue));
    float facing = 0.5 + 0.5 * dot(p / max(haloL, 1e-4), uFlareSource / max(length(uFlareSource), 1e-4));
    light += halo * uFlareTint * facing * uFlareHalo * 0.25;

    rgb += light * uFlare;
    // Light is coverage too: premultiplied, the flare has to raise alpha with it.
    alpha = max(alpha, max(max(rgb.r, rgb.g), rgb.b));
  }

  // --- Vignette --------------------------------------------------------------
  // Black laid over the corners, so it darkens whatever the surface sits on too.
  float vignette = uVignette * smoothstep(0.3, 0.75, length(p));
  rgb *= 1.0 - vignette;
  alpha = alpha + (1.0 - alpha) * vignette;

  // --- Flash -----------------------------------------------------------------
  rgb = rgb * (1.0 - uFlash) + uFlash;
  alpha = alpha * (1.0 - uFlash) + uFlash;

  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(min(clamp(rgb, 0.0, 1.0), vec3(alpha)), alpha);
}`,
    at = `#version 300 es
in vec2 aPosition;
out vec2 vTex;

/** The view's matrix, by its columns, and its shift. */
uniform vec2 uViewX;
uniform vec2 uViewY;
uniform vec2 uViewShift;

void main() {
  // Unflipped, like the lens pass: it reads back a texture drawn in GL's own orientation.
  vTex = aPosition * 0.5 + 0.5;
  gl_Position = vec4(mat2(uViewX, uViewY) * aPosition + uViewShift, 0.0, 1.0);
}`,
    aa = `#version 300 es
precision highp float;

in vec2 vTex;
out vec4 fragColor;

uniform sampler2D uFrame;
/** How far in the frame fades from its top edge and from its bottom edge, as fractions of its height. */
uniform vec2 uEdgeFade;

void main() {
  if (vTex.x < 0.0 || vTex.x > 1.0 || vTex.y < 0.0 || vTex.y > 1.0) {
    fragColor = vec4(0.0);
    return;
  }
  float fade = clamp((1.0 - vTex.y) / uEdgeFade.x, 0.0, 1.0) * clamp(vTex.y / uEdgeFade.y, 0.0, 1.0);
  // The frame is premultiplied, so fading it is one multiply.
  fragColor = texture(uFrame, vTex) * fade;
}`;
var ai = a(253400);
let an = /swiftshader|llvmpipe|lavapipe|softpipe|software|basic render/i;
function ar(e) {
    let t = e.getExtension("WEBGL_debug_renderer_info");
    return an.test(String(e.getParameter(null != t ? t.UNMASKED_RENDERER_WEBGL : e.RENDERER)));
}
function al() {
    try {
        let e = document.createElement("canvas"),
            t = e.getContext("webgl2");
        if (null == t || t.isContextLost()) return "still";
        try {
            if (ar(t)) return "low";
        } finally {
            tU(e, t);
        }
        return ai.Ay.getEnableHardwareAcceleration() ? "full" : "low";
    } catch {
        return "full";
    }
}
let ao = `#version 300 es
in vec2 aCorner;
/** x, y in rim units; size (radius) in rim units; rotation in radians. */
in vec4 aRock;
/** Seed 0-1; fade 0-1; silhouette atlas layer, or -1 for a rock. */
in vec3 aRockExtra;

uniform vec2 uCenter;
uniform float uRadius;

out vec2 vLocal;
out vec2 vToCore;
out float vSeed;
out float vFade;
out float vRotation;
out float vDistance;
flat out float vShape;

/** Room around the outline for its lumps, so they are never cut by the quad. */
const float MARGIN = 1.3;
/** A silhouette fills its square, so a turned one needs room for its corners. */
const float SHAPE_MARGIN = 1.50;

void main() {
  float margin = aRockExtra.z >= 0.0 ? SHAPE_MARGIN : MARGIN;
  vec2 d = aRock.xy + aCorner * aRock.z * margin;
  // The same frame the void is drawn in: uv with y down, flipped into clip space.
  vec2 uv = uCenter + d * uRadius;
  gl_Position = vec4(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, 0.0, 1.0);
  vLocal = aCorner * margin;
  float r = length(aRock.xy);
  vToCore = -aRock.xy / max(r, 1e-4);
  vSeed = aRockExtra.x;
  vFade = aRockExtra.y;
  vRotation = aRock.w;
  vDistance = r;
  vShape = aRockExtra.z;
}`,
    as = `#version 300 es
precision highp float;

in vec2 vLocal;
in vec2 vToCore;
in float vSeed;
in float vFade;
in float vRotation;
in float vDistance;
flat in float vShape;
out vec4 fragColor;

/** Linear light, like the void's composite. */
uniform vec3 uBody;
/** The rim's color times its brightness, linear. */
uniform vec3 uRim;
uniform float uLumpiness;
uniform float uRimWidth;
uniform float uRimWrap;
uniform float uRimFalloff;
uniform float uCoreRadius;
/** The silhouettes: a signed distance cell per layer, local units, positive outside. */
uniform mediump sampler2DArray uEggs;

/** The cell spans this far either side of the middle, in local units. */
const float EGG_EXTENT = 1.50;
/** The step for the normal's finite differences, cell uv: a couple of texels, which smooths the bilinear facets. */
const float EGG_STEP = ${(2 / 256).toFixed(6)};
/** What those differences come to on a clean stretch of edge, where the field's slope is one. */
const float EGG_SLOPE = ${(12 / 256).toFixed(6)};
/**
 * What a silhouette's depth is measured against, local units: about half the
 * thickness of a typical limb. A rock's depth runs to its middle; measuring a
 * silhouette's against its whole size instead would carry the rim past the
 * middle of a thin part, where the edge normal flips and the light shows a crease.
 */
const float EGG_DEPTH = 0.4;

${t3}

/**
 * The outline's radius at an angle: a circle bent by three harmonics. Whole
 * harmonics of the angle wrap cleanly, so there is no seam where atan jumps.
 */
float outline(float angle, float seed) {
  float bend = 0.5 * sin(2.0 * angle + seed * 6.283)
    + 0.3 * sin(3.0 * angle + seed * 17.13)
    + 0.2 * sin(5.0 * angle + seed * 29.71);
  return 0.8 * (1.0 + uLumpiness * 0.5 * bend);
}

/** A silhouette's signed distance at a point in its cell, local units, positive outside. */
float eggDistance(vec2 cell, float layer) {
  return texture(uEggs, vec3(cell, layer)).r;
}

void main() {
  // The shape turns with the rock; the light, below, does not.
  float c = cos(vRotation);
  float s = sin(vRotation);
  mat2 turn = mat2(c, s, -s, c);
  vec2 shape = turn * vLocal;
  bool isEgg = vShape >= 0.0;

  float edge;
  float depth;
  vec2 outward;
  // How far to trust the edge normal: 1 everywhere on a rock.
  float trust = 1.0;
  if (isEgg) {
    vec2 cell = shape / (2.0 * EGG_EXTENT) + 0.5;
    edge = eggDistance(cell, vShape);
    depth = clamp(-edge / EGG_DEPTH, 0.0, 1.0);
    vec2 gradient = vec2(
      eggDistance(cell + vec2(EGG_STEP, 0.0), vShape) - eggDistance(cell - vec2(EGG_STEP, 0.0), vShape),
      eggDistance(cell + vec2(0.0, EGG_STEP), vShape) - eggDistance(cell - vec2(0.0, EGG_STEP), vShape));
    // The gradient is in the shape's turned frame; turned back, it is the edge
    // normal on screen, so the light stays put as the silhouette tumbles.
    outward = gradient * turn;
    // Down the middle of a thin part the two sides' slopes cancel, and what
    // is left points nowhere in particular; lit, it hatches. Fading the rim
    // there leaves a dark spine, which reads as a body.
    trust = smoothstep(0.35, 0.8, length(gradient) / EGG_SLOPE);
    outward /= max(length(outward), 1e-6);
  } else {
    float radius = outline(atan(shape.y, shape.x), vSeed);
    float len = length(shape);
    edge = len - radius;
    // How deep inside the outline, 0 at the edge and 1 at the middle: a dome.
    depth = clamp(1.0 - len / radius, 0.0, 1.0);
    // Which way this bit of edge faces, in screen space.
    outward = vLocal / max(length(vLocal), 1e-4);
  }
  float aa = max(fwidth(edge), 1e-4);
  float cover = 1.0 - smoothstep(-aa, aa, edge);
  float alpha = cover * vFade;
  if (alpha <= 0.001) discard;

  float band = (1.0 - smoothstep(0.0, max(uRimWidth, 1e-3), depth)) * trust;
  float facing = dot(outward, vToCore) * 0.5 + 0.5;
  // Wrap 0 keeps the light to a sliver facing the core; 1 lights the whole edge.
  float wrap = pow(facing, mix(8.0, 0.0, clamp(uRimWrap, 0.0, 1.0)));
  // Hotter close in, where the glow it is catching is brightest.
  float near = clamp(uCoreRadius / max(vDistance, 1e-4), 0.0, 1.0);
  float boost = mix(1.0, uRimFalloff, near * near);

  vec3 color = uBody + uRim * band * wrap * boost;
  vec3 rgb = linearToSrgb(clamp(color, 0.0, 1.0));
  // Premultiplied, like the void, so the pair stays valid by construction.
  fragColor = vec4(rgb * alpha, alpha);
}`;
var au = a(723652);
let ah = [-0.5, 0, 0.5],
    ac = 12 * ah.length,
    af = { r: [1, 0, 0], g: [0, 1, 0], b: [0, 0, 1] },
    ad = [];
function am(e) {
    return e.shake || e.lens;
}
function ag(e) {
    let {
            renderState: t,
            clock: a,
            pulse: i,
            wake: n,
            surge: r,
            rocks: l,
            quality: u,
            echoes: c,
            view: f,
            onDegrade: d,
        } = e,
        m = s.useRef(null),
        g = (0, tr.A)({
            renderState: t,
            pulse: i,
            wake: n,
            surge: r,
            rocks: l,
            quality: u,
            echoes: c,
            view: f,
            onDegrade: d,
        });
    return (
        s.useEffect(() => {
            let e = m.current;
            if (null == e) return;
            let t = e.getContext("webgl2", { alpha: !0, premultipliedAlpha: !0, antialias: !1 });
            if (null == t || t.isContextLost()) return void g.current.onDegrade("still");
            let i = e.ownerDocument,
                n = new tK(),
                r = new Int32Array(n.instances.buffer),
                l = {
                    dt: 0,
                    now: 0,
                    tuning: et,
                    wake: $,
                    agitation: 0,
                    coreRadius: 0,
                    impacts: [],
                    pulses: [],
                    wakes: [],
                    eggLayers: 0,
                },
                o = new Float32Array(24),
                s = new Float32Array(24),
                u = new Float32Array(8),
                h = new Float32Array(8),
                c = new Float32Array(8),
                f = new Float32Array(8),
                d = new Float32Array(8),
                p = new Float32Array(8),
                w = new Int32Array(8),
                v = new Float32Array(24),
                x = new Float32Array(8),
                y = new Float32Array(8),
                b = new Float32Array(8),
                A = new Float32Array(8),
                S = new Float32Array(8),
                T = new Float32Array(8),
                L = new Float32Array(8),
                C = new Float32Array(8),
                I = new Float32Array(8),
                _ = new Float32Array(8),
                W = new Float32Array(8),
                O = new Float32Array(8),
                G = new Int32Array(8),
                D = new Int32Array(8),
                U = new Int32Array(8),
                B = new Float32Array(32),
                N = new Float32Array(12),
                X = new Float32Array(6),
                z = new Float32Array(6),
                j = new WeakMap(),
                V = 0,
                H = new Float32Array(96),
                Y = new Float32Array(96),
                q = new Map(),
                K = new Map(),
                Q = 0,
                J = 0,
                Z = 0,
                ee = 0,
                ea = new WeakSet(),
                ei = new Uint8Array(4 * ac),
                en = new Uint8Array(ac),
                er = null,
                el = null,
                eo = 0,
                es = !1,
                eu = 0,
                eh = 0,
                ec = -1 / 0,
                ef = !0,
                ed = null,
                em = new Int32Array(n.instances.length),
                eg = 0,
                ep = !1,
                ew = !1,
                ev = new Int32Array(n.instances.length),
                ex = 0,
                ey = null,
                eb = null,
                eA = () => {},
                eS = () => {};
            function eR() {
                (cancelAnimationFrame(eo),
                    null != ey &&
                        null != er &&
                        a.paused &&
                        ef &&
                        (eo = requestAnimationFrame(() => {
                            a.paused && ey?.render(a.now());
                        })));
            }
            function ek() {
                ((ef = !0), eR());
            }
            function eT() {
                (eA(),
                    null != eb && (tG(t, eb.scene), tG(t, eb.rocks), tG(t, eb.lens), tG(t, eb.present), (eb = null)));
            }
            function eM(i, m) {
                eT();
                let $ = {
                    scene: t_(t, t4, t8),
                    rocks: t_(t, ao, as),
                    lens: i ? t_(t, t9, ae) : null,
                    present: t_(t, at, aa),
                };
                ((eb = $),
                    (eA = tW(t, [$.scene, $.rocks, $.lens, $.present], () => {
                        ((eb = null),
                            m(
                                (function (i) {
                                    let m = tO(t, i.scene),
                                        $ = tO(t, i.rocks),
                                        et = tO(t, i.lens),
                                        eo = tO(t, i.present);
                                    if (null == m || null == eo)
                                        return (
                                            t.deleteProgram(m),
                                            t.deleteProgram($),
                                            t.deleteProgram(et),
                                            t.deleteProgram(eo),
                                            null
                                        );
                                    t.useProgram(m);
                                    let es = t.createVertexArray();
                                    t.bindVertexArray(es);
                                    let eh = t.createBuffer();
                                    (t.bindBuffer(t.ARRAY_BUFFER, eh),
                                        t.bufferData(
                                            t.ARRAY_BUFFER,
                                            new Float32Array([-1, -1, 3, -1, -1, 3]),
                                            t.STATIC_DRAW,
                                        ));
                                    let ey = t.getAttribLocation(m, "aPosition");
                                    (t.enableVertexAttribArray(ey), t.vertexAttribPointer(ey, 2, t.FLOAT, !1, 0, 0));
                                    let eb = tD(t, m),
                                        eA = new tq(),
                                        eS = new tq(),
                                        eR = new tq(),
                                        eT = new tq(),
                                        eM = t.createVertexArray(),
                                        eE = t.createBuffer(),
                                        eF = t.createBuffer(),
                                        eP = tD(t, $),
                                        eL = t.createTexture();
                                    if (
                                        (t.activeTexture(t.TEXTURE0 + 3),
                                        t.bindTexture(t.TEXTURE_2D_ARRAY, eL),
                                        t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                        t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                        t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                        t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                        t.texImage3D(
                                            t.TEXTURE_2D_ARRAY,
                                            0,
                                            t.R16F,
                                            1,
                                            1,
                                            1,
                                            0,
                                            t.RED,
                                            t.FLOAT,
                                            new Float32Array([1]),
                                        ),
                                        null != $)
                                    ) {
                                        (t.bindVertexArray(eM),
                                            t.bindBuffer(t.ARRAY_BUFFER, eE),
                                            t.bufferData(
                                                t.ARRAY_BUFFER,
                                                new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                                                t.STATIC_DRAW,
                                            ));
                                        let e = t.getAttribLocation($, "aCorner");
                                        (t.enableVertexAttribArray(e),
                                            t.vertexAttribPointer(e, 2, t.FLOAT, !1, 0, 0),
                                            t.bindBuffer(t.ARRAY_BUFFER, eF),
                                            t.bufferData(t.ARRAY_BUFFER, n.instances.byteLength, t.DYNAMIC_DRAW));
                                        let a = t.getAttribLocation($, "aRock");
                                        (t.enableVertexAttribArray(a),
                                            t.vertexAttribPointer(a, 4, t.FLOAT, !1, 28, 0),
                                            t.vertexAttribDivisor(a, 1));
                                        let i = t.getAttribLocation($, "aRockExtra");
                                        (t.enableVertexAttribArray(i),
                                            t.vertexAttribPointer(i, 3, t.FLOAT, !1, 28, 16),
                                            t.vertexAttribDivisor(i, 1),
                                            t.useProgram($),
                                            t.uniform2f(eP("uCenter"), F["0"], F["1"]),
                                            t.uniform1f(eP("uRadius"), 0.32),
                                            t.uniform1i(eP("uEggs"), 3),
                                            t.useProgram(m),
                                            t.bindVertexArray(es));
                                    }
                                    let eC = t.createVertexArray(),
                                        eI = {
                                            texture: t.createTexture(),
                                            framebuffer: t.createFramebuffer(),
                                            width: 0,
                                            height: 0,
                                        },
                                        e_ = {
                                            texture: t.createTexture(),
                                            framebuffer: t.createFramebuffer(),
                                            width: 0,
                                            height: 0,
                                        },
                                        eW = tD(t, et);
                                    if (null != et) {
                                        (t.bindVertexArray(eC), t.bindBuffer(t.ARRAY_BUFFER, eh));
                                        let e = t.getAttribLocation(et, "aPosition");
                                        (t.enableVertexAttribArray(e),
                                            t.vertexAttribPointer(e, 2, t.FLOAT, !1, 0, 0),
                                            t.useProgram(et),
                                            t.uniform1i(eW("uScene"), 2),
                                            t.uniform2f(eW("uCenter"), F["0"], 1 - F["1"]),
                                            t.uniform1f(eW("uRim"), 0.32),
                                            t.uniform1f(eW("uChromaLimit"), 0.06),
                                            t.useProgram(m),
                                            t.bindVertexArray(es));
                                    }
                                    let eO = t.createRenderbuffer(),
                                        eG = t.createFramebuffer();
                                    (t.bindRenderbuffer(t.RENDERBUFFER, eO),
                                        t.renderbufferStorage(t.RENDERBUFFER, t.RGBA8, ac, 1),
                                        t.bindFramebuffer(t.FRAMEBUFFER, eG),
                                        t.framebufferRenderbuffer(
                                            t.FRAMEBUFFER,
                                            t.COLOR_ATTACHMENT0,
                                            t.RENDERBUFFER,
                                            eO,
                                        ),
                                        t.bindFramebuffer(t.FRAMEBUFFER, null));
                                    let eD = t.createVertexArray(),
                                        eU = tD(t, eo);
                                    (t.bindVertexArray(eD), t.bindBuffer(t.ARRAY_BUFFER, eh));
                                    let eB = t.getAttribLocation(eo, "aPosition");
                                    function eN(e, a, i) {
                                        (a !== e.width || i !== e.height) &&
                                            ((e.width = a),
                                            (e.height = i),
                                            t.activeTexture(t.TEXTURE0 + 2),
                                            t.bindTexture(t.TEXTURE_2D, e.texture),
                                            t.texImage2D(
                                                t.TEXTURE_2D,
                                                0,
                                                t.RGBA8,
                                                a,
                                                i,
                                                0,
                                                t.RGBA,
                                                t.UNSIGNED_BYTE,
                                                null,
                                            ),
                                            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                            t.bindFramebuffer(t.FRAMEBUFFER, e.framebuffer),
                                            t.framebufferTexture2D(
                                                t.FRAMEBUFFER,
                                                t.COLOR_ATTACHMENT0,
                                                t.TEXTURE_2D,
                                                e.texture,
                                                0,
                                            ),
                                            t.bindFramebuffer(t.FRAMEBUFFER, null));
                                    }
                                    (t.enableVertexAttribArray(eB),
                                        t.vertexAttribPointer(eB, 2, t.FLOAT, !1, 0, 0),
                                        t.useProgram(eo),
                                        t.uniform1i(eU("uFrame"), 4),
                                        t.useProgram(m),
                                        t.bindVertexArray(es),
                                        t.enable(t.BLEND),
                                        t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA),
                                        t.uniform2f(eb("uCenter"), F["0"], F["1"]),
                                        t.uniform2f(eb("uRadius"), 0.32, 0.32),
                                        t.uniform1f(eb("uPlateFill"), 0));
                                    let eX = null,
                                        ez = null,
                                        ej = !1;
                                    function eV(e) {
                                        null != $ &&
                                            (t.activeTexture(t.TEXTURE0 + 3),
                                            t.bindTexture(t.TEXTURE_2D_ARRAY, eL),
                                            t.texImage3D(
                                                t.TEXTURE_2D_ARRAY,
                                                0,
                                                t.R16F,
                                                256,
                                                256,
                                                e.layers,
                                                0,
                                                t.RED,
                                                t.FLOAT,
                                                e.sdf,
                                            ),
                                            ek());
                                    }
                                    return (
                                        null != el && eV(el),
                                        {
                                            render: function (i) {
                                                var el, eh, ey;
                                                let ek = a.paused,
                                                    eE = g.current,
                                                    eL = eE.quality,
                                                    eO = eL.surfaceFps > 0 ? 1e3 / eL.surfaceFps : 0;
                                                if (!ek && ((el = ec), !(eO <= 0) && !(i >= el - eO * (1 - 0.9))))
                                                    return;
                                                let eB = ec;
                                                ek || (ec = i + eO);
                                                let { width: eX, height: eV } = (ed ??= {
                                                    width: e.clientWidth,
                                                    height: e.clientHeight,
                                                });
                                                if (0 === eX || 0 === eV) {
                                                    ef = !0;
                                                    return;
                                                }
                                                let eH =
                                                        Math.min(
                                                            devicePixelRatio > 0 ? devicePixelRatio : 1,
                                                            eL.surfacePixelRatio,
                                                        ) * eL.surfaceScale,
                                                    eY = Math.round(eX * eH),
                                                    e$ = Math.round(eV * eH);
                                                (e.width !== eY || e.height !== e$) &&
                                                    ((e.width = eY), (e.height = e$), (ef = !0));
                                                let eq = ek ? eu : a.now(),
                                                    eK = (eq - eu) / 1e3;
                                                eu = eq;
                                                let eQ = eE.renderState,
                                                    eJ = eQ.agitation,
                                                    eZ = eQ.motion,
                                                    e0 = eQ.look,
                                                    e1 = (function (e, t) {
                                                        let a =
                                                            arguments.length > 2 && void 0 !== arguments[2]
                                                                ? arguments[2]
                                                                : P;
                                                        if (0 === t) return e;
                                                        let i = Math.max(0, t),
                                                            n = 1 + a.layerIntensity * i;
                                                        return {
                                                            ...e,
                                                            layers: e.layers.map((e) => ({
                                                                ...e,
                                                                intensity: e.intensity * n,
                                                            })),
                                                            core: {
                                                                ...e.core,
                                                                radius: e.core.radius * (1 + a.coreRadius * i),
                                                                glowIntensity:
                                                                    e.core.glowIntensity * (1 + a.glowIntensity * i),
                                                            },
                                                        };
                                                    })(
                                                        {
                                                            layers: e0.layers.map((e) =>
                                                                (function (e, t) {
                                                                    var a, i;
                                                                    let n,
                                                                        r =
                                                                            ((a = e),
                                                                            (i = R(t)),
                                                                            (n = a.agitation),
                                                                            {
                                                                                ...a,
                                                                                opacity: M(a.opacity, n.opacity, i),
                                                                                waveSpeed: M(
                                                                                    a.waveSpeed,
                                                                                    n.waveSpeed,
                                                                                    i,
                                                                                ),
                                                                                flowAmount: M(
                                                                                    a.flowAmount,
                                                                                    n.flowAmount,
                                                                                    i,
                                                                                ),
                                                                                spin: M(a.spin, n.spin, i),
                                                                                maskOuter: M(
                                                                                    a.maskOuter,
                                                                                    n.maskOuter,
                                                                                    i,
                                                                                ),
                                                                                scale: M(a.scale, n.scale, i),
                                                                                intensity: M(
                                                                                    a.intensity,
                                                                                    n.intensity,
                                                                                    i,
                                                                                ),
                                                                                glow: M(a.glow, n.glow, i),
                                                                                tint: k(a.tint, n.tint, i),
                                                                            }),
                                                                        l = e.glowMaskFollow,
                                                                        o = e.glowTintFollow;
                                                                    if (null == l && null == o) return r;
                                                                    let s = e.glowMaskOuter ?? e.maskOuter,
                                                                        u = e.glowTint ?? e.tint;
                                                                    return {
                                                                        ...r,
                                                                        glowMaskOuter:
                                                                            null != l
                                                                                ? s + (r.maskOuter - s) * l
                                                                                : r.glowMaskOuter,
                                                                        glowMaskFollow: void 0,
                                                                        glowTint:
                                                                            null != o ? k(u, r.tint, o) : r.glowTint,
                                                                        glowTintFollow: void 0,
                                                                    };
                                                                })(e, eJ),
                                                            ),
                                                            core: E(e0.core, eJ),
                                                            grade: e0.grade,
                                                        },
                                                        eQ.surge,
                                                        eE.surge,
                                                    ),
                                                    e2 = e1.layers,
                                                    e5 = Math.min(e2.length, 8);
                                                for (let e = 0; e < e5; e++) {
                                                    let a = e2[e];
                                                    G[e] = +("over" === a.blendMode);
                                                    let i = af[a.channel];
                                                    ((o[3 * e] = i[0]),
                                                        (o[3 * e + 1] = i[1]),
                                                        (o[3 * e + 2] = i[2]),
                                                        (s[3 * e] = tC(a.tint[0])),
                                                        (s[3 * e + 1] = tC(a.tint[1])),
                                                        (s[3 * e + 2] = tC(a.tint[2])),
                                                        (u[e] = a.opacity),
                                                        (h[e] = a.intensity),
                                                        (c[e] = a.blackPoint),
                                                        (f[e] = a.gamma),
                                                        (d[e] = a.glow),
                                                        (p[e] = a.glowTail),
                                                        (w[e] = Math.max(1, Math.min(9, Math.round(a.glowReach)))),
                                                        !ej &&
                                                            w[e] > 5 &&
                                                            null != er &&
                                                            (function (e) {
                                                                ej = !0;
                                                                let a = (function (e) {
                                                                    let t = document.createElement("canvas");
                                                                    ((t.width = 256), (t.height = 256));
                                                                    let a = t.getContext("2d", {
                                                                        willReadFrequently: !0,
                                                                    });
                                                                    if (null == a) return null;
                                                                    a.drawImage(e, 0, 0, 256, 256);
                                                                    let { data: i } = a.getImageData(0, 0, 256, 256),
                                                                        n = new Float32Array(256);
                                                                    for (let e = 0; e < 256; e++) n[e] = tC(e / 255);
                                                                    let r = new Float32Array(196608);
                                                                    for (let e = 0; e < 65536; e++)
                                                                        for (let t = 0; t < 3; t++)
                                                                            r[3 * e + t] = n[i[4 * e + t]];
                                                                    return r;
                                                                })(e);
                                                                null != a &&
                                                                    (t.deleteTexture(ez),
                                                                    (ez = (function (e, t) {
                                                                        let a = new Float32Array(1048576),
                                                                            i = new Float32Array(196608),
                                                                            n = new Float32Array(196608),
                                                                            r = new Float32Array(256);
                                                                        for (let e = 0; e < 4; e++) {
                                                                            let l = 6 + e,
                                                                                o = 0.25 * 2 ** (l - 1),
                                                                                s = Math.max(
                                                                                    1,
                                                                                    Math.round(
                                                                                        (Math.sqrt(4 * o * o + 1) - 1) /
                                                                                            2,
                                                                                    ),
                                                                                );
                                                                            i.set(t);
                                                                            for (let e = 0; e < 3; e++)
                                                                                (t7(i, n, s, !0, r),
                                                                                    t7(n, i, s, !1, r));
                                                                            let u = 65536 * e * 4;
                                                                            for (let e = 0; e < 65536; e++)
                                                                                ((a[u + 4 * e] = i[3 * e]),
                                                                                    (a[u + 4 * e + 1] = i[3 * e + 1]),
                                                                                    (a[u + 4 * e + 2] = i[3 * e + 2]),
                                                                                    (a[u + 4 * e + 3] = 1));
                                                                        }
                                                                        let l = e.createTexture();
                                                                        return (
                                                                            e.activeTexture(e.TEXTURE0 + 1),
                                                                            e.bindTexture(e.TEXTURE_2D_ARRAY, l),
                                                                            e.texParameteri(
                                                                                e.TEXTURE_2D_ARRAY,
                                                                                e.TEXTURE_WRAP_S,
                                                                                e.CLAMP_TO_EDGE,
                                                                            ),
                                                                            e.texParameteri(
                                                                                e.TEXTURE_2D_ARRAY,
                                                                                e.TEXTURE_WRAP_T,
                                                                                e.CLAMP_TO_EDGE,
                                                                            ),
                                                                            e.texParameteri(
                                                                                e.TEXTURE_2D_ARRAY,
                                                                                e.TEXTURE_MIN_FILTER,
                                                                                e.LINEAR,
                                                                            ),
                                                                            e.texParameteri(
                                                                                e.TEXTURE_2D_ARRAY,
                                                                                e.TEXTURE_MAG_FILTER,
                                                                                e.LINEAR,
                                                                            ),
                                                                            e.texImage3D(
                                                                                e.TEXTURE_2D_ARRAY,
                                                                                0,
                                                                                e.RGBA16F,
                                                                                256,
                                                                                256,
                                                                                4,
                                                                                0,
                                                                                e.RGBA,
                                                                                e.FLOAT,
                                                                                a,
                                                                            ),
                                                                            l
                                                                        );
                                                                    })(t, a)),
                                                                    (ef = !0));
                                                            })(er));
                                                    let n = a.glowTint ?? a.tint;
                                                    ((v[3 * e] = tC(n[0])),
                                                        (v[3 * e + 1] = tC(n[1])),
                                                        (v[3 * e + 2] = tC(n[2])),
                                                        (x[e] = a.glowMaskOuter ?? a.maskOuter),
                                                        (y[e] = a.whiteout),
                                                        (b[e] = a.scale));
                                                    let r = (K.get(a.name) ?? 0) + eK * a.spin * eZ;
                                                    (K.set(a.name, r),
                                                        (A[e] = a.rotation + r),
                                                        (S[e] = a.maskInner),
                                                        (T[e] = a.maskOuter),
                                                        (L[e] = a.flowAmount),
                                                        (C[e] = a.swirl),
                                                        (I[e] = a.pull),
                                                        (_[e] = a.noiseScale),
                                                        (W[e] = a.noiseSeed));
                                                    let l = (q.get(a.name) ?? 0) + eK * a.waveSpeed * eZ;
                                                    (q.set(a.name, l), (O[e] = l), (U[e] = 0));
                                                }
                                                for (let e = 0; e < e5; e++) {
                                                    let t = e2[e].echoOf,
                                                        a = e;
                                                    if (null != t) {
                                                        for (let e = 0; e < e5; e++)
                                                            if (e2[e].name === t) {
                                                                a = e;
                                                                break;
                                                            }
                                                    }
                                                    ((D[e] = a), u[e] > 0.001 && (U[a] = 1));
                                                }
                                                (eA.begin(),
                                                    eA.uniform1i(eb("uLayerCount"), e5),
                                                    eA.uniform3fv(eb("uChannelMask[0]"), o),
                                                    eA.uniform3fv(eb("uTint[0]"), s),
                                                    eA.uniform1fv(eb("uOpacity[0]"), u),
                                                    eA.uniform1fv(eb("uIntensity[0]"), h),
                                                    eA.uniform1fv(eb("uBlackPoint[0]"), c),
                                                    eA.uniform1fv(eb("uGamma[0]"), f),
                                                    eA.uniform1fv(eb("uLayerGlow[0]"), d),
                                                    eA.uniform1fv(eb("uLayerGlowTail[0]"), p),
                                                    eA.uniform1iv(eb("uLayerGlowReach[0]"), w),
                                                    eA.uniform3fv(eb("uGlowTintLayer[0]"), v),
                                                    eA.uniform1fv(eb("uGlowMaskOuter[0]"), x),
                                                    eA.uniform1fv(eb("uWhiteout[0]"), y),
                                                    eA.uniform1fv(eb("uScale[0]"), b),
                                                    eA.uniform1fv(eb("uRotation[0]"), A),
                                                    eA.uniform1fv(eb("uMaskInner[0]"), S),
                                                    eA.uniform1fv(eb("uMaskOuter[0]"), T),
                                                    eA.uniform1fv(eb("uFlowAmount[0]"), L),
                                                    eA.uniform1fv(eb("uSwirl[0]"), C),
                                                    eA.uniform1fv(eb("uPull[0]"), I),
                                                    eA.uniform1fv(eb("uNoiseScale[0]"), _),
                                                    eA.uniform1fv(eb("uNoiseSeed[0]"), W),
                                                    eA.uniform1fv(eb("uFlowTime[0]"), O),
                                                    eA.uniform1iv(eb("uBlendMode[0]"), G),
                                                    eA.uniform1iv(eb("uFlowSource[0]"), D),
                                                    eA.uniform1iv(eb("uFlowNeeded[0]"), U));
                                                let e3 = e1.core;
                                                ((Q += eK * e3.noiseSpeed * eZ),
                                                    eA.uniform1f(eb("uCoreRadius"), e3.radius),
                                                    eA.uniform1f(eb("uCoreSoftness"), e3.softness),
                                                    eA.uniform1f(eb("uCoreNoise"), e3.noiseAmount),
                                                    eA.uniform1f(eb("uCoreNoiseScale"), e3.noiseScale),
                                                    eA.uniform1f(eb("uCoreTime"), Q),
                                                    eA.uniform3f(
                                                        eb("uGlowTint"),
                                                        tC(e3.glowTint[0]),
                                                        tC(e3.glowTint[1]),
                                                        tC(e3.glowTint[2]),
                                                    ),
                                                    eA.uniform1f(eb("uGlowIntensity"), e3.glowIntensity),
                                                    eA.uniform1f(eb("uGlowOffset"), e3.glowOffset),
                                                    eA.uniform1f(eb("uGlowWidth"), e3.glowWidth),
                                                    eA.uniform1f(eb("uGlowTail"), e3.glowTail),
                                                    eA.uniform1f(eb("uGlowWhiteout"), e3.glowWhiteout),
                                                    eA.uniform1f(eb("uSaturation"), e1.grade.saturation));
                                                let e6 = eQ.impacts,
                                                    e4 = Math.max(0, e6.length - 8),
                                                    e8 = 0;
                                                for (let e = e4; e < e6.length; e++) {
                                                    let t = e6[e];
                                                    ((B[4 * e8] = t.angle),
                                                        (B[4 * e8 + 1] = t.radius),
                                                        (B[4 * e8 + 2] = Math.max(0, (eq - t.bornAt) / 1e3)),
                                                        (B[4 * e8 + 3] = 1),
                                                        e8++);
                                                }
                                                (eA.uniform1i(eb("uImpactCount"), e8),
                                                    eA.uniform4fv(eb("uImpact[0]"), B),
                                                    eA.uniform1f(eb("uImpactLife"), 0.8),
                                                    eA.uniform1f(eb("uImpactRingSpeed"), 0.55),
                                                    eA.uniform1f(eb("uImpactRingWidth"), 0.035),
                                                    eA.uniform1f(eb("uImpactSoften"), 3),
                                                    eA.uniform1f(eb("uImpactEase"), 2.5),
                                                    eA.uniform1f(eb("uImpactNoise"), 0.12),
                                                    eA.uniform1f(eb("uImpactPush"), 0.035),
                                                    eA.uniform1f(eb("uImpactFlare"), 1.4),
                                                    eA.uniform1f(eb("uImpactFlareSize"), 0.09),
                                                    eA.uniform1f(eb("uImpactLift"), 0),
                                                    eA.uniform1f(eb("uImpactBulge"), 0.04));
                                                let e7 = eQ.pulses,
                                                    e9 = Math.max(0, e7.length - 6),
                                                    te = 0;
                                                for (let e = e9; e < e7.length; e++) {
                                                    let t = e7[e];
                                                    ((N[2 * te] = (eq - t.bornAt) / 1e3), (N[2 * te + 1] = t.gain));
                                                    let a = j.get(t);
                                                    (null == a && ((a = V++ % 64), j.set(t, a)),
                                                        (X[te] = a),
                                                        (z[te] = t.size ?? 1),
                                                        te++);
                                                }
                                                let tt = eE.pulse;
                                                (eA.uniform1i(eb("uPulseCount"), te),
                                                    eA.uniform2fv(eb("uPulse[0]"), N),
                                                    eA.uniform1fv(eb("uPulseSeed[0]"), X),
                                                    eA.uniform1fv(eb("uPulseSize[0]"), z),
                                                    eA.uniform1f(eb("uPulseLife"), tt.life),
                                                    eA.uniform1f(eb("uPulseAttack"), tt.attack),
                                                    eA.uniform1f(eb("uPulseSpeed"), tt.speed),
                                                    eA.uniform1f(eb("uPulseWidth"), tt.width),
                                                    eA.uniform1f(eb("uPulseSoften"), tt.soften),
                                                    eA.uniform1f(eb("uPulseFade"), tt.fade),
                                                    eA.uniform1f(eb("uPulseEase"), tt.ease),
                                                    eA.uniform1f(eb("uPulseLift"), tt.lift),
                                                    eA.uniform1f(eb("uPulsePush"), tt.push),
                                                    eA.uniform1f(eb("uPulseBrightness"), tt.brightness),
                                                    eA.uniform1f(eb("uPulseRipple"), tt.ripple),
                                                    eA.uniform1f(eb("uPulseRippleScale"), tt.rippleScale),
                                                    eA.uniform1f(eb("uPulseSpin"), tt.spin));
                                                let ta = eE.wake,
                                                    ti = 0 === ta.push && 0 === ta.glow ? ad : eQ.wakes,
                                                    tn = Math.max(0, ti.length - 24),
                                                    tr = 0;
                                                for (let e = tn; e < ti.length; e++) {
                                                    let t = ti[e];
                                                    ((H[4 * tr] = t.x),
                                                        (H[4 * tr + 1] = t.y),
                                                        (H[4 * tr + 2] = t.vx),
                                                        (H[4 * tr + 3] = t.vy),
                                                        (Y[4 * tr] = t.strength),
                                                        (Y[4 * tr + 1] = t.spacing),
                                                        (Y[4 * tr + 2] = t.widthScale),
                                                        (Y[4 * tr + 3] = +!!t.head + 2 * !!t.tail),
                                                        tr++);
                                                }
                                                (eA.uniform1i(eb("uWakeCount"), tr),
                                                    eA.uniform4fv(eb("uWake[0]"), H),
                                                    eA.uniform4fv(eb("uWakeShape[0]"), Y),
                                                    eA.uniform1f(eb("uWakePush"), ta.push),
                                                    eA.uniform1f(eb("uWakeWidth"), ta.width),
                                                    eA.uniform1f(eb("uWakeLength"), ta.length),
                                                    eA.uniform1f(eb("uWakeGlow"), ta.glow));
                                                let tl = eQ.fx,
                                                    to = 1 + (tl.heatBoost - 1) * eJ,
                                                    ts = tl.chroma * to,
                                                    tu = eK * eZ;
                                                ((J = (J + (tu * tl.waveSpeed) / Math.max(0.01, tl.waveLength)) % 1) <
                                                    0 && (J += 1),
                                                    (Z = (Z + tu / Math.max(0.1, tl.waveSwellSeconds)) % 1));
                                                let th =
                                                        (1 - tl.waveSwell * (0.5 + 0.5 * Math.cos(Z * Math.PI * 2))) *
                                                        to,
                                                    tc = Math.round(tl.waveSpiral),
                                                    tf = tl.wave > 0 || tl.waveLift > 0 ? tl.chromaWave * th : 0;
                                                (eA.uniform1f(eb("uWave"), tl.wave * th),
                                                    eA.uniform1f(eb("uWaveLift"), tl.waveLift * th),
                                                    eA.uniform1f(eb("uWaveLength"), tl.waveLength),
                                                    eA.uniform1f(eb("uWaveCycle"), J),
                                                    eA.uniform1f(eb("uWaveSpiral"), tc),
                                                    eA.uniform1f(eb("uWaveReach"), tl.waveReach));
                                                let td = tl.flare * to;
                                                ee += eK * tl.flareOrbit * eZ;
                                                let tm = eQ.flash,
                                                    tg =
                                                        null != et &&
                                                        eL.lens &&
                                                        (ts > 1e-4 ||
                                                            tf > 1e-4 ||
                                                            td > 0.001 ||
                                                            tl.vignette > 0.001 ||
                                                            tm > 0.001),
                                                    tp = (function (e, t, a, i, r) {
                                                        if (null == $) return 0;
                                                        ((l.dt = i),
                                                            (l.now = a),
                                                            (l.tuning = e),
                                                            (l.wake = g.current.wake),
                                                            (l.agitation = r.agitation),
                                                            (l.coreRadius = t.radius),
                                                            (l.impacts = r.impacts),
                                                            (l.pulses = r.pulses),
                                                            (l.wakes = r.wakes));
                                                        let o = n.step(l);
                                                        return (
                                                            eS.begin(),
                                                            eS.uniform3f(
                                                                eP("uBody"),
                                                                tC(e.bodyTint[0]),
                                                                tC(e.bodyTint[1]),
                                                                tC(e.bodyTint[2]),
                                                            ),
                                                            eS.uniform3f(
                                                                eP("uRim"),
                                                                tC(t.glowTint[0]) * e.rimIntensity,
                                                                tC(t.glowTint[1]) * e.rimIntensity,
                                                                tC(t.glowTint[2]) * e.rimIntensity,
                                                            ),
                                                            eS.uniform1f(eP("uLumpiness"), e.lumpiness),
                                                            eS.uniform1f(eP("uRimWidth"), e.rimWidth),
                                                            eS.uniform1f(eP("uRimWrap"), e.rimWrap),
                                                            eS.uniform1f(eP("uRimFalloff"), e.rimFalloff),
                                                            eS.uniform1f(eP("uCoreRadius"), t.radius),
                                                            o
                                                        );
                                                    })(eE.rocks, e3, eq, eK, eQ);
                                                if (tg) {
                                                    (eR.begin(),
                                                        eR.uniform1f(eW("uAspect"), e.width / e.height),
                                                        eR.uniform1f(eW("uChroma"), ts),
                                                        eR.uniform1f(eW("uChromaWave"), tf),
                                                        eR.uniform1f(eW("uCoreRadius"), e3.radius),
                                                        eR.uniform1f(eW("uWaveLength"), tl.waveLength),
                                                        eR.uniform1f(eW("uWaveCycle"), J),
                                                        eR.uniform1f(eW("uWaveSpiral"), tc),
                                                        eR.uniform1f(eW("uWaveReach"), tl.waveReach),
                                                        eR.uniform1f(eW("uChromaStart"), tl.chromaStart),
                                                        eR.uniform1f(eW("uChromaFalloff"), tl.chromaFalloff),
                                                        eR.uniform1f(eW("uChromaTwist"), tl.chromaTwist),
                                                        eR.uniform1i(
                                                            eW("uChromaSamples"),
                                                            Math.max(3, Math.min(9, Math.round(tl.chromaSamples))),
                                                        ),
                                                        eR.uniform1f(eW("uFlare"), td),
                                                        eR.uniform3f(
                                                            eW("uFlareTint"),
                                                            tl.flareTint[0],
                                                            tl.flareTint[1],
                                                            tl.flareTint[2],
                                                        ));
                                                    let t = tl.flareAngle + ee,
                                                        a = 0;
                                                    for (let e = e4; e < e6.length; e++) {
                                                        let i = e6[e],
                                                            n = Math.max(0, (eq - i.bornAt) / 1e3) / 0.8;
                                                        if (n >= 1) continue;
                                                        let r = Math.atan2(
                                                            Math.sin(t - i.angle),
                                                            Math.cos(t - i.angle),
                                                        );
                                                        a += Math.exp(-r * r * 4) * (1 - n) * (1 - n);
                                                    }
                                                    let i =
                                                        Math.max(tl.flareDistance, 1 + e3.noiseAmount) *
                                                        e3.radius *
                                                        (1 + 0.04 * a) *
                                                        0.32;
                                                    (eR.uniform2f(eW("uFlareSource"), Math.cos(t) * i, Math.sin(t) * i),
                                                        eR.uniform1f(eW("uFlareSize"), tl.flareSource),
                                                        eR.uniform1f(eW("uFlareRays"), tl.flareRays),
                                                        eR.uniform1f(eW("uFlareGhosts"), tl.flareGhosts),
                                                        eR.uniform1f(eW("uFlareHalo"), tl.flareHalo),
                                                        eR.uniform1f(eW("uFlareTurn"), -ee),
                                                        eR.uniform1f(eW("uVignette"), tl.vignette),
                                                        eR.uniform1f(eW("uFlash"), Math.min(1, tm)));
                                                }
                                                let tw = am(eL);
                                                if (tw) {
                                                    let { view: e } = eE,
                                                        t = e.zoom * Math.cos(e.turn),
                                                        a = e.zoom * Math.sin(e.turn);
                                                    (eT.begin(),
                                                        eT.uniform2f(eU("uViewX"), t, (-a * eX) / eV),
                                                        eT.uniform2f(eU("uViewY"), (a * eV) / eX, t),
                                                        eT.uniform2f(eU("uViewShift"), (2 * e.x) / eX, (-2 * e.y) / eV),
                                                        eT.uniform2f(eU("uEdgeFade"), 80 / eV, 48 / eV));
                                                }
                                                let tv = 0;
                                                if (
                                                    (eL.settleTolerance > 0 &&
                                                        (ex =
                                                            (function (e) {
                                                                let t = 7 * e,
                                                                    a = !1;
                                                                for (let e = 0; e < t; e++)
                                                                    r[e] !== ev[e] && ((ev[e] = r[e]), (a = !0));
                                                                return a;
                                                            })(tp) ||
                                                            eA.moved() ||
                                                            eS.moved() ||
                                                            (tg && eR.moved()) ||
                                                            (tw && eT.moved())
                                                                ? 0
                                                                : ex + 1) < 4 &&
                                                        (tv = eL.settleTolerance),
                                                    !ef &&
                                                        tg === ep &&
                                                        tw === ew &&
                                                        !eA.differs(tv) &&
                                                        !(null != $ && eS.differs(tv)) &&
                                                        !(tg && eR.differs(tv)) &&
                                                        !(tw && eT.differs(tv)) &&
                                                        ((eh = tp), (ey = tv), eh === eg && t$(r, em, 0, 7 * eh, ey)))
                                                )
                                                    return;
                                                ((ef = !1),
                                                    (ex = 0),
                                                    ek || (ec = i - eB < eO ? eB + eO : i + eO),
                                                    (ep = tg),
                                                    (ew = tw),
                                                    (eg = tp),
                                                    em.set(r),
                                                    t.viewport(0, 0, e.width, e.height),
                                                    t.useProgram(m),
                                                    t.bindVertexArray(es),
                                                    eA.send(t),
                                                    tw &&
                                                        (eN(eI, e.width, e.height),
                                                        t.bindFramebuffer(t.FRAMEBUFFER, eI.framebuffer)),
                                                    t.clearColor(0, 0, 0, 0),
                                                    t.clear(t.COLOR_BUFFER_BIT),
                                                    t.drawArrays(t.TRIANGLES, 0, 3),
                                                    null != $ &&
                                                        (t.useProgram($),
                                                        t.bindVertexArray(eM),
                                                        t.bindBuffer(t.ARRAY_BUFFER, eF),
                                                        t.bufferSubData(t.ARRAY_BUFFER, 0, n.instances, 0, 7 * tp),
                                                        eS.send(t),
                                                        t.drawArraysInstanced(t.TRIANGLES, 0, 6, tp)));
                                                let tx = null;
                                                (tw &&
                                                    (t.disable(t.BLEND),
                                                    (tx = eI),
                                                    tg &&
                                                        null != et &&
                                                        (eN(e_, e.width, e.height),
                                                        t.bindFramebuffer(t.FRAMEBUFFER, e_.framebuffer),
                                                        t.useProgram(et),
                                                        t.bindVertexArray(eC),
                                                        t.activeTexture(t.TEXTURE0 + 2),
                                                        t.bindTexture(t.TEXTURE_2D, eI.texture),
                                                        eR.send(t),
                                                        t.clear(t.COLOR_BUFFER_BIT),
                                                        t.drawArrays(t.TRIANGLES, 0, 3),
                                                        (tx = e_)),
                                                    t.bindFramebuffer(t.FRAMEBUFFER, null),
                                                    t.useProgram(eo),
                                                    t.bindVertexArray(eD),
                                                    t.activeTexture(t.TEXTURE0 + 4),
                                                    t.bindTexture(t.TEXTURE_2D, tx.texture),
                                                    eT.send(t),
                                                    t.clear(t.COLOR_BUFFER_BIT),
                                                    t.drawArrays(t.TRIANGLES, 0, 3),
                                                    t.enable(t.BLEND)),
                                                    eE.echoes &&
                                                        (t.bindFramebuffer(t.READ_FRAMEBUFFER, tx?.framebuffer ?? null),
                                                        (function (a, i, n, r, l) {
                                                            for (let o of a) {
                                                                if (ea.has(o)) continue;
                                                                let a = Math.max(0.01, r.life),
                                                                    s = (n - o.bornAt) / 1e3;
                                                                if (s < 0) continue;
                                                                let u =
                                                                    1 -
                                                                    Math.pow(
                                                                        1 - Math.min(1, s / a),
                                                                        Math.max(1, r.ease),
                                                                    );
                                                                if (u < 0.75) continue;
                                                                ea.add(o);
                                                                let h = i.radius + r.speed * a * u,
                                                                    c = r.width * (1 + s * r.soften);
                                                                t.bindFramebuffer(t.DRAW_FRAMEBUFFER, l);
                                                                for (let a = 0; a < 12; a++) {
                                                                    let i = (a / 12) * Math.PI * 2;
                                                                    for (let n = 0; n < ah.length; n++) {
                                                                        let r = (h + ah[n] * c) * 0.32,
                                                                            l = Math.round(
                                                                                (F["0"] + Math.cos(i) * r) * e.width,
                                                                            ),
                                                                            o = Math.round(
                                                                                (F["1"] + Math.sin(i) * r) * e.height,
                                                                            ),
                                                                            s = a * ah.length + n;
                                                                        ((en[s] =
                                                                            l < 0 ||
                                                                            o < 0 ||
                                                                            l >= e.width ||
                                                                            o >= e.height
                                                                                ? 0
                                                                                : 1),
                                                                            1 === en[s] &&
                                                                                t.blitFramebuffer(
                                                                                    l,
                                                                                    o,
                                                                                    l + 1,
                                                                                    o + 1,
                                                                                    s,
                                                                                    0,
                                                                                    s + 1,
                                                                                    1,
                                                                                    t.COLOR_BUFFER_BIT,
                                                                                    t.NEAREST,
                                                                                ));
                                                                    }
                                                                }
                                                                (t.bindFramebuffer(t.FRAMEBUFFER, l),
                                                                    t.readPixels(
                                                                        0,
                                                                        0,
                                                                        ac,
                                                                        1,
                                                                        t.RGBA,
                                                                        t.UNSIGNED_BYTE,
                                                                        ei,
                                                                    ),
                                                                    t.bindFramebuffer(t.FRAMEBUFFER, null));
                                                                let f = [0, 0, 0];
                                                                for (let e = 0; e < 12; e++) {
                                                                    let t = -1,
                                                                        a = 0,
                                                                        i = 0,
                                                                        n = 0;
                                                                    for (let r = 0; r < ah.length; r++) {
                                                                        let l = e * ah.length + r;
                                                                        if (0 === en[l]) continue;
                                                                        let o = Math.max(
                                                                            ei[4 * l],
                                                                            ei[4 * l + 1],
                                                                            ei[4 * l + 2],
                                                                        );
                                                                        o > t &&
                                                                            ((t = o),
                                                                            (a = ei[4 * l]),
                                                                            (i = ei[4 * l + 1]),
                                                                            (n = ei[4 * l + 2]));
                                                                    }
                                                                    t < 0 ||
                                                                        ((f[0] += tC(a / 255)),
                                                                        (f[1] += tC(i / 255)),
                                                                        (f[2] += tC(n / 255)));
                                                                }
                                                                let d = Math.max(f[0], f[1], f[2]);
                                                                d < 0.001 ||
                                                                    (o.color = [
                                                                        tI(f[0] / d),
                                                                        tI(f[1] / d),
                                                                        tI(f[2] / d),
                                                                    ]);
                                                            }
                                                        })(e7, e3, eq, eE.pulse, eG),
                                                        t.bindFramebuffer(t.FRAMEBUFFER, null)));
                                            },
                                            showPlate: function (e) {
                                                let a, i;
                                                ((a = t.createTexture()),
                                                    t.activeTexture(t.TEXTURE0 + 0),
                                                    t.bindTexture(t.TEXTURE_2D, a),
                                                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                                    t.texParameteri(
                                                        t.TEXTURE_2D,
                                                        t.TEXTURE_MIN_FILTER,
                                                        t.LINEAR_MIPMAP_LINEAR,
                                                    ),
                                                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                                    t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
                                                    t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE),
                                                    t.texImage2D(
                                                        t.TEXTURE_2D,
                                                        0,
                                                        t.SRGB8_ALPHA8,
                                                        t.RGBA,
                                                        t.UNSIGNED_BYTE,
                                                        e,
                                                    ),
                                                    t.generateMipmap(t.TEXTURE_2D),
                                                    (eX = a),
                                                    (i = t.createTexture()),
                                                    t.activeTexture(t.TEXTURE0 + 1),
                                                    t.bindTexture(t.TEXTURE_2D_ARRAY, i),
                                                    t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                                    t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                                    t.texImage3D(
                                                        t.TEXTURE_2D_ARRAY,
                                                        0,
                                                        t.RGBA16F,
                                                        1,
                                                        1,
                                                        1,
                                                        0,
                                                        t.RGBA,
                                                        t.FLOAT,
                                                        new Float32Array(4),
                                                    ),
                                                    (ez = i),
                                                    t.useProgram(m),
                                                    t.uniform1i(eb("uPlate"), 0),
                                                    t.uniform1i(eb("uWideGlow"), 1),
                                                    (ef = !0));
                                            },
                                            showEggs: eV,
                                            rocks: null != $,
                                            release() {
                                                (null != eX && t.deleteTexture(eX),
                                                    null != ez && t.deleteTexture(ez),
                                                    t.deleteBuffer(eh),
                                                    t.deleteBuffer(eE),
                                                    t.deleteBuffer(eF),
                                                    t.deleteVertexArray(es),
                                                    t.deleteVertexArray(eM),
                                                    t.deleteVertexArray(eC),
                                                    t.deleteVertexArray(eD),
                                                    t.deleteTexture(eI.texture),
                                                    t.deleteTexture(e_.texture),
                                                    t.deleteTexture(eL),
                                                    t.deleteFramebuffer(eI.framebuffer),
                                                    t.deleteFramebuffer(e_.framebuffer),
                                                    t.deleteRenderbuffer(eO),
                                                    t.deleteFramebuffer(eG),
                                                    t.deleteProgram(m),
                                                    null != $ && t.deleteProgram($),
                                                    null != et && t.deleteProgram(et),
                                                    t.deleteProgram(eo));
                                            },
                                        }
                                    );
                                })($),
                            ));
                    })));
            }
            function eE() {
                null != ey && null != er && (ey.showPlate(er), eS(), (eS = a.run(ey.render)), eR());
            }
            function eF() {
                try {
                    eE();
                } catch (e) {
                    tL.error("plate failed to load", e);
                }
            }
            function eP(e) {
                (e.preventDefault(), cancelAnimationFrame(eo), eS(), (eh = a.now()), eA(), (eb = null), (ey = null));
            }
            function eL() {
                let e = ar(t);
                eM(g.current.quality.lens && !e, (i) => {
                    if (null == (ey = i)) {
                        t.isContextLost() || g.current.onDegrade("still");
                        return;
                    }
                    (e && g.current.onDegrade("low"), (a.paused && a.now() === eh) || (eu = a.now()), eF());
                });
            }
            function eC() {
                ek();
            }
            function eI() {
                ((ed = null), a.paused && ek());
            }
            let e_ = new (i.defaultView ?? window).ResizeObserver(eI);
            e_.observe(e);
            let eW = () => {};
            return (
                !(function e() {
                    let t = matchMedia(`(resolution: ${devicePixelRatio}dppx)`);
                    function a() {
                        (eW(), e(), eI());
                    }
                    (t.addEventListener("change", a), (eW = () => t.removeEventListener("change", a)));
                })(),
                e.addEventListener("webglcontextlost", eP),
                e.addEventListener("webglcontextrestored", eL),
                i.addEventListener("visibilitychange", eC),
                (eu = a.now()),
                !(async function () {
                    try {
                        let e = await tB(tX);
                        if (es) return;
                        ((er = e), eE());
                    } catch (e) {
                        tL.error("plate failed to load", e);
                    }
                })(),
                eM(g.current.quality.lens, (e) => {
                    if (null == (ey = e)) {
                        t.isContextLost() || g.current.onDegrade("still");
                        return;
                    }
                    (ey.rocks &&
                        (async function () {
                            try {
                                let e = await (t1 ??= (async function () {
                                    try {
                                        let e = await (async function (e) {
                                            let t = await Promise.all(
                                                    e.map(async (e) => {
                                                        try {
                                                            return await tB(e.src);
                                                        } catch (t) {
                                                            return (
                                                                tL.error("easter egg failed to load", e.id, t), null
                                                            );
                                                        }
                                                    }),
                                                ),
                                                a = new Float32Array(65536 * Math.max(e.length, 1)),
                                                i = 0;
                                            for (let e of t)
                                                null != e &&
                                                    (function (e, t, a) {
                                                        let i = e.naturalWidth > 0 ? e.naturalWidth : 512,
                                                            n = e.naturalHeight > 0 ? e.naturalHeight : 512,
                                                            r = 512 / Math.max(i, n),
                                                            l = document.createElement("canvas");
                                                        ((l.width = Math.max(1, Math.round(i * r))),
                                                            (l.height = Math.max(1, Math.round(n * r))));
                                                        let o = l.getContext("2d", { willReadFrequently: !0 });
                                                        if (null == o) return !1;
                                                        o.drawImage(e, 0, 0, l.width, l.height);
                                                        let s = o.getImageData(0, 0, l.width, l.height).data,
                                                            u = (function (e, t) {
                                                                let { width: a, height: i } = e,
                                                                    n = a,
                                                                    r = i,
                                                                    l = -1,
                                                                    o = -1;
                                                                for (let e = 0; e < i; e++)
                                                                    for (let i = 0; i < a; i++)
                                                                        0 !== t[(e * a + i) * 4 + 3] &&
                                                                            ((n = Math.min(n, i)),
                                                                            (r = Math.min(r, e)),
                                                                            (l = Math.max(l, i)),
                                                                            (o = Math.max(o, e)));
                                                                return l < n
                                                                    ? null
                                                                    : {
                                                                          x: n,
                                                                          y: r,
                                                                          width: l - n + 1,
                                                                          height: o - r + 1,
                                                                      };
                                                            })(l, s);
                                                        if (null == u) return !1;
                                                        let { x: h, y: c, width: f, height: d } = u,
                                                            m = 256 / 1.5 / Math.max(f, d),
                                                            g = document.createElement("canvas");
                                                        ((g.width = 256), (g.height = 256));
                                                        let p = g.getContext("2d", { willReadFrequently: !0 });
                                                        if (null == p) return !1;
                                                        p.imageSmoothingQuality = "high";
                                                        let w = f * m,
                                                            v = d * m;
                                                        p.drawImage(l, h, c, f, d, (256 - w) / 2, (256 - v) / 2, w, v);
                                                        let x = (function (e) {
                                                                let t = new Float64Array(65536),
                                                                    a = new Float64Array(65536);
                                                                for (let i = 0; i < 65536; i++) {
                                                                    let n = e[4 * i + 3] / 255;
                                                                    ((t[i] =
                                                                        n >= 1
                                                                            ? 0
                                                                            : n <= 0
                                                                              ? 1e20
                                                                              : Math.max(0, 0.5 - n) ** 2),
                                                                        (a[i] =
                                                                            n >= 1
                                                                                ? 1e20
                                                                                : n <= 0
                                                                                  ? 0
                                                                                  : Math.max(0, n - 0.5) ** 2));
                                                                }
                                                                let i = {
                                                                    sourceCosts: new Float64Array(256),
                                                                    nearestSamples: new Uint16Array(256),
                                                                    boundaries: new Float64Array(257),
                                                                };
                                                                (t0(t, 256, i), t0(a, 256, i));
                                                                let n = new Float64Array(65536);
                                                                for (let e = 0; e < 65536; e++)
                                                                    n[e] = Math.sqrt(t[e]) - Math.sqrt(a[e]);
                                                                return (
                                                                    (function (e) {
                                                                        let t = new Float64Array(256),
                                                                            a = Array.from({ length: 7 }, (e, t) =>
                                                                                Math.exp(-(((t - 3) / (0.6 * 3)) ** 2)),
                                                                            ),
                                                                            i = a.reduce((e, t) => e + t, 0);
                                                                        for (let [n, r] of [
                                                                            [1, 256],
                                                                            [256, 1],
                                                                        ])
                                                                            for (let l = 0; l < 256; l++) {
                                                                                let o = l * r;
                                                                                for (let r = 0; r < 256; r++) {
                                                                                    let l = 0;
                                                                                    for (let t = -3; t <= 3; t++)
                                                                                        l +=
                                                                                            e[
                                                                                                o +
                                                                                                    Math.max(
                                                                                                        0,
                                                                                                        Math.min(
                                                                                                            255,
                                                                                                            r + t,
                                                                                                        ),
                                                                                                    ) *
                                                                                                        n
                                                                                            ] * a[t + 3];
                                                                                    t[r] = l / i;
                                                                                }
                                                                                for (let a = 0; a < 256; a++)
                                                                                    e[o + a * n] = t[a];
                                                                            }
                                                                    })(n),
                                                                    n
                                                                );
                                                            })(p.getImageData(0, 0, 256, 256).data),
                                                            y = 3 / 256;
                                                        for (let e = 0; e < 65536; e++)
                                                            t[a + e] = Math.max(-32, Math.min(32, x[e])) * y;
                                                        return !0;
                                                    })(e, a, 256 * i * 256) &&
                                                    i++;
                                            return 0 === i ? null : { layers: i, sdf: a.subarray(0, 256 * i * 256) };
                                        })(tJ);
                                        return (e?.layers !== tJ.length && (t1 = null), e);
                                    } catch (e) {
                                        throw ((t1 = null), e);
                                    }
                                })());
                                if (es || null == e) return;
                                ((el = e), ey?.showEggs(e), (l.eggLayers = e.layers));
                            } catch (e) {
                                tL.error("easter eggs failed to bake", e);
                            }
                        })(),
                        eF());
                }),
                function () {
                    ((es = !0),
                        cancelAnimationFrame(eo),
                        eS(),
                        eT(),
                        e_.disconnect(),
                        eW(),
                        e.removeEventListener("webglcontextlost", eP),
                        e.removeEventListener("webglcontextrestored", eL),
                        i.removeEventListener("visibilitychange", eC),
                        ey?.release(),
                        (ey = null),
                        tU(e, t));
                }
            );
        }, [g, a]),
        (0, o.jsx)("div", {
            className: au.Hc,
            children: (0, o.jsx)("canvas", { ref: m, className: h()(au.MT, !am(u) && au.zj), "aria-hidden": !0 }),
        })
    );
}
var ap = a(60135);
function aw(e) {
    let t = e.clientWidth,
        a = Math.random() * Math.PI * 2,
        i = 0.42 * t;
    return [t / 2 + Math.cos(a) * i, t / 2 + Math.sin(a) * i];
}
function av(e) {
    let {
            director: t,
            tuning: a,
            quality: i,
            echoes: n,
            still: r,
            view: l,
            onDegrade: u,
            onToss: h,
            label: c,
            ringTarget: f,
        } = e,
        m = s.useRef(null),
        g = s.useMemo(() => (r ? t.renderState.look : null), [r, t]),
        p = s.useRef(null),
        w = s.useRef(null),
        v = s.useRef(null),
        y = (function (e) {
            let [t] = s.useState(tl),
                a = (0, d.bG)([x.Ay], () => x.Ay.useReducedMotion);
            return (
                s.useEffect(() => {
                    let i = e.current;
                    if (null != i)
                        return (
                            i.addEventListener("pointermove", r),
                            i.addEventListener("pointerenter", r),
                            i.addEventListener("pointerdown", l),
                            i.addEventListener("pointerleave", n),
                            () => {
                                (i.removeEventListener("pointermove", r),
                                    i.removeEventListener("pointerenter", r),
                                    i.removeEventListener("pointerdown", l),
                                    i.removeEventListener("pointerleave", n),
                                    n());
                            }
                        );
                    function n() {
                        t.shown && ((t.shown = !1), t.onChange?.());
                    }
                    function r(e) {
                        if (null == i) return;
                        if ("touch" === e.pointerType) return void n();
                        let a = i.getBoundingClientRect();
                        0 !== a.width &&
                            0 !== a.height &&
                            ((t.x = ((e.clientX - a.left) / a.width) * i.offsetWidth),
                            (t.y = ((e.clientY - a.top) / a.height) * i.offsetHeight),
                            (t.shown = !0),
                            t.onChange?.());
                    }
                    function l(e) {
                        (r(e),
                            0 !== e.button ||
                                a ||
                                "touch" === e.pointerType ||
                                ((t.pressedAt = performance.now()), t.onChange?.()));
                    }
                }, [t, a, e]),
                t
            );
        })(p),
        b = s.useRef(null),
        A = s.useCallback((e) => {
            if (0 !== e.button) return;
            e.currentTarget.setPointerCapture(e.pointerId);
            let t = e.currentTarget.getBoundingClientRect();
            ((b.current = t),
                m.current?.press(e.clientX - t.left, e.clientY - t.top),
                (w.current = { releasedAt: null }));
        }, []),
        S = s.useCallback((e) => {
            let t = b.current;
            null != t && m.current?.move(e.clientX - t.left, e.clientY - t.top);
        }, []),
        R = s.useCallback(() => {
            (null != w.current && (w.current.releasedAt = performance.now()), (b.current = null), m.current?.release());
        }, []),
        k = s.useCallback(() => {
            ((w.current = null), (b.current = null), m.current?.release());
        }, []),
        T = s.useCallback((e) => {
            if (("Enter" !== e.key && " " !== e.key) || (e.preventDefault(), e.repeat || null != v.current)) return;
            ((v.current = e.key), (w.current = null));
            let [t, a] = aw(e.currentTarget);
            m.current?.press(t, a);
        }, []),
        M = s.useCallback((e) => {
            e.key === v.current && (e.preventDefault(), (v.current = null), m.current?.release());
        }, []),
        E = s.useCallback(() => {
            null != v.current && ((v.current = null), m.current?.release());
        }, []),
        F = s.useCallback((e) => {
            let t = w.current?.releasedAt;
            if (null != t && ((w.current = null), performance.now() - t < 1e3)) return;
            let [a, i] = aw(e.currentTarget);
            m.current?.tossOnce(a, i);
        }, []);
    return (0, o.jsx)(tn.vN, {
        ringTarget: f,
        offset: 4,
        children: (0, o.jsxs)("button", {
            type: "button",
            className: ap.D,
            ref: p,
            "aria-label": c,
            onPointerDown: A,
            onPointerMove: S,
            onPointerUp: R,
            onPointerCancel: k,
            onLostPointerCapture: R,
            onKeyDown: T,
            onKeyUp: M,
            onBlur: E,
            onClick: F,
            children: [
                null != g
                    ? (0, o.jsx)(tV, { look: g })
                    : (0, o.jsx)(ag, {
                          renderState: t.renderState,
                          clock: t.clock,
                          pulse: a.pulse,
                          wake: a.wake,
                          surge: a.surge,
                          rocks: a.rocks,
                          quality: i,
                          echoes: n,
                          view: l,
                          onDegrade: u,
                      }),
                (0, o.jsx)(tP, {
                    ref: m,
                    director: t,
                    motesPerOrb: a.motesPerOrb,
                    surge: a.surge,
                    wake: a.wake,
                    pixelRatio: i.orbPixelRatio,
                    fixedCoreRadius: g?.core.radius ?? null,
                    view: l,
                    cursor: y,
                    onToss: h,
                }),
            ],
        }),
    });
}
let ax = `#version 300 es
in vec2 aCorner;
void main() {
  gl_Position = vec4(aCorner, 0.0, 1.0);
}
`,
    ay = `#version 300 es
precision highp float;

#define MAX_PULSES 6

/** The void's centre, canvas pixels from the top left. */
uniform vec2 uCenter;
/** Canvas pixels per rim unit. */
uniform float uRim;
uniform float uCanvasHeight;
uniform float uCoreRadius;

uniform int uPulseCount;
/** Per pulse: age in seconds, gain (unused). */
uniform vec2 uPulse[MAX_PULSES];
uniform float uPulseSeed[MAX_PULSES];
/** The color each ring showed near the panel's edge, linear. */
uniform vec3 uPulseColor[MAX_PULSES];

/** The ring inside: its life, its reach from the core's edge (rim units) and its ease. */
uniform float uRingLife;
uniform float uRingReach;
uniform float uRingEase;
/** The echo's own life. */
uniform float uLife;
/** How far past the ring inside it has drifted by the end of its life, rim units. */
uniform float uDrift;
uniform float uLag;
uniform float uWidth;
uniform float uSoften;
uniform float uFade;
uniform float uBrightness;
uniform float uHaze;
uniform float uHazeAmount;
uniform float uRipple;
uniform float uRippleScale;
uniform float uSpin;

out vec4 outColor;

${t2}
${t5}

void main() {
  // gl_FragCoord runs up from the bottom; the centre is given from the top.
  vec2 pixel = vec2(gl_FragCoord.x, uCanvasHeight - gl_FragCoord.y);
  vec2 d = (pixel - uCenter) / uRim;
  float r = length(d);
  vec2 heading = d / max(r, 1e-4);

  vec3 light = vec3(0.0);
  for (int i = 0; i < MAX_PULSES; i++) {
    if (i >= uPulseCount) break;
    vec2 pulse = uPulse[i];
    if (pulse.x < 0.0) continue;
    float life = max(uLife, 0.01);
    float age = pulse.x / life;
    if (age >= 1.0) continue;
    float fade = pow(1.0 - age, max(uFade, 0.05));
    float travelled = travel(pulse.x / max(uRingLife, 0.01), uRingEase);
    float turn = -uSpin * travelled;
    vec2 spun = mat2(cos(turn), sin(turn), -sin(turn), cos(turn)) * heading;
    float ripple = (fbm(spun * uRippleScale + uPulseSeed[i] * 7.7 + pulse.x * 0.9) - 0.5) * 2.0 * uRipple;
    // Only the ride follows the ring inside, so it stays on it. Past that
    // every echo is the same, whatever phase sent it.
    float drift = uDrift * pow(age, max(uLag, 0.1));
    float front = uCoreRadius + uRingReach * travelled + drift + ripple;
    float width = uWidth * (1.0 + pulse.x * uSoften);
    float x = (r - front) / max(width, 1e-3);
    float h = x / max(uHaze, 1.0);
    float ring = (exp(-x * x) + exp(-h * h) * uHazeAmount) * fade;
    float burn = ring * uBrightness;
    light += uPulseColor[i] * burn;
  }

  // Summed in linear light, as the void does, then encoded for the page.
  vec3 encoded = pow(min(light, vec3(1.0)), vec3(1.0 / 2.2));
  float alpha = max(encoded.r, max(encoded.g, encoded.b));
  outColor = vec4(encoded, alpha);
}
`;
var ab = a(453748);
function aA(e) {
    let { director: t, voidRef: a, host: i } = e,
        n = s.useRef(null),
        r = (0, d.bG)([x.Ay], () => x.Ay.useReducedMotion);
    return (s.useEffect(() => {
        if (r) return;
        let e = n.current;
        if (null == e) return;
        let l = e.getContext("webgl2", { alpha: !0, premultipliedAlpha: !0, antialias: !1 });
        if (null == l || l.isContextLost()) return;
        let { clock: o } = t,
            s = new Float32Array(12),
            u = new Float32Array(6),
            h = new Float32Array(18),
            c = new WeakMap(),
            f = 0,
            d = null,
            m = performance.now() + 1e3;
        function g() {
            d = null;
        }
        let p = i.ownerDocument.defaultView ?? window,
            w = new p.ResizeObserver(g);
        (w.observe(i), p.addEventListener("resize", g));
        let v = !1,
            x = "",
            y = () => {},
            b = null,
            A = null,
            S = () => {};
        function R() {
            (S(), tG(l, A));
            let n = t_(l, ax, ay);
            ((A = n),
                (S = tW(l, [n], () => {
                    ((A = null),
                        null !=
                            (b = (function (n) {
                                let r = tO(l, n);
                                if (null == r) return null;
                                let g = l.createBuffer();
                                (l.bindBuffer(l.ARRAY_BUFFER, g),
                                    l.bufferData(
                                        l.ARRAY_BUFFER,
                                        new Float32Array([-1, -1, 3, -1, -1, 3]),
                                        l.STATIC_DRAW,
                                    ));
                                let p = l.createVertexArray();
                                l.bindVertexArray(p);
                                let w = l.getAttribLocation(r, "aCorner");
                                (l.enableVertexAttribArray(w), l.vertexAttribPointer(w, 2, l.FLOAT, !1, 0, 0));
                                let y = tD(l, r);
                                return {
                                    render: function () {
                                        let n = a.current;
                                        if (null == n) return;
                                        let g = t.renderState,
                                            w = o.now(),
                                            b = 0,
                                            A = g.pulses;
                                        for (let e = Math.max(0, A.length - 6); e < A.length; e++) {
                                            let t = A[e],
                                                a = (w - t.bornAt) / 1e3;
                                            if (a < 0 || a >= 1.2) continue;
                                            ((s[2 * b] = a), (s[2 * b + 1] = t.gain));
                                            let i = c.get(t);
                                            (null == i && ((i = f++ % 64), c.set(t, i)), (u[b] = i));
                                            let n = t.color ?? g.look.core.glowTint;
                                            for (let e = 0; e < 3; e++) h[3 * b + e] = tC(n[e]);
                                            b++;
                                        }
                                        if (0 === b) {
                                            v && (l.clearColor(0, 0, 0, 0), l.clear(l.COLOR_BUFFER_BIT), (v = !1));
                                            return;
                                        }
                                        (null == d || performance.now() < m) &&
                                            (d = {
                                                host: i.getBoundingClientRect(),
                                                void: n.getBoundingClientRect(),
                                                across: i.offsetWidth,
                                            });
                                        let { host: S, void: R } = d,
                                            k = d.across > 0 ? S.width / d.across : 1,
                                            T = -S.left / k,
                                            M = -S.top / k,
                                            E = window.innerWidth / k,
                                            P = window.innerHeight / k,
                                            L = `${T.toFixed(1)},${M.toFixed(1)},${E.toFixed(1)},${P.toFixed(1)}`;
                                        L !== x &&
                                            ((e.style.left = `${T}px`),
                                            (e.style.top = `${M}px`),
                                            (e.style.width = `${E}px`),
                                            (e.style.height = `${P}px`),
                                            (x = L));
                                        let C =
                                                0.5 *
                                                Math.min(window.devicePixelRatio > 0 ? window.devicePixelRatio : 1, 2),
                                            I = Math.max(1, Math.round(window.innerWidth * C)),
                                            _ = Math.max(1, Math.round(window.innerHeight * C));
                                        (e.width !== I || e.height !== _) && ((e.width = I), (e.height = _));
                                        let W = (R.left + F["0"] * R.width) * C,
                                            O = (R.top + F["1"] * R.height) * C,
                                            G = Math.max(1, 0.32 * R.width * C),
                                            D = Math.hypot(Math.max(W, I - W), Math.max(O, _ - O)) / G,
                                            U = g.look.core;
                                        (l.viewport(0, 0, I, _),
                                            l.clearColor(0, 0, 0, 0),
                                            l.clear(l.COLOR_BUFFER_BIT),
                                            l.useProgram(r),
                                            l.bindVertexArray(p),
                                            l.uniform2f(y("uCenter"), W, O),
                                            l.uniform1f(y("uRim"), G),
                                            l.uniform1f(y("uCanvasHeight"), _),
                                            l.uniform1f(y("uCoreRadius"), U.radius),
                                            l.uniform1i(y("uPulseCount"), b),
                                            l.uniform2fv(y("uPulse[0]"), s),
                                            l.uniform1fv(y("uPulseSeed[0]"), u),
                                            l.uniform3fv(y("uPulseColor[0]"), h));
                                        let B = H.speed * H.life;
                                        (l.uniform1f(y("uRingLife"), H.life),
                                            l.uniform1f(y("uRingReach"), B),
                                            l.uniform1f(y("uRingEase"), H.ease),
                                            l.uniform1f(y("uLife"), 1.2),
                                            l.uniform1f(y("uDrift"), Math.max(0, 0.5 * D - U.radius - B)),
                                            l.uniform1f(y("uLag"), 0.8),
                                            l.uniform1f(y("uWidth"), 0.04),
                                            l.uniform1f(y("uSoften"), 6),
                                            l.uniform1f(y("uFade"), 3),
                                            l.uniform1f(y("uBrightness"), 0.45),
                                            l.uniform1f(y("uHaze"), 2),
                                            l.uniform1f(y("uHazeAmount"), 0.15),
                                            l.uniform1f(y("uRipple"), H.ripple),
                                            l.uniform1f(y("uRippleScale"), H.rippleScale),
                                            l.uniform1f(y("uSpin"), H.spin),
                                            l.drawArrays(l.TRIANGLES, 0, 3),
                                            (v = !0));
                                    },
                                    release() {
                                        (l.deleteVertexArray(p), l.deleteBuffer(g), l.deleteProgram(r));
                                    },
                                };
                            })(n)) && (y = o.run(b.render)));
                })));
        }
        function k(e) {
            (e.preventDefault(), y(), S(), (A = null), (b = null));
        }
        function T() {
            ((v = !1), R());
        }
        return (
            e.addEventListener("webglcontextlost", k),
            e.addEventListener("webglcontextrestored", T),
            R(),
            function () {
                (y(),
                    S(),
                    tG(l, A),
                    (A = null),
                    w.disconnect(),
                    p.removeEventListener("resize", g),
                    e.removeEventListener("webglcontextlost", k),
                    e.removeEventListener("webglcontextrestored", T),
                    b?.release(),
                    (b = null),
                    tU(e, l));
            }
        );
    }, [r, t, a, i]),
    r)
        ? null
        : (0, er.createPortal)((0, o.jsx)("canvas", { ref: n, className: ab.J, "aria-hidden": !0 }), i);
}
let aS = {
        surfaceScale: 1,
        surfacePixelRatio: 2,
        surfaceFps: 0,
        settleTolerance: 0,
        lens: !0,
        echoes: !0,
        shake: !0,
        orbPixelRatio: 2,
    },
    aR = {
        surfaceScale: 0.5,
        surfacePixelRatio: 1,
        surfaceFps: 30,
        settleTolerance: 1 / 2048,
        lens: !1,
        echoes: !1,
        shake: !1,
        orbPixelRatio: 1,
    };
function ak(e, t) {
    let a = t / 2;
    return e <= a ? e : a + a * Math.tanh((e - a) / a);
}
var aT = a(70283),
    aM = a(192308);
function aE() {
    return { voided: S.A.getDisplayedTotal() ?? 0, balance: S.A.getDisplayedBalance() ?? 0 };
}
a(475489);
var aF = a(371902),
    aP = a(792996),
    aL = a(227273);
function aC(e) {
    let t,
        { onClose: i, overflowHost: n } = e,
        r = (0, d.bG)([x.Ay], () => x.Ay.useReducedMotion),
        [l, u] = s.useState(al),
        h = s.useCallback((e) => {
            u((t) => ("still" === t ? t : e));
        }, []),
        c = "full" !== l || r ? en : ei,
        f = "full" === l ? aS : aR,
        R = !r && f.echoes,
        k = (0, b.j)(),
        T = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                [a] = s.useState(() => new ee(j, e));
            return (
                s.useEffect(() => a.setTuning(e), [a, e]),
                s.useEffect(() => a.clock.setPaused(t), [a, t]),
                s.useEffect(() => a.clock.run((e) => a.step(e)), [a]),
                a
            );
        })(c.director, !k);
    ((t = (0, d.bG)(eF, eP)),
        s.useEffect(() => {
            let e;
            if (t) return;
            let a = (0, eu.v)();
            if (null == a) return;
            let i =
                ((ew += 1),
                null != ev && (clearTimeout(ev), (ev = null)),
                (e = !0),
                () => {
                    !e || ((e = !1), (ew -= 1) > 0 || (ev = setTimeout(ey, 3e4)));
                });
            function n() {
                return !document.hidden && !T.clock.paused;
            }
            (eS(a), eA(a, eK));
            let r = a.createGain(),
                l = eL();
            ((r.gain.value = l), r.connect(a.destination));
            let o = () => {
                let e = eL();
                e !== l && ((l = e), r.gain.setTargetAtTime(e, a.currentTime, 0.03));
            };
            S.A.addChangeListener(o);
            let s = a.createGain(),
                u = eJ();
            ((s.gain.value = u), s.connect(r));
            let h = () => {
                let e = eJ();
                e !== u && ((u = e), s.gain.setTargetAtTime(e, a.currentTime, 0.6));
            };
            (S.A.addChangeListener(h), es.Ay.addChangeListener(h));
            let c = a.createGain();
            ((c.gain.value = +!!n()), c.connect(s));
            let f = a.createGain();
            f.connect(c);
            let d = a.createGain();
            ((d.gain.value = 0), d.connect(f));
            let m = a.createGain();
            ((m.gain.value = 0), m.connect(f));
            let g = !1;
            function p() {
                return g;
            }
            let w = [
                eZ(
                    a,
                    "https://cdn.discordapp.com/assets/content/17c54dd44a2b411820ed3f363af68060f2047f871370f1a2541d6fb047853d1f.mp3",
                    d,
                    p,
                    () => {
                        let e = 0.24 * (eh.Ay.getOutputVolume() / 100),
                            t = a.currentTime;
                        (d.gain.setValueAtTime(0, t), d.gain.linearRampToValueAtTime(Math.min(1, e), t + 3));
                    },
                ),
                eZ(
                    a,
                    "https://cdn.discordapp.com/assets/content/76cedda510165c9558eea51446523e2fbb84991ef53c0135eec0860ac89cf409.mp3",
                    m,
                    p,
                ),
            ];
            eH(a);
            let v = 0,
                x = 0,
                y = T.clock.now(),
                b = T.clock.run(function (e) {
                    let t = Math.min(0.1, (e - y) / 1e3);
                    y = e;
                    let a = 0.32 * Math.pow(T.renderState.agitation, 1.5);
                    if (Math.abs((v += (a - v) * Math.min(1, t / 0.25)) - x) > 5e-4) {
                        x = v;
                        let e = Math.min(1, v * (eh.Ay.getOutputVolume() / 100));
                        m.gain.setTargetAtTime(e, m.context.currentTime, 0.02);
                    }
                }),
                A = null,
                R = null,
                k = 1,
                M = () => {
                    (null != A && clearTimeout(A),
                        (A = null),
                        null == R ||
                            T.clock.paused ||
                            (A = setTimeout(
                                () => {
                                    ((A = null), (R = null), eq(a, eK, eQ, 0.14 * k));
                                },
                                Math.max(0, R - T.clock.now()),
                            )));
                },
                E = T.subscribe((e, t) => {
                    ((R = T.clock.now() + 1e3 * Math.max(0, e - 0.35)), (k = t), M());
                }),
                F = () => {
                    let e = a.currentTime;
                    (c.gain.cancelScheduledValues(e),
                        n() ? (eS(a), c.gain.setTargetAtTime(1, e, 0.3)) : c.gain.setTargetAtTime(0, e, 0.05),
                        document.hidden && !T.clock.paused && (R = null),
                        M());
                };
            document.addEventListener("visibilitychange", F);
            let P = T.clock.watch(F);
            return () => {
                ((g = !0),
                    b(),
                    E(),
                    P(),
                    S.A.removeChangeListener(o),
                    S.A.removeChangeListener(h),
                    es.Ay.removeChangeListener(h),
                    document.removeEventListener("visibilitychange", F),
                    null != A && clearTimeout(A));
                let e = a.currentTime + 0.15;
                for (let t of (f.gain.setValueAtTime(1, a.currentTime), f.gain.linearRampToValueAtTime(0, e), w))
                    !(async function (e, t) {
                        try {
                            (await e)?.stop(t);
                        } catch {}
                    })(t, e);
                (setTimeout(() => r.disconnect(), 200), i());
            };
        }, [T, t]),
        (function (e) {
            let t = (0, d.bG)(eF, eP),
                [a] = s.useState(() => e.clock.now());
            s.useEffect(() => {
                if (t || S.A.hasHeardElevatorMusic) return;
                let i = null,
                    n = 0,
                    r = 0,
                    l = () => {};
                l = e.clock.run(function (e) {
                    if (null == i) {
                        if (e - a < 18e5 || 0 >= eL()) return;
                        ((i = (0, e0.Qh)(e1, e1, 0)), (n = e), (0, A.Av)(), i.play());
                    }
                    let t = (e - n) / 1e3;
                    if (t >= 30) {
                        (i.stop(), (i = null), l());
                        return;
                    }
                    let o = Math.min(
                        1,
                        0.25 * Math.min(1, t / 2, (30 - t) / 4) * eL() * (eh.Ay.getOutputVolume() / 100),
                    );
                    Math.abs(o - r) > 0.002 && ((r = o), (i.volume = o));
                });
                let o = () => {
                    null != i && (document.hidden || e.clock.paused ? i.pause() : i.play());
                };
                document.addEventListener("visibilitychange", o);
                let s = e.clock.watch(o);
                return () => {
                    (l(), s(), document.removeEventListener("visibilitychange", o), i?.stop());
                };
            }, [e, t, a]);
        })(T));
    let { soundVolume: M, soundMuted: E } = (0, d.cf)([S.A], () => ({
        soundVolume: S.A.soundVolume,
        soundMuted: S.A.isSoundMuted,
    }));
    s.useEffect(eV, []);
    let P = s.useRef(null),
        C = s.useRef(null),
        { kick: _, view: W } = (function (e, t, a) {
            let i = (0, d.bG)([x.Ay], () => x.Ay.useReducedMotion),
                n = a && !i,
                r = s.useRef(0),
                l = s.useRef(0),
                [o] = s.useState(tQ),
                u = s.useCallback(() => {
                    ((r.current = Math.min(1, r.current + 0.6)), (l.current = Math.min(1, l.current + 0.55)));
                }, []);
            return (
                s.useEffect(() => {
                    if (!n) return;
                    let { clock: a } = e,
                        i = a.now(),
                        s = i,
                        u = 0,
                        h = !1,
                        c = 1,
                        f = a.run(function (a) {
                            let n = Math.min(0.05, (a - i) / 1e3);
                            i = a;
                            let f = r.current;
                            r.current = Math.max(0, f - f * n * 7 - 0.15 * n);
                            let d = 1 - 0.032 * r.current,
                                m = l.current;
                            l.current = Math.max(0, m - m * n * 9 - 0.3 * n);
                            let { renderState: g } = e;
                            for (let e of g.pulses)
                                e.bornAt <= s || e.bornAt > a || ((s = e.bornAt), (u = Math.max(u, e.shake)));
                            u = Math.max(0, u - u * n * 3.2 - 0.05 * n);
                            let { fx: p } = g,
                                w = p.tremor * (1 + (p.heatBoost - 1) * g.agitation),
                                v = l.current > 0 || u > 0 || w > 0 || c > 1.0001;
                            if (!v && !h) {
                                ((o.x = 0), (o.y = 0), (o.turn = 0), (o.zoom = d * c));
                                return;
                            }
                            h = v;
                            let x = l.current * l.current,
                                y = u * u,
                                b = 4 * x + 14 * y + 2.5 * w,
                                A = 0.35 * x + 1.1 * y + 0.2 * w,
                                S = b > 0 ? ak(b, 16) / b : 1,
                                R = A > 0 ? ak(A, 1.2) / A : 1,
                                k = a / 1e3,
                                T =
                                    4 * x * (0.6 * Math.sin(61 * k) + 0.4 * Math.sin(97 * k + 1.3)) +
                                    14 * y * (0.6 * Math.sin(23 * k + 0.9) + 0.4 * Math.sin(37 * k + 2.4)) +
                                    2.5 * w * (0.6 * Math.sin(13 * k + 0.3) + 0.4 * Math.sin(31 * k + 1.9)),
                                M =
                                    4 * x * (0.6 * Math.sin(73 * k + 2.1) + 0.4 * Math.sin(89 * k + 0.4)) +
                                    14 * y * (0.6 * Math.sin(29 * k + 1.7) + 0.4 * Math.sin(41 * k + 0.2)) +
                                    2.5 * w * (0.6 * Math.sin(17 * k + 2.6) + 0.4 * Math.sin(27 * k + 0.8)),
                                E =
                                    0.35 * x * Math.sin(53 * k + 0.7) +
                                    1.1 * y * Math.sin(19 * k + 1.1) +
                                    0.2 * w * Math.sin(11 * k + 2.2),
                                F = 0.04 * u,
                                P = t.current,
                                L = P?.parentElement,
                                C =
                                    null != P && null != L
                                        ? (function (e, t, a, i) {
                                              let n = t.offsetWidth,
                                                  r = t.offsetHeight;
                                              if (n <= 0 || r <= 0) return 1;
                                              let l = (Math.abs(i) * Math.PI) / 180,
                                                  o = Math.cos(l),
                                                  s = Math.sin(l),
                                                  u = e.clientWidth / 2 + a,
                                                  h = e.clientHeight / 2 + a;
                                              return Math.max(1, (u * o + h * s) / (n / 2), (u * s + h * o) / (r / 2));
                                          })(L, P, b * S, A * R) / Math.max(1, 1 + F)
                                        : 1;
                            ((c = C >= c ? C : Math.max(C, c - (c - C) * Math.min(1, 3 * n))),
                                (o.x = T * S),
                                (o.y = M * S),
                                (o.turn = (E * R * Math.PI) / 180),
                                (o.zoom = (d + F) * c));
                        });
                    return () => {
                        (f(), (o.x = 0), (o.y = 0), (o.turn = 0), (o.zoom = 1));
                    };
                }, [n, e, t, o]),
                s.useMemo(() => ({ kick: u, view: o }), [u, o])
            );
        })(T, P, f.shake),
        {
            voided: O,
            balance: G,
            rankIndex: D,
            nextRank: U,
            isMaxRank: B,
            rankFloor: N,
            milestone: X,
            ready: z,
            eligible: V,
            spend: H,
            dismissMilestone: Y,
        } = (function (e) {
            let { onTermsAccepted: t } = e,
                { ready: i, eligible: n } = (0, d.cf)([S.A], () => ({
                    ready: S.A.hasFetchedState(),
                    eligible: S.A.eligible,
                })),
                [{ voided: r, balance: l }, u] = (function () {
                    let [e, t] = s.useState(aE),
                        a = s.useRef(() => {});
                    return (
                        s.useEffect(() => {
                            let e = null,
                                i = null,
                                n = -1 / 0;
                            function r() {
                                (null != e && clearTimeout(e), (e = null));
                                let a = aE();
                                (null == i || a.voided !== i.voided || a.balance !== i.balance) &&
                                    (null != i && (n = performance.now()),
                                    (i = a),
                                    t((e) => (e.voided === a.voided && e.balance === a.balance ? e : a)));
                            }
                            function l() {
                                if (null != e) return;
                                let t = n + 100 - performance.now();
                                t <= 0 ? r() : (e = setTimeout(r, t));
                            }
                            return (
                                (a.current = r),
                                S.A.addReactChangeListener(l),
                                r(),
                                () => {
                                    (S.A.removeReactChangeListener(l),
                                        null != e && clearTimeout(e),
                                        (a.current = () => {}));
                                }
                            );
                        }, []),
                        [e, s.useCallback(() => a.current(), [])]
                    );
                })(),
                h = (0, d.bG)([es.Ay], () => (0, ec.XN)(es.Ay.getBadgeById(aT.$.ORB_VOID)?.tiers)),
                [c, f] = s.useState(null),
                m = (0, tt.A)(t),
                g = s.useRef(null);
            (s.useEffect(() => {
                i && h.length > 0 && null == g.current && (g.current = (0, ec.VL)(h, S.A.getDisplayedTotal() ?? 0));
            }, [i, h]),
                s.useEffect(() => {
                    let e = ed.A.isVisible();
                    function t() {
                        let t = ed.A.isVisible();
                        (e && !t && (0, A.c$)(), (e = t));
                    }
                    return (
                        ed.A.addChangeListener(t),
                        window.addEventListener("pagehide", A.c$),
                        () => {
                            (ed.A.removeChangeListener(t), window.removeEventListener("pagehide", A.c$));
                        }
                    );
                }, []));
            let p = s.useCallback(() => {
                    if (!S.A.hasConsented)
                        return (
                            !(function (e) {
                                let { onAccept: t } = e;
                                (0, aM.mM)(
                                    async () => {
                                        let { default: e } = await Promise.all([a.e(919202), a.e(994768)]).then(
                                            a.bind(a, 369875),
                                        );
                                        return (a) => (0, o.jsx)(e, { ...a, onAccept: t });
                                    },
                                    { modalKey: "orb-void-terms-modal", stackingBehavior: "stack" },
                                );
                            })({
                                onAccept: () => {
                                    ((0, A.A)(), m());
                                },
                            }),
                            !1
                        );
                    let e = (0, A.RQ)(1);
                    if (null == e) {
                        let e = (S.A.getDisplayedBalance() ?? 0) < 1;
                        return (
                            S.A.hasFetchedState() &&
                                S.A.eligible &&
                                e &&
                                (0, aM.mM)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            a.e(454048),
                                            a.e(210034),
                                            a.e(90648),
                                        ]).then(a.bind(a, 776779));
                                        return (t) => (0, o.jsx)(e, { ...t });
                                    },
                                    { modalKey: "orb-void-out-of-orbs-modal", stackingBehavior: "stack" },
                                ),
                            !1
                        );
                    }
                    let t = (0, ec.ol)(),
                        i = (0, ec.VL)(t, e);
                    if (null != g.current && i > g.current) {
                        g.current = i;
                        let a = t[i];
                        (u(),
                            (function () {
                                if (eP()) return;
                                let e = (0, eu.v)();
                                null != e && (eH(e), ek(e, () => eq(e, eW, eU, 0.11)));
                            })(),
                            f({
                                title: a.name,
                                note: aP.intl.formatToPlainString(aF.default.e0rggb, { count: a.threshold }),
                                icon: a.largeIcon ?? a.icon,
                                key: e,
                            }));
                    }
                    return !0;
                }, [m, u]),
                w = s.useCallback(() => f(null), []),
                v = (0, ec.VL)(h, r);
            return {
                voided: r,
                balance: l,
                rankIndex: v,
                nextRank: h[v + 1] ?? null,
                isMaxRank: h.length > 0 && v === h.length - 1,
                rankFloor: v >= 0 ? h[v].threshold : 0,
                milestone: c,
                ready: i,
                eligible: n,
                spend: p,
                dismissMilestone: w,
            };
        })({
            onTermsAccepted: s.useCallback(() => {
                let e = P.current?.getBoundingClientRect(),
                    t =
                        null == e
                            ? 0
                            : Math.atan2(
                                  window.innerHeight / 2 - (e.top + e.height * F["1"]),
                                  window.innerWidth / 2 - (e.left + e.width * F["0"]),
                              );
                (T.swallow(t, L(T.renderState, c.surge), T.clock.now()), _());
            }, [T, _, c]),
        }),
        $ = s.useMemo(() => {
            let e;
            return {
                ...c,
                rocks: {
                    ...c.rocks,
                    ...{ eggShare: 0.0075 + 0.003 * (e = Math.max(0, D + 1)), eggMaxLive: 2 + Math.floor(0.6 * e) },
                },
            };
        }, [c, D]),
        q = z && (null != U || B),
        K = s.useRef(null);
    s.useEffect(() => {
        let e = K.current;
        K.current = { rankIndex: D, known: q };
        let t = D < 0 ? null : I[Math.min(D, I.length - 1)];
        null != e && e.known && q && D > e.rankIndex ? T.earnTier(t, T.clock.now()) : T.setPalette(t);
    }, [T, D, q]);
    let Q = G <= 0,
        Z = z ? (V ? (Q ? aP.intl.string(aF.default.sVAKxG) : null) : aP.intl.string(aF.default["qf3+h9"])) : null,
        et = s.useCallback(() => {
            let e;
            return (
                !!H() &&
                (_(),
                (e = performance.now()) - eX < 35 ||
                    ((eX = e),
                    (function (e) {
                        if (eP()) return;
                        let t = (0, eu.v)();
                        null != t &&
                            (eH(t),
                            ek(t, () => {
                                (eq(t, eC, eO, 0.035 + (0.012 - 0.035) * e),
                                    eq(t, eY(eB), eG, 0.0156 + -0.0104 * e, { rate: e$(), endsIn: 0.32 }),
                                    eq(t, eY(eN), eD, 0.0078 + -0.0052 * e, { rate: e$(), startsIn: 0.32 }));
                            }));
                    })(Math.min(1, ez / 22)),
                    (ez += 1),
                    null != ej && clearTimeout(ej),
                    (ej = setTimeout(() => {
                        ez = 0;
                    }, 700))),
                !0)
            );
        }, [H, _]),
        ea = null != U ? U.threshold.toLocaleString() : null,
        er = (0, o.jsxs)("div", {
            className: aL.W0,
            children: [
                (0, o.jsx)(m.E, {
                    variant: "body-xs/medium",
                    color: "text-strong",
                    className: aL.UP,
                    children: aP.intl.string(aF.default.JxuATR),
                }),
                (0, o.jsxs)(m.E, {
                    variant: "display-md",
                    color: "text-strong",
                    className: aL.N4,
                    children: [
                        (0, o.jsx)(te, { value: O, forwardsOnly: !0 }),
                        (0, o.jsx)("img", {
                            className: aL.gB,
                            src: "https://cdn.discordapp.com/assets/content/a1c1ab55aa0de5eda78ca8107f50197f94c1a80fc8acb5990f459a4c0ddf4fe8.png",
                            alt: aP.intl.string(aP.t.ElYQFS),
                        }),
                    ],
                }),
            ],
        }),
        el = (0, o.jsxs)("div", {
            className: aL.__,
            children: [
                (0, o.jsx)(m.E, {
                    tag: "span",
                    variant: "heading-xs/medium",
                    color: "text-overlay-light",
                    children: aP.intl.string(aF.default["9QAJ8n"]),
                }),
                (0, o.jsx)(m.E, {
                    tag: "span",
                    variant: "heading-xs/semibold",
                    color: "text-overlay-light",
                    className: aL.Se,
                    children: G.toLocaleString(),
                }),
                (0, o.jsx)(g.OrbsIcon, { size: "sm", color: p.A.colors.ICON_OVERLAY_LIGHT, "aria-hidden": !0 }),
            ],
        }),
        ef =
            null != U &&
            (0, o.jsxs)("div", {
                className: aL.zg,
                children: [
                    (0, o.jsx)(m.E, {
                        tag: "span",
                        variant: "heading-xs/medium",
                        color: "text-default",
                        children: U.name,
                    }),
                    null != U.icon && (0, o.jsx)("img", { className: aL.Qe, src: U.icon, alt: "", "aria-hidden": !0 }),
                ],
            }),
        em = (0, o.jsxs)("div", {
            className: aL.oO,
            children: [
                (0, o.jsxs)("div", {
                    className: aL.P4,
                    children: [
                        B
                            ? (0, o.jsx)(m.E, {
                                  tag: "span",
                                  variant: "heading-xs/medium",
                                  color: "text-default",
                                  children: aP.intl.string(aF.default.rfBNN3),
                              })
                            : (0, o.jsxs)("div", {
                                  className: aL.vI,
                                  children: [
                                      (0, o.jsx)(m.E, {
                                          tag: "span",
                                          variant: "heading-xs/medium",
                                          color: "text-muted",
                                          children: aP.intl.string(aF.default["0VlVju"]),
                                      }),
                                      null != ea &&
                                          (0, o.jsx)(m.E, {
                                              tag: "span",
                                              variant: "heading-xs/semibold",
                                              color: "text-default",
                                              className: aL.Se,
                                              children: ea,
                                          }),
                                  ],
                              }),
                        ef,
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: aL.m9,
                    children: [
                        (0, o.jsx)(w.z, {
                            value: null != U || B ? O : N,
                            minValue: N,
                            maxValue: U?.threshold ?? Math.max(O, 1),
                            size: "lg",
                            "aria-label": aP.intl.string(aF.default["+5QXTB"]),
                            className: aL.hr,
                        }),
                        null != X && (0, o.jsx)("div", { className: aL.wd, "aria-hidden": !0 }, X.key),
                    ],
                }),
            ],
        });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            null != n && (0, o.jsx)(eo, { director: T, host: n }),
            null != n && R && (0, o.jsx)(aA, { director: T, voidRef: P, host: n }),
            (0, o.jsxs)("div", {
                ref: C,
                className: aL.dw,
                children: [
                    (0, o.jsx)("div", {
                        ref: P,
                        className: aL.Qw,
                        children: (0, o.jsx)(av, {
                            director: T,
                            tuning: $,
                            quality: f,
                            echoes: R,
                            still: "still" === l,
                            view: W,
                            onDegrade: h,
                            onToss: et,
                            label: Z ?? aP.intl.string(aF.default.CrvXky),
                            ringTarget: C,
                        }),
                    }),
                    (0, o.jsxs)("div", {
                        className: aL.wx,
                        children: [
                            (0, o.jsx)(m.E, {
                                variant: "display-md",
                                color: "text-strong",
                                className: aL.DD,
                                children: aP.intl.string(aF.default.hUfeUJ),
                            }),
                            el,
                        ],
                    }),
                    (0, o.jsxs)("div", {
                        className: aL.ne,
                        children: [
                            (0, o.jsx)(y.A, {
                                className: aL.pD,
                                iconClassName: aL.Wh,
                                iconColor: "currentColor",
                                sliderWrapperClassName: aL.MQ,
                                sliderClassName: aL.Oe,
                                value: M,
                                maxValue: 200,
                                muted: E,
                                currentWindow: window,
                                onValueChange: A.DE,
                                onToggleMute: A.wC,
                            }),
                            (0, o.jsx)(v.J, { onClick: i, size: "sm", autoFocus: !0 }),
                        ],
                    }),
                    null != X && (0, o.jsx)(ti, { title: X.title, note: X.note, icon: X.icon, onDone: Y }, X.key),
                    null != Z &&
                        (0, o.jsx)(m.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            className: aL.oj,
                            children: Z,
                        }),
                ],
            }),
            (0, o.jsxs)("div", {
                className: aL.qr,
                children: [er, (0, o.jsx)("div", { className: aL.FK, children: em })],
            }),
        ],
    });
}
var aI = a(652215);
function a_(e) {
    let { transitionState: t, onClose: a } = e,
        [i, n] = s.useState(null);
    return (0, o.jsx)(f.N, {
        theme: aI.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, o.jsxs)(c.EO, {
                "data-migration-pending": !0,
                parentComponent: "VoidModal",
                "aria-label": aP.intl.string(aF.default.hUfeUJ),
                transitionState: t,
                size: c.rI.DYNAMIC,
                hideShadow: !0,
                className: h()(e, aL.CR),
                children: [
                    (0, o.jsx)("div", { ref: n, className: aL.Zc, "aria-hidden": !0 }),
                    (0, o.jsx)(c.$m, {
                        "data-migration-pending": !0,
                        scrollbarType: "none",
                        className: aL.jE,
                        children: (0, o.jsx)(aC, { onClose: a, overflowHost: i }),
                    }),
                ],
            }),
    });
}
