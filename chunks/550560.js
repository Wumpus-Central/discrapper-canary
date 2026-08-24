e.d(t, { default: () => Q });
var n = e(477900),
    a = e(582128),
    s = e(562708),
    l = e(935462),
    r = e(430690),
    c = e(985481),
    o = e(503698),
    d = e.n(o),
    x = e(17928),
    m = e(297264),
    g = e(834730),
    p = e(144228),
    N = e(103557),
    u = e(825484),
    h = e(821609),
    j = e(228366),
    A = e(235986),
    E = e(207913),
    _ = e(393033),
    C = e(239093),
    I = e(375708),
    S = e(502616),
    k = e(936986);
function v(i) {
    let { className: t, isDsaEligible: e = !1, onClose: s, onNext: r, onBack: o } = i,
        v = (0, c.y5)(),
        L = (0, x.bG)([E.A], () => E.A.getFreeTextAppealReason()),
        [b, P] = a.useState(""),
        [T, f] = a.useState(!1);
    a.useEffect(() => {
        P(L ?? ""), f(v === C.Iv.SOMETHING_ELSE);
    }, [L, v, e]);
    let G = C.Qv.map((i) => ({ value: i, name: (0, _.l0)(i) }));
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.VEcRhw),
                    }),
                    null != s && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: s }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(S.j, t),
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)(p.z, {
                        value: v,
                        options: G,
                        onChange: (i) => {
                            f(i === C.Iv.SOMETHING_ELSE),
                                i !== C.Iv.SOMETHING_ELSE &&
                                    (P(""),
                                    j.h.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                j.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal: i });
                        },
                    }),
                    e &&
                        T &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(N.f, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: I.intl.string(I.t.bQrZIN),
                                    value: b,
                                    onChange: P,
                                    autoFocus: !0,
                                }),
                                (0, n.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: I.intl.string(I.t.xfNY3L),
                                }),
                            ],
                        }),
                    (0, n.jsx)(g.E, {
                        variant: "text-sm/normal",
                        className: S.e,
                        children: I.intl.format(I.t["8k9GCW"], {}),
                    }),
                ],
            }),
            (0, n.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)(u.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, n.jsx)(h.$, {
                            variant: "primary",
                            text: I.intl.string(I.t.PDTjLN),
                            onClick: function () {
                                j.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: b }),
                                    r?.();
                            },
                        }),
                        (0, n.jsx)(h.$, {
                            variant: "secondary",
                            text: I.intl.string(I.t["13/7kX"]),
                            onClick: function () {
                                j.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: b }),
                                    o?.();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
var L = e(28863),
    b = e(308645),
    P = e(652215),
    T = e(949902);
function f(i) {
    let { className: t, isDsaEligible: e, onClose: s, onNext: r, onBack: o } = i,
        d = (0, x.bG)([E.A], () => E.A.getAppealClassificationId()),
        { classification: p } = (0, c.LJ)(d ?? P.dJq),
        C = (0, _.eu)(p?.description),
        S = (0, x.bG)([E.A], () => E.A.getIsSubmitting()),
        v = (0, x.bG)([E.A], () => E.A.getAppealSignal()),
        f = (0, x.bG)([E.A], () => E.A.getFreeTextAppealReason()),
        [G, U] = a.useState(!1),
        [D, y] = a.useState(""),
        M = a.useCallback((i) => {
            j.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: i });
        }, []),
        O = a.useCallback(async () => {
            if (null !== d)
                try {
                    y(""), await b.Gf(d, v, f), r?.();
                } catch (i) {
                    y((0, _.Tk)(i.body?.code));
                }
        }, [d, v, f, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t["G2g/g5"]),
                    }),
                    null != s && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: s }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: t,
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)("ul", {
                        className: T.qI,
                        children: [(0, _.l0)(v), f]
                            .filter((i) => i.length > 0)
                            .map((i, t) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        className: T.Aw,
                                        children: (0, n.jsx)(g.E, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: i,
                                        }),
                                    },
                                    t,
                                ),
                            ),
                    }),
                    e &&
                        (0, n.jsx)("div", {
                            className: T.DE,
                            children: (0, n.jsx)(L.Anchor, {
                                onClick: () => U((i) => !i),
                                children: (0, n.jsx)(m.D, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: f.length > 0 ? I.intl.string(I.t.tnE3bZ) : I.intl.string(I.t.uoQFIp),
                                }),
                            }),
                        }),
                    G &&
                        e &&
                        (0, n.jsx)("div", { className: T.Kf, children: (0, n.jsx)(N.f, { value: f, onChange: M }) }),
                    (0, n.jsx)("div", {
                        className: k.kU,
                        children: (0, n.jsx)(g.E, { variant: "text-md/semibold", children: C }),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: T.PJ,
                        children: I.intl.string(I.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, n.jsxs)(l.jl, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                children: [
                    "" !== D &&
                        (0, n.jsx)(g.E, {
                            className: T.kc,
                            variant: "text-lg/normal",
                            color: "text-feedback-critical",
                            children: D,
                        }),
                    (0, n.jsx)("div", {
                        className: T.UD,
                        children: (0, n.jsxs)(u.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, n.jsx)(h.$, {
                                    variant: "secondary",
                                    text: I.intl.string(I.t["13/7kX"]),
                                    onClick: o,
                                    disabled: S,
                                }),
                                (0, n.jsx)(h.$, {
                                    variant: "critical-primary",
                                    text: I.intl.string(I.t.geKm7t),
                                    onClick: O,
                                    loading: S,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
var G = e(26095),
    U = e(331322),
    D = e(174459),
    y = e(335891);
function M() {
    let i = (0, x.bG)([E.A], () => E.A.getAppealClassificationId()),
        t = (0, c.LJ)(i ?? P.dJq),
        e = (0, y.K)(),
        n = (0, x.bG)([E.A], () => E.A.getIsDsaEligible());
    return a.useCallback(
        (a) => {
            D.default.track(P.HAw.SAFETY_HUB_ACTION, {
                action: a,
                account_standing: e.state,
                classification_ids: null != i ? [Number(i)] : null,
                source: C.XN.AppealIngestion,
                is_dsa_eligible: n,
                violation_type: t.violationType,
            });
        },
        [e.state, i, t, n],
    );
}
var O = e(975807),
    B = e(632738);
function F(i) {
    let { url: t, text: e, onClick: s } = i,
        l = a.useCallback(() => {
            s?.(), (0, O.A)(t);
        }, [s, t]);
    return (0, n.jsx)(B.PQ, { variant: "clickable", title: e, onButtonPress: l });
}
var R = e(399839);
function H(i) {
    let { className: t, onNext: e, onClose: a } = i,
        s = M();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: R.zc,
                        children: (0, n.jsx)("img", { src: "/assets/60e9812b94a3894e.png", alt: "", className: R.Kk }),
                    }),
                    (0, n.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t.QMbTSu),
                    }),
                    (0, n.jsx)(m.D, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.Qdx8AP),
                    }),
                    null != a && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: a }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(R.jE, t),
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        className: R.f9,
                        children: I.intl.string(I.t["9BRc1N"]),
                    }),
                    (0, n.jsxs)(U.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(F, {
                                text: I.intl.string(I.t.PxL38B),
                                url: C.d$.COMMUNITY_GUIDELINES,
                                onClick: () => s(C.ZU.ClickCommunityGuidelinesLink),
                            }),
                            (0, n.jsx)(F, {
                                text: I.intl.string(I.t.qC3XKa),
                                url: C.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                                onClick: () => s(C.ZU.ClickWarningSystemHelpcenterLink),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, n.jsx)(h.$, { variant: "primary", text: I.intl.string(I.t.i4jeWR), onClick: e }),
            }),
        ],
    });
}
var Y = e(739010),
    $ = e(607739);
