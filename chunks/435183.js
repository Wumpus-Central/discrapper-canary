"use strict";
n.d(t, { Ay: () => g, D3: () => h, RT: () => p, Ts: () => c, VN: () => u, c4: () => _, fy: () => m }), n(938796);
var a = n(562465),
    i = n(73153),
    r = n(568185);
n(250953);
var l = n(867455);
n(863036);
var s = n(734057),
    d = n(398590),
    o = n(652215);
function c(e, t, n) {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
}
function u() {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function _(e) {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
}
function m(e) {
    let {
        name: t,
        type: n,
        topic: a,
        bitrate: r,
        userLimit: l,
        nsfw: s,
        flags: d,
        rateLimitPerUser: o,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: u,
        template: _,
        defaultReactionEmoji: m,
        rtcRegion: p,
        videoQualityMode: h,
        autoArchiveDuration: g,
        locked: f,
        invitable: b,
        availableTags: A,
        defaultSortOrder: x,
        defaultForumLayout: v,
        defaultTagSetting: E,
        iconEmoji: I,
        themeColor: T,
    } = e;
    i.h.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: a,
        bitrate: r,
        userLimit: l,
        nsfw: s,
        flags: d,
        rateLimitPerUser: o,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: u,
        template: _,
        defaultReactionEmoji: m,
        rtcRegion: p,
        videoQualityMode: h,
        autoArchiveDuration: g,
        locked: f,
        invitable: b,
        availableTags: A,
        defaultSortOrder: x,
        defaultForumLayout: v,
        defaultTagSetting: E,
        iconEmoji: I,
        themeColor: T,
    });
}
async function p(e, t) {
    let {
            name: n,
            type: d,
            position: c,
            topic: u,
            bitrate: _,
            userLimit: m,
            nsfw: p,
            flags: h,
            permissionOverwrites: g,
            rateLimitPerUser: f,
            defaultThreadRateLimitPerUser: b,
            defaultAutoArchiveDuration: A,
            template: x,
            defaultReactionEmoji: v,
            rtcRegion: E,
            videoQualityMode: I,
            autoArchiveDuration: T,
            locked: S,
            invitable: N,
            availableTags: C,
            defaultSortOrder: y,
            defaultForumLayout: j,
            defaultTagSetting: w,
            iconEmoji: R,
            themeColor: L,
        } = t,
        M = s.A.getChannel(e);
    return (
        i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await l.A.unarchiveThreadIfNecessary(e),
        a.Bo.patch({
            url: o.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: d,
                position: c,
                topic: u,
                bitrate: _,
                user_limit: m,
                nsfw: p,
                flags: h,
                permission_overwrites: g,
                rate_limit_per_user: f,
                default_thread_rate_limit_per_user: b,
                default_auto_archive_duration: A,
                template: x,
                rtc_region: E,
                video_quality_mode: I,
                auto_archive_duration: T,
                locked: S,
                invitable: N,
                default_reaction_emoji:
                    null != v ? { emoji_id: v?.emojiId, emoji_name: v?.emojiName } : null === v ? null : void 0,
                available_tags: C?.map((e) => ({
                    id: e.id,
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                })),
                default_sort_order: y,
                default_forum_layout: j,
                default_tag_setting: w,
                icon_emoji: null != R ? { id: R.id, name: R.name } : null === R ? null : void 0,
                theme_color: L,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = M?.getGuildId();
                return null == n || M?.isThread() || r.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function h(e) {
    let t = s.A.getChannel(e);
    await a.Bo.del({ url: o.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || r.A.checkGuildTemplateDirty(n), u();
}
let g = {
    init: c,
    open: function (e, t, n) {
        c(e, t, n), (0, d.id)(o.zgK.CHANNEL_SETTINGS);
    },
    close: u,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        i.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: m,
    saveChannel: p,
    deleteChannel: h,
    updateVoiceChannelStatus: function (e, t) {
        return a.Bo.put({ url: o.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e), body: { status: t }, rejectWithError: !1 });
    },
    removeLinkedLobby: function (e) {
        return a.Bo.del({ url: o.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
