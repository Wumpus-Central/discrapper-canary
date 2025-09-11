n.d(t, {
    Nk: () => c,
    cm: () => s,
    fC: () => l,
    lR: () => u,
});
var r = n(349033),
    i = n(607802),
    a = n(981631),
    o = n(388032);
function s(e) {
    return (0, i.kG)(e).map((e, t, n) => ((0, i.Fr)(e, n[t + 1]) ? e : new r.WU(e.getFullMatch(), r.Xe)));
}
function l(e, t) {
    return {
        type: e,
        data: t,
    };
}
function c(e) {
    switch (e) {
        case a.rtL.HISTORY:
            return o.intl.string(o.t.tSZd5e);
        case a.dCx.FILTER_FROM:
            return o.intl.string(o.t.catERE);
        case a.dCx.FILTER_MENTIONS:
            return o.intl.string(o.t.l3K4Bw);
        case a.dCx.FILTER_IN:
            return o.intl.string(o.t.vHyCgo);
        case a.dCx.FILTER_HAS:
            return o.intl.string(o.t.IC7gHB);
        default:
            return "";
    }
}
function u(e) {
    let { navId: t, index: n, selected: r } = e;
    return {
        id: "".concat(t, "-").concat(n),
        role: "option",
        tabIndex: -1,
        "aria-selected": r,
    };
}
