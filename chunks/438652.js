var d = e(855986),
    c = e(830215),
    i = e(121780),
    s = e(652215);
let o = (0, d.UT)(i.A, {
    getQueryId: s.fic.USER_COUNTRY_CODE,
    get: () => i.A.getCountryCode(),
    load: async () => {
        await c.A.getLocationMetadata();
    },
});
e.d(a, {}, { Q: o });
