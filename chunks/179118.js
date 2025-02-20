n.d(t, { Z: () => M }), n(47120);
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
    p = n(700582),
    _ = n(925329),
    h = n(479446),
    m = n(522489),
    g = n(717401),
    E = n(286961),
    v = n(93127),
    b = n(814443),
    y = n(590783),
    O = n(699516),
    S = n(246946),
    I = n(594174),
    T = n(572004),
    N = n(669079),
    A = n(74538),
    C = n(51144),
    R = n(987209),
    P = n(981631),
    w = n(474936),
    D = n(388032),
    x = n(183706);
let L = 1500;
function M(e) {
    let { giftCode: t, application: n, sku: o, subscriptionPlan: s, selectedGiftStyle: l, onClose: d, hasSentMessage: f, giftRecipient: h, giftMessageError: v, isSendingMessage: b } = e,
        [O, I] = i.useState(u.kO8.Modes.DEFAULT),
        M = (0, c.e7)([S.Z], () => S.Z.enabled),
        j = f || (null != l && null != h),
        U = (null == o ? void 0 : o.productLine) === P.POd.COLLECTIBLES,
        G = (0, E.Z)(),
        { selectedGiftingPromotionReward: B } = (0, R.wD)(),
        Z = null == G ? void 0 : G.giftPurchaseConfirmation,
        F = (0, g.tK)(null == B ? void 0 : B.skuId),
        V = (0, g.a5)(s) && null != F && null != Z,
        H = () => (null != s ? s.skuId : null != o ? o.id : null),
        W = () => {
            let e;
            return null != v
                ? D.NW.string(D.t.qB8ayc)
                : null == s
                  ? null
                  : ((e = s.interval === w.rV.MONTH ? (j ? (V ? Z.monthGiftText : D.t['4ZJ+7e']) : D.t['P+z55e']) : j ? (V ? Z.yearGiftText : D.t.p0pZXF) : D.t.bXqk3t),
                    D.NW.format(e, {
                        skuName: (0, A.aq)(s.id),
                        intervalCount: s.intervalCount
                    }));
        },
        Y = () => (null != h || (f && null == v) ? D.NW.string(D.t.zOmK9P) : null != v ? D.NW.string(D.t.d1lrmZ) : D.NW.string(D.t['/s1xR0'])),
        K = (e, t) => {
            null != o &&
                (0, N.dM)(
                    new y.Z({
                        code: t,
                        maxUses: 1
                    }),
                    o
                );
            try {
                (0, T.JG)(e), I(u.kO8.Modes.SUCCESS);
            } catch (e) {
                I(u.kO8.Modes.ERROR);
            }
            setTimeout(() => {
                I(u.kO8.Modes.DEFAULT);
            }, L);
        },
        z = () => {
            let e;
            if (null == t) return null;
            switch (O) {
                case u.kO8.Modes.SUCCESS:
                    e = D.NW.string(D.t.XVvPjY);
                    break;
                case u.kO8.Modes.ERROR:
                    e = D.NW.string(D.t.i4GM3N);
                    break;
                default:
                    e = D.NW.string(D.t.OpuAlJ);
            }
            return (0, r.jsxs)('div', {
                className: x.giftCodeSection,
                children: [
                    (0, r.jsx)(u.vwX, { children: D.NW.string(D.t['/dG4ND']) }),
                    null != t &&
                        (0, r.jsx)(u.kO8, {
                            hideMessage: M ? D.NW.string(D.t['0RLn4+']) : null,
                            value: (0, N.Nz)(t),
                            mode: O,
                            text: e,
                            onCopy: (e) => K(e, t),
                            supportsCopy: T.wS,
                            className: x.__invalid_copyInput,
                            buttonColor: u.Ttl.LINK,
                            buttonLook: u.iLD.LINK
                        }),
                    (0, r.jsx)('div', {
                        className: x.subtext,
                        children: D.NW.string(D.t.QWKUpq)
                    })
                ]
            });
        },
        q = () => {
            let e = (0, N.MY)(h, U),
                { removeGiftRecipientUI: n } = m.m.getCurrentConfig(
                    { location: 'GiftPurchaseConfirmation' },
                    {
                        autoTrackExposure: !1,
                        disable: __BILLING_STANDALONE__ || e !== N.xr.CUSTOM_STYLE
                    }
                ),
                i = !n && null == v;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: x.blurb,
                        children: W()
                    }),
                    i &&
                        (0, r.jsx)(k, {
                            giftCode: t,
                            onClose: d
                        }),
                    (0, r.jsx)('div', { className: x.divider }),
                    z()
                ]
            });
        },
        Q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(p.Z, {
                        user: h,
                        className: x.giftRecipient,
                        size: u.EFr.SIZE_80
                    }),
                    (0, r.jsx)(u.X6q, {
                        className: x.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: C.ZP.getName(h)
                    }),
                    (0, r.jsxs)('div', {
                        className: x.giftRecipientTag,
                        children: [' ', C.ZP.getUserTag(h)]
                    }),
                    (0, r.jsx)('div', {
                        className: x.giftSentMessage,
                        children: W()
                    })
                ]
            });
    return b
        ? (0, r.jsxs)('div', {
              className: x.confirmation,
              children: [
                  null != n
                      ? (0, r.jsx)(_.Z, {
                            game: n,
                            className: x.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, r.jsx)(u.$jN, { type: u.RAz.PULSING_ELLIPSIS })
              ]
          })
        : (0, r.jsxs)('div', {
              className: a()(x.confirmation, { [x.seasonalConfirmationPadding]: V }),
              children: [
                  null != n
                      ? (0, r.jsx)(_.Z, {
                            game: n,
                            className: x.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, r.jsx)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: a()({
                          [x.header]: null == l && !U,
                          [x.headerCustomGifting]: null != l && !U
                      }),
                      children: Y()
                  }),
                  (f && null != h && null == v) || j ? Q() : q()
              ]
          });
}
let k = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        f.Z.fetchRelationships(), (0, v.W)();
    }, []);
    let [o, a] = i.useState(),
        [s, _] = i.useState(!1),
        [m, g] = i.useState(!1),
        { userAffinities: E, isLoading: y } = (0, c.cj)([b.Z], () => ({
            userAffinities: b.Z.getUserAffinitiesUserIds(),
            isLoading: b.Z.getFetching()
        })),
        S = Array.from(E.values()),
        T = (0, c.e7)([O.Z], () => O.Z.getFriendIDs()),
        N = l().difference(T, S),
        A = [...S, ...N],
        R = (0, c.e7)([I.default], () => I.default.filter((e) => A.includes(e.id) && !e.bot), [A]);
    if (null == R || 0 === R.length) return null;
    let P = l().sortBy(R, (e) => A.indexOf(e.id));
    return (0, r.jsxs)('div', {
        className: x.giftRecipientSection,
        children: [
            (0, r.jsx)(u.vwX, { children: D.NW.string(D.t.MJw05e) }),
            (0, r.jsxs)('div', {
                className: x.giftRecipient,
                children: [
                    (0, r.jsx)(u.VcW, {
                        placeholder: D.NW.string(D.t.J019jY),
                        wrapperClassName: x.giftRecipientInputWrapper,
                        className: s ? x.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, r.jsx)(p.Z, {
                                      user: e.value,
                                      size: u.EFr.SIZE_20
                                  }),
                        renderLeading: () => (y ? (0, r.jsx)(u.$jN, { type: u.RAz.PULSING_ELLIPSIS }) : null),
                        value: o,
                        onChange: (e) => {
                            a(e), _(!1);
                        },
                        options: P.map((e) => ({
                            value: e,
                            label: ''.concat(C.ZP.getUserTag(e))
                        }))
                    }),
                    (0, r.jsx)(u.zxk, {
                        disabled: null == o,
                        submitting: m,
                        className: x.sendToRecipientButton,
                        onClick: () => {
                            g(!0),
                                (0, h.YD)(o, t)
                                    .then(() => {
                                        n(), (0, d.Ou)();
                                    })
                                    .catch(() => {
                                        _(!0), g(!1);
                                    });
                        },
                        children: D.NW.string(D.t['+EgwQk'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: s ? x.subtextError : x.subtext,
                children: s ? D.NW.string(D.t.jo5Vbm) : D.NW.string(D.t['8/N3v7'])
            })
        ]
    });
};
