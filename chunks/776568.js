n.d(t, {
    ZP: () => h,
    k: () => b,
    u9: () => v
}),
    n(388685);
var i = n(255367);
n(73800);
var l = n(913527),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    u = n(211739),
    s = n(87051),
    c = n(496729),
    d = n(777861),
    f = n(9156),
    g = n(621600),
    p = n(933557),
    O = n(981631),
    E = n(969943),
    _ = n(388032);
let b = () => [
        {
            value: E.Oe.MINUTES_15,
            label: _.intl.string(_.t['8ot6go'])
        },
        {
            value: E.Oe.HOURS_1,
            label: _.intl.string(_.t.UMWBZm)
        },
        {
            value: E.Oe.HOURS_3,
            label: _.intl.string(_.t.QmYWtr)
        },
        {
            value: E.Oe.HOURS_8,
            label: _.intl.string(_.t.EpAXPD)
        },
        {
            value: E.Oe.HOURS_24,
            label: _.intl.string(_.t['755t4u'])
        },
        {
            value: E.Oe.ALWAYS,
            label: _.intl.string(_.t.r3LawM)
        }
    ],
    v = (e) => {
        let t = e > 0 ? r()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function h(e, t) {
    let [n, l] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        r = (0, d.U)(l),
        E = (0, p.ZP)(e, !0);
    function h(t) {
        t && e.type === O.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, g.UE.muted(t));
    }
    let y = _.intl.string(_.t.tbeRRE),
        C = _.intl.string(_.t.OYefmZ);
    switch (e.type) {
        case O.d4z.GUILD_CATEGORY:
            (y = _.intl.string(_.t.pNMCg4)), (C = _.intl.string(_.t.olaBeH));
            break;
        case O.d4z.GROUP_DM:
            (y = _.intl.string(_.t.LO3kaG)), (C = _.intl.string(_.t['s5/5fn']));
            break;
        case O.d4z.DM:
            (y = _.intl.format(_.t.byjuJi, { name: E })), (C = _.intl.format(_.t['eC+9rq'], { name: E }));
            break;
        default:
            (y = _.intl.string(_.t.tbeRRE)), (C = _.intl.string(_.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: C,
              subtext: r,
              action: () => h(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: y,
              action: () => {
                  h(!0),
                      (0, c.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: b().map((n) => {
                  let { value: l, label: r } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(l),
                          label: r,
                          action: () =>
                              (function (n) {
                                  e.type === O.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = v(n);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, t);
                              })(l)
                      },
                      l
                  );
              })
          });
}
