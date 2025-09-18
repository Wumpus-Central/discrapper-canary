n.d(t, {
    XP: () => _,
    j8: () => f,
    z$: () => p,
});
var r = n(544891),
    i = n(430742),
    a = n(904245),
    o = n(623292),
    s = n(592125),
    l = n(703558),
    c = n(375954),
    u = n(585483),
    d = n(981631);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.uaV.GUILD_DEADCHAT_REVIVE_PROMPT;
    r.tn.post({
        url: d.ANM.FORCE_SEND_PROMPT(e),
        body: { prompt_type: t },
        rejectWithError: !0,
    });
}
async function _(e, t, n) {
    await r.tn.post({
        url: d.ANM.SEND_GAMING_STATS(t),
        body: {
            message_reference: {
                guild_id: e,
                channel_id: t,
                message_id: n,
            },
        },
        rejectWithError: !1,
    }),
        h(t);
}
async function p(e) {
    let t = await r.tn.patch({
        url: d.ANM.UPDATE_GAMING_STATS(e.channel_id, e.id),
        rejectWithError: !1,
    });
    if (null != t.text && "" !== t.text) {
        let n = s.Z.getChannel(e.channel_id);
        null != n &&
            ((0, o.fE)({
                channel: n,
                message: e,
                shouldMention: !1,
                showMentionToggle: !1,
            }),
            h(n.id)),
            i.Z.saveDraft(e.channel_id, t.text, l.d.ChannelMessage);
    }
}
function h(e) {
    c.Z.getMessages(e).hasMoreAfter ? a.Z.jumpToPresent(e, d.AQB) : u.S.dispatch(d.CkL.SCROLLTO_PRESENT);
}
