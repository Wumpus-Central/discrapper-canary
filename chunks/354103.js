n.d(t, { V: () => j }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(497321),
    o = n(158638),
    c = n(246946),
    d = n(63063),
    u = n(436879),
    g = n(736617),
    f = n(566084),
    m = n(295051),
    b = n(383793),
    p = n(981631),
    h = n(388032),
    x = n(959045);
function j(e) {
    let { guild: t } = e,
        n = i.useRef(null),
        j = (0, o.g1)(t.id, "GuildSettingsBoostPerks"),
        v = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites);
    (0, u.Z)(n, p.KsC.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: O,
            vanityURLUses: C,
            originalVanityURLCode: y,
            errorDetails: N,
            fetched: E,
        } = (0, l.cj)([f.Z], () => ({
            vanityURLCode: f.Z.vanityURLCode,
            vanityURLUses: f.Z.vanityURLUses,
            originalVanityURLCode: f.Z.originalVanityURLCode,
            errorDetails: f.Z.errorDetails,
            fetched: f.Z.fetchedVanityURL,
        })),
        I = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == I || E || (0, g.U5)(I);
    }, [E, I]),
    null == t)
        ? null
        : v
          ? (0, r.jsx)(s.Z, {})
          : (0, r.jsxs)("div", {
                ref: n,
                children: [
                    (0, r.jsxs)(a.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: x.title,
                        children: [h.intl.string(h.t["5XZKy/"]), (0, r.jsx)(m.xl, { guild: t })],
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: x.description,
                        children: j
                            ? h.intl.format(h.t["J/v84B"], {
                                  helpCenterArticle: d.Z.getArticleURL(p.BhN.GUILD_VANITY_URL),
                              })
                            : h.intl.format(h.t.koklFG, {
                                  helpCenterArticle: d.Z.getArticleURL(p.BhN.GUILD_VANITY_URL),
                              }),
                    }),
                    (0, r.jsx)(b.z, {
                        guild: t,
                        vanityURLCode: O,
                        vanityURLUses: C,
                        originalVanityURLCode: y,
                        errorDetails: N,
                    }),
                ],
            });
}
