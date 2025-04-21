n.d(t, { B: () => f });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(40851),
    s = n(352954),
    u = n(630759),
    c = n(441894),
    d = n(314897),
    g = n(388032);
function f(e) {
    let { userId: t, channelId: n, guildId: f, simplified: b = !1 } = e,
        m = (0, c.J)({ channelId: n }),
        O = (0, r.e7)([d.default], () => d.default.getId() === t),
        Z = (0, o.bp)(),
        v = i.useCallback(() => {
            s.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, u.fz)({
                        userId: t,
                        channelId: n,
                        guildId: f
                    }),
                Z
            );
        }, [Z, n, f, t]);
    return !m || O
        ? null
        : (0, l.jsx)(a.sNh, {
              id: 'secure-frames-user-verification',
              label: g.intl.string(g.t['8ErYvb']),
              action: v,
              icon: b ? a._uN : null
          });
}
