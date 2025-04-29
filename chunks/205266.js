n.d(t, { t: () => u });
var i = n(255367);
n(73800);
var r = n(704215),
    s = n(231757),
    l = n(63063),
    a = n(249881),
    o = n(981631),
    c = n(388032),
    d = n(359734);
let u = () => {
    let e = l.Z.getArticleURL(o.BhN.PS_CONNECTION);
    return (0, i.jsx)(a.t, {
        title: c.intl.string(c.t.v20wws),
        body: c.intl.format(c.t.lTZBio, { help_article: e }),
        img: (0, i.jsx)('img', {
            src: d,
            width: '82',
            height: 'auto',
            alt: ''
        }),
        newIndicatorDismissibleContent: r.z.PS_ONE_WAY_RECONNECT,
        onClick: () =>
            (0, s.Z)({
                platformType: o.ABu.PLAYSTATION,
                location: 'PS two way upsell'
            })
    });
};
