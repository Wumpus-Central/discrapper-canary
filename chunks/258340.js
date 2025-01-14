n(653041);
var r = n(192379),
    i = n(392711),
    u = n(633302),
    a = n(960048);
let c = (e) => Math.round(4 * e) / 4,
    l = (e) => {
        let t = {
            y: 0.9 * e.h,
            x: 0.3 * e.w
        };
        return {
            SPEED: t,
            GRAVITY: 1100,
            DRAG: 0.92,
            Y_POS: 110,
            MAX_PARTICLES: 600
        };
    };
t.Z = (e) => {
    let { SPEED: t, GRAVITY: n, DRAG: s, Y_POS: o, MAX_PARTICLES: d } = l(e),
        f = r.useRef([]),
        h = r.useRef(!1);
    return {
        update: (t) => {
            let r = [];
            if (
                (f.current.forEach((i, u) => {
                    (i.position.x -= i.velocity.x * t), (i.position.y -= i.velocity.y * t), (i.velocity.x *= s ** t), (i.velocity.y *= s ** t), (i.velocity.y -= n * t), i.position.y > e.h && r.push(u);
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
                    e.scale > 1 && t.setFilter({ blur: c((e.scale - 1) * 3) }),
                        (null === (n = t.assetMap) || void 0 === n ? void 0 : n.has(e.key))
                            ? t.drawImage(
                                  e.key,
                                  {
                                      x: r,
                                      y: i
                                  },
                                  {
                                      w: 32 * e.scale,
                                      h: 32 * e.scale
                                  }
                              )
                            : null != u.ZP.contentHasUnicodeOrEmoji(e.key)
                              ? (t.setFont({ size: 24 * e.scale }),
                                t.drawText(e.key, {
                                    x: r,
                                    y: i
                                }))
                              : (t.setFont({ size: 24 * e.scale }),
                                t.drawText('\uD83C\uDF89', {
                                    x: r,
                                    y: i
                                }),
                                a.Z.captureMessage("Simple Confetti couldn't trigger explosion for ".concat(e.key, ".  It doesn't have an image and seemingly isn't a valid unicode emoji."))),
                        t.setFilter({ blur: 0 });
                });
        },
        emit: (n, r) => {
            if (f.current.length >= d) return;
            let u = {
                min: e.h / 8,
                max: e.h / 3
            };
            for (let a = 0; a < r; a++)
                f.current.push({
                    position: {
                        x: e.w / 2 + (0, i.random)(-50, 50),
                        y: e.h - o
                    },
                    velocity: {
                        x: (0, i.random)(-t.x, t.x, !0),
                        y: t.y + (0, i.random)(-u.min, u.max, !0)
                    },
                    scale: (0, i.random)(0.8, 2),
                    rotation: (0, i.random)(-20, 20),
                    key: n
                });
            h.current = !0;
        },
        shouldTick: h
    };
};
