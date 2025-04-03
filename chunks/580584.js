n.d(t, { default: () => r });
var a = n(200651);
n(192379);
var s = n(332664),
    o = n(814249),
    i = n(531578),
    l = n(388032);
let c = [o.R7.OTHER];
function r(e) {
    let { transitionState: t, startRating: n, onClose: r, onSubmit: d } = e;
    return (0, a.jsx)(s.Z, {
        modalType: 'summary',
        header: l.NW.string(l.t.hghcMj),
        body: l.NW.string(l.t['QFU78/']),
        problemTitle: l.NW.string(l.t.CtiHPj),
        onSubmit: d,
        onClose: r,
        ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
        ratingEmojiKind: 'thumb',
        transitionState: t,
        problems: (0, o.iq)(),
        freeformNeededProblems: c,
        otherKey: o.R7.OTHER,
        startRating: n,
        hideDontShowCheckbox: !0
    });
}
