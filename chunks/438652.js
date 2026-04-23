"use strict";
n.d(t, { Q: () => o });
var r = n(311907),
    i = n(830215),
    s = n(121780),
    a = n(652215);
let o = (0, r.UT)(s.A, {
    getQueryId: a.fic.USER_COUNTRY_CODE,
    get: () => s.A.getCountryCode(),
    load: async () => {
        await i.A.getLocationMetadata();
    },
});
