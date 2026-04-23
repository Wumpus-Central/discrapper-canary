function n(e, t, l) {
    return (l.y - e.y) * (t.x - e.x) > (t.y - e.y) * (l.x - e.x);
}
function r(e, t, l, r) {
    return n(e, l, r) !== n(t, l, r) && n(e, t, l) !== n(e, t, r);
}
function a(e, t, l) {
    let n = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    return { x: t.x + ((t.x - e.x) / n) * l, y: t.y + ((t.y - e.y) / n) * l };
}
function s(e, t, l) {
    let n = { x: l.x, y: l.y },
        a = { x: l.x + l.width, y: l.y },
        s = { x: l.x, y: l.y + l.height },
        i = { x: l.x + l.width, y: l.y + l.height };
    return r(e, t, n, a) || r(e, t, a, i) || r(e, t, i, s) || r(e, t, s, n);
}
l.d(t, { lw: () => s, wf: () => a });
