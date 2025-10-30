function r(e, t) {
    let n = e.split(/[/\\]/),
        r = "" !== n[n.length - 1] ? n[n.length - 1] : e;
    return null != t && r.endsWith(t) && (r = r.slice(0, -t.length)), r;
}
function i(e) {
    let t = r(e),
        n = t.lastIndexOf(".");
    return n <= 0 ? t : t.slice(0, n);
}
n.d(t, {
    G6: () => i,
    eP: () => r,
}),
    n(35282),
    n(358085);
