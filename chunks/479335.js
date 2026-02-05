n.d(t, { u: () => g });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    d = n(267102),
    s = n(144485),
    o = n(814278),
    u = n(259374),
    c = n(961350),
    A = n(985018);
function g(e) {
    let { userId: t, channelId: n, guildId: g, minimal: E = !1 } = e,
        _ = (0, u.k)({ channelId: n }),
        b = (0, a.bG)([c.default], () => c.default.getId() === t),
        f = (0, d.Us)(),
        m = l.useCallback(() => {
            s.A.openSecureFramesUserVerificationModal(
                t,
                n,
                () => (0, o.z4)({ userId: t, channelId: n, guildId: g }),
                f,
            );
        }, [f, n, g, t]);
    return !_ || b
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "secure-frames-user-verification",
              label: A.intl.string(A.t["8ErYvY"]),
              action: m,
              icon: E ? r.V1C : null,
              leadingAccessory: E ? { type: "icon", icon: r.V1C } : void 0,
          });
}
