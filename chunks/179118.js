n.d(t, { Z: () => U }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(668339),
    d = n(159691),
    f = n(755721),
    p = n(481060),
    _ = n(37234),
    m = n(194359),
    h = n(700582),
    g = n(223143),
    E = n(925329),
    b = n(479446),
    y = n(347896),
    O = n(717401),
    v = n(93127),
    S = n(752048),
    I = n(590783),
    T = n(699516),
    C = n(246946),
    A = n(594174),
    N = n(572004),
    P = n(669079),
    R = n(74538),
    w = n(51144),
    D = n(987209),
    x = n(981631),
    L = n(474936),
    j = n(388032),
    M = n(527866);
let k = 1500;
function U(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: s,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: d,
            giftRecipient: _,
            giftMessageError: m,
            isSendingMessage: b,
        } = e,
        [v, S] = i.useState(p.kO8.Modes.DEFAULT),
        T = (0, c.e7)([C.Z], () => C.Z.enabled),
        A = d || (null != l && null != _),
        U = (null == a ? void 0 : a.productLine) === x.POd.COLLECTIBLES,
        Z = (0, y.Z)(),
        { selectedGiftingPromotionReward: F } = (0, D.wD)(),
        B = null == Z ? void 0 : Z.giftPurchaseConfirmation,
        V = (0, g.QJ)(null == F ? void 0 : F.skuId),
        H = (0, O.a5)(s) && null != V && null != B,
        Y = () => (null != s ? s.skuId : null != a ? a.id : null),
        W = () => {
            let e;
            return null != m
                ? j.intl.string(j.t.qB8aya)
                : null == s
                  ? null
                  : ((e =
                        s.interval === L.rV.MONTH
                            ? A
                                ? H
                                    ? B.monthGiftText
                                    : j.t["4ZJ+7Z"]
                                : j.t["P+z55d"]
                            : A
                              ? H
                                  ? B.yearGiftText
                                  : j.t.p0pZXP
                              : j.t.bXqk3o),
                    j.intl.format(e, {
                        skuName: (0, R.MF)(s.id),
                        intervalCount: s.intervalCount,
                    }));
        },
        K = () =>
            null != _ || (d && null == m)
                ? j.intl.string(j.t.zOmK9N)
                : null != m
                  ? j.intl.string(j.t.d1lrmU)
                  : j.intl.string(j.t["/s1xR7"]),
        z = (e, t) => {
            null != a &&
                (0, P.dM)(
                    new I.Z({
                        code: t,
                        maxUses: 1,
                    }),
                    a,
                ),
                (0, N.JG)(
                    e,
                    () => S(p.kO8.Modes.SUCCESS),
                    () => S(p.kO8.Modes.ERROR),
                ),
                setTimeout(() => {
                    S(p.kO8.Modes.DEFAULT);
                }, k);
        },
        q = () => {
            let e;
            if (null == t) return null;
            switch (v) {
                case p.kO8.Modes.SUCCESS:
                    e = j.intl.string(j.t.XVvPjU);
                    break;
                case p.kO8.Modes.ERROR:
                    e = j.intl.string(j.t.i4GM3L);
                    break;
                default:
                    e = j.intl.string(j.t.OpuAlK);
            }
            return (0, r.jsxs)("div", {
                className: M.giftCodeSection,
                children: [
                    null != t &&
                        (0, r.jsx)(p.gNt, {
                            label: j.intl.string(j.t["/dG4NA"]),
                            children: (0, r.jsx)(p.kO8, {
                                hideMessage: T ? j.intl.string(j.t["0RLn47"]) : null,
                                value: (0, P.Nz)(t),
                                mode: v,
                                text: e,
                                onCopy: (e) => z(e, t),
                                supportsCopy: N.wS,
                                className: M.__invalid_copyInput,
                                buttonColor: f.Tt.LINK,
                                buttonLook: f.iL.LINK,
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: M.subtext,
                        children: j.intl.string(j.t.QWKUpn),
                    }),
                ],
            });
        },
        Q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: M.blurb,
                        children: W(),
                    }),
                    null == m &&
                        (0, r.jsx)(G, {
                            giftCode: t,
                            onClose: u,
                        }),
                    (0, r.jsx)("div", { className: M.divider }),
                    q(),
                ],
            }),
        X = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: M.giftRecipientContainer,
                        children: [
                            (0, r.jsx)(h.Z, {
                                user: _,
                                size: p.EFr.SIZE_40,
                            }),
                            (0, r.jsxs)("div", {
                                className: M.giftRecipientTextContainer,
                                children: [
                                    (0, r.jsx)(p.Heading, {
                                        variant: "heading-md/semibold",
                                        children: w.ZP.getName(_),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: M.giftRecipientTag,
                                        children: [" ", w.ZP.getUserTag(_)],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: M.giftSentMessage,
                        children: W(),
                    }),
                ],
            });
    return b
        ? (0, r.jsxs)("div", {
              className: M.confirmation,
              children: [
                  null != n
                      ? (0, r.jsx)(E.Z, {
                            game: n,
                            className: M.__invalid_icon,
                            size: E.A.LARGE,
                            skuId: Y(),
                        })
                      : null,
                  (0, r.jsx)(p.$jN, { type: p.RAz.PULSING_ELLIPSIS }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: o()(M.confirmation, { [M.seasonalConfirmationPadding]: H }),
              children: [
                  null != n
                      ? (0, r.jsx)(E.Z, {
                            game: n,
                            className: M.__invalid_icon,
                            size: E.A.LARGE,
                            skuId: Y(),
                        })
                      : null,
                  (0, r.jsx)(p.Heading, {
                      variant: "heading-lg/semibold",
                      className: o()({
                          [M.header]: null == l && !U,
                          [M.headerCustomGifting]: null != l && !U,
                      }),
                      children: K(),
                  }),
                  (d && null != _ && null == m) || A ? X() : Q(),
              ],
          });
}
let G = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        m.Z.fetchRelationships(), (0, v._)();
    }, []);
    let [a, o] = i.useState(),
        [s, f] = i.useState(!1),
        [g, E] = i.useState(!1),
        { userAffinities: y, isLoading: O } = (0, c.cj)([S.Z], () => ({
            userAffinities: S.Z.getUserAffinitiesMap(),
            isLoading: S.Z.isFetching(),
        })),
        I = Array.from(y.keys()).sort((e, t) => S.Z.compare(e, t)),
        C = (0, c.e7)([T.Z], () => T.Z.getFriendIDs()),
        N = l().difference(C, I),
        P = [...I, ...N],
        R = (0, c.e7)([A.default], () => A.default.filter((e) => P.includes(e.id) && !e.bot), [P]);
    if (null == R || 0 === R.length) return null;
    let D = l().sortBy(R, (e) => P.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: M.giftRecipientSection,
        children: [
            (0, r.jsxs)("div", {
                className: M.giftRecipient,
                children: [
                    (0, r.jsx)(u.d, {
                        label: j.intl.string(j.t.MJw05f),
                        placeholder: j.intl.string(j.t.J019jZ),
                        wrapperClassName: M.giftRecipientInputWrapper,
                        className: s ? M.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, r.jsx)(h.Z, {
                                      user: e.value,
                                      size: p.EFr.SIZE_20,
                                  }),
                        renderLeading: () => (O ? (0, r.jsx)(p.$jN, { type: p.RAz.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            o(e), f(!1);
                        },
                        options: D.map((e) => ({
                            value: e,
                            label: "".concat(w.ZP.getUserTag(e)),
                        })),
                    }),
                    (0, r.jsx)("div", {
                        className: M.giftRecipientButton,
                        children: (0, r.jsx)(d.zxk, {
                            disabled: null == a,
                            loading: g,
                            onClick: () => {
                                E(!0),
                                    (0, b.YD)(a, t)
                                        .then(() => {
                                            n(), (0, _.Ou)();
                                        })
                                        .catch(() => {
                                            f(!0), E(!1);
                                        });
                            },
                            text: j.intl.string(j.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s ? M.subtextError : M.subtext,
                children: s ? j.intl.string(j.t.jo5Vbl) : j.intl.string(j.t["8/N3v3"]),
            }),
        ],
    });
};
