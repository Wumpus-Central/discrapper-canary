i.d(n, { default: () => d });
var e = i(477900);
i(582128);
var a = i(382935),
    r = i(342110),
    s = i(248675),
    o = i(375708);
function d(t) {
    let { projectId: n, promptCount: i, onClose: d, transitionState: u } = t,
        c = (0, r.RD)();
    return (0, e.jsx)(a.A, {
        onMount: r.iJ,
        onSubmit: function (t) {
            let { rating: e, problem: a, dontShowAgain: s, feedback: o } = t;
            (0, r.iE)(n, i, { rating: e, reason: a, dontShowAgain: s, feedback: o }, "VibegrationsFeedback");
        },
        onClose: d,
        ratingHeader: o.intl.string(s.default.QnwyW8),
        ratingBody: o.intl.string(s.default["+BS1Qc"]),
        categoriesHeader: o.intl.string(s.default.QhB3in),
        optionsTree: [c],
        transitionState: u,
    });
}
