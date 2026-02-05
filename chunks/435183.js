"use strict";
n.d(t, { Ay: () => g, D3: () => m, RT: () => h, Ts: () => c, VN: () => _, c4: () => f, fy: () => p }), n(938796);
var r = n(562465),
    i = n(73153),
    a = n(568185);
n(250953);
var s = n(867455);
n(863036);
var o = n(734057),
    l = n(398590),
    u = n(652215);
function c(e, t, n) {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
}
function d(e, t, n) {
    c(e, t, n), (0, l.id)(u.zgK.CHANNEL_SETTINGS);
}
function _() {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function f(e) {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
}
function p(e) {
    let {
        name: t,
        type: n,
        topic: r,
        bitrate: a,
        userLimit: s,
        nsfw: o,
        flags: l,
        rateLimitPerUser: u,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: d,
        template: _,
        defaultReactionEmoji: f,
        rtcRegion: p,
        videoQualityMode: h,
        autoArchiveDuration: m,
        locked: g,
        invitable: E,
        availableTags: A,
        defaultSortOrder: I,
        defaultForumLayout: T,
        defaultTagSetting: y,
        iconEmoji: S,
        themeColor: v,
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
        rateLimitPerUser: u,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: d,
        template: _,
        defaultReactionEmoji: f,
        rtcRegion: p,
        videoQualityMode: h,
        autoArchiveDuration: m,
        locked: g,
        invitable: E,
        availableTags: A,
        defaultSortOrder: I,
        defaultForumLayout: T,
        defaultTagSetting: y,
        iconEmoji: S,
        themeColor: v,
    });
}
async function h(e, t) {
    let {
            name: n,
            type: l,
            position: c,
            topic: d,
            bitrate: _,
            userLimit: f,
            nsfw: p,
            flags: h,
            permissionOverwrites: m,
            rateLimitPerUser: g,
            defaultThreadRateLimitPerUser: E,
            defaultAutoArchiveDuration: A,
            template: I,
            defaultReactionEmoji: T,
            rtcRegion: y,
            videoQualityMode: S,
            autoArchiveDuration: v,
            locked: C,
            invitable: b,
            availableTags: N,
            defaultSortOrder: R,
            defaultForumLayout: O,
            defaultTagSetting: D,
            iconEmoji: L,
            themeColor: w,
        } = t,
        x = o.A.getChannel(e);
    return (
        i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await s.A.unarchiveThreadIfNecessary(e),
        r.Bo.patch({
            url: u.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: l,
                position: c,
                topic: d,
                bitrate: _,
                user_limit: f,
                nsfw: p,
                flags: h,
                permission_overwrites: m,
                rate_limit_per_user: g,
                default_thread_rate_limit_per_user: E,
                default_auto_archive_duration: A,
                template: I,
                rtc_region: y,
                video_quality_mode: S,
                auto_archive_duration: v,
                locked: C,
                invitable: b,
                default_reaction_emoji:
                    null != T ? { emoji_id: T?.emojiId, emoji_name: T?.emojiName } : null === T ? null : void 0,
                available_tags: N?.map((e) => ({
                    id: e.id,
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                })),
                default_sort_order: R,
                default_forum_layout: O,
                default_tag_setting: D,
                icon_emoji: null != L ? { id: L.id, name: L.name } : null === L ? null : void 0,
                theme_color: w,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = x?.getGuildId();
                return null == n || x?.isThread() || a.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function m(e) {
    let t = o.A.getChannel(e);
    await r.Bo.del({ url: u.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || a.A.checkGuildTemplateDirty(n), _();
}
let g = {
    init: c,
    open: d,
    close: _,
    setSection: f,
    selectPermissionOverwrite: function (e) {
        i.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: p,
    saveChannel: h,
    deleteChannel: m,
    updateVoiceChannelStatus: function (e, t) {
        return r.Bo.put({ url: u.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e), body: { status: t }, rejectWithError: !1 });
    },
    removeLinkedLobby: function (e) {
        return r.Bo.del({ url: u.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
