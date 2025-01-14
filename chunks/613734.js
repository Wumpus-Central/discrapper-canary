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
    _ = n(709054),
    l = n(103879),
    r = n(364226),
    A = n(531441),
    u = n(236289),
    a = n(788080),
    o = n(800530);
function S() {
    return (0, E.Wu)([u.Z], () => u.Z.getClassifications()).sort((t, e) => _.default.extractTimestamp(e.id) - _.default.extractTimestamp(t.id));
}
function c(t) {
    let e;
    let n = (0, E.e7)([u.Z], () => u.Z.getClassification(t)),
        _ = (0, E.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
        S = (0, E.e7)([u.Z], () => u.Z.getIsDsaEligible()),
        c = (0, E.e7)([u.Z], () => u.Z.getIsAppealEligible()),
        s = (0, r.A)('classification_detail');
    if ((0, a.FB)(n)) {
        var T;
        e = (null === (T = n.guild_metadata) || void 0 === T ? void 0 : T.member_type) === A.wO.OWNER ? o.qS.GUILD_OWNER : o.qS.GUILD_MEMBER;
    } else e = o.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === n && null == _ && l.NA(t);
        }, [t, n, _]),
        {
            classification: n,
            classificationRequestState: _,
            isDsaEligible: S,
            isAppealEligible: c && null != n && null == n.appeal_status && (!(0, a.FB)(n) || s),
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
