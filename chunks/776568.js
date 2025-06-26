n.d(t, {
    ZP: () => O,
    k: () => p,
    u9: () => m
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(211739),
    d = n(87051),
    u = n(496729),
    c = n(777861),
    f = n(9156),
    h = n(621600),
    g = n(933557),
    b = n(981631),
    v = n(969943),
    Z = n(388032);
let p = () => [
        {
            value: v.Oe.MINUTES_15,
            label: Z.intl.string(Z.t['8ot6go'])
        },
        {
            value: v.Oe.HOURS_1,
            label: Z.intl.string(Z.t.UMWBZm)
        },
        {
            value: v.Oe.HOURS_3,
            label: Z.intl.string(Z.t.QmYWtr)
        },
        {
            value: v.Oe.HOURS_8,
            label: Z.intl.string(Z.t.EpAXPD)
        },
        {
            value: v.Oe.HOURS_24,
            label: Z.intl.string(Z.t['755t4u'])
        },
        {
            value: v.Oe.ALWAYS,
            label: Z.intl.string(Z.t.r3LawM)
        }
    ],
    m = (e) => {
        let t = e > 0 ? l()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function O(e, t) {
    let [n, r] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        l = (0, c.U)(r),
        v = (0, g.ZP)(e, !0);
    function O(t) {
        t && e.type === b.d4z.GUILD_CATEGORY && (0, s.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, h.UE.muted(t));
    }
    let _ = Z.intl.string(Z.t.tbeRRE),
        j = Z.intl.string(Z.t.OYefmZ);
    switch (e.type) {
        case b.d4z.GUILD_CATEGORY:
            (_ = Z.intl.string(Z.t.pNMCg4)), (j = Z.intl.string(Z.t.olaBeH));
            break;
        case b.d4z.GROUP_DM:
            (_ = Z.intl.string(Z.t.LO3kaG)), (j = Z.intl.string(Z.t['s5/5fn']));
            break;
        case b.d4z.DM:
            (_ = Z.intl.format(Z.t.byjuJi, { name: v })), (j = Z.intl.format(Z.t['eC+9rq'], { name: v }));
            break;
        default:
            (_ = Z.intl.string(Z.t.tbeRRE)), (j = Z.intl.string(Z.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: j,
              subtext: l,
              action: () => O(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: _,
              action: () => {
                  O(!0),
                      (0, u.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: p().map((n) => {
                  let { value: r, label: l } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === b.d4z.GUILD_CATEGORY && (0, s.c4)(e.id);
                                  let i = m(n);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
