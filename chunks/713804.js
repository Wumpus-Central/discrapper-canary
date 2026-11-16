var i = a(435558),
    r = a.n(i),
    t = a(635377),
    o = a.n(t);
a(478676);
var s = a(826059),
    l = a(862316),
    u = a(605275),
    c = a(46054),
    m = a(551965);
let d = (0, m.A)([
    u.Ay.PROFILE_BIO_RULES,
    (0, l.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }),
    (0, l.r3)(),
]);
new (o())({ max: 2e3 });
let p = { allowGameMentions: !0 },
    k = s.aV(d);
(c.A.reactParserFor(
    (0, m.A)([
        r().omit(d, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
),
    a.d(
        n,
        {},
        {
            parseBioReact: function (e, n, a, i) {
                return k(e, n, { ...p, ...a }, i);
            },
        },
    ));
