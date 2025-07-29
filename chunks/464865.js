(n.d(t, { V: () => j }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(497321),
    o = n(158638),
    c = n(246946),
    d = n(63063),
    u = n(621319),
    m = n(44550),
    g = n(436879),
    p = n(586382),
    h = n(859481),
    f = n(981631),
    x = n(388032),
    b = n(50986);
function j(e) {
    let { guild: t } = e,
        n = i.useRef(null),
        j = (0, o.g1)(t.id, 'GuildSettingsBoostPerks'),
        v = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites);
    (0, g.Z)(n, f.KsC.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: _,
            vanityURLUses: O,
            originalVanityURLCode: y,
            errorDetails: C,
            fetched: N
        } = (0, l.cj)([m.Z], () => ({
            vanityURLCode: m.Z.vanityURLCode,
            vanityURLUses: m.Z.vanityURLUses,
            originalVanityURLCode: m.Z.originalVanityURLCode,
            errorDetails: m.Z.errorDetails,
            fetched: m.Z.fetchedVanityURL
        })),
        I = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == I || N || (0, u.U5)(I);
    }, [N, I]),
    null == t)
        ? null
        : v
          ? (0, r.jsx)(s.Z, {})
          : (0, r.jsxs)(a.hjN, {
                ref: n,
                children: [
                    (0, r.jsxs)(a.vwX, {
                        className: b.title,
                        children: [x.intl.string(x.t['5XZKy8']), (0, r.jsx)(p.xl, { guild: t })]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: b.description,
                        children: j ? x.intl.format(x.t['J/v84O'], { helpCenterArticle: d.Z.getArticleURL(f.BhN.GUILD_VANITY_URL) }) : x.intl.format(x.t.koklFB, { helpCenterArticle: d.Z.getArticleURL(f.BhN.GUILD_VANITY_URL) })
                    }),
                    (0, r.jsx)(h.z, {
                        guild: t,
                        vanityURLCode: _,
                        vanityURLUses: O,
                        originalVanityURLCode: y,
                        errorDetails: C
                    })
                ]
            });
}
