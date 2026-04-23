"use strict";
n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => m,
        parseBioReactWithCachedAST: () => p,
        parseBioReactWithoutScrolling: () => A,
    });
var i = n(735438),
    r = n.n(i),
    s = n(635377),
    a = n.n(s),
    o = n(791332),
    l = n.n(o),
    d = n(436857),
    _ = n(365347),
    u = n(29814);
n(46054);
var c = n(551965);
let E = (0, c.A)([u.A.PROFILE_BIO_RULES, (0, _.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    h = new (a())({ max: 2e3 }),
    m = d.aV(E),
    f;
function g(e) {
    let t = h.get(e);
    return null != t || ((t = f(e, !0)), h.set(e, t)), t;
}
function p(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return l().reactFor(l().ruleOutput(E, "react"))(t);
}
let A = d.aV(
    (0, c.A)([
        r().omit(E, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
