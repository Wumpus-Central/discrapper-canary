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
    let { userId: n, channelId: e, guildId: Z, location: f } = t,
        v = (0, u.J)({
            channelId: e,
            location: f
        }),
        b = (0, a.e7)([c.default], () => c.default.getId() === n),
        h = (0, d.bp)(),
        m = l.useCallback(() => {
            r.Z.openSecureFramesUserVerificationModal(
                n,
                e,
                () =>
                    (0, s.fz)({
                        userId: n,
                        channelId: e,
                        guildId: Z
                    }),
                h
            );
        }, [h, e, Z, n]);
    return !v || b
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'secure-frames-user-verification',
              label: g.intl.string(g.t['8ErYvb']),
              action: m
          });
}
