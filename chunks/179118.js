n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(37234),
    f = n(194359),
    _ = n(700582),
    p = n(925329),
    h = n(479446),
    m = n(522489),
    g = n(717401),
    E = n(286961),
    v = n(93127),
    y = n(814443),
    I = n(590783),
    T = n(699516),
    b = n(246946),
    S = n(594174),
    A = n(572004),
    N = n(669079),
    C = n(74538),
    R = n(51144),
    O = n(987209),
    D = n(981631),
    L = n(474936),
    x = n(388032),
    w = n(109726);
let P = 1500;
function M(e) {
    let { giftCode: t, application: n, sku: a, subscriptionPlan: o, selectedGiftStyle: l, onClose: d, hasSentMessage: f, giftRecipient: h, giftMessageError: v, isSendingMessage: y } = e,
        [T, S] = r.useState(c.kO8.Modes.DEFAULT),
        M = (0, u.e7)([b.Z], () => b.Z.enabled),
        U = f || (null != l && null != h),
        G = (null == a ? void 0 : a.productLine) === D.POd.COLLECTIBLES,
        B = (0, E.Z)(),
        { selectedGiftingPromotionReward: Z } = (0, O.wD)(),
        F = null == B ? void 0 : B.giftPurchaseConfirmation,
        V = (0, g.tK)(null == Z ? void 0 : Z.skuId),
        j = (0, g.a5)(o) && null != V && null != F,
        H = () => (null != o ? o.skuId : null != a ? a.id : null),
        Y = () => {
            let e;
            return null != v
                ? x.intl.string(x.t.qB8ayc)
                : null == o
                  ? null
                  : ((e = o.interval === L.rV.MONTH ? (U ? (j ? F.monthGiftText : x.t['4ZJ+7e']) : x.t['P+z55e']) : U ? (j ? F.yearGiftText : x.t.p0pZXF) : x.t.bXqk3t),
                    x.intl.format(e, {
                        skuName: (0, C.aq)(o.id),
                        intervalCount: o.intervalCount
                    }));
        },
        W = () => (null != h || (f && null == v) ? x.intl.string(x.t.zOmK9P) : null != v ? x.intl.string(x.t.d1lrmZ) : x.intl.string(x.t['/s1xR0'])),
        K = (e, t) => {
            null != a &&
                (0, N.dM)(
                    new I.Z({
                        code: t,
                        maxUses: 1
                    }),
                    a
                );
            try {
                (0, A.JG)(e), S(c.kO8.Modes.SUCCESS);
            } catch (e) {
                S(c.kO8.Modes.ERROR);
            }
            setTimeout(() => {
                S(c.kO8.Modes.DEFAULT);
            }, P);
        },
        z = () => {
            let e;
            if (null == t) return null;
            switch (T) {
                case c.kO8.Modes.SUCCESS:
                    e = x.intl.string(x.t.XVvPjY);
                    break;
                case c.kO8.Modes.ERROR:
                    e = x.intl.string(x.t.i4GM3N);
                    break;
                default:
                    e = x.intl.string(x.t.OpuAlJ);
            }
            return (0, i.jsxs)('div', {
                className: w.giftCodeSection,
                children: [
                    (0, i.jsx)(c.vwX, { children: x.intl.string(x.t['/dG4ND']) }),
                    null != t &&
                        (0, i.jsx)(c.kO8, {
                            hideMessage: M ? x.intl.string(x.t['0RLn4+']) : null,
                            value: (0, N.Nz)(t),
                            mode: T,
                            text: e,
                            onCopy: (e) => K(e, t),
                            supportsCopy: A.wS,
                            className: w.__invalid_copyInput,
                            buttonColor: c.Ttl.LINK,
                            buttonLook: c.iLD.LINK
                        }),
                    (0, i.jsx)('div', {
                        className: w.subtext,
                        children: x.intl.string(x.t.QWKUpq)
                    })
                ]
            });
        },
        q = () => {
            let e = (0, N.MY)(h, G),
                { removeGiftRecipientUI: n } = m.m.getCurrentConfig(
                    { location: 'GiftPurchaseConfirmation' },
                    {
                        autoTrackExposure: !1,
                        disable: __BILLING_STANDALONE__ || e !== N.xr.CUSTOM_STYLE
                    }
                ),
                r = !n && null == v;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: w.blurb,
                        children: Y()
                    }),
                    r &&
                        (0, i.jsx)(k, {
                            giftCode: t,
                            onClose: d
                        }),
                    (0, i.jsx)('div', { className: w.divider }),
                    z()
                ]
            });
        },
        Q = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.Z, {
                        user: h,
                        className: w.giftRecipient,
                        size: c.EFr.SIZE_80
                    }),
                    (0, i.jsx)(c.X6q, {
                        className: w.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: R.ZP.getName(h)
                    }),
                    (0, i.jsxs)('div', {
                        className: w.giftRecipientTag,
                        children: [' ', R.ZP.getUserTag(h)]
                    }),
                    (0, i.jsx)('div', {
                        className: w.giftSentMessage,
                        children: Y()
                    })
                ]
            });
    return y
        ? (0, i.jsxs)('div', {
              className: w.confirmation,
              children: [
                  null != n
                      ? (0, i.jsx)(p.Z, {
                            game: n,
                            className: w.__invalid_icon,
                            size: p.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, i.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS })
              ]
          })
        : (0, i.jsxs)('div', {
              className: s()(w.confirmation, { [w.seasonalConfirmationPadding]: j }),
              children: [
                  null != n
                      ? (0, i.jsx)(p.Z, {
                            game: n,
                            className: w.__invalid_icon,
                            size: p.Z.Sizes.LARGE,
                            skuId: H()
                        })
                      : null,
                  (0, i.jsx)(c.X6q, {
                      variant: 'heading-lg/semibold',
                      className: s()({
                          [w.header]: null == l && !G,
                          [w.headerCustomGifting]: null != l && !G
                      }),
                      children: W()
                  }),
                  (f && null != h && null == v) || U ? Q() : q()
              ]
          });
}
let k = (e) => {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        f.Z.fetchRelationships(), (0, v.W)();
    }, []);
    let [a, s] = r.useState(),
        [o, p] = r.useState(!1),
        [m, g] = r.useState(!1),
        { userAffinities: E, isLoading: I } = (0, u.cj)([y.Z], () => ({
            userAffinities: y.Z.getUserAffinitiesUserIds(),
            isLoading: y.Z.getFetching()
        })),
        b = Array.from(E.values()),
        A = (0, u.e7)([T.Z], () => T.Z.getFriendIDs()),
        N = l().difference(A, b),
        C = [...b, ...N],
        O = (0, u.e7)([S.default], () => S.default.filter((e) => C.includes(e.id) && !e.bot), [C]);
    if (null == O || 0 === O.length) return null;
    let D = l().sortBy(O, (e) => C.indexOf(e.id));
    return (0, i.jsxs)('div', {
        className: w.giftRecipientSection,
        children: [
            (0, i.jsx)(c.vwX, { children: x.intl.string(x.t.MJw05e) }),
            (0, i.jsxs)('div', {
                className: w.giftRecipient,
                children: [
                    (0, i.jsx)(c.VcW, {
                        placeholder: x.intl.string(x.t.J019jY),
                        wrapperClassName: w.giftRecipientInputWrapper,
                        className: o ? w.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, i.jsx)(_.Z, {
                                      user: e.value,
                                      size: c.EFr.SIZE_20
                                  }),
                        renderLeading: () => (I ? (0, i.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            s(e), p(!1);
                        },
                        options: D.map((e) => ({
                            value: e,
                            label: ''.concat(R.ZP.getUserTag(e))
                        }))
                    }),
                    (0, i.jsx)(c.zxk, {
                        disabled: null == a,
                        submitting: m,
                        className: w.sendToRecipientButton,
                        onClick: () => {
                            g(!0),
                                (0, h.YD)(a, t)
                                    .then(() => {
                                        n(), (0, d.Ou)();
                                    })
                                    .catch(() => {
                                        p(!0), g(!1);
                                    });
                        },
                        children: x.intl.string(x.t['+EgwQk'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: o ? w.subtextError : w.subtext,
                children: o ? x.intl.string(x.t.jo5Vbm) : x.intl.string(x.t['8/N3v7'])
            })
        ]
    });
};
