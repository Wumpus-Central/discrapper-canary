n.d(t, { Is: () => R, R_: () => P, YI: () => A, tZ: () => f });
var i = n(636537),
    l = n(73153),
    _ = n(803306),
    u = n(382483),
    a = n(627363),
    r = n(287809),
    s = n(517244),
    o = n(513845),
    c = n(371169),
    p = n(260498),
    E = n(385081),
    d = n(722701),
    h = n(652215);
function R(e, t, n) {
    (0, E.Hy)(e, {
        location: "publish",
        code: E.xf.PUBLISH_FAILED,
        message: `publish${n ? "-preview" : ""} failed`,
        details: t,
        isPreview: n,
    });
}
async function A(e, t) {
    let { guildId: n, alsoRemovePreviewBot: l } = t;
    try {
        return await i.Bo.post({
            url: h.Rsh.CONJURE_PROJECT_UNPUBLISH(e),
            body: { guild_id: n, also_remove_preview_bot: l },
            rejectWithError: !1,
        });
    } finally {
        (0, c.GO)(e);
    }
}
async function P(e) {
    let t = await A(e, {}).catch(() => null);
    if (t?.ok !== !0) return !1;
    let n = d.A.getPublishStatus(e);
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
async function f(e, t) {
    let { isPreview: n, install: i } = t,
        l = p.Ay.getProject(e),
        _ = null == l ? null : n ? l.preview_application_id : l.application_id,
        u = !n || null != i,
        a = null != _ ? C(_, n, u ? i : null) : null,
        { bot_permissions_changed: r, integration_installed: s, project: o } = (await (0, c.U1)(e)).body,
        E = n ? o.preview_application_id : o.application_id;
    if (null != E) {
        let e = { integrationInstalled: s, botPermissionsChanged: r };
        E !== _ || null == a ? await C(E, n, e) : (await a, u || U(E, n, e));
    }
}
async function C(e, t, n) {
    (l.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: e }),
        await Promise.all([(0, a.TA)(e), (0, u.un)(e, { force: !0 }).catch(() => {})]),
        null !== n && U(e, t, n));
}
function U(e, t, n) {
    t ? n?.integrationInstalled !== !0 || n.botPermissionsChanged || (0, s.k)(e) : (0, o.R2)(e);
}
