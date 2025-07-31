(n.d(t, { Z: () => M }), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(680018),
    d = n(755721),
    _ = n(481060),
    f = n(37234),
    p = n(194359),
    h = n(700582),
    m = n(925329),
    g = n(479446),
    E = n(717401),
    b = n(286961),
    y = n(93127),
    O = n(752048),
    v = n(590783),
    I = n(699516),
    T = n(246946),
    S = n(594174),
    A = n(572004),
    N = n(669079),
    C = n(74538),
    R = n(51144),
    P = n(987209),
    w = n(981631),
    D = n(474936),
    L = n(388032),
    x = n(136266);
let k = 1500;
function M(e) {
    let { giftCode: t, application: n, sku: a, subscriptionPlan: s, selectedGiftStyle: l, onClose: u, hasSentMessage: f, giftRecipient: p, giftMessageError: g, isSendingMessage: y } = e,
        [O, I] = i.useState(_.kO8.Modes.DEFAULT),
        S = (0, c.e7)([T.Z], () => T.Z.enabled),
        M = f || (null != l && null != p),
        U = (null == a ? void 0 : a.productLine) === w.POd.COLLECTIBLES,
        G = (0, b.Z)(),
        { selectedGiftingPromotionReward: B } = (0, P.wD)(),
        V = null == G ? void 0 : G.giftPurchaseConfirmation,
        F = (0, E.tK)(null == B ? void 0 : B.skuId),
        Z = (0, E.a5)(s) && null != F && null != V,
        H = () => (null != s ? s.skuId : null != a ? a.id : null),
        Y = () => {
            let e;
            return null != g
                ? L.intl.string(L.t.qB8ayc)
                : null == s
                  ? null
                  : ((e = s.interval === D.rV.MONTH ? (M ? (Z ? V.monthGiftText : L.t['4ZJ+7e']) : L.t['P+z55e']) : M ? (Z ? V.yearGiftText : L.t.p0pZXF) : L.t.bXqk3t),
                    L.intl.format(e, {
                        skuName: (0, C.aq)(s.id),
                        intervalCount: s.intervalCount
                    }));
        },
        W = () => (null != p || (f && null == g) ? L.intl.string(L.t.zOmK9P) : null != g ? L.intl.string(L.t.d1lrmZ) : L.intl.string(L.t['/s1xR0'])),
        K = (e, t) => {
            (null != a &&
                (0, N.dM)(
                    new v.Z({
                        code: t,
                        maxUses: 1
                    }),
                    a
                ),
                (0, A.JG)(
                    e,
                    () => I(_.kO8.Modes.SUCCESS),
                    () => I(_.kO8.Modes.ERROR)
                ),
                setTimeout(() => {
                    I(_.kO8.Modes.DEFAULT);
                }, k));
        },
        z = () => {
            let e;
            if (null == t) return null;
            switch (O) {
                case _.kO8.Modes.SUCCESS:
                    e = L.intl.string(L.t.XVvPjY);
                    break;
                case _.kO8.Modes.ERROR:
                    e = L.intl.string(L.t.i4GM3N);
                    break;
                default:
                    e = L.intl.string(L.t.OpuAlJ);
            }
            return (0, r.jsxs)('div', {
                className: x.giftCodeSection,
                children: [
                    (0, r.jsx)(_.vwX, { children: L.intl.string(L.t['/dG4ND']) }),
                    null != t &&
                        (0, r.jsx)(_.kO8, {
                            hideMessage: S ? L.intl.string(L.t['0RLn4+']) : null,
                            value: (0, N.Nz)(t),
                            mode: O,
                            text: e,
                            onCopy: (e) => K(e, t),
                            supportsCopy: A.wS,
                            className: x.__invalid_copyInput,
                            buttonColor: d.Tt.LINK,
                            buttonLook: d.iL.LINK
                        }),
                    (0, r.jsx)('div', {
                        className: x.subtext,
                        children: L.intl.string(L.t.QWKUpq)
                    })
                ]
            });
        },
        q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: x.blurb,
                        children: Y()
                    }),
                    null == g &&
                        (0, r.jsx)(j, {
                            giftCode: t,
                            onClose: u
                        }),
                    (0, r.jsx)('div', { className: x.divider }),
                    z()
                ]
            }),
        X = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.Z, {
                        user: p,
                        className: x.giftRecipient,
                        size: _.EFr.SIZE_80
                    }),
                    (0, r.jsx)(_.X6q, {
                        className: x.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: R.ZP.getName(p)
                    }),
                    (0, r.jsxs)('div', {
                        className: x.giftRecipientTag,
                        children: [' ', R.ZP.getUserTag(p)]
                    }),
                    (0, r.jsx)('div', {
                        className: x.giftSentMessage,
                        children: Y()
                    })
                ]
            });
    return y
        ? (0, r.jsxs)('div', {
              className: x.confirmation,
              children: [
                  null != n
                      ? (0, r.jsx)(m.Z, {
                            game: n,
                            className: x.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, r.jsx)(_.$jN, { type: _.RAz.PULSING_ELLIPSIS })
              ]
          })
        : (0, r.jsxs)('div', {
              className: o()(x.confirmation, { [x.seasonalConfirmationPadding]: Z }),
              children: [
                  null != n
                      ? (0, r.jsx)(m.Z, {
                            game: n,
                            className: x.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, r.jsx)(_.X6q, {
                      variant: 'heading-lg/semibold',
                      className: o()({
                          [x.header]: null == l && !U,
                          [x.headerCustomGifting]: null != l && !U
                      }),
                      children: W()
                  }),
                  (f && null != p && null == g) || M ? X() : q()
              ]
          });
}
let j = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        (p.Z.fetchRelationships(), (0, y._)());
    }, []);
    let [a, o] = i.useState(),
        [s, d] = i.useState(!1),
        [m, E] = i.useState(!1),
        { userAffinities: b, isLoading: v } = (0, c.cj)([O.Z], () => ({
            userAffinities: O.Z.getUserAffinitiesMap(),
            isLoading: O.Z.isFetching()
        })),
        T = Array.from(b.keys()).sort((e, t) => O.Z.compare(e, t)),
        A = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()),
        N = l().difference(A, T),
        C = [...T, ...N],
        P = (0, c.e7)([S.default], () => S.default.filter((e) => C.includes(e.id) && !e.bot), [C]);
    if (null == P || 0 === P.length) return null;
    let w = l().sortBy(P, (e) => C.indexOf(e.id));
    return (0, r.jsxs)('div', {
        className: x.giftRecipientSection,
        children: [
            (0, r.jsx)(_.vwX, { children: L.intl.string(L.t.MJw05e) }),
            (0, r.jsxs)('div', {
                className: x.giftRecipient,
                children: [
                    (0, r.jsx)(_.VcW, {
                        placeholder: L.intl.string(L.t.J019jY),
                        wrapperClassName: x.giftRecipientInputWrapper,
                        className: s ? x.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, r.jsx)(h.Z, {
                                      user: e.value,
                                      size: _.EFr.SIZE_20
                                  }),
                        renderLeading: () => (v ? (0, r.jsx)(_.$jN, { type: _.RAz.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            (o(e), d(!1));
                        },
                        options: w.map((e) => ({
                            value: e,
                            label: ''.concat(R.ZP.getUserTag(e))
                        }))
                    }),
                    (0, r.jsx)(u.z, {
                        disabled: null == a,
                        loading: m,
                        onClick: () => {
                            (E(!0),
                                (0, g.YD)(a, t)
                                    .then(() => {
                                        (n(), (0, f.Ou)());
                                    })
                                    .catch(() => {
                                        (d(!0), E(!1));
                                    }));
                        },
                        text: L.intl.string(L.t['+EgwQk'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: s ? x.subtextError : x.subtext,
                children: s ? L.intl.string(L.t.jo5Vbm) : L.intl.string(L.t['8/N3v7'])
            })
        ]
    });
};
