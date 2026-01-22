n.d(t, { A: () => l });
var r = n(355418),
    i = n(11947);
let a = 1,
    s = 2,
    o = 3;
class l extends r.c {
    innerPattern() {
        return RegExp(
            "(\\d{2,4}|[" +
                Object.keys(i.uk).join("") +
                "]{4}|[" +
                Object.keys(i.uk).join("") +
                "]{2})?(?:\\s*)(?:年)?(?:[\\s|,|\uFF0C]*)(\\d{1,2}|[" +
                Object.keys(i.uk).join("") +
                "]{1,3})(?:\\s*)(?:月)(?:\\s*)(\\d{1,2}|[" +
                Object.keys(i.uk).join("") +
                "]{1,3})?(?:\\s*)(?:日|号)?",
        );
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            r = parseInt(t[s]);
        if ((isNaN(r) && (r = (0, i.CT)(t[s])), n.start.assign("month", r), t[o])) {
            let e = parseInt(t[o]);
            isNaN(e) && (e = (0, i.CT)(t[o])), n.start.assign("day", e);
        } else n.start.imply("day", e.refDate.getDate());
        if (t[a]) {
            let e = parseInt(t[a]);
            isNaN(e) && (e = (0, i.M0)(t[a])), n.start.assign("year", e);
        } else n.start.imply("year", e.refDate.getFullYear());
        return n;
    }
}
