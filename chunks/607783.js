e.d(t, {
    B: function () {
        return g;
    }
});
var i = e(200651),
    l = e(192379),
    r = e(442837),
    o = e(481060),
    u = e(40851),
    a = e(352954),
    d = e(630759),
    s = e(441894),
    c = e(314897),
    f = e(388032);
function g(n) {
    let { userId: t, channelId: e, guildId: g, location: Z } = n,
        m = (0, s.J)({
            channelId: e,
            location: Z
        }),
        v = (0, r.e7)([c.default], () => c.default.getId() === t),
        b = (0, u.bp)(),
        x = l.useCallback(() => {
            a.Z.openSecureFramesUserVerificationModal(
                t,
                e,
                () =>
                    (0, d.fz)({
                        userId: t,
                        channelId: e,
                        guildId: g
                    }),
                b
            );
        }, [b, e, g, t]);
    return !m || v
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'secure-frames-user-verification',
              label: f.intl.string(f.t['8ErYvb']),
              action: x
          });
}
