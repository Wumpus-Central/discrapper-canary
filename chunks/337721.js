n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(434404),
    l = n(970731),
    o = n(981631),
    a = n(388032),
    s = n(141585),
    c = n(930128);
function u(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, r.jsx)(l.ZP, {
        header: a.NW.string(a.t.Hgd22t),
        content: a.NW.string(a.t.SorTPD),
        asset: (0, r.jsx)('div', {
            className: s.image,
            children: (0, r.jsx)('img', {
                alt: '',
                src: c
            })
        }),
        buttonCTA: a.NW.string(a.t['9l+df3']),
        onClick: (e) => {
            i.Z.open(t.id, o.pNK.DISCOVERY_LANDING_PAGE);
        },
        secondaryButtonCTA: a.NW.string(a.t.duVdqq),
        onSecondaryClick: () => {},
        markAsDismissed: n
    });
}
