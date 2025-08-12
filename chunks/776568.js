n.d(t, {
    ZP: () => v,
    k: () => _,
    u9: () => O,
}),
    n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
    o = n.n(r),
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
function v(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, o] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        b = (0, d.U)(o),
        v = (0, g.ZP)(e, !0);
    function C(t) {
        t && e.type === h.d4z.GUILD_CATEGORY && (0, c.c4)(e.id),
            s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, p.UE.muted(t));
    }
    let m = y.intl.string(y.t.tbeRRE),
        T = y.intl.string(y.t.OYefmZ);
    switch (e.type) {
        case h.d4z.GUILD_CATEGORY:
            (m = y.intl.string(y.t.pNMCg4)), (T = y.intl.string(y.t.olaBeH));
            break;
        case h.d4z.GROUP_DM:
            (m = y.intl.string(y.t.LO3kaG)), (T = y.intl.string(y.t["s5/5fn"]));
            break;
        case h.d4z.DM:
            (m = n ? y.intl.format(y.t.byjuJi, { name: v }) : y.intl.string(y.t.LO3kaG)),
                (T = n ? y.intl.format(y.t["eC+9rq"], { name: v }) : y.intl.string(y.t["s5/5fn"]));
            break;
        default:
            (m = y.intl.string(y.t.tbeRRE)), (T = y.intl.string(y.t.OYefmZ));
    }
    return r
        ? (0, i.jsx)(l.sNh, {
              id: "unmute-channel",
              label: T,
              subtext: b,
              action: () => C(!1),
          })
        : (0, i.jsx)(l.sNh, {
              id: "mute-channel",
              label: m,
              action: () => {
                  C(!0),
                      (0, u.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: _().map((n) => {
                  let { value: r, label: o } = n;
                  return (0, i.jsx)(
                      l.sNh,
                      {
                          id: "".concat(r),
                          label: o,
                          action: () =>
                              (function (n) {
                                  e.type === h.d4z.GUILD_CATEGORY && (0, c.c4)(e.id);
                                  let i = O(n);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, p.ZB.Muted, t);
                              })(r),
                      },
                      r,
                  );
              }),
          });
}
