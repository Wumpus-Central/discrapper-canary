n.d(t, {
    ZP: () => _,
    k: () => h,
    u9: () => m,
}),
    n(388685);
var i = n(951288);
n(647438);
var r = n(913527),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    u = n(211739),
    d = n(87051),
    s = n(496729),
    c = n(777861),
    f = n(9156),
    p = n(621600),
    b = n(933557),
    g = n(981631),
    v = n(969943),
    O = n(388032);
let h = () => [
        {
            value: v.Oe.MINUTES_15,
            label: O.intl.string(O.t["8ot6go"]),
        },
        {
            value: v.Oe.HOURS_1,
            label: O.intl.string(O.t.UMWBZm),
        },
        {
            value: v.Oe.HOURS_3,
            label: O.intl.string(O.t.QmYWtr),
        },
        {
            value: v.Oe.HOURS_8,
            label: O.intl.string(O.t.EpAXPD),
        },
        {
            value: v.Oe.HOURS_24,
            label: O.intl.string(O.t["755t4u"]),
        },
        {
            value: v.Oe.ALWAYS,
            label: O.intl.string(O.t.r3LawM),
        },
    ],
    m = (e) => {
        let t = e > 0 ? l()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t,
            },
        };
    };
function _(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, l] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        v = (0, c.U)(l),
        _ = (0, b.ZP)(e, !0);
    function y(t) {
        t && e.type === g.d4z.GUILD_CATEGORY && (0, u.c4)(e.id),
            d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, p.UE.muted(t));
    }
    let E = O.intl.string(O.t.tbeRRE),
        C = O.intl.string(O.t.OYefmZ);
    switch (e.type) {
        case g.d4z.GUILD_CATEGORY:
            (E = O.intl.string(O.t.pNMCg4)), (C = O.intl.string(O.t.olaBeH));
            break;
        case g.d4z.GROUP_DM:
            (E = O.intl.string(O.t.LO3kaG)), (C = O.intl.string(O.t["s5/5fn"]));
            break;
        case g.d4z.DM:
            (E = n ? O.intl.format(O.t.byjuJi, { name: _ }) : O.intl.string(O.t.LO3kaG)),
                (C = n ? O.intl.format(O.t["eC+9rq"], { name: _ }) : O.intl.string(O.t["s5/5fn"]));
            break;
        default:
            (E = O.intl.string(O.t.tbeRRE)), (C = O.intl.string(O.t.OYefmZ));
    }
    return r
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: C,
              subtext: v,
              action: () => y(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: E,
              action: () => {
                  y(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: h().map((n) => {
                  let { value: r, label: l } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(r),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = m(n);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, p.ZB.Muted, t);
                              })(r),
                      },
                      r,
                  );
              }),
          });
}
