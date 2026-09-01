Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(167385),
    a = r(249869),
    i = RegExp(
        "(?<prefix>\u4E0A|\u4ECA|\u4E0B|\u9019|\u5462)(?:\u500B)?(?:\u661F\u671F|\u79AE\u62DC|\u9031)(?<weekday>" +
            Object.keys(a.WEEKDAY_OFFSET).join("|") +
            ")",
    );
class s extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = t.groups.weekday,
            i = a.WEEKDAY_OFFSET[n];
        if (void 0 === i) return null;
        let s = null,
            o = t.groups.prefix;
        "\u4E0A" == o
            ? (s = "last")
            : "\u4E0B" == o
              ? (s = "next")
              : ("\u4ECA" == o || "\u9019" == o || "\u5462" == o) && (s = "this");
        let u = new Date(e.refDate.getTime()),
            l = !1,
            d = u.getDay();
        if ("last" == s || "past" == s) u.setDate(u.getDate() + (i - 7 - d)), (l = !0);
        else if ("next" == s) u.setDate(u.getDate() + (i + 7 - d)), (l = !0);
        else if ("this" == s) u.setDate(u.getDate() + (i - d));
        else {
            let e = i - d;
            Math.abs(e - 7) < Math.abs(e) && (e -= 7),
                Math.abs(e + 7) < Math.abs(e) && (e += 7),
                u.setDate(u.getDate() + e);
        }
        return (
            r.start.assign("weekday", i),
            l
                ? (r.start.assign("day", u.getDate()),
                  r.start.assign("month", u.getMonth() + 1),
                  r.start.assign("year", u.getFullYear()))
                : (r.start.imply("day", u.getDate()),
                  r.start.imply("month", u.getMonth() + 1),
                  r.start.imply("year", u.getFullYear())),
            r
        );
    }
}
t.default = s;
