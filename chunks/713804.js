"use strict";
n.r(t),
    n.d(t, {
        getOrParseBioAST: () => f,
        parseBioReact: () => h,
        parseBioReactWithCachedAST: () => p,
        parseBioReactWithoutScrolling: () => T,
    });
var i = n(435558),
    r = n.n(i),
    a = n(635377),
    s = n.n(a),
    l = n(791332),
    o = n.n(l),
    d = n(807081),
    c = n(480084),
    u = n(29814);
n(46054);
var _ = n(551965);
let E = (0, _.A)([u.Ay.PROFILE_BIO_RULES, (0, c.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    A = new (s())({ max: 2e3 }),
    h = d.aV(E),
    I;
function f(e) {
    let t = A.get(e);
    return null != t || ((t = I(e, !0)), A.set(e, t)), t;
}
function p(e) {
    if (0 === e.trim().length) return null;
    let t = f(e);
    return o().reactFor(o().ruleOutput(E, "react"))(t);
}
let T = d.aV(
    (0, _.A)([
        r().omit(E, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
