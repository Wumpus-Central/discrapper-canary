function l(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function r(e, t, n, r) {
    return l(e, n, r) !== l(t, n, r) && l(e, t, n) !== l(e, t, r);
}
function i(e, t, n) {
    let l = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    return {
        x: t.x + ((t.x - e.x) / l) * n,
        y: t.y + ((t.y - e.y) / l) * n
    };
}
function a(e, t, n) {
    let l = {
            x: n.x,
            y: n.y
        },
        i = {
            x: n.x + n.width,
            y: n.y
        },
        a = {
            x: n.x,
            y: n.y + n.height
        },
        o = {
            x: n.x + n.width,
            y: n.y + n.height
        };
    return r(e, t, l, i) || r(e, t, i, o) || r(e, t, o, a) || r(e, t, a, l);
}
n.d(t, {
    Vr: () => a,
    ld: () => i
});
