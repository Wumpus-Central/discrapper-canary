(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(44315),
    m = n(937615),
    g = n(817460),
    p = n(584825),
    f = n(289393),
    h = n(723047),
    x = n(727843),
    b = n(290348),
    j = n(857081),
    v = n(869269),
    _ = n(981631),
    O = n(388032),
    y = n(301849);
function C(e) {
    var t, n;
    let { guildId: l, initialEditStateId: a, allSubscriptionListings: C, priceTiers: N, onDeleteEditState: I, groupListingId: E, onBeforeDispatchNewListing: S, onAfterDispatchNewListing: T } = e,
        [P, w] = i.useState(a),
        R = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(P)),
        Z = null == R,
        [D, A] = i.useState(Z),
        k = null == R ? void 0 : R.subscription_plans[0],
        L = null != (t = null == R ? void 0 : R.published) && t,
        M = null != (n = null == R ? void 0 : R.archived) && n,
        G = !M && !L && void 0 !== R,
        U = void 0 === R,
        B = (0, h.mY)(),
        [F] = b._T(P),
        [H] = b.mR(P),
        [z] = b.PK(P),
        [W] = b.d9(P, 1024),
        V = '' !== F ? F : O.intl.string(O.t.QWhe9P),
        Y = '' !== F && null != W && '' !== z && null != H && !B,
        K = b.rU(P),
        { loading: X, error: q, handleCreateOrUpdateFromEditState: J } = b.Xo(),
        { submitting: Q, error: $, publishSubscriptionListing: ee } = (0, p.HQ)(),
        et = X || Q;
    return (0, r.jsxs)('div', {
        className: y.container,
        children: [
            (0, r.jsxs)('div', {
                className: s()(y.header, { [y.headerExpanded]: D }),
                children: [
                    (0, r.jsx)('div', {
                        className: y.headerImageContainer,
                        children:
                            null == W
                                ? (0, r.jsx)(j.Z, {
                                      className: y.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, r.jsx)('img', {
                                      className: y.headerImage,
                                      src: W,
                                      alt: V
                                  })
                    }),
                    (0, r.jsxs)('div', {
                        className: y.headerListingInfo,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: V
                            }),
                            (0, r.jsx)(d.LZC, { size: 2 }),
                            (0, r.jsxs)('div', {
                                className: y.headerDescriptionContainer,
                                children: [
                                    G &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(_.Ilk.YELLOW_300),
                                            text: O.intl.string(O.t.vosPk5),
                                            className: y.draftBadge
                                        }),
                                    M &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(_.Ilk.PRIMARY_500),
                                            text: O.intl.string(O.t.nhbtEh),
                                            className: y.archivedBadge
                                        }),
                                    U &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(_.Ilk.PRIMARY_500),
                                            text: O.intl.string(O.t.aiwXen),
                                            className: y.unsavedBadge
                                        }),
                                    null != k &&
                                        (0, r.jsxs)(d.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-sm/normal',
                                            children: [(0, m.T4)(k.price, k.currency), '/', (0, g.JE)(k)]
                                        })
                                ]
                            })
                        ]
                    }),
                    D
                        ? (0, r.jsxs)('div', {
                              className: y.headerActions,
                              children: [
                                  (0, r.jsx)(d.Avr, {
                                      variant: 'secondary',
                                      onClick: () => {
                                          (b.GM(P), Z ? null == I || I() : A(!1));
                                      },
                                      text: O.intl.string(O.t['ETE/oK'])
                                  }),
                                  (0, r.jsx)(d.zxk, {
                                      variant: 'primary',
                                      onClick: () =>
                                          J({
                                              guildId: l,
                                              editStateId: P,
                                              groupListingId: E,
                                              onBeforeDispatchNewListing: S,
                                              onAfterDispatchNewListing: (e) => {
                                                  (w(e.id), null == T || T(e));
                                              }
                                          }),
                                      disabled: !Y || !K,
                                      loading: et,
                                      text: O.intl.string(O.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, r.jsx)(d.P3F, {
                              onClick: () => A(!0),
                              'aria-label': O.intl.string(O.t['2qPbmJ']),
                              children: (0, r.jsx)(d.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: y.pencilIcon
                              })
                          })
                ]
            }),
            D &&
                (0, r.jsx)(x.I, {
                    editStateId: P,
                    guildId: l,
                    groupListingId: E,
                    children: (0, r.jsx)(v.Z, {
                        allSubscriptionListings: C,
                        priceTiers: N,
                        loading: et,
                        error: null != q ? q : $,
                        handlePublishTier: () => {
                            (o()(null != E, 'group listing doesnt exist'),
                                o()(null != R, 'subscription listing doesnt exist'),
                                ee({
                                    guildId: l,
                                    groupListingId: E,
                                    listingId: R.id
                                }));
                        },
                        onDeleteEditState: I
                    })
                })
        ]
    });
}
