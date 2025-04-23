n.d(t, { V: () => x }), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(497321),
    o = n(246946),
    c = n(63063),
    u = n(621319),
    d = n(44550),
    m = n(586382),
    g = n(859481),
    p = n(981631),
    f = n(388032),
    h = n(50986);
function x(e) {
    let { guild: t } = e,
        n = (0, l.e7)([o.Z], () => o.Z.hideInstantInvites),
        {
            vanityURLCode: x,
            vanityURLUses: b,
            originalVanityURLCode: j,
            errorDetails: _,
            fetched: v
        } = (0, l.cj)([d.Z], () => ({
            vanityURLCode: d.Z.vanityURLCode,
            vanityURLUses: d.Z.vanityURLUses,
            originalVanityURLCode: d.Z.originalVanityURLCode,
            errorDetails: d.Z.errorDetails,
            fetched: d.Z.fetchedVanityURL
        })),
        O = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == O || v || (0, u.U5)(O);
    }, [v, O]),
    null == t)
        ? null
        : n
          ? (0, r.jsx)(a.Z, {})
          : (0, r.jsxs)(s.hjN, {
                children: [
                    (0, r.jsxs)(s.vwX, {
                        className: h.title,
                        children: [f.intl.string(f.t['5XZKy8']), (0, r.jsx)(m.xl, { guild: t })]
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: h.description,
                        children: f.intl.format(f.t.koklFB, { helpCenterArticle: c.Z.getArticleURL(p.BhN.GUILD_VANITY_URL) })
                    }),
                    (0, r.jsx)(g.z, {
                        guild: t,
                        vanityURLCode: x,
                        vanityURLUses: b,
                        originalVanityURLCode: j,
                        errorDetails: _
                    })
                ]
            });
}
