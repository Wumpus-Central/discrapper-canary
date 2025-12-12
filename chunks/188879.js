n.d(t, { Z: () => Z }), n(953529);
var i = n(54381),
    a = n(473749),
    o = n(120356),
    l = n.n(o),
    s = n(286379),
    r = n(692547),
    c = n(481060),
    d = n(442837),
    u = n(797614),
    p = n(706454),
    m = n(626135),
    f = n(331692),
    h = n(531441),
    g = n(236289),
    y = n(788080),
    _ = n(451284),
    E = n(613734),
    b = n(846488),
    v = n(384725),
    x = n(97568),
    j = n(800530),
    O = n(981631),
    A = n(388032),
    P = n(586449);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = (e) => {
        let { classificationTypeText: t, guildMetadata: n } = e,
            o = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, i.jsx)("strong", { children: e }, t),
                };
                return null == n
                    ? A.intl.format(A.t.HpvELh, e)
                    : (null == n ? void 0 : n.member_type) === h.wO.OWNER
                      ? A.intl.format(A.t.X1ngSd, T(C({}, e), { guildName: null == n ? void 0 : n.name }))
                      : A.intl.format(A.t.rmpEPD, T(C({}, e), { guildName: null == n ? void 0 : n.name }));
            }, [t, n]);
        return (0, i.jsx)(c.Heading, {
            variant: "heading-xl/normal",
            children: o,
        });
    },
    S = (e) => {
        let { actions: t, classificationExpiration: n } = e,
            a = (0, d.e7)([p.default], () => p.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == n
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(c.Text, {
                          variant: "eyebrow",
                          color: "text-muted",
                          children: A.intl.string(A.t["O2nYk+"]),
                      }),
                      (0, i.jsxs)("ul", {
                          className: P.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, i.jsx)(L, { action: e }, e.id)),
                              null != n
                                  ? (0, i.jsx)(
                                        "li",
                                        {
                                            className: P.classificationActionsTakenRow,
                                            children: (0, i.jsx)(c.Text, {
                                                tag: "span",
                                                variant: "heading-md/normal",
                                                color: "text-default",
                                                children: A.intl.format(A.t.TByIjT, {
                                                    expirationDate: n.toLocaleDateString(a, { dateStyle: "medium" }),
                                                }),
                                            }),
                                        },
                                        "expiration",
                                    )
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    L = (e) => {
        let { action: t } = e;
        return (0, i.jsx)(i.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, i.jsx)(
                    "li",
                    {
                        className: P.classificationActionsTakenRow,
                        children: (0, i.jsx)(c.Text, {
                            tag: "span",
                            variant: "heading-md/normal",
                            color: "text-default",
                            children: e,
                        }),
                    },
                    t,
                ),
            ),
        });
    },
    N = (e) => {
        let { classificationTypeText: t, policyExplainerLink: n } = e;
        return (0, i.jsxs)(c.Anchor, {
            href: n,
            className: P.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, i.jsx)("div", {
                    className: P.classificationPolicyCardIcon,
                    children: (0, i.jsx)(c.b7C, {
                        size: "md",
                        color: r.Z.colors.BORDER_FOCUS,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: P.classificationPolicyDescriptionContainer,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: A.intl.format(A.t.zxUdpj, { classificationDescription: t }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: P.classificationPolicyLinkIcon,
                    children: (0, i.jsx)(c.Fbu, {
                        size: "md",
                        color: r.Z.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                }),
            ],
        });
    },
    I = () =>
        (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: A.intl.string(A.t["I2H0/E"]),
        }),
    k = (e) =>
        (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: A.intl.format(A.t.IFxUaT, {
                letUsKnowHook: (t, n) =>
                    (0, i.jsx)(
                        c.Anchor,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t,
                        },
                        n,
                    ),
            }),
        }),
    U = (e) =>
        (0, i.jsx)("div", {
            className: P.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, i.jsx)(I, {})
                : (0, i.jsx)(k, {
                      appealLink: j.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible,
                  }),
        }),
    D = (e) => {
        let {
            tosLink: t,
            communityGuidelinesLink: n,
            classificationTypeText: a,
            policyExplainerLink: o,
            appealComponent: l,
        } = e;
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(c.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: A.intl.string(A.t["977iei"]),
                }),
                (0, i.jsx)(c.Text, {
                    className: P.guidelinesExplanation,
                    variant: "text-sm/normal",
                    children: A.intl.format(A.t["1Z/+aA"], {
                        tosLink: t,
                        communityGuidelinesLink: n,
                    }),
                }),
                (0, i.jsx)(N, {
                    classificationTypeText: a,
                    policyExplainerLink: o,
                }),
                l,
            ],
        });
    },
    Z = (e) => {
        var t;
        let { classificationId: n, source: o, onError: r, onClose: c } = e,
            {
                classification: p,
                classificationRequestState: A,
                isAppealEligible: C,
                isDsaEligible: T,
                violationType: L,
            } = (0, E.YG)(n),
            N = (0, d.e7)([g.Z], () => g.Z.getAppealEligibility()),
            I = (0, _.P)(),
            k = null != p && null != p.flagged_content && p.flagged_content.length > 0,
            Z = (0, b.e)(),
            M = !!(null == p ? void 0 : p.is_coppa) && N.includes(h.tG.AGE_VERIFY_ELIGIBLE),
            R = !!(null == p ? void 0 : p.is_coppa) && N.includes(h.tG.AGE_VERIFY_GLOBAL_ELIGIBLE),
            F = {
                accountStanding: I,
                classificationId: n,
                hasFlaggedContent: k,
                isDsaEligible: T,
                source: o,
                violationType: L,
            },
            H = a.useRef(F);
        return (a.useEffect(() => {
            H.current = F;
        }),
        a.useEffect(() => {
            let {
                accountStanding: e,
                classificationId: t,
                hasFlaggedContent: n,
                isDsaEligible: i,
                source: a,
                violationType: o,
            } = H.current;
            Z &&
                m.default.track(O.rMx.SAFETY_HUB_ACTION, {
                    action: j.n0.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(t)],
                    source: a,
                    is_violative_content_shown: n,
                    is_dsa_eligible: i,
                    violation_type: o,
                });
        }, [Z]),
        null == p && A === h.OY.FAILED)
            ? (r(), null)
            : null == p
              ? null
              : (0, i.jsxs)("div", {
                    className: P.classificationContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: P.section,
                            children: (0, i.jsx)(w, {
                                classificationTypeText: p.description,
                                guildMetadata: null == p ? void 0 : p.guild_metadata,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: l()(P.body, P.section),
                            children: [
                                (0, i.jsx)(x.s, { flaggedContent: null != (t = p.flagged_content) ? t : [] }),
                                (0, i.jsx)(S, {
                                    actions: p.actions,
                                    classificationExpiration: (0, y.Pu)(p),
                                }),
                                (0, i.jsx)(D, {
                                    classificationTypeText: p.description,
                                    tosLink: j.sQ.TOS_LINK,
                                    communityGuidelinesLink: j.sQ.COMMUNITY_GUIDELINES,
                                    policyExplainerLink: p.explainer_link,
                                    appealComponent: (0, i.jsx)(U, {
                                        hasBeenAppealed: null != p.appeal_status,
                                        onLetUsKnowClick: () => {
                                            m.default.track(O.rMx.SAFETY_HUB_ACTION, {
                                                action: j.n0.ClickLetUsKnow,
                                                account_standing: I.state,
                                                classification_ids: [Number(n)],
                                                source: o,
                                                is_violative_content_shown: k,
                                                is_dsa_eligible: T,
                                                violation_type: L,
                                            }),
                                                R
                                                    ? f.Z.openV2(n, c)
                                                    : M
                                                      ? f.Z.open(n, c)
                                                      : C &&
                                                        (u.Z.increment({ name: s.V.APPEAL_INGESTION_VIEW }),
                                                        v.Z.open(n));
                                        },
                                        isAppealEligible: C || M,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
    };
