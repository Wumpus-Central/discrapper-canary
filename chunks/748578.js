t.d(e, { e: () => s });
var a = t(243399),
    r = t(206311);
t(854840);
var i = t(19061);
function s(n) {
    let e = (0, i.T)(n);
    for (let t of r.B) {
        let r = n[t];
        if (((0, a.V1)(isFinite(Number(r)), `${t} is not finite`), (r < 0 && e > 0) || (r > 0 && e < 0))) return !1;
    }
    return !0;
}
