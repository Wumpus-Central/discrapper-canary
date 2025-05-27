n.d(e, {
    ZP: () => h,
    k: () => g,
    u9: () => T
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
    s = n(496729),
    d = n(777861),
    f = n(9156),
    _ = n(621600),
    E = n(933557),
    p = n(981631),
    m = n(969943),
    N = n(388032);
let g = () => [
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
    T = (t) => {
        let e = t > 0 ? l()().add(t, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e
            }
        };
    };
function h(t, e) {
    let [n, i] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(t.guild_id, t.id), f.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
        l = (0, d.U)(i),
        m = (0, E.ZP)(t, !0);
    function h(e) {
        e && t.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(t.id), c.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, _.UE.muted(e));
    }
    let A = N.intl.string(N.t.tbeRRE),
        C = N.intl.string(N.t.OYefmZ);
    switch (t.type) {
        case p.d4z.GUILD_CATEGORY:
            (A = N.intl.string(N.t.pNMCg4)), (C = N.intl.string(N.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (A = N.intl.string(N.t.LO3kaG)), (C = N.intl.string(N.t['s5/5fn']));
            break;
        case p.d4z.DM:
            (A = N.intl.format(N.t.byjuJi, { name: m })), (C = N.intl.format(N.t['eC+9rq'], { name: m }));
            break;
        default:
            (A = N.intl.string(N.t.tbeRRE)), (C = N.intl.string(N.t.OYefmZ));
    }
    return n
        ? (0, r.jsx)(u.sNh, {
              id: 'unmute-channel',
              label: C,
              subtext: l,
              action: () => h(!1)
          })
        : (0, r.jsx)(u.sNh, {
              id: 'mute-channel',
              label: A,
              action: () => {
                  h(!0),
                      (0, s.sT)({
                          channelId: t.id,
                          location: 'channel_context_menu'
                      });
              },
              children: g().map((n) => {
                  let { value: i, label: l } = n;
                  return (0, r.jsx)(
                      u.sNh,
                      {
                          id: ''.concat(i),
                          label: l,
                          action: () =>
                              (function (n) {
                                  t.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                                  let r = T(n);
                                  c.Z.updateChannelOverrideSettings(t.guild_id, t.id, r, _.ZB.Muted, e);
                              })(i)
                      },
                      i
                  );
              })
          });
}
