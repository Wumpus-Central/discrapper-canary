let i, n, r;
a.d(t, { default: () => af });
var o,
    l = a(477900),
    s = a(582128),
    u = a(503698),
    h = a.n(u),
    f = a(935462),
    c = a(43990),
    d = a(855986),
    m = a(834730),
    g = a(318254),
    p = a(646514),
    w = a(911608),
    v = a(815021),
    y = a(775602),
    b = a(218394);
function x(e) {
    return Math.max(0, Math.min(1, e));
}
function A(e, t, a) {
    var i, n, r;
    return [((i = e[0]), i + (t[0] - i) * a), ((n = e[1]), n + (t[1] - n) * a), ((r = e[2]), r + (t[2] - r) * a)];
}
function S(e, t, a) {
    let i = x((a - e) / (t - e));
    return i * i * (3 - 2 * i);
}
function R(e, t, a) {
    return null == t ? e : e * (1 + (t - 1) * a);
}
function k(e, t) {
    let a = x(t),
        i = e.agitation;
    return {
        ...e,
        radius: R(e.radius, i.radius, a),
        glowIntensity: R(e.glowIntensity, i.glowIntensity, a),
        glowWidth: R(e.glowWidth, i.glowWidth, a),
        noiseSpeed: R(e.noiseSpeed, i.noiseSpeed, a),
        glowTint: A(e.glowTint, i.glowTint, a),
    };
}
let T = [0.5, 0.5],
    M = { coreRadius: 0.25, glowIntensity: 1.8, layerIntensity: 0.6 };
