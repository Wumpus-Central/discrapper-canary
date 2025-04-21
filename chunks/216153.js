n.d(t, { Y: () => u });
var i = n(200651);
n(192379);
var r = n(704215),
    s = n(231757),
    l = n(63063),
    a = n(249881),
    o = n(981631),
    c = n(388032),
    d = n(195794);
let u = () => {
    let e = l.Z.getArticleURL(o.BhN.XBOX_CONNECTION);
    return (0, i.jsx)(a.t, {
        title: c.intl.string(c.t['2okkZW']),
        body: c.intl.format(c.t.OnERSU, { help_article: e }),
        img: (0, i.jsx)('img', {
            src: d,
            width: 'auto',
            height: '45',
            alt: ''
        }),
        newIndicatorDismissibleContent: r.z.XBOX_ONE_WAY_RECONNECT,
        onClick: () =>
            (0, s.Z)({
                platformType: o.ABu.XBOX,
                location: 'Xbox two way upsell'
            })
    });
};
