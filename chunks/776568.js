n.d(t, {
    ZP: () => E,
    k: () => h,
    u9: () => R,
}),
    n(388685);
var i = n(951288);
n(647438);
var a = n(913527),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    u = n(211739),
    d = n(87051),
    s = n(496729),
    f = n(777861),
    c = n(9156),
    _ = n(621600),
    p = n(933557),
    v = n(981631),
    C = n(969943),
    g = n(388032);
let h = () => [
        {
            value: C.Oe.MINUTES_15,
            label: g.intl.string(g.t["8ot6gv"]),
        },
        {
            value: C.Oe.HOURS_1,
            label: g.intl.string(g.t.UMWBZr),
        },
        {
            value: C.Oe.HOURS_3,
            label: g.intl.string(g.t.QmYWtu),
        },
        {
            value: C.Oe.HOURS_8,
            label: g.intl.string(g.t.EpAXPC),
        },
        {
            value: C.Oe.HOURS_24,
            label: g.intl.string(g.t["755t4q"]),
        },
        {
            value: C.Oe.ALWAYS,
            label: g.intl.string(g.t.r3LawO),
        },
    ],
    R = (e) => {
        let t = e > 0 ? l()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t,
            },
        };
    };
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, l] = (0, r.Wu)([c.ZP], () => [
            c.ZP.isChannelMuted(e.guild_id, e.id),
            c.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        C = (0, f.U)(l),
        E = (0, p.ZP)(e, !0);
    function A(t) {
        t && e.type === v.d4z.GUILD_CATEGORY && (0, u.c4)(e.id),
            d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let I = g.intl.string(g.t.tbeRRJ),
        O = g.intl.string(g.t.OYefme);
    switch (e.type) {
        case v.d4z.GUILD_CATEGORY:
            (I = g.intl.string(g.t.pNMCg2)), (O = g.intl.string(g.t.olaBeG));
            break;
        case v.d4z.GROUP_DM:
            (I = g.intl.string(g.t.LO3kaK)), (O = g.intl.string(g.t["s5/5fm"]));
            break;
        case v.d4z.DM:
            (I = n ? g.intl.format(g.t.byjuJm, { name: E }) : g.intl.string(g.t.LO3kaK)),
                (O = n ? g.intl.format(g.t["eC+9rj"], { name: E }) : g.intl.string(g.t["s5/5fm"]));
            break;
        default:
            (I = g.intl.string(g.t.tbeRRJ)), (O = g.intl.string(g.t.OYefme));
    }
    return a
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: O,
              subtext: C,
              action: () => A(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: I,
              action: () => {
                  A(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: h().map((n) => {
                  let { value: a, label: l } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(a),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === v.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = R(n);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t);
                              })(a),
                      },
                      a,
                  );
              }),
          });
}
