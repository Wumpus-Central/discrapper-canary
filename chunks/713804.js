"use strict";
n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => m,
        parseBioReactWithCachedAST: () => b,
        parseBioReactWithoutScrolling: () => A,
    });
var r = n(735438),
    a = n.n(r),
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
    f = new (l())({ max: 2e3 }),
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
        a().omit(p, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
