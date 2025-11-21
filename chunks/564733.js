n.d(t, { default: () => Q }), n(388685), n(704826), n(35282);
var r = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(921254),
    i = n(442837),
    c = n(692547),
    d = n(780384),
    u = n(755721),
    p = n(481060),
    m = n(484614),
    f = n(211266),
    g = n(110924),
    h = n(448986),
    C = n(410030),
    y = n(607070),
    w = n(475271),
    b = n(530618),
    j = n(63954),
    v = n(454585),
    x = n(246946),
    O = n(572004),
    S = n(302221),
    A = n(617136),
    _ = n(313481),
    T = n(616022),
    N = n(49436),
    I = n(509212),
    R = n(685138),
    E = n(804127),
    D = n(455357),
    Z = n(602667),
    k = n(644646),
    P = n(324805),
    L = n(675654),
    M = n(388032),
    q = n(516457);
function B(e) {
    var t;
    let { quest: n, rewardCode: a, hasTieredRewardCodes: o, sourceQuestContent: l } = e,
        i = (0, d.wj)((0, C.ZP)()),
        u = (0, R.n)({
            location: P.dr.REWARD_CODE_MODAL,
            questConfig: n.config,
        }).enabled,
        m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(),
        f = u ? m : n.config.colors.primary,
        g = {
            border: "1px solid ".concat(f),
            background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                    (0, S.aD)(f, 0.2),
                    " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat((0, S.aD)(f, 0.6), " 44%,\n      transparent 76%\n    ),\n    ")
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
        },
        h = (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null || null != a,
        { header: y, subHeader: w } = (function (e) {
            var t, n, r, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: l } = e,
                i = (null == (t = o.userStatus) ? void 0 : t.claimedAt) != null || null != s,
                c = l ? "" : M.intl.string(M.t.UUKbik),
                d = l
                    ? (0, I.o9)({
                          quest: o,
                          idx:
                              null != (r = null == s ? void 0 : s.tier)
                                  ? r
                                  : null == (n = o.userStatus)
                                    ? void 0
                                    : n.claimedTier,
                      })
                    : null,
                u = (0, I.w8)(o.config),
                p = null != d && null != (a = d.messages.name) ? a : u,
                m = l ? M.intl.string(M.t.cfY4PE) : u;
            return {
                subHeader: i ? M.intl.string(M.t.YpswQo) : c,
                header: i ? p : m,
            };
        })({
            quest: n,
            rewardCode: a,
            hasTieredRewardCodes: o,
        }),
        { hasError: b, isLoading: j } = (0, D.kC)();
    return (0, r.jsxs)("div", {
        style: g,
        className: q.rewardTile,
        children: [
            (0, r.jsxs)("div", {
                className: q.rewardTileWrapper,
                style: { "--custom-reward-tile-border-color": u ? m : n.config.colors.primary },
                children: [
                    j &&
                        !b &&
                        (0, r.jsx)(p.$jN, {
                            className: q.rewardTileAssetStatusIcon,
                            type: p.RAz.SPINNING_CIRCLE,
                        }),
                    b && (0, r.jsx)(p.fFY, { className: q.rewardTileAssetStatusIcon }),
                    (0, r.jsx)(k.Z, {
                        className: s()(q.rewardTileAsset, { [q.rewardTileAssetLoading]: j || b }),
                        quest: n,
                        questContent: N.jn.QUEST_BAR_V2,
                        location: P.dr.REWARD_CODE_MODAL,
                        sourceQuestContent: l,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: q.rewardSubheading,
                children: [
                    h &&
                        (0, r.jsx)(p.kmB, {
                            size: "xs",
                            color: c.Z.colors.TEXT_MUTED,
                            className: q.rewardSubheadingIcon,
                        }),
                    (0, r.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: q.rewardSubheadingText,
                        children: w,
                    }),
                ],
            }),
            (0, r.jsx)(p.Heading, {
                variant: "display-sm",
                color: "header-primary",
                className: q.rewardHeading,
                children: y,
            }),
        ],
    });
}
function Q(e) {
    let t = (0, i.e7)([T.Z], () => T.Z.getQuest(e.questId));
    return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t)
        ? (0, r.jsx)(Z.A, {
              questOrQuests: t,
              questContent: N.jn.REWARD_MODAL,
              sourceQuestContent: e.sourceQuestContent,
              children: (n) => {
                  var a, o;
                  return (0, r.jsx)(
                      z,
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
function z(e) {
    var t;
    let {
            transitionState: n,
            onClose: o,
            quest: s,
            questContent: c,
            questContentPosition: d,
            impressionRef: C,
            preview: S,
            sourceQuestContent: R,
        } = e,
        Z = (0, f.Z)(() => {
            var e;
            return (null == (e = s.userStatus) ? void 0 : e.claimedAt) != null;
        }),
        k = s.config.rewardsConfig.platforms,
        Q = k.length > 1,
        [z, H] = a.useState(Q ? null : k[0]),
        U = a.useRef(new l.qA()),
        W = a.useRef(null),
        [F, $] = a.useState(null),
        Y = (0, i.e7)([y.Z], () => y.Z.useReducedMotion),
        G = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation),
        {
            questStoreRewardCode: V,
            isFetchingRewardCode: J,
            isClaimingReward: X,
        } = (0, i.cj)([T.Z], () => ({
            questStoreRewardCode: T.Z.getRewardCode(s.id),
            isFetchingRewardCode: T.Z.isFetchingRewardCode(s.id),
            isClaimingReward: T.Z.isClaimingReward(s.id),
        })),
        K = (0, A.O5)(),
        ee = (0, I.oo)({ quest: s }),
        et = !0 === S ? (0, j.b)(s) : V,
        en = Q && (null == (t = s.userStatus) ? void 0 : t.claimedAt) == null && null == et,
        {
            claimCode: er,
            fetchCode: ea,
            hasError: eo,
            setHasError: es,
        } = (0, E.uL)({
            isClaimingReward: X,
            isFetchingRewardCode: J,
            quest: s,
            questContent: c,
            requiresPlatformSelection: en,
            rewardCode: et,
            selectedPlatformType: z,
            preview: S,
        }),
        el = eo && !X && !J;
    !(function (e) {
        let t = (0, h.Z)(e),
            n = w.default.useIsCaptchaModalOpen(),
            r = (0, g.Z)(n),
            o = !!(!n && r);
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    })(() => {
        es(!0);
    });
    let ei = null;
    Z && null != et
        ? (ei = M.intl.string(M.t.srzsU2))
        : null != et
          ? (ei = M.intl.string(M.t.PJBpda))
          : en && (ei = M.intl.string(M.t.JRU8dq));
    let ec =
            null != ei
                ? (0, r.jsx)(p.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      className: q.heading,
                      children: ei,
                  })
                : null,
        ed = (function (e) {
            let {
                quest: t,
                selectedPlatform: n,
                requiresPlatformSelection: a,
                rewardCode: o,
                hasTieredRewardCodes: s,
            } = e;
            if (a)
                return (0, r.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: q.bodyCopy,
                    children: s
                        ? M.intl.format(M.t.m0btAb, {})
                        : M.intl.format(M.t["ZUA/Ui"], { rewardName: (0, I.w8)(t.config) }),
                });
            let l = (0, I.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: n,
            });
            return null != o && null != l
                ? (0, r.jsx)(p.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      className: q.bodyCopy,
                      children: v.Z.parse(l, !1, { allowLinks: !0 }),
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: z,
            requiresPlatformSelection: en,
            rewardCode: et,
            hasTieredRewardCodes: ee,
        }),
        eu = a.useMemo(
            () =>
                k.map((e) => ({
                    label: (0, I.t2)(e),
                    value: e,
                })),
            [k],
        ),
        ep = null;
    en &&
        (ep = (0, r.jsx)(p.PhF, {
            label: M.intl.string(M.t.vVcTtJ),
            errorMessage: el ? M.intl.string(M.t.rbZBMR) : void 0,
            placeholder: M.intl.string(M.t.EMrUHQ),
            options: eu,
            select: (e) => {
                es(!1), H(e);
            },
            isSelected: (e) => e === z,
            serialize: (e) => (0, I.t2)(e),
            className: el ? q.errorInput : "",
            isDisabled: X,
            renderLeading: (e) =>
                (function (e) {
                    switch (e) {
                        case N.y$.CROSS_PLATFORM:
                            return (0, r.jsx)(p.Che, { className: q.platformSelectionOptionIcon });
                        case N.y$.PC:
                            return (0, r.jsx)(p.pzj, { className: q.platformSelectionOptionIcon });
                        case N.y$.PLAYSTATION:
                            return (0, r.jsx)(p.Tsp, { className: q.platformSelectionOptionIcon });
                        case N.y$.SWITCH:
                            return (0, r.jsx)(p.aPH, { className: q.platformSelectionOptionIcon });
                        case N.y$.XBOX:
                            return (0, r.jsx)(p.Mko, { className: q.platformSelectionOptionIcon });
                    }
                })(e.value),
        }));
    let em = null == et && (J || X),
        ef = em && !en ? (0, r.jsx)(p.$jN, {}) : null,
        eg = null;
    null != et
        ? (eg = (0, r.jsx)(p.gNt, {
              label: M.intl.string(M.t.srzsU2),
              children: (0, r.jsx)(m.Z, {
                  value: G ? M.intl.string(M.t["0n2u0k"]) : et.code,
                  delay: 1000,
                  buttonColor: u.zx.Colors.BRAND,
                  onCopy: () => {
                      G && (0, O.JG)(et.code),
                          K({
                              questId: s.id,
                              questContent: c,
                              questContentPosition: d,
                              questContentCTA: A.jZ.COPY_REWARD_CODE,
                              sourceQuestContent: R,
                          });
                  },
              }),
          }))
        : el &&
          !en &&
          (eg = (0, r.jsx)(p.oil, {
              label: M.intl.string(M.t.srzsU2),
              disabled: !0,
              error: M.intl.string(M.t.rbZBMR),
          }));
    let eh = a.useMemo(
            () =>
                ee
                    ? (0, I.o9)({
                          quest: s,
                          idx: null == et ? void 0 : et.tier,
                      })
                    : (0, I.o9)({
                          quest: s,
                          idx: 0,
                      }),
            [ee, s, null == et ? void 0 : et.tier],
        ),
        eC = a.useMemo(
            () =>
                (null == eh ? void 0 : eh.redemptionLink) == null || "" === eh.redemptionLink
                    ? null
                    : (null == et ? void 0 : et.code) == null || "" === et.code
                      ? eh.redemptionLink
                      : eh.redemptionLink.replace(P.Dp, encodeURIComponent(et.code)),
            [eh, et],
        ),
        ey = (0, E.G$)({
            claimCode: er,
            fetchCode: ea,
            hasError: el,
            onDismiss: o,
            quest: s,
            questContent: c,
            questContentPosition: d,
            requiresPlatformSelection: en,
            selectedPlatformType: z,
            redemptionLink: eC,
            sourceQuestContent: R,
        }),
        ew = en && X,
        eb = !ew && ((en && null == z) || em),
        ej = null != eC && "" !== eC,
        ev = M.intl.string(M.t["23SS+z"]);
    en
        ? (ev = M.intl.string(M.t.SLZMi1))
        : !en && el
          ? (ev = M.intl.string(M.t.gNJHHp))
          : ej && (ev = M.intl.string(M.t["+zx47d"]));
    let ex = !Y && null != et && !Z && !el,
        eO = null != ef && ee,
        eS = (0, _.Gd)(s.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.O_, {
                ref: $,
                className: q.confettiCanvas,
                environment: U.current,
            }),
            (0, r.jsx)("div", {
                ref: (e) => {
                    (W.current = e), (C.current = e);
                },
                children: (0, r.jsxs)(p.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: n,
                    size: p.CgR.DYNAMIC,
                    parentComponent: "QuestsRewardCodeModal",
                    children: [
                        (0, r.jsxs)("div", {
                            className: q.modalBody,
                            children: [
                                (0, r.jsx)(p.olH, {
                                    "data-migration-pending": !0,
                                    className: q.closeButton,
                                    onClick: () => o(),
                                }),
                                !eO &&
                                    (0, r.jsx)(D.x8, {
                                        source: P.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, r.jsx)(B, {
                                            quest: s,
                                            rewardCode: et,
                                            hasTieredRewardCodes: ee,
                                            sourceQuestContent: R,
                                        }),
                                    }),
                                (0, r.jsxs)("div", {
                                    className: q.modalContent,
                                    children: [
                                        ec,
                                        ed,
                                        ep,
                                        ef,
                                        eg,
                                        null != s.config.cosponsorMetadata &&
                                            null != eS &&
                                            (0, r.jsxs)("div", {
                                                className: q.cosponsorFooter,
                                                children: [
                                                    (0, r.jsx)("img", {
                                                        className: q.cosponsorLogotype,
                                                        alt: s.config.cosponsorMetadata.name,
                                                        src: eS.url,
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        className: q.cosponsorName,
                                                        children: M.intl.format(M.t.CSf4EX, {
                                                            cosponsorName: s.config.cosponsorMetadata.name,
                                                        }),
                                                    }),
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-md/normal",
                                                        color: "text-default",
                                                        className: q.cosponsorRedemptionInstructions,
                                                        children: v.Z.parse(
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
                        (0, r.jsx)(p.mzw, {
                            "data-migration-pending": !0,
                            children: (0, r.jsx)(p.Button, {
                                variant: "primary",
                                text: ev,
                                onClick: ey,
                                loading: ew,
                                disabled: eb,
                            }),
                        }),
                    ],
                }),
            }),
            ex &&
                (0, r.jsx)(b.Z, {
                    confettiTarget: W.current,
                    confettiCanvas: F,
                    sprites: L.CA,
                    colors: L.Br,
                }),
        ],
    });
}
