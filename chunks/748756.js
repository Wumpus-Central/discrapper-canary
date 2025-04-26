n.d(t, { V: () => u }), n(399606);
var i = n(87051),
    r = n(9156),
    l = n(621600),
    s = n(113449),
    o = n(686660),
    a = n(981631),
    c = n(526761);
function u(e, t) {
    let n = r.ZP.getGuildFlags(e);
    t === o.s8.ALL_MESSAGES
        ? i.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: a.bL.ALL_MESSAGES,
                  flags: (0, s.Q4)(n, c.vc.UNREADS_ALL_MESSAGES)
              },
              l.ZB.PresetAll
          )
        : t === o.s8.MENTIONS
          ? i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: a.bL.ONLY_MENTIONS,
                    flags: (0, s.Q4)(n, c.vc.UNREADS_ONLY_MENTIONS)
                },
                l.ZB.PresetMentions
            )
          : t === o.s8.NOTHING &&
            i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: a.bL.NO_MESSAGES,
                    flags: (0, s.Q4)(n, c.vc.UNREADS_ONLY_MENTIONS)
                },
                l.ZB.PresetNothing
            );
}
