n.d(t, { A: () => l });
var r = n(621466);
function l(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l; ) {
        var i;
        if (l === t || !(0, r.vq)(l, HTMLElement)) break;
        (n += null != (i = l.offsetTop) ? i : 0), (l = l.offsetParent);
    }
    return n;
}
