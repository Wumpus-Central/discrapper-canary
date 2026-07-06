"use strict";
n.d(t, { Ay: () => p, D3: () => E, RT: () => f, Ts: () => c, VN: () => d, c4: () => _, fy: () => h }), n(938796);
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
function h(e) {
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
        defaultReactionEmoji: h,
        rtcRegion: f,
        videoQualityMode: E,
        autoArchiveDuration: p,
        locked: m,
        invitable: g,
        availableTags: A,
        defaultSortOrder: I,
        defaultForumLayout: T,
        defaultTagSetting: S,
        iconEmoji: N,
        themeColor: C,
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
        defaultReactionEmoji: h,
        rtcRegion: f,
        videoQualityMode: E,
        autoArchiveDuration: p,
        locked: m,
        invitable: g,
        availableTags: A,
        defaultSortOrder: I,
        defaultForumLayout: T,
        defaultTagSetting: S,
        iconEmoji: N,
        themeColor: C,
    });
}
async function f(e, t) {
    let {
            name: n,
            type: l,
            position: c,
            topic: d,
            bitrate: _,
            userLimit: h,
            nsfw: f,
            flags: E,
            permissionOverwrites: p,
            rateLimitPerUser: m,
            defaultThreadRateLimitPerUser: g,
            defaultAutoArchiveDuration: A,
            template: I,
            defaultReactionEmoji: T,
            rtcRegion: S,
            videoQualityMode: N,
            autoArchiveDuration: C,
            locked: y,
            invitable: O,
            availableTags: R,
            defaultSortOrder: v,
            defaultForumLayout: b,
            defaultTagSetting: L,
            iconEmoji: D,
            themeColor: w,
        } = t,
        P = o.A.getChannel(e);
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
                user_limit: h,
                nsfw: f,
                flags: E,
                permission_overwrites: p,
                rate_limit_per_user: m,
                default_thread_rate_limit_per_user: g,
                default_auto_archive_duration: A,
                template: I,
                rtc_region: S,
                video_quality_mode: N,
                auto_archive_duration: C,
                locked: y,
                invitable: O,
                default_reaction_emoji:
                    null != T ? { emoji_id: T?.emojiId, emoji_name: T?.emojiName } : null === T ? null : void 0,
                available_tags: R?.map((e) => ({
                    id: e.id,
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                })),
                default_sort_order: v,
                default_forum_layout: b,
                default_tag_setting: L,
                icon_emoji: null != D ? { id: D.id, name: D.name } : null === D ? null : void 0,
                theme_color: w,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = P?.getGuildId();
                return null == n || P?.isThread() || s.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function E(e) {
    let t = o.A.getChannel(e);
    await i.Bo.del({ url: u.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || s.A.checkGuildTemplateDirty(n), d();
}
let p = {
    init: c,
    open: function (e, t, n) {
        c(e, t, n), (0, l.id)(u.zgK.CHANNEL_SETTINGS);
    },
    close: d,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        r.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: h,
    saveChannel: f,
    deleteChannel: E,
    updateVoiceChannelStatus: function (e, t) {
        return i.Bo.put({ url: u.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e), body: { status: t }, rejectWithError: !1 });
    },
    removeLinkedLobby: function (e) {
        return i.Bo.del({ url: u.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
