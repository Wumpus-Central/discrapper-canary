n.d(e, {
    KM: () => T,
    U0: () => U,
    YG: () => s,
    y9: () => c
}),
    n(230036);
var i = n(192379),
    E = n(442837),
    l = n(709054),
    _ = n(103879),
    a = n(364226),
    A = n(531441),
    r = n(236289),
    u = n(788080),
    o = n(800530);
function S() {
    return (0, E.Wu)([r.Z], () => r.Z.getClassifications()).sort((t, e) => l.default.extractTimestamp(e.id) - l.default.extractTimestamp(t.id));
}
function s(t) {
    let e;
    let n = (0, E.e7)([r.Z], () => r.Z.getClassification(t)),
        l = (0, E.e7)([r.Z], () => r.Z.getClassificationRequestState(t)),
        S = (0, E.e7)([r.Z], () => r.Z.getIsDsaEligible()),
        s = (0, E.e7)([r.Z], () => r.Z.getIsAppealEligible()),
        c = (0, a.A)('classification_detail');
    if ((0, u.FB)(n)) {
        var T;
        e = (null === (T = n.guild_metadata) || void 0 === T ? void 0 : T.member_type) === A.wO.OWNER ? o.qS.GUILD_OWNER : o.qS.GUILD_MEMBER;
    } else e = o.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === n && null == l && _.NA(t);
        }, [t, n, l]),
        {
            classification: n,
            classificationRequestState: l,
            isDsaEligible: S,
            isAppealEligible: s && null != n && null == n.appeal_status && (!(0, u.FB)(n) || c),
            violationType: e
        }
    );
}
function c() {
    let t = S(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) > e);
}
function T() {
    let t = S(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) <= e);
}
function U() {
    return (0, E.e7)([r.Z], () => r.Z.getAppealSignal());
}
