n.d(t, { B: () => g });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(40851),
    d = n(352954),
    o = n(630759),
    u = n(441894),
    c = n(314897),
    f = n(388032);
function g(e) {
    let { userId: t, channelId: n, guildId: g, simplified: Z = !1 } = e,
        N = (0, u.J)({ channelId: n }),
        h = (0, l.e7)([c.default], () => c.default.getId() === t),
        j = (0, a.bp)(),
        v = r.useCallback(() => {
            d.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, o.fz)({
                        userId: t,
                        channelId: n,
                        guildId: g
                    }),
                j
            );
        }, [j, n, g, t]);
    return !N || h
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'secure-frames-user-verification',
              label: f.NW.string(f.t['8ErYvb']),
              action: v,
              icon: Z ? s._uN : null
          });
}
