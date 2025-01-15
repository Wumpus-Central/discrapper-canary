t.d(n, {
    V: function () {
        return d;
    }
}),
    t(399606);
var i = t(87051),
    l = t(9156),
    a = t(621600),
    s = t(113449),
    r = t(686660),
    u = t(981631),
    o = t(526761);
function d(e, n) {
    let t = l.ZP.getGuildFlags(e);
    n === r.s8.ALL_MESSAGES
        ? i.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: u.bL.ALL_MESSAGES,
                  flags: (0, s.Q4)(t, o.vc.UNREADS_ALL_MESSAGES)
              },
              a.ZB.PresetAll
          )
        : n === r.s8.MENTIONS
          ? i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: u.bL.ONLY_MENTIONS,
                    flags: (0, s.Q4)(t, o.vc.UNREADS_ONLY_MENTIONS)
                },
                a.ZB.PresetMentions
            )
          : n === r.s8.NOTHING &&
            i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: u.bL.NO_MESSAGES,
                    flags: (0, s.Q4)(t, o.vc.UNREADS_ONLY_MENTIONS)
                },
                a.ZB.PresetNothing
            );
}
