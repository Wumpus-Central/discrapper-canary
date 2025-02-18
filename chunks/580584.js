n.d(t, { default: () => r });
var a = n(200651);
n(192379);
var s = n(332664),
    l = n(814249),
    i = n(531578),
    o = n(388032);
let c = [l.R7.OTHER];
function r(e) {
    let { transitionState: t, startRating: n, onClose: r, onSubmit: d } = e;
    return (0, a.jsx)(s.Z, {
        modalType: 'summary',
        header: o.NW.string(o.t.hghcMj),
        body: o.NW.string(o.t['QFU78/']),
        problemTitle: o.NW.string(o.t.CtiHPj),
        onSubmit: d,
        onClose: r,
        ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
        ratingEmojiKind: 'thumb',
        transitionState: t,
        problems: (0, l.iq)(),
        freeformNeededProblems: c,
        otherKey: l.R7.OTHER,
        startRating: n,
        hideDontShowCheckbox: !0
    });
}
