(n.d(t, {
    U: () => O,
    Z: () => C
}),
    n(539854));
var r = n(392711),
    i = n.n(r),
    a = n(772848),
    o = n(97519),
    s = n(731965),
    l = n(125268),
    c = n(673125),
    u = n(984063),
    d = n(88315),
    f = n(199766),
    _ = n(813900);
let p = 0.8,
    h = 100,
    m = 300,
    g = 1,
    E = 2,
    b = 1.2,
    y = {
        X_OFFSET: 2 * _.qh,
        Y_OFFSET: 25,
        X_SPEED: 0.5,
        Y_SPEED_MIN: -1,
        Y_SPEED_MAX: -5,
        OPACITY: 1,
        OPACITY_SPEED_MIN: 0.01,
        OPACITY_SPEED_MAX: 0.05,
        SIZE_MIN: _.qh / 2,
        SIZE_MAX: _.qh
    },
    O = (0, o.U)(() => ({
        particles: {},
        lastSpawned: {}
    }));
function v(e, t) {
    return {
        id: (0, a.Z)(),
        x: e + i().random(-y.X_OFFSET, y.X_OFFSET),
        y: t + i().random(-y.Y_OFFSET, y.Y_OFFSET),
        xSpeed: i().random(-y.X_SPEED, y.X_SPEED),
        ySpeed: i().random(y.Y_SPEED_MIN, y.Y_SPEED_MAX),
        opacity: y.OPACITY,
        opacitySpeed: i().random(y.OPACITY_SPEED_MIN, y.OPACITY_SPEED_MAX),
        size: i().random(y.SIZE_MIN, y.SIZE_MAX)
    };
}
function I(e, t, n) {
    var r;
    let a = null != (r = O.getState().lastSpawned[e.id]) ? r : 0,
        o = Date.now();
    !(a + h > o) &&
        e.state !== u.f.STOP &&
        (Math.random() <= p || a + m < o) &&
        (0, s.j)(() => {
            O.setState((r) => {
                var a;
                let o = null != (a = r.particles[e.id]) ? a : {},
                    s = i().random(g, E);
                for (let e = 0; e < s; e++) {
                    let e = v(t, n);
                    o[e.id] = e;
                }
                return ((r.particles[e.id] = o), (r.lastSpawned[e.id] = Date.now()), r);
            });
        });
}
function T(e, t) {
    ((t.x += t.xSpeed * window.devicePixelRatio),
        (t.y += t.ySpeed * window.devicePixelRatio),
        (t.opacity -= t.opacitySpeed),
        t.opacity <= 0 &&
            (0, s.j)(() => {
                O.setState((n) => (delete n.particles[e.id][t.id], 0 === Object.keys(n.particles[e.id]).length && delete n.particles[e.id], n));
            }));
}
function S(e, t, n) {
    if (null == t) return;
    let r = n.size * window.devicePixelRatio,
        i = n.x - (r / 2) * window.devicePixelRatio,
        a = n.y - r * b * window.devicePixelRatio;
    ((e.globalAlpha = n.opacity), e.drawImage(t, r / 2 + i, r / 2 + a, r, r));
}
function A(e, t) {
    var n;
    i()(null != (n = O.getState().particles[e.id]) ? n : {}).forEach(t);
}
function N(e) {
    var t;
    return Object.keys(null != (t = O.getState().particles[e.id]) ? t : {}).length > 0;
}
function C(e) {
    var t, n;
    let { emojiHose: r, context: i, canvasWidth: a, canvasHeight: o, fallbackColor: s, outlineColorDark: p, outlineColorLight: h, streamerId: m, deadDrawables: g } = e;
    i.save();
    let E = c.Z.getEmojiImage(null != (n = null != (t = r.emojiId) ? t : r.emojiName) ? n : ''),
        b = (0, d.np)(r.x, a),
        y = (0, d.np)(r.y, o),
        { outlineColor: O } = (0, d.bg)(r.userId, p, h, s);
    (A(r, (e) => T(r, e)), I(r, b, y), (0, f.I)(i, b, y, O, _.q2), (0, f.T)(i, b, y, r.userId), A(r, (e) => S(i, E, e)), r.lastUpdatedAt + _.FO < Date.now() && (0, l.ZZ)(m, r), r.state !== u.f.STOP || N(r) || g.push(r), i.restore());
}
