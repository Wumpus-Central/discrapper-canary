(n.d(t, {
    ZP: () => I,
    k: () => C,
    u9: () => h
}),
    n(388685));
var a = n(255367);
n(73800);
var i = n(913527),
    o = n.n(i),
    r = n(442837),
    c = n(481060),
    l = n(211739),
    s = n(87051),
    d = n(496729),
    u = n(777861),
    _ = n(9156),
    p = n(621600),
    m = n(933557),
    g = n(981631),
    f = n(969943),
    b = n(388032);
let C = () => [
        {
            value: f.Oe.MINUTES_15,
            label: b.intl.string(b.t['8ot6go'])
        },
        {
            value: f.Oe.HOURS_1,
            label: b.intl.string(b.t.UMWBZm)
        },
        {
            value: f.Oe.HOURS_3,
            label: b.intl.string(b.t.QmYWtr)
        },
        {
            value: f.Oe.HOURS_8,
            label: b.intl.string(b.t.EpAXPD)
        },
        {
            value: f.Oe.HOURS_24,
            label: b.intl.string(b.t['755t4u'])
        },
        {
            value: f.Oe.ALWAYS,
            label: b.intl.string(b.t.r3LawM)
        }
    ],
    h = (e) => {
        let t = e > 0 ? o()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function I(e, t) {
    let [n, i] = (0, r.Wu)([_.ZP], () => [_.ZP.isChannelMuted(e.guild_id, e.id), _.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        o = (0, u.U)(i),
        f = (0, m.ZP)(e, !0);
    function I(t) {
        (t && e.type === g.d4z.GUILD_CATEGORY && (0, l.c4)(e.id), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, p.UE.muted(t)));
    }
    let T = b.intl.string(b.t.tbeRRE),
        y = b.intl.string(b.t.OYefmZ);
    switch (e.type) {
        case g.d4z.GUILD_CATEGORY:
            ((T = b.intl.string(b.t.pNMCg4)), (y = b.intl.string(b.t.olaBeH)));
            break;
        case g.d4z.GROUP_DM:
            ((T = b.intl.string(b.t.LO3kaG)), (y = b.intl.string(b.t['s5/5fn'])));
            break;
        case g.d4z.DM:
            ((T = b.intl.format(b.t.byjuJi, { name: f })), (y = b.intl.format(b.t['eC+9rq'], { name: f })));
            break;
        default:
            ((T = b.intl.string(b.t.tbeRRE)), (y = b.intl.string(b.t.OYefmZ)));
    }
    return n
        ? (0, a.jsx)(c.sNh, {
              id: 'unmute-channel',
              label: y,
              subtext: o,
              action: () => I(!1)
          })
        : (0, a.jsx)(c.sNh, {
              id: 'mute-channel',
              label: T,
              action: () => {
                  (I(!0),
                      (0, d.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      }));
              },
              children: C().map((n) => {
                  let { value: i, label: o } = n;
                  return (0, a.jsx)(
                      c.sNh,
                      {
                          id: ''.concat(i),
                          label: o,
                          action: () =>
                              (function (n) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                                  let a = h(n);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, a, p.ZB.Muted, t);
                              })(i)
                      },
                      i
                  );
              })
          });
}
