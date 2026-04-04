n.d(t, { b: () => m });
var i = n(64700),
    s = n(311907),
    l = n(955572),
    a = n(406360),
    r = n(419954),
    o = n(933297),
    d = n(964404),
    c = n(780964),
    u = n(985018);
let m = (0, r.Qx)(c.X.HIGH_DYNAMIC_RANGE, {
    useTitle: () => u.intl.string(u.t.nemtgW),
    useSubtitle: () => u.intl.string(u.t["O/Gjvn"]),
    usePersistentBadge: () => ({ badgeType: o.Xi.BETA }),
    useOptions: function () {
        return i.useMemo(
            () => [
                { name: u.intl.string(u.t.D5Fma9), desc: u.intl.string(u.t.Qj75ck), value: "no-limit" },
                { name: u.intl.string(u.t.ldcGIH), desc: u.intl.string(u.t["+V/bDk"]), value: "standard" },
            ],
            [],
        );
    },
    usePredicate: function () {
        return (0, a.i)("HDRDynamicRangeSetting");
    },
    setValue: function (e) {
        (0, l.FU)(e);
    },
    useValue: function () {
        return (0, s.bG)([d.Ay], () => d.Ay.hdrDynamicRange);
    },
    useSearchTerms: () => ["HDR", u.intl.string(u.t["O/Gjvn"])],
});
