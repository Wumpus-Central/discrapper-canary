n.d(t, { Is: () => R, R_: () => A, YI: () => h, _b: () => f, tZ: () => P });
var i = n(636537),
    l = n(73153),
    _ = n(803306),
    u = n(382483),
    r = n(287809),
    s = n(517244),
    a = n(513845),
    o = n(371169),
    c = n(260498),
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
        (0, o.GO)(e);
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
            previewDevicePermissions: n.previewDevicePermissions,
        });
    let i = r.default.getCurrentUser()?.id;
    return (null != i && (0, _.eO)(i).catch(() => {}), !0);
}
async function P(e, t) {
    let { isPreview: n, install: i } = t,
        l = c.Ay.getProject(e),
        _ = null == l ? null : n ? l.preview_application_id : l.application_id,
        u = !n || null != i,
        r = null != _ ? C(_, n, u ? i : null) : null,
        { bot_permissions_changed: s, integration_installed: a, project: p } = (await (0, o.U1)(e)).body,
        E = n ? p.preview_application_id : p.application_id;
    if (null != E) {
        let e = { integrationInstalled: a, botPermissionsChanged: s };
        E !== _ || null == r ? await C(E, n, e) : (await r, u || U(E, n, e));
    }
}
function f(e) {
    return C(e, !0, null);
}
async function C(e, t, n) {
    (l.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: e }),
        await Promise.all([(0, o.$N)(e), (0, u.un)(e, { force: !0 }).catch(() => {})]),
        null !== n && U(e, t, n));
}
function U(e, t, n) {
    t ? n?.integrationInstalled !== !0 || n.botPermissionsChanged || (0, s.k)(e) : (0, a.R2)(e);
}
