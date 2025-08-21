n.d(t, {
    ZP: () => v,
    k: () => p,
    u9: () => m,
}),
    n(388685);
var i = n(951288);
n(647438);
var l = n(913527),
    a = n.n(l),
    r = n(442837),
    o = n(481060),
    c = n(211739),
    u = n(87051),
    d = n(496729),
    s = n(777861),
    f = n(9156),
    b = n(621600),
    _ = n(933557),
    g = n(981631),
    h = n(969943),
    O = n(388032);
let p = () => [
        {
            value: h.Oe.MINUTES_15,
            label: O.intl.string(O.t["8ot6go"]),
        },
        {
            value: h.Oe.HOURS_1,
            label: O.intl.string(O.t.UMWBZm),
        },
        {
            value: h.Oe.HOURS_3,
            label: O.intl.string(O.t.QmYWtr),
        },
        {
            value: h.Oe.HOURS_8,
            label: O.intl.string(O.t.EpAXPD),
        },
        {
            value: h.Oe.HOURS_24,
            label: O.intl.string(O.t["755t4u"]),
        },
        {
            value: h.Oe.ALWAYS,
            label: O.intl.string(O.t.r3LawM),
        },
    ],
    m = (e) => {
        let t = e > 0 ? a()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t,
            },
        };
    };
function v(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, a] = (0, r.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        h = (0, s.U)(a),
        v = (0, _.ZP)(e, !0);
    function C(t) {
        t && e.type === g.d4z.GUILD_CATEGORY && (0, c.c4)(e.id),
            u.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, b.UE.muted(t));
    }
    let S = O.intl.string(O.t.tbeRRE),
        Z = O.intl.string(O.t.OYefmZ);
    switch (e.type) {
        case g.d4z.GUILD_CATEGORY:
            (S = O.intl.string(O.t.pNMCg4)), (Z = O.intl.string(O.t.olaBeH));
            break;
        case g.d4z.GROUP_DM:
            (S = O.intl.string(O.t.LO3kaG)), (Z = O.intl.string(O.t["s5/5fn"]));
            break;
        case g.d4z.DM:
            (S = n ? O.intl.format(O.t.byjuJi, { name: v }) : O.intl.string(O.t.LO3kaG)),
                (Z = n ? O.intl.format(O.t["eC+9rq"], { name: v }) : O.intl.string(O.t["s5/5fn"]));
            break;
        default:
            (S = O.intl.string(O.t.tbeRRE)), (Z = O.intl.string(O.t.OYefmZ));
    }
    return l
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: Z,
              subtext: h,
              action: () => C(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: S,
              action: () => {
                  C(!0),
                      (0, d.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: p().map((n) => {
                  let { value: l, label: a } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(l),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, c.c4)(e.id);
                                  let i = m(n);
                                  u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, b.ZB.Muted, t);
                              })(l),
                      },
                      l,
                  );
              }),
          });
}
