(n.d(t, {
    T: () => i,
    d: () => r
}),
    n(388685));
var r = (function (e) {
    return ((e[(e.DM = 1)] = 'DM'), (e[(e.GROUP_DM = 3)] = 'GROUP_DM'), (e[(e.GUILD_TEXT = 0)] = 'GUILD_TEXT'), (e[(e.GUILD_VOICE = 2)] = 'GUILD_VOICE'), (e[(e.GUILD_CATEGORY = 4)] = 'GUILD_CATEGORY'), (e[(e.GUILD_ANNOUNCEMENT = 5)] = 'GUILD_ANNOUNCEMENT'), (e[(e.GUILD_STORE = 6)] = 'GUILD_STORE'), (e[(e.ANNOUNCEMENT_THREAD = 10)] = 'ANNOUNCEMENT_THREAD'), (e[(e.PUBLIC_THREAD = 11)] = 'PUBLIC_THREAD'), (e[(e.PRIVATE_THREAD = 12)] = 'PRIVATE_THREAD'), (e[(e.GUILD_STAGE_VOICE = 13)] = 'GUILD_STAGE_VOICE'), (e[(e.GUILD_DIRECTORY = 14)] = 'GUILD_DIRECTORY'), (e[(e.GUILD_FORUM = 15)] = 'GUILD_FORUM'), (e[(e.GUILD_MEDIA = 16)] = 'GUILD_MEDIA'), (e[(e.LOBBY = 17)] = 'LOBBY'), (e[(e.DM_SDK = 18)] = 'DM_SDK'), (e[(e.UNKNOWN = 10000)] = 'UNKNOWN'), e);
})({});
let i = {
    CALLABLE: new Set([1, 3]),
    TEXTUAL: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13]),
    GUILD_THREADS_ONLY: new Set([15, 16]),
    STICKERS: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13, 15, 16]),
    READABLE: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13, 14, 15, 16, 17]),
    GUILD: new Set([0, 2, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16]),
    GUILD_CHANNEL: new Set([0, 2, 4, 5, 6, 13, 14, 15, 16]),
    THREADS: new Set([10, 11, 12]),
    PRIVATE_CHANNEL: new Set([1, 3]),
    PUBLIC_THREADS: new Set([10, 11]),
    GUILD_THREADED: new Set([0, 5, 15, 16]),
    GUILD_STORED: new Set([0, 2, 4, 5, 6, 13, 14, 15, 16]),
    GUILD_TEXTUAL: new Set([0, 2, 5, 10, 11, 12, 13]),
    GUILD_VOCAL: new Set([2, 13]),
    VOCAL_THREAD: new Set([11, 12]),
    VOCAL: new Set([1, 2, 3, 11, 12, 13]),
    VOICE_EFFECTS: new Set([1, 2, 3, 11, 12]),
    GUILD_TEXT_ONLY: new Set([0, 5, 10, 11, 12]),
    LIMITED_CHANNEL_NAME: new Set([0, 5, 10, 11, 12, 15, 16]),
    SEARCHABLE: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13, 15, 16]),
    GUILD_USER_CONTENT: new Set([0, 2, 5, 10, 11, 12, 13, 15, 16]),
    GUILD_TOPICAL: new Set([0, 5, 13, 14, 15, 16]),
    GUILD_WEBHOOKS: new Set([0, 2, 5, 15, 16]),
    GUILD_SYSTEM_CHANNEL: new Set([0, 5]),
    GUILD_PARENTABLE: new Set([0, 2, 5, 10, 11, 12, 13, 14, 15, 16]),
    GUILD_AUTO_MODERATED: new Set([0, 2, 5, 10, 11, 12, 13, 15, 16]),
    GUILD_BASIC: new Set([0, 2, 4]),
    CREATEABLE_GUILD_CHANNELS: new Set([0, 2, 4, 5, 6, 13, 14, 15, 16]),
    MULTI_USER_DMS: new Set([3]),
    ALL_DMS: new Set([1, 3]),
    INVITABLE: new Set([0, 2, 3, 5, 6, 13, 14, 15, 16]),
    GUILD_FEED_FEATURABLE_MESSAGES: new Set([0, 5, 11]),
    ROLE_SUBSCRIPTIONS: new Set([0, 2, 5, 13, 15, 16]),
    ICON_EMOJIS: new Set([0, 2, 5, 13, 15]),
    SUMMARIZEABLE: new Set([0]),
    CONTENT_ENTRY_EMBEDS: new Set([0, 1, 5]),
    POLLS: new Set([0, 1, 2, 3, 5, 10, 11, 12, 13]),
    ACTIVITY_LAUNCHABLE: new Set([0, 1, 2, 3]),
    ALL: new Set([0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17])
};
