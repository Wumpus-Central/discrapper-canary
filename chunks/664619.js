n.d(t, { Is: () => R, R_: () => A, YI: () => h, tZ: () => C });
var i = n(636537),
    l = n(73153),
    _ = n(803306),
    u = n(382483),
    r = n(627363),
    a = n(287809),
    s = n(517244),
    o = n(513845),
    c = n(371169),
    p = n(385081),
    E = n(722701),
    d = n(652215);
function R(e, t, n) {
    (0, p.Hy)(e, {
        location: "publish",
        code: p.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
async function h(e, t) {
    let { guildId: n, alsoRemovePreviewBot: l } = t;
    try {
        return await i.Bo.post({
            url: d.Rsh.CONJURE_PROJECT_UNPUBLISH(e),
            body: { guild_id: n, also_remove_preview_bot: l },
            rejectWithError: !1,
        });
    } finally {
        (0, c.GO)(e);
    }
}
async function A(e) {
    let t = await h(e, {}).catch(() => null);
    if (t?.ok !== !0) return !1;
    let n = E.A.getPublishStatus(e);
    null != n &&
        l.h.dispatch({
            type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
            projectId: e,
            published: !1,
            hasUnpublishedChanges: !1,
            surface: n.surface,
            previewAppChannels: n.previewAppChannels,
        });
    let i = a.default.getCurrentUser()?.id;
    return (null != i && (0, _.eO)(i).catch(() => {}), !0);
}
async function C(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: _, project: a } = (await (0, c.U1)(e)).body,
        p = n ? a.preview_application_id : a.application_id;
    null != p &&
        (l.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: p }),
        await (0, r.TA)(p),
        await (0, u.un)(p, { force: !0 }).catch(() => {}),
        n ? _ && !i && (0, s.k)(p) : (0, o.R2)(p));
}
