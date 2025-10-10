n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(44315),
    g = n(937615),
    m = n(817460),
    p = n(584825),
    f = n(289393),
    h = n(723047),
    x = n(727843),
    b = n(290348),
    j = n(857081),
    _ = n(869269),
    v = n(981631),
    C = n(388032),
    O = n(605041);
function y(e) {
    var t, n;
    let {
            guildId: l,
            initialEditStateId: a,
            allSubscriptionListings: y,
            priceTiers: N,
            onDeleteEditState: E,
            groupListingId: I,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: T,
        } = e,
        [P, w] = i.useState(a),
        Z = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(P)),
        R = null == Z,
        [D, A] = i.useState(R),
        L = null == Z ? void 0 : Z.subscription_plans[0],
        k = null != (t = null == Z ? void 0 : Z.published) && t,
        G = null != (n = null == Z ? void 0 : Z.archived) && n,
        M = !G && !k && void 0 !== Z,
        U = void 0 === Z,
        B = (0, h.mY)(),
        [F] = b._T(P),
        [H] = b.mR(P),
        [z] = b.PK(P),
        [W] = b.d9(P, 1024),
        V = "" !== F ? F : C.intl.string(C.t.QWhe9P),
        K = "" !== F && null != W && "" !== z && null != H && !B,
        Y = b.rU(P),
        { loading: q, error: X, handleCreateOrUpdateFromEditState: J } = b.Xo(),
        { submitting: Q, error: $, publishSubscriptionListing: ee } = (0, p.HQ)(),
        et = q || Q;
    return (0, r.jsxs)("div", {
        className: O.container,
        children: [
            (0, r.jsxs)("div", {
                className: s()(O.header, { [O.headerExpanded]: D }),
                children: [
                    (0, r.jsx)("div", {
                        className: O.headerImageContainer,
                        children:
                            null == W
                                ? (0, r.jsx)(j.Z, {
                                      className: O.starIcon,
                                      "aria-hidden": !0,
                                  })
                                : (0, r.jsx)("img", {
                                      className: O.headerImage,
                                      src: W,
                                      alt: V,
                                  }),
                    }),
                    (0, r.jsxs)("div", {
                        className: O.headerListingInfo,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children: V,
                            }),
                            (0, r.jsx)(d.LZC, { size: 2 }),
                            (0, r.jsxs)("div", {
                                className: O.headerDescriptionContainer,
                                children: [
                                    M &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.YELLOW_300),
                                            text: C.intl.string(C.t.vosPk5),
                                            className: O.draftBadge,
                                        }),
                                    G &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
                                            text: C.intl.string(C.t.nhbtEh),
                                            className: O.archivedBadge,
                                        }),
                                    U &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
                                            text: C.intl.string(C.t.aiwXen),
                                            className: O.unsavedBadge,
                                        }),
                                    null != L &&
                                        (0, r.jsxs)(d.Text, {
                                            color: "interactive-normal",
                                            variant: "text-sm/normal",
                                            children: [(0, g.T4)(L.price, L.currency), "/", (0, m.JE)(L)],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    D
                        ? (0, r.jsxs)("div", {
                              className: O.headerActions,
                              children: [
                                  (0, r.jsx)(d.Avr, {
                                      variant: "secondary",
                                      onClick: () => {
                                          b.GM(P), R ? null == E || E() : A(!1);
                                      },
                                      text: C.intl.string(C.t["ETE/oK"]),
                                  }),
                                  (0, r.jsx)(d.zxk, {
                                      variant: "primary",
                                      onClick: () =>
                                          J({
                                              guildId: l,
                                              editStateId: P,
                                              groupListingId: I,
                                              onBeforeDispatchNewListing: S,
                                              onAfterDispatchNewListing: (e) => {
                                                  w(e.id), null == T || T(e);
                                              },
                                          }),
                                      disabled: !K || !Y,
                                      loading: et,
                                      text: C.intl.string(C.t.R3BPHx),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(d.P3F, {
                              onClick: () => A(!0),
                              "aria-label": C.intl.string(C.t["2qPbmJ"]),
                              children: (0, r.jsx)(d.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: O.pencilIcon,
                              }),
                          }),
                ],
            }),
            D &&
                (0, r.jsx)(x.I, {
                    editStateId: P,
                    guildId: l,
                    groupListingId: I,
                    children: (0, r.jsx)(_.Z, {
                        allSubscriptionListings: y,
                        priceTiers: N,
                        loading: et,
                        error: null != X ? X : $,
                        handlePublishTier: () => {
                            o()(null != I, "group listing doesnt exist"),
                                o()(null != Z, "subscription listing doesnt exist"),
                                ee({
                                    guildId: l,
                                    groupListingId: I,
                                    listingId: Z.id,
                                });
                        },
                        onDeleteEditState: E,
                    }),
                }),
        ],
    });
}
