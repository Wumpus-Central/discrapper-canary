n.d(t, { Ay: () => g, D3: () => p, RT: () => h, Ts: () => c, VN: () => u, c4: () => _, fy: () => m }), n(938796);
var l = n(636537),
    a = n(228366),
    i = n(568185);
n(250953);
var r = n(867455);
n(863036);
var s = n(734057),
    o = n(398590),
    d = n(652215);
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
        flags: o,
        rateLimitPerUser: d,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: u,
        template: _,
        defaultReactionEmoji: m,
        rtcRegion: h,
        videoQualityMode: p,
        autoArchiveDuration: g,
        locked: x,
        invitable: f,
        availableTags: v,
        defaultSortOrder: b,
        defaultForumLayout: A,
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
        flags: o,
        rateLimitPerUser: d,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: u,
        template: _,
        defaultReactionEmoji: m,
        rtcRegion: h,
        videoQualityMode: p,
        autoArchiveDuration: g,
        locked: x,
        invitable: f,
        availableTags: v,
        defaultSortOrder: b,
        defaultForumLayout: A,
        defaultTagSetting: N,
        iconEmoji: E,
        themeColor: S,
    });
}
async function h(e, t) {
    let {
            name: n,
            type: o,
            position: c,
            topic: u,
            bitrate: _,
            userLimit: m,
            nsfw: h,
            flags: p,
            permissionOverwrites: g,
            rateLimitPerUser: x,
            defaultThreadRateLimitPerUser: f,
            defaultAutoArchiveDuration: v,
            template: b,
            defaultReactionEmoji: A,
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
            url: d.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: o,
                position: c,
                topic: u,
                bitrate: _,
                user_limit: m,
                nsfw: h,
                flags: p,
                permission_overwrites: g,
                rate_limit_per_user: x,
                default_thread_rate_limit_per_user: f,
                default_auto_archive_duration: v,
                template: b,
                rtc_region: N,
                video_quality_mode: E,
                auto_archive_duration: S,
                locked: T,
                invitable: j,
                default_reaction_emoji:
                    null != A ? { emoji_id: A?.emojiId, emoji_name: A?.emojiName } : null === A ? null : void 0,
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
async function p(e) {
    let t = s.A.getChannel(e);
    await l.Bo.del({ url: d.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || i.A.checkGuildTemplateDirty(n), u();
}
let g = {
    init: c,
    open: function (e, t, n) {
        c(e, t, n), (0, o.id)(d.zgK.CHANNEL_SETTINGS);
    },
    close: u,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        a.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: m,
    saveChannel: h,
    deleteChannel: p,
    updateVoiceChannelStatus: function (e, t) {
        return l.Bo.put({ url: d.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e), body: { status: t }, rejectWithError: !1 });
    },
    removeLinkedLobby: function (e) {
        return l.Bo.del({ url: d.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
