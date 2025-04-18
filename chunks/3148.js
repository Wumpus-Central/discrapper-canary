n.d(t, {
    ZP: () => d,
    cs: () => f,
    pe: () => u
}),
    n(997841),
    n(539854);
var r = n(512722),
    i = n.n(r),
    a = n(869765),
    o = n(598077),
    s = n(594174),
    l = n(48854),
    c = n(981631);
function u(e) {
    let { id: t, username: n, avatar: r, discriminator: i, bot: a, globalName: o } = e;
    return {
        id: t,
        username: n,
        avatar: r,
        discriminator: i,
        bot: a,
        global_name: o
    };
}
function d(e) {
    let { channelId: t, content: n, tts: r = !1, type: d = c.uaV.DEFAULT, messageReference: f, allowedMentions: _, author: p, flags: h, nonce: m, poll: g, changelogId: E, giftingPrompt: b, state: y } = e,
        v = [];
    if (d === c.uaV.REPLY && (i()(null != f, 'Replies must have a message reference'), null == _ || _.replied_user)) {
        let e = a.Z.getMessageByReference(f);
        (null == e ? void 0 : e.state) === a.Y.LOADED && v.push(u(e.message.author));
    }
    return (
        null == p && (p = s.default.getCurrentUser()),
        p instanceof o.Z && (p = u(p)),
        i()(null != p, 'createMessage: author cannot be undefined'),
        {
            id: null != m ? m : (0, l.r)(),
            type: d,
            content: n,
            channel_id: t,
            author: p,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: v,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: y || c.yb.SENDING,
            tts: r,
            message_reference: f,
            message_snapshots: [],
            flags: h,
            nonce: m,
            poll: g,
            changelog_id: E,
            gifting_prompt: b
        }
    );
}
function f(e) {
    let { messageId: t, channelId: n, content: r, embeds: i, loggingName: a } = e;
    return {
        id: null != t ? t : (0, l.r)(),
        type: c.uaV.DEFAULT,
        flags: c.iLy.EPHEMERAL,
        content: r,
        channel_id: n,
        author: {
            id: c.LAt,
            username: 'Clyde',
            discriminator: c.fo$,
            avatar: 'clyde',
            bot: !0
        },
        attachments: [],
        embeds: null != i ? i : [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: c.yb.SENT,
        tts: !1,
        loggingName: a
    };
}
