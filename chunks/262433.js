n.d(t, {
    U: () => h,
    Z: () => v
}),
    n(653041);
var i = n(392711),
    l = n.n(i),
    a = n(772848),
    r = n(15729),
    s = n(731965),
    o = n(125268),
    c = n(673125),
    u = n(984063),
    d = n(88315),
    m = n(199766),
    f = n(813900);
let p = {
        X_OFFSET: 2 * f.qh,
        Y_OFFSET: 25,
        X_SPEED: 0.5,
        Y_SPEED_MIN: -1,
        Y_SPEED_MAX: -5,
        OPACITY: 1,
        OPACITY_SPEED_MIN: 0.01,
        OPACITY_SPEED_MAX: 0.05,
        SIZE_MIN: f.qh / 2,
        SIZE_MAX: f.qh
    },
    h = (0, r.U)(() => ({
        particles: {},
        lastSpawned: {}
    }));
function g(e, t) {
    var n;
    l()(null !== (n = h.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t);
}
function v(e) {
    var t, n, i;
    let { emojiHose: r, context: v, canvasWidth: _, canvasHeight: S, fallbackColor: I, outlineColorDark: x, outlineColorLight: E, streamerId: C, deadDrawables: Z } = e;
    v.save();
    let y = c.Z.getEmojiImage(null !== (n = null !== (t = r.emojiId) && void 0 !== t ? t : r.emojiName) && void 0 !== n ? n : ''),
        b = (0, d.np)(r.x, _),
        N = (0, d.np)(r.y, S),
        { outlineColor: T } = (0, d.bg)(r.userId, x, E, I);
    g(r, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, s.j)(() => {
                    h.setState((t) => (delete t.particles[r.id][e.id], 0 === Object.keys(t.particles[r.id]).length && delete t.particles[r.id], t));
                });
    }),
        !(function (e, t, n) {
            var i;
            let r = null !== (i = h.getState().lastSpawned[e.id]) && void 0 !== i ? i : 0,
                o = Date.now();
            !(r + 100 > o) &&
                e.state !== u.f.STOP &&
                (0.8 >= Math.random() || r + 300 < o) &&
                (0, s.j)(() => {
                    h.setState((i) => {
                        var r;
                        let s = null !== (r = i.particles[e.id]) && void 0 !== r ? r : {},
                            o = l().random(1, 2);
                        for (let e = 0; e < o; e++) {
                            let e = {
                                id: (0, a.Z)(),
                                x: t + l().random(-p.X_OFFSET, p.X_OFFSET),
                                y: n + l().random(-p.Y_OFFSET, p.Y_OFFSET),
                                xSpeed: l().random(-p.X_SPEED, p.X_SPEED),
                                ySpeed: l().random(p.Y_SPEED_MIN, p.Y_SPEED_MAX),
                                opacity: p.OPACITY,
                                opacitySpeed: l().random(p.OPACITY_SPEED_MIN, p.OPACITY_SPEED_MAX),
                                size: l().random(p.SIZE_MIN, p.SIZE_MAX)
                            };
                            s[e.id] = e;
                        }
                        return (i.particles[e.id] = s), (i.lastSpawned[e.id] = Date.now()), i;
                    });
                });
        })(r, b, N),
        (0, m.I)(v, b, N, T, f.q2),
        (0, m.T)(v, b, N, r.userId),
        g(r, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let i = n.size * window.devicePixelRatio,
                    l = n.x - (i / 2) * window.devicePixelRatio,
                    a = n.y - 1.2 * i * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, i / 2 + l, i / 2 + a, i, i);
            })(v, y, e)
        ),
        r.lastUpdatedAt + f.FO < Date.now() && (0, o.ZZ)(C, r),
        r.state === u.f.STOP && !(Object.keys(null !== (i = h.getState().particles[r.id]) && void 0 !== i ? i : {}).length > 0) && Z.push(r),
        v.restore();
}
