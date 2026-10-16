n.d(t, {
    $r: () => C,
    Jn: () => I,
    Q7: () => h,
    Tk: () => g,
    W$: () => O,
    _W: () => A,
    _g: () => m,
    eu: () => T,
    f4: () => f,
    l0: () => p,
    lr: () => N,
    qn: () => R,
});
var i = n(536637),
    r = n.n(i),
    a = n(17928),
    s = n(59318),
    l = n(280450),
    o = n(927813),
    d = n(935208),
    c = n(739010),
    u = n(239093),
    _ = n(652215),
    E = n(105292);
function A(e) {
    return r()().to(r()(e));
}
function h(e) {
    return (0, s.u)(e.filename) || (0, s.AE)(e.filename) ? _.sbO.IS_SPOILER : 0;
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
function I(e) {
    return e.type !== c.Xo.MESSAGE || ("" === e.content && 0 === e.attachments.length);
}
function p(e) {
    return {
        [u.Iv.DIDNT_VIOLATE_POLICY]: E.intl.string(E.t.mZffAi),
        [u.Iv.TOO_STRICT_UNFAIR]: E.intl.string(E.t.wgZVAn),
        [u.Iv.DONT_AGREE_PENALTY]: E.intl.string(E.t.eu8G4k),
        [u.Iv.SOMETHING_ELSE]: E.intl.string(E.t.XU3s6r),
    }[e];
}
function T(e) {
    return null == e || 0 === e.length
        ? ""
        : 1 === e.length
          ? e.toUpperCase()
          : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
function m(e) {
    return null != e && null != e.guild_metadata;
}
function g(e) {
    return e === _.t02.DSA_APPEAL_REQUEST_DEFLECTION ? E.intl.string(E.t["0qyXXH"]) : E.intl.string(E.t.aPmsx3);
}
let S = 182 * o.A.Millis.DAY;
function N(e) {
    return d.default.age(e) > S;
}
function C(e) {
    if (e.actions.some((e) => e.action_type === c.X2.BAN)) return null;
    let t = e.max_expiration_time;
    if (null == t || !0 === e.has_indefinite_suspension) return null;
    try {
        return new Date(t);
    } catch {
        return null;
    }
}
function O() {
    return null != (0, a.bG)([l.default], () => l.default.getSuspendedUserToken());
}
function R() {
    return null != l.default.getSuspendedUserToken();
}
