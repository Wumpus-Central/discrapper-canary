n.d(t, { A: () => l });
var i = n(621466);
function l(e, t) {
    let n = e.offsetTop,
        l = e.offsetParent;
    for (; null != l && l !== t && (0, i.vq)(l, HTMLElement); ) (n += l.offsetTop ?? 0), (l = l.offsetParent);
    return n;
}
