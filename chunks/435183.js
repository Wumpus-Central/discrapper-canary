"use strict";
n.d(t, { Ay: () => E, D3: () => p, RT: () => h, Ts: () => c, VN: () => d, c4: () => _, fy: () => f }), n(938796);
var i = n(636537),
    r = n(228366),
    s = n(568185);
n(250953);
var a = n(867455);
n(863036);
var o = n(734057),
    l = n(398590),
    u = n(652215);
function c(e, t, n) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
}
function d() {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function _(e) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
}
function f(e) {
    let {
        name: t,
        type: n,
        topic: i,
        bitrate: s,
        userLimit: a,
        nsfw: o,
        flags: l,
        rateLimitPerUser: u,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: d,
        template: _,
        defaultReactionEmoji: f,
        rtcRegion: h,
        videoQualityMode: p,
        autoArchiveDuration: E,
        locked: m,
        invitable: g,
        availableTags: A,
        defaultSortOrder: I,
        defaultForumLayout: T,
        defaultTagSetting: S,
        iconEmoji: N,
        themeColor: y,
    } = e;
    r.h.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: i,
        bitrate: s,
        userLimit: a,
        nsfw: o,
        flags: l,
        rateLimitPerUser: u,
        defaultThreadRateLimitPerUser: c,
        defaultAutoArchiveDuration: d,
        template: _,
        defaultReactionEmoji: f,
        rtcRegion: h,
        videoQualityMode: p,
        autoArchiveDuration: E,
        locked: m,
        invitable: g,
        availableTags: A,
        defaultSortOrder: I,
        defaultForumLayout: T,
        defaultTagSetting: S,
        iconEmoji: N,
        themeColor: y,
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
            nsfw: h,
            flags: p,
            permissionOverwrites: E,
            rateLimitPerUser: m,
            defaultThreadRateLimitPerUser: g,
            defaultAutoArchiveDuration: A,
            template: I,
            defaultReactionEmoji: T,
            rtcRegion: S,
            videoQualityMode: N,
            autoArchiveDuration: y,
            locked: C,
            invitable: v,
            availableTags: O,
            defaultSortOrder: R,
            defaultForumLayout: b,
            defaultTagSetting: D,
            iconEmoji: L,
            themeColor: w,
        } = t,
        M = o.A.getChannel(e);
    return (
        r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await a.A.unarchiveThreadIfNecessary(e),
        i.Bo.patch({
            url: u.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: l,
                position: c,
                topic: d,
                bitrate: _,
                user_limit: f,
                nsfw: h,
                flags: p,
                permission_overwrites: E,
                rate_limit_per_user: m,
                default_thread_rate_limit_per_user: g,
                default_auto_archive_duration: A,
                template: I,
                rtc_region: S,
                video_quality_mode: N,
                auto_archive_duration: y,
                locked: C,
                invitable: v,
                default_reaction_emoji:
                    null != T ? { emoji_id: T?.emojiId, emoji_name: T?.emojiName } : null === T ? null : void 0,
                available_tags: O?.map((e) => ({
                    id: e.id,
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                })),
                default_sort_order: R,
                default_forum_layout: b,
                default_tag_setting: D,
                icon_emoji: null != L ? { id: L.id, name: L.name } : null === L ? null : void 0,
                theme_color: w,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = M?.getGuildId();
                return null == n || M?.isThread() || s.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function p(e) {
    let t = o.A.getChannel(e);
    await i.Bo.del({ url: u.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || s.A.checkGuildTemplateDirty(n), d();
}
let E = {
    init: c,
    open: function (e, t, n) {
        c(e, t, n), (0, l.id)(u.zgK.CHANNEL_SETTINGS);
    },
    close: d,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        r.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: f,
    saveChannel: h,
    deleteChannel: p,
    updateVoiceChannelStatus: function (e, t) {
        return i.Bo.put({ url: u.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e), body: { status: t }, rejectWithError: !1 });
    },
    removeLinkedLobby: function (e) {
        return i.Bo.del({ url: u.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
