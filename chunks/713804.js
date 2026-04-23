"use strict";
n.r(t),
    n.d(t, {
        getOrParseBioAST: () => m,
        parseBioReact: () => h,
        parseBioReactWithCachedAST: () => g,
        parseBioReactWithoutScrolling: () => A,
    });
var r = n(735438),
    i = n.n(r),
    s = n(635377),
    a = n.n(s),
    o = n(791332),
    l = n.n(o),
    u = n(436857),
    c = n(999443),
    d = n(542664);
n(46054);
var _ = n(551965);
let f = (0, _.A)([d.A.PROFILE_BIO_RULES, (0, c.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    p = new (a())({ max: 2e3 }),
    h = u.aV(f),
    E;
function m(e) {
    let t = p.get(e);
    return null != t || ((t = E(e, !0)), p.set(e, t)), t;
}
function g(e) {
    if (0 === e.trim().length) return null;
    let t = m(e);
    return l().reactFor(l().ruleOutput(f, "react"))(t);
}
let A = u.aV(
    (0, _.A)([
        i().omit(f, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
