n.d(t, { B: () => b });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    l = n(481060),
    c = n(40851),
    a = n(352954),
    u = n(630759),
    s = n(441894),
    d = n(314897),
    f = n(388032);
function b(e) {
    let { userId: t, channelId: n, guildId: b, minimal: g = !1 } = e,
        O = (0, s.J)({ channelId: n }),
        p = (0, o.e7)([d.default], () => d.default.getId() === t),
        j = (0, c.bp)(),
        y = i.useCallback(() => {
            a.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, u.fz)({
                        userId: t,
                        channelId: n,
                        guildId: b
                    }),
                j
            );
        }, [j, n, b, t]);
    return !O || p
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'secure-frames-user-verification',
              label: f.intl.string(f.t['8ErYvb']),
              action: y,
              icon: g ? l._uN : null
          });
}
