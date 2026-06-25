"use strict";
n.d(t, {
    Jn: () => p,
    Q7: () => h,
    Tk: () => A,
    UI: () => I,
    W$: () => T,
    _W: () => _,
    _g: () => g,
    eu: () => m,
    f4: () => f,
    l0: () => E,
    qn: () => S,
});
var i = n(989349),
    r = n.n(i),
    s = n(17928),
    a = n(59318),
    o = n(495544),
    l = n(739010),
    u = n(239093),
    c = n(652215),
    d = n(375708);
function _(e) {
    return r()().to(r()(e));
}
function h(e) {
    return (0, a.u)(e.filename) || (0, a.AE)(e.filename) ? c.sbO.IS_SPOILER : 0;
}
function f(e) {
    if (null == e.fields) return;
    let t = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: t[u.g0.HEADER] ?? "",
        icon: t[u.g0.ICON_TYPE],
        body: t[u.g0.BODY] ?? "",
        ctas: (t[u.g0.CTAS] ?? "").split(",").filter((e) => "" !== e),
        timestamp: parseFloat(t[u.g0.TIMESTAMP] ?? 0),
        theme: t[u.g0.THEME],
        learn_more_link: t[u.g0.LEARN_MORE_LINK],
        classification_id: t[u.g0.CLASSIFICATION_ID],
    };
}
function p(e) {
    return e.type !== l.Xo.MESSAGE || ("" === e.content && 0 === e.attachments.length);
}
function E(e) {
    return {
        [u.Iv.DIDNT_VIOLATE_POLICY]: d.intl.string(d.t.mZffAi),
        [u.Iv.TOO_STRICT_UNFAIR]: d.intl.string(d.t.wgZVAn),
        [u.Iv.DONT_AGREE_PENALTY]: d.intl.string(d.t.eu8G4k),
        [u.Iv.SOMETHING_ELSE]: d.intl.string(d.t.XU3s6r),
    }[e];
}
function m(e) {
    return null == e || 0 === e.length
        ? ""
        : 1 === e.length
          ? e.toUpperCase()
          : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
function g(e) {
    return null != e && null != e.guild_metadata;
}
function A(e) {
    return e === c.t02.DSA_APPEAL_REQUEST_DEFLECTION ? d.intl.string(d.t["0qyXXH"]) : d.intl.string(d.t.aPmsx3);
}
function I(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch {
        return null;
    }
}
function T() {
    return null != (0, s.bG)([o.default], () => o.default.getSuspendedUserToken());
}
function S() {
    return null != o.default.getSuspendedUserToken();
}
