Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(40840),
    a = r(798401),
    i = r(389766),
    s = r(855616),
    o = r(115004),
    u = RegExp(
        `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${(0, a.matchAnyPattern)(n.WEEKDAY_DICTIONARY)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`,
        "i",
    );
class l extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return u;
    }
    innerExtract(e, t) {
        let r,
            a = t[1],
            i = t[3],
            u = a || i;
        u = (u = u || "").toLowerCase();
        let l = null;
        "last" == u || "past" == u ? (l = "last") : "next" == u ? (l = "next") : "this" == u && (l = "this");
        let d = t[2].toLowerCase();
        if (void 0 !== n.WEEKDAY_DICTIONARY[d]) r = n.WEEKDAY_DICTIONARY[d];
        else if ("weekend" == d) r = "last" == l ? o.Weekday.SUNDAY : o.Weekday.SATURDAY;
        else {
            if ("weekday" != d) return null;
            let t = e.reference.getDateWithAdjustedTimezone().getDay();
            t == o.Weekday.SUNDAY || t == o.Weekday.SATURDAY
                ? (r = "last" == l ? o.Weekday.FRIDAY : o.Weekday.MONDAY)
                : ((r = t - 1), (r = ((r = "last" == l ? r - 1 : r + 1) % 5) + 1));
        }
        return (0, s.createParsingComponentsAtWeekday)(e.reference, r, l);
    }
}
t.default = l;
