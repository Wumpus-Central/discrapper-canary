n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(393238),
    o = n(877604),
    c = n(998730),
    d = n(703656),
    u = n(430824),
    h = n(768581),
    m = n(302221),
    p = n(693546),
    g = n(305325),
    _ = n(246364),
    f = n(937111),
    E = n(381416),
    I = n(523924),
    C = n(390500),
    N = n(981631),
    v = n(898625),
    T = n(388032),
    S = n(351594);
function A(e) {
    let { guild: t, width: n, height: r } = e,
        a = l.useMemo(
            () =>
                (null == t ? void 0 : t.splash) != null
                    ? h.ZP.getGuildSplashURL({
                          id: null == t ? void 0 : t.id,
                          splash: null == t ? void 0 : t.splash
                      })
                    : null,
            [null == t ? void 0 : t.splash, null == t ? void 0 : t.id]
        ),
        s = (0, c.N)(a);
    return null == a
        ? (0, i.jsx)('div', { className: S.defaultGradient })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      className: S.splash,
                      src: a,
                      imageClassName: S.cover,
                      width: n,
                      height: r
                  }),
                  null != s &&
                      (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)('div', {
                              className: S.splashGradient,
                              style: { background: 'linear-gradient(180deg, '.concat((0, m.aD)(s, 0.16), ' 0%, ').concat((0, m.aD)(s, 1), ' 100%)') }
                          })
                      }),
                  (0, i.jsx)('div', { className: S.splashGradient })
              ]
          });
}
let b = (e) => {
    let { guildId: t } = e,
        { ref: n, width: o, height: c } = (0, s.Z)(),
        [h, m] = l.useState(v.hO.INITIAL),
        b = (0, r.e7)([f.Z], () => f.Z.getRequest(t)),
        Z = (0, r.e7)([u.Z], () => u.Z.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: x, guildPreviewDisabled: L } = (0, r.cj)([f.Z], () => ({
            hasFetchedRequestToJoinGuilds: f.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: f.Z.getJoinRequestGuild(t)
        }));
    l.useEffect(() => {
        null != Z && (0, d.uL)(N.Z5c.CHANNEL(t));
    }, [Z, t]),
        l.useEffect(() => {
            x || p.Z.fetchRequestToJoinGuilds();
        }, [x]);
    let y = l.useCallback(() => {
            m(Math.max(h, v.hO.FILLING)), p.Z.removeGuildJoinRequest(t), (0, d.uL)(N.Z5c.ME);
        }, [t, h]),
        P = (e, t) => () => {
            (0, a.h7j)((n) =>
                (0, i.jsx)(a.ConfirmModal, {
                    header: T.intl.string(T.t.y0CVen),
                    cancelText: T.intl.string(T.t.oEAioK),
                    onConfirm: t,
                    confirmText: T.intl.string(T.t.p89ACg),
                    confirmButtonColor: a.zxk.Colors.RED,
                    ...n,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: e
                    })
                })
            );
        },
        O = async () => {
            await p.Z.resetGuildJoinRequest(t), (0, g.hk)(t);
        },
        R = P(T.intl.format(T.t['9ZezpK'], { name: null == L ? void 0 : L.name }), y),
        j = P(T.intl.format(T.t.fJwWVl, { name: null == L ? void 0 : L.name }), y);
    return (0, i.jsxs)('div', {
        className: S.page,
        ref: n,
        children: [
            (0, i.jsx)(A, {
                guild: L,
                height: c,
                width: o
            }),
            (0, i.jsx)('div', {
                className: S.contentWrapper,
                children: (() => {
                    if (null == b) return null;
                    switch (b.applicationStatus) {
                        case _.wB.SUBMITTED:
                            return (0, i.jsx)(C.Z, {
                                onWithdrawApplication: R,
                                guild: L
                            });
                        case _.wB.REJECTED:
                            return (0, i.jsx)(I.Z, {
                                reapplyText: T.intl.string(T.t.I1LYVl),
                                onReapply: O,
                                confirmText: T.intl.string(T.t.g9tK0t),
                                onWithdrawApplication: R,
                                rejectionReason: b.rejectionReason,
                                guild: L
                            });
                        default:
                            return (0, i.jsx)(E.s, {
                                onDiscardApplication: j,
                                onContinueApplication: () => (0, g.hk)(t),
                                guild: L
                            });
                    }
                })()
            }),
            (0, i.jsx)('div', { className: S.dragRegion })
        ]
    });
};
