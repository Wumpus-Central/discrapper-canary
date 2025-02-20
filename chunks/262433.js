n.d(t, {
    U: () => h,
    Z: () => g
}),
    n(653041);
var r = n(392711),
    l = n.n(r),
    i = n(772848),
    a = n(15729),
    o = n(731965),
    s = n(125268),
    c = n(673125),
    u = n(984063),
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
    h = (0, a.U)(() => ({
        particles: {},
        lastSpawned: {}
    }));
function v(e, t) {
    var n;
    l()(null !== (n = h.getState().particles[e.id]) && void 0 !== n ? n : {}).forEach(t);
}
function g(e) {
    var t, n, r;
    let { emojiHose: a, context: g, canvasWidth: b, canvasHeight: y, fallbackColor: E, outlineColorDark: O, outlineColorLight: S, streamerId: j, deadDrawables: x } = e;
    g.save();
    let Z = c.Z.getEmojiImage(null !== (n = null !== (t = a.emojiId) && void 0 !== t ? t : a.emojiName) && void 0 !== n ? n : ''),
        w = (0, d.np)(a.x, b),
        C = (0, d.np)(a.y, y),
        { outlineColor: P } = (0, d.bg)(a.userId, O, S, E);
    v(a, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, o.j)(() => {
                    h.setState((t) => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t));
                });
    }),
        !(function (e, t, n) {
            var r;
            let a = null !== (r = h.getState().lastSpawned[e.id]) && void 0 !== r ? r : 0,
                s = Date.now();
            !(a + 100 > s) &&
                e.state !== u.f.STOP &&
                (0.8 >= Math.random() || a + 300 < s) &&
                (0, o.j)(() => {
                    h.setState((r) => {
                        var a;
                        let o = null !== (a = r.particles[e.id]) && void 0 !== a ? a : {},
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
        })(a, w, C),
        (0, f.I)(g, w, C, P, m.q2),
        (0, f.T)(g, w, C, a.userId),
        v(a, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let r = n.size * window.devicePixelRatio,
                    l = n.x - (r / 2) * window.devicePixelRatio,
                    i = n.y - 1.2 * r * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, r / 2 + l, r / 2 + i, r, r);
            })(g, Z, e)
        ),
        a.lastUpdatedAt + m.FO < Date.now() && (0, s.ZZ)(j, a),
        a.state === u.f.STOP && !(Object.keys(null !== (r = h.getState().particles[a.id]) && void 0 !== r ? r : {}).length > 0) && x.push(a),
        g.restore();
}
