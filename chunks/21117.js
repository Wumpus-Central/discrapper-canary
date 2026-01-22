i.d(e, { b: () => A });
var n = i(64700),
    l = i(311907),
    s = i(955572),
    r = i(406360),
    u = i(419954),
    a = i(964404),
    o = i(780964),
    T = i(985018);
let A = (0, u.Qx)(o.X.HIGH_DYNAMIC_RANGE, {
    useTitle: () => T.intl.string(T.t.nemtgW),
    useSubtitle: () => T.intl.string(T.t["O/Gjvn"]),
    useBadge: () => "beta",
    useOptions: function () {
        return n.useMemo(
            () => [
                {
                    name: T.intl.string(T.t.D5Fma9),
                    desc: T.intl.string(T.t.Qj75ck),
                    value: "no-limit",
                },
                {
                    name: T.intl.string(T.t.ldcGIH),
                    desc: T.intl.string(T.t["+V/bDk"]),
                    value: "standard",
                },
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
        return (0, l.bG)([a.Ay], () => a.Ay.hdrDynamicRange);
    },
    useSearchTerms: () => ["HDR", T.intl.string(T.t["O/Gjvn"])],
});
