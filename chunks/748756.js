t.d(n, { V: () => l }), t(399606);
var i = t(87051),
    a = t(9156),
    o = t(621600),
    s = t(113449),
    r = t(686660),
    c = t(981631),
    d = t(526761);
function l(e, n) {
    let t = a.ZP.getGuildFlags(e);
    n === r.s8.ALL_MESSAGES
        ? i.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: c.bL.ALL_MESSAGES,
                  flags: (0, s.Q4)(t, d.vc.UNREADS_ALL_MESSAGES)
              },
              o.ZB.PresetAll
          )
        : n === r.s8.MENTIONS
          ? i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: c.bL.ONLY_MENTIONS,
                    flags: (0, s.Q4)(t, d.vc.UNREADS_ONLY_MENTIONS)
                },
                o.ZB.PresetMentions
            )
          : n === r.s8.NOTHING &&
            i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: c.bL.NO_MESSAGES,
                    flags: (0, s.Q4)(t, d.vc.UNREADS_ONLY_MENTIONS)
                },
                o.ZB.PresetNothing
            );
}
