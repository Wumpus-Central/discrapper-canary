n.d(e, {
    ZP: () => T,
    k: () => h,
    u9: () => N
}),
    n(388685);
var r = n(200651);
n(192379);
var i = n(913527),
    l = n.n(i),
    a = n(442837),
    u = n(481060),
    o = n(211739),
    c = n(87051),
    s = n(496729),
    d = n(777861),
    f = n(9156),
    _ = n(621600),
    E = n(933557),
    m = n(981631),
    p = n(969943),
    g = n(388032);
let h = () => [
        {
            value: p.Oe.MINUTES_15,
            label: g.intl.string(g.t['8ot6go'])
        },
        {
            value: p.Oe.HOURS_1,
            label: g.intl.string(g.t.UMWBZm)
        },
        {
            value: p.Oe.HOURS_3,
            label: g.intl.string(g.t.QmYWtr)
        },
        {
            value: p.Oe.HOURS_8,
            label: g.intl.string(g.t.EpAXPD)
        },
        {
            value: p.Oe.HOURS_24,
            label: g.intl.string(g.t['755t4u'])
        },
        {
            value: p.Oe.ALWAYS,
            label: g.intl.string(g.t.r3LawM)
        }
    ],
    N = (t) => {
        let e = t > 0 ? l()().add(t, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e
            }
        };
    };
function T(t, e) {
    let [n, i] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(t.guild_id, t.id), f.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
        l = (0, d.U)(i),
        p = (0, E.ZP)(t, !0);
    function T(e) {
        e && t.type === m.d4z.GUILD_CATEGORY && (0, o.c4)(t.id), c.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, _.UE.muted(e));
    }
    let C = g.intl.string(g.t.tbeRRE),
        O = g.intl.string(g.t.OYefmZ);
    switch (t.type) {
        case m.d4z.GUILD_CATEGORY:
            (C = g.intl.string(g.t.pNMCg4)), (O = g.intl.string(g.t.olaBeH));
            break;
        case m.d4z.GROUP_DM:
            (C = g.intl.string(g.t.LO3kaG)), (O = g.intl.string(g.t['s5/5fn']));
            break;
        case m.d4z.DM:
            (C = g.intl.format(g.t.byjuJi, { name: p })), (O = g.intl.format(g.t['eC+9rq'], { name: p }));
            break;
        default:
            (C = g.intl.string(g.t.tbeRRE)), (O = g.intl.string(g.t.OYefmZ));
    }
    return n
        ? (0, r.jsx)(u.sNh, {
              id: 'unmute-channel',
              label: O,
              subtext: l,
              action: () => T(!1)
          })
        : (0, r.jsx)(u.sNh, {
              id: 'mute-channel',
              label: C,
              action: () => {
                  T(!0),
                      (0, s.sT)({
                          channelId: t.id,
                          location: 'channel_context_menu'
                      });
              },
              children: h().map((n) => {
                  let { value: i, label: l } = n;
                  return (0, r.jsx)(
                      u.sNh,
                      {
                          id: ''.concat(i),
                          label: l,
                          action: () =>
                              (function (n) {
                                  t.type === m.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                                  let r = N(n);
                                  c.Z.updateChannelOverrideSettings(t.guild_id, t.id, r, _.ZB.Muted, e);
                              })(i)
                      },
                      i
                  );
              })
          });
}
