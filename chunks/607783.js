n.d(t, { B: () => g });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(481060),
    a = n(40851),
    c = n(352954),
    s = n(630759),
    u = n(441894),
    d = n(314897),
    f = n(388032);
function g(e) {
    let { userId: t, channelId: n, guildId: g, minimal: b = !1 } = e,
        p = (0, u.J)({ channelId: n }),
        h = (0, i.e7)([d.default], () => d.default.getId() === t),
        j = (0, a.bp)(),
        m = l.useCallback(() => {
            c.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, s.fz)({
                        userId: t,
                        channelId: n,
                        guildId: g
                    }),
                j
            );
        }, [j, n, g, t]);
    return !p || h
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'secure-frames-user-verification',
              label: f.intl.string(f.t['8ErYvb']),
              action: m,
              icon: b ? o._uN : null
          });
}
