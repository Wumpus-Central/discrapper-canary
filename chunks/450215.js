n.d(t, { Z: () => y }), n(388685);
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
    f = n(584825),
    p = n(289393),
    b = n(723047),
    h = n(727843),
    x = n(290348),
    j = n(857081),
    v = n(869269),
    O = n(388032),
    C = n(11413);
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
            onAfterDispatchNewListing: _,
        } = e,
        [T, P] = i.useState(s),
        w = (0, c.e7)([p.Z], () => p.Z.getSubscriptionListing(T)),
        Z = null == w,
        [R, D] = i.useState(Z),
        A = null == w ? void 0 : w.subscription_plans[0],
        L = null != (t = null == w ? void 0 : w.published) && t,
        k = null != (n = null == w ? void 0 : w.archived) && n,
        G = !k && !L && void 0 !== w,
        M = void 0 === w,
        U = (0, b.mY)(),
        [B] = x._T(T),
        [F] = x.mR(T),
        [H] = x.PK(T),
        [W] = x.d9(T, 1024),
        z = "" !== B ? B : O.intl.string(O.t.QWhe9G),
        V = "" !== B && null != W && "" !== H && null != F && !U,
        K = x.rU(T),
        { loading: Y, error: q, handleCreateOrUpdateFromEditState: X } = x.Xo(),
        { submitting: J, error: Q, publishSubscriptionListing: $ } = (0, f.HQ)(),
        ee = Y || J;
    return (0, r.jsxs)("div", {
        className: C.container,
        children: [
            (0, r.jsxs)("div", {
                className: a()(C.header, { [C.headerExpanded]: R }),
                children: [
                    (0, r.jsx)("div", {
                        className: C.headerImageContainer,
                        children:
                            null == W
                                ? (0, r.jsx)(j.Z, {
                                      className: C.starIcon,
                                      "aria-hidden": !0,
                                  })
                                : (0, r.jsx)("img", {
                                      className: C.headerImage,
                                      src: W,
                                      alt: z,
                                  }),
                    }),
                    (0, r.jsxs)("div", {
                        className: C.headerListingInfo,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "interactive-text-active",
                                children: z,
                            }),
                            (0, r.jsx)(u.LZC, { size: 2 }),
                            (0, r.jsxs)("div", {
                                className: C.headerDescriptionContainer,
                                children: [
                                    G &&
                                        (0, r.jsx)(u.IGR, {
                                            color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                            text: O.intl.string(O.t.vosPk5),
                                            className: C.draftBadge,
                                        }),
                                    k &&
                                        (0, r.jsx)(u.IGR, {
                                            color: d.Z.unsafe_rawColors.PRIMARY_500.css,
                                            text: O.intl.string(O.t.nhbtEl),
                                            className: C.archivedBadge,
                                        }),
                                    M &&
                                        (0, r.jsx)(u.IGR, {
                                            color: d.Z.unsafe_rawColors.PRIMARY_500.css,
                                            text: O.intl.string(O.t.aiwXeq),
                                            className: C.unsavedBadge,
                                        }),
                                    null != A &&
                                        (0, r.jsxs)(u.Text, {
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
                              className: C.headerActions,
                              children: [
                                  (0, r.jsx)(u.Avr, {
                                      variant: "secondary",
                                      onClick: () => {
                                          x.GM(T), Z ? null == E || E() : D(!1);
                                      },
                                      text: O.intl.string(O.t["ETE/oC"]),
                                  }),
                                  (0, r.jsx)(u.Button, {
                                      variant: "primary",
                                      onClick: () =>
                                          X({
                                              guildId: l,
                                              editStateId: T,
                                              groupListingId: I,
                                              onBeforeDispatchNewListing: S,
                                              onAfterDispatchNewListing: (e) => {
                                                  P(e.id), null == _ || _(e);
                                              },
                                          }),
                                      disabled: !V || !K,
                                      loading: ee,
                                      text: O.intl.string(O.t["R3BPH+"]),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(u.P3F, {
                              onClick: () => D(!0),
                              "aria-label": O.intl.string(O.t["2qPbmO"]),
                              children: (0, r.jsx)(u.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: C.pencilIcon,
                              }),
                          }),
                ],
            }),
            R &&
                (0, r.jsx)(h.I, {
                    editStateId: T,
                    guildId: l,
                    groupListingId: I,
                    children: (0, r.jsx)(v.Z, {
                        allSubscriptionListings: y,
                        priceTiers: N,
                        loading: ee,
                        error: null != q ? q : Q,
                        handlePublishTier: () => {
                            o()(null != I, "group listing doesnt exist"),
                                o()(null != w, "subscription listing doesnt exist"),
                                $({
                                    guildId: l,
                                    groupListingId: I,
                                    listingId: w.id,
                                });
                        },
                        onDeleteEditState: E,
                    }),
                }),
        ],
    });
}
