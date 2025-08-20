n.d(t, {
    KM: () => h,
    U0: () => m,
    YG: () => _,
    y9: () => p,
}),
    n(642613);
var r = n(647438),
    i = n(442837),
    a = n(709054),
    o = n(103879),
    s = n(364226),
    l = n(531441),
    c = n(236289),
    u = n(788080),
    d = n(800530);
function f() {
    return (0, i.Wu)([c.Z], () => c.Z.getClassifications()).sort(
        (e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id),
    );
}
function _(e) {
    let t,
        n = (0, i.e7)([c.Z], () => c.Z.getClassification(e)),
        a = (0, i.e7)([c.Z], () => c.Z.getClassificationRequestState(e)),
        f = (0, i.e7)([c.Z], () => c.Z.getIsDsaEligible()),
        _ = (0, i.e7)([c.Z], () => c.Z.getIsAppealEligible()),
        p = (0, s.A)("classification_detail");
    if ((0, u.FB)(n)) {
        var h;
        t =
            (null == (h = n.guild_metadata) ? void 0 : h.member_type) === l.wO.OWNER
                ? d.qS.GUILD_OWNER
                : d.qS.GUILD_MEMBER;
    } else t = d.qS.USER;
    return (
        r.useEffect(() => {
            void 0 === n && null == a && o.NA(e);
        }, [e, n, a]),
        {
            classification: n,
            classificationRequestState: a,
            isDsaEligible: f,
            isAppealEligible: _ && null != n && null == n.appeal_status && (!(0, u.FB)(n) || p),
            violationType: t,
        }
    );
}
function p() {
    let e = f(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) > t);
}
function h() {
    let e = f(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) <= t);
}
function m() {
    return (0, i.e7)([c.Z], () => c.Z.getAppealSignal());
}
