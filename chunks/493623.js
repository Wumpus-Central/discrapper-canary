n.d(t, { Z: () => i });
var r = n(175922);
function i(e) {
    var t = (0, r.Z)(e),
        n = e.offsetWidth,
        i = e.offsetHeight;
    return (
        1 >= Math.abs(t.width - n) && (n = t.width),
        1 >= Math.abs(t.height - i) && (i = t.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: i
        }
    );
}
