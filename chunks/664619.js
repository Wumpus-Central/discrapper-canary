var i = e(620632),
    l = e(73153),
    _ = e(803306),
    u = e(382483),
    r = e(287809),
    o = e(517244),
    a = e(513845),
    c = e(233470),
    p = e(260498),
    s = e(385081),
    d = e(722701),
    E = e(652215);
async function A(t, n) {
    let { guildId: e, alsoRemovePreviewBot: l } = n;
    try {
        return await i.Bo.post({
            url: E.Rsh.CONJURE_PROJECT_UNPUBLISH(t),
            body: { guild_id: e, also_remove_preview_bot: l },
            rejectWithError: !1,
        });
    } finally {
        (0, c.GO)(t);
    }
}
async function R(t, n, e) {
    (l.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: t }),
        await Promise.all([(0, c.$N)(t), (0, u.un)(t, { force: !0 }).catch(() => {})]),
        null !== e && I(t, n, e));
}
function I(t, n, e) {
    n ? e?.integrationInstalled !== !0 || e.botPermissionsChanged || (0, o.k)(t) : (0, a.R2)(t);
}
e.d(
    n,
    {},
    {
        Is: function (t, n, e) {
            (0, s.Hy)(t, {
                location: "publish",
                code: s.xf.PUBLISH_FAILED,
                message: `publish${e ? "-preview" : ""} failed`,
                details: n,
                isPreview: e,
            });
        },
        R_: async function (t) {
            let n = await A(t, {}).catch(() => null);
            if (n?.ok !== !0) return !1;
            let e = d.A.getPublishStatus(t);
            null != e &&
                l.h.dispatch({
                    type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                    projectId: t,
                    publishState: "not_live",
                    surface: e.surface,
                    previewAppChannels: e.previewAppChannels,
                    previewDevicePermissions: e.previewDevicePermissions,
                });
            let i = r.default.getCurrentUser()?.id;
            return (null != i && (0, _.eO)(i).catch(() => {}), !0);
        },
        YI: A,
        _b: function (t) {
            return R(t, !0, null);
        },
        tZ: async function (t, n) {
            let { isPreview: e, install: i } = n,
                l = p.Ay.getProject(t),
                _ = null == l ? null : e ? l.preview_application_id : l.application_id,
                u = !e || null != i,
                r = null != _ ? R(_, e, u ? i : null) : null,
                { bot_permissions_changed: o, integration_installed: a, project: s } = (await (0, c.U1)(t)).body,
                d = e ? s.preview_application_id : s.application_id;
            if (null != d) {
                let t = { integrationInstalled: a, botPermissionsChanged: o };
                d !== _ || null == r ? await R(d, e, t) : (await r, u || I(d, e, t));
            }
        },
    },
);
