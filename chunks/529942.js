n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(392711),
    i = n.n(o),
    a = n(642128),
    c = n(748780),
    l = n(481060);
let u = ['right', 'left'];
function d(e) {
    var t;
    let { className: n, width: o, imageSize: d, minSteps: f = 1, maxSteps: p = 1, minYDistance: m = 0, maxYDistance: g = 0, maxYDelta: b, minSpeed: y, maxSpeed: h, isPaused: v, children: x } = e,
        [N, O] = (0, s.useState)(0),
        [j, Z] = (0, s.useState)(null !== (t = i().sample(u)) && void 0 !== t ? t : u[0]),
        _ = (0, s.useRef)(i().random(y, h)),
        P = (0, s.useRef)(i().random(f, p)),
        C = 'right' === j ? -d : o + d,
        w = 'right' === j ? o + d : -d,
        [E, S] = (0, l.q_F)(() => ({
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
                    let r = (w - C) / P.current,
                        s = Math.abs((E.x.get() - C) / r),
                        a = P.current - s;
                    for (let n = 0; n < a && !e; n++) {
                        let e = E.x.get(),
                            n = E.y.get(),
                            s = ((t = i().random(m, g)), null != b && (n + t > b || n + t < -b) ? (t < 0 ? -b : b) : t),
                            o = E.x.get() + r,
                            a = 'right' === j ? Math.min(o, w) : Math.max(o, w),
                            l = s - n,
                            u = Math.abs(a - e),
                            d = (180 / Math.PI) * Math.atan2(l, u) * ('right' === j ? 1 : -1),
                            f = (Math.sqrt(u ** 2 + l ** 2) / _.current) * 1000;
                        await S({
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
                        (P.current = i().random(f, p)), (_.current = i().random(y, h));
                        let e = null !== (n = i().sample(u)) && void 0 !== n ? n : u[0],
                            t = 'right' === e ? -d : o + d;
                        await S({
                            x: t,
                            y: 0,
                            rotateZ: 0,
                            immediate: !0
                        }),
                            Z(e);
                    }
                    O(N + 1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [E.x, E.y, j, w, d, N, h, p, b, g, y, f, m, S, _, C, o]),
        (0, s.useEffect)(() => {
            try {
                v ? (E.x.pause(), E.y.pause(), E.rotateZ.pause()) : (E.x.resume(), E.y.resume(), E.rotateZ.resume());
            } catch (e) {}
        }, [E.rotateZ, E.x, E.y, v]),
        (0, r.jsx)(a.animated.div, {
            style: E,
            className: n,
            children: x(j)
        })
    );
}
