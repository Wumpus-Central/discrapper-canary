n.d(t, {
    U: () => p,
    Z: () => g
}),
    n(653041);
var l = n(392711),
    i = n.n(l),
    r = n(772848),
    a = n(15729),
    s = n(731965),
    o = n(125268),
    u = n(673125),
    c = n(984063),
    d = n(88315),
    m = n(199766),
    f = n(813900);
let h = {
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
    p = (0, a.U)(() => ({
        particles: {},
        lastSpawned: {}
    }));
function v(e, t) {
    var n;
    i()(null !== (n = p.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t);
}
function g(e) {
    var t, n, l;
    let { emojiHose: a, context: g, canvasWidth: E, canvasHeight: x, fallbackColor: Z, outlineColorDark: S, outlineColorLight: C, streamerId: b, deadDrawables: I } = e;
    g.save();
    let _ = u.Z.getEmojiImage(null !== (n = null !== (t = a.emojiId) && void 0 !== t ? t : a.emojiName) && void 0 !== n ? n : ''),
        R = (0, d.np)(a.x, E),
        y = (0, d.np)(a.y, x),
        { outlineColor: j } = (0, d.bg)(a.userId, S, C, Z);
    v(a, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, s.j)(() => {
                    p.setState((t) => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t));
                });
    }),
        !(function (e, t, n) {
            var l;
            let a = null !== (l = p.getState().lastSpawned[e.id]) && void 0 !== l ? l : 0,
                o = Date.now();
            !(a + 100 > o) &&
                e.state !== c.f.STOP &&
                (0.8 >= Math.random() || a + 300 < o) &&
                (0, s.j)(() => {
                    p.setState((l) => {
                        var a;
                        let s = null !== (a = l.particles[e.id]) && void 0 !== a ? a : {},
                            o = i().random(1, 2);
                        for (let e = 0; e < o; e++) {
                            let e = {
                                id: (0, r.Z)(),
                                x: t + i().random(-h.X_OFFSET, h.X_OFFSET),
                                y: n + i().random(-h.Y_OFFSET, h.Y_OFFSET),
                                xSpeed: i().random(-h.X_SPEED, h.X_SPEED),
                                ySpeed: i().random(h.Y_SPEED_MIN, h.Y_SPEED_MAX),
                                opacity: h.OPACITY,
                                opacitySpeed: i().random(h.OPACITY_SPEED_MIN, h.OPACITY_SPEED_MAX),
                                size: i().random(h.SIZE_MIN, h.SIZE_MAX)
                            };
                            s[e.id] = e;
                        }
                        return (l.particles[e.id] = s), (l.lastSpawned[e.id] = Date.now()), l;
                    });
                });
        })(a, R, y),
        (0, m.I)(g, R, y, j, f.q2),
        (0, m.T)(g, R, y, a.userId),
        v(a, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let l = n.size * window.devicePixelRatio,
                    i = n.x - (l / 2) * window.devicePixelRatio,
                    r = n.y - 1.2 * l * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, l / 2 + i, l / 2 + r, l, l);
            })(g, _, e)
        ),
        a.lastUpdatedAt + f.FO < Date.now() && (0, o.ZZ)(b, a),
        a.state === c.f.STOP && !(Object.keys(null !== (l = p.getState().particles[a.id]) && void 0 !== l ? l : {}).length > 0) && I.push(a),
        g.restore();
}
