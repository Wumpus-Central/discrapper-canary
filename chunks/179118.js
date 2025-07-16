(n.d(t, { Z: () => k }), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(37234),
    _ = n(194359),
    p = n(700582),
    h = n(925329),
    m = n(479446),
    g = n(717401),
    E = n(286961),
    b = n(93127),
    y = n(752048),
    O = n(590783),
    v = n(699516),
    I = n(246946),
    T = n(594174),
    S = n(572004),
    A = n(669079),
    N = n(74538),
    C = n(51144),
    R = n(987209),
    P = n(981631),
    w = n(474936),
    D = n(388032),
    L = n(136266);
let x = 1500;
function k(e) {
    let { giftCode: t, application: n, sku: a, subscriptionPlan: s, selectedGiftStyle: l, onClose: f, hasSentMessage: _, giftRecipient: m, giftMessageError: b, isSendingMessage: y } = e,
        [v, T] = i.useState(d.kO8.Modes.DEFAULT),
        k = (0, c.e7)([I.Z], () => I.Z.enabled),
        j = _ || (null != l && null != m),
        U = (null == a ? void 0 : a.productLine) === P.POd.COLLECTIBLES,
        G = (0, E.Z)(),
        { selectedGiftingPromotionReward: B } = (0, R.wD)(),
        V = null == G ? void 0 : G.giftPurchaseConfirmation,
        F = (0, g.tK)(null == B ? void 0 : B.skuId),
        Z = (0, g.a5)(s) && null != F && null != V,
        H = () => (null != s ? s.skuId : null != a ? a.id : null),
        Y = () => {
            let e;
            return null != b
                ? D.intl.string(D.t.qB8ayc)
                : null == s
                  ? null
                  : ((e = s.interval === w.rV.MONTH ? (j ? (Z ? V.monthGiftText : D.t['4ZJ+7e']) : D.t['P+z55e']) : j ? (Z ? V.yearGiftText : D.t.p0pZXF) : D.t.bXqk3t),
                    D.intl.format(e, {
                        skuName: (0, N.aq)(s.id),
                        intervalCount: s.intervalCount
                    }));
        },
        W = () => (null != m || (_ && null == b) ? D.intl.string(D.t.zOmK9P) : null != b ? D.intl.string(D.t.d1lrmZ) : D.intl.string(D.t['/s1xR0'])),
        K = (e, t) => {
            (null != a &&
                (0, A.dM)(
                    new O.Z({
                        code: t,
                        maxUses: 1
                    }),
                    a
                ),
                (0, S.JG)(
                    e,
                    () => T(d.kO8.Modes.SUCCESS),
                    () => T(d.kO8.Modes.ERROR)
                ),
                setTimeout(() => {
                    T(d.kO8.Modes.DEFAULT);
                }, x));
        },
        z = () => {
            let e;
            if (null == t) return null;
            switch (v) {
                case d.kO8.Modes.SUCCESS:
                    e = D.intl.string(D.t.XVvPjY);
                    break;
                case d.kO8.Modes.ERROR:
                    e = D.intl.string(D.t.i4GM3N);
                    break;
                default:
                    e = D.intl.string(D.t.OpuAlJ);
            }
            return (0, r.jsxs)('div', {
                className: L.giftCodeSection,
                children: [
                    (0, r.jsx)(d.vwX, { children: D.intl.string(D.t['/dG4ND']) }),
                    null != t &&
                        (0, r.jsx)(d.kO8, {
                            hideMessage: k ? D.intl.string(D.t['0RLn4+']) : null,
                            value: (0, A.Nz)(t),
                            mode: v,
                            text: e,
                            onCopy: (e) => K(e, t),
                            supportsCopy: S.wS,
                            className: L.__invalid_copyInput,
                            buttonColor: u.Tt.LINK,
                            buttonLook: u.iL.LINK
                        }),
                    (0, r.jsx)('div', {
                        className: L.subtext,
                        children: D.intl.string(D.t.QWKUpq)
                    })
                ]
            });
        },
        q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: L.blurb,
                        children: Y()
                    }),
                    null == b &&
                        (0, r.jsx)(M, {
                            giftCode: t,
                            onClose: f
                        }),
                    (0, r.jsx)('div', { className: L.divider }),
                    z()
                ]
            }),
        X = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(p.Z, {
                        user: m,
                        className: L.giftRecipient,
                        size: d.EFr.SIZE_80
                    }),
                    (0, r.jsx)(d.X6q, {
                        className: L.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: C.ZP.getName(m)
                    }),
                    (0, r.jsxs)('div', {
                        className: L.giftRecipientTag,
                        children: [' ', C.ZP.getUserTag(m)]
                    }),
                    (0, r.jsx)('div', {
                        className: L.giftSentMessage,
                        children: Y()
                    })
                ]
            });
    return y
        ? (0, r.jsxs)('div', {
              className: L.confirmation,
              children: [
                  null != n
                      ? (0, r.jsx)(h.Z, {
                            game: n,
                            className: L.__invalid_icon,
                            size: h.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, r.jsx)(d.$jN, { type: d.RAz.PULSING_ELLIPSIS })
              ]
          })
        : (0, r.jsxs)('div', {
              className: o()(L.confirmation, { [L.seasonalConfirmationPadding]: Z }),
              children: [
                  null != n
                      ? (0, r.jsx)(h.Z, {
                            game: n,
                            className: L.__invalid_icon,
                            size: h.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, r.jsx)(d.X6q, {
                      variant: 'heading-lg/semibold',
                      className: o()({
                          [L.header]: null == l && !U,
                          [L.headerCustomGifting]: null != l && !U
                      }),
                      children: W()
                  }),
                  (_ && null != m && null == b) || j ? X() : q()
              ]
          });
}
let M = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        (_.Z.fetchRelationships(), (0, b._)());
    }, []);
    let [a, o] = i.useState(),
        [s, h] = i.useState(!1),
        [g, E] = i.useState(!1),
        { userAffinities: O, isLoading: I } = (0, c.cj)([y.Z], () => ({
            userAffinities: y.Z.getUserAffinitiesMap(),
            isLoading: y.Z.isFetching()
        })),
        S = Array.from(O.keys()).sort((e, t) => y.Z.compare(e, t)),
        A = (0, c.e7)([v.Z], () => v.Z.getFriendIDs()),
        N = l().difference(A, S),
        R = [...S, ...N],
        P = (0, c.e7)([T.default], () => T.default.filter((e) => R.includes(e.id) && !e.bot), [R]);
    if (null == P || 0 === P.length) return null;
    let w = l().sortBy(P, (e) => R.indexOf(e.id));
    return (0, r.jsxs)('div', {
        className: L.giftRecipientSection,
        children: [
            (0, r.jsx)(d.vwX, { children: D.intl.string(D.t.MJw05e) }),
            (0, r.jsxs)('div', {
                className: L.giftRecipient,
                children: [
                    (0, r.jsx)(d.VcW, {
                        placeholder: D.intl.string(D.t.J019jY),
                        wrapperClassName: L.giftRecipientInputWrapper,
                        className: s ? L.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, r.jsx)(p.Z, {
                                      user: e.value,
                                      size: d.EFr.SIZE_20
                                  }),
                        renderLeading: () => (I ? (0, r.jsx)(d.$jN, { type: d.RAz.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            (o(e), h(!1));
                        },
                        options: w.map((e) => ({
                            value: e,
                            label: ''.concat(C.ZP.getUserTag(e))
                        }))
                    }),
                    (0, r.jsx)(u.zx, {
                        disabled: null == a,
                        submitting: g,
                        className: L.sendToRecipientButton,
                        onClick: () => {
                            (E(!0),
                                (0, m.YD)(a, t)
                                    .then(() => {
                                        (n(), (0, f.Ou)());
                                    })
                                    .catch(() => {
                                        (h(!0), E(!1));
                                    }));
                        },
                        children: D.intl.string(D.t['+EgwQk'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: s ? L.subtextError : L.subtext,
                children: s ? D.intl.string(D.t.jo5Vbm) : D.intl.string(D.t['8/N3v7'])
            })
        ]
    });
};
