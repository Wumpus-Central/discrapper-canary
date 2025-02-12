n.d(t, { default: () => d });
var s = n(200651);
n(192379);
var a = n(332664),
    i = n(814249),
    l = n(531578),
    c = n(388032),
    o = n(961860);
let r = [
    {
        className: o.emojiThumbsUp,
        rating: l.aZ.GOOD,
        classNameSelected: o.selected
    },
    {
        className: o.emojiThumbsDown,
        rating: l.aZ.BAD,
        classNameSelected: o.selected
    }
];
function d(e) {
    let { transitionState: t, startRating: n, onClose: l, onSubmit: d } = e;
    return (0, s.jsx)(a.Z, {
        modalType: 'summary',
        header: c.intl.string(c.t.hghcMj),
        body: c.intl.string(c.t['QFU78/']),
        problemTitle: c.intl.string(c.t.CtiHPj),
        onSubmit: d,
        onClose: l,
        ratingConfigs: r,
        transitionState: t,
        problems: (0, i.iq)(),
        ratingsSelectorClassName: o.ratingsSelector,
        feedbackProblems: [i.R7.OTHER],
        otherKey: i.R7.OTHER,
        startRating: n,
        hideDontShowCheckbox: !0
    });
}
