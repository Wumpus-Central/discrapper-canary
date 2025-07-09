(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(44315),
    g = n(937615),
    p = n(817460),
    f = n(584825),
    h = n(289393),
    x = n(723047),
    b = n(727843),
    j = n(290348),
    _ = n(857081),
    v = n(869269),
    O = n(981631),
    C = n(388032),
    y = n(301849);
function N(e) {
    var t, n;
    let { guildId: l, initialEditStateId: a, allSubscriptionListings: N, priceTiers: I, onDeleteEditState: E, groupListingId: S, onBeforeDispatchNewListing: T, onAfterDispatchNewListing: P } = e,
        [w, R] = i.useState(a),
        Z = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(w)),
        D = null == Z,
        [A, L] = i.useState(D),
        k = null == Z ? void 0 : Z.subscription_plans[0],
        M = null != (t = null == Z ? void 0 : Z.published) && t,
        G = null != (n = null == Z ? void 0 : Z.archived) && n,
        U = !G && !M && void 0 !== Z,
        B = void 0 === Z,
        F = (0, x.mY)(),
        [z] = j._T(w),
        [H] = j.mR(w),
        [V] = j.PK(w),
        [W] = j.d9(w, 1024),
        Y = '' !== z ? z : C.intl.string(C.t.QWhe9P),
        K = '' !== z && null != W && '' !== V && null != H && !F,
        X = j.rU(w),
        { loading: q, error: Q, handleCreateOrUpdateFromEditState: J } = j.Xo(),
        { submitting: $, error: ee, publishSubscriptionListing: et } = (0, f.HQ)(),
        en = q || $;
    return (0, r.jsxs)('div', {
        className: y.container,
        children: [
            (0, r.jsxs)('div', {
                className: s()(y.header, { [y.headerExpanded]: A }),
                children: [
                    (0, r.jsx)('div', {
                        className: y.headerImageContainer,
                        children:
                            null == W
                                ? (0, r.jsx)(_.Z, {
                                      className: y.starIcon,
                                      'aria-hidden': !0
                                  })
                                : (0, r.jsx)('img', {
                                      className: y.headerImage,
                                      src: W,
                                      alt: Y
                                  })
                    }),
                    (0, r.jsxs)('div', {
                        className: y.headerListingInfo,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'interactive-active',
                                children: Y
                            }),
                            (0, r.jsx)(u.LZC, { size: 2 }),
                            (0, r.jsxs)('div', {
                                className: y.headerDescriptionContainer,
                                children: [
                                    U &&
                                        (0, r.jsx)(u.IGR, {
                                            color: (0, m.Lq)(O.Ilk.YELLOW_300),
                                            text: C.intl.string(C.t.vosPk5),
                                            className: y.draftBadge
                                        }),
                                    G &&
                                        (0, r.jsx)(u.IGR, {
                                            color: (0, m.Lq)(O.Ilk.PRIMARY_500),
                                            text: C.intl.string(C.t.nhbtEh),
                                            className: y.archivedBadge
                                        }),
                                    B &&
                                        (0, r.jsx)(u.IGR, {
                                            color: (0, m.Lq)(O.Ilk.PRIMARY_500),
                                            text: C.intl.string(C.t.aiwXen),
                                            className: y.unsavedBadge
                                        }),
                                    null != k &&
                                        (0, r.jsxs)(u.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-sm/normal',
                                            children: [(0, g.T4)(k.price, k.currency), '/', (0, p.JE)(k)]
                                        })
                                ]
                            })
                        ]
                    }),
                    A
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(d.zx, {
                                      look: d.zx.Looks.BLANK,
                                      className: y.cancel,
                                      onClick: () => {
                                          (j.GM(w), D ? null == E || E() : L(!1));
                                      },
                                      children: C.intl.string(C.t['ETE/oK'])
                                  }),
                                  (0, r.jsx)(d.zx, {
                                      onClick: () =>
                                          J({
                                              guildId: l,
                                              editStateId: w,
                                              groupListingId: S,
                                              onBeforeDispatchNewListing: T,
                                              onAfterDispatchNewListing: (e) => {
                                                  (R(e.id), null == P || P(e));
                                              }
                                          }),
                                      disabled: !K || !X,
                                      className: y.autoWidth,
                                      submitting: en,
                                      children: C.intl.string(C.t.R3BPHx)
                                  })
                              ]
                          })
                        : (0, r.jsx)(u.P3F, {
                              onClick: () => L(!0),
                              'aria-label': C.intl.string(C.t['2qPbmJ']),
                              children: (0, r.jsx)(u.vdY, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: y.pencilIcon
                              })
                          })
                ]
            }),
            A &&
                (0, r.jsx)(b.I, {
                    editStateId: w,
                    guildId: l,
                    groupListingId: S,
                    children: (0, r.jsx)(v.Z, {
                        allSubscriptionListings: N,
                        priceTiers: I,
                        loading: en,
                        error: null != Q ? Q : ee,
                        handlePublishTier: () => {
                            (o()(null != S, 'group listing doesnt exist'),
                                o()(null != Z, 'subscription listing doesnt exist'),
                                et({
                                    guildId: l,
                                    groupListingId: S,
                                    listingId: Z.id
                                }));
                        },
                        onDeleteEditState: E
                    })
                })
        ]
    });
}
