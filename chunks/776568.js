n.d(t, {
    ZP: () => b,
    k: () => Z,
    u9: () => h,
}),
    n(388685);
var i = n(54381);
n(473749);
var r = n(913527),
    l = n.n(r),
    u = n(442837),
    a = n(481060),
    o = n(211739),
    c = n(87051),
    s = n(496729),
    d = n(777861),
    f = n(9156),
    E = n(621600),
    g = n(933557),
    O = n(981631),
    p = n(969943),
    v = n(388032);
let Z = () => [
        {
            value: p.Oe.MINUTES_15,
            label: v.intl.string(v.t["8ot6gv"]),
        },
        {
            value: p.Oe.HOURS_1,
            label: v.intl.string(v.t.UMWBZr),
        },
        {
            value: p.Oe.HOURS_3,
            label: v.intl.string(v.t.QmYWtu),
        },
        {
            value: p.Oe.HOURS_8,
            label: v.intl.string(v.t.EpAXPC),
        },
        {
            value: p.Oe.HOURS_24,
            label: v.intl.string(v.t["755t4q"]),
        },
        {
            value: p.Oe.ALWAYS,
            label: v.intl.string(v.t.r3LawO),
        },
    ],
    h = (e) => {
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
        [r, l] = (0, u.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        p = (0, d.U)(l),
        b = (0, g.ZP)(e, !0);
    function _(t) {
        t && e.type === O.d4z.GUILD_CATEGORY && (0, o.c4)(e.id),
            c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, E.UE.muted(t));
    }
    let y = v.intl.string(v.t.tbeRRJ),
        N = v.intl.string(v.t.OYefme);
    switch (e.type) {
        case O.d4z.GUILD_CATEGORY:
            (y = v.intl.string(v.t.pNMCg2)), (N = v.intl.string(v.t.olaBeG));
            break;
        case O.d4z.GROUP_DM:
            (y = v.intl.string(v.t.LO3kaK)), (N = v.intl.string(v.t["s5/5fm"]));
            break;
        case O.d4z.DM:
            (y = n ? v.intl.format(v.t.byjuJm, { name: b }) : v.intl.string(v.t.LO3kaK)),
                (N = n ? v.intl.format(v.t["eC+9rj"], { name: b }) : v.intl.string(v.t["s5/5fm"]));
            break;
        default:
            (y = v.intl.string(v.t.tbeRRJ)), (N = v.intl.string(v.t.OYefme));
    }
    return r
        ? (0, i.jsx)(a.sNh, {
              id: "unmute-channel",
              label: N,
              subtext: p,
              action: () => _(!1),
          })
        : (0, i.jsx)(a.sNh, {
              id: "mute-channel",
              label: y,
              action: () => {
                  _(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: Z().map((n) => {
                  let { value: r, label: l } = n;
                  return (0, i.jsx)(
                      a.sNh,
                      {
                          id: "".concat(r),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === O.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
                                  let i = h(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, E.ZB.Muted, t);
                              })(r),
                      },
                      r,
                  );
              }),
          });
}
