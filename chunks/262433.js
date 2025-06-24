n.d(t, {
    U: () => E,
    Z: () => h
}),
    n(539854);
var r = n(392711),
    l = n.n(r),
    i = n(772848),
    a = n(97519),
    u = n(731965),
    o = n(125268),
    s = n(673125),
    c = n(984063),
    d = n(88315),
    f = n(199766),
    m = n(813900);
let p = {
        X_OFFSET: 2 * m.qh,
        Y_OFFSET: 25,
        X_SPEED: 0.5,
        Y_SPEED_MIN: -1,
        Y_SPEED_MAX: -5,
        OPACITY: 1,
        OPACITY_SPEED_MIN: 0.01,
        OPACITY_SPEED_MAX: 0.05,
        SIZE_MIN: m.qh / 2,
        SIZE_MAX: m.qh
    },
    E = (0, a.U)(() => ({
        particles: {},
        lastSpawned: {}
    }));
function g(e, t) {
    var n;
    l()(null != (n = E.getState().particles[e.id]) ? n : {}).forEach(t);
}
function h(e) {
    var t, n, r;
    let { emojiHose: a, context: h, canvasWidth: S, canvasHeight: O, fallbackColor: v, outlineColorDark: b, outlineColorLight: I, streamerId: _, deadDrawables: y } = e;
    h.save();
    let Z = s.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ''),
        A = (0, d.np)(a.x, S),
        N = (0, d.np)(a.y, O),
        { outlineColor: R } = (0, d.bg)(a.userId, b, I, v);
    g(a, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, u.j)(() => {
                    E.setState((t) => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t));
                });
    }),
        (function (e, t, n) {
            var r;
            let a = null != (r = E.getState().lastSpawned[e.id]) ? r : 0,
                o = Date.now();
            !(a + 100 > o) &&
                e.state !== c.f.STOP &&
                (0.8 >= Math.random() || a + 300 < o) &&
                (0, u.j)(() => {
                    E.setState((r) => {
                        var a;
                        let u = null != (a = r.particles[e.id]) ? a : {},
                            o = l().random(1, 2);
                        for (let e = 0; e < o; e++) {
                            let e = {
                                id: (0, i.Z)(),
                                x: t + l().random(-p.X_OFFSET, p.X_OFFSET),
                                y: n + l().random(-p.Y_OFFSET, p.Y_OFFSET),
                                xSpeed: l().random(-p.X_SPEED, p.X_SPEED),
                                ySpeed: l().random(p.Y_SPEED_MIN, p.Y_SPEED_MAX),
                                opacity: p.OPACITY,
                                opacitySpeed: l().random(p.OPACITY_SPEED_MIN, p.OPACITY_SPEED_MAX),
                                size: l().random(p.SIZE_MIN, p.SIZE_MAX)
                            };
                            u[e.id] = e;
                        }
                        return (r.particles[e.id] = u), (r.lastSpawned[e.id] = Date.now()), r;
                    });
                });
        })(a, A, N),
        (0, f.I)(h, A, N, R, m.q2),
        (0, f.T)(h, A, N, a.userId),
        g(a, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let r = n.size * window.devicePixelRatio,
                    l = n.x - (r / 2) * window.devicePixelRatio,
                    i = n.y - 1.2 * r * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, r / 2 + l, r / 2 + i, r, r);
            })(h, Z, e)
        ),
        a.lastUpdatedAt + m.FO < Date.now() && (0, o.ZZ)(_, a),
        a.state !== c.f.STOP || Object.keys(null != (r = E.getState().particles[a.id]) ? r : {}).length > 0 || y.push(a),
        h.restore();
}
