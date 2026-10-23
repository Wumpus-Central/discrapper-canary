n.d(t, { Is: () => R, R_: () => A, YI: () => h, _b: () => C, tZ: () => P });
var l = n(636537),
    i = n(73153),
    _ = n(803306),
    u = n(382483),
    r = n(287809),
    s = n(517244),
    o = n(513845),
    a = n(371169),
    c = n(260498),
    p = n(385081),
    d = n(722701),
    E = n(652215);
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
    let { guildId: n, alsoRemovePreviewBot: i } = t;
    try {
        return await l.Bo.post({
            url: E.Rsh.CONJURE_PROJECT_UNPUBLISH(e),
            body: { guild_id: n, also_remove_preview_bot: i },
            rejectWithError: !1,
        });
    } finally {
        (0, a.GO)(e);
    }
}
async function A(e) {
    let t = await h(e, {}).catch(() => null);
    if (t?.ok !== !0) return !1;
    let n = d.A.getPublishStatus(e);
    null != n &&
        i.h.dispatch({
            type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
            projectId: e,
            publishState: "not_live",
            surface: n.surface,
            previewAppChannels: n.previewAppChannels,
            previewDevicePermissions: n.previewDevicePermissions,
        });
    let l = r.default.getCurrentUser()?.id;
    return (null != l && (0, _.eO)(l).catch(() => {}), !0);
}
async function P(e, t) {
    let { isPreview: n, install: l } = t,
        i = c.Ay.getProject(e),
        _ = null == i ? null : n ? i.preview_application_id : i.application_id,
        u = !n || null != l,
        r = null != _ ? f(_, n, u ? l : null) : null,
        { bot_permissions_changed: s, integration_installed: o, project: p } = (await (0, a.U1)(e)).body,
        d = n ? p.preview_application_id : p.application_id;
    if (null != d) {
        let e = { integrationInstalled: o, botPermissionsChanged: s };
        d !== _ || null == r ? await f(d, n, e) : (await r, u || O(d, n, e));
    }
}
function C(e) {
    return f(e, !0, null);
}
async function f(e, t, n) {
    (i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: e }),
        await Promise.all([(0, a.$N)(e), (0, u.un)(e, { force: !0 }).catch(() => {})]),
        null !== n && O(e, t, n));
}
function O(e, t, n) {
    t ? n?.integrationInstalled !== !0 || n.botPermissionsChanged || (0, s.k)(e) : (0, o.R2)(e);
}
