n.d(t, { Yf: () => s, Z7: () => l, iz: () => o, x6: () => d });
var i,
    r,
    a = n(320095),
    s = (((i = {}).ALL = "ALL"), (i.REMINDER = "REMINDER"), (i.BOOKMARK = "BOOKMARK"), i),
    l =
        (((r = {}).LOADING = "LOADING"),
        (r.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (r.LOADED_FINISHED = "LOADED_FINISHED"),
        (r.FAILED = "FAILED"),
        r);
function o(e) {
    var t;
    return {
        message: null != e.message ? (0, a.rh)(e.message) : null,
        saveData: {
            channelId: (t = e.save_data).channel_id,
            messageId: t.message_id,
            savedAt: new Date(t.saved_at),
            authorSummary: t.author_summary,
            channelSummary: t.channel_summary,
            messageSummary: t.message_summary,
            guildId: 0 === t.guild_id ? void 0 : t.guild_id,
            authorId: 0 === t.author_id ? void 0 : t.author_id,
            notes: t.notes,
            dueAt: null != t.due_at ? new Date(t.due_at) : void 0,
        },
    };
}
function d(e) {
    return { channelId: e.channel_id, messageId: e.message_id };
}
