n.d(e, {
    ZP: () => C,
    k: () => N,
    u9: () => A
}),
    n(388685);
var r = n(255367);
n(73800);
var i = n(913527),
    l = n.n(i),
    a = n(442837),
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
    h = n(388032);
let N = () => [
        {
            value: m.Oe.MINUTES_15,
            label: h.intl.string(h.t['8ot6go'])
        },
        {
            value: m.Oe.HOURS_1,
            label: h.intl.string(h.t.UMWBZm)
        },
        {
            value: m.Oe.HOURS_3,
            label: h.intl.string(h.t.QmYWtr)
        },
        {
            value: m.Oe.HOURS_8,
            label: h.intl.string(h.t.EpAXPD)
        },
        {
            value: m.Oe.HOURS_24,
            label: h.intl.string(h.t['755t4u'])
        },
        {
            value: m.Oe.ALWAYS,
            label: h.intl.string(h.t.r3LawM)
        }
    ],
    A = (t) => {
        let e = t > 0 ? l()().add(t, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e
            }
        };
    };
function C(t, e) {
    let [n, i] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(t.guild_id, t.id), f.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
        l = (0, d.U)(i),
        m = (0, E.ZP)(t, !0);
    function C(e) {
        e && t.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(t.id), c.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, _.UE.muted(e));
    }
    let T = h.intl.string(h.t.tbeRRE),
        g = h.intl.string(h.t.OYefmZ);
    switch (t.type) {
        case p.d4z.GUILD_CATEGORY:
            (T = h.intl.string(h.t.pNMCg4)), (g = h.intl.string(h.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (T = h.intl.string(h.t.LO3kaG)), (g = h.intl.string(h.t['s5/5fn']));
            break;
        case p.d4z.DM:
            (T = h.intl.format(h.t.byjuJi, { name: m })), (g = h.intl.format(h.t['eC+9rq'], { name: m }));
            break;
        default:
            (T = h.intl.string(h.t.tbeRRE)), (g = h.intl.string(h.t.OYefmZ));
    }
    return n
        ? (0, r.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: g,
              subtext: l,
              action: () => C(!1)
          })
        : (0, r.jsx)(o.sNh, {
              id: 'mute-channel',
              label: T,
              action: () => {
                  C(!0),
                      (0, s.sT)({
                          channelId: t.id,
                          location: 'channel_context_menu'
                      });
              },
              children: N().map((n) => {
                  let { value: i, label: l } = n;
                  return (0, r.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(i),
                          label: l,
                          action: () =>
                              (function (n) {
                                  t.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(t.id);
                                  let r = A(n);
                                  c.Z.updateChannelOverrideSettings(t.guild_id, t.id, r, _.ZB.Muted, e);
                              })(i)
                      },
                      i
                  );
              })
          });
}
