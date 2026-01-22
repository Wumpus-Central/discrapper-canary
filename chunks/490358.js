n.d(t, { A: () => C }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(314116),
    s = n(765671),
    o = n(4616),
    c = n(743674),
    u = n(976860),
    d = n(71393),
    p = n(486020),
    f = n(998304),
    h = n(624458),
    A = n(202384),
    g = n(513461),
    m = n(212455),
    b = n(892040),
    _ = n(385310),
    E = n(6939),
    O = n(652215),
    y = n(852431),
    I = n(985018),
    v = n(532956);
function S(e) {
    let { guild: t, width: n, height: l } = e,
        a = i.useMemo(
            () =>
                (null == t ? void 0 : t.splash) != null
                    ? p.Ay.getGuildSplashURL({
                          id: null == t ? void 0 : t.id,
                          splash: null == t ? void 0 : t.splash,
                      })
                    : null,
            [null == t ? void 0 : t.splash, null == t ? void 0 : t.id],
        ),
        s = (0, c.S)(a);
    return null == a
        ? (0, r.jsx)("div", { className: v.Eq })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.A, {
                      className: v.Yi,
                      src: a,
                      imageClassName: v.Iv,
                      width: n,
                      height: l,
                  }),
                  null != s &&
                      (0, r.jsx)("div", {
                          className: v.qj,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, f.cb)(s, 0.16), " 0%, ")
                                  .concat((0, f.cb)(s, 1), " 100%)"),
                          },
                      }),
                  (0, r.jsx)("div", { className: v.qj }),
              ],
          });
}
let C = (e) => {
    let { guildId: t } = e,
        { ref: n, width: o, height: c } = (0, s.Ay)(),
        [p, f] = i.useState(y.go.INITIAL),
        C = (0, l.bG)([m.A], () => m.A.getRequest(t)),
        N = (0, l.bG)([d.A], () => d.A.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: T, guildPreviewDisabled: j } = (0, l.cf)([m.A], () => ({
            hasFetchedRequestToJoinGuilds: m.A.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: m.A.getJoinRequestGuild(t),
        }));
    i.useEffect(() => {
        null != N && (0, u.pX)(O.BVt.CHANNEL(t));
    }, [N, t]),
        i.useEffect(() => {
            T || h.A.fetchRequestToJoinGuilds();
        }, [T]);
    let x = i.useCallback(() => {
            f(Math.max(p, y.go.FILLING)), h.A.removeGuildJoinRequest(t), (0, u.pX)(O.BVt.ME);
        }, [t, p]),
        P = (e, t) => () => {
            (0, a.A)({
                title: I.intl.string(I.t.y0CVes),
                subtitle: e,
                cancelText: I.intl.string(I.t.oEAioF),
                onConfirm: t,
                confirmText: I.intl.string(I.t.p89ACt),
            });
        },
        w = async () => {
            await h.A.resetGuildJoinRequest(t), (0, A.Ze)(t);
        },
        L = (e) => {
            e ? P(I.intl.format(I.t["9ZezpN"], { name: null == j ? void 0 : j.name }), x)() : x();
        },
        R = P(I.intl.format(I.t.fJwWVt, { name: null == j ? void 0 : j.name }), x);
    return (0, r.jsxs)("div", {
        className: v.MY,
        ref: n,
        children: [
            (0, r.jsx)(S, {
                guild: j,
                height: c,
                width: o,
            }),
            (0, r.jsx)("div", {
                className: v.FG,
                children: (() => {
                    if (null == C) return null;
                    switch (C.applicationStatus) {
                        case g.B5.SUBMITTED:
                            return (0, r.jsx)(E.A, {
                                onWithdrawApplication: () => L(!0),
                                guild: j,
                            });
                        case g.B5.REJECTED:
                            return (0, r.jsx)(_.A, {
                                reapplyText: I.intl.string(I.t.I1LYVk),
                                onReapply: w,
                                confirmText: I.intl.string(I.t.g9tK0o),
                                onWithdrawApplication: L,
                                rejectionReason: C.rejectionReason,
                                guild: j,
                            });
                        default:
                            return (0, r.jsx)(b.K, {
                                onDiscardApplication: R,
                                onContinueApplication: () => (0, A.Ze)(t),
                                guild: j,
                            });
                    }
                })(),
            }),
            (0, r.jsx)("div", { className: v.T_ }),
        ],
    });
};
