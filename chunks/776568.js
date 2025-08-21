t.d(n, {
    ZP: () => Z,
    k: () => v,
    u9: () => y,
}),
    t(388685);
var i = t(951288);
t(647438);
var r = t(913527),
    l = t.n(r),
    a = t(442837),
    o = t(481060),
    s = t(211739),
    c = t(87051),
    u = t(496729),
    d = t(777861),
    f = t(9156),
    h = t(621600),
    p = t(933557),
    g = t(981631),
    O = t(969943),
    b = t(388032);
let v = () => [
        {
            value: O.Oe.MINUTES_15,
            label: b.intl.string(b.t["8ot6go"]),
        },
        {
            value: O.Oe.HOURS_1,
            label: b.intl.string(b.t.UMWBZm),
        },
        {
            value: O.Oe.HOURS_3,
            label: b.intl.string(b.t.QmYWtr),
        },
        {
            value: O.Oe.HOURS_8,
            label: b.intl.string(b.t.EpAXPD),
        },
        {
            value: O.Oe.HOURS_24,
            label: b.intl.string(b.t["755t4u"]),
        },
        {
            value: O.Oe.ALWAYS,
            label: b.intl.string(b.t.r3LawM),
        },
    ],
    y = (e) => {
        let n = e > 0 ? l()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: n,
            },
        };
    };
function Z(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, l] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        O = (0, d.U)(l),
        Z = (0, p.ZP)(e, !0);
    function m(n) {
        n && e.type === g.d4z.GUILD_CATEGORY && (0, s.c4)(e.id),
            c.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, h.UE.muted(n));
    }
    let _ = b.intl.string(b.t.tbeRRE),
        j = b.intl.string(b.t.OYefmZ);
    switch (e.type) {
        case g.d4z.GUILD_CATEGORY:
            (_ = b.intl.string(b.t.pNMCg4)), (j = b.intl.string(b.t.olaBeH));
            break;
        case g.d4z.GROUP_DM:
            (_ = b.intl.string(b.t.LO3kaG)), (j = b.intl.string(b.t["s5/5fn"]));
            break;
        case g.d4z.DM:
            (_ = t ? b.intl.format(b.t.byjuJi, { name: Z }) : b.intl.string(b.t.LO3kaG)),
                (j = t ? b.intl.format(b.t["eC+9rq"], { name: Z }) : b.intl.string(b.t["s5/5fn"]));
            break;
        default:
            (_ = b.intl.string(b.t.tbeRRE)), (j = b.intl.string(b.t.OYefmZ));
    }
    return r
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: j,
              subtext: O,
              action: () => m(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: _,
              action: () => {
                  m(!0),
                      (0, u.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: v().map((t) => {
                  let { value: r, label: l } = t;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(r),
                          label: l,
                          action: () =>
                              (function (t) {
                                  e.type === g.d4z.GUILD_CATEGORY && (0, s.c4)(e.id);
                                  let i = y(t);
                                  c.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, n);
                              })(r),
                      },
                      r,
                  );
              }),
          });
}
