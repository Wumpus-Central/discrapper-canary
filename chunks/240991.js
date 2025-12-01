n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => m,
        parseBioReactWithCachedAST: () => E,
        parseBioReactWithoutScrolling: () => y,
    }),
    n(781311);
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    o = n.n(a),
    s = n(159635),
    l = n.n(s),
    c = n(25209),
    u = n(691424),
    d = n(428595);
n(454585);
var f = n(364458);
let p = (0, f.Z)([
        d.Z.PROFILE_BIO_RULES,
        (0, u.Z)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0,
        }),
    ]),
    _ = new (o())({ max: 2000 }),
    m = c.w4(p),
    h = void 0;
function g(e) {
    let t = _.get(e);
    return null != t || ((t = h(e, !0)), _.set(e, t)), t;
}
function E(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return l().reactFor(l().ruleOutput(p, "react"))(t);
}
let b = ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"],
    y = c.w4((0, f.Z)([i().omit(p, b), { emoji: { react: () => null } }]));
