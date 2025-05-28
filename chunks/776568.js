n.d(t, {
    ZP: () => h,
    k: () => T,
    u9: () => A
}),
    n(388685);
var r = n(255367);
n(73800);
var i = n(913527),
    a = n.n(i),
    l = n(442837),
    o = n(481060),
    u = n(211739),
    c = n(87051),
    s = n(496729),
    d = n(777861),
    f = n(9156),
    _ = n(621600),
    E = n(933557),
    p = n(981631),
    m = n(969943),
    N = n(388032);
let T = () => [
        {
            value: m.Oe.MINUTES_15,
            label: N.intl.string(N.t['8ot6go'])
        },
        {
            value: m.Oe.HOURS_1,
            label: N.intl.string(N.t.UMWBZm)
        },
        {
            value: m.Oe.HOURS_3,
            label: N.intl.string(N.t.QmYWtr)
        },
        {
            value: m.Oe.HOURS_8,
            label: N.intl.string(N.t.EpAXPD)
        },
        {
            value: m.Oe.HOURS_24,
            label: N.intl.string(N.t['755t4u'])
        },
        {
            value: m.Oe.ALWAYS,
            label: N.intl.string(N.t.r3LawM)
        }
    ],
    A = (e) => {
        let t = e > 0 ? a()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function h(e, t) {
    let [n, i] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, d.U)(i),
        m = (0, E.ZP)(e, !0);
    function h(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let C = N.intl.string(N.t.tbeRRE),
        g = N.intl.string(N.t.OYefmZ);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (C = N.intl.string(N.t.pNMCg4)), (g = N.intl.string(N.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (C = N.intl.string(N.t.LO3kaG)), (g = N.intl.string(N.t['s5/5fn']));
            break;
        case p.d4z.DM:
            (C = N.intl.format(N.t.byjuJi, { name: m })), (g = N.intl.format(N.t['eC+9rq'], { name: m }));
            break;
        default:
            (C = N.intl.string(N.t.tbeRRE)), (g = N.intl.string(N.t.OYefmZ));
    }
    return n
        ? (0, r.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: g,
              subtext: a,
              action: () => h(!1)
          })
        : (0, r.jsx)(o.sNh, {
              id: 'mute-channel',
              label: C,
              action: () => {
                  h(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: T().map((n) => {
                  let { value: i, label: a } = n;
                  return (0, r.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(i),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let r = A(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, _.ZB.Muted, t);
                              })(i)
                      },
                      i
                  );
              })
          });
}
