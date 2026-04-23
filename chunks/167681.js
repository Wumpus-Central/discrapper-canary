"use strict";
n.d(t, { S9: () => u, dv: () => c });
var i = n(843472),
    r = n(287809),
    l = n(954571),
    s = n(661191),
    a = n(21181),
    o = n(652215);
let c = (e) => {
        let t = r.default.getCurrentUser()?.id,
            n = ((null != t ? s.default.extractTimestamp(t) : 0) + s.default.extractTimestamp(e)) % a.I.length;
        return a.I[n];
    },
    u = (e, t, n) => {
        i.A.sendGreetMessage(
            e.id,
            n,
            i.A.getSendMessageOptionsForReply({ channel: e, message: t, shouldMention: !0, showMentionToggle: !0 }),
        ),
            l.default.track(o.HAw.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: r.default.getCurrentUser()?.id,
            });
    };
