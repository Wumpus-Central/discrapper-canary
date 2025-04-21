n.d(t, { Z: () => y }), n(388685);
var r = n(200651),
    i = n(192379),
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
        [D, A] = i.useState(Z),
        k = null == R ? void 0 : R.subscription_plans[0],
        L = null != (t = null == R ? void 0 : R.published) && t,
        M = null != (n = null == R ? void 0 : R.archived) && n,
        G = !M && !L && void 0 !== R,
        U = void 0 === R,
        B = (0, f.mY)(),
        [F] = b._T(P),
        [z] = b.mR(P),
        [H] = b.PK(P),
        [V] = b.d9(P, 1024),
        W = '' !== F ? F : O.intl.string(O.t.QWhe9P),
        Y = '' !== F && null != V && '' !== H && null != z && !B,
        K = b.rU(P),
        { loading: X, error: q, handleCreateOrUpdateFromEditState: J } = b.Xo(),
        { submitting: Q, error: $, publishSubscriptionListing: ee } = (0, p.HQ)(),
        et = X || Q;
    return (0, r.jsxs)('div', {
        className: C.container,
        children: [
            (0, r.jsxs)('div', {
                className: s()(C.header, { [C.headerExpanded]: D }),
                children: [
                    (0, r.jsx)('div', {
                        className: C.headerImageContainer,
                        children:
                            null == V
                                ? (0, r.jsx)(j.Z, {
                                      className: C.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, r.jsx)('img', {
                                      className: C.headerImage,
                                      src: V,
                                      alt: W
                                  })
                    }),
                    (0, r.jsxs)('div', {
                        className: C.headerListingInfo,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: W
                            }),
                            (0, r.jsx)(d.LZC, { size: 2 }),
                            (0, r.jsxs)('div', {
                                className: C.headerDescriptionContainer,
                                children: [
                                    G &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.YELLOW_300),
                                            text: O.intl.string(O.t.vosPk5),
                                            className: C.draftBadge
                                        }),
                                    M &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
                                            text: O.intl.string(O.t.nhbtEh),
                                            className: C.archivedBadge
                                        }),
                                    U &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
                                            text: O.intl.string(O.t.aiwXen),
                                            className: C.unsavedBadge
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
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(d.zxk, {
                                      look: d.zxk.Looks.BLANK,
                                      className: C.cancel,
                                      onClick: () => {
                                          b.GM(P), Z ? null == I || I() : A(!1);
                                      },
                                      children: O.intl.string(O.t['ETE/oK'])
                                  }),
                                  (0, r.jsx)(d.zxk, {
                                      onClick: () =>
                                          J({
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
                        : (0, r.jsx)(d.P3F, {
                              onClick: () => A(!0),
                              'aria-label': O.intl.string(O.t['2qPbmJ']),
                              children: (0, r.jsx)(d.vdY, {
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
