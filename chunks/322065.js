n.d(t, { Z: () => f });
var r = n(684758),
    i = n(800911),
    a = n(727916),
    o = n(334633),
    s = n(894186);
let l = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${(0, i.q3)(r.LN)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`,
        "i",
    ),
    c = 1,
    u = 2,
    d = 3;
class f extends a.Z {
    innerPattern() {
        return l;
    }
    innerExtract(e, t) {
        let n,
            i = t[c],
            a = t[d],
            l = i || a;
        l = (l = l || "").toLowerCase();
        let f = null;
        "last" == l || "past" == l ? (f = "last") : "next" == l ? (f = "next") : "this" == l && (f = "this");
        let _ = t[u].toLowerCase();
        if (void 0 !== r.LN[_]) n = r.LN[_];
        else if ("weekend" == _) n = "last" == f ? s.OG.SUNDAY : s.OG.SATURDAY;
        else {
            if ("weekday" != _) return null;
            let t = e.reference.getDateWithAdjustedTimezone().getDay();
            t == s.OG.SUNDAY || t == s.OG.SATURDAY
                ? (n = "last" == f ? s.OG.FRIDAY : s.OG.MONDAY)
                : ((n = t - 1), (n = ((n = "last" == f ? n - 1 : n + 1) % 5) + 1));
        }
        return (0, o.Rv)(e.reference, n, f);
    }
}
