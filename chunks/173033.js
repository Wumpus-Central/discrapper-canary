n.d(t, { Z: () => i });
var r = n(374470);
function i(e, t) {
    let n = e.offsetTop,
        i = e.offsetParent;
    for (; null != i; ) {
        var o;
        if (i === t || !(0, r.k)(i, HTMLElement)) break;
        ((n += null != (o = i.offsetTop) ? o : 0), (i = i.offsetParent));
    }
    return n;
}
