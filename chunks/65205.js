function l(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function r(e, t, n, r) {
    return l(e, n, r) !== l(t, n, r) && l(e, t, n) !== l(e, t, r);
}
function s(e, t, n) {
    let l = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    return {
        x: t.x + ((t.x - e.x) / l) * n,
        y: t.y + ((t.y - e.y) / l) * n
    };
}
function i(e, t, n) {
    let l = {
            x: n.x,
            y: n.y
        },
        s = {
            x: n.x + n.width,
            y: n.y
        },
        i = {
            x: n.x,
            y: n.y + n.height
        },
        o = {
            x: n.x + n.width,
            y: n.y + n.height
        };
    return r(e, t, l, s) || r(e, t, s, o) || r(e, t, o, i) || r(e, t, i, l);
}
n.d(t, {
    Vr: function () {
        return i;
    },
    ld: function () {
        return s;
    }
});
