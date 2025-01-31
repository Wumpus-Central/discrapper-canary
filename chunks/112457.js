function i(e, t) {
    return {
        x: e.x + t.x,
        y: e.y + t.y
    };
}
function r(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    };
}
function a(e) {
    var t = e.clientOffset,
        n = e.initialClientOffset,
        a = e.initialSourceClientOffset;
    return t && n && a ? r(i(t, a), n) : null;
}
function s(e) {
    var t = e.clientOffset,
        n = e.initialClientOffset;
    return t && n ? r(t, n) : null;
}
n.d(t, {
    YY: () => a,
    ar: () => s
});
