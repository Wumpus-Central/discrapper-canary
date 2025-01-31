n.d(t, { Z: () => y }), n(47120);
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
    g = n(863249),
    _ = n(63568),
    f = n(246364),
    E = n(937111),
    I = n(187565),
    C = n(523924),
    v = n(390500),
    N = n(200305),
    T = n(577809),
    S = n(981631),
    Z = n(898625),
    x = n(388032),
    A = n(301219);
function b(e) {
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
        ? (0, i.jsx)('div', { className: A.defaultGradient })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      className: A.splash,
                      src: a,
                      imageClassName: A.cover,
                      width: n,
                      height: r
                  }),
                  null != s &&
                      (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)('div', {
                              className: A.splashGradient,
                              style: { background: 'linear-gradient(180deg, '.concat((0, m.aD)(s, 0.16), ' 0%, ').concat((0, m.aD)(s, 1), ' 100%)') }
                          })
                      }),
                  (0, i.jsx)('div', { className: A.splashGradient })
              ]
          });
}
function L(e) {
    let { guildId: t, inviteCode: n } = e,
        r = (0, _.jS)(t, 'MemberVerificationPreviewDisabled'),
        a = (0, I.ng)(t, n, !1),
        s = l.useCallback(
            async (e) => {
                await g.ZP.submitVerificationForm(t, e);
            },
            [t]
        );
    return r
        ? (0, i.jsx)('div', {
              className: A.v2screensWrapper,
              children: (0, i.jsx)(T.Z, {
                  guildId: t,
                  verificationForm: a,
                  onComplete: s
              })
          })
        : (0, i.jsx)('div', {
              className: A.screensWrapper,
              children: (0, i.jsx)(N.Z, {
                  guildId: t,
                  verificationForm: a,
                  onComplete: s
              })
          });
}
let y = (e) => {
    let t,
        n,
        { guildId: o, inviteCode: c } = e,
        { ref: h, width: m, height: g } = (0, s.Z)(),
        [_, I] = l.useState(Z.hO.INITIAL),
        N = (0, r.e7)([E.Z], () => E.Z.getRequest(o)),
        T = (0, r.e7)([u.Z], () => u.Z.getGuild(o)),
        { hasFetchedRequestToJoinGuilds: y, guildPreviewDisabled: P } = (0, r.cj)([E.Z], () => ({
            hasFetchedRequestToJoinGuilds: E.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: E.Z.getJoinRequestGuild(o)
        }));
    l.useEffect(() => {
        null != T && (0, d.uL)(S.Z5c.CHANNEL(o));
    }, [T, o]),
        l.useEffect(() => {
            y || p.Z.fetchRequestToJoinGuilds();
        }, [y]);
    let O = () => {
            p.Z.resetGuildJoinRequest(o);
        },
        R =
            ((t = x.intl.format(x.t['9ZezpK'], { name: null == P ? void 0 : P.toString() })),
            (n = () => {
                I(Math.max(_, Z.hO.FILLING)), p.Z.removeGuildJoinRequest(o), (0, d.uL)(S.Z5c.ME);
            }),
            () => {
                (0, a.h7j)((e) =>
                    (0, i.jsx)(a.ConfirmModal, {
                        header: x.intl.string(x.t.y0CVen),
                        cancelText: x.intl.string(x.t.oEAioK),
                        onConfirm: n,
                        confirmText: x.intl.string(x.t.p89ACg),
                        confirmButtonColor: a.zxk.Colors.RED,
                        ...e,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: t
                        })
                    })
                );
            });
    return (0, i.jsxs)('div', {
        className: A.page,
        ref: h,
        children: [
            (0, i.jsx)(b, {
                guild: P,
                height: g,
                width: m
            }),
            (0, i.jsx)('div', {
                className: A.contentWrapper,
                children: (() => {
                    if (null == N) return null;
                    switch (N.applicationStatus) {
                        case f.wB.SUBMITTED:
                            return (0, i.jsx)(v.Z, {
                                onWithdrawApplication: R,
                                guild: P
                            });
                        case f.wB.REJECTED:
                            return (0, i.jsx)(C.Z, {
                                reapplyText: x.intl.string(x.t.I1LYVl),
                                onReapply: O,
                                confirmText: x.intl.string(x.t.g9tK0t),
                                onWithdrawApplication: R,
                                rejectionReason: N.rejectionReason,
                                guild: P
                            });
                        default:
                            return (0, i.jsx)(L, {
                                guildId: o,
                                inviteCode: c
                            });
                    }
                })()
            }),
            (0, i.jsx)('div', { className: A.dragRegion })
        ]
    });
};
