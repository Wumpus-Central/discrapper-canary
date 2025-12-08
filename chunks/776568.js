t.d(n, {
    ZP: () => m,
    k: () => b,
    u9: () => p,
}),
    t(388685);
var i = t(54381);
t(473749);
var l = t(913527),
    r = t.n(l),
    a = t(442837),
    o = t(481060),
    u = t(211739),
    s = t(87051),
    d = t(777861),
    c = t(9156),
    f = t(621600),
    g = t(933557),
    v = t(981631),
    h = t(969943),
    _ = t(388032);
let b = () => [
        {
            value: h.Oe.MINUTES_15,
            label: _.intl.string(_.t["8ot6gv"]),
        },
        {
            value: h.Oe.HOURS_1,
            label: _.intl.string(_.t.UMWBZr),
        },
        {
            value: h.Oe.HOURS_3,
            label: _.intl.string(_.t.QmYWtu),
        },
        {
            value: h.Oe.HOURS_8,
            label: _.intl.string(_.t.EpAXPC),
        },
        {
            value: h.Oe.HOURS_24,
            label: _.intl.string(_.t["755t4q"]),
        },
        {
            value: h.Oe.ALWAYS,
            label: _.intl.string(_.t.r3LawO),
        },
    ],
    p = (e) => {
        let n = e > 0 ? r()().add(e, "second").toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: n,
            },
        };
    };
function m(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [l, r] = (0, a.Wu)([c.ZP], () => [
            c.ZP.isChannelMuted(e.guild_id, e.id),
            c.ZP.getChannelMuteConfig(e.guild_id, e.id),
        ]),
        h = (0, d.U)(r),
        m = (0, g.ZP)(e, !0);
    function Z(n) {
        n && e.type === v.d4z.GUILD_CATEGORY && (0, u.c4)(e.id),
            s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, f.UE.muted(n));
    }
    let O = _.intl.string(_.t.tbeRRJ),
        E = _.intl.string(_.t.OYefme);
    switch (e.type) {
        case v.d4z.GUILD_CATEGORY:
            (O = _.intl.string(_.t.pNMCg2)), (E = _.intl.string(_.t.olaBeG));
            break;
        case v.d4z.GROUP_DM:
            (O = _.intl.string(_.t.LO3kaK)), (E = _.intl.string(_.t["s5/5fm"]));
            break;
        case v.d4z.DM:
            (O = t ? _.intl.format(_.t.byjuJm, { name: m }) : _.intl.string(_.t.LO3kaK)),
                (E = t ? _.intl.format(_.t["eC+9rj"], { name: m }) : _.intl.string(_.t["s5/5fm"]));
            break;
        default:
            (O = _.intl.string(_.t.tbeRRJ)), (E = _.intl.string(_.t.OYefme));
    }
    return l
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: E,
              subtext: h,
              action: () => Z(!1),
          })
        : (0, i.jsx)(o.sNh, {
              id: "mute-channel",
              label: O,
              action: () => {
                  Z(!0);
              },
              children: b().map((t) => {
                  let { value: l, label: r } = t;
                  return (0, i.jsx)(
                      o.sNh,
                      {
                          id: "".concat(l),
                          label: r,
                          action: () =>
                              (function (t) {
                                  e.type === v.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
                                  let i = p(t);
                                  s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, f.ZB.Muted, n);
                              })(l),
                      },
                      l,
                  );
              }),
          });
}
