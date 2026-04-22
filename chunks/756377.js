"use strict";
n.d(t, { Dd: () => a, Yf: () => s, iz: () => o, x6: () => l });
var r,
    i = n(141468),
    s = (((r = {}).ALL = "ALL"), (r.REMINDER = "REMINDER"), (r.BOOKMARK = "BOOKMARK"), r);
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
function o(e) {
    return { message: null != e.message ? (0, i.rh)(e.message) : null, saveData: a(e.save_data) };
}
function l(e) {
    return { channelId: e.channel_id, messageId: e.message_id };
}
