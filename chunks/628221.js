n.d(t, {
    Nk: () => u,
    ew: () => l,
    fC: () => c,
    lR: () => f,
    lw: () => d,
}),
    n(35282);
var r = n(349033),
    i = n(607802),
    a = n(532428),
    o = n(981631),
    s = n(388032);
function l(e) {
    return (0, i.kG)(e).map((e, t, n) =>
        o.TNx.test(e.type) || (0, i.Fr)(e, n[t + 1]) ? e : new r.WU(e.getFullMatch(), r.Xe),
    );
}
function c(e, t) {
    return {
        type: e,
        data: t,
    };
}
function u(e) {
    switch (e) {
        case o.rtL.HISTORY:
            return s.intl.string(s.t.tSZd5c);
        case o.dCx.FILTER_FROM:
            return s.intl.string(s.t.catERA);
        case o.dCx.FILTER_MENTIONS:
            return s.intl.string(s.t["l3K4B/"]);
        case o.dCx.FILTER_IN:
            return s.intl.string(s.t.vHyCgl);
        case o.dCx.FILTER_HAS:
            return s.intl.string(s.t.IC7gHM);
        default:
            return "";
    }
}
function d(e) {
    let { modeType: t, result: n, group: r } = e,
        { text: s, channel: l, group: c } = n,
        u = s;
    null != l && (u = (0, i.Jl)(u));
    let d = null != c ? c : r;
    if (t === o.Sap.FILTER_ALL) {
        let e = a.ZP[d];
        (null == e ? void 0 : e.key) != null &&
            (null == e ? void 0 : e.key) !== "" &&
            (u = "".concat(e.key, " ").concat(u));
    }
    return u;
}
function f(e) {
    let { navId: t, index: n, selected: r } = e;
    return {
        id: "".concat(t, "-").concat(n),
        role: "option",
        tabIndex: -1,
        "aria-selected": r,
    };
}
