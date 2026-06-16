s.d(i, { default: () => d });
var c = s(627968);
s(64700);
var e = s(87719),
    n = s(81456),
    r = s(831318),
    a = s(375708);
function d(t) {
    let { premiumUpsellType: i, title: s, body: d, onClose: o, onSecondaryClick: p, ...u } = t,
        l = (0, n.A)(i);
    return (0, c.jsx)(r.A, {
        title: s,
        subtitle: d,
        graphic: l,
        onSecondaryClick: () => {
            p(), (0, e.x)(o);
        },
        secondaryCTA: a.intl.string(a.t.PcTCB7),
        onClose: o,
        ...u,
    });
}
