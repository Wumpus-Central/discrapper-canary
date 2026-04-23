i.d(e, { u: () => b });
var n = i(627968),
    l = i(64700),
    a = i(17928),
    r = i(477782),
    s = i(497767),
    d = i(267102),
    o = i(144485),
    u = i(814278),
    c = i(259374),
    A = i(495544),
    g = i(985018);
function b(t) {
    let { userId: e, channelId: i, guildId: b, minimal: f = !1 } = t,
        m = (0, c.k)({ channelId: i }),
        p = (0, a.bG)([A.default], () => A.default.getId() === e),
        _ = (0, d.Us)(),
        x = l.useCallback(() => {
            o.A.openSecureFramesUserVerificationModal(
                e,
                i,
                () => (0, u.z4)({ userId: e, channelId: i, guildId: b }),
                _,
            );
        }, [_, i, b, e]);
    return !m || p
        ? null
        : (0, n.jsx)(r.Dr, {
              id: "secure-frames-user-verification",
              label: g.intl.string(g.t["8ErYvY"]),
              action: x,
              icon: f ? s.V : null,
              leadingAccessory: f ? { type: "icon", icon: s.V } : void 0,
          });
}
