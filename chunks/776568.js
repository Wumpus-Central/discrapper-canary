(e.d(n, {
    ZP: () => O,
    k: () => p,
    u9: () => m
}),
    e(388685));
var i = e(255367);
e(73800);
var r = e(913527),
    l = e.n(r),
    a = e(442837),
    o = e(481060),
    s = e(211739),
    d = e(87051),
    u = e(496729),
    c = e(777861),
    f = e(9156),
    h = e(621600),
    v = e(933557),
    g = e(981631),
    Z = e(969943),
    b = e(388032);
let p = () => [
        {
            value: Z.Oe.MINUTES_15,
            label: b.intl.string(b.t['8ot6go'])
        },
        {
            value: Z.Oe.HOURS_1,
            label: b.intl.string(b.t.UMWBZm)
        },
        {
            value: Z.Oe.HOURS_3,
            label: b.intl.string(b.t.QmYWtr)
        },
        {
            value: Z.Oe.HOURS_8,
            label: b.intl.string(b.t.EpAXPD)
        },
        {
            value: Z.Oe.HOURS_24,
            label: b.intl.string(b.t['755t4u'])
        },
        {
            value: Z.Oe.ALWAYS,
            label: b.intl.string(b.t.r3LawM)
        }
    ],
    m = (t) => {
        let n = t > 0 ? l()().add(t, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: n
            }
        };
    };
function O(t, n) {
    let [e, r] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(t.guild_id, t.id), f.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
        l = (0, c.U)(r),
        Z = (0, v.ZP)(t, !0);
    function O(n) {
        (n && t.type === g.d4z.GUILD_CATEGORY && (0, s.c4)(t.id), d.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: n }, h.UE.muted(n)));
    }
    let _ = b.intl.string(b.t.tbeRRE),
        j = b.intl.string(b.t.OYefmZ);
    switch (t.type) {
        case g.d4z.GUILD_CATEGORY:
            ((_ = b.intl.string(b.t.pNMCg4)), (j = b.intl.string(b.t.olaBeH)));
            break;
        case g.d4z.GROUP_DM:
            ((_ = b.intl.string(b.t.LO3kaG)), (j = b.intl.string(b.t['s5/5fn'])));
            break;
        case g.d4z.DM:
            ((_ = b.intl.format(b.t.byjuJi, { name: Z })), (j = b.intl.format(b.t['eC+9rq'], { name: Z })));
            break;
        default:
            ((_ = b.intl.string(b.t.tbeRRE)), (j = b.intl.string(b.t.OYefmZ)));
    }
    return e
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
                  (O(!0),
                      (0, u.sT)({
                          channelId: t.id,
                          location: 'channel_context_menu'
                      }));
              },
              children: p().map((e) => {
                  let { value: r, label: l } = e;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: l,
                          action: () =>
                              (function (e) {
                                  t.type === g.d4z.GUILD_CATEGORY && (0, s.c4)(t.id);
                                  let i = m(e);
                                  d.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, h.ZB.Muted, n);
                              })(r)
                      },
                      r
                  );
              })
          });
}
