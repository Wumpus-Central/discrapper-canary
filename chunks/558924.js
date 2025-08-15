t.d(n, {
    O: () => N,
    Z: () => E,
}),
    t(388685),
    t(539854);
var l = t(255367);
t(73800);
var i = t(120356),
    r = t.n(i),
    a = t(990547),
    o = t(831209),
    u = t(442837),
    s = t(704215),
    c = t(481060),
    d = t(26151),
    g = t(906732),
    Z = t(213609),
    b = t(358221),
    f = t(985588),
    p = t(933557),
    m = t(243778),
    O = t(359110),
    h = t(163612),
    j = t(592125),
    P = t(944486),
    v = t(354459),
    x = t(921944),
    _ = t(388032),
    y = t(604570);
function N(e, n) {
    let t = (0, u.e7)([P.Z], () => P.Z.getVoiceChannelId()),
        l = (0, u.e7)([j.Z], () => {
            var e, n;
            return null != (n = null == (e = j.Z.getChannel(t)) ? void 0 : e.getGuildId()) ? n : void 0;
        }),
        { enabled: i } = h.Z.useExperiment({
            guildId: l,
            location: n,
        });
    return i ? t : e;
}
function E(e, n) {
    let [t, i] = (0, u.Wu)(
            [b.Z],
            () => [null != n ? b.Z.getParticipants(n) : null, null != n ? b.Z.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        o = (0, u.e7)([j.Z], () => j.Z.getChannel(n)),
        p = (0, f.s)(e, "context_menu", n),
        { enabled: P } = h.Z.useExperiment({
            guildId: null == o ? void 0 : o.guild_id,
            location: "useRingHangupItem",
        }),
        N = !p || (null == t ? void 0 : t.length) === 0 || null == n,
        E = P && (null == o ? void 0 : o.guild_id) != null,
        S = null == i,
        T = null != i && i.type === v.fO.USER && i.ringing,
        U = [];
    E && !N && (S || T) && U.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [A, w] = (0, m.US)(U),
        k = A === s.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: M } = (0, g.ZP)();
    return ((0, Z.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: null == o ? void 0 : o.guild_id,
                location_stack: M,
            },
        },
        { disableTrack: N || !E },
        [e.id],
    ),
    N)
        ? null
        : S
          ? (0, l.jsx)(c.sNh, {
                id: "ring",
                label: E
                    ? (0, l.jsxs)("div", {
                          className: y.label,
                          children: [_.intl.string(_.t["3Hv9qa"]), k && (0, l.jsx)(I, {})],
                      })
                    : _.intl.string(_.t.bHa9kJ),
                subtext: E ? (0, l.jsx)(C, { channel: o }) : null,
                action: () => {
                    k && w(x.L.TAKE_ACTION), d.Z.ring(n, [e.id], "user_context_menu"), E && null != n && (0, O.Kh)(n);
                },
                className: y.menuItem,
            })
          : T
            ? (0, l.jsx)(c.sNh, {
                  id: "stop-ringing",
                  label: (0, l.jsxs)("div", {
                      className: y.label,
                      children: [_.intl.string(_.t.ygslb2), k && (0, l.jsx)(I, {})],
                  }),
                  subtext: E
                      ? (0, l.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            className: r()(y.subtext, y.ringing),
                            children: _.intl.format(_.t.dwfzZm, { channelName: (0, l.jsx)(C, { channel: o }) }),
                        })
                      : null,
                  action: () => {
                      k && w(x.L.TAKE_ACTION), d.Z.stopRinging(n, [e.id]);
                  },
                  className: y.menuItem,
              })
            : null;
}
let C = (e) => {
        let { channel: n } = e,
            t = (0, p.ZP)(n);
        return (0, l.jsxs)("div", {
            className: y.subtext,
            children: [
                (0, l.jsx)(c.gj8, { size: "xs" }),
                (0, l.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    className: y.channelName,
                    children: t,
                }),
            ],
        });
    },
    I = () =>
        (0, l.jsx)(c.IGR, {
            color: o.Z.BG_BRAND,
            text: _.intl.string(_.t.y2b7CA),
        });
