n(653041);
var r = n(192379),
    i = n(392711),
    a = n(633302),
    u = n(960048);
let s = (e) => Math.round(4 * e) / 4,
    c = (e) => {
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
    let { SPEED: t, GRAVITY: n, DRAG: l, Y_POS: o, MAX_PARTICLES: d } = c(e),
        f = r.useRef([]);
    return {
        update: (t) => {
            let r = [];
            if (
                (f.current.forEach((i, a) => {
                    (i.position.x -= i.velocity.x * t), (i.position.y -= i.velocity.y * t), (i.velocity.x *= l ** t), (i.velocity.y *= l ** t), (i.velocity.y -= n * t), i.position.y > e.h && r.push(a);
                }),
                r.length > 0)
            ) {
                let e = f.current.filter((e, t) => !r.includes(t));
                f.current = e;
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
                    e.scale > 1 && t.setFilter({ blur: s((e.scale - 1) * 3) }),
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
                            : null != a.ZP.contentHasUnicodeOrEmoji(e.key)
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
                                u.Z.captureMessage("Simple Confetti couldn't trigger explosion for ".concat(e.key, ".  It doesn't have an image and seemingly isn't a valid unicode emoji."))),
                        t.setFilter({ blur: 0 });
                });
        },
        emit: (n, r) => {
            if (f.current.length >= d) return;
            let a = {
                min: e.h / 8,
                max: e.h / 3
            };
            for (let u = 0; u < r; u++)
                f.current.push({
                    position: {
                        x: e.w / 2 + (0, i.random)(-50, 50),
                        y: e.h - o
                    },
                    velocity: {
                        x: (0, i.random)(-t.x, t.x, !0),
                        y: t.y + (0, i.random)(-a.min, a.max, !0)
                    },
                    scale: (0, i.random)(0.8, 2),
                    rotation: (0, i.random)(-20, 20),
                    key: n
                });
        }
    };
};
