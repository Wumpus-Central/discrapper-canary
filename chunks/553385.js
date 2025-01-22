r.d(n, {
    N7: function () {
        return p;
    },
    XP: function () {
        return _;
    },
    j8: function () {
        return h;
    },
    z$: function () {
        return m;
    }
});
var i = r(544891),
    a = r(430742),
    o = r(904245),
    s = r(623292),
    l = r(592125),
    u = r(703558),
    c = r(375954),
    d = r(585483),
    f = r(981631);
function p(e) {
    i.tn.post({
        url: f.ANM.INITIATE_CHANNEL_PROMPTS,
        body: { guild_ids: e },
        rejectWithError: !0
    });
}
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.uaV.GUILD_DEADCHAT_REVIVE_PROMPT;
    i.tn.post({
        url: f.ANM.FORCE_SEND_PROMPT(e),
        body: { prompt_type: n },
        rejectWithError: !0
    });
}
async function _(e, n, r) {
    await i.tn.post({
        url: f.ANM.SEND_GAMING_STATS(n),
        body: {
            message_reference: {
                guild_id: e,
                channel_id: n,
                message_id: r
            }
        },
        rejectWithError: !1
    }),
        g(n);
}
async function m(e) {
    let n = await i.tn.patch({
        url: f.ANM.UPDATE_GAMING_STATS(e.channel_id, e.id),
        rejectWithError: !1
    });
    if (null != n.text && '' !== n.text) {
        let r = l.Z.getChannel(e.channel_id);
        null != r &&
            ((0, s.fE)({
                channel: r,
                message: e,
                shouldMention: !1,
                showMentionToggle: !1
            }),
            g(r.id)),
            a.Z.saveDraft(e.channel_id, n.text, u.d.ChannelMessage);
    }
}
function g(e) {
    c.Z.getMessages(e).hasMoreAfter ? o.Z.jumpToPresent(e, f.AQB) : d.S.dispatch(f.CkL.SCROLLTO_PRESENT);
}
