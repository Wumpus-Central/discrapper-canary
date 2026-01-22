n.d(t, { u: () => j }), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(974544),
    c = n(840120),
    o = n(351906),
    d = n(975571),
    u = n(665346),
    f = n(310527),
    g = n(737331),
    b = n(627011),
    m = n(911144),
    p = n(652215),
    x = n(985018),
    h = n(182452);
function j(e) {
    let { guild: t } = e,
        n = i.useRef(null),
        j = (0, c.M5)(t.id, "GuildSettingsBoostPerks"),
        O = (0, l.bG)([o.A], () => o.A.hideInstantInvites);
    (0, u.A)(n, p.nd0.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: y,
            vanityURLUses: v,
            originalVanityURLCode: A,
            errorDetails: E,
            fetched: N,
        } = (0, l.cf)([g.A], () => ({
            vanityURLCode: g.A.vanityURLCode,
            vanityURLUses: g.A.vanityURLUses,
            originalVanityURLCode: g.A.originalVanityURLCode,
            errorDetails: g.A.errorDetails,
            fetched: g.A.fetchedVanityURL,
        })),
        _ = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == _ || N || (0, f.Je)(_);
    }, [N, _]),
    null == t)
        ? null
        : O
          ? (0, r.jsx)(a.A, {})
          : (0, r.jsxs)("div", {
                ref: n,
                children: [
                    (0, r.jsxs)(s.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: h.D,
                        children: [x.intl.string(x.t["5XZKy/"]), (0, r.jsx)(b.rV, { guild: t })],
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: h.h,
                        children: j
                            ? x.intl.format(x.t["J/v84B"], {
                                  helpCenterArticle: d.A.getArticleURL(p.MVz.GUILD_VANITY_URL),
                              })
                            : x.intl.format(x.t.koklFG, {
                                  helpCenterArticle: d.A.getArticleURL(p.MVz.GUILD_VANITY_URL),
                              }),
                    }),
                    (0, r.jsx)(m.C, {
                        guild: t,
                        vanityURLCode: y,
                        vanityURLUses: v,
                        originalVanityURLCode: A,
                        errorDetails: E,
                    }),
                ],
            });
}
