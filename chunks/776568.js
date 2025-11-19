e.d(n, {
    ZP: () => C,
    k: () => b,
    u9: () => p,
}),
    e(388685);
var i = e(54381);
e(473749);
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
    Z = e(969943),
    m = e(388032);
let b = () => [
        {
            value: Z.Oe.MINUTES_15,
            label: m.intl.string(m.t["8ot6gv"]),
        },
        {
            value: Z.Oe.HOURS_1,
            label: m.intl.string(m.t.UMWBZr),
        },
        {
            value: Z.Oe.HOURS_3,
            label: m.intl.string(m.t.QmYWtu),
        },
        {
            value: Z.Oe.HOURS_8,
            label: m.intl.string(m.t.EpAXPC),
        },
        {
            value: Z.Oe.HOURS_24,
            label: m.intl.string(m.t["755t4q"]),
        },
        {
            value: Z.Oe.ALWAYS,
            label: m.intl.string(m.t.r3LawO),
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
        Z = (0, c.U)(l),
        C = (0, g.ZP)(t, !0);
    function _(n) {
        n && t.type === v.d4z.GUILD_CATEGORY && (0, o.c4)(t.id),
            d.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: n }, f.UE.muted(n));
    }
    let O = m.intl.string(m.t.tbeRRJ),
        N = m.intl.string(m.t.OYefme);
    switch (t.type) {
        case v.d4z.GUILD_CATEGORY:
            (O = m.intl.string(m.t.pNMCg2)), (N = m.intl.string(m.t.olaBeG));
            break;
        case v.d4z.GROUP_DM:
            (O = m.intl.string(m.t.LO3kaK)), (N = m.intl.string(m.t["s5/5fm"]));
            break;
        case v.d4z.DM:
            (O = e ? m.intl.format(m.t.byjuJm, { name: C }) : m.intl.string(m.t.LO3kaK)),
                (N = e ? m.intl.format(m.t["eC+9rj"], { name: C }) : m.intl.string(m.t["s5/5fm"]));
            break;
        default:
            (O = m.intl.string(m.t.tbeRRJ)), (N = m.intl.string(m.t.OYefme));
    }
    return a
        ? (0, i.jsx)(s.sNh, {
              id: "unmute-channel",
              label: N,
              subtext: Z,
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
