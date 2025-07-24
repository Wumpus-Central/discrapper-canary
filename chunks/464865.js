(n.d(t, { V: () => b }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(497321),
    o = n(158638),
    c = n(246946),
    d = n(63063),
    u = n(621319),
    m = n(44550),
    g = n(586382),
    p = n(859481),
    f = n(981631),
    h = n(388032),
    x = n(50986);
function b(e) {
    let { guild: t } = e,
        n = (0, o.g1)(t.id, 'GuildSettingsBoostPerks'),
        b = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites),
        {
            vanityURLCode: j,
            vanityURLUses: v,
            originalVanityURLCode: _,
            errorDetails: O,
            fetched: C
        } = (0, l.cj)([m.Z], () => ({
            vanityURLCode: m.Z.vanityURLCode,
            vanityURLUses: m.Z.vanityURLUses,
            originalVanityURLCode: m.Z.originalVanityURLCode,
            errorDetails: m.Z.errorDetails,
            fetched: m.Z.fetchedVanityURL
        })),
        y = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == y || C || (0, u.U5)(y);
    }, [C, y]),
    null == t)
        ? null
        : b
          ? (0, r.jsx)(a.Z, {})
          : (0, r.jsxs)(s.hjN, {
                children: [
                    (0, r.jsxs)(s.vwX, {
                        className: x.title,
                        children: [h.intl.string(h.t['5XZKy8']), (0, r.jsx)(g.xl, { guild: t })]
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: x.description,
                        children: n ? h.intl.format(h.t['J/v84O'], { helpCenterArticle: d.Z.getArticleURL(f.BhN.GUILD_VANITY_URL) }) : h.intl.format(h.t.koklFB, { helpCenterArticle: d.Z.getArticleURL(f.BhN.GUILD_VANITY_URL) })
                    }),
                    (0, r.jsx)(p.z, {
                        guild: t,
                        vanityURLCode: j,
                        vanityURLUses: v,
                        originalVanityURLCode: _,
                        errorDetails: O
                    })
                ]
            });
}
