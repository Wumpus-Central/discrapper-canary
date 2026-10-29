n.d(t, { Is: () => R, R_: () => A, YI: () => h, _b: () => f, tZ: () => P });
var l = n(636537),
    i = n(73153),
    u = n(803306),
    _ = n(382483),
    r = n(287809),
    o = n(517244),
    s = n(513845),
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
    return (null != l && (0, u.eO)(l).catch(() => {}), !0);
}
async function P(e, t) {
    let { isPreview: n, install: l } = t,
        i = c.Ay.getProject(e),
        u = null == i ? null : n ? i.preview_application_id : i.application_id,
        _ = !n || null != l,
        r = null != u ? C(u, n, _ ? l : null) : null,
        { bot_permissions_changed: o, integration_installed: s, project: p } = (await (0, a.U1)(e)).body,
        d = n ? p.preview_application_id : p.application_id;
    if (null != d) {
        let e = { integrationInstalled: s, botPermissionsChanged: o };
        d !== u || null == r ? await C(d, n, e) : (await r, _ || U(d, n, e));
    }
}
function f(e) {
    return C(e, !0, null);
}
async function C(e, t, n) {
    (i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: e }),
        await Promise.all([(0, a.$N)(e), (0, _.un)(e, { force: !0 }).catch(() => {})]),
        null !== n && U(e, t, n));
}
function U(e, t, n) {
    t ? n?.integrationInstalled !== !0 || n.botPermissionsChanged || (0, o.k)(e) : (0, s.R2)(e);
}
