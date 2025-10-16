n.d(t, { r: () => i });
var r = n(636343);
function i(e, t) {
    let n = e;
    for ((0, r.a)(n, t) && (n = n.parentElement); n && !(0, r.a)(n, t); ) n = n.parentElement;
    return n || document.scrollingElement || document.documentElement;
}
