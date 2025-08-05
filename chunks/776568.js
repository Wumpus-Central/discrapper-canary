(n.d(t, {
    ZP: () => C,
    k: () => b,
    u9: () => g
}),
    n(388685));
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
    _ = n(621600),
    E = n(933557),
    p = n(981631),
    h = n(969943),
    A = n(388032);
let b = () => [
        {
            value: h.Oe.MINUTES_15,
            label: A.intl.string(A.t['8ot6go'])
        },
        {
            value: h.Oe.HOURS_1,
            label: A.intl.string(A.t.UMWBZm)
        },
        {
            value: h.Oe.HOURS_3,
            label: A.intl.string(A.t.QmYWtr)
        },
        {
            value: h.Oe.HOURS_8,
            label: A.intl.string(A.t.EpAXPD)
        },
        {
            value: h.Oe.HOURS_24,
            label: A.intl.string(A.t['755t4u'])
        },
        {
            value: h.Oe.ALWAYS,
            label: A.intl.string(A.t.r3LawM)
        }
    ],
    g = (e) => {
        let t = e > 0 ? a()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function C(e, t) {
    let [n, r] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, d.U)(r),
        h = (0, E.ZP)(e, !0);
    function C(t) {
        (t && e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t)));
    }
    let T = A.intl.string(A.t.tbeRRE),
        y = A.intl.string(A.t.OYefmZ);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            ((T = A.intl.string(A.t.pNMCg4)), (y = A.intl.string(A.t.olaBeH)));
            break;
        case p.d4z.GROUP_DM:
            ((T = A.intl.string(A.t.LO3kaG)), (y = A.intl.string(A.t['s5/5fn'])));
            break;
        case p.d4z.DM:
            ((T = A.intl.format(A.t.byjuJi, { name: h })), (y = A.intl.format(A.t['eC+9rq'], { name: h })));
            break;
        default:
            ((T = A.intl.string(A.t.tbeRRE)), (y = A.intl.string(A.t.OYefmZ)));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: y,
              subtext: a,
              action: () => C(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: T,
              action: () => {
                  (C(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      }));
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
                                  let i = g(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
