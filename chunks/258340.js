n(653041);
var r = n(192379),
    i = n(392711),
    a = n(633302),
    u = n(960048);
let l = (e) => Math.round(4 * e) / 4,
    c = (e) => {
        let t = {
            y: 0.9 * e.h,
            x: 0.3 * e.w
        };
        return {
            SPEED: t,
            GRAVITY: 1100,
            DRAG: 0.94,
            Y_POS: 110,
            MAX_PARTICLES: 600
        };
    };
t.Z = (e) => {
    let { SPEED: t, GRAVITY: n, DRAG: o, Y_POS: s, MAX_PARTICLES: d } = c(e),
        f = r.useRef([]),
        h = r.useRef(!1);
    return {
        update: (t) => {
            let r = [];
            if (
                (f.current.forEach((i, a) => {
                    (i.position.x -= i.velocity.x * t), (i.position.y -= i.velocity.y * t), (i.velocity.x *= o ** t), (i.velocity.y *= o ** t), (i.rotation += i.angularVelocity * t), (i.velocity.y -= n * t), i.position.y > e.h && r.push(a);
                }),
                r.length > 0)
            ) {
                let e = f.current.filter((e, t) => !r.includes(t));
                (f.current = e), 0 === f.current.length && (h.current = !1);
            }
        },
        draw: (t) => {
            t.clearRect({
                x: 0,
                y: 0,
                w: e.w,
                h: e.h
            }),
                f.current.forEach((e) => {
                    var n;
                    let { x: r, y: i } = e.position;
                    if ((e.scale > 1 && t.setFilter({ blur: l((e.scale - 1) * 2) }), null === (n = t.assetMap) || void 0 === n ? void 0 : n.has(e.key))) {
                        let n = {
                                w: 32 * e.scale,
                                h: 32 * e.scale
                            },
                            a = {
                                x: r + n.w / 2,
                                y: i + n.h / 2
                            };
                        t.rotateAroundOriginAndDraw(a, e.rotation, () =>
                            t.drawImage(
                                e.key,
                                {
                                    x: 0,
                                    y: 0
                                },
                                n
                            )
                        );
                    } else {
                        let n = a.ZP.contentHasUnicodeOrEmoji(e.key),
                            l = 24 * e.scale,
                            c = {
                                x: r + l / 2,
                                y: i + l / 2
                            };
                        null != n
                            ? (t.setFont({ size: l }),
                              t.rotateAroundOriginAndDraw(c, e.rotation, () =>
                                  t.drawText(e.key, {
                                      x: 0,
                                      y: 0
                                  })
                              ))
                            : (t.setFont({ size: l }),
                              t.rotateAroundOriginAndDraw(c, e.rotation, () =>
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
        emit: (n, r, a) => {
            if (f.current.length >= d) return;
            let u = 0 === a.x && 0 === a.y && 0 === a.w && 0 === a.h,
                l = {
                    min: e.h / 8,
                    max: e.h / 3
                };
            for (let c = 0; c < r; c++) {
                let r;
                let c = {
                        x: (0, i.random)(-t.x, t.x, !0),
                        y: t.y + (0, i.random)(-l.min, l.max, !0)
                    },
                    o = (0, i.random)(0, 30),
                    d = Math.atan2(-t.y - (0, i.random)(-l.min, l.max, !0), (0, i.random)(-t.x, t.x, !0)) * (0, i.random)(-50, 50);
                if (u)
                    r = {
                        x: e.w / 2 + (0, i.random)(-50, 50),
                        y: e.h - s + (0, i.random)(-50, 50)
                    };
                else {
                    let e = a.h / 4,
                        t = a.h / 4;
                    r = {
                        x: a.x + a.w / 2 + (0, i.random)(-t, t),
                        y: a.y + a.h / 2 + (0, i.random)(-e, e)
                    };
                }
                f.current.push({
                    key: n,
                    position: r,
                    velocity: c,
                    scale: (0, i.random)(0.8, 2),
                    rotation: o,
                    angularVelocity: d
                }),
                    f.current.sort((e, t) => e.scale - t.scale);
            }
            h.current = !0;
        },
        shouldTick: h
    };
};
