function i(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
}
function l(e, t, n, l) {
    return i(e, n, l) !== i(t, n, l) && i(e, t, n) !== i(e, t, l);
}
function a(e, t, n) {
    let i = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    return { x: t.x + ((t.x - e.x) / i) * n, y: t.y + ((t.y - e.y) / i) * n };
}
function s(e, t, n) {
    let i = { x: n.x, y: n.y },
        a = { x: n.x + n.width, y: n.y },
        s = { x: n.x, y: n.y + n.height },
        r = { x: n.x + n.width, y: n.y + n.height };
    return l(e, t, i, a) || l(e, t, a, r) || l(e, t, r, s) || l(e, t, s, i);
}
n.d(t, { lw: () => s, wf: () => a });
