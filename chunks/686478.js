r.d(n, {
    $_: function () {
        return l;
    },
    _l: function () {
        return i;
    },
    jk: function () {
        return s;
    },
    vL: function () {
        return o;
    }
});
var i,
    a = r(786761);
function o(e) {
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
        dueAt: null != e.due_at ? new Date(e.due_at) : void 0
    };
}
function s(e) {
    return {
        message: null != e.message ? (0, a.e5)(e.message) : null,
        saveData: o(e.save_data)
    };
}
function l(e) {
    return {
        channelId: e.channel_id,
        messageId: e.message_id
    };
}
!(function (e) {
    (e.ALL = 'ALL'), (e.REMINDER = 'REMINDER'), (e.BOOKMARK = 'BOOKMARK');
})(i || (i = {}));
