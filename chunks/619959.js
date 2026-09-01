Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(574253),
    a = r(535490),
    i = RegExp(
        "([0-9\uFF10-\uFF19]{4}[\\/|\\\uFF0F])?([0-1\uFF10-\uFF11]{0,1}[0-9\uFF10-\uFF19]{1})(?:[\\/|\\\uFF0F]([0-3\uFF10-\uFF13]{0,1}[0-9\uFF10-\uFF19]{1}))",
        "i",
    );
t.default = class {
    pattern() {
        return i;
    }
    extract(e, t) {
        let r = e.createParsingComponents(),
            i = parseInt((0, a.toHankaku)(t[2])),
            s = parseInt((0, a.toHankaku)(t[3]));
        if (i < 1 || i > 12 || s < 1 || s > 31) return null;
        if ((r.assign("day", s), r.assign("month", i), t[1])) {
            let e = parseInt((0, a.toHankaku)(t[1])),
                i = (0, n.findMostLikelyADYear)(e);
            r.assign("year", i);
        } else {
            let t = (0, n.findYearClosestToRef)(e.reference.instant, s, i);
            r.imply("year", t);
        }
        return r;
    }
};
