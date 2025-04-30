n.d(t, { default: () => r });
var a = n(200651);
n(192379);
var s = n(332664),
    i = n(814249),
    o = n(531578),
    l = n(388032);
let c = [i.R7.OTHER];
function r(e) {
    let { transitionState: t, startRating: n, onClose: r, onSubmit: d } = e;
    return (0, a.jsx)(s.Z, {
        modalType: 'summary',
        header: l.intl.string(l.t.hghcMj),
        body: l.intl.string(l.t['QFU78/']),
        problemTitle: l.intl.string(l.t.CtiHPj),
        onSubmit: d,
        onClose: r,
        ratingOptions: [o.aZ.GOOD, o.aZ.BAD],
        ratingEmojiKind: 'thumb',
        transitionState: t,
        problems: (0, i.iq)(),
        freeformNeededProblems: c,
        otherKey: i.R7.OTHER,
        startRating: n,
        hideDontShowCheckbox: !0
    });
}
