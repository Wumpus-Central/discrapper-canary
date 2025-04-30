n.d(t, { Z: () => y }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(44315),
    m = n(937615),
    g = n(817460),
    p = n(584825),
    h = n(289393),
    f = n(723047),
    x = n(727843),
    b = n(290348),
    j = n(857081),
    _ = n(869269),
    v = n(981631),
    O = n(388032),
    C = n(301849);
function y(e) {
    var t, n;
    let { guildId: l, initialEditStateId: a, allSubscriptionListings: y, priceTiers: N, onDeleteEditState: I, groupListingId: E, onBeforeDispatchNewListing: S, onAfterDispatchNewListing: T } = e,
        [P, w] = i.useState(a),
        R = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(P)),
        Z = null == R,
        [D, k] = i.useState(Z),
        A = null == R ? void 0 : R.subscription_plans[0],
        L = null != (t = null == R ? void 0 : R.published) && t,
        M = null != (n = null == R ? void 0 : R.archived) && n,
        G = !M && !L && void 0 !== R,
        U = void 0 === R,
        B = (0, f.mY)(),
        [F] = b._T(P),
        [z] = b.mR(P),
        [H] = b.PK(P),
        [W] = b.d9(P, 1024),
        V = '' !== F ? F : O.intl.string(O.t.QWhe9P),
        Y = '' !== F && null != W && '' !== H && null != z && !B,
        K = b.rU(P),
        { loading: X, error: q, handleCreateOrUpdateFromEditState: Q } = b.Xo(),
        { submitting: J, error: $, publishSubscriptionListing: ee } = (0, p.HQ)(),
        et = X || J;
    return (0, r.jsxs)('div', {
        className: C.container,
        children: [
            (0, r.jsxs)('div', {
                className: s()(C.header, { [C.headerExpanded]: D }),
                children: [
                    (0, r.jsx)('div', {
                        className: C.headerImageContainer,
                        children:
                            null == W
                                ? (0, r.jsx)(j.Z, {
                                      className: C.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, r.jsx)('img', {
                                      className: C.headerImage,
                                      src: W,
                                      alt: V
                                  })
                    }),
                    (0, r.jsxs)('div', {
                        className: C.headerListingInfo,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: V
                            }),
                            (0, r.jsx)(u.LZC, { size: 2 }),
                            (0, r.jsxs)('div', {
                                className: C.headerDescriptionContainer,
                                children: [
                                    G &&
                                        (0, r.jsx)(u.IGR, {
                                            color: (0, d.Lq)(v.Ilk.YELLOW_300),
                                            text: O.intl.string(O.t.vosPk5),
                                            className: C.draftBadge
                                        }),
                                    M &&
                                        (0, r.jsx)(u.IGR, {
                                            color: (0, d.Lq)(v.Ilk.PRIMARY_500),
                                            text: O.intl.string(O.t.nhbtEh),
                                            className: C.archivedBadge
                                        }),
                                    U &&
                                        (0, r.jsx)(u.IGR, {
                                            color: (0, d.Lq)(v.Ilk.PRIMARY_500),
                                            text: O.intl.string(O.t.aiwXen),
                                            className: C.unsavedBadge
                                        }),
                                    null != A &&
                                        (0, r.jsxs)(u.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-sm/normal',
                                            children: [(0, m.T4)(A.price, A.currency), '/', (0, g.JE)(A)]
                                        })
                                ]
                            })
                        ]
                    }),
                    D
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(u.zxk, {
                                      look: u.zxk.Looks.BLANK,
                                      className: C.cancel,
                                      onClick: () => {
                                          b.GM(P), Z ? null == I || I() : k(!1);
                                      },
                                      children: O.intl.string(O.t['ETE/oK'])
                                  }),
                                  (0, r.jsx)(u.zxk, {
                                      onClick: () =>
                                          Q({
                                              guildId: l,
                                              editStateId: P,
                                              groupListingId: E,
                                              onBeforeDispatchNewListing: S,
                                              onAfterDispatchNewListing: (e) => {
                                                  w(e.id), null == T || T(e);
                                              }
                                          }),
                                      disabled: !Y || !K,
                                      className: C.autoWidth,
                                      submitting: et,
                                      children: O.intl.string(O.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, r.jsx)(u.P3F, {
                              onClick: () => k(!0),
                              'aria-label': O.intl.string(O.t['2qPbmJ']),
                              children: (0, r.jsx)(u.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: C.pencilIcon
                              })
                          })
                ]
            }),
            D &&
                (0, r.jsx)(x.I, {
                    editStateId: P,
                    guildId: l,
                    groupListingId: E,
                    children: (0, r.jsx)(_.Z, {
                        allSubscriptionListings: y,
                        priceTiers: N,
                        loading: et,
                        error: null != q ? q : $,
                        handlePublishTier: () => {
                            o()(null != E, 'group listing doesnt exist'),
                                o()(null != R, 'subscription listing doesnt exist'),
                                ee({
                                    guildId: l,
                                    groupListingId: E,
                                    listingId: R.id
                                });
                        },
                        onDeleteEditState: I
                    })
                })
        ]
    });
}
