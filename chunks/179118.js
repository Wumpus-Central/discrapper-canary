n.d(t, { Z: () => k }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(159691),
    d = n(755721),
    f = n(481060),
    _ = n(37234),
    p = n(194359),
    h = n(700582),
    m = n(925329),
    g = n(479446),
    E = n(347896),
    b = n(717401),
    y = n(93127),
    O = n(752048),
    v = n(590783),
    I = n(699516),
    T = n(246946),
    S = n(594174),
    A = n(572004),
    C = n(669079),
    N = n(74538),
    R = n(51144),
    P = n(987209),
    D = n(981631),
    w = n(474936),
    x = n(388032),
    L = n(769212);
let M = 1500;
function k(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: s,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: _,
            giftRecipient: p,
            giftMessageError: g,
            isSendingMessage: y,
        } = e,
        [O, I] = i.useState(f.kO8.Modes.DEFAULT),
        S = (0, c.e7)([T.Z], () => T.Z.enabled),
        k = _ || (null != l && null != p),
        U = (null == a ? void 0 : a.productLine) === D.POd.COLLECTIBLES,
        G = (0, E.Z)(),
        { selectedGiftingPromotionReward: B } = (0, P.wD)(),
        Z = null == G ? void 0 : G.giftPurchaseConfirmation,
        F = (0, b.tK)(null == B ? void 0 : B.skuId),
        V = (0, b.a5)(s) && null != F && null != Z,
        H = () => (null != s ? s.skuId : null != a ? a.id : null),
        Y = () => {
            let e;
            return null != g
                ? x.intl.string(x.t.qB8aya)
                : null == s
                  ? null
                  : ((e =
                        s.interval === w.rV.MONTH
                            ? k
                                ? V
                                    ? Z.monthGiftText
                                    : x.t["4ZJ+7Z"]
                                : x.t["P+z55d"]
                            : k
                              ? V
                                  ? Z.yearGiftText
                                  : x.t.p0pZXP
                              : x.t.bXqk3o),
                    x.intl.format(e, {
                        skuName: (0, N.aq)(s.id),
                        intervalCount: s.intervalCount,
                    }));
        },
        W = () =>
            null != p || (_ && null == g)
                ? x.intl.string(x.t.zOmK9N)
                : null != g
                  ? x.intl.string(x.t.d1lrmU)
                  : x.intl.string(x.t["/s1xR7"]),
        K = (e, t) => {
            null != a &&
                (0, C.dM)(
                    new v.Z({
                        code: t,
                        maxUses: 1,
                    }),
                    a,
                ),
                (0, A.JG)(
                    e,
                    () => I(f.kO8.Modes.SUCCESS),
                    () => I(f.kO8.Modes.ERROR),
                ),
                setTimeout(() => {
                    I(f.kO8.Modes.DEFAULT);
                }, M);
        },
        z = () => {
            let e;
            if (null == t) return null;
            switch (O) {
                case f.kO8.Modes.SUCCESS:
                    e = x.intl.string(x.t.XVvPjU);
                    break;
                case f.kO8.Modes.ERROR:
                    e = x.intl.string(x.t.i4GM3L);
                    break;
                default:
                    e = x.intl.string(x.t.OpuAlK);
            }
            return (0, r.jsxs)("div", {
                className: L.giftCodeSection,
                children: [
                    null != t &&
                        (0, r.jsx)(f.gNt, {
                            label: x.intl.string(x.t["/dG4NA"]),
                            children: (0, r.jsx)(f.kO8, {
                                hideMessage: S ? x.intl.string(x.t["0RLn47"]) : null,
                                value: (0, C.Nz)(t),
                                mode: O,
                                text: e,
                                onCopy: (e) => K(e, t),
                                supportsCopy: A.wS,
                                className: L.__invalid_copyInput,
                                buttonColor: d.Tt.LINK,
                                buttonLook: d.iL.LINK,
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: L.subtext,
                        children: x.intl.string(x.t.QWKUpn),
                    }),
                ],
            });
        },
        q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: L.blurb,
                        children: Y(),
                    }),
                    null == g &&
                        (0, r.jsx)(j, {
                            giftCode: t,
                            onClose: u,
                        }),
                    (0, r.jsx)("div", { className: L.divider }),
                    z(),
                ],
            }),
        X = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: L.giftRecipientContainer,
                        children: [
                            (0, r.jsx)(h.Z, {
                                user: p,
                                size: f.EFr.SIZE_40,
                            }),
                            (0, r.jsxs)("div", {
                                className: L.giftRecipientTextContainer,
                                children: [
                                    (0, r.jsx)(f.Heading, {
                                        variant: "heading-md/semibold",
                                        children: R.ZP.getName(p),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: L.giftRecipientTag,
                                        children: [" ", R.ZP.getUserTag(p)],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: L.giftSentMessage,
                        children: Y(),
                    }),
                ],
            });
    return y
        ? (0, r.jsxs)("div", {
              className: L.confirmation,
              children: [
                  null != n
                      ? (0, r.jsx)(m.Z, {
                            game: n,
                            className: L.__invalid_icon,
                            size: m.A.LARGE,
                            skuId: H(),
                        })
                      : null,
                  (0, r.jsx)(f.$jN, { type: f.RAz.PULSING_ELLIPSIS }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: o()(L.confirmation, { [L.seasonalConfirmationPadding]: V }),
              children: [
                  null != n
                      ? (0, r.jsx)(m.Z, {
                            game: n,
                            className: L.__invalid_icon,
                            size: m.A.LARGE,
                            skuId: H(),
                        })
                      : null,
                  (0, r.jsx)(f.Heading, {
                      variant: "heading-lg/semibold",
                      className: o()({
                          [L.header]: null == l && !U,
                          [L.headerCustomGifting]: null != l && !U,
                      }),
                      children: W(),
                  }),
                  (_ && null != p && null == g) || k ? X() : q(),
              ],
          });
}
let j = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        p.Z.fetchRelationships(), (0, y._)();
    }, []);
    let [a, o] = i.useState(),
        [s, d] = i.useState(!1),
        [m, E] = i.useState(!1),
        { userAffinities: b, isLoading: v } = (0, c.cj)([O.Z], () => ({
            userAffinities: O.Z.getUserAffinitiesMap(),
            isLoading: O.Z.isFetching(),
        })),
        T = Array.from(b.keys()).sort((e, t) => O.Z.compare(e, t)),
        A = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()),
        C = l().difference(A, T),
        N = [...T, ...C],
        P = (0, c.e7)([S.default], () => S.default.filter((e) => N.includes(e.id) && !e.bot), [N]);
    if (null == P || 0 === P.length) return null;
    let D = l().sortBy(P, (e) => N.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: L.giftRecipientSection,
        children: [
            (0, r.jsxs)("div", {
                className: L.giftRecipient,
                children: [
                    (0, r.jsx)(f.VcW, {
                        label: x.intl.string(x.t.MJw05f),
                        placeholder: x.intl.string(x.t.J019jZ),
                        wrapperClassName: L.giftRecipientInputWrapper,
                        className: s ? L.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, r.jsx)(h.Z, {
                                      user: e.value,
                                      size: f.EFr.SIZE_20,
                                  }),
                        renderLeading: () => (v ? (0, r.jsx)(f.$jN, { type: f.RAz.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            o(e), d(!1);
                        },
                        options: D.map((e) => ({
                            value: e,
                            label: "".concat(R.ZP.getUserTag(e)),
                        })),
                    }),
                    (0, r.jsx)("div", {
                        className: L.giftRecipientButton,
                        children: (0, r.jsx)(u.zxk, {
                            disabled: null == a,
                            loading: m,
                            onClick: () => {
                                E(!0),
                                    (0, g.YD)(a, t)
                                        .then(() => {
                                            n(), (0, _.Ou)();
                                        })
                                        .catch(() => {
                                            d(!0), E(!1);
                                        });
                            },
                            text: x.intl.string(x.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s ? L.subtextError : L.subtext,
                children: s ? x.intl.string(x.t.jo5Vbl) : x.intl.string(x.t["8/N3v3"]),
            }),
        ],
    });
};
