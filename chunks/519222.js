t(582128);
var i = t(687709),
    l = t(138399),
    a = t(419056),
    r = t(294454),
    s = t(727419);
t(928658);
var o = t(118517),
    c = t(747926),
    d = t(46653),
    u = t(734057),
    g = t(129230),
    A = t(147036),
    m = t(957565),
    f = t(188567),
    y = t(811091),
    p = t(965407),
    h = t(439147),
    E = t(249700),
    _ = t(145530),
    b = t(652215);
t.d(
    n,
    {},
    {
        $b: function (e, n, t) {
            let i = e.isPrivate(),
                l = n.author.id === d.default.getId();
            ((0, o.Yf)({ channel: e, message: n, shouldMention: !t.shiftKey && !l, showMentionToggle: !i && !l }),
                f._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id }));
        },
        DT: function (e, n, t) {
            (0, m.C)(t.shiftKey ? `${n.channel_id}-${n.id}` : n.id);
        },
        Io: function (e, n) {
            (0, E.A)(e, n, void 0, p.A.getOptions(n.id));
        },
        Le: function (e, n) {
            (0, a.A)(e.id, n.id);
        },
        Nw: function (e, n) {
            (0, c.Tv)(e, n, "Message");
        },
        RC: function (e, n, t) {
            n.state === b.cmJ.SEND_FAILED || t.shiftKey
                ? l.A.deleteMessage(e.id, n.id, n.state === b.cmJ.SEND_FAILED)
                : _.A.confirmDelete(e, n);
        },
        S: function (e, n) {
            (g.default.track(b.HAw.MESSAGE_LINK_COPIED, { message_id: n.id, channel: n.channel_id }),
                (0, m.C)((0, A.n)(e.guild_id, e.id, n.id)));
        },
        Z4: function (e, n) {
            (0, r.fO)({ message: n, source: "message-actions" });
        },
        cl: function (e, n) {
            (0, h.A)(e.id, n.id);
        },
        mF: function (e, n) {
            let t = u.A.getChannel(y.default.castMessageIdAsChannelId(n.id));
            null != t && (0, c.JA)(t);
        },
        rS: function (e, n, t) {
            !1 === n.pinned
                ? t.shiftKey
                    ? i.A.pinMessage(e, n.id)
                    : _.A.confirmPin(e, n)
                : t.shiftKey
                  ? i.A.unpinMessage(e, n.id)
                  : _.A.confirmUnpin(e, n);
        },
        u_: function (e, n) {
            l.A.startEditMessageRecord(e.id, n);
        },
        vc: function (e) {
            let n = e.getGuildId();
            null != n && s.A.open(n, b.BEX.ENGAGEMENT);
        },
    },
);
