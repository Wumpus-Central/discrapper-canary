n.d(t, {
    ZP: () => d,
    cs: () => f,
    pe: () => c
}),
    n(789020),
    n(653041);
var i = n(512722),
    r = n.n(i),
    a = n(869765),
    s = n(598077),
    o = n(594174),
    l = n(48854),
    u = n(981631);
function c(e) {
    let { id: t, username: n, avatar: i, discriminator: r, bot: a, globalName: s } = e;
    return {
        id: t,
        username: n,
        avatar: i,
        discriminator: r,
        bot: a,
        global_name: s
    };
}
function d(e) {
    let { channelId: t, content: n, tts: i = !1, type: d = u.uaV.DEFAULT, messageReference: f, allowedMentions: _, author: p, flags: h, nonce: m, poll: g, changelogId: E, giftingPrompt: v, state: y } = e,
        I = [];
    if (d === u.uaV.REPLY && (r()(null != f, 'Replies must have a message reference'), null == _ || _.replied_user)) {
        let e = a.Z.getMessageByReference(f);
        (null == e ? void 0 : e.state) === a.Y.LOADED && I.push(c(e.message.author));
    }
    return (
        null == p && (p = o.default.getCurrentUser()),
        p instanceof s.Z && (p = c(p)),
        r()(null != p, 'createMessage: author cannot be undefined'),
        {
            id: null != m ? m : (0, l.r)(),
            type: d,
            content: n,
            channel_id: t,
            author: p,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: I,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: y || u.yb.SENDING,
            tts: i,
            message_reference: f,
            message_snapshots: [],
            flags: h,
            nonce: m,
            poll: g,
            changelog_id: E,
            gifting_prompt: v
        }
    );
}
function f(e) {
    let { messageId: t, channelId: n, content: i, embeds: r, loggingName: a } = e;
    return {
        id: null != t ? t : (0, l.r)(),
        type: u.uaV.DEFAULT,
        flags: u.iLy.EPHEMERAL,
        content: i,
        channel_id: n,
        author: {
            id: u.LAt,
            username: 'Clyde',
            discriminator: u.fo$,
            avatar: 'clyde',
            bot: !0
        },
        attachments: [],
        embeds: null != r ? r : [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: u.yb.SENT,
        tts: !1,
        loggingName: a
    };
}
