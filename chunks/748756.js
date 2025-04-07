n.d(t, { V: () => u }), n(399606);
var i = n(87051),
    r = n(9156),
    s = n(621600),
    l = n(113449),
    a = n(686660),
    o = n(981631),
    c = n(526761);
function u(e, t) {
    let n = r.ZP.getGuildFlags(e);
    t === a.s8.ALL_MESSAGES
        ? i.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: o.bL.ALL_MESSAGES,
                  flags: (0, l.Q4)(n, c.vc.UNREADS_ALL_MESSAGES)
              },
              s.ZB.PresetAll
          )
        : t === a.s8.MENTIONS
          ? i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: o.bL.ONLY_MENTIONS,
                    flags: (0, l.Q4)(n, c.vc.UNREADS_ONLY_MENTIONS)
                },
                s.ZB.PresetMentions
            )
          : t === a.s8.NOTHING &&
            i.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: o.bL.NO_MESSAGES,
                    flags: (0, l.Q4)(n, c.vc.UNREADS_ONLY_MENTIONS)
                },
                s.ZB.PresetNothing
            );
}
