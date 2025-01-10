n(653041);
var r = n(192379),
    i = n(392711);
let u = (e) => {
    let t = {
        y: 0.9 * e.h,
        x: 0.3 * e.w
    };
    return {
        SPEED: t,
        GRAVITY: 1100,
        DRAG: 0.92,
        Y_POS: 110
    };
};
t.Z = (e) => {
    let { SPEED: t, GRAVITY: n, DRAG: a, Y_POS: c } = u(e),
        l = r.useRef([]);
    return {
        update: (t) => {
            let r = [];
            if (
                (l.current.forEach((i, u) => {
                    (i.position.x -= i.velocity.x * t), (i.position.y -= i.velocity.y * t), (i.velocity.x *= a ** t), (i.velocity.y *= a ** t), (i.velocity.y -= n * t), i.position.y > e.h && r.push(u);
                }),
                r.length > 0)
            ) {
                let e = l.current.filter((e, t) => !r.includes(t));
                l.current = e;
            }
        },
        draw: (t) => {
            t.clearRect({
                x: 0,
                y: 0,
                w: e.w,
                h: e.h
            }),
                l.current.forEach((e) => {
                    let { x: n, y: r } = e.position;
                    e.scale > 1 && t.setFilter({ blur: (e.scale - 1) * 3 }),
                        t.drawImage(
                            e.key,
                            {
                                x: n,
                                y: r
                            },
                            {
                                w: 32 * e.scale,
                                h: 32 * e.scale
                            }
                        ),
                        t.setFilter({ blur: 0 });
                });
        },
        emit: (n, r) => {
            let u = {
                min: e.h / 8,
                max: e.h / 3
            };
            for (let a = 0; a < r; a++)
                l.current.push({
                    position: {
                        x: e.w / 2 + (0, i.random)(-50, 50),
                        y: e.h - c
                    },
                    velocity: {
                        x: (0, i.random)(-t.x, t.x, !0),
                        y: t.y + (0, i.random)(-u.min, u.max, !0)
                    },
                    color: 'red',
                    scale: (0, i.random)(0.8, 2),
                    rotation: (0, i.random)(-20, 20),
                    key: n
                });
        }
    };
};
