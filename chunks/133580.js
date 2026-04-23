n.d(t, { GE: () => d, a: () => c, ff: () => u });
var l = n(530493),
    a = n(985018),
    i = n(833450),
    r = n(5678),
    s = n(623915),
    o = n(616276);
function c(e) {
    switch (e) {
        case l.h.MIGHTY:
            return a.intl.string(a.t.aZej2g);
        case l.h.STRONG:
            return a.intl.string(a.t.MLxnSg);
        case l.h.FAIR:
            return a.intl.string(a.t["3f19KA"]);
        case l.h.WEAK:
            return a.intl.string(a.t.jtVgSh);
    }
}
function d(e) {
    switch (e) {
        case l.h.MIGHTY:
            return r.A;
        case l.h.STRONG:
            return s.A;
        case l.h.FAIR:
            return i.A;
        case l.h.WEAK:
            return o.A;
    }
}
function u(e) {
    let t = "";
    switch (e) {
        case l.h.MIGHTY:
            t = "#fc430a";
            break;
        case l.h.STRONG:
            t = "#9e00b4";
            break;
        case l.h.FAIR:
            t = "#4aa1ce";
            break;
        case l.h.WEAK:
            t = "#80b06a";
    }
    return { foregroundColor: t, backgroundColor: "#2e2e2e" };
}
