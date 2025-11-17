n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(44315),
    g = n(937615),
    m = n(817460),
    p = n(584825),
    f = n(289393),
    h = n(723047),
    b = n(727843),
    x = n(290348),
    j = n(857081),
    _ = n(869269),
    v = n(981631),
    O = n(388032),
    C = n(605041);
function y(e) {
    var t, n;
    let {
            guildId: l,
            initialEditStateId: s,
            allSubscriptionListings: y,
            priceTiers: N,
            onDeleteEditState: E,
            groupListingId: I,
            onBeforeDispatchNewListing: S,
            onAfterDispatchNewListing: T,
        } = e,
        [P, w] = i.useState(s),
        Z = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(P)),
        R = null == Z,
        [D, A] = i.useState(R),
        L = null == Z ? void 0 : Z.subscription_plans[0],
        k = null != (t = null == Z ? void 0 : Z.published) && t,
        G = null != (n = null == Z ? void 0 : Z.archived) && n,
        M = !G && !k && void 0 !== Z,
        U = void 0 === Z,
        B = (0, h.mY)(),
        [F] = x._T(P),
        [H] = x.mR(P),
        [W] = x.PK(P),
        [z] = x.d9(P, 1024),
        V = "" !== F ? F : O.intl.string(O.t.QWhe9G),
        K = "" !== F && null != z && "" !== W && null != H && !B,
        Y = x.rU(P),
        { loading: q, error: X, handleCreateOrUpdateFromEditState: J } = x.Xo(),
        { submitting: Q, error: $, publishSubscriptionListing: ee } = (0, p.HQ)(),
        et = q || Q;
    return (0, r.jsxs)("div", {
        className: C.container,
        children: [
            (0, r.jsxs)("div", {
                className: a()(C.header, { [C.headerExpanded]: D }),
                children: [
                    (0, r.jsx)("div", {
                        className: C.headerImageContainer,
                        children:
                            null == z
                                ? (0, r.jsx)(j.Z, {
                                      className: C.starIcon,
                                      "aria-hidden": !0,
                                  })
                                : (0, r.jsx)("img", {
                                      className: C.headerImage,
                                      src: z,
                                      alt: V,
                                  }),
                    }),
                    (0, r.jsxs)("div", {
                        className: C.headerListingInfo,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children: V,
                            }),
                            (0, r.jsx)(d.LZC, { size: 2 }),
                            (0, r.jsxs)("div", {
                                className: C.headerDescriptionContainer,
                                children: [
                                    M &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.YELLOW_300),
                                            text: O.intl.string(O.t.vosPk5),
                                            className: C.draftBadge,
                                        }),
                                    G &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
                                            text: O.intl.string(O.t.nhbtEl),
                                            className: C.archivedBadge,
                                        }),
                                    U &&
                                        (0, r.jsx)(d.IGR, {
                                            color: (0, u.Lq)(v.Ilk.PRIMARY_500),
                                            text: O.intl.string(O.t.aiwXeq),
                                            className: C.unsavedBadge,
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
                              className: C.headerActions,
                              children: [
                                  (0, r.jsx)(d.Avr, {
                                      variant: "secondary",
                                      onClick: () => {
                                          x.GM(P), R ? null == E || E() : A(!1);
                                      },
                                      text: O.intl.string(O.t["ETE/oC"]),
                                  }),
                                  (0, r.jsx)(d.Button, {
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
                                      text: O.intl.string(O.t["R3BPH+"]),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(d.P3F, {
                              onClick: () => A(!0),
                              "aria-label": O.intl.string(O.t["2qPbmO"]),
                              children: (0, r.jsx)(d.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: C.pencilIcon,
                              }),
                          }),
                ],
            }),
            D &&
                (0, r.jsx)(b.I, {
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
