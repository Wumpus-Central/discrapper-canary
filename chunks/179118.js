r.d(n, {
    Z: function () {
        return U;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(481060),
    p = r(37234),
    h = r(194359),
    _ = r(700582),
    m = r(925329),
    g = r(479446),
    E = r(522489),
    v = r(717401),
    y = r(286961),
    b = r(93127),
    I = r(814443),
    T = r(590783),
    S = r(699516),
    A = r(246946),
    C = r(594174),
    N = r(572004),
    R = r(669079),
    O = r(74538),
    D = r(51144),
    L = r(987209),
    x = r(981631),
    w = r(474936),
    P = r(388032),
    M = r(431852);
let k = 1500;
function U(e) {
    let { giftCode: n, application: r, sku: i, subscriptionPlan: s, selectedGiftStyle: u, onClose: c, hasSentMessage: p, giftRecipient: h, giftMessageError: g, isSendingMessage: b } = e,
        [I, S] = o.useState(f.CopyInput.Modes.DEFAULT),
        C = (0, d.e7)([A.Z], () => A.Z.enabled),
        U = p || (null != u && null != h),
        G = (null == i ? void 0 : i.productLine) === x.POd.COLLECTIBLES,
        Z = (0, y.Z)(),
        { selectedGiftingPromotionReward: F } = (0, L.wD)(),
        V = null == Z ? void 0 : Z.giftPurchaseConfirmation,
        j = (0, v.tK)(null == F ? void 0 : F.skuId),
        H = (0, v.a5)(s) && null != j && null != V,
        Y = () => (null != s ? s.skuId : null != i ? i.id : null),
        W = () => {
            let e;
            return null != g
                ? P.intl.string(P.t.qB8ayc)
                : null == s
                  ? null
                  : ((e = s.interval === w.rV.MONTH ? (U ? (H ? V.monthGiftText : P.t['4ZJ+7e']) : P.t['P+z55e']) : U ? (H ? V.yearGiftText : P.t.p0pZXF) : P.t.bXqk3t),
                    P.intl.format(e, {
                        skuName: (0, O.aq)(s.id),
                        intervalCount: s.intervalCount
                    }));
        },
        K = () => (null != h || (p && null == g) ? P.intl.string(P.t.zOmK9P) : null != g ? P.intl.string(P.t.d1lrmZ) : P.intl.string(P.t['/s1xR0'])),
        z = (e, n) => {
            null != i &&
                (0, R.dM)(
                    new T.Z({
                        code: n,
                        maxUses: 1
                    }),
                    i
                );
            try {
                (0, N.JG)(e), S(f.CopyInput.Modes.SUCCESS);
            } catch (e) {
                S(f.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                S(f.CopyInput.Modes.DEFAULT);
            }, k);
        },
        q = () => {
            let e;
            if (null == n) return null;
            switch (I) {
                case f.CopyInput.Modes.SUCCESS:
                    e = P.intl.string(P.t.XVvPjY);
                    break;
                case f.CopyInput.Modes.ERROR:
                    e = P.intl.string(P.t.i4GM3N);
                    break;
                default:
                    e = P.intl.string(P.t.OpuAlJ);
            }
            return (0, a.jsxs)('div', {
                className: M.giftCodeSection,
                children: [
                    (0, a.jsx)(f.FormTitle, { children: P.intl.string(P.t['/dG4ND']) }),
                    null != n &&
                        (0, a.jsx)(f.CopyInput, {
                            hideMessage: C ? P.intl.string(P.t['0RLn4+']) : null,
                            value: (0, R.Nz)(n),
                            mode: I,
                            text: e,
                            onCopy: (e) => z(e, n),
                            supportsCopy: N.wS,
                            className: M.__invalid_copyInput,
                            buttonColor: f.ButtonColors.LINK,
                            buttonLook: f.ButtonLooks.LINK
                        }),
                    (0, a.jsx)('div', {
                        className: M.subtext,
                        children: P.intl.string(P.t.QWKUpq)
                    })
                ]
            });
        },
        Q = () => {
            let e = (0, R.MY)(h, G),
                { removeGiftRecipientUI: r } = E.m.getCurrentConfig(
                    { location: 'GiftPurchaseConfirmation' },
                    {
                        autoTrackExposure: !1,
                        disable: __BILLING_STANDALONE__ || e !== R.xr.CUSTOM_STYLE
                    }
                ),
                i = !r && null == g;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)('div', {
                        className: M.blurb,
                        children: W()
                    }),
                    i &&
                        (0, a.jsx)(B, {
                            giftCode: n,
                            onClose: c
                        }),
                    (0, a.jsx)('div', { className: M.divider }),
                    q()
                ]
            });
        },
        X = () =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(_.Z, {
                        user: h,
                        className: M.giftRecipient,
                        size: f.AvatarSizes.SIZE_80
                    }),
                    (0, a.jsx)(f.Heading, {
                        className: M.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: D.ZP.getName(h)
                    }),
                    (0, a.jsxs)('div', {
                        className: M.giftRecipientTag,
                        children: [' ', D.ZP.getUserTag(h)]
                    }),
                    (0, a.jsx)('div', {
                        className: M.giftSentMessage,
                        children: W()
                    })
                ]
            });
    return b
        ? (0, a.jsxs)('div', {
              className: M.confirmation,
              children: [
                  null != r
                      ? (0, a.jsx)(m.Z, {
                            game: r,
                            className: M.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: Y()
                        })
                      : null,
                  (0, a.jsx)(f.Spinner, { type: f.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, a.jsxs)('div', {
              className: l()(M.confirmation, { [M.seasonalConfirmationPadding]: H }),
              children: [
                  null != r
                      ? (0, a.jsx)(m.Z, {
                            game: r,
                            className: M.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: Y()
                        })
                      : null,
                  (0, a.jsx)(f.Heading, {
                      variant: 'heading-lg/semibold',
                      className: l()({
                          [M.header]: null == u && !G,
                          [M.headerCustomGifting]: null != u && !G
                      }),
                      children: K()
                  }),
                  (p && null != h && null == g) || U ? X() : Q()
              ]
          });
}
let B = (e) => {
    let { giftCode: n, onClose: r } = e;
    o.useEffect(() => {
        h.Z.fetchRelationships(), (0, b.W)();
    }, []);
    let [i, s] = o.useState(),
        [l, u] = o.useState(!1),
        [m, E] = o.useState(!1),
        { userAffinities: v, isLoading: y } = (0, d.cj)([I.Z], () => ({
            userAffinities: I.Z.getUserAffinitiesUserIds(),
            isLoading: I.Z.getFetching()
        })),
        T = Array.from(v.values()),
        A = (0, d.e7)([S.Z], () => S.Z.getFriendIDs()),
        N = c().difference(A, T),
        R = [...T, ...N],
        O = (0, d.e7)([C.default], () => C.default.filter((e) => R.includes(e.id) && !e.bot), [R]);
    if (null == O || 0 === O.length) return null;
    let L = c().sortBy(O, (e) => R.indexOf(e.id));
    return (0, a.jsxs)('div', {
        className: M.giftRecipientSection,
        children: [
            (0, a.jsx)(f.FormTitle, { children: P.intl.string(P.t.MJw05e) }),
            (0, a.jsxs)('div', {
                className: M.giftRecipient,
                children: [
                    (0, a.jsx)(f.SearchableSelect, {
                        placeholder: P.intl.string(P.t.J019jY),
                        wrapperClassName: M.giftRecipientInputWrapper,
                        className: l ? M.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, a.jsx)(_.Z, {
                                      user: e.value,
                                      size: f.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (y ? (0, a.jsx)(f.Spinner, { type: f.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: i,
                        onChange: (e) => {
                            s(e), u(!1);
                        },
                        options: L.map((e) => ({
                            value: e,
                            label: ''.concat(D.ZP.getUserTag(e))
                        }))
                    }),
                    (0, a.jsx)(f.Button, {
                        disabled: null == i,
                        submitting: m,
                        className: M.sendToRecipientButton,
                        onClick: () => {
                            E(!0),
                                (0, g.YD)(i, n)
                                    .then(() => {
                                        r(), (0, p.Ou)();
                                    })
                                    .catch(() => {
                                        u(!0), E(!1);
                                    });
                        },
                        children: P.intl.string(P.t['+EgwQk'])
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: l ? M.subtextError : M.subtext,
                children: l ? P.intl.string(P.t.jo5Vbm) : P.intl.string(P.t['8/N3v7'])
            })
        ]
    });
};
