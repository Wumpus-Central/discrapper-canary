n.d(t, { S9: () => c, dv: () => d });
var i = n(843472),
    l = n(287809),
    a = n(954571),
    r = n(661191),
    s = n(21181),
    o = n(652215);
let d = (e) => {
        let t = l.default.getCurrentUser()?.id,
            n = ((null != t ? r.default.extractTimestamp(t) : 0) + r.default.extractTimestamp(e)) % s.I.length;
        return s.I[n];
    },
    c = (e, t, n) => {
        i.A.sendGreetMessage(
            e.id,
            n,
            i.A.getSendMessageOptionsForReply({ channel: e, message: t, shouldMention: !0, showMentionToggle: !0 }),
        ),
            a.default.track(o.HAw.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: l.default.getCurrentUser()?.id,
            });
    };
