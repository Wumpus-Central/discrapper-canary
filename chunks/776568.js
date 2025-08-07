e.d(n, {
    ZP: () => m,
    k: () => b,
    u9: () => C,
}),
    e(388685);
var i = e(255367);
e(73800);
var a = e(913527),
    l = e.n(a),
    r = e(442837),
    o = e(481060),
    s = e(211739),
    d = e(87051),
    u = e(496729),
    c = e(777861),
    f = e(9156),
    h = e(621600),
    v = e(933557),
    g = e(981631),
    Z = e(969943),
    p = e(388032);
let b = () => [
        {
            value: Z.Oe.MINUTES_15,
            label: p.intl.string(p.t["8ot6go"]),
        },
        {
            value: Z.Oe.HOURS_1,
            label: p.intl.string(p.t.UMWBZm),
        },
        {
            value: Z.Oe.HOURS_3,
            label: p.intl.string(p.t.QmYWtr),
        },
        {
            value: Z.Oe.HOURS_8,
            label: p.intl.string(p.t.EpAXPD),
        },
        {
            value: Z.Oe.HOURS_24,
            label: p.intl.string(p.t["755t4u"]),
        },
        {
            value: Z.Oe.ALWAYS,
            label: p.intl.string(p.t.r3LawM),
        },
    ],
    C = (t) => {
        let n = t > 0 ? l()().add(t, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: n,
            },
        };
    };
function m(t, n) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, l] = (0, r.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(t.guild_id, t.id),
            f.ZP.getChannelMuteConfig(t.guild_id, t.id),
        ]),
        Z = (0, c.U)(l),
        m = (0, v.ZP)(t, !0);
    function _(n) {
        n && t.type === g.d4z.GUILD_CATEGORY && (0, s.c4)(t.id),
            d.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: n }, h.UE.muted(n));
    }
    let E = p.intl.string(p.t.tbeRRE),
        O = p.intl.string(p.t.OYefmZ);
    switch (t.type) {
        case g.d4z.GUILD_CATEGORY:
            (E = p.intl.string(p.t.pNMCg4)), (O = p.intl.string(p.t.olaBeH));
            break;
        case g.d4z.GROUP_DM:
            (E = p.intl.string(p.t.LO3kaG)), (O = p.intl.string(p.t["s5/5fn"]));
            break;
        case g.d4z.DM:
            (E = e ? p.intl.format(p.t.byjuJi, { name: m }) : p.intl.string(p.t.LO3kaG)),
                (O = e ? p.intl.format(p.t["eC+9rq"], { name: m }) : p.intl.string(p.t["s5/5fn"]));
            break;
        default:
            (E = p.intl.string(p.t.tbeRRE)), (O = p.intl.string(p.t.OYefmZ));
    }
    return a
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: O,
              subtext: Z,
              action: () => _(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: E,
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
                      o.sNh,
                      {
                          id: "".concat(a),
                          label: l,
                          action: () =>
                              (function (e) {
                                  t.type === g.d4z.GUILD_CATEGORY && (0, s.c4)(t.id);
                                  let i = C(e);
                                  d.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, h.ZB.Muted, n);
                              })(a),
                      },
                      a,
                  );
              }),
          });
}
