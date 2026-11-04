var i = a(435558),
    t = a.n(i),
    r = a(635377),
    o = a.n(r);
a(478676);
var l = a(826059),
    s = a(862316),
    u = a(605275);
a(46054);
var m = a(551965);
let c = (0, m.A)([
    u.Ay.PROFILE_BIO_RULES,
    (0, s.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }),
    (0, s.r3)(),
]);
new (o())({ max: 2e3 });
let d = { allowGameMentions: !0 },
    p = l.aV(c);
(l.aV(
    (0, m.A)([
        t().omit(c, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
        { emoji: { react: () => null } },
    ]),
),
    a.d(
        n,
        {},
        {
            parseBioReact: function (e, n, a, i) {
                return p(e, n, { ...d, ...a }, i);
            },
        },
    ));
