"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(22231),
    d = n(688810),
    c = n(532622),
    u = n(271683),
    _ = n(882840),
    E = n(46054),
    A = n(345640),
    h = n(174459),
    I = n(939496),
    f = n(531648),
    p = n(652215),
    T = n(996988),
    m = n(375708),
    g = n(237770);
function S(e) {
    let { voiceChannel: t, onAction: n, onClose: a } = e,
        { themeType: S } = (0, I.E)(),
        { analyticsLocations: N } = (0, d.Ay)(),
        C = (0, A.b)(t),
        O = (0, c.Ay)(t, !0),
        R = (0, _.l)(t),
        L = r.useMemo(
            () => (null == R || "" === R ? null : E.A.parseVoiceChannelStatus(R, !0, { channelId: t.id })),
            [R, t.id],
        );
    return (r.useEffect(() => {
        null != L &&
            h.default.track(p.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: N,
            });
    }, [L, t.id, t.guild_id, N]),
    O && C)
        ? (0, i.jsxs)(l.D, {
              className: g.vk,
              onClick: (e) => {
                  e.stopPropagation(),
                      n({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      S === T.d.POPOUT && a?.(),
                      (0, u.A)({ channel: t, sourceAnalyticsLocations: N });
              },
              children: [
                  (0, i.jsx)(f.A, {
                      text: L ?? m.intl.string(m.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: g.Qq,
                  }),
                  (0, i.jsx)(o.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: s()(g.rD, null != L ? g.R : void 0),
                      "aria-label": m.intl.string(m.t.bt75uw),
                  }),
              ],
          })
        : null != L
          ? (0, i.jsx)(f.A, { text: L, variant: "text-xs/normal", color: "text-subtle", className: g.Qq })
          : null;
}
