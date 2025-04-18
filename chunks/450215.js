n.d(t, { Z: () => C }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
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
    N = n(869269),
    _ = n(981631),
    v = n(388032),
    O = n(301849);
function C(e) {
    var t, n;
    let { guildId: s, initialEditStateId: a, allSubscriptionListings: C, priceTiers: y, onDeleteEditState: I, groupListingId: E, onBeforeDispatchNewListing: S, onAfterDispatchNewListing: T } = e,
        [P, w] = i.useState(a),
        R = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(P)),
        Z = null == R,
        [D, A] = i.useState(Z),
        k = null == R ? void 0 : R.subscription_plans[0],
        W = null != (t = null == R ? void 0 : R.published) && t,
        L = null != (n = null == R ? void 0 : R.archived) && n,
        M = !L && !W && void 0 !== R,
        G = void 0 === R,
        U = (0, f.mY)(),
        [B] = b._T(P),
        [F] = b.mR(P),
        [z] = b.PK(P),
        [H] = b.d9(P, 1024),
        V = '' !== B ? B : v.NW.string(v.t.QWhe9P),
        Y = '' !== B && null != H && '' !== z && null != F && !U,
        K = b.rU(P),
        { loading: X, error: q, handleCreateOrUpdateFromEditState: J } = b.Xo(),
        { submitting: Q, error: $, publishSubscriptionListing: ee } = (0, p.HQ)(),
        et = X || Q;
    return (0, r.jsxs)('div', {
        className: O.container,
        children: [
            (0, r.jsxs)('div', {
                className: l()(O.header, { [O.headerExpanded]: D }),
                children: [
                    (0, r.jsx)('div', {
                        className: O.headerImageContainer,
                        children:
                            null == H
                                ? (0, r.jsx)(j.Z, {
                                      className: O.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, r.jsx)('img', {
                                      className: O.headerImage,
                                      src: H,
                                      alt: V
                                  })
                    }),
                    (0, r.jsxs)('div', {
                        className: O.headerListingInfo,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: V
                            }),
                            (0, r.jsx)(d.LZC, { size: 2 }),
                            (0, r.jsxs)('div', {
                                className: O.headerDescriptionContainer,
                                children: [
                                    M &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(_.Ilk.YELLOW_300),
                                            text: v.NW.string(v.t.vosPk5),
                                            className: O.draftBadge
                                        }),
                                    L &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(_.Ilk.PRIMARY_500),
                                            text: v.NW.string(v.t.nhbtEh),
                                            className: O.archivedBadge
                                        }),
                                    G &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(_.Ilk.PRIMARY_500),
                                            text: v.NW.string(v.t.aiwXen),
                                            className: O.unsavedBadge
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
                                      className: O.cancel,
                                      onClick: () => {
                                          b.GM(P), Z ? null == I || I() : A(!1);
                                      },
                                      children: v.NW.string(v.t['ETE/oK'])
                                  }),
                                  (0, r.jsx)(d.zxk, {
                                      onClick: () =>
                                          J({
                                              guildId: s,
                                              editStateId: P,
                                              groupListingId: E,
                                              onBeforeDispatchNewListing: S,
                                              onAfterDispatchNewListing: (e) => {
                                                  w(e.id), null == T || T(e);
                                              }
                                          }),
                                      disabled: !Y || !K,
                                      className: O.autoWidth,
                                      submitting: et,
                                      children: v.NW.string(v.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, r.jsx)(d.P3F, {
                              onClick: () => A(!0),
                              'aria-label': v.NW.string(v.t['2qPbmJ']),
                              children: (0, r.jsx)(d.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: O.pencilIcon
                              })
                          })
                ]
            }),
            D &&
                (0, r.jsx)(x.I, {
                    editStateId: P,
                    guildId: s,
                    groupListingId: E,
                    children: (0, r.jsx)(N.Z, {
                        allSubscriptionListings: C,
                        priceTiers: y,
                        loading: et,
                        error: null != q ? q : $,
                        handlePublishTier: () => {
                            o()(null != E, 'group listing doesnt exist'),
                                o()(null != R, 'subscription listing doesnt exist'),
                                ee({
                                    guildId: s,
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
