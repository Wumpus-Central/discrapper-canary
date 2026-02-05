"use strict";
n.d(t, { Q: () => o });
var r = n(311907),
    i = n(830215),
    a = n(121780),
    s = n(652215);
let o = (0, r.UT)(a.A, {
    getQueryId: s.fic.USER_COUNTRY_CODE,
    get: () => a.A.getCountryCode(),
    load: async () => {
        await i.A.getLocationMetadata();
    },
});
