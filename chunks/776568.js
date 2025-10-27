e.d(n, {
    ZP: () => C,
    k: () => b,
    u9: () => p,
}),
    e(388685);
var i = e(951288);
e(647438);
var a = e(913527),
    l = e.n(a),
    r = e(442837),
    s = e(481060),
    o = e(211739),
    d = e(87051),
    u = e(496729),
    c = e(777861),
    h = e(9156),
    f = e(621600),
    g = e(933557),
    v = e(981631),
    m = e(969943),
    Z = e(388032);
let b = () => [
        {
            value: m.Oe.MINUTES_15,
            label: Z.intl.string(Z.t["8ot6gv"]),
        },
        {
            value: m.Oe.HOURS_1,
            label: Z.intl.string(Z.t.UMWBZr),
        },
        {
            value: m.Oe.HOURS_3,
            label: Z.intl.string(Z.t.QmYWtu),
        },
        {
            value: m.Oe.HOURS_8,
            label: Z.intl.string(Z.t.EpAXPC),
        },
        {
            value: m.Oe.HOURS_24,
            label: Z.intl.string(Z.t["755t4q"]),
        },
        {
            value: m.Oe.ALWAYS,
            label: Z.intl.string(Z.t.r3LawO),
        },
    ],
    p = (t) => {
        let n = t > 0 ? l()().add(t, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: n,
            },
        };
    };
function C(t, n) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, l] = (0, r.Wu)([h.ZP], () => [
            h.ZP.isChannelMuted(t.guild_id, t.id),
            h.ZP.getChannelMuteConfig(t.guild_id, t.id),
        ]),
        m = (0, c.U)(l),
        C = (0, g.ZP)(t, !0);
    function _(n) {
        n && t.type === v.d4z.GUILD_CATEGORY && (0, o.c4)(t.id),
            d.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: n }, f.UE.muted(n));
    }
    let O = Z.intl.string(Z.t.tbeRRJ),
        N = Z.intl.string(Z.t.OYefme);
    switch (t.type) {
        case v.d4z.GUILD_CATEGORY:
            (O = Z.intl.string(Z.t.pNMCg2)), (N = Z.intl.string(Z.t.olaBeG));
            break;
        case v.d4z.GROUP_DM:
            (O = Z.intl.string(Z.t.LO3kaK)), (N = Z.intl.string(Z.t["s5/5fm"]));
            break;
        case v.d4z.DM:
            (O = e ? Z.intl.format(Z.t.byjuJm, { name: C }) : Z.intl.string(Z.t.LO3kaK)),
                (N = e ? Z.intl.format(Z.t["eC+9rj"], { name: C }) : Z.intl.string(Z.t["s5/5fm"]));
            break;
        default:
            (O = Z.intl.string(Z.t.tbeRRJ)), (N = Z.intl.string(Z.t.OYefme));
    }
    return a
        ? (0, i.jsx)(s.sNh, {
              id: "unmute-channel",
              label: N,
              subtext: m,
              action: () => _(!1),
          })
        : (0, i.jsx)(s.sNh, {
              id: "mute-channel",
              label: O,
              action: () => {
                  _(!0),
                      (0, u.sT)({
                          channelId: t.id,
                          location: "channel_context_menu",
                      });
              },
              children: b().map((e) => {
                  let { value: a, label: l } = e;
                  return (0, i.jsx)(
                      s.sNh,
                      {
                          id: "".concat(a),
                          label: l,
                          action: () =>
                              (function (e) {
                                  t.type === v.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                                  let i = p(e);
                                  d.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, f.ZB.Muted, n);
                              })(a),
                      },
                      a,
                  );
              }),
          });
}
