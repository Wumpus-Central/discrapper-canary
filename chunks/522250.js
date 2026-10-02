n.d(t, {
    AH: () => b,
    Hp: () => w,
    W8: () => j,
    Xi: () => x,
    cP: () => p,
    hl: () => v,
    hq: () => y,
    jb: () => g,
    qu: () => f,
});
var l = n(506774),
    a = n(930932),
    i = n(174459),
    s = n(783791),
    r = n(972786),
    o = n(652215),
    u = n(670455),
    d = n(50617),
    c = n(375708);
let m = "shownVibegrationsFeedbackProjectIds",
    f = 3,
    h = new Set();
function p(e) {
    h.add(e);
}
function g(e) {
    return h.delete(e);
}
function x(e) {
    return (l.w.get(m) ?? []).includes(e);
}
function b(e) {
    let t = l.w.get(m) ?? [];
    t.includes(e) || l.w.set(m, [...t, e]);
}
function v(e) {
    return s.Ay.getMessages(e).filter((e) => "assistant" === e.role && "side_reply" !== e.kind && (0, s.BL)(e)).length;
}
function j() {
    return {
        value: u.Eq.VIBEGRATIONS,
        label: "",
        problemsHeader: c.intl.string(d.default.kLHFxL),
        problemOptions: [
            { value: u.qK.NOT_WHAT_I_WANTED, variant: u.UV.UNSPECIFIED, label: c.intl.string(d.default.UJLIUY) },
            { value: u.qK.TOO_SLOW, variant: u.UV.UNSPECIFIED, label: c.intl.string(d.default.FVQz1w) },
            { value: u.qK.APP_DIDNT_WORK, variant: u.UV.UNSPECIFIED, label: c.intl.string(d.default["4AdY23"]) },
            {
                value: u.qK.DIDNT_KNOW_WHAT_TO_ASK_FOR,
                variant: u.UV.UNSPECIFIED,
                label: c.intl.string(d.default["u/juX1"]),
            },
        ],
        freeformConfig: { value: u.qK.FREEFORM, label: c.intl.string(d.default["8Ee6yW"]) },
    };
}
function y() {
    i.default.track(o.HAw.OPEN_MODAL, { type: "vibegrations", source: "Feedback Modal" });
}
function w(e, t, n, l) {
    let { rating: s, reason: d, feedback: c, dontShowAgain: m } = n;
    (!0 === m && (0, a.n3)({ feedbackType: u.MW.VIBEGRATIONS, location: l }),
        null != s &&
            i.default.track(o.HAw.VIBEGRATIONS_FEEDBACK, {
                project_id: e,
                application_id: r.Ay.getProject(e)?.application_id ?? null,
                rating: s,
                reason: d?.value ?? null,
                feedback: c,
                prompt_count: t,
                location: "Vibegrations Prompt",
            }));
}
