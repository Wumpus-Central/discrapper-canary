n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    g = n(937615),
    m = n(817460),
    p = n(584825),
    f = n(289393),
    h = n(723047),
    x = n(727843),
    b = n(290348),
    j = n(857081),
    _ = n(869269),
    v = n(388032),
    O = n(605041);
function C(e) {
    var t, n;
    let {
            guildId: l,
            initialEditStateId: a,
            allSubscriptionListings: C,
            priceTiers: y,
            onDeleteEditState: N,
            groupListingId: E,
            onBeforeDispatchNewListing: I,
            onAfterDispatchNewListing: S,
        } = e,
        [T, P] = i.useState(a),
        w = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(T)),
        Z = null == w,
        [R, D] = i.useState(Z),
        A = null == w ? void 0 : w.subscription_plans[0],
        L = null != (t = null == w ? void 0 : w.published) && t,
        k = null != (n = null == w ? void 0 : w.archived) && n,
        G = !k && !L && void 0 !== w,
        M = void 0 === w,
        U = (0, h.mY)(),
        [B] = b._T(T),
        [F] = b.mR(T),
        [H] = b.PK(T),
        [W] = b.d9(T, 1024),
        z = "" !== B ? B : v.intl.string(v.t.QWhe9G),
        V = "" !== B && null != W && "" !== H && null != F && !U,
        K = b.rU(T),
        { loading: Y, error: q, handleCreateOrUpdateFromEditState: X } = b.Xo(),
        { submitting: J, error: Q, publishSubscriptionListing: $ } = (0, p.HQ)(),
        ee = Y || J;
    return (0, r.jsxs)("div", {
        className: O.container,
        children: [
            (0, r.jsxs)("div", {
                className: s()(O.header, { [O.headerExpanded]: R }),
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
                                      alt: z,
                                  }),
                    }),
                    (0, r.jsxs)("div", {
                        className: O.headerListingInfo,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "interactive-text-active",
                                children: z,
                            }),
                            (0, r.jsx)(d.LZC, { size: 2 }),
                            (0, r.jsxs)("div", {
                                className: O.headerDescriptionContainer,
                                children: [
                                    G &&
                                        (0, r.jsx)(d.IGR, {
                                            color: u.Z.unsafe_rawColors.YELLOW_300.css,
                                            text: v.intl.string(v.t.vosPk5),
                                            className: O.draftBadge,
                                        }),
                                    k &&
                                        (0, r.jsx)(d.IGR, {
                                            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
                                            text: v.intl.string(v.t.nhbtEl),
                                            className: O.archivedBadge,
                                        }),
                                    M &&
                                        (0, r.jsx)(d.IGR, {
                                            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
                                            text: v.intl.string(v.t.aiwXeq),
                                            className: O.unsavedBadge,
                                        }),
                                    null != A &&
                                        (0, r.jsxs)(d.Text, {
                                            color: "interactive-text-default",
                                            variant: "text-sm/normal",
                                            children: [(0, g.T4)(A.price, A.currency), "/", (0, m.JE)(A)],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    R
                        ? (0, r.jsxs)("div", {
                              className: O.headerActions,
                              children: [
                                  (0, r.jsx)(d.Avr, {
                                      variant: "secondary",
                                      onClick: () => {
                                          b.GM(T), Z ? null == N || N() : D(!1);
                                      },
                                      text: v.intl.string(v.t["ETE/oC"]),
                                  }),
                                  (0, r.jsx)(d.Button, {
                                      variant: "primary",
                                      onClick: () =>
                                          X({
                                              guildId: l,
                                              editStateId: T,
                                              groupListingId: E,
                                              onBeforeDispatchNewListing: I,
                                              onAfterDispatchNewListing: (e) => {
                                                  P(e.id), null == S || S(e);
                                              },
                                          }),
                                      disabled: !V || !K,
                                      loading: ee,
                                      text: v.intl.string(v.t["R3BPH+"]),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(d.P3F, {
                              onClick: () => D(!0),
                              "aria-label": v.intl.string(v.t["2qPbmO"]),
                              children: (0, r.jsx)(d.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: O.pencilIcon,
                              }),
                          }),
                ],
            }),
            R &&
                (0, r.jsx)(x.I, {
                    editStateId: T,
                    guildId: l,
                    groupListingId: E,
                    children: (0, r.jsx)(_.Z, {
                        allSubscriptionListings: C,
                        priceTiers: y,
                        loading: ee,
                        error: null != q ? q : Q,
                        handlePublishTier: () => {
                            o()(null != E, "group listing doesnt exist"),
                                o()(null != w, "subscription listing doesnt exist"),
                                $({
                                    guildId: l,
                                    groupListingId: E,
                                    listingId: w.id,
                                });
                        },
                        onDeleteEditState: N,
                    }),
                }),
        ],
    });
}
