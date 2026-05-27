"use strict";
n.r(t),
    n.d(t, {
        getOrParseBioAST: () => m,
        parseBioReact: () => p,
        parseBioReactWithCachedAST: () => g,
        parseBioReactWithoutScrolling: () => A,
    });
var i = n(735438),
    r = n.n(i),
    s = n(635377),
    a = n.n(s),
    o = n(791332),
    l = n.n(o),
    u = n(807081),
    c = n(365347),
    d = n(29814);
n(46054);
var _ = n(551965);
let h = (0, _.A)([d.A.PROFILE_BIO_RULES, (0, c.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    f = new (a())({ max: 2e3 }),
    p = u.aV(h),
    E;
function m(e) {
    let t = f.get(e);
    return null != t || ((t = E(e, !0)), f.set(e, t)), t;
}
function g(e) {
    if (0 === e.trim().length) return null;
    let t = m(e);
    return l().reactFor(l().ruleOutput(h, "react"))(t);
}
let A = u.aV(
    (0, _.A)([
        r().omit(h, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
