n.d(e, { B: () => Z });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    d = n(481060),
    r = n(40851),
    o = n(352954),
    s = n(630759),
    u = n(441894),
    c = n(314897),
    g = n(388032);
function Z(t) {
    let { userId: e, channelId: n, guildId: Z, location: f } = t,
        v = (0, u.J)({
            channelId: n,
            location: f
        }),
        b = (0, a.e7)([c.default], () => c.default.getId() === e),
        h = (0, r.bp)(),
        m = l.useCallback(() => {
            o.Z.openSecureFramesUserVerificationModal(
                e,
                n,
                () =>
                    (0, s.fz)({
                        userId: e,
                        channelId: n,
                        guildId: Z
                    }),
                h
            );
        }, [h, n, Z, e]);
    return !v || b
        ? null
        : (0, i.jsx)(d.sNh, {
              id: 'secure-frames-user-verification',
              label: g.intl.string(g.t['8ErYvb']),
              action: m
          });
}
