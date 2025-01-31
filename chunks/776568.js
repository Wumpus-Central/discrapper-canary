n.d(e, {
    ZP: () => A,
    k: () => h
}),
    n(47120);
var i = n(200651);
n(192379);
var a = n(913527),
    l = n.n(a),
    r = n(442837),
    u = n(481060),
    o = n(211739),
    s = n(87051),
    d = n(496729),
    c = n(777861),
    f = n(9156),
    E = n(621600),
    g = n(933557),
    _ = n(981631),
    v = n(969943),
    C = n(388032);
let h = () => [
        {
            value: v.Oe.MINUTES_15,
            label: C.intl.string(C.t['8ot6go'])
        },
        {
            value: v.Oe.HOURS_1,
            label: C.intl.string(C.t.UMWBZm)
        },
        {
            value: v.Oe.HOURS_3,
            label: C.intl.string(C.t.QmYWtr)
        },
        {
            value: v.Oe.HOURS_8,
            label: C.intl.string(C.t.EpAXPD)
        },
        {
            value: v.Oe.HOURS_24,
            label: C.intl.string(C.t['755t4u'])
        },
        {
            value: v.Oe.ALWAYS,
            label: C.intl.string(C.t.r3LawM)
        }
    ],
    p = (t) => {
        let e = t > 0 ? l()().add(t, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e
            }
        };
    };
function A(t, e) {
    let [n, a] = (0, r.Wu)([f.ZP], () => [f.ZP.isChannelMuted(t.guild_id, t.id), f.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
        l = (0, c.U)(a),
        v = (0, g.ZP)(t, !0);
    function A(e) {
        e && t.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(t.id), s.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, E.UE.muted(e));
    }
    let O = C.intl.string(C.t.tbeRRE),
        R = C.intl.string(C.t.OYefmZ);
    switch (t.type) {
        case _.d4z.GUILD_CATEGORY:
            (O = C.intl.string(C.t.pNMCg4)), (R = C.intl.string(C.t.olaBeH));
            break;
        case _.d4z.GROUP_DM:
            (O = C.intl.string(C.t.LO3kaG)), (R = C.intl.string(C.t['s5/5fn']));
            break;
        case _.d4z.DM:
            (O = C.intl.format(C.t.byjuJi, { name: v })), (R = C.intl.format(C.t['eC+9rq'], { name: v }));
            break;
        default:
            (O = C.intl.string(C.t.tbeRRE)), (R = C.intl.string(C.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(u.sNh, {
              id: 'unmute-channel',
              label: R,
              subtext: l,
              action: () => A(!1)
          })
        : (0, i.jsx)(u.sNh, {
              id: 'mute-channel',
              label: O,
              action: () => {
                  A(!0),
                      (0, d.s)({
                          channelId: t.id,
                          location: 'channel_context_menu'
                      });
              },
              children: h().map((n) => {
                  let { value: a, label: l } = n;
                  return (0, i.jsx)(
                      u.sNh,
                      {
                          id: ''.concat(a),
                          label: l,
                          action: () =>
                              (function (n) {
                                  t.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                                  let i = p(n);
                                  s.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, E.ZB.Muted, e);
                              })(a)
                      },
                      a
                  );
              })
          });
}
