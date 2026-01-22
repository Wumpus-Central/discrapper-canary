n.r(t),
    n.d(t, {
        getOrParseBioAST: () => g,
        parseBioReact: () => h,
        parseBioReactWithCachedAST: () => E,
        parseBioReactWithoutScrolling: () => y,
    }),
    n(733351);
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    s = n.n(a),
    o = n(280230),
    l = n.n(o),
    c = n(436857),
    u = n(999443),
    d = n(542664);
n(46054);
var f = n(551965);
let p = (0, f.A)([
        d.A.PROFILE_BIO_RULES,
        (0, u.A)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0,
        }),
    ]),
    _ = new (s())({
        max: 2e3,
    }),
    h = c.aV(p),
    m;

function g(e) {
    let t = _.get(e);
    return null != t || ((t = m(e, !0)), _.set(e, t)), t;
}

function E(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return l().reactFor(l().ruleOutput(p, "react"))(t);
}
let b = ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"],
    y = c.aV(
        (0, f.A)([
            i().omit(p, b),
            {
                emoji: {
                    react: () => null,
                },
            },
        ]),
    );
