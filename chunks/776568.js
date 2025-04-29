n.d(t, {
    ZP: () => y,
    k: () => g,
    u9: () => v
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
    l = n.n(r),
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
    O = n(388032);
let g = () => [
        {
            value: p.Oe.MINUTES_15,
            label: O.intl.string(O.t['8ot6go'])
        },
        {
            value: p.Oe.HOURS_1,
            label: O.intl.string(O.t.UMWBZm)
        },
        {
            value: p.Oe.HOURS_3,
            label: O.intl.string(O.t.QmYWtr)
        },
        {
            value: p.Oe.HOURS_8,
            label: O.intl.string(O.t.EpAXPD)
        },
        {
            value: p.Oe.HOURS_24,
            label: O.intl.string(O.t['755t4u'])
        },
        {
            value: p.Oe.ALWAYS,
            label: O.intl.string(O.t.r3LawM)
        }
    ],
    v = (e) => {
        let t = e > 0 ? l()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function y(e, t) {
    let [n, r] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        l = (0, s.U)(r),
        p = (0, E.ZP)(e, !0);
    function y(t) {
        t && e.type === h.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let A = O.intl.string(O.t.tbeRRE),
        b = O.intl.string(O.t.OYefmZ);
    switch (e.type) {
        case h.d4z.GUILD_CATEGORY:
            (A = O.intl.string(O.t.pNMCg4)), (b = O.intl.string(O.t.olaBeH));
            break;
        case h.d4z.GROUP_DM:
            (A = O.intl.string(O.t.LO3kaG)), (b = O.intl.string(O.t['s5/5fn']));
            break;
        case h.d4z.DM:
            (A = O.intl.format(O.t.byjuJi, { name: p })), (b = O.intl.format(O.t['eC+9rq'], { name: p }));
            break;
        default:
            (A = O.intl.string(O.t.tbeRRE)), (b = O.intl.string(O.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: b,
              subtext: l,
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
              children: g().map((n) => {
                  let { value: r, label: l } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: l,
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
