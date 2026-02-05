i.d(e, { b: () => T });
var n = i(64700),
    l = i(311907),
    s = i(955572),
    r = i(406360),
    a = i(419954),
    u = i(964404),
    o = i(780964),
    d = i(985018);
let T = (0, a.Qx)(o.X.HIGH_DYNAMIC_RANGE, {
    useTitle: () => d.intl.string(d.t.nemtgW),
    useSubtitle: () => d.intl.string(d.t["O/Gjvn"]),
    useBadge: () => "beta",
    useOptions: function () {
        return n.useMemo(
            () => [
                { name: d.intl.string(d.t.D5Fma9), desc: d.intl.string(d.t.Qj75ck), value: "no-limit" },
                { name: d.intl.string(d.t.ldcGIH), desc: d.intl.string(d.t["+V/bDk"]), value: "standard" },
            ],
            [],
        );
    },
    usePredicate: function () {
        return (0, r.i)("HDRDynamicRangeSetting");
    },
    setValue: function (t) {
        (0, s.FU)(t);
    },
    useValue: function () {
        return (0, l.bG)([u.Ay], () => u.Ay.hdrDynamicRange);
    },
    useSearchTerms: () => ["HDR", d.intl.string(d.t["O/Gjvn"])],
});
