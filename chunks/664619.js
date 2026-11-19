var l = e(620632),
    i = e(73153),
    _ = e(803306),
    u = e(382483),
    o = e(287809),
    r = e(517244),
    a = e(513845),
    c = e(233470),
    s = e(260498),
    p = e(385081),
    d = e(722701),
    E = e(652215);
async function R(t, n) {
    let { guildId: e, alsoRemovePreviewBot: i, deleteChannels: _ } = n;
    try {
        return await l.Bo.post({
            url: E.Rsh.CONJURE_PROJECT_UNPUBLISH(t),
            body: { guild_id: e, also_remove_preview_bot: i, delete_channels: _ },
            rejectWithError: !1,
        });
    } finally {
        (0, c.GO)(t);
    }
}
async function h(t, n, e) {
    (i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: t }),
        await Promise.all([(0, c.$N)(t), (0, u.un)(t, { force: !0 }).catch(() => {})]),
        null !== e && A(t, n, e));
}
function A(t, n, e) {
    n ? e?.integrationInstalled !== !0 || e.botPermissionsChanged || (0, r.k)(t) : (0, a.R2)(t);
}
e.d(
    n,
    {},
    {
        Is: function (t, n, e) {
            (0, p.Hy)(t, {
                location: "publish",
                code: p.xf.PUBLISH_FAILED,
                message: `publish${e ? "-preview" : ""} failed`,
                details: n,
                isPreview: e,
            });
        },
        YI: R,
        _b: function (t) {
            return h(t, !0, null);
        },
        qt: async function (t) {
            let n = t.id,
                e = "guild" === t.install_scope ? { alsoRemovePreviewBot: !1 } : {},
                l = await R(n, e).catch(() => null);
            if (l?.ok !== !0) return !1;
            let u = d.A.getPublishStatus(n);
            null != u &&
                i.h.dispatch({
                    type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                    projectId: n,
                    publishState: "not_live",
                    surface: u.surface,
                    previewAppChannels: u.previewAppChannels,
                    previewDevicePermissions: u.previewDevicePermissions,
                });
            let r = o.default.getCurrentUser()?.id;
            return (null != r && (0, _.eO)(r).catch(() => {}), !0);
        },
        tZ: async function (t, n) {
            let { isPreview: e, install: l } = n,
                i = s.Ay.getProject(t),
                _ = null == i ? null : e ? i.preview_application_id : i.application_id,
                u = !e || null != l,
                o = null != _ ? h(_, e, u ? l : null) : null,
                { bot_permissions_changed: r, integration_installed: a, project: p } = (await (0, c.U1)(t)).body,
                d = e ? p.preview_application_id : p.application_id;
            if (null != d) {
                let t = { integrationInstalled: a, botPermissionsChanged: r };
                d !== _ || null == o ? await h(d, e, t) : (await o, u || A(d, e, t));
            }
        },
    },
);
