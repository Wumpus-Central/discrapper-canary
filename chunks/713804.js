"use strict";
n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => h,
        parseBioReactWithCachedAST: () => b,
        parseBioReactWithoutScrolling: () => v,
    });
var a = n(735438),
    r = n.n(a),
    i = n(635377),
    l = n.n(i),
    s = n(791332),
    o = n.n(s),
    c = n(436857),
    d = n(365347),
    u = n(29814);
n(46054);
var _ = n(551965);
let p = (0, _.A)([u.A.PROFILE_BIO_RULES, (0, d.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    m = new (l())({ max: 2e3 }),
    h = c.aV(p),
    f;
function g(e) {
    let t = m.get(e);
    return null != t || ((t = f(e, !0)), m.set(e, t)), t;
}
function b(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return o().reactFor(o().ruleOutput(p, "react"))(t);
}
let v = c.aV(
    (0, _.A)([
        r().omit(p, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
