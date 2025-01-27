r(47120), r(518263), r(970173), r(520712), r(268111), r(941497), r(32026), r(480839), r(744285), r(492257), r(873817), r(565568);
var n,
    a,
    i = r(192379),
    l = r(392711),
    c = r(633302),
    u = r(960048),
    s = r(709054);
((a = n || (n = {}))[(a.FREE = 0)] = 'FREE'), (a[(a.ACTIVE = 1)] = 'ACTIVE');
let o = (e) => Math.round(4 * e) / 4,
    d = (e) => {
        let [t, r] = i.useState({
                y: 0.9 * e.h,
                x: 0.3 * e.w
            }),
            [n, a] = i.useState(1400),
            [l, c] = i.useState(0.94),
            [u, s] = i.useState(110),
            [o, d] = i.useState(30),
            [f, m] = i.useState(900),
            [h, p] = i.useState(60);
        i.useEffect(() => {
            r({
                y: 0.9 * e.h,
                x: 0.3 * e.w
            });
        }, [e.h, e.w]);
        let y = i.useCallback(() => {
            let e;
            return 60 === h ? (p(() => 45), !0) : (d((t) => (e = Math.max(3, Math.floor(0.75 * t)))), m((e) => Math.max(6, Math.floor(0.8 * e))), (null != e ? e : 30) < 16.875 && p(() => 28), !0);
        }, [h, 30]);
        return {
            SPEED: t,
            GRAVITY: n,
            DRAG: l,
            Y_POS: u,
            PARTICLES_PER_EMISSION: o,
            MAX_PARTICLES: f,
            tickRate: 1000 / h,
            improvePerformance: y
        };
    },
    f = (e) => {
        let t = e.particles.current,
            r = e.particleStates.current;
        e.sortedParticles.current.sort((e, n) => {
            let a = r[e],
                i = r[n];
            return a !== i ? a - i : 1 === a ? t[e].scale - t[n].scale : 0;
        });
    };
t.Z = (e) => {
    let { SPEED: t, GRAVITY: r, DRAG: n, Y_POS: a, PARTICLES_PER_EMISSION: m, MAX_PARTICLES: h, tickRate: p, improvePerformance: y } = d(e),
        w = {
            particles: i.useRef(Array(h)),
            particleStates: i.useRef(new Uint8Array(h)),
            sortedParticles: i.useRef(new Uint16Array(Array.from({ length: h }, (e, t) => t))),
            freeParticles: i.useRef(h),
            activeParticles: i.useRef(0)
        },
        v = i.useRef(!1);
    return {
        update: (t) => {
            if (0 === w.activeParticles.current) return;
            let a = w.particleStates.current,
                i = w.particles.current;
            for (let l = 0; l < h; l++) {
                if (0 === a[l]) continue;
                let c = i[l];
                (c.position.x -= c.velocity.x * t), (c.position.y -= c.velocity.y * t), (c.velocity.x *= n ** t), (c.velocity.y *= n ** t), (c.rotation += c.angularVelocity * t), (c.velocity.y -= r * t), c.position.y > e.h && ((w.particleStates.current[l] = 0), (w.activeParticles.current -= 1), (w.freeParticles.current += 1));
            }
            0 === w.activeParticles.current && (v.current = !1);
        },
        draw: (t) => {
            t.clearRect({
                x: 0,
                y: 0,
                w: e.w,
                h: e.h
            });
            let r = w.particleStates.current,
                n = w.particles.current,
                a = w.sortedParticles.current;
            for (let e = 0; e < h; e++) {
                var i;
                let l = a[e];
                if (0 === r[l]) continue;
                let s = n[l],
                    { x: d, y: f } = s.position;
                if ((s.scale > 1 && t.setFilter({ blur: o((s.scale - 1) * 1.5) }), null === (i = t.assetMap) || void 0 === i ? void 0 : i.has(s.key))) {
                    let e = {
                            w: 32 * s.scale,
                            h: 32 * s.scale
                        },
                        r = {
                            x: d + e.w / 2,
                            y: f + e.h / 2
                        };
                    t.rotateAroundOriginAndDraw(r, s.rotation, () =>
                        t.drawImage(
                            s.key,
                            {
                                x: 0,
                                y: 0
                            },
                            e
                        )
                    );
                } else {
                    let e = c.ZP.contentHasUnicodeOrEmoji(s.key),
                        r = 24 * s.scale,
                        n = {
                            x: d + r / 2,
                            y: f + r / 2
                        };
                    null != e
                        ? (t.setFont({ size: r }),
                          t.rotateAroundOriginAndDraw(n, s.rotation, () =>
                              t.drawText(s.key, {
                                  x: 0,
                                  y: 0
                              })
                          ))
                        : (t.setFont({ size: r }),
                          t.rotateAroundOriginAndDraw(n, s.rotation, () =>
                              t.drawText('\uD83C\uDF89', {
                                  x: 0,
                                  y: 0
                              })
                          ),
                          u.Z.captureMessage("Simple Confetti couldn't trigger explosion for ".concat(s.key, ".  It doesn't have an image and seemingly isn't a valid unicode emoji.")));
                }
                t.setFilter({ blur: 0 });
            }
        },
        emit: (r, n) => {
            s.default.isProbablyAValidSnowflake(r);
            if (w.freeParticles.current < m / 2) return;
            let i = 0 === n.x && 0 === n.y && 0 === n.w && 0 === n.h,
                c = {
                    min: e.h / 8,
                    max: e.h / 3
                },
                u = n.y < 0.66 * e.h ? Math.max(0.2, n.y / (0.66 * e.h)) : 1,
                o = 1 + (1 - u);
            for (let s = 0; s < m; s++) {
                let s, d;
                s = i
                    ? {
                          x: (0, l.random)(-t.x, t.x, !0),
                          y: t.y + (0, l.random)(-c.min, c.max, !0)
                      }
                    : {
                          x: (0, l.random)(-t.x * o, t.x * o, !0),
                          y: t.y * u + (0, l.random)(-c.min, c.max, !0)
                      };
                let m = (0, l.random)(0, 30),
                    p = Math.atan2(-t.y - (0, l.random)(-c.min, c.max, !0), (0, l.random)(-t.x, t.x, !0)) * (0, l.random)(-50, 50);
                if (i)
                    d = {
                        x: e.w / 2 + (0, l.random)(-50, 50),
                        y: e.h - a + (0, l.random)(-50, 50)
                    };
                else {
                    let e = n.h / 4,
                        t = n.h / 4;
                    d = {
                        x: n.x + n.w / 2 + (0, l.random)(-t, t),
                        y: n.y + n.h / 2 + (0, l.random)(-e, e)
                    };
                }
                for (let e = 0; e < h; e += 1)
                    if (0 === w.particleStates.current[e]) {
                        (w.particles.current[e] = {
                            key: r,
                            position: d,
                            velocity: s,
                            scale: (0, l.random)(0.8, 2),
                            rotation: m,
                            angularVelocity: p
                        }),
                            (w.particleStates.current[e] = 1),
                            (w.freeParticles.current -= 1),
                            (w.activeParticles.current += 1);
                        break;
                    }
                f(w);
            }
            v.current = !0;
        },
        tickRate: p,
        improvePerformance: y,
        shouldTick: v
    };
};
