d.d(e, {
    default: () => o,
});
var t = d(627968);
d(64700);
var f = d(612479),
    b = d(521732),
    c = d(670455),
    r = d(985018);
let i = [b.tk.OTHER];

function o(a) {
    let { transitionState: e, startRating: d, onClose: o, onSubmit: n } = a;
    return (0, t.jsx)(f.A, {
        modalType: "summary",
        header: r.intl.string(r.t.hghcMh),
        body: r.intl.string(r.t.QFU785),
        problemTitle: r.intl.string(r.t.CtiHPm),
        onSubmit: n,
        onClose: o,
        ratingOptions: [c.P0.GOOD, c.P0.BAD],
        ratingEmojiKind: "thumb",
        transitionState: e,
        problems: (0, b.j0)(),
        freeformNeededProblems: i,
        otherKey: b.tk.OTHER,
        startRating: d,
        hideDontShowAgainCheckbox: !0,
    });
}
