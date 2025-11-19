n.d(t, { B: () => b });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    o = n(481060),
    c = n(728285),
    s = n(352954),
    a = n(630759),
    u = n(441894),
    d = n(314897),
    f = n(388032);
function b(e) {
    let { userId: t, channelId: n, guildId: b, minimal: g = !1 } = e,
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
                        guildId: b,
                    }),
                p,
            );
        }, [p, n, b, t]);
    return !j || m
        ? null
        : (0, i.jsx)(o.sNh, {
              id: "secure-frames-user-verification",
              label: f.intl.string(f.t["8ErYvY"]),
              action: v,
              icon: g ? o._uN : null,
          });
}
