"use strict";
n.d(t, { A: () => _ });
var r = n(360345),
    i = n(476858),
    a = n(355418),
    s = n(1673),
    o = n(322811);
let l = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${(0, i.uJ)(r.CV)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`,
        "i",
    ),
    u = 1,
    c = 2,
    d = 3;
class _ extends a.c {
    innerPattern() {
        return l;
    }
    innerExtract(e, t) {
        let n,
            i = t[u],
            a = t[d],
            l = i || a;
        l = (l = l || "").toLowerCase();
        let _ = null;
        "last" == l || "past" == l ? (_ = "last") : "next" == l ? (_ = "next") : "this" == l && (_ = "this");
        let f = t[c].toLowerCase();
        if (void 0 !== r.CV[f]) n = r.CV[f];
        else if ("weekend" == f) n = "last" == _ ? o.Bw.SUNDAY : o.Bw.SATURDAY;
        else {
            if ("weekday" != f) return null;
            let t = e.reference.getDateWithAdjustedTimezone().getDay();
            t == o.Bw.SUNDAY || t == o.Bw.SATURDAY
                ? (n = "last" == _ ? o.Bw.FRIDAY : o.Bw.MONDAY)
                : ((n = t - 1), (n = ((n = "last" == _ ? n - 1 : n + 1) % 5) + 1));
        }
        return (0, s.Y5)(e.reference, n, _);
    }
}
