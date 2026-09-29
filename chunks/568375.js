l.d(t, { A: () => iM });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(991690),
    u = l(789645),
    o = l(672929),
    d = l(58736),
    c = l(948230),
    f = l(277977),
    m = l(289873),
    h = l(627363),
    g = l(580954),
    x = l(753514),
    p = l(297264),
    v = l(834730),
    b = l(625180),
    j = l(91242),
    y = l(812901),
    k = l(317608),
    N = l(206600),
    w = l(869146),
    A = l(742023),
    S = l(697744),
    E = l(759967),
    C = l(375708),
    I = l(296167);
function M(e) {
    let { className: t } = e,
        { Component: l, events: r, getDuration: i } = (0, S.c)();
    return (
        a.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function l() {
                    ((e = null), null != i()) ? r.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(l));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [r, i]),
        a.useEffect(() => {
            let e = setInterval(r.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [r]),
        (0, n.jsxs)("div", {
            className: t,
            onMouseEnter: r.onMouseEnter,
            onMouseLeave: r.onMouseLeave,
            children: [
                (0, n.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, n.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: I.o,
                    children: C.intl.string(E.default.jTuX7C),
                }),
            ],
        })
    );
}
var T = l(328284);
function P(e) {
    let { title: t, body: l, wide: a = !1, children: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(T.Bf, a && T.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: T.Ux,
                children: [
                    (0, n.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, n.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var _ = l(652215),
    R = l(165610),
    L = l(963691);
function F(e) {
    let { applicationId: t, surface: l } = e,
        { frame: r, state: i } = (0, N.A)({ applicationId: t, surface: l }),
        s = (0, R.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = j.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(_.MLl.ACTIVITY_POPOUT)) return;
                    let l = j.A.getMainFrame()?.id === e;
                    t.intent === R.sV.MAIN
                        ? (l || b.A.promoteFrame(e), b.A.resetFrameLayoutModes(e))
                        : l && b.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = j.A.getFrame(s)) &&
                        ((0, R.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        A.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === R.sV.INLINE && b.A.promoteFrame(s),
                              b.A.updateFrameLayoutMode({ frameId: s, layoutMode: R.y0.PIP }))
                            : e.intent === R.sV.MAIN && b.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case N.n.Launched:
            return (0, n.jsx)(k.A, { frameId: r.id, level: y.A.WithinAppContent, className: L.Z7 });
        case N.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(P, {
                    title: C.intl.string(E.default["4f6Vkr"]),
                    body: C.intl.string(E.default.LJ2q1H),
                }),
            });
        case N.n.NoApplication:
            return (0, n.jsx)(M, { className: L.qs });
        case N.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(P, {
                    title: C.intl.string(E.default.FHOJiH),
                    body: C.intl.string(E.default["1yLQoV"]),
                }),
            });
        case N.n.Error:
            return (0, n.jsxs)("div", {
                className: L.qs,
                children: [
                    (0, n.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: C.intl.string(E.default.MeLWCr),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: L.tj,
                        children: C.intl.string(E.default["1RCbQT"]),
                    }),
                ],
            });
        case N.n.AwaitingLaunch:
        case N.n.Loading:
            return (0, n.jsx)("div", { className: L.qs, children: (0, n.jsx)(m.y, {}) });
    }
}
var D = l(17928),
    O = l(323384),
    $ = l(308528),
    q = l(334738),
    z = l(688438),
    G = l(355622),
    U = l(734057),
    B = l(531685),
    V = l(365971),
    H = l(362417);
