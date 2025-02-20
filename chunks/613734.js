n.d(e, {
    KM: () => c,
    U0: () => U,
    YG: () => s,
    y9: () => T
}),
    n(230036);
var i = n(192379),
    E = n(442837),
    l = n(709054),
    _ = n(103879),
    A = n(364226),
    a = n(531441),
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
        T = (0, A.A)('classification_detail');
    if ((0, u.FB)(n)) {
        var c;
        e = (null === (c = n.guild_metadata) || void 0 === c ? void 0 : c.member_type) === a.wO.OWNER ? o.qS.GUILD_OWNER : o.qS.GUILD_MEMBER;
    } else e = o.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === n && null == l && _.NA(t);
        }, [t, n, l]),
        {
            classification: n,
            classificationRequestState: l,
            isDsaEligible: S,
            isAppealEligible: s && null != n && null == n.appeal_status && (!(0, u.FB)(n) || T),
            violationType: e
        }
    );
}
function T() {
    let t = S(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) > e);
}
function c() {
    let t = S(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) <= e);
}
function U() {
    return (0, E.e7)([r.Z], () => r.Z.getAppealSignal());
}
