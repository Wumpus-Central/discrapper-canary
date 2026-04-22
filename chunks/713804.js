"use strict";
a.r(t),
    a.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => m,
        parseBioReactWithCachedAST: () => f,
        parseBioReactWithoutScrolling: () => x,
    });
var r = a(735438),
    l = a.n(r),
    n = a(635377),
    i = a.n(n),
    s = a(791332),
    o = a.n(s),
    d = a(436857),
    c = a(999443),
    u = a(542664);
a(46054);
var h = a(551965);
let p = (0, h.A)([u.A.PROFILE_BIO_RULES, (0, c.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    _ = new (i())({ max: 2e3 }),
    m = d.aV(p),
    b;
function g(e) {
    let t = _.get(e);
    return null != t || ((t = b(e, !0)), _.set(e, t)), t;
}
function f(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return o().reactFor(o().ruleOutput(p, "react"))(t);
}
let x = d.aV(
    (0, h.A)([
        l().omit(p, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
