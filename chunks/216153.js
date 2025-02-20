n.d(t, { Y: () => u });
var r = n(200651);
n(192379);
var i = n(704215),
    s = n(231757),
    a = n(63063),
    l = n(249881),
    o = n(981631),
    c = n(388032),
    d = n(195794);
let u = () => {
    let e = a.Z.getArticleURL(o.BhN.XBOX_CONNECTION);
    return (0, r.jsx)(l.t, {
        title: c.NW.string(c.t['2okkZW']),
        body: c.NW.format(c.t.OnERSU, { help_article: e }),
        img: (0, r.jsx)('img', {
            src: d,
            width: 'auto',
            height: '45',
            alt: ''
        }),
        newIndicatorDismissibleContent: i.z.XBOX_ONE_WAY_RECONNECT,
        onClick: () =>
            (0, s.Z)({
                platformType: o.ABu.XBOX,
                location: 'Xbox two way upsell'
            })
    });
};
