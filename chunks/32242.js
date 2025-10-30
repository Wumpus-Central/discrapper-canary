n.d(t, { Z: () => c });
var r = n(140081),
    i = n(654323);
let a = RegExp(
        "([0-9０-９]{4}[\\/|\\\uFF0F])?([0-1０-１]{0,1}[0-9０-９]{1})(?:[\\/|\\\uFF0F]([0-3０-３]{0,1}[0-9０-９]{1}))",
        "i",
    ),
    o = 1,
    s = 2,
    l = 3;
class c {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = e.createParsingComponents(),
            a = parseInt((0, i.dj)(t[s])),
            c = parseInt((0, i.dj)(t[l]));
        if (a < 1 || a > 12 || c < 1 || c > 31) return null;
        if ((n.assign("day", c), n.assign("month", a), t[o])) {
            let e = parseInt((0, i.dj)(t[o])),
                a = (0, r.y)(e);
            n.assign("year", a);
        } else {
            let t = (0, r.r)(e.reference.instant, c, a);
            n.imply("year", t);
        }
        return n;
    }
}
