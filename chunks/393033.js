"use strict";
n.d(t, {
    Jn: () => E,
    Tk: () => I,
    UI: () => T,
    W$: () => S,
    _W: () => f,
    _g: () => A,
    eu: () => g,
    f4: () => h,
    l0: () => m,
    qn: () => y,
    tF: () => p,
});
var r = n(989349),
    i = n.n(r),
    s = n(311907),
    a = n(77350),
    o = n(961350),
    l = n(739010),
    u = n(239093),
    c = n(652215),
    d = n(381941),
    _ = n(985018);
function f(e) {
    return i()().to(i()(e));
}
function p(e) {
    return (0, a.u)(e.filename) || (0, a.AE)(e.filename) ? `${d._W}${e.filename ?? ".png"}` : (e.filename ?? "");
}
function h(e) {
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
function E(e) {
    return e.type !== l.Xo.MESSAGE || ("" === e.content && 0 === e.attachments.length);
}
let m = (e) =>
        ({
            [u.Iv.DIDNT_VIOLATE_POLICY]: _.intl.string(_.t.mZffAi),
            [u.Iv.TOO_STRICT_UNFAIR]: _.intl.string(_.t.wgZVAn),
            [u.Iv.DONT_AGREE_PENALTY]: _.intl.string(_.t.eu8G4k),
            [u.Iv.SOMETHING_ELSE]: _.intl.string(_.t.XU3s6r),
        })[e],
    g = (e) =>
        null == e || 0 === e.length
            ? ""
            : 1 === e.length
              ? e.toUpperCase()
              : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
function A(e) {
    return null != e && null != e.guild_metadata;
}
let I = (e) => (e === c.t02.DSA_APPEAL_REQUEST_DEFLECTION ? _.intl.string(_.t["0qyXXH"]) : _.intl.string(_.t.aPmsx3));
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
function y() {
    return null != o.default.getSuspendedUserToken();
}
