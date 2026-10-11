n.d(_, { Is: () => E, YI: () => s, tZ: () => d });
var i = n(636537),
    e = n(73153),
    l = n(382483),
    u = n(627363),
    a = n(517244),
    o = n(513845),
    r = n(371169),
    c = n(385081),
    p = n(652215);
function E(t, _, n) {
    (0, c.Hy)(t, {
        location: "publish",
        code: c.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: _,
        isPreview: n,
    });
}
async function s(t, _) {
    let { guildId: n, alsoRemovePreviewBot: e } = _;
    try {
        return await i.Bo.post({
            url: p.Rsh.CONJURE_PROJECT_UNPUBLISH(t),
            body: { guild_id: n, also_remove_preview_bot: e },
            rejectWithError: !1,
        });
    } finally {
        (0, r.GO)(t);
    }
}
async function d(t, _) {
    let { isPreview: n } = _,
        { bot_permissions_changed: i, integration_installed: p, project: E } = (await (0, r.U1)(t)).body,
        s = n ? E.preview_application_id : E.application_id;
    (null != s &&
        (e.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: s }),
        await (0, u.TA)(s),
        await (0, l.un)(s, { force: !0 }).catch(() => {}),
        n ? p && !i && (0, a.k)(s) : (0, o.R2)(s)),
        (0, c.w2)(t, { isPreview: n }));
}
