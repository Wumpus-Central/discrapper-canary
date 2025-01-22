function i(e, n) {
    return {
        x: e.x + n.x,
        y: e.y + n.y
    };
}
function a(e, n) {
    return {
        x: e.x - n.x,
        y: e.y - n.y
    };
}
function o(e) {
    var n = e.clientOffset,
        r = e.initialClientOffset,
        o = e.initialSourceClientOffset;
    return n && r && o ? a(i(n, o), r) : null;
}
function s(e) {
    var n = e.clientOffset,
        r = e.initialClientOffset;
    return n && r ? a(n, r) : null;
}
r.d(n, {
    YY: function () {
        return o;
    },
    ar: function () {
        return s;
    }
});
