n.d(t, {
    ZP: () => C,
    k: () => _,
    u9: () => O,
}),
    n(388685);
var r = n(255367);
n(73800);
var i = n(913527),
    o = n.n(i),
    a = n(442837),
    l = n(481060),
    c = n(211739),
    s = n(87051),
    u = n(496729),
    d = n(777861),
    f = n(9156),
    p = n(621600),
    g = n(933557),
    h = n(981631),
    b = n(969943),
    y = n(388032);
let _ = () => [
        {
            value: b.Oe.MINUTES_15,
            label: y.intl.string(y.t["8ot6go"]),
        },
        {
            value: b.Oe.HOURS_1,
            label: y.intl.string(y.t.UMWBZm),
        },
        {
            value: b.Oe.HOURS_3,
            label: y.intl.string(y.t.QmYWtr),
        },
        {
            value: b.Oe.HOURS_8,
            label: y.intl.string(y.t.EpAXPD),
        },
        {
            value: b.Oe.HOURS_24,
            label: y.intl.string(y.t["755t4u"]),
        },
        {
            value: b.Oe.ALWAYS,
            label: y.intl.string(y.t.r3LawM),
        },
    ],
    O = (e) => {
        let t = e > 0 ? o()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: t,
            },
        };
    };
function C(e, t) {
    let [n, i] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        o = (0, d.U)(i),
        b = (0, g.ZP)(e, !0);
    function C(t) {
        t && e.type === h.d4z.GUILD_CATEGORY && (0, c.c4)(e.id),
            s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, p.UE.muted(t));
    }
    let v = y.intl.string(y.t.tbeRRE),
        m = y.intl.string(y.t.OYefmZ);
    switch (e.type) {
        case h.d4z.GUILD_CATEGORY:
            (v = y.intl.string(y.t.pNMCg4)), (m = y.intl.string(y.t.olaBeH));
            break;
        case h.d4z.GROUP_DM:
            (v = y.intl.string(y.t.LO3kaG)), (m = y.intl.string(y.t["s5/5fn"]));
            break;
        case h.d4z.DM:
            (v = y.intl.format(y.t.byjuJi, { name: b })), (m = y.intl.format(y.t["eC+9rq"], { name: b }));
            break;
        default:
            (v = y.intl.string(y.t.tbeRRE)), (m = y.intl.string(y.t.OYefmZ));
    }
    return n
        ? (0, r.jsx)(l.sNh, {
              id: "unmute-channel",
              label: m,
              subtext: o,
              action: () => C(!1),
          })
        : (0, r.jsx)(l.sNh, {
              id: "mute-channel",
              label: v,
              action: () => {
                  C(!0),
                      (0, u.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: _().map((n) => {
                  let { value: i, label: o } = n;
                  return (0, r.jsx)(
                      l.sNh,
                      {
                          id: "".concat(i),
                          label: o,
                          action: () =>
                              (function (n) {
                                  e.type === h.d4z.GUILD_CATEGORY && (0, c.c4)(e.id);
                                  let r = O(n);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, r, p.ZB.Muted, t);
                              })(i),
                      },
                      i,
                  );
              }),
          });
}
