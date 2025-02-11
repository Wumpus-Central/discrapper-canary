e.d(n, { B: () => Z });
var i = e(200651),
    l = e(192379),
    a = e(442837),
    o = e(481060),
    d = e(40851),
    r = e(352954),
    s = e(630759),
    u = e(441894),
    c = e(314897),
    g = e(388032);
function Z(t) {
    let { userId: n, channelId: e, guildId: Z, location: f, simplified: v = !1 } = t,
        b = (0, u.J)({
            channelId: e,
            location: f
        }),
        h = (0, a.e7)([c.default], () => c.default.getId() === n),
        m = (0, d.bp)(),
        x = l.useCallback(() => {
            r.Z.openSecureFramesUserVerificationModal(
                n,
                e,
                () =>
                    (0, s.fz)({
                        userId: n,
                        channelId: e,
                        guildId: Z
                    }),
                m
            );
        }, [m, e, Z, n]);
    return !b || h
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'secure-frames-user-verification',
              label: g.intl.string(g.t['8ErYvb']),
              action: x,
              icon: v ? o._uN : null
          });
}
