n.d(t, {
    S9: () => u,
    dv: () => c,
});
var r = n(843472),
    i = n(287809),
    a = n(954571),
    s = n(661191),
    o = n(21181),
    l = n(652215);
let c = (e) => {
        var t;
        let n = null == (t = i.default.getCurrentUser()) ? void 0 : t.id,
            r = ((null != n ? s.default.extractTimestamp(n) : 0) + s.default.extractTimestamp(e)) % o.I.length;
        return o.I[r];
    },
    u = (e, t, n) => {
        var s;
        let o = {
            channel: e,
            message: t,
            shouldMention: !0,
            showMentionToggle: !0,
        };
        r.A.sendGreetMessage(e.id, n, r.A.getSendMessageOptionsForReply(o)),
            a.default.track(l.HAw.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: null == (s = i.default.getCurrentUser()) ? void 0 : s.id,
            });
    };
