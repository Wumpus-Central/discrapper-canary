n.d(e, { u: () => b });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(477782),
    s = n(497767),
    d = n(267102),
    o = n(144485),
    u = n(814278),
    c = n(259374),
    A = n(961350),
    g = n(985018);
function b(t) {
    let { userId: e, channelId: n, guildId: b, minimal: f = !1 } = t,
        m = (0, c.k)({ channelId: n }),
        p = (0, a.bG)([A.default], () => A.default.getId() === e),
        _ = (0, d.Us)(),
        x = l.useCallback(() => {
            o.A.openSecureFramesUserVerificationModal(
                e,
                n,
                () => (0, u.z4)({ userId: e, channelId: n, guildId: b }),
                _,
            );
        }, [_, n, b, e]);
    return !m || p
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "secure-frames-user-verification",
              label: g.intl.string(g.t["8ErYvY"]),
              action: x,
              icon: f ? s.V : null,
              leadingAccessory: f ? { type: "icon", icon: s.V } : void 0,
          });
}
