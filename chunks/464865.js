n.d(t, { V: () => x }), n(953529);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(497321),
    o = n(246946),
    c = n(63063),
    d = n(621319),
    u = n(44550),
    m = n(586382),
    g = n(859481),
    p = n(981631),
    h = n(388032),
    f = n(665065);
function x(e) {
    let { guild: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.hideInstantInvites),
        {
            vanityURLCode: x,
            vanityURLUses: b,
            originalVanityURLCode: j,
            errorDetails: N,
            fetched: _
        } = (0, s.cj)([u.Z], () => ({
            vanityURLCode: u.Z.vanityURLCode,
            vanityURLUses: u.Z.vanityURLUses,
            originalVanityURLCode: u.Z.originalVanityURLCode,
            errorDetails: u.Z.errorDetails,
            fetched: u.Z.fetchedVanityURL
        })),
        v = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == v || _ || (0, d.U5)(v);
    }, [_, v]),
    null == t)
        ? null
        : n
          ? (0, r.jsx)(a.Z, {})
          : (0, r.jsxs)(l.hjN, {
                children: [
                    (0, r.jsxs)(l.vwX, {
                        className: f.title,
                        children: [h.NW.string(h.t['5XZKy8']), (0, r.jsx)(m.xl, { guild: t })]
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: f.description,
                        children: h.NW.format(h.t.koklFB, { helpCenterArticle: c.Z.getArticleURL(p.BhN.GUILD_VANITY_URL) })
                    }),
                    (0, r.jsx)(g.z, {
                        guild: t,
                        vanityURLCode: x,
                        vanityURLUses: b,
                        originalVanityURLCode: j,
                        errorDetails: N
                    })
                ]
            });
}
