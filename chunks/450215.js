n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    g = n(937615),
    m = n(817460),
    p = n(584825),
    f = n(289393),
    h = n(723047),
    b = n(727843),
    x = n(290348),
    j = n(857081),
    _ = n(869269),
    v = n(388032),
    O = n(605041);
function C(e) {
    var t, n;
    let {
            guildId: l,
            initialEditStateId: s,
            allSubscriptionListings: C,
            priceTiers: y,
            onDeleteEditState: N,
            groupListingId: E,
            onBeforeDispatchNewListing: I,
            onAfterDispatchNewListing: S,
        } = e,
        [T, P] = i.useState(s),
        w = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(T)),
        Z = null == w,
        [R, D] = i.useState(Z),
        A = null == w ? void 0 : w.subscription_plans[0],
        L = null != (t = null == w ? void 0 : w.published) && t,
        k = null != (n = null == w ? void 0 : w.archived) && n,
        G = !k && !L && void 0 !== w,
        M = void 0 === w,
        U = (0, h.mY)(),
        [B] = x._T(T),
        [F] = x.mR(T),
        [H] = x.PK(T),
        [W] = x.d9(T, 1024),
        z = "" !== B ? B : v.intl.string(v.t.QWhe9G),
        V = "" !== B && null != W && "" !== H && null != F && !U,
        K = x.rU(T),
        { loading: Y, error: q, handleCreateOrUpdateFromEditState: X } = x.Xo(),
        { submitting: J, error: Q, publishSubscriptionListing: $ } = (0, p.HQ)(),
        ee = Y || J;
    return (0, r.jsxs)("div", {
        className: O.container,
        children: [
            (0, r.jsxs)("div", {
                className: a()(O.header, { [O.headerExpanded]: R }),
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
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children: z,
                            }),
                            (0, r.jsx)(u.LZC, { size: 2 }),
                            (0, r.jsxs)("div", {
                                className: O.headerDescriptionContainer,
                                children: [
                                    G &&
                                        (0, r.jsx)(u.IGR, {
                                            color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                            text: v.intl.string(v.t.vosPk5),
                                            className: O.draftBadge,
                                        }),
                                    k &&
                                        (0, r.jsx)(u.IGR, {
                                            color: d.Z.unsafe_rawColors.PRIMARY_500.css,
                                            text: v.intl.string(v.t.nhbtEl),
                                            className: O.archivedBadge,
                                        }),
                                    M &&
                                        (0, r.jsx)(u.IGR, {
                                            color: d.Z.unsafe_rawColors.PRIMARY_500.css,
                                            text: v.intl.string(v.t.aiwXeq),
                                            className: O.unsavedBadge,
                                        }),
                                    null != A &&
                                        (0, r.jsxs)(u.Text, {
                                            color: "interactive-normal",
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
                                  (0, r.jsx)(u.Avr, {
                                      variant: "secondary",
                                      onClick: () => {
                                          x.GM(T), Z ? null == N || N() : D(!1);
                                      },
                                      text: v.intl.string(v.t["ETE/oC"]),
                                  }),
                                  (0, r.jsx)(u.Button, {
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
                        : (0, r.jsx)(u.P3F, {
                              onClick: () => D(!0),
                              "aria-label": v.intl.string(v.t["2qPbmO"]),
                              children: (0, r.jsx)(u.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: O.pencilIcon,
                              }),
                          }),
                ],
            }),
            R &&
                (0, r.jsx)(b.I, {
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
