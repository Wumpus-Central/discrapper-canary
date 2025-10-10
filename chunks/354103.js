n.d(t, { V: () => j }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    a = n(497321),
    o = n(158638),
    c = n(246946),
    d = n(63063),
    u = n(436879),
    g = n(736617),
    m = n(566084),
    p = n(295051),
    f = n(383793),
    h = n(981631),
    x = n(388032),
    b = n(977422);
function j(e) {
    let { guild: t } = e,
        n = i.useRef(null),
        j = (0, o.g1)(t.id, "GuildSettingsBoostPerks"),
        _ = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites);
    (0, u.Z)(n, h.KsC.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: v,
            vanityURLUses: C,
            originalVanityURLCode: O,
            errorDetails: y,
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
        null == E || N || (0, g.U5)(E);
    }, [N, E]),
    null == t)
        ? null
        : _
          ? (0, r.jsx)(a.Z, {})
          : (0, r.jsxs)(s.hjN, {
                ref: n,
                children: [
                    (0, r.jsxs)(s.vwX, {
                        className: b.title,
                        children: [x.intl.string(x.t["5XZKy8"]), (0, r.jsx)(p.xl, { guild: t })],
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        className: b.description,
                        children: j
                            ? x.intl.format(x.t["J/v84O"], {
                                  helpCenterArticle: d.Z.getArticleURL(h.BhN.GUILD_VANITY_URL),
                              })
                            : x.intl.format(x.t.koklFB, {
                                  helpCenterArticle: d.Z.getArticleURL(h.BhN.GUILD_VANITY_URL),
                              }),
                    }),
                    (0, r.jsx)(f.z, {
                        guild: t,
                        vanityURLCode: v,
                        vanityURLUses: C,
                        originalVanityURLCode: O,
                        errorDetails: y,
                    }),
                ],
            });
}
