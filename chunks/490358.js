n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(314116),
    s = n(765671),
    o = n(4616),
    d = n(743674),
    c = n(976860),
    u = n(71393),
    A = n(486020),
    h = n(998304),
    _ = n(624458),
    m = n(202384),
    p = n(513461),
    g = n(212455),
    E = n(892040),
    f = n(385310),
    I = n(6939),
    C = n(652215),
    N = n(852431),
    T = n(985018),
    S = n(532956);
function x(e) {
    let { guild: t, width: n, height: a } = e,
        l = r.useMemo(
            () => (t?.splash != null ? A.Ay.getGuildSplashURL({ id: t?.id, splash: t?.splash }) : null),
            [t?.splash, t?.id],
        ),
        s = (0, d.S)(l);
    return null == l
        ? (0, i.jsx)("div", { className: S.Eq })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.A, { className: S.Yi, src: l, imageClassName: S.Iv, width: n, height: a }),
                  null != s &&
                      (0, i.jsx)("div", {
                          className: S.qj,
                          style: {
                              background: `linear-gradient(180deg, ${(0, h.cb)(s, 0.16)} 0%, ${(0, h.cb)(s, 1)} 100%)`,
                          },
                      }),
                  (0, i.jsx)("div", { className: S.qj }),
              ],
          });
}
let v = (e) => {
    let { guildId: t } = e,
        { ref: n, width: o, height: d } = (0, s.Ay)(),
        [A, h] = r.useState(N.go.INITIAL),
        v = (0, a.bG)([g.A], () => g.A.getRequest(t)),
        b = (0, a.bG)([u.A], () => u.A.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: y, guildPreviewDisabled: L } = (0, a.cf)([g.A], () => ({
            hasFetchedRequestToJoinGuilds: g.A.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: g.A.getJoinRequestGuild(t),
        }));
    r.useEffect(() => {
        null != b && (0, c.pX)(C.BVt.CHANNEL(t));
    }, [b, t]),
        r.useEffect(() => {
            y || _.A.fetchRequestToJoinGuilds();
        }, [y]);
    let O = r.useCallback(() => {
            h(Math.max(A, N.go.FILLING)), _.A.removeGuildJoinRequest(t), (0, c.pX)(C.BVt.ME);
        }, [t, A]),
        R = (e, t) => () => {
            (0, l.A)({
                title: T.intl.string(T.t.y0CVes),
                subtitle: e,
                cancelText: T.intl.string(T.t.oEAioF),
                onConfirm: t,
                confirmText: T.intl.string(T.t.p89ACt),
            });
        },
        P = async () => {
            await _.A.resetGuildJoinRequest(t), (0, m.Ze)(t);
        },
        j = (e) => {
            e ? R(T.intl.format(T.t["9ZezpN"], { name: L?.name }), O)() : O();
        },
        D = R(T.intl.format(T.t.fJwWVt, { name: L?.name }), O);
    return (0, i.jsxs)("div", {
        className: S.MY,
        ref: n,
        children: [
            (0, i.jsx)(x, { guild: L, height: d, width: o }),
            (0, i.jsx)("div", {
                className: S.FG,
                children: (() => {
                    if (null == v) return null;
                    switch (v.applicationStatus) {
                        case p.B5.SUBMITTED:
                            return (0, i.jsx)(I.A, { onWithdrawApplication: () => j(!0), guild: L });
                        case p.B5.REJECTED:
                            return (0, i.jsx)(f.A, {
                                reapplyText: T.intl.string(T.t.I1LYVk),
                                onReapply: P,
                                confirmText: T.intl.string(T.t.g9tK0o),
                                onWithdrawApplication: j,
                                rejectionReason: v.rejectionReason,
                                guild: L,
                            });
                        default:
                            return (0, i.jsx)(E.K, {
                                onDiscardApplication: D,
                                onContinueApplication: () => (0, m.Ze)(t),
                                guild: L,
                            });
                    }
                })(),
            }),
            (0, i.jsx)("div", { className: S.T_ }),
        ],
    });
};
