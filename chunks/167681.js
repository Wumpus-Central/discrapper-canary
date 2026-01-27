n.d(t, {
    S9: () => u,
    dv: () => c,
});
var r = n(843472),
    i = n(287809),
    l = n(954571),
    a = n(661191),
    s = n(21181),
    o = n(652215);
let c = (e) => {
        var t;
        let n = null == (t = i.default.getCurrentUser()) ? void 0 : t.id,
            r = ((null != n ? a.default.extractTimestamp(n) : 0) + a.default.extractTimestamp(e)) % s.I.length;
        return s.I[r];
    },
    u = (e, t, n) => {
        var a;
        r.A.sendGreetMessage(
            e.id,
            n,
            r.A.getSendMessageOptionsForReply({
                channel: e,
                message: t,
                shouldMention: !0,
                showMentionToggle: !0,
            }),
        ),
            l.default.track(o.HAw.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: null == (a = i.default.getCurrentUser()) ? void 0 : a.id,
            });
    };
