n.d(t, { f: () => s });
var r = n(442837),
    i = n(893776),
    a = n(54613),
    o = n(981631);
let s = (0, r.Kb)(a.Z, {
    getQueryId: o.McO.USER_COUNTRY_CODE,
    get: () => a.Z.getCountryCode(),
    load: async () => {
        await i.Z.getLocationMetadata();
    },
});
