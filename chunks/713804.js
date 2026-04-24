a.r(t),
    a.d(t, {
        getOrParseBioAST: () => _,
        parseBioReact: () => f,
        parseBioReactWithCachedAST: () => g,
        parseBioReactWithoutScrolling: () => x,
    });
var n = a(735438),
    r = a.n(n),
    l = a(635377),
    i = a.n(l),
    s = a(791332),
    o = a.n(s),
    c = a(436857),
    d = a(365347),
    u = a(29814);
a(46054);
var h = a(551965);
let p = (0, h.A)([u.A.PROFILE_BIO_RULES, (0, d.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    m = new (i())({ max: 2e3 }),
    f = c.aV(p),
    b;
function _(e) {
    let t = m.get(e);
    return null != t || ((t = b(e, !0)), m.set(e, t)), t;
}
function g(e) {
    if (0 === e.trim().length) return null;
    let t = _(e);
    return o().reactFor(o().ruleOutput(p, "react"))(t);
}
let x = c.aV(
    (0, h.A)([
        r().omit(p, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