function E(e) {
    let { look: t, agitation: a, surge: i } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
    return k(t.core, a).radius * (1 + n.coreRadius * Math.max(0, i));
}
a(321073);
class F {
    behind = 0;
    heldAt = null;
    resumedAt = -1 / 0;
    listeners = new Set();
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
        let t = 0,
            a = (i) => {
                ((t = requestAnimationFrame(a)), e(this.now(i)));
            },
            i = this.watch((e) => {
                (cancelAnimationFrame(t), e || (t = requestAnimationFrame(a)));
            });
        return (
            this.paused || (t = requestAnimationFrame(a)),
            () => {
                (i(), cancelAnimationFrame(t));
            }
        );
    }
}
let P = {
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
function L(e, t, a) {
    var i;
    return null == e && null == t ? void 0 : (i = e ?? 1) + ((t ?? 1) - i) * a;
}
let C = Object.keys(P).filter((e) => "number" == typeof P[e]);
function I(e, t) {
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
function _(e, t) {
    return {
        layers: e.layers.map((e) => {
            let a = t.layers?.[e.name];
            return null == a ? e : { ...e, ...a, agitation: { ...e.agitation, ...a.agitation } };
        }),
        core: { ...e.core, ...t.core, agitation: { ...e.core.agitation, ...t.core?.agitation } },
        grade: t.grade ?? e.grade,
    };
}
function W(e, t) {
    return null == e ? void 0 : 1 + (e - 1) * t;
}
function O(e, t) {
    let a = e.core.agitation;
    return {
        ...e,
        layers: e.layers.map((e) => ({
            ...e,
            agitation: { ...e.agitation, intensity: W(e.agitation.intensity, t), glow: W(e.agitation.glow, t) },
        })),
        core: {
            ...e.core,
            agitation: {
                ...a,
                radius: W(a.radius, t),
                glowIntensity: W(a.glowIntensity, t),
                glowWidth: W(a.glowWidth, t),
            },
        },
    };
}
let G = {
    phases:
        ((i = _(
            (o = {
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
        (n = _(I(o, { coreRadius: 1.25, glow: 1.5, intensity: 1.25, speed: 1.6, spin: 1.5, flow: 1.3 }), {
            layers: {
                Haze: { tint: [0.22, 0.04, 0.95], agitation: { tint: [0.55, 0.05, 0.8] } },
                Streaks: { tint: [0.55, 0.3, 1], agitation: { tint: [0.85, 0.4, 1] } },
                Swirl: { tint: [0.8, 0.3, 1], agitation: { tint: [1, 0.3, 0.6] } },
                "Swirl echo": { opacity: 0.75, tint: [0, 0.9, 0.96], agitation: { tint: [0.5, 1, 1] } },
            },
            core: { glowTint: [0.8, 0.3, 1], agitation: { glowTint: [1, 0.3, 0.6] } },
        })),
        (r = _(I(o, { coreRadius: 1.4, glow: 1.9, intensity: 1.4, speed: 2, spin: 1.9, flow: 1.5 }), {
            layers: {
                Haze: { tint: [0.4, 0.04, 0.85], agitation: { tint: [0.7, 0.1, 0.6], scale: 1.2 } },
                Streaks: { tint: [0.75, 0.45, 1], agitation: { tint: [1, 0.6, 0.9], scale: 1.15 } },
                Swirl: { tint: [1, 0.4, 0.75], whiteout: 0.5, agitation: { tint: [1, 0.75, 0.6] } },
                "Swirl echo": { opacity: 1, tint: [0.55, 0.35, 1], whiteout: 0.4, agitation: { tint: [0.9, 0.6, 1] } },
            },
            core: { glowTint: [1, 0.8, 0.65], glowWhiteout: 0.7, agitation: { glowTint: [1, 0.95, 0.9] } },
            grade: { ...o.grade, saturation: 1.15 },
        })),
        [
            {
                name: "Stirring",
                threshold: 0,
                look: o,
                fx: { ...P, heatBoost: 1.5 },
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
                look: O(i, 0.7),
                fx: {
                    ...P,
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
                look: O(n, 0.5),
                fx: {
                    ...P,
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
                look: O(r, 0.4),
                fx: {
                    ...P,
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
function U(e, t) {
    let a = 0;
    for (let i = 0; i < e.length; i++) t >= e[i].threshold && (a = i);
    return a;
}
let D = {
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
    N = {
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
    B = { push: 0.06, width: 0.05, length: 0.3, glow: 0.3 },
    X = { ...B, push: 0, glow: 0 };
function j(e, t) {
    (e.pulses.push(t), e.pulses.length > 6 && e.pulses.splice(0, e.pulses.length - 6));
}
function z(e, t) {
    (e.impacts.push(t), e.impacts.length > 8 && e.impacts.splice(0, e.impacts.length - 8));
}
let H = {
    heatPerOrb: 0.05,
    coolSeconds: 2.5,
    graceSeconds: 0.15,
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
    pulseLife: D.life,
};
class Y {
    renderState;
    clock = new F();
    arc;
    tuning;
    fed = 0;
    phaseIndex;
    heat = 0;
    lastTossAt = -1 / 0;
    lastStepAt = null;
    transition = null;
    opening = { startsAt: null, ringsSent: 0 };
    restFx;
    overdrive = 0;
    flash = null;
    listeners = new Set();
    constructor(e, t = H) {
        ((this.arc = e), (this.tuning = t), (this.phaseIndex = U(e.phases, this.fed)));
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
            (this.restFx = { ...a.fx }));
    }
    setTuning(e) {
        this.tuning = e;
    }
    tossOrb(e) {
        ((this.heat = Math.min(1, this.heat + this.tuning.heatPerOrb)), (this.lastTossAt = e));
    }
    consume(e, t, a) {
        ((this.fed += 1), z(this.renderState, { angle: e, radius: t, bornAt: a }));
        let { phases: i, overdrive: n } = this.arc,
            r = this.fed - i[i.length - 1].threshold,
            o = null == this.transition,
            l = this.phaseIndex === i.length - 1,
            s = n.ringEvery > 0,
            u = r % n.ringEvery == 0;
        o &&
            l &&
            s &&
            r > 0 &&
            u &&
            j(this.renderState, { bornAt: a, gain: n.ringGain, shake: this.tuning.milestoneShake });
    }
    swallow(e, t, a) {
        (z(this.renderState, { angle: e, radius: t, bornAt: a }),
            j(this.renderState, { bornAt: a, gain: 1.2, shake: 0.5 }));
    }
    step(e) {
        var t, a, i, n, r, o, l;
        let s,
            u = null == this.lastStepAt ? 0 : Math.min(0.1, (e - this.lastStepAt) / 1e3);
        this.lastStepAt = e;
        let { tuning: h, renderState: f, arc: c } = this,
            { phases: d } = c;
        ((e - this.lastTossAt) / 1e3 > h.graceSeconds &&
            (this.heat = Math.max(0, this.heat - u / Math.max(0.1, h.coolSeconds))),
            (f.agitation = this.heat),
            (f.motion = h.motion));
        let m = U(d, this.fed);
        if (null == this.transition && m !== this.phaseIndex) {
            ((this.transition = { from: f.look, fromFx: { ...this.restFx }, toIndex: m, startedAt: e, ringsSent: 0 }),
                (this.opening = null));
            let { inhaleSeconds: t } = d[m].intro;
            this.listeners.forEach((e) => e(t));
        }
        let g = 0,
            p = 0,
            w = 0;
        f.flash = 0;
        let v = this.transition;
        if (null == v)
            ((f.look = d[this.phaseIndex].look), Object.assign(this.restFx, d[this.phaseIndex].fx), (f.surge = 0));
        else {
            let t = d[v.toIndex],
                a = t.intro,
                i = a.inhaleSeconds,
                n = (e - v.startedAt) / 1e3;
            if (n < i)
                ((f.look = v.from),
                    Object.assign(this.restFx, v.fromFx),
                    (w = S(0, 1, n / Math.max(0.01, i))),
                    (f.surge = 0));
            else {
                let r = n - i;
                v.ringsSent = this.sendRings(a, v.ringsSent, r, e);
                let o = Math.min(1, r / Math.max(0.01, h.riseBlendSeconds)),
                    l = 1 - (1 - o) ** 3 + (S(0, 1, o) - (1 - (1 - o) ** 3)) * h.riseBlendEaseIn;
                ((f.look = (function (e, t, a) {
                    var i, n, r, o, l, s, u, h, f, c, d, m, g, p, w;
                    return a <= 0
                        ? e
                        : a >= 1
                          ? t
                          : {
                                layers: t.layers.map((t, i) => {
                                    var n, r, o, l, s, u, h, f, c, d, m, g, p, w, v, y, b, x, S, R, k, T, M, E, F;
                                    return (
                                        (n = e.layers[i]),
                                        {
                                            ...t,
                                            agitation:
                                                ((r = n.agitation),
                                                (o = t.agitation),
                                                {
                                                    opacity: L(r.opacity, o.opacity, a),
                                                    waveSpeed: L(r.waveSpeed, o.waveSpeed, a),
                                                    flowAmount: L(r.flowAmount, o.flowAmount, a),
                                                    spin: L(r.spin, o.spin, a),
                                                    maskOuter: L(r.maskOuter, o.maskOuter, a),
                                                    scale: L(r.scale, o.scale, a),
                                                    intensity: L(r.intensity, o.intensity, a),
                                                    glow: L(r.glow, o.glow, a),
                                                    tint: A(r.tint, o.tint, a),
                                                }),
                                            tint: A(n.tint, t.tint, a),
                                            opacity: ((l = n.opacity), l + (t.opacity - l) * a),
                                            intensity: ((s = n.intensity), s + (t.intensity - s) * a),
                                            blackPoint: ((u = n.blackPoint), u + (t.blackPoint - u) * a),
                                            gamma: ((h = n.gamma), h + (t.gamma - h) * a),
                                            glow: ((f = n.glow), f + (t.glow - f) * a),
                                            glowTail: ((c = n.glowTail), c + (t.glowTail - c) * a),
                                            glowReach: ((d = n.glowReach), d + (t.glowReach - d) * a),
                                            ...(null == n.glowTint && null == t.glowTint
                                                ? { glowTint: void 0, glowTintFollow: void 0 }
                                                : {
                                                      glowTint: A(n.glowTint ?? n.tint, t.glowTint ?? t.tint, a),
                                                      glowTintFollow:
                                                          ((m = +(null == n.glowTint)),
                                                          m + ((null == t.glowTint) - m) * a),
                                                  }),
                                            ...(null == n.glowMaskOuter && null == t.glowMaskOuter
                                                ? { glowMaskOuter: void 0, glowMaskFollow: void 0 }
                                                : {
                                                      glowMaskOuter:
                                                          ((g = n.glowMaskOuter ?? n.maskOuter),
                                                          g + ((t.glowMaskOuter ?? t.maskOuter) - g) * a),
                                                      glowMaskFollow:
                                                          ((p = +(null == n.glowMaskOuter)),
                                                          p + ((null == t.glowMaskOuter) - p) * a),
                                                  }),
                                            whiteout: ((w = n.whiteout), w + (t.whiteout - w) * a),
                                            scale: ((v = n.scale), v + (t.scale - v) * a),
                                            rotation: ((y = n.rotation), y + (t.rotation - y) * a),
                                            spin: ((b = n.spin), b + (t.spin - b) * a),
                                            maskInner: ((x = n.maskInner), x + (t.maskInner - x) * a),
                                            maskOuter: ((S = n.maskOuter), S + (t.maskOuter - S) * a),
                                            waveSpeed: ((R = n.waveSpeed), R + (t.waveSpeed - R) * a),
                                            flowAmount: ((k = n.flowAmount), k + (t.flowAmount - k) * a),
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
                                            (o = n.agitation),
                                            {
                                                radius: L(r.radius, o.radius, a),
                                                glowIntensity: L(r.glowIntensity, o.glowIntensity, a),
                                                glowWidth: L(r.glowWidth, o.glowWidth, a),
                                                noiseSpeed: L(r.noiseSpeed, o.noiseSpeed, a),
                                                glowTint: A(r.glowTint, o.glowTint, a),
                                            }),
                                        radius: ((l = i.radius), l + (n.radius - l) * a),
                                        softness: ((s = i.softness), s + (n.softness - s) * a),
                                        noiseAmount: ((u = i.noiseAmount), u + (n.noiseAmount - u) * a),
                                        noiseScale: ((h = i.noiseScale), h + (n.noiseScale - h) * a),
                                        noiseSpeed: ((f = i.noiseSpeed), f + (n.noiseSpeed - f) * a),
                                        glowTint: A(i.glowTint, n.glowTint, a),
                                        glowIntensity: ((c = i.glowIntensity), c + (n.glowIntensity - c) * a),
                                        glowOffset: ((d = i.glowOffset), d + (n.glowOffset - d) * a),
                                        glowWidth: ((m = i.glowWidth), m + (n.glowWidth - m) * a),
                                        glowTail: ((g = i.glowTail), g + (n.glowTail - g) * a),
                                        glowWhiteout: ((p = i.glowWhiteout), p + (n.glowWhiteout - p) * a),
                                    }),
                                grade: { saturation: ((w = e.grade.saturation), w + (t.grade.saturation - w) * a) },
                            };
                })(v.from, t.look, l)),
                    (function (e, t, a, i) {
                        for (let r of C) {
                            var n;
                            i[r] = ((n = e[r]), n + (t[r] - n) * a);
                        }
                        i.flareTint = A(e.flareTint, t.flareTint, a);
                        let r = S(0, 1, 2 * Math.abs(a - 0.5));
                        ((i.chromaSamples = a < 0.5 ? e.chromaSamples : t.chromaSamples),
                            e.chromaSamples !== t.chromaSamples && ((i.chroma *= r), (i.chromaWave *= r)),
                            (i.waveSpiral = a < 0.5 ? e.waveSpiral : t.waveSpiral),
                            e.waveSpiral !== t.waveSpiral && ((i.wave *= r), (i.waveLift *= r), (i.chromaWave *= r)));
                    })(v.fromFx, t.fx, l, this.restFx));
                let s =
                    (h.burstAttackSeconds > 0 ? S(0, 1, r / h.burstAttackSeconds) : 1) *
                    Math.exp(-r / Math.max(0.01, h.burstSeconds));
                ((f.surge = s), h.inhaleReleaseSeconds > 0 && (w = Math.exp(-r / h.inhaleReleaseSeconds)));
                let u = v.startedAt + 1e3 * i;
                (this.flash?.startedAt !== u && (this.flash = { startedAt: u, amount: a.flash }),
                    (g = a.chromaSpike * h.spikeScale * s),
                    (p = a.flareSpike * h.spikeScale * s));
                let c = v.ringsSent >= this.ringsFor(a),
                    d = w < 0.02;
                l >= 1 &&
                    r > h.burstAttackSeconds &&
                    s < 0.02 &&
                    d &&
                    c &&
                    ((this.phaseIndex = v.toIndex),
                    (this.transition = null),
                    (f.look = t.look),
                    Object.assign(this.restFx, t.fx),
                    (f.surge = 0));
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
            t < 1e-4 && e - this.flash.startedAt > 1e3 * h.flashAttackSeconds ? (this.flash = null) : (f.flash = t);
        }
        let b =
            null == this.transition && this.phaseIndex === d.length - 1
                ? (s = this.fed - c.phases[c.phases.length - 1].threshold) <= 0
                    ? 0
                    : 1 - Math.exp(-s / Math.max(1, c.overdrive.span))
                : 0;
        if (
            ((this.overdrive += (b - this.overdrive) * Math.min(1, u / Math.max(0.01, h.overdriveSmoothing))),
            this.overdrive > 0.001)
        ) {
            let e, s, u, h, d;
            ((t = f.look),
                (a = c.overdrive),
                (i = this.overdrive),
                (e = 1 + (a.speed - 1) * i),
                (s = 1 + (a.spin - 1) * i),
                (u = 1 + (a.glow - 1) * i),
                (h = 1 + (a.heatScale - 1) * i),
                (f.look = {
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
                (r = c.overdrive),
                (o = this.overdrive),
                Object.assign((l = f.fx), n),
                (l.chroma = n.chroma * (1 + (r.chroma - 1) * o)),
                (l.flare = n.flare * (1 + (r.flare - 1) * o)),
                (d = 1 + (r.wave - 1) * o),
                (l.wave = n.wave * d),
                (l.waveLift = n.waveLift * d),
                (l.chromaWave = n.chromaWave * (1 + (r.chroma - 1) * o)),
                (l.waveSpeed = n.waveSpeed * (1 + (r.speed - 1) * o)));
        } else Object.assign(f.fx, this.restFx);
        ((f.fx.chroma += g),
            (f.fx.flare = f.fx.flare * (1 - w) + p),
            (f.fx.vignette = Math.min(1, f.fx.vignette + 0.3 * w)));
        let x = 1e3 * h.impactLife,
            R = f.impacts;
        for (; R.length > 0 && e - R[0].bornAt > x;) R.shift();
        let k = 1e3 * h.pulseLife,
            T = f.pulses;
        for (; T.length > 0 && e - T[0].bornAt > k;) T.shift();
        return f;
    }
    subscribeLevelUp(e) {
        return (
            this.listeners.add(e),
            () => {
                this.listeners.delete(e);
            }
        );
    }
    sendRings(e, t, a, i) {
        let n = t,
            r = this.ringsFor(e);
        for (; n < r && a >= n * e.ringSpacing;) {
            let t = e.ringFalloff ** n;
            (j(this.renderState, { bornAt: i, gain: e.ringGain * t, shake: Math.min(1, e.shake * t) }), n++);
        }
        return n;
    }
    flashAt(e) {
        let { flashScale: t, flashAttackSeconds: a, flashSeconds: i } = this.tuning;
        return t * (a > 0 ? S(0, 1, e / a) : 1) * Math.exp(-e / Math.max(0.01, i));
    }
    ringsFor(e) {
        let t = this.tuning.maxRings;
        return t > 0 ? Math.min(e.rings, t) : e.rings;
    }
}
let $ = {
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
    },
    V = { ...$, orbitSpeed: 0, inwardSpeed: 0, tumble: 0, impactKick: 0, wakePush: 0, pulseKick: 0 },
    q = { motesPerOrb: 6, pulse: D, wake: B, surge: M, rocks: $, director: { ...H, pulseLife: Math.max(D.life, 1.2) } },
    K = {
        motesPerOrb: 0,
        pulse: N,
        wake: X,
        surge: { coreRadius: 0.1, glowIntensity: 0.9, layerIntensity: 0.3 },
        rocks: V,
        director: {
            ...H,
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
            pulseLife: Math.max(N.life, 1.2),
        },
    };
var Q = a(602674),
    J = a(988468),
    Z = a(158390),
    ee = a(531685);
let et = new Map(),
    ea = new Map(),
    ei = new Map(),
    en = 0,
    er = null,
    eo = 0;
function el() {
    ((er = null), (eo += 1), et.clear(), ea.clear(), ei.clear());
}
function es(e, t) {
    let a = et.get(t);
    if (null != a) return Promise.resolve(a);
    let i = ea.get(t);
    if (null == i) {
        let a = ei.get(t);
        if (null != a && performance.now() < a.retryAt) return Promise.reject(a.error);
        ((i = (async function (e, t) {
            let a = eo;
            try {
                let i = await fetch(t);
                if (!i.ok) throw Error(`Void sound fetch failed with ${i.status}`);
                let n = await e.decodeAudioData(await i.arrayBuffer());
                return (a === eo && (et.set(t, n), ei.delete(t)), n);
            } catch (r) {
                var i, n;
                let e;
                throw (
                    a === eo &&
                        ((i = t),
                        (n = r),
                        (e = ei.get(i)?.backoff ?? new Z.A(1e3, 6e4)),
                        ei.set(i, {
                            backoff: e,
                            retryAt: performance.now() + e.fail(),
                            error: n instanceof Error ? n : Error(String(n)),
                        })),
                    r
                );
            } finally {
                a === eo && ea.delete(t);
            }
        })(e, t)),
            ea.set(t, i));
    }
    return i;
}
async function eu(e, t) {
    try {
        await es(e, t);
    } catch {}
}
async function eh(e) {
    if ("running" !== e.state && "closed" !== e.state)
        try {
            await e.resume();
        } catch {}
}
function ef(e) {
    return "running" === e.state && ee.A.isVisible();
}
async function ec(e, t) {
    if (ef(e)) return void t();
    if (!ee.A.isVisible()) return;
    let a = performance.now();
    (await eh(e), performance.now() - a <= 100 && ef(e) && t());
}
var ed = a(803224),
    em = a(351906);
let eg = [em.A, ed.A];
function ep() {
    return em.A.disableSounds || ed.A.getDisableAllSounds();
}
let ew =
        "https://cdn.discordapp.com/assets/content/7dc3297fee2fdfa4133f6d7f6bcd5e7aa04a74b494669580d3ecae9c5680ab9f.mp3",
    ev = [
        "https://cdn.discordapp.com/assets/content/9aa2152d00fccd7f6291ee5f0bc6d112388d200d860fa1437a992843f9f2a441.mp3",
        "https://cdn.discordapp.com/assets/content/026ade3d488417a6c05b705f1b20ad25ab8fd881c6834faf0f01eed851b2342f.mp3",
    ],
    ey = [
        "https://cdn.discordapp.com/assets/content/1569dc17cc57cdfa7cfef62d6927d6e57716668dcc01c5a34ec60020cc922b80.mp3",
        "https://cdn.discordapp.com/assets/content/f54ea3b51aa4f3743dc25f21d1c037be1e450f5decc2dac1709801fe0d7ce332.mp3",
    ],
    eb =
        "https://cdn.discordapp.com/assets/content/175b8dfc759db0a348f8271a91981f2f2d8947d59e5d3af93c0c7d035cfbbdff.mp3",
    ex = { active: 0, max: 10 },
    eA = { active: 0, max: 6 },
    eS = { active: 0, max: 6 },
    eR = { active: 0, max: 2 },
    ek = { urls: ev, lastIndex: -1, consecutivePlays: 0 },
    eT = { urls: ey, lastIndex: -1, consecutivePlays: 0 },
    eM = 0,
    eE = 0,
    eF = null;
function eP() {
    ((eM = 0), (eE = 0), null != eF && clearTimeout(eF), (eF = null));
}
function eL(e) {
    for (let t of [ew, ...ev, ...ey, eb]) eu(e, t);
}
function eC(e) {
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
function eI() {
    return 1 + (2 * Math.random() - 1) * 0.1;
}
function e_(e, t, a, i) {
    let {
            rate: n = 1,
            startsIn: r = 0,
            endsIn: o,
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        l = et.get(t);
    if (null == l || a.active >= a.max || !ef(e)) return;
    let s = 2 * i * (J.Ay.getOutputVolume() / 100),
        u = e.createGain();
    ((u.gain.value = s), u.connect(e.destination));
    let h = e.createBufferSource();
    ((h.buffer = l),
        (h.playbackRate.value = n),
        h.connect(u),
        (a.active += 1),
        (h.onended = () => {
            ((a.active -= 1), h.disconnect(), u.disconnect());
        }));
    let f = e.currentTime,
        c = null == o ? r : o - l.duration / n;
    c >= 0
        ? h.start(f + c)
        : (u.gain.setValueAtTime(0, f), u.gain.linearRampToValueAtTime(s, f + 0.02), h.start(f, -c * n));
}
let eW =
        "https://cdn.discordapp.com/assets/content/380f46df8cf6698285b496284553910748c0f8e1e40536990388e29342f64919.mp3",
    eO = { active: 0, max: 1 / 0 };
async function eG(e, t, a, i, n) {
    try {
        let r = await es(e, t);
        if (i()) return null;
        let o = e.createBufferSource();
        return (
            (o.buffer = r),
            (o.loop = !0),
            (o.loopStart = 0.5),
            (o.loopEnd = 15.5),
            o.connect(a),
            o.start(0, 0.5),
            n?.(),
            o
        );
    } catch {
        return null;
    }
}
var eU = a(411259);
let eD = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    eN = eD.length - 1,
    eB = [...eD.slice(0, 10), ...eD.slice(0, 10)];
function eX(e) {
    let { digit: t } = e,
        [a, i] = s.useState(t),
        [n, r] = s.useState(!1);
    s.useEffect(() => {
        let e = 0,
            a = requestAnimationFrame(() => {
                i((a) => {
                    let n = a % 10;
                    return n === t
                        ? a
                        : t > n
                          ? (r(!1), a - n + t)
                          : a < 10
                            ? (r(!1), t + 10)
                            : (r(!0),
                              (e = requestAnimationFrame(() => {
                                  (r(!1), i(t + 10));
                              })),
                              n);
                });
            });
        return () => {
            (cancelAnimationFrame(a), cancelAnimationFrame(e));
        };
    }, [t]);
    let o = s.useCallback(() => {
        a < 10 || (r(!0), i(a - 10));
    }, [a]);
    return (
        s.useEffect(() => {
            if (!n) return;
            let e = requestAnimationFrame(() => r(!1));
            return () => cancelAnimationFrame(e);
        }, [n]),
        (0, l.jsx)("span", {
            className: eU.x,
            "aria-hidden": !0,
            children: (0, l.jsx)("span", {
                className: h()(eU.bB, n && eU.uR),
                style: { "--custom-rolling-cell": a },
                onTransitionEnd: o,
                children: eB.map((e, t) => (0, l.jsx)("span", { className: eU.U2, children: e }, t)),
            }),
        })
    );
}
function ej(e) {
    let { digit: t } = e,
        [a, i] = s.useState(t),
        [n, r] = s.useState(!1),
        o = s.useRef(t);
    s.useEffect(() => {
        let e = o.current;
        if (e === t) return;
        o.current = t;
        let a = 0,
            n = requestAnimationFrame(() => {
                9 === e && 0 === t
                    ? (r(!1), i(eN))
                    : 0 === e && 9 === t
                      ? (r(!0),
                        i(eN),
                        (a = requestAnimationFrame(() => {
                            (r(!1), i(9));
                        })))
                      : (r(!1), i(t));
            });
        return () => {
            (cancelAnimationFrame(n), cancelAnimationFrame(a));
        };
    }, [t]);
    let u = s.useCallback(() => {
        a === eN && (r(!0), i(0));
    }, [a]);
    return (
        s.useEffect(() => {
            if (!n) return;
            let e = requestAnimationFrame(() => r(!1));
            return () => cancelAnimationFrame(e);
        }, [n]),
        (0, l.jsx)("span", {
            className: eU.x,
            "aria-hidden": !0,
            children: (0, l.jsx)("span", {
                className: h()(eU.bB, n && eU.uR),
                style: { "--custom-rolling-cell": a },
                onTransitionEnd: u,
                children: eD.map((e, t) => (0, l.jsx)("span", { className: eU.U2, children: e }, t)),
            }),
        })
    );
}
let ez = /^[0-9]$/;
function eH(e) {
    let { value: t, forwardsOnly: a = !1 } = e,
        i = a ? eX : ej,
        n = t.toLocaleString(),
        r = n.split(""),
        o = r.filter((e) => ez.test(e)).length;
    return (0, l.jsxs)("span", {
        className: eU.PB,
        children: [
            (0, l.jsx)("span", { className: eU.HD, children: n }),
            r.map((e, t) => {
                if (!ez.test(e)) return (0, l.jsx)("span", { "aria-hidden": !0, children: e }, `separator-${t}`);
                let a = o--;
                return (0, l.jsx)(i, { digit: Number(e) }, a);
            }),
        ],
    });
}
var eY = a(765548),
    e$ = a(31978);
function eV(e) {
    let { title: t, note: a, icon: i, onDone: n } = e,
        [r, o] = s.useState(!1),
        u = (0, eY.A)(n);
    return (
        s.useEffect(() => {
            let e = setTimeout(() => o(!0), 3e3),
                t = setTimeout(() => u(), 3520);
            return () => {
                (clearTimeout(e), clearTimeout(t));
            };
        }, [u]),
        (0, l.jsxs)("div", {
            className: h()(e$.oR, r ? e$.KS : e$.bY),
            role: "status",
            children: [
                null != i && (0, l.jsx)("img", { className: e$.Kk, src: i, alt: "", "aria-hidden": !0 }),
                (0, l.jsxs)("div", {
                    className: e$.Qs,
                    children: [
                        (0, l.jsx)(m.E, {
                            tag: "span",
                            variant: "heading-xs/semibold",
                            color: "text-default",
                            children: t,
                        }),
                        (0, l.jsx)(m.E, { variant: "body-xs/medium", color: "text-subtle", children: a }),
                    ],
                }),
            ],
        })
    );
}
var eq = a(559106),
    eK = a(66455);
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
let eQ = [0, 0.06, 0.14, 0.3],
    eJ = 0.9880701754385965;
function eZ(e, t) {
    return 0.4 + e + eJ * (1 - t) * (1 - t);
}
function e0(e, t) {
    return Math.hypot(e, 2 * eQ[t]);
}
let e1 = eZ(0, 1),
    e2 = Math.log(e0(eZ(1, 0), eQ.length - 1) / e1) / 47;
function e3(e) {
    return e1 * Math.exp(e * e2);
}
function e5(e) {
    return 1 / (0.9 * (1 - Math.exp(-0.5 / (e * e))));
}
let e6 = Array.from({ length: 48 }, (e, t) => 1 + 3 * e3(t)),
    e4 = Array.from({ length: 48 }, (e, t) => e5(e3(t)));
function e8(e, t, a, i) {
    let n = Math.max(0, Math.min(47, Math.round(Math.log(i / e1) / e2))),
        r = a * e6[n],
        o = e.globalAlpha,
        l = e.imageSmoothingQuality;
    ((e.globalAlpha = o / e4[n]),
        (e.imageSmoothingQuality = "medium"),
        e.drawImage(t, (n % 8) * 64, 64 * Math.floor(n / 8), 64, 64, -r / 2, -r / 2, r, r),
        (e.imageSmoothingQuality = l),
        (e.globalAlpha = o));
}
function e9(e, t, a) {
    let i = 43758.5453 * Math.sin(12.9898 * e + 78.233 * t + 37.719 * a);
    return i - Math.floor(i);
}
let e7 = (function () {
    let e = [0.1 * e9(6, 0, 9) - 0.05, 0.1 * e9(6, 1, 9) - 0.05],
        t = [];
    for (let e = 0; e < 6; e++) {
        let a = ((e + (e9(6, e, 8) - 0.5) * 0.7) / 6) * Math.PI * 2;
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
function te(e, t, a, i) {
    let n = e.globalAlpha,
        r = e.globalCompositeOperation;
    ((e.globalCompositeOperation = "lighter"),
        (e.globalAlpha = n * i),
        e.drawImage(t, -a / 2, -a / 2, a, a),
        (e.globalCompositeOperation = r),
        (e.globalAlpha = n));
}
let tt = Math.PI / 4;
function ta(e) {
    let t = document.createElement("canvas");
    ((t.width = 32), (t.height = 32));
    let a = t.getContext("2d");
    if (null == a) return t;
    let [i, n, r] = e.map((e) => Math.round(255 * x(e))),
        o = a.createRadialGradient(16, 16, 0, 16, 16, 16);
    return (
        o.addColorStop(0, "rgba(255, 255, 255, 1)"),
        o.addColorStop(0.25, `rgba(${i}, ${n}, ${r}, 0.9)`),
        o.addColorStop(1, `rgba(${i}, ${n}, ${r}, 0)`),
        (a.fillStyle = o),
        a.fillRect(0, 0, 32, 32),
        t
    );
}
var ti = a(690941);
let tn = 320;
function tr(e, t, a) {
    let i = t * t,
        n = e.radius + (a - e.radius) * i,
        r = e.angle + e.sweep * Math.pow(t, 1.3);
    return { x: Math.cos(r) * n, y: Math.sin(r) * n, angle: r, radius: n, scale: 1 - 0.8666666666666667 * i, fall: i };
}
function to(e, t, a) {
    let i = tr(e, t, a),
        n = tr(e, Math.min(1, t + 0.02), a),
        r = (0.02 * e.duration) / 1e3;
    return [(n.x - i.x) / r, (n.y - i.y) / r];
}
function tl(e) {
    let { ref: t, director: a, motesPerOrb: i, surge: n, wake: r, pixelRatio: o, fixedCoreRadius: u, onToss: h } = e,
        f = s.useRef(null),
        c = s.useRef([]),
        d = s.useRef([]),
        m = s.useRef(null),
        g = (0, eK.A)({ motesPerOrb: i, surge: n, wake: r, pixelRatio: o, fixedCoreRadius: u, onToss: h }),
        p = s.useCallback(() => g.current.fixedCoreRadius ?? E(a.renderState, g.current.surge), [a, g]),
        w = s.useCallback((e, t) => {
            let a = f.current,
                i = a?.clientWidth ?? 0;
            if (0 === i) return [0, 1];
            let n = (e / i - T["0"]) / 0.32,
                r = (t / i - T["1"]) / 0.32;
            return [Math.atan2(r, n), Math.hypot(n, r)];
        }, []),
        v = s.useCallback(
            (e, t) => {
                if (g.current.onToss?.(e, t) === !1) return !1;
                let i = a.clock.now(),
                    [n, r] = w(e, t);
                a.tossOrb(i);
                let o = p(),
                    l = 0.75 + 0.5 * Math.random(),
                    s = 0.18933333333333333 * (0.85 + 0.3 * Math.random()),
                    u = Math.max(r, o + 0.12);
                return (
                    c.current.push({
                        bornAt: i,
                        duration: 1.16 * l * 1e3,
                        angle: n,
                        radius: u,
                        sweep: 1.6 * l * Math.min(1.5, Math.max(0.5, r)),
                        size: s,
                        spin: (Math.random() - 0.5) * 6,
                        seed: 1e3 * Math.random(),
                    }),
                    !0
                );
            },
            [a, p, g, w],
        );
    return (
        s.useImperativeHandle(
            t,
            () => ({
                press(e, t) {
                    v(e, t) && (m.current = { x: e, y: t, since: a.clock.now(), owed: 0 });
                },
                move(e, t) {
                    let a = m.current;
                    null != a && ((a.x = e), (a.y = t));
                },
                release() {
                    m.current = null;
                },
                tossOnce(e, t) {
                    v(e, t);
                },
            }),
            [a, v],
        ),
        s.useEffect(() => {
            let e,
                t = f.current,
                i = t?.getContext("2d");
            if (null == t || null == i) return;
            let n = new Image(),
                r = null,
                o = null,
                l = !1;
            ((n.onload = () => {
                ((r = eQ.map((e) => {
                    let t = document.createElement("canvas");
                    ((t.width = 240), (t.height = 240));
                    let a = t.getContext("2d");
                    return (
                        null == a ||
                            (e > 0 && (a.filter = `blur(${(96 * e).toFixed(1)}px)`), a.drawImage(n, 72, 72, 96, 96)),
                        t
                    );
                })),
                    (o = (function (e) {
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
                            o = new Float64Array(768),
                            l = new Float64Array(64);
                        for (let e = 0; e < 48; e++) {
                            let i = e3(e),
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
                                    o[64 * e + a] = i;
                                }
                            let h = 0.9 * e5(i) * 255,
                                f = (e % 8) * 64,
                                c = 64 * Math.floor(e / 8);
                            for (let e = 0; e < 64; e++) {
                                l.fill(0);
                                for (let t = 0; t < 12; t++) {
                                    let a = r[12 * e + t];
                                    for (let e = 0; e < 64; e++) l[e] += o[64 * t + e] * a;
                                }
                                let t = ((c + e) * a.width + f) * 4 + 3;
                                for (let e = 0; e < 64; e++) n.data[t + 4 * e] = l[e] * h;
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
                w = ta([1, 1, 1]),
                y = null,
                b = [0, 0, 0],
                [A, R, k] = [0, 0, 0],
                M = document.createElement("canvas");
            ((M.width = 128), (M.height = 128));
            let E = M.getContext("2d"),
                F = [],
                P = [],
                L = !0,
                C = a.clock.now(),
                I = a.clock.run(function (e) {
                    let f = Math.min(0.1, (e - C) / 1e3);
                    C = e;
                    let M = m.current;
                    if (null != M) {
                        let t = Math.min(1, (e - M.since) / 1e3 / 2);
                        for (M.owed += f * (6 + 18 * t); M.owed >= 1;)
                            if (((M.owed -= 1), !v(M.x, M.y))) {
                                m.current = null;
                                break;
                            }
                    }
                    let I = t.clientWidth;
                    if (0 === I) return;
                    let _ = Math.round(I * Math.min(devicePixelRatio > 0 ? devicePixelRatio : 1, g.current.pixelRatio));
                    ((t.width !== _ || t.height !== _) && ((t.width = _), (t.height = _)),
                        i.setTransform(1, 0, 0, 1, 0, 0));
                    let W = 0 === c.current.length && 0 === d.current.length;
                    if (((!W || L) && i.clearRect(0, 0, t.width, t.height), (L = !W), W)) {
                        a.renderState.wakes.length > 0 && (a.renderState.wakes = []);
                        return;
                    }
                    let O = 0.32 * _;
                    i.setTransform(O, 0, 0, O, T["0"] * _, T["1"] * _);
                    let G = p(),
                        U = a.renderState.look.core.glowTint;
                    (null == s || U[0] !== b[0] || U[1] !== b[1] || U[2] !== b[2]) &&
                        ((s = ta(U)),
                        (b[0] = U[0]),
                        (b[1] = U[1]),
                        (b[2] = U[2]),
                        (y = null),
                        (l = !1),
                        ([A, R, k] = U.map((e) => Math.round(255 * e))));
                    let D = u.complete && u.naturalWidth > 0 ? u : null,
                        N = n.complete && n.naturalWidth > 0,
                        B = c.current;
                    ((F.length = 0), (P.length = 0));
                    let X = 0;
                    for (let t of B) {
                        let u = Math.max(0, (e - t.bornAt) / t.duration);
                        if (u >= 1) {
                            let i = tr(t, 1, G);
                            a.consume(i.angle, i.radius, e);
                            for (let t = 0; t < g.current.motesPerOrb; t++)
                                d.current.push({
                                    bornAt: e,
                                    life: 0.9 * (0.6 + 0.8 * Math.random()) * 1e3,
                                    angle: i.angle + (Math.random() - 0.5) * 0.5,
                                    lift: 0.05 + 0.25 * Math.random(),
                                    orbit: 1.5 + 2 * Math.random(),
                                    size: 0.015 + 0.025 * Math.random(),
                                });
                            continue;
                        }
                        B[X++] = t;
                        let f = Math.max(0, e - t.bornAt),
                            c = f - tn,
                            m = tr(t, u, G),
                            p = x(c / 1e3 / 0.32),
                            v = c < 0,
                            b = v
                                ? 1
                                : (function (e) {
                                      let t = e / 1e3 / 0.32596491228070174;
                                      return t >= 1
                                          ? 1
                                          : 1 + 1.4203508771929825 * Math.exp(-4.6 * t) * Math.sin(3 * Math.PI * t);
                                  })(c),
                            T = t.size * m.scale * b;
                        (F.push(t), P.push(u));
                        let M = 0.003157894736842105 * m.fall,
                            L = (u > 0.85 ? (1 - u) / 0.15 : 1) * (1 - 0.3157894736842105 * m.fall),
                            C = f / tn;
                        if (null != D && C < 1.3) {
                            let e = 1 + 0.35 * (1 - S(0, 1, 4 * C)),
                                a = t.size * m.scale * 1.1 * e;
                            if ((i.save(), (i.globalCompositeOperation = "lighter"), i.translate(m.x, m.y), C < 0.3)) {
                                let e = 1.6 * a * (0.5 + C);
                                ((i.globalAlpha = 1 - C / 0.3), i.drawImage(w, -e / 2, -e / 2, e, e));
                            }
                            let n = S(0, 1, 12 * C) * (1 - S(0, 1, (C - 0.45) / (1.3 - 0.45)));
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
                                    })(D)),
                                    a,
                                ),
                                i.drawImage(D, -a / 2, -a / 2, a, a)),
                                i.restore());
                        }
                        let I = N
                                ? (y ??= (function (e, t) {
                                      let a = document.createElement("canvas");
                                      ((a.width = 128), (a.height = 128));
                                      let i = a.getContext("2d");
                                      if (null == i) return a;
                                      let [n, r, o] = t.map((e) => Math.round(255 * x(e)));
                                      return (
                                          i.drawImage(e, 0, 0, 128, 128),
                                          (i.globalCompositeOperation = "color"),
                                          (i.fillStyle = `rgba(${n}, ${r}, ${o}, 0.631578947368421)`),
                                          i.fillRect(0, 0, 128, 128),
                                          (i.globalCompositeOperation = "screen"),
                                          (i.fillStyle = `rgba(${n}, ${r}, ${o}, 0.39649122807017545)`),
                                          i.fillRect(0, 0, 128, 128),
                                          (i.globalCompositeOperation = "destination-in"),
                                          i.drawImage(e, 0, 0, 128, 128),
                                          a
                                      );
                                  })(n, U))
                                : null,
                            _ = S(0, 1, c / 50);
                        (i.save(), (i.globalAlpha = L), i.translate(m.x, m.y));
                        let W = t.spin * u;
                        if ((i.rotate(W), v)) {
                            let e = f / tn;
                            if (e > 0) {
                                (i.save(), (i.globalCompositeOperation = "lighter"), (i.globalAlpha = e * e * 0.9));
                                let t = T * (1 + e) * 1.8;
                                (i.drawImage(s, -t / 2, -t / 2, t, t), i.restore());
                            }
                            (null != I &&
                                (function (e, t, a) {
                                    let { size: i, reach: n, seed: r, u: o } = a,
                                        l = e.globalAlpha;
                                    e7.forEach((a, s) => {
                                        let u = 0.4 * e9(r, s, 0),
                                            h = S(0, 1, (o - 0.6 * u) / 0.4);
                                        if (h <= 0) return;
                                        let f = x((o - u) / 0.6),
                                            c = 1 - f * f,
                                            d = Math.atan2(a.cy, a.cx) + (e9(r, s, 1) - 0.5) * 0.9,
                                            m = 1.1866666666666665 * n * (0.6 + 0.8 * e9(r, s, 2)) * c;
                                        (e.save(),
                                            (e.globalAlpha = l * Math.min(1, 2 * h)),
                                            e.translate(Math.cos(d) * m, Math.sin(d) * m),
                                            e.translate(a.cx * i, a.cy * i),
                                            e.rotate((e9(r, s, 3) - 0.5) * 3.5 * c),
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
                                            te(e, t, i, 0.7087719298245614),
                                            e.restore());
                                    });
                                })(i, I, { size: T, reach: t.size * m.scale, seed: t.seed, u: e }),
                                i.restore());
                            continue;
                        }
                        let j = eZ(m.fall, p);
                        if (
                            (null == o
                                ? ((i.shadowColor = `rgba(${A}, ${R}, ${k}, 0.9)`), (i.shadowBlur = T * O * j))
                                : l ||
                                  (!(function (e, t, a, i) {
                                      let n = e.getContext("2d");
                                      null != n &&
                                          ((n.globalCompositeOperation = "source-in"),
                                          (n.fillStyle = `rgb(${t}, ${a}, ${i})`),
                                          n.fillRect(0, 0, e.width, e.height));
                                  })(o, A, R, k),
                                  (l = !0)),
                            N)
                        ) {
                            if (
                                (!(function (e, t, a, i, n) {
                                    let { size: r, blur: o, spread: l } = n;
                                    if (null == a || o <= 0) {
                                        (null != i && e8(e, i, r, l), e.drawImage(t, -r / 2, -r / 2, r, r));
                                        return;
                                    }
                                    let s = o / Math.max(r, 1e-4),
                                        u = eQ.length - 1,
                                        h = eQ.findIndex((e) => e >= s),
                                        f = -1 === h ? u : Math.max(1, h),
                                        c = f - 1,
                                        d = x((s - eQ[c]) / (eQ[f] - eQ[c])),
                                        m = 2.5 * r,
                                        g = e.globalAlpha;
                                    ((e.globalAlpha = g * (1 - d)),
                                        null != i && e8(e, i, r, e0(l, c)),
                                        e.drawImage(a[c], -m / 2, -m / 2, m, m),
                                        (e.globalAlpha = g * d),
                                        null != i && e8(e, i, r, e0(l, f)),
                                        e.drawImage(a[f], -m / 2, -m / 2, m, m),
                                        (e.globalAlpha = g));
                                })(i, n, r, o, { size: T, blur: M, spread: j }),
                                (i.shadowBlur = 0),
                                null != I && _ < 1)
                            ) {
                                let e = i.globalAlpha;
                                ((i.globalAlpha = e * (1 - _)),
                                    i.drawImage(I, -T / 2, -T / 2, T, T),
                                    te(i, I, T, 0.7087719298245614 * (1 - _)),
                                    (i.globalAlpha = e));
                            }
                            p < 1 &&
                                null != E &&
                                (function (e, t, a, i) {
                                    let { size: n, t: r, turned: o } = i,
                                        l = (r - 0.12) / 0.88;
                                    if (l <= 0 || l >= 1) return;
                                    let s = (2 * (l < 0.5 ? 2 * l * l : 1 - 2 * (1 - l) * (1 - l)) - 1) * 121.6,
                                        u = tt - o,
                                        h = Math.cos(u),
                                        f = Math.sin(u);
                                    if (Math.abs(s) - 28.16 >= 64 * (Math.abs(h) + Math.abs(f))) return;
                                    let c = 64 + h * s,
                                        d = 64 + f * s,
                                        m = t.createLinearGradient(
                                            c - 28.16 * h,
                                            d - 28.16 * f,
                                            c + 28.16 * h,
                                            d + 28.16 * f,
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
                                        ((e.globalAlpha = p * Math.min(1, a)),
                                            e.drawImage(t.canvas, -n / 2, -n / 2, n, n));
                                    ((e.globalCompositeOperation = g), (e.globalAlpha = p));
                                })(i, E, n, { size: T, t: p, turned: W });
                        } else
                            ((i.fillStyle = `rgb(${A}, ${R}, ${k})`),
                                i.beginPath(),
                                i.arc(0, 0, T / 2, 0, 2 * Math.PI),
                                i.fill());
                        i.restore();
                    }
                    B.length = X;
                    let j = [],
                        z = Math.max(1, Math.min(4, Math.floor(24 / Math.max(1, F.length)))),
                        H = g.current.wake.length;
                    for (let e = F.length - 1; e >= 0 && j.length < 24; e--)
                        !(function (e, t, a, i, n) {
                            let { trail: r, segments: o } = n,
                                l = Math.min(1, 6 * a) * (1 - Math.max(0, (a - 0.85) / 0.15));
                            if (l <= 0) return;
                            let s = r / o,
                                [u, h] = to(t, a, i),
                                f = Math.hypot(u, h),
                                c = f > 1e-4 ? s / (f * (t.duration / 1e3)) : 0;
                            for (let n = 0; n < o; n++) {
                                let f = a - n * c;
                                if (f <= 0 && n > 0) break;
                                let d = tr(t, Math.max(0, f), i),
                                    [m, g] = 0 === n ? [u, h] : to(t, Math.max(0, f), i),
                                    p = n * s;
                                e.push({
                                    x: d.x,
                                    y: d.y,
                                    vx: m,
                                    vy: g,
                                    strength: l * Math.exp(-p / Math.max(r, 0.001)),
                                    spacing: s,
                                    widthScale: 1 + 3 * p,
                                    head: 0 === n,
                                    tail: n === o - 1 || a - (n + 1) * c <= 0,
                                });
                            }
                        })(j, F[e], P[e], G, { trail: H, segments: Math.min(z, 24 - j.length) });
                    a.renderState.wakes = j;
                    let Y = d.current;
                    for (let t of ((i.globalCompositeOperation = "lighter"), (X = 0), Y)) {
                        let a = Math.max(0, (e - t.bornAt) / t.life);
                        if (a >= 1) continue;
                        Y[X++] = t;
                        let n = G * (1 + t.lift * (1 - a)),
                            r = t.angle + t.orbit * a * (t.life / 1e3),
                            o = t.size * (1 - 0.5 * a);
                        ((i.globalAlpha = 1 - a),
                            i.drawImage(s, Math.cos(r) * n - o, Math.sin(r) * n - o, 2 * o, 2 * o));
                    }
                    ((Y.length = X), (i.globalCompositeOperation = "source-over"), (i.globalAlpha = 1));
                });
            return () => {
                (I(), (n.onload = null));
            };
        }, [a, v, p, g]),
        (0, l.jsx)("canvas", { ref: f, className: ti.q, "aria-hidden": !0 })
    );
}
let ts = new (a(626584).A)("OrbVoid");
function tu(e) {
    return e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function th(e) {
    return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
}
function tf(e, t, a) {
    let i = td(e, e.VERTEX_SHADER, t),
        n = td(e, e.FRAGMENT_SHADER, a),
        r = null != i && null != n ? e.createProgram() : null;
    return null == i || null == n || null == r
        ? (null != i && e.deleteShader(i), null != n && e.deleteShader(n), null)
        : (e.attachShader(r, i),
            e.attachShader(r, n),
            e.linkProgram(r),
            e.deleteShader(i),
            e.deleteShader(n),
            e.getProgramParameter(r, e.LINK_STATUS))
          ? r
          : (ts.error("program failed to link", e.getProgramInfoLog(r)), e.deleteProgram(r), null);
}
function tc(e, t) {
    let a = new Map();
    return (i) => {
        if (null == t) return null;
        let n = a.get(i);
        return (void 0 === n && ((n = e.getUniformLocation(t, i)), a.set(i, n)), n);
    };
}
function td(e, t, a) {
    let i = e.createShader(t);
    return null == i
        ? null
        : (e.shaderSource(i, a), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS))
          ? i
          : (ts.error("shader failed to compile", e.getShaderInfoLog(i)), e.deleteShader(i), null);
}
function tm(e, t) {
    e.isConnected || t.getExtension("WEBGL_lose_context")?.loseContext();
}
function tg(e) {
    return new Promise((t, a) => {
        let i = new Image();
        ((i.onload = () => t(i)),
            (i.onerror = () => a(Error(`could not load ${e}`))),
            (i.crossOrigin = "anonymous"),
            (i.src = e));
    });
}
var tp = a(463297);
let tw =
        "https://cdn.discordapp.com/assets/content/09b8825721e9829ee508c103dd42eab4e76d12012702f0bbf9e96a652e80bbb2.webp",
    tv = ["r", "g", "b"];
function ty(e) {
    return `${(0.32 * e * 200).toFixed(2)}%`;
}
function tb(e) {
    let { look: t } = e,
        [a] = s.useState(() => ({
            matrix: (function (e) {
                let { layers: t } = e;
                return [0, 1, 2]
                    .map((e) => {
                        let a = tv.map((a) =>
                            t
                                .filter((e) => e.channel === a)
                                .reduce((t, a) => t + tu(a.tint[e]) * a.opacity * a.intensity, 0)
                                .toFixed(4),
                        );
                        return `${a.join(" ")} 0 0`;
                    })
                    .concat("0 0 0 1 0")
                    .join(" ");
            })(t),
            core: (function (e) {
                let { core: t } = e,
                    a = x(t.glowIntensity - 0.65) * t.glowWhiteout,
                    i = t.glowTint.map((e) => Math.round((e + (1 - e) * a) * 255)).join(" "),
                    n = t.radius + t.glowOffset,
                    r = `rgb(0 0 0) ${ty(t.radius - t.softness)}, rgb(${i}) ${ty(n)}, rgb(${i} / 50%) ${ty(n + t.glowWidth)}, rgb(${i} / 0%) ${ty(n + 3 * t.glowWidth)}`;
                return `radial-gradient(circle closest-side at ${100 * T["0"]}% ${100 * T["1"]}%, ${r})`;
            })(t),
        })),
        i = s.useId();
    return (0, l.jsxs)("div", {
        className: tp.Hc,
        children: [
            (0, l.jsx)("svg", {
                className: tp.pb,
                "aria-hidden": !0,
                children: (0, l.jsx)("filter", {
                    id: i,
                    colorInterpolationFilters: "linearRGB",
                    children: (0, l.jsx)("feColorMatrix", { type: "matrix", values: a.matrix }),
                }),
            }),
            (0, l.jsx)("img", { className: tp.pN, src: tw, alt: "", draggable: !1, style: { filter: `url("#${i}")` } }),
            (0, l.jsx)("div", { className: tp.I8, style: { background: a.core } }),
        ],
    });
}
let tx = new Float32Array(1),
    tA = new Int32Array(tx.buffer);
function tS(e, t, a, i, n) {
    for (let l = a; l < i; l++)
        if (e[l] !== t[l]) {
            var r, o;
            if (n <= 0 || !(Math.abs(((r = e[l]), (tA[0] = r), tx[0] - ((o = t[l]), (tA[0] = o), tx[0]))) <= n))
                return !1;
        }
    return !0;
}
class tR {
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
            if (!tS(t, a, i, r, "uniform1i" === this.calls[n] || "uniform1iv" === this.calls[n] ? 0 : e)) return !0;
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
                o = this.locations[n],
                l = this.sizes[n];
            switch (r) {
                case "uniform1f":
                    e.uniform1f(o, t[i]);
                    break;
                case "uniform2f":
                    e.uniform2f(o, t[i], t[i + 1]);
                    break;
                case "uniform3f":
                    e.uniform3f(o, t[i], t[i + 1], t[i + 2]);
                    break;
                case "uniform1i":
                    e.uniform1i(o, a[i]);
                    break;
                case "uniform1iv":
                    e.uniform1iv(o, a, i, l);
                    break;
                default:
                    e[r](o, t, i, l);
            }
            i += l;
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
        ((tx[0] = e), this.hold(tA[0]));
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
class tk {
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
            n = 1 + (t.heatSpeed - 1) * x(e.agitation);
        (this.applyImpacts(e, a), this.applyPulses(e, a));
        let { wakes: r } = e,
            o = 0 !== t.wakePush ? r.length : 0,
            { wakeWidthSquared: l } = this;
        for (let t = 0; t < o; t++) {
            let a = Math.max(e.wake.width * r[t].widthScale * 2, 0.001);
            l[t] = a * a;
        }
        let s = 1 - Math.exp(-t.settle * i),
            u = t.spawnRadius + 0.25;
        for (let h = 0; h < a; h++) {
            let a = this.x[h],
                f = this.y[h],
                c = Math.max(Math.hypot(a, f), 1e-4),
                d = Math.atan2(f, a);
            if (o > 0) {
                let e = 0,
                    n = 0;
                for (let t = 0; t < o; t++) {
                    let i = r[t],
                        o = a - i.x,
                        s = f - i.y,
                        u = Math.exp(-(o * o + s * s) / l[t]) * i.strength;
                    ((e += i.vx * u), (n += i.vy * u));
                }
                let s = t.wakePush * this.give[h] * i;
                this.push(h, c, e * s, n * s);
            }
            let m = t.inwardSpeed * n * this.sink[h];
            this.home[h] -= m * i;
            let g = t.tether * (1 === this.loose[h] ? 0.3 : 1),
                p = t.orbitSpeed * n * Math.max(c, 0.2) ** -t.orbitFalloff;
            ((this.vr[h] += (-m - g * (c - this.home[h]) - this.vr[h]) * s), (this.vt[h] += (p * c - this.vt[h]) * s));
            let w = Math.max(c + this.vr[h] * i, 1e-4),
                v = Math.min(0.95 * e.coreRadius, this.home[h]);
            (0 === this.loose[h] && w < v && ((w = v), (this.vr[h] = Math.max(this.vr[h], 0))),
                (d += (this.vt[h] / c) * i),
                (this.x[h] = Math.cos(d) * w),
                (this.y[h] = Math.sin(d) * w));
            let y = this.shape[h] >= 0 ? 0.25 : 1;
            ((this.rotation[h] += this.tumbleRate[h] * t.tumble * y * n * i),
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
            o = Math.max(1.3 * n, 0.2),
            l = a ? o + Math.random() * (i.spawnRadius + 0.25 - o) : i.spawnRadius + 0.25 * Math.random();
        ((this.x[e] = Math.cos(r) * l), (this.y[e] = Math.sin(r) * l));
        let s = x(i.sinkSpread);
        ((this.sink[e] = 1 + s * (2 * Math.random() - 1)),
            (this.vr[e] = -i.inwardSpeed * this.sink[e]),
            (this.vt[e] = i.orbitSpeed * Math.max(l, 0.2) ** -i.orbitFalloff * l),
            (this.home[e] = l));
        let u = Math.random() ** 2.2;
        ((this.size[e] = i.sizeMin + (i.sizeMax - i.sizeMin) * u),
            this.shape[e] >= 0 && this.liveSilhouettes--,
            (this.shape[e] = this.pickSilhouette(t)),
            this.shape[e] >= 0 && ((this.size[e] = 0.028 + (0.036 - 0.028) * Math.random()), this.liveSilhouettes++),
            (this.seed[e] = Math.random()),
            (this.rotation[e] = Math.random() * Math.PI * 2),
            (this.tumbleRate[e] = (2 * Math.random() - 1) * (0.3 + 0.7 * (1 - u))),
            (this.loose[e] = +(Math.random() < i.looseShare)),
            (this.give[e] = (1 === this.loose[e] ? 1 : x(i.anchoredGive)) * (1 - 0.4 * u)),
            (this.age[e] = 0.8 * !!a));
    }
    pickSilhouette(e) {
        return 0 === e.eggLayers || this.liveSilhouettes >= 2 || Math.random() >= 0.01
            ? -1
            : Math.floor(Math.random() * e.eggLayers);
    }
    write(e, t) {
        let { tuning: a, coreRadius: i } = t,
            n = Math.hypot(this.x[e], this.y[e]),
            r = S(0.85 * i, 1.15 * i, n),
            o = r * S(0, 0.8, this.age[e]) * (1 - S(a.spawnRadius + 0.25, a.spawnRadius + 0.25 + 0.3, n)),
            l = 7 * e;
        ((this.instances[l] = this.x[e]),
            (this.instances[l + 1] = this.y[e]),
            (this.instances[l + 2] = this.size[e] * (0.5 + 0.5 * r)),
            (this.instances[l + 3] = this.rotation[e]),
            (this.instances[l + 4] = this.seed[e]),
            (this.instances[l + 5] = o),
            (this.instances[l + 6] = this.shape[e]));
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
                    o = this.y[n] - r,
                    l = Math.max(Math.hypot(t, o), 1e-4),
                    s = this.kick(a, n, a.impactKick * Math.exp(-((l / i) ** 2))),
                    u = Math.max(Math.hypot(this.x[n], this.y[n]), 1e-4);
                this.push(n, u, (t / l) * s, (o / l) * s);
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
            }
    }
    kick(e, t, a) {
        let i = Math.max(e.kickCap, 0.001);
        return i * Math.tanh((a * this.give[t]) / i);
    }
}
let tT = [
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
function tM(e, t, a, i, n) {
    let { sourceCosts: r, nearestSamples: o, boundaries: l } = n;
    ((o[0] = 0), (l[0] = -1e20), (l[1] = 1e20), (r[0] = e[t]));
    for (let n = 1, s = 0, u = 0; n < i; n++) {
        r[n] = e[t + n * a];
        let i = n * n;
        do {
            let e = o[s];
            u = (r[n] - r[e] + i - e * e) / (n - e) / 2;
        } while (u <= l[s] && --s > -1);
        ((o[++s] = n), (l[s] = u), (l[s + 1] = 1e20));
    }
    for (let n = 0, s = 0; n < i; n++) {
        for (; l[s + 1] < n;) s++;
        let i = o[s],
            u = n - i;
        e[t + n * a] = r[i] + u * u;
    }
}
function tE(e, t, a) {
    for (let i = 0; i < t; i++) tM(e, i, t, t, a);
    for (let i = 0; i < t; i++) tM(e, i * t, 1, t, a);
}
let tF = null,
    tP = `
float travel(float age, float ease) {
  return 1.0 - pow(1.0 - clamp(age, 0.0, 1.0), max(ease, 1.0));
}
`,
    tL = `
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
    tC = `
vec3 linearToSrgb(vec3 c) {
  vec3 lo = c * 12.92;
  vec3 hi = 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(vec3(0.0031308), c));
}
`,
    tI = `
float waveAt(float r, float theta, float coreR, float wavelength, float cycle, float spiral, float reach) {
  float beyond = r - coreR;
  if (beyond <= 0.0) return 0.0;
  float envelope = smoothstep(0.0, 0.08, beyond) * exp(-beyond / max(reach, 1e-3));
  float phase = 6.2831853 * (beyond / max(wavelength, 1e-3) - cycle) + spiral * theta;
  return sin(phase) * envelope;
}
`,
    t_ = `#version 300 es
in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  vUv.y = 1.0 - vUv.y;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,
    tW = `#version 300 es
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

${tI}

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

${tC}
${tP}
${tL}

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
    float width = uPulseWidth * (1.0 + pulse.x * uPulseSoften);
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
function tO(e, t, a, i, n) {
    let r = 2 * a + 1;
    for (let l = 0; l < 256; l++)
        for (let s = 0; s < 3; s++) {
            function o(e) {
                return (i ? 256 * l + e : 256 * e + l) * 3 + s;
            }
            for (let t = 0; t < 256; t++) n[t] = e[o(t)];
            let u = 0;
            for (let e = -a; e <= a; e++) e >= 0 && e < 256 && (u += n[e]);
            for (let e = 0; e < 256; e++) {
                t[o(e)] = u / r;
                let i = e - a,
                    l = e + a + 1;
                (i >= 0 && (u -= n[i]), l < 256 && (u += n[l]));
            }
        }
}
let tG = `#version 300 es
in vec2 aPosition;
out vec2 vTex;
void main() {
  // Unflipped, unlike the void's: this reads back a texture drawn in GL's own
  // orientation, so the pixel it reads is the pixel it writes.
  vTex = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,
    tU = `#version 300 es
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

${tI}

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
}`;
var tD = a(253400);
let tN = /swiftshader|llvmpipe|lavapipe|softpipe|software|basic render/i;
function tB(e) {
    let t = e.getExtension("WEBGL_debug_renderer_info");
    return tN.test(String(e.getParameter(null != t ? t.UNMASKED_RENDERER_WEBGL : e.RENDERER)));
}
function tX() {
    try {
        let e = document.createElement("canvas"),
            t = e.getContext("webgl2");
        if (null == t || t.isContextLost()) return "still";
        try {
            if (tB(t)) return "low";
        } finally {
            tm(e, t);
        }
        return tD.Ay.getEnableHardwareAcceleration() ? "full" : "low";
    } catch {
        return "full";
    }
}
let tj = `#version 300 es
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
    tz = `#version 300 es
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

${tC}

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
var tH = a(723652);
let tY = [-0.5, 0, 0.5],
    t$ = 12 * tY.length,
    tV = { r: [1, 0, 0], g: [0, 1, 0], b: [0, 0, 1] },
    tq = [];
function tK(e) {
    let { renderState: t, clock: a, pulse: i, wake: n, surge: r, rocks: o, quality: u, echoes: h, onDegrade: f } = e,
        c = s.useRef(null),
        d = (0, eK.A)({ renderState: t, pulse: i, wake: n, surge: r, rocks: o, quality: u, echoes: h, onDegrade: f });
    return (
        s.useEffect(() => {
            let e = c.current;
            if (null == e) return;
            let t = e.getContext("webgl2", { alpha: !0, premultipliedAlpha: !0, antialias: !1 });
            if (null == t || t.isContextLost()) return void d.current.onDegrade("still");
            let i = e.ownerDocument,
                n = new tk(),
                r = new Int32Array(n.instances.buffer),
                o = {
                    dt: 0,
                    now: 0,
                    tuning: $,
                    wake: B,
                    agitation: 0,
                    coreRadius: 0,
                    impacts: [],
                    pulses: [],
                    wakes: [],
                    eggLayers: 0,
                },
                l = new Float32Array(24),
                s = new Float32Array(24),
                u = new Float32Array(8),
                h = new Float32Array(8),
                f = new Float32Array(8),
                m = new Float32Array(8),
                g = new Float32Array(8),
                p = new Float32Array(8),
                w = new Int32Array(8),
                v = new Float32Array(24),
                y = new Float32Array(8),
                b = new Float32Array(8),
                S = new Float32Array(8),
                E = new Float32Array(8),
                F = new Float32Array(8),
                P = new Float32Array(8),
                L = new Float32Array(8),
                C = new Float32Array(8),
                I = new Float32Array(8),
                _ = new Float32Array(8),
                W = new Float32Array(8),
                O = new Float32Array(8),
                G = new Int32Array(8),
                U = new Int32Array(8),
                D = new Int32Array(8),
                N = new Float32Array(32),
                X = new Float32Array(12),
                j = new Float32Array(6),
                z = new WeakMap(),
                H = 0,
                Y = new Float32Array(96),
                V = new Float32Array(96),
                q = new Map(),
                K = new Map(),
                Q = 0,
                J = 0,
                Z = 0,
                ee = 0,
                et = new WeakSet(),
                ea = new Uint8Array(4 * t$),
                ei = new Uint8Array(t$),
                en = null,
                er = null,
                eo = 0,
                el = !1,
                es = 0,
                eu = 0,
                eh = -1 / 0,
                ef = !0,
                ec = new Int32Array(n.instances.length),
                ed = 0,
                em = !1,
                eg = new Int32Array(n.instances.length),
                ep = 0,
                ew = null,
                ev = () => {};
            function ey() {
                (cancelAnimationFrame(eo),
                    null != ew && null != en && (!a.paused || ef) && (eo = requestAnimationFrame(ew.render)));
            }
            function eb() {
                ((ef = !0), a.paused && ey());
            }
            function ex(i) {
                let c = tf(t, t_, tW);
                if (null == c) return null;
                let B = tf(t, tj, tz),
                    $ = i ? tf(t, tG, tU) : null;
                t.useProgram(c);
                let el = t.createVertexArray();
                t.bindVertexArray(el);
                let eu = t.createBuffer();
                (t.bindBuffer(t.ARRAY_BUFFER, eu),
                    t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), t.STATIC_DRAW));
                let ew = t.getAttribLocation(c, "aPosition");
                (t.enableVertexAttribArray(ew), t.vertexAttribPointer(ew, 2, t.FLOAT, !1, 0, 0));
                let ev = tc(t, c),
                    ey = new tR(),
                    ex = new tR(),
                    eA = new tR(),
                    eS = t.createVertexArray(),
                    eR = t.createBuffer(),
                    ek = t.createBuffer(),
                    eT = tc(t, B),
                    eM = t.createTexture();
                if (
                    (t.activeTexture(t.TEXTURE0 + 3),
                    t.bindTexture(t.TEXTURE_2D_ARRAY, eM),
                    t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                    t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                    t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_MIN_FILTER, t.LINEAR),
                    t.texParameteri(t.TEXTURE_2D_ARRAY, t.TEXTURE_MAG_FILTER, t.LINEAR),
                    t.texImage3D(t.TEXTURE_2D_ARRAY, 0, t.R16F, 1, 1, 1, 0, t.RED, t.FLOAT, new Float32Array([1])),
                    null != B)
                ) {
                    (t.bindVertexArray(eS),
                        t.bindBuffer(t.ARRAY_BUFFER, eR),
                        t.bufferData(
                            t.ARRAY_BUFFER,
                            new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                            t.STATIC_DRAW,
                        ));
                    let e = t.getAttribLocation(B, "aCorner");
                    (t.enableVertexAttribArray(e),
                        t.vertexAttribPointer(e, 2, t.FLOAT, !1, 0, 0),
                        t.bindBuffer(t.ARRAY_BUFFER, ek),
                        t.bufferData(t.ARRAY_BUFFER, n.instances.byteLength, t.DYNAMIC_DRAW));
                    let a = t.getAttribLocation(B, "aRock");
                    (t.enableVertexAttribArray(a),
                        t.vertexAttribPointer(a, 4, t.FLOAT, !1, 28, 0),
                        t.vertexAttribDivisor(a, 1));
                    let i = t.getAttribLocation(B, "aRockExtra");
                    (t.enableVertexAttribArray(i),
                        t.vertexAttribPointer(i, 3, t.FLOAT, !1, 28, 16),
                        t.vertexAttribDivisor(i, 1),
                        t.useProgram(B),
                        t.uniform2f(eT("uCenter"), T["0"], T["1"]),
                        t.uniform1f(eT("uRadius"), 0.32),
                        t.uniform1i(eT("uEggs"), 3),
                        t.useProgram(c),
                        t.bindVertexArray(el));
                }
                let eE = t.createVertexArray(),
                    eF = t.createTexture(),
                    eP = t.createFramebuffer(),
                    eL = 0,
                    eC = 0,
                    eI = tc(t, $);
                if (null != $) {
                    (t.bindVertexArray(eE), t.bindBuffer(t.ARRAY_BUFFER, eu));
                    let e = t.getAttribLocation($, "aPosition");
                    (t.enableVertexAttribArray(e),
                        t.vertexAttribPointer(e, 2, t.FLOAT, !1, 0, 0),
                        t.useProgram($),
                        t.uniform1i(eI("uScene"), 2),
                        t.uniform2f(eI("uCenter"), T["0"], 1 - T["1"]),
                        t.uniform1f(eI("uRim"), 0.32),
                        t.uniform1f(eI("uChromaLimit"), 0.06),
                        t.useProgram(c),
                        t.bindVertexArray(el));
                }
                let e_ = t.createRenderbuffer(),
                    eW = t.createFramebuffer();
                (t.bindRenderbuffer(t.RENDERBUFFER, e_),
                    t.renderbufferStorage(t.RENDERBUFFER, t.RGBA8, t$, 1),
                    t.bindFramebuffer(t.FRAMEBUFFER, eW),
                    t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, e_),
                    t.bindFramebuffer(t.FRAMEBUFFER, null),
                    t.enable(t.BLEND),
                    t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA),
                    t.uniform2f(ev("uCenter"), T["0"], T["1"]),
                    t.uniform2f(ev("uRadius"), 0.32, 0.32),
                    t.uniform1f(ev("uPlateFill"), 0));
                let eO = null,
                    eG = null,
                    eU = !1;
                function eD(e) {
                    null != B &&
                        (t.activeTexture(t.TEXTURE0 + 3),
                        t.bindTexture(t.TEXTURE_2D_ARRAY, eM),
                        t.texImage3D(t.TEXTURE_2D_ARRAY, 0, t.R16F, 256, 256, e.layers, 0, t.RED, t.FLOAT, e.sdf),
                        eb());
                }
                return (
                    null != er && eD(er),
                    {
                        render: function i(er) {
                            var eu, ew, eb, eR, eM;
                            let e_ = a.paused;
                            e_ || (eo = requestAnimationFrame(i));
                            let eO = a.now(er),
                                eD = d.current,
                                eN = eD.quality,
                                eB = eN.surfaceFps > 0 ? 1e3 / eN.surfaceFps : 0;
                            if (!e_ && ((eu = eh), !(eB <= 0) && !(eO >= eu - eB * (1 - 0.9)))) return;
                            let eX = eh;
                            e_ || (eh = eO + eB);
                            let ej = e.clientWidth,
                                ez = e.clientHeight;
                            if (0 === ej || 0 === ez) {
                                ef = !0;
                                return;
                            }
                            let eH =
                                    Math.min(devicePixelRatio > 0 ? devicePixelRatio : 1, eN.surfacePixelRatio) *
                                    eN.surfaceScale,
                                eY = Math.round(ej * eH),
                                e$ = Math.round(ez * eH);
                            (e.width !== eY || e.height !== e$) && ((e.width = eY), (e.height = e$), (ef = !0));
                            let eV = e_ ? es : a.now(),
                                eq = (eV - es) / 1e3;
                            es = eV;
                            let eK = eD.renderState,
                                eQ = eK.agitation,
                                eJ = eK.motion,
                                eZ = eK.look,
                                e0 = (function (e, t) {
                                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : M;
                                    if (0 === t) return e;
                                    let i = Math.max(0, t),
                                        n = 1 + a.layerIntensity * i;
                                    return {
                                        ...e,
                                        layers: e.layers.map((e) => ({ ...e, intensity: e.intensity * n })),
                                        core: {
                                            ...e.core,
                                            radius: e.core.radius * (1 + a.coreRadius * i),
                                            glowIntensity: e.core.glowIntensity * (1 + a.glowIntensity * i),
                                        },
                                    };
                                })(
                                    {
                                        layers: eZ.layers.map((e) =>
                                            (function (e, t) {
                                                var a, i;
                                                let n,
                                                    r =
                                                        ((a = e),
                                                        (i = x(t)),
                                                        (n = a.agitation),
                                                        {
                                                            ...a,
                                                            opacity: R(a.opacity, n.opacity, i),
                                                            waveSpeed: R(a.waveSpeed, n.waveSpeed, i),
                                                            flowAmount: R(a.flowAmount, n.flowAmount, i),
                                                            spin: R(a.spin, n.spin, i),
                                                            maskOuter: R(a.maskOuter, n.maskOuter, i),
                                                            scale: R(a.scale, n.scale, i),
                                                            intensity: R(a.intensity, n.intensity, i),
                                                            glow: R(a.glow, n.glow, i),
                                                            tint: A(a.tint, n.tint, i),
                                                        }),
                                                    o = e.glowMaskFollow,
                                                    l = e.glowTintFollow;
                                                if (null == o && null == l) return r;
                                                let s = e.glowMaskOuter ?? e.maskOuter,
                                                    u = e.glowTint ?? e.tint;
                                                return {
                                                    ...r,
                                                    glowMaskOuter:
                                                        null != o ? s + (r.maskOuter - s) * o : r.glowMaskOuter,
                                                    glowMaskFollow: void 0,
                                                    glowTint: null != l ? A(u, r.tint, l) : r.glowTint,
                                                    glowTintFollow: void 0,
                                                };
                                            })(e, eQ),
                                        ),
                                        core: k(eZ.core, eQ),
                                        grade: eZ.grade,
                                    },
                                    eK.surge,
                                    eD.surge,
                                ),
                                e1 = e0.layers,
                                e2 = Math.min(e1.length, 8);
                            for (let e = 0; e < e2; e++) {
                                let a = e1[e];
                                G[e] = +("over" === a.blendMode);
                                let i = tV[a.channel];
                                ((l[3 * e] = i[0]),
                                    (l[3 * e + 1] = i[1]),
                                    (l[3 * e + 2] = i[2]),
                                    (s[3 * e] = tu(a.tint[0])),
                                    (s[3 * e + 1] = tu(a.tint[1])),
                                    (s[3 * e + 2] = tu(a.tint[2])),
                                    (u[e] = a.opacity),
                                    (h[e] = a.intensity),
                                    (f[e] = a.blackPoint),
                                    (m[e] = a.gamma),
                                    (g[e] = a.glow),
                                    (p[e] = a.glowTail),
                                    (w[e] = Math.max(1, Math.min(9, Math.round(a.glowReach)))),
                                    !eU &&
                                        w[e] > 5 &&
                                        null != en &&
                                        (function (e) {
                                            eU = !0;
                                            let a = (function (e) {
                                                let t = document.createElement("canvas");
                                                ((t.width = 256), (t.height = 256));
                                                let a = t.getContext("2d", { willReadFrequently: !0 });
                                                if (null == a) return null;
                                                a.drawImage(e, 0, 0, 256, 256);
                                                let { data: i } = a.getImageData(0, 0, 256, 256),
                                                    n = new Float32Array(256);
                                                for (let e = 0; e < 256; e++) n[e] = tu(e / 255);
                                                let r = new Float32Array(196608);
                                                for (let e = 0; e < 65536; e++)
                                                    for (let t = 0; t < 3; t++) r[3 * e + t] = n[i[4 * e + t]];
                                                return r;
                                            })(e);
                                            null != a &&
                                                (t.deleteTexture(eG),
                                                (eG = (function (e, t) {
                                                    let a = new Float32Array(1048576),
                                                        i = new Float32Array(196608),
                                                        n = new Float32Array(196608),
                                                        r = new Float32Array(256);
                                                    for (let e = 0; e < 4; e++) {
                                                        let o = 6 + e,
                                                            l = 0.25 * 2 ** (o - 1),
                                                            s = Math.max(
                                                                1,
                                                                Math.round((Math.sqrt(4 * l * l + 1) - 1) / 2),
                                                            );
                                                        i.set(t);
                                                        for (let e = 0; e < 3; e++)
                                                            (tO(i, n, s, !0, r), tO(n, i, s, !1, r));
                                                        let u = 65536 * e * 4;
                                                        for (let e = 0; e < 65536; e++)
                                                            ((a[u + 4 * e] = i[3 * e]),
                                                                (a[u + 4 * e + 1] = i[3 * e + 1]),
                                                                (a[u + 4 * e + 2] = i[3 * e + 2]),
                                                                (a[u + 4 * e + 3] = 1));
                                                    }
                                                    let o = e.createTexture();
                                                    return (
                                                        e.activeTexture(e.TEXTURE0 + 1),
                                                        e.bindTexture(e.TEXTURE_2D_ARRAY, o),
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
                                                        o
                                                    );
                                                })(t, a)),
                                                (ef = !0));
                                        })(en));
                                let n = a.glowTint ?? a.tint;
                                ((v[3 * e] = tu(n[0])),
                                    (v[3 * e + 1] = tu(n[1])),
                                    (v[3 * e + 2] = tu(n[2])),
                                    (y[e] = a.glowMaskOuter ?? a.maskOuter),
                                    (b[e] = a.whiteout),
                                    (S[e] = a.scale));
                                let r = (K.get(a.name) ?? 0) + eq * a.spin * eJ;
                                (K.set(a.name, r),
                                    (E[e] = a.rotation + r),
                                    (F[e] = a.maskInner),
                                    (P[e] = a.maskOuter),
                                    (L[e] = a.flowAmount),
                                    (C[e] = a.swirl),
                                    (I[e] = a.pull),
                                    (_[e] = a.noiseScale),
                                    (W[e] = a.noiseSeed));
                                let o = (q.get(a.name) ?? 0) + eq * a.waveSpeed * eJ;
                                (q.set(a.name, o), (O[e] = o), (D[e] = 0));
                            }
                            for (let e = 0; e < e2; e++) {
                                let t = e1[e].echoOf,
                                    a = e;
                                if (null != t) {
                                    for (let e = 0; e < e2; e++)
                                        if (e1[e].name === t) {
                                            a = e;
                                            break;
                                        }
                                }
                                ((U[e] = a), u[e] > 0.001 && (D[a] = 1));
                            }
                            (ey.begin(),
                                ey.uniform1i(ev("uLayerCount"), e2),
                                ey.uniform3fv(ev("uChannelMask[0]"), l),
                                ey.uniform3fv(ev("uTint[0]"), s),
                                ey.uniform1fv(ev("uOpacity[0]"), u),
                                ey.uniform1fv(ev("uIntensity[0]"), h),
                                ey.uniform1fv(ev("uBlackPoint[0]"), f),
                                ey.uniform1fv(ev("uGamma[0]"), m),
                                ey.uniform1fv(ev("uLayerGlow[0]"), g),
                                ey.uniform1fv(ev("uLayerGlowTail[0]"), p),
                                ey.uniform1iv(ev("uLayerGlowReach[0]"), w),
                                ey.uniform3fv(ev("uGlowTintLayer[0]"), v),
                                ey.uniform1fv(ev("uGlowMaskOuter[0]"), y),
                                ey.uniform1fv(ev("uWhiteout[0]"), b),
                                ey.uniform1fv(ev("uScale[0]"), S),
                                ey.uniform1fv(ev("uRotation[0]"), E),
                                ey.uniform1fv(ev("uMaskInner[0]"), F),
                                ey.uniform1fv(ev("uMaskOuter[0]"), P),
                                ey.uniform1fv(ev("uFlowAmount[0]"), L),
                                ey.uniform1fv(ev("uSwirl[0]"), C),
                                ey.uniform1fv(ev("uPull[0]"), I),
                                ey.uniform1fv(ev("uNoiseScale[0]"), _),
                                ey.uniform1fv(ev("uNoiseSeed[0]"), W),
                                ey.uniform1fv(ev("uFlowTime[0]"), O),
                                ey.uniform1iv(ev("uBlendMode[0]"), G),
                                ey.uniform1iv(ev("uFlowSource[0]"), U),
                                ey.uniform1iv(ev("uFlowNeeded[0]"), D));
                            let e3 = e0.core;
                            ((Q += eq * e3.noiseSpeed * eJ),
                                ey.uniform1f(ev("uCoreRadius"), e3.radius),
                                ey.uniform1f(ev("uCoreSoftness"), e3.softness),
                                ey.uniform1f(ev("uCoreNoise"), e3.noiseAmount),
                                ey.uniform1f(ev("uCoreNoiseScale"), e3.noiseScale),
                                ey.uniform1f(ev("uCoreTime"), Q),
                                ey.uniform3f(
                                    ev("uGlowTint"),
                                    tu(e3.glowTint[0]),
                                    tu(e3.glowTint[1]),
                                    tu(e3.glowTint[2]),
                                ),
                                ey.uniform1f(ev("uGlowIntensity"), e3.glowIntensity),
                                ey.uniform1f(ev("uGlowOffset"), e3.glowOffset),
                                ey.uniform1f(ev("uGlowWidth"), e3.glowWidth),
                                ey.uniform1f(ev("uGlowTail"), e3.glowTail),
                                ey.uniform1f(ev("uGlowWhiteout"), e3.glowWhiteout),
                                ey.uniform1f(ev("uSaturation"), e0.grade.saturation));
                            let e5 = eK.impacts,
                                e6 = Math.max(0, e5.length - 8),
                                e4 = 0;
                            for (let e = e6; e < e5.length; e++) {
                                let t = e5[e];
                                ((N[4 * e4] = t.angle),
                                    (N[4 * e4 + 1] = t.radius),
                                    (N[4 * e4 + 2] = Math.max(0, (eV - t.bornAt) / 1e3)),
                                    (N[4 * e4 + 3] = 1),
                                    e4++);
                            }
                            (ey.uniform1i(ev("uImpactCount"), e4),
                                ey.uniform4fv(ev("uImpact[0]"), N),
                                ey.uniform1f(ev("uImpactLife"), 0.8),
                                ey.uniform1f(ev("uImpactRingSpeed"), 0.55),
                                ey.uniform1f(ev("uImpactRingWidth"), 0.035),
                                ey.uniform1f(ev("uImpactSoften"), 3),
                                ey.uniform1f(ev("uImpactEase"), 2.5),
                                ey.uniform1f(ev("uImpactNoise"), 0.12),
                                ey.uniform1f(ev("uImpactPush"), 0.035),
                                ey.uniform1f(ev("uImpactFlare"), 1.4),
                                ey.uniform1f(ev("uImpactFlareSize"), 0.09),
                                ey.uniform1f(ev("uImpactLift"), 0),
                                ey.uniform1f(ev("uImpactBulge"), 0.04));
                            let e8 = eK.pulses,
                                e9 = Math.max(0, e8.length - 6),
                                e7 = 0;
                            for (let e = e9; e < e8.length; e++) {
                                let t = e8[e];
                                ((X[2 * e7] = (eV - t.bornAt) / 1e3), (X[2 * e7 + 1] = t.gain));
                                let a = z.get(t);
                                (null == a && ((a = H++ % 64), z.set(t, a)), (j[e7] = a), e7++);
                            }
                            let te = eD.pulse;
                            (ey.uniform1i(ev("uPulseCount"), e7),
                                ey.uniform2fv(ev("uPulse[0]"), X),
                                ey.uniform1fv(ev("uPulseSeed[0]"), j),
                                ey.uniform1f(ev("uPulseLife"), te.life),
                                ey.uniform1f(ev("uPulseAttack"), te.attack),
                                ey.uniform1f(ev("uPulseSpeed"), te.speed),
                                ey.uniform1f(ev("uPulseWidth"), te.width),
                                ey.uniform1f(ev("uPulseSoften"), te.soften),
                                ey.uniform1f(ev("uPulseFade"), te.fade),
                                ey.uniform1f(ev("uPulseEase"), te.ease),
                                ey.uniform1f(ev("uPulseLift"), te.lift),
                                ey.uniform1f(ev("uPulsePush"), te.push),
                                ey.uniform1f(ev("uPulseBrightness"), te.brightness),
                                ey.uniform1f(ev("uPulseRipple"), te.ripple),
                                ey.uniform1f(ev("uPulseRippleScale"), te.rippleScale),
                                ey.uniform1f(ev("uPulseSpin"), te.spin));
                            let tt = eD.wake,
                                ta = 0 === tt.push && 0 === tt.glow ? tq : eK.wakes,
                                ti = Math.max(0, ta.length - 24),
                                tn = 0;
                            for (let e = ti; e < ta.length; e++) {
                                let t = ta[e];
                                ((Y[4 * tn] = t.x),
                                    (Y[4 * tn + 1] = t.y),
                                    (Y[4 * tn + 2] = t.vx),
                                    (Y[4 * tn + 3] = t.vy),
                                    (V[4 * tn] = t.strength),
                                    (V[4 * tn + 1] = t.spacing),
                                    (V[4 * tn + 2] = t.widthScale),
                                    (V[4 * tn + 3] = +!!t.head + 2 * !!t.tail),
                                    tn++);
                            }
                            (ey.uniform1i(ev("uWakeCount"), tn),
                                ey.uniform4fv(ev("uWake[0]"), Y),
                                ey.uniform4fv(ev("uWakeShape[0]"), V),
                                ey.uniform1f(ev("uWakePush"), tt.push),
                                ey.uniform1f(ev("uWakeWidth"), tt.width),
                                ey.uniform1f(ev("uWakeLength"), tt.length),
                                ey.uniform1f(ev("uWakeGlow"), tt.glow));
                            let tr = eK.fx,
                                to = 1 + (tr.heatBoost - 1) * eQ,
                                tl = tr.chroma * to,
                                ts = eq * eJ;
                            ((J = (J + (ts * tr.waveSpeed) / Math.max(0.01, tr.waveLength)) % 1) < 0 && (J += 1),
                                (Z = (Z + ts / Math.max(0.1, tr.waveSwellSeconds)) % 1));
                            let tf = (1 - tr.waveSwell * (0.5 + 0.5 * Math.cos(Z * Math.PI * 2))) * to,
                                tc = Math.round(tr.waveSpiral),
                                td = tr.wave > 0 || tr.waveLift > 0 ? tr.chromaWave * tf : 0;
                            (ey.uniform1f(ev("uWave"), tr.wave * tf),
                                ey.uniform1f(ev("uWaveLift"), tr.waveLift * tf),
                                ey.uniform1f(ev("uWaveLength"), tr.waveLength),
                                ey.uniform1f(ev("uWaveCycle"), J),
                                ey.uniform1f(ev("uWaveSpiral"), tc),
                                ey.uniform1f(ev("uWaveReach"), tr.waveReach));
                            let tm = tr.flare * to;
                            ee += eq * tr.flareOrbit * eJ;
                            let tg = eK.flash,
                                tp =
                                    null != $ &&
                                    eN.lens &&
                                    (tl > 1e-4 || td > 1e-4 || tm > 0.001 || tr.vignette > 0.001 || tg > 0.001),
                                tw = (function (e, t, a, i, r) {
                                    if (null == B) return 0;
                                    ((o.dt = i),
                                        (o.now = a),
                                        (o.tuning = e),
                                        (o.wake = d.current.wake),
                                        (o.agitation = r.agitation),
                                        (o.coreRadius = t.radius),
                                        (o.impacts = r.impacts),
                                        (o.pulses = r.pulses),
                                        (o.wakes = r.wakes));
                                    let l = n.step(o);
                                    return (
                                        ex.begin(),
                                        ex.uniform3f(
                                            eT("uBody"),
                                            tu(e.bodyTint[0]),
                                            tu(e.bodyTint[1]),
                                            tu(e.bodyTint[2]),
                                        ),
                                        ex.uniform3f(
                                            eT("uRim"),
                                            tu(t.glowTint[0]) * e.rimIntensity,
                                            tu(t.glowTint[1]) * e.rimIntensity,
                                            tu(t.glowTint[2]) * e.rimIntensity,
                                        ),
                                        ex.uniform1f(eT("uLumpiness"), e.lumpiness),
                                        ex.uniform1f(eT("uRimWidth"), e.rimWidth),
                                        ex.uniform1f(eT("uRimWrap"), e.rimWrap),
                                        ex.uniform1f(eT("uRimFalloff"), e.rimFalloff),
                                        ex.uniform1f(eT("uCoreRadius"), t.radius),
                                        l
                                    );
                                })(eD.rocks, e3, eV, eq, eK);
                            if (tp) {
                                (eA.begin(),
                                    eA.uniform1f(eI("uAspect"), e.width / e.height),
                                    eA.uniform1f(eI("uChroma"), tl),
                                    eA.uniform1f(eI("uChromaWave"), td),
                                    eA.uniform1f(eI("uCoreRadius"), e3.radius),
                                    eA.uniform1f(eI("uWaveLength"), tr.waveLength),
                                    eA.uniform1f(eI("uWaveCycle"), J),
                                    eA.uniform1f(eI("uWaveSpiral"), tc),
                                    eA.uniform1f(eI("uWaveReach"), tr.waveReach),
                                    eA.uniform1f(eI("uChromaStart"), tr.chromaStart),
                                    eA.uniform1f(eI("uChromaFalloff"), tr.chromaFalloff),
                                    eA.uniform1f(eI("uChromaTwist"), tr.chromaTwist),
                                    eA.uniform1i(
                                        eI("uChromaSamples"),
                                        Math.max(3, Math.min(9, Math.round(tr.chromaSamples))),
                                    ),
                                    eA.uniform1f(eI("uFlare"), tm),
                                    eA.uniform3f(eI("uFlareTint"), tr.flareTint[0], tr.flareTint[1], tr.flareTint[2]));
                                let t = tr.flareAngle + ee,
                                    a = 0;
                                for (let e = e6; e < e5.length; e++) {
                                    let i = e5[e],
                                        n = Math.max(0, (eV - i.bornAt) / 1e3) / 0.8;
                                    if (n >= 1) continue;
                                    let r = Math.atan2(Math.sin(t - i.angle), Math.cos(t - i.angle));
                                    a += Math.exp(-r * r * 4) * (1 - n) * (1 - n);
                                }
                                let i =
                                    Math.max(tr.flareDistance, 1 + e3.noiseAmount) * e3.radius * (1 + 0.04 * a) * 0.32;
                                (eA.uniform2f(eI("uFlareSource"), Math.cos(t) * i, Math.sin(t) * i),
                                    eA.uniform1f(eI("uFlareSize"), tr.flareSource),
                                    eA.uniform1f(eI("uFlareRays"), tr.flareRays),
                                    eA.uniform1f(eI("uFlareGhosts"), tr.flareGhosts),
                                    eA.uniform1f(eI("uFlareHalo"), tr.flareHalo),
                                    eA.uniform1f(eI("uFlareTurn"), -ee),
                                    eA.uniform1f(eI("uVignette"), tr.vignette),
                                    eA.uniform1f(eI("uFlash"), Math.min(1, tg)));
                            }
                            let tv = 0;
                            (eN.settleTolerance > 0 &&
                                (ep =
                                    (function (e) {
                                        let t = 7 * e,
                                            a = !1;
                                        for (let e = 0; e < t; e++) r[e] !== eg[e] && ((eg[e] = r[e]), (a = !0));
                                        return a;
                                    })(tw) ||
                                    ey.moved() ||
                                    ex.moved() ||
                                    (tp && eA.moved())
                                        ? 0
                                        : ep + 1) < 4 &&
                                (tv = eN.settleTolerance),
                            !(
                                !ef &&
                                tp === em &&
                                !ey.differs(tv) &&
                                !(null != B && ex.differs(tv)) &&
                                !(tp && eA.differs(tv)) &&
                                ((eR = tw), (eM = tv), eR === ed && tS(r, ec, 0, 7 * eR, eM))
                            )) &&
                                ((ef = !1),
                                (ep = 0),
                                e_ || (eh = eO - eX < eB ? eX + eB : eO + eB),
                                (em = tp),
                                (ed = tw),
                                ec.set(r),
                                t.viewport(0, 0, e.width, e.height),
                                t.useProgram(c),
                                t.bindVertexArray(el),
                                ey.send(t),
                                tp &&
                                    ((ew = e.width),
                                    (eb = e.height),
                                    (ew !== eL || eb !== eC) &&
                                        ((eL = ew),
                                        (eC = eb),
                                        t.activeTexture(t.TEXTURE0 + 2),
                                        t.bindTexture(t.TEXTURE_2D, eF),
                                        t.texImage2D(
                                            t.TEXTURE_2D,
                                            0,
                                            t.RGBA8,
                                            ew,
                                            eb,
                                            0,
                                            t.RGBA,
                                            t.UNSIGNED_BYTE,
                                            null,
                                        ),
                                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                        t.bindFramebuffer(t.FRAMEBUFFER, eP),
                                        t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, eF, 0),
                                        t.bindFramebuffer(t.FRAMEBUFFER, null)),
                                    t.bindFramebuffer(t.FRAMEBUFFER, eP)),
                                t.clearColor(0, 0, 0, 0),
                                t.clear(t.COLOR_BUFFER_BIT),
                                t.drawArrays(t.TRIANGLES, 0, 3),
                                null != B &&
                                    (t.useProgram(B),
                                    t.bindVertexArray(eS),
                                    t.bindBuffer(t.ARRAY_BUFFER, ek),
                                    t.bufferSubData(t.ARRAY_BUFFER, 0, n.instances, 0, 7 * tw),
                                    ex.send(t),
                                    t.drawArraysInstanced(t.TRIANGLES, 0, 6, tw)),
                                tp &&
                                    null != $ &&
                                    (t.bindFramebuffer(t.FRAMEBUFFER, null),
                                    t.useProgram($),
                                    t.bindVertexArray(eE),
                                    t.activeTexture(t.TEXTURE0 + 2),
                                    t.bindTexture(t.TEXTURE_2D, eF),
                                    eA.send(t),
                                    t.disable(t.BLEND),
                                    t.clear(t.COLOR_BUFFER_BIT),
                                    t.drawArrays(t.TRIANGLES, 0, 3),
                                    t.enable(t.BLEND)),
                                eD.echoes &&
                                    (function (a, i, n, r, o) {
                                        for (let l of a) {
                                            if (et.has(l)) continue;
                                            let a = Math.max(0.01, r.life),
                                                s = (n - l.bornAt) / 1e3;
                                            if (s < 0) continue;
                                            let u = 1 - Math.pow(1 - Math.min(1, s / a), Math.max(1, r.ease));
                                            if (u < 0.75) continue;
                                            et.add(l);
                                            let h = i.radius + r.speed * a * u,
                                                f = r.width * (1 + s * r.soften);
                                            t.bindFramebuffer(t.DRAW_FRAMEBUFFER, o);
                                            for (let a = 0; a < 12; a++) {
                                                let i = (a / 12) * Math.PI * 2;
                                                for (let n = 0; n < tY.length; n++) {
                                                    let r = (h + tY[n] * f) * 0.32,
                                                        o = Math.round((T["0"] + Math.cos(i) * r) * e.width),
                                                        l = Math.round((T["1"] + Math.sin(i) * r) * e.height),
                                                        s = a * tY.length + n;
                                                    ((ei[s] = o < 0 || l < 0 || o >= e.width || l >= e.height ? 0 : 1),
                                                        1 === ei[s] &&
                                                            t.blitFramebuffer(
                                                                o,
                                                                l,
                                                                o + 1,
                                                                l + 1,
                                                                s,
                                                                0,
                                                                s + 1,
                                                                1,
                                                                t.COLOR_BUFFER_BIT,
                                                                t.NEAREST,
                                                            ));
                                                }
                                            }
                                            (t.bindFramebuffer(t.FRAMEBUFFER, o),
                                                t.readPixels(0, 0, t$, 1, t.RGBA, t.UNSIGNED_BYTE, ea),
                                                t.bindFramebuffer(t.FRAMEBUFFER, null));
                                            let c = [0, 0, 0];
                                            for (let e = 0; e < 12; e++) {
                                                let t = -1,
                                                    a = 0,
                                                    i = 0,
                                                    n = 0;
                                                for (let r = 0; r < tY.length; r++) {
                                                    let o = e * tY.length + r;
                                                    if (0 === ei[o]) continue;
                                                    let l = Math.max(ea[4 * o], ea[4 * o + 1], ea[4 * o + 2]);
                                                    l > t &&
                                                        ((t = l),
                                                        (a = ea[4 * o]),
                                                        (i = ea[4 * o + 1]),
                                                        (n = ea[4 * o + 2]));
                                                }
                                                t < 0 ||
                                                    ((c[0] += tu(a / 255)),
                                                    (c[1] += tu(i / 255)),
                                                    (c[2] += tu(n / 255)));
                                            }
                                            let d = Math.max(c[0], c[1], c[2]);
                                            d < 0.001 || (l.color = [th(c[0] / d), th(c[1] / d), th(c[2] / d)]);
                                        }
                                    })(e8, e3, eV, eD.pulse, eW));
                        },
                        showPlate: function (e) {
                            let a, i;
                            ((a = t.createTexture()),
                                t.activeTexture(t.TEXTURE0 + 0),
                                t.bindTexture(t.TEXTURE_2D, a),
                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR),
                                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
                                t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE),
                                t.texImage2D(t.TEXTURE_2D, 0, t.SRGB8_ALPHA8, t.RGBA, t.UNSIGNED_BYTE, e),
                                t.generateMipmap(t.TEXTURE_2D),
                                (eO = a),
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
                                (eG = i),
                                t.useProgram(c),
                                t.uniform1i(ev("uPlate"), 0),
                                t.uniform1i(ev("uWideGlow"), 1),
                                (ef = !0));
                        },
                        showEggs: eD,
                        rocks: null != B,
                        release() {
                            (null != eO && t.deleteTexture(eO),
                                null != eG && t.deleteTexture(eG),
                                t.deleteBuffer(eu),
                                t.deleteBuffer(eR),
                                t.deleteBuffer(ek),
                                t.deleteVertexArray(el),
                                t.deleteVertexArray(eS),
                                t.deleteVertexArray(eE),
                                t.deleteTexture(eF),
                                t.deleteTexture(eM),
                                t.deleteFramebuffer(eP),
                                t.deleteRenderbuffer(e_),
                                t.deleteFramebuffer(eW),
                                t.deleteProgram(c),
                                null != B && t.deleteProgram(B),
                                null != $ && t.deleteProgram($));
                        },
                    }
                );
            }
            function eA() {
                null != ew && null != en && (ew.showPlate(en), ev(), (ev = a.watch(ey)), ey());
            }
            function eS(e) {
                (e.preventDefault(), cancelAnimationFrame(eo), (eu = a.now()), (ew = null));
            }
            function eR() {
                let e = tB(t);
                if (null == (ew = ex(d.current.quality.lens && !e))) {
                    t.isContextLost() || d.current.onDegrade("still");
                    return;
                }
                (e && d.current.onDegrade("low"), (a.paused && a.now() === eu) || (es = a.now()));
                try {
                    eA();
                } catch (e) {
                    ts.error("plate failed to load", e);
                }
            }
            function ek() {
                eb();
            }
            function eT() {
                a.paused && eb();
            }
            let eM = new (i.defaultView ?? window).ResizeObserver(eT);
            eM.observe(e);
            let eE = () => {};
            function eF() {
                ((el = !0),
                    cancelAnimationFrame(eo),
                    ev(),
                    eM.disconnect(),
                    eE(),
                    e.removeEventListener("webglcontextlost", eS),
                    e.removeEventListener("webglcontextrestored", eR),
                    i.removeEventListener("visibilitychange", ek),
                    ew?.release(),
                    (ew = null),
                    tm(e, t));
            }
            return (
                (!(function e() {
                    let t = matchMedia(`(resolution: ${devicePixelRatio}dppx)`);
                    function a() {
                        (eE(), e(), eT());
                    }
                    (t.addEventListener("change", a), (eE = () => t.removeEventListener("change", a)));
                })(),
                e.addEventListener("webglcontextlost", eS),
                e.addEventListener("webglcontextrestored", eR),
                i.addEventListener("visibilitychange", ek),
                (ew = ex(d.current.quality.lens)),
                (es = a.now()),
                null != ew || t.isContextLost())
                    ? (!(async function () {
                          try {
                              let e = await tg(tw);
                              if (el) return;
                              ((en = e), eA());
                          } catch (e) {
                              ts.error("plate failed to load", e);
                          }
                      })(),
                      ew?.rocks === !0 &&
                          (async function () {
                              try {
                                  let e = await (tF ??= (async function () {
                                      try {
                                          let e = await (async function (e) {
                                              let t = await Promise.all(
                                                      e.map(async (e) => {
                                                          try {
                                                              return await tg(e.src);
                                                          } catch (t) {
                                                              return (
                                                                  ts.error("easter egg failed to load", e.id, t), null
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
                                                              o = document.createElement("canvas");
                                                          ((o.width = Math.max(1, Math.round(i * r))),
                                                              (o.height = Math.max(1, Math.round(n * r))));
                                                          let l = o.getContext("2d", { willReadFrequently: !0 });
                                                          if (null == l) return !1;
                                                          l.drawImage(e, 0, 0, o.width, o.height);
                                                          let s = l.getImageData(0, 0, o.width, o.height).data,
                                                              u = (function (e, t) {
                                                                  let { width: a, height: i } = e,
                                                                      n = a,
                                                                      r = i,
                                                                      o = -1,
                                                                      l = -1;
                                                                  for (let e = 0; e < i; e++)
                                                                      for (let i = 0; i < a; i++)
                                                                          0 !== t[(e * a + i) * 4 + 3] &&
                                                                              ((n = Math.min(n, i)),
                                                                              (r = Math.min(r, e)),
                                                                              (o = Math.max(o, i)),
                                                                              (l = Math.max(l, e)));
                                                                  return o < n
                                                                      ? null
                                                                      : {
                                                                            x: n,
                                                                            y: r,
                                                                            width: o - n + 1,
                                                                            height: l - r + 1,
                                                                        };
                                                              })(o, s);
                                                          if (null == u) return !1;
                                                          let { x: h, y: f, width: c, height: d } = u,
                                                              m = 256 / 1.5 / Math.max(c, d),
                                                              g = document.createElement("canvas");
                                                          ((g.width = 256), (g.height = 256));
                                                          let p = g.getContext("2d", { willReadFrequently: !0 });
                                                          if (null == p) return !1;
                                                          p.imageSmoothingQuality = "high";
                                                          let w = c * m,
                                                              v = d * m;
                                                          p.drawImage(
                                                              o,
                                                              h,
                                                              f,
                                                              c,
                                                              d,
                                                              (256 - w) / 2,
                                                              (256 - v) / 2,
                                                              w,
                                                              v,
                                                          );
                                                          let y = (function (e) {
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
                                                                  (tE(t, 256, i), tE(a, 256, i));
                                                                  let n = new Float64Array(65536);
                                                                  for (let e = 0; e < 65536; e++)
                                                                      n[e] = Math.sqrt(t[e]) - Math.sqrt(a[e]);
                                                                  return (
                                                                      (function (e) {
                                                                          let t = new Float64Array(256),
                                                                              a = Array.from({ length: 7 }, (e, t) =>
                                                                                  Math.exp(
                                                                                      -(((t - 3) / (0.6 * 3)) ** 2),
                                                                                  ),
                                                                              ),
                                                                              i = a.reduce((e, t) => e + t, 0);
                                                                          for (let [n, r] of [
                                                                              [1, 256],
                                                                              [256, 1],
                                                                          ])
                                                                              for (let o = 0; o < 256; o++) {
                                                                                  let l = o * r;
                                                                                  for (let r = 0; r < 256; r++) {
                                                                                      let o = 0;
                                                                                      for (let t = -3; t <= 3; t++)
                                                                                          o +=
                                                                                              e[
                                                                                                  l +
                                                                                                      Math.max(
                                                                                                          0,
                                                                                                          Math.min(
                                                                                                              255,
                                                                                                              r + t,
                                                                                                          ),
                                                                                                      ) *
                                                                                                          n
                                                                                              ] * a[t + 3];
                                                                                      t[r] = o / i;
                                                                                  }
                                                                                  for (let a = 0; a < 256; a++)
                                                                                      e[l + a * n] = t[a];
                                                                              }
                                                                      })(n),
                                                                      n
                                                                  );
                                                              })(p.getImageData(0, 0, 256, 256).data),
                                                              b = 3 / 256;
                                                          for (let e = 0; e < 65536; e++)
                                                              t[a + e] = Math.max(-32, Math.min(32, y[e])) * b;
                                                          return !0;
                                                      })(e, a, 256 * i * 256) &&
                                                      i++;
                                              return 0 === i ? null : { layers: i, sdf: a.subarray(0, 256 * i * 256) };
                                          })(tT);
                                          return (e?.layers !== tT.length && (tF = null), e);
                                      } catch (e) {
                                          throw ((tF = null), e);
                                      }
                                  })());
                                  if (el || null == e) return;
                                  ((er = e), ew?.showEggs(e), (o.eggLayers = e.layers));
                              } catch (e) {
                                  ts.error("easter eggs failed to bake", e);
                              }
                          })())
                    : d.current.onDegrade("still"),
                eF
            );
        }, [d, a]),
        (0, l.jsx)("div", {
            className: tH.H,
            children: (0, l.jsx)("canvas", { ref: c, className: tH.M, "aria-hidden": !0 }),
        })
    );
}
var tQ = a(963550);
let tJ = [
    { transform: "scale(1)" },
    { transform: "scale(0.7)", offset: 0.25 },
    { transform: "scale(1.25)", offset: 0.6 },
    { transform: "scale(1)" },
];
var tZ = a(60135);
function t0(e) {
    let t,
        a,
        i,
        {
            director: n,
            tuning: r,
            quality: o,
            echoes: u,
            still: h,
            onDegrade: f,
            onToss: c,
            label: m,
            ringTarget: p,
        } = e,
        w = s.useRef(null),
        v = s.useMemo(() => (h ? n.renderState.look : null), [h, n]),
        b = s.useRef(null),
        x = s.useRef(null),
        A =
            ((t = s.useRef(null)),
            (a = s.useRef(null)),
            (i = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion)),
            s.useLayoutEffect(() => {
                let e = b.current,
                    n = t.current,
                    r = a.current;
                if (null != e && null != n && null != r)
                    return (
                        e.addEventListener("pointermove", o),
                        e.addEventListener("pointerenter", o),
                        e.addEventListener("pointerdown", s),
                        e.addEventListener("pointerleave", l),
                        () => {
                            (e.removeEventListener("pointermove", o),
                                e.removeEventListener("pointerenter", o),
                                e.removeEventListener("pointerdown", s),
                                e.removeEventListener("pointerleave", l));
                        }
                    );
                function o(t) {
                    if (null == n || null == e) return;
                    if ("touch" === t.pointerType) return void n.style.setProperty("opacity", "0");
                    let a = e.getBoundingClientRect(),
                        i = ((t.clientX - a.left) / a.width) * e.offsetWidth,
                        r = ((t.clientY - a.top) / a.height) * e.offsetHeight;
                    (n.style.setProperty("transform", `translate(${i - 14}px, ${r - 14}px)`),
                        n.style.setProperty("opacity", "1"));
                }
                function l() {
                    n?.style.setProperty("opacity", "0");
                }
                function s(e) {
                    (o(e),
                        0 === e.button &&
                            (i ||
                                "touch" === e.pointerType ||
                                r?.animate(tJ, { duration: 240, easing: "cubic-bezier(0.2, 0.8, 0.3, 1)" })));
                }
            }, [i, b]),
            (0, l.jsx)("div", {
                ref: t,
                className: tQ.e,
                "aria-hidden": !0,
                children: (0, l.jsx)(g.OrbsIcon, {
                    ref: a,
                    className: tQ.K,
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "rgba(255, 255, 255, 0.6)",
                }),
            })),
        S = s.useCallback((e) => {
            let t = e.currentTarget.getBoundingClientRect();
            return [e.clientX - t.left, e.clientY - t.top];
        }, []),
        R = s.useCallback(
            (e) => {
                if (0 !== e.button) return;
                e.currentTarget.setPointerCapture(e.pointerId);
                let [t, a] = S(e);
                (w.current?.press(t, a), (x.current = { releasedAt: null }));
            },
            [S],
        ),
        k = s.useCallback(
            (e) => {
                let [t, a] = S(e);
                w.current?.move(t, a);
            },
            [S],
        ),
        T = s.useCallback(() => {
            (null != x.current && (x.current.releasedAt = performance.now()), w.current?.release());
        }, []),
        M = s.useCallback(() => {
            ((x.current = null), w.current?.release());
        }, []),
        E = s.useCallback((e) => {
            ("Enter" === e.key || " " === e.key) &&
                (x.current?.releasedAt != null && (x.current = null),
                e.repeat && "Enter" === e.key && e.preventDefault());
        }, []),
        F = s.useCallback((e) => {
            let t = x.current?.releasedAt;
            if (null != t && ((x.current = null), performance.now() - t < 1e3)) return;
            let a = e.currentTarget.clientWidth,
                i = Math.random() * Math.PI * 2,
                n = 0.42 * a;
            w.current?.tossOnce(a / 2 + Math.cos(i) * n, a / 2 + Math.sin(i) * n);
        }, []);
    return (0, l.jsx)(eq.vN, {
        ringTarget: p,
        offset: 4,
        children: (0, l.jsxs)("button", {
            type: "button",
            className: tZ.D,
            ref: b,
            "aria-label": m,
            onPointerDown: R,
            onPointerMove: k,
            onPointerUp: T,
            onPointerCancel: M,
            onLostPointerCapture: T,
            onKeyDown: E,
            onClick: F,
            children: [
                A,
                null != v
                    ? (0, l.jsx)(tb, { look: v })
                    : (0, l.jsx)(tK, {
                          renderState: n.renderState,
                          clock: n.clock,
                          pulse: r.pulse,
                          wake: r.wake,
                          surge: r.surge,
                          rocks: r.rocks,
                          quality: o,
                          echoes: u,
                          onDegrade: f,
                      }),
                (0, l.jsx)(tl, {
                    ref: w,
                    director: n,
                    motesPerOrb: r.motesPerOrb,
                    surge: r.surge,
                    wake: r.wake,
                    pixelRatio: o.orbPixelRatio,
                    fixedCoreRadius: v?.core.radius ?? null,
                    onToss: c,
                }),
            ],
        }),
    });
}
var t1 = a(333007);
let t2 = `#version 300 es
in vec2 aCorner;
void main() {
  gl_Position = vec4(aCorner, 0.0, 1.0);
}
`,
    t3 = `#version 300 es
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

${tP}
${tL}

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
var t5 = a(453748);
function t6(e) {
    let { director: t, voidRef: a, host: i } = e,
        n = s.useRef(null),
        r = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion);
    return (s.useEffect(() => {
        if (r) return;
        let e = n.current;
        if (null == e) return;
        let o = e.getContext("webgl2", { alpha: !0, premultipliedAlpha: !0, antialias: !1 });
        if (null == o || o.isContextLost()) return;
        let { clock: l } = t,
            s = new Float32Array(12),
            u = new Float32Array(6),
            h = new Float32Array(18),
            f = new WeakMap(),
            c = 0,
            d = !1,
            m = "",
            g = () => {},
            p = null;
        function w() {
            let n = tf(o, t2, t3);
            if (null == n) return null;
            let r = o.createBuffer();
            (o.bindBuffer(o.ARRAY_BUFFER, r),
                o.bufferData(o.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), o.STATIC_DRAW));
            let g = o.createVertexArray();
            o.bindVertexArray(g);
            let p = o.getAttribLocation(n, "aCorner");
            (o.enableVertexAttribArray(p), o.vertexAttribPointer(p, 2, o.FLOAT, !1, 0, 0));
            let w = tc(o, n);
            return {
                render: function () {
                    let r = a.current;
                    if (null == r) return;
                    let p = t.renderState,
                        v = l.now(),
                        y = 0,
                        b = p.pulses;
                    for (let e = Math.max(0, b.length - 6); e < b.length; e++) {
                        let t = b[e],
                            a = (v - t.bornAt) / 1e3;
                        if (a < 0 || a >= 1.2) continue;
                        ((s[2 * y] = a), (s[2 * y + 1] = t.gain));
                        let i = f.get(t);
                        (null == i && ((i = c++ % 64), f.set(t, i)), (u[y] = i));
                        let n = t.color ?? p.look.core.glowTint;
                        for (let e = 0; e < 3; e++) h[3 * y + e] = tu(n[e]);
                        y++;
                    }
                    if (0 === y) {
                        d && (o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT), (d = !1));
                        return;
                    }
                    let x = i.getBoundingClientRect(),
                        A = r.getBoundingClientRect(),
                        S = i.offsetWidth > 0 ? x.width / i.offsetWidth : 1,
                        R = -x.left / S,
                        k = -x.top / S,
                        M = window.innerWidth / S,
                        E = window.innerHeight / S,
                        F = `${R.toFixed(1)},${k.toFixed(1)},${M.toFixed(1)},${E.toFixed(1)}`;
                    F !== m &&
                        ((e.style.left = `${R}px`),
                        (e.style.top = `${k}px`),
                        (e.style.width = `${M}px`),
                        (e.style.height = `${E}px`),
                        (m = F));
                    let P = 0.5 * Math.min(window.devicePixelRatio > 0 ? window.devicePixelRatio : 1, 2),
                        L = Math.max(1, Math.round(window.innerWidth * P)),
                        C = Math.max(1, Math.round(window.innerHeight * P));
                    (e.width !== L || e.height !== C) && ((e.width = L), (e.height = C));
                    let I = (A.left + T["0"] * A.width) * P,
                        _ = (A.top + T["1"] * A.height) * P,
                        W = Math.max(1, 0.32 * A.width * P),
                        O = Math.hypot(Math.max(I, L - I), Math.max(_, C - _)) / W,
                        G = p.look.core;
                    (o.viewport(0, 0, L, C),
                        o.clearColor(0, 0, 0, 0),
                        o.clear(o.COLOR_BUFFER_BIT),
                        o.useProgram(n),
                        o.bindVertexArray(g),
                        o.uniform2f(w("uCenter"), I, _),
                        o.uniform1f(w("uRim"), W),
                        o.uniform1f(w("uCanvasHeight"), C),
                        o.uniform1f(w("uCoreRadius"), G.radius),
                        o.uniform1i(w("uPulseCount"), y),
                        o.uniform2fv(w("uPulse[0]"), s),
                        o.uniform1fv(w("uPulseSeed[0]"), u),
                        o.uniform3fv(w("uPulseColor[0]"), h));
                    let U = D.speed * D.life;
                    (o.uniform1f(w("uRingLife"), D.life),
                        o.uniform1f(w("uRingReach"), U),
                        o.uniform1f(w("uRingEase"), D.ease),
                        o.uniform1f(w("uLife"), 1.2),
                        o.uniform1f(w("uDrift"), Math.max(0, 0.5 * O - G.radius - U)),
                        o.uniform1f(w("uLag"), 0.8),
                        o.uniform1f(w("uWidth"), 0.04),
                        o.uniform1f(w("uSoften"), 6),
                        o.uniform1f(w("uFade"), 3),
                        o.uniform1f(w("uBrightness"), 0.45),
                        o.uniform1f(w("uHaze"), 2),
                        o.uniform1f(w("uHazeAmount"), 0.15),
                        o.uniform1f(w("uRipple"), D.ripple),
                        o.uniform1f(w("uRippleScale"), D.rippleScale),
                        o.uniform1f(w("uSpin"), D.spin),
                        o.drawArrays(o.TRIANGLES, 0, 3),
                        (d = !0));
                },
                release() {
                    (o.deleteVertexArray(g), o.deleteBuffer(r), o.deleteProgram(n));
                },
            };
        }
        function v(e) {
            (e.preventDefault(), g(), (p = null));
        }
        function y() {
            ((p = w()), (d = !1), null != p && (g = l.run(p.render)));
        }
        return (
            e.addEventListener("webglcontextlost", v),
            e.addEventListener("webglcontextrestored", y),
            null != (p = w()) && (g = l.run(p.render)),
            function () {
                (g(),
                    e.removeEventListener("webglcontextlost", v),
                    e.removeEventListener("webglcontextrestored", y),
                    p?.release(),
                    (p = null),
                    tm(e, o));
            }
        );
    }, [r, t, a, i]),
    r)
        ? null
        : (0, t1.createPortal)((0, l.jsx)("canvas", { ref: n, className: t5.J, "aria-hidden": !0 }), i);
}
let t4 = {
        surfaceScale: 1,
        surfacePixelRatio: 2,
        surfaceFps: 0,
        settleTolerance: 0,
        lens: !0,
        echoes: !0,
        shake: !0,
        orbPixelRatio: 2,
    },
    t8 = {
        surfaceScale: 0.5,
        surfacePixelRatio: 1,
        surfaceFps: 30,
        settleTolerance: 1 / 2048,
        lens: !1,
        echoes: !1,
        shake: !1,
        orbPixelRatio: 1,
    },
    t9 = [
        "--custom-void-shake-x",
        "--custom-void-shake-y",
        "--custom-void-shake-turn",
        "--custom-void-recoil",
        "--custom-void-swell",
        "--custom-void-cover",
    ];
function t7(e, t) {
    let a = t / 2;
    return e <= a ? e : a + a * Math.tanh((e - a) / a);
}
var ae = a(70283),
    at = a(982240),
    aa = a(442928),
    ai = a(422533),
    an = a(164562),
    ar = a(192308);
a(475489);
var ao = a(371902),
    al = a(792996),
    as = a(227273);
function au(e) {
    var t;
    let i,
        n,
        r,
        o,
        u,
        h,
        { onClose: f, overflowHost: c } = e,
        x = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        [A, S] = s.useState(tX),
        R = s.useCallback((e) => {
            S((t) => ("still" === t ? t : e));
        }, []),
        k = "full" !== A || x ? K : q,
        M = "full" === A ? t4 : t8,
        F = !x && M.echoes,
        P = (0, b.j)(),
        L = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                [a] = s.useState(() => new Y(G, e));
            return (
                s.useEffect(() => a.setTuning(e), [a, e]),
                s.useEffect(() => a.clock.setPaused(t), [a, t]),
                s.useEffect(() => a.clock.run((e) => a.step(e)), [a]),
                a
            );
        })(k.director, !P);
    ((i = (0, d.bG)(eg, ep)),
        s.useEffect(() => {
            let e;
            if (i) return;
            let t = (0, Q.v)();
            if (null == t) return;
            let a =
                ((en += 1),
                null != er && (clearTimeout(er), (er = null)),
                (e = !0),
                () => {
                    !e || ((e = !1), (en -= 1) > 0 || (er = setTimeout(el, 3e4)));
                });
            function n() {
                return !document.hidden && !L.clock.paused;
            }
            (eh(t), eu(t, eW));
            let r = t.createGain();
            ((r.gain.value = +!!n()), r.connect(t.destination));
            let o = t.createGain();
            o.connect(r);
            let l = t.createGain();
            ((l.gain.value = 0), l.connect(o));
            let s = t.createGain();
            ((s.gain.value = 0), s.connect(o));
            let u = !1;
            function h() {
                return u;
            }
            let f = [
                eG(
                    t,
                    "https://cdn.discordapp.com/assets/content/17c54dd44a2b411820ed3f363af68060f2047f871370f1a2541d6fb047853d1f.mp3",
                    l,
                    h,
                    () => {
                        let e = 0.08 * (J.Ay.getOutputVolume() / 100),
                            a = t.currentTime;
                        (l.gain.setValueAtTime(0, a), l.gain.linearRampToValueAtTime(Math.min(1, e), a + 3));
                    },
                ),
                eG(
                    t,
                    "https://cdn.discordapp.com/assets/content/76cedda510165c9558eea51446523e2fbb84991ef53c0135eec0860ac89cf409.mp3",
                    s,
                    h,
                ),
            ];
            eL(t);
            let c = 0,
                d = 0,
                m = L.clock.now(),
                g = L.clock.run(function (e) {
                    let t = Math.min(0.1, (e - m) / 1e3);
                    m = e;
                    let a = 0.18 * Math.pow(L.renderState.agitation, 1.5);
                    if (Math.abs((c += (a - c) * Math.min(1, t / 0.25)) - d) > 5e-4) {
                        d = c;
                        let e = Math.min(1, c * (J.Ay.getOutputVolume() / 100));
                        s.gain.setTargetAtTime(e, s.context.currentTime, 0.02);
                    }
                }),
                p = null,
                w = null,
                v = () => {
                    (null != p && clearTimeout(p),
                        (p = null),
                        null == w ||
                            L.clock.paused ||
                            (p = setTimeout(
                                () => {
                                    ((p = null), (w = null), e_(t, eW, eO, 0.14));
                                },
                                Math.max(0, w - L.clock.now()),
                            )));
                },
                y = L.subscribeLevelUp((e) => {
                    ((w = L.clock.now() + 1e3 * Math.max(0, e - 0.35)), v());
                }),
                b = () => {
                    let e = t.currentTime;
                    (r.gain.cancelScheduledValues(e),
                        n() ? (eh(t), r.gain.setTargetAtTime(1, e, 0.3)) : r.gain.setTargetAtTime(0, e, 0.05),
                        document.hidden && !L.clock.paused && (w = null),
                        v());
                };
            document.addEventListener("visibilitychange", b);
            let x = L.clock.watch(b);
            return () => {
                ((u = !0),
                    g(),
                    y(),
                    x(),
                    document.removeEventListener("visibilitychange", b),
                    null != p && clearTimeout(p));
                let e = t.currentTime + 0.15;
                for (let a of (o.gain.setValueAtTime(1, t.currentTime), o.gain.linearRampToValueAtTime(0, e), f))
                    !(async function (e, t) {
                        try {
                            (await e)?.stop(t);
                        } catch {}
                    })(a, e);
                (setTimeout(() => r.disconnect(), 200), a());
            };
        }, [L, i]),
        s.useEffect(eP, []));
    let C = s.useRef(null),
        I = s.useRef(null),
        _ =
            ((t = M.shake),
            (n = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion)),
            (r = t && !n),
            (o = s.useRef(0)),
            (u = s.useRef(0)),
            (h = s.useCallback(() => {
                ((o.current = Math.min(1, o.current + 0.6)), (u.current = Math.min(1, u.current + 0.55)));
            }, [])),
            s.useEffect(() => {
                if (!r) return;
                let { clock: e } = L,
                    t = e.now(),
                    a = t,
                    i = 0,
                    n = -1,
                    l = !1,
                    s = 1,
                    h = null,
                    f = e.run(function (e) {
                        let r = Math.min(0.05, (e - t) / 1e3);
                        t = e;
                        let f = o.current;
                        o.current = Math.max(0, f - f * r * 7 - 0.15 * r);
                        let c = Math.round(1e4 * o.current) / 1e4,
                            d = C.current;
                        null != d && (h = d);
                        let m = c !== n;
                        n = c;
                        let g = u.current;
                        u.current = Math.max(0, g - g * r * 9 - 0.3 * r);
                        let { renderState: p } = L;
                        for (let t of p.pulses)
                            t.bornAt <= a || t.bornAt > e || ((a = t.bornAt), (i = Math.max(i, t.shake)));
                        i = Math.max(0, i - i * r * 3.2 - 0.05 * r);
                        let { fx: w } = p,
                            v = w.tremor * (1 + (w.heatBoost - 1) * p.agitation),
                            y = u.current > 0 || i > 0 || v > 0 || s > 1.0001;
                        if (null == d) return;
                        if (!y && !l) {
                            m && d.style.setProperty("--custom-void-recoil", String(c));
                            return;
                        }
                        l = y;
                        let b = u.current * u.current,
                            x = i * i,
                            A = 4 * b + 14 * x + 2.5 * v,
                            S = 0.35 * b + 1.1 * x + 0.2 * v,
                            R = A > 0 ? t7(A, 16) / A : 1,
                            k = S > 0 ? t7(S, 1.2) / S : 1,
                            T = e / 1e3,
                            M =
                                4 * b * (0.6 * Math.sin(61 * T) + 0.4 * Math.sin(97 * T + 1.3)) +
                                14 * x * (0.6 * Math.sin(23 * T + 0.9) + 0.4 * Math.sin(37 * T + 2.4)) +
                                2.5 * v * (0.6 * Math.sin(13 * T + 0.3) + 0.4 * Math.sin(31 * T + 1.9)),
                            E =
                                4 * b * (0.6 * Math.sin(73 * T + 2.1) + 0.4 * Math.sin(89 * T + 0.4)) +
                                14 * x * (0.6 * Math.sin(29 * T + 1.7) + 0.4 * Math.sin(41 * T + 0.2)) +
                                2.5 * v * (0.6 * Math.sin(17 * T + 2.6) + 0.4 * Math.sin(27 * T + 0.8)),
                            F =
                                0.35 * b * Math.sin(53 * T + 0.7) +
                                1.1 * x * Math.sin(19 * T + 1.1) +
                                0.2 * v * Math.sin(11 * T + 2.2),
                            P = 0.04 * i,
                            I = d.parentElement,
                            _ =
                                null != I
                                    ? (function (e, t, a, i) {
                                          let n = t.offsetWidth,
                                              r = t.offsetHeight;
                                          if (n <= 0 || r <= 0) return 1;
                                          let o = (Math.abs(i) * Math.PI) / 180,
                                              l = Math.cos(o),
                                              s = Math.sin(o),
                                              u = e.clientWidth / 2 + a,
                                              h = e.clientHeight / 2 + a;
                                          return Math.max(1, (u * l + h * s) / (n / 2), (u * s + h * l) / (r / 2));
                                      })(I, d, A * R, S * k) / Math.max(1, 1 + P)
                                    : 1;
                        ((s = _ >= s ? _ : Math.max(_, s - (s - _) * Math.min(1, 3 * r))),
                            m && d.style.setProperty("--custom-void-recoil", String(c)),
                            d.style.setProperty("--custom-void-shake-x", `${(M * R).toFixed(2)}px`),
                            d.style.setProperty("--custom-void-shake-y", `${(E * R).toFixed(2)}px`),
                            d.style.setProperty("--custom-void-shake-turn", `${(F * k).toFixed(3)}deg`),
                            d.style.setProperty("--custom-void-swell", P.toFixed(4)),
                            d.style.setProperty("--custom-void-cover", s.toFixed(4)));
                    });
                return () => {
                    for (let e of (f(), t9)) h?.style.removeProperty(e);
                };
            }, [r, L, C]),
            h),
        {
            voided: W,
            balance: O,
            nextRank: U,
            isMaxRank: D,
            rankFloor: N,
            milestone: B,
            ready: X,
            eligible: j,
            spend: z,
            dismissMilestone: $,
        } = (function (e) {
            let { onTermsAccepted: t } = e,
                {
                    voided: i,
                    balance: n,
                    ready: r,
                    eligible: o,
                } = (0, d.cf)([ai.A], () => ({
                    voided: ai.A.getDisplayedTotal() ?? 0,
                    balance: ai.A.getDisplayedBalance() ?? 0,
                    ready: ai.A.hasFetchedState(),
                    eligible: ai.A.eligible,
                })),
                u = (0, d.bG)([at.Ay], () => (0, an.XN)(at.Ay.getBadgeById(ae.$.ORB_VOID)?.tiers)),
                [h, f] = s.useState(null),
                c = (0, eY.A)(t),
                m = s.useRef(null);
            (s.useEffect(() => {
                r && u.length > 0 && null == m.current && (m.current = (0, an.VL)(u, i));
            }, [r, u, i]),
                s.useEffect(() => {
                    let e = ee.A.isVisible();
                    function t() {
                        let t = ee.A.isVisible();
                        (e && !t && (0, aa.c$)(), (e = t));
                    }
                    return (
                        ee.A.addChangeListener(t),
                        window.addEventListener("pagehide", aa.c$),
                        () => {
                            (ee.A.removeChangeListener(t), window.removeEventListener("pagehide", aa.c$));
                        }
                    );
                }, []));
            let g = s.useCallback(() => {
                    if (!ai.A.hasConsented)
                        return (
                            !(function (e) {
                                let { onAccept: t } = e;
                                (0, ar.mM)(
                                    async () => {
                                        let { default: e } = await Promise.all([a.e(919202), a.e(994768)]).then(
                                            a.bind(a, 369875),
                                        );
                                        return (a) => (0, l.jsx)(e, { ...a, onAccept: t });
                                    },
                                    { modalKey: "orb-void-terms-modal", stackingBehavior: "stack" },
                                );
                            })({
                                onAccept: () => {
                                    ((0, aa.A)(), c());
                                },
                            }),
                            !1
                        );
                    let e = (0, aa.RQ)(1);
                    if (null == e) {
                        let e = (ai.A.getDisplayedBalance() ?? 0) < 1;
                        return (
                            ai.A.hasFetchedState() &&
                                ai.A.eligible &&
                                e &&
                                (0, ar.mM)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            a.e(454048),
                                            a.e(210034),
                                            a.e(90648),
                                        ]).then(a.bind(a, 776779));
                                        return (t) => (0, l.jsx)(e, { ...t });
                                    },
                                    { modalKey: "orb-void-out-of-orbs-modal", stackingBehavior: "stack" },
                                ),
                            !1
                        );
                    }
                    let t = (0, an.ol)(),
                        i = (0, an.VL)(t, e);
                    if (null != m.current && i > m.current) {
                        m.current = i;
                        let a = t[i];
                        (!(function () {
                            if (ep()) return;
                            let e = (0, Q.v)();
                            null != e && (eL(e), ec(e, () => e_(e, eb, eR, 0.11)));
                        })(),
                            f({
                                title: a.name,
                                note: al.intl.formatToPlainString(ao.default.e0rggb, { count: a.threshold }),
                                icon: a.largeIcon ?? a.icon,
                                key: e,
                            }));
                    }
                    return !0;
                }, [c]),
                p = s.useCallback(() => f(null), []),
                w = (0, an.VL)(u, i);
            return {
                voided: i,
                balance: n,
                nextRank: u[w + 1] ?? null,
                isMaxRank: u.length > 0 && w === u.length - 1,
                rankFloor: w >= 0 ? u[w].threshold : 0,
                milestone: h,
                ready: r,
                eligible: o,
                spend: g,
                dismissMilestone: p,
            };
        })({
            onTermsAccepted: s.useCallback(() => {
                let e = C.current?.getBoundingClientRect(),
                    t =
                        null == e
                            ? 0
                            : Math.atan2(
                                  window.innerHeight / 2 - (e.top + e.height * T["1"]),
                                  window.innerWidth / 2 - (e.left + e.width * T["0"]),
                              );
                (L.swallow(t, E(L.renderState, k.surge), L.clock.now()), _());
            }, [L, _, k]),
        }),
        V = O <= 0,
        Z = X ? (j ? (V ? al.intl.string(ao.default.sVAKxG) : null) : al.intl.string(ao.default["qf3+h9"])) : null,
        et = s.useCallback(() => {
            let e;
            return (
                !!z() &&
                (_(),
                (e = performance.now()) - eM < 35 ||
                    ((eM = e),
                    (function (e) {
                        if (ep()) return;
                        let t = (0, Q.v)();
                        null != t &&
                            (eL(t),
                            ec(t, () => {
                                (e_(t, ew, ex, 0.035 + (0.012 - 0.035) * e),
                                    e_(t, eC(ek), eA, 0.0156 + -0.0104 * e, { rate: eI(), endsIn: 0.32 }),
                                    e_(t, eC(eT), eS, 0.0078 + -0.0052 * e, { rate: eI(), startsIn: 0.32 }));
                            }));
                    })(Math.min(1, eE / 22)),
                    (eE += 1),
                    null != eF && clearTimeout(eF),
                    (eF = setTimeout(() => {
                        eE = 0;
                    }, 700))),
                !0)
            );
        }, [z, _]),
        ea = null != U ? U.threshold.toLocaleString() : null,
        ei = (0, l.jsxs)("div", {
            className: as.W0,
            children: [
                (0, l.jsx)(m.E, {
                    variant: "body-xs/medium",
                    color: "text-strong",
                    className: as.UP,
                    children: al.intl.string(ao.default.JxuATR),
                }),
                (0, l.jsxs)(m.E, {
                    variant: "display-md",
                    color: "text-strong",
                    className: as.N4,
                    children: [
                        (0, l.jsx)(eH, { value: W, forwardsOnly: !0 }),
                        (0, l.jsx)("img", {
                            className: as.gB,
                            src: "https://cdn.discordapp.com/assets/content/a1c1ab55aa0de5eda78ca8107f50197f94c1a80fc8acb5990f459a4c0ddf4fe8.png",
                            alt: al.intl.string(al.t.ElYQFS),
                        }),
                    ],
                }),
            ],
        }),
        eo = (0, l.jsxs)("div", {
            className: as.__,
            children: [
                (0, l.jsx)(m.E, {
                    tag: "span",
                    variant: "heading-xs/medium",
                    color: "text-strong",
                    children: al.intl.string(ao.default["9QAJ8n"]),
                }),
                (0, l.jsx)(m.E, {
                    tag: "span",
                    variant: "heading-xs/semibold",
                    color: V || !j ? "text-muted" : "text-strong",
                    className: as.Se,
                    children: O.toLocaleString(),
                }),
                (0, l.jsx)(g.OrbsIcon, { size: "sm", color: p.A.colors.ICON_STRONG, "aria-hidden": !0 }),
            ],
        }),
        es =
            null != U &&
            (0, l.jsxs)("div", {
                className: as.zg,
                children: [
                    (0, l.jsx)(m.E, {
                        tag: "span",
                        variant: "heading-xs/medium",
                        color: "text-default",
                        children: U.name,
                    }),
                    null != U.icon && (0, l.jsx)("img", { className: as.Qe, src: U.icon, alt: "", "aria-hidden": !0 }),
                ],
            }),
        ef = (0, l.jsxs)("div", {
            className: as.oO,
            children: [
                (0, l.jsxs)("div", {
                    className: as.P4,
                    children: [
                        D
                            ? (0, l.jsx)(m.E, {
                                  tag: "span",
                                  variant: "heading-xs/medium",
                                  color: "text-default",
                                  children: al.intl.string(ao.default.rfBNN3),
                              })
                            : (0, l.jsxs)("div", {
                                  className: as.vI,
                                  children: [
                                      (0, l.jsx)(m.E, {
                                          tag: "span",
                                          variant: "heading-xs/medium",
                                          color: "text-muted",
                                          children: al.intl.string(ao.default["0VlVju"]),
                                      }),
                                      null != ea &&
                                          (0, l.jsx)(m.E, {
                                              tag: "span",
                                              variant: "heading-xs/semibold",
                                              color: "text-default",
                                              className: as.Se,
                                              children: ea,
                                          }),
                                  ],
                              }),
                        es,
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: as.m9,
                    children: [
                        (0, l.jsx)(w.z, {
                            value: null != U || D ? W : N,
                            minValue: N,
                            maxValue: U?.threshold ?? Math.max(W, 1),
                            size: "lg",
                            "aria-label": al.intl.string(ao.default["+5QXTB"]),
                            className: as.hr,
                        }),
                        null != B && (0, l.jsx)("div", { className: as.wd, "aria-hidden": !0 }, B.key),
                    ],
                }),
            ],
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != c && F && (0, l.jsx)(t6, { director: L, voidRef: C, host: c }),
            (0, l.jsxs)("div", {
                ref: I,
                className: as.dw,
                children: [
                    (0, l.jsx)("div", {
                        ref: C,
                        className: as.Qw,
                        children: (0, l.jsx)(t0, {
                            director: L,
                            tuning: k,
                            quality: M,
                            echoes: F,
                            still: "still" === A,
                            onDegrade: R,
                            onToss: et,
                            label: Z ?? al.intl.string(ao.default.CrvXky),
                            ringTarget: I,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: as.wx,
                        children: [
                            (0, l.jsx)(m.E, {
                                variant: "display-md",
                                color: "text-strong",
                                className: as.DD,
                                children: al.intl.string(ao.default.hUfeUJ),
                            }),
                            eo,
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: as.b,
                        children: (0, l.jsx)(v.J, { onClick: f, size: "sm", autoFocus: !0 }),
                    }),
                    null != B && (0, l.jsx)(eV, { title: B.title, note: B.note, icon: B.icon, onDone: $ }, B.key),
                    null != Z &&
                        (0, l.jsx)(m.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            className: as.oj,
                            children: Z,
                        }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: as.qr,
                children: [ei, (0, l.jsx)("div", { className: as.FK, children: ef })],
            }),
        ],
    });
}
var ah = a(652215);
function af(e) {
    let { transitionState: t, onClose: a } = e,
        [i, n] = s.useState(null);
    return (0, l.jsx)(c.N, {
        theme: ah.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, l.jsxs)(f.EO, {
                "data-migration-pending": !0,
                parentComponent: "VoidModal",
                "aria-label": al.intl.string(ao.default.hUfeUJ),
                transitionState: t,
                size: f.rI.DYNAMIC,
                hideShadow: !0,
                className: h()(e, as.CR),
                children: [
                    (0, l.jsx)("div", { ref: n, className: as.Zc, "aria-hidden": !0 }),
                    (0, l.jsx)(f.$m, {
                        "data-migration-pending": !0,
                        scrollbarType: "none",
                        className: as.jE,
                        children: (0, l.jsx)(au, { onClose: a, overflowHost: i }),
                    }),
                ],
            }),
    });
}
