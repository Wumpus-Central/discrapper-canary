function l(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function s(e, t, n, s) {
    return l(e, n, s) !== l(t, n, s) && l(e, t, n) !== l(e, t, s);
}
function r(e, t, n) {
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
        r = {
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
    return s(e, t, l, r) || s(e, t, r, o) || s(e, t, o, i) || s(e, t, i, l);
}
n.d(t, {
    Vr: function () {
        return i;
    },
    ld: function () {
        return r;
    }
});
