n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => h,
        parseBioReactWithCachedAST: () => b,
        parseBioReactWithoutScrolling: () => A,
    });
var a = n(735438),
    i = n.n(a),
    l = n(635377),
    r = n.n(l),
    o = n(791332),
    s = n.n(o),
    c = n(436857),
    d = n(365347),
    u = n(29814);
n(46054);
var _ = n(551965);
let p = (0, _.A)([u.A.PROFILE_BIO_RULES, (0, d.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    f = new (r())({ max: 2e3 }),
    h = c.aV(p),
    m;
function g(e) {
    let t = f.get(e);
    return null != t || ((t = m(e, !0)), f.set(e, t)), t;
}
function b(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return s().reactFor(s().ruleOutput(p, "react"))(t);
}
let A = c.aV(
    (0, _.A)([
        i().omit(p, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
