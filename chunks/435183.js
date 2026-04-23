n.d(t, { Ay: () => p, D3: () => g, RT: () => h, Ts: () => c, VN: () => u, c4: () => _, fy: () => m }), n(938796);
var l = n(562465),
    a = n(73153),
    i = n(568185);
n(250953);
var r = n(867455);
n(863036);
var s = n(734057),
    d = n(398590),
    o = n(652215);
function c(e, t, n) {
    a.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
}
function u() {
    a.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function _(e) {
    a.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
}
function m(e) {
    let {
        name: t,
        type: n,
        topic: l,
        bitrate: i,
        userLimit: r,
        nsfw: s,
        flags: d,
        rateLimitPerUser: o,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: u,
        template: _,
        defaultReactionEmoji: m,
        rtcRegion: h,
        videoQualityMode: g,
        autoArchiveDuration: p,
        locked: x,
        invitable: A,
        availableTags: f,
        defaultSortOrder: v,
        defaultForumLayout: b,
        defaultTagSetting: N,
        iconEmoji: E,
        themeColor: S,
    } = e;
    a.h.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: l,
        bitrate: i,
        userLimit: r,
        nsfw: s,
        flags: d,
        rateLimitPerUser: o,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: u,
        template: _,
        defaultReactionEmoji: m,
        rtcRegion: h,
        videoQualityMode: g,
        autoArchiveDuration: p,
        locked: x,
        invitable: A,
        availableTags: f,
        defaultSortOrder: v,
        defaultForumLayout: b,
        defaultTagSetting: N,
        iconEmoji: E,
        themeColor: S,
    });
}
async function h(e, t) {
    let {
            name: n,
            type: d,
            position: c,
            topic: u,
            bitrate: _,
            userLimit: m,
            nsfw: h,
            flags: g,
            permissionOverwrites: p,
            rateLimitPerUser: x,
            defaultThreadRateLimitPerUser: A,
            defaultAutoArchiveDuration: f,
            template: v,
            defaultReactionEmoji: b,
            rtcRegion: N,
            videoQualityMode: E,
            autoArchiveDuration: S,
            locked: T,
            invitable: j,
            availableTags: C,
            defaultSortOrder: I,
            defaultForumLayout: y,
            defaultTagSetting: k,
            iconEmoji: w,
            themeColor: L,
        } = t,
        D = s.A.getChannel(e);
    return (
        a.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await r.A.unarchiveThreadIfNecessary(e),
        l.Bo.patch({
            url: o.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: d,
                position: c,
                topic: u,
                bitrate: _,
                user_limit: m,
                nsfw: h,
                flags: g,
                permission_overwrites: p,
                rate_limit_per_user: x,
                default_thread_rate_limit_per_user: A,
                default_auto_archive_duration: f,
                template: v,
                rtc_region: N,
                video_quality_mode: E,
                auto_archive_duration: S,
                locked: T,
                invitable: j,
                default_reaction_emoji:
                    null != b ? { emoji_id: b?.emojiId, emoji_name: b?.emojiName } : null === b ? null : void 0,
                available_tags: C?.map((e) => ({
                    id: e.id,
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                })),
                default_sort_order: I,
                default_forum_layout: y,
                default_tag_setting: k,
                icon_emoji: null != w ? { id: w.id, name: w.name } : null === w ? null : void 0,
                theme_color: L,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                a.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = D?.getGuildId();
                return null == n || D?.isThread() || i.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (a.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function g(e) {
    let t = s.A.getChannel(e);
    await l.Bo.del({ url: o.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || i.A.checkGuildTemplateDirty(n), u();
}
let p = {
    init: c,
    open: function (e, t, n) {
        c(e, t, n), (0, d.id)(o.zgK.CHANNEL_SETTINGS);
    },
    close: u,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        a.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: m,
    saveChannel: h,
    deleteChannel: g,
    updateVoiceChannelStatus: function (e, t) {
        return l.Bo.put({ url: o.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e), body: { status: t }, rejectWithError: !1 });
    },
    removeLinkedLobby: function (e) {
        return l.Bo.del({ url: o.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
