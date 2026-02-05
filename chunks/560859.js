"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(688810),
    c = n(532622),
    d = n(271683),
    _ = n(309698),
    f = n(46054),
    p = n(345640),
    h = n(954571),
    m = n(939496),
    g = n(531648),
    E = n(652215),
    A = n(996988),
    I = n(985018),
    T = n(413535);
function y(e) {
    let { voiceChannel: t, onAction: n, onClose: a } = e,
        { themeType: y } = (0, m.E)(),
        { analyticsLocations: S } = (0, u.Ay)(),
        v = (0, p.b)(t),
        C = (0, c.Ay)(t, !0),
        b = (0, o.bG)([_.A], () => _.A.getChannelStatus(t)),
        N = i.useMemo(
            () => (null == b || "" === b ? null : f.A.parseVoiceChannelStatus(b, !0, { channelId: t.id })),
            [b, t.id],
        );
    i.useEffect(() => {
        null != N &&
            h.default.track(E.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: S,
            });
    }, [N, t.id, t.guild_id, S]);
    let R = (e) => {
        e.stopPropagation(),
            n({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
            y === A.d.POPOUT && a?.(),
            (0, d.A)({ channel: t, sourceAnalyticsLocations: S });
    };
    return C && v
        ? (0, r.jsxs)(l.DUT, {
              className: T.vk,
              onClick: R,
              children: [
                  (0, r.jsx)(g.A, {
                      text: N ?? I.intl.string(I.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: T.Qq,
                  }),
                  (0, r.jsx)(l.R2l, {
                      color: "currentColor",
                      size: "xxs",
                      className: s()(T.rD, null != N ? T.R : void 0),
                      "aria-label": I.intl.string(I.t.bt75uw),
                  }),
              ],
          })
        : null != N
          ? (0, r.jsx)(g.A, { text: N, variant: "text-xs/normal", color: "text-subtle", className: T.Qq })
          : null;
}
