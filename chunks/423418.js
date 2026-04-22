n.d(t, { u: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(534514),
    a = n(834730),
    o = n(974544),
    d = n(351906),
    c = n(975571),
    u = n(665346),
    m = n(310527),
    g = n(737331),
    h = n(627011),
    x = n(911144),
    _ = n(652215),
    p = n(985018),
    A = n(10503);
function E(e) {
    let { guild: t } = e,
        n = l.useRef(null),
        E = (0, s.bG)([d.A], () => d.A.hideInstantInvites);
    (0, u.A)(n, _.nd0.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: f,
            vanityURLUses: j,
            originalVanityURLCode: N,
            errorDetails: I,
            fetched: C,
        } = (0, s.cf)([g.A], () => ({
            vanityURLCode: g.A.vanityURLCode,
            vanityURLUses: g.A.vanityURLUses,
            originalVanityURLCode: g.A.originalVanityURLCode,
            errorDetails: g.A.errorDetails,
            fetched: g.A.fetchedVanityURL,
        })),
        b = t?.id;
    return (l.useEffect(() => {
        null == b || C || (0, m.Je)(b);
    }, [C, b]),
    null == t)
        ? null
        : E
          ? (0, i.jsx)(o.A, {})
          : (0, i.jsxs)("div", {
                ref: n,
                children: [
                    (0, i.jsxs)(r.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: A.D,
                        children: [p.intl.string(p.t["5XZKy/"]), (0, i.jsx)(h.rV, { guild: t })],
                    }),
                    (0, i.jsx)(a.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: A.h,
                        children: p.intl.format(p.t.koklFG, {
                            helpCenterArticle: c.A.getArticleURL(_.MVz.GUILD_VANITY_URL),
                        }),
                    }),
                    (0, i.jsx)(x.C, {
                        guild: t,
                        vanityURLCode: f,
                        vanityURLUses: j,
                        originalVanityURLCode: N,
                        errorDetails: I,
                    }),
                ],
            });
}
