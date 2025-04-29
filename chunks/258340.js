r.d(t, { Z: () => h }), r(388685), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733), r(82823), r(642613);
var n = r(73800),
    a = r(392711),
    i = r(633302),
    l = r(960048),
    u = r(709054),
    c = r(693824);
let s = (e) => Math.round(4 * e) / 4,
    o = (e) => {
        let [t, r] = n.useState({
                y: 0.9 * e.h,
                x: 0.3 * e.w
            }),
            [a, i] = n.useState(1400),
            [l, u] = n.useState(0.94),
            [c, s] = n.useState(110),
            [o, d] = n.useState(30),
            [f, m] = n.useState(900),
            [h, p] = n.useState(60);
        n.useEffect(() => {
            r({
                y: 0.9 * e.h,
                x: 0.3 * e.w
            });
        }, [e.h, e.w]);
        let y = n.useCallback(() => {
            let e, t;
            return 60 === h ? p(() => 45) : (d((t) => (null != (e = Math.max(3, Math.floor(0.75 * t))) ? e : t)), m((e) => (null != (t = Math.max(6, Math.floor(0.8 * e))) ? t : e)), null != e && e < 16.875 && p(() => 28)), !0;
        }, [h, 30]);
        return {
            SPEED: t,
            GRAVITY: a,
            DRAG: l,
            Y_POS: c,
            PARTICLES_PER_EMISSION: o,
            MAX_PARTICLES: f,
            tickRate: 1000 / h,
            improvePerformance: y
        };
    },
    d = () => {
        let e = Math.random();
        return e < 0.15 ? (0, a.random)(0.8, 1) : e < 0.8 ? (0, a.random)(1, 1.3) : (0, a.random)(1.3, 1.75);
    },
    f = (e, t) => e.position.y > t.h || e.position.x < -128 || e.position.x > t.w,
    m = (e) => {
        let t = e.particles.current,
            r = e.particleStates.current;
        e.sortedParticles.current.sort((e, n) => {
            let a = r[e],
                i = r[n];
            return a !== i ? a - i : 1 === a ? t[e].scale - t[n].scale : 0;
        });
    },
    h = (e) => {
        let { SPEED: t, GRAVITY: r, DRAG: h, Y_POS: p, PARTICLES_PER_EMISSION: y, MAX_PARTICLES: w, tickRate: v, improvePerformance: x } = o(e),
            E = {
                particles: n.useRef(Array(w)),
                particleStates: n.useRef(new Uint8Array(w)),
                sortedParticles: n.useRef(new Uint16Array(Array.from({ length: w }, (e, t) => t))),
                freeParticles: n.useRef(w),
                activeParticles: n.useRef(0)
            },
            S = n.useRef(!1);
        return {
            update: (t) => {
                if (0 === E.activeParticles.current) return;
                let n = E.particleStates.current,
                    a = E.particles.current;
                for (let i = 0; i < w; i++) {
                    if (0 === n[i]) continue;
                    let l = a[i];
                    (l.position.x -= l.velocity.x * t), (l.position.y -= l.velocity.y * t), (l.velocity.x *= h ** t), (l.velocity.y *= h ** t), (l.rotation += l.angularVelocity * t), (l.velocity.y -= r * t), f(l, e) && ((E.particleStates.current[i] = 0), (E.activeParticles.current -= 1), (E.freeParticles.current += 1));
                }
                0 === E.activeParticles.current && (S.current = !1);
            },
            draw: (t) => {
                if (
                    (t.clearRect({
                        x: 0,
                        y: 0,
                        w: e.w,
                        h: e.h
                    }),
                    0 === E.activeParticles.current)
                )
                    return;
                let r = E.particleStates.current,
                    n = E.particles.current,
                    a = E.sortedParticles.current;
                for (let e = 0; e < w; e++) {
                    var u;
                    let o = a[e];
                    if (0 === r[o]) continue;
                    let d = n[o];
                    if (null == d) continue;
                    let { x: f, y: m } = d.position,
                        { scale: h } = d;
                    if ((h >= 1.3 && t.setFilter({ blur: s((d.scale - 1) * 3) }), h >= 1.3 && (h = h ** 2), null == (u = t.assetMap) ? void 0 : u.has(d.key))) {
                        let e = {
                                w: 32 * h,
                                h: 32 * h
                            },
                            r = {
                                x: f + e.w / 2,
                                y: m + e.h / 2
                            };
                        t.rotateAroundOriginAndDraw(r, d.rotation, () =>
                            t.drawImage(
                                d.key,
                                {
                                    x: 0,
                                    y: 0
                                },
                                e,
                                { fillMode: c.JU.Contain }
                            )
                        );
                    } else {
                        let e = i.ZP.contentHasUnicodeOrEmoji(d.key),
                            r = 24 * d.scale,
                            n = {
                                x: f + r / 2,
                                y: m + r / 2
                            };
                        null != e
                            ? (t.setFont({ size: r }),
                              t.rotateAroundOriginAndDraw(n, d.rotation, () =>
                                  t.drawText(d.key, {
                                      x: 0,
                                      y: 0
                                  })
                              ))
                            : (t.setFont({ size: r }),
                              t.rotateAroundOriginAndDraw(n, d.rotation, () =>
                                  t.drawText('\uD83C\uDF89', {
                                      x: 0,
                                      y: 0
                                  })
                              ),
                              l.Z.captureMessage("Simple Confetti couldn't trigger explosion for ".concat(d.key, ".  It doesn't have an image and seemingly isn't a valid unicode emoji.")));
                    }
                    t.setFilter({ blur: 0 });
                }
            },
            emit: (r, n) => {
                if ((u.default.isProbablyAValidSnowflake(r), E.freeParticles.current < y / 2)) return;
                let i = 0 === n.x && 0 === n.y && 0 === n.w && 0 === n.h,
                    l = {
                        min: e.h / 8,
                        max: e.h / 3
                    },
                    c = n.y < 0.66 * e.h ? Math.max(0.2, n.y / (0.66 * e.h)) : 1,
                    s = 1 + (1 - c);
                for (let u = 0; u < y; u++) {
                    let u, o;
                    u = i
                        ? {
                              x: (0, a.random)(-t.x, t.x, !0),
                              y: t.y + (0, a.random)(-l.min, l.max, !0)
                          }
                        : {
                              x: (0, a.random)(-t.x * s, t.x * s, !0),
                              y: t.y * c + (0, a.random)(-l.min, l.max, !0)
                          };
                    let f = (0, a.random)(0, 30),
                        h = Math.atan2(-t.y - (0, a.random)(-l.min, l.max, !0), (0, a.random)(-t.x, t.x, !0)) * (0, a.random)(-50, 50);
                    if (i)
                        o = {
                            x: e.w / 2 + (0, a.random)(-50, 50),
                            y: e.h - p + (0, a.random)(-50, 50)
                        };
                    else {
                        let e = n.h / 4,
                            t = n.h / 4;
                        o = {
                            x: n.x + n.w / 2 + (0, a.random)(-t, t),
                            y: n.y + n.h / 2 + (0, a.random)(-e, e)
                        };
                    }
                    for (let e = 0; e < w; e += 1)
                        if (0 === E.particleStates.current[e]) {
                            (E.particles.current[e] = {
                                key: r,
                                position: o,
                                velocity: u,
                                scale: d(),
                                rotation: f,
                                angularVelocity: h
                            }),
                                (E.particleStates.current[e] = 1),
                                (E.freeParticles.current -= 1),
                                (E.activeParticles.current += 1);
                            break;
                        }
                    m(E);
                }
                S.current = !0;
            },
            tickRate: v,
            improvePerformance: x,
            shouldTick: S
        };
    };
