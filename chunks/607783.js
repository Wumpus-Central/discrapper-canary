n.d(t, { B: () => f });
var i = n(951288),
    l = n(647438),
    r = n(442837),
    a = n(481060),
    o = n(728285),
    s = n(352954),
    u = n(630759),
    d = n(441894),
    c = n(314897),
    g = n(388032);
function f(e) {
    let { userId: t, channelId: n, guildId: f, minimal: b = !1 } = e,
        Z = (0, d.J)({ channelId: n }),
        p = (0, r.e7)([c.default], () => c.default.getId() === t),
        m = (0, o.bp)(),
        v = l.useCallback(() => {
            s.Z.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, u.fz)({
                        userId: t,
                        channelId: n,
                        guildId: f,
                    }),
                m,
            );
        }, [m, n, f, t]);
    return !Z || p
        ? null
        : (0, i.jsx)(a.sNh, {
              id: "secure-frames-user-verification",
              label: g.intl.string(g.t["8ErYvY"]),
              action: v,
              icon: b ? a._uN : null,
          });
}
