n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(248514),
    o = n(393238),
    s = n(877604),
    c = n(998730),
    u = n(703656),
    d = n(430824),
    p = n(768581),
    f = n(302221),
    g = n(693546),
    h = n(305325),
    m = n(246364),
    b = n(937111),
    _ = n(381416),
    E = n(523924),
    O = n(390500),
    v = n(981631),
    y = n(898625),
    I = n(388032),
    C = n(643854);
function S(e) {
    let { guild: t, width: n, height: l } = e,
        a = i.useMemo(
            () =>
                (null == t ? void 0 : t.splash) != null
                    ? p.ZP.getGuildSplashURL({
                          id: null == t ? void 0 : t.id,
                          splash: null == t ? void 0 : t.splash,
                      })
                    : null,
            [null == t ? void 0 : t.splash, null == t ? void 0 : t.id],
        ),
        o = (0, c.N)(a);
    return null == a
        ? (0, r.jsx)("div", { className: C.defaultGradient })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {
                      className: C.splash,
                      src: a,
                      imageClassName: C.cover,
                      width: n,
                      height: l,
                  }),
                  null != o &&
                      (0, r.jsx)("div", {
                          className: C.splashGradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, f.aD)(o, 0.16), " 0%, ")
                                  .concat((0, f.aD)(o, 1), " 100%)"),
                          },
                      }),
                  (0, r.jsx)("div", { className: C.splashGradient }),
              ],
          });
}
let T = (e) => {
    let { guildId: t } = e,
        { ref: n, width: s, height: c } = (0, o.ZP)(),
        [p, f] = i.useState(y.hO.INITIAL),
        T = (0, l.e7)([b.Z], () => b.Z.getRequest(t)),
        N = (0, l.e7)([d.Z], () => d.Z.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: j, guildPreviewDisabled: P } = (0, l.cj)([b.Z], () => ({
            hasFetchedRequestToJoinGuilds: b.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: b.Z.getJoinRequestGuild(t),
        }));
    i.useEffect(() => {
        null != N && (0, u.uL)(v.Z5c.CHANNEL(t));
    }, [N, t]),
        i.useEffect(() => {
            j || g.Z.fetchRequestToJoinGuilds();
        }, [j]);
    let x = i.useCallback(() => {
            f(Math.max(p, y.hO.FILLING)), g.Z.removeGuildJoinRequest(t), (0, u.uL)(v.Z5c.ME);
        }, [t, p]),
        A = (e, t) => () => {
            (0, a.Z)({
                title: I.intl.string(I.t.y0CVes),
                subtitle: e,
                cancelText: I.intl.string(I.t.oEAioF),
                onConfirm: t,
                confirmText: I.intl.string(I.t.p89ACt),
            });
        },
        Z = async () => {
            await g.Z.resetGuildJoinRequest(t), (0, h.hk)(t);
        },
        w = (e) => {
            if (!e) return void x();
            A(I.intl.format(I.t["9ZezpN"], { name: null == P ? void 0 : P.name }), x)();
        },
        L = A(I.intl.format(I.t.fJwWVt, { name: null == P ? void 0 : P.name }), x);
    return (0, r.jsxs)("div", {
        className: C.page,
        ref: n,
        children: [
            (0, r.jsx)(S, {
                guild: P,
                height: c,
                width: s,
            }),
            (0, r.jsx)("div", {
                className: C.contentWrapper,
                children: (() => {
                    if (null == T) return null;
                    switch (T.applicationStatus) {
                        case m.wB.SUBMITTED:
                            return (0, r.jsx)(O.Z, {
                                onWithdrawApplication: () => w(!0),
                                guild: P,
                            });
                        case m.wB.REJECTED:
                            return (0, r.jsx)(E.Z, {
                                reapplyText: I.intl.string(I.t.I1LYVk),
                                onReapply: Z,
                                confirmText: I.intl.string(I.t.g9tK0o),
                                onWithdrawApplication: w,
                                rejectionReason: T.rejectionReason,
                                guild: P,
                            });
                        default:
                            return (0, r.jsx)(_.s, {
                                onDiscardApplication: L,
                                onContinueApplication: () => (0, h.hk)(t),
                                guild: P,
                            });
                    }
                })(),
            }),
            (0, r.jsx)("div", { className: C.dragRegion }),
        ],
    });
};
