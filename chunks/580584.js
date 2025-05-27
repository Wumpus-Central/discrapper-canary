o.d(t, { default: () => s });
var _ = o(255367);
o(73800);
var c = o(332664),
    n = o(814249),
    i = o(531578),
    a = o(388032);
let r = [n.R7.OTHER];
function s(e) {
    let { transitionState: t, startRating: o, onClose: s, onSubmit: b } = e;
    return (0, _.jsx)(c.Z, {
        modalType: 'summary',
        header: a.intl.string(a.t.hghcMj),
        body: a.intl.string(a.t['QFU78/']),
        problemTitle: a.intl.string(a.t.CtiHPj),
        onSubmit: b,
        onClose: s,
        ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
        ratingEmojiKind: 'thumb',
        transitionState: t,
        problems: (0, n.iq)(),
        freeformNeededProblems: r,
        otherKey: n.R7.OTHER,
        startRating: o,
        hideDontShowAgainCheckbox: !0
    });
}
