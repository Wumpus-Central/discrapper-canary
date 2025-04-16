n.d(t, {
    ZP: () => T,
    k: () => g,
    u9: () => h
}),
    n(388685);
var r = n(200651);
n(192379);
var a = n(913527),
    i = n.n(a),
    l = n(442837),
    u = n(481060),
    o = n(211739),
    c = n(87051),
    s = n(496729),
    d = n(777861),
    f = n(9156),
    _ = n(621600),
    N = n(933557),
    E = n(981631),
    m = n(969943),
    p = n(388032);
let g = () => [
        {
            value: m.Oe.MINUTES_15,
            label: p.NW.string(p.t['8ot6go'])
        },
        {
            value: m.Oe.HOURS_1,
            label: p.NW.string(p.t.UMWBZm)
        },
        {
            value: m.Oe.HOURS_3,
            label: p.NW.string(p.t.QmYWtr)
        },
        {
            value: m.Oe.HOURS_8,
            label: p.NW.string(p.t.EpAXPD)
        },
        {
            value: m.Oe.HOURS_24,
            label: p.NW.string(p.t['755t4u'])
        },
        {
            value: m.Oe.ALWAYS,
            label: p.NW.string(p.t.r3LawM)
        }
    ],
    h = (e) => {
        let t = e > 0 ? i()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function T(e, t) {
    let [n, a] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        i = (0, d.U)(a),
        m = (0, N.ZP)(e, !0);
    function T(t) {
        t && e.type === E.d4z.GUILD_CATEGORY && (0, o.c4)(e.id), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let C = p.NW.string(p.t.tbeRRE),
        A = p.NW.string(p.t.OYefmZ);
    switch (e.type) {
        case E.d4z.GUILD_CATEGORY:
            (C = p.NW.string(p.t.pNMCg4)), (A = p.NW.string(p.t.olaBeH));
            break;
        case E.d4z.GROUP_DM:
            (C = p.NW.string(p.t.LO3kaG)), (A = p.NW.string(p.t['s5/5fn']));
            break;
        case E.d4z.DM:
            (C = p.NW.format(p.t.byjuJi, { name: m })), (A = p.NW.format(p.t['eC+9rq'], { name: m }));
            break;
        default:
            (C = p.NW.string(p.t.tbeRRE)), (A = p.NW.string(p.t.OYefmZ));
    }
    return n
        ? (0, r.jsx)(u.sNh, {
              id: 'unmute-channel',
              label: A,
              subtext: i,
              action: () => T(!1)
          })
        : (0, r.jsx)(u.sNh, {
              id: 'mute-channel',
              label: C,
              action: () => {
                  T(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: g().map((n) => {
                  let { value: a, label: i } = n;
                  return (0, r.jsx)(
                      u.sNh,
                      {
                          id: ''.concat(a),
                          label: i,
                          action: () =>
                              (function (n) {
                                  e.type === E.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
                                  let r = h(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, _.ZB.Muted, t);
                              })(a)
                      },
                      a
                  );
              })
          });
}
