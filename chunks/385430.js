n.d(e, { default: () => W });
var t = n(627968),
    l = n(64700),
    a = n(935462),
    s = n(289873),
    c = n(780964),
    o = n(766075),
    r = n(393033),
    d = n(257110),
    u = n(503698),
    m = n.n(u),
    p = n(731738),
    x = n(661531),
    f = n(534514),
    _ = n(834730),
    h = n(349288),
    E = n(231483),
    g = n(320448),
    j = n(17928),
    A = n(807393),
    N = n(773669),
    v = n(174459),
    L = n(67521),
    C = n(739010),
    k = n(207913),
    I = n(335891),
    T = n(985481),
    U = n(259960),
    y = n(26095),
    b = n(607739),
    w = n(239093),
    D = n(652215),
    S = n(375708),
    G = n(646704);
function O(i) {
    let { classificationTypeText: e, guildMetadata: n } = i,
        a = l.useMemo(() => {
            let i = { classification_type: e, classificationHook: (i, e) => (0, t.jsx)("strong", { children: i }, e) };
            return null == n
                ? S.intl.format(S.t.HpvELh, i)
                : n?.member_type === C.Z9.OWNER
                  ? S.intl.format(S.t.X1ngSd, { ...i, guildName: n?.name })
                  : S.intl.format(S.t.rmpEPD, { ...i, guildName: n?.name });
        }, [e, n]);
    return (0, t.jsx)(f.D, { variant: "heading-xl/normal", children: a });
}
function H(i) {
    let { actions: e, classificationExpiration: n } = i,
        l = (0, j.bG)([N.default], () => N.default.locale);
    return 0 === e.filter((i) => i.descriptions.length > 0).length && null == n
        ? null
        : (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)(_.E, { variant: "eyebrow", color: "text-muted", children: S.intl.string(S.t["O2nYk+"]) }),
                  (0, t.jsxs)("ul", {
                      className: G.nq,
                      children: [
                          e.map((i) => (0, t.jsx)(R, { action: i }, i.id)),
                          null != n
                              ? (0, t.jsx)(
                                    "li",
                                    {
                                        className: G.DJ,
                                        children: (0, t.jsx)(_.E, {
                                            tag: "span",
                                            variant: "heading-md/normal",
                                            color: "text-default",
                                            children: S.intl.format(S.t.TByIjT, {
                                                expirationDate: n.toLocaleDateString(l, { dateStyle: "medium" }),
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
}
function R(i) {
    let { action: e } = i;
    return (0, t.jsx)(t.Fragment, {
        children: e.descriptions.map((i, e) =>
            (0, t.jsx)(
                "li",
                {
                    className: G.DJ,
                    children: (0, t.jsx)(_.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: i,
                    }),
                },
                e,
            ),
        ),
    });
}
function F(i) {
    let { classificationTypeText: e, policyExplainerLink: n } = i;
    return (0, t.jsxs)(h.Anchor, {
        href: n,
        className: G.F8,
        useDefaultUnderlineStyles: !1,
        children: [
            (0, t.jsx)("div", {
                className: G.yi,
                children: (0, t.jsx)(E.l, { size: "md", color: x.A.colors.BORDER_FOCUS }),
            }),
            (0, t.jsx)("div", {
                className: G.wC,
                children: (0, t.jsx)(_.E, {
                    variant: "text-md/normal",
                    children: S.intl.format(S.t.zxUdpj, { classificationDescription: e }),
                }),
            }),
            (0, t.jsx)("div", {
                className: G.g_,
                children: (0, t.jsx)(g._, { size: "md", color: x.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function K() {
    return (0, t.jsx)(_.E, { variant: "text-md/normal", color: "text-muted", children: S.intl.string(S.t["I2H0/E"]) });
}
function B(i) {
    return (0, t.jsx)(_.E, {
        variant: "text-md/normal",
        color: "text-muted",
        children: S.intl.format(S.t.IFxUaT, {
            letUsKnowHook: (e, n) =>
                (0, t.jsx)(
                    h.Anchor,
                    { href: i.isAppealEligible ? void 0 : i.appealLink, onClick: i.letUsKnowClick, children: e },
                    n,
                ),
        }),
    });
}
function V(i) {
    return (0, t.jsx)("div", {
        className: G.CC,
        children: i.hasBeenAppealed
            ? (0, t.jsx)(K, {})
            : (0, t.jsx)(B, {
                  appealLink: w.d$.APPEALS_LINK,
                  letUsKnowClick: i.onLetUsKnowClick,
                  isAppealEligible: i.isAppealEligible,
              }),
    });
}
function Y(i) {
    let {
        tosLink: e,
        communityGuidelinesLink: n,
        classificationTypeText: l,
        policyExplainerLink: a,
        appealComponent: s,
    } = i;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(_.E, { variant: "eyebrow", color: "text-muted", children: S.intl.string(S.t["977iei"]) }),
            (0, t.jsx)(_.E, {
                className: G.t8,
                variant: "text-sm/normal",
                children: S.intl.format(S.t["1Z/+aA"], { tosLink: e, communityGuidelinesLink: n }),
            }),
            (0, t.jsx)(F, { classificationTypeText: l, policyExplainerLink: a }),
            s,
        ],
    });
}
let M = (i) => {
    let { classificationId: e, source: n, onError: a, onClose: s } = i,
        {
            classification: c,
            classificationRequestState: o,
            isAppealEligible: d,
            isDsaEligible: u,
            violationType: x,
        } = (0, T.LJ)(e),
        f = (0, j.bG)([k.A], () => k.A.getAppealEligibility()),
        _ = (0, I.K)(),
        h = null != c && null != c.flagged_content && c.flagged_content.length > 0,
        E = (0, U.v)(),
        g = !!c?.is_coppa && f.includes(C.RH.AGE_VERIFY_ELIGIBLE),
        N = !!c?.is_coppa && f.includes(C.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
        S = {
            accountStanding: _,
            classificationId: e,
            hasFlaggedContent: h,
            isDsaEligible: u,
            source: n,
            violationType: x,
        },
        R = l.useRef(S);
    return (l.useEffect(() => {
        R.current = S;
    }),
    l.useEffect(() => {
        let {
            accountStanding: i,
            classificationId: e,
            hasFlaggedContent: n,
            isDsaEligible: t,
            source: l,
            violationType: a,
        } = R.current;
        E &&
            v.default.track(D.HAw.SAFETY_HUB_ACTION, {
                action: w.ZU.ViewViolationDetail,
                account_standing: i.state,
                classification_ids: [Number(e)],
                source: l,
                is_violative_content_shown: n,
                is_dsa_eligible: t,
                violation_type: a,
            });
    }, [E]),
    null == c && o === C.nU.FAILED)
        ? (a(), null)
        : null == c
          ? null
          : (0, t.jsxs)("div", {
                className: G.ch,
                children: [
                    (0, t.jsx)("div", {
                        className: G.uW,
                        children: (0, t.jsx)(O, {
                            classificationTypeText: c.description,
                            guildMetadata: c?.guild_metadata,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: m()(G.rf, G.uW),
                        children: [
                            (0, t.jsx)(b.U, { flaggedContent: c.flagged_content ?? [] }),
                            (0, t.jsx)(H, { actions: c.actions, classificationExpiration: (0, r.UI)(c) }),
                            (0, t.jsx)(Y, {
                                classificationTypeText: c.description,
                                tosLink: w.d$.TOS_LINK,
                                communityGuidelinesLink: w.d$.COMMUNITY_GUIDELINES,
                                policyExplainerLink: c.explainer_link,
                                appealComponent: (0, t.jsx)(V, {
                                    hasBeenAppealed: null != c.appeal_status,
                                    onLetUsKnowClick: function () {
                                        v.default.track(D.HAw.SAFETY_HUB_ACTION, {
                                            action: w.ZU.ClickLetUsKnow,
                                            account_standing: _.state,
                                            classification_ids: [Number(e)],
                                            source: n,
                                            is_violative_content_shown: h,
                                            is_dsa_eligible: u,
                                            violation_type: x,
                                        }),
                                            N
                                                ? L.A.openV2(e, s)
                                                : g
                                                  ? L.A.open(e, s)
                                                  : d &&
                                                    (A.A.increment({ name: p.K.APPEAL_INGESTION_VIEW }), y.A.open(e));
                                    },
                                    isAppealEligible: d || g,
                                }),
                            }),
                        ],
                    }),
                ],
            });
};
var P = n(109659);
let W = function (i) {
    let { transitionState: e, onClose: n, classificationId: l, source: u } = i,
        m = (0, d.A)(),
        p = (0, r.W$)();
    function x() {
        n(), p || (0, o.openUserSettings)(c.X.ACCOUNT_STANDING_CATEGORY);
    }
    return (0, t.jsxs)(a.EO, {
        className: P.CR,
        transitionState: e,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: P.Hc,
                children: (0, t.jsx)(a.s_, { "data-migration-pending": !0, className: P.g8, onClick: n }),
            }),
            (0, t.jsx)(a.$m, {
                "data-migration-pending": !0,
                className: P.jE,
                children: m
                    ? (0, t.jsx)(s.y, {})
                    : (0, t.jsx)(M, { classificationId: l, source: u, onError: x, onClose: x }),
            }),
        ],
    });
};
