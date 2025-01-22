r.r(n),
    r.d(n, {
        getOrParseBioAST: function () {
            return E;
        },
        parseBioReact: function () {
            return m;
        },
        parseBioReactWithCachedAST: function () {
            return v;
        },
        parseBioReactWithoutScrolling: function () {
            return b;
        }
    });
var i = r(392711),
    a = r.n(i),
    o = r(31775),
    s = r.n(o),
    l = r(477660),
    u = r.n(l),
    c = r(25209),
    d = r(691424),
    f = r(428595);
r(454585);
var p = r(364458);
let h = (0, p.Z)([f.Z.PROFILE_BIO_RULES, (0, d.Z)({ enableBuildOverrides: !1 })]),
    _ = new (s())({ max: 2000 }),
    m = c.w4(h),
    g = void 0;
function E(e) {
    let n = _.get(e);
    return null != n ? n : ((n = g(e, !0)), _.set(e, n), n);
}
function v(e) {
    if (0 === e.trim().length) return null;
    let n = E(e);
    return u().reactFor(u().ruleOutput(h, 'react'))(n);
}
let y = ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention'],
    b = c.w4((0, p.Z)([a().omit(h, y), { emoji: { react: () => null } }]));
