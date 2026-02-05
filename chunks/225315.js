_.d(t, { default: () => b });
var o = _(627968);
_(64700);
var c = _(612479),
    i = _(521732),
    r = _(670455),
    a = _(985018);
let n = [i.tk.OTHER];
function b(e) {
    let { transitionState: t, startRating: _, onClose: b, onSubmit: s } = e;
    return (0, o.jsx)(c.A, {
        modalType: "summary",
        header: a.intl.string(a.t.hghcMh),
        body: a.intl.string(a.t.QFU785),
        problemTitle: a.intl.string(a.t.CtiHPm),
        onSubmit: s,
        onClose: b,
        ratingOptions: [r.P0.GOOD, r.P0.BAD],
        ratingEmojiKind: "thumb",
        transitionState: t,
        problems: (0, i.j0)(),
        freeformNeededProblems: n,
        otherKey: i.tk.OTHER,
        startRating: _,
        hideDontShowAgainCheckbox: !0,
    });
}
