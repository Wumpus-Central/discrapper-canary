n.d(t, { Z: () => u });
var r = n(87051),
    i = n(9156),
    o = n(621600),
    a = n(113449),
    s = n(981631),
    l = n(490897),
    c = n(526761);
function u(e, t, n) {
    r.Z.updateChannelOverrideSettings(
        e,
        t,
        { flags: (0, a.pq)(i.ZP.getChannelIdFlags(e, t), n) },
        o.UE.unreads(n === c.ic.UNREADS_ALL_MESSAGES ? l.i.ALL_MESSAGES : l.i.ONLY_MENTIONS),
        { object: s.qAy.NOTIFICATION_SETTING_UNREAD_NOTICE },
    );
}