function V(i) {
    let {
            classification: t,
            isDsaEligible: e = !1,
            isSpam: a = !1,
            isCoppa: s = !1,
            isDeveloperClassification: r = !1,
            appealIngestionType: c,
            className: o,
            onClose: x,
            onNext: p,
        } = i,
        N = M(),
        u = t?.explainer_link ?? "",
        j = null != t && null != t.flagged_content && t.flagged_content.length > 0,
        E = (0, _.eu)(t?.description),
        S = !a && !s && !r && (null == c || c === Y.Il.IN_APP),
        v = null != t && ((0, _._g)(t) || j);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.URt7VI),
                    }),
                    null != x && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: x }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(k.jE, !v && k.bQ, o),
                scrollbarGutter: !1,
                children: [
                    v && (0, n.jsx)($.U, { flaggedContent: t.flagged_content ?? [] }),
                    (0, n.jsx)(g.E, {
                        className: k.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: I.intl.string(I.t.xsdcxh),
                    }),
                    (0, n.jsx)("div", {
                        className: k.kU,
                        children: (0, n.jsx)(g.E, { variant: "text-md/semibold", children: E }),
                    }),
                    (0, n.jsxs)(U.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            s &&
                                (0, n.jsx)(F, {
                                    url: C.d$.AGE_VERIFICATION_LINK,
                                    text: I.intl.string(I.t["gJs+kf"]),
                                    onClick: () => N(C.ZU.ClickAgeVerificationLink),
                                }),
                            a &&
                                !s &&
                                (0, n.jsx)(F, {
                                    url: C.d$.SPAM_LINK,
                                    text: I.intl.string(I.t["PaNS+I"]),
                                    onClick: () => N(C.ZU.ClickSpamWebformLink),
                                }),
                            r &&
                                (0, n.jsx)(F, {
                                    url: C.d$.APP_APPEAL_LINK,
                                    text: I.intl.string(I.t.n9cZTH),
                                    onClick: () => N(C.ZU.ClickAppAppealLink),
                                }),
                            !s &&
                                (0, n.jsx)(F, {
                                    text: I.intl.string(I.t["Vtyn/7"]),
                                    url: u,
                                    onClick: () => N(C.ZU.ClickLearnMoreLink),
                                }),
                        ],
                    }),
                    S &&
                        e &&
                        (0, n.jsx)(g.E, {
                            className: k.C2,
                            variant: "text-xs/normal",
                            children: I.intl.format(I.t.WMUgCX, {}),
                        }),
                ],
            }),
            S &&
                (0, n.jsx)(l.jl, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(h.$, { variant: "primary", text: I.intl.string(I.t.PDTjLN), onClick: p }),
                }),
        ],
    });
}
var q = e(543870);
function Q(i) {
    let { classificationId: t, transitionState: e, initialSlide: o = C.yN.SPEED_BUMP, onClose: d } = i,
        [x, m] = a.useState(o),
        { classification: g, isDsaEligible: p } = (0, c.LJ)(t ?? P.dJq),
        N = g?.is_spam || !1,
        u = g?.is_coppa || !1,
        h = g?.is_developer_classification || !1,
        j = g?.appeal_ingestion_type;
    a.useEffect(() => {
        m(o);
    }, [m, o]);
    let A = a.useCallback(() => {
            G.A.close(), d();
        }, [d]),
        E = a.useCallback(() => {
            let i = C.A8[x]?.next;
            null != i ? m(i) : A();
        }, [x, A]),
        _ = a.useCallback(() => {
            let i = C.A8[x]?.prev;
            null != i ? m(i) : A();
        }, [x, A]);
    return (0, n.jsx)(l.EO, {
        "data-migration-pending": !0,
        transitionState: e,
        disableTrack: !0,
        size: l.rI.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, n.jsx)("div", {
            className: q.k,
            children: (0, n.jsxs)(r.t, {
                activeSlide: x,
                width: 500,
                children: [
                    (0, n.jsx)(r.q, {
                        id: C.yN.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(V, {
                            classification: g,
                            onClose: A,
                            onNext: E,
                            isSpam: N,
                            isCoppa: u,
                            isDeveloperClassification: h,
                            appealIngestionType: j,
                            isDsaEligible: p,
                        }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(v, { isDsaEligible: p, onClose: A, onNext: E, onBack: _ }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(f, { isDsaEligible: p, onClose: A, onNext: E, onBack: _ }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(H, { onNext: E }),
                    }),
                ],
            }),
        }),
    });
}
