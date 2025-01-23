r(47120), r(653041);
var n = r(192379),
    a = r(392711),
    i = r(633302),
    u = r(960048),
    l = r(709054);
let o = (e) => Math.round(4 * e) / 4,
    s = (e) => {
        let t = 60,
            [r, a] = n.useState({
                y: 0.9 * e.h,
                x: 0.3 * e.w
            }),
            [i, u] = n.useState(1400),
            [l, o] = n.useState(0.94),
            [s, c] = n.useState(110),
            [d, f] = n.useState(t),
            [m, h] = n.useState(900),
            [w, y] = n.useState(60);
        n.useEffect(() => {
            a({
                y: 0.9 * e.h,
                x: 0.3 * e.w
            });
        }, [e.h, e.w]);
        let p = n.useCallback(() => {
            let e;
            return 60 === w ? (y(() => 45), !0) : (f((t) => (e = Math.max(3, Math.floor(0.75 * t)))), h((e) => Math.max(6, Math.floor(0.8 * e))), (null != e ? e : t) < 0.5625 * t && y(() => 28), !0);
        }, [w, t]);
        return {
            SPEED: r,
            GRAVITY: i,
            DRAG: l,
            Y_POS: s,
            PARTICLES_PER_EMISSION: d,
            MAX_PARTICLES: m,
            tickRate: 1000 / w,
            improvePerformance: p
        };
    };
t.Z = (e) => {
    let { SPEED: t, GRAVITY: r, DRAG: c, Y_POS: d, PARTICLES_PER_EMISSION: f, MAX_PARTICLES: m, tickRate: h, improvePerformance: w } = s(e),
        y = n.useRef([]),
        p = n.useRef(!1);
    return {
        update: (t) => {
            let n = [];
            if (
                (y.current.forEach((a, i) => {
                    (a.position.x -= a.velocity.x * t), (a.position.y -= a.velocity.y * t), (a.velocity.x *= c ** t), (a.velocity.y *= c ** t), (a.rotation += a.angularVelocity * t), (a.velocity.y -= r * t), a.position.y > e.h && n.push(i);
                }),
                n.length > 0)
            ) {
                let e = y.current.filter((e, t) => !n.includes(t));
                (y.current = e), 0 === y.current.length && (p.current = !1);
            }
        },
        draw: (t) => {
            t.clearRect({
                x: 0,
                y: 0,
                w: e.w,
                h: e.h
            }),
                y.current.forEach((e) => {
                    var r;
                    let { x: n, y: a } = e.position;
                    if ((e.scale > 1 && t.setFilter({ blur: o((e.scale - 1) * 1.5) }), null === (r = t.assetMap) || void 0 === r ? void 0 : r.has(e.key))) {
                        let r = {
                                w: 32 * e.scale,
                                h: 32 * e.scale
                            },
                            i = {
                                x: n + r.w / 2,
                                y: a + r.h / 2
                            };
                        t.rotateAroundOriginAndDraw(i, e.rotation, () =>
                            t.drawImage(
                                e.key,
                                {
                                    x: 0,
                                    y: 0
                                },
                                r
                            )
                        );
                    } else {
                        let r = i.ZP.contentHasUnicodeOrEmoji(e.key),
                            l = 24 * e.scale,
                            o = {
                                x: n + l / 2,
                                y: a + l / 2
                            };
                        null != r
                            ? (t.setFont({ size: l }),
                              t.rotateAroundOriginAndDraw(o, e.rotation, () =>
                                  t.drawText(e.key, {
                                      x: 0,
                                      y: 0
                                  })
                              ))
                            : (t.setFont({ size: l }),
                              t.rotateAroundOriginAndDraw(o, e.rotation, () =>
                                  t.drawText('\uD83C\uDF89', {
                                      x: 0,
                                      y: 0
                                  })
                              ),
                              u.Z.captureMessage("Simple Confetti couldn't trigger explosion for ".concat(e.key, ".  It doesn't have an image and seemingly isn't a valid unicode emoji.")));
                    }
                    t.setFilter({ blur: 0 });
                });
        },
        emit: (r, n) => {
            l.default.isProbablyAValidSnowflake(r);
            if (y.current.length >= m) return;
            let i = 0 === n.x && 0 === n.y && 0 === n.w && 0 === n.h,
                u = {
                    min: e.h / 8,
                    max: e.h / 3
                },
                o = n.y < 0.66 * e.h ? Math.max(0.2, n.y / (0.66 * e.h)) : 1,
                s = 1 + (1 - o);
            for (let l = 0; l < f; l++) {
                let l, c;
                l = i
                    ? {
                          x: (0, a.random)(-t.x, t.x, !0),
                          y: t.y + (0, a.random)(-u.min, u.max, !0)
                      }
                    : {
                          x: (0, a.random)(-t.x * s, t.x * s, !0),
                          y: t.y * o + (0, a.random)(-u.min, u.max, !0)
                      };
                let f = (0, a.random)(0, 30),
                    m = Math.atan2(-t.y - (0, a.random)(-u.min, u.max, !0), (0, a.random)(-t.x, t.x, !0)) * (0, a.random)(-50, 50);
                if (i)
                    c = {
                        x: e.w / 2 + (0, a.random)(-50, 50),
                        y: e.h - d + (0, a.random)(-50, 50)
                    };
                else {
                    let e = n.h / 4,
                        t = n.h / 4;
                    c = {
                        x: n.x + n.w / 2 + (0, a.random)(-t, t),
                        y: n.y + n.h / 2 + (0, a.random)(-e, e)
                    };
                }
                y.current.push({
                    key: r,
                    position: c,
                    velocity: l,
                    scale: (0, a.random)(0.8, 2),
                    rotation: f,
                    angularVelocity: m
                }),
                    y.current.sort((e, t) => e.scale - t.scale);
            }
            p.current = !0;
        },
        tickRate: h,
        improvePerformance: w,
        shouldTick: p
    };
};
