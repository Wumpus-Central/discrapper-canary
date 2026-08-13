n.d(t, { Ay: () => N, D3: () => S, RT: () => T, Ts: () => d, VN: () => E, c4: () => _, fy: () => c }), n(938796);
var r = n(636537),
    l = n(228366),
    i = n(568185);
n(250953);
var a = n(867455);
n(863036);
var u = n(734057),
    o = n(398590),
    s = n(652215);
function d(e, t, n) {
    l.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
}
function E() {
    l.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function _(e) {
    l.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
}
function c(e) {
    let {
        name: t,
        type: n,
        topic: r,
        bitrate: i,
        userLimit: a,
        nsfw: u,
        flags: o,
        rateLimitPerUser: s,
        defaultThreadRateLimitPerUser: d,
        defaultAutoArchiveDuration: E,
        template: _,
        defaultReactionEmoji: c,
        rtcRegion: T,
        videoQualityMode: S,
        autoArchiveDuration: N,
        locked: h,
        invitable: I,
        availableTags: f,
        defaultSortOrder: m,
        defaultForumLayout: A,
        defaultTagSetting: C,
        iconEmoji: p,
        themeColor: L,
    } = e;
    l.h.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: r,
        bitrate: i,
        userLimit: a,
        nsfw: u,
        flags: o,
        rateLimitPerUser: s,
        defaultThreadRateLimitPerUser: d,
        defaultAutoArchiveDuration: E,
        template: _,
        defaultReactionEmoji: c,
        rtcRegion: T,
        videoQualityMode: S,
        autoArchiveDuration: N,
        locked: h,
        invitable: I,
        availableTags: f,
        defaultSortOrder: m,
        defaultForumLayout: A,
        defaultTagSetting: C,
        iconEmoji: p,
        themeColor: L,
    });
}
async function T(e, t) {
    let {
            name: n,
            type: o,
            position: d,
            topic: E,
            bitrate: _,
            userLimit: c,
            nsfw: T,
            flags: S,
            permissionOverwrites: N,
            rateLimitPerUser: h,
            defaultThreadRateLimitPerUser: I,
            defaultAutoArchiveDuration: f,
            template: m,
            defaultReactionEmoji: A,
            rtcRegion: C,
            videoQualityMode: p,
            autoArchiveDuration: L,
            locked: g,
            invitable: y,
            availableTags: v,
            defaultSortOrder: H,
            defaultForumLayout: O,
            defaultTagSetting: R,
            iconEmoji: U,
            themeColor: G,
        } = t,
        j = u.A.getChannel(e);
    return (
        l.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await a.A.unarchiveThreadIfNecessary(e),
        r.Bo.patch({
            url: s.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: o,
                position: d,
                topic: E,
                bitrate: _,
                user_limit: c,
                nsfw: T,
                flags: S,
                permission_overwrites: N,
                rate_limit_per_user: h,
                default_thread_rate_limit_per_user: I,
                default_auto_archive_duration: f,
                template: m,
                rtc_region: C,
                video_quality_mode: p,
                auto_archive_duration: L,
                locked: g,
                invitable: y,
                default_reaction_emoji:
                    null != A ? { emoji_id: A?.emojiId, emoji_name: A?.emojiName } : null === A ? null : void 0,
                available_tags: v?.map((e) => ({
                    id: e.id,
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                })),
                default_sort_order: H,
                default_forum_layout: O,
                default_tag_setting: R,
                icon_emoji: null != U ? { id: U.id, name: U.name } : null === U ? null : void 0,
                theme_color: G,
            },
            oldFormErrors: !0,
            rejectWithError: (0, r.fT)(),
        }).then(
            (t) => {
                l.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = j?.getGuildId();
                return null == n || j?.isThread() || i.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (l.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function S(e) {
    let t = u.A.getChannel(e);
    await r.Bo.del({ url: s.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || i.A.checkGuildTemplateDirty(n), E();
}
let N = {
    init: d,
    open: function (e, t, n) {
        d(e, t, n), (0, o.id)(s.zgK.CHANNEL_SETTINGS);
    },
    close: E,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        l.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: c,
    saveChannel: T,
    deleteChannel: S,
    updateVoiceChannelStatus: function (e, t) {
        return r.Bo.put({
            url: s.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: (0, r.fT)(),
        });
    },
    removeLinkedLobby: function (e) {
        return r.Bo.del({ url: s.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
