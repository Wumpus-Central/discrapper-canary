n.d(t, {
    ZP: () => _,
    k: () => Z,
    u9: () => O
}),
    n(388685);
var i = n(200651);
n(192379);
var r = n(913527),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    d = n(211739),
    u = n(87051),
    s = n(496729),
    c = n(777861),
    f = n(9156),
    h = n(621600),
    v = n(933557),
    b = n(981631),
    p = n(969943),
    g = n(388032);
let Z = () => [
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
        let t = e > 0 ? a()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function _(e, t) {
    let [n, r] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, c.U)(r),
        p = (0, v.ZP)(e, !0);
    function _(t) {
        t && e.type === b.d4z.GUILD_CATEGORY && (0, d.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, h.UE.muted(t));
    }
    let m = g.intl.string(g.t.tbeRRE),
        y = g.intl.string(g.t.OYefmZ);
    switch (e.type) {
        case b.d4z.GUILD_CATEGORY:
            (m = g.intl.string(g.t.pNMCg4)), (y = g.intl.string(g.t.olaBeH));
            break;
        case b.d4z.GROUP_DM:
            (m = g.intl.string(g.t.LO3kaG)), (y = g.intl.string(g.t['s5/5fn']));
            break;
        case b.d4z.DM:
            (m = g.intl.format(g.t.byjuJi, { name: p })), (y = g.intl.format(g.t['eC+9rq'], { name: p }));
            break;
        default:
            (m = g.intl.string(g.t.tbeRRE)), (y = g.intl.string(g.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: y,
              subtext: a,
              action: () => _(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: m,
              action: () => {
                  _(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: Z().map((n) => {
                  let { value: r, label: a } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === b.d4z.GUILD_CATEGORY && (0, d.c4)(e.id);
                                  let i = O(n);
                                  u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
