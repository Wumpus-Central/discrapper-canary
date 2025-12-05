n.d(t, { default: () => z }), n(388685), n(704826), n(35282);
var r = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(921254),
    i = n(442837),
    c = n(692547),
    d = n(199849),
    u = n(780384),
    p = n(755721),
    m = n(481060),
    f = n(484614),
    g = n(211266),
    h = n(110924),
    C = n(448986),
    w = n(410030),
    y = n(607070),
    b = n(475271),
    j = n(530618),
    v = n(63954),
    x = n(454585),
    O = n(246946),
    S = n(572004),
    A = n(302221),
    T = n(617136),
    _ = n(616022),
    N = n(49436),
    I = n(373370),
    R = n(968843),
    E = n(804127),
    Z = n(115179),
    k = n(455357),
    P = n(602667),
    D = n(644646),
    L = n(324805),
    M = n(675654),
    q = n(388032),
    B = n(516457);
function Q(e) {
    var t;
    let { quest: n, rewardCode: a, hasTieredRewardCodes: o, sourceQuestContent: l } = e,
        i = (0, u.wj)((0, w.ZP)()),
        d = (0, m.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        p = {
            border: "1px solid ".concat(d),
            background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                    (0, A.aD)(d, 0.2),
                    " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat((0, A.aD)(d, 0.6), " 44%,\n      transparent 76%\n    ),\n    ")
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
        },
        f = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null || null != a,
        { header: g, subHeader: h } = (function (e) {
            var t, n, r, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: l } = e,
                i = (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                c = l ? "" : q.intl.string(q.t.UUKbik),
                d = l
                    ? (0, Z.o9)({
                          quest: o,
                          idx:
                              null != (r = null == s ? void 0 : s.tier)
                                  ? r
                                  : null == (n = o.userStatus)
                                    ? void 0
                                    : n.claimedTier,
                      })
                    : null,
                u = (0, Z.w8)(o.config),
                p = null != d && null != (a = d.messages.name) ? a : u,
                m = l ? q.intl.string(q.t.cfY4PE) : u;
            return {
                subHeader: i ? q.intl.string(q.t.YpswQo) : c,
                header: i ? p : m,
            };
        })({
            quest: n,
            rewardCode: a,
            hasTieredRewardCodes: o,
        }),
        { hasError: C, isLoading: y } = (0, k.kC)();
    return (0, r.jsxs)("div", {
        style: p,
        className: B.rewardTile,
        children: [
            (0, r.jsxs)("div", {
                className: B.rewardTileWrapper,
                style: { "--custom-reward-tile-border-color": d },
                children: [
                    y &&
                        !C &&
                        (0, r.jsx)(m.$jN, {
                            className: B.rewardTileAssetStatusIcon,
                            type: m.RAz.SPINNING_CIRCLE,
                        }),
                    C && (0, r.jsx)(m.fFY, { className: B.rewardTileAssetStatusIcon }),
                    (0, r.jsx)(D.Z, {
                        className: s()(B.rewardTileAsset, { [B.rewardTileAssetLoading]: y || C }),
                        quest: n,
                        questContent: N.jn.QUEST_BAR_V2,
                        location: L.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: l,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: B.rewardSubheading,
                children: [
                    f &&
                        (0, r.jsx)(m.kmB, {
                            size: "xs",
                            color: c.Z.colors.TEXT_MUTED,
                            className: B.rewardSubheadingIcon,
                        }),
                    (0, r.jsx)(m.Text, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: B.rewardSubheadingText,
                        children: h,
                    }),
                ],
            }),
            (0, r.jsx)(m.Heading, {
                variant: "display-sm",
                color: "header-primary",
                className: B.rewardHeading,
                children: g,
            }),
        ],
    });
}
function z(e) {
    let t = (0, i.e7)([_.Z], () => _.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, r.jsx)(P.A, {
              questOrQuests: t,
              questContent: N.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (n) => {
                  var a, o;
                  return (0, r.jsx)(
                      H,
                      ((a = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (o = o =
                          {
                              impressionRef: n,
                              quest: t,
                              preview: e.preview,
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(o)).forEach(function (e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                            }),
                      a),
                  );
              },
          })
        : null;
}
function H(e) {
    var t;
    let {
            transitionState: n,
            onClose: o,
            quest: s,
            questContent: c,
            questContentPosition: u,
            impressionRef: w,
            preview: A,
            sourceQuestContent: P,
        } = e,
        D = (0, g.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        z = s.config.rewardsConfig.platforms,
        H = z.length > 1,
        [U, W] = a.useState(H ? null : z[0]),
        $ = a.useRef(new l.qA()),
        F = a.useRef(null),
        [Y, G] = a.useState(null),
        V = (0, i.e7)([y.Z], () => y.Z.useReducedMotion),
        J = (0, i.e7)([O.Z], () => O.Z.hidePersonalInformation),
        {
            questStoreRewardCode: X,
            isFetchingRewardCode: K,
            isClaimingReward: ee,
        } = (0, i.cj)([_.Z], () => ({
            questStoreRewardCode: _.Z.getRewardCode(s.id),
            isFetchingRewardCode: _.Z.isFetchingRewardCode(s.id),
            isClaimingReward: _.Z.isClaimingReward(s.id),
        })),
        et = (0, T.O5)(),
        en = (0, Z.oo)({ quest: s }),
        er = !0 === A ? (0, v.b)(s) : X,
        ea = H && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == er,
        {
            claimCode: eo,
            fetchCode: es,
            hasError: el,
            setHasError: ei,
        } = (0, E.uL)({
            isClaimingReward: ee,
            isFetchingRewardCode: K,
            quest: s,
            questContent: c,
            requiresPlatformSelection: ea,
            rewardCode: er,
            selectedPlatformType: U,
            preview: A,
        }),
        ec = el && !ee && !K;
    !(function (e) {
        let t = (0, C.Z)(e),
            n = b.default.useIsCaptchaModalOpen(),
            r = (0, h.Z)(n),
            o = !!(!n && r);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        ei(!0);
    });
    let ed = null;
    D && null != er
        ? (ed = q.intl.string(q.t.srzsU2))
        : null != er
          ? (ed = q.intl.string(q.t.PJBpda))
          : ea && (ed = q.intl.string(q.t.JRU8dq));
    let eu =
            null != ed
                ? (0, r.jsx)(m.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: B.heading,
                      children: ed,
                  })
                : null,
        ep = (function (e) {
            let {
                quest: t,
                selectedPlatform: n,
                requiresPlatformSelection: a,
                rewardCode: o,
                hasTieredRewardCodes: s,
            } = e;
            if (a)
                return (0, r.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: B.bodyCopy,
                    children: s
                        ? q.intl.format(q.t.m0btAb, {})
                        : q.intl.format(q.t["ZUA/Ui"], { rewardName: (0, Z.w8)(t.config) }),
                });
            let l = (0, I.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: n,
            });
            return null != o && null != l
                ? (0, r.jsx)(m.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: B.bodyCopy,
                      children: x.Z.parse(l, !1, { allowLinks: !0 }),
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: U,
            requiresPlatformSelection: ea,
            rewardCode: er,
            hasTieredRewardCodes: en,
        }),
        em = a.useMemo(
            () =>
                z.map((e) => ({
                    label: (0, Z.t2)(e),
                    value: e,
                })),
            [z],
        ),
        ef = null;
    ea &&
        (ef = (0, r.jsx)(d.B6, {
            label: q.intl.string(q.t.vVcTtJ),
            errorMessage: ec ? q.intl.string(q.t.rbZBMR) : void 0,
            placeholder: q.intl.string(q.t.EMrUHQ),
            options: em,
            select: (e) => {
                ei(!1), W(e);
            },
            isSelected: (e) => e === U,
            serialize: (e) => (0, Z.t2)(e),
            className: ec ? B.errorInput : "",
            isDisabled: ee,
            renderLeading: (e) =>
                (function (e) {
                    switch (e) {
                        case N.y$.CROSS_PLATFORM:
                            return (0, r.jsx)(m.Che, { className: B.platformSelectionOptionIcon });
                        case N.y$.PC:
                            return (0, r.jsx)(m.pzj, { className: B.platformSelectionOptionIcon });
                        case N.y$.PLAYSTATION:
                            return (0, r.jsx)(m.Tsp, { className: B.platformSelectionOptionIcon });
                        case N.y$.SWITCH:
                            return (0, r.jsx)(m.aPH, { className: B.platformSelectionOptionIcon });
                        case N.y$.XBOX:
                            return (0, r.jsx)(m.Mko, { className: B.platformSelectionOptionIcon });
                    }
                })(e.value),
        }));
    let eg = null == er && (K || ee),
        eh = eg && !ea ? (0, r.jsx)(m.$jN, {}) : null,
        eC = null;
    null != er
        ? (eC = (0, r.jsx)(m.gNt, {
              label: q.intl.string(q.t.srzsU2),
              children: (0, r.jsx)(f.Z, {
                  value: J ? q.intl.string(q.t["0n2u0k"]) : er.code,
                  delay: 1000,
                  buttonColor: p.zx.Colors.BRAND,
                  onCopy: () => {
                      J && (0, S.JG)(er.code),
                          et({
                              questId: s.id,
                              questContent: c,
                              questContentPosition: u,
                              questContentCTA: T.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: P,
                          });
                  },
              }),
          }))
        : ec &&
          !ea &&
          (eC = (0, r.jsx)(m.oil, {
              label: q.intl.string(q.t.srzsU2),
              disabled: !0,
              error: q.intl.string(q.t.rbZBMR),
          }));
    let ew = a.useMemo(
            () =>
                en
                    ? (0, Z.o9)({
                          quest: s,
                          idx: null == er ? void 0 : er.tier,
                      })
                    : (0, Z.o9)({
                          quest: s,
                          idx: 0,
                      }),
            [en, s, null == er ? void 0 : er.tier],
        ),
        ey = a.useMemo(
            () =>
                (null == ew ? void 0 : ew.redemptionLink) == null || "" === ew.redemptionLink
                    ? null
                    : (null == er ? void 0 : er.code) == null || "" === er.code
                      ? ew.redemptionLink
                      : ew.redemptionLink.replace(L.Dp, encodeURIComponent(er.code)),
            [ew, er],
        ),
        eb = (0, E.G$)({
            claimCode: eo,
            fetchCode: es,
            hasError: ec,
            onDismiss: o,
            quest: s,
            questContent: c,
            questContentPosition: u,
            requiresPlatformSelection: ea,
            selectedPlatformType: U,
            redemptionLink: ey,
            sourceQuestContent: P,
        }),
        ej = ea && ee,
        ev = !ej && ((ea && null == U) || eg),
        ex = null != ey && "" !== ey,
        eO = q.intl.string(q.t["23SS+z"]);
    ea
        ? (eO = q.intl.string(q.t.SLZMi1))
        : !ea && ec
          ? (eO = q.intl.string(q.t.gNJHHp))
          : ex && (eO = q.intl.string(q.t["+zx47d"]));
    let eS = !V && null != er && !D && !ec,
        eA = null != eh && en,
        eT = (0, R.Gd)(s.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.O_, {
                ref: G,
                className: B.confettiCanvas,
                environment: $.current,
            }),
            (0, r.jsx)("div", {
                ref: (e) => {
                    (F.current = e), (w.current = e);
                },
                children: (0, r.jsxs)(m.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: n,
                    size: m.CgR.DYNAMIC,
                    parentComponent: "QuestsRewardCodeModal",
                    children: [
                        (0, r.jsxs)("div", {
                            className: B.modalBody,
                            children: [
                                (0, r.jsx)(m.olH, {
                                    "data-migration-pending": !0,
                                    className: B.closeButton,
                                    onClick: () => o(),
                                }),
                                !eA &&
                                    (0, r.jsx)(k.x8, {
                                        source: L.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, r.jsx)(Q, {
                                            quest: s,
                                            rewardCode: er,
                                            hasTieredRewardCodes: en,
                                            sourceQuestContent: P,
                                        }),
                                    }),
                                (0, r.jsxs)("div", {
                                    className: B.modalContent,
                                    children: [
                                        eu,
                                        ep,
                                        ef,
                                        eh,
                                        eC,
                                        null != s.config.cosponsorMetadata &&
                                            null != eT &&
                                            (0, r.jsxs)("div", {
                                                className: B.cosponsorFooter,
                                                children: [
                                                    (0, r.jsx)("img", {
                                                        className: B.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: eT.url,
                                                    }),
                                                    (0, r.jsx)(m.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        className: B.cosponsorName,
                                                        children: q.intl.format(q.t.CSf4EX, {
                                                            cosponsorName: s.config.cosponsorMetadata.name,
                                                        }),
                                                    }),
                                                    (0, r.jsx)(m.Text, {
                                                        variant: "text-md/normal",
                                                        color: "text-default",
                                                        className: B.cosponsorRedemptionInstructions,
                                                        children: x.Z.parse(
                                                            s.config.cosponsorMetadata.redemptionInstructions,
                                                            !1,
                                                            { allowLinks: !0 },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.mzw, {
                            "data-migration-pending": !0,
                            children: (0, r.jsx)(m.Button, {
                                variant: "primary",
                                text: eO,
                                onClick: eb,
                                loading: ej,
                                disabled: ev,
                            }),
                        }),
                    ],
                }),
            }),
            eS &&
                (0, r.jsx)(j.Z, {
                    confettiTarget: F.current,
                    confettiCanvas: Y,
                    sprites: M.CA,
                    colors: M.Br,
                }),
        ],
    });
}
