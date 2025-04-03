r.d(t, { Z: () => n });
var a = r(665352);
function n(e, t, r = 'lab') {
    let s = (r = a.Z.get(r)).from(e),
        o = r.from(t);
    return Math.sqrt(
        s.reduce((e, t, r) => {
            let a = o[r];
            return isNaN(t) || isNaN(a) ? e : e + (a - t) ** 2;
        }, 0)
    );
}
