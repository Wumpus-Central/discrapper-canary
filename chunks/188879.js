var n = i(200651),
    a = i(192379),
    l = i(286379),
    o = i(692547),
    s = i(481060),
    r = i(442837),
    c = i(797614),
    d = i(706454),
    u = i(626135),
    m = i(531441),
    h = i(236289),
    p = i(788080),
    x = i(451284),
    f = i(613734),
    g = i(846488),
    v = i(384725),
    _ = i(853178),
    A = i(97568),
    E = i(800530),
    T = i(981631),
    C = i(388032),
    j = i(729779);
let N = (e) => {
        let { classificationTypeText: t, guildMetadata: i } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, n.jsx)('strong', { children: e }, t)
                };
                return null == i
                    ? C.intl.format(C.t.HpvELi, e)
                    : (null == i ? void 0 : i.member_type) === m.wO.OWNER
                      ? C.intl.format(C.t.X1ngSU, {
                            ...e,
                            guildName: null == i ? void 0 : i.name
                        })
                      : C.intl.format(C.t.rmpEPD, {
                            ...e,
                            guildName: null == i ? void 0 : i.name
                        });
            }, [t, i]);
        return (0, n.jsx)('div', {
            className: j.classificationHeader,
            children: (0, n.jsx)(s.Heading, {
                variant: 'heading-xl/normal',
                children: l
            })
        });
    },
    y = (e) => {
        let { actions: t, classificationExpiration: i } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == i
            ? null
            : (0, n.jsxs)('div', {
                  className: j.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(s.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: C.intl.string(C.t.O2nYk5)
                      }),
                      (0, n.jsxs)('ul', {
                          className: j.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, n.jsx)(S, { action: e }, e.id)),
                              null != i
                                  ? (0, n.jsx)(
                                        'li',
                                        {
                                            className: j.classificationActionsTakenRow,
                                            children: (0, n.jsx)(s.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: C.intl.format(C.t.TByIjY, { expirationDate: i.toLocaleDateString(a, { dateStyle: 'medium' }) })
                                            })
                                        },
                                        'expiration'
                                    )
                                  : null
                          ]
                      })
                  ]
              });
    },
    S = (e) => {
        let { action: t } = e;
        return (0, n.jsx)(n.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, n.jsx)(
                    'li',
                    {
                        className: j.classificationActionsTakenRow,
                        children: (0, n.jsx)(s.Text, {
                            tag: 'span',
                            variant: 'heading-md/normal',
                            color: 'text-normal',
                            children: e
                        })
                    },
                    t
                )
            )
        });
    },
    I = (e) => {
        let { classificationTypeText: t, policyExplainerLink: i } = e;
        return (0, n.jsxs)(s.Anchor, {
            href: i,
            className: j.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)('div', {
                    className: j.classificationPolicyCardIcon,
                    children: (0, n.jsx)(s.ShieldIcon, {
                        size: 'md',
                        color: o.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, n.jsx)('div', {
                    className: j.classificationPolicyDescriptionContainer,
                    children: (0, n.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: C.intl.format(C.t.zxUdpq, { classificationDescription: t })
                    })
                }),
                (0, n.jsx)('div', {
                    className: j.classificationPolicyLinkIcon,
                    children: (0, n.jsx)(s.ChevronSmallRightIcon, {
                        size: 'md',
                        color: o.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    L = () =>
        (0, n.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: C.intl.string(C.t['I2H0/P'])
        }),
    w = (e) =>
        (0, n.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: C.intl.format(C.t.IFxUaW, {
                letUsKnowHook: (t, i) =>
                    (0, n.jsx)(
                        s.Anchor,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t
                        },
                        i
                    )
            })
        }),
    P = (e) =>
        (0, n.jsx)('div', {
            className: j.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(L, {})
                : (0, n.jsx)(w, {
                      appealLink: E.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    U = (e) => {
        let { tosLink: t, communityGuidelinesLink: i, classificationTypeText: a, policyExplainerLink: l, appealComponent: o } = e;
        return (0, n.jsxs)('div', {
            className: j.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: C.intl.string(C.t['977ien'])
                }),
                (0, n.jsx)(s.Text, {
                    className: j.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: C.intl.format(C.t['1Z/+aG'], {
                        tosLink: t,
                        communityGuidelinesLink: i
                    })
                }),
                (0, n.jsx)(I, {
                    classificationTypeText: a,
                    policyExplainerLink: l
                }),
                o
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { classificationId: i, source: o, onError: s, onClose: d } = e,
        { classification: C, classificationRequestState: S, isAppealEligible: I, isDsaEligible: L, violationType: w } = (0, f.YG)(i),
        k = (0, r.e7)([h.Z], () => h.Z.getAppealEligibility()),
        Z = (0, x.P)(),
        M = null != C && null != C.flagged_content && C.flagged_content.length > 0,
        O = (0, g.e)(),
        D = !!(null == C ? void 0 : C.is_coppa) && k.includes(m.tG.AGE_VERIFY_ELIGIBLE),
        b = {
            accountStanding: Z,
            classificationId: i,
            hasFlaggedContent: M,
            isDsaEligible: L,
            source: o,
            violationType: w
        },
        R = a.useRef(b);
    return (a.useEffect(() => {
        R.current = b;
    }),
    a.useEffect(() => {
        let { accountStanding: e, classificationId: t, hasFlaggedContent: i, isDsaEligible: n, source: a, violationType: l } = R.current;
        O &&
            u.default.track(T.rMx.SAFETY_HUB_ACTION, {
                action: E.n0.ViewViolationDetail,
                account_standing: e.state,
                classification_ids: [Number(t)],
                source: a,
                is_violative_content_shown: i,
                is_dsa_eligible: n,
                violation_type: l
            });
    }, [O]),
    null == C && S === m.OY.FAILED)
        ? (s(), null)
        : null == C
          ? null
          : (0, n.jsxs)('div', {
                className: j.classificationContainer,
                children: [
                    (0, n.jsx)(N, {
                        classificationTypeText: C.description,
                        guildMetadata: null == C ? void 0 : C.guild_metadata
                    }),
                    (0, n.jsx)(A.s, { flaggedContent: null !== (t = C.flagged_content) && void 0 !== t ? t : [] }),
                    (0, n.jsx)(y, {
                        actions: C.actions,
                        classificationExpiration: (0, p.Pu)(C)
                    }),
                    (0, n.jsx)(U, {
                        classificationTypeText: C.description,
                        tosLink: E.sQ.TOS_LINK,
                        communityGuidelinesLink: E.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: C.explainer_link,
                        appealComponent: (0, n.jsx)(P, {
                            hasBeenAppealed: null != C.appeal_status,
                            onLetUsKnowClick: () => {
                                u.default.track(T.rMx.SAFETY_HUB_ACTION, {
                                    action: E.n0.ClickLetUsKnow,
                                    account_standing: Z.state,
                                    classification_ids: [Number(i)],
                                    source: o,
                                    is_violative_content_shown: M,
                                    is_dsa_eligible: L,
                                    violation_type: w
                                }),
                                    D ? _.Z.open(d) : I && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), v.Z.open(i));
                            },
                            isAppealEligible: I || D
                        })
                    })
                ]
            });
};
