n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => h,
        parseBioReactWithCachedAST: () => E,
        parseBioReactWithoutScrolling: () => b
    }),
    n(566702);
var r = n(392711),
    i = n.n(r),
    o = n(31775),
    a = n.n(o),
    s = n(477660),
    l = n.n(s),
    c = n(25209),
    u = n(691424),
    d = n(428595);
n(454585);
var f = n(364458);
let p = (0, f.Z)([d.Z.PROFILE_BIO_RULES, (0, u.Z)({ enableBuildOverrides: !1 })]),
    _ = new (a())({ max: 2000 }),
    h = c.w4(p),
    m = void 0;
function g(e) {
    let t = _.get(e);
    return null != t || ((t = m(e, !0)), _.set(e, t)), t;
}
function E(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return l().reactFor(l().ruleOutput(p, 'react'))(t);
}
let v = ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention'],
    b = c.w4((0, f.Z)([i().omit(p, v), { emoji: { react: () => null } }]));
