var i = t(200651),
    a = t(192379),
    l = t(286379),
    o = t(692547),
    s = t(481060),
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
    E = t(384725),
    C = t(97568),
    j = t(800530),
    y = t(981631),
    A = t(388032),
    N = t(729779);
let T = (e) => {
        let { classificationTypeText: n, guildMetadata: t } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: n,
                    classificationHook: (e, n) => (0, i.jsx)('strong', { children: e }, n)
                };
                return null == t
                    ? A.intl.format(A.t.HpvELi, e)
                    : (null == t ? void 0 : t.member_type) === p.wO.OWNER
                      ? A.intl.format(A.t.X1ngSU, {
                            ...e,
                            guildName: null == t ? void 0 : t.name
                        })
                      : A.intl.format(A.t.rmpEPD, {
                            ...e,
                            guildName: null == t ? void 0 : t.name
                        });
            }, [n, t]);
        return (0, i.jsx)('div', {
            className: N.classificationHeader,
            children: (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/normal',
                children: l
            })
        });
    },
    I = (e) => {
        let { actions: n, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === n.filter((e) => e.descriptions.length > 0).length && null == t
            ? null
            : (0, i.jsxs)('div', {
                  className: N.classificationActionsTakenContainer,
                  children: [
                      (0, i.jsx)(s.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: A.intl.string(A.t.O2nYk5)
                      }),
                      (0, i.jsxs)('ul', {
                          className: N.classificationActionsTakenList,
                          children: [
                              n.map((e) => (0, i.jsx)(w, { action: e }, e.id)),
                              null != t
                                  ? (0, i.jsx)(
                                        'li',
                                        {
                                            className: N.classificationActionsTakenRow,
                                            children: (0, i.jsx)(s.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: A.intl.format(A.t.TByIjY, { expirationDate: t.toLocaleDateString(a, { dateStyle: 'medium' }) })
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
    w = (e) => {
        let { action: n } = e;
        return (0, i.jsx)(i.Fragment, {
            children: n.descriptions.map((e, n) =>
                (0, i.jsx)(
                    'li',
                    {
                        className: N.classificationActionsTakenRow,
                        children: (0, i.jsx)(s.Text, {
                            tag: 'span',
                            variant: 'heading-md/normal',
                            color: 'text-normal',
                            children: e
                        })
                    },
                    n
                )
            )
        });
    },
    L = (e) => {
        let { classificationTypeText: n, policyExplainerLink: t } = e;
        return (0, i.jsxs)(s.Anchor, {
            href: t,
            className: N.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, i.jsx)('div', {
                    className: N.classificationPolicyCardIcon,
                    children: (0, i.jsx)(s.ShieldIcon, {
                        size: 'md',
                        color: o.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, i.jsx)('div', {
                    className: N.classificationPolicyDescriptionContainer,
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: A.intl.format(A.t.zxUdpq, { classificationDescription: n })
                    })
                }),
                (0, i.jsx)('div', {
                    className: N.classificationPolicyLinkIcon,
                    children: (0, i.jsx)(s.ChevronSmallRightIcon, {
                        size: 'md',
                        color: o.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    k = () =>
        (0, i.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: A.intl.string(A.t['I2H0/P'])
        }),
    S = (e) =>
        (0, i.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: A.intl.format(A.t.IFxUaW, {
                letUsKnowHook: (n, t) =>
                    (0, i.jsx)(
                        s.Anchor,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: n
                        },
                        t
                    )
            })
        }),
    b = (e) =>
        (0, i.jsx)('div', {
            className: N.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, i.jsx)(k, {})
                : (0, i.jsx)(S, {
                      appealLink: j.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    P = (e) => {
        let { tosLink: n, communityGuidelinesLink: t, classificationTypeText: a, policyExplainerLink: l, appealComponent: o } = e;
        return (0, i.jsxs)('div', {
            className: N.classificationActionExplanationContainer,
            children: [
                (0, i.jsx)(s.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: A.intl.string(A.t['977ien'])
                }),
                (0, i.jsx)(s.Text, {
                    className: N.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: A.intl.format(A.t['1Z/+aG'], {
                        tosLink: n,
                        communityGuidelinesLink: t
                    })
                }),
                (0, i.jsx)(L, {
                    classificationTypeText: a,
                    policyExplainerLink: l
                }),
                o
            ]
        });
    };
n.Z = (e) => {
    var n;
    let { classificationId: t, source: o, onError: s, onClose: d } = e,
        { classification: A, classificationRequestState: w, isAppealEligible: L, isDsaEligible: k, violationType: S } = (0, v.YG)(t),
        Z = (0, r.e7)([x.Z], () => x.Z.getAppealEligibility()),
        U = (0, g.P)(),
        M = null != A && null != A.flagged_content && A.flagged_content.length > 0,
        O = (0, _.e)(),
        D = (0, m.Vc)({ location: 'ConnectedClassificationDetail' }) && !!(null == A ? void 0 : A.is_coppa) && Z.includes(p.tG.AGE_VERIFY_ELIGIBLE),
        R = {
            accountStanding: U,
            classificationId: t,
            hasFlaggedContent: M,
            isDsaEligible: k,
            source: o,
            violationType: S
        },
        Y = a.useRef(R);
    return (a.useEffect(() => {
        Y.current = R;
    }),
    a.useEffect(() => {
        let { accountStanding: e, classificationId: n, hasFlaggedContent: t, isDsaEligible: i, source: a, violationType: l } = Y.current;
        O &&
            u.default.track(y.rMx.SAFETY_HUB_ACTION, {
                action: j.n0.ViewViolationDetail,
                account_standing: e.state,
                classification_ids: [Number(n)],
                source: a,
                is_violative_content_shown: t,
                is_dsa_eligible: i,
                violation_type: l
            });
    }, [O]),
    null == A && w === p.OY.FAILED)
        ? (s(), null)
        : null == A
          ? null
          : (0, i.jsxs)('div', {
                className: N.classificationContainer,
                children: [
                    (0, i.jsx)(T, {
                        classificationTypeText: A.description,
                        guildMetadata: null == A ? void 0 : A.guild_metadata
                    }),
                    (0, i.jsx)(C.s, { flaggedContent: null !== (n = A.flagged_content) && void 0 !== n ? n : [] }),
                    (0, i.jsx)(I, {
                        actions: A.actions,
                        classificationExpiration: (0, f.Pu)(A)
                    }),
                    (0, i.jsx)(P, {
                        classificationTypeText: A.description,
                        tosLink: j.sQ.TOS_LINK,
                        communityGuidelinesLink: j.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: A.explainer_link,
                        appealComponent: (0, i.jsx)(b, {
                            hasBeenAppealed: null != A.appeal_status,
                            onLetUsKnowClick: () => {
                                u.default.track(y.rMx.SAFETY_HUB_ACTION, {
                                    action: j.n0.ClickLetUsKnow,
                                    account_standing: U.state,
                                    classification_ids: [Number(t)],
                                    source: o,
                                    is_violative_content_shown: M,
                                    is_dsa_eligible: k,
                                    violation_type: S
                                }),
                                    D ? h.Z.open(d) : L && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), E.Z.open(t));
                            },
                            isAppealEligible: L || D
                        })
                    })
                ]
            });
};
