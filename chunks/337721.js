n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(434404),
    r = n(970731),
    a = n(981631),
    s = n(388032),
    o = n(471475),
    d = n(930128);
function c(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, i.jsx)(r.ZP, {
        header: s.intl.string(s.t.Hgd22t),
        content: s.intl.string(s.t.SorTPD),
        asset: (0, i.jsx)('div', {
            className: o.image,
            children: (0, i.jsx)('img', {
                alt: '',
                src: d
            })
        }),
        buttonCTA: s.intl.string(s.t['9l+df3']),
        onClick: (e) => {
            l.Z.open(t.id, a.pNK.DISCOVERY_LANDING_PAGE);
        },
        secondaryButtonCTA: s.intl.string(s.t.duVdqq),
        onSecondaryClick: () => {},
        markAsDismissed: n
    });
}
