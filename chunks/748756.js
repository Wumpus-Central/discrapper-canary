t.d(n, { V: () => l }), t(399606);
var i = t(87051),
    a = t(9156),
    o = t(621600),
    c = t(113449),
    _ = t(686660),
    d = t(981631),
    r = t(526761);
function l(e, n) {
    let t = a.ZP.getGuildFlags(e);
    n === _.s8.ALL_MESSAGES
        ? i.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: d.bL.ALL_MESSAGES,
                  flags: (0, c.Q4)(t, r.vc.UNREADS_ALL_MESSAGES)
              },
              o.ZB.PresetAll
          )
        : n === _.s8.MENTIONS
          ? i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: d.bL.ONLY_MENTIONS,
                    flags: (0, c.Q4)(t, r.vc.UNREADS_ONLY_MENTIONS)
                },
                o.ZB.PresetMentions
            )
          : n === _.s8.NOTHING &&
            i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: d.bL.NO_MESSAGES,
                    flags: (0, c.Q4)(t, r.vc.UNREADS_ONLY_MENTIONS)
                },
                o.ZB.PresetNothing
            );
}
