n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(434404),
    l = n(970731),
    a = n(981631),
    o = n(388032),
    s = n(545900),
    c = n(930128);
function u(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, r.jsx)(l.ZP, {
        header: o.NW.string(o.t.Hgd22t),
        content: o.NW.string(o.t.SorTPD),
        asset: (0, r.jsx)('div', {
            className: s.image,
            children: (0, r.jsx)('img', {
                alt: '',
                src: c
            })
        }),
        buttonCTA: o.NW.string(o.t['9l+df3']),
        onClick: (e) => {
            i.Z.open(t.id, a.pNK.DISCOVERY_LANDING_PAGE);
        },
        secondaryButtonCTA: o.NW.string(o.t.duVdqq),
        onSecondaryClick: () => {},
        markAsDismissed: n
    });
}
