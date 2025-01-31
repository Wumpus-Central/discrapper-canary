i.d(n, { default: () => u });
var e = i(200651);
i(192379);
var r = i(481060),
    l = i(923298),
    a = i(63063),
    d = i(981631),
    s = i(388032);
function u(t) {
    let { listing: n, transitionState: i, onClose: u, ...o } = t;
    return (0, e.jsx)(l.Z, {
        sku_id: n.id,
        sku_name: n.name,
        guild_id: n.guild_id,
        header: s.intl.format(s.t.avKMZm, { listingName: n.name }),
        transitionState: i,
        onClose: u,
        ...o,
        children: (0, e.jsx)(r.Text, {
            variant: 'text-md/normal',
            children: s.intl.format(s.t.jkvpmp, {
                listingName: n.name,
                monetizationTermsUrl: a.Z.getArticleURL(d.BhN.CREATOR_TERMS),
                communityGuidelinesUrl: d.EYA.GUIDELINES
            })
        })
    });
}
