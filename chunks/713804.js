let r;
n.r(t),
    n.d(t, {
        getOrParseBioAST: () => O,
        parseBioReact: () => f,
        parseBioReactWithCachedAST: () => R,
        parseBioReactWithoutScrolling: () => g,
    });
var i = n(435558),
    a = n.n(i),
    l = n(635377),
    o = n.n(l),
    u = n(478676),
    c = n.n(u),
    s = n(807081),
    m = n(480084),
    p = n(29814);
n(46054);
var d = n(551965);
let h = (0, d.A)([
        p.Ay.PROFILE_BIO_RULES,
        (0, m.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }),
        (0, m.r3)(),
    ]),
    k = new (o())({ max: 2e3 }),
    A = { allowGameMentions: !0 },
    B = s.aV(h);
function f(e, t, n, r) {
    return B(e, t, { ...A, ...n }, r);
}
function O(e) {
    let t = k.get(e);
    return null != t || ((t = r(e, !0)), k.set(e, t)), t;
}
function R(e) {
    if (0 === e.trim().length) return null;
    let t = O(e);
    return c().reactFor(c().ruleOutput(h, "react"))(t);
}
let g = s.aV(
    (0, d.A)([
        a().omit(h, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
);
