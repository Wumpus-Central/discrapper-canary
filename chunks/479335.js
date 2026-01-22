n.d(t, {
    u: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(267102),
    s = n(144485),
    d = n(814278),
    c = n(259374),
    u = n(961350),
    A = n(985018);

function f(e) {
    let { userId: t, channelId: n, guildId: f, minimal: b = !1 } = e,
        g = (0, c.k)({
            channelId: n,
        }),
        p = (0, l.bG)([u.default], () => u.default.getId() === t),
        h = (0, o.Us)(),
        j = i.useCallback(() => {
            s.A.openSecureFramesUserVerificationModal(
                t,
                n,
                () =>
                    (0, d.z4)({
                        userId: t,
                        channelId: n,
                        guildId: f,
                    }),
                h,
            );
        }, [h, n, f, t]);
    return !g || p
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "secure-frames-user-verification",
              label: A.intl.string(A.t["8ErYvY"]),
              action: j,
              icon: b ? a.V1C : null,
          });
}
