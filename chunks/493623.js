n.d(t, { Z: () => r });
var i = n(175922);
function r(e) {
    var t = (0, i.Z)(e),
        n = e.offsetWidth,
        r = e.offsetHeight;
    return (
        1 >= Math.abs(t.width - n) && (n = t.width),
        1 >= Math.abs(t.height - r) && (r = t.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r
        }
    );
}
