l.d(t, { AH: () => x, Hp: () => b, W8: () => p, Xi: () => h, hl: () => g, hq: () => v, qu: () => f });
var n = l(506774),
    a = l(930932),
    r = l(174459),
    i = l(783791),
    s = l(972786),
    u = l(652215),
    o = l(670455),
    d = l(759967),
    c = l(375708);
let m = "shownVibegrationsFeedbackProjectIds",
    f = 3;
function h(e) {
    return (n.w.get(m) ?? []).includes(e);
}
function x(e) {
    let t = n.w.get(m) ?? [];
    t.includes(e) || n.w.set(m, [...t, e]);
}
function g(e) {
    return i.Ay.getMessages(e).filter((e) => "assistant" === e.role && "side_reply" !== e.kind && (0, i.BL)(e)).length;
}
function p() {
    return {
        value: o.Eq.VIBEGRATIONS,
        label: "",
        problemsHeader: c.intl.string(d.default.kLHFxL),
        problemOptions: [
            { value: o.qK.NOT_WHAT_I_WANTED, variant: o.UV.UNSPECIFIED, label: c.intl.string(d.default.UJLIUY) },
            { value: o.qK.TOO_SLOW, variant: o.UV.UNSPECIFIED, label: c.intl.string(d.default.FVQz1w) },
            { value: o.qK.APP_DIDNT_WORK, variant: o.UV.UNSPECIFIED, label: c.intl.string(d.default["4AdY23"]) },
            {
                value: o.qK.DIDNT_KNOW_WHAT_TO_ASK_FOR,
                variant: o.UV.UNSPECIFIED,
                label: c.intl.string(d.default["u/juX1"]),
            },
        ],
        freeformConfig: { value: o.qK.FREEFORM, label: c.intl.string(d.default["8Ee6yW"]) },
    };
}
function v() {
    r.default.track(u.HAw.OPEN_MODAL, { type: "vibegrations", source: "Feedback Modal" });
}
function b(e, t, l, n) {
    let { rating: i, reason: d, feedback: c, dontShowAgain: m } = l;
    (!0 === m && (0, a.n3)({ feedbackType: o.MW.VIBEGRATIONS, location: n }),
        null != i &&
            r.default.track(u.HAw.VIBEGRATIONS_FEEDBACK, {
                project_id: e,
                application_id: s.Ay.getProject(e)?.application_id ?? null,
                rating: i,
                reason: d?.value ?? null,
                feedback: c,
                prompt_count: t,
                location: "Vibegrations Prompt",
            }));
}
