r.d(t, { A: () => u });
var n = r(360345),
    s = r(476858),
    a = r(355418),
    i = r(1673),
    o = r(322811);
let l = RegExp(
    `(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${(0, s.uJ)(n.CV)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`,
    "i",
);
class u extends a.c {
    innerPattern() {
        return l;
    }
    innerExtract(e, t) {
        let r,
            s = t[1],
            a = t[3],
            l = s || a;
        l = (l = l || "").toLowerCase();
        let u = null;
        "last" == l || "past" == l ? (u = "last") : "next" == l ? (u = "next") : "this" == l && (u = "this");
        let d = t[2].toLowerCase();
        if (void 0 !== n.CV[d]) r = n.CV[d];
        else if ("weekend" == d) r = "last" == u ? o.Bw.SUNDAY : o.Bw.SATURDAY;
        else {
            if ("weekday" != d) return null;
            let t = e.reference.getDateWithAdjustedTimezone().getDay();
            t == o.Bw.SUNDAY || t == o.Bw.SATURDAY
                ? (r = "last" == u ? o.Bw.FRIDAY : o.Bw.MONDAY)
                : ((r = t - 1), (r = ((r = "last" == u ? r - 1 : r + 1) % 5) + 1));
        }
        return (0, i.Y5)(e.reference, r, u);
    }
}
