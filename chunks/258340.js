t(653041);
var r = t(192379),
    i = t(392711);
n.Z = (e) => {
    let n = {
            y: 0.8 * e.h,
            x: 0.3 * e.w
        },
        t = r.useRef([]);
    return {
        update: (n) => {
            let r = [];
            if (
                (t.current.forEach((t, i) => {
                    (t.position.x -= t.velocity.x * n), (t.position.y -= t.velocity.y * n), (t.velocity.x *= 0.92 ** n), (t.velocity.y *= 0.92 ** n), (t.velocity.y -= 1200 * n), t.position.y > e.h && r.push(i);
                }),
                r.length > 0)
            ) {
                let e = t.current.filter((e, n) => !r.includes(n));
                t.current = e;
            }
        },
        draw: (n) => {
            n.clearRect({
                x: 0,
                y: 0,
                w: e.w,
                h: e.h
            }),
                t.current.forEach((e) => {
                    let { x: t, y: r } = e.position;
                    n.drawImage(
                        e.key,
                        {
                            x: t,
                            y: r
                        },
                        {
                            w: 32 * e.scale,
                            h: 32 * e.scale
                        }
                    );
                });
        },
        emit: (r, a) => {
            for (let c = 0; c < a; c++)
                t.current.push({
                    position: {
                        x: e.w / 2 + (0, i.random)(-50, 50),
                        y: e.h
                    },
                    velocity: {
                        x: (0, i.random)(-n.x, n.x, !0),
                        y: n.y + (0, i.random)(-150, 150, !0)
                    },
                    color: 'red',
                    scale: (0, i.random)(0.8, 1.6),
                    rotation: (0, i.random)(-20, 20),
                    key: r
                });
        }
    };
};
