n.d(t, { Z: () => u });
var r = n(87051),
    i = n(9156),
    l = n(621600),
    a = n(113449),
    o = n(981631),
    s = n(490897),
    c = n(526761);
function u(e, t, n) {
    r.Z.updateChannelOverrideSettings(
        e,
        t,
        { flags: (0, a.pq)(i.ZP.getChannelIdFlags(e, t), n) },
        l.UE.unreads(n === c.ic.UNREADS_ALL_MESSAGES ? s.i.ALL_MESSAGES : s.i.ONLY_MENTIONS),
        { object: o.qAy.NOTIFICATION_SETTING_UNREAD_NOTICE },
    );
}
