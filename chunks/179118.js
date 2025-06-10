n.d(t, { Z: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(37234),
    f = n(194359),
    _ = n(700582),
    p = n(925329),
    h = n(479446),
    m = n(717401),
    g = n(286961),
    E = n(93127),
    b = n(814443),
    y = n(590783),
    O = n(699516),
    v = n(246946),
    I = n(594174),
    S = n(572004),
    T = n(669079),
    A = n(74538),
    N = n(51144),
    C = n(987209),
    R = n(981631),
    P = n(474936),
    w = n(388032),
    D = n(136266);
let L = 1500;
function x(e) {
    let { giftCode: t, application: n, sku: a, subscriptionPlan: s, selectedGiftStyle: l, onClose: d, hasSentMessage: f, giftRecipient: h, giftMessageError: E, isSendingMessage: b } = e,
        [O, I] = i.useState(u.kO8.Modes.DEFAULT),
        x = (0, c.e7)([v.Z], () => v.Z.enabled),
        M = f || (null != l && null != h),
        j = (null == a ? void 0 : a.productLine) === R.POd.COLLECTIBLES,
        U = (0, g.Z)(),
        { selectedGiftingPromotionReward: G } = (0, C.wD)(),
        B = null == U ? void 0 : U.giftPurchaseConfirmation,
        F = (0, m.tK)(null == G ? void 0 : G.skuId),
        V = (0, m.a5)(s) && null != F && null != B,
        Z = () => (null != s ? s.skuId : null != a ? a.id : null),
        H = () => {
            let e;
            return null != E
                ? w.intl.string(w.t.qB8ayc)
                : null == s
                  ? null
                  : ((e = s.interval === P.rV.MONTH ? (M ? (V ? B.monthGiftText : w.t['4ZJ+7e']) : w.t['P+z55e']) : M ? (V ? B.yearGiftText : w.t.p0pZXF) : w.t.bXqk3t),
                    w.intl.format(e, {
                        skuName: (0, A.aq)(s.id),
                        intervalCount: s.intervalCount
                    }));
        },
        Y = () => (null != h || (f && null == E) ? w.intl.string(w.t.zOmK9P) : null != E ? w.intl.string(w.t.d1lrmZ) : w.intl.string(w.t['/s1xR0'])),
        W = (e, t) => {
            null != a &&
                (0, T.dM)(
                    new y.Z({
                        code: t,
                        maxUses: 1
                    }),
                    a
                ),
                (0, S.JG)(
                    e,
                    () => I(u.kO8.Modes.SUCCESS),
                    () => I(u.kO8.Modes.ERROR)
                ),
                setTimeout(() => {
                    I(u.kO8.Modes.DEFAULT);
                }, L);
        },
        K = () => {
            let e;
            if (null == t) return null;
            switch (O) {
                case u.kO8.Modes.SUCCESS:
                    e = w.intl.string(w.t.XVvPjY);
                    break;
                case u.kO8.Modes.ERROR:
                    e = w.intl.string(w.t.i4GM3N);
                    break;
                default:
                    e = w.intl.string(w.t.OpuAlJ);
            }
            return (0, r.jsxs)('div', {
                className: D.giftCodeSection,
                children: [
                    (0, r.jsx)(u.vwX, { children: w.intl.string(w.t['/dG4ND']) }),
                    null != t &&
                        (0, r.jsx)(u.kO8, {
                            hideMessage: x ? w.intl.string(w.t['0RLn4+']) : null,
                            value: (0, T.Nz)(t),
                            mode: O,
                            text: e,
                            onCopy: (e) => W(e, t),
                            supportsCopy: S.wS,
                            className: D.__invalid_copyInput,
                            buttonColor: u.Ttl.LINK,
                            buttonLook: u.iLD.LINK
                        }),
                    (0, r.jsx)('div', {
                        className: D.subtext,
                        children: w.intl.string(w.t.QWKUpq)
                    })
                ]
            });
        },
        z = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: D.blurb,
                        children: H()
                    }),
                    null == E &&
                        (0, r.jsx)(k, {
                            giftCode: t,
                            onClose: d
                        }),
                    (0, r.jsx)('div', { className: D.divider }),
                    K()
                ]
            }),
        q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(_.Z, {
                        user: h,
                        className: D.giftRecipient,
                        size: u.EFr.SIZE_80
                    }),
                    (0, r.jsx)(u.X6q, {
                        className: D.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: N.ZP.getName(h)
                    }),
                    (0, r.jsxs)('div', {
                        className: D.giftRecipientTag,
                        children: [' ', N.ZP.getUserTag(h)]
                    }),
                    (0, r.jsx)('div', {
                        className: D.giftSentMessage,
                        children: H()
                    })
                ]
            });
    return b
        ? (0, r.jsxs)('div', {
              className: D.confirmation,
              children: [
                  null != n
                      ? (0, r.jsx)(p.Z, {
                            game: n,
                            className: D.__invalid_icon,
                            size: p.Z.Sizes.LARGE,
                            skuId: Z()
                        })
                      : null,
                  (0, r.jsx)(u.$jN, { type: u.RAz.PULSING_ELLIPSIS })
              ]
          })
        : (0, r.jsxs)('div', {
              className: o()(D.confirmation, { [D.seasonalConfirmationPadding]: V }),
              children: [
                  null != n
                      ? (0, r.jsx)(p.Z, {
                            game: n,
                            className: D.__invalid_icon,
                            size: p.Z.Sizes.LARGE,
                            skuId: Z()
                        })
                      : null,
                  (0, r.jsx)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: o()({
                          [D.header]: null == l && !j,
                          [D.headerCustomGifting]: null != l && !j
                      }),
                      children: Y()
                  }),
                  (f && null != h && null == E) || M ? q() : z()
              ]
          });
}
let k = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        f.Z.fetchRelationships(), (0, E.W)();
    }, []);
    let [a, o] = i.useState(),
        [s, p] = i.useState(!1),
        [m, g] = i.useState(!1),
        { userAffinities: y, isLoading: v } = (0, c.cj)([b.Z], () => ({
            userAffinities: b.Z.getUserAffinitiesUserIds(),
            isLoading: b.Z.getFetching()
        })),
        S = Array.from(y.values()),
        T = (0, c.e7)([O.Z], () => O.Z.getFriendIDs()),
        A = l().difference(T, S),
        C = [...S, ...A],
        R = (0, c.e7)([I.default], () => I.default.filter((e) => C.includes(e.id) && !e.bot), [C]);
    if (null == R || 0 === R.length) return null;
    let P = l().sortBy(R, (e) => C.indexOf(e.id));
    return (0, r.jsxs)('div', {
        className: D.giftRecipientSection,
        children: [
            (0, r.jsx)(u.vwX, { children: w.intl.string(w.t.MJw05e) }),
            (0, r.jsxs)('div', {
                className: D.giftRecipient,
                children: [
                    (0, r.jsx)(u.VcW, {
                        placeholder: w.intl.string(w.t.J019jY),
                        wrapperClassName: D.giftRecipientInputWrapper,
                        className: s ? D.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, r.jsx)(_.Z, {
                                      user: e.value,
                                      size: u.EFr.SIZE_20
                                  }),
                        renderLeading: () => (v ? (0, r.jsx)(u.$jN, { type: u.RAz.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            o(e), p(!1);
                        },
                        options: P.map((e) => ({
                            value: e,
                            label: ''.concat(N.ZP.getUserTag(e))
                        }))
                    }),
                    (0, r.jsx)(u.zxk, {
                        disabled: null == a,
                        submitting: m,
                        className: D.sendToRecipientButton,
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
                        children: w.intl.string(w.t['+EgwQk'])
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: s ? D.subtextError : D.subtext,
                children: s ? w.intl.string(w.t.jo5Vbm) : w.intl.string(w.t['8/N3v7'])
            })
        ]
    });
};
