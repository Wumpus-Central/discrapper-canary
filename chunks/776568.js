n.d(t, {
    ZP: () => h,
    k: () => _,
    u9: () => v
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    u = n(211739),
    c = n(87051),
    s = n(496729),
    d = n(777861),
    f = n(9156),
    g = n(621600),
    O = n(933557),
    p = n(981631),
    E = n(969943),
    b = n(388032);
let _ = () => [
        {
            value: E.Oe.MINUTES_15,
            label: b.intl.string(b.t['8ot6go'])
        },
        {
            value: E.Oe.HOURS_1,
            label: b.intl.string(b.t.UMWBZm)
        },
        {
            value: E.Oe.HOURS_3,
            label: b.intl.string(b.t.QmYWtr)
        },
        {
            value: E.Oe.HOURS_8,
            label: b.intl.string(b.t.EpAXPD)
        },
        {
            value: E.Oe.HOURS_24,
            label: b.intl.string(b.t['755t4u'])
        },
        {
            value: E.Oe.ALWAYS,
            label: b.intl.string(b.t.r3LawM)
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
function h(e, t) {
    let [n, r] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, d.U)(r),
        E = (0, O.ZP)(e, !0);
    function h(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, g.UE.muted(t));
    }
    let y = b.intl.string(b.t.tbeRRE),
        C = b.intl.string(b.t.OYefmZ);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (y = b.intl.string(b.t.pNMCg4)), (C = b.intl.string(b.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (y = b.intl.string(b.t.LO3kaG)), (C = b.intl.string(b.t['s5/5fn']));
            break;
        case p.d4z.DM:
            (y = b.intl.format(b.t.byjuJi, { name: E })), (C = b.intl.format(b.t['eC+9rq'], { name: E }));
            break;
        default:
            (y = b.intl.string(b.t.tbeRRE)), (C = b.intl.string(b.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: C,
              subtext: a,
              action: () => h(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: y,
              action: () => {
                  h(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: _().map((n) => {
                  let { value: r, label: a } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = v(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
