n.d(t, {
    ZP: () => h,
    k: () => O,
    u9: () => C,
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
    a = n.n(r),
    o = n(442837),
    l = n(481060),
    c = n(211739),
    s = n(87051),
    u = n(496729),
    d = n(777861),
    f = n(9156),
    p = n(621600),
    b = n(933557),
    g = n(981631),
    _ = n(969943),
    v = n(388032);
let O = () => [
        {
            value: _.Oe.MINUTES_15,
            label: v.intl.string(v.t["8ot6go"]),
        },
        {
            value: _.Oe.HOURS_1,
            label: v.intl.string(v.t.UMWBZm),
        },
        {
            value: _.Oe.HOURS_3,
            label: v.intl.string(v.t.QmYWtr),
        },
        {
            value: _.Oe.HOURS_8,
            label: v.intl.string(v.t.EpAXPD),
        },
        {
            value: _.Oe.HOURS_24,
            label: v.intl.string(v.t["755t4u"]),
        },
        {
            value: _.Oe.ALWAYS,
            label: v.intl.string(v.t.r3LawM),
        },
    ],
    C = (e) => {
        let t = e > 0 ? a()().add(e, "second").toISOString() : null;
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
        [r, a] = (0, o.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        _ = (0, d.U)(a),
        h = (0, b.ZP)(e, !0);
    function A(t) {
        t && e.type === g.d4z.GUILD_CATEGORY && (0, c.c4)(e.id),
            s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, p.UE.muted(t));
    }
    let E = v.intl.string(v.t.tbeRRE),
        y = v.intl.string(v.t.OYefmZ);
    switch (e.type) {
        case g.d4z.GUILD_CATEGORY:
            (E = v.intl.string(v.t.pNMCg4)), (y = v.intl.string(v.t.olaBeH));
            break;
        case g.d4z.GROUP_DM:
            (E = v.intl.string(v.t.LO3kaG)), (y = v.intl.string(v.t["s5/5fn"]));
            break;
        case g.d4z.DM:
            (E = n ? v.intl.format(v.t.byjuJi, { name: h }) : v.intl.string(v.t.LO3kaG)),
                (y = n ? v.intl.format(v.t["eC+9rq"], { name: h }) : v.intl.string(v.t["s5/5fn"]));
            break;
        default:
            (E = v.intl.string(v.t.tbeRRE)), (y = v.intl.string(v.t.OYefmZ));
    }
    return r
        ? (0, i.jsx)(l.sNh, {
              id: "unmute-channel",
              label: y,
              subtext: _,
              action: () => A(!1),
          })
        : (0, i.jsx)(l.sNh, {
              id: "mute-channel",
              label: E,
              action: () => {
                  A(!0),
                      (0, u.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: O().map((n) => {
                  let { value: r, label: a } = n;
                  return (0, i.jsx)(
                      l.sNh,
                      {
                          id: "".concat(r),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, c.c4)(e.id);
                                  let i = C(n);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, p.ZB.Muted, t);
                              })(r),
                      },
                      r,
                  );
              }),
          });
}
