n.d(t, { Z: () => d });
var r = n(745901),
    i = n(800911),
    a = n(727916);
let o = RegExp(`([0-9]{4})[\\.\\/\\s](?:(${(0, i.q3)(r._$)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"),
    s = 1,
    l = 2,
    c = 3,
    u = 4;
class d extends a.Z {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[c] ? parseInt(t[c]) : r._$[t[l].toLowerCase()];
        if (n < 1 || n > 12) return null;
        let i = parseInt(t[s]);
        return {
            day: parseInt(t[u]),
            month: n,
            year: i,
        };
    }
}
