n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
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
    _ = n(869269),
    I = n(981631),
    N = n(388032),
    T = n(83701);
function j(e) {
    var t, n;
    let { guildId: l, initialEditStateId: s, allSubscriptionListings: j, priceTiers: b, onDeleteEditState: S, groupListingId: E, onBeforeDispatchNewListing: R, onAfterDispatchNewListing: y } = e,
        [A, Z] = r.useState(s),
        L = (0, c.e7)([x.Z], () => x.Z.getSubscriptionListing(A)),
        D = null == L,
        [O, P] = r.useState(D),
        k = null == L ? void 0 : L.subscription_plans[0],
        M = null !== (t = null == L ? void 0 : L.published) && void 0 !== t && t,
        w = null !== (n = null == L ? void 0 : L.archived) && void 0 !== n && n,
        B = !w && !M && void 0 !== L,
        U = void 0 === L,
        G = (0, p.mY)(),
        [F] = C._T(A),
        [H] = C.mR(A),
        [z] = C.PK(A),
        [W] = C.d9(A, 1024),
        V = '' !== F ? F : N.intl.string(N.t.QWhe9P),
        Y = '' !== F && null != W && '' !== z && null != H && !G,
        K = C.rU(A),
        { loading: q, error: X, handleCreateOrUpdateFromEditState: Q } = C.Xo(),
        { submitting: J, error: $, publishSubscriptionListing: ee } = (0, g.HQ)(),
        et = q || J;
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsxs)('div', {
                className: a()(T.header, { [T.headerExpanded]: O }),
                children: [
                    (0, i.jsx)('div', {
                        className: T.headerImageContainer,
                        children:
                            null == W
                                ? (0, i.jsx)(v.Z, {
                                      className: T.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, i.jsx)('img', {
                                      className: T.headerImage,
                                      src: W,
                                      alt: V
                                  })
                    }),
                    (0, i.jsxs)('div', {
                        className: T.headerListingInfo,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: V
                            }),
                            (0, i.jsx)(d.Spacer, { size: 2 }),
                            (0, i.jsxs)('div', {
                                className: T.headerDescriptionContainer,
                                children: [
                                    B &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(I.Ilk.YELLOW_300),
                                            text: N.intl.string(N.t.vosPk5),
                                            className: T.draftBadge
                                        }),
                                    w &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(I.Ilk.PRIMARY_500),
                                            text: N.intl.string(N.t.nhbtEh),
                                            className: T.archivedBadge
                                        }),
                                    U &&
                                        (0, i.jsx)(d.TextBadge, {
                                            color: (0, u.Lq)(I.Ilk.PRIMARY_500),
                                            text: N.intl.string(N.t.aiwXen),
                                            className: T.unsavedBadge
                                        }),
                                    null != k &&
                                        (0, i.jsxs)(d.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-sm/normal',
                                            children: [(0, m.T4)(k.price, k.currency), '/', (0, h.JE)(k)]
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
                                          C.GM(A), D ? null == S || S() : P(!1);
                                      },
                                      children: N.intl.string(N.t['ETE/oK'])
                                  }),
                                  (0, i.jsx)(d.Button, {
                                      onClick: () =>
                                          Q({
                                              guildId: l,
                                              editStateId: A,
                                              groupListingId: E,
                                              onBeforeDispatchNewListing: R,
                                              onAfterDispatchNewListing: (e) => {
                                                  Z(e.id), null == y || y(e);
                                              }
                                          }),
                                      disabled: !Y || !K,
                                      className: T.autoWidth,
                                      submitting: et,
                                      children: N.intl.string(N.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, i.jsx)(d.Clickable, {
                              onClick: () => P(!0),
                              'aria-label': N.intl.string(N.t['2qPbmJ']),
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
                    groupListingId: E,
                    children: (0, i.jsx)(_.Z, {
                        allSubscriptionListings: j,
                        priceTiers: b,
                        loading: et,
                        error: null != X ? X : $,
                        handlePublishTier: () => {
                            o()(null != E, 'group listing doesnt exist'),
                                o()(null != L, 'subscription listing doesnt exist'),
                                ee({
                                    guildId: l,
                                    groupListingId: E,
                                    listingId: L.id
                                });
                        },
                        onDeleteEditState: S
                    })
                })
        ]
    });
}
