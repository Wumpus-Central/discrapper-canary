n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(513431);
function l(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l; ) {
        var r;
        if (l === t || !(0, i.k)(l, HTMLElement)) break;
        (n += null !== (r = l.offsetTop) && void 0 !== r ? r : 0), (l = l.offsetParent);
    }
    return n;
}