function W(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: H.f,
        children: [
            (0, n.jsx)(O.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function K() {
    return (0, n.jsx)("div", { className: H.f, children: (0, n.jsx)(m.y, {}) });
}
function Y(e) {
    let t,
        l,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, h.YY)(r),
        u = i?.bot?.id ?? null,
        o = (0, D.bG)([U.A], () => {
            if (null == u) return null;
            let e = U.A.getDMFromUserId(u);
            return null != e ? U.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        a.useEffect(() => {
            null != t && $.A.preload(_.ME, t);
        }, [t]),
        (l = (0, D.bG)([B.A], () => B.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, V.Xg)();
            return (
                (0, q.yl)(t, e),
                () => {
                    (0, q.dm)(t, e);
                }
            );
        }, [t, l]));
    let [d, c] = a.useState(null),
        f = null != u && d === u;
    return (a.useEffect(() => {
        if (null == u || null != o) return;
        let e = !1;
        return (
            $.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || c(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, o]),
    s)
        ? (0, n.jsx)(K, {})
        : null == u || f
          ? (0, n.jsx)(W, { message: C.intl.string(E.default.bl4eBc) })
          : null == o
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: H.g,
                  children: (0, n.jsx)(z.A, { channel: o, guild: null, chatInputType: G.oU.SIDEBAR }, o.id),
              });
}
var X = l(821609),
    Q = l(887909),
    Z = l(570962),
    J = l(590744);
function ee(e) {
    let {
        label: t,
        title: l,
        subtitle: a,
        header: r,
        body: s,
        actions: u,
        nextStep: o,
        appDetails: d,
        hasContentBackground: c,
        noPadding: f,
        obscured: m,
    } = (0, Q.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, n.jsxs)("section", {
        className: J.Nr,
        "aria-label": t,
        children: [
            (0, n.jsx)("div", {
                className: J.rf,
                children: (0, n.jsx)(Z.A, {
                    obscured: !0 === m,
                    children: (0, n.jsxs)("div", {
                        className: J.Gq,
                        children: [
                            null != l
                                ? (0, n.jsxs)("div", {
                                      className: J.z3,
                                      children: [
                                          (0, n.jsx)(p.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: l,
                                          }),
                                          null != a
                                              ? (0, n.jsx)(v.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: a,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            r,
                            (0, n.jsxs)("div", {
                                className: i()(J.Qs, c ? J.cw : null, f ? J.pN : null),
                                children: [s, null == o ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != u && u.length > 0
                ? (0, n.jsx)("div", {
                      className: J.o1,
                      children: u.map((e, t) => (0, n.jsx)(X.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var et = l(598748),
    el = l(486610),
    en = l(531913),
    ea = l(587895),
    er = l(633075),
    ei = l(946356),
    es = l(139730),
    eu = l(479299),
    eo = l(287809),
    ed = l(58551),
    ec = l(71495);
function ef(e) {
    let { applicationId: t } = e,
        l = (0, D.bG)([eo.default], () => eo.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(em, { applicationId: t, user: l });
}
function em(e) {
    let { applicationId: t, user: l } = e,
        r = (0, D.bG)([ea.A], () => ea.A.getApplication(t)),
        i = a.useMemo(() => new er.R({ applicationId: t }), [t]),
        s = (0, en.A)(l.id, t),
        u = s.surfaceConfigs,
        o = (0, ed.yZ)({
            widgetTop: null != u[et.m.WIDGET_TOP],
            widgetBottom: null != u[et.m.WIDGET_BOTTOM],
            miniProfile: null != u[et.m.MINI_PROFILE],
        });
    return o.hasAny
        ? (0, n.jsx)("div", {
              className: ec.$C,
              children: (0, n.jsxs)("div", {
                  className: ec.PV,
                  children: [
                      o.hasMainCard
                          ? (0, n.jsx)("div", {
                                className: ec.a9,
                                children: (0, n.jsx)(ei.A.Overlay, {
                                    className: ec.Qb,
                                    children: (0, n.jsx)(eu.A, {
                                        user: l,
                                        widget: i,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      o.hasPopoutCard && null != r
                          ? (0, n.jsx)("div", {
                                className: ec.ql,
                                children: (0, n.jsx)(es.A, { application: r, rendererProps: s, renderText: el.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var eh = l(976102);
function eg(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: r,
            previewReady: i,
            previewGate: s,
            availability: u,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        f = (0, o.A)(t, r),
        { data: p, isLoading: v } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != f && (0, g.A)().leaveFrame(f.id);
        }, [f, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: eh.q,
            children: null == s.authorizeProps ? (0, n.jsx)(m.y, {}) : (0, n.jsx)(ee, { ...s.authorizeProps }),
        });
    if (!i) return (0, n.jsx)(M, { className: eh.q });
    if (null == t) return null;
    if (v && null == p) return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    let b = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, x.z3)(d), "aria-label": (0, x.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eh.R,
        ...b,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, n.jsx)(F, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, n.jsx)("div", {
                          className: eh.q,
                          children: (0, n.jsx)(P, {
                              wide: !0,
                              title: C.intl.string(E.default.SGHO9K),
                              body: C.intl.string(E.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(ef, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, n.jsx)(Y, { previewApplicationId: l }) : null,
        ],
    });
}
var ex = l(534890),
    ep = l(738876),
    ev = l(47167),
    eb = l(31717),
    ej = l(372054);
function ey(e) {
    let { channel: t, guild: l, onClose: a } = e,
        r = (0, ev.Ay)(t),
        i = (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: ej.Wx,
        children: [
            (0, n.jsx)(ep.A, { channel: t, draftType: eb.C.ChannelMessage }),
            (0, n.jsxs)(d.Ay, {
                toolbar: i,
                "aria-label": C.intl.string(C.t.BIYAqa),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: ex.ChatIcon, "aria-label": C.intl.string(C.t["/VQax8"]) }),
                    (0, n.jsx)(d.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ej.GZ,
                children: (0, n.jsx)(z.A, { channel: t, guild: l, chatInputType: G.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ek = l(689175),
    eN = l(65593),
    ew = l(29692),
    eA = l(903586),
    eS = l(783791);
function eE(e) {
    return !(0, eS.BL)(e) && !0 !== e.stopRequested;
}
var eC = l(935208);
(l(323874), l(14289), l(35956));
var eI = l(228366),
    eM = l(839214),
    eT = l(673724);
let eP = [],
    e_ = 1,
    eR = (0, eM.D)(() => ({ draftsByProject: {} }));
function eL(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? eP;
}
function eF(e, t) {
    return eL(eR.getState(), e, t);
}
function eD(e, t, l) {
    let { draftsByProject: n } = eR.getState();
    eR.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function eO(e, t, l, n) {
    let a = eF(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (eD(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function e$(e, t) {
    (0, f.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function eq(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && e$(e, t.ref.id));
}
function ez(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = eR.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? eP) l ? eq(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    eR.setState({ draftsByProject: i });
}
function eG(e, t) {
    let l = eF(e, t);
    if (0 !== l.length) {
        for (let t of l) eq(e, t);
        eD(e, t, eP);
    }
}
function eU(e, t) {
    let l = eF(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (eD(e, t, eP), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function eB(e, t) {
    let { clarificationAnswers: l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = eF(e, "chat"),
        a = n.length > 0 && n.every((e) => "ready" === e.status) ? eU(e, "chat") : [];
    (0, f.dv)(e, t, a, { clarificationAnswers: l });
}
(eI.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eR.getState().draftsByProject)) ez(e, { deleteFromWorker: !0 });
}),
    eI.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ez(t, { deleteFromWorker: !1 });
    }));
var eV = l(66708),
    eH = l(74029),
    eW = l(717447),
    eK = l(29080),
    eY = l(46054),
    eX = l(76275);
function eQ(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : C.intl.string(E.default.MdXWEK);
}
function eZ(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        u = (0, eA.B4)(a),
        o = u.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != o &&
            ((t = o.content),
            (l = t.trim()),
            (n = r.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? o
                : null,
        c = u.filter((e) => e !== d),
        f = c.filter((e) => "message" === e.type).at(-1),
        m = !i && "" !== r.trim();
    return {
        streamed: c,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: m,
        closingContent: m ? r.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, eA.Lf)(a) }),
    };
}
(l(134528), l(947204));
var eJ = l(939249),
    e0 = l(478016),
    e1 = l(34136);
function e2(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...u } = e;
    return (0, n.jsxs)("section", {
        className: i()(e1.Nr, r),
        ...u,
        children: [
            (0, n.jsxs)("header", {
                className: i()(e1.wx, null != l && e1.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var e7 = l(113757);
function e5(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        u = null == r;
    return (0, n.jsxs)(eJ.D, {
        className: i()(e7.nM, { [e7.f1]: u, [e7.CZ]: l }),
        onClick: u ? void 0 : () => r(t),
        "aria-label": C.intl.formatToPlainString(E.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": u,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: e7.jo,
                children: [
                    l
                        ? (0, n.jsx)(e0.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: e7.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: e7.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function e3(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(e2, {
        title: C.intl.string(E.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                e5,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var e4 = l(435619),
    e6 = l(866665),
    e8 = l(885574),
    e9 = l(430392),
    te = l(632015),
    tt = l(256905),
    tl = l(824757);
function tn(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: tl.uW,
        children: [
            (0, n.jsxs)("span", {
                className: tl.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function ta() {
    return (0, n.jsx)(e6.m, {
        text: C.intl.string(E.default.DXe2dP),
        children: (0, n.jsx)(eJ.D, {
            className: tl.bk,
            "aria-label": C.intl.string(E.default.Y6y4nQ),
            children: (0, n.jsx)(e8.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function tr(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(tn, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: tl.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: tl.jw,
                              children: (0, n.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function ti(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? O.k : e9.RobotIcon;
    return (0, n.jsxs)("span", {
        className: tl.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: tl.L6,
                      children: [
                          (0, n.jsx)(te.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: C.intl.string(E.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: tl.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: C.intl.string(t ? C.t.IC5Ann : E.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function ts(e) {
    let { projectId: t, design: l } = e,
        { id: r } = l,
        {
            src: i,
            gone: s,
            handleError: u,
        } = (function (e, t) {
            let [l, n] = a.useState(null),
                [r, i] = a.useState(!1),
                [s, u] = a.useState(0);
            return (
                a.useEffect(() => {
                    let l = !1;
                    return (
                        (0, f.PK)(e, t).then(
                            (e) => {
                                l || n(e);
                            },
                            () => {
                                l || (0 === s ? u(1) : i(!0));
                            },
                        ),
                        () => {
                            l = !0;
                        }
                    );
                }, [e, t, s]),
                {
                    src: l,
                    gone: r,
                    handleError: a.useCallback(() => {
                        (n(null),
                            (0, f.n6)(e, t).then(
                                (e) => {
                                    e && 0 === s ? u(1) : i(!0);
                                },
                                () => i(!0),
                            ));
                    }, [e, t, s]),
                }
            );
        })(t, r),
        o = C.intl.string(E.default.FW8UcU),
        d = a.useCallback(() => {
            (0, f.PK)(t, r).then(
                (e) => {
                    (0, tt.R)({
                        items: [{ type: "IMAGE", url: e, alt: o }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, r, o]);
    return s
        ? null
        : (0, n.jsx)(tn, {
              label: C.intl.string(E.default["9W8SbY"]),
              info: (0, n.jsx)(ta, {}),
              children: (0, n.jsx)(eJ.D, {
                  className: tl.xX,
                  onClick: d,
                  "aria-label": C.intl.string(E.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: o, className: tl.sN, onError: u }) : null,
              }),
          });
}
function tu(e) {
    let { projectId: t, proposal: l, onApprove: a } = e;
    return (0, n.jsx)(e2, {
        title: C.intl.string(E.default["60htw+"]),
        trailing: (0, n.jsx)(ti, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: tl.rf,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(ts, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(tn, {
                          label: C.intl.string(E.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: tl.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: tl.Aw,
                                          children: (0, n.jsx)(v.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                l.commands.length > 0
                    ? (0, n.jsx)(tn, {
                          label: C.intl.string(C.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: tl.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: tl.uX,
                                          children: [
                                              (0, n.jsxs)(v.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, n.jsx)(v.E, {
                                                  variant: "experimental/body-md/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e.description,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, n.jsx)(tr, { label: C.intl.string(E.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(tr, { label: C.intl.string(E.default.Cn9qix), names: l.privileged_intents ?? [] }),
                null != a
                    ? (0, n.jsxs)("div", {
                          className: tl.o1,
                          children: [
                              (0, n.jsx)(X.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: C.intl.string(E.default["hG0Y0+"]),
                                  onClick: a,
                              }),
                              (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  tag: "span",
                                  children: C.intl.string(E.default.Vl3IL0),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
var to = l(331322),
    td = l(548118),
    tc = l(71393),
    tf = l(455435);
function tm(e) {
    let { projectId: t } = e,
        l = (0, tf.Ay)(t),
        a = l?.guildId ?? null,
        r = (0, D.bG)([tc.A], () => (null == a ? null : tc.A.getGuild(a)));
    return null == l || l.status?.state !== "unpublished"
        ? null
        : (0, n.jsxs)(to.B, {
              gap: 8,
              align: "start",
              children: [
                  null != l.disabledReason
                      ? (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: l.disabledReason })
                      : null,
                  (0, n.jsxs)(to.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "center",
                      children: [
                          (0, n.jsx)(X.$, {
                              variant: "primary",
                              size: "sm",
                              loading: l.publishing,
                              disabled: l.disabled,
                              onClick: () => l.run("card"),
                              text: l.label,
                          }),
                          null != r
                              ? (0, n.jsxs)(to.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    align: "center",
                                    children: [
                                        (0, n.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: C.intl.string(E.default.FLbAwN),
                                        }),
                                        (0, n.jsx)(td.Ay, { guild: r, size: td.Ay.Sizes.SMOL }),
                                        (0, n.jsx)(v.E, {
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                let t = Array.from(e);
                                                if (t.length <= 24) return e;
                                                let l = t.slice(0, 23).join("");
                                                return `${l.trimEnd()}\u{2026}`;
                                            })(r.name),
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  }),
              ],
          });
}
var th = l(314116),
    tg = l(364522),
    tx = l(406810),
    tp = l(381849),
    tv = l(977628);
function tb(e) {
    let t = Date.parse(e);
    return Number.isNaN(t)
        ? { relative: null, absolute: null }
        : {
              relative: (0, tp.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: tp._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function tj(e) {
    return (0, th.A)({
        title: C.intl.string(E.default.qOUOPE),
        subtitle: C.intl.string(E.default.k2JBj5),
        confirmText: C.intl.string(E.default["+sRK16"]),
        variant: "critical",
        onConfirm: e,
    });
}
function ty(e) {
    let t,
        { projectId: l, onClose: r, onRestore: i } = e,
        [s, o] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, f.ST)(l)
                    .then((t) => {
                        e || o({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || o({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [l]),
        (t =
            "loading" === s.status
                ? (0, n.jsx)("div", { className: tv.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: tv.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: tv.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(tg.Ip, {
                          className: tv.p_,
                          children: (0, n.jsx)("div", {
                              className: tv.jO,
                              children: s.entries.map((e) => {
                                  let t = tb(e.authoredAt);
                                  return (0, n.jsxs)(
                                      eJ.D,
                                      {
                                          className: tv.f_,
                                          onClick: () =>
                                              tj(() => {
                                                  (r(), i(e));
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: tv.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != t.relative &&
                                                  (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: t.absolute ?? void 0,
                                                      children: t.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, n.jsxs)("section", {
            className: tv.nd,
            "aria-label": C.intl.string(E.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: tx.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: tv.rf, children: t }),
            ],
        })
    );
}
var tk = l(584698);
function tN(e) {
    let { proposal: t, onRestore: l } = e,
        a = tb(t.authored_at);
    return (0, n.jsx)(e2, {
        title: C.intl.string(E.default.khdMoL),
        children: (0, n.jsxs)("div", {
            className: tk.r,
            children: [
                (0, n.jsxs)("div", {
                    className: tk.z,
                    children: [
                        (0, n.jsx)(v.E, { variant: "text-md/medium", children: t.subject }),
                        null != a.relative
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: a.absolute ?? void 0,
                                  children: a.relative,
                              })
                            : null,
                    ],
                }),
                null != l
                    ? (0, n.jsx)(X.$, {
                          variant: "secondary",
                          size: "sm",
                          text: C.intl.string(E.default.eSDVDt),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var tw = l(530557),
    tA = l(872162),
    tS = l(192308),
    tE = l(479191);
function tC(e) {
    let { projectId: t, request: r, awaiting: i } = e,
        s = a.useCallback(() => {
            (0, tS.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]),
        u = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: tw.R })), [r.fields]);
    return (0, n.jsxs)("article", {
        className: tE.L,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: null != i ? "text-brand" : "text-muted",
                tag: "span",
                children: C.intl.string(null != i ? E.default.sKNh1M : E.default["/e28TK"]),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : C.intl.string(E.default.jxvtin),
            }),
            (0, n.jsx)(tA.C, { label: C.intl.string(E.default["/e28TK"]), size: "xs", items: u }),
            (0, n.jsx)("div", {
                className: tE.s,
                children: (0, n.jsx)(X.$, {
                    variant: "primary",
                    size: "sm",
                    onClick: s,
                    text: C.intl.string(E.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var tI = l(408278),
    tM = l(349735),
    tT = l(973e3);
function tP(e) {
    let { projectId: t, request: l, onDismiss: a } = e;
    return (0, n.jsx)(tM.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: r, saving: i, submit: s } = e;
            return (0, n.jsxs)("form", {
                className: tT.Mk,
                onSubmit: (e) => {
                    (e.preventDefault(), s());
                },
                children: [
                    (0, n.jsxs)("div", {
                        className: tT.TS,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                tag: "span",
                                children: C.intl.string(E.default.wgDhiQ),
                            }),
                            null == a
                                ? null
                                : (0, n.jsx)(tI.K, {
                                      icon: u.P,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: a,
                                      "aria-label": C.intl.string(E.default["6UTDHm"]),
                                  }),
                        ],
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: null != l.note && "" !== l.note ? l.note : C.intl.string(E.default["V+DBhs"]),
                    }),
                    t,
                    (0, n.jsx)("div", {
                        className: tT.p0,
                        children: (0, n.jsx)(X.$, {
                            variant: "primary",
                            size: "sm",
                            type: "submit",
                            loading: i,
                            disabled: !r,
                            text: C.intl.string(E.default.Tuz9vw),
                        }),
                    }),
                ],
            });
        },
    });
}
var t_ = l(196582);
let tR = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    tL = {
        snail: () => E.default["2l3AEQ"],
        goat: () => E.default["+FPL+I"],
        frog: () => E.default.w4GOfR,
        bunny: () => E.default.XmZT9M,
        cat: () => E.default.NnydwQ,
        caterpillar: () => E.default["4iXcNT"],
        butterfly: () => E.default.DoTGt5,
        dog: () => E.default["9zxqmP"],
        spider: () => E.default.HF0T3L,
        bee: () => E.default.XTzDga,
        bot: () => E.default.abtC2b,
    },
    tF = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function tD(e) {
    return { ...tF[e], name: C.intl.string(tL[e]()) };
}
function tO(e) {
    return tR.includes(e) ? tD(e) : void 0;
}
function t$(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % tR.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, tR[(t + l) % tR.length]);
            }),
            n
        );
    })(e))
        t.set(l, tD(n));
    return t;
}
var tq = l(683063),
    tz = l(705754),
    tG = l(883455),
    tU = l(13699);
function tB(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        u = l.task,
        o = "running" === u.status,
        d = (0, eA.SY)(l.steps),
        c = o
            ? null != d
                ? (0, eA.WQ)(d)
                : eQ(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(eQ(e));
                  switch (e.status) {
                      case "failed":
                          return C.intl.formatToPlainString(E.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return C.intl.formatToPlainString(E.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return C.intl.formatToPlainString(E.default.vuv9bT, {
                                  task: t,
                                  duration: (0, eX.MB)(e.durationMs),
                              });
                          return C.intl.formatToPlainString(E.default.KS49RN, { task: t });
                      default:
                          return C.intl.formatToPlainString(E.default.KS49RN, { task: t });
                  }
              })(u),
        f = o ? d : void 0,
        m =
            u.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, n.jsx)("ol", {
                                    className: tU.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            tG.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: tU.iq,
                                      children: (0, n.jsx)(tz.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(t_.A, {
        glyph: (0, n.jsx)(tq.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: eQ(u),
            position: "left",
            children: (0, n.jsx)("span", {
                className: tU.nC,
                children: (0, n.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: o,
        settled: !o,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
l(321073);
var tV = l(847374),
    tH = l(320448),
    tW = l(140735),
    tK = l(329456);
let tY = [];
function tX(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tK.xL, {
            [tK.Vb]: "in_progress" === t,
            [tK.cT]: "completed" === t,
            [tK.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return C.intl.string(E.default.TkPGOH);
                case "in_progress":
                    return C.intl.string(E.default["oK+fmd"]);
                case "unfinished":
                    return C.intl.string(E.default["1ley3g"]);
                default:
                    return C.intl.string(E.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: tK.Qd,
                itemClassName: tK.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tK.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tK.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tQ(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tY), [l, t]),
        i = a.useMemo(() => new Set(r.map((e) => e.key)), [r]),
        s = r.map((e) => e.key).join("\0"),
        [u, o] = a.useState(r),
        [d, c] = a.useState(s),
        [f, m] = a.useState(!1);
    d !== s && (c(s), o([...r, ...u.filter((e) => !i.has(e.key))]), 0 === r.length && m(!1));
    let h = u.some((e) => !i.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(r), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, r, l]),
        a.useEffect(() => {
            if (!l || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, u.length]),
        0 === u.length)
    )
        return null;
    let g = u.slice(0, 3),
        x = u.length - g.length;
    return (0, n.jsxs)("span", {
        className: tK.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    tq.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tK.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, n.jsx)(s, { size: 16, alt: a, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tK.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tZ(e) {
    let t,
        { todos: l, provisional: r, agents: s, live: u = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [l, n] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, u] = a.useState(() => new Set());
            return (
                r !== t && (i(t), n(new Set(e)), u(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                a.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => u(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(a.useMemo(() => l.map((e) => e.id), [l])),
        d =
            ((t = (s ?? tY).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tY) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tK.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || u ? t : "unfinished");
                return (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tK.AS, { [tK.J1]: "completed" === l }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tX, { status: l }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: tK.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", {
                                    className: tK.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, n.jsx)(tQ, { agents: d.get(e.id) ?? tY, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tK.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tX, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tK.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tK.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tJ(e) {
    let { todos: t, provisional: l, agents: r, announceProgress: i = !0, live: s = !0, superseded: u = !1 } = e,
        o = a.useId(),
        [d, c] = a.useState(!u),
        [f, m] = a.useState(u);
    f !== u && (m(u), c(!u));
    let h = a.useCallback(() => c((e) => !e), []),
        { completed: g, total: x } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === x) return null;
    let p = C.intl.formatToPlainString(E.default.bQvqly, { completed: g, total: x }),
        b = C.intl.formatToPlainString(E.default["QG/EiF"], { completed: g, total: x }),
        j = d ? tV.a : tH._;
    return (0, n.jsxs)(e2, {
        title: C.intl.string(E.default.qCRC6c),
        trailing: (0, n.jsxs)("span", {
            className: tK.ZY,
            children: [
                (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: p }),
                u
                    ? (0, n.jsx)(eJ.D, {
                          className: tK.L$,
                          onClick: h,
                          "aria-expanded": d,
                          "aria-controls": o,
                          "aria-label": C.intl.string(d ? E.default.fIBJas : E.default.SVhXLT),
                          children: (0, n.jsx)(j, { size: "xs", color: "currentColor" }),
                      })
                    : null,
            ],
        }),
        className: tK.Nr,
        headerClassName: d ? void 0 : tK.RG,
        "data-vibegrations-todo-card": !0,
        "data-superseded": u ? "true" : void 0,
        children: [
            i && !u ? (0, n.jsx)(tW.A, { role: "status", "aria-live": "polite", children: b }) : null,
            (0, n.jsx)("div", {
                id: o,
                className: tK.rf,
                hidden: !d,
                children: (0, n.jsx)(tZ, { todos: t, provisional: l, agents: r, live: s }),
            }),
        ],
    });
}
var t0 = l(744239),
    t1 = l(229775),
    t2 = l(165648);
function t7(e) {
    let t = t$(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tO(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: eQ(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function t5(e) {
    let {
            projectId: t,
            steps: l,
            active: r = !1,
            turnActive: i = r,
            checklistSuperseded: s = !1,
            durationMs: u,
            interrupted: o = !1,
            todos: d,
            provisionalTodo: c,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: x,
        } = e,
        p = a.useMemo(() => (0, eA.GO)(l, { turnActive: r }), [l, r]),
        v = a.useMemo(
            () =>
                null == f
                    ? p
                    : {
                          ...p,
                          steps: p.steps.filter((e) => e.segment === f),
                          tasks: p.tasks.filter((e) => e.task.segment === f),
                      },
            [p, f],
        );
    if (o)
        return (0, n.jsx)("ol", {
            className: tU.pj,
            "data-live": !1,
            children: (0, n.jsx)(t_.A, {
                glyph: (0, n.jsx)(eK.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(E.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let b = r ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? u) : void 0)),
        j = m ? ((0, eA.lt)(l) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        N = t$(k.map((e) => e.taskId)),
        w = !g && (r || k.some((e) => "running" === e.task.status)),
        A = t7(k);
    return (0, n.jsx)(t_.l.Provider, {
        value: k.length,
        children: (0, n.jsxs)("ol", {
            className: tU.pj,
            "data-live": w,
            children: [
                (0, n.jsx)(eW.A, {
                    projectId: t,
                    steps: v.steps,
                    fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: g,
                    durationMs: b,
                    connectsDown: k.length > 0,
                    tier: p.turn?.tier,
                }),
                k.map((e, l) => {
                    let a = null != e.task.helperMark ? tO(e.task.helperMark) : void 0,
                        r = a ?? N.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              tB,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != a && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: l < k.length - 1,
                              },
                              e.taskId,
                          );
                }),
                y
                    ? (0, n.jsx)("li", {
                          className: tU.YO,
                          children: (0, n.jsx)(tJ, { todos: j, provisional: c, agents: A, live: i, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function t3(e) {
    let {
            projectId: t,
            steps: l,
            content: r,
            proposal: s,
            ideas: u,
            attachments: o,
            secretRequest: d,
            secretRequestAwaiting: c,
            settingsRequest: f,
            publishCta: m,
            onPickIdea: h,
            pickedIdeaIds: g,
            onApprovePlan: x,
            sideReply: p = !1,
            hoistedProse: b = !1,
            hoistedAttachmentsHost: j,
            restoreProposal: y,
            onRestoreProposal: k,
        } = e,
        N = a.useMemo(
            () => eZ({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != o && o.length > 0 }),
            [l, r, s, o],
        ),
        { streamed: w, lastStreamedMessage: A, showsClosingMessage: S, closingContent: I } = N,
        M = (b ? j : void 0) ?? N.attachmentsHost,
        T = S && !b,
        P = null == o ? null : (0, n.jsx)(e4.A, { projectId: t, attachments: o }),
        _ = null == P ? null : (0, n.jsx)("div", { className: tU.MT, children: P }),
        R = p
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: tU.ue,
        children: [
            w.length > 0 && !b
                ? (0, n.jsx)("ol", {
                      className: tU.dO,
                      children: w
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: tU.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: t2.PT,
                                              children: eY.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === M && e === A ? _ : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(tu, { projectId: t, proposal: s, onApprove: x })
                : T
                  ? (0, n.jsxs)("div", {
                        className: i()(tU.ky, t1.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(t2.PT, tU.cW),
                                children: eY.A.parse(I, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? _ : null,
                            R,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(tU.ky, t1.XR, { [t0.O]: null != c }),
                      children: (0, n.jsx)(tC, { projectId: t, request: d, awaiting: c }),
                  })
                : null,
            null != f
                ? (0, n.jsx)("div", {
                      className: i()(tU.ky, t1.XR),
                      children: (0, n.jsx)(tP, { projectId: t, request: f }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || T) ? null : P,
            null != m ? (0, n.jsx)(tm, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, n.jsx)(e3, { ideas: u, pickedIdeaIds: g, onPick: h }) : null,
            null != y ? (0, n.jsx)(tN, { proposal: y, onRestore: k }) : null,
            T ? null : R,
        ],
    });
}
var t4 = l(864970),
    t6 = l(146806),
    t8 = l(475358),
    t9 = l(81369),
    le = l(922016),
    lt = l(980707),
    ll = l(477782),
    ln = l(717400),
    la = l(663341),
    lr = l(826745),
    li = l(783977),
    ls = l(559647),
    lu = l(775602),
    lo = l(234320),
    ld = l(435558),
    lc = l.n(ld),
    lf = l(506774);
let lm = "VibegrationsComposerDrafts";
function lh() {
    return lf.w.get(lm) ?? {};
}
let lg = new Map(),
    lx = lc().throttle(() => {
        if (0 === lg.size) return;
        let e = lh();
        for (let [t, l] of lg) "" === l ? delete e[t] : (e[t] = l);
        (lg.clear(), lf.w.set(lm, e));
    }, 1e3);
class lp extends D.Ay.Store {
    getDraft(e) {
        let t = lg.get(e);
        return null != t ? t : (lh()[e] ?? "");
    }
}
let lv = new lp(eI.h, {
    LOGOUT: function () {
        return (lg.clear(), lx.cancel(), lf.w.remove(lm), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (lg.set(t, l), lx(), "" === l && lx.flush(), !1);
    },
});
var lb = l(43105),
    lj = l(252510);
let ly = [E.default.ZK2O25, E.default["122Ir6"], E.default["9KCASa"]];
function lk(e) {
    let { targetElementRef: t, onDismiss: l } = e,
        r = a.useMemo(() => [{ text: C.intl.string(E.default.sZCqrE), onClick: l }], [l]);
    return (0, n.jsx)(lb.A, {
        targetElementRef: t,
        title: C.intl.string(E.default.n8wtkv),
        body: C.intl.format(E.default.Oaq2Cc, {
            content: (0, n.jsxs)("div", {
                className: lj.r,
                children: [
                    C.intl.string(E.default.cK0dk1),
                    (0, n.jsx)("ul", {
                        className: lj.e,
                        children: ly.map((e, t) => (0, n.jsx)("li", { children: C.intl.string(e) }, t)),
                    }),
                ],
            }),
        }),
        position: "top",
        actions: r,
        onRequestClose: l,
    });
}
var lN = l(379307),
    lw = l(285796),
    lA = l(590380),
    lS = l(298668);
let lE = eT.Is;
function lC(e, t, l, n) {
    let a = eF(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: e_++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (eD(e, t, [
            ...eF(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    "errorText" in n
                        ? eO(e, t, l.localId, { status: "error", errorText: n.errorText })
                        : eO(e, t, l.localId, { status: "ready", ref: n })
                          ? setTimeout(
                                () =>
                                    eO(e, t, l.localId, {
                                        status: "error",
                                        errorText: C.intl.string(E.default.HL9CT6),
                                    }),
                                eT.$f - 3e5,
                            )
                          : e$(e, n.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        eO(e, t, l.localId, { status: "error", errorText: C.intl.string(E.default.GwEHvn) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= lE)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: C.intl.formatToPlainString(E.default.DlX57a, { count: lE }),
                    },
                };
            if (!(0, eT.x5)(e.size, t))
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: C.intl.formatToPlainString(E.default.cI7t94, { size: (0, eT.ZJ)((0, eT.yr)(t)) }),
                    },
                };
            let r = eT.Wb.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function lI(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        r = eR.useState((e) => eL(e, t, l)),
        i = a.useCallback((e) => lC(t, l, e, n), [t, l, n]),
        s = a.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), i(t));
            },
            [i],
        ),
        u = a.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = eF(t, l)).find((t) => t.localId === e)) &&
                    (eq(t, a),
                    eD(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        o = a.useCallback(() => eU(t, l), [t, l]);
    return {
        drafts: r,
        addFiles: i,
        pasteFiles: s,
        removeDraft: u,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: o,
    };
}
function lM(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(lA.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: lS.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: lS.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(E.default["3HWvgk"]),
                children: (0, n.jsx)(lw.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lT = l(789438);
let lP = "text-md/normal",
    l_ = null;
function lR(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, u] = a.useState(t),
        o = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [f, m] = a.useState(0),
        [h, g] = a.useState(0),
        [x, p] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = c.current;
        function n() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = d.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (g(i + r), m(s));
            let u = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                f = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : u / c;
            p({
                frontFrom: 1e3 * (0, t6._R)(f),
                frontTo: 1e3 * (0, t6._R)(h),
                backFrom: 1e3 * (0, t6.T)(f),
                backTo: 1e3 * (0, t6.T)(h),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        a.useEffect(() => {
            c.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, j] = a.useState(0),
        [y, k] = a.useState(null),
        N = a.useRef(!1),
        w = a.useCallback(() => {
            (k(N.current ? (l ? "through" : "out") : l ? "in" : null), j((e) => e + 1));
        }, [l]);
    a.useEffect(() => {
        N.current = l;
    }, [l, t]);
    let A = "in" === y ? x.backFrom : x.frontFrom,
        S = "out" === y ? x.frontTo : x.backTo,
        I = (0, D.bG)([lu.Ay], () => lu.Ay.useReducedMotion),
        M = t === C.intl.string(E.default.Jj8Ftb),
        T = s === t && M;
    function P(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(lT.VT, { [lT.qk]: a }),
            style: a
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, n.jsx)(t8.e, { shortcut: "tab", className: lT.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(t4.o, {
                text: t,
                variant: lP,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(lT.xM, { [lT.s2]: r }),
                onStart: w,
                onComplete: () => u(t),
            }),
            P(lT.IS, l || (!I && "out" === y), o),
            (0, n.jsx)("span", {
                ref: d,
                className: lT.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: lP, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: lT.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: lP, tag: "span", className: lT.xM, children: t }),
                          P(lT.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function lL(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: u,
            onInterrupt: o,
            onUploadFile: d,
            onApprove: f,
            onImport: m,
            suggestion: h,
            questionOpen: g = !1,
            tipOpen: x = !1,
            onDismissTip: p,
            hasPendingContext: v = !1,
            modelSettings: b,
            onModelSettingsChange: j,
        } = e,
        [y, k] = a.useState(() => lv.getDraft(t)),
        N = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), k(e));
            },
            [t],
        ),
        [w, A] = a.useState(t);
    w !== t && (A(t), k(lv.getDraft(t)));
    let S = (0, D.bG)([lu.Ay], () => lu.Ay.isSubmitButtonEnabled),
        [I, M] = a.useState(!1);
    a.useEffect(() => {
        i || M(!1);
    }, [i]);
    let T = a.useRef(null),
        {
            drafts: P,
            addFiles: R,
            pasteFiles: L,
            removeDraft: F,
            settled: O,
            takeRefs: $,
        } = lI({ projectId: t, surface: "chat", onUploadFile: d }),
        q = "" !== y.trim() || P.length > 0 || v,
        z = l && q && O,
        [G, U] = a.useState(null);
    a.useEffect(() => {
        if (null == G) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => U(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [G]);
    let B = a.useCallback(() => {
            if (!z) return;
            p?.();
            let e = $();
            u(y, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == l_ && (l_ = document.createElement("canvas").getContext("2d"));
                let i = l_;
                if (null == i) return r;
                let s = getComputedStyle(e);
                i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let u =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                if (u <= 0 || i.measureText(r).width <= u) return r;
                let o = 0,
                    d = r.length;
                for (; o < d;) {
                    let e = Math.ceil((o + d) / 2);
                    i.measureText(r.slice(0, e)).width <= u ? (o = e) : (d = e - 1);
                }
                let c = r.slice(0, o),
                    f = c.lastIndexOf(" ");
                return (f > 0 ? c.slice(0, f) : c).trimEnd();
            })(Q.current?.querySelector("textarea") ?? null, ei.current, y);
            ("" !== t && U(t), N(""));
        }, [z, y, u, $, N, p]),
        V = a.useCallback(
            (e) => {
                (e.preventDefault(), B());
            },
            [B],
        ),
        H = a.useCallback(() => {
            null == o || I || (M(!0), o());
        }, [o, I]),
        W = null == h || "" !== y || !l || r || s || v ? null : h,
        K = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != o && !I) {
                    (e.preventDefault(), e.stopPropagation(), H());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != W) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), N(W));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), B());
            },
            [B, f, i, o, I, H, W, N],
        ),
        Y = a.useCallback(
            (e) => {
                l && L(e);
            },
            [l, L],
        );
    (0, lo.Vo)({
        event: _.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return Y(t);
        },
    });
    let X = a.useCallback(
            (e) => {
                (R(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [R],
        ),
        Q = a.useRef(null),
        Z = a.useRef(null),
        [J, ee] = a.useState(0),
        [et, el] = a.useState(!1);
    a.useEffect(() => {
        if (0 === y.length) return void el(!1);
        let e = Q.current?.querySelector("textarea");
        if (null != e) {
            let t = lO(e);
            null != t && ee(t);
        }
        el(!0);
        let t = setTimeout(() => el(!1), lF);
        return () => clearTimeout(t);
    }, [y]);
    let en = a.useMemo(() => ({ "--custom-glow-x": `${J}px` }), [J]),
        ea = et ? ` ${lT.EB}` : "",
        er = s
            ? C.intl.string(E.default.pGFXZ0)
            : r
              ? C.intl.string(E.default.JeM47J)
              : l
                ? v
                    ? C.intl.string(E.default.Bs7bUv)
                    : g
                      ? C.intl.string(E.default.M3ovXY)
                      : C.intl.string(i ? E.default["67PpcP"] : E.default.ahRdoJ)
                : C.intl.string(E.default.nm4w9P),
        ei = a.useRef(0),
        es = a.useRef(null),
        eu = a.useCallback((e) => {
            if ((es.current?.disconnect(), null == e)) return;
            ei.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                ei.current = e.clientWidth;
            });
            (t.observe(e), (es.current = t));
        }, []),
        eo = a.useId(),
        ed = null != W,
        ec = G ?? W ?? er,
        ef = "" === y && "" !== ec;
    return (0, n.jsxs)("form", {
        onSubmit: V,
        className: lT.DA,
        children: [
            P.length > 0
                ? (0, n.jsx)("div", {
                      className: lT.lN,
                      children: P.map((e) => (0, n.jsx)(lM, { draft: e, onRemove: F }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${lT.wg} ${lT.LP}${ea}`, style: en, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${lT.wg} ${lT.L3}${ea}`, style: en, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lT.VA,
                ref: Q,
                children: [
                    (0, n.jsx)("input", {
                        ref: T,
                        type: "file",
                        multiple: !0,
                        onChange: X,
                        className: lT.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == m
                        ? (0, n.jsx)(e6.m, {
                              text: C.intl.string(E.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: Z,
                                  type: "button",
                                  className: `${lT.Y0} ${lT.nu}`,
                                  disabled: !l,
                                  onClick: () => T.current?.click(),
                                  "aria-label": C.intl.string(E.default.d6Rqlu),
                                  children: (0, n.jsx)(t9.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: lT.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(le.Y, {
                              targetElementRef: Z,
                              position: "top",
                              align: "left",
                              animation: le.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(lt.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(ll.rX, {
                                          children: [
                                              (0, n.jsx)(ll.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: t9.H,
                                                  leadingAccessory: { type: "icon", icon: t9.H },
                                                  action: () => T.current?.click(),
                                              }),
                                              null != m
                                                  ? (0, n.jsx)(ll.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(E.default.edKajy),
                                                        iconLeft: ln.q,
                                                        leadingAccessory: { type: "icon", icon: ln.q },
                                                        action: m,
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  });
                              },
                              children: (e, t) => {
                                  let { isShown: a } = t;
                                  return (0, n.jsx)("button", {
                                      ...e,
                                      ref: Z,
                                      type: "button",
                                      className: `${lT.Y0} ${lT.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(la.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: lT.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, n.jsx)("div", {
                              ref: eu,
                              className: lT.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(lR, { text: ec, offering: ed && null == G, typed: null != G }),
                          })
                        : null,
                    (0, n.jsx)(lr.y, {
                        value: y,
                        onChange: (e) => N(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: Y,
                        placeholder: ef ? "" : er,
                        disabled: !l,
                        "aria-label": C.intl.string(E.default.OPr66w),
                        "aria-describedby": ef ? eo : void 0,
                        rows: 1,
                        className: lT.jp,
                    }),
                    ef ? (0, n.jsx)(tW.A, { id: eo, children: er }) : null,
                    (0, n.jsx)("div", {
                        className: lT.Sz,
                        children:
                            i && null != o
                                ? (0, n.jsx)(e6.m, {
                                      text: C.intl.string(E.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${lT.Y0} ${lT.$E}`,
                                          disabled: I,
                                          onClick: H,
                                          "aria-label": C.intl.string(E.default.KdgI4k),
                                          children: (0, n.jsx)(eK.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != j
                                  ? (0, n.jsx)(lN.A, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${lT.Y0} ${lT.$E}`,
                                        icon: (0, n.jsx)(li.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    S
                        ? (0, n.jsxs)("div", {
                              className: lT.fF,
                              children: [
                                  (0, n.jsx)("div", { className: lT.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: lT.rt,
                                      disabled: !z,
                                      "aria-label": C.intl.string(E.default["22GHMt"]),
                                      children: (0, n.jsx)(ls.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            x && null != p ? (0, n.jsx)(lk, { targetElementRef: Q, onDismiss: p }) : null,
        ],
    });
}
let lF = 1500,
    lD = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function lO(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = lO.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (lO.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of lD) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
lO.mirror = null;
var l$ = l(442433),
    lq = l(972786),
    lz = l(320095),
    lG = l(963852),
    lU = l(521981),
    lB = l(763754),
    lV = l(491182),
    lH = l(438729),
    lW = l(622868),
    lK = l(448368),
    lY = l(837528),
    lX = l(439762),
    lQ = l(715628),
    lZ = l(752636),
    lJ = l(9842),
    l0 = l(589022),
    l1 = l(95701),
    l2 = l(994500),
    l7 = l(967198);
let l5 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function l3(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function l4(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function l6(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = l4(e, t),
        r = e.codePointAt(t);
    if (
        (null != r &&
            (8205 === r ||
                (r >= 65024 && r <= 65039) ||
                (r >= 127995 && r <= 127999) ||
                (r >= 768 && r <= 879) ||
                (r >= 8400 && r <= 8447) ||
                (r >= 65056 && r <= 65071) ||
                (r >= 917536 && r <= 917631))) ||
        8205 === a
    )
        return !0;
    if (l3(a) && l3(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && l3(l4(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function l8(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([lu.Ay], () => lu.Ay.useReducedMotion),
        r = l && !n,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        u = i;
    (u.target !== e &&
        (u = {
            target: e,
            length: r
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && l6(t, r);) r--;
                      return r;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== i && s(u));
    let o = r && u.length < e.length,
        d = a.useRef(u);
    a.useLayoutEffect(() => {
        d.current = u;
    });
    let c = a.useRef(0),
        f = a.useRef(0);
    (a.useEffect(() => {
        if (o)
            return (
                (f.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let l = 0 === f.current ? 32 : t - f.current;
                    if (l >= 32) {
                        f.current = t;
                        let e = d.current,
                            n = (function (e) {
                                let { target: t, revealed: l, elapsedMs: n } = e,
                                    a = Math.min(Math.max(l, 0), t.length),
                                    r = t.length - a;
                                if (r <= 0) return a;
                                if (r > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && l5.has(e.charAt(n - 1));) n--;
                                    return l5.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && l6(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [o]),
        a.useEffect(() => {
            if (o)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [o]));
    let m = Math.min(u.length, e.length);
    return { text: m >= e.length ? e : e.slice(0, m), revealing: r && m < e.length };
}
var l9 = l(725592),
    ne = l(73432),
    nt = l(365199),
    nl = l(194085),
    nn = l(734495),
    na = l(441136);
function nr(e) {
    let { message: t, onClose: l } = e,
        a = (0, nn.A)(t);
    return (0, n.jsx)(lt.W, {
        navId: "vibegrations-message-actions",
        "aria-label": C.intl.string(C.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(ll.rX, { children: a }),
    });
}
function ni(e) {
    let { message: t, groupStart: l } = e,
        [r, s] = a.useState(!1),
        u = a.useRef(null),
        o = a.useCallback(() => s((e) => !e), []),
        d = a.useCallback(() => s(!1), []);
    return null == (0, nn.A)(t)
        ? null
        : (0, n.jsx)("div", {
              className: i()(na.QE, { [na.Rn]: l, [na.vg]: r }),
              children: (0, n.jsx)(nl.Ay, {
                  children: (0, n.jsx)(le.Y, {
                      targetElementRef: u,
                      renderPopout: (e) => {
                          let { closePopout: l } = e;
                          return (0, n.jsx)(nr, { message: t, onClose: l });
                      },
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      align: "top",
                      animation: le.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: l, ...a } = e,
                              { isShown: r } = t;
                          return (0, n.jsx)(nl.qv, {
                              ref: u,
                              label: C.intl.string(C.t["UKOtz+"]),
                              icon: nt.MoreHorizontalIcon,
                              selected: r,
                              onClick: o,
                              ...a,
                          });
                      },
                  }),
              }),
          });
}
let ns = (0, l1.createChannelRecord)({ id: "vibegrations-builder", type: _.rbe.DM }),
    nu = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function no(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(na.Yq, { [na.x1]: t }), children: e });
}
function nd(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nc(e, t, l) {
    let { content: r } = (0, lX.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: ns, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(lH.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lQ.A)(i, r);
}
function nf(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lY.m)(e, ns, t.usernameProfile, r),
        u = (0, lY.Jo)(t.avatarProfile, r),
        o = (0, D.bG)([l7.A], () => l7.A.getGuildId()),
        d = (0, D.bG)([eo.default], () => eo.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eo.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(l0.A, { ...t, user: l, currentUser: d, guildId: o ?? void 0 });
            },
            [d, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: i,
        renderPopout: c,
        guildId: o ?? void 0,
    };
}
function nm(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, lU.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: na.GV,
                              children: [
                                  (0, n.jsx)(ne.A, { className: na.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, D.cf)(
            [l2.A],
            () => ({
                isReplyAuthorBlocked: l2.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: l2.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, lB.X4)(l),
        c = (0, lB.X4)(t),
        f = nf(l);
    return (0, n.jsx)(lK.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: ns,
        referencedMessage: { state: lJ.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != i,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: i,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function nh(e) {
    let { message: t, author: l } = e,
        a = nf(t);
    return (0, n.jsx)(lW.Ay, {
        message: t,
        channel: ns,
        author: l,
        guildId: a.guildId,
        subscribeToGroupId: t.id,
        renderPopout: a.renderPopout,
        showAvatarPopout: a.showAvatarPopout,
        showUsernamePopout: a.showUsernamePopout,
        onClickAvatar: a.onClickAvatar,
        onClickUsername: a.onClickUsername,
        onPopoutRequestClose: a.onPopoutRequestClose,
    });
}
function ng(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(() => (0, l9.Y)(r), [r]);
    let u = (0, D.bG)(
            [eo.default],
            () => (0, l9.T)(r, null != r ? eo.default.getUser(r) : null, eo.default.getCurrentUser()),
            [r],
        ),
        o = a.useMemo(() => (0, lB.FT)(u, null), [u]),
        d = a.useMemo(() => (0, ew.LL)(t), [t]),
        c = d?.body ?? t,
        f = a.useMemo(() => {
            if (null == u) return null;
            let e = (0, lG.Ay)({ channelId: ns.id, content: c, author: u });
            return (0, lz.rh)({ ...e, timestamp: nd(l, e.timestamp), state: _.cmJ.SENT });
        }, [c, u, l]);
    return null == f
        ? null
        : (0, n.jsx)(nx, { message: f, author: o, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function nx(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        u = nc(t, a);
    return (0, n.jsx)(lV.A, {
        className: na.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(nh, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, n.jsxs)("div", {
                      className: na.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: na.GV,
                              children: [
                                  (0, n.jsx)(ne.A, { className: na.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: na.WO, children: u }),
                      ],
                  }),
        childrenAccessories: no(i, "" !== a),
        childrenButtons: (0, n.jsx)(ni, { message: t, groupStart: s }),
    });
}
function np(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
        } = e,
        { text: d, revealing: c } = l8(t, { streaming: o }),
        f = a.useMemo(() => (0, lB.FT)(null, null), []),
        m = a.useMemo(() => ({ ...f, nick: "Conjure", colorString: "var(--text-brand)" }), [f]),
        h = i?.userId,
        g = (0, D.bG)(
            [eo.default],
            () => (0, l9.T)(h, null != h ? eo.default.getUser(h) : null, eo.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, ew.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, lG.Ay)({ channelId: ns.id, content: x?.body ?? i.content, author: g });
            return (0, lz.rh)({ ...e, id: i.id, timestamp: nd(i.createdAt, e.timestamp), state: _.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: ns.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, lG.Ay)({ channelId: ns.id, content: d, author: nu });
            return (0, lz.rh)({
                ...e,
                timestamp: nd(l, e.timestamp),
                state: _.cmJ.SENT,
                ...(null != v ? { type: _.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = nc(b, d, na.OS);
    return (0, n.jsxs)("div", {
        className: na.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(lV.A, {
                className: na.yE,
                author: m,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(nm, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, lZ.A)({ message: b, channel: ns, author: m, guildId: void 0, isGroupStart: u }),
                childrenMessageContent: j,
                childrenAccessories: no(r, "" !== d),
                disableInteraction: !0,
            }),
            u
                ? (0, n.jsx)("span", {
                      className: na.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(O.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let nv = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
function nb(e) {
    let { projectId: t, notice: l } = e,
        r = a.useContext(tf.Qc),
        i = (0, D.bG)([lq.Ay, ea.A], () => {
            let e = lq.Ay.getProject(t);
            return null == e ? "" : (ea.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        s = a.useCallback(() => {
            null != r && (0, tf.v0)(t, r);
        }, [r, t]);
    return (0, n.jsx)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: C.intl.format(
            (function (e) {
                if (!e.update) return E.default.ogEl54;
                switch (e.surface) {
                    case "bot":
                        return E.default.ncJb2S;
                    case "widget":
                        return E.default.gSpqdm;
                    case "automod":
                        return E.default.M3cBMT;
                    case "activity":
                    case null:
                        return E.default.tg9fgb;
                }
            })(l),
            { name: i, onOpen: s },
        ),
    });
}
var nj = l(375068);
function ny(e) {
    let {
            projectId: t,
            messages: r,
            emptyState: s,
            ref: u,
            onPickIdea: o,
            onApprovePlan: d,
            floatingSettingsMessageId: c,
            onRestoreVersion: f,
        } = e,
        h = a.useRef(null),
        g = a.useCallback(
            (e) => {
                ((h.current = e), "function" == typeof u ? u(e) : null != u && (u.current = e));
            },
            [u],
        ),
        [x, p] = a.useState(null),
        b = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(b.current), []);
    let j = a.useCallback((e) => {
            let t = h.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                p(e),
                window.clearTimeout(b.current),
                (b.current = window.setTimeout(() => p(null), 1600)));
        }, []),
        y = (0, D.bG)([lq.Ay], () => lq.Ay.getPublishStatus(t)?.state ?? null),
        k = a.useMemo(() => {
            let e;
            return (function (e) {
                let t = [],
                    l = (function (e) {
                        let t = new Set(),
                            l = !1;
                        for (let n = e.length - 1; n >= 0; n--) {
                            let a = e[n];
                            null != a &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, eA.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(a) &&
                                (l && t.add(a.render_id), (l = !0));
                        }
                        return t;
                    })(e);
                function n(e, l) {
                    t.push({ row: e, groupable: { key: e.key, ...l } });
                }
                for (let t of e) {
                    if ("user" === t.role) {
                        n(
                            { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                            { actor: "user", authorId: t.user_id, boundary: void 0 },
                        );
                        continue;
                    }
                    if ("publish_notice" === t.kind) {
                        let e = `${t.render_id}:publish`;
                        n(
                            { kind: "publishNotice", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, eS.BL)(t),
                        a = eZ({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        r = a.lastStreamedMessage?.key,
                        i = (0, eA.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: u } = (0, eA.CT)(i, { turnActive: e }),
                        o = i.at(-1)?.index,
                        d = !1;
                    for (let c of i) {
                        if (null != c.prose && nv.test(c.prose.content)) d = !0;
                        else if (null != c.prose && c.prose.key !== a.replyKey) {
                            let l = `${t.render_id}:${c.key}`;
                            n(
                                {
                                    kind: "prose",
                                    key: l,
                                    message: t,
                                    groupStart: !1,
                                    content: c.prose.content,
                                    hostsAttachments:
                                        "streamed" === a.attachmentsHost && c.prose.key === r && null != t.attachments,
                                    streaming: e && c.index === o && !c.hasWork,
                                },
                                { actor: "assistant", boundary: l },
                            );
                        }
                        (c.hasWork || c.hasTodos) &&
                            n(
                                {
                                    kind: "activity",
                                    key: `${t.render_id}:work-${c.index}`,
                                    message: t,
                                    groupStart: !1,
                                    segment: c.index,
                                    active: c.index === u,
                                    closed: c.index !== u,
                                    ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                    reportsDuration: c.index === s,
                                    hostsChecklist: c.hasTodos,
                                    turnActive: eE(t),
                                    checklistSuperseded: c.hasTodos && l.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = nv.test(t.content ?? "");
                    if (
                        (!0 === t.interrupted || d || c
                            ? n(
                                  {
                                      kind: "interrupted",
                                      key: `${t.render_id}:interrupted`,
                                      message: t,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : i.every((e) => !e.hasTodos) &&
                              (t.todos?.length ?? 0) > 0 &&
                              n(
                                  {
                                      kind: "legacyTodos",
                                      key: `${t.render_id}:todos`,
                                      message: t,
                                      groupStart: !1,
                                      checklistSuperseded: l.has(t.render_id),
                                  },
                                  { actor: null, boundary: void 0 },
                              ),
                        (a.showsClosingMessage && !c) ||
                            null != t.proposal ||
                            null != t.clarification ||
                            null != t.restoreProposal ||
                            (!e &&
                                (null != t.ideas ||
                                    null != t.publishCta ||
                                    null != t.secretRequest ||
                                    null != t.settingsRequest)) ||
                            "standalone" === a.attachmentsHost)
                    ) {
                        let l = `${t.render_id}:closing`;
                        n(
                            {
                                kind: "closing",
                                key: l,
                                message: t,
                                groupStart: !1,
                                active: e,
                                attachmentsHost: a.attachmentsHost,
                                content: a.closingContent,
                                sideReply: "side_reply" === t.kind,
                            },
                            {
                                actor: "assistant",
                                boundary: l,
                                separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                            },
                        );
                    }
                }
                let a = (function (e) {
                    let t,
                        l,
                        n = [],
                        a = null,
                        r = !1,
                        i = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (n.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (l = void 0));
                            continue;
                        }
                        let e = !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                        (e && ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                            n.push(e));
                    }
                    return n;
                })(t.map((e) => e.groupable));
                return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(r, y)),
                r.every((t) => null == t.publishCta || t.id === e)
                    ? r
                    : r.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [r, y]),
        N = r.at(-1),
        w =
            (N?.role !== "assistant" || null == N.awaitingUser || null == N.secretRequest
                ? null
                : (0, eS.BL)(N)
                  ? N.awaitingUser
                  : null) ?? void 0;
    if (0 === r.length) {
        if ("loading" === s)
            return (0, n.jsx)("ol", {
                ref: u,
                className: i()(nj.x7, nj.jH),
                "aria-busy": !0,
                children: (0, n.jsx)("li", { className: nj.Ub, children: (0, n.jsx)(m.y, {}) }),
            });
        let e = "unavailable" === s ? E.default.s4oxNv : E.default.khZEUv;
        return (0, n.jsx)("ol", {
            ref: u,
            className: nj.x7,
            children: (0, n.jsx)(nk, { role: "assistant", children: (0, n.jsx)(np, { content: C.intl.string(e) }) }),
        });
    }
    return (0, n.jsxs)("ol", {
        ref: g,
        className: nj.x7,
        children: [
            k.map((e) => {
                let a = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                        return (0, n.jsx)(
                            nk,
                            {
                                role: "user",
                                anchorId: a.id,
                                highlighted: x === a.id,
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(ng, {
                                    groupStart: e.groupStart,
                                    content: a.content,
                                    createdAt: a.created_at,
                                    userId: a.user_id,
                                    accessories:
                                        null != l ? (0, n.jsx)(e4.A, { projectId: t, attachments: l }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, n.jsx)(
                            nk,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(np, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: a.created_at,
                                    accessories:
                                        e.hostsAttachments && null != a.attachments
                                            ? (0, n.jsx)(e4.A, { projectId: t, attachments: a.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, n.jsx)(
                            nk,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(t5, {
                                    projectId: t,
                                    steps: a.steps,
                                    segment: e.segment,
                                    active: e.active,
                                    closed: e.closed,
                                    segmentDurationMs: e.segmentDurationMs,
                                    reportsDuration: e.reportsDuration,
                                    hostsChecklist: e.hostsChecklist,
                                    turnActive: e.turnActive,
                                    checklistSuperseded: e.checklistSuperseded,
                                    durationMs: null != a.finished_at ? a.finished_at - a.created_at : void 0,
                                    todos: a.todos,
                                    provisionalTodo: a.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "publishNotice":
                        return (0, n.jsx)(
                            nk,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(np, {
                                    groupStart: e.groupStart,
                                    content: null == a.publishNotice ? a.content : "",
                                    createdAt: a.created_at,
                                    accessories:
                                        null == a.publishNotice
                                            ? void 0
                                            : (0, n.jsx)(nb, { projectId: t, notice: a.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, n.jsx)(
                            nk,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(t5, { projectId: t, interrupted: !0, steps: a.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, n.jsx)(
                            nk,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(t5, {
                                    projectId: t,
                                    steps: [],
                                    active: !1,
                                    checklistSuperseded: e.checklistSuperseded,
                                    todos: a.todos,
                                    provisionalTodo: a.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "closing": {
                        let i =
                                null != f
                                    ? "assistant" !== a.role || null == a.sourceSha
                                        ? null
                                        : {
                                              sha: a.sourceSha,
                                              authorName: "",
                                              authorEmail: "",
                                              authoredAt: new Date(a.created_at).toISOString(),
                                              subject: a.content,
                                          }
                                    : null,
                            s = a.restoreProposal;
                        return (0, n.jsx)(
                            nk,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != i && null != f
                                        ? (e) => {
                                              var t;
                                              return (
                                                  (t = () => {
                                                      tj(() => f(i));
                                                  }),
                                                  void (0, l$.L3)(e, async () => {
                                                      let { default: e } = await l.e("218024").then(l.bind(l, 88347));
                                                      return (l) => (0, n.jsx)(e, { ...l, onRestoreVersion: t });
                                                  })
                                              );
                                          }
                                        : void 0,
                                children: (0, n.jsx)(np, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    createdAt: a.created_at,
                                    replyTo: (function (e, t) {
                                        if (null == t) return;
                                        let l = e.find((e) => e.id === t && "user" === e.role);
                                        if (null != l)
                                            return {
                                                id: l.id,
                                                content: l.content,
                                                ...(null != l.user_id ? { userId: l.user_id } : {}),
                                                createdAt: l.created_at,
                                            };
                                    })(r, a.in_reply_to),
                                    onJumpToReplied: null != a.in_reply_to ? () => j(a.in_reply_to) : void 0,
                                    accessories: (0, n.jsx)(t3, {
                                        projectId: t,
                                        steps: a.steps,
                                        content: "",
                                        proposal: a.proposal,
                                        interrupted: !0 === a.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
                                        active: e.active,
                                        ideas: e.active ? void 0 : a.ideas,
                                        pickedIdeaIds:
                                            null == a.ideas
                                                ? void 0
                                                : (function (e, t, l) {
                                                      let n = new Set();
                                                      for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                          let t = e[a];
                                                          if ("user" === t.role)
                                                              for (let e of l)
                                                                  e.implementation_prompt.trim() === t.content.trim() &&
                                                                      n.add(e.id);
                                                      }
                                                      return n;
                                                  })(r, a, a.ideas),
                                        attachments: a.attachments,
                                        secretRequest: e.active ? void 0 : a.secretRequest,
                                        secretRequestAwaiting: a === N ? w : void 0,
                                        settingsRequest: e.active || a.id === c ? void 0 : a.settingsRequest,
                                        publishCta: e.active ? null : a.publishCta,
                                        onPickIdea: o,
                                        onApprovePlan: a === N ? d : void 0,
                                        restoreProposal: s,
                                        onRestoreProposal:
                                            null != s && null != f && a === N
                                                ? () => {
                                                      var e;
                                                      return (
                                                          (e = {
                                                              sha: s.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: s.authored_at,
                                                              subject: s.subject,
                                                          }),
                                                          void tj(() => f(e))
                                                      );
                                                  }
                                                : void 0,
                                    }),
                                }),
                            },
                            e.key,
                        );
                    }
                }
            }),
            null != w
                ? (0, n.jsx)(nk, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, n.jsx)(np, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default["1LEnd8"]),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function nk(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1, onContextMenu: u } = e;
    return (0, n.jsx)("li", {
        onContextMenu: u,
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(nj.xk, { [nj.Qo]: r, [nj.q3]: s }),
        children: l,
    });
}
let nN = [E.default.krnkPq, E.default["8oUm/J"], E.default["6Ea4dF"], E.default.fQx5qC, E.default["phXeK/"]];
function nw(e) {
    return nN.some((t) => C.intl.string(t) === e);
}
function nA(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(E.default.W7oyuf);
        case "closed":
            return C.intl.string(E.default["yBmS+I"]);
        case "failed":
            return C.intl.string(E.default.eE60xI);
    }
}
var nS = l(559676),
    nE = l(823376),
    nC = l(495557);
function nI(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = l8(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        u = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: nC.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: u,
                className: nC.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(t2.PT, nC.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eY.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nM = l(921461);
function nT(e) {
    let {
            activity: t,
            compacting: l = !1,
            restoring: r = !1,
            recalling: s = !1,
            controlling: u = !1,
            spoken: o,
            onSpokenChange: d,
        } = e,
        c = a.useRef(null),
        f = a.useId(),
        [m, h] = a.useState(null),
        g = (function (e) {
            let { activity: t, compacting: l = !1, restoring: n = !1, recalling: a = !1, controlling: r = !1 } = e,
                i = null != t && "end" !== t.phase;
            return r
                ? E.default.ivvYHP
                : n
                  ? E.default.aFffp2
                  : a
                    ? nN[0]
                    : l
                      ? E.default["0vH/5G"]
                      : i
                        ? E.default.Ly7F7x
                        : E.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, recalling: s, controlling: u }),
        x = C.intl.string(g),
        p = g === nN["0"],
        [v, b] = a.useState(o ?? x),
        j = a.useRef(x);
    (a.useEffect(() => {
        j.current = x;
    }, [x]),
        a.useEffect(() => {
            d?.(v);
        }, [v, d]));
    let y = a.useRef(null),
        k = a.useRef(v);
    a.useEffect(() => {
        k.current = v;
    }, [v]);
    let N = a.useRef(p),
        w = a.useRef(0);
    (a.useEffect(() => {
        ((N.current = p), !p && nw(k.current) && b(j.current));
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (N.current) {
                    var e;
                    ((w.current = nw(k.current) ? w.current + 1 : 0),
                        b(((e = w.current), C.intl.string(nN[e % nN.length]))));
                } else j.current !== k.current ? b(j.current) : y.current?.play();
            }
            function n() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (n(),
                    (e = window.setTimeout(() => {
                        (l(), (t = window.setInterval(l, 2400)));
                    }, 1800)));
            }
            function r() {
                (y.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", r),
                window.addEventListener("blur", n),
                () => {
                    (n(), window.removeEventListener("focus", r), window.removeEventListener("blur", n));
                }
            );
        }, []));
    let A = null != t && "" !== t.text,
        S = t?.session ?? null,
        I = A && null != S && m === S,
        M = a.useCallback(() => {
            A && null != S && h((e) => (e === S ? null : S));
        }, [A, S]),
        T = a.useCallback(() => h(null), []);
    return (0, n.jsx)(le.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: T,
        renderPopout: () => (0, n.jsx)(nI, { id: f, activity: t }),
        children: () =>
            (0, n.jsxs)(eJ.D, {
                innerRef: c,
                className: i()(nM.hF, A && nM.Xd),
                "aria-label": C.intl.string(r ? E.default.pGFXZ0 : p ? nN["0"] : E.default.SzdX35),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(g),
                onClick: M,
                children: [
                    (0, n.jsx)("span", {
                        className: nM.bl,
                        children: (0, n.jsx)(nE.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: nM.xu,
                        "aria-hidden": !!u || !!p || void 0,
                        children: (0, n.jsx)(t4.o, {
                            ref: y,
                            text: v,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nM.yE,
                        }),
                    }),
                ],
            }),
    });
}
let nP = { second: 1e3, minute: 6e4 };
function n_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let l;
            if (null == e) return;
            let a = nP[t];
            return (
                !(function t() {
                    let r = Date.now();
                    (n(r), (l = setTimeout(t, a - ((((r - e) % a) + a) % a))));
                })(),
                () => clearTimeout(l)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, l - e)
    );
}
var nR = l(979148);
function nL(e) {
    let { startedAt: t } = e,
        l = n_(t);
    return (0, n.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: nR.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, eX.C7)(l),
    });
}
function nF(e) {
    let { startedAt: t } = e,
        l = n_(t, "minute");
    return (0, n.jsx)(tW.A, { role: "timer", children: (0, eX.Us)(l) });
}
var nD = l(280894);
function nO(e) {
    return e.toLocaleString();
}
function n$(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: nD.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: nD.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nO((0, eT.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nO(l.input_tokens),
                    " in \xb7 ",
                    nO(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${nO(l.cache_creation_input_tokens)} cache write \xb7 ${nO(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function nq(e) {
    let { project: t } = e,
        l = (0, eT.wU)(t.compaction),
        a = (0, eT.wU)(t.classifier),
        r = (0, eT.wV)(t.orchestrator, t.codegen),
        i = (0, eT.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: nD.si,
        role: "dialog",
        "aria-label": C.intl.string(E.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: nD.Q$,
                children: (0, n.jsxs)("div", {
                    className: nD.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nO((0, eT.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(n$, { label: C.intl.string(E.default.R9aduM), usage: r }),
            (0, n.jsx)(n$, { label: C.intl.string(E.default.Tj6b30), usage: l }),
            (0, n.jsx)(n$, { label: C.intl.string(E.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: nD.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(E.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eT.sj)(i) ? "\u2014" : `${Math.round(100 * (0, eT.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nz(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(le.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(nq, { project: t }),
        children: (e) =>
            (0, n.jsx)(eJ.D, {
                innerRef: l,
                className: nD.Y$,
                "aria-label": C.intl.string(E.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(e8.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nG = l(258216);
function nU(e) {
    let t,
        {
            projectId: l,
            thinking: r,
            turnStartedAt: i,
            restoring: s = !1,
            recalling: u = !1,
            thinkingActivity: o,
            compacting: d,
            projectUsage: c,
            connState: f,
        } = e,
        m = (0, nS.o4)(l),
        [h, g] = a.useState(null),
        x = a.useCallback((e) => g(nw(e) ? null : e), []),
        p =
            null == c
                ? null
                : ((t = (0, eT.a7)(c.cost_usd)),
                  {
                      text: C.intl.formatToPlainString(E.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: C.intl.formatToPlainString(E.default["7SZZvj"], { runes: t, turns: c.turns }),
                  }),
        b = r && null != i;
    return (0, n.jsxs)("div", {
        className: nG.jf,
        children: [
            (0, n.jsxs)("div", {
                className: nG.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    r || s || u || m
                        ? (0, n.jsx)(nT, {
                              activity: o,
                              compacting: d,
                              restoring: s,
                              recalling: u,
                              controlling: m,
                              spoken: h,
                              onSpokenChange: x,
                          })
                        : null,
                    b ? (0, n.jsx)(nL, { startedAt: i }) : null,
                ],
            }),
            b ? (0, n.jsx)(nF, { startedAt: i }) : null,
            null == c || null == p
                ? null
                : (0, n.jsxs)("span", {
                      className: nG.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": p.aria,
                              children: p.text,
                          }),
                          (0, n.jsx)(nz, { project: c }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(E.default.eDDdhB, { status: nA(f) }),
                      "data-vibegrations-conn": !0,
                      "data-state": f,
                      className: nG.XF,
                      children: nA(f),
                  }),
        ],
    });
}
var nB = l(621466),
    nV = l(658675),
    nH = l(22231),
    nW = l(900797),
    nK = l(123292);
function nY(e, t, l) {
    return l < e.questions.length - 1
        ? l + 1
        : (function (e, t, l) {
              let { questions: n } = e;
              for (let e = 1; e <= n.length; e++) {
                  let a = (l + e) % n.length,
                      r = t[n[a].id];
                  if (null == r || "" === r.text.trim()) return a;
              }
              return null;
          })(e, t, l);
}
var nX = l(856795),
    nQ = l(424110);
function nZ(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: u = !0, selected: o } = e,
        d = a.useId(),
        c = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eJ.D, {
        className: i()(nQ.uK, { [nQ.ue]: r, [nQ.h4]: !0 === o }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": C.intl.formatToPlainString(c ? E.default.aL1BKQ : E.default.k7lEgj, { answer: t.label }),
        "aria-describedby": f ? d : void 0,
        "aria-disabled": r,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: u ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, n.jsx)("span", { className: nQ.dy, children: (0, n.jsx)(nV.P, { checked: o, disabled: r }) })
                : (0, n.jsx)("span", { className: nQ.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: nQ.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: nQ.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nQ.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, n.jsx)(v.E, {
                              tag: "span",
                              id: d,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nQ.rM,
                      children: C.intl.string(E.default.OXRWyV),
                  })
                : null,
        ],
    });
}
let nJ = [];
function n0(e) {
    let { question: t, draft: l, selected: a, direction: r, disabled: s } = e,
        u = "" === l.trim() ? null : l,
        o = !0 === t.multi_select;
    return (0, n.jsxs)("div", {
        className: i()(nQ.Ge, nQ.x1),
        "data-direction": r,
        "aria-hidden": !0,
        children: [
            o
                ? (0, n.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: nQ.aK,
                      children: C.intl.string(E.default.jt5JBA),
                  })
                : null,
            t.options.map((e, t) =>
                (0, n.jsx)(
                    nZ,
                    {
                        option: e,
                        position: t + 1,
                        disabled: s,
                        selected: o ? a.includes(e.id) : void 0,
                        onPick: () => void 0,
                        reachable: !1,
                    },
                    e.id,
                ),
            ),
            (0, n.jsxs)("div", {
                className: nQ.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: nQ.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(nH.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == u ? null : (0, n.jsx)("span", { className: i()(nQ.Pu, nQ.es), children: u }),
                ],
            }),
        ],
    });
}
function n1(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [s, o] = a.useState({}),
        [d, c] = a.useState({}),
        [f, m] = a.useState({}),
        [h, g] = a.useState(0),
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(null),
        [N, w] = a.useState(!1),
        A = a.useRef(null),
        [S, I] = a.useState(null),
        M = a.useRef(null),
        T = a.useRef(0),
        P = null == l,
        _ = t.questions.length,
        R = Math.min(h, _ - 1),
        L = t.questions[R],
        [F, D] = a.useState({ id: L.id, expanded: !1 }),
        O = F.id === L.id && F.expanded,
        [$, q] = a.useState(null),
        z = d[L.id] ?? "",
        G = !0 === L.multi_select,
        U = f[L.id] ?? nJ,
        { text: B, phase: V } = (0, nX.Q)(L.question),
        H = B === L.question,
        W = H && $?.id === L.id && $.truncated;
    a.useLayoutEffect(() => {
        if (null == S || O || !H) return;
        function e() {
            if (null == S) return;
            let e = S.scrollHeight > S.clientHeight + 1;
            q((t) => (t?.id === L.id && t.truncated === e ? t : { id: L.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(S), () => t.disconnect());
    }, [H, S, L.id, O]);
    let K = C.intl.string(O ? C.t.iTcuma : C.t.dcl9MQ),
        Y = a.useCallback(
            (e) => {
                if (null == l) return;
                let n = t.questions
                    .map((t, l) => ({ question: t, index: l, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: l, answer: n } = e;
                        return `${l + 1}. ${t.question} \u{2192} ${n.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== n) {
                    let a;
                    l(
                        n,
                        (a = t.questions.flatMap((t) => {
                            let l = e[t.id];
                            if (null == l || "" === l.text.trim()) return [];
                            let n = "option" === l.kind ? [l.optionId] : "multi" === l.kind ? l.optionIds : [],
                                a = "custom" === l.kind ? l.text.trim() : "multi" === l.kind ? l.custom : void 0;
                            return [
                                { question_id: t.id, option_ids: n, ...(null != a && "" !== a ? { custom: a } : {}) },
                            ];
                        })).length > 0
                            ? { clarification_id: t.id, answers: a }
                            : null,
                    );
                }
            },
            [t, l],
        ),
        Q = a.useCallback(
            (e, t) => {
                T.current += 1;
                let l = T.current;
                (p({ direction: t, moves: l }),
                    j({ question: L, draft: z, selected: U, direction: t, moves: l }),
                    w(!0),
                    g(e));
            },
            [z, L, U],
        ),
        Z = a.useCallback(() => {
            let e = A.current,
                t = M.current;
            null != e && null != t && k({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = A.current,
            t = M.current;
        if (null == e || null == t) return;
        Z();
        let l = new ResizeObserver(Z);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [Z]);
    let J = x?.moves;
    a.useEffect(() => {
        if (null == J) return;
        let e = setTimeout(() => j(null), 400),
            t = setTimeout(() => w(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [J]);
    let ee = a.useCallback(
            (e) => {
                if (P) return;
                let l = { ...s, [L.id]: e };
                o(l);
                let n = nY(t, l, R);
                null == n ? Y(l) : Q(n, n < R ? "back" : "forward");
            },
            [s, t, P, R, L.id, Y, Q],
        ),
        et = a.useCallback(() => {
            P || 0 === R || Q(R - 1, "back");
        }, [P, R, Q]),
        el = R > 0 && !P,
        en = a.useCallback(
            (e) => {
                (c((e) => ({ ...e, [L.id]: "" })), ee({ kind: "option", optionId: e.id, text: e.label }));
            },
            [L.id, ee],
        ),
        ea = a.useMemo(() => {
            let e, t;
            return G
                ? ((e = z.trim()),
                  (t = L.options.filter((e) => U.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: U,
                      ...("" === e ? {} : { custom: e }),
                      text: [...t, ...("" === e ? [] : [e])].join(", "),
                  })
                : null;
        }, [z, G, L, U]),
        er = a.useCallback(() => {
            if (null != ea) {
                "" !== ea.text && ee(ea);
                return;
            }
            let e = z.trim();
            "" !== e && ee({ kind: "custom", text: e });
        }, [z, ea, ee]),
        [ei, es] = a.useState(!1),
        [eu, eo] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => es(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ed = a.useCallback(() => {
            null != r && (eo(!0), setTimeout(r, 150));
        }, [r]),
        ec = a.useMemo(
            () =>
                null != ea
                    ? "" !== ea.text
                        ? ea
                        : null
                    : "" !== z.trim()
                      ? { kind: "custom", text: z.trim() }
                      : (s[L.id] ?? null),
            [s, z, ea, L.id],
        ),
        ef = null != ec && !P,
        em = null == nY(t, null != ec ? { ...s, [L.id]: ec } : s, R),
        eh = a.useCallback(() => {
            null == ec || P || ee(ec);
        }, [P, ec, ee]),
        eg = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (!((0, nB.vq)(e.target, HTMLTextAreaElement) || (0, nB.vq)(e.target, HTMLInputElement)) &&
                        ("ArrowLeft" === e.key && el
                            ? (e.preventDefault(), et())
                            : "ArrowRight" === e.key && ef && (e.preventDefault(), eh())));
            },
            [el, ef, et, eh],
        );
    return (0, n.jsxs)("section", {
        className: i()(nQ.$O, { [nQ.fI]: ei && !eu, [nQ.Oh]: eu }),
        role: "dialog",
        "aria-label": L.question,
        "data-vibegrations-clarification": t.id,
        "data-state": P ? "inert" : "open",
        "data-question-expanded": O ? "true" : void 0,
        "data-step": R,
        tabIndex: -1,
        onKeyDown: eg,
        children: [
            (0, n.jsxs)("div", {
                className: nQ.rf,
                style: null == y ? void 0 : { height: y.heading + y.rows },
                "data-moving": N ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: A,
                        className: nQ.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: I,
                                tag: "span",
                                id: `${L.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: O ? void 0 : 5,
                                className: i()(nQ.TK, nQ.R_, { [nQ.TB]: "exit" === V, [nQ.JU]: "enter" === V }),
                                children: B,
                            }),
                            W || O
                                ? (0, n.jsx)("div", {
                                      className: nQ.Q7,
                                      children: (0, n.jsx)(e6.m, {
                                          text: K,
                                          children: (0, n.jsx)(tI.K, {
                                              icon: O ? nW.t : tV.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => D({ id: L.id, expanded: !O }),
                                              "aria-label": K,
                                              "aria-controls": `${L.id}-label`,
                                              "aria-expanded": O,
                                          }),
                                      }),
                                  })
                                : null,
                            null == r
                                ? null
                                : (0, n.jsx)(eJ.D, {
                                      className: i()(nQ.gb, nQ.Q7),
                                      onClick: ed,
                                      "aria-label": C.intl.string(E.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, n.jsx)(u.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: nQ.Cg,
                        style: null == y ? void 0 : { insetBlockStart: y.heading },
                        children: (0, n.jsxs)("div", {
                            className: nQ.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: M,
                                    className: nQ.Ge,
                                    role: "group",
                                    "aria-labelledby": `${L.id}-label`,
                                    "data-direction": x?.direction,
                                    "data-parity": null == x ? void 0 : x.moves % 2,
                                    children: [
                                        G
                                            ? (0, n.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: nQ.aK,
                                                  children: C.intl.string(E.default.jt5JBA),
                                              })
                                            : null,
                                        L.options.map((e, t) =>
                                            (0, n.jsx)(
                                                nZ,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: P,
                                                    selected: G ? U.includes(e.id) : void 0,
                                                    onPick: (e) =>
                                                        G
                                                            ? m((t) => {
                                                                  var l, n;
                                                                  let a;
                                                                  return {
                                                                      ...t,
                                                                      [L.id]:
                                                                          ((l = t[L.id] ?? nJ),
                                                                          (n = e.id),
                                                                          (a = l.includes(n)
                                                                              ? l.filter((e) => e !== n)
                                                                              : [...l, n]),
                                                                          L.options
                                                                              .filter((e) => a.includes(e.id))
                                                                              .map((e) => e.id)),
                                                                  };
                                                              })
                                                            : en(e),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: nQ.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: nQ.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(nH.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(lr.y, {
                                                    value: z,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [L.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), er());
                                                    },
                                                    placeholder: C.intl.string(E.default.qifsdL),
                                                    "aria-label": C.intl.formatToPlainString(E.default.XHESTL, {
                                                        question: L.question,
                                                    }),
                                                    disabled: P,
                                                    rows: 1,
                                                    className: nQ.Pu,
                                                    "data-vibegrations-clarification-other": L.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == b
                                    ? null
                                    : (0, n.jsx)(
                                          n0,
                                          {
                                              question: b.question,
                                              draft: b.draft,
                                              selected: b.selected,
                                              direction: b.direction,
                                              disabled: P,
                                          },
                                          b.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            _ > 1 || G
                ? (0, n.jsxs)("div", {
                      className: nQ.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children:
                                  _ > 1
                                      ? C.intl.formatToPlainString(E.default["7bypa+"], { index: R + 1, total: _ })
                                      : null,
                          }),
                          (0, n.jsxs)("div", {
                              className: nQ.Np,
                              children: [
                                  el
                                      ? (0, n.jsx)(nK.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: C.intl.string(E.default.yKdgqw),
                                            onClick: et,
                                            "data-vibegrations-clarification-back": !0,
                                        })
                                      : null,
                                  (0, n.jsx)(X.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: C.intl.string(em ? C.t.geKm7t : E.default.S7Sa6j),
                                      disabled: !ef,
                                      onClick: eh,
                                      "data-vibegrations-clarification-next": !0,
                                      "data-submits": em ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var n2 = l(643278),
    n7 = l(191521),
    n5 = l(405189);
function n3(e) {
    let { line: t, placement: l, todos: r, todosLive: s = !0, provisionalTodo: u, agents: o, onJumpToActivity: d } = e,
        c = null != l,
        [f, m] = a.useState(l ?? "top"),
        [h, g] = a.useState(c),
        [x, p] = a.useState(!1),
        [v, b] = a.useState(!1),
        [j, y] = a.useState(c);
    (j !== c && (y(c), null != l ? (m(l), g(!0)) : (p(!1), b(!1))),
        a.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        a.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, c]));
    let [k, N] = a.useState(!1),
        [w, A] = a.useState(!1),
        [S, I] = a.useState(v);
    (S !== v && (I(v), v ? N(!0) : A(!1)),
        a.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => N(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        a.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => A(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let M = null != r && r.length > 0,
        T = a.useCallback(() => b((e) => !e), []);
    return h
        ? (0, n.jsxs)("div", {
              className: n5.qd,
              "data-placement": f,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(n5.vK, { [n5.ho]: x && c, [n5.ET]: !c }),
                      children: [
                          null == d
                              ? (0, n.jsx)("ol", {
                                    className: i()(n5.Rk, tU.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(t_.A, {
                                        glyph: (0, n.jsx)(n7.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eJ.D, {
                                    className: n5.pZ,
                                    onClick: d,
                                    "aria-label": C.intl.string(E.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(n5.Rk, tU.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(t_.A, {
                                            glyph: (0, n.jsx)(n7.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, n.jsx)(e6.m, {
                                    text: C.intl.string(E.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eJ.D, {
                                        className: n5.BO,
                                        onClick: T,
                                        "aria-expanded": v,
                                        "aria-label": C.intl.string(E.default.qCRC6c),
                                        children: (0, n.jsx)(n2.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  k && M
                      ? (0, n.jsx)("div", {
                            className: i()(n5.vB, { [n5.pg]: v && w, [n5.ui]: !v }),
                            children: (0, n.jsx)(tJ, {
                                todos: r,
                                provisional: u,
                                agents: o,
                                live: s,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var n4 = l(651649),
    n6 = l(522250),
    n8 = l(670455),
    n9 = l(698638),
    ae = l(348800);
let at = [C.intl.string(E.default["E+Q26x"]), C.intl.string(E.default["06/jqP"]), C.intl.string(E.default["3gSfUa"])];
function al(e) {
    var t;
    let { projectId: r, restoreState: i, onRestoreVersion: s } = e,
        u = (0, D.bG)([eS.Ay], () => eS.Ay.getMessages(r), [r]),
        o = (0, D.bG)([f.Ay], () => f.Ay.getConnState(r), [r]),
        d = (0, D.bG)([f.Ay], () => f.Ay.isChatStopped(r), [r]),
        c = (0, D.bG)([eS.Ay], () => eS.Ay.getProjectUsage(r), [r]),
        m = (0, D.bG)([eS.Ay], () => eS.Ay.getThinkingActivity(r), [r]),
        h = (0, D.bG)([eS.Ay], () => eS.Ay.isCompacting(r), [r]),
        g = (0, D.bG)([f.Ay], () => f.Ay.getModelSettings(r), [r]),
        x = a.useRef(null),
        p = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(!0),
        [y, k] = a.useState(!0);
    a.useEffect(() => {
        j.current && p.current?.scrollToBottom();
    }, [u]);
    let N = a.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        w = a.useCallback(() => {
            let e = p.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            j.current = t < 32;
            let l = t > 1;
            k((e) => (!l === e ? e : !l));
        }, []);
    (a.useLayoutEffect(() => {
        let e = x.current,
            t = b.current;
        if (null == e) return;
        let l = p.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            j.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => p.current?.scrollToBottom())));
        }
        let u = new ResizeObserver((t) => {
            for (let i of t)
                if (i.target === e) {
                    let e = i.contentRect.width;
                    if (e === n) continue;
                    ((n = e), s());
                } else if (i.target === l) {
                    let e = i.contentRect.height;
                    if (e === r) continue;
                    ((r = e), s());
                } else {
                    let e = i.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            u.observe(e),
            null != l && u.observe(l),
            null != t && u.observe(t),
            () => {
                (u.disconnect(), null != i && cancelAnimationFrame(i));
            }
        );
    }, []),
        a.useEffect(() => {
            (0, f.Hc)(r);
        }, [r]),
        a.useEffect(
            () => () =>
                (function (e) {
                    if ((0, n6.jb)(e)) return;
                    let t = (0, n6.hl)(e);
                    t < n6.qu ||
                        (0, n6.Xi)(e) ||
                        n4.A.possiblyShowFeedbackModal(n8.MW.VIBEGRATIONS, () => {
                            ((0, n6.AH)(e),
                                (0, tS.openModalLazy)(async () => {
                                    let { default: a } = await Promise.all([
                                        l.e("312513"),
                                        l.e("218413"),
                                        l.e("137381"),
                                        l.e("847004"),
                                        l.e("341676"),
                                    ]).then(l.bind(l, 580711));
                                    return (l) => (0, n.jsx)(a, { ...l, projectId: e, promptCount: t });
                                }));
                        });
                })(r),
            [r],
        ));
    let A = (0, eH.Q_)(r),
        S = a.useCallback(
            (e, t) => {
                (0, f.dv)(r, e, t);
            },
            [r],
        ),
        I = a.useCallback(
            (e, t) => {
                0 === A.annotations.length
                    ? S(e, t)
                    : (S((0, ew.Mx)({ annotations: A.annotations, metaComment: e, context: A.context }), t),
                      (0, eH.PS)(r));
            },
            [A, S, r],
        ),
        M = a.useCallback(() => (0, f.fu)(r), [r]),
        T = a.useCallback((e) => eB(r, e.implementation_prompt), [r]),
        P = a.useCallback((e, t) => eB(r, e, { clarificationAnswers: t }), [r]),
        _ = a.useCallback((e) => (0, f.XZ)(r, e), [r]),
        R = a.useCallback((e) => (0, f.vX)(r, e), [r]),
        L = a.useCallback((e) => lC(r, "chat", Array.from(e), R), [r, R]),
        F = a.useCallback(() => eB(r, C.intl.string(E.default.Jj8Ftb)), [r]),
        O = i?.status === "restoring",
        $ = "open" === o && !d && !O,
        q = u[u.length - 1],
        z = null != q && "assistant" === q.role && null != q.proposal,
        [G, U] = a.useState(null),
        B = q?.clarification != null && q.clarification.id !== G ? q.clarification : null,
        V = a.useCallback(() => {
            null != B && U(B.id);
        }, [B]),
        [H, W] = a.useState(!1);
    a.useEffect(() => {
        if (!(0, eV.Fy)(r)) return;
        let e = setTimeout(() => {
            ((0, eV.fA)(), W(!0));
        }, 0);
        return () => clearTimeout(e);
    }, [r]);
    let K = a.useCallback(() => W(!1), []),
        Y = (0, D.bG)([f.Ay], () => f.Ay.getSettings(r), [r]),
        [Q, Z] = a.useState(null),
        J =
            !H &&
            null != q &&
            "assistant" === q.role &&
            null != q.settingsRequest &&
            (0, eS.BL)(q) &&
            q.id !== Q &&
            ((t = q.settingsRequest),
            null != Y &&
                (t.keys ?? []).some((e) => {
                    let t = Y.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return Y.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = Y.values[e];
                    return null == l || "" === l;
                }))
                ? q
                : null,
        ee = J?.settingsRequest ?? null,
        et = a.useCallback(() => {
            null != J && Z(J.id);
        }, [J]),
        el = H || null != ee,
        en = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, D.bG)([eS.Ay], () => eS.Ay.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, D.bG)([eS.Ay], () => eS.Ay.isHistoryUnavailable(r), [r]),
            connState: o,
        }),
        ea = "loading" === en && 0 === u.length,
        er = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return at[e % at.length];
        }, [r]),
        ei = z
            ? C.intl.string(E.default.Jj8Ftb)
            : q?.kind === "plan_implemented"
              ? C.intl.string(E.default["3sTTBu"])
              : "greeting" === en && 0 === u.length
                ? er
                : null,
        es = a.useMemo(() => {
            for (let e = u.length - 1; e >= 0; e--) {
                let t = u[e];
                if ("assistant" === t.role && !(0, eS.BL)(t)) return t;
            }
        }, [u]),
        eu = null != es,
        eo =
            null != es
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = eC.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(es)
                : void 0,
        ed = z && $ ? F : void 0,
        ec = a.useCallback(() => eB(r, C.intl.string(E.default.ga8too)), [r]),
        ef = z && $,
        [em, eh] = a.useState(null),
        [eg, ex] = a.useState(eu);
    (eg !== eu && (ex(eu), eu || eh(null)),
        a.useEffect(() => {
            if (!eu) return;
            let e = p.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eh(null)
                        : eh(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eu, es?.steps]));
    let ep = a.useMemo(() => (null != es ? (0, eW.b)(es.steps) : ""), [es]),
        ev = a.useMemo(() => (null != es ? ((0, eA.lt)(es.steps) ?? es.todos) : void 0), [es]),
        eb = es?.provisionalTodo,
        ej = null != es && eE(es),
        ey = a.useMemo(() => {
            var e;
            return null != es ? ((e = es.steps), t7((0, eA.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, n.jsxs)("section", {
        ref: x,
        "data-vibegrations-chat": !0,
        className: ae.TE,
        children: [
            $
                ? (0, n.jsx)(eN.A, {
                      title: C.intl.string(E.default.UazRD1),
                      description: C.intl.string(E.default["O4r42+"]),
                      icons: n9.ir,
                      onDrop: L,
                  })
                : null,
            (0, n.jsx)(n3, {
                onJumpToActivity: N,
                line: ep,
                placement: eu && "top" === em ? "top" : null,
                todos: ev,
                todosLive: ej,
                provisionalTodo: eb,
                agents: ey,
            }),
            (0, n.jsxs)("div", {
                className: ae.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: p,
                        onScroll: w,
                        scrollbarGutter: ea ? "both-edges" : "stable",
                        className: [ae.N$, y ? null : ae.hB, el ? ae.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(ny, {
                            ref: b,
                            projectId: r,
                            messages: u,
                            emptyState: en,
                            floatingSettingsMessageId: J?.id,
                            onPickIdea: $ ? T : void 0,
                            onApprovePlan: ef ? ec : void 0,
                            onRestoreVersion: O || eu ? void 0 : s,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: ae.NJ,
                        children: (0, n.jsx)(nU, {
                            projectId: r,
                            thinking: eu,
                            turnStartedAt: eo,
                            restoring: O,
                            recalling: ea,
                            thinkingActivity: m,
                            compacting: h,
                            projectUsage: c,
                            connState: o,
                        }),
                    }),
                    null == B
                        ? null
                        : (0, n.jsx)("div", {
                              className: el ? `${ae.B5} ${ae.J9}` : ae.B5,
                              children: (0, n.jsx)(
                                  n1,
                                  { clarification: B, onSubmit: $ ? P : void 0, onDismiss: V },
                                  B.id,
                              ),
                          }),
                    null == ee
                        ? null
                        : (0, n.jsx)("div", {
                              className: ae.B5,
                              children: (0, n.jsx)("div", {
                                  className: ae.ws,
                                  children: (0, n.jsx)(tP, { projectId: r, request: ee, onDismiss: et }, J?.id),
                              }),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ae.Jx,
                children: [
                    (0, n.jsx)(n3, {
                        onJumpToActivity: N,
                        line: ep,
                        placement: eu && "bottom" === em ? "bottom" : null,
                        todos: ev,
                        todosLive: ej,
                        provisionalTodo: eb,
                        agents: ey,
                    }),
                    0 === A.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: ae.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: C.intl.formatToPlainString(E.default.Lkx0Kk, {
                                          count: A.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: C.intl.string(E.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(X.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: C.intl.string(E.default.B0YARo),
                                      onClick: () => (0, eH.PS)(r),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(lL, {
                        projectId: r,
                        canSend: $,
                        stopped: d,
                        running: eu,
                        restoring: O,
                        onSend: I,
                        hasPendingContext: A.annotations.length > 0,
                        onInterrupt: $ ? M : void 0,
                        onUploadFile: R,
                        onApprove: ed,
                        suggestion: ei,
                        questionOpen: null != B || null != ee,
                        tipOpen: H,
                        onDismissTip: K,
                        modelSettings: g,
                        onModelSettingsChange: _,
                    }),
                ],
            }),
        ],
    });
}
var an = l(661531),
    aa = l(602853),
    ar = l(517461),
    ai = l(761929),
    as = l(927506);
function au(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, aa.r)(an.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = a.useRef(null),
        [o, d] = (0, ar.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = a.useState(o ?? 460),
        m = (0, ld.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? m + s : 0);
    }, [m, t, s, r]);
    let h = (0, ai.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: ai.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, n.jsxs)("div", {
        className: as.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: as.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: u, className: as.kL, style: { width: m }, children: i }),
        ],
    });
}
var ao = l(691540),
    ad = l(857250),
    ac = l(97483),
    af = l(624479),
    am = l(92446),
    ah = l(761508),
    ag = l(540999),
    ax = l(957565);
let ap = [],
    av = new Map(),
    ab = new Map(),
    aj = new Map(),
    ay = new Map(),
    ak = new Map(),
    aN = new Map(),
    aw = new Map();
class aA extends D.Ay.Store {
    getStatus(e) {
        return av.get(e) ?? null;
    }
    getFetchState(e) {
        return ab.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return ay.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return aN.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return ak.get(e) ?? null;
    }
    getModelCalls(e) {
        return aw.get(e) ?? ap;
    }
    getForceCompactionState(e) {
        return aj.get(e) ?? "idle";
    }
}
let aS = new aA(eI.h, {
    LOGOUT: function () {
        if (
            0 === av.size &&
            0 === ab.size &&
            0 === aj.size &&
            0 === ay.size &&
            0 === ak.size &&
            0 === aN.size &&
            0 === aw.size
        )
            return !1;
        (av.clear(), ab.clear(), aj.clear(), ay.clear(), ak.clear(), aN.clear(), aw.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        ab.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === aj.get(t);
        n &&
            aj.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === ab.get(t);
        if ((a && ab.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? ab.set(t, "failed") : (av.set(t, l), ab.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        ay.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        ak.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
        let { projectId: t } = e;
        aj.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        aj.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = aw.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let l = {
                id: e.id,
                role: e.role,
                model: e.model,
                stopReason: e.stopReason,
                durationMs: e.durationMs,
                inputTokens: e.inputTokens,
                outputTokens: e.outputTokens,
                cacheReadTokens: e.cacheReadTokens,
                cacheWriteTokens: e.cacheWriteTokens,
                taskId: e.taskId,
                observedAt: e.observedAt,
            },
            n = null == t ? [l] : t.concat(l);
        aw.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, eT.aM)(l.total)) return !1;
        aN.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (av.delete(t), ab.delete(t), aj.delete(t), ay.delete(t), ak.delete(t), aN.delete(t), aw.delete(t));
    },
});
function aE(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function aC(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function aI(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function aM(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function aT(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function aP(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function a_(e) {
    return C.intl.string("preview" === e ? E.default["+m8XM6"] : E.default.kiOVnt);
}
let aR = ["all", "preview", "stable", "web"],
    aL = new Set(["error", "aborted", "length"]);
function aF(e) {
    switch (e.reason) {
        case "local":
            return C.intl.string(E.default.M7Vn6y);
        case "unconfigured":
            return C.intl.string(E.default.QirpMl);
        case "unauthorized":
            return C.intl.string(E.default.QZ1e4l);
        default:
            return null != e.detail
                ? C.intl.formatToPlainString(E.default.zUTHf7, { detail: e.detail })
                : C.intl.string(E.default.WIAQes);
    }
}
function aD(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(E.default.SBkDIZ, {
              p50: aE(e.memory_p50_bytes ?? 0),
              p999: aE(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let aO = {
    db: () => E.default.r6cciE,
    db_preview: () => E.default.JmIyL8,
    runtime: () => E.default.bzNyv8,
    runtime_preview: () => E.default["LONZ/8"],
    bot: () => E.default.jdpw3A,
    bot_preview: () => E.default["/g6wUz"],
};
var a$ = l(69985);
function aq(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: a$.KE,
        children: [
            (0, n.jsx)("div", {
                className: a$.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: C.intl.string(E.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: C.intl.formatToPlainString(E.default["4NpaEk"], { time: aT(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(X.$, { variant: "secondary", size: "sm", text: C.intl.string(E.default.aw0IJm), onClick: a }),
        ],
    });
}
function az(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: a$.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: a$.Gf, children: t }),
            l,
        ],
    });
}
function aG(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: a$.N8,
        children: [
            (0, n.jsxs)("div", {
                className: a$.x7,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != a && (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
        ],
    });
}
function aU(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: a$.N8,
        children: [
            (0, n.jsxs)("div", {
                className: a$.x7,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(l)} / ${r(a)}`,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: a$.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? a$.aV : a$.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function aB(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(aG, {
            label: C.intl.string(E.default.H6PMwW),
            value: C.intl.string(E.default.TLOZ8J),
            hint: aF(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(aG, {
            label: C.intl.string(E.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(E.default.uAzxdh),
        });
    let a = aD(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aG, { label: C.intl.string(E.default.awAqRi), value: aC(l.cpu_ms) }),
            null != a && (0, n.jsx)(aG, { label: C.intl.string(E.default.WdGviA), value: a }),
        ],
    });
}
function aV(e) {
    let { analytics: t } = e,
        l = C.intl.string(E.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(az, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: aF(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? aO[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(az, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: C.intl.string(E.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          aG,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(E.default.AnRynJ, { cpu: aC(t.cpu_ms) }),
                              hint: aD(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var aH = l(522652);
let aW = [];
function aK(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && aL.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? aC(l.durationMs) : null,
                    `${aI(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${aI(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: aH.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aH.Q5,
                children: aM(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: aH.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: r ? "text-feedback-critical" : "text-muted",
                children: a,
            }),
        ],
    });
}
function aY(e, t) {
    return (0, n.jsx)(aG, {
        label: e,
        value: C.intl.formatToPlainString(E.default.U98VaN, { count: aI((0, eT.aM)(t)) }),
        hint: `${aI(t.input_tokens)} in \xb7 ${aI(t.output_tokens)} out \xb7 ${aI(t.cache_read_input_tokens)} cache read`,
    });
}
function aX(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        u = (0, D.bG)([aS], () => aS.getLastTurnUsage(t), [t]),
        o = (0, D.bG)([aS], () => aS.getLastCompaction(t), [t]),
        d = (0, D.bG)([aS], () => aS.getLastCompactionDecline(t), [t]),
        c = (0, D.bG)([aS], () => aS.getForceCompactionState(t), [t]),
        m = a.useCallback(() => (0, f.Lj)(t), [t]),
        h = a.useCallback(() => (0, f.Lj)(t, !0), [t]),
        g = (0, D.bG)([aS], () => (s ? aW : aS.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = o?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: aH.Mf,
        children: [
            (0, n.jsx)(aq, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(az, {
                title: C.intl.string(E.default.IYpHtT),
                children:
                    null == x
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(aG, {
                                      label: C.intl.string(E.default["8MSJDH"]),
                                      value: aI((0, eT.a7)(x.cost_usd)),
                                      hint: C.intl.formatToPlainString(E.default["6Z2KhK"], { count: aI(x.turns) }),
                                  }),
                                  aY(C.intl.string(E.default.hk4jJr), x.orchestrator),
                                  aY(C.intl.string(E.default.R9aduM), x.codegen),
                                  aY(C.intl.string(E.default.Tj6b30), (0, eT.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(aG, {
                                          label: C.intl.string(E.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${aI(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(az, {
                title: C.intl.string(E.default.lo4mY6),
                children:
                    null == u
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  aY(C.intl.string(E.default["VwF+oY"]), u.total),
                                  (0, n.jsx)(aG, {
                                      label: C.intl.string(E.default["kILb+R"]),
                                      value: `${Math.round((u.cache_hit_rate ?? (0, eT.CA)(u.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(az, {
                title: C.intl.string(E.default.mn8279),
                children: [
                    null != o && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(aU, {
                                      label: C.intl.string(E.default.dKFhCg),
                                      used: o.tokensAfter,
                                      max: j,
                                      formatValue: aI,
                                  }),
                                  (0, n.jsx)(aG, {
                                      label: C.intl.string(E.default.ntZb8d),
                                      value: `${aI(o.tokensBefore)} \u{2192} ${aI(o.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(E.default.jA05ru, {
                                          count: aI(o.retainedMessages),
                                          time: aT(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? C.intl.formatToPlainString(E.default.LKGmsP, { ceiling: aI(j) })
                                      : C.intl.string(E.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(aG, {
                            label: C.intl.string(E.default["se+2ls"]),
                            value: `${aI(d.projected)} / ${aI(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(E.default.KHK44U, { time: aT(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: aH.Lj,
                        children: [
                            (0, n.jsx)(X.$, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(E.default.B0KV7p),
                                disabled: "pending" === c,
                                onClick: m,
                            }),
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return C.intl.string(E.default.wBng42);
                                    if ("pending" === e) return C.intl.string(E.default["0tgo31"]);
                                    let t = aT(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return C.intl.formatToPlainString(E.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? E.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? E.default.GV4sdd
                                              : E.default["Y+0nUb"];
                                    return C.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(X.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: C.intl.string(E.default["044+ju"]),
                                            onClick: h,
                                        }),
                                        (0, n.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: C.intl.string(E.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(az, {
                    title: C.intl.string(E.default.F5eP7e),
                    children:
                        0 === g.length
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: C.intl.string(E.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(aK, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, n.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: C.intl.formatToPlainString(E.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || l?.analytics != null) &&
                (0, n.jsxs)(az, {
                    title: C.intl.string(E.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(aG, {
                                        label: C.intl.string(E.default["wt5X/o"]),
                                        value: aT(b.instance_since),
                                        hint: C.intl.string(E.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(aG, { label: C.intl.string(E.default["4lgurx"]), value: aI(b.sockets) }),
                                    (0, n.jsx)(aG, {
                                        label: C.intl.string(E.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? C.intl.string(E.default["9KlveJ"])
                                            : C.intl.string(E.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(aG, {
                                            label: C.intl.string(E.default["/hOBkc"]),
                                            value: aI(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(aB, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(az, {
                    title: C.intl.string(E.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(aG, {
                            label: C.intl.string(E.default.Rb6m3E),
                            value: aI(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(aG, {
                            label: C.intl.string(E.default.WQ9pMe),
                            value: C.intl.formatToPlainString(E.default.U98VaN, { count: aI(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(aG, {
                            label: C.intl.string(E.default.iEAvzu),
                            value: C.intl.formatToPlainString(E.default.U98VaN, {
                                count: aI(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(aG, {
                            label: C.intl.string(E.default["jbhs+f"]),
                            value: aI(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(aG, { label: C.intl.string(E.default.TOQnq4), value: aI(p.max_build_attempts) }),
                        (0, n.jsx)(aG, { label: C.intl.string(E.default.RIDc6D), value: aI(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var aQ = l(629584),
    aZ = l(683438),
    aJ = l(849363);
function a0(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: aJ.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(E.default.TV42NS),
              }),
          });
}
function a1(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: aJ.qf,
              children: [
                  (0, n.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: C.intl.string(E.default.TV42NS),
                  }),
                  (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: C.intl.string(E.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: aJ.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function a2(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: aJ.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default["U/qDX9"]),
              }),
          })
        : null;
}
var a7 = l(417397);
let a5 = a.memo(function (e) {
    var t;
    let { entry: l, showSource: r } = e,
        [i, s] = a.useState(!1),
        u = a.useId(),
        o = a.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let l = e.indexOf("{"),
                        n = e.indexOf("["),
                        a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
                    if (-1 === a) return null;
                    let r = e.slice(a).trim();
                    if (r.length < 2) return null;
                    try {
                        t = JSON.parse(r);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, a).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(l.message),
            [l.message],
        ),
        d = "error" === l.level ? "text-feedback-critical" : "text-default";
    return (0, n.jsxs)("div", {
        className: a7.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: a7.Mt,
                selectable: !0,
                children: aM(l.ts),
            }),
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: a7.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: a7.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: a7.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: a7.Cq,
                            title: l.build ?? void 0,
                            children: C.intl.string(E.default.GO6JcR),
                        }),
                    null != o
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, n.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, n.jsxs)(eJ.D, {
                                      className: a7.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": u,
                                      "aria-label": C.intl.string(E.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(tV.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(tH._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, n.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  C.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker ? E.default.lXkB6Z : E.default.wkbYxG,
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  i &&
                                      (0, n.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: a7.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
                              selectable: !0,
                              children: l.message,
                          }),
                ],
            }),
        ],
    });
});
function a3(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([lq.Ay], () => lq.Ay.getLogs(t), [t]),
        r = (0, D.bG)([lq.Ay], () => lq.Ay.getHistoryState(t, "logs")),
        [i, s] = a.useState("all"),
        [u, o] = a.useState(""),
        d = a.useMemo(() => {
            let e = u.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === i ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === i) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, i, u]),
        c = a.useRef(null),
        f = a.useRef(!0);
    a.useEffect(() => {
        f.current && c.current?.scrollToBottom();
    }, [d]);
    let m = a.useCallback(() => {
            let e = c.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        h = a.useMemo(
            () =>
                aR.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return a_(e);
                            case "web":
                                return C.intl.string(E.default.J2TPCe);
                            default:
                                return C.intl.string(E.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: a7.$F,
        children: [
            (0, n.jsxs)("div", {
                className: a7.y4,
                children: [
                    (0, n.jsx)(aQ.I, {
                        look: "pill",
                        "aria-label": C.intl.string(E.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: a7.KT,
                        children: (0, n.jsx)(aZ.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: C.intl.string(E.default["MX4vr/"]),
                            "aria-label": C.intl.string(E.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(a0, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: m,
                overflow: "auto",
                className: a7.sx,
                children: [
                    (0, n.jsx)(a2, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(a1, {
                              state: r,
                              emptyTitle: C.intl.string(E.default.mcFyYc),
                              emptyBody: C.intl.string(E.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(E.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(a5, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function a4(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(az, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: C.intl.string(E.default.W4hcKL),
                      }),
        })
    );
}
function a6(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(aG, {
                      label: C.intl.formatToPlainString(E.default.f8ix3w, { env: a_(l) }),
                      value: ((t = a.connected), C.intl.string(t ? E.default["9KlveJ"] : E.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(aG, {
                      label: C.intl.string(E.default["0AB7l3"]),
                      value: aI(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${aT(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(aG, { label: C.intl.string(E.default.ElaQ0A), value: aI(a.guild_count) }),
                  (0, n.jsx)(aG, {
                      label: C.intl.string(E.default.SJtBTN),
                      value: aI(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(E.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: aT(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(aG, {
                          label: C.intl.string(E.default.N4l504),
                          value: aI(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(aG, { label: a_(l), value: C.intl.string(E.default.C6xjtD) });
}
function a8(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(aG, {
        label: a_(t),
        value: C.intl.formatToPlainString(E.default.Yur5Zm, { requests: aI(l.requests), failures: aI(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(E.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: aT(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(E.default["1PdrB1"], { time: aT(l.since) }),
    });
}
function a9(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aG, {
                label: C.intl.formatToPlainString(E.default.BVORfc, { env: a_(t) }),
                value: aI(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    aG,
                    {
                        label: C.intl.formatToPlainString(E.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? C.intl.formatToPlainString(E.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? C.intl.formatToPlainString(E.default["7ecbr3"], { time: aT(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function re(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(aG, {
        label: a_(t),
        value: C.intl.formatToPlainString(E.default.voXL2a, { calls: aI(l.calls), errors: aI(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function rt(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(az, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(E.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(az, {
        title: t,
        children: [
            (0, n.jsx)(aG, {
                label: C.intl.string(E.default.KOnL3g),
                value: aI(l.requests),
                hint: C.intl.formatToPlainString(E.default["1PdrB1"], { time: aT(l.since) }),
            }),
            (0, n.jsx)(aG, { label: C.intl.string(E.default.CjPhyY), value: aI(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(aU, {
                              label: C.intl.string(E.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: aC,
                          }),
                          (0, n.jsx)(aG, {
                              label: C.intl.string(E.default["+rYPHD"]),
                              value: aC(r),
                              hint: C.intl.formatToPlainString(E.default["+LxC7W"], {
                                  total: aC(l.cpu_ms_total),
                                  wall: aC(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(aG, {
                      label: C.intl.string(E.default["V/nNbs"]),
                      value: C.intl.string(E.default.YKWIxp),
                      hint: C.intl.string(E.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(aG, { label: C.intl.string(E.default.ueEMPa), value: aC(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(aG, { label: C.intl.string(E.default.vM2krr), value: aI(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(aG, {
                label: C.intl.string(E.default.g1O88C),
                value: aI(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(E.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(aG, { label: C.intl.string(E.default.JUZs7g), value: aP(l.build) }),
        ],
    });
}
function rl(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        u = i
            ? [{ key: "shared", label: C.intl.string(E.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(E.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(E.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(az, {
        title: C.intl.string(E.default.i91625),
        children: u.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(aG, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(aG, {
                                  label: C.intl.formatToPlainString(E.default["9TpIQg"], { env: l }),
                                  value: aE(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? E.default.o45MMA : E.default.S7o3vV,
                                      { count: aI(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(aU, {
                                      label: C.intl.formatToPlainString(E.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: aE,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function rn(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aH.Mf,
        children: [
            (0, n.jsx)(aq, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(rt, {
                            title: C.intl.string(E.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(rt, {
                            title: C.intl.string(E.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(rl, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(a4, {
                                title: C.intl.string(E.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(a6, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(a4, {
                                title: C.intl.string(E.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(a8, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(a4, {
                                title: C.intl.string(E.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(a9, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(a4, {
                                title: C.intl.string(E.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(re, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(aV, { analytics: t.analytics }),
                        (0, n.jsxs)(az, {
                            title: C.intl.string(E.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(aG, {
                                    label: C.intl.string(E.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? aP(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(aG, {
                                    label: C.intl.string(E.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? aP(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function ra(e, t) {
    return String(e).padStart(t, "0");
}
function rr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${ra(n.getHours(), 2)}:${ra(n.getMinutes(), 2)}:${ra(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${ra(n.getMilliseconds(), 3)}` : a;
}
var ri = l(977129);
let rs = new Map(),
    ru = new Map(),
    ro = 0,
    rd = 0;
async function rc(e, t, l) {
    let n = ro,
        a = rs.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < rd) return { status: "forbidden" };
    let r = ru.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, ri.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((rd = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let u = await s.json();
            if (!0 !== u.available || null == u.rich) return { status: "unavailable" };
            if (n !== ro) return { status: "failed" };
            var l = u.rich;
            for (rs.set(t, l); rs.size > 100;) {
                let e = rs.keys().next();
                if (!0 === e.done) break;
                rs.delete(e.value);
            }
            return { status: "loaded", rich: u.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    ru.set(t, i);
    let s = await i;
    return (ru.get(t) === i && ru.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function rf() {
    ((ro += 1), rs.clear(), ru.clear(), (rd = 0));
}
function rm(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function rh(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function rg(e) {
    switch (e) {
        case "subagent":
            return C.intl.string(E.default["EoY7D+"]);
        case "context":
            return C.intl.string(E.default.KVFrD3);
        case "tool":
            return C.intl.string(E.default["/N6ZU9"]);
        case "delegated":
            return C.intl.string(E.default.HcEbf2);
        default:
            return C.intl.string(E.default.AhOqQs);
    }
}
function rx(e) {
    return "model" === e.kind
        ? "compaction" === e.agent
            ? "context"
            : "subagent" === e.agent
              ? "subagent"
              : "model"
        : "subagent" === e.agent
          ? "delegated"
          : "tool";
}
let rp = ["model", "tool", "subagent", "delegated", "context"];
function rv(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(rx(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function rb(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let rj = ["arguments", "result", "usage", "diagnostics"];
var ry = l(40715);
let rk = { started: ry.Vf, ok: ry.mo, error: ry.Sr };
function rN(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${ry.Om} ${rk[t] ?? ry.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return C.intl.string(E.default.HpKDyl);
                case "error":
                    return C.intl.string(E.default["5T4Dd0"]);
                default:
                    return C.intl.string(E.default.VbEmf0);
            }
        })(t),
    });
}
let rw = { model: ry.WI, subagent: ry.uM, context: ry.eH, tool: ry.pw, delegated: ry.C8 };
function rA(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: ry.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: ry.D6, children: t }),
            (0, n.jsx)("div", { className: ry.zL, children: l }),
        ],
    });
}
function rS(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(rA, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function rE(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: ry.WA, children: t });
}
function rC(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: ry.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: ry.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function rI(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: ry.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: ry.p8,
                children: [
                    (0, n.jsx)(tH._, { className: ry.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: ry.bG, children: l }),
        ],
    });
}
function rM(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(rA, {
            label: t.key,
            value: (0, n.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? C.intl.formatToPlainString(E.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? C.intl.formatToPlainString(E.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(rA, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: ry.Kv,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return C.intl.string(E.default.xO6bcQ);
                            case "content":
                                return C.intl.string(E.default.gpBZRr);
                            default:
                                return C.intl.string(E.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, n.jsx)(v.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function rT(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: ry.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: ry.uh,
                          children: C.intl.string(E.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          rA,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: ry.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: ry.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: C.intl.string(E.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? C.intl.string(E.default["1kBG9Z"])
                                                        : C.intl.formatToPlainString(E.default.VGSwo4, {
                                                              count: e.chars,
                                                          }),
                                            }),
                                  ],
                              }),
                          },
                          e.key,
                      ),
                  ),
              ],
          });
}
function rP(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : C.intl.string(
                      "loading" === t.status
                          ? E.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? E.default.jEQTot
                            : E.default.fj5wM8,
                  );
    return null == l
        ? null
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: ry.E7, children: l });
}
function r_(e) {
    let { projectId: t, entry: l, onClose: r, parent: i, onSelect: s, childCount: u } = e,
        o = (function (e) {
            let { childCount: t = 0, hasParent: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && n.add("arguments"),
                    "started" !== e.status && n.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    n.add("usage");
            return (
                (l || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && n.add("diagnostics"),
                rj.filter((e) => n.has(e))
            );
        })(l, { childCount: u, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != rs.get(t)) return;
                    let l = new AbortController();
                    return (
                        rc(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = rs.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        f = rr(l.startedAt, "millis"),
        m = rx(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: ry._0,
        onKeyDown: h,
        role: "region",
        "aria-label": C.intl.formatToPlainString(E.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: ry.sy,
                children: (0, n.jsxs)("div", {
                    className: ry.HI,
                    children: [
                        (0, n.jsx)(rN, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${ry.PY} ${rw[m]}`,
                            children: rg(m),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: ry.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: ry.l5,
                            children: null == l.durationMs ? C.intl.string(E.default.HpKDyl) : rm(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: ry.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            o.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(rC, {
                      title: C.intl.string(E.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(rM, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(rT, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(rP, { detail: d }),
                      ],
                  })
                : null,
            o.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(rC, {
                      title: C.intl.string(E.default.KXrf5F),
                      children: [
                          (0, n.jsx)(rS, {
                              label: C.intl.string(E.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(E.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(rS, {
                                    label: C.intl.string(E.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(rA, {
                                    label: C.intl.string(E.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: C.intl.string(E.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(rT, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            o.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(rC, {
                      title: C.intl.string(E.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(rE, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(rS, {
                                            label: C.intl.string(E.default.Ran4BY),
                                            value: C.intl.formatToPlainString(E.default["PYO+Jv"], {
                                                tokens: rh(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(rS, {
                                            label: C.intl.string(E.default.vPIcyv),
                                            value: C.intl.formatToPlainString(E.default.Qy2iTq, {
                                                system: rh(l.systemTokens),
                                                tools: rh(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: rh(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(rS, {
                                            label: C.intl.string(E.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(rS, {
                                            label: C.intl.string(E.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(rS, {
                                            label: C.intl.string(E.default.VyAl6j),
                                            value: C.intl.formatToPlainString(E.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(rS, {
                                            label: C.intl.string(E.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: ry.E7,
                              children: C.intl.string(E.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            o.includes("arguments") || o.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: ry.E7,
                      children: C.intl.string(E.default["ppv+97"]),
                  })
                : null,
            o.includes("diagnostics")
                ? (0, n.jsx)(rI, {
                      title: C.intl.string(E.default.T7SFyZ),
                      children: (0, n.jsxs)(rE, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(rA, {
                                        label: C.intl.string(E.default.NnBqcd),
                                        value: (0, n.jsx)(eJ.D, {
                                            tag: "div",
                                            className: ry.mi,
                                            onClick: () => s(i.id),
                                            children: (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === i.kind ? i.model : i.tool,
                                            }),
                                        }),
                                    }),
                              0 === u
                                  ? null
                                  : (0, n.jsx)(rS, {
                                        label: C.intl.string(E.default.fI6mzD),
                                        value: C.intl.formatToPlainString(E.default.hO8FYp, { count: u }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(rS, { label: C.intl.string(E.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(rS, { label: C.intl.string(E.default["XVTP/S"]), value: l.id }),
                              null == f ? null : (0, n.jsx)(rS, { label: C.intl.string(E.default.rD7bm0), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(rS, { label: C.intl.string(E.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: ry.Hm,
                                                children: C.intl.string(E.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    rS,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? C.intl.formatToPlainString(E.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : C.intl.formatToPlainString(E.default["/L6GFe"], {
                                                                  type: e.type,
                                                              }),
                                                    },
                                                    e.name,
                                                ),
                                            ),
                                        ],
                                    }),
                          ],
                      }),
                  })
                : null,
            (0, n.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ry.E7,
                children: C.intl.string(E.default.khAjR0),
            }),
        ],
    });
}
let rR = { model: ry.WI, subagent: ry.uM, context: ry.eH, tool: ry.pw, delegated: ry.C8 };
function rL(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = rx(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return rp.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: ry.M0,
        children: [
            (0, n.jsx)("div", {
                className: ry.pZ,
                "aria-hidden": !0,
                children:
                    0 === r
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, n.jsx)(
                                        "div",
                                        {
                                            className: `${ry.dL} ${rR[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: ry.z4,
                role: "group",
                "aria-label": C.intl.string(E.default.UZ1OlR),
                children: rp.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: ry.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${ry.A9} ${rR[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: rg(e) }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: C.intl.formatToPlainString(E.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: C.intl.formatToPlainString(E.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: rm(a),
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
let rF = { model: ry.WI, subagent: ry.uM, context: ry.eH, tool: ry.pw, delegated: ry.C8 };
function rD(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        u = rx(t),
        o = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(E.default["PYO+Jv"], { tokens: rh(t.promptTokens) })
                : null != t.durationMs
                  ? rm(t.durationMs)
                  : null;
    return (0, n.jsxs)(eJ.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${ry.nM} ${s ? ry.A5 : ""} ${"error" === t.status ? ry.Cr : ""} ${l ? ry.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: ry.sU,
                children: [
                    (0, n.jsx)(rN, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${ry.PY} ${rF[u]}`,
                        children: rg(u),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: ry.G9,
                        children: o,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: ry.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: ry.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: ry.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rO(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([lq.Ay], () => lq.Ay.getTrace(l), [l]),
        s = (0, D.bG)([lq.Ay], () => lq.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => rf, [l]);
    let [u, o] = a.useState(null),
        [d, c] = a.useState(40),
        [f, m] = a.useState(!1),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(null),
        b = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => o((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, ld.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, ld.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, ai.A)({
            resizableDomNodeRef: g,
            orientation: ai.R.VERTICAL_TOP,
            getClampedValue: N,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => m(!0),
            onElementResizeEnd: () => m(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        A = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), w(e));
            },
            [w],
        ),
        S = a.useCallback((e) => {
            let t =
                "ArrowUp" === e.key
                    ? 5
                    : "ArrowDown" === e.key
                      ? -5
                      : "Home" === e.key
                        ? 75
                        : "End" === e.key
                          ? -75
                          : null;
            null != t && (e.preventDefault(), c((e) => (0, ld.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (o(null), j(u));
        }, [u, j]),
        M = a.useMemo(() => rv(i, r), [i, r]),
        T = a.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = null;
                    for (let n of e) {
                        let e = n.turnId ?? null;
                        ((null == l || l.turnId !== e) &&
                            ((l = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: l.entries, startedAt: n.startedAt, spanMs: null })),
                            l.entries.push(n));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                l = -1 / 0;
                            for (let n of e) {
                                let e = Date.parse(n.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != n.durationMs && (l = Math.max(l, e + n.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(l) ? Math.max(0, l - t) : null;
                        })(e.entries),
                    }));
                })(i)
                    .map((e, t) => ({ ...e, index: t, entries: rv(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        P = rb(M, u),
        _ = P?.kind === "tool" ? rb(i, P.parentId ?? null) : null,
        R = null == P ? 0 : ((t = P.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = M[M.length - 1];
    a.useLayoutEffect(() => {
        if (null != u) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, u]);
    let F = a.useCallback(
        (e) => {
            if (0 === M.length) return;
            let t = M.findIndex((e) => e.id === u);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(M.length - 1, t));
                (o(M[l].id), document.getElementById(`trace-${M[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? M.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(M.length - 1)
                      : "Escape" === e.key && null != u && (e.preventDefault(), o(null), j(u));
        },
        [M, u, j],
    );
    return 0 === i.length
        ? (0, n.jsx)("div", {
              className: ry.uP,
              ref: h,
              children: (0, n.jsx)(a1, {
                  state: s,
                  emptyTitle: C.intl.string(E.default.Iyt8OJ),
                  emptyBody: C.intl.string(E.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${ry.uP} ${f ? ry.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: ry.DK,
                      children: [
                          (0, n.jsx)(rL, { entries: i }),
                          (0, n.jsx)(a0, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: ry.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(E.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: x,
                                    className: ry.Ns,
                                    children: [
                                        (0, n.jsx)(a2, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(E.default["QATZ+A"]),
                                            className: ry.p_,
                                            children: T.map((e) => {
                                                let t = rr(e.startedAt),
                                                    l = C.intl.formatToPlainString(E.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: ry.mf,
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, n.jsx)(v.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: rm(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: ry.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        rD,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === u,
                                                                            tabbable: e.id === (u ?? M[0]?.id),
                                                                            onSelect: y,
                                                                            onKeyDown: F,
                                                                            nested:
                                                                                "tool" === e.kind && null != e.parentId,
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    e.turnId ?? `ungrouped-${e.index}`,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                      ],
                  }),
                  null == P
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": C.intl.string(E.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: ry.b1,
                                    onPointerDown: A,
                                    onKeyDown: S,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: ry.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(r_, {
                                        projectId: l,
                                        entry: P,
                                        parent: _,
                                        childCount: R,
                                        onSelect: o,
                                        onClose: I,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var r$ = l(402879);
function rq(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([lq.Ay], () => lq.Ay.getTrace(t), [t]),
        s = a.useRef(null),
        u = a.useCallback(() => {
            let e = JSON.stringify(
                {
                    kind: "vibegrations.trace",
                    version: 1,
                    project_id: t,
                    exported_at: new Date().toISOString(),
                    note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                    entries: i,
                },
                null,
                2,
            );
            (0, r$.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: ry.ED,
                children: (0, n.jsx)(aZ.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: C.intl.string(E.default.NfncNw),
                    "aria-label": C.intl.string(E.default.NfncNw),
                }),
            }),
            (0, n.jsx)(le.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: le.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(lt.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(ll.rX, {
                            children: (0, n.jsx)(ll.Dr, {
                                id: "export",
                                label: C.intl.string(E.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: u,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(tI.K, {
                        ...e,
                        buttonRef: s,
                        icon: nt.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": C.intl.string(C.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var rz = l(497243);
function rG(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, o] = a.useState(""),
        c = (0, D.bG)([ag.A], () => ag.A.isDeveloper),
        m = (0, D.bG)([aS], () => aS.getStatus(t), [t]),
        h = (0, D.bG)([aS], () => aS.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, f.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, f.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, ax.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: aS.getStatus(t),
                        last_turn_usage: aS.getLastTurnUsage(t),
                        last_compaction: aS.getLastCompaction(t),
                        last_compaction_decline: aS.getLastCompactionDecline(t),
                        model_calls: aS.getModelCalls(t),
                        logs: lq.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ao.P0)((0, ad.o)(C.intl.string(E.default.sDSDiO), ac.Ck.SUCCESS)),
            );
        }, [t]),
        p = C.intl.string(E.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rz.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: af.CopyIcon,
                            tooltip: C.intl.string(E.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: am.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rz.rf,
                children: [
                    (0, n.jsxs)(ah.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(E.default.uNyR86),
                        className: rz.vR,
                        children: [
                            (0, n.jsx)(ah.V.Item, { id: "logs", children: C.intl.string(E.default["1mpzdJ"]) }),
                            (0, n.jsx)(ah.V.Item, { id: "worker", children: C.intl.string(E.default.whGHLD) }),
                            (0, n.jsx)(ah.V.Item, { id: "agent", children: C.intl.string(E.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(ah.V.Item, { id: "trace", children: C.intl.string(E.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(a3, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(rn, { status: m, fetchState: h, onRefresh: g })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rz.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rz.XH,
                                          children: (0, n.jsx)(rq, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, n.jsx)(rO, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(aX, { projectId: t, status: m, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rU = l(333007),
    rB = l(103557),
    rV = l(97808),
    rH = l(778712),
    rW = l(365912),
    rK = l(775121),
    rY = l(486020),
    rX = l(277437);
function rQ(e) {
    let {
            projectId: t,
            at: l,
            bounds: r,
            kind: s,
            value: u,
            onChange: o,
            onSubmit: d,
            onDismiss: c,
            canSubmit: f,
            closing: m,
            onUploadFile: h,
        } = e,
        {
            drafts: g,
            addFiles: x,
            pasteFiles: p,
            removeDraft: v,
            settled: b,
            takeRefs: j,
        } = lI({ projectId: t, surface: "design", onUploadFile: h }),
        y = a.useRef(null),
        k = (f || g.length > 0) && b && !m,
        N = a.useCallback(() => {
            if (!k) return;
            let e = j();
            d(e.length > 0 ? e : void 0);
        }, [k, j, d]),
        [w, A] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => A(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let S = a.useRef(null),
        [I, M] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = S.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => M({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = I?.height ?? 44,
        P = r.left + 8,
        _ = r.top + 8,
        R = Math.max(l.x, P),
        L = Math.min(Math.max(l.y + 32 + 4, _), Math.max(_, r.top + r.height - T - 8));
    return (0, n.jsxs)("div", {
        ref: S,
        className: i()(rX.M0, { [rX.ho]: w && !m, [rX.ET]: m }),
        style: { left: R, top: L },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: rX.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(e6.m, {
                position: "bottom",
                text: C.intl.string(E.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: rX.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": C.intl.string(E.default.d6Rqlu),
                    children: (0, n.jsx)(t9.H, { size: "custom", color: "currentColor", className: rX.WW }),
                }),
            }),
            (0, n.jsx)(lr.y, {
                autoFocus: !0,
                rows: 1,
                className: rX.hF,
                value: u,
                placeholder: "" === s ? C.intl.string(E.default.FK09JH) : `Edit ${s}`,
                "aria-label": C.intl.string(E.default["qR+sGX"]),
                onChange: (e) => o(e.target.value),
                onPaste: m ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            g.length > 0
                ? (0, n.jsx)("div", {
                      className: rX.ZO,
                      children: g.map((e) => (0, n.jsx)(lM, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var rZ = l(320510);
function rJ(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let l = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (l.value = e.value),
        "string" == typeof e.path && "" !== e.path && (l.path = e.path),
        l
    );
}
function r0(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rJ(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var r1 = l(940107),
    r2 = l(42843);
let r7 = { x: 25, y: 21 };
function r5(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function r3(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function r4(e, t, l, n) {
    let a = r3(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function r6(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function r8(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let l = t.viewport?.width,
        n = t.viewport?.height;
    return "number" != typeof l || "number" != typeof n || l < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: l, height: n },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function r9(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        u = null != l && l === r ? t : null,
        { active: o, annotations: d } = (0, eH.Q_)(u),
        c = (0, nS.o4)(u),
        m = (0, tS.useHasAnyModalOpen)(),
        h = (0, D.bG)([eo.default], () => eo.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, S] = a.useState(null),
        [I, M] = a.useState(!1),
        T = a.useRef(null),
        P = a.useRef(null),
        _ = a.useRef(null),
        [R, L] = a.useState(null),
        [F, O] = a.useState(!1),
        [$, q] = a.useState(null),
        [z, G] = a.useState(null),
        U = a.useRef(!1),
        [B, V] = a.useState(!1),
        [H, W] = a.useState(null),
        K = o && !c && !m;
    null == $ || (K && $.projectId === u) || q(null);
    let Y = $?.projectId ?? null;
    (a.useEffect(() => {
        if (null != Y) return () => eG(Y, "design");
    }, [Y]),
        a.useEffect(() => {
            if (!K) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(i());
                p((t) => (r5(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [K, i]),
        a.useEffect(() => {
            if (!K || null == u) return;
            let e = !0,
                t = i();
            if (null == t) return void w(!0);
            (k(!0), w(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, rZ.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? r8(t.response) : null;
                        null == l ? w(!0) : (j(l), (0, eH._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), w(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, i, u]));
    let Q = a.useRef(null);
    (a.useEffect(() => {
        if (!K || null == x || null == u) return;
        if (null == b) {
            Q.current = x;
            return;
        }
        if (r5(Q.current, x)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            Q.current = x;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rZ.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !et.current) return;
                        let l = r8(e.response);
                        null != l && (j(l), (0, eH._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rJ(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, eH.fA)(u, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, x, b, d, u, i]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), q(null), W(null), j(null));
                };
        }, [K]));
    let Z = a.useRef(null),
        J = a.useRef(null),
        ee = a.useRef(!1),
        et = a.useRef(!1);
    a.useEffect(() => {
        ((et.current = K), K || ((Z.current = null), (J.current = null), (_.current = null), M(!1)));
    }, [K]);
    let el = a.useCallback(
            function e() {
                if (ee.current) return;
                let t = Z.current;
                if (null == t) return;
                Z.current = null;
                let l = i();
                null != l &&
                    ((ee.current = !0),
                    (0, r1.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(r0, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((ee.current = !1), et.current)) {
                                if ("picked" !== t.status || ii(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && O(!0);
                                else {
                                    let e = (0, ew.ts)(t.target);
                                    (L((t) => (ir(t, e) ? t : e)),
                                        S((e) => {
                                            var l;
                                            return ((l = t.target),
                                            null == e || null == l
                                                ? e === l
                                                : e.ref === l.ref &&
                                                  e.rect.x === l.rect.x &&
                                                  e.rect.y === l.rect.y &&
                                                  e.rect.width === l.rect.width &&
                                                  e.rect.height === l.rect.height)
                                                ? e
                                                : t.target;
                                        }));
                                }
                                e();
                            }
                        }));
            },
            [i],
        ),
        en = a.useCallback(() => {
            if (null == $) return;
            let e = !U.current;
            (G({ at: $.at, label: $.label, draft: $.draft, instant: e }), V(e), q(null));
        }, [$]);
    (a.useEffect(() => {
        if (!B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]),
        a.useEffect(() => {
            if (null == z) return;
            let e = setTimeout(() => G(null), il);
            return () => clearTimeout(e);
        }, [z]));
    let ea = null == b || null == x || b.viewport.width < 1 ? 1 : x.width / b.viewport.width,
        er = null != b || N,
        ei = a.useMemo(() => b?.elements ?? [], [b]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: x, scale: ea };
    }, [x, ea]);
    let eu = a.useCallback(
            (e, t, l) => {
                null != u &&
                    (eG(u, "design"),
                    W(null),
                    (U.current = !1),
                    q({ projectId: u, target: e, anchor: t, draft: "", at: l, label: (0, ew.ts)(e) }));
            },
            [u],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ec = a.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = P.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ec);
    let ef = a.useCallback(
            (e) => {
                if (null == x || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ec(), M(!0), null != $)) {
                    (Math.abs(e.clientX - $.at.x) > ia || Math.abs(e.clientY - $.at.y) > ia) && (U.current = !0);
                    return;
                }
                if (!er) return void S(null);
                let t = ed(e, x);
                if (F) {
                    let e = (0, ew.jo)(ei, t.x, t.y),
                        l = null != e && ii(e, x, ea) ? null : e;
                    if (null != l) {
                        let e = (0, ew.ts)(l);
                        L((t) => (ir(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = J.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((J.current = l), (Z.current = l), el());
            },
            [x, ea, er, ed, F, ei, $, H, ec, el],
        ),
        em = a.useCallback(() => {
            (M(!1), S(null), (J.current = null), (Z.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !er || F || null != $ || null != H) return;
        let e = _.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((J.current = n), (Z.current = n), el());
    }, [K, I, er, F, $, H, el]);
    let eh = a.useCallback(
            (e) => {
                if (null != $ || null != H) {
                    (en(), W(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = ed(e, x);
                eu(A, (0, ew.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, x, ed, $, H, eu, en],
        ),
        eg = a.useCallback(() => {
            null != u && (S(null), (0, eH.PS)(u));
        }, [u]),
        ex = a.useCallback(() => {
            null != u &&
                (null != $
                    ? en()
                    : H?.confirmingRemove === !0
                      ? W({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? W(null)
                        : eg());
        }, [u, $, H, en, eg]),
        ep = a.useRef(ex),
        ev = a.useRef(eg);
    a.useLayoutEffect(() => {
        ((ep.current = ex), (ev.current = eg));
    });
    let eb = a.useRef(null);
    a.useEffect(() => {
        if (K)
            return (
                rK.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rK.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ep.current());
        }
        function t(e) {
            let t = e.target;
            (0, nB.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rW.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ev.current();
        }
    }, [K, s]);
    let ej = a.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ex());
                    return;
                }
                if (null != $ || null != H || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : ei.findIndex((e) => e.ref === A.ref);
                    S(ei[(l + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    eu(A, ew.F6, { x: (x?.left ?? 0) + A.rect.x * ea, y: (x?.top ?? 0) + A.rect.y * ea }));
            },
            [u, $, H, ei, A, eu, ex, x, ea],
        ),
        ey = a.useCallback(
            (e) => {
                null == u ||
                    null == $ ||
                    (((0, ew.to)($.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, f.dv)(u, (0, ew.v_)($.target, $.draft), e), en(), S(null)));
            },
            [u, $, en],
        ),
        ek = a.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, f.vX)(u, e)), [u]),
        eN = a.useCallback(() => {
            null == u ||
                null == H ||
                null == g ||
                ((0, ew.to)(H.draft) && ((0, eH.dy)(u, g, H.id, H.draft.trim()), W({ ...H, editing: !1 })));
        }, [u, H, g]),
        eA = a.useCallback(() => {
            null != u && null != H && null != g && ((0, eH.PR)(u, g, H.id), W(null));
        }, [u, H, g]),
        eS = o
            ? y
                ? C.intl.string(E.default.jQQ8i2)
                : N
                  ? C.intl.string(E.default.zvU2QH)
                  : C.intl.formatToPlainString(E.default.A4HDMU, { count: d.length })
            : "",
        eE = K && null != x,
        eC = I && null == H,
        eI = null == H ? null : d.find((e) => e.id === H.id),
        eM = $?.target ?? eI?.target ?? null,
        eT = $ ?? z,
        eP = $ ?? (z?.instant === !0 ? null : z),
        e_ =
            null != eI && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = r6(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(r4(eI.target, eI.anchor, x, ea), x)
                : null;
    return (0, rU.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: r2.Li,
            children: [
                (0, n.jsx)("div", {
                    className: r2.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eE
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: r2.MT,
                                  style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                  "data-plain-cursor": eC ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": C.intl.string(E.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ef,
                                  onMouseLeave: em,
                                  onClick: eh,
                                  onKeyDown: ej,
                              }),
                              null != A && null == $ && null == H ? (0, n.jsx)(is, { box: r3(A, x, ea) }) : null,
                              (0, n.jsx)("div", {
                                  ref: T,
                                  className: r2.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: r2.xz,
                                      "data-shown": null != A && null == H && null == $ ? "" : void 0,
                                      "data-instant": B ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: r2.Ux,
                                          children: [
                                              null == R
                                                  ? null
                                                  : (0, n.jsx)("span", { className: r2.Tl, children: R.kind }),
                                              null == R || "" === R.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: r2.kh, children: [" ", R.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: P,
                                  className: r2.Y,
                                  children: eC
                                      ? (0, n.jsx)(ne.A, { className: r2.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eP
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: r2.aZ,
                                        style: { transform: `translate3d(${eP.at.x + 12}px, ${eP.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: r2.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == $ ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: r2.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: r2.Tl, children: eP.label.kind }),
                                                    "" === eP.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: r2.kh,
                                                              children: [" ", eP.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eM
                                  ? (0, n.jsx)("div", { className: r2.D0, style: r3(eM, x, ea), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = r4(e.target, e.anchor, x, ea),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: r2.xL,
                                          style: { ...r6(l, x), width: 24, height: 24 },
                                          "aria-label": C.intl.formatToPlainString(E.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, ew.iw)(e.target),
                                          }),
                                          "aria-expanded": H?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == $ && W(a);
                                          },
                                          onFocus: () => {
                                              null == $ && W(a);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), en(), W(a));
                                          },
                                          children: (0, n.jsx)(ie, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eT || null == u
                                  ? null
                                  : (0, n.jsx)(rQ, {
                                        projectId: u,
                                        at: { x: eT.at.x + 12, y: eT.at.y + 12 },
                                        bounds: x,
                                        kind: eT.label.kind,
                                        value: eT.draft,
                                        canSubmit: null != $ && (0, ew.to)(eT.draft),
                                        onChange: (e) => {
                                            null != $ && q({ ...$, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: en,
                                        onUploadFile: ek,
                                        closing: null == $,
                                    }),
                              null != eI && null != H && null != e_
                                  ? (0, n.jsxs)(it, {
                                        point: e_,
                                        frame: x,
                                        authorId: eI.authorId,
                                        title: (0, ew.iw)(eI.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            H.confirmingRemove ? W({ ...H, confirmingRemove: !1 }) : W(null);
                                        },
                                        onMouseLeave: () => {
                                            H.editing || H.confirmingRemove || W(null);
                                        },
                                        children: [
                                            H.editing
                                                ? (0, n.jsx)(rB.f, {
                                                      autoFocus: !0,
                                                      label: C.intl.string(E.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: H.draft,
                                                      maxLength: ew.gq,
                                                      rows: 3,
                                                      onChange: (e) => W({ ...H, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eN());
                                                      },
                                                  })
                                                : (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: r2.aC,
                                                      children: eI.comment,
                                                  }),
                                            (0, eH.zz)(eI, g)
                                                ? (0, n.jsx)("div", {
                                                      className: r2.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: r2.nv,
                                                                        children: C.intl.string(E.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(E.default.cLsnYH),
                                                                        onClick: () =>
                                                                            W({ ...H, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: C.intl.string(E.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eA,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(E.default.ncz32j),
                                                                        onClick: () =>
                                                                            W({
                                                                                ...H,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    H.editing
                                                                        ? (0, n.jsx)(X.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, ew.to)(H.draft),
                                                                              text: C.intl.string(E.default.wIeFN0),
                                                                              onClick: eN,
                                                                          })
                                                                        : (0, n.jsx)(X.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: C.intl.string(E.default.DKZggU),
                                                                              onClick: () =>
                                                                                  W({
                                                                                      ...H,
                                                                                      editing: !0,
                                                                                      draft: eI.comment,
                                                                                  }),
                                                                          }),
                                                                ],
                                                            }),
                                                  })
                                                : null,
                                        ],
                                    })
                                  : null,
                          ],
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
function ie(e) {
    let { authorId: t } = e,
        l = (0, D.bG)([eo.default], () => eo.default.getUser(t), [t]);
    return (0, n.jsx)(rV.eu, {
        src: null == l ? null : rY.Ay.getUserAvatarURL(l),
        size: rH._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function it(e) {
    let t,
        l,
        r,
        i,
        s,
        u,
        { point: o, frame: d, authorId: c, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(r7);
    a.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: N,
            originX: w,
            originY: A,
        } = ((l = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (i = Math.max((r = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - j.x, t), l)),
        { left: s, top: (u = Math.min(Math.max(o.y - j.y, r), i)), originX: o.x - s, originY: o.y - u }),
        S = {
            left: k,
            top: N,
            "--custom-vibegrations-card-origin-x": `${w}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, n.jsxs)("div", {
        ref: p,
        className: r2.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: r2.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: r2.ip, children: (0, n.jsx)(ie, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: r2.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: r2.zI, children: x }),
        ],
    });
}
let il = 300,
    ia = 2;
function ir(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function ii(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function is(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: r2.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var iu = l(11055),
    io = l(175841),
    id = l(533140),
    ic = l(342667);
function im(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: r } = e,
        { stop: i, stopping: s } = (function (e) {
            let t = (0, D.bG)([eS.Ay], () => null != e && eS.Ay.isThinking(e)),
                [l, n] = a.useState(!1),
                [r, i] = a.useState(t);
            (t !== r && (i(t), t || n(!1)),
                a.useEffect(() => {
                    if (!l) return;
                    let e = setTimeout(() => n(!1), 5e3);
                    return () => clearTimeout(e);
                }, [l]));
            let s = a.useCallback(() => {
                null != e && (n(!0), (0, f.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: l };
        })(l),
        u = "controlling" === t;
    return (0, n.jsxs)("div", {
        className: ic.M0,
        "data-phase": t,
        "data-testid": "vibegrations-control-notice",
        children: [
            (0, n.jsxs)("div", {
                className: ic.sp,
                children: [
                    (0, n.jsx)(io.SparklesIcon, { size: "sm", color: "currentColor" }),
                    u ? (0, n.jsx)(nE.i, { size: 12, color: "currentColor" }) : null,
                    (0, n.jsxs)("div", {
                        className: ic.f4,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: ic.w9,
                                children: C.intl.string(u ? E.default.ydhvN1 : E.default["7U6tIB"]),
                            }),
                            u
                                ? (0, n.jsx)(v.E, {
                                      variant: "text-xs/medium",
                                      color: "none",
                                      className: ic.Rb,
                                      children: C.intl.string(E.default.NldIIG),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            u
                ? (0, n.jsxs)("div", {
                      className: ic.lC,
                      children: [
                          null != r
                              ? (0, n.jsx)(X.$, {
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    text: C.intl.string(E.default.kj5epw),
                                    onClick: r,
                                })
                              : null,
                          null != i
                              ? (0, n.jsx)(X.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: C.intl.string(E.default["2HalWx"]),
                                    loading: s,
                                    onClick: i,
                                    "data-testid": "vibegrations-control-stop",
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function ih(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            resolveIframe: i,
            frameId: s,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, nS.o4)(null != l && l === r ? t : null),
        d = (function (e) {
            let [t, l] = a.useState(e),
                [n, r] = a.useState(!1);
            return (e !== t && (l(e), r(!e)),
            a.useEffect(() => {
                if (!n) return;
                let e = setTimeout(() => r(!1), 2400);
                return () => clearTimeout(e);
            }, [n]),
            e)
                ? "controlling"
                : n
                  ? "handoff"
                  : "idle";
        })(o),
        c = (0, tS.useHasAnyModalOpen)(),
        f = (0, id.V0)(s);
    a.useEffect(() => {
        o && f && null != s && (0, id.c2)(s);
    }, [o, f, s]);
    let [m, h] = a.useState(null),
        g = "idle" !== d;
    a.useEffect(() => {
        if (!g) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            h((t) =>
                (
                    null == t || null == e
                        ? t === e
                        : t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
                )
                    ? t
                    : e,
            );
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [g, i]);
    let x = "idle" !== d && null != m && !c,
        p = x && "controlling" === d,
        v = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height };
    return (0, rU.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: ic.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children:
                        "controlling" === d
                            ? C.intl.string(E.default.dIE9zO)
                            : "handoff" === d
                              ? C.intl.string(E.default["7U6tIB"])
                              : "",
                }),
                p
                    ? (0, n.jsx)("div", {
                          className: ic.om,
                          style: v,
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
                x
                    ? (0, n.jsx)("div", {
                          className: ic.D,
                          style: v,
                          children: (0, n.jsx)(im, { phase: d, projectId: t, onOpenPublishedApp: u }),
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var ig = l(237528),
    ix = l(664121),
    ip = l(95477),
    iv = l(724401);
function ib(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function ij(e) {
    let t,
        { projectId: l, installScope: r, onClose: i } = e,
        s = "user" === r ? ["stable"] : ["preview", "stable"],
        [o, c] = a.useState(s[0] ?? "stable"),
        [h, g] = a.useState({ status: "loading" }),
        [x, p] = a.useState(""),
        [b, j] = a.useState(""),
        [y, k] = a.useState({ phase: "idle" }),
        N = "busy" === y.phase,
        [w, A] = a.useState(0),
        S = a.useCallback(() => A((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${o}`;
        return (
            Promise.all([(0, f.DM)(l, o), (0, f.ms)(l, o)])
                .then((l) => {
                    let [n, a] = l;
                    e || g({ status: "loaded", key: t, points: n, window: a, nowMs: Date.now() });
                })
                .catch(() => {
                    e || g({ status: "failed", key: t });
                }),
            () => {
                e = !0;
            }
        );
    }, [l, o, w]);
    let I = "loading" !== h.status && h.key === `${l}|${o}` ? h : { status: "loading" },
        M = a.useCallback(
            (e, t) => {
                (0, th.A)({
                    title: C.intl.string(E.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? C.intl.formatToPlainString(E.default["0lt6bH"], { target: e })
                            : C.intl.formatToPlainString(E.default.zVcDfj, {
                                  environment: C.intl.string(
                                      "preview" === o ? E.default["/kYdZe"] : E.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: C.intl.string(E.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (k({ phase: "busy", environment: o, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (k({
                                              phase: "settled",
                                              environment: o,
                                              tone: "positive",
                                              text: C.intl.string(E.default.kIWqXR),
                                          }),
                                          S())
                                        : "expired" === e.code
                                          ? (k({
                                                phase: "settled",
                                                environment: o,
                                                tone: "danger",
                                                text: C.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                            }),
                                            S())
                                          : "unconfirmed" === e.code
                                            ? (k({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: C.intl.string(E.default["2xSPXh"]),
                                              }),
                                              S())
                                            : k({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: C.intl.string(E.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    k({
                                        phase: "settled",
                                        environment: o,
                                        tone: "danger",
                                        text: C.intl.string(E.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [o, s, S],
        ),
        T = a.useCallback(() => {
            (k({ phase: "busy", environment: o, kind: "create" }),
                (0, f._m)(l, o, x)
                    .then(() => {
                        (p(""),
                            k({
                                phase: "settled",
                                environment: o,
                                tone: "positive",
                                text: C.intl.string(E.default.mfAoFT),
                            }),
                            S());
                    })
                    .catch(() => {
                        k({ phase: "settled", environment: o, tone: "danger", text: C.intl.string(E.default.uhhqP3) });
                    }));
        }, [l, o, x, S]),
        P = "loaded" === I.status ? I.window : null,
        _ = "loaded" === I.status ? I.nowMs : 0,
        R = P?.earliestRestoreTimestampMs ?? _ - 2592e6,
        L = "" === b ? null : new Date(b).getTime(),
        F = null != L && !Number.isNaN(L) && L >= R && L <= _,
        D =
            "busy" === y.phase
                ? "restore" === y.kind && y.environment === o
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === y.phase && y.environment === o
                  ? { kind: "notice", tone: y.tone, text: y.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === I.status
                ? (0, n.jsx)("div", { className: iv.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: iv.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: iv.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(tg.Ip, {
                          className: iv.p_,
                          children: (0, n.jsx)("div", {
                              className: iv.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, tp.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: tp._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: iv.KW,
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return C.intl.string(E.default.h4zhWL);
                                                          case "undo":
                                                              return C.intl.string(E.default["c/tNny"]);
                                                          default:
                                                              return C.intl.string(E.default["jViU+0"]);
                                                      }
                                                  })(e.origin),
                                              }),
                                              null != a.relative &&
                                                  (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: a.absolute ?? void 0,
                                                      children: a.relative,
                                                  }),
                                              e.expired &&
                                                  (0, n.jsx)(ig.v, {
                                                      text: C.intl.string(E.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: iv.AD,
                                                title: C.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: iv.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            eJ.D,
                                            {
                                                className: iv.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          M(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, f.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: iv.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        );
                              }),
                          }),
                      })),
        (0, n.jsxs)("section", {
            className: iv.nd,
            "aria-label": C.intl.string(E.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: ix.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: iv.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: iv.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(ah.V, {
                                        selectedItem: o,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": C.intl.string(E.default.CNvRyJ),
                                        className: iv.vR,
                                        children: [
                                            (0, n.jsx)(ah.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(E.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(ah.V.Item, {
                                                id: "stable",
                                                children: C.intl.string(E.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        C.intl.formatToPlainString(E.default.l07ism, { days: 30 }),
                                        null != P
                                            ? ` ${new Date(P.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === D.kind
                                    ? (0, n.jsxs)("div", {
                                          className: iv.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: C.intl.string(E.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === D.kind
                                      ? (0, n.jsx)("div", {
                                            className: iv.lm,
                                            role: "danger" === D.tone ? "alert" : "status",
                                            children: (0, n.jsx)(v.E, {
                                                variant: "text-sm/normal",
                                                color:
                                                    "danger" === D.tone
                                                        ? "text-feedback-critical"
                                                        : "text-feedback-positive",
                                                children: D.text,
                                            }),
                                        })
                                      : null,
                            ],
                        }),
                        t,
                        (0, n.jsxs)("div", {
                            className: iv.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: iv.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: iv.Fv,
                                            children: (0, n.jsx)(ip.k, {
                                                label: C.intl.string(E.default.hJb78b),
                                                value: x,
                                                onChange: p,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(X.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: C.intl.string(E.default["14UarN"]),
                                            onClick: T,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: iv._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: iv.kv,
                                            children: (0, n.jsx)(ip.k, {
                                                label: C.intl.string(E.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: ib(R),
                                                max: ib(_),
                                                disabled: N || null == P,
                                                onChange: j,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(X.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: C.intl.string(E.default["3D/vYN"]),
                                            disabled: N || !F,
                                            onClick: () => {
                                                null != L && M(new Date(L).toLocaleString(), () => (0, f.dz)(l, o, L));
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var iy = l(120426),
    ik = l(873727),
    iN = l(147248),
    iw = l(418842),
    iA = l(363195),
    iS = l(885386),
    iE = l(171936),
    iC = l(796036);
function iI(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: d,
            mainClassName: c,
            content: f,
            sidebar: m,
            onOpenPublishedApp: h,
        } = e,
        [g, x] = a.useState(null),
        p = (0, o.A)(r, u),
        v = p?.id ?? null;
    (!(function (e, t) {
        let l = (0, D.bG)([iA.A], () => (0, ik.x4)(iA.A.theme)),
            n = (0, D.bG)([iN.A], () => iN.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, D.cf)([lu.Ay], () => ({
                reducedMotion: lu.Ay.useReducedMotion,
                fontScale: (0, ik.U0)(),
                highContrast: lu.Ay.isHighContrastModeEnabled,
                forcedColors: lu.Ay.useForcedColors,
                underlineLinks: lu.Ay.alwaysShowLinkDecorations,
            })),
            d = iS.hH.useSetting(),
            c = (0, iw.C)(),
            f = a.useRef(!1),
            m = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, iy.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, ik.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, r1.W)(n, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, u, i, t, s, d, e, r, c, o]),
            p = a.useRef(x);
        a.useLayoutEffect(() => {
            p.current = x;
        });
        let v = a.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), m.current || p.current());
                }));
        }, []);
        (a.useEffect(
            () => (
                (m.current = !1),
                () => {
                    m.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                v();
            }, [n, v]),
            a.useLayoutEffect(() => {
                (x(), v());
            }, [v, x]),
            a.useLayoutEffect(() => {
                let l = (0, iy.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, iy.F)(e, t) && ((g.current = null), v());
                }
                return (document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0));
            }, [t, e, v]),
            a.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]));
    })(g, v),
        a.useEffect(() => {
            if (null != t) return (0, iE.mn)(t, () => (0, iy.F)(g, v));
        }, [t, g, v]));
    let b = a.useCallback(() => (0, iy.F)(g, v), [g, v]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: x, className: ej.fm, children: f })],
            }),
            m,
            (0, n.jsx)(ih, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                frameId: v,
                onOpenPublishedApp: h,
            }),
            (0, n.jsx)(r9, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function iM(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: o,
            surface: m,
            header: h,
            chatOpen: g,
            onCloseChat: x,
            chatHeaderAction: p,
            versionHistoryOpen: v = !1,
            restorePointsOpen: b = !1,
            onCloseRestorePoints: j,
            installScope: y = null,
            onCloseVersionHistory: k,
            onRestoreVersion: N,
            debugOpen: w = !1,
            onCloseDebug: A,
            restoreState: S,
            previewReady: I,
            previewGate: M,
            channelMessages: T,
            availability: P,
            activeMode: _,
            widgetApplicationId: R,
            onOpenPublishedApp: L = null,
        } = e,
        F = a.useRef(null),
        [D, O] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (m.type === s.U.MAIN) return ((0, c.HV)(r), () => (0, c.HV)(null));
    }, [r, m.type]),
        a.useEffect(() => {
            null != t && ((0, f.Hc)(t), (0, iC.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = F.current;
            if (null == e) return;
            function t() {
                null != e && O(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        a.useLayoutEffect(() => () => (0, c.Zq)(0), []));
    let $ = Math.max(360, D - 320),
        q = null != T ? T.open : g,
        z = g || m.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: F,
        className: ej.LB,
        children: (0, n.jsx)(iI, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: o,
            surface: m,
            header: h,
            onOpenPublishedApp: L,
            mainClassName: null == h ? void 0 : i()(ej.ez, { [ej.zt]: q }),
            content: (0, n.jsx)(eg, {
                applicationId: r,
                previewApplicationId: o,
                surface: m,
                previewReady: I,
                previewGate: M,
                availability: P,
                activeMode: _,
                widgetApplicationId: R,
            }),
            sidebar:
                null != T
                    ? (0, n.jsx)(au, {
                          open: T.open,
                          maxWidth: $,
                          onWidthChange: c.Zq,
                          children: T.open
                              ? (0, n.jsx)(ey, { channel: T.channel, guild: T.guild, onClose: T.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(au, {
                            open: g,
                            maxWidth: $,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(rG, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            ty,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(ij, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(iu.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": C.intl.string(C.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == x
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: u.P,
                                                                        tooltip: C.intl.string(E.default.YdgE0j),
                                                                        onClick: x,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(d.Ay.Title, {
                                                          children: C.intl.string(C.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ej.cb,
                                                      children: (0, n.jsx)(
                                                          al,
                                                          { projectId: t, restoreState: S, onRestoreVersion: N },
                                                          t,
                                                      ),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
