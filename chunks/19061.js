t.d(e, { T: () => r });
var a = t(206311);
function r(n) {
    for (let e of a.B) {
        if (n[e] < 0) return -1;
        if (n[e] > 0) return 1;
    }
    return 0;
}
t(854840);
