n.d(t, {
    U: () => m,
    Z: () => b,
}),
    n(539854);
var r = n(392711),
    i = n.n(r),
    l = n(772848),
    a = n(191336),
    o = n(731965),
    s = n(125268),
    c = n(673125),
    u = n(984063),
    d = n(88315),
    p = n(199766),
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
        SIZE_MAX: f.qh,
    },
    m = (0, a.U)(() => ({
        particles: {},
        lastSpawned: {},
    }));
function g(e, t) {
    var n;
    i()(null != (n = m.getState().particles[e.id]) ? n : {}).forEach(t);
}
function b(e) {
    var t, n, r;
    let {
        emojiHose: a,
        context: b,
        canvasWidth: _,
        canvasHeight: y,
        fallbackColor: C,
        outlineColorDark: v,
        outlineColorLight: O,
        streamerId: x,
        deadDrawables: E,
    } = e;
    b.save();
    let j = c.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
        S = (0, d.np)(a.x, _),
        P = (0, d.np)(a.y, y),
        { outlineColor: I } = (0, d.bg)(a.userId, v, O, C);
    g(a, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, o.j)(() => {
                    m.setState(
                        (t) => (
                            delete t.particles[a.id][e.id],
                            0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id],
                            t
                        ),
                    );
                });
    }),
        (function (e, t, n) {
            var r;
            let a = null != (r = m.getState().lastSpawned[e.id]) ? r : 0,
                s = Date.now();
            !(a + 100 > s) &&
                e.state !== u.f.STOP &&
                (0.8 >= Math.random() || a + 300 < s) &&
                (0, o.j)(() => {
                    m.setState((r) => {
                        var a;
                        let o = null != (a = r.particles[e.id]) ? a : {},
                            s = i().random(1, 2);
                        for (let e = 0; e < s; e++) {
                            let e = {
                                id: (0, l.Z)(),
                                x: t + i().random(-h.X_OFFSET, h.X_OFFSET),
                                y: n + i().random(-h.Y_OFFSET, h.Y_OFFSET),
                                xSpeed: i().random(-h.X_SPEED, h.X_SPEED),
                                ySpeed: i().random(h.Y_SPEED_MIN, h.Y_SPEED_MAX),
                                opacity: h.OPACITY,
                                opacitySpeed: i().random(h.OPACITY_SPEED_MIN, h.OPACITY_SPEED_MAX),
                                size: i().random(h.SIZE_MIN, h.SIZE_MAX),
                            };
                            o[e.id] = e;
                        }
                        return (r.particles[e.id] = o), (r.lastSpawned[e.id] = Date.now()), r;
                    });
                });
        })(a, S, P),
        (0, p.I)(b, S, P, I, f.q2),
        (0, p.T)(b, S, P, a.userId),
        g(a, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let r = n.size * window.devicePixelRatio,
                    i = n.x - (r / 2) * window.devicePixelRatio,
                    l = n.y - 1.2 * r * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, r / 2 + i, r / 2 + l, r, r);
            })(b, j, e),
        ),
        a.lastUpdatedAt + f.FO < Date.now() && (0, s.ZZ)(x, a),
        a.state !== u.f.STOP ||
            Object.keys(null != (r = m.getState().particles[a.id]) ? r : {}).length > 0 ||
            E.push(a),
        b.restore();
}
