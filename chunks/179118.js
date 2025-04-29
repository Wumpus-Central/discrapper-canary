n.d(t, { Z: () => M }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(37234),
    f = n(194359),
    _ = n(700582),
    p = n(925329),
    h = n(479446),
    m = n(522489),
    g = n(717401),
    E = n(286961),
    b = n(93127),
    y = n(814443),
    O = n(590783),
    v = n(699516),
    I = n(246946),
    S = n(594174),
    T = n(572004),
    A = n(669079),
    N = n(74538),
    C = n(51144),
    R = n(987209),
    P = n(981631),
    w = n(474936),
    D = n(388032),
    L = n(136266);
let x = 1500;
function M(e) {
    let { giftCode: t, application: n, sku: o, subscriptionPlan: s, selectedGiftStyle: l, onClose: d, hasSentMessage: f, giftRecipient: h, giftMessageError: b, isSendingMessage: y } = e,
        [v, S] = i.useState(u.kO8.Modes.DEFAULT),
        M = (0, c.e7)([I.Z], () => I.Z.enabled),
        j = f || (null != l && null != h),
        U = (null == o ? void 0 : o.productLine) === P.POd.COLLECTIBLES,
        G = (0, E.Z)(),
        { selectedGiftingPromotionReward: B } = (0, R.wD)(),
        V = null == G ? void 0 : G.giftPurchaseConfirmation,
        F = (0, g.tK)(null == B ? void 0 : B.skuId),
        Z = (0, g.a5)(s) && null != F && null != V,
        H = () => (null != s ? s.skuId : null != o ? o.id : null),
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
        W = () => (null != h || (f && null == b) ? D.intl.string(D.t.zOmK9P) : null != b ? D.intl.string(D.t.d1lrmZ) : D.intl.string(D.t['/s1xR0'])),
        K = (e, t) => {
            null != o &&
                (0, A.dM)(
                    new O.Z({
                        code: t,
                        maxUses: 1
                    }),
                    o
                ),
                (0, T.JG)(
                    e,
                    () => S(u.kO8.Modes.SUCCESS),
                    () => S(u.kO8.Modes.ERROR)
                ),
                setTimeout(() => {
                    S(u.kO8.Modes.DEFAULT);
                }, x);
        },
        z = () => {
            let e;
            if (null == t) return null;
            switch (v) {
                case u.kO8.Modes.SUCCESS:
                    e = D.intl.string(D.t.XVvPjY);
                    break;
                case u.kO8.Modes.ERROR:
                    e = D.intl.string(D.t.i4GM3N);
                    break;
                default:
                    e = D.intl.string(D.t.OpuAlJ);
            }
            return (0, r.jsxs)('div', {
                className: L.giftCodeSection,
                children: [
                    (0, r.jsx)(u.vwX, { children: D.intl.string(D.t['/dG4ND']) }),
                    null != t &&
                        (0, r.jsx)(u.kO8, {
                            hideMessage: M ? D.intl.string(D.t['0RLn4+']) : null,
                            value: (0, A.Nz)(t),
                            mode: v,
                            text: e,
                            onCopy: (e) => K(e, t),
                            supportsCopy: T.wS,
                            className: L.__invalid_copyInput,
                            buttonColor: u.Ttl.LINK,
                            buttonLook: u.iLD.LINK
                        }),
                    (0, r.jsx)('div', {
                        className: L.subtext,
                        children: D.intl.string(D.t.QWKUpq)
                    })
                ]
            });
        },
        q = () => {
            let e = (0, A.MY)(h, U),
                { removeGiftRecipientUI: n } = m.m.getCurrentConfig(
                    { location: 'GiftPurchaseConfirmation' },
                    {
                        autoTrackExposure: !1,
                        disable: __BILLING_STANDALONE__ || e !== A.xr.CUSTOM_STYLE
                    }
                ),
                i = !n && null == b;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: L.blurb,
                        children: Y()
                    }),
                    i &&
                        (0, r.jsx)(k, {
                            giftCode: t,
                            onClose: d
                        }),
                    (0, r.jsx)('div', { className: L.divider }),
                    z()
                ]
            });
        },
        Q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(_.Z, {
                        user: h,
                        className: L.giftRecipient,
                        size: u.EFr.SIZE_80
                    }),
                    (0, r.jsx)(u.X6q, {
                        className: L.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: C.ZP.getName(h)
                    }),
                    (0, r.jsxs)('div', {
                        className: L.giftRecipientTag,
                        children: [' ', C.ZP.getUserTag(h)]
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
                      ? (0, r.jsx)(p.Z, {
                            game: n,
                            className: L.__invalid_icon,
                            size: p.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, r.jsx)(u.$jN, { type: u.RAz.PULSING_ELLIPSIS })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(L.confirmation, { [L.seasonalConfirmationPadding]: Z }),
              children: [
                  null != n
                      ? (0, r.jsx)(p.Z, {
                            game: n,
                            className: L.__invalid_icon,
                            size: p.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, r.jsx)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: a()({
                          [L.header]: null == l && !U,
                          [L.headerCustomGifting]: null != l && !U
                      }),
                      children: W()
                  }),
                  (f && null != h && null == b) || j ? Q() : q()
              ]
          });
}
let k = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        f.Z.fetchRelationships(), (0, b.W)();
    }, []);
    let [o, a] = i.useState(),
        [s, p] = i.useState(!1),
        [m, g] = i.useState(!1),
        { userAffinities: E, isLoading: O } = (0, c.cj)([y.Z], () => ({
            userAffinities: y.Z.getUserAffinitiesUserIds(),
            isLoading: y.Z.getFetching()
        })),
        I = Array.from(E.values()),
        T = (0, c.e7)([v.Z], () => v.Z.getFriendIDs()),
        A = l().difference(T, I),
        N = [...I, ...A],
        R = (0, c.e7)([S.default], () => S.default.filter((e) => N.includes(e.id) && !e.bot), [N]);
    if (null == R || 0 === R.length) return null;
    let P = l().sortBy(R, (e) => N.indexOf(e.id));
    return (0, r.jsxs)('div', {
        className: L.giftRecipientSection,
        children: [
            (0, r.jsx)(u.vwX, { children: D.intl.string(D.t.MJw05e) }),
            (0, r.jsxs)('div', {
                className: L.giftRecipient,
                children: [
                    (0, r.jsx)(u.VcW, {
                        placeholder: D.intl.string(D.t.J019jY),
                        wrapperClassName: L.giftRecipientInputWrapper,
                        className: s ? L.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, r.jsx)(_.Z, {
                                      user: e.value,
                                      size: u.EFr.SIZE_20
                                  }),
                        renderLeading: () => (O ? (0, r.jsx)(u.$jN, { type: u.RAz.PULSING_ELLIPSIS }) : null),
                        value: o,
                        onChange: (e) => {
                            a(e), p(!1);
                        },
                        options: P.map((e) => ({
                            value: e,
                            label: ''.concat(C.ZP.getUserTag(e))
                        }))
                    }),
                    (0, r.jsx)(u.zxk, {
                        disabled: null == o,
                        submitting: m,
                        className: L.sendToRecipientButton,
                        onClick: () => {
                            g(!0),
                                (0, h.YD)(o, t)
                                    .then(() => {
                                        n(), (0, d.Ou)();
                                    })
                                    .catch(() => {
                                        p(!0), g(!1);
                                    });
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
