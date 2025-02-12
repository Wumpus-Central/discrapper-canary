t.d(n, { V: () => l }), t(399606);
var i = t(87051),
    a = t(9156),
    o = t(621600),
    c = t(113449),
    d = t(686660),
    _ = t(981631),
    r = t(526761);
function l(e, n) {
    let t = a.ZP.getGuildFlags(e);
    n === d.s8.ALL_MESSAGES
        ? i.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: _.bL.ALL_MESSAGES,
                  flags: (0, c.Q4)(t, r.vc.UNREADS_ALL_MESSAGES)
              },
              o.ZB.PresetAll
          )
        : n === d.s8.MENTIONS
          ? i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: _.bL.ONLY_MENTIONS,
                    flags: (0, c.Q4)(t, r.vc.UNREADS_ONLY_MENTIONS)
                },
                o.ZB.PresetMentions
            )
          : n === d.s8.NOTHING &&
            i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: _.bL.NO_MESSAGES,
                    flags: (0, c.Q4)(t, r.vc.UNREADS_ONLY_MENTIONS)
                },
                o.ZB.PresetNothing
            );
}
