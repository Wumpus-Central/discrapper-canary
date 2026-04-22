r.d(t, { A: () => i });
var n = r(364242),
    s = r(501459);
let a = RegExp(
    "([0-9０-９]{4}[\\/|\\／])?([0-1０-１]{0,1}[0-9０-９]{1})(?:[\\/|\\／]([0-3０-３]{0,1}[0-9０-９]{1}))",
    "i",
);
class i {
    pattern() {
        return a;
    }
    extract(e, t) {
        let r = e.createParsingComponents(),
            a = parseInt((0, s.Zp)(t[2])),
            i = parseInt((0, s.Zp)(t[3]));
        if (a < 1 || a > 12 || i < 1 || i > 31) return null;
        if ((r.assign("day", i), r.assign("month", a), t[1])) {
            let e = parseInt((0, s.Zp)(t[1])),
                a = (0, n.D)(e);
            r.assign("year", a);
        } else {
            let t = (0, n.Y)(e.reference.instant, i, a);
            r.imply("year", t);
        }
        return r;
    }
}
