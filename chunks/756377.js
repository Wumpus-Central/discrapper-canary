n.d(t, {
    Dd: () => a,
    Yf: () => i,
    iz: () => s,
    x6: () => o,
});
var r = n(141468),
    i = (function (e) {
        return (e.ALL = "ALL"), (e.REMINDER = "REMINDER"), (e.BOOKMARK = "BOOKMARK"), e;
    })({});
function a(e) {
    return {
        channelId: e.channel_id,
        messageId: e.message_id,
        savedAt: new Date(e.saved_at),
        authorSummary: e.author_summary,
        channelSummary: e.channel_summary,
        messageSummary: e.message_summary,
        guildId: 0 === e.guild_id ? void 0 : e.guild_id,
        authorId: 0 === e.author_id ? void 0 : e.author_id,
        notes: e.notes,
        dueAt: null != e.due_at ? new Date(e.due_at) : void 0,
    };
}
function s(e) {
    return {
        message: null != e.message ? (0, r.rh)(e.message) : null,
        saveData: a(e.save_data),
    };
}
function o(e) {
    return {
        channelId: e.channel_id,
        messageId: e.message_id,
    };
}
