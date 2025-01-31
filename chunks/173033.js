n.d(t, { Z: () => l });
var i = n(374470);
function l(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l; ) {
        var a;
        if (l === t || !(0, i.k)(l, HTMLElement)) break;
        (n += null !== (a = l.offsetTop) && void 0 !== a ? a : 0), (l = l.offsetParent);
    }
    return n;
}
