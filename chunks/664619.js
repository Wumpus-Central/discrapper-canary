var l = e(620632),
    i = e(73153),
    _ = e(803306),
    u = e(382483),
    a = e(287809),
    o = e(517244),
    r = e(513845),
    s = e(233470),
    c = e(260498),
    p = e(385081),
    d = e(722701),
    E = e(652215);
async function R(n, t) {
    let { guildId: e, alsoRemovePreviewBot: i, deleteChannels: _ } = t;
    try {
        return await l.Bo.post({
            url: E.Rsh.CONJURE_PROJECT_UNPUBLISH(n),
            body: { guild_id: e, also_remove_preview_bot: i, delete_channels: _ },
            rejectWithError: !1,
        });
    } finally {
        (0, s.GO)(n);
    }
}
async function h(n, t, e) {
    (i.h.dispatch({ type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: n }),
        await Promise.all([(0, s.$N)(n), (0, u.un)(n, { force: !0 }).catch(() => {})]),
        null !== e && A(n, t, e));
}
function A(n, t, e) {
    t ? e?.integrationInstalled !== !0 || e.botPermissionsChanged || (0, o.k)(n) : (0, r.R2)(n);
}
e.d(
    t,
    {},
    {
        Is: function (n, t, e) {
            (0, p.Hy)(n, {
                location: "publish",
                code: p.xf.PUBLISH_FAILED,
                message: `publish${e ? "-preview" : ""} failed`,
                details: t,
                isPreview: e,
            });
        },
        YI: R,
        _b: function (n) {
            return h(n, !0, null);
        },
        qt: async function (n) {
            let t = n.id,
                e = "guild" === n.install_scope ? { alsoRemovePreviewBot: !1 } : {},
                l = await R(t, e).catch(() => null);
            if (l?.ok !== !0) return !1;
            let u = d.A.getPublishStatus(t);
            null != u &&
                i.h.dispatch({
                    type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                    projectId: t,
                    publishState: "not_live",
                    surface: u.surface,
                    previewAppChannels: u.previewAppChannels,
                    previewDevicePermissions: u.previewDevicePermissions,
                    views:
                        null == u.views
                            ? null
                            : {
                                  ...u.views,
                                  mounts: { activity: null, voiceChannel: null, appChannels: [] },
                                  placed: !1,
                                  missingViews: [],
                              },
                });
            let o = a.default.getCurrentUser()?.id;
            return (null != o && (0, _.eO)(o).catch(() => {}), !0);
        },
        tZ: async function (n, t) {
            let { isPreview: e, install: l } = t,
                i = c.Ay.getProject(n),
                _ = null == i ? null : e ? i.preview_application_id : i.application_id,
                u = !e || null != l,
                a = null != _ ? h(_, e, u ? l : null) : null,
                { bot_permissions_changed: o, integration_installed: r, project: p } = (await (0, s.U1)(n)).body,
                d = e ? p.preview_application_id : p.application_id;
            if (null != d) {
                let n = { integrationInstalled: r, botPermissionsChanged: o };
                d !== _ || null == a ? await h(d, e, n) : (await a, u || A(d, e, n));
            }
        },
    },
);
