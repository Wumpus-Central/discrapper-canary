n.d(t, {
    ZP: () => v,
    k: () => N,
    u9: () => _
}),
    n(388685);
var i = n(200651);
n(192379);
var a = n(913527),
    r = n.n(a),
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
    b = n(388032);
let N = () => [
        {
            value: E.Oe.MINUTES_15,
            label: b.NW.string(b.t['8ot6go'])
        },
        {
            value: E.Oe.HOURS_1,
            label: b.NW.string(b.t.UMWBZm)
        },
        {
            value: E.Oe.HOURS_3,
            label: b.NW.string(b.t.QmYWtr)
        },
        {
            value: E.Oe.HOURS_8,
            label: b.NW.string(b.t.EpAXPD)
        },
        {
            value: E.Oe.HOURS_24,
            label: b.NW.string(b.t['755t4u'])
        },
        {
            value: E.Oe.ALWAYS,
            label: b.NW.string(b.t.r3LawM)
        }
    ],
    _ = (e) => {
        let t = e > 0 ? r()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function v(e, t) {
    let [n, a] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        r = (0, d.U)(a),
        E = (0, O.ZP)(e, !0);
    function v(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, g.UE.muted(t));
    }
    let h = b.NW.string(b.t.tbeRRE),
        y = b.NW.string(b.t.OYefmZ);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (h = b.NW.string(b.t.pNMCg4)), (y = b.NW.string(b.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (h = b.NW.string(b.t.LO3kaG)), (y = b.NW.string(b.t['s5/5fn']));
            break;
        case p.d4z.DM:
            (h = b.NW.format(b.t.byjuJi, { name: E })), (y = b.NW.format(b.t['eC+9rq'], { name: E }));
            break;
        default:
            (h = b.NW.string(b.t.tbeRRE)), (y = b.NW.string(b.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: y,
              subtext: r,
              action: () => v(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: h,
              action: () => {
                  v(!0),
                      (0, c.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: N().map((n) => {
                  let { value: a, label: r } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(a),
                          label: r,
                          action: () =>
                              (function (n) {
                                  e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = _(n);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, t);
                              })(a)
                      },
                      a
                  );
              })
          });
}
