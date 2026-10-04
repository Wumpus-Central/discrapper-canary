n.d(t, {
    AH: () => b,
    RD: () => j,
    Xi: () => x,
    cP: () => p,
    hl: () => v,
    iE: () => w,
    iJ: () => y,
    jb: () => g,
    qu: () => f,
});
var l = n(506774),
    a = n(930932),
    i = n(174459),
    r = n(245179),
    s = n(260498),
    o = n(652215),
    u = n(670455),
    d = n(248675),
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
    return r.Ay.getMessages(e).filter((e) => "assistant" === e.role && "side_reply" !== e.kind && (0, r.BL)(e)).length;
}
function j() {
    return {
        value: u.Eq.CONJURE,
        label: "",
        problemsHeader: c.intl.string(d.default.QhB3in),
        problemOptions: [
            { value: u.bj.NOT_WHAT_I_WANTED, variant: u.UV.UNSPECIFIED, label: c.intl.string(d.default.kwO25M) },
            { value: u.bj.TOO_SLOW, variant: u.UV.UNSPECIFIED, label: c.intl.string(d.default["8cyhK6"]) },
            { value: u.bj.APP_DIDNT_WORK, variant: u.UV.UNSPECIFIED, label: c.intl.string(d.default.g2rAXL) },
            {
                value: u.bj.DIDNT_KNOW_WHAT_TO_ASK_FOR,
                variant: u.UV.UNSPECIFIED,
                label: c.intl.string(d.default.X73n1w),
            },
        ],
        freeformConfig: { value: u.bj.FREEFORM, label: c.intl.string(d.default.zgU5P0) },
    };
}
function y() {
    i.default.track(o.HAw.OPEN_MODAL, { type: "vibegrations", source: "Feedback Modal" });
}
function w(e, t, n, l) {
    let { rating: r, reason: d, feedback: c, dontShowAgain: m } = n;
    (!0 === m && (0, a.n3)({ feedbackType: u.MW.VIBEGRATIONS, location: l }),
        null != r &&
            i.default.track(o.HAw.VIBEGRATIONS_FEEDBACK, {
                project_id: e,
                application_id: s.Ay.getProject(e)?.application_id ?? null,
                rating: r,
                reason: d?.value ?? null,
                feedback: c,
                prompt_count: t,
                location: "Vibegrations Prompt",
            }));
}
