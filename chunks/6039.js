n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(248514),
    s = n(393238),
    o = n(877604),
    c = n(998730),
    u = n(703656),
    d = n(430824),
    p = n(768581),
    f = n(302221),
    h = n(693546),
    g = n(305325),
    m = n(246364),
    _ = n(937111),
    b = n(381416),
    E = n(523924),
    O = n(390500),
    v = n(981631),
    y = n(898625),
    I = n(388032),
    C = n(555562);
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
        s = (0, c.N)(a);
    return null == a
        ? (0, r.jsx)("div", { className: C.defaultGradient })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Z, {
                      className: C.splash,
                      src: a,
                      imageClassName: C.cover,
                      width: n,
                      height: l,
                  }),
                  null != s &&
                      (0, r.jsx)("div", {
                          className: C.splashGradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, f.aD)(s, 0.16), " 0%, ")
                                  .concat((0, f.aD)(s, 1), " 100%)"),
                          },
                      }),
                  (0, r.jsx)("div", { className: C.splashGradient }),
              ],
          });
}
let T = (e) => {
    let { guildId: t } = e,
        { ref: n, width: o, height: c } = (0, s.ZP)(),
        [p, f] = i.useState(y.hO.INITIAL),
        T = (0, l.e7)([_.Z], () => _.Z.getRequest(t)),
        N = (0, l.e7)([d.Z], () => d.Z.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: j, guildPreviewDisabled: P } = (0, l.cj)([_.Z], () => ({
            hasFetchedRequestToJoinGuilds: _.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: _.Z.getJoinRequestGuild(t),
        }));
    i.useEffect(() => {
        null != N && (0, u.uL)(v.Z5c.CHANNEL(t));
    }, [N, t]),
        i.useEffect(() => {
            j || h.Z.fetchRequestToJoinGuilds();
        }, [j]);
    let x = i.useCallback(() => {
            f(Math.max(p, y.hO.FILLING)), h.Z.removeGuildJoinRequest(t), (0, u.uL)(v.Z5c.ME);
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
            await h.Z.resetGuildJoinRequest(t), (0, g.hk)(t);
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
                width: o,
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
                            return (0, r.jsx)(b.s, {
                                onDiscardApplication: L,
                                onContinueApplication: () => (0, g.hk)(t),
                                guild: P,
                            });
                    }
                })(),
            }),
            (0, r.jsx)("div", { className: C.dragRegion }),
        ],
    });
};
