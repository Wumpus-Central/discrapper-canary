o.d(t, { default: () => s });
var _ = o(255367);
o(73800);
var c = o(332664),
    a = o(814249),
    i = o(531578),
    n = o(388032);
let r = [a.R7.OTHER];
function s(e) {
    let { transitionState: t, startRating: o, onClose: s, onSubmit: b } = e;
    return (0, _.jsx)(c.Z, {
        modalType: 'summary',
        header: n.intl.string(n.t.hghcMj),
        body: n.intl.string(n.t['QFU78/']),
        problemTitle: n.intl.string(n.t.CtiHPj),
        onSubmit: b,
        onClose: s,
        ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
        ratingEmojiKind: 'thumb',
        transitionState: t,
        problems: (0, a.iq)(),
        freeformNeededProblems: r,
        otherKey: a.R7.OTHER,
        startRating: o,
        hideDontShowAgainCheckbox: !0
    });
}
