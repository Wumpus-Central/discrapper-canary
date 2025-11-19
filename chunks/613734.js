n.d(t, {
    KM: () => p,
    U0: () => h,
    YG: () => f,
    y9: () => _,
}),
    n(642613);
var r = n(473749),
    i = n(442837),
    a = n(709054),
    o = n(103879),
    s = n(531441),
    l = n(236289),
    c = n(788080),
    u = n(800530);
function d() {
    return (0, i.Wu)([l.Z], () => l.Z.getClassifications()).sort(
        (e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id),
    );
}
function f(e) {
    let t,
        n = (0, i.e7)([l.Z], () => l.Z.getClassification(e)),
        a = (0, i.e7)([l.Z], () => l.Z.getClassificationRequestState(e)),
        d = (0, i.e7)([l.Z], () => l.Z.getIsDsaEligible()),
        f = (0, i.e7)([l.Z], () => l.Z.getIsAppealEligible());
    if ((0, c.FB)(n)) {
        var _;
        t =
            (null == (_ = n.guild_metadata) ? void 0 : _.member_type) === s.wO.OWNER
                ? u.qS.GUILD_OWNER
                : u.qS.GUILD_MEMBER;
    } else t = u.qS.USER;
    return (
        r.useEffect(() => {
            void 0 === n && null == a && o.NA(e);
        }, [e, n, a]),
        {
            classification: n,
            classificationRequestState: a,
            isDsaEligible: d,
            isAppealEligible: f && null != n && null == n.appeal_status,
            violationType: t,
        }
    );
}
function _() {
    let e = d(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) > t);
}
function p() {
    let e = d(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) <= t);
}
function h() {
    return (0, i.e7)([l.Z], () => l.Z.getAppealSignal());
}
