n.d(e, {
    ZP: () => T,
    k: () => C,
    u9: () => N
}),
    n(388685);
var r = n(255367);
n(73800);
var i = n(913527),
    l = n.n(i),
    a = n(442837),
    u = n(481060),
    o = n(211739),
    c = n(87051),
    d = n(496729),
    s = n(777861),
    f = n(9156),
    _ = n(621600),
    E = n(933557),
    p = n(981631),
    m = n(969943),
    h = n(388032);
let C = () => [
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
        l = (0, s.U)(i),
        m = (0, E.ZP)(t, !0);
    function T(e) {
        e && t.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(t.id), c.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, _.UE.muted(e));
    }
    let g = h.intl.string(h.t.tbeRRE),
        A = h.intl.string(h.t.OYefmZ);
    switch (t.type) {
        case p.d4z.GUILD_CATEGORY:
            (g = h.intl.string(h.t.pNMCg4)), (A = h.intl.string(h.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (g = h.intl.string(h.t.LO3kaG)), (A = h.intl.string(h.t['s5/5fn']));
            break;
        case p.d4z.DM:
            (g = h.intl.format(h.t.byjuJi, { name: m })), (A = h.intl.format(h.t['eC+9rq'], { name: m }));
            break;
        default:
            (g = h.intl.string(h.t.tbeRRE)), (A = h.intl.string(h.t.OYefmZ));
    }
    return n
        ? (0, r.jsx)(u.sNh, {
              id: 'unmute-channel',
              label: A,
              subtext: l,
              action: () => T(!1)
          })
        : (0, r.jsx)(u.sNh, {
              id: 'mute-channel',
              label: g,
              action: () => {
                  T(!0),
                      (0, d.sT)({
                          channelId: t.id,
                          location: 'channel_context_menu'
                      });
              },
              children: C().map((n) => {
                  let { value: i, label: l } = n;
                  return (0, r.jsx)(
                      u.sNh,
                      {
                          id: ''.concat(i),
                          label: l,
                          action: () =>
                              (function (n) {
                                  t.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                                  let r = N(n);
                                  c.Z.updateChannelOverrideSettings(t.guild_id, t.id, r, _.ZB.Muted, e);
                              })(i)
                      },
                      i
                  );
              })
          });
}
