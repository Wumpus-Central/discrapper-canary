t.d(n, {
    ZP: () => O,
    k: () => Z,
    u9: () => _
}),
    t(388685);
var i = t(255367);
t(73800);
var r = t(913527),
    a = t.n(r),
    l = t(442837),
    o = t(481060),
    d = t(211739),
    u = t(87051),
    s = t(496729),
    c = t(777861),
    f = t(9156),
    h = t(621600),
    v = t(933557),
    g = t(981631),
    p = t(969943),
    b = t(388032);
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
    _ = (e) => {
        let n = e > 0 ? a()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: n
            }
        };
    };
function O(e, n) {
    let [t, r] = (0, l.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
        a = (0, c.U)(r),
        p = (0, v.ZP)(e, !0);
    function O(n) {
        n && e.type === g.d4z.GUILD_CATEGORY && (0, d.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, h.UE.muted(n));
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
    return t
        ? (0, i.jsx)(o.sNh, {
              id: 'unmute-channel',
              label: E,
              subtext: a,
              action: () => O(!1)
          })
        : (0, i.jsx)(o.sNh, {
              id: 'mute-channel',
              label: m,
              action: () => {
                  O(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: 'channel_context_menu'
                      });
              },
              children: Z().map((t) => {
                  let { value: r, label: a } = t;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: ''.concat(r),
                          label: a,
                          action: () =>
                              (function (t) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, d.c4)(e.id);
                                  let i = _(t);
                                  u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, n);
                              })(r)
                      },
                      r
                  );
              })
          });
}
