(n.d(t, { Z: () => d }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(392711),
    i = n.n(o),
    a = n(108542),
    c = n(748780),
    l = n(481060);
let u = ['right', 'left'];
function d(e) {
    var t;
    let { className: n, width: o, imageSize: d, minSteps: f = 1, maxSteps: p = 1, minYDistance: m = 0, maxYDistance: g = 0, maxYDelta: b, minSpeed: y, maxSpeed: h, isPaused: x, children: v } = e,
        [O, j] = (0, s.useState)(0),
        [N, _] = (0, s.useState)(null != (t = i().sample(u)) ? t : u[0]),
        P = (0, s.useRef)(i().random(y, h)),
        w = (0, s.useRef)(i().random(f, p)),
        C = 'right' === N ? -d : o + d,
        Z = 'right' === N ? o + d : -d,
        [S, I] = (0, l.q_F)(() => ({
            x: i().random(o),
            y: 0,
            rotateZ: 0
        }));
    return (
        (0, s.useEffect)(() => {
            let e = !1;
            return (
                (async () => {
                    var t, n;
                    let r = (Z - C) / w.current,
                        s = Math.abs((S.x.get() - C) / r),
                        a = w.current - s;
                    for (let n = 0; n < a && !e; n++) {
                        let e = S.x.get(),
                            n = S.y.get(),
                            s = ((t = i().random(m, g)), null != b && (n + t > b || n + t < -b) ? (t < 0 ? -b : b) : t),
                            o = S.x.get() + r,
                            a = 'right' === N ? Math.min(o, Z) : Math.max(o, Z),
                            l = s - n,
                            u = Math.abs(a - e),
                            d = (180 / Math.PI) * Math.atan2(l, u) * ('right' === N ? 1 : -1),
                            f = (Math.sqrt(u ** 2 + l ** 2) / P.current) * 1000;
                        await I({
                            x: a,
                            y: s,
                            rotateZ: d,
                            config: {
                                easing: c.Z.Easing.linear,
                                duration: f
                            }
                        });
                    }
                    if (!e) {
                        ((w.current = i().random(f, p)), (P.current = i().random(y, h)));
                        let e = null != (n = i().sample(u)) ? n : u[0],
                            t = 'right' === e ? -d : o + d;
                        (await I({
                            x: t,
                            y: 0,
                            rotateZ: 0,
                            immediate: !0
                        }),
                            _(e));
                    }
                    j(O + 1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [S.x, S.y, N, Z, d, O, h, p, b, g, y, f, m, I, P, C, o]),
        (0, s.useEffect)(() => {
            try {
                x ? (S.x.pause(), S.y.pause(), S.rotateZ.pause()) : (S.x.resume(), S.y.resume(), S.rotateZ.resume());
            } catch (e) {}
        }, [S.rotateZ, S.x, S.y, x]),
        (0, r.jsx)(a.animated.div, {
            style: S,
            className: n,
            children: v(N)
        })
    );
}
