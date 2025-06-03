n.d(t, {
    U: () => g,
    Z: () => h
}),
    n(539854);
var r = n(392711),
    l = n.n(r),
    i = n(772848),
    a = n(97519),
    o = n(731965),
    u = n(125268),
    s = n(673125),
    c = n(984063),
    d = n(88315),
    f = n(199766),
    p = n(813900);
let m = {
        X_OFFSET: 2 * p.qh,
        Y_OFFSET: 25,
        X_SPEED: 0.5,
        Y_SPEED_MIN: -1,
        Y_SPEED_MAX: -5,
        OPACITY: 1,
        OPACITY_SPEED_MIN: 0.01,
        OPACITY_SPEED_MAX: 0.05,
        SIZE_MIN: p.qh / 2,
        SIZE_MAX: p.qh
    },
    g = (0, a.U)(() => ({
        particles: {},
        lastSpawned: {}
    }));
function E(e, t) {
    var n;
    l()(null != (n = g.getState().particles[e.id]) ? n : {}).forEach(t);
}
function h(e) {
    var t, n, r;
    let { emojiHose: a, context: h, canvasWidth: v, canvasHeight: S, fallbackColor: b, outlineColorDark: y, outlineColorLight: O, streamerId: Z, deadDrawables: j } = e;
    h.save();
    let _ = s.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ''),
        I = (0, d.np)(a.x, v),
        w = (0, d.np)(a.y, S),
        { outlineColor: P } = (0, d.bg)(a.userId, y, O, b);
    E(a, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, o.j)(() => {
                    g.setState((t) => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t));
                });
    }),
        (function (e, t, n) {
            var r;
            let a = null != (r = g.getState().lastSpawned[e.id]) ? r : 0,
                u = Date.now();
            !(a + 100 > u) &&
                e.state !== c.f.STOP &&
                (0.8 >= Math.random() || a + 300 < u) &&
                (0, o.j)(() => {
                    g.setState((r) => {
                        var a;
                        let o = null != (a = r.particles[e.id]) ? a : {},
                            u = l().random(1, 2);
                        for (let e = 0; e < u; e++) {
                            let e = {
                                id: (0, i.Z)(),
                                x: t + l().random(-m.X_OFFSET, m.X_OFFSET),
                                y: n + l().random(-m.Y_OFFSET, m.Y_OFFSET),
                                xSpeed: l().random(-m.X_SPEED, m.X_SPEED),
                                ySpeed: l().random(m.Y_SPEED_MIN, m.Y_SPEED_MAX),
                                opacity: m.OPACITY,
                                opacitySpeed: l().random(m.OPACITY_SPEED_MIN, m.OPACITY_SPEED_MAX),
                                size: l().random(m.SIZE_MIN, m.SIZE_MAX)
                            };
                            o[e.id] = e;
                        }
                        return (r.particles[e.id] = o), (r.lastSpawned[e.id] = Date.now()), r;
                    });
                });
        })(a, I, w),
        (0, f.I)(h, I, w, P, p.q2),
        (0, f.T)(h, I, w, a.userId),
        E(a, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let r = n.size * window.devicePixelRatio,
                    l = n.x - (r / 2) * window.devicePixelRatio,
                    i = n.y - 1.2 * r * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, r / 2 + l, r / 2 + i, r, r);
            })(h, _, e)
        ),
        a.lastUpdatedAt + p.FO < Date.now() && (0, u.ZZ)(Z, a),
        a.state !== c.f.STOP || Object.keys(null != (r = g.getState().particles[a.id]) ? r : {}).length > 0 || j.push(a),
        h.restore();
}
