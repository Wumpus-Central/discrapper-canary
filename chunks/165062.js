n.d(t, { f: () => o });
var r = n(442837),
    i = n(893776),
    a = n(54613);
let o = (0, r.Kb)(a.Z, {
    queryId: () => ["location-metadata"],
    get: () => a.Z.getCountryCode(),
    load: async () => {
        await i.Z.getLocationMetadata();
    },
    useStateHook: r.e7,
});
