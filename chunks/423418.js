"use strict";
n.d(t, { u: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(974544),
    o = n(351906),
    d = n(975571),
    c = n(665346),
    u = n(310527),
    m = n(737331),
    g = n(627011),
    x = n(911144),
    h = n(652215),
    _ = n(985018),
    p = n(182452);
function A(e) {
    let { guild: t } = e,
        n = s.useRef(null),
        A = (0, l.bG)([o.A], () => o.A.hideInstantInvites);
    (0, c.A)(n, h.nd0.BOOST_PERKS_VANITY_URL);
    let {
            vanityURLCode: f,
            vanityURLUses: j,
            originalVanityURLCode: N,
            errorDetails: E,
            fetched: b,
        } = (0, l.cf)([m.A], () => ({
            vanityURLCode: m.A.vanityURLCode,
            vanityURLUses: m.A.vanityURLUses,
            originalVanityURLCode: m.A.originalVanityURLCode,
            errorDetails: m.A.errorDetails,
            fetched: m.A.fetchedVanityURL,
        })),
        T = t?.id;
    return (s.useEffect(() => {
        null == T || b || (0, u.Je)(T);
    }, [b, T]),
    null == t)
        ? null
        : A
          ? (0, i.jsx)(a.A, {})
          : (0, i.jsxs)("div", {
                ref: n,
                children: [
                    (0, i.jsxs)(r.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        className: p.D,
                        children: [_.intl.string(_.t["5XZKy/"]), (0, i.jsx)(g.rV, { guild: t })],
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: p.h,
                        children: _.intl.format(_.t.koklFG, {
                            helpCenterArticle: d.A.getArticleURL(h.MVz.GUILD_VANITY_URL),
                        }),
                    }),
                    (0, i.jsx)(x.C, {
                        guild: t,
                        vanityURLCode: f,
                        vanityURLUses: j,
                        originalVanityURLCode: N,
                        errorDetails: E,
                    }),
                ],
            });
}
