i.d(t, { Z: () => U }), i(953529);
var n = i(951288),
    a = i(647438),
    l = i(286379),
    o = i(692547),
    s = i(481060),
    r = i(442837),
    c = i(797614),
    d = i(706454),
    u = i(626135),
    f = i(331692),
    m = i(531441),
    p = i(236289),
    h = i(788080),
    g = i(451284),
    y = i(613734),
    x = i(846488),
    b = i(384725),
    v = i(97568),
    _ = i(800530),
    j = i(981631),
    E = i(388032),
    O = i(586449);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
let P = (e) => {
        let { classificationTypeText: t, guildMetadata: i } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, n.jsx)("strong", { children: e }, t),
                };
                return null == i
                    ? E.intl.format(E.t.HpvELi, e)
                    : (null == i ? void 0 : i.member_type) === m.wO.OWNER
                      ? E.intl.format(E.t.X1ngSU, C(A({}, e), { guildName: null == i ? void 0 : i.name }))
                      : E.intl.format(E.t.rmpEPD, C(A({}, e), { guildName: null == i ? void 0 : i.name }));
            }, [t, i]);
        return (0, n.jsx)("div", {
            className: O.classificationHeader,
            children: (0, n.jsx)(s.X6q, {
                variant: "heading-xl/normal",
                children: l,
            }),
        });
    },
    w = (e) => {
        let { actions: t, classificationExpiration: i } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == i
            ? null
            : (0, n.jsxs)("div", {
                  className: O.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(s.Text, {
                          variant: "eyebrow",
                          color: "text-muted",
                          children: E.intl.string(E.t.O2nYk5),
                      }),
                      (0, n.jsxs)("ul", {
                          className: O.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, n.jsx)(T, { action: e }, e.id)),
                              null != i
                                  ? (0, n.jsx)(
                                        "li",
                                        {
                                            className: O.classificationActionsTakenRow,
                                            children: (0, n.jsx)(s.Text, {
                                                tag: "span",
                                                variant: "heading-md/normal",
                                                color: "text-default",
                                                children: E.intl.format(E.t.TByIjY, {
                                                    expirationDate: i.toLocaleDateString(a, { dateStyle: "medium" }),
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
    T = (e) => {
        let { action: t } = e;
        return (0, n.jsx)(n.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, n.jsx)(
                    "li",
                    {
                        className: O.classificationActionsTakenRow,
                        children: (0, n.jsx)(s.Text, {
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
    S = (e) => {
        let { classificationTypeText: t, policyExplainerLink: i } = e;
        return (0, n.jsxs)(s.eee, {
            href: i,
            className: O.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)("div", {
                    className: O.classificationPolicyCardIcon,
                    children: (0, n.jsx)(s.b7C, {
                        size: "md",
                        color: o.Z.colors.FOCUS_PRIMARY,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: O.classificationPolicyDescriptionContainer,
                    children: (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: E.intl.format(E.t.zxUdpq, { classificationDescription: t }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: O.classificationPolicyLinkIcon,
                    children: (0, n.jsx)(s.Fbu, {
                        size: "md",
                        color: o.Z.colors.INTERACTIVE_NORMAL,
                    }),
                }),
            ],
        });
    },
    k = () =>
        (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: E.intl.string(E.t["I2H0/P"]),
        }),
    N = (e) =>
        (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: E.intl.format(E.t.IFxUaW, {
                letUsKnowHook: (t, i) =>
                    (0, n.jsx)(
                        s.eee,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t,
                        },
                        i,
                    ),
            }),
        }),
    L = (e) =>
        (0, n.jsx)("div", {
            className: O.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(k, {})
                : (0, n.jsx)(N, {
                      appealLink: _.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible,
                  }),
        }),
    I = (e) => {
        let {
            tosLink: t,
            communityGuidelinesLink: i,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: o,
        } = e;
        return (0, n.jsxs)("div", {
            className: O.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: E.intl.string(E.t["977ien"]),
                }),
                (0, n.jsx)(s.Text, {
                    className: O.guidelinesExplanation,
                    variant: "text-sm/normal",
                    children: E.intl.format(E.t["1Z/+aG"], {
                        tosLink: t,
                        communityGuidelinesLink: i,
                    }),
                }),
                (0, n.jsx)(S, {
                    classificationTypeText: a,
                    policyExplainerLink: l,
                }),
                o,
            ],
        });
    },
    U = (e) => {
        var t;
        let { classificationId: i, source: o, onError: s, onClose: d } = e,
            {
                classification: E,
                classificationRequestState: A,
                isAppealEligible: C,
                isDsaEligible: T,
                violationType: S,
            } = (0, y.YG)(i),
            k = (0, r.e7)([p.Z], () => p.Z.getAppealEligibility()),
            N = (0, g.P)(),
            U = null != E && null != E.flagged_content && E.flagged_content.length > 0,
            D = (0, x.e)(),
            Z = !!(null == E ? void 0 : E.is_coppa) && k.includes(m.tG.AGE_VERIFY_ELIGIBLE),
            M = {
                accountStanding: N,
                classificationId: i,
                hasFlaggedContent: U,
                isDsaEligible: T,
                source: o,
                violationType: S,
            },
            H = a.useRef(M);
        return (a.useEffect(() => {
            H.current = M;
        }),
        a.useEffect(() => {
            let {
                accountStanding: e,
                classificationId: t,
                hasFlaggedContent: i,
                isDsaEligible: n,
                source: a,
                violationType: l,
            } = H.current;
            D &&
                u.default.track(j.rMx.SAFETY_HUB_ACTION, {
                    action: _.n0.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(t)],
                    source: a,
                    is_violative_content_shown: i,
                    is_dsa_eligible: n,
                    violation_type: l,
                });
        }, [D]),
        null == E && A === m.OY.FAILED)
            ? (s(), null)
            : null == E
              ? null
              : (0, n.jsxs)("div", {
                    className: O.classificationContainer,
                    children: [
                        (0, n.jsx)(P, {
                            classificationTypeText: E.description,
                            guildMetadata: null == E ? void 0 : E.guild_metadata,
                        }),
                        (0, n.jsx)(v.s, { flaggedContent: null != (t = E.flagged_content) ? t : [] }),
                        (0, n.jsx)(w, {
                            actions: E.actions,
                            classificationExpiration: (0, h.Pu)(E),
                        }),
                        (0, n.jsx)(I, {
                            classificationTypeText: E.description,
                            tosLink: _.sQ.TOS_LINK,
                            communityGuidelinesLink: _.sQ.COMMUNITY_GUIDELINES,
                            policyExplainerLink: E.explainer_link,
                            appealComponent: (0, n.jsx)(L, {
                                hasBeenAppealed: null != E.appeal_status,
                                onLetUsKnowClick: () => {
                                    u.default.track(j.rMx.SAFETY_HUB_ACTION, {
                                        action: _.n0.ClickLetUsKnow,
                                        account_standing: N.state,
                                        classification_ids: [Number(i)],
                                        source: o,
                                        is_violative_content_shown: U,
                                        is_dsa_eligible: T,
                                        violation_type: S,
                                    }),
                                        Z
                                            ? f.Z.open(i, d)
                                            : C && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), b.Z.open(i));
                                },
                                isAppealEligible: C || Z,
                            }),
                        }),
                    ],
                });
    };
