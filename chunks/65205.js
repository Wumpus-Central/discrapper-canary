function r(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function l(e, t, n, l) {
    return r(e, n, l) !== r(t, n, l) && r(e, t, n) !== r(e, t, l);
}
function i(e, t, n) {
    let r = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    return {
        x: t.x + ((t.x - e.x) / r) * n,
        y: t.y + ((t.y - e.y) / r) * n
    };
}
function o(e, t, n) {
    let r = {
            x: n.x,
            y: n.y
        },
        i = {
            x: n.x + n.width,
            y: n.y
        },
        o = {
            x: n.x,
            y: n.y + n.height
        },
        a = {
            x: n.x + n.width,
            y: n.y + n.height
        };
    return l(e, t, r, i) || l(e, t, i, a) || l(e, t, a, o) || l(e, t, o, r);
}
n.d(t, {
    Vr: () => o,
    ld: () => i
});
