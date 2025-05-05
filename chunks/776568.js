n.d(t, {
    ZP: () => y,
    k: () => v,
    u9: () => O
}),
    n(388685);
var i = n(255367);
n(73800);
var l = n(913527),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    u = n(211739),
    d = n(87051),
    c = n(496729),
    s = n(777861),
    f = n(9156),
    _ = n(621600),
    E = n(933557),
    h = n(981631),
    p = n(969943),
    g = n(388032);
let v = () => [
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
    O = (e) => {
        let t = e > 0 ? r()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function y(e, t) {
    let [n, l] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        r = (0, s.U)(l),
        p = (0, E.ZP)(e, !0);
    function y(t) {
        t && e.type === h.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let A = g.intl.string(g.t.tbeRRE),
        b = g.intl.string(g.t.OYefmZ);
    switch (e.type) {
        case h.d4z.GUILD_CATEGORY:
            (A = g.intl.string(g.t.pNMCg4)), (b = g.intl.string(g.t.olaBeH));
            break;
        case h.d4z.GROUP_DM:
            (A = g.intl.string(g.t.LO3kaG)), (b = g.intl.string(g.t['s5/5fn']));
            break;
        case h.d4z.DM:
            (A = g.intl.format(g.t.byjuJi, { name: p })), (b = g.intl.format(g.t['eC+9rq'], { name: p }));
            break;
        default:
            (A = g.intl.string(g.t.tbeRRE)), (b = g.intl.string(g.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: b,
              subtext: r,
              action: () => y(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: A,
              action: () => {
                  y(!0),
                      (0, c.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: v().map((n) => {
                  let { value: l, label: r } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(l),
                          label: r,
                          action: () =>
                              (function (n) {
                                  e.type === h.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = O(n);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t);
                              })(l)
                      },
                      l
                  );
              })
          });
}
