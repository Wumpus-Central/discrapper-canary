n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(44315),
    m = n(937615),
    p = n(817460),
    g = n(584825),
    h = n(289393),
    f = n(723047),
    b = n(727843),
    x = n(290348),
    j = n(857081),
    N = n(869269),
    v = n(981631),
    _ = n(388032),
    O = n(255180);
function y(e) {
    var t, n;
    let { guildId: s, initialEditStateId: l, allSubscriptionListings: y, priceTiers: C, onDeleteEditState: I, groupListingId: E, onBeforeDispatchNewListing: S, onAfterDispatchNewListing: T } = e,
        [P, w] = i.useState(l),
        R = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(P)),
        D = null == R,
        [Z, A] = i.useState(D),
        k = null == R ? void 0 : R.subscription_plans[0],
        W = null !== (t = null == R ? void 0 : R.published) && void 0 !== t && t,
        L = null !== (n = null == R ? void 0 : R.archived) && void 0 !== n && n,
        M = !L && !W && void 0 !== R,
        U = void 0 === R,
        G = (0, f.mY)(),
        [B] = x._T(P),
        [F] = x.mR(P),
        [z] = x.PK(P),
        [H] = x.d9(P, 1024),
        V = '' !== B ? B : _.NW.string(_.t.QWhe9P),
        Y = '' !== B && null != H && '' !== z && null != F && !G,
        K = x.rU(P),
        { loading: q, error: X, handleCreateOrUpdateFromEditState: Q } = x.Xo(),
        { submitting: J, error: $, publishSubscriptionListing: ee } = (0, g.HQ)(),
        et = q || J;
    return (0, r.jsxs)('div', {
        className: O.container,
        children: [
            (0, r.jsxs)('div', {
                className: a()(O.header, { [O.headerExpanded]: Z }),
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
                                            color: (0, u.Lq)(v.Ilk.YELLOW_300),
                                            text: _.NW.string(_.t.vosPk5),
                                            className: O.draftBadge
                                        }),
                                    L &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
                                            text: _.NW.string(_.t.nhbtEh),
                                            className: O.archivedBadge
                                        }),
                                    U &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
                                            text: _.NW.string(_.t.aiwXen),
                                            className: O.unsavedBadge
                                        }),
                                    null != k &&
                                        (0, r.jsxs)(d.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-sm/normal',
                                            children: [(0, m.T4)(k.price, k.currency), '/', (0, p.JE)(k)]
                                        })
                                ]
                            })
                        ]
                    }),
                    Z
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(d.zxk, {
                                      look: d.zxk.Looks.BLANK,
                                      className: O.cancel,
                                      onClick: () => {
                                          x.GM(P), D ? null == I || I() : A(!1);
                                      },
                                      children: _.NW.string(_.t['ETE/oK'])
                                  }),
                                  (0, r.jsx)(d.zxk, {
                                      onClick: () =>
                                          Q({
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
                                      children: _.NW.string(_.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, r.jsx)(d.P3F, {
                              onClick: () => A(!0),
                              'aria-label': _.NW.string(_.t['2qPbmJ']),
                              children: (0, r.jsx)(d.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: O.pencilIcon
                              })
                          })
                ]
            }),
            Z &&
                (0, r.jsx)(b.I, {
                    editStateId: P,
                    guildId: s,
                    groupListingId: E,
                    children: (0, r.jsx)(N.Z, {
                        allSubscriptionListings: y,
                        priceTiers: C,
                        loading: et,
                        error: null != X ? X : $,
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
