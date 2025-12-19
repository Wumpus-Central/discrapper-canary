a.d(n, { V: () => b }), a(399606);
var t = a(87051),
    d = a(9156),
    o = a(621600),
    i = a(113449),
    c = a(686660),
    r = a(981631),
    s = a(526761);
function b(e, n) {
    let a = d.ZP.getGuildFlags(e);
    n === c.s8.ALL_MESSAGES
        ? t.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: r.bL.ALL_MESSAGES,
                  flags: (0, i.Q4)(a, s.vc.UNREADS_ALL_MESSAGES),
              },
              o.ZB.PresetAll,
          )
        : n === c.s8.MENTIONS
          ? t.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: r.bL.ONLY_MENTIONS,
                    flags: (0, i.Q4)(a, s.vc.UNREADS_ONLY_MENTIONS),
                },
                o.ZB.PresetMentions,
            )
          : n === c.s8.NOTHING &&
            t.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: r.bL.NO_MESSAGES,
                    flags: (0, i.Q4)(a, s.vc.UNREADS_ONLY_MENTIONS),
                },
                o.ZB.PresetNothing,
            );
}
