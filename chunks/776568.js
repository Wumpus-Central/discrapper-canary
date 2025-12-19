n.d(t, {
    ZP: () => h,
    k: () => v,
    u9: () => Z,
}),
    n(388685);
var r = n(54381);
n(473749);
var i = n(913527),
    l = n.n(i),
    u = n(442837),
    a = n(481060),
    o = n(211739),
    c = n(87051),
    d = n(777861),
    s = n(9156),
    f = n(621600),
    E = n(933557),
    g = n(981631),
    O = n(969943),
    p = n(388032);
let v = () => [
        {
            value: O.Oe.MINUTES_15,
            label: p.intl.string(p.t["8ot6gv"]),
        },
        {
            value: O.Oe.HOURS_1,
            label: p.intl.string(p.t.UMWBZr),
        },
        {
            value: O.Oe.HOURS_3,
            label: p.intl.string(p.t.QmYWtu),
        },
        {
            value: O.Oe.HOURS_8,
            label: p.intl.string(p.t.EpAXPC),
        },
        {
            value: O.Oe.HOURS_24,
            label: p.intl.string(p.t["755t4q"]),
        },
        {
            value: O.Oe.ALWAYS,
            label: p.intl.string(p.t.r3LawO),
        },
    ],
    Z = (e) => {
        let t = e > 0 ? l()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t,
            },
        };
    };
function h(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [i, l] = (0, u.Wu)([s.ZP], () => [
            s.ZP.isChannelMuted(e.guild_id, e.id),
            s.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        O = (0, d.U)(l),
        h = (0, E.ZP)(e, !0);
    function b(t) {
        t && e.type === g.d4z.GUILD_CATEGORY && (0, o.c4)(e.id),
            c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, f.UE.muted(t));
    }
    let y = p.intl.string(p.t.tbeRRJ),
        _ = p.intl.string(p.t.OYefme);
    switch (e.type) {
        case g.d4z.GUILD_CATEGORY:
            (y = p.intl.string(p.t.pNMCg2)), (_ = p.intl.string(p.t.olaBeG));
            break;
        case g.d4z.GROUP_DM:
            (y = p.intl.string(p.t.LO3kaK)), (_ = p.intl.string(p.t["s5/5fm"]));
            break;
        case g.d4z.DM:
            (y = n ? p.intl.format(p.t.byjuJm, { name: h }) : p.intl.string(p.t.LO3kaK)),
                (_ = n ? p.intl.format(p.t["eC+9rj"], { name: h }) : p.intl.string(p.t["s5/5fm"]));
            break;
        default:
            (y = p.intl.string(p.t.tbeRRJ)), (_ = p.intl.string(p.t.OYefme));
    }
    return i
        ? (0, r.jsx)(a.sNh, {
              id: "unmute-channel",
              label: _,
              subtext: O,
              action: () => b(!1),
          })
        : (0, r.jsx)(a.sNh, {
              id: "mute-channel",
              label: y,
              action: () => {
                  b(!0);
              },
              children: v().map((n) => {
                  let { value: i, label: l } = n;
                  return (0, r.jsx)(
                      a.sNh,
                      {
                          id: "".concat(i),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
                                  let r = Z(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, f.ZB.Muted, t);
                              })(i),
                      },
                      i,
                  );
              }),
          });
}
