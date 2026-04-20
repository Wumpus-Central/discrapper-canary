"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(688810),
    u = n(532622),
    c = n(271683),
    d = n(882840),
    _ = n(46054),
    f = n(345640),
    p = n(954571),
    h = n(939496),
    m = n(531648),
    E = n(652215),
    g = n(996988),
    A = n(985018),
    I = n(237770);
function T(e) {
    let { voiceChannel: t, onAction: n, onClose: s } = e,
        { themeType: T } = (0, h.E)(),
        { analyticsLocations: S } = (0, l.Ay)(),
        y = (0, f.b)(t),
        v = (0, u.Ay)(t, !0),
        N = (0, d.l)(t),
        C = i.useMemo(
            () => (null == N || "" === N ? null : _.A.parseVoiceChannelStatus(N, !0, { channelId: t.id })),
            [N, t.id],
        );
    i.useEffect(() => {
        null != C &&
            p.default.track(E.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: S,
            });
    }, [C, t.id, t.guild_id, S]);
    let R = (e) => {
        e.stopPropagation(),
            n({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
            T === g.d.POPOUT && s?.(),
            (0, c.A)({ channel: t, sourceAnalyticsLocations: S });
    };
    return v && y
        ? (0, r.jsxs)(o.DUT, {
              className: I.vk,
              onClick: R,
              children: [
                  (0, r.jsx)(m.A, {
                      text: C ?? A.intl.string(A.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: I.Qq,
                  }),
                  (0, r.jsx)(o.R2l, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(I.rD, null != C ? I.R : void 0),
                      "aria-label": A.intl.string(A.t.bt75uw),
                  }),
              ],
          })
        : null != C
          ? (0, r.jsx)(m.A, { text: C, variant: "text-xs/normal", color: "text-subtle", className: I.Qq })
          : null;
}
