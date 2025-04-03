n.d(t, {
    U: () => g,
    Z: () => h
}),
    n(653041);
var r = n(392711),
    l = n.n(r),
    i = n(772848),
    a = n(230383),
    o = n(731965),
    s = n(125268),
    u = n(673125),
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
    let { emojiHose: a, context: h, canvasWidth: v, canvasHeight: b, fallbackColor: S, outlineColorDark: y, outlineColorLight: O, streamerId: Z, deadDrawables: I } = e;
    h.save();
    let j = u.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ''),
        x = (0, d.np)(a.x, v),
        N = (0, d.np)(a.y, b),
        { outlineColor: _ } = (0, d.bg)(a.userId, y, O, S);
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
                s = Date.now();
            !(a + 100 > s) &&
                e.state !== c.f.STOP &&
                (0.8 >= Math.random() || a + 300 < s) &&
                (0, o.j)(() => {
                    g.setState((r) => {
                        var a;
                        let o = null != (a = r.particles[e.id]) ? a : {},
                            s = l().random(1, 2);
                        for (let e = 0; e < s; e++) {
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
                            o[e.id] = e;
                        }
                        return (r.particles[e.id] = o), (r.lastSpawned[e.id] = Date.now()), r;
                    });
                });
        })(a, x, N),
        (0, f.I)(h, x, N, _, m.q2),
        (0, f.T)(h, x, N, a.userId),
        E(a, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let r = n.size * window.devicePixelRatio,
                    l = n.x - (r / 2) * window.devicePixelRatio,
                    i = n.y - 1.2 * r * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, r / 2 + l, r / 2 + i, r, r);
            })(h, j, e)
        ),
        a.lastUpdatedAt + m.FO < Date.now() && (0, s.ZZ)(Z, a),
        a.state !== c.f.STOP || Object.keys(null != (r = g.getState().particles[a.id]) ? r : {}).length > 0 || I.push(a),
        h.restore();
}
