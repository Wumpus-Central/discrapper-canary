n.d(t, {
    N7: () => f,
    XP: () => p,
    j8: () => _,
    z$: () => h
});
var r = n(544891),
    i = n(430742),
    o = n(904245),
    a = n(623292),
    s = n(592125),
    l = n(703558),
    c = n(375954),
    u = n(585483),
    d = n(981631);
function f(e) {
    r.tn.post({
        url: d.ANM.INITIATE_CHANNEL_PROMPTS,
        body: { guild_ids: e },
        rejectWithError: !0
    });
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.uaV.GUILD_DEADCHAT_REVIVE_PROMPT;
    r.tn.post({
        url: d.ANM.FORCE_SEND_PROMPT(e),
        body: { prompt_type: t },
        rejectWithError: !0
    });
}
async function p(e, t, n) {
    await r.tn.post({
        url: d.ANM.SEND_GAMING_STATS(t),
        body: {
            message_reference: {
                guild_id: e,
                channel_id: t,
                message_id: n
            }
        },
        rejectWithError: !1
    }),
        m(t);
}
async function h(e) {
    let t = await r.tn.patch({
        url: d.ANM.UPDATE_GAMING_STATS(e.channel_id, e.id),
        rejectWithError: !1
    });
    if (null != t.text && '' !== t.text) {
        let n = s.Z.getChannel(e.channel_id);
        null != n &&
            ((0, a.fE)({
                channel: n,
                message: e,
                shouldMention: !1,
                showMentionToggle: !1
            }),
            m(n.id)),
            i.Z.saveDraft(e.channel_id, t.text, l.d.ChannelMessage);
    }
}
function m(e) {
    c.Z.getMessages(e).hasMoreAfter ? o.Z.jumpToPresent(e, d.AQB) : u.S.dispatch(d.CkL.SCROLLTO_PRESENT);
}
