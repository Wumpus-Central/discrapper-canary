n.d(t, {
    ZP: () => O,
    k: () => p,
    u9: () => m,
}),
    n(388685);
var i = n(951288);
n(647438);
var r = n(913527),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(211739),
    d = n(87051),
    u = n(496729),
    c = n(777861),
    f = n(9156),
    h = n(621600),
    g = n(933557),
    v = n(981631),
    b = n(969943),
    Z = n(388032);
let p = () => [
        {
            value: b.Oe.MINUTES_15,
            label: Z.intl.string(Z.t["8ot6go"]),
        },
        {
            value: b.Oe.HOURS_1,
            label: Z.intl.string(Z.t.UMWBZm),
        },
        {
            value: b.Oe.HOURS_3,
            label: Z.intl.string(Z.t.QmYWtr),
        },
        {
            value: b.Oe.HOURS_8,
            label: Z.intl.string(Z.t.EpAXPD),
        },
        {
            value: b.Oe.HOURS_24,
            label: Z.intl.string(Z.t["755t4u"]),
        },
        {
            value: b.Oe.ALWAYS,
            label: Z.intl.string(Z.t.r3LawM),
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
function O(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [r, l] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        b = (0, c.U)(l),
        O = (0, g.ZP)(e, !0);
    function _(t) {
        t && e.type === v.d4z.GUILD_CATEGORY && (0, s.c4)(e.id),
            d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: t }, h.UE.muted(t));
    }
    let j = Z.intl.string(Z.t.tbeRRE),
        E = Z.intl.string(Z.t.OYefmZ);
    switch (e.type) {
        case v.d4z.GUILD_CATEGORY:
            (j = Z.intl.string(Z.t.pNMCg4)), (E = Z.intl.string(Z.t.olaBeH));
            break;
        case v.d4z.GROUP_DM:
            (j = Z.intl.string(Z.t.LO3kaG)), (E = Z.intl.string(Z.t["s5/5fn"]));
            break;
        case v.d4z.DM:
            (j = n ? Z.intl.format(Z.t.byjuJi, { name: O }) : Z.intl.string(Z.t.LO3kaG)),
                (E = n ? Z.intl.format(Z.t["eC+9rq"], { name: O }) : Z.intl.string(Z.t["s5/5fn"]));
            break;
        default:
            (j = Z.intl.string(Z.t.tbeRRE)), (E = Z.intl.string(Z.t.OYefmZ));
    }
    return r
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: E,
              subtext: b,
              action: () => _(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: j,
              action: () => {
                  _(!0),
                      (0, u.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: p().map((n) => {
                  let { value: r, label: l } = n;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(r),
                          label: l,
                          action: () =>
                              (function (n) {
                                  e.type === v.d4z.GUILD_CATEGORY && (0, s.c4)(e.id);
                                  let i = m(n);
                                  d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, t);
                              })(r),
                      },
                      r,
                  );
              }),
          });
}
