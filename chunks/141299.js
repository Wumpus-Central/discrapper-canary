var r = n(73153),
    s = n(975189),
    o = n(260498);
function i(e) {
    let t = o.Ay.getIntegrationStatus(e);
    return t?.integration_installed === !0 && !0 !== t.bot_permissions_changed;
}
function l(e, t, n) {
    (0, s.b4)(e, "preview bot answer", (e) => e.sendPreviewBotAnswer(t, n)) &&
        r.h.dispatch({ type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId: e, prompt: null });
}
n.d(
    t,
    {},
    {
        aS: i,
        lD: {
            preview_add_bot_prompt(e, t) {
                let { projectId: n } = t;
                null != e.prompt && i(n)
                    ? l(n, e.prompt.id, "added")
                    : r.h.dispatch({ type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId: n, prompt: e.prompt });
            },
        },
        xy: l,
    },
);
