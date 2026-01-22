n.d(t, { A: () => d });
var r = n(615339),
    i = n(476858),
    a = n(355418);
let s = RegExp(`([0-9]{4})[\\.\\/\\s](?:(${(0, i.uJ)(r.eB)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"),
    o = 1,
    l = 2,
    c = 3,
    u = 4;
class d extends a.c {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[c] ? parseInt(t[c]) : r.eB[t[l].toLowerCase()];
        if (n < 1 || n > 12) return null;
        let i = parseInt(t[o]);
        return {
            day: parseInt(t[u]),
            month: n,
            year: i,
        };
    }
}
