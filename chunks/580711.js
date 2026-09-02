a.d(e, { default: () => c });
var l = a(477900);
a(582128);
var i = a(930932),
    n = a(382935),
    r = a(174459),
    o = a(972786),
    u = a(652215),
    d = a(670455),
    s = a(50617),
    p = a(375708);
function c(t) {
    let { projectId: e, promptCount: a, onClose: c, transitionState: E } = t,
        _ = {
            value: d.Eq.VIBEGRATIONS,
            label: "",
            problemsHeader: p.intl.string(s.default.kLHFxL),
            problemOptions: [
                { value: d.qK.NOT_WHAT_I_WANTED, variant: d.UV.UNSPECIFIED, label: p.intl.string(s.default.UJLIUY) },
                { value: d.qK.TOO_SLOW, variant: d.UV.UNSPECIFIED, label: p.intl.string(s.default.FVQz1w) },
                { value: d.qK.APP_DIDNT_WORK, variant: d.UV.UNSPECIFIED, label: p.intl.string(s.default["4AdY23"]) },
                {
                    value: d.qK.DIDNT_KNOW_WHAT_TO_ASK_FOR,
                    variant: d.UV.UNSPECIFIED,
                    label: p.intl.string(s.default["u/juX1"]),
                },
            ],
            freeformConfig: { value: d.qK.FREEFORM, label: p.intl.string(s.default["8Ee6yW"]) },
        };
    return (0, l.jsx)(n.A, {
        onMount: () => {
            r.default.track(u.HAw.OPEN_MODAL, { type: "vibegrations", source: "Feedback Modal" });
        },
        onSubmit: function (t) {
            let { rating: l, problem: n, dontShowAgain: s, feedback: p } = t;
            s && (0, i.n3)({ feedbackType: d.MW.VIBEGRATIONS, location: "VibegrationsFeedback" }),
                null != l &&
                    r.default.track(u.HAw.VIBEGRATIONS_FEEDBACK, {
                        project_id: e,
                        application_id: o.Ay.getProject(e)?.application_id ?? null,
                        rating: l,
                        reason: n?.value ?? null,
                        feedback: p,
                        prompt_count: a,
                        location: "Vibegrations Prompt",
                    });
        },
        onClose: c,
        ratingHeader: p.intl.string(s.default.W7Sdp4),
        ratingBody: p.intl.string(s.default.dXJed8),
        categoriesHeader: p.intl.string(s.default.kLHFxL),
        optionsTree: [_],
        transitionState: E,
    });
}
