n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(44315),
    m = n(937615),
    h = n(817460),
    g = n(584825),
    x = n(289393),
    p = n(723047),
    _ = n(727843),
    C = n(290348),
    f = n(857081),
    v = n(869269),
    N = n(981631),
    j = n(388032),
    I = n(83701);
function E(e) {
    var t, n;
    let { guildId: l, initialEditStateId: a, allSubscriptionListings: E, priceTiers: b, onDeleteEditState: T, groupListingId: S, onBeforeDispatchNewListing: R, onAfterDispatchNewListing: Z } = e,
        [y, A] = r.useState(a),
        L = (0, c.e7)([x.Z], () => x.Z.getSubscriptionListing(y)),
        D = null == L,
        [O, k] = r.useState(D),
        P = null == L ? void 0 : L.subscription_plans[0],
        w = null !== (t = null == L ? void 0 : L.published) && void 0 !== t && t,
        M = null !== (n = null == L ? void 0 : L.archived) && void 0 !== n && n,
        U = !M && !w && void 0 !== L,
        G = void 0 === L,
        B = (0, p.mY)(),
        [F] = C._T(y),
        [z] = C.mR(y),
        [H] = C.PK(y),
        [V] = C.d9(y, 1024),
        W = '' !== F ? F : j.intl.string(j.t.QWhe9P),
        K = '' !== F && null != V && '' !== H && null != z && !B,
        Y = C.rU(y),
        { loading: q, error: X, handleCreateOrUpdateFromEditState: Q } = C.Xo(),
        { submitting: J, error: $, publishSubscriptionListing: ee } = (0, g.HQ)(),
        et = q || J;
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [
            (0, i.jsxs)('div', {
                className: s()(I.header, { [I.headerExpanded]: O }),
                children: [
                    (0, i.jsx)('div', {
                        className: I.headerImageContainer,
                        children:
                            null == V
                                ? (0, i.jsx)(f.Z, {
                                      className: I.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, i.jsx)('img', {
                                      className: I.headerImage,
                                      src: V,
                                      alt: W
                                  })
                    }),
                    (0, i.jsxs)('div', {
                        className: I.headerListingInfo,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: W
                            }),
                            (0, i.jsx)(d.LZC, { size: 2 }),
                            (0, i.jsxs)('div', {
                                className: I.headerDescriptionContainer,
                                children: [
                                    U &&
                                        (0, i.jsx)(d.IGR, {
                                            color: (0, u.Lq)(N.Ilk.YELLOW_300),
                                            text: j.intl.string(j.t.vosPk5),
                                            className: I.draftBadge
                                        }),
                                    M &&
                                        (0, i.jsx)(d.IGR, {
                                            color: (0, u.Lq)(N.Ilk.PRIMARY_500),
                                            text: j.intl.string(j.t.nhbtEh),
                                            className: I.archivedBadge
                                        }),
                                    G &&
                                        (0, i.jsx)(d.IGR, {
                                            color: (0, u.Lq)(N.Ilk.PRIMARY_500),
                                            text: j.intl.string(j.t.aiwXen),
                                            className: I.unsavedBadge
                                        }),
                                    null != P &&
                                        (0, i.jsxs)(d.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-sm/normal',
                                            children: [(0, m.T4)(P.price, P.currency), '/', (0, h.JE)(P)]
                                        })
                                ]
                            })
                        ]
                    }),
                    O
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.zxk, {
                                      look: d.zxk.Looks.BLANK,
                                      className: I.cancel,
                                      onClick: () => {
                                          C.GM(y), D ? null == T || T() : k(!1);
                                      },
                                      children: j.intl.string(j.t['ETE/oK'])
                                  }),
                                  (0, i.jsx)(d.zxk, {
                                      onClick: () =>
                                          Q({
                                              guildId: l,
                                              editStateId: y,
                                              groupListingId: S,
                                              onBeforeDispatchNewListing: R,
                                              onAfterDispatchNewListing: (e) => {
                                                  A(e.id), null == Z || Z(e);
                                              }
                                          }),
                                      disabled: !K || !Y,
                                      className: I.autoWidth,
                                      submitting: et,
                                      children: j.intl.string(j.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, i.jsx)(d.P3F, {
                              onClick: () => k(!0),
                              'aria-label': j.intl.string(j.t['2qPbmJ']),
                              children: (0, i.jsx)(d.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: I.pencilIcon
                              })
                          })
                ]
            }),
            O &&
                (0, i.jsx)(_.I, {
                    editStateId: y,
                    guildId: l,
                    groupListingId: S,
                    children: (0, i.jsx)(v.Z, {
                        allSubscriptionListings: E,
                        priceTiers: b,
                        loading: et,
                        error: null != X ? X : $,
                        handlePublishTier: () => {
                            o()(null != S, 'group listing doesnt exist'),
                                o()(null != L, 'subscription listing doesnt exist'),
                                ee({
                                    guildId: l,
                                    groupListingId: S,
                                    listingId: L.id
                                });
                        },
                        onDeleteEditState: T
                    })
                })
        ]
    });
}
