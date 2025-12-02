o.d(t, { default: () => b });
var _ = o(54381);
o(473749);
var a = o(332664),
    c = o(814249),
    i = o(531578),
    n = o(388032);
let r = [c.R7.OTHER];
function b(e) {
    let { transitionState: t, startRating: o, onClose: b, onSubmit: m } = e;
    return (0, _.jsx)(a.Z, {
        modalType: "summary",
        header: n.intl.string(n.t.hghcMh),
        body: n.intl.string(n.t.QFU785),
        problemTitle: n.intl.string(n.t.CtiHPm),
        onSubmit: m,
        onClose: b,
        ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
        ratingEmojiKind: "thumb",
        transitionState: t,
        problems: (0, c.iq)(),
        freeformNeededProblems: r,
        otherKey: c.R7.OTHER,
        startRating: o,
        hideDontShowAgainCheckbox: !0,
    });
}
