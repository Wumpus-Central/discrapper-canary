"use strict";
n.d(t, { S9: () => u, dv: () => o });
var i = n(843472),
    r = n(287809),
    s = n(954571),
    l = n(661191),
    a = n(21181),
    c = n(652215);
let o = (e) => {
        let t = r.default.getCurrentUser()?.id,
            n = ((null != t ? l.default.extractTimestamp(t) : 0) + l.default.extractTimestamp(e)) % a.I.length;
        return a.I[n];
    },
    u = (e, t, n) => {
        i.A.sendGreetMessage(
            e.id,
            n,
            i.A.getSendMessageOptionsForReply({ channel: e, message: t, shouldMention: !0, showMentionToggle: !0 }),
        ),
            s.default.track(c.HAw.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: r.default.getCurrentUser()?.id,
            });
    };
