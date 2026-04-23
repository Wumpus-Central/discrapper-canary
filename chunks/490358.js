n.d(t, { A: () => O });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(314116),
    s = n(765671),
    o = n(4616),
    d = n(743674),
    u = n(976860),
    c = n(71393),
    A = n(486020),
    h = n(998304),
    _ = n(624458),
    E = n(202384),
    p = n(513461),
    m = n(212455),
    g = n(892040),
    I = n(385310),
    C = n(6939),
    f = n(652215),
    T = n(985018),
    S = n(665819);
function N(e) {
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
let O = (e) => {
    let { guildId: t } = e,
        { ref: n, width: o, height: d } = (0, s.Ay)(),
        A = (0, a.bG)([m.A], () => m.A.getRequest(t)),
        h = (0, a.bG)([c.A], () => c.A.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: O, guildPreviewDisabled: L } = (0, a.cf)([m.A], () => ({
            hasFetchedRequestToJoinGuilds: m.A.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: m.A.getJoinRequestGuild(t),
        }));
    r.useEffect(() => {
        null != h && (0, u.pX)(f.BVt.CHANNEL(t));
    }, [h, t]),
        r.useEffect(() => {
            O || _.A.fetchRequestToJoinGuilds();
        }, [O]);
    let y = r.useCallback(() => {
            _.A.removeGuildJoinRequest(t), (0, u.pX)(f.BVt.ME);
        }, [t]),
        v = (e, t) => () => {
            (0, l.A)({
                title: T.intl.string(T.t.y0CVes),
                subtitle: e,
                cancelText: T.intl.string(T.t.oEAioF),
                onConfirm: t,
                confirmText: T.intl.string(T.t.p89ACt),
            });
        },
        b = async () => {
            await _.A.resetGuildJoinRequest(t), (0, E.Ze)(t);
        },
        D = (e) => {
            e ? v(T.intl.format(T.t["9ZezpN"], { name: L?.name }), y)() : y();
        },
        R = v(T.intl.format(T.t.fJwWVt, { name: L?.name }), y);
    return (0, i.jsxs)("div", {
        className: S.MY,
        ref: n,
        children: [
            (0, i.jsx)(N, { guild: L, height: d, width: o }),
            (0, i.jsx)("div", {
                className: S.FG,
                children: (() => {
                    if (null == A) return null;
                    switch (A.applicationStatus) {
                        case p.B5.SUBMITTED:
                            return (0, i.jsx)(C.A, { onWithdrawApplication: () => D(!0), guild: L });
                        case p.B5.REJECTED:
                            return (0, i.jsx)(I.A, {
                                reapplyText: T.intl.string(T.t.I1LYVk),
                                onReapply: b,
                                confirmText: T.intl.string(T.t.g9tK0o),
                                onWithdrawApplication: D,
                                rejectionReason: A.rejectionReason,
                                guild: L,
                            });
                        default:
                            return (0, i.jsx)(g.K, {
                                onDiscardApplication: R,
                                onContinueApplication: () => (0, E.Ze)(t),
                                guild: L,
                            });
                    }
                })(),
            }),
            (0, i.jsx)("div", { className: S.T_ }),
        ],
    });
};
