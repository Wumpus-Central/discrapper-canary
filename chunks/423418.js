"use strict";
n.d(t, { u: () => f });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(974544),
    o = n(840120),
    d = n(351906),
    c = n(975571),
    u = n(665346),
    m = n(310527),
    g = n(737331),
    x = n(627011),
    h = n(911144),
    _ = n(652215),
    A = n(985018),
    p = n(182452);
function f(e) {
    let { guild: t } = e,
        n = s.useRef(null),
        f = (0, o.M5)(t.id, "GuildSettingsBoostPerks"),
        j = (0, l.bG)([d.A], () => d.A.hideInstantInvites);
    (0, u.A)(n, _.nd0.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: N,
            vanityURLUses: E,
            originalVanityURLCode: b,
            errorDetails: T,
            fetched: C,
        } = (0, l.cf)([g.A], () => ({
            vanityURLCode: g.A.vanityURLCode,
            vanityURLUses: g.A.vanityURLUses,
            originalVanityURLCode: g.A.originalVanityURLCode,
            errorDetails: g.A.errorDetails,
            fetched: g.A.fetchedVanityURL,
        })),
        I = t?.id;
    return (s.useEffect(() => {
        null == I || C || (0, m.Je)(I);
    }, [C, I]),
    null == t)
        ? null
        : j
          ? (0, i.jsx)(a.A, {})
          : (0, i.jsxs)("div", {
                ref: n,
                children: [
                    (0, i.jsxs)(r.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: p.D,
                        children: [A.intl.string(A.t["5XZKy/"]), (0, i.jsx)(x.rV, { guild: t })],
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: p.h,
                        children: f
                            ? A.intl.format(A.t["J/v84B"], {
                                  helpCenterArticle: c.A.getArticleURL(_.MVz.GUILD_VANITY_URL),
                              })
                            : A.intl.format(A.t.koklFG, {
                                  helpCenterArticle: c.A.getArticleURL(_.MVz.GUILD_VANITY_URL),
                              }),
                    }),
                    (0, i.jsx)(h.C, {
                        guild: t,
                        vanityURLCode: N,
                        vanityURLUses: E,
                        originalVanityURLCode: b,
                        errorDetails: T,
                    }),
                ],
            });
}
