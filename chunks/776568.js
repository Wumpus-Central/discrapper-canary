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
    _ = t(969943),
    b = t(388032);
let p = () => [
        {
            value: _.Oe.MINUTES_15,
            label: b.intl.string(b.t["8ot6gv"]),
        },
        {
            value: _.Oe.HOURS_1,
            label: b.intl.string(b.t.UMWBZr),
        },
        {
            value: _.Oe.HOURS_3,
            label: b.intl.string(b.t.QmYWtu),
        },
        {
            value: _.Oe.HOURS_8,
            label: b.intl.string(b.t.EpAXPC),
        },
        {
            value: _.Oe.HOURS_24,
            label: b.intl.string(b.t["755t4q"]),
        },
        {
            value: _.Oe.ALWAYS,
            label: b.intl.string(b.t.r3LawO),
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
        _ = (0, c.U)(r),
        Z = (0, h.ZP)(e, !0);
    function m(n) {
        n && e.type === v.d4z.GUILD_CATEGORY && (0, u.c4)(e.id),
            s.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, g.UE.muted(n));
    }
    let E = b.intl.string(b.t.tbeRRJ),
        N = b.intl.string(b.t.OYefme);
    switch (e.type) {
        case v.d4z.GUILD_CATEGORY:
            (E = b.intl.string(b.t.pNMCg2)), (N = b.intl.string(b.t.olaBeG));
            break;
        case v.d4z.GROUP_DM:
            (E = b.intl.string(b.t.LO3kaK)), (N = b.intl.string(b.t["s5/5fm"]));
            break;
        case v.d4z.DM:
            (E = t ? b.intl.format(b.t.byjuJm, { name: Z }) : b.intl.string(b.t.LO3kaK)),
                (N = t ? b.intl.format(b.t["eC+9rj"], { name: Z }) : b.intl.string(b.t["s5/5fm"]));
            break;
        default:
            (E = b.intl.string(b.t.tbeRRJ)), (N = b.intl.string(b.t.OYefme));
    }
    return l
        ? (0, i.jsx)(o.sNh, {
              id: "unmute-channel",
              label: N,
              subtext: _,
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
