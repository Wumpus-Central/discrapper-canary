n.d(t, { B: () => f });
var i = n(255367),
    l = n(73800),
    r = n(442837),
    a = n(481060),
    o = n(40851),
    s = n(352954),
    u = n(630759),
    d = n(441894),
    c = n(314897),
    g = n(388032);
function f(e) {
    let { userId: t, channelId: n, guildId: f, simplified: b = !1 } = e,
        Z = (0, d.J)({ channelId: n }),
        m = (0, r.e7)([c.default], () => c.default.getId() === t),
        v = (0, o.bp)(),
        p = l.useCallback(() => {
            s.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, u.fz)({
                        userId: t,
                        channelId: n,
                        guildId: f
                    }),
                v
            );
        }, [v, n, f, t]);
    return !Z || m
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'secure-frames-user-verification',
              label: g.intl.string(g.t['8ErYvb']),
              action: p,
              icon: b ? a._uN : null
          });
}
