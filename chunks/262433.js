n.d(t, {
    U: () => m,
    Z: () => v,
}),
    n(539854);
var r = n(392711),
    i = n.n(r),
    l = n(772848),
    a = n(663042),
    o = n(731965),
    c = n(125268),
    s = n(673125),
    u = n(984063),
    d = n(88315),
    f = n(199766),
    p = n(813900);
let b = {
        X_OFFSET: 2 * p.qh,
        Y_OFFSET: 25,
        X_SPEED: 0.5,
        Y_SPEED_MIN: -1,
        Y_SPEED_MAX: -5,
        OPACITY: 1,
        OPACITY_SPEED_MIN: 0.01,
        OPACITY_SPEED_MAX: 0.05,
        SIZE_MIN: p.qh / 2,
        SIZE_MAX: p.qh,
    },
    m = (0, a.U)(() => ({
        particles: {},
        lastSpawned: {},
    }));
function g(e, t) {
    var n;
    i()(null != (n = m.getState().particles[e.id]) ? n : {}).forEach(t);
}
function v(e) {
    var t, n, r;
    let {
        emojiHose: a,
        context: v,
        canvasWidth: h,
        canvasHeight: E,
        fallbackColor: _,
        outlineColorDark: y,
        outlineColorLight: S,
        streamerId: O,
        deadDrawables: C,
    } = e;
    v.save();
    let w = s.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
        I = (0, d.np)(a.x, h),
        P = (0, d.np)(a.y, E),
        { outlineColor: j } = (0, d.bg)(a.userId, y, S, _);
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
                c = Date.now();
            !(a + 100 > c) &&
                e.state !== u.f.STOP &&
                (0.8 >= Math.random() || a + 300 < c) &&
                (0, o.j)(() => {
                    m.setState((r) => {
                        var a;
                        let o = null != (a = r.particles[e.id]) ? a : {},
                            c = i().random(1, 2);
                        for (let e = 0; e < c; e++) {
                            let e = {
                                id: (0, l.Z)(),
                                x: t + i().random(-b.X_OFFSET, b.X_OFFSET),
                                y: n + i().random(-b.Y_OFFSET, b.Y_OFFSET),
                                xSpeed: i().random(-b.X_SPEED, b.X_SPEED),
                                ySpeed: i().random(b.Y_SPEED_MIN, b.Y_SPEED_MAX),
                                opacity: b.OPACITY,
                                opacitySpeed: i().random(b.OPACITY_SPEED_MIN, b.OPACITY_SPEED_MAX),
                                size: i().random(b.SIZE_MIN, b.SIZE_MAX),
                            };
                            o[e.id] = e;
                        }
                        return (r.particles[e.id] = o), (r.lastSpawned[e.id] = Date.now()), r;
                    });
                });
        })(a, I, P),
        (0, f.I)(v, I, P, j, p.q2),
        (0, f.T)(v, I, P, a.userId),
        g(a, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let r = n.size * window.devicePixelRatio,
                    i = n.x - (r / 2) * window.devicePixelRatio,
                    l = n.y - 1.2 * r * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, r / 2 + i, r / 2 + l, r, r);
            })(v, w, e),
        ),
        a.lastUpdatedAt + p.FO < Date.now() && (0, c.ZZ)(O, a),
        a.state !== u.f.STOP ||
            Object.keys(null != (r = m.getState().particles[a.id]) ? r : {}).length > 0 ||
            C.push(a),
        v.restore();
}
