(n.d(t, { Ay: () => N, D3: () => S, RT: () => T, Ts: () => d, VN: () => E, c4: () => _, fy: () => c }), n(938796));
var l = n(636537),
    i = n(73153),
    r = n(568185);
n(250953);
var a = n(867455);
n(863036);
var u = n(734057),
    o = n(398590),
    s = n(652215);
function d(e, t, n) {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId: e, location: t, subsection: n });
}
function E() {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function _(e) {
    i.h.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section: e });
}
function c(e) {
    let {
        name: t,
        type: n,
        topic: l,
        bitrate: r,
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
        defaultForumLayout: C,
        defaultTagSetting: A,
        iconEmoji: p,
        themeColor: L,
        applicationId: g,
    } = e;
    i.h.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: l,
        bitrate: r,
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
        defaultForumLayout: C,
        defaultTagSetting: A,
        iconEmoji: p,
        themeColor: L,
        applicationId: g,
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
            defaultReactionEmoji: C,
            rtcRegion: A,
            videoQualityMode: p,
            autoArchiveDuration: L,
            locked: g,
            invitable: v,
            availableTags: y,
            defaultSortOrder: H,
            defaultForumLayout: O,
            defaultTagSetting: R,
            iconEmoji: U,
            themeColor: G,
            applicationId: j,
        } = t,
        D = u.A.getChannel(e);
    return (
        null != D &&
            (o === D.type && (o = void 0),
            (E ?? "") === (D.topic ?? "") && (E = void 0),
            (j ?? null) === (D.application_id ?? null) && (j = void 0)),
        D?.isGameInvitesChannel() && (f = void 0),
        i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await a.A.unarchiveThreadIfNecessary(e),
        l.Bo.patch({
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
                rtc_region: A,
                video_quality_mode: p,
                auto_archive_duration: L,
                locked: g,
                invitable: v,
                default_reaction_emoji:
                    null != C ? { emoji_id: C?.emojiId, emoji_name: C?.emojiName } : null === C ? null : void 0,
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
                icon_emoji: null != U ? { id: U.id, name: U.name } : null === U ? null : void 0,
                theme_color: G,
                application_id: j,
            },
            oldFormErrors: !0,
            rejectWithError: (0, l.fT)(),
        }).then(
            (t) => {
                i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: e });
                let n = D?.getGuildId();
                return (null == n || D?.isThread() || r.A.checkGuildTemplateDirty(n), t);
            },
            (e) => (i.h.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
async function S(e) {
    let t = u.A.getChannel(e);
    await l.Bo.del({ url: s.Rsh.CHANNEL(e), oldFormErrors: !0, rejectWithError: !0 });
    let n = t?.getGuildId();
    (null == n || t?.isThread() || r.A.checkGuildTemplateDirty(n), E());
}
let N = {
    init: d,
    open: function (e, t, n) {
        (d(e, t, n), (0, o.id)(s.zgK.CHANNEL_SETTINGS));
    },
    close: E,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        i.h.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId: e });
    },
    updateChannel: c,
    saveChannel: T,
    deleteChannel: S,
    updateVoiceChannelStatus: function (e, t) {
        return l.Bo.put({
            url: s.Rsh.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: (0, l.fT)(),
        });
    },
    removeLinkedLobby: function (e) {
        return l.Bo.del({ url: s.Rsh.CHANNEL_LINKED_LOBBY(e), rejectWithError: !0 });
    },
};
