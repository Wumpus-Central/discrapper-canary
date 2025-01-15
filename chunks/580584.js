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
    i = n(531578),
    l = n(388032),
    r = n(181213);
let c = [
    {
        className: r.emojiThumbsUp,
        rating: i.aZ.GOOD,
        classNameSelected: r.selected
    },
    {
        className: r.emojiThumbsDown,
        rating: i.aZ.BAD,
        classNameSelected: r.selected
    }
];
function d(e) {
    let { transitionState: t, startRating: n, onClose: i, onSubmit: d } = e;
    return (0, s.jsx)(a.Z, {
        modalType: 'summary',
        header: l.intl.string(l.t.hghcMj),
        body: l.intl.string(l.t['QFU78/']),
        problemTitle: l.intl.string(l.t.CtiHPj),
        onSubmit: d,
        onClose: i,
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
