i.d(t, { A: () => v });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    d = i(939249),
    r = i(22231),
    o = i(688810),
    c = i(532622),
    u = i(271683),
    A = i(882840),
    h = i(46054),
    g = i(345640),
    x = i(954571),
    m = i(939496),
    C = i(531648),
    _ = i(652215),
    p = i(996988),
    N = i(985018),
    f = i(237770);
function v(e) {
    let { voiceChannel: t, onAction: i, onClose: s } = e,
        { themeType: v } = (0, m.E)(),
        { analyticsLocations: j } = (0, o.Ay)(),
        E = (0, g.b)(t),
        S = (0, c.Ay)(t, !0),
        O = (0, A.l)(t),
        I = n.useMemo(
            () => (null == O || "" === O ? null : h.A.parseVoiceChannelStatus(O, !0, { channelId: t.id })),
            [O, t.id],
        );
    return (n.useEffect(() => {
        null != I &&
            x.default.track(_.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: j,
            });
    }, [I, t.id, t.guild_id, j]),
    S && E)
        ? (0, l.jsxs)(d.D, {
              className: f.vk,
              onClick: (e) => {
                  e.stopPropagation(),
                      i({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      v === p.d.POPOUT && s?.(),
                      (0, u.A)({ channel: t, sourceAnalyticsLocations: j });
              },
              children: [
                  (0, l.jsx)(C.A, {
                      text: I ?? N.intl.string(N.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: f.Qq,
                  }),
                  (0, l.jsx)(r.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(f.rD, null != I ? f.R : void 0),
                      "aria-label": N.intl.string(N.t.bt75uw),
                  }),
              ],
          })
        : null != I
          ? (0, l.jsx)(C.A, { text: I, variant: "text-xs/normal", color: "text-subtle", className: f.Qq })
          : null;
}
