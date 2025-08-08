t.d(n, {
    O: () => E,
    Z: () => _,
}),
    t(388685),
    t(539854);
var l = t(255367);
t(73800);
var i = t(120356),
    r = t.n(i),
    a = t(990547),
    u = t(831209),
    o = t(442837),
    s = t(704215),
    d = t(481060),
    c = t(26151),
    g = t(906732),
    Z = t(213609),
    f = t(358221),
    b = t(985588),
    O = t(933557),
    p = t(243778),
    m = t(359110),
    h = t(163612),
    j = t(592125),
    P = t(944486),
    v = t(354459),
    x = t(921944),
    y = t(388032),
    N = t(940082);
function E(e, n) {
    let t = (0, o.e7)([P.Z], () => P.Z.getVoiceChannelId()),
        l = (0, o.e7)([j.Z], () => {
            var e, n;
            return null != (n = null == (e = j.Z.getChannel(t)) ? void 0 : e.getGuildId()) ? n : void 0;
        }),
        { enabled: i } = h.Z.useExperiment({
            guildId: l,
            location: n,
        });
    return i ? t : e;
}
function _(e, n) {
    let [t, i] = (0, o.Wu)(
            [f.Z],
            () => [null != n ? f.Z.getParticipants(n) : null, null != n ? f.Z.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        u = (0, o.e7)([j.Z], () => j.Z.getChannel(n)),
        O = (0, b.s)(e, "context_menu", n),
        { enabled: P } = h.Z.useExperiment({
            guildId: null == u ? void 0 : u.guild_id,
            location: "useRingHangupItem",
        }),
        E = !O || (null == t ? void 0 : t.length) === 0 || null == n,
        _ = P && (null == u ? void 0 : u.guild_id) != null,
        S = null == i,
        T = null != i && i.type === v.fO.USER && i.ringing,
        U = [];
    _ && !E && (S || T) && U.push(s.z.RING_USER_TO_VC_NEW_BADGE);
    let [A, k] = (0, p.US)(U),
        w = A === s.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: M } = (0, g.ZP)();
    return ((0, Z.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: null == u ? void 0 : u.guild_id,
                location_stack: M,
            },
        },
        { disableTrack: E || !_ },
        [e.id],
    ),
    E)
        ? null
        : S
          ? (0, l.jsx)(d.sNh, {
                id: "ring",
                label: _
                    ? (0, l.jsxs)("div", {
                          className: N.label,
                          children: [y.intl.string(y.t["3Hv9qa"]), w && (0, l.jsx)(I, {})],
                      })
                    : y.intl.string(y.t.bHa9kJ),
                subtext: _ ? (0, l.jsx)(C, { channel: u }) : null,
                action: () => {
                    w && k(x.L.TAKE_ACTION), c.Z.ring(n, [e.id], "user_context_menu"), _ && null != n && (0, m.Kh)(n);
                },
                className: N.menuItem,
            })
          : T
            ? (0, l.jsx)(d.sNh, {
                  id: "stop-ringing",
                  label: (0, l.jsxs)("div", {
                      className: N.label,
                      children: [y.intl.string(y.t.ygslb2), w && (0, l.jsx)(I, {})],
                  }),
                  subtext: _
                      ? (0, l.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            className: r()(N.subtext, N.ringing),
                            children: y.intl.format(y.t.dwfzZm, { channelName: (0, l.jsx)(C, { channel: u }) }),
                        })
                      : null,
                  action: () => {
                      w && k(x.L.TAKE_ACTION), c.Z.stopRinging(n, [e.id]);
                  },
                  className: N.menuItem,
              })
            : null;
}
let C = (e) => {
        let { channel: n } = e,
            t = (0, O.ZP)(n);
        return (0, l.jsxs)("div", {
            className: N.subtext,
            children: [
                (0, l.jsx)(d.gj8, { size: "xs" }),
                (0, l.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    className: N.channelName,
                    children: t,
                }),
            ],
        });
    },
    I = () =>
        (0, l.jsx)(d.IGR, {
            color: u.Z.BG_BRAND,
            text: y.intl.string(y.t.y2b7CA),
        });
