t.d(n, {
    ZP: () => Z,
    k: () => p,
    u9: () => O,
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
            label: _.intl.string(_.t["8ot6gv"]),
        },
        {
            value: b.Oe.HOURS_1,
            label: _.intl.string(_.t.UMWBZr),
        },
        {
            value: b.Oe.HOURS_3,
            label: _.intl.string(_.t.QmYWtu),
        },
        {
            value: b.Oe.HOURS_8,
            label: _.intl.string(_.t.EpAXPC),
        },
        {
            value: b.Oe.HOURS_24,
            label: _.intl.string(_.t["755t4q"]),
        },
        {
            value: b.Oe.ALWAYS,
            label: _.intl.string(_.t.r3LawO),
        },
    ],
    O = (e) => {
        let n = e > 0 ? r()().add(e, "second").toISOString() : null;
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
        [l, r] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        b = (0, c.U)(r),
        Z = (0, h.ZP)(e, !0);
    function m(n) {
        n && e.type === v.d4z.GUILD_CATEGORY && (0, u.c4)(e.id),
            s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, g.UE.muted(n));
    }
    let E = _.intl.string(_.t.tbeRRJ),
        C = _.intl.string(_.t.OYefme);
    switch (e.type) {
        case v.d4z.GUILD_CATEGORY:
            (E = _.intl.string(_.t.pNMCg2)), (C = _.intl.string(_.t.olaBeG));
            break;
        case v.d4z.GROUP_DM:
            (E = _.intl.string(_.t.LO3kaK)), (C = _.intl.string(_.t["s5/5fm"]));
            break;
        case v.d4z.DM:
            (E = t ? _.intl.format(_.t.byjuJm, { name: Z }) : _.intl.string(_.t.LO3kaK)),
                (C = t ? _.intl.format(_.t["eC+9rj"], { name: Z }) : _.intl.string(_.t["s5/5fm"]));
            break;
        default:
            (E = _.intl.string(_.t.tbeRRJ)), (C = _.intl.string(_.t.OYefme));
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
                                  let i = O(t);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, n);
                              })(l),
                      },
                      l,
                  );
              }),
          });
}
