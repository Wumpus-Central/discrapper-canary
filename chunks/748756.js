t.d(n, {
    V: function () {
        return d;
    }
}),
    t(399606);
var i = t(87051),
    a = t(9156),
    c = t(621600),
    o = t(113449),
    r = t(686660),
    s = t(981631),
    l = t(526761);
function d(e, n) {
    let t = a.ZP.getGuildFlags(e);
    n === r.s8.ALL_MESSAGES
        ? i.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: s.bL.ALL_MESSAGES,
                  flags: (0, o.Q4)(t, l.vc.UNREADS_ALL_MESSAGES)
              },
              c.ZB.PresetAll
          )
        : n === r.s8.MENTIONS
          ? i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: s.bL.ONLY_MENTIONS,
                    flags: (0, o.Q4)(t, l.vc.UNREADS_ONLY_MENTIONS)
                },
                c.ZB.PresetMentions
            )
          : n === r.s8.NOTHING &&
            i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: s.bL.NO_MESSAGES,
                    flags: (0, o.Q4)(t, l.vc.UNREADS_ONLY_MENTIONS)
                },
                c.ZB.PresetNothing
            );
}
