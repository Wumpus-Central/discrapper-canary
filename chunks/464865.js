n.d(t, { V: () => j }), n(953529);
var r = n(951288),
    i = n(647438),
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
    b = n(388032),
    x = n(634343);
function j(e) {
    let { guild: t } = e,
        n = i.useRef(null),
        j = (0, o.g1)(t.id, "GuildSettingsBoostPerks"),
        v = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites);
    (0, g.Z)(n, f.KsC.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: _,
            vanityURLUses: O,
            originalVanityURLCode: y,
            errorDetails: C,
            fetched: N,
        } = (0, l.cj)([m.Z], () => ({
            vanityURLCode: m.Z.vanityURLCode,
            vanityURLUses: m.Z.vanityURLUses,
            originalVanityURLCode: m.Z.originalVanityURLCode,
            errorDetails: m.Z.errorDetails,
            fetched: m.Z.fetchedVanityURL,
        })),
        E = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == E || N || (0, u.U5)(E);
    }, [N, E]),
    null == t)
        ? null
        : v
          ? (0, r.jsx)(s.Z, {})
          : (0, r.jsxs)(a.hjN, {
                ref: n,
                children: [
                    (0, r.jsxs)(a.vwX, {
                        className: x.title,
                        children: [b.intl.string(b.t["5XZKy8"]), (0, r.jsx)(p.xl, { guild: t })],
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        className: x.description,
                        children: j
                            ? b.intl.format(b.t["J/v84O"], {
                                  helpCenterArticle: d.Z.getArticleURL(f.BhN.GUILD_VANITY_URL),
                              })
                            : b.intl.format(b.t.koklFB, {
                                  helpCenterArticle: d.Z.getArticleURL(f.BhN.GUILD_VANITY_URL),
                              }),
                    }),
                    (0, r.jsx)(h.z, {
                        guild: t,
                        vanityURLCode: _,
                        vanityURLUses: O,
                        originalVanityURLCode: y,
                        errorDetails: C,
                    }),
                ],
            });
}
