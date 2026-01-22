n.d(t, {
    Ay: () => g,
    D3: () => m,
    RT: () => h,
    Ts: () => u,
    VN: () => f,
    c4: () => p,
    fy: () => _,
}),
    n(938796);
var r = n(562465),
    i = n(73153),
    a = n(568185);
n(250953);
var s = n(867455);
n(863036);
var o = n(734057),
    l = n(398590),
    c = n(652215);
function u(e, t, n) {
    i.h.dispatch({
        type: "CHANNEL_SETTINGS_INIT",
        channelId: e,
        location: t,
        subsection: n,
    });
}
function d(e, t, n) {
    u(e, t, n), (0, l.id)(c.zgK.CHANNEL_SETTINGS);
}
function f() {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function p(e) {
    i.h.dispatch({
        type: "CHANNEL_SETTINGS_SET_SECTION",
        section: e,
    });
}
function _(e) {
    let {
        name: t,
        type: n,
        topic: r,
        bitrate: a,
        userLimit: s,
        nsfw: o,
        flags: l,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: u,
        defaultAutoArchiveDuration: d,
        template: f,
        defaultReactionEmoji: p,
        rtcRegion: _,
        videoQualityMode: h,
        autoArchiveDuration: m,
        locked: g,
        invitable: E,
        availableTags: b,
        defaultSortOrder: y,
        defaultForumLayout: O,
        defaultTagSetting: A,
        iconEmoji: v,
        themeColor: S,
    } = e;
    i.h.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: r,
        bitrate: a,
        userLimit: s,
        nsfw: o,
        flags: l,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: u,
        defaultAutoArchiveDuration: d,
        template: f,
        defaultReactionEmoji: p,
        rtcRegion: _,
        videoQualityMode: h,
        autoArchiveDuration: m,
        locked: g,
        invitable: E,
        availableTags: b,
        defaultSortOrder: y,
        defaultForumLayout: O,
        defaultTagSetting: A,
        iconEmoji: v,
        themeColor: S,
    });
}
async function h(e, t) {
    let {
            name: n,
            type: l,
            position: u,
            topic: d,
            bitrate: f,
            userLimit: p,
            nsfw: _,
            flags: h,
            permissionOverwrites: m,
            rateLimitPerUser: g,
            defaultThreadRateLimitPerUser: E,
            defaultAutoArchiveDuration: b,
            template: y,
            defaultReactionEmoji: O,
            rtcRegion: A,
            videoQualityMode: v,
            autoArchiveDuration: S,
            locked: I,
            invitable: T,
            availableTags: C,
            defaultSortOrder: N,
            defaultForumLayout: R,
            defaultTagSetting: w,
            iconEmoji: P,
            themeColor: D,
        } = t,
        x = o.A.getChannel(e);
    return (
        i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await s.A.unarchiveThreadIfNecessary(e),
        r.Bo.patch({
            url: c.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: l,
                position: u,
                topic: d,
                bitrate: f,
                user_limit: p,
                nsfw: _,
                flags: h,
                permission_overwrites: m,
                rate_limit_per_user: g,
                default_thread_rate_limit_per_user: E,
                default_auto_archive_duration: b,
                template: y,
                rtc_region: A,
                video_quality_mode: v,
                auto_archive_duration: S,
                locked: I,
                invitable: T,
                default_reaction_emoji:
                    null != O
                        ? {
                              emoji_id: null == O ? void 0 : O.emojiId,
                              emoji_name: null == O ? void 0 : O.emojiName,
                          }
                        : null === O
                          ? null
                          : void 0,
                available_tags:
                    null == C
                        ? void 0
                        : C.map((e) => ({
                              id: e.id,
                              name: e.name,
                              emoji_id: e.emojiId,
                              emoji_name: e.emojiName,
                              moderated: e.moderated,
                          })),
                default_sort_order: N,
                default_forum_layout: R,
                default_tag_setting: w,
                icon_emoji:
                    null != P
                        ? {
                              id: P.id,
                              name: P.name,
                          }
                        : null === P
                          ? null
                          : void 0,
                theme_color: D,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                i.h.dispatch({
                    type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                    channelId: e,
                });
                let n = null == x ? void 0 : x.getGuildId();
                return null == n || (null == x ? void 0 : x.isThread()) || a.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (
                i.h.dispatch({
                    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                    errors: e.body,
                }),
                e
            ),
        )
    );
}
async function m(e) {
    let t = o.A.getChannel(e);
    await r.Bo.del({
        url: c.Rsh.CHANNEL(e),
        oldFormErrors: !0,
        rejectWithError: !0,
    });
    let n = null == t ? void 0 : t.getGuildId();
    null == n || (null == t ? void 0 : t.isThread()) || a.A.checkGuildTemplateDirty(n), f();
}
let g = {
    init: u,
    open: d,
    close: f,
    setSection: p,
    selectPermissionOverwrite: function (e) {
        i.h.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
        });
    },
    updateChannel: _,
    saveChannel: h,
    deleteChannel: m,
    updateVoiceChannelStatus: function (e, t) {
        return r.Bo.put({
            url: c.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: !1,
        });
    },
    removeLinkedLobby: function (e) {
        return r.Bo.del({
            url: c.Rsh.CHANNEL_LINKED_LOBBY(e),
            rejectWithError: !0,
        });
    },
};
