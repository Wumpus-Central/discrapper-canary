i.d(t, { default: () => K });
var n = i(627968),
    a = i(64700),
    l = i(935462),
    s = i(289873),
    o = i(780964),
    r = i(858897),
    d = i(393033),
    c = i(257110),
    m = i(503698),
    h = i.n(m),
    u = i(731738),
    p = i(661531),
    A = i(534514),
    E = i(834730),
    _ = i(349288),
    g = i(231483),
    x = i(320448),
    f = i(17928),
    v = i(831062),
    j = i(773669),
    y = i(954571),
    T = i(67521),
    L = i(739010),
    N = i(207913),
    C = i(335891),
    U = i(985481),
    I = i(259960),
    S = i(26095),
    w = i(607739),
    k = i(239093),
    O = i(652215),
    P = i(985018),
    D = i(646704);
let M = (e) => {
        let { classificationTypeText: t, guildMetadata: i } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, n.jsx)("strong", { children: e }, t),
                };
                return null == i
                    ? P.intl.format(P.t.HpvELh, e)
                    : i?.member_type === L.Z9.OWNER
                      ? P.intl.format(P.t.X1ngSd, { ...e, guildName: i?.name })
                      : P.intl.format(P.t.rmpEPD, { ...e, guildName: i?.name });
            }, [t, i]);
        return (0, n.jsx)(A.D, { variant: "heading-xl/normal", children: l });
    },
    b = (e) => {
        let { actions: t, classificationExpiration: i } = e,
            a = (0, f.bG)([j.default], () => j.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == i
            ? null
            : (0, n.jsxs)("div", {
                  children: [
                      (0, n.jsx)(E.E, {
                          variant: "eyebrow",
                          color: "text-muted",
                          children: P.intl.string(P.t["O2nYk+"]),
                      }),
                      (0, n.jsxs)("ul", {
                          className: D.nq,
                          children: [
                              t.map((e) => (0, n.jsx)(G, { action: e }, e.id)),
                              null != i
                                  ? (0, n.jsx)(
                                        "li",
                                        {
                                            className: D.DJ,
                                            children: (0, n.jsx)(E.E, {
                                                tag: "span",
                                                variant: "heading-md/normal",
                                                color: "text-default",
                                                children: P.intl.format(P.t.TByIjT, {
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
    G = (e) => {
        let { action: t } = e;
        return (0, n.jsx)(n.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, n.jsx)(
                    "li",
                    {
                        className: D.DJ,
                        children: (0, n.jsx)(E.E, {
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
    F = (e) => {
        let { classificationTypeText: t, policyExplainerLink: i } = e;
        return (0, n.jsxs)(_.Anchor, {
            href: i,
            className: D.F8,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)("div", {
                    className: D.yi,
                    children: (0, n.jsx)(g.l, { size: "md", color: p.A.colors.BORDER_FOCUS }),
                }),
                (0, n.jsx)("div", {
                    className: D.wC,
                    children: (0, n.jsx)(E.E, {
                        variant: "text-md/normal",
                        children: P.intl.format(P.t.zxUdpj, { classificationDescription: t }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: D.g_,
                    children: (0, n.jsx)(x._, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
            ],
        });
    },
    H = () =>
        (0, n.jsx)(E.E, { variant: "text-md/normal", color: "text-muted", children: P.intl.string(P.t["I2H0/E"]) }),
    R = (e) =>
        (0, n.jsx)(E.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: P.intl.format(P.t.IFxUaT, {
                letUsKnowHook: (t, i) =>
                    (0, n.jsx)(
                        _.Anchor,
                        { href: e.isAppealEligible ? void 0 : e.appealLink, onClick: e.letUsKnowClick, children: t },
                        i,
                    ),
            }),
        }),
    B = (e) =>
        (0, n.jsx)("div", {
            className: D.CC,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(H, {})
                : (0, n.jsx)(R, {
                      appealLink: k.d$.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible,
                  }),
        }),
    V = (e) => {
        let {
            tosLink: t,
            communityGuidelinesLink: i,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: s,
        } = e;
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(E.E, { variant: "eyebrow", color: "text-muted", children: P.intl.string(P.t["977iei"]) }),
                (0, n.jsx)(E.E, {
                    className: D.t8,
                    variant: "text-sm/normal",
                    children: P.intl.format(P.t["1Z/+aA"], { tosLink: t, communityGuidelinesLink: i }),
                }),
                (0, n.jsx)(F, { classificationTypeText: a, policyExplainerLink: l }),
                s,
            ],
        });
    },
    Y = (e) => {
        let { classificationId: t, source: i, onError: l, onClose: s } = e,
            {
                classification: o,
                classificationRequestState: r,
                isAppealEligible: c,
                isDsaEligible: m,
                violationType: p,
            } = (0, U.LJ)(t),
            A = (0, f.bG)([N.A], () => N.A.getAppealEligibility()),
            E = (0, C.K)(),
            _ = null != o && null != o.flagged_content && o.flagged_content.length > 0,
            g = (0, I.v)(),
            x = !!o?.is_coppa && A.includes(L.RH.AGE_VERIFY_ELIGIBLE),
            j = !!o?.is_coppa && A.includes(L.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
            P = {
                accountStanding: E,
                classificationId: t,
                hasFlaggedContent: _,
                isDsaEligible: m,
                source: i,
                violationType: p,
            },
            G = a.useRef(P);
        return (a.useEffect(() => {
            G.current = P;
        }),
        a.useEffect(() => {
            let {
                accountStanding: e,
                classificationId: t,
                hasFlaggedContent: i,
                isDsaEligible: n,
                source: a,
                violationType: l,
            } = G.current;
            g &&
                y.default.track(O.HAw.SAFETY_HUB_ACTION, {
                    action: k.ZU.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(t)],
                    source: a,
                    is_violative_content_shown: i,
                    is_dsa_eligible: n,
                    violation_type: l,
                });
        }, [g]),
        null == o && r === L.nU.FAILED)
            ? (l(), null)
            : null == o
              ? null
              : (0, n.jsxs)("div", {
                    className: D.ch,
                    children: [
                        (0, n.jsx)("div", {
                            className: D.uW,
                            children: (0, n.jsx)(M, {
                                classificationTypeText: o.description,
                                guildMetadata: o?.guild_metadata,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: h()(D.rf, D.uW),
                            children: [
                                (0, n.jsx)(w.U, { flaggedContent: o.flagged_content ?? [] }),
                                (0, n.jsx)(b, { actions: o.actions, classificationExpiration: (0, d.UI)(o) }),
                                (0, n.jsx)(V, {
                                    classificationTypeText: o.description,
                                    tosLink: k.d$.TOS_LINK,
                                    communityGuidelinesLink: k.d$.COMMUNITY_GUIDELINES,
                                    policyExplainerLink: o.explainer_link,
                                    appealComponent: (0, n.jsx)(B, {
                                        hasBeenAppealed: null != o.appeal_status,
                                        onLetUsKnowClick: () => {
                                            y.default.track(O.HAw.SAFETY_HUB_ACTION, {
                                                action: k.ZU.ClickLetUsKnow,
                                                account_standing: E.state,
                                                classification_ids: [Number(t)],
                                                source: i,
                                                is_violative_content_shown: _,
                                                is_dsa_eligible: m,
                                                violation_type: p,
                                            }),
                                                j
                                                    ? T.A.openV2(t, s)
                                                    : x
                                                      ? T.A.open(t, s)
                                                      : c &&
                                                        (v.A.increment({ name: u.K.APPEAL_INGESTION_VIEW }),
                                                        S.A.open(t));
                                        },
                                        isAppealEligible: c || x,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
    };
var z = i(109659);
let K = (e) => {
    let { transitionState: t, onClose: i, classificationId: a, source: m } = e,
        h = (0, c.A)(),
        u = (0, d.W$)(),
        p = () => {
            i(), u || (0, r.openUserSettings)(o.X.ACCOUNT_STANDING_CATEGORY);
        };
    return (0, n.jsxs)(l.EO, {
        className: z.CR,
        transitionState: t,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)("div", {
                className: z.Hc,
                children: (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: z.g8, onClick: i }),
            }),
            (0, n.jsx)(l.$m, {
                "data-migration-pending": !0,
                className: z.jE,
                children: h
                    ? (0, n.jsx)(s.y, {})
                    : (0, n.jsx)(Y, { classificationId: a, source: m, onError: p, onClose: p }),
            }),
        ],
    });
};
