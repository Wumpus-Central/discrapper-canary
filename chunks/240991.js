n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => h,
        parseBioReactWithCachedAST: () => E,
        parseBioReactWithoutScrolling: () => y
    });
var i = n(392711),
    r = n.n(i),
    a = n(31775),
    s = n.n(a),
    o = n(477660),
    l = n.n(o),
    u = n(25209),
    c = n(691424),
    d = n(428595);
n(454585);
var f = n(364458);
let _ = (0, f.Z)([d.Z.PROFILE_BIO_RULES, (0, c.Z)({ enableBuildOverrides: !1 })]),
    p = new (s())({ max: 2000 }),
    h = u.w4(_),
    m = void 0;
function g(e) {
    let t = p.get(e);
    return null != t || ((t = m(e, !0)), p.set(e, t)), t;
}
function E(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return l().reactFor(l().ruleOutput(_, 'react'))(t);
}
let v = ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention'],
    y = u.w4((0, f.Z)([r().omit(_, v), { emoji: { react: () => null } }]));
