n.d(t, {
    ZP: () => b,
    k: () => C,
    u9: () => A,
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
    a = n.n(r),
    o = n(442837),
    l = n(481060),
    u = n(211739),
    c = n(87051),
    s = n(496729),
    d = n(777861),
    f = n(9156),
    _ = n(621600),
    p = n(933557),
    E = n(981631),
    h = n(969943),
    g = n(388032);
let C = () => [
        {
            value: h.Oe.MINUTES_15,
            label: g.intl.string(g.t["8ot6go"]),
        },
        {
            value: h.Oe.HOURS_1,
            label: g.intl.string(g.t.UMWBZm),
        },
        {
            value: h.Oe.HOURS_3,
            label: g.intl.string(g.t.QmYWtr),
        },
        {
            value: h.Oe.HOURS_8,
            label: g.intl.string(g.t.EpAXPD),
        },
        {
            value: h.Oe.HOURS_24,
            label: g.intl.string(g.t["755t4u"]),
        },
        {
            value: h.Oe.ALWAYS,
            label: g.intl.string(g.t.r3LawM),
        },
    ],
    A = (e) => {
        let t = e > 0 ? a()().add(e, "second").toISOString() : null;
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
        [r, a] = (0, o.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        h = (0, d.U)(a),
        b = (0, p.ZP)(e, !0);
    function y(t) {
        t && e.type === E.d4z.GUILD_CATEGORY && (0, u.c4)(e.id),
            c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let N = g.intl.string(g.t.tbeRRE),
        T = g.intl.string(g.t.OYefmZ);
    switch (e.type) {
        case E.d4z.GUILD_CATEGORY:
            (N = g.intl.string(g.t.pNMCg4)), (T = g.intl.string(g.t.olaBeH));
            break;
        case E.d4z.GROUP_DM:
            (N = g.intl.string(g.t.LO3kaG)), (T = g.intl.string(g.t["s5/5fn"]));
            break;
        case E.d4z.DM:
            (N = n ? g.intl.format(g.t.byjuJi, { name: b }) : g.intl.string(g.t.LO3kaG)),
                (T = n ? g.intl.format(g.t["eC+9rq"], { name: b }) : g.intl.string(g.t["s5/5fn"]));
            break;
        default:
            (N = g.intl.string(g.t.tbeRRE)), (T = g.intl.string(g.t.OYefmZ));
    }
    return r
        ? (0, i.jsx)(l.sNh, {
              id: "unmute-channel",
              label: T,
              subtext: h,
              action: () => y(!1),
          })
        : (0, i.jsx)(l.sNh, {
              id: "mute-channel",
              label: N,
              action: () => {
                  y(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: C().map((n) => {
                  let { value: r, label: a } = n;
                  return (0, i.jsx)(
                      l.sNh,
                      {
                          id: "".concat(r),
                          label: a,
                          action: () =>
                              (function (n) {
                                  e.type === E.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = A(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t);
                              })(r),
                      },
                      r,
                  );
              }),
          });
}
