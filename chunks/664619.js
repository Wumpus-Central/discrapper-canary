n.d(t, { Is: () => R, R_: () => A, YI: () => h, tZ: () => I });
var i = n(636537),
    l = n(73153),
    _ = n(803306),
    u = n(382483),
    a = n(627363),
    r = n(287809),
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
    let i = r.default.getCurrentUser()?.id;
    return (null != i && (0, _.eO)(i).catch(() => {}), !0);
}
async function I(e, t) {
    let { isPreview: n } = t,
        { bot_permissions_changed: i, integration_installed: _, project: r } = (await (0, c.U1)(e)).body,
        E = n ? r.preview_application_id : r.application_id;
    (null != E &&
        (l.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: E }),
        await (0, a.TA)(E),
        await (0, u.un)(E, { force: !0 }).catch(() => {}),
        n ? _ && !i && (0, s.k)(E) : (0, o.R2)(E)),
        (0, p.w2)(e, { isPreview: n }));
}
