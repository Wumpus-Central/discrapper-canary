n.d(t, { V: () => j }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(497321),
    o = n(158638),
    c = n(246946),
    u = n(63063),
    d = n(436879),
    g = n(736617),
    m = n(566084),
    p = n(295051),
    f = n(383793),
    h = n(981631),
    b = n(388032),
    x = n(977422);
function j(e) {
    let { guild: t } = e,
        n = i.useRef(null),
        j = (0, o.g1)(t.id, "GuildSettingsBoostPerks"),
        _ = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites);
    (0, d.Z)(n, h.KsC.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: v,
            vanityURLUses: O,
            originalVanityURLCode: C,
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
          ? (0, r.jsx)(s.Z, {})
          : (0, r.jsxs)("div", {
                ref: n,
                children: [
                    (0, r.jsxs)(a.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        className: x.title,
                        children: [b.intl.string(b.t["5XZKy/"]), (0, r.jsx)(p.xl, { guild: t })],
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: x.description,
                        children: j
                            ? b.intl.format(b.t["J/v84B"], {
                                  helpCenterArticle: u.Z.getArticleURL(h.BhN.GUILD_VANITY_URL),
                              })
                            : b.intl.format(b.t.koklFG, {
                                  helpCenterArticle: u.Z.getArticleURL(h.BhN.GUILD_VANITY_URL),
                              }),
                    }),
                    (0, r.jsx)(f.z, {
                        guild: t,
                        vanityURLCode: v,
                        vanityURLUses: O,
                        originalVanityURLCode: C,
                        errorDetails: y,
                    }),
                ],
            });
}
