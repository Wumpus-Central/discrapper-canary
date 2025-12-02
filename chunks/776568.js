n.d(t, {
    ZP: () => m,
    k: () => C,
    u9: () => R,
}),
    n(388685);
var i = n(54381);
n(473749);
var a = n(913527),
    l = n.n(a),
    r = n(442837),
    u = n(481060),
    o = n(211739),
    d = n(87051),
    s = n(496729),
    f = n(777861),
    c = n(9156),
    _ = n(621600),
    v = n(933557),
    p = n(981631),
    g = n(969943),
    h = n(388032);
let C = () => [
        {
            value: g.Oe.MINUTES_15,
            label: h.intl.string(h.t["8ot6gv"]),
        },
        {
            value: g.Oe.HOURS_1,
            label: h.intl.string(h.t.UMWBZr),
        },
        {
            value: g.Oe.HOURS_3,
            label: h.intl.string(h.t.QmYWtu),
        },
        {
            value: g.Oe.HOURS_8,
            label: h.intl.string(h.t.EpAXPC),
        },
        {
            value: g.Oe.HOURS_24,
            label: h.intl.string(h.t["755t4q"]),
        },
        {
            value: g.Oe.ALWAYS,
            label: h.intl.string(h.t.r3LawO),
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
function m(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, l] = (0, r.Wu)([c.ZP], () => [
            c.ZP.isChannelMuted(e.guild_id, e.id),
            c.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        g = (0, f.U)(l),
        m = (0, v.ZP)(e, !0);
    function A(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id),
            d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let E = h.intl.string(h.t.tbeRRJ),
        I = h.intl.string(h.t.OYefme);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (E = h.intl.string(h.t.pNMCg2)), (I = h.intl.string(h.t.olaBeG));
            break;
        case p.d4z.GROUP_DM:
            (E = h.intl.string(h.t.LO3kaK)), (I = h.intl.string(h.t["s5/5fm"]));
            break;
        case p.d4z.DM:
            (E = n ? h.intl.format(h.t.byjuJm, { name: m }) : h.intl.string(h.t.LO3kaK)),
                (I = n ? h.intl.format(h.t["eC+9rj"], { name: m }) : h.intl.string(h.t["s5/5fm"]));
            break;
        default:
            (E = h.intl.string(h.t.tbeRRJ)), (I = h.intl.string(h.t.OYefme));
    }
    return a
        ? (0, i.jsx)(u.sNh, {
              id: "unmute-channel",
              label: I,
              subtext: g,
              action: () => A(!1),
          })
        : (0, i.jsx)(u.sNh, {
              id: "mute-channel",
              label: E,
              action: () => {
                  A(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: C().map((n) => {
                  let { value: a, label: l } = n;
                  return (0, i.jsx)(
                      u.sNh,
                      {
                          id: "".concat(a),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
                                  let i = R(n);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t);
                              })(a),
                      },
                      a,
                  );
              }),
          });
}
