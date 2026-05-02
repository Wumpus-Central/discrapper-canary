n.d(t, { Ay: () => T, D3: () => c, RT: () => N, Ts: () => d, VN: () => E, c4: () => _, fy: () => S }), n(938796);
var l = n(636537),
    r = n(228366),
    i = n(568185);
n(250953);
var a = n(867455);
n(863036);
var u = n(734057),
    o = n(398590),
    s = n(652215);
function d(e, t, n) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
}
function E() {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function _(e) {
    r.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
}
function S(e) {
    let {
        name: t,
        type: n,
        topic: l,
        bitrate: i,
        userLimit: a,
        nsfw: u,
        flags: o,
        rateLimitPerUser: s,
        defaultThreadRateLimitPerUser: d,
        defaultAutoArchiveDuration: E,
        template: _,
        defaultReactionEmoji: S,
        rtcRegion: N,
        videoQualityMode: c,
        autoArchiveDuration: T,
        locked: h,
        invitable: I,
        availableTags: C,
        defaultSortOrder: A,
        defaultForumLayout: f,
        defaultTagSetting: m,
        iconEmoji: p,
        themeColor: L,
    } = e;
    r.h.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: l,
        bitrate: i,
        userLimit: a,
        nsfw: u,
        flags: o,
        rateLimitPerUser: s,
        defaultThreadRateLimitPerUser: d,
        defaultAutoArchiveDuration: E,
        template: _,
        defaultReactionEmoji: S,
        rtcRegion: N,
        videoQualityMode: c,
        autoArchiveDuration: T,
        locked: h,
        invitable: I,
        availableTags: C,
        defaultSortOrder: A,
        defaultForumLayout: f,
        defaultTagSetting: m,
        iconEmoji: p,
        themeColor: L,
    });
}
async function N(e, t) {
    let {
            name: n,
            type: o,
            position: d,
            topic: E,
            bitrate: _,
            userLimit: S,
            nsfw: N,
            flags: c,
            permissionOverwrites: T,
            rateLimitPerUser: h,
            defaultThreadRateLimitPerUser: I,
            defaultAutoArchiveDuration: C,
            template: A,
            defaultReactionEmoji: f,
            rtcRegion: m,
            videoQualityMode: p,
            autoArchiveDuration: L,
            locked: g,
            invitable: v,
            availableTags: y,
            defaultSortOrder: H,
            defaultForumLayout: O,
            defaultTagSetting: R,
            iconEmoji: G,
            themeColor: U,
        } = t,
        b = u.A.getChannel(e);
    return (
        r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await a.A.unarchiveThreadIfNecessary(e),
        l.Bo.patch({
            url: s.Rsh.CHANNEL(e),
            body: {
                name: n,
                type: o,
                position: d,
                topic: E,
                bitrate: _,
                user_limit: S,
                nsfw: N,
                flags: c,
                permission_overwrites: T,
                rate_limit_per_user: h,
                default_thread_rate_limit_per_user: I,
                default_auto_archive_duration: C,
                template: A,
                rtc_region: m,
                video_quality_mode: p,
                auto_archive_duration: L,
                locked: g,
                invitable: v,
                default_reaction_emoji:
                    null != f ? { emoji_id: f?.emojiId, emoji_name: f?.emojiName } : null === f ? null : void 0,
                available_tags: y?.map((e) => ({
                    id: e.id,
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                })),
                default_sort_order: H,
                default_forum_layout: O,
                default_tag_setting: R,
                icon_emoji: null != G ? { id: G.id, name: G.name } : null === G ? null : void 0,
                theme_color: U,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => {
                r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = b?.getGuildId();
                return null == n || b?.isThread() || i.A.checkGuildTemplateDirty(n), t;
            },
            (e) => (r.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function c(e) {
    let t = u.A.getChannel(e);
    await l.Bo.del({ url: s.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    null == n || t?.isThread() || i.A.checkGuildTemplateDirty(n), E();
}
let T = {
    init: d,
    open: function (e, t, n) {
        d(e, t, n), (0, o.id)(s.zgK.CHANNEL_SETTINGS);
    },
    close: E,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        r.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: S,
    saveChannel: N,
    deleteChannel: c,
    updateVoiceChannelStatus: function (e, t) {
        return l.Bo.put({ url: s.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e), body: { status: t }, rejectWithError: !1 });
    },
    removeLinkedLobby: function (e) {
        return l.Bo.del({ url: s.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
