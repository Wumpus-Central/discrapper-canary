t.d(e, { default: () => b });
var c = t(54381);
t(473749);
var o = t(332664),
    d = t(814249),
    i = t(531578),
    n = t(388032);
let r = [d.R7.OTHER];
function b(a) {
    let { transitionState: e, startRating: t, onClose: b, onSubmit: m } = a;
    return (0, c.jsx)(o.Z, {
        modalType: "summary",
        header: n.intl.string(n.t.hghcMh),
        body: n.intl.string(n.t.QFU785),
        problemTitle: n.intl.string(n.t.CtiHPm),
        onSubmit: m,
        onClose: b,
        ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
        ratingEmojiKind: "thumb",
        transitionState: e,
        problems: (0, d.iq)(),
        freeformNeededProblems: r,
        otherKey: d.R7.OTHER,
        startRating: t,
        hideDontShowAgainCheckbox: !0,
    });
}
