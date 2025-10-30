n.d(t, { Z: () => s });
var r = n(727916);
let i = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"),
    a = 1,
    o = 2;
class s extends r.Z {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let n = parseInt(t[o]),
            r = parseInt(t[a]);
        return e.createParsingComponents().imply("day", 1).assign("month", r).assign("year", n);
    }
}
