"use strict";
n.d(t, {
    Jn: () => h,
    Q7: () => E,
    Tk: () => T,
    UI: () => m,
    W$: () => g,
    _W: () => _,
    _g: () => p,
    eu: () => f,
    f4: () => A,
    l0: () => I,
    qn: () => S,
});
var i = n(989349),
    r = n.n(i),
    a = n(17928),
    s = n(59318),
    l = n(280450),
    o = n(739010),
    d = n(239093),
    c = n(652215),
    u = n(375708);
function _(e) {
    return r()().to(r()(e));
}
function E(e) {
    return (0, s.u)(e.filename) || (0, s.AE)(e.filename) ? c.sbO.IS_SPOILER : 0;
}
function A(e) {
    if (null == e.fields) return;
    let t = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: t[d.g0.HEADER] ?? "",
        icon: t[d.g0.ICON_TYPE],
        body: t[d.g0.BODY] ?? "",
        ctas: (t[d.g0.CTAS] ?? "").split(",").filter((e) => "" !== e),
        timestamp: parseFloat(t[d.g0.TIMESTAMP] ?? 0),
        theme: t[d.g0.THEME],
        learn_more_link: t[d.g0.LEARN_MORE_LINK],
        classification_id: t[d.g0.CLASSIFICATION_ID],
    };
}
function h(e) {
    return e.type !== o.Xo.MESSAGE || ("" === e.content && 0 === e.attachments.length);
}
function I(e) {
    return {
        [d.Iv.DIDNT_VIOLATE_POLICY]: u.intl.string(u.t.mZffAi),
        [d.Iv.TOO_STRICT_UNFAIR]: u.intl.string(u.t.wgZVAn),
        [d.Iv.DONT_AGREE_PENALTY]: u.intl.string(u.t.eu8G4k),
        [d.Iv.SOMETHING_ELSE]: u.intl.string(u.t.XU3s6r),
    }[e];
}
function f(e) {
    return null == e || 0 === e.length
        ? ""
        : 1 === e.length
          ? e.toUpperCase()
          : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
function p(e) {
    return null != e && null != e.guild_metadata;
}
function T(e) {
    return e === c.t02.DSA_APPEAL_REQUEST_DEFLECTION ? u.intl.string(u.t["0qyXXH"]) : u.intl.string(u.t.aPmsx3);
}
function m(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch {
        return null;
    }
}
function g() {
    return null != (0, a.bG)([l.default], () => l.default.getSuspendedUserToken());
}
function S() {
    return null != l.default.getSuspendedUserToken();
}
