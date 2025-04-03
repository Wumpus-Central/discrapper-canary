n.d(t, {
    ZP: () => v,
    k: () => b,
    u9: () => _
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(913527),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    u = n(211739),
    s = n(87051),
    c = n(496729),
    d = n(777861),
    f = n(9156),
    g = n(621600),
    O = n(933557),
    p = n(981631),
    E = n(969943),
    N = n(388032);
let b = () => [
        {
            value: E.Oe.MINUTES_15,
            label: N.NW.string(N.t['8ot6go'])
        },
        {
            value: E.Oe.HOURS_1,
            label: N.NW.string(N.t.UMWBZm)
        },
        {
            value: E.Oe.HOURS_3,
            label: N.NW.string(N.t.QmYWtr)
        },
        {
            value: E.Oe.HOURS_8,
            label: N.NW.string(N.t.EpAXPD)
        },
        {
            value: E.Oe.HOURS_24,
            label: N.NW.string(N.t['755t4u'])
        },
        {
            value: E.Oe.ALWAYS,
            label: N.NW.string(N.t.r3LawM)
        }
    ],
    _ = (e) => {
        let t = e > 0 ? a()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function v(e, t) {
    let [n, r] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, d.U)(r),
        E = (0, O.ZP)(e, !0);
    function v(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, g.UE.muted(t));
    }
    let h = N.NW.string(N.t.tbeRRE),
        y = N.NW.string(N.t.OYefmZ);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (h = N.NW.string(N.t.pNMCg4)), (y = N.NW.string(N.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (h = N.NW.string(N.t.LO3kaG)), (y = N.NW.string(N.t['s5/5fn']));
            break;
        case p.d4z.DM:
            (h = N.NW.format(N.t.byjuJi, { name: E })), (y = N.NW.format(N.t['eC+9rq'], { name: E }));
            break;
        default:
            (h = N.NW.string(N.t.tbeRRE)), (y = N.NW.string(N.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: y,
              subtext: a,
              action: () => v(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: h,
              action: () => {
                  v(!0),
                      (0, c.s)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: b().map((n) => {
                  let { value: r, label: a } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = _(n);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
