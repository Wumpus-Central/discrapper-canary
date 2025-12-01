n.d(t, {
    U: () => _,
    Z: () => b,
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
        SIZE_MAX: p.qh,
    },
    _ = (0, a.U)(() => ({
        particles: {},
        lastSpawned: {},
    }));
function g(e, t) {
    var n;
    i()(null != (n = _.getState().particles[e.id]) ? n : {}).forEach(t);
}
function b(e) {
    var t, n, r;
    let {
        emojiHose: a,
        context: b,
        canvasWidth: v,
        canvasHeight: h,
        fallbackColor: E,
        outlineColorDark: y,
        outlineColorLight: S,
        streamerId: O,
        deadDrawables: C,
    } = e;
    b.save();
    let w = s.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
        I = (0, d.np)(a.x, v),
        P = (0, d.np)(a.y, h),
        { outlineColor: j } = (0, d.bg)(a.userId, y, S, E);
    g(a, (e) => {
        (e.x += e.xSpeed * window.devicePixelRatio),
            (e.y += e.ySpeed * window.devicePixelRatio),
            (e.opacity -= e.opacitySpeed),
            e.opacity <= 0 &&
                (0, o.j)(() => {
                    _.setState(
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
            let a = null != (r = _.getState().lastSpawned[e.id]) ? r : 0,
                c = Date.now();
            !(a + 100 > c) &&
                e.state !== u.f.STOP &&
                (0.8 >= Math.random() || a + 300 < c) &&
                (0, o.j)(() => {
                    _.setState((r) => {
                        var a;
                        let o = null != (a = r.particles[e.id]) ? a : {},
                            c = i().random(1, 2);
                        for (let e = 0; e < c; e++) {
                            let e = {
                                id: (0, l.Z)(),
                                x: t + i().random(-m.X_OFFSET, m.X_OFFSET),
                                y: n + i().random(-m.Y_OFFSET, m.Y_OFFSET),
                                xSpeed: i().random(-m.X_SPEED, m.X_SPEED),
                                ySpeed: i().random(m.Y_SPEED_MIN, m.Y_SPEED_MAX),
                                opacity: m.OPACITY,
                                opacitySpeed: i().random(m.OPACITY_SPEED_MIN, m.OPACITY_SPEED_MAX),
                                size: i().random(m.SIZE_MIN, m.SIZE_MAX),
                            };
                            o[e.id] = e;
                        }
                        return (r.particles[e.id] = o), (r.lastSpawned[e.id] = Date.now()), r;
                    });
                });
        })(a, I, P),
        (0, f.I)(b, I, P, j, p.q2),
        (0, f.T)(b, I, P, a.userId),
        g(a, (e) =>
            (function (e, t, n) {
                if (null == t) return;
                let r = n.size * window.devicePixelRatio,
                    i = n.x - (r / 2) * window.devicePixelRatio,
                    l = n.y - 1.2 * r * window.devicePixelRatio;
                (e.globalAlpha = n.opacity), e.drawImage(t, r / 2 + i, r / 2 + l, r, r);
            })(b, w, e),
        ),
        a.lastUpdatedAt + p.FO < Date.now() && (0, c.ZZ)(O, a),
        a.state !== u.f.STOP ||
            Object.keys(null != (r = _.getState().particles[a.id]) ? r : {}).length > 0 ||
            C.push(a),
        b.restore();
}
