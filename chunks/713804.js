"use strict";
n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => h,
        parseBioReactWithCachedAST: () => E,
        parseBioReactWithoutScrolling: () => I,
    });
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    s = n.n(a),
    o = n(791332),
    l = n.n(o),
    u = n(436857),
    c = n(999443),
    d = n(542664);
n(46054);
var _ = n(551965);
let f = (0, _.A)([d.A.PROFILE_BIO_RULES, (0, c.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    p = new (s())({ max: 2e3 }),
    h = u.aV(f),
    m;
function g(e) {
    let t = p.get(e);
    return null != t || ((t = m(e, !0)), p.set(e, t)), t;
}
function E(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return l().reactFor(l().ruleOutput(f, "react"))(t);
}
let A = ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"],
    I = u.aV((0, _.A)([i().omit(f, A), { emoji: { react: () => null } }]));
