var i = n(855986),
    l = n(927813),
    s = n(85506),
    r = n(664947),
    a = n(489452),
    o = n(652215);
let d = (0, i.UT)(s.A, {
    getQueryId: o.fic.GAME_ORGANIZATION_CHARACTER_ELIGIBILITY,
    staleAfter: l.A.Seconds.MINUTE,
    failureStaleAfter: l.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: a.A },
    get: (e) => (null != e ? s.A.getCharacters(e) : null),
    load: async (e) => {
        null != e && (await r.A.fetchCharacterEligibility(e));
    },
});
n.d(t, {}, { P: d });
