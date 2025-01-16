n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
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
    f = n(727843),
    C = n(290348),
    v = n(857081),
    I = n(869269),
    N = n(981631),
    _ = n(388032),
    T = n(83701);
function j(e) {
    var t, n;
    let { guildId: l, initialEditStateId: a, allSubscriptionListings: j, priceTiers: b, onDeleteEditState: E, groupListingId: S, onBeforeDispatchNewListing: R, onAfterDispatchNewListing: y } = e,
        [A, Z] = r.useState(a),
        L = (0, c.e7)([x.Z], () => x.Z.getSubscriptionListing(A)),
        D = null == L,
        [O, M] = r.useState(D),
        P = null == L ? void 0 : L.subscription_plans[0],
        k = null !== (t = null == L ? void 0 : L.published) && void 0 !== t && t,
        w = null !== (n = null == L ? void 0 : L.archived) && void 0 !== n && n,
        B = !w && !k && void 0 !== L,
        U = void 0 === L,
        G = (0, p.mY)(),
        [F] = C._T(A),
        [H] = C.mR(A),
        [z] = C.PK(A),
        [V] = C.d9(A, 1024),
        W = '' !== F ? F : _.intl.string(_.t.QWhe9P),
        Y = '' !== F && null != V && '' !== z && null != H && !G,
        K = C.rU(A),
        { loading: q, error: X, handleCreateOrUpdateFromEditState: Q } = C.Xo(),
        { submitting: J, error: $, publishSubscriptionListing: ee } = (0, g.HQ)(),
        et = q || J;
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsxs)('div', {
                className: s()(T.header, { [T.headerExpanded]: O }),
                children: [
                    (0, i.jsx)('div', {
                        className: T.headerImageContainer,
                        children:
                            null == V
                                ? (0, i.jsx)(v.Z, {
                                      className: T.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, i.jsx)('img', {
                                      className: T.headerImage,
                                      src: V,
                                      alt: W
                                  })
                    }),
                    (0, i.jsxs)('div', {
                        className: T.headerListingInfo,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: W
                            }),
                            (0, i.jsx)(d.Spacer, { size: 2 }),
                            (0, i.jsxs)('div', {
                                className: T.headerDescriptionContainer,
                                children: [
                                    B &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(N.Ilk.YELLOW_300),
                                            text: _.intl.string(_.t.vosPk5),
                                            className: T.draftBadge
                                        }),
                                    w &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(N.Ilk.PRIMARY_500),
                                            text: _.intl.string(_.t.nhbtEh),
                                            className: T.archivedBadge
                                        }),
                                    U &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(N.Ilk.PRIMARY_500),
                                            text: _.intl.string(_.t.aiwXen),
                                            className: T.unsavedBadge
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
                                  (0, i.jsx)(d.Button, {
                                      look: d.Button.Looks.BLANK,
                                      className: T.cancel,
                                      onClick: () => {
                                          C.GM(A), D ? null == E || E() : M(!1);
                                      },
                                      children: _.intl.string(_.t['ETE/oK'])
                                  }),
                                  (0, i.jsx)(d.Button, {
                                      onClick: () =>
                                          Q({
                                              guildId: l,
                                              editStateId: A,
                                              groupListingId: S,
                                              onBeforeDispatchNewListing: R,
                                              onAfterDispatchNewListing: (e) => {
                                                  Z(e.id), null == y || y(e);
                                              }
                                          }),
                                      disabled: !Y || !K,
                                      className: T.autoWidth,
                                      submitting: et,
                                      children: _.intl.string(_.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, i.jsx)(d.Clickable, {
                              onClick: () => M(!0),
                              'aria-label': _.intl.string(_.t['2qPbmJ']),
                              children: (0, i.jsx)(d.PencilIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: T.pencilIcon
                              })
                          })
                ]
            }),
            O &&
                (0, i.jsx)(f.I, {
                    editStateId: A,
                    guildId: l,
                    groupListingId: S,
                    children: (0, i.jsx)(I.Z, {
                        allSubscriptionListings: j,
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
                        onDeleteEditState: E
                    })
                })
        ]
    });
}
