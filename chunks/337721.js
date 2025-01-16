n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(434404),
    l = n(970731),
    a = n(981631),
    s = n(388032),
    o = n(328835),
    c = n(930128);
function d(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, i.jsx)(l.ZP, {
        header: s.intl.string(s.t.Hgd22t),
        content: s.intl.string(s.t.SorTPD),
        asset: (0, i.jsx)('div', {
            className: o.image,
            children: (0, i.jsx)('img', {
                alt: '',
                src: c
            })
        }),
        buttonCTA: s.intl.string(s.t['9l+df3']),
        onClick: (e) => {
            var n;
            (n = t), r.Z.open(n.id, a.pNK.DISCOVERY_LANDING_PAGE);
        },
        secondaryButtonCTA: s.intl.string(s.t.duVdqq),
        onSecondaryClick: () => {},
        markAsDismissed: n
    });
}
