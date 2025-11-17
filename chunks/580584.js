o.d(t, { default: () => b });
var _ = o(54381);
o(473749);
var c = o(332664),
    a = o(814249),
    n = o(531578),
    i = o(388032);
let r = [a.R7.OTHER];
function b(e) {
    let { transitionState: t, startRating: o, onClose: b, onSubmit: s } = e;
    return (0, _.jsx)(c.Z, {
        modalType: "summary",
        header: i.intl.string(i.t.hghcMh),
        body: i.intl.string(i.t.QFU785),
        problemTitle: i.intl.string(i.t.CtiHPm),
        onSubmit: s,
        onClose: b,
        ratingOptions: [n.aZ.GOOD, n.aZ.BAD],
        ratingEmojiKind: "thumb",
        transitionState: t,
        problems: (0, a.iq)(),
        freeformNeededProblems: r,
        otherKey: a.R7.OTHER,
        startRating: o,
        hideDontShowAgainCheckbox: !0,
    });
}
