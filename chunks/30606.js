n.d(t, { l: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(246605),
    a = n(419954),
    r = n(274184),
    o = n(780964),
    d = n(89516);
let c = (0, a.E2)(o.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, s.bG)([r.Ay], () => r.Ay.getSurveyOverride());
        return (0, i.jsx)(d.q, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => l.xr(e),
            fetchOverride: (e) => l.BC(e, !0) ?? null,
        });
    },
});
