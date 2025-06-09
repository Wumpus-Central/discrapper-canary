n.d(e, {
    ZP: () => j,
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
    c = n(211739),
    s = n(87051),
    u = n(496729),
    d = n(777861),
    f = n(9156),
    h = n(621600),
    b = n(933557),
    g = n(981631),
    O = n(969943),
    Z = n(388032);
let p = () => [
        {
            value: O.Oe.MINUTES_15,
            label: Z.intl.string(Z.t['8ot6go'])
        },
        {
            value: O.Oe.HOURS_1,
            label: Z.intl.string(Z.t.UMWBZm)
        },
        {
            value: O.Oe.HOURS_3,
            label: Z.intl.string(Z.t.QmYWtr)
        },
        {
            value: O.Oe.HOURS_8,
            label: Z.intl.string(Z.t.EpAXPD)
        },
        {
            value: O.Oe.HOURS_24,
            label: Z.intl.string(Z.t['755t4u'])
        },
        {
            value: O.Oe.ALWAYS,
            label: Z.intl.string(Z.t.r3LawM)
        }
    ],
    m = (t) => {
        let e = t > 0 ? l()().add(t, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e
            }
        };
    };
function j(t, e) {
    let [n, r] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(t.guild_id, t.id), f.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
        l = (0, d.U)(r),
        O = (0, b.ZP)(t, !0);
    function j(e) {
        e && t.type === g.d4z.GUILD_CATEGORY && (0, c.c4)(t.id), s.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, h.UE.muted(e));
    }
    let v = Z.intl.string(Z.t.tbeRRE),
        _ = Z.intl.string(Z.t.OYefmZ);
    switch (t.type) {
        case g.d4z.GUILD_CATEGORY:
            (v = Z.intl.string(Z.t.pNMCg4)), (_ = Z.intl.string(Z.t.olaBeH));
            break;
        case g.d4z.GROUP_DM:
            (v = Z.intl.string(Z.t.LO3kaG)), (_ = Z.intl.string(Z.t['s5/5fn']));
            break;
        case g.d4z.DM:
            (v = Z.intl.format(Z.t.byjuJi, { name: O })), (_ = Z.intl.format(Z.t['eC+9rq'], { name: O }));
            break;
        default:
            (v = Z.intl.string(Z.t.tbeRRE)), (_ = Z.intl.string(Z.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: _,
              subtext: l,
              action: () => j(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: v,
              action: () => {
                  j(!0),
                      (0, u.sT)({
                          channelId: t.id,
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
                                  t.type === g.d4z.GUILD_CATEGORY && (0, c.c4)(t.id);
                                  let i = m(n);
                                  s.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, h.ZB.Muted, e);
                              })(r)
                      },
                      r
                  );
              })
          });
}
