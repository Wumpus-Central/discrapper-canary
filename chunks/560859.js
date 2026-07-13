l.d(i, { A: () => v });
var e = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    d = l(939249),
    o = l(22231),
    r = l(688810),
    c = l(532622),
    h = l(271683),
    x = l(882840),
    u = l(46054),
    g = l(345640),
    A = l(174459),
    p = l(939496),
    m = l(531648),
    _ = l(652215),
    N = l(996988),
    f = l(375708),
    j = l(237770);
function v(t) {
    let { voiceChannel: i, onAction: l, onClose: s } = t,
        { themeType: v } = (0, p.E)(),
        { analyticsLocations: C } = (0, r.Ay)(),
        E = (0, g.b)(i),
        O = (0, c.Ay)(i, !0),
        P = (0, x.l)(i),
        b = n.useMemo(
            () => (null == P || "" === P ? null : u.A.parseVoiceChannelStatus(P, !0, { channelId: i.id })),
            [P, i.id],
        );
    return (n.useEffect(() => {
        null != b &&
            A.default.track(_.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: i.id,
                guild_id: i.guild_id,
                location_stack: C,
            });
    }, [b, i.id, i.guild_id, C]),
    O && E)
        ? (0, e.jsxs)(d.D, {
              className: j.vk,
              onClick: (t) => {
                  t.stopPropagation(),
                      l({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      v === N.d.POPOUT && s?.(),
                      (0, h.A)({ channel: i, sourceAnalyticsLocations: C });
              },
              children: [
                  (0, e.jsx)(m.A, {
                      text: b ?? f.intl.string(f.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: j.Qq,
                  }),
                  (0, e.jsx)(o.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(j.rD, null != b ? j.R : void 0),
                      "aria-label": f.intl.string(f.t.bt75uw),
                  }),
              ],
          })
        : null != b
          ? (0, e.jsx)(m.A, { text: b, variant: "text-xs/normal", color: "text-subtle", className: j.Qq })
          : null;
}
