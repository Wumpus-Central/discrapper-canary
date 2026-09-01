Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(535490),
    a = r(855616),
    i = RegExp(
        "((?<prefix>\u524D\u306E|\u6B21\u306E|\u4ECA\u9031))?(?<weekday>" +
            Object.keys(n.WEEKDAY_OFFSET).join("|") +
            ")(?:\u66DC\u65E5|\u66DC)",
        "i",
    );
t.default = class {
    pattern() {
        return i;
    }
    extract(e, t) {
        let r = t.groups.weekday,
            i = n.WEEKDAY_OFFSET[r];
        if (void 0 === i) return null;
        let s = t.groups.prefix || "",
            o = null;
        return (
            s.match(/\u524d\u306e/)
                ? (o = "last")
                : s.match(/\u6b21\u306e/)
                  ? (o = "next")
                  : s.match(/\u4eca\u9031/) && (o = "this"),
            (0, a.createParsingComponentsAtWeekday)(e.reference, i, o)
        );
    }
};
