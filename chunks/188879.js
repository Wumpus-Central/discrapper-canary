t.d(i, { Z: () => Z });
var n = t(200651),
    a = t(192379),
    l = t(286379),
    s = t(692547),
    o = t(481060),
    r = t(442837),
    c = t(797614),
    d = t(706454),
    u = t(626135),
    m = t(115262),
    h = t(331692),
    p = t(531441),
    x = t(236289),
    f = t(788080),
    g = t(451284),
    v = t(613734),
    _ = t(846488),
    j = t(384725),
    E = t(97568),
    C = t(800530),
    N = t(981631),
    y = t(388032),
    A = t(729779);
let T = (e) => {
        let { classificationTypeText: i, guildMetadata: t } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: i,
                    classificationHook: (e, i) => (0, n.jsx)('strong', { children: e }, i)
                };
                return null == t
                    ? y.intl.format(y.t.HpvELi, e)
                    : (null == t ? void 0 : t.member_type) === p.wO.OWNER
                      ? y.intl.format(y.t.X1ngSU, {
                            ...e,
                            guildName: null == t ? void 0 : t.name
                        })
                      : y.intl.format(y.t.rmpEPD, {
                            ...e,
                            guildName: null == t ? void 0 : t.name
                        });
            }, [i, t]);
        return (0, n.jsx)('div', {
            className: A.classificationHeader,
            children: (0, n.jsx)(o.X6q, {
                variant: 'heading-xl/normal',
                children: l
            })
        });
    },
    w = (e) => {
        let { actions: i, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === i.filter((e) => e.descriptions.length > 0).length && null == t
            ? null
            : (0, n.jsxs)('div', {
                  className: A.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: y.intl.string(y.t.O2nYk5)
                      }),
                      (0, n.jsxs)('ul', {
                          className: A.classificationActionsTakenList,
                          children: [
                              i.map((e) => (0, n.jsx)(k, { action: e }, e.id)),
                              null != t
                                  ? (0, n.jsx)(
                                        'li',
                                        {
                                            className: A.classificationActionsTakenRow,
                                            children: (0, n.jsx)(o.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: y.intl.format(y.t.TByIjY, { expirationDate: t.toLocaleDateString(a, { dateStyle: 'medium' }) })
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
    k = (e) => {
        let { action: i } = e;
        return (0, n.jsx)(n.Fragment, {
            children: i.descriptions.map((e, i) =>
                (0, n.jsx)(
                    'li',
                    {
                        className: A.classificationActionsTakenRow,
                        children: (0, n.jsx)(o.Text, {
                            tag: 'span',
                            variant: 'heading-md/normal',
                            color: 'text-normal',
                            children: e
                        })
                    },
                    i
                )
            )
        });
    },
    I = (e) => {
        let { classificationTypeText: i, policyExplainerLink: t } = e;
        return (0, n.jsxs)(o.eee, {
            href: t,
            className: A.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)('div', {
                    className: A.classificationPolicyCardIcon,
                    children: (0, n.jsx)(o.b7C, {
                        size: 'md',
                        color: s.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, n.jsx)('div', {
                    className: A.classificationPolicyDescriptionContainer,
                    children: (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: y.intl.format(y.t.zxUdpq, { classificationDescription: i })
                    })
                }),
                (0, n.jsx)('div', {
                    className: A.classificationPolicyLinkIcon,
                    children: (0, n.jsx)(o.Fbu, {
                        size: 'md',
                        color: s.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    L = () =>
        (0, n.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: y.intl.string(y.t['I2H0/P'])
        }),
    S = (e) =>
        (0, n.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: y.intl.format(y.t.IFxUaW, {
                letUsKnowHook: (i, t) =>
                    (0, n.jsx)(
                        o.eee,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: i
                        },
                        t
                    )
            })
        }),
    b = (e) =>
        (0, n.jsx)('div', {
            className: A.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(L, {})
                : (0, n.jsx)(S, {
                      appealLink: C.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    P = (e) => {
        let { tosLink: i, communityGuidelinesLink: t, classificationTypeText: a, policyExplainerLink: l, appealComponent: s } = e;
        return (0, n.jsxs)('div', {
            className: A.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: y.intl.string(y.t['977ien'])
                }),
                (0, n.jsx)(o.Text, {
                    className: A.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: y.intl.format(y.t['1Z/+aG'], {
                        tosLink: i,
                        communityGuidelinesLink: t
                    })
                }),
                (0, n.jsx)(I, {
                    classificationTypeText: a,
                    policyExplainerLink: l
                }),
                s
            ]
        });
    },
    Z = (e) => {
        var i;
        let { classificationId: t, source: s, onError: o, onClose: d } = e,
            { classification: y, classificationRequestState: k, isAppealEligible: I, isDsaEligible: L, violationType: S } = (0, v.YG)(t),
            Z = (0, r.e7)([x.Z], () => x.Z.getAppealEligibility()),
            U = (0, g.P)(),
            O = null != y && null != y.flagged_content && y.flagged_content.length > 0,
            D = (0, _.e)(),
            M = (0, m.Vc)({ location: 'ConnectedClassificationDetail' }) && !!(null == y ? void 0 : y.is_coppa) && Z.includes(p.tG.AGE_VERIFY_ELIGIBLE),
            Y = {
                accountStanding: U,
                classificationId: t,
                hasFlaggedContent: O,
                isDsaEligible: L,
                source: s,
                violationType: S
            },
            F = a.useRef(Y);
        return (a.useEffect(() => {
            F.current = Y;
        }),
        a.useEffect(() => {
            let { accountStanding: e, classificationId: i, hasFlaggedContent: t, isDsaEligible: n, source: a, violationType: l } = F.current;
            D &&
                u.default.track(N.rMx.SAFETY_HUB_ACTION, {
                    action: C.n0.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(i)],
                    source: a,
                    is_violative_content_shown: t,
                    is_dsa_eligible: n,
                    violation_type: l
                });
        }, [D]),
        null == y && k === p.OY.FAILED)
            ? (o(), null)
            : null == y
              ? null
              : (0, n.jsxs)('div', {
                    className: A.classificationContainer,
                    children: [
                        (0, n.jsx)(T, {
                            classificationTypeText: y.description,
                            guildMetadata: null == y ? void 0 : y.guild_metadata
                        }),
                        (0, n.jsx)(E.s, { flaggedContent: null !== (i = y.flagged_content) && void 0 !== i ? i : [] }),
                        (0, n.jsx)(w, {
                            actions: y.actions,
                            classificationExpiration: (0, f.Pu)(y)
                        }),
                        (0, n.jsx)(P, {
                            classificationTypeText: y.description,
                            tosLink: C.sQ.TOS_LINK,
                            communityGuidelinesLink: C.sQ.COMMUNITY_GUIDELINES,
                            policyExplainerLink: y.explainer_link,
                            appealComponent: (0, n.jsx)(b, {
                                hasBeenAppealed: null != y.appeal_status,
                                onLetUsKnowClick: () => {
                                    u.default.track(N.rMx.SAFETY_HUB_ACTION, {
                                        action: C.n0.ClickLetUsKnow,
                                        account_standing: U.state,
                                        classification_ids: [Number(t)],
                                        source: s,
                                        is_violative_content_shown: O,
                                        is_dsa_eligible: L,
                                        violation_type: S
                                    }),
                                        M ? h.Z.open(d) : I && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), j.Z.open(t));
                                },
                                isAppealEligible: I || M
                            })
                        })
                    ]
                });
    };
