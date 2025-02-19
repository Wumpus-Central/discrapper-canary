n.d(t, { Z: () => Z }), n(266796);
var i = n(200651),
    a = n(192379),
    l = n(286379),
    r = n(692547),
    o = n(481060),
    s = n(442837),
    c = n(797614),
    d = n(706454),
    u = n(626135),
    m = n(331692),
    p = n(531441),
    f = n(236289),
    h = n(788080),
    g = n(451284),
    y = n(613734),
    v = n(846488),
    x = n(384725),
    j = n(97568),
    b = n(800530),
    O = n(981631),
    w = n(388032),
    E = n(286381);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function P(e, t) {
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
let _ = (e) => {
        let { classificationTypeText: t, guildMetadata: n } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, i.jsx)('strong', { children: e }, t)
                };
                return null == n ? w.NW.format(w.t.HpvELi, e) : (null == n ? void 0 : n.member_type) === p.wO.OWNER ? w.NW.format(w.t.X1ngSU, P(N({}, e), { guildName: null == n ? void 0 : n.name })) : w.NW.format(w.t.rmpEPD, P(N({}, e), { guildName: null == n ? void 0 : n.name }));
            }, [t, n]);
        return (0, i.jsx)('div', {
            className: E.classificationHeader,
            children: (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/normal',
                children: l
            })
        });
    },
    C = (e) => {
        let { actions: t, classificationExpiration: n } = e,
            a = (0, s.e7)([d.default], () => d.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: E.classificationActionsTakenContainer,
                  children: [
                      (0, i.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: w.NW.string(w.t.O2nYk5)
                      }),
                      (0, i.jsxs)('ul', {
                          className: E.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, i.jsx)(A, { action: e }, e.id)),
                              null != n
                                  ? (0, i.jsx)(
                                        'li',
                                        {
                                            className: E.classificationActionsTakenRow,
                                            children: (0, i.jsx)(o.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: w.NW.format(w.t.TByIjY, { expirationDate: n.toLocaleDateString(a, { dateStyle: 'medium' }) })
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
    A = (e) => {
        let { action: t } = e;
        return (0, i.jsx)(i.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, i.jsx)(
                    'li',
                    {
                        className: E.classificationActionsTakenRow,
                        children: (0, i.jsx)(o.Text, {
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
    S = (e) => {
        let { classificationTypeText: t, policyExplainerLink: n } = e;
        return (0, i.jsxs)(o.eee, {
            href: n,
            className: E.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, i.jsx)('div', {
                    className: E.classificationPolicyCardIcon,
                    children: (0, i.jsx)(o.b7C, {
                        size: 'md',
                        color: r.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, i.jsx)('div', {
                    className: E.classificationPolicyDescriptionContainer,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: w.NW.format(w.t.zxUdpq, { classificationDescription: t })
                    })
                }),
                (0, i.jsx)('div', {
                    className: E.classificationPolicyLinkIcon,
                    children: (0, i.jsx)(o.Fbu, {
                        size: 'md',
                        color: r.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    T = () =>
        (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: w.NW.string(w.t['I2H0/P'])
        }),
    k = (e) =>
        (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: w.NW.format(w.t.IFxUaW, {
                letUsKnowHook: (t, n) =>
                    (0, i.jsx)(
                        o.eee,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t
                        },
                        n
                    )
            })
        }),
    I = (e) =>
        (0, i.jsx)('div', {
            className: E.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, i.jsx)(T, {})
                : (0, i.jsx)(k, {
                      appealLink: b.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    L = (e) => {
        let { tosLink: t, communityGuidelinesLink: n, classificationTypeText: a, policyExplainerLink: l, appealComponent: r } = e;
        return (0, i.jsxs)('div', {
            className: E.classificationActionExplanationContainer,
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: w.NW.string(w.t['977ien'])
                }),
                (0, i.jsx)(o.Text, {
                    className: E.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: w.NW.format(w.t['1Z/+aG'], {
                        tosLink: t,
                        communityGuidelinesLink: n
                    })
                }),
                (0, i.jsx)(S, {
                    classificationTypeText: a,
                    policyExplainerLink: l
                }),
                r
            ]
        });
    },
    Z = (e) => {
        var t;
        let { classificationId: n, source: r, onError: o, onClose: d } = e,
            { classification: w, classificationRequestState: N, isAppealEligible: P, isDsaEligible: A, violationType: S } = (0, y.YG)(n),
            T = (0, s.e7)([f.Z], () => f.Z.getAppealEligibility()),
            k = (0, g.P)(),
            Z = null != w && null != w.flagged_content && w.flagged_content.length > 0,
            D = (0, v.e)(),
            U = !!(null == w ? void 0 : w.is_coppa) && T.includes(p.tG.AGE_VERIFY_ELIGIBLE),
            M = {
                accountStanding: k,
                classificationId: n,
                hasFlaggedContent: Z,
                isDsaEligible: A,
                source: r,
                violationType: S
            },
            Y = a.useRef(M);
        return (a.useEffect(() => {
            Y.current = M;
        }),
        a.useEffect(() => {
            let { accountStanding: e, classificationId: t, hasFlaggedContent: n, isDsaEligible: i, source: a, violationType: l } = Y.current;
            D &&
                u.default.track(O.rMx.SAFETY_HUB_ACTION, {
                    action: b.n0.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(t)],
                    source: a,
                    is_violative_content_shown: n,
                    is_dsa_eligible: i,
                    violation_type: l
                });
        }, [D]),
        null == w && N === p.OY.FAILED)
            ? (o(), null)
            : null == w
              ? null
              : (0, i.jsxs)('div', {
                    className: E.classificationContainer,
                    children: [
                        (0, i.jsx)(_, {
                            classificationTypeText: w.description,
                            guildMetadata: null == w ? void 0 : w.guild_metadata
                        }),
                        (0, i.jsx)(j.s, { flaggedContent: null !== (t = w.flagged_content) && void 0 !== t ? t : [] }),
                        (0, i.jsx)(C, {
                            actions: w.actions,
                            classificationExpiration: (0, h.Pu)(w)
                        }),
                        (0, i.jsx)(L, {
                            classificationTypeText: w.description,
                            tosLink: b.sQ.TOS_LINK,
                            communityGuidelinesLink: b.sQ.COMMUNITY_GUIDELINES,
                            policyExplainerLink: w.explainer_link,
                            appealComponent: (0, i.jsx)(I, {
                                hasBeenAppealed: null != w.appeal_status,
                                onLetUsKnowClick: () => {
                                    u.default.track(O.rMx.SAFETY_HUB_ACTION, {
                                        action: b.n0.ClickLetUsKnow,
                                        account_standing: k.state,
                                        classification_ids: [Number(n)],
                                        source: r,
                                        is_violative_content_shown: Z,
                                        is_dsa_eligible: A,
                                        violation_type: S
                                    }),
                                        U ? m.Z.open(d) : P && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), x.Z.open(n));
                                },
                                isAppealEligible: P || U
                            })
                        })
                    ]
                });
    };
