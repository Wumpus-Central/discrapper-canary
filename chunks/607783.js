n.d(t, { B: () => g });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(40851),
    u = n(352954),
    s = n(630759),
    c = n(441894),
    d = n(314897),
    f = n(388032);
function g(e) {
    let { userId: t, channelId: n, guildId: g, location: b, simplified: Z = !1 } = e,
        v = (0, c.J)({
            channelId: n,
            location: b
        }),
        p = (0, r.e7)([d.default], () => d.default.getId() === t),
        N = (0, a.bp)(),
        O = l.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, s.fz)({
                        userId: t,
                        channelId: n,
                        guildId: g
                    }),
                N
            );
        }, [N, n, g, t]);
    return !v || p
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'secure-frames-user-verification',
              label: f.NW.string(f.t['8ErYvb']),
              action: O,
              icon: Z ? o._uN : null
          });
}
