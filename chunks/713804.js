"use strict";
r.r(t),
    r.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => m,
        parseBioReactWithCachedAST: () => b,
        parseBioReactWithoutScrolling: () => A,
    });
var n = r(735438),
    i = r.n(n),
    a = r(635377),
    s = r.n(a),
    l = r(791332),
    o = r.n(l),
    c = r(436857),
    d = r(365347),
    u = r(29814);
r(46054);
var _ = r(551965);
let p = (0, _.A)([u.A.PROFILE_BIO_RULES, (0, d.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    f = new (s())({ max: 2e3 }),
    m = c.aV(p),
    h;
function g(e) {
    let t = f.get(e);
    return null != t || ((t = h(e, !0)), f.set(e, t)), t;
}
function b(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return o().reactFor(o().ruleOutput(p, "react"))(t);
}
let A = c.aV(
    (0, _.A)([
        i().omit(p, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
