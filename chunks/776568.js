n.d(t, {
    ZP: () => A,
    k: () => g,
    u9: () => v
}),
    n(388685);
var i = n(200651);
n(192379);
var r = n(913527),
    a = n.n(r),
    l = n(442837),
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
    O = n(388032);
let g = () => [
        {
            value: p.Oe.MINUTES_15,
            label: O.NW.string(O.t['8ot6go'])
        },
        {
            value: p.Oe.HOURS_1,
            label: O.NW.string(O.t.UMWBZm)
        },
        {
            value: p.Oe.HOURS_3,
            label: O.NW.string(O.t.QmYWtr)
        },
        {
            value: p.Oe.HOURS_8,
            label: O.NW.string(O.t.EpAXPD)
        },
        {
            value: p.Oe.HOURS_24,
            label: O.NW.string(O.t['755t4u'])
        },
        {
            value: p.Oe.ALWAYS,
            label: O.NW.string(O.t.r3LawM)
        }
    ],
    v = (e) => {
        let t = e > 0 ? a()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function A(e, t) {
    let [n, r] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, s.U)(r),
        p = (0, E.ZP)(e, !0);
    function A(t) {
        t && e.type === h.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let y = O.NW.string(O.t.tbeRRE),
        b = O.NW.string(O.t.OYefmZ);
    switch (e.type) {
        case h.d4z.GUILD_CATEGORY:
            (y = O.NW.string(O.t.pNMCg4)), (b = O.NW.string(O.t.olaBeH));
            break;
        case h.d4z.GROUP_DM:
            (y = O.NW.string(O.t.LO3kaG)), (b = O.NW.string(O.t['s5/5fn']));
            break;
        case h.d4z.DM:
            (y = O.NW.format(O.t.byjuJi, { name: p })), (b = O.NW.format(O.t['eC+9rq'], { name: p }));
            break;
        default:
            (y = O.NW.string(O.t.tbeRRE)), (b = O.NW.string(O.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: b,
              subtext: a,
              action: () => A(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: y,
              action: () => {
                  A(!0),
                      (0, c.s)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: g().map((n) => {
                  let { value: r, label: a } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === h.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = v(n);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
