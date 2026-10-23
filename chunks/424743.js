n.d(t, { FQ: () => E, Wv: () => c, YU: () => u, cc: () => _, lW: () => A, uN: () => d });
var i,
    r,
    a = n(138054),
    s = n(232835),
    l = n(757319),
    o = n(652215),
    d = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    c =
        (((r = {}).VERIFIED_ADULT = "verified_adult"),
        (r.VERIFIED_TEEN = "verified_teen"),
        (r.ERROR = "error"),
        (r.FAE_FAILED = "fae_failed"),
        (r.ID_FAILED = "id_failed"),
        (r.UNDERAGE = "underage"),
        (r.MANUAL_REVIEW_SUBMITTED = "manual_review_submitted"),
        (r.TNS_SET_UNCONFIRMED = "tns_set_unconfirmed"),
        (r.TNS_SET_UNCONFIRMED_FRAUD = "tns_set_unconfirmed_fraud"),
        r);
function u(e, t) {
    let n = s.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== o.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function _(e, t) {
    let n = s.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== o.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return (
        i?.rawValue.split(",").includes("request_manual_review") === !0 &&
        (0, l._)("isAgeVerificationMessageWithManualReviewCta")
    );
}
function E(e, t) {
    let n = s.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== o.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "content_type" === e.rawName);
    return i?.rawValue === "tns_set_unconfirmed" || i?.rawValue === "tns_set_unconfirmed_fraud";
}
function A(e, t) {
    if (null == a.A.getPendingConnection()) return !1;
    let n = s.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== o.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("connect_to_teen") === !0;
}
