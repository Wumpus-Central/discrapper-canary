n.d(t, { B: () => f });
var i = n(255367),
    r = n(73800),
    l = n(442837),
    o = n(481060),
    c = n(40851),
    s = n(352954),
    a = n(630759),
    u = n(441894),
    d = n(314897),
    b = n(388032);
function f(e) {
    let { userId: t, channelId: n, guildId: f, minimal: g = !1 } = e,
        j = (0, u.J)({ channelId: n }),
        m = (0, l.e7)([d.default], () => d.default.getId() === t),
        p = (0, c.bp)(),
        v = r.useCallback(() => {
            s.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, a.fz)({
                        userId: t,
                        channelId: n,
                        guildId: f,
                    }),
                p,
            );
        }, [p, n, f, t]);
    return !j || m
        ? null
        : (0, i.jsx)(o.sNh, {
              id: "secure-frames-user-verification",
              label: b.intl.string(b.t["8ErYvb"]),
              action: v,
              icon: g ? o._uN : null,
          });
}
