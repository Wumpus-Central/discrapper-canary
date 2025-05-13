n.d(t, { default: () => l });
var r = n(255367);
n(73800);
var o = n(332664),
    a = n(814249),
    i = n(531578),
    s = n(388032);
let c = [a.R7.OTHER];
function l(e) {
    let { transitionState: t, startRating: n, onClose: l, onSubmit: u } = e;
    return (0, r.jsx)(o.Z, {
        modalType: 'summary',
        header: s.intl.string(s.t.hghcMj),
        body: s.intl.string(s.t['QFU78/']),
        problemTitle: s.intl.string(s.t.CtiHPj),
        onSubmit: u,
        onClose: l,
        ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
        ratingEmojiKind: 'thumb',
        transitionState: t,
        problems: (0, a.iq)(),
        freeformNeededProblems: c,
        otherKey: a.R7.OTHER,
        startRating: n,
        hideDontShowAgainCheckbox: !0
    });
}
