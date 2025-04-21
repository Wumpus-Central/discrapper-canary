n.d(t, { B: () => f });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(40851),
    a = n(352954),
    d = n(630759),
    c = n(441894),
    u = n(314897),
    g = n(388032);
function f(e) {
    let { userId: t, channelId: n, guildId: f, simplified: m = !1 } = e,
        Z = (0, c.J)({ channelId: n }),
        b = (0, l.e7)([u.default], () => u.default.getId() === t),
        h = (0, s.bp)(),
        j = r.useCallback(() => {
            a.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, d.fz)({
                        userId: t,
                        channelId: n,
                        guildId: f
                    }),
                h
            );
        }, [h, n, f, t]);
    return !Z || b
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'secure-frames-user-verification',
              label: g.intl.string(g.t['8ErYvb']),
              action: j,
              icon: m ? o._uN : null
          });
}
