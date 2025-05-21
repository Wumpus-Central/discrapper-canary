n.d(t, {
    ZP: () => _,
    k: () => Z,
    u9: () => O
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    d = n(211739),
    u = n(87051),
    s = n(496729),
    c = n(777861),
    f = n(9156),
    h = n(621600),
    v = n(933557),
    g = n(981631),
    p = n(969943),
    b = n(388032);
let Z = () => [
        {
            value: p.Oe.MINUTES_15,
            label: b.intl.string(b.t['8ot6go'])
        },
        {
            value: p.Oe.HOURS_1,
            label: b.intl.string(b.t.UMWBZm)
        },
        {
            value: p.Oe.HOURS_3,
            label: b.intl.string(b.t.QmYWtr)
        },
        {
            value: p.Oe.HOURS_8,
            label: b.intl.string(b.t.EpAXPD)
        },
        {
            value: p.Oe.HOURS_24,
            label: b.intl.string(b.t['755t4u'])
        },
        {
            value: p.Oe.ALWAYS,
            label: b.intl.string(b.t.r3LawM)
        }
    ],
    O = (e) => {
        let t = e > 0 ? a()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t
            }
        };
    };
function _(e, t) {
    let [n, r] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, c.U)(r),
        p = (0, v.ZP)(e, !0);
    function _(t) {
        t && e.type === g.d4z.GUILD_CATEGORY && (0, d.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, h.UE.muted(t));
    }
    let m = b.intl.string(b.t.tbeRRE),
        E = b.intl.string(b.t.OYefmZ);
    switch (e.type) {
        case g.d4z.GUILD_CATEGORY:
            (m = b.intl.string(b.t.pNMCg4)), (E = b.intl.string(b.t.olaBeH));
            break;
        case g.d4z.GROUP_DM:
            (m = b.intl.string(b.t.LO3kaG)), (E = b.intl.string(b.t['s5/5fn']));
            break;
        case g.d4z.DM:
            (m = b.intl.format(b.t.byjuJi, { name: p })), (E = b.intl.format(b.t['eC+9rq'], { name: p }));
            break;
        default:
            (m = b.intl.string(b.t.tbeRRE)), (E = b.intl.string(b.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: E,
              subtext: a,
              action: () => _(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: m,
              action: () => {
                  _(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: Z().map((n) => {
                  let { value: r, label: a } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, d.c4)(e.id);
                                  let i = O(n);
                                  u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, t);
                              })(r)
                      },
                      r
                  );
              })
          });
}
