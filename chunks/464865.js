(n.d(t, { V: () => b }), n(953529));
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
    g = n(586382),
    p = n(859481),
    h = n(981631),
    f = n(388032),
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
            fetched: y
        } = (0, l.cj)([m.Z], () => ({
            vanityURLCode: m.Z.vanityURLCode,
            vanityURLUses: m.Z.vanityURLUses,
            originalVanityURLCode: m.Z.originalVanityURLCode,
            errorDetails: m.Z.errorDetails,
            fetched: m.Z.fetchedVanityURL
        })),
        C = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == C || y || (0, u.U5)(C);
    }, [y, C]),
    null == t)
        ? null
        : b
          ? (0, r.jsx)(s.Z, {})
          : (0, r.jsxs)(a.hjN, {
                children: [
                    (0, r.jsxs)(a.vwX, {
                        className: x.title,
                        children: [f.intl.string(f.t['5XZKy8']), (0, r.jsx)(g.xl, { guild: t })]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: x.description,
                        children: n ? f.intl.format(f.t['J/v84O'], { helpCenterArticle: d.Z.getArticleURL(h.BhN.GUILD_VANITY_URL) }) : f.intl.format(f.t.koklFB, { helpCenterArticle: d.Z.getArticleURL(h.BhN.GUILD_VANITY_URL) })
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
