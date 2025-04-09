n.d(t, { V: () => b }), n(953529);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(497321),
    o = n(246946),
    c = n(63063),
    d = n(621319),
    u = n(44550),
    m = n(586382),
    g = n(859481),
    p = n(981631),
    f = n(388032),
    h = n(50986);
function b(e) {
    let { guild: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.hideInstantInvites),
        {
            vanityURLCode: b,
            vanityURLUses: x,
            originalVanityURLCode: j,
            errorDetails: N,
            fetched: v
        } = (0, s.cj)([u.Z], () => ({
            vanityURLCode: u.Z.vanityURLCode,
            vanityURLUses: u.Z.vanityURLUses,
            originalVanityURLCode: u.Z.originalVanityURLCode,
            errorDetails: u.Z.errorDetails,
            fetched: u.Z.fetchedVanityURL
        })),
        _ = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == _ || v || (0, d.U5)(_);
    }, [v, _]),
    null == t)
        ? null
        : n
          ? (0, r.jsx)(l.Z, {})
          : (0, r.jsxs)(a.hjN, {
                children: [
                    (0, r.jsxs)(a.vwX, {
                        className: h.title,
                        children: [f.NW.string(f.t['5XZKy8']), (0, r.jsx)(m.xl, { guild: t })]
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: h.description,
                        children: f.NW.format(f.t.koklFB, { helpCenterArticle: c.Z.getArticleURL(p.BhN.GUILD_VANITY_URL) })
                    }),
                    (0, r.jsx)(g.z, {
                        guild: t,
                        vanityURLCode: b,
                        vanityURLUses: x,
                        originalVanityURLCode: j,
                        errorDetails: N
                    })
                ]
            });
}
