t.d(i, {
    Z: function () {
        return O;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    s = t(392711),
    l = t.n(s),
    c = t(442837),
    d = t(481060),
    u = t(37234),
    f = t(194359),
    p = t(700582),
    _ = t(925329),
    b = t(479446),
    m = t(522489),
    g = t(717401),
    x = t(286961),
    h = t(93127),
    v = t(814443),
    C = t(590783),
    I = t(699516),
    S = t(246946),
    k = t(594174),
    y = t(572004),
    T = t(669079),
    B = t(74538),
    j = t(51144),
    P = t(987209),
    E = t(981631),
    N = t(474936),
    w = t(388032),
    A = t(431852);
function O(e) {
    let { giftCode: i, application: t, sku: r, subscriptionPlan: s, selectedGiftStyle: l, onClose: u, hasSentMessage: f, giftRecipient: b, giftMessageError: h, isSendingMessage: v } = e,
        [I, k] = a.useState(d.CopyInput.Modes.DEFAULT),
        O = (0, c.e7)([S.Z], () => S.Z.enabled),
        R = f || (null != l && null != b),
        L = (null == r ? void 0 : r.productLine) === E.POd.COLLECTIBLES,
        M = (0, x.Z)(),
        { selectedGiftingPromotionReward: G } = (0, P.wD)(),
        D = null == M ? void 0 : M.giftPurchaseConfirmation,
        U = (0, g.tK)(null == G ? void 0 : G.skuId),
        H = (0, g.a5)(s) && null != U && null != D,
        W = () => (null != s ? s.skuId : null != r ? r.id : null),
        F = () => {
            let e;
            return null != h
                ? w.intl.string(w.t.qB8ayc)
                : null == s
                  ? null
                  : ((e = s.interval === N.rV.MONTH ? (R ? (H ? D.monthGiftText : w.t['4ZJ+7e']) : w.t['P+z55e']) : R ? (H ? D.yearGiftText : w.t.p0pZXF) : w.t.bXqk3t),
                    w.intl.format(e, {
                        skuName: (0, B.aq)(s.id),
                        intervalCount: s.intervalCount
                    }));
        },
        z = (e, i) => {
            null != r &&
                (0, T.dM)(
                    new C.Z({
                        code: i,
                        maxUses: 1
                    }),
                    r
                );
            try {
                (0, y.JG)(e), k(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
                k(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                k(d.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        q = () => {
            let e;
            if (null == i) return null;
            switch (I) {
                case d.CopyInput.Modes.SUCCESS:
                    e = w.intl.string(w.t.XVvPjY);
                    break;
                case d.CopyInput.Modes.ERROR:
                    e = w.intl.string(w.t.i4GM3N);
                    break;
                default:
                    e = w.intl.string(w.t.OpuAlJ);
            }
            return (0, n.jsxs)('div', {
                className: A.giftCodeSection,
                children: [
                    (0, n.jsx)(d.FormTitle, { children: w.intl.string(w.t['/dG4ND']) }),
                    null != i &&
                        (0, n.jsx)(d.CopyInput, {
                            hideMessage: O ? w.intl.string(w.t['0RLn4+']) : null,
                            value: (0, T.Nz)(i),
                            mode: I,
                            text: e,
                            onCopy: (e) => z(e, i),
                            supportsCopy: y.wS,
                            className: A.__invalid_copyInput,
                            buttonColor: d.ButtonColors.LINK,
                            buttonLook: d.ButtonLooks.LINK
                        }),
                    (0, n.jsx)('div', {
                        className: A.subtext,
                        children: w.intl.string(w.t.QWKUpq)
                    })
                ]
            });
        };
    return v
        ? (0, n.jsxs)('div', {
              className: A.confirmation,
              children: [
                  null != t
                      ? (0, n.jsx)(_.Z, {
                            game: t,
                            className: A.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: W()
                        })
                      : null,
                  (0, n.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, n.jsxs)('div', {
              className: o()(A.confirmation, { [A.seasonalConfirmationPadding]: H }),
              children: [
                  null != t
                      ? (0, n.jsx)(_.Z, {
                            game: t,
                            className: A.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: W()
                        })
                      : null,
                  (0, n.jsx)(d.Heading, {
                      variant: 'heading-lg/semibold',
                      className: o()({
                          [A.header]: null == l && !L,
                          [A.headerCustomGifting]: null != l && !L
                      }),
                      children: null != b || (f && null == h) ? w.intl.string(w.t.zOmK9P) : null != h ? w.intl.string(w.t.d1lrmZ) : w.intl.string(w.t['/s1xR0'])
                  }),
                  (f && null != b && null == h) || R
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.Z, {
                                    user: b,
                                    className: A.giftRecipient,
                                    size: d.AvatarSizes.SIZE_80
                                }),
                                (0, n.jsx)(d.Heading, {
                                    className: A.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: j.ZP.getName(b)
                                }),
                                (0, n.jsxs)('div', {
                                    className: A.giftRecipientTag,
                                    children: [' ', j.ZP.getUserTag(b)]
                                }),
                                (0, n.jsx)('div', {
                                    className: A.giftSentMessage,
                                    children: F()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, T.MY)(b, L),
                                { removeGiftRecipientUI: t } = m.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== T.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)('div', {
                                        className: A.blurb,
                                        children: F()
                                    }),
                                    !t &&
                                        null == h &&
                                        (0, n.jsx)(Z, {
                                            giftCode: i,
                                            onClose: u
                                        }),
                                    (0, n.jsx)('div', { className: A.divider }),
                                    q()
                                ]
                            });
                        })()
              ]
          });
}
let Z = (e) => {
    let { giftCode: i, onClose: t } = e;
    a.useEffect(() => {
        f.Z.fetchRelationships(), (0, h.W)();
    }, []);
    let [r, o] = a.useState(),
        [s, _] = a.useState(!1),
        [m, g] = a.useState(!1),
        { userAffinities: x, isLoading: C } = (0, c.cj)([v.Z], () => ({
            userAffinities: v.Z.getUserAffinitiesUserIds(),
            isLoading: v.Z.getFetching()
        })),
        S = Array.from(x.values()),
        y = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()),
        T = l().difference(y, S),
        B = [...S, ...T],
        P = (0, c.e7)([k.default], () => k.default.filter((e) => B.includes(e.id) && !e.bot), [B]);
    if (null == P || 0 === P.length) return null;
    let E = l().sortBy(P, (e) => B.indexOf(e.id));
    return (0, n.jsxs)('div', {
        className: A.giftRecipientSection,
        children: [
            (0, n.jsx)(d.FormTitle, { children: w.intl.string(w.t.MJw05e) }),
            (0, n.jsxs)('div', {
                className: A.giftRecipient,
                children: [
                    (0, n.jsx)(d.SearchableSelect, {
                        placeholder: w.intl.string(w.t.J019jY),
                        wrapperClassName: A.giftRecipientInputWrapper,
                        className: s ? A.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, n.jsx)(p.Z, {
                                      user: e.value,
                                      size: d.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (C ? (0, n.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: r,
                        onChange: (e) => {
                            o(e), _(!1);
                        },
                        options: E.map((e) => ({
                            value: e,
                            label: ''.concat(j.ZP.getUserTag(e))
                        }))
                    }),
                    (0, n.jsx)(d.Button, {
                        disabled: null == r,
                        submitting: m,
                        className: A.sendToRecipientButton,
                        onClick: () => {
                            g(!0),
                                (0, b.YD)(r, i)
                                    .then(() => {
                                        t(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        _(!0), g(!1);
                                    });
                        },
                        children: w.intl.string(w.t['+EgwQk'])
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: s ? A.subtextError : A.subtext,
                children: s ? w.intl.string(w.t.jo5Vbm) : w.intl.string(w.t['8/N3v7'])
            })
        ]
    });
};
