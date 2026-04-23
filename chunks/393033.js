"use strict";
n.d(t, {
    Jn: () => f,
    Tk: () => I,
    UI: () => T,
    W$: () => S,
    _W: () => E,
    _g: () => A,
    eu: () => p,
    f4: () => m,
    l0: () => g,
    qn: () => N,
    tF: () => h,
});
var i = n(989349),
    r = n.n(i),
    s = n(17928),
    a = n(77350),
    o = n(495544),
    l = n(739010),
    d = n(239093),
    _ = n(652215),
    u = n(381941),
    c = n(985018);
function E(e) {
    return r()().to(r()(e));
}
function h(e) {
    return (0, a.u)(e.filename) || (0, a.AE)(e.filename) ? `${u._W}${e.filename ?? ".png"}` : (e.filename ?? "");
}
function m(e) {
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
function f(e) {
    return e.type !== l.Xo.MESSAGE || ("" === e.content && 0 === e.attachments.length);
}
let g = (e) =>
        ({
            [d.Iv.DIDNT_VIOLATE_POLICY]: c.intl.string(c.t.mZffAi),
            [d.Iv.TOO_STRICT_UNFAIR]: c.intl.string(c.t.wgZVAn),
            [d.Iv.DONT_AGREE_PENALTY]: c.intl.string(c.t.eu8G4k),
            [d.Iv.SOMETHING_ELSE]: c.intl.string(c.t.XU3s6r),
        })[e],
    p = (e) =>
        null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
function A(e) {
    return null != e && null != e.guild_metadata;
}
let I = (e) => (e === _.t02.DSA_APPEAL_REQUEST_DEFLECTION ? c.intl.string(c.t["0qyXXH"]) : c.intl.string(c.t.aPmsx3));
function T(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch {
        return null;
    }
}
let S = () => null != (0, s.bG)([o.default], () => o.default.getSuspendedUserToken());
function N() {
    return null != o.default.getSuspendedUserToken();
}
