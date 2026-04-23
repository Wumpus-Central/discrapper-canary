n.d(t, { u: () => b });
var i = n(627968),
    l = n(64700),
    o = n(17928),
    r = n(477782),
    s = n(497767),
    d = n(267102),
    a = n(144485),
    c = n(814278),
    u = n(259374),
    A = n(495544),
    g = n(985018);
function b(e) {
    let { userId: t, channelId: n, guildId: b, minimal: f = !1 } = e,
        x = (0, u.k)({ channelId: n }),
        m = (0, o.bG)([A.default], () => A.default.getId() === t),
        v = (0, d.Us)(),
        E = l.useCallback(() => {
            a.A.openSecureFramesUserVerificationModal(
                t,
                n,
                () => (0, c.z4)({ userId: t, channelId: n, guildId: b }),
                v,
            );
        }, [v, n, b, t]);
    return !x || m
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "secure-frames-user-verification",
              label: g.intl.string(g.t["8ErYvY"]),
              action: E,
              icon: f ? s.V : null,
              leadingAccessory: f ? { type: "icon", icon: s.V } : void 0,
          });
}
