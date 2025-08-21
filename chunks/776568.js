t.d(n, {
    ZP: () => O,
    k: () => p,
    u9: () => Z,
}),
    t(388685);
var i = t(951288);
t(647438);
var l = t(913527),
    r = t.n(l),
    a = t(442837),
    o = t(481060),
    u = t(211739),
    s = t(87051),
    d = t(496729),
    c = t(777861),
    f = t(9156),
    g = t(621600),
    h = t(933557),
    v = t(981631),
    b = t(969943),
    _ = t(388032);
let p = () => [
        {
            value: b.Oe.MINUTES_15,
            label: _.intl.string(_.t["8ot6go"]),
        },
        {
            value: b.Oe.HOURS_1,
            label: _.intl.string(_.t.UMWBZm),
        },
        {
            value: b.Oe.HOURS_3,
            label: _.intl.string(_.t.QmYWtr),
        },
        {
            value: b.Oe.HOURS_8,
            label: _.intl.string(_.t.EpAXPD),
        },
        {
            value: b.Oe.HOURS_24,
            label: _.intl.string(_.t["755t4u"]),
        },
        {
            value: b.Oe.ALWAYS,
            label: _.intl.string(_.t.r3LawM),
        },
    ],
    Z = (e) => {
        let n = e > 0 ? r()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: n,
            },
        };
    };
function O(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, r] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        b = (0, c.U)(r),
        O = (0, h.ZP)(e, !0);
    function m(n) {
        n && e.type === v.d4z.GUILD_CATEGORY && (0, u.c4)(e.id),
            s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, g.UE.muted(n));
    }
    let E = _.intl.string(_.t.tbeRRE),
        C = _.intl.string(_.t.OYefmZ);
    switch (e.type) {
        case v.d4z.GUILD_CATEGORY:
            (E = _.intl.string(_.t.pNMCg4)), (C = _.intl.string(_.t.olaBeH));
            break;
        case v.d4z.GROUP_DM:
            (E = _.intl.string(_.t.LO3kaG)), (C = _.intl.string(_.t["s5/5fn"]));
            break;
        case v.d4z.DM:
            (E = t ? _.intl.format(_.t.byjuJi, { name: O }) : _.intl.string(_.t.LO3kaG)),
                (C = t ? _.intl.format(_.t["eC+9rq"], { name: O }) : _.intl.string(_.t["s5/5fn"]));
            break;
        default:
            (E = _.intl.string(_.t.tbeRRE)), (C = _.intl.string(_.t.OYefmZ));
    }
    return l
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: C,
              subtext: b,
              action: () => m(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: E,
              action: () => {
                  m(!0),
                      (0, d.sT)({
                          channelId: e.id,
                          location: "channel_context_menu",
                      });
              },
              children: p().map((t) => {
                  let { value: l, label: r } = t;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(l),
                          label: r,
                          action: () =>
                              (function (t) {
                                  e.type === v.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = Z(t);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, n);
                              })(l),
                      },
                      l,
                  );
              }),
          });
}
