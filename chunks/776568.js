n.d(t, {
    ZP: () => O,
    k: () => g,
    u9: () => C,
}),
    n(388685);
var i = n(255367);
n(73800);
var a = n(913527),
    r = n.n(a),
    l = n(442837),
    o = n(481060),
    d = n(211739),
    u = n(87051),
    f = n(496729),
    s = n(777861),
    c = n(9156),
    _ = n(621600),
    v = n(933557),
    p = n(981631),
    b = n(969943),
    h = n(388032);
let g = () => [
        {
            value: b.Oe.MINUTES_15,
            label: h.intl.string(h.t["8ot6go"]),
        },
        {
            value: b.Oe.HOURS_1,
            label: h.intl.string(h.t.UMWBZm),
        },
        {
            value: b.Oe.HOURS_3,
            label: h.intl.string(h.t.QmYWtr),
        },
        {
            value: b.Oe.HOURS_8,
            label: h.intl.string(h.t.EpAXPD),
        },
        {
            value: b.Oe.HOURS_24,
            label: h.intl.string(h.t["755t4u"]),
        },
        {
            value: b.Oe.ALWAYS,
            label: h.intl.string(h.t.r3LawM),
        },
    ],
    C = (e) => {
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
        [a, r] = (0, l.Wu)([c.ZP], () => [
            c.ZP.isChannelMuted(e.guild_id, e.id),
            c.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        b = (0, s.U)(r),
        O = (0, v.ZP)(e, !0);
    function m(t) {
        t && e.type === p.d4z.GUILD_CATEGORY && (0, d.c4)(e.id),
            u.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, _.UE.muted(t));
    }
    let E = h.intl.string(h.t.tbeRRE),
        y = h.intl.string(h.t.OYefmZ);
    switch (e.type) {
        case p.d4z.GUILD_CATEGORY:
            (E = h.intl.string(h.t.pNMCg4)), (y = h.intl.string(h.t.olaBeH));
            break;
        case p.d4z.GROUP_DM:
            (E = h.intl.string(h.t.LO3kaG)), (y = h.intl.string(h.t["s5/5fn"]));
            break;
        case p.d4z.DM:
            (E = n ? h.intl.format(h.t.byjuJi, { name: O }) : h.intl.string(h.t.LO3kaG)),
                (y = n ? h.intl.format(h.t["eC+9rq"], { name: O }) : h.intl.string(h.t["s5/5fn"]));
            break;
        default:
            (E = h.intl.string(h.t.tbeRRE)), (y = h.intl.string(h.t.OYefmZ));
    }
    return a
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: y,
              subtext: b,
              action: () => m(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: E,
              action: () => {
                  m(!0),
                      (0, f.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: g().map((n) => {
                  let { value: a, label: r } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(a),
                          label: r,
                          action: () =>
                              (function (n) {
                                  e.type === p.d4z.GUILD_CATEGORY && (0, d.c4)(e.id);
                                  let i = C(n);
                                  u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t);
                              })(a),
                      },
                      a,
                  );
              }),
          });
}
