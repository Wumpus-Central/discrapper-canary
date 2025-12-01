t.d(n, {
    O: () => E,
    Z: () => _,
}),
    t(388685),
    t(539854);
var l = t(54381);
t(473749);
var i = t(120356),
    r = t.n(i),
    a = t(990547),
    u = t(442837),
    o = t(704215),
    s = t(692547),
    d = t(481060),
    c = t(26151),
    g = t(906732),
    Z = t(213609),
    f = t(358221),
    b = t(985588),
    O = t(933557),
    m = t(243778),
    h = t(359110),
    p = t(163612),
    P = t(592125),
    j = t(944486),
    v = t(354459),
    y = t(921944),
    N = t(388032),
    x = t(604570);
function E(e, n) {
    let t = (0, u.e7)([j.Z], () => j.Z.getVoiceChannelId()),
        l = (0, u.e7)([P.Z], () => {
            var e, n;
            return null != (n = null == (e = P.Z.getChannel(t)) ? void 0 : e.getGuildId()) ? n : void 0;
        }),
        { enabled: i } = p.Z.useExperiment({
            guildId: l,
            location: n,
        });
    return i ? t : e;
}
function _(e, n) {
    let [t, i] = (0, u.Wu)(
            [f.Z],
            () => [null != n ? f.Z.getParticipants(n) : null, null != n ? f.Z.getParticipant(n, e.id) : null],
            [n, e.id],
        ),
        s = (0, u.e7)([P.Z], () => P.Z.getChannel(n)),
        O = (0, b.s)(e, "context_menu", n),
        { enabled: j } = p.Z.useExperiment({
            guildId: null == s ? void 0 : s.guild_id,
            location: "useRingHangupItem",
        }),
        E = !O || (null == t ? void 0 : t.length) === 0 || null == n,
        _ = j && (null == s ? void 0 : s.guild_id) != null,
        S = null == i,
        T = null != i && i.type === v.fO.USER && i.ringing,
        A = [];
    _ && !E && (S || T) && A.push(o.z.RING_USER_TO_VC_NEW_BADGE);
    let [U, M] = (0, m.US)(A),
        k = U === o.z.RING_USER_TO_VC_NEW_BADGE,
        { analyticsLocations: w } = (0, g.ZP)();
    return ((0, Z.Z)(
        {
            type: a.ImpressionTypes.MENU,
            name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
            properties: {
                voice_channel_id: n,
                voice_guild_id: null == s ? void 0 : s.guild_id,
                location_stack: w,
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
                          className: x.label,
                          children: [N.intl.string(N.t["3Hv9qQ"]), k && (0, l.jsx)(I, {})],
                      })
                    : N.intl.string(N.t.bHa9kN),
                subtext: _ ? (0, l.jsx)(C, { channel: s }) : null,
                action: () => {
                    k && M(y.L.TAKE_ACTION), c.Z.ring(n, [e.id], "user_context_menu"), _ && null != n && (0, h.Kh)(n);
                },
                className: x.menuItem,
            })
          : T
            ? (0, l.jsx)(d.sNh, {
                  id: "stop-ringing",
                  label: (0, l.jsxs)("div", {
                      className: x.label,
                      children: [N.intl.string(N.t.ygslb0), k && (0, l.jsx)(I, {})],
                  }),
                  subtext: _
                      ? (0, l.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            className: r()(x.subtext, x.ringing),
                            children: N.intl.format(N.t.dwfzZi, { channelName: (0, l.jsx)(C, { channel: s }) }),
                        })
                      : null,
                  action: () => {
                      k && M(y.L.TAKE_ACTION), c.Z.stopRinging(n, [e.id]);
                  },
                  className: x.menuItem,
              })
            : null;
}
let C = (e) => {
        let { channel: n } = e,
            t = (0, O.ZP)(n);
        return (0, l.jsxs)("div", {
            className: x.subtext,
            children: [
                (0, l.jsx)(d.gj8, { size: "xs" }),
                (0, l.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    className: x.channelName,
                    children: t,
                }),
            ],
        });
    },
    I = () =>
        (0, l.jsx)(d.IGR, {
            color: s.Z.colors.BG_BRAND.css,
            text: N.intl.string(N.t.y2b7CA),
        });
