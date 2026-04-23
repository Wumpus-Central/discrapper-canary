r.d(t, { default: () => s });
var o = r(627968);
r(64700);
var a = r(612479),
    n = r(521732),
    i = r(670455),
    l = r(985018);
let d = [n.tk.OTHER];
function s(e) {
    let { transitionState: t, startRating: r, onClose: s, onSubmit: u } = e;
    return (0, o.jsx)(a.A, {
        modalType: "summary",
        header: l.intl.string(l.t.hghcMh),
        body: l.intl.string(l.t.QFU785),
        problemTitle: l.intl.string(l.t.CtiHPm),
        onSubmit: u,
        onClose: s,
        ratingOptions: [i.P0.GOOD, i.P0.BAD],
        ratingEmojiKind: "thumb",
        transitionState: t,
        problems: (0, n.j0)(),
        freeformNeededProblems: d,
        otherKey: n.tk.OTHER,
        startRating: r,
        hideDontShowAgainCheckbox: !0,
    });
}
