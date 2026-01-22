n.d(t, {
    A: () => c,
});
var r = n(364242),
    i = n(501459);
let a = RegExp(
        "([0-9０-９]{4}[\\/|\\／])?([0-1０-１]{0,1}[0-9０-９]{1})(?:[\\/|\\／]([0-3０-３]{0,1}[0-9０-９]{1}))",
        "i",
    ),
    s = 1,
    o = 2,
    l = 3;
class c {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = e.createParsingComponents(),
            a = parseInt((0, i.Zp)(t[o])),
            c = parseInt((0, i.Zp)(t[l]));
        if (a < 1 || a > 12 || c < 1 || c > 31) return null;
        if ((n.assign("day", c), n.assign("month", a), t[s])) {
            let e = parseInt((0, i.Zp)(t[s])),
                a = (0, r.D)(e);
            n.assign("year", a);
        } else {
            let t = (0, r.Y)(e.reference.instant, c, a);
            n.imply("year", t);
        }
        return n;
    }
}
