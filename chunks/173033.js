n.d(t, { Z: () => r });
var i = n(374470);
function r(e, t) {
    let n = e.offsetTop,
        r = e.offsetParent;
    for (; null != r; ) {
        var l;
        if (r === t || !(0, i.kK)(r, HTMLElement)) break;
        (n += null != (l = r.offsetTop) ? l : 0), (r = r.offsetParent);
    }
    return n;
}
