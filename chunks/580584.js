n.r(t),
    n.d(t, {
        default: function () {
            return d;
        }
    });
var s = n(200651);
n(192379);
var a = n(332664),
    o = n(814249),
    l = n(531578),
    i = n(388032),
    r = n(426598);
let c = [
    {
        className: r.emojiThumbsUp,
        rating: l.aZ.GOOD,
        classNameSelected: r.selected
    },
    {
        className: r.emojiThumbsDown,
        rating: l.aZ.BAD,
        classNameSelected: r.selected
    }
];
function d(e) {
    let { transitionState: t, startRating: n, onClose: l, onSubmit: d } = e;
    return (0, s.jsx)(a.Z, {
        modalType: 'summary',
        header: i.intl.string(i.t.hghcMj),
        body: i.intl.string(i.t['QFU78/']),
        problemTitle: i.intl.string(i.t.CtiHPj),
        onSubmit: d,
        onClose: l,
        ratingConfigs: c,
        transitionState: t,
        problems: (0, o.iq)(),
        ratingsSelectorClassName: r.ratingsSelector,
        feedbackProblems: [o.R7.OTHER],
        otherKey: o.R7.OTHER,
        startRating: n,
        hideDontShowCheckbox: !0
    });
}
