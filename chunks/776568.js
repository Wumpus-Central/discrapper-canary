t.d(n, {
    ZP: () => E,
    k: () => S,
    u9: () => I,
}),
    t(388685);
var i = t(54381);
t(473749);
var c = t(913527),
    l = t.n(c),
    a = t(442837),
    r = t(481060),
    o = t(211739),
    s = t(87051),
    u = t(777861),
    d = t(9156),
    f = t(621600),
    _ = t(933557),
    b = t(981631),
    g = t(969943),
    h = t(388032);
let S = () => [
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
    I = (e) => {
        let n = e > 0 ? l()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: n,
            },
        };
    };
function E(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [c, l] = (0, a.Wu)([d.ZP], () => [
            d.ZP.isChannelMuted(e.guild_id, e.id),
            d.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        g = (0, u.U)(l),
        E = (0, _.ZP)(e, !0);
    function C(n) {
        n && e.type === b.d4z.GUILD_CATEGORY && (0, o.c4)(e.id),
            s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, f.UE.muted(n));
    }
    let N = h.intl.string(h.t.tbeRRJ),
        m = h.intl.string(h.t.OYefme);
    switch (e.type) {
        case b.d4z.GUILD_CATEGORY:
            (N = h.intl.string(h.t.pNMCg2)), (m = h.intl.string(h.t.olaBeG));
            break;
        case b.d4z.GROUP_DM:
            (N = h.intl.string(h.t.LO3kaK)), (m = h.intl.string(h.t["s5/5fm"]));
            break;
        case b.d4z.DM:
            (N = t ? h.intl.format(h.t.byjuJm, { name: E }) : h.intl.string(h.t.LO3kaK)),
                (m = t ? h.intl.format(h.t["eC+9rj"], { name: E }) : h.intl.string(h.t["s5/5fm"]));
            break;
        default:
            (N = h.intl.string(h.t.tbeRRJ)), (m = h.intl.string(h.t.OYefme));
    }
    return c
        ? (0, i.jsx)(r.sNh, {
              id: "unmute-channel",
              label: m,
              subtext: g,
              action: () => C(!1),
          })
        : (0, i.jsx)(r.sNh, {
              id: "mute-channel",
              label: N,
              action: () => {
                  C(!0);
              },
              children: S().map((t) => {
                  let { value: c, label: l } = t;
                  return (0, i.jsx)(
                      r.sNh,
                      {
                          id: "".concat(c),
                          label: l,
                          action: () =>
                              (function (t) {
                                  e.type === b.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
                                  let i = I(t);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, f.ZB.Muted, n);
                              })(c),
                      },
                      c,
                  );
              }),
          });
}
