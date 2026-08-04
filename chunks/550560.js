t.d(i, { default: () => w });
var n = t(477900),
    a = t(582128),
    s = t(562708),
    l = t(935462),
    r = t(430690),
    c = t(985481),
    o = t(503698),
    d = t.n(o),
    x = t(17928),
    m = t(297264),
    g = t(834730),
    N = t(144228),
    p = t(260598),
    h = t(825484),
    j = t(821609),
    u = t(228366),
    A = t(235986),
    E = t(207913),
    _ = t(393033),
    C = t(239093),
    I = t(375708),
    S = t(412885),
    k = t(723041);
function v(e) {
    let { className: i, isDsaEligible: t = !1, onClose: s, onNext: r, onBack: o } = e,
        v = (0, c.y5)(),
        b = (0, x.bG)([E.A], () => E.A.getFreeTextAppealReason()),
        [L, T] = a.useState(""),
        [f, P] = a.useState(!1);
    a.useEffect(() => {
        T(b ?? ""), P(v === C.Iv.SOMETHING_ELSE);
    }, [b, v, t]);
    let G = C.Qv.map((e) => ({ value: e, name: (0, _.l0)(e) }));
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
                className: d()(S.j, i),
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)(N.z, {
                        value: v,
                        options: G,
                        onChange: (e) => {
                            P(e === C.Iv.SOMETHING_ELSE),
                                e !== C.Iv.SOMETHING_ELSE &&
                                    (T(""),
                                    u.h.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                u.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal: e });
                        },
                    }),
                    t &&
                        f &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.f, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: I.intl.string(I.t.bQrZIN),
                                    value: L,
                                    onChange: T,
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
                children: (0, n.jsxs)(h.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, n.jsx)(j.$, {
                            variant: "primary",
                            text: I.intl.string(I.t.PDTjLN),
                            onClick: function () {
                                u.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: L }),
                                    r?.();
                            },
                        }),
                        (0, n.jsx)(j.$, {
                            variant: "secondary",
                            text: I.intl.string(I.t["13/7kX"]),
                            onClick: function () {
                                u.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: L }),
                                    o?.();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
var b = t(349288),
    L = t(308645),
    T = t(652215),
    f = t(341111);
function P(e) {
    let { className: i, isDsaEligible: t, onClose: s, onNext: r, onBack: o } = e,
        d = (0, x.bG)([E.A], () => E.A.getAppealClassificationId()),
        { classification: N } = (0, c.LJ)(d ?? T.dJq),
        C = (0, _.eu)(N?.description),
        S = (0, x.bG)([E.A], () => E.A.getIsSubmitting()),
        v = (0, x.bG)([E.A], () => E.A.getAppealSignal()),
        P = (0, x.bG)([E.A], () => E.A.getFreeTextAppealReason()),
        [G, D] = a.useState(!1),
        [U, y] = a.useState(""),
        M = a.useCallback((e) => {
            u.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: e });
        }, []),
        O = a.useCallback(async () => {
            if (null !== d)
                try {
                    y(""), await L.Gf(d, v, P), r?.();
                } catch (e) {
                    y((0, _.Tk)(e.body?.code));
                }
        }, [d, v, P, r]);
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
                className: i,
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)("ul", {
                        className: f.qI,
                        children: [(0, _.l0)(v), P]
                            .filter((e) => e.length > 0)
                            .map((e, i) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        className: f.Aw,
                                        children: (0, n.jsx)(g.E, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: e,
                                        }),
                                    },
                                    i,
                                ),
                            ),
                    }),
                    t &&
                        (0, n.jsx)("div", {
                            className: f.DE,
                            children: (0, n.jsx)(b.Anchor, {
                                onClick: () => D((e) => !e),
                                children: (0, n.jsx)(m.D, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: P.length > 0 ? I.intl.string(I.t.tnE3bZ) : I.intl.string(I.t.uoQFIp),
                                }),
                            }),
                        }),
                    G &&
                        t &&
                        (0, n.jsx)("div", { className: f.Kf, children: (0, n.jsx)(p.f, { value: P, onChange: M }) }),
                    (0, n.jsx)("div", {
                        className: k.kU,
                        children: (0, n.jsx)(g.E, { variant: "text-md/semibold", children: C }),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: f.PJ,
                        children: I.intl.string(I.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, n.jsxs)(l.jl, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                children: [
                    "" !== U &&
                        (0, n.jsx)(g.E, {
                            className: f.kc,
                            variant: "text-lg/normal",
                            color: "text-feedback-critical",
                            children: U,
                        }),
                    (0, n.jsx)("div", {
                        className: f.UD,
                        children: (0, n.jsxs)(h.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, n.jsx)(j.$, {
                                    variant: "secondary",
                                    text: I.intl.string(I.t["13/7kX"]),
                                    onClick: o,
                                    disabled: S,
                                }),
                                (0, n.jsx)(j.$, {
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
var G = t(26095),
    D = t(174459),
    U = t(335891);
function y() {
    let e = (0, x.bG)([E.A], () => E.A.getAppealClassificationId()),
        i = (0, c.LJ)(e ?? T.dJq),
        t = (0, U.K)(),
        n = (0, x.bG)([E.A], () => E.A.getIsDsaEligible());
    return a.useCallback(
        (a) => {
            D.default.track(T.HAw.SAFETY_HUB_ACTION, {
                action: a,
                account_standing: t.state,
                classification_ids: null != e ? [Number(e)] : null,
                source: C.XN.AppealIngestion,
                is_dsa_eligible: n,
                violation_type: i.violationType,
            });
        },
        [t.state, e, i, n],
    );
}
var M = t(939249),
    O = t(147925),
    R = t(22854);
function F(e) {
    let { url: i, text: t, onClick: a } = e;
    return (0, n.jsx)(b.Anchor, {
        href: i,
        onClick: a,
        className: R.jH,
        children: (0, n.jsxs)(M.D, {
            className: R.Zm,
            children: [
                (0, n.jsx)(g.E, { className: R.ix, variant: "text-md/semibold", children: t }),
                (0, n.jsx)(O.A, { className: R._2, direction: O.A.Directions.RIGHT }),
            ],
        }),
    });
}
var H = t(137714);
function B(e) {
    let { className: i, onNext: t, onClose: a } = e,
        s = y();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: H.zc,
                        children: (0, n.jsx)("img", { src: "/assets/60e9812b94a3894e.png", alt: "", className: H.Kk }),
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
                className: d()(H.jE, i),
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        className: H.f9,
                        children: I.intl.string(I.t["9BRc1N"]),
                    }),
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
            (0, n.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, n.jsx)(j.$, { variant: "primary", text: I.intl.string(I.t.i4jeWR), onClick: t }),
            }),
        ],
    });
}
var Y = t(739010),
    V = t(607739);
function $(e) {
    let {
            classification: i,
            isDsaEligible: t = !1,
            isSpam: a = !1,
            isCoppa: s = !1,
            appealIngestionType: r,
            className: c,
            onClose: o,
            onNext: x,
        } = e,
        N = y(),
        p = i?.explainer_link ?? "",
        h = null != i && null != i.flagged_content && i.flagged_content.length > 0,
        u = (0, _.eu)(i?.description),
        E = !a && !s && (null == r || r === Y.Il.IN_APP),
        S = null != i && ((0, _._g)(i) || h);
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
                    null != o && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: o }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(k.jE, !S && k.bQ, c),
                scrollbarGutter: !1,
                children: [
                    S && (0, n.jsx)(V.U, { flaggedContent: i.flagged_content ?? [] }),
                    (0, n.jsx)(g.E, {
                        className: k.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: I.intl.string(I.t.xsdcxh),
                    }),
                    (0, n.jsx)("div", {
                        className: k.kU,
                        children: (0, n.jsx)(g.E, { variant: "text-md/semibold", children: u }),
                    }),
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
                    !s &&
                        (0, n.jsx)(F, {
                            text: I.intl.string(I.t["Vtyn/7"]),
                            url: p,
                            onClick: () => N(C.ZU.ClickLearnMoreLink),
                        }),
                    E &&
                        t &&
                        (0, n.jsx)(g.E, {
                            className: k.C2,
                            variant: "text-xs/normal",
                            children: I.intl.format(I.t.WMUgCX, {}),
                        }),
                ],
            }),
            E &&
                (0, n.jsx)(l.jl, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(j.$, { variant: "primary", text: I.intl.string(I.t.PDTjLN), onClick: x }),
                }),
        ],
    });
}
var q = t(895473);
function w(e) {
    let { classificationId: i, transitionState: t, initialSlide: o = C.yN.SPEED_BUMP, onClose: d } = e,
        [x, m] = a.useState(o),
        { classification: g, isDsaEligible: N } = (0, c.LJ)(i ?? T.dJq),
        p = g?.is_spam || !1,
        h = g?.is_coppa || !1,
        j = g?.appeal_ingestion_type;
    a.useEffect(() => {
        m(o);
    }, [m, o]);
    let u = a.useCallback(() => {
            G.A.close(), d();
        }, [d]),
        A = a.useCallback(() => {
            let e = C.A8[x]?.next;
            null != e ? m(e) : u();
        }, [x, u]),
        E = a.useCallback(() => {
            let e = C.A8[x]?.prev;
            null != e ? m(e) : u();
        }, [x, u]);
    return (0, n.jsx)(l.EO, {
        "data-migration-pending": !0,
        transitionState: t,
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
                        children: (0, n.jsx)($, {
                            classification: g,
                            onClose: u,
                            onNext: A,
                            isSpam: p,
                            isCoppa: h,
                            appealIngestionType: j,
                            isDsaEligible: N,
                        }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(v, { isDsaEligible: N, onClose: u, onNext: A, onBack: E }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(P, { isDsaEligible: N, onClose: u, onNext: A, onBack: E }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(B, { onNext: A }),
                    }),
                ],
            }),
        }),
    });
}
