r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(874900);
function a(e) {
    var n = (0, i.Z)(e),
        r = n.overflow,
        a = n.overflowX,
        o = n.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + o + a);
}
