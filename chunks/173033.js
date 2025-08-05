n.d(t, { Z: () => i });
var r = n(374470);
function i(e, t) {
    let n = e.offsetTop,
        i = e.offsetParent;
    for (; null != i; ) {
        var a;
        if (i === t || !(0, r.k)(i, HTMLElement)) break;
        ((n += null != (a = i.offsetTop) ? a : 0), (i = i.offsetParent));
    }
    return n;
}
