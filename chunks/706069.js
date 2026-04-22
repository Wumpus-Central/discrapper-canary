i.d(t, { A: () => F });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    o = i(731738),
    r = i(827734),
    d = i(534514),
    c = i(834730),
    m = i(349288),
    h = i(231483),
    u = i(320448),
    p = i(311907),
    A = i(831062),
    E = i(773669),
    _ = i(954571),
    g = i(67521),
    x = i(739010),
    f = i(207913),
    v = i(393033),
    j = i(335891),
    y = i(985481),
    T = i(259960),
    L = i(26095),
    N = i(246505),
    C = i(239093),
    U = i(652215),
    I = i(985018),
    S = i(646704);
let w = (e) => {
        let { classificationTypeText: t, guildMetadata: i } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, n.jsx)("strong", { children: e }, t),
                };
                return null == i
                    ? I.intl.format(I.t.HpvELh, e)
                    : i?.member_type === x.Z9.OWNER
                      ? I.intl.format(I.t.X1ngSd, { ...e, guildName: i?.name })
                      : I.intl.format(I.t.rmpEPD, { ...e, guildName: i?.name });
            }, [t, i]);
        return (0, n.jsx)(d.D, { variant: "heading-xl/normal", children: l });
    },
    k = (e) => {
        let { actions: t, classificationExpiration: i } = e,
            a = (0, p.bG)([E.default], () => E.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == i
            ? null
            : (0, n.jsxs)("div", {
                  children: [
                      (0, n.jsx)(c.E, {
                          variant: "eyebrow",
                          color: "text-muted",
                          children: I.intl.string(I.t["O2nYk+"]),
                      }),
                      (0, n.jsxs)("ul", {
                          className: S.nq,
                          children: [
                              t.map((e) => (0, n.jsx)(O, { action: e }, e.id)),
                              null != i
                                  ? (0, n.jsx)(
                                        "li",
                                        {
                                            className: S.DJ,
                                            children: (0, n.jsx)(c.E, {
                                                tag: "span",
                                                variant: "heading-md/normal",
                                                color: "text-default",
                                                children: I.intl.format(I.t.TByIjT, {
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
    O = (e) => {
        let { action: t } = e;
        return (0, n.jsx)(n.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, n.jsx)(
                    "li",
                    {
                        className: S.DJ,
                        children: (0, n.jsx)(c.E, {
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
    P = (e) => {
        let { classificationTypeText: t, policyExplainerLink: i } = e;
        return (0, n.jsxs)(m.Anchor, {
            href: i,
            className: S.F8,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)("div", {
                    className: S.yi,
                    children: (0, n.jsx)(h.l, { size: "md", color: r.A.colors.BORDER_FOCUS }),
                }),
                (0, n.jsx)("div", {
                    className: S.wC,
                    children: (0, n.jsx)(c.E, {
                        variant: "text-md/normal",
                        children: I.intl.format(I.t.zxUdpj, { classificationDescription: t }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: S.g_,
                    children: (0, n.jsx)(u._, { size: "md", color: r.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
            ],
        });
    },
    D = () =>
        (0, n.jsx)(c.E, { variant: "text-md/normal", color: "text-muted", children: I.intl.string(I.t["I2H0/E"]) }),
    M = (e) =>
        (0, n.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: I.intl.format(I.t.IFxUaT, {
                letUsKnowHook: (t, i) =>
                    (0, n.jsx)(
                        m.Anchor,
                        { href: e.isAppealEligible ? void 0 : e.appealLink, onClick: e.letUsKnowClick, children: t },
                        i,
                    ),
            }),
        }),
    b = (e) =>
        (0, n.jsx)("div", {
            className: S.CC,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(D, {})
                : (0, n.jsx)(M, {
                      appealLink: C.d$.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible,
                  }),
        }),
    G = (e) => {
        let {
            tosLink: t,
            communityGuidelinesLink: i,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: s,
        } = e;
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(c.E, { variant: "eyebrow", color: "text-muted", children: I.intl.string(I.t["977iei"]) }),
                (0, n.jsx)(c.E, {
                    className: S.t8,
                    variant: "text-sm/normal",
                    children: I.intl.format(I.t["1Z/+aA"], { tosLink: t, communityGuidelinesLink: i }),
                }),
                (0, n.jsx)(P, { classificationTypeText: a, policyExplainerLink: l }),
                s,
            ],
        });
    },
    F = (e) => {
        let { classificationId: t, source: i, onError: l, onClose: r } = e,
            {
                classification: d,
                classificationRequestState: c,
                isAppealEligible: m,
                isDsaEligible: h,
                violationType: u,
            } = (0, y.LJ)(t),
            E = (0, p.bG)([f.A], () => f.A.getAppealEligibility()),
            I = (0, j.K)(),
            O = null != d && null != d.flagged_content && d.flagged_content.length > 0,
            P = (0, T.v)(),
            D = !!d?.is_coppa && E.includes(x.RH.AGE_VERIFY_ELIGIBLE),
            M = !!d?.is_coppa && E.includes(x.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
            F = {
                accountStanding: I,
                classificationId: t,
                hasFlaggedContent: O,
                isDsaEligible: h,
                source: i,
                violationType: u,
            },
            H = a.useRef(F);
        return (a.useEffect(() => {
            H.current = F;
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
            P &&
                _.default.track(U.HAw.SAFETY_HUB_ACTION, {
                    action: C.ZU.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(t)],
                    source: a,
                    is_violative_content_shown: i,
                    is_dsa_eligible: n,
                    violation_type: l,
                });
        }, [P]),
        null == d && c === x.nU.FAILED)
            ? (l(), null)
            : null == d
              ? null
              : (0, n.jsxs)("div", {
                    className: S.ch,
                    children: [
                        (0, n.jsx)("div", {
                            className: S.uW,
                            children: (0, n.jsx)(w, {
                                classificationTypeText: d.description,
                                guildMetadata: d?.guild_metadata,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(S.rf, S.uW),
                            children: [
                                (0, n.jsx)(N.U, { flaggedContent: d.flagged_content ?? [] }),
                                (0, n.jsx)(k, { actions: d.actions, classificationExpiration: (0, v.UI)(d) }),
                                (0, n.jsx)(G, {
                                    classificationTypeText: d.description,
                                    tosLink: C.d$.TOS_LINK,
                                    communityGuidelinesLink: C.d$.COMMUNITY_GUIDELINES,
                                    policyExplainerLink: d.explainer_link,
                                    appealComponent: (0, n.jsx)(b, {
                                        hasBeenAppealed: null != d.appeal_status,
                                        onLetUsKnowClick: () => {
                                            _.default.track(U.HAw.SAFETY_HUB_ACTION, {
                                                action: C.ZU.ClickLetUsKnow,
                                                account_standing: I.state,
                                                classification_ids: [Number(t)],
                                                source: i,
                                                is_violative_content_shown: O,
                                                is_dsa_eligible: h,
                                                violation_type: u,
                                            }),
                                                M
                                                    ? g.A.openV2(t, r)
                                                    : D
                                                      ? g.A.open(t, r)
                                                      : m &&
                                                        (A.A.increment({ name: o.K.APPEAL_INGESTION_VIEW }),
                                                        L.A.open(t));
                                        },
                                        isAppealEligible: m || D,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
    };
