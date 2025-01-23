n.d(e, {
    KM: function () {
        return T;
    },
    U0: function () {
        return U;
    },
    YG: function () {
        return c;
    },
    y9: function () {
        return s;
    }
});
var i = n(192379),
    E = n(442837),
    l = n(709054),
    _ = n(103879),
    r = n(364226),
    a = n(531441),
    u = n(236289),
    A = n(788080),
    o = n(800530);
function S() {
    return (0, E.Wu)([u.Z], () => u.Z.getClassifications()).sort((t, e) => l.default.extractTimestamp(e.id) - l.default.extractTimestamp(t.id));
}
function c(t) {
    let e;
    let n = (0, E.e7)([u.Z], () => u.Z.getClassification(t)),
        l = (0, E.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
        S = (0, E.e7)([u.Z], () => u.Z.getIsDsaEligible()),
        c = (0, E.e7)([u.Z], () => u.Z.getIsAppealEligible()),
        s = (0, r.A)('classification_detail');
    if ((0, A.FB)(n)) {
        var T;
        e = (null === (T = n.guild_metadata) || void 0 === T ? void 0 : T.member_type) === a.wO.OWNER ? o.qS.GUILD_OWNER : o.qS.GUILD_MEMBER;
    } else e = o.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === n && null == l && _.NA(t);
        }, [t, n, l]),
        {
            classification: n,
            classificationRequestState: l,
            isDsaEligible: S,
            isAppealEligible: c && null != n && null == n.appeal_status && (!(0, A.FB)(n) || s),
            violationType: e
        }
    );
}
function s() {
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
    return (0, E.e7)([u.Z], () => u.Z.getAppealSignal());
}
