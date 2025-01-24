n.d(t, {
    U: function () {
        return h;
    },
    Z: function () {
        return v;
    }
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
    var t, n, i, r;
    let { emojiHose: v, context: I, canvasWidth: S, canvasHeight: _, fallbackColor: x, outlineColorDark: E, outlineColorLight: C, streamerId: y, deadDrawables: Z } = e;
    I.save();
    let b = c.Z.getEmojiImage(null !== (n = null !== (t = v.emojiId) && void 0 !== t ? t : v.emojiName) && void 0 !== n ? n : ''),
        T = (0, d.np)(v.x, S),
        N = (0, d.np)(v.y, _),
        { outlineColor: A } = (0, d.bg)(v.userId, E, C, x);
    if (
        (g(v, (e) => {
            var t, n;
            return (
                (t = v),
                (n = e),
                void ((n.x += n.xSpeed * window.devicePixelRatio),
                (n.y += n.ySpeed * window.devicePixelRatio),
                (n.opacity -= n.opacitySpeed),
                n.opacity <= 0 &&
                    (0, s.j)(() => {
                        h.setState((e) => (delete e.particles[t.id][n.id], 0 === Object.keys(e.particles[t.id]).length && delete e.particles[t.id], e));
                    }))
            );
        }),
        !(function (e, t, n) {
            var i;
            let r = null !== (i = h.getState().lastSpawned[e.id]) && void 0 !== i ? i : 0,
                o = Date.now();
            if (!(r + 100 > o) && e.state !== u.f.STOP && !!(0.8 >= Math.random() || r + 300 < o))
                (0, s.j)(() => {
                    h.setState((i) => {
                        var r, s, o;
                        let c = null !== (r = i.particles[e.id]) && void 0 !== r ? r : {},
                            u = l().random(1, 2);
                        for (let e = 0; e < u; e++) {
                            let e =
                                ((s = t),
                                (o = n),
                                {
                                    id: (0, a.Z)(),
                                    x: s + l().random(-p.X_OFFSET, p.X_OFFSET),
                                    y: o + l().random(-p.Y_OFFSET, p.Y_OFFSET),
                                    xSpeed: l().random(-p.X_SPEED, p.X_SPEED),
                                    ySpeed: l().random(p.Y_SPEED_MIN, p.Y_SPEED_MAX),
                                    opacity: p.OPACITY,
                                    opacitySpeed: l().random(p.OPACITY_SPEED_MIN, p.OPACITY_SPEED_MAX),
                                    size: l().random(p.SIZE_MIN, p.SIZE_MAX)
                                });
                            c[e.id] = e;
                        }
                        return (i.particles[e.id] = c), (i.lastSpawned[e.id] = Date.now()), i;
                    });
                });
        })(v, T, N),
        (0, m.I)(I, T, N, A, f.q2),
        (0, m.T)(I, T, N, v.userId),
        g(v, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let i = n.size * window.devicePixelRatio,
                    l = n.x - (i / 2) * window.devicePixelRatio,
                    a = n.y - 1.2 * i * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, i / 2 + l, i / 2 + a, i, i);
            })(I, b, e)
        ),
        v.lastUpdatedAt + f.FO < Date.now() && (0, o.ZZ)(y, v),
        v.state === u.f.STOP && ((i = v), !(Object.keys(null !== (r = h.getState().particles[i.id]) && void 0 !== r ? r : {}).length > 0)))
    )
        Z.push(v);
    I.restore();
}
