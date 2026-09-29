l.d(t, { A: () => iC });
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
    U = l(355622),
    G = l(734057),
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
        o = (0, D.bG)([G.A], () => {
            if (null == u) return null;
            let e = G.A.getDMFromUserId(u);
            return null != e ? G.A.getChannel(e) : null;
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
                  children: (0, n.jsx)(z.A, { channel: o, guild: null, chatInputType: U.oU.SIDEBAR }, o.id),
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
                children: (0, n.jsx)(z.A, { channel: t, guild: l, chatInputType: U.oU.SIDEBAR }, t.id),
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
function eU(e, t) {
    let l = eF(e, t);
    if (0 !== l.length) {
        for (let t of l) eq(e, t);
        eD(e, t, eP);
    }
}
function eG(e, t) {
    let l = eF(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (eD(e, t, eP), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function eB(e, t) {
    let { clarificationAnswers: l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = eF(e, "chat"),
        a = n.length > 0 && n.every((e) => "ready" === e.status) ? eG(e, "chat") : [];
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
    e9 = l(885574),
    e8 = l(430392),
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
            children: (0, n.jsx)(e9.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
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
        a = t ? O.k : e8.RobotIcon;
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
                    ? (0, n.jsx)("div", {
                          className: tl.o1,
                          children: (0, n.jsx)(X.$, {
                              variant: "primary",
                              size: "sm",
                              text: C.intl.string(E.default["hG0Y0+"]),
                              onClick: a,
                          }),
                      })
                    : null,
            ],
        }),
    });
}
var to = l(331322),
    td = l(314903);
function tc(e) {
    let { projectId: t } = e,
        l = (0, td.Ay)(t);
    if (null == l || l.status?.state !== "unpublished") return null;
    let a = l.guildName;
    return (0, n.jsx)(e2, {
        title: C.intl.string(E.default["8njO1f"]),
        "aria-label": C.intl.string(E.default.kV4lwa),
        children: (0, n.jsxs)(to.B, {
            gap: 16,
            padding: 16,
            align: "start",
            children: [
                null != a
                    ? (0, n.jsx)(v.E, {
                          variant: "text-xs/normal",
                          color: "text-subtle",
                          children: C.intl.formatToPlainString(E.default.JH4Xt5, { server: a }),
                      })
                    : null,
                null != l.disabledReason
                    ? (0, n.jsx)(v.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-muted",
                          children: l.disabledReason,
                      })
                    : null,
                (0, n.jsx)(X.$, {
                    variant: "primary",
                    size: "sm",
                    loading: l.publishing,
                    disabled: l.disabled,
                    onClick: () => l.run("card"),
                    text: l.label,
                }),
            ],
        }),
    });
}
var tf = l(314116),
    tm = l(364522),
    th = l(406810),
    tg = l(381849),
    tx = l(977628);
function tp(e) {
    let t = Date.parse(e);
    return Number.isNaN(t)
        ? { relative: null, absolute: null }
        : {
              relative: (0, tg.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: tg._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function tv(e) {
    return (0, tf.A)({
        title: C.intl.string(E.default.qOUOPE),
        subtitle: C.intl.string(E.default.k2JBj5),
        confirmText: C.intl.string(E.default["+sRK16"]),
        variant: "critical",
        onConfirm: e,
    });
}
function tb(e) {
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
                ? (0, n.jsx)("div", { className: tx.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: tx.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: tx.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(tm.Ip, {
                          className: tx.p_,
                          children: (0, n.jsx)("div", {
                              className: tx.jO,
                              children: s.entries.map((e) => {
                                  let t = tp(e.authoredAt);
                                  return (0, n.jsxs)(
                                      eJ.D,
                                      {
                                          className: tx.f_,
                                          onClick: () =>
                                              tv(() => {
                                                  (r(), i(e));
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: tx.bc,
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
            className: tx.nd,
            "aria-label": C.intl.string(E.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: th.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: tx.rf, children: t }),
            ],
        })
    );
}
var tj = l(584698);
function ty(e) {
    let { proposal: t, onRestore: l } = e,
        a = tp(t.authored_at);
    return (0, n.jsx)(e2, {
        title: C.intl.string(E.default.khdMoL),
        children: (0, n.jsxs)("div", {
            className: tj.r,
            children: [
                (0, n.jsxs)("div", {
                    className: tj.z,
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
var tk = l(530557),
    tN = l(872162),
    tw = l(192308),
    tA = l(479191);
function tS(e) {
    let { projectId: t, request: r, awaiting: i } = e,
        s = a.useCallback(() => {
            (0, tw.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]),
        u = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: tk.R })), [r.fields]);
    return (0, n.jsxs)("article", {
        className: tA.L,
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
            (0, n.jsx)(tN.C, { label: C.intl.string(E.default["/e28TK"]), size: "xs", items: u }),
            (0, n.jsx)("div", {
                className: tA.s,
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
var tE = l(408278),
    tC = l(349735),
    tI = l(973e3);
function tM(e) {
    let { projectId: t, request: l, onDismiss: a } = e;
    return (0, n.jsx)(tC.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: r, saving: i, submit: s } = e;
            return (0, n.jsxs)("form", {
                className: tI.Mk,
                onSubmit: (e) => {
                    (e.preventDefault(), s());
                },
                children: [
                    (0, n.jsxs)("div", {
                        className: tI.TS,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                tag: "span",
                                children: C.intl.string(E.default.wgDhiQ),
                            }),
                            null == a
                                ? null
                                : (0, n.jsx)(tE.K, {
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
                        className: tI.p0,
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
var tT = l(196582);
let tP = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    t_ = {
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
    tR = {
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
function tL(e) {
    return { ...tR[e], name: C.intl.string(t_[e]()) };
}
function tF(e) {
    return tP.includes(e) ? tL(e) : void 0;
}
function tD(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % tP.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, tP[(t + l) % tP.length]);
            }),
            n
        );
    })(e))
        t.set(l, tL(n));
    return t;
}
var tO = l(683063),
    t$ = l(705754),
    tq = l(883455),
    tz = l(13699);
function tU(e) {
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
                                    className: tz.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            tq.A,
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
                                      className: tz.iq,
                                      children: (0, n.jsx)(t$.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(tT.A, {
        glyph: (0, n.jsx)(tO.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: eQ(u),
            position: "left",
            children: (0, n.jsx)("span", {
                className: tz.nC,
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
var tG = l(847374),
    tB = l(320448),
    tV = l(140735),
    tH = l(329456);
let tW = [];
function tK(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tH.xL, {
            [tH.Vb]: "in_progress" === t,
            [tH.cT]: "completed" === t,
            [tH.GZ]: "unfinished" === t,
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
                className: tH.Qd,
                itemClassName: tH.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tH.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tH.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tY(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tW), [l, t]),
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
        className: tH.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    tO.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tH.MA,
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
                      className: tH.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tX(e) {
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
            ((t = (s ?? tW).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tW) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tH.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || u ? t : "unfinished");
                return (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tH.AS, { [tH.J1]: "completed" === l }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tK, { status: l }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: tH.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", {
                                    className: tH.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, n.jsx)(tY, { agents: d.get(e.id) ?? tW, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tH.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tK, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tH.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tH.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tQ(e) {
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
        j = d ? tG.a : tB._;
    return (0, n.jsxs)(e2, {
        title: C.intl.string(E.default.qCRC6c),
        trailing: (0, n.jsxs)("span", {
            className: tH.ZY,
            children: [
                (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: p }),
                u
                    ? (0, n.jsx)(eJ.D, {
                          className: tH.L$,
                          onClick: h,
                          "aria-expanded": d,
                          "aria-controls": o,
                          "aria-label": C.intl.string(d ? E.default.fIBJas : E.default.SVhXLT),
                          children: (0, n.jsx)(j, { size: "xs", color: "currentColor" }),
                      })
                    : null,
            ],
        }),
        className: tH.Nr,
        headerClassName: d ? void 0 : tH.RG,
        "data-vibegrations-todo-card": !0,
        "data-superseded": u ? "true" : void 0,
        children: [
            i && !u ? (0, n.jsx)(tV.A, { role: "status", "aria-live": "polite", children: b }) : null,
            (0, n.jsx)("div", {
                id: o,
                className: tH.rf,
                hidden: !d,
                children: (0, n.jsx)(tX, { todos: t, provisional: l, agents: r, live: s }),
            }),
        ],
    });
}
var tZ = l(744239),
    tJ = l(229775),
    t0 = l(165648);
function t1(e) {
    let t = tD(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tF(e.task.helperMark) : void 0,
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
function t2(e) {
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
            className: tz.pj,
            "data-live": !1,
            children: (0, n.jsx)(tT.A, {
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
        N = tD(k.map((e) => e.taskId)),
        w = !g && (r || k.some((e) => "running" === e.task.status)),
        A = t1(k);
    return (0, n.jsx)(tT.l.Provider, {
        value: k.length,
        children: (0, n.jsxs)("ol", {
            className: tz.pj,
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
                    let a = null != e.task.helperMark ? tF(e.task.helperMark) : void 0,
                        r = a ?? N.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              tU,
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
                          className: tz.YO,
                          children: (0, n.jsx)(tQ, { todos: j, provisional: c, agents: A, live: i, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function t7(e) {
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
        _ = null == P ? null : (0, n.jsx)("div", { className: tz.MT, children: P }),
        R = p
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: tz.ue,
        children: [
            w.length > 0 && !b
                ? (0, n.jsx)("ol", {
                      className: tz.dO,
                      children: w
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: tz.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: t0.PT,
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
                        className: i()(tz.ky, tJ.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(t0.PT, tz.cW),
                                children: eY.A.parse(I, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? _ : null,
                            R,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(tz.ky, tJ.XR, { [tZ.O]: null != c }),
                      children: (0, n.jsx)(tS, { projectId: t, request: d, awaiting: c }),
                  })
                : null,
            null != f
                ? (0, n.jsx)("div", {
                      className: i()(tz.ky, tJ.XR),
                      children: (0, n.jsx)(tM, { projectId: t, request: f }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || T) ? null : P,
            null != m ? (0, n.jsx)(tc, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, n.jsx)(e3, { ideas: u, pickedIdeaIds: g, onPick: h }) : null,
            null != y ? (0, n.jsx)(ty, { proposal: y, onRestore: k }) : null,
            T ? null : R,
        ],
    });
}
var t5 = l(864970),
    t3 = l(146806),
    t4 = l(475358),
    t6 = l(81369),
    t9 = l(922016),
    t8 = l(980707),
    le = l(477782),
    lt = l(717400),
    ll = l(663341),
    ln = l(826745),
    la = l(783977),
    lr = l(559647),
    li = l(775602),
    ls = l(234320),
    lu = l(435558),
    lo = l.n(lu),
    ld = l(506774);
let lc = "VibegrationsComposerDrafts";
function lf() {
    return ld.w.get(lc) ?? {};
}
let lm = new Map(),
    lh = lo().throttle(() => {
        if (0 === lm.size) return;
        let e = lf();
        for (let [t, l] of lm) "" === l ? delete e[t] : (e[t] = l);
        (lm.clear(), ld.w.set(lc, e));
    }, 1e3);
class lg extends D.Ay.Store {
    getDraft(e) {
        let t = lm.get(e);
        return null != t ? t : (lf()[e] ?? "");
    }
}
let lx = new lg(eI.h, {
    LOGOUT: function () {
        return (lm.clear(), lh.cancel(), ld.w.remove(lc), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (lm.set(t, l), lh(), "" === l && lh.flush(), !1);
    },
});
var lp = l(43105),
    lv = l(252510);
let lb = [E.default.ZK2O25, E.default["122Ir6"], E.default["9KCASa"]];
function lj(e) {
    let { targetElementRef: t, onDismiss: l } = e,
        r = a.useMemo(() => [{ text: C.intl.string(E.default.sZCqrE), onClick: l }], [l]);
    return (0, n.jsx)(lp.A, {
        targetElementRef: t,
        title: C.intl.string(E.default.n8wtkv),
        body: C.intl.format(E.default.Oaq2Cc, {
            content: (0, n.jsxs)("div", {
                className: lv.r,
                children: [
                    C.intl.string(E.default.cK0dk1),
                    (0, n.jsx)("ul", {
                        className: lv.e,
                        children: lb.map((e, t) => (0, n.jsx)("li", { children: C.intl.string(e) }, t)),
                    }),
                ],
            }),
        }),
        position: "top",
        actions: r,
        onRequestClose: l,
    });
}
var ly = l(379307),
    lk = l(285796),
    lN = l(590380),
    lw = l(298668);
let lA = eT.Is;
function lS(e, t, l, n) {
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
            if (a++ >= lA)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: C.intl.formatToPlainString(E.default.DlX57a, { count: lA }),
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
function lE(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        r = eR.useState((e) => eL(e, t, l)),
        i = a.useCallback((e) => lS(t, l, e, n), [t, l, n]),
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
        o = a.useCallback(() => eG(t, l), [t, l]);
    return {
        drafts: r,
        addFiles: i,
        pasteFiles: s,
        removeDraft: u,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: o,
    };
}
function lC(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(lN.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: lw.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: lw.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(E.default["3HWvgk"]),
                children: (0, n.jsx)(lk.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lI = l(789438);
let lM = "text-md/normal",
    lT = null;
function lP(e) {
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
                frontFrom: 1e3 * (0, t3._R)(f),
                frontTo: 1e3 * (0, t3._R)(h),
                backFrom: 1e3 * (0, t3.T)(f),
                backTo: 1e3 * (0, t3.T)(h),
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
        I = (0, D.bG)([li.Ay], () => li.Ay.useReducedMotion),
        M = t === C.intl.string(E.default.Jj8Ftb),
        T = s === t && M;
    function P(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(lI.VT, { [lI.qk]: a }),
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
            children: (0, n.jsx)(t4.e, { shortcut: "tab", className: lI.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(t5.o, {
                text: t,
                variant: lM,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(lI.xM, { [lI.s2]: r }),
                onStart: w,
                onComplete: () => u(t),
            }),
            P(lI.IS, l || (!I && "out" === y), o),
            (0, n.jsx)("span", {
                ref: d,
                className: lI.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: lM, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: lI.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: lM, tag: "span", className: lI.xM, children: t }),
                          P(lI.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function l_(e) {
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
        [y, k] = a.useState(() => lx.getDraft(t)),
        N = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), k(e));
            },
            [t],
        ),
        [w, A] = a.useState(t);
    w !== t && (A(t), k(lx.getDraft(t)));
    let S = (0, D.bG)([li.Ay], () => li.Ay.isSubmitButtonEnabled),
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
        } = lE({ projectId: t, surface: "chat", onUploadFile: d }),
        q = "" !== y.trim() || P.length > 0 || v,
        z = l && q && O,
        [U, G] = a.useState(null);
    a.useEffect(() => {
        if (null == U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]);
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
                null == lT && (lT = document.createElement("canvas").getContext("2d"));
                let i = lT;
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
            ("" !== t && G(t), N(""));
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
    (0, ls.Vo)({
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
            let t = lF(e);
            null != t && ee(t);
        }
        el(!0);
        let t = setTimeout(() => el(!1), lR);
        return () => clearTimeout(t);
    }, [y]);
    let en = a.useMemo(() => ({ "--custom-glow-x": `${J}px` }), [J]),
        ea = et ? ` ${lI.EB}` : "",
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
        ec = U ?? W ?? er,
        ef = "" === y && "" !== ec;
    return (0, n.jsxs)("form", {
        onSubmit: V,
        className: lI.DA,
        children: [
            P.length > 0
                ? (0, n.jsx)("div", {
                      className: lI.lN,
                      children: P.map((e) => (0, n.jsx)(lC, { draft: e, onRemove: F }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${lI.wg} ${lI.LP}${ea}`, style: en, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${lI.wg} ${lI.L3}${ea}`, style: en, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lI.VA,
                ref: Q,
                children: [
                    (0, n.jsx)("input", {
                        ref: T,
                        type: "file",
                        multiple: !0,
                        onChange: X,
                        className: lI.nY,
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
                                  className: `${lI.Y0} ${lI.nu}`,
                                  disabled: !l,
                                  onClick: () => T.current?.click(),
                                  "aria-label": C.intl.string(E.default.d6Rqlu),
                                  children: (0, n.jsx)(t6.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: lI.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(t9.Y, {
                              targetElementRef: Z,
                              position: "top",
                              align: "left",
                              animation: t9.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(t8.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(le.rX, {
                                          children: [
                                              (0, n.jsx)(le.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: t6.H,
                                                  leadingAccessory: { type: "icon", icon: t6.H },
                                                  action: () => T.current?.click(),
                                              }),
                                              null != m
                                                  ? (0, n.jsx)(le.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(E.default.edKajy),
                                                        iconLeft: lt.q,
                                                        leadingAccessory: { type: "icon", icon: lt.q },
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
                                      className: `${lI.Y0} ${lI.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(ll.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: lI.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, n.jsx)("div", {
                              ref: eu,
                              className: lI.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(lP, { text: ec, offering: ed && null == U, typed: null != U }),
                          })
                        : null,
                    (0, n.jsx)(ln.y, {
                        value: y,
                        onChange: (e) => N(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: Y,
                        placeholder: ef ? "" : er,
                        disabled: !l,
                        "aria-label": C.intl.string(E.default.OPr66w),
                        "aria-describedby": ef ? eo : void 0,
                        rows: 1,
                        className: lI.jp,
                    }),
                    ef ? (0, n.jsx)(tV.A, { id: eo, children: er }) : null,
                    (0, n.jsx)("div", {
                        className: lI.Sz,
                        children:
                            i && null != o
                                ? (0, n.jsx)(e6.m, {
                                      text: C.intl.string(E.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${lI.Y0} ${lI.$E}`,
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
                                  ? (0, n.jsx)(ly.A, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${lI.Y0} ${lI.$E}`,
                                        icon: (0, n.jsx)(la.R, {
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
                              className: lI.fF,
                              children: [
                                  (0, n.jsx)("div", { className: lI.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: lI.rt,
                                      disabled: !z,
                                      "aria-label": C.intl.string(E.default["22GHMt"]),
                                      children: (0, n.jsx)(lr.SendMessageIcon, {
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
            x && null != p ? (0, n.jsx)(lj, { targetElementRef: Q, onDismiss: p }) : null,
        ],
    });
}
let lR = 1500,
    lL = [
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
function lF(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = lF.mirror;
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
                (lF.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of lL) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
lF.mirror = null;
var lD = l(442433),
    lO = l(972786),
    l$ = l(320095),
    lq = l(963852),
    lz = l(521981),
    lU = l(763754),
    lG = l(491182),
    lB = l(438729),
    lV = l(622868),
    lH = l(448368),
    lW = l(837528),
    lK = l(439762),
    lY = l(715628),
    lX = l(752636),
    lQ = l(9842),
    lZ = l(589022),
    lJ = l(95701),
    l0 = l(994500),
    l1 = l(967198);
let l2 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function l7(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function l5(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function l3(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = l5(e, t),
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
    if (l7(a) && l7(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && l7(l5(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function l4(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([li.Ay], () => li.Ay.useReducedMotion),
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
                      for (; r > 0 && l3(t, r);) r--;
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
                                    for (; n > t + 1 && l - n < 12 && l2.has(e.charAt(n - 1));) n--;
                                    return l2.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && l3(t, u);) u++;
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
var l6 = l(725592),
    l9 = l(73432),
    l8 = l(365199),
    ne = l(194085),
    nt = l(734495),
    nl = l(441136);
function nn(e) {
    let { message: t, onClose: l } = e,
        a = (0, nt.A)(t);
    return (0, n.jsx)(t8.W, {
        navId: "vibegrations-message-actions",
        "aria-label": C.intl.string(C.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(le.rX, { children: a }),
    });
}
function na(e) {
    let { message: t, groupStart: l } = e,
        [r, s] = a.useState(!1),
        u = a.useRef(null),
        o = a.useCallback(() => s((e) => !e), []),
        d = a.useCallback(() => s(!1), []);
    return null == (0, nt.A)(t)
        ? null
        : (0, n.jsx)("div", {
              className: i()(nl.QE, { [nl.Rn]: l, [nl.vg]: r }),
              children: (0, n.jsx)(ne.Ay, {
                  children: (0, n.jsx)(t9.Y, {
                      targetElementRef: u,
                      renderPopout: (e) => {
                          let { closePopout: l } = e;
                          return (0, n.jsx)(nn, { message: t, onClose: l });
                      },
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      align: "top",
                      animation: t9.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: l, ...a } = e,
                              { isShown: r } = t;
                          return (0, n.jsx)(ne.qv, {
                              ref: u,
                              label: C.intl.string(C.t["UKOtz+"]),
                              icon: l8.MoreHorizontalIcon,
                              selected: r,
                              onClick: o,
                              ...a,
                          });
                      },
                  }),
              }),
          });
}
let nr = (0, lJ.createChannelRecord)({ id: "vibegrations-builder", type: _.rbe.DM }),
    ni = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function ns(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(nl.Yq, { [nl.x1]: t }), children: e });
}
function nu(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function no(e, t, l) {
    let { content: r } = (0, lK.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: nr, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(lB.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lY.A)(i, r);
}
function nd(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lW.m)(e, nr, t.usernameProfile, r),
        u = (0, lW.Jo)(t.avatarProfile, r),
        o = (0, D.bG)([l1.A], () => l1.A.getGuildId()),
        d = (0, D.bG)([eo.default], () => eo.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eo.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(lZ.A, { ...t, user: l, currentUser: d, guildId: o ?? void 0 });
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
function nc(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, lz.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: nl.GV,
                              children: [
                                  (0, n.jsx)(l9.A, { className: nl.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, D.cf)(
            [l0.A],
            () => ({
                isReplyAuthorBlocked: l0.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: l0.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, lU.X4)(l),
        c = (0, lU.X4)(t),
        f = nd(l);
    return (0, n.jsx)(lH.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: nr,
        referencedMessage: { state: lQ.a.LOADED, message: l },
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
function nf(e) {
    let { message: t, author: l } = e,
        a = nd(t);
    return (0, n.jsx)(lV.Ay, {
        message: t,
        channel: nr,
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
function nm(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(() => (0, l6.Y)(r), [r]);
    let u = (0, D.bG)(
            [eo.default],
            () => (0, l6.T)(r, null != r ? eo.default.getUser(r) : null, eo.default.getCurrentUser()),
            [r],
        ),
        o = a.useMemo(() => (0, lU.FT)(u, null), [u]),
        d = a.useMemo(() => (0, ew.LL)(t), [t]),
        c = d?.body ?? t,
        f = a.useMemo(() => {
            if (null == u) return null;
            let e = (0, lq.Ay)({ channelId: nr.id, content: c, author: u });
            return (0, l$.rh)({ ...e, timestamp: nu(l, e.timestamp), state: _.cmJ.SENT });
        }, [c, u, l]);
    return null == f
        ? null
        : (0, n.jsx)(nh, { message: f, author: o, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function nh(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        u = no(t, a);
    return (0, n.jsx)(lG.A, {
        className: nl.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(nf, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, n.jsxs)("div", {
                      className: nl.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: nl.GV,
                              children: [
                                  (0, n.jsx)(l9.A, { className: nl.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: nl.WO, children: u }),
                      ],
                  }),
        childrenAccessories: ns(i, "" !== a),
        childrenButtons: (0, n.jsx)(na, { message: t, groupStart: s }),
    });
}
function ng(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
        } = e,
        { text: d, revealing: c } = l4(t, { streaming: o }),
        f = a.useMemo(() => (0, lU.FT)(null, null), []),
        m = a.useMemo(() => ({ ...f, nick: "Conjure", colorString: "var(--text-brand)" }), [f]),
        h = i?.userId,
        g = (0, D.bG)(
            [eo.default],
            () => (0, l6.T)(h, null != h ? eo.default.getUser(h) : null, eo.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, ew.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, lq.Ay)({ channelId: nr.id, content: x?.body ?? i.content, author: g });
            return (0, l$.rh)({ ...e, id: i.id, timestamp: nu(i.createdAt, e.timestamp), state: _.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: nr.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, lq.Ay)({ channelId: nr.id, content: d, author: ni });
            return (0, l$.rh)({
                ...e,
                timestamp: nu(l, e.timestamp),
                state: _.cmJ.SENT,
                ...(null != v ? { type: _.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = no(b, d, nl.OS);
    return (0, n.jsxs)("div", {
        className: nl.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(lG.A, {
                className: nl.yE,
                author: m,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(nc, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, lX.A)({ message: b, channel: nr, author: m, guildId: void 0, isGroupStart: u }),
                childrenMessageContent: j,
                childrenAccessories: ns(r, "" !== d),
                disableInteraction: !0,
            }),
            u
                ? (0, n.jsx)("span", {
                      className: nl.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(O.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let nx = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
function np(e) {
    let { projectId: t, notice: l } = e,
        r = a.useContext(td.Qc),
        i = (0, D.bG)([lO.Ay, ea.A], () => {
            let e = lO.Ay.getProject(t);
            return null == e ? "" : (ea.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        s = a.useCallback(() => {
            null != r && (0, td.v0)(t, r);
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
var nv = l(375068);
function nb(e) {
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
        y = (0, D.bG)([lO.Ay], () => lO.Ay.getPublishStatus(t)?.state ?? null),
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
                        if (null != c.prose && nx.test(c.prose.content)) d = !0;
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
                    let c = nx.test(t.content ?? "");
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
                className: i()(nv.x7, nv.jH),
                "aria-busy": !0,
                children: (0, n.jsx)("li", { className: nv.Ub, children: (0, n.jsx)(m.y, {}) }),
            });
        let e = "unavailable" === s ? E.default.s4oxNv : E.default.khZEUv;
        return (0, n.jsx)("ol", {
            ref: u,
            className: nv.x7,
            children: (0, n.jsx)(nj, { role: "assistant", children: (0, n.jsx)(ng, { content: C.intl.string(e) }) }),
        });
    }
    return (0, n.jsxs)("ol", {
        ref: g,
        className: nv.x7,
        children: [
            k.map((e) => {
                let a = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                        return (0, n.jsx)(
                            nj,
                            {
                                role: "user",
                                anchorId: a.id,
                                highlighted: x === a.id,
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(nm, {
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
                            nj,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(ng, {
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
                            nj,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(t2, {
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
                            nj,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(ng, {
                                    groupStart: e.groupStart,
                                    content: null == a.publishNotice ? a.content : "",
                                    createdAt: a.created_at,
                                    accessories:
                                        null == a.publishNotice
                                            ? void 0
                                            : (0, n.jsx)(np, { projectId: t, notice: a.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, n.jsx)(
                            nj,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(t2, { projectId: t, interrupted: !0, steps: a.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, n.jsx)(
                            nj,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(t2, {
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
                            nj,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != i && null != f
                                        ? (e) => {
                                              var t;
                                              return (
                                                  (t = () => {
                                                      tv(() => f(i));
                                                  }),
                                                  void (0, lD.L3)(e, async () => {
                                                      let { default: e } = await l.e("218024").then(l.bind(l, 88347));
                                                      return (l) => (0, n.jsx)(e, { ...l, onRestoreVersion: t });
                                                  })
                                              );
                                          }
                                        : void 0,
                                children: (0, n.jsx)(ng, {
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
                                    accessories: (0, n.jsx)(t7, {
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
                                                          void tv(() => f(e))
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
                ? (0, n.jsx)(nj, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, n.jsx)(ng, {
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
function nj(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1, onContextMenu: u } = e;
    return (0, n.jsx)("li", {
        onContextMenu: u,
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(nv.xk, { [nv.Qo]: r, [nv.q3]: s }),
        children: l,
    });
}
let ny = [E.default.krnkPq, E.default["8oUm/J"], E.default["6Ea4dF"], E.default.fQx5qC, E.default["phXeK/"]];
function nk(e) {
    return ny.some((t) => C.intl.string(t) === e);
}
function nN(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(E.default.W7oyuf);
        case "closed":
            return C.intl.string(E.default["yBmS+I"]);
        case "failed":
            return C.intl.string(E.default.eE60xI);
    }
}
var nw = l(559676),
    nA = l(823376),
    nS = l(495557);
function nE(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = l4(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        u = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: nS.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: u,
                className: nS.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(t0.PT, nS.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eY.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nC = l(921461);
function nI(e) {
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
                    ? ny[0]
                    : l
                      ? E.default["0vH/5G"]
                      : i
                        ? E.default.Ly7F7x
                        : E.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, recalling: s, controlling: u }),
        x = C.intl.string(g),
        p = g === ny["0"],
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
        ((N.current = p), !p && nk(k.current) && b(j.current));
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (N.current) {
                    var e;
                    ((w.current = nk(k.current) ? w.current + 1 : 0),
                        b(((e = w.current), C.intl.string(ny[e % ny.length]))));
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
    return (0, n.jsx)(t9.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: T,
        renderPopout: () => (0, n.jsx)(nE, { id: f, activity: t }),
        children: () =>
            (0, n.jsxs)(eJ.D, {
                innerRef: c,
                className: i()(nC.hF, A && nC.Xd),
                "aria-label": C.intl.string(r ? E.default.pGFXZ0 : p ? ny["0"] : E.default.SzdX35),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(g),
                onClick: M,
                children: [
                    (0, n.jsx)("span", {
                        className: nC.bl,
                        children: (0, n.jsx)(nA.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: nC.xu,
                        "aria-hidden": !!u || !!p || void 0,
                        children: (0, n.jsx)(t5.o, {
                            ref: y,
                            text: v,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nC.yE,
                        }),
                    }),
                ],
            }),
    });
}
let nM = { second: 1e3, minute: 6e4 };
function nT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let l;
            if (null == e) return;
            let a = nM[t];
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
var nP = l(979148);
function n_(e) {
    let { startedAt: t } = e,
        l = nT(t);
    return (0, n.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: nP.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, eX.C7)(l),
    });
}
function nR(e) {
    let { startedAt: t } = e,
        l = nT(t, "minute");
    return (0, n.jsx)(tV.A, { role: "timer", children: (0, eX.Us)(l) });
}
var nL = l(280894);
function nF(e) {
    return e.toLocaleString();
}
function nD(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: nL.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: nL.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nF((0, eT.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nF(l.input_tokens),
                    " in \xb7 ",
                    nF(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${nF(l.cache_creation_input_tokens)} cache write \xb7 ${nF(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function nO(e) {
    let { project: t } = e,
        l = (0, eT.wU)(t.compaction),
        a = (0, eT.wU)(t.classifier),
        r = (0, eT.wV)(t.orchestrator, t.codegen),
        i = (0, eT.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: nL.si,
        role: "dialog",
        "aria-label": C.intl.string(E.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: nL.Q$,
                children: (0, n.jsxs)("div", {
                    className: nL.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nF((0, eT.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(nD, { label: C.intl.string(E.default.R9aduM), usage: r }),
            (0, n.jsx)(nD, { label: C.intl.string(E.default.Tj6b30), usage: l }),
            (0, n.jsx)(nD, { label: C.intl.string(E.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: nL.mf,
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
function n$(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(t9.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(nO, { project: t }),
        children: (e) =>
            (0, n.jsx)(eJ.D, {
                innerRef: l,
                className: nL.Y$,
                "aria-label": C.intl.string(E.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(e9.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nq = l(258216);
function nz(e) {
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
        m = (0, nw.o4)(l),
        [h, g] = a.useState(null),
        x = a.useCallback((e) => g(nk(e) ? null : e), []),
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
        className: nq.jf,
        children: [
            (0, n.jsxs)("div", {
                className: nq.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    r || s || u || m
                        ? (0, n.jsx)(nI, {
                              activity: o,
                              compacting: d,
                              restoring: s,
                              recalling: u,
                              controlling: m,
                              spoken: h,
                              onSpokenChange: x,
                          })
                        : null,
                    b ? (0, n.jsx)(n_, { startedAt: i }) : null,
                ],
            }),
            b ? (0, n.jsx)(nR, { startedAt: i }) : null,
            null == c || null == p
                ? null
                : (0, n.jsxs)("span", {
                      className: nq.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": p.aria,
                              children: p.text,
                          }),
                          (0, n.jsx)(n$, { project: c }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(E.default.eDDdhB, { status: nN(f) }),
                      "data-vibegrations-conn": !0,
                      "data-state": f,
                      className: nq.XF,
                      children: nN(f),
                  }),
        ],
    });
}
var nU = l(621466),
    nG = l(658675),
    nB = l(22231),
    nV = l(900797),
    nH = l(123292);
function nW(e, t, l) {
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
var nK = l(856795),
    nY = l(424110);
function nX(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: u = !0, selected: o } = e,
        d = a.useId(),
        c = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eJ.D, {
        className: i()(nY.uK, { [nY.ue]: r, [nY.h4]: !0 === o }),
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
                ? (0, n.jsx)("span", { className: nY.dy, children: (0, n.jsx)(nG.P, { checked: o, disabled: r }) })
                : (0, n.jsx)("span", { className: nY.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: nY.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: nY.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nY.ed,
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
                      className: nY.rM,
                      children: C.intl.string(E.default.OXRWyV),
                  })
                : null,
        ],
    });
}
let nQ = [];
function nZ(e) {
    let { question: t, draft: l, selected: a, direction: r, disabled: s } = e,
        u = "" === l.trim() ? null : l,
        o = !0 === t.multi_select;
    return (0, n.jsxs)("div", {
        className: i()(nY.Ge, nY.x1),
        "data-direction": r,
        "aria-hidden": !0,
        children: [
            o
                ? (0, n.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: nY.aK,
                      children: C.intl.string(E.default.jt5JBA),
                  })
                : null,
            t.options.map((e, t) =>
                (0, n.jsx)(
                    nX,
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
                className: nY.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: nY.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(nB.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == u ? null : (0, n.jsx)("span", { className: i()(nY.Pu, nY.es), children: u }),
                ],
            }),
        ],
    });
}
function nJ(e) {
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
        U = !0 === L.multi_select,
        G = f[L.id] ?? nQ,
        { text: B, phase: V } = (0, nK.Q)(L.question),
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
                    j({ question: L, draft: z, selected: G, direction: t, moves: l }),
                    w(!0),
                    g(e));
            },
            [z, L, G],
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
                let n = nW(t, l, R);
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
            return U
                ? ((e = z.trim()),
                  (t = L.options.filter((e) => G.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: G,
                      ...("" === e ? {} : { custom: e }),
                      text: [...t, ...("" === e ? [] : [e])].join(", "),
                  })
                : null;
        }, [z, U, L, G]),
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
        em = null == nW(t, null != ec ? { ...s, [L.id]: ec } : s, R),
        eh = a.useCallback(() => {
            null == ec || P || ee(ec);
        }, [P, ec, ee]),
        eg = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (!((0, nU.vq)(e.target, HTMLTextAreaElement) || (0, nU.vq)(e.target, HTMLInputElement)) &&
                        ("ArrowLeft" === e.key && el
                            ? (e.preventDefault(), et())
                            : "ArrowRight" === e.key && ef && (e.preventDefault(), eh())));
            },
            [el, ef, et, eh],
        );
    return (0, n.jsxs)("section", {
        className: i()(nY.$O, { [nY.fI]: ei && !eu, [nY.Oh]: eu }),
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
                className: nY.rf,
                style: null == y ? void 0 : { height: y.heading + y.rows },
                "data-moving": N ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: A,
                        className: nY.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: I,
                                tag: "span",
                                id: `${L.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: O ? void 0 : 5,
                                className: i()(nY.TK, nY.R_, { [nY.TB]: "exit" === V, [nY.JU]: "enter" === V }),
                                children: B,
                            }),
                            W || O
                                ? (0, n.jsx)("div", {
                                      className: nY.Q7,
                                      children: (0, n.jsx)(e6.m, {
                                          text: K,
                                          children: (0, n.jsx)(tE.K, {
                                              icon: O ? nV.t : tG.a,
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
                                      className: i()(nY.gb, nY.Q7),
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
                        className: nY.Cg,
                        style: null == y ? void 0 : { insetBlockStart: y.heading },
                        children: (0, n.jsxs)("div", {
                            className: nY.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: M,
                                    className: nY.Ge,
                                    role: "group",
                                    "aria-labelledby": `${L.id}-label`,
                                    "data-direction": x?.direction,
                                    "data-parity": null == x ? void 0 : x.moves % 2,
                                    children: [
                                        U
                                            ? (0, n.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: nY.aK,
                                                  children: C.intl.string(E.default.jt5JBA),
                                              })
                                            : null,
                                        L.options.map((e, t) =>
                                            (0, n.jsx)(
                                                nX,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: P,
                                                    selected: U ? G.includes(e.id) : void 0,
                                                    onPick: (e) =>
                                                        U
                                                            ? m((t) => {
                                                                  var l, n;
                                                                  let a;
                                                                  return {
                                                                      ...t,
                                                                      [L.id]:
                                                                          ((l = t[L.id] ?? nQ),
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
                                            className: nY.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: nY.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(nB.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(ln.y, {
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
                                                    className: nY.Pu,
                                                    "data-vibegrations-clarification-other": L.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == b
                                    ? null
                                    : (0, n.jsx)(
                                          nZ,
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
            _ > 1 || U
                ? (0, n.jsxs)("div", {
                      className: nY.qr,
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
                              className: nY.Np,
                              children: [
                                  el
                                      ? (0, n.jsx)(nH.Q, {
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
var n0 = l(643278),
    n1 = l(191521),
    n2 = l(405189);
function n7(e) {
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
              className: n2.qd,
              "data-placement": f,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(n2.vK, { [n2.ho]: x && c, [n2.ET]: !c }),
                      children: [
                          null == d
                              ? (0, n.jsx)("ol", {
                                    className: i()(n2.Rk, tz.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(tT.A, {
                                        glyph: (0, n.jsx)(n1.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eJ.D, {
                                    className: n2.pZ,
                                    onClick: d,
                                    "aria-label": C.intl.string(E.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(n2.Rk, tz.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(tT.A, {
                                            glyph: (0, n.jsx)(n1.A, {}),
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
                                        className: n2.BO,
                                        onClick: T,
                                        "aria-expanded": v,
                                        "aria-label": C.intl.string(E.default.qCRC6c),
                                        children: (0, n.jsx)(n0.ClipboardListIcon, {
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
                            className: i()(n2.vB, { [n2.pg]: v && w, [n2.ui]: !v }),
                            children: (0, n.jsx)(tQ, {
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
var n5 = l(651649),
    n3 = l(522250),
    n4 = l(670455),
    n6 = l(698638),
    n9 = l(348800);
let n8 = [C.intl.string(E.default["E+Q26x"]), C.intl.string(E.default["06/jqP"]), C.intl.string(E.default["3gSfUa"])];
function ae(e) {
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
                    if ((0, n3.jb)(e)) return;
                    let t = (0, n3.hl)(e);
                    t < n3.qu ||
                        (0, n3.Xi)(e) ||
                        n5.A.possiblyShowFeedbackModal(n4.MW.VIBEGRATIONS, () => {
                            ((0, n3.AH)(e),
                                (0, tw.openModalLazy)(async () => {
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
        L = a.useCallback((e) => lS(r, "chat", Array.from(e), R), [r, R]),
        F = a.useCallback(() => eB(r, C.intl.string(E.default.Jj8Ftb)), [r]),
        O = i?.status === "restoring",
        $ = "open" === o && !d && !O,
        q = u[u.length - 1],
        z = null != q && "assistant" === q.role && null != q.proposal,
        [U, G] = a.useState(null),
        B = q?.clarification != null && q.clarification.id !== U ? q.clarification : null,
        V = a.useCallback(() => {
            null != B && G(B.id);
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
            return n8[e % n8.length];
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
            return null != es ? ((e = es.steps), t1((0, eA.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, n.jsxs)("section", {
        ref: x,
        "data-vibegrations-chat": !0,
        className: n9.TE,
        children: [
            $
                ? (0, n.jsx)(eN.A, {
                      title: C.intl.string(E.default.UazRD1),
                      description: C.intl.string(E.default["O4r42+"]),
                      icons: n6.ir,
                      onDrop: L,
                  })
                : null,
            (0, n.jsx)(n7, {
                onJumpToActivity: N,
                line: ep,
                placement: eu && "top" === em ? "top" : null,
                todos: ev,
                todosLive: ej,
                provisionalTodo: eb,
                agents: ey,
            }),
            (0, n.jsxs)("div", {
                className: n9.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: p,
                        onScroll: w,
                        scrollbarGutter: ea ? "both-edges" : "stable",
                        className: [n9.N$, y ? null : n9.hB, el ? n9.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(nb, {
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
                        className: n9.NJ,
                        children: (0, n.jsx)(nz, {
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
                              className: el ? `${n9.B5} ${n9.J9}` : n9.B5,
                              children: (0, n.jsx)(
                                  nJ,
                                  { clarification: B, onSubmit: $ ? P : void 0, onDismiss: V },
                                  B.id,
                              ),
                          }),
                    null == ee
                        ? null
                        : (0, n.jsx)("div", {
                              className: n9.B5,
                              children: (0, n.jsx)("div", {
                                  className: n9.ws,
                                  children: (0, n.jsx)(tM, { projectId: r, request: ee, onDismiss: et }, J?.id),
                              }),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: n9.Jx,
                children: [
                    (0, n.jsx)(n7, {
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
                              className: n9.g0,
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
                    (0, n.jsx)(l_, {
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
var at = l(661531),
    al = l(602853),
    an = l(517461),
    aa = l(761929),
    ar = l(927506);
function ai(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, al.r)(at.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = a.useRef(null),
        [o, d] = (0, an.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = a.useState(o ?? 460),
        m = (0, lu.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? m + s : 0);
    }, [m, t, s, r]);
    let h = (0, aa.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: aa.R.HORIZONTAL_LEFT,
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
        className: ar.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: ar.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: u, className: ar.kL, style: { width: m }, children: i }),
        ],
    });
}
var as = l(691540),
    au = l(857250),
    ao = l(97483),
    ad = l(624479),
    ac = l(92446),
    af = l(761508),
    am = l(540999),
    ah = l(957565);
let ag = [],
    ax = new Map(),
    ap = new Map(),
    av = new Map(),
    ab = new Map(),
    aj = new Map(),
    ay = new Map(),
    ak = new Map();
class aN extends D.Ay.Store {
    getStatus(e) {
        return ax.get(e) ?? null;
    }
    getFetchState(e) {
        return ap.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return ab.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return ay.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return aj.get(e) ?? null;
    }
    getModelCalls(e) {
        return ak.get(e) ?? ag;
    }
    getForceCompactionState(e) {
        return av.get(e) ?? "idle";
    }
}
let aw = new aN(eI.h, {
    LOGOUT: function () {
        if (
            0 === ax.size &&
            0 === ap.size &&
            0 === av.size &&
            0 === ab.size &&
            0 === aj.size &&
            0 === ay.size &&
            0 === ak.size
        )
            return !1;
        (ax.clear(), ap.clear(), av.clear(), ab.clear(), aj.clear(), ay.clear(), ak.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        ap.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === av.get(t);
        n &&
            av.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === ap.get(t);
        if ((a && ap.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? ap.set(t, "failed") : (ax.set(t, l), ap.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        ab.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        aj.set(e.projectId, {
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
        av.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        av.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = ak.get(e.projectId);
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
        ak.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, eT.aM)(l.total)) return !1;
        ay.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (ax.delete(t), ap.delete(t), av.delete(t), ab.delete(t), aj.delete(t), ay.delete(t), ak.delete(t));
    },
});
function aA(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function aS(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function aE(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function aC(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function aI(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function aM(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function aT(e) {
    return C.intl.string("preview" === e ? E.default["+m8XM6"] : E.default.kiOVnt);
}
let aP = ["all", "preview", "stable", "web"],
    a_ = new Set(["error", "aborted", "length"]);
function aR(e) {
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
function aL(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(E.default.SBkDIZ, {
              p50: aA(e.memory_p50_bytes ?? 0),
              p999: aA(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let aF = {
    db: () => E.default.r6cciE,
    db_preview: () => E.default.JmIyL8,
    runtime: () => E.default.bzNyv8,
    runtime_preview: () => E.default["LONZ/8"],
    bot: () => E.default.jdpw3A,
    bot_preview: () => E.default["/g6wUz"],
};
var aD = l(69985);
function aO(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aD.KE,
        children: [
            (0, n.jsx)("div", {
                className: aD.IQ,
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
                                  children: C.intl.formatToPlainString(E.default["4NpaEk"], { time: aI(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(X.$, { variant: "secondary", size: "sm", text: C.intl.string(E.default.aw0IJm), onClick: a }),
        ],
    });
}
function a$(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: aD.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: aD.Gf, children: t }),
            l,
        ],
    });
}
function aq(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: aD.N8,
        children: [
            (0, n.jsxs)("div", {
                className: aD.x7,
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
function az(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: aD.N8,
        children: [
            (0, n.jsxs)("div", {
                className: aD.x7,
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
                className: aD.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? aD.aV : aD.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function aU(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(aq, {
            label: C.intl.string(E.default.H6PMwW),
            value: C.intl.string(E.default.TLOZ8J),
            hint: aR(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(aq, {
            label: C.intl.string(E.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(E.default.uAzxdh),
        });
    let a = aL(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aq, { label: C.intl.string(E.default.awAqRi), value: aS(l.cpu_ms) }),
            null != a && (0, n.jsx)(aq, { label: C.intl.string(E.default.WdGviA), value: a }),
        ],
    });
}
function aG(e) {
    let { analytics: t } = e,
        l = C.intl.string(E.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(a$, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: aR(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? aF[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(a$, {
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
                          aq,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(E.default.AnRynJ, { cpu: aS(t.cpu_ms) }),
                              hint: aL(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var aB = l(522652);
let aV = [];
function aH(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && a_.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? aS(l.durationMs) : null,
                    `${aE(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${aE(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: aB.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aB.Q5,
                children: aC(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: aB.qN,
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
function aW(e, t) {
    return (0, n.jsx)(aq, {
        label: e,
        value: C.intl.formatToPlainString(E.default.U98VaN, { count: aE((0, eT.aM)(t)) }),
        hint: `${aE(t.input_tokens)} in \xb7 ${aE(t.output_tokens)} out \xb7 ${aE(t.cache_read_input_tokens)} cache read`,
    });
}
function aK(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        u = (0, D.bG)([aw], () => aw.getLastTurnUsage(t), [t]),
        o = (0, D.bG)([aw], () => aw.getLastCompaction(t), [t]),
        d = (0, D.bG)([aw], () => aw.getLastCompactionDecline(t), [t]),
        c = (0, D.bG)([aw], () => aw.getForceCompactionState(t), [t]),
        m = a.useCallback(() => (0, f.Lj)(t), [t]),
        h = a.useCallback(() => (0, f.Lj)(t, !0), [t]),
        g = (0, D.bG)([aw], () => (s ? aV : aw.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = o?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: aB.Mf,
        children: [
            (0, n.jsx)(aO, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(a$, {
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
                                  (0, n.jsx)(aq, {
                                      label: C.intl.string(E.default["8MSJDH"]),
                                      value: aE((0, eT.a7)(x.cost_usd)),
                                      hint: C.intl.formatToPlainString(E.default["6Z2KhK"], { count: aE(x.turns) }),
                                  }),
                                  aW(C.intl.string(E.default.hk4jJr), x.orchestrator),
                                  aW(C.intl.string(E.default.R9aduM), x.codegen),
                                  aW(C.intl.string(E.default.Tj6b30), (0, eT.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(aq, {
                                          label: C.intl.string(E.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${aE(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(a$, {
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
                                  aW(C.intl.string(E.default["VwF+oY"]), u.total),
                                  (0, n.jsx)(aq, {
                                      label: C.intl.string(E.default["kILb+R"]),
                                      value: `${Math.round((u.cache_hit_rate ?? (0, eT.CA)(u.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(a$, {
                title: C.intl.string(E.default.mn8279),
                children: [
                    null != o && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(az, {
                                      label: C.intl.string(E.default.dKFhCg),
                                      used: o.tokensAfter,
                                      max: j,
                                      formatValue: aE,
                                  }),
                                  (0, n.jsx)(aq, {
                                      label: C.intl.string(E.default.ntZb8d),
                                      value: `${aE(o.tokensBefore)} \u{2192} ${aE(o.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(E.default.jA05ru, {
                                          count: aE(o.retainedMessages),
                                          time: aI(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? C.intl.formatToPlainString(E.default.LKGmsP, { ceiling: aE(j) })
                                      : C.intl.string(E.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(aq, {
                            label: C.intl.string(E.default["se+2ls"]),
                            value: `${aE(d.projected)} / ${aE(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(E.default.KHK44U, { time: aI(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: aB.Lj,
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
                                    let t = aI(e.observedAt);
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
                (0, n.jsx)(a$, {
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
                                          .map((e) => (0, n.jsx)(aH, { call: e }, e.id)),
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
                (0, n.jsxs)(a$, {
                    title: C.intl.string(E.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(aq, {
                                        label: C.intl.string(E.default["wt5X/o"]),
                                        value: aI(b.instance_since),
                                        hint: C.intl.string(E.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(aq, { label: C.intl.string(E.default["4lgurx"]), value: aE(b.sockets) }),
                                    (0, n.jsx)(aq, {
                                        label: C.intl.string(E.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? C.intl.string(E.default["9KlveJ"])
                                            : C.intl.string(E.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(aq, {
                                            label: C.intl.string(E.default["/hOBkc"]),
                                            value: aE(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(aU, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(a$, {
                    title: C.intl.string(E.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(aq, {
                            label: C.intl.string(E.default.Rb6m3E),
                            value: aE(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(aq, {
                            label: C.intl.string(E.default.WQ9pMe),
                            value: C.intl.formatToPlainString(E.default.U98VaN, { count: aE(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(aq, {
                            label: C.intl.string(E.default.iEAvzu),
                            value: C.intl.formatToPlainString(E.default.U98VaN, {
                                count: aE(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(aq, {
                            label: C.intl.string(E.default["jbhs+f"]),
                            value: aE(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(aq, { label: C.intl.string(E.default.TOQnq4), value: aE(p.max_build_attempts) }),
                        (0, n.jsx)(aq, { label: C.intl.string(E.default.RIDc6D), value: aE(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var aY = l(629584),
    aX = l(683438),
    aQ = l(849363);
function aZ(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: aQ.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(E.default.TV42NS),
              }),
          });
}
function aJ(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: aQ.qf,
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
              className: aQ.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function a0(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: aQ.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default["U/qDX9"]),
              }),
          })
        : null;
}
var a1 = l(417397);
let a2 = a.memo(function (e) {
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
        className: a1.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: a1.Mt,
                selectable: !0,
                children: aC(l.ts),
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
                className: a1.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: a1.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: a1.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: a1.Cq,
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
                                      className: a1.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": u,
                                      "aria-label": C.intl.string(E.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(tG.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(tB._, {
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
                                          className: a1.dF,
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
function a7(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([lO.Ay], () => lO.Ay.getLogs(t), [t]),
        r = (0, D.bG)([lO.Ay], () => lO.Ay.getHistoryState(t, "logs")),
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
                aP.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return aT(e);
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
        className: a1.$F,
        children: [
            (0, n.jsxs)("div", {
                className: a1.y4,
                children: [
                    (0, n.jsx)(aY.I, {
                        look: "pill",
                        "aria-label": C.intl.string(E.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: a1.KT,
                        children: (0, n.jsx)(aX.I, {
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
            l.length > 0 && (0, n.jsx)(aZ, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: m,
                overflow: "auto",
                className: a1.sx,
                children: [
                    (0, n.jsx)(a0, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(aJ, {
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
                          : d.map((e) => (0, n.jsx)(a2, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function a5(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(a$, {
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
function a3(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(aq, {
                      label: C.intl.formatToPlainString(E.default.f8ix3w, { env: aT(l) }),
                      value: ((t = a.connected), C.intl.string(t ? E.default["9KlveJ"] : E.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(aq, {
                      label: C.intl.string(E.default["0AB7l3"]),
                      value: aE(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${aI(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(aq, { label: C.intl.string(E.default.ElaQ0A), value: aE(a.guild_count) }),
                  (0, n.jsx)(aq, {
                      label: C.intl.string(E.default.SJtBTN),
                      value: aE(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(E.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: aI(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(aq, {
                          label: C.intl.string(E.default.N4l504),
                          value: aE(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(aq, { label: aT(l), value: C.intl.string(E.default.C6xjtD) });
}
function a4(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(aq, {
        label: aT(t),
        value: C.intl.formatToPlainString(E.default.Yur5Zm, { requests: aE(l.requests), failures: aE(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(E.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: aI(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(E.default["1PdrB1"], { time: aI(l.since) }),
    });
}
function a6(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aq, {
                label: C.intl.formatToPlainString(E.default.BVORfc, { env: aT(t) }),
                value: aE(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    aq,
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
                                  ? C.intl.formatToPlainString(E.default["7ecbr3"], { time: aI(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function a9(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(aq, {
        label: aT(t),
        value: C.intl.formatToPlainString(E.default.voXL2a, { calls: aE(l.calls), errors: aE(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function a8(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(a$, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(E.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(a$, {
        title: t,
        children: [
            (0, n.jsx)(aq, {
                label: C.intl.string(E.default.KOnL3g),
                value: aE(l.requests),
                hint: C.intl.formatToPlainString(E.default["1PdrB1"], { time: aI(l.since) }),
            }),
            (0, n.jsx)(aq, { label: C.intl.string(E.default.CjPhyY), value: aE(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(az, {
                              label: C.intl.string(E.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: aS,
                          }),
                          (0, n.jsx)(aq, {
                              label: C.intl.string(E.default["+rYPHD"]),
                              value: aS(r),
                              hint: C.intl.formatToPlainString(E.default["+LxC7W"], {
                                  total: aS(l.cpu_ms_total),
                                  wall: aS(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(aq, {
                      label: C.intl.string(E.default["V/nNbs"]),
                      value: C.intl.string(E.default.YKWIxp),
                      hint: C.intl.string(E.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(aq, { label: C.intl.string(E.default.ueEMPa), value: aS(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(aq, { label: C.intl.string(E.default.vM2krr), value: aE(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(aq, {
                label: C.intl.string(E.default.g1O88C),
                value: aE(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(E.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(aq, { label: C.intl.string(E.default.JUZs7g), value: aM(l.build) }),
        ],
    });
}
function re(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        u = i
            ? [{ key: "shared", label: C.intl.string(E.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(E.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(E.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(a$, {
        title: C.intl.string(E.default.i91625),
        children: u.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(aq, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(aq, {
                                  label: C.intl.formatToPlainString(E.default["9TpIQg"], { env: l }),
                                  value: aA(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? E.default.o45MMA : E.default.S7o3vV,
                                      { count: aE(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(az, {
                                      label: C.intl.formatToPlainString(E.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: aA,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function rt(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aB.Mf,
        children: [
            (0, n.jsx)(aO, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(a8, {
                            title: C.intl.string(E.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(a8, {
                            title: C.intl.string(E.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(re, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(a5, {
                                title: C.intl.string(E.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(a3, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(a5, {
                                title: C.intl.string(E.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(a4, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(a5, {
                                title: C.intl.string(E.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(a6, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(a5, {
                                title: C.intl.string(E.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(a9, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(aG, { analytics: t.analytics }),
                        (0, n.jsxs)(a$, {
                            title: C.intl.string(E.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(aq, {
                                    label: C.intl.string(E.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? aM(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(aq, {
                                    label: C.intl.string(E.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? aM(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function rl(e, t) {
    return String(e).padStart(t, "0");
}
function rn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${rl(n.getHours(), 2)}:${rl(n.getMinutes(), 2)}:${rl(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${rl(n.getMilliseconds(), 3)}` : a;
}
var ra = l(977129);
let rr = new Map(),
    ri = new Map(),
    rs = 0,
    ru = 0;
async function ro(e, t, l) {
    let n = rs,
        a = rr.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < ru) return { status: "forbidden" };
    let r = ri.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, ra.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((ru = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let u = await s.json();
            if (!0 !== u.available || null == u.rich) return { status: "unavailable" };
            if (n !== rs) return { status: "failed" };
            var l = u.rich;
            for (rr.set(t, l); rr.size > 100;) {
                let e = rr.keys().next();
                if (!0 === e.done) break;
                rr.delete(e.value);
            }
            return { status: "loaded", rich: u.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    ri.set(t, i);
    let s = await i;
    return (ri.get(t) === i && ri.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function rd() {
    ((rs += 1), rr.clear(), ri.clear(), (ru = 0));
}
function rc(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function rf(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function rm(e) {
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
function rh(e) {
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
let rg = ["model", "tool", "subagent", "delegated", "context"];
function rx(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(rh(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function rp(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let rv = ["arguments", "result", "usage", "diagnostics"];
var rb = l(40715);
let rj = { started: rb.Vf, ok: rb.mo, error: rb.Sr };
function ry(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${rb.Om} ${rj[t] ?? rb.Vf}`,
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
let rk = { model: rb.WI, subagent: rb.uM, context: rb.eH, tool: rb.pw, delegated: rb.C8 };
function rN(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: rb.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: rb.D6, children: t }),
            (0, n.jsx)("div", { className: rb.zL, children: l }),
        ],
    });
}
function rw(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(rN, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function rA(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: rb.WA, children: t });
}
function rS(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: rb.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: rb.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function rE(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: rb.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: rb.p8,
                children: [
                    (0, n.jsx)(tB._, { className: rb.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: rb.bG, children: l }),
        ],
    });
}
function rC(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(rN, {
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
    return (0, n.jsx)(rN, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: rb.Kv,
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
function rI(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: rb.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: rb.uh,
                          children: C.intl.string(E.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          rN,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: rb.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: rb.Px,
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
function rM(e) {
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
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: rb.E7, children: l });
}
function rT(e) {
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
                rv.filter((e) => n.has(e))
            );
        })(l, { childCount: u, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != rr.get(t)) return;
                    let l = new AbortController();
                    return (
                        ro(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = rr.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        f = rn(l.startedAt, "millis"),
        m = rh(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: rb._0,
        onKeyDown: h,
        role: "region",
        "aria-label": C.intl.formatToPlainString(E.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: rb.sy,
                children: (0, n.jsxs)("div", {
                    className: rb.HI,
                    children: [
                        (0, n.jsx)(ry, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${rb.PY} ${rk[m]}`,
                            children: rm(m),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: rb.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: rb.l5,
                            children: null == l.durationMs ? C.intl.string(E.default.HpKDyl) : rc(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: rb.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            o.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(rS, {
                      title: C.intl.string(E.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(rC, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(rI, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(rM, { detail: d }),
                      ],
                  })
                : null,
            o.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(rS, {
                      title: C.intl.string(E.default.KXrf5F),
                      children: [
                          (0, n.jsx)(rw, {
                              label: C.intl.string(E.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(E.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(rw, {
                                    label: C.intl.string(E.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(rN, {
                                    label: C.intl.string(E.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: C.intl.string(E.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(rI, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            o.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(rS, {
                      title: C.intl.string(E.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(rA, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(rw, {
                                            label: C.intl.string(E.default.Ran4BY),
                                            value: C.intl.formatToPlainString(E.default["PYO+Jv"], {
                                                tokens: rf(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(rw, {
                                            label: C.intl.string(E.default.vPIcyv),
                                            value: C.intl.formatToPlainString(E.default.Qy2iTq, {
                                                system: rf(l.systemTokens),
                                                tools: rf(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: rf(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(rw, {
                                            label: C.intl.string(E.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(rw, {
                                            label: C.intl.string(E.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(rw, {
                                            label: C.intl.string(E.default.VyAl6j),
                                            value: C.intl.formatToPlainString(E.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(rw, {
                                            label: C.intl.string(E.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: rb.E7,
                              children: C.intl.string(E.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            o.includes("arguments") || o.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: rb.E7,
                      children: C.intl.string(E.default["ppv+97"]),
                  })
                : null,
            o.includes("diagnostics")
                ? (0, n.jsx)(rE, {
                      title: C.intl.string(E.default.T7SFyZ),
                      children: (0, n.jsxs)(rA, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(rN, {
                                        label: C.intl.string(E.default.NnBqcd),
                                        value: (0, n.jsx)(eJ.D, {
                                            tag: "div",
                                            className: rb.mi,
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
                                  : (0, n.jsx)(rw, {
                                        label: C.intl.string(E.default.fI6mzD),
                                        value: C.intl.formatToPlainString(E.default.hO8FYp, { count: u }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(rw, { label: C.intl.string(E.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(rw, { label: C.intl.string(E.default["XVTP/S"]), value: l.id }),
                              null == f ? null : (0, n.jsx)(rw, { label: C.intl.string(E.default.rD7bm0), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(rw, { label: C.intl.string(E.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: rb.Hm,
                                                children: C.intl.string(E.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    rw,
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
                className: rb.E7,
                children: C.intl.string(E.default.khAjR0),
            }),
        ],
    });
}
let rP = { model: rb.WI, subagent: rb.uM, context: rb.eH, tool: rb.pw, delegated: rb.C8 };
function r_(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = rh(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return rg.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: rb.M0,
        children: [
            (0, n.jsx)("div", {
                className: rb.pZ,
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
                                            className: `${rb.dL} ${rP[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: rb.z4,
                role: "group",
                "aria-label": C.intl.string(E.default.UZ1OlR),
                children: rg.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: rb.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${rb.A9} ${rP[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: rm(e) }),
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
                                          children: rc(a),
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
let rR = { model: rb.WI, subagent: rb.uM, context: rb.eH, tool: rb.pw, delegated: rb.C8 };
function rL(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        u = rh(t),
        o = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(E.default["PYO+Jv"], { tokens: rf(t.promptTokens) })
                : null != t.durationMs
                  ? rc(t.durationMs)
                  : null;
    return (0, n.jsxs)(eJ.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${rb.nM} ${s ? rb.A5 : ""} ${"error" === t.status ? rb.Cr : ""} ${l ? rb.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: rb.sU,
                children: [
                    (0, n.jsx)(ry, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${rb.PY} ${rR[u]}`,
                        children: rm(u),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: rb.G9,
                        children: o,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: rb.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: rb.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: rb.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rF(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([lO.Ay], () => lO.Ay.getTrace(l), [l]),
        s = (0, D.bG)([lO.Ay], () => lO.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => rd, [l]);
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
            return 0 === t ? 40 : (0, lu.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, lu.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, aa.A)({
            resizableDomNodeRef: g,
            orientation: aa.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, lu.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (o(null), j(u));
        }, [u, j]),
        M = a.useMemo(() => rx(i, r), [i, r]),
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
                    .map((e, t) => ({ ...e, index: t, entries: rx(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        P = rp(M, u),
        _ = P?.kind === "tool" ? rp(i, P.parentId ?? null) : null,
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
              className: rb.uP,
              ref: h,
              children: (0, n.jsx)(aJ, {
                  state: s,
                  emptyTitle: C.intl.string(E.default.Iyt8OJ),
                  emptyBody: C.intl.string(E.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${rb.uP} ${f ? rb.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: rb.DK,
                      children: [
                          (0, n.jsx)(r_, { entries: i }),
                          (0, n.jsx)(aZ, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: rb.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(E.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: x,
                                    className: rb.Ns,
                                    children: [
                                        (0, n.jsx)(a0, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(E.default["QATZ+A"]),
                                            className: rb.p_,
                                            children: T.map((e) => {
                                                let t = rn(e.startedAt),
                                                    l = C.intl.formatToPlainString(E.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: rb.mf,
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
                                                                              children: rc(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: rb.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        rL,
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
                                    className: rb.b1,
                                    onPointerDown: A,
                                    onKeyDown: S,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: rb.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(rT, {
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
var rD = l(402879);
function rO(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([lO.Ay], () => lO.Ay.getTrace(t), [t]),
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
            (0, rD.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: rb.ED,
                children: (0, n.jsx)(aX.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: C.intl.string(E.default.NfncNw),
                    "aria-label": C.intl.string(E.default.NfncNw),
                }),
            }),
            (0, n.jsx)(t9.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: t9.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(t8.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(le.rX, {
                            children: (0, n.jsx)(le.Dr, {
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
                    return (0, n.jsx)(tE.K, {
                        ...e,
                        buttonRef: s,
                        icon: l8.MoreHorizontalIcon,
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
var r$ = l(497243);
function rq(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, o] = a.useState(""),
        c = (0, D.bG)([am.A], () => am.A.isDeveloper),
        m = (0, D.bG)([aw], () => aw.getStatus(t), [t]),
        h = (0, D.bG)([aw], () => aw.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, f.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, f.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, ah.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: aw.getStatus(t),
                        last_turn_usage: aw.getLastTurnUsage(t),
                        last_compaction: aw.getLastCompaction(t),
                        last_compaction_decline: aw.getLastCompactionDecline(t),
                        model_calls: aw.getModelCalls(t),
                        logs: lO.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, as.P0)((0, au.o)(C.intl.string(E.default.sDSDiO), ao.Ck.SUCCESS)),
            );
        }, [t]),
        p = C.intl.string(E.default.KampIf);
    return (0, n.jsxs)("section", {
        className: r$.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: ad.CopyIcon,
                            tooltip: C.intl.string(E.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: ac.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: r$.rf,
                children: [
                    (0, n.jsxs)(af.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(E.default.uNyR86),
                        className: r$.vR,
                        children: [
                            (0, n.jsx)(af.V.Item, { id: "logs", children: C.intl.string(E.default["1mpzdJ"]) }),
                            (0, n.jsx)(af.V.Item, { id: "worker", children: C.intl.string(E.default.whGHLD) }),
                            (0, n.jsx)(af.V.Item, { id: "agent", children: C.intl.string(E.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(af.V.Item, { id: "trace", children: C.intl.string(E.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(a7, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(rt, { status: m, fetchState: h, onRefresh: g })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: r$.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: r$.XH,
                                          children: (0, n.jsx)(rO, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, n.jsx)(rF, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(aK, { projectId: t, status: m, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rz = l(333007),
    rU = l(103557),
    rG = l(97808),
    rB = l(778712),
    rV = l(365912),
    rH = l(775121),
    rW = l(486020),
    rK = l(277437);
function rY(e) {
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
        } = lE({ projectId: t, surface: "design", onUploadFile: h }),
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
        className: i()(rK.M0, { [rK.ho]: w && !m, [rK.ET]: m }),
        style: { left: R, top: L },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: rK.Fg,
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
                    className: rK.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": C.intl.string(E.default.d6Rqlu),
                    children: (0, n.jsx)(t6.H, { size: "custom", color: "currentColor", className: rK.WW }),
                }),
            }),
            (0, n.jsx)(ln.y, {
                autoFocus: !0,
                rows: 1,
                className: rK.hF,
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
                      className: rK.ZO,
                      children: g.map((e) => (0, n.jsx)(lC, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var rX = l(320510);
function rQ(e) {
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
function rZ(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rQ(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var rJ = l(940107),
    r0 = l(42843);
let r1 = { x: 25, y: 21 };
function r2(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function r7(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function r5(e, t, l, n) {
    let a = r7(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function r3(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function r4(e) {
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
function r6(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        u = null != l && l === r ? t : null,
        { active: o, annotations: d } = (0, eH.Q_)(u),
        c = (0, nw.o4)(u),
        m = (0, tw.useHasAnyModalOpen)(),
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
        [z, U] = a.useState(null),
        G = a.useRef(!1),
        [B, V] = a.useState(!1),
        [H, W] = a.useState(null),
        K = o && !c && !m;
    null == $ || (K && $.projectId === u) || q(null);
    let Y = $?.projectId ?? null;
    (a.useEffect(() => {
        if (null != Y) return () => eU(Y, "design");
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
                p((t) => (r2(t, e) ? t : e));
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
                (0, rX.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? r4(t.response) : null;
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
        if (r2(Q.current, x)) return;
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
                    (0, rX.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !et.current) return;
                        let l = r4(e.response);
                        null != l && (j(l), (0, eH._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rQ(e.element);
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
                    (0, rJ.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rZ, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((ee.current = !1), et.current)) {
                                if ("picked" !== t.status || ia(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && O(!0);
                                else {
                                    let e = (0, ew.ts)(t.target);
                                    (L((t) => (il(t, e) ? t : e)),
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
            let e = !G.current;
            (U({ at: $.at, label: $.label, draft: $.draft, instant: e }), V(e), q(null));
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
            let e = setTimeout(() => U(null), ie);
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
                    (eU(u, "design"),
                    W(null),
                    (G.current = !1),
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
                    (Math.abs(e.clientX - $.at.x) > it || Math.abs(e.clientY - $.at.y) > it) && (G.current = !0);
                    return;
                }
                if (!er) return void S(null);
                let t = ed(e, x);
                if (F) {
                    let e = (0, ew.jo)(ei, t.x, t.y),
                        l = null != e && ia(e, x, ea) ? null : e;
                    if (null != l) {
                        let e = (0, ew.ts)(l);
                        L((t) => (il(t, e) ? t : e));
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
                rH.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rH.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ep.current());
        }
        function t(e) {
            let t = e.target;
            (0, nU.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rV.J$)(e), !0);
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
                      let { left: l, top: n } = r3(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(r5(eI.target, eI.anchor, x, ea), x)
                : null;
    return (0, rz.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: r0.Li,
            children: [
                (0, n.jsx)("div", {
                    className: r0.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eE
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: r0.MT,
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
                              null != A && null == $ && null == H ? (0, n.jsx)(ir, { box: r7(A, x, ea) }) : null,
                              (0, n.jsx)("div", {
                                  ref: T,
                                  className: r0.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: r0.xz,
                                      "data-shown": null != A && null == H && null == $ ? "" : void 0,
                                      "data-instant": B ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: r0.Ux,
                                          children: [
                                              null == R
                                                  ? null
                                                  : (0, n.jsx)("span", { className: r0.Tl, children: R.kind }),
                                              null == R || "" === R.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: r0.kh, children: [" ", R.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: P,
                                  className: r0.Y,
                                  children: eC
                                      ? (0, n.jsx)(l9.A, { className: r0.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eP
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: r0.aZ,
                                        style: { transform: `translate3d(${eP.at.x + 12}px, ${eP.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: r0.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == $ ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: r0.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: r0.Tl, children: eP.label.kind }),
                                                    "" === eP.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: r0.kh,
                                                              children: [" ", eP.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eM
                                  ? (0, n.jsx)("div", { className: r0.D0, style: r7(eM, x, ea), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = r5(e.target, e.anchor, x, ea),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: r0.xL,
                                          style: { ...r3(l, x), width: 24, height: 24 },
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
                                          children: (0, n.jsx)(r9, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eT || null == u
                                  ? null
                                  : (0, n.jsx)(rY, {
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
                                  ? (0, n.jsxs)(r8, {
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
                                                ? (0, n.jsx)(rU.f, {
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
                                                      className: r0.aC,
                                                      children: eI.comment,
                                                  }),
                                            (0, eH.zz)(eI, g)
                                                ? (0, n.jsx)("div", {
                                                      className: r0.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: r0.nv,
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
function r9(e) {
    let { authorId: t } = e,
        l = (0, D.bG)([eo.default], () => eo.default.getUser(t), [t]);
    return (0, n.jsx)(rG.eu, {
        src: null == l ? null : rW.Ay.getUserAvatarURL(l),
        size: rB._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function r8(e) {
    let t,
        l,
        r,
        i,
        s,
        u,
        { point: o, frame: d, authorId: c, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(r1);
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
        className: r0.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: r0.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: r0.ip, children: (0, n.jsx)(r9, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: r0.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: r0.zI, children: x }),
        ],
    });
}
let ie = 300,
    it = 2;
function il(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function ia(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function ir(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: r0.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var ii = l(11055),
    is = l(175841),
    iu = l(533140),
    io = l(342667);
function id(e) {
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
        className: io.M0,
        "data-phase": t,
        "data-testid": "vibegrations-control-notice",
        children: [
            (0, n.jsxs)("div", {
                className: io.sp,
                children: [
                    (0, n.jsx)(is.SparklesIcon, { size: "sm", color: "currentColor" }),
                    u ? (0, n.jsx)(nA.i, { size: 12, color: "currentColor" }) : null,
                    (0, n.jsxs)("div", {
                        className: io.f4,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: io.w9,
                                children: C.intl.string(u ? E.default.ydhvN1 : E.default["7U6tIB"]),
                            }),
                            u
                                ? (0, n.jsx)(v.E, {
                                      variant: "text-xs/medium",
                                      color: "none",
                                      className: io.Rb,
                                      children: C.intl.string(E.default.NldIIG),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            u
                ? (0, n.jsxs)("div", {
                      className: io.lC,
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
function ic(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            resolveIframe: i,
            frameId: s,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, nw.o4)(null != l && l === r ? t : null),
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
        c = (0, tw.useHasAnyModalOpen)(),
        f = (0, iu.V0)(s);
    a.useEffect(() => {
        o && f && null != s && (0, iu.c2)(s);
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
    return (0, rz.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: io.y4,
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
                          className: io.om,
                          style: v,
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
                x
                    ? (0, n.jsx)("div", {
                          className: io.D,
                          style: v,
                          children: (0, n.jsx)(id, { phase: d, projectId: t, onOpenPublishedApp: u }),
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var im = l(237528),
    ih = l(664121),
    ig = l(95477),
    ix = l(724401);
function ip(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function iv(e) {
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
                (0, tf.A)({
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
                ? (0, n.jsx)("div", { className: ix.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: ix.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: ix.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(tm.Ip, {
                          className: ix.p_,
                          children: (0, n.jsx)("div", {
                              className: ix.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, tg.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: tg._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: ix.KW,
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
                                                  (0, n.jsx)(im.v, {
                                                      text: C.intl.string(E.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: ix.AD,
                                                title: C.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: ix.Pf,
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
                                                className: ix.f_,
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
                                                        className: ix.Pf,
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
            className: ix.nd,
            "aria-label": C.intl.string(E.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: ih.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ix.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: ix.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(af.V, {
                                        selectedItem: o,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": C.intl.string(E.default.CNvRyJ),
                                        className: ix.vR,
                                        children: [
                                            (0, n.jsx)(af.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(E.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(af.V.Item, {
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
                                          className: ix.lm,
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
                                            className: ix.lm,
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
                            className: ix.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: ix.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: ix.Fv,
                                            children: (0, n.jsx)(ig.k, {
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
                                    className: ix._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: ix.kv,
                                            children: (0, n.jsx)(ig.k, {
                                                label: C.intl.string(E.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: ip(R),
                                                max: ip(_),
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
var ib = l(120426),
    ij = l(873727),
    iy = l(147248),
    ik = l(418842),
    iN = l(363195),
    iw = l(885386),
    iA = l(171936),
    iS = l(796036);
function iE(e) {
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
        let l = (0, D.bG)([iN.A], () => (0, ij.x4)(iN.A.theme)),
            n = (0, D.bG)([iy.A], () => iy.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, D.cf)([li.Ay], () => ({
                reducedMotion: li.Ay.useReducedMotion,
                fontScale: (0, ij.U0)(),
                highContrast: li.Ay.isHighContrastModeEnabled,
                forcedColors: li.Ay.useForcedColors,
                underlineLinks: li.Ay.alwaysShowLinkDecorations,
            })),
            d = iw.hH.useSetting(),
            c = (0, ik.C)(),
            f = a.useRef(!1),
            m = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, ib.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, ij.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, rJ.W)(n, "set-env", a, {
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
                let l = (0, ib.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, ib.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, iA.mn)(t, () => (0, ib.F)(g, v));
        }, [t, g, v]));
    let b = a.useCallback(() => (0, ib.F)(g, v), [g, v]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: x, className: ej.fm, children: f })],
            }),
            m,
            (0, n.jsx)(ic, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                frameId: v,
                onOpenPublishedApp: h,
            }),
            (0, n.jsx)(r6, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function iC(e) {
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
            null != t && ((0, f.Hc)(t), (0, iS.s)());
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
        children: (0, n.jsx)(iE, {
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
                    ? (0, n.jsx)(ai, {
                          open: T.open,
                          maxWidth: $,
                          onWidthChange: c.Zq,
                          children: T.open
                              ? (0, n.jsx)(ey, { channel: T.channel, guild: T.guild, onClose: T.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(ai, {
                            open: g,
                            maxWidth: $,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(rq, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            tb,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(iv, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(ii.A, { projectId: t }),
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
                                                          ae,
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
