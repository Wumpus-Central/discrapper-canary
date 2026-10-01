n.d(e, { default: () => o });
var i = n(477900);
n(582128);
var a = n(382935),
    r = n(522250),
    s = n(50617),
    d = n(375708);
function o(t) {
    let { projectId: e, promptCount: n, onClose: o, transitionState: u } = t,
        l = (0, r.W8)();
    return (0, i.jsx)(a.A, {
        onMount: r.hq,
        onSubmit: function (t) {
            let { rating: i, problem: a, dontShowAgain: s, feedback: d } = t;
            (0, r.Hp)(e, n, { rating: i, reason: a, dontShowAgain: s, feedback: d }, "VibegrationsFeedback");
        },
        onClose: o,
        ratingHeader: d.intl.string(s.default.W7Sdp4),
        ratingBody: d.intl.string(s.default.dXJed8),
        categoriesHeader: d.intl.string(s.default.kLHFxL),
        optionsTree: [l],
        transitionState: u,
    });
}
