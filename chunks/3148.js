r.d(n, {
    ZP: function () {
        return h;
    },
    cs: function () {
        return _;
    },
    pe: function () {
        return p;
    }
});
var i = r(789020);
var a = r(653041);
var o = r(512722),
    s = r.n(o),
    l = r(869765),
    u = r(598077),
    c = r(594174),
    d = r(48854),
    f = r(981631);
function p(e) {
    let { id: n, username: r, avatar: i, discriminator: a, bot: o, globalName: s } = e;
    return {
        id: n,
        username: r,
        avatar: i,
        discriminator: a,
        bot: o,
        global_name: s
    };
}
function h(e) {
    let { channelId: n, content: r, tts: i = !1, type: a = f.uaV.DEFAULT, messageReference: o, allowedMentions: h, author: _, flags: m, nonce: g, poll: E, changelogId: v, giftingPrompt: y, state: b } = e,
        I = [];
    if (a === f.uaV.REPLY && (s()(null != o, 'Replies must have a message reference'), null == h || h.replied_user)) {
        let e = l.Z.getMessageByReference(o);
        (null == e ? void 0 : e.state) === l.Y.LOADED && I.push(p(e.message.author));
    }
    return (
        null == _ && (_ = c.default.getCurrentUser()),
        _ instanceof u.Z && (_ = p(_)),
        s()(null != _, 'createMessage: author cannot be undefined'),
        {
            id: null != g ? g : (0, d.r)(),
            type: a,
            content: r,
            channel_id: n,
            author: _,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: I,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: b || f.yb.SENDING,
            tts: i,
            message_reference: o,
            message_snapshots: [],
            flags: m,
            nonce: g,
            poll: E,
            changelog_id: v,
            gifting_prompt: y
        }
    );
}
function _(e) {
    let { messageId: n, channelId: r, content: i, embeds: a, loggingName: o } = e;
    return {
        id: null != n ? n : (0, d.r)(),
        type: f.uaV.DEFAULT,
        flags: f.iLy.EPHEMERAL,
        content: i,
        channel_id: r,
        author: {
            id: f.LAt,
            username: 'Clyde',
            discriminator: f.fo$,
            avatar: 'clyde',
            bot: !0
        },
        attachments: [],
        embeds: null != a ? a : [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: f.yb.SENT,
        tts: !1,
        loggingName: o
    };
}
