r.d(t, {
    Z: function () {
        return n;
    }
});
var a = r(665352);
function n(e, t, r = 'lab') {
    let n = (r = a.Z.get(r)).from(e),
        s = r.from(t);
    return Math.sqrt(
        n.reduce((e, t, r) => {
            let a = s[r];
            return isNaN(t) || isNaN(a) ? e : e + (a - t) ** 2;
        }, 0)
    );
}
