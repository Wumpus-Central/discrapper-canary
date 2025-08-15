n.d(e, {
    ZP: () => L,
    k: () => N,
    u9: () => b,
}),
    n(388685);
var i = n(255367);
n(73800);
var l = n(913527),
    a = n.n(l),
    s = n(442837),
    r = n(481060),
    o = n(211739),
    d = n(87051),
    c = n(496729),
    u = n(777861),
    g = n(9156),
    _ = n(621600),
    f = n(933557),
    S = n(981631),
    E = n(969943),
    h = n(388032);
let N = () => [
        {
            value: E.Oe.MINUTES_15,
            label: h.intl.string(h.t["8ot6go"]),
        },
        {
            value: E.Oe.HOURS_1,
            label: h.intl.string(h.t.UMWBZm),
        },
        {
            value: E.Oe.HOURS_3,
            label: h.intl.string(h.t.QmYWtr),
        },
        {
            value: E.Oe.HOURS_8,
            label: h.intl.string(h.t.EpAXPD),
        },
        {
            value: E.Oe.HOURS_24,
            label: h.intl.string(h.t["755t4u"]),
        },
        {
            value: E.Oe.ALWAYS,
            label: h.intl.string(h.t.r3LawM),
        },
    ],
    b = (t) => {
        let e = t > 0 ? a()().add(t, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: t,
                end_time: e,
            },
        };
    };
function L(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, a] = (0, s.Wu)([g.ZP], () => [
            g.ZP.isChannelMuted(t.guild_id, t.id),
            g.ZP.getChannelMuteConfig(t.guild_id, t.id),
        ]),
        E = (0, u.U)(a),
        L = (0, f.ZP)(t, !0);
    function O(e) {
        e && t.type === S.d4z.GUILD_CATEGORY && (0, o.c4)(t.id),
            d.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: e }, _.UE.muted(e));
    }
    let p = h.intl.string(h.t.tbeRRE),
        v = h.intl.string(h.t.OYefmZ);
    switch (t.type) {
        case S.d4z.GUILD_CATEGORY:
            (p = h.intl.string(h.t.pNMCg4)), (v = h.intl.string(h.t.olaBeH));
            break;
        case S.d4z.GROUP_DM:
            (p = h.intl.string(h.t.LO3kaG)), (v = h.intl.string(h.t["s5/5fn"]));
            break;
        case S.d4z.DM:
            (p = n ? h.intl.format(h.t.byjuJi, { name: L }) : h.intl.string(h.t.LO3kaG)),
                (v = n ? h.intl.format(h.t["eC+9rq"], { name: L }) : h.intl.string(h.t["s5/5fn"]));
            break;
        default:
            (p = h.intl.string(h.t.tbeRRE)), (v = h.intl.string(h.t.OYefmZ));
    }
    return l
        ? (0, i.jsx)(r.sNh, {
              id: "unmute-channel",
              label: v,
              subtext: E,
              action: () => O(!1),
          })
        : (0, i.jsx)(r.sNh, {
              id: "mute-channel",
              label: p,
              action: () => {
                  O(!0),
                      (0, c.sT)({
                          channelId: t.id,
                          location: "channel_context_menu",
                      });
              },
              children: N().map((n) => {
                  let { value: l, label: a } = n;
                  return (0, i.jsx)(
                      r.sNh,
                      {
                          id: "".concat(l),
                          label: a,
                          action: () =>
                              (function (n) {
                                  t.type === S.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                                  let i = b(n);
                                  d.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, _.ZB.Muted, e);
                              })(l),
                      },
                      l,
                  );
              }),
          });
}
