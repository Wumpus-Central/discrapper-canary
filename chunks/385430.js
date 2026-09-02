n.d(i, { default: () => z });
var t = n(477900),
    l = n(582128),
    a = n(935462),
    s = n(289873),
    o = n(780964),
    c = n(766075),
    r = n(393033),
    d = n(257110),
    u = n(503698),
    m = n.n(u),
    p = n(731738),
    x = n(661531),
    h = n(297264),
    E = n(834730),
    f = n(28863),
    _ = n(231483),
    j = n(320448),
    g = n(17928),
    A = n(847599),
    N = n(462924),
    C = n(807393),
    v = n(773669),
    L = n(174459),
    k = n(67521),
    I = n(739010),
    U = n(207913),
    T = n(335891),
    y = n(985481),
    w = n(259960),
    D = n(26095),
    b = n(607739),
    S = n(239093),
    O = n(652215),
    G = n(375708),
    K = n(52111);
function H(e) {
    let { classificationTypeText: i, guildMetadata: n } = e,
        a = l.useMemo(() => {
            let e = { classification_type: i, classificationHook: (e, i) => (0, t.jsx)("strong", { children: e }, i) };
            return null == n
                ? G.intl.format(G.t.HpvELh, e)
                : n?.member_type === I.Z9.OWNER
                  ? G.intl.format(G.t.X1ngSd, { ...e, guildName: n?.name })
                  : G.intl.format(G.t.rmpEPD, { ...e, guildName: n?.name });
        }, [i, n]);
    return (0, t.jsx)(h.D, { variant: "heading-xl/normal", children: a });
}
function R(e) {
    let { actions: i, classificationExpiration: n } = e,
        l = (0, g.bG)([v.default], () => v.default.locale);
    return 0 === i.filter((e) => e.descriptions.length > 0).length && null == n
        ? null
        : (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)(E.E, { variant: "eyebrow", color: "text-muted", children: G.intl.string(G.t["O2nYk+"]) }),
                  (0, t.jsxs)("ul", {
                      className: K.nq,
                      children: [
                          i.map((e) => (0, t.jsx)(F, { action: e }, e.id)),
                          null != n
                              ? (0, t.jsx)(
                                    "li",
                                    {
                                        className: K.DJ,
                                        children: (0, t.jsx)(E.E, {
                                            tag: "span",
                                            variant: "heading-md/normal",
                                            color: "text-default",
                                            children: G.intl.format(G.t.TByIjT, {
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
function F(e) {
    let { action: i } = e;
    return (0, t.jsx)(t.Fragment, {
        children: i.descriptions.map((e, i) =>
            (0, t.jsx)(
                "li",
                {
                    className: K.DJ,
                    children: (0, t.jsx)(E.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: e,
                    }),
                },
                i,
            ),
        ),
    });
}
function B(e) {
    let { classificationTypeText: i, policyExplainerLink: n } = e;
    return (0, t.jsxs)(f.Anchor, {
        href: n,
        className: K.F8,
        useDefaultUnderlineStyles: !1,
        children: [
            (0, t.jsx)("div", {
                className: K.yi,
                children: (0, t.jsx)(_.ShieldIcon, { size: "md", color: x.A.colors.BORDER_FOCUS }),
            }),
            (0, t.jsx)("div", {
                className: K.wC,
                children: (0, t.jsx)(E.E, {
                    variant: "text-md/normal",
                    children: G.intl.format(G.t.zxUdpj, { classificationDescription: i }),
                }),
            }),
            (0, t.jsx)("div", {
                className: K.g_,
                children: (0, t.jsx)(j._, { size: "md", color: x.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function P() {
    return (0, t.jsx)(E.E, { variant: "text-md/normal", color: "text-muted", children: G.intl.string(G.t["I2H0/E"]) });
}
function M(e) {
    return (0, t.jsx)(E.E, {
        variant: "text-md/normal",
        color: "text-muted",
        children: G.intl.format(G.t.IFxUaT, {
            letUsKnowHook: (i, n) =>
                (0, t.jsx)(
                    f.Anchor,
                    { href: e.isAppealEligible ? void 0 : e.appealLink, onClick: e.letUsKnowClick, children: i },
                    n,
                ),
        }),
    });
}
function V(e) {
    return (0, t.jsx)("div", {
        className: K.CC,
        children: e.hasBeenAppealed
            ? (0, t.jsx)(P, {})
            : (0, t.jsx)(M, {
                  appealLink: S.d$.APPEALS_LINK,
                  letUsKnowClick: e.onLetUsKnowClick,
                  isAppealEligible: e.isAppealEligible,
              }),
    });
}
function Y(e) {
    return (0, t.jsx)("div", {
        className: K.CC,
        children: (0, t.jsx)(E.E, {
            variant: "text-md/normal",
            color: "text-muted",
            className: K.IC,
            children: G.intl.format(G.t.LeAhOQ, {
                letUsKnowHook: (i, n) => (0, t.jsx)(f.Anchor, { onClick: e.onLetUsKnowClick, children: i }, n),
            }),
        }),
    });
}
function W(e) {
    let {
        tosLink: i,
        communityGuidelinesLink: n,
        classificationTypeText: l,
        policyExplainerLink: a,
        appealComponent: s,
        hidePolicyCard: o = !1,
    } = e;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(E.E, { variant: "eyebrow", color: "text-muted", children: G.intl.string(G.t["977iei"]) }),
            (0, t.jsx)(E.E, {
                className: K.t8,
                variant: "text-sm/normal",
                children: G.intl.format(G.t["1Z/+aA"], { tosLink: i, communityGuidelinesLink: n }),
            }),
            !o && (0, t.jsx)(B, { classificationTypeText: l, policyExplainerLink: a }),
            s,
        ],
    });
}
let $ = (e) => {
    let { classificationId: i, source: n, onError: a, onClose: s } = e,
        {
            classification: o,
            classificationRequestState: c,
            isAppealEligible: d,
            isDsaEligible: u,
            violationType: x,
        } = (0, y.LJ)(i),
        h = (0, g.bG)([U.A], () => U.A.getAppealEligibility()),
        E = (0, T.K)(),
        f = null != o && null != o.flagged_content && o.flagged_content.length > 0,
        _ = (0, w.v)(),
        j = !!o?.is_coppa && h.includes(I.RH.AGE_VERIFY_ELIGIBLE),
        v = !!o?.is_coppa && h.includes(I.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
        G = (0, N.M)(A.q1.AUTOMATED_UNDERAGE_APPEALS),
        F = v && G,
        B = {
            accountStanding: E,
            classificationId: i,
            hasFlaggedContent: f,
            isDsaEligible: u,
            source: n,
            violationType: x,
        },
        P = l.useRef(B);
    function M() {
        L.default.track(O.HAw.SAFETY_HUB_ACTION, {
            action: S.ZU.ClickLetUsKnow,
            account_standing: E.state,
            classification_ids: [Number(i)],
            source: n,
            is_violative_content_shown: f,
            is_dsa_eligible: u,
            violation_type: x,
        }),
            v
                ? k.A.openV2(i, s)
                : j
                  ? k.A.open(i, s)
                  : d && (C.A.increment({ name: p.K.APPEAL_INGESTION_VIEW }), D.A.open(i));
    }
    return (l.useEffect(() => {
        P.current = B;
    }),
    l.useEffect(() => {
        let {
            accountStanding: e,
            classificationId: i,
            hasFlaggedContent: n,
            isDsaEligible: t,
            source: l,
            violationType: a,
        } = P.current;
        _ &&
            L.default.track(O.HAw.SAFETY_HUB_ACTION, {
                action: S.ZU.ViewViolationDetail,
                account_standing: e.state,
                classification_ids: [Number(i)],
                source: l,
                is_violative_content_shown: n,
                is_dsa_eligible: t,
                violation_type: a,
            });
    }, [_]),
    null == o && c === I.nU.FAILED)
        ? (a(), null)
        : null == o
          ? null
          : (0, t.jsxs)("div", {
                className: K.ch,
                children: [
                    (0, t.jsx)("div", {
                        className: K.uW,
                        children: (0, t.jsx)(H, {
                            classificationTypeText: o.description,
                            guildMetadata: o?.guild_metadata,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: m()(K.rf, K.uW),
                        children: [
                            (0, t.jsx)(b.U, { flaggedContent: o.flagged_content ?? [] }),
                            (0, t.jsx)(R, { actions: o.actions, classificationExpiration: (0, r.UI)(o) }),
                            (0, t.jsx)(W, {
                                classificationTypeText: o.description,
                                tosLink: S.d$.TOS_LINK,
                                communityGuidelinesLink: S.d$.COMMUNITY_GUIDELINES,
                                policyExplainerLink: o.explainer_link,
                                hidePolicyCard: F,
                                appealComponent: F
                                    ? (0, t.jsx)(Y, { onLetUsKnowClick: M })
                                    : (0, t.jsx)(V, {
                                          hasBeenAppealed: null != o.appeal_status,
                                          onLetUsKnowClick: M,
                                          isAppealEligible: d || j,
                                      }),
                            }),
                        ],
                    }),
                ],
            });
};
var Z = n(987926);
let z = function (e) {
    let { transitionState: i, onClose: n, classificationId: l, source: u } = e,
        m = (0, d.A)(),
        p = (0, r.W$)();
    function x() {
        n(), p || (0, c.openUserSettings)(o.X.ACCOUNT_STANDING_CATEGORY);
    }
    return (0, t.jsxs)(a.EO, {
        className: Z.CR,
        transitionState: i,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: Z.Hc,
                children: (0, t.jsx)(a.s_, { "data-migration-pending": !0, className: Z.g8, onClick: n }),
            }),
            (0, t.jsx)(a.$m, {
                "data-migration-pending": !0,
                className: Z.jE,
                children: m
                    ? (0, t.jsx)(s.y, {})
                    : (0, t.jsx)($, { classificationId: l, source: u, onError: x, onClose: x }),
            }),
        ],
    });
};
