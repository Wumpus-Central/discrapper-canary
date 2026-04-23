r.d(t, { A: () => o });
var n = r(615339),
    s = r(476858),
    a = r(355418);
let i = RegExp(`([0-9]{4})[\\.\\/\\s](?:(${(0, s.uJ)(n.eB)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
class o extends a.c {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let r = t[3] ? parseInt(t[3]) : n.eB[t[2].toLowerCase()];
        if (r < 1 || r > 12) return null;
        let s = parseInt(t[1]);
        return { day: parseInt(t[4]), month: r, year: s };
    }
}
