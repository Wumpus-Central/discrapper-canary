i.d(e, { default: () => z });
var t = i(477900),
    l = i(582128),
    a = i(935462),
    s = i(289873),
    o = i(780964),
    c = i(766075),
    r = i(393033),
    d = i(257110),
    u = i(503698),
    m = i.n(u),
    p = i(731738),
    x = i(661531),
    h = i(297264),
    E = i(834730),
    f = i(28863),
    _ = i(231483),
    j = i(320448),
    g = i(17928),
    A = i(847599),
    N = i(462924),
    v = i(807393),
    C = i(773669),
    L = i(174459),
    k = i(67521),
    I = i(739010),
    U = i(207913),
    T = i(335891),
    w = i(985481),
    y = i(259960),
    D = i(26095),
    b = i(607739),
    S = i(239093),
    O = i(652215),
    G = i(375708),
    K = i(52111);
function H(n) {
    let { classificationTypeText: e, guildMetadata: i } = n,
        a = l.useMemo(() => {
            let n = { classification_type: e, classificationHook: (n, e) => (0, t.jsx)("strong", { children: n }, e) };
            return null == i
                ? G.intl.format(G.t.HpvELh, n)
                : i?.member_type === I.Z9.OWNER
                  ? G.intl.format(G.t.X1ngSd, { ...n, guildName: i?.name })
                  : G.intl.format(G.t.rmpEPD, { ...n, guildName: i?.name });
        }, [e, i]);
    return (0, t.jsx)(h.D, { variant: "heading-xl/normal", children: a });
}
function R(n) {
    let { actions: e, classificationExpiration: i } = n,
        l = (0, g.bG)([C.default], () => C.default.locale);
    return 0 === e.filter((n) => n.descriptions.length > 0).length && null == i
        ? null
        : (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)(E.E, { variant: "eyebrow", color: "text-muted", children: G.intl.string(G.t["O2nYk+"]) }),
                  (0, t.jsxs)("ul", {
                      className: K.nq,
                      children: [
                          e.map((n) => (0, t.jsx)(F, { action: n }, n.id)),
                          null != i
                              ? (0, t.jsx)(
                                    "li",
                                    {
                                        className: K.DJ,
                                        children: (0, t.jsx)(E.E, {
                                            tag: "span",
                                            variant: "heading-md/normal",
                                            color: "text-default",
                                            children: G.intl.format(G.t.TByIjT, {
                                                expirationDate: i.toLocaleDateString(l, { dateStyle: "medium" }),
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
function F(n) {
    let { action: e } = n;
    return (0, t.jsx)(t.Fragment, {
        children: e.descriptions.map((n, e) =>
            (0, t.jsx)(
                "li",
                {
                    className: K.DJ,
                    children: (0, t.jsx)(E.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: n,
                    }),
                },
                e,
            ),
        ),
    });
}
function B(n) {
    let { classificationTypeText: e, policyExplainerLink: i } = n;
    return (0, t.jsxs)(f.Anchor, {
        href: i,
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
                    children: G.intl.format(G.t.zxUdpj, { classificationDescription: e }),
                }),
            }),
            (0, t.jsx)("div", {
                className: K.g_,
                children: (0, t.jsx)(j._, { size: "md", color: x.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function M() {
    return (0, t.jsx)(E.E, { variant: "text-md/normal", color: "text-muted", children: G.intl.string(G.t["I2H0/E"]) });
}
function P(n) {
    return (0, t.jsx)(E.E, {
        variant: "text-md/normal",
        color: "text-muted",
        children: G.intl.format(G.t.IFxUaT, {
            letUsKnowHook: (e, i) =>
                (0, t.jsx)(
                    f.Anchor,
                    { href: n.isAppealEligible ? void 0 : n.appealLink, onClick: n.letUsKnowClick, children: e },
                    i,
                ),
        }),
    });
}
function V(n) {
    return (0, t.jsx)("div", {
        className: K.CC,
        children: n.hasBeenAppealed
            ? (0, t.jsx)(M, {})
            : (0, t.jsx)(P, {
                  appealLink: S.d$.APPEALS_LINK,
                  letUsKnowClick: n.onLetUsKnowClick,
                  isAppealEligible: n.isAppealEligible,
              }),
    });
}
function Y(n) {
    return (0, t.jsx)("div", {
        className: K.CC,
        children: (0, t.jsx)(E.E, {
            variant: "text-md/normal",
            color: "text-muted",
            className: K.IC,
            children: G.intl.format(G.t.LeAhOQ, {
                letUsKnowHook: (e, i) => (0, t.jsx)(f.Anchor, { onClick: n.onLetUsKnowClick, children: e }, i),
            }),
        }),
    });
}
function W(n) {
    let {
        tosLink: e,
        communityGuidelinesLink: i,
        classificationTypeText: l,
        policyExplainerLink: a,
        appealComponent: s,
    } = n;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(E.E, { variant: "eyebrow", color: "text-muted", children: G.intl.string(G.t["977iei"]) }),
            (0, t.jsx)(E.E, {
                className: K.t8,
                variant: "text-sm/normal",
                children: G.intl.format(G.t["1Z/+aA"], { tosLink: e, communityGuidelinesLink: i }),
            }),
            (0, t.jsx)(B, { classificationTypeText: l, policyExplainerLink: a }),
            s,
        ],
    });
}
let $ = (n) => {
    let { classificationId: e, source: i, onError: a, onClose: s } = n,
        {
            classification: o,
            classificationRequestState: c,
            isAppealEligible: d,
            isDsaEligible: u,
            violationType: x,
        } = (0, w.LJ)(e),
        h = (0, g.bG)([U.A], () => U.A.getAppealEligibility()),
        E = (0, T.K)(),
        f = null != o && null != o.flagged_content && o.flagged_content.length > 0,
        _ = (0, y.v)(),
        j = !!o?.is_coppa && h.includes(I.RH.AGE_VERIFY_ELIGIBLE),
        C = !!o?.is_coppa && h.includes(I.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
        G = (0, N.M)(A.q1.AUTOMATED_UNDERAGE_APPEALS),
        F = {
            accountStanding: E,
            classificationId: e,
            hasFlaggedContent: f,
            isDsaEligible: u,
            source: i,
            violationType: x,
        },
        B = l.useRef(F);
    function M() {
        L.default.track(O.HAw.SAFETY_HUB_ACTION, {
            action: S.ZU.ClickLetUsKnow,
            account_standing: E.state,
            classification_ids: [Number(e)],
            source: i,
            is_violative_content_shown: f,
            is_dsa_eligible: u,
            violation_type: x,
        }),
            C
                ? k.A.openV2(e, s)
                : j
                  ? k.A.open(e, s)
                  : d && (v.A.increment({ name: p.K.APPEAL_INGESTION_VIEW }), D.A.open(e));
    }
    return (l.useEffect(() => {
        B.current = F;
    }),
    l.useEffect(() => {
        let {
            accountStanding: n,
            classificationId: e,
            hasFlaggedContent: i,
            isDsaEligible: t,
            source: l,
            violationType: a,
        } = B.current;
        _ &&
            L.default.track(O.HAw.SAFETY_HUB_ACTION, {
                action: S.ZU.ViewViolationDetail,
                account_standing: n.state,
                classification_ids: [Number(e)],
                source: l,
                is_violative_content_shown: i,
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
                                appealComponent:
                                    C && G
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
var Z = i(987926);
let z = function (n) {
    let { transitionState: e, onClose: i, classificationId: l, source: u } = n,
        m = (0, d.A)(),
        p = (0, r.W$)();
    function x() {
        i(), p || (0, c.openUserSettings)(o.X.ACCOUNT_STANDING_CATEGORY);
    }
    return (0, t.jsxs)(a.EO, {
        className: Z.CR,
        transitionState: e,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: Z.Hc,
                children: (0, t.jsx)(a.s_, { "data-migration-pending": !0, className: Z.g8, onClick: i }),
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
