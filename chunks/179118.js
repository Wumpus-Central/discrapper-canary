n.d(t, { Z: () => k }), n(388685), n(642613);
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
    g = n(925329),
    E = n(479446),
    b = n(347896),
    y = n(717401),
    O = n(93127),
    v = n(752048),
    S = n(590783),
    I = n(699516),
    T = n(246946),
    A = n(594174),
    C = n(572004),
    N = n(669079),
    P = n(74538),
    R = n(51144),
    w = n(987209),
    D = n(981631),
    x = n(474936),
    L = n(388032),
    j = n(769212);
let M = 1500;
function k(e) {
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
            isSendingMessage: E,
        } = e,
        [O, v] = i.useState(p.kO8.Modes.DEFAULT),
        I = (0, c.e7)([T.Z], () => T.Z.enabled),
        A = d || (null != l && null != _),
        k = (null == a ? void 0 : a.productLine) === D.POd.COLLECTIBLES,
        G = (0, b.Z)(),
        { selectedGiftingPromotionReward: Z } = (0, w.wD)(),
        B = null == G ? void 0 : G.giftPurchaseConfirmation,
        F = (0, y.tK)(null == Z ? void 0 : Z.skuId),
        V = (0, y.a5)(s) && null != F && null != B,
        H = () => (null != s ? s.skuId : null != a ? a.id : null),
        Y = () => {
            let e;
            return null != m
                ? L.intl.string(L.t.qB8aya)
                : null == s
                  ? null
                  : ((e =
                        s.interval === x.rV.MONTH
                            ? A
                                ? V
                                    ? B.monthGiftText
                                    : L.t["4ZJ+7Z"]
                                : L.t["P+z55d"]
                            : A
                              ? V
                                  ? B.yearGiftText
                                  : L.t.p0pZXP
                              : L.t.bXqk3o),
                    L.intl.format(e, {
                        skuName: (0, P.MF)(s.id),
                        intervalCount: s.intervalCount,
                    }));
        },
        W = () =>
            null != _ || (d && null == m)
                ? L.intl.string(L.t.zOmK9N)
                : null != m
                  ? L.intl.string(L.t.d1lrmU)
                  : L.intl.string(L.t["/s1xR7"]),
        K = (e, t) => {
            null != a &&
                (0, N.dM)(
                    new S.Z({
                        code: t,
                        maxUses: 1,
                    }),
                    a,
                ),
                (0, C.JG)(
                    e,
                    () => v(p.kO8.Modes.SUCCESS),
                    () => v(p.kO8.Modes.ERROR),
                ),
                setTimeout(() => {
                    v(p.kO8.Modes.DEFAULT);
                }, M);
        },
        z = () => {
            let e;
            if (null == t) return null;
            switch (O) {
                case p.kO8.Modes.SUCCESS:
                    e = L.intl.string(L.t.XVvPjU);
                    break;
                case p.kO8.Modes.ERROR:
                    e = L.intl.string(L.t.i4GM3L);
                    break;
                default:
                    e = L.intl.string(L.t.OpuAlK);
            }
            return (0, r.jsxs)("div", {
                className: j.giftCodeSection,
                children: [
                    null != t &&
                        (0, r.jsx)(p.gNt, {
                            label: L.intl.string(L.t["/dG4NA"]),
                            children: (0, r.jsx)(p.kO8, {
                                hideMessage: I ? L.intl.string(L.t["0RLn47"]) : null,
                                value: (0, N.Nz)(t),
                                mode: O,
                                text: e,
                                onCopy: (e) => K(e, t),
                                supportsCopy: C.wS,
                                className: j.__invalid_copyInput,
                                buttonColor: f.Tt.LINK,
                                buttonLook: f.iL.LINK,
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: j.subtext,
                        children: L.intl.string(L.t.QWKUpn),
                    }),
                ],
            });
        },
        q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: j.blurb,
                        children: Y(),
                    }),
                    null == m &&
                        (0, r.jsx)(U, {
                            giftCode: t,
                            onClose: u,
                        }),
                    (0, r.jsx)("div", { className: j.divider }),
                    z(),
                ],
            }),
        Q = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: j.giftRecipientContainer,
                        children: [
                            (0, r.jsx)(h.Z, {
                                user: _,
                                size: p.EFr.SIZE_40,
                            }),
                            (0, r.jsxs)("div", {
                                className: j.giftRecipientTextContainer,
                                children: [
                                    (0, r.jsx)(p.Heading, {
                                        variant: "heading-md/semibold",
                                        children: R.ZP.getName(_),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: j.giftRecipientTag,
                                        children: [" ", R.ZP.getUserTag(_)],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: j.giftSentMessage,
                        children: Y(),
                    }),
                ],
            });
    return E
        ? (0, r.jsxs)("div", {
              className: j.confirmation,
              children: [
                  null != n
                      ? (0, r.jsx)(g.Z, {
                            game: n,
                            className: j.__invalid_icon,
                            size: g.A.LARGE,
                            skuId: H(),
                        })
                      : null,
                  (0, r.jsx)(p.$jN, { type: p.RAz.PULSING_ELLIPSIS }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: o()(j.confirmation, { [j.seasonalConfirmationPadding]: V }),
              children: [
                  null != n
                      ? (0, r.jsx)(g.Z, {
                            game: n,
                            className: j.__invalid_icon,
                            size: g.A.LARGE,
                            skuId: H(),
                        })
                      : null,
                  (0, r.jsx)(p.Heading, {
                      variant: "heading-lg/semibold",
                      className: o()({
                          [j.header]: null == l && !k,
                          [j.headerCustomGifting]: null != l && !k,
                      }),
                      children: W(),
                  }),
                  (d && null != _ && null == m) || A ? Q() : q(),
              ],
          });
}
let U = (e) => {
    let { giftCode: t, onClose: n } = e;
    i.useEffect(() => {
        m.Z.fetchRelationships(), (0, O._)();
    }, []);
    let [a, o] = i.useState(),
        [s, f] = i.useState(!1),
        [g, b] = i.useState(!1),
        { userAffinities: y, isLoading: S } = (0, c.cj)([v.Z], () => ({
            userAffinities: v.Z.getUserAffinitiesMap(),
            isLoading: v.Z.isFetching(),
        })),
        T = Array.from(y.keys()).sort((e, t) => v.Z.compare(e, t)),
        C = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()),
        N = l().difference(C, T),
        P = [...T, ...N],
        w = (0, c.e7)([A.default], () => A.default.filter((e) => P.includes(e.id) && !e.bot), [P]);
    if (null == w || 0 === w.length) return null;
    let D = l().sortBy(w, (e) => P.indexOf(e.id));
    return (0, r.jsxs)("div", {
        className: j.giftRecipientSection,
        children: [
            (0, r.jsxs)("div", {
                className: j.giftRecipient,
                children: [
                    (0, r.jsx)(u.d, {
                        label: L.intl.string(L.t.MJw05f),
                        placeholder: L.intl.string(L.t.J019jZ),
                        wrapperClassName: j.giftRecipientInputWrapper,
                        className: s ? j.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, r.jsx)(h.Z, {
                                      user: e.value,
                                      size: p.EFr.SIZE_20,
                                  }),
                        renderLeading: () => (S ? (0, r.jsx)(p.$jN, { type: p.RAz.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            o(e), f(!1);
                        },
                        options: D.map((e) => ({
                            value: e,
                            label: "".concat(R.ZP.getUserTag(e)),
                        })),
                    }),
                    (0, r.jsx)("div", {
                        className: j.giftRecipientButton,
                        children: (0, r.jsx)(d.zxk, {
                            disabled: null == a,
                            loading: g,
                            onClick: () => {
                                b(!0),
                                    (0, E.YD)(a, t)
                                        .then(() => {
                                            n(), (0, _.Ou)();
                                        })
                                        .catch(() => {
                                            f(!0), b(!1);
                                        });
                            },
                            text: L.intl.string(L.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s ? j.subtextError : j.subtext,
                children: s ? L.intl.string(L.t.jo5Vbl) : L.intl.string(L.t["8/N3v3"]),
            }),
        ],
    });
};
