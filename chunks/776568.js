n.d(t, {
    ZP: () => O,
    k: () => A,
    u9: () => v,
}),
    n(388685);
var i = n(255367);
n(73800);
var a = n(913527),
    r = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(211739),
    c = n(87051),
    s = n(496729),
    d = n(777861),
    f = n(9156),
    p = n(621600),
    _ = n(933557),
    b = n(981631),
    C = n(969943),
    g = n(388032);
let A = () => [
        {
            value: C.Oe.MINUTES_15,
            label: g.intl.string(g.t["8ot6go"]),
        },
        {
            value: C.Oe.HOURS_1,
            label: g.intl.string(g.t.UMWBZm),
        },
        {
            value: C.Oe.HOURS_3,
            label: g.intl.string(g.t.QmYWtr),
        },
        {
            value: C.Oe.HOURS_8,
            label: g.intl.string(g.t.EpAXPD),
        },
        {
            value: C.Oe.HOURS_24,
            label: g.intl.string(g.t["755t4u"]),
        },
        {
            value: C.Oe.ALWAYS,
            label: g.intl.string(g.t.r3LawM),
        },
    ],
    v = (e) => {
        let t = e > 0 ? r()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t,
            },
        };
    };
function O(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [a, r] = (0, o.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        C = (0, d.U)(r),
        O = (0, _.ZP)(e, !0);
    function h(t) {
        t && e.type === b.d4z.GUILD_CATEGORY && (0, u.c4)(e.id),
            c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, p.UE.muted(t));
    }
    let E = g.intl.string(g.t.tbeRRE),
        m = g.intl.string(g.t.OYefmZ);
    switch (e.type) {
        case b.d4z.GUILD_CATEGORY:
            (E = g.intl.string(g.t.pNMCg4)), (m = g.intl.string(g.t.olaBeH));
            break;
        case b.d4z.GROUP_DM:
            (E = g.intl.string(g.t.LO3kaG)), (m = g.intl.string(g.t["s5/5fn"]));
            break;
        case b.d4z.DM:
            (E = n ? g.intl.format(g.t.byjuJi, { name: O }) : g.intl.string(g.t.LO3kaG)),
                (m = n ? g.intl.format(g.t["eC+9rq"], { name: O }) : g.intl.string(g.t["s5/5fn"]));
            break;
        default:
            (E = g.intl.string(g.t.tbeRRE)), (m = g.intl.string(g.t.OYefmZ));
    }
    return a
        ? (0, i.jsx)(l.sNh, {
              id: "unmute-channel",
              label: m,
              subtext: C,
              action: () => h(!1),
          })
        : (0, i.jsx)(l.sNh, {
              id: "mute-channel",
              label: E,
              action: () => {
                  h(!0),
                      (0, s.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: A().map((n) => {
                  let { value: a, label: r } = n;
                  return (0, i.jsx)(
                      l.sNh,
                      {
                          id: "".concat(a),
                          label: r,
                          action: () =>
                              (function (n) {
                                  e.type === b.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = v(n);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, p.ZB.Muted, t);
                              })(a),
                      },
                      a,
                  );
              }),
          });
}
