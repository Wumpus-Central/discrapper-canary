n.d(t, {
    ZP: () => b,
    k: () => E,
    u9: () => _,
}),
    n(388685);
var i = n(951288);
n(647438);
var a = n(913527),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    s = n(211739),
    u = n(87051),
    c = n(496729),
    d = n(777861),
    f = n(9156),
    g = n(621600),
    O = n(933557),
    p = n(981631),
    v = n(969943),
    h = n(388032);
let E = () => [
        {
            value: v.Oe.MINUTES_15,
            label: h.intl.string(h.t["8ot6go"]),
        },
        {
            value: v.Oe.HOURS_1,
            label: h.intl.string(h.t.UMWBZm),
        },
        {
            value: v.Oe.HOURS_3,
            label: h.intl.string(h.t.QmYWtr),
        },
        {
            value: v.Oe.HOURS_8,
            label: h.intl.string(h.t.EpAXPD),
        },
        {
            value: v.Oe.HOURS_24,
            label: h.intl.string(h.t["755t4u"]),
        },
        {
            value: v.Oe.ALWAYS,
            label: h.intl.string(h.t.r3LawM),
        },
    ],
    _ = (e) => {
        let t = e > 0 ? l()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t,
            },
        };
    };
function b(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, l] = (0, r.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        v = (0, d.U)(l),
        b = (0, O.ZP)(e, !0);
    function C(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, s.c4)(e.id),
            u.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, g.UE.muted(t));
    }
    let y = h.intl.string(h.t.tbeRRE),
        N = h.intl.string(h.t.OYefmZ);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (y = h.intl.string(h.t.pNMCg4)), (N = h.intl.string(h.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (y = h.intl.string(h.t.LO3kaG)), (N = h.intl.string(h.t["s5/5fn"]));
            break;
        case p.d4z.DM:
            (y = n ? h.intl.format(h.t.byjuJi, { name: b }) : h.intl.string(h.t.LO3kaG)),
                (N = n ? h.intl.format(h.t["eC+9rq"], { name: b }) : h.intl.string(h.t["s5/5fn"]));
            break;
        default:
            (y = h.intl.string(h.t.tbeRRE)), (N = h.intl.string(h.t.OYefmZ));
    }
    return a
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: N,
              subtext: v,
              action: () => C(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: y,
              action: () => {
                  C(!0),
                      (0, c.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: E().map((n) => {
                  let { value: a, label: l } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(a),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === p.d4z.GUILD_CATEGORY && (0, s.c4)(e.id);
                                  let i = _(n);
                                  u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, t);
                              })(a),
                      },
                      a,
                  );
              }),
          });
}
