n.d(t, {
    ZP: () => j,
    k: () => v,
    u9: () => g
}),
    n(388685);
var a = n(200651);
n(192379);
var r = n(913527),
    l = n.n(r),
    i = n(442837),
    s = n(481060),
    o = n(211739),
    c = n(87051),
    d = n(496729),
    u = n(777861),
    m = n(9156),
    x = n(621600),
    h = n(933557),
    p = n(981631),
    b = n(969943),
    f = n(388032);
let v = () => [
        {
            value: b.Oe.MINUTES_15,
            label: f.intl.string(f.t['8ot6go'])
        },
        {
            value: b.Oe.HOURS_1,
            label: f.intl.string(f.t.UMWBZm)
        },
        {
            value: b.Oe.HOURS_3,
            label: f.intl.string(f.t.QmYWtr)
        },
        {
            value: b.Oe.HOURS_8,
            label: f.intl.string(f.t.EpAXPD)
        },
        {
            value: b.Oe.HOURS_24,
            label: f.intl.string(f.t['755t4u'])
        },
        {
            value: b.Oe.ALWAYS,
            label: f.intl.string(f.t.r3LawM)
        }
    ],
    g = (e) => {
        let t = e > 0 ? l()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function j(e, t) {
    let [n, r] = (0, i.Wu)([m.ZP], () => [m.ZP.isChannelMuted(e.guild_id, e.id), m.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        l = (0, u.U)(r),
        b = (0, h.ZP)(e, !0);
    function j(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, x.UE.muted(t));
    }
    let _ = f.intl.string(f.t.tbeRRE),
        y = f.intl.string(f.t.OYefmZ);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (_ = f.intl.string(f.t.pNMCg4)), (y = f.intl.string(f.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (_ = f.intl.string(f.t.LO3kaG)), (y = f.intl.string(f.t['s5/5fn']));
            break;
        case p.d4z.DM:
            (_ = f.intl.format(f.t.byjuJi, { name: b })), (y = f.intl.format(f.t['eC+9rq'], { name: b }));
            break;
        default:
            (_ = f.intl.string(f.t.tbeRRE)), (y = f.intl.string(f.t.OYefmZ));
    }
    return n
        ? (0, a.jsx)(s.sNh, {
              id: 'unmute-channel',
              label: y,
              subtext: l,
              action: () => j(!1)
          })
        : (0, a.jsx)(s.sNh, {
              id: 'mute-channel',
              label: _,
              action: () => {
                  j(!0),
                      (0, d.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: v().map((n) => {
                  let { value: r, label: l } = n;
                  return (0, a.jsx)(
                      s.sNh,
                      {
                          id: ''.concat(r),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
                                  let a = g(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, a, x.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
