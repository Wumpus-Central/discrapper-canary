n.d(t, {
    A: () => A,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(688810),
    u = n(532622),
    d = n(271683),
    f = n(309698),
    p = n(46054),
    _ = n(345640),
    h = n(954571),
    m = n(939496),
    g = n(531648),
    E = n(652215),
    b = n(996988),
    y = n(985018),
    O = n(413535);

function A(e) {
    let { voiceChannel: t, onAction: n, onClose: a } = e,
        { themeType: A } = (0, m.E)(),
        { analyticsLocations: v } = (0, c.Ay)(),
        S = (0, _.b)(t),
        I = (0, u.Ay)(t, !0),
        T = (0, o.bG)([f.A], () => f.A.getChannelStatus(t)),
        C = i.useMemo(
            () =>
                null == T || "" === T
                    ? null
                    : p.A.parseVoiceChannelStatus(T, !0, {
                          channelId: t.id,
                      }),
            [T, t.id],
        );
    i.useEffect(() => {
        null != C &&
            h.default.track(E.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: v,
            });
    }, [C, t.id, t.guild_id, v]);
    let N = (e) => {
        e.stopPropagation(),
            n({
                action: "PRESS_VOICE_CHANNEL_STATUS",
            }),
            A === b.d.POPOUT && (null == a || a()),
            (0, d.A)({
                channel: t,
                sourceAnalyticsLocations: v,
            });
    };
    return I && S
        ? (0, r.jsxs)(l.DUT, {
              className: O.vk,
              onClick: N,
              children: [
                  (0, r.jsx)(g.A, {
                      text: null != C ? C : y.intl.string(y.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: O.Qq,
                  }),
                  (0, r.jsx)(l.R2l, {
                      color: "currentColor",
                      size: "xxs",
                      className: s()(O.rD, null != C ? O.R : void 0),
                      "aria-label": y.intl.string(y.t.bt75uw),
                  }),
              ],
          })
        : null != C
          ? (0, r.jsx)(g.A, {
                text: C,
                variant: "text-xs/normal",
                color: "text-subtle",
                className: O.Qq,
            })
          : null;
}
