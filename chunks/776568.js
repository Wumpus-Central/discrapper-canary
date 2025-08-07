n.d(t, {
    ZP: () => A,
    k: () => g,
    u9: () => h,
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(211739),
    d = n(87051),
    s = n(496729),
    u = n(777861),
    f = n(9156),
    p = n(621600),
    b = n(933557),
    v = n(981631),
    _ = n(969943),
    O = n(388032);
let g = () => [
        {
            value: _.Oe.MINUTES_15,
            label: O.intl.string(O.t["8ot6go"]),
        },
        {
            value: _.Oe.HOURS_1,
            label: O.intl.string(O.t.UMWBZm),
        },
        {
            value: _.Oe.HOURS_3,
            label: O.intl.string(O.t.QmYWtr),
        },
        {
            value: _.Oe.HOURS_8,
            label: O.intl.string(O.t.EpAXPD),
        },
        {
            value: _.Oe.HOURS_24,
            label: O.intl.string(O.t["755t4u"]),
        },
        {
            value: _.Oe.ALWAYS,
            label: O.intl.string(O.t.r3LawM),
        },
    ],
    h = (e) => {
        let t = e > 0 ? a()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t,
            },
        };
    };
function A(e, t) {
    let [n, r] = (0, l.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        a = (0, u.U)(r),
        _ = (0, b.ZP)(e, !0);
    function A(t) {
        t && e.type === v.d4z.GUILD_CATEGORY && (0, c.c4)(e.id),
            d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, p.UE.muted(t));
    }
    let y = O.intl.string(O.t.tbeRRE),
        C = O.intl.string(O.t.OYefmZ);
    switch (e.type) {
        case v.d4z.GUILD_CATEGORY:
            (y = O.intl.string(O.t.pNMCg4)), (C = O.intl.string(O.t.olaBeH));
            break;
        case v.d4z.GROUP_DM:
            (y = O.intl.string(O.t.LO3kaG)), (C = O.intl.string(O.t["s5/5fn"]));
            break;
        case v.d4z.DM:
            (y = O.intl.format(O.t.byjuJi, { name: _ })), (C = O.intl.format(O.t["eC+9rq"], { name: _ }));
            break;
        default:
            (y = O.intl.string(O.t.tbeRRE)), (C = O.intl.string(O.t.OYefmZ));
    }
    return n
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: C,
              subtext: a,
              action: () => A(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: y,
              action: () => {
                  A(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: g().map((n) => {
                  let { value: r, label: a } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(r),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === v.d4z.GUILD_CATEGORY && (0, c.c4)(e.id);
                                  let i = h(n);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, p.ZB.Muted, t);
                              })(r),
                      },
                      r,
                  );
              }),
          });
}
