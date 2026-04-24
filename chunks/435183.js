"use strict";
n.d(t, { Ay: () => f, D3: () => h, RT: () => m, Ts: () => d, VN: () => u, c4: () => _, fy: () => p }), n(938796);
var a = n(636537),
    r = n(228366),
    i = n(568185);
n(250953);
var l = n(867455);
n(863036);
var s = n(734057),
    o = n(398590),
    c = n(652215);
function d(e, t, n) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
}
function u() {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function _(e) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
}
function p(e) {
    let {
        name: t,
        type: n,
        topic: a,
        bitrate: i,
        userLimit: l,
        nsfw: s,
        flags: o,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: d,
        defaultAutoArchiveDuration: u,
        template: _,
        defaultReactionEmoji: p,
        rtcRegion: m,
        videoQualityMode: h,
        autoArchiveDuration: f,
        locked: g,
        invitable: b,
        availableTags: v,
        defaultSortOrder: A,
        defaultForumLayout: x,
        defaultTagSetting: E,
        iconEmoji: T,
        themeColor: S,
    } = e;
    r.h.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: a,
        bitrate: i,
        userLimit: l,
        nsfw: s,
        flags: o,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: d,
        defaultAutoArchiveDuration: u,
        template: _,
        defaultReactionEmoji: p,
        rtcRegion: m,
        videoQualityMode: h,
        autoArchiveDuration: f,
        locked: g,
        invitable: b,
        availableTags: v,
        defaultSortOrder: A,
        defaultForumLayout: x,
        defaultTagSetting: E,
        iconEmoji: T,
        themeColor: S,
    });
}
async function m(e, t) {
    let {
            name: n,
            type: o,
            position: d,
            topic: u,
            bitrate: _,
            userLimit: p,
            nsfw: m,
            flags: h,
            permissionOverwrites: f,
            rateLimitPerUser: g,
            defaultThreadRateLimitPerUser: b,
            defaultAutoArchiveDuration: v,
            template: A,
            defaultReactionEmoji: x,
            rtcRegion: E,
            videoQualityMode: T,
            autoArchiveDuration: S,
            locked: C,
            invitable: I,
            availableTags: y,
            defaultSortOrder: N,
            defaultForumLayout: R,
            defaultTagSetting: j,
            iconEmoji: L,
            themeColor: w,
        } = t,
        O = s.A.getChannel(e);
    return (
        r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await l.A.unarchiveThreadIfNecessary(e),
        a.Bo.patch({
            url: c.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: o,
                position: d,
                topic: u,
                bitrate: _,
                user_limit: p,
                nsfw: m,
                flags: h,
                permission_overwrites: f,
                rate_limit_per_user: g,
                default_thread_rate_limit_per_user: b,
                default_auto_archive_duration: v,
                template: A,
                rtc_region: E,
                video_quality_mode: T,
                auto_archive_duration: S,
                locked: C,
                invitable: I,
                default_reaction_emoji:
                    null != x ? { emoji_id: x?.emojiId, emoji_name: x?.emojiName } : null === x ? null : void 0,
                available_tags: y?.map((e) => ({
                    id: e.id,
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                })),
                default_sort_order: N,
                default_forum_layout: R,
                default_tag_setting: j,
                icon_emoji: null != L ? { id: L.id, name: L.name } : null === L ? null : void 0,
                theme_color: w,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = O?.getGuildId();
                return null == n || O?.isThread() || i.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function h(e) {
    let t = s.A.getChannel(e);
    await a.Bo.del({ url: c.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || i.A.checkGuildTemplateDirty(n), u();
}
let f = {
    init: d,
    open: function (e, t, n) {
        d(e, t, n), (0, o.id)(c.zgK.CHANNEL_SETTINGS);
    },
    close: u,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        r.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: p,
    saveChannel: m,
    deleteChannel: h,
    updateVoiceChannelStatus: function (e, t) {
        return a.Bo.put({ url: c.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e), body: { status: t }, rejectWithError: !1 });
    },
    removeLinkedLobby: function (e) {
        return a.Bo.del({ url: c.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
