l.d(t, { A: () => iF });
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
    C = l(50617),
    E = l(375708),
    I = l(296167);
function T(e) {
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
                    children: E.intl.string(C.default.jTuX7C),
                }),
            ],
        })
    );
}
var M = l(328284);
function _(e) {
    let { title: t, body: l, wide: a = !1, children: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(M.Bf, a && M.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: M.Ux,
                children: [
                    (0, n.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, n.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var P = l(652215),
    R = l(165610),
    L = l(963691);
function D(e) {
    let { applicationId: t, surface: l } = e,
        { frame: r, state: i } = (0, N.A)({ applicationId: t, surface: l }),
        s = (0, R.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = j.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT)) return;
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
                children: (0, n.jsx)(_, {
                    title: E.intl.string(C.default["4f6Vkr"]),
                    body: E.intl.string(C.default.LJ2q1H),
                }),
            });
        case N.n.NoApplication:
            return (0, n.jsx)(T, { className: L.qs });
        case N.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(_, {
                    title: E.intl.string(C.default.FHOJiH),
                    body: E.intl.string(C.default["1yLQoV"]),
                }),
            });
        case N.n.Error:
            return (0, n.jsxs)("div", {
                className: L.qs,
                children: [
                    (0, n.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(C.default.MeLWCr),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: L.tj,
                        children: E.intl.string(C.default["1RCbQT"]),
                    }),
                ],
            });
        case N.n.AwaitingLaunch:
        case N.n.Loading:
            return (0, n.jsx)("div", { className: L.qs, children: (0, n.jsx)(m.y, {}) });
    }
}
var F = l(17928),
    O = l(323384),
    $ = l(308528),
    z = l(334738),
    q = l(688438),
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
        o = (0, F.bG)([G.A], () => {
            if (null == u) return null;
            let e = G.A.getDMFromUserId(u);
            return null != e ? G.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        a.useEffect(() => {
            null != t && $.A.preload(P.ME, t);
        }, [t]),
        (l = (0, F.bG)([B.A], () => B.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, V.Xg)();
            return (
                (0, z.yl)(t, e),
                () => {
                    (0, z.dm)(t, e);
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
          ? (0, n.jsx)(W, { message: E.intl.string(C.default.bl4eBc) })
          : null == o
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: H.g,
                  children: (0, n.jsx)(q.A, { channel: o, guild: null, chatInputType: U.oU.SIDEBAR }, o.id),
              });
}
var Q = l(821609),
    X = l(887909),
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
    } = (0, X.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
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
                      children: u.map((e, t) => (0, n.jsx)(Q.$, { size: "md", ...e }, t)),
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
    eu = l(58216),
    eo = l(287809),
    ed = l(58551),
    ec = l(71495);
function ef(e) {
    let { applicationId: t } = e,
        l = (0, F.bG)([eo.default], () => eo.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(em, { applicationId: t, user: l });
}
function em(e) {
    let { applicationId: t, user: l } = e,
        r = (0, F.bG)([ea.A], () => ea.A.getApplication(t)),
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
    if (!i) return (0, n.jsx)(T, { className: eh.q });
    if (null == t) return null;
    if (v && null == p) return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    let b = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, x.z3)(d), "aria-label": (0, x.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eh.R,
        ...b,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, n.jsx)(D, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, n.jsx)("div", {
                          className: eh.q,
                          children: (0, n.jsx)(_, {
                              wide: !0,
                              title: E.intl.string(C.default.SGHO9K),
                              body: E.intl.string(C.default["pV/rS2"]),
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
        i = (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: ej.Wx,
        children: [
            (0, n.jsx)(ep.A, { channel: t, draftType: eb.C.ChannelMessage }),
            (0, n.jsxs)(d.Ay, {
                toolbar: i,
                "aria-label": E.intl.string(E.t.BIYAqa),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: ex.ChatIcon, "aria-label": E.intl.string(E.t["/VQax8"]) }),
                    (0, n.jsx)(d.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ej.GZ,
                children: (0, n.jsx)(q.A, { channel: t, guild: l, chatInputType: U.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ek = l(689175),
    eN = l(65593),
    ew = l(29692),
    eA = l(903586),
    eS = l(783791);
function eC(e) {
    return !(0, eS.BL)(e) && !0 !== e.stopRequested;
}
var eE = l(935208),
    eI = l(435558),
    eT = l.n(eI),
    eM = l(506774),
    e_ = l(73153);
let eP = "VibegrationsComposerDrafts";
function eR() {
    return eM.w.get(eP) ?? {};
}
let eL = new Map(),
    eD = eT().throttle(() => {
        if (0 === eL.size) return;
        let e = eR();
        for (let [t, l] of eL) "" === l ? delete e[t] : (e[t] = l);
        (eL.clear(), eM.w.set(eP, e));
    }, 1e3);
class eF extends F.Ay.Store {
    getDraft(e) {
        let t = eL.get(e);
        return null != t ? t : (eR()[e] ?? "");
    }
}
let eO = new eF(e_.h, {
    LOGOUT: function () {
        return (eL.clear(), eD.cancel(), eM.w.remove(eP), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (eL.set(t, l), eD(), "" === l && eD.flush(), !1);
    },
});
function e$(e) {
    return "" !== eO.getDraft(e).trim();
}
(l(323874), l(14289), l(35956));
var ez = l(839214),
    eq = l(673724);
let eU = [],
    eG = 1,
    eB = (0, ez.D)(() => ({ draftsByProject: {} }));
function eV(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? eU;
}
function eH(e, t) {
    return eV(eB.getState(), e, t);
}
function eW(e, t, l) {
    let { draftsByProject: n } = eB.getState();
    eB.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function eK(e, t, l, n) {
    let a = eH(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (eW(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function eY(e, t) {
    (0, f.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function eQ(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && eY(e, t.ref.id));
}
function eX(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = eB.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? eU) l ? eQ(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    eB.setState({ draftsByProject: i });
}
function eZ(e, t) {
    let l = eH(e, t);
    if (0 !== l.length) {
        for (let t of l) eQ(e, t);
        eW(e, t, eU);
    }
}
function eJ(e, t) {
    let l = eH(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (eW(e, t, eU), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function e0(e, t) {
    let { clarificationAnswers: l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = eH(e, "chat"),
        a = n.length > 0 && n.every((e) => "ready" === e.status) ? eJ(e, "chat") : [];
    (0, f.dv)(e, t, a, { clarificationAnswers: l });
}
(e_.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eB.getState().draftsByProject)) eX(e, { deleteFromWorker: !0 });
}),
    e_.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        eX(t, { deleteFromWorker: !1 });
    }));
var e1 = l(74029),
    e2 = l(215181),
    e5 = l(717447),
    e7 = l(29080),
    e4 = l(46054),
    e3 = l(76275);
function e6(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(C.default.MdXWEK);
}
function e8(e) {
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
var e9 = l(939249),
    te = l(478016),
    tt = l(331322),
    tl = l(34136);
function tn(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...u } = e;
    return (0, n.jsxs)("section", {
        className: i()(tl.Nr, r),
        ...u,
        children: [
            (0, n.jsxs)("header", {
                className: i()(tl.wx, null != l && tl.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var ta = l(113757);
function tr(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        u = null == r;
    return (0, n.jsxs)(e9.D, {
        className: i()(ta.nM, { [ta.f1]: u, [ta.CZ]: l }),
        onClick: u ? void 0 : () => r(t),
        "aria-label": E.intl.formatToPlainString(C.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": u,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: ta.jo,
                children: [
                    l
                        ? (0, n.jsx)(te.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ta.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ta.G9,
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
function ti(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(tn, {
        title: E.intl.string(C.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                tr,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : u },
                e.id,
            ),
        ),
    });
}
function ts(e) {
    let { onAsk: t } = e;
    return (0, n.jsx)(tt.B, {
        align: "start",
        "data-vibegrations-ideas-offer": !0,
        children: (0, n.jsx)(Q.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: E.intl.string(C.default.cwTe5o),
        }),
    });
}
var tu = l(435619),
    to = l(866665),
    td = l(885574),
    tc = l(430392),
    tf = l(632015),
    tm = l(256905),
    th = l(824757);
function tg(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: th.uW,
        children: [
            (0, n.jsxs)("span", {
                className: th.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function tx() {
    return (0, n.jsx)(to.m, {
        text: E.intl.string(C.default.DXe2dP),
        children: (0, n.jsx)(e9.D, {
            className: th.bk,
            "aria-label": E.intl.string(C.default.Y6y4nQ),
            children: (0, n.jsx)(td.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function tp(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(tg, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: th.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: th.jw,
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
function tv(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? O.k : tc.RobotIcon;
    return (0, n.jsxs)("span", {
        className: th.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: th.L6,
                      children: [
                          (0, n.jsx)(tf.f, {
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
                              children: E.intl.string(C.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: th.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: E.intl.string(t ? E.t.IC5Ann : C.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function tb(e) {
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
        o = E.intl.string(C.default.FW8UcU),
        d = a.useCallback(() => {
            (0, f.PK)(t, r).then(
                (e) => {
                    (0, tm.R)({
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
        : (0, n.jsx)(tg, {
              label: E.intl.string(C.default["9W8SbY"]),
              info: (0, n.jsx)(tx, {}),
              children: (0, n.jsx)(e9.D, {
                  className: th.xX,
                  onClick: d,
                  "aria-label": E.intl.string(C.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: o, className: th.sN, onError: u }) : null,
              }),
          });
}
function tj(e) {
    let { projectId: t, proposal: l, onApprove: a } = e;
    return (0, n.jsx)(tn, {
        title: E.intl.string(C.default["60htw+"]),
        trailing: (0, n.jsx)(tv, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: th.rf,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(tb, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(tg, {
                          label: E.intl.string(C.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: th.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: th.Aw,
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
                    ? (0, n.jsx)(tg, {
                          label: E.intl.string(E.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: th.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: th.uX,
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
                (0, n.jsx)(tp, { label: E.intl.string(C.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(tp, { label: E.intl.string(C.default.Cn9qix), names: l.privileged_intents ?? [] }),
                null != a
                    ? (0, n.jsxs)("div", {
                          className: th.o1,
                          children: [
                              (0, n.jsx)(Q.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: E.intl.string(C.default["hG0Y0+"]),
                                  onClick: a,
                              }),
                              (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  tag: "span",
                                  children: E.intl.string(C.default.Vl3IL0),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
var ty = l(548118),
    tk = l(71393),
    tN = l(455435);
function tw(e) {
    return null != e && e.status?.state === "unpublished";
}
function tA(e) {
    return null != e && e.isUpdate && null == e.disabledReason;
}
function tS(e) {
    let { publish: t } = e,
        l = t.guildId,
        a = (0, F.bG)([tk.A], () => (null == l ? null : tk.A.getGuild(l)));
    return (0, n.jsx)(tt.B, {
        gap: 8,
        align: "start",
        children: (0, n.jsxs)(tt.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, n.jsx)(to.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, n.jsx)(Q.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != a
                    ? (0, n.jsxs)(tt.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(C.default.FLbAwN),
                              }),
                              (0, n.jsx)(ty.Ay, { guild: a, size: ty.Ay.Sizes.SMOL }),
                              (0, n.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let l = t.slice(0, 23).join("");
                                      return `${l.trimEnd()}\u{2026}`;
                                  })(a.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function tC(e) {
    let { projectId: t } = e,
        l = (0, tN.Ay)(t);
    return null != l && tw(l) ? (0, n.jsx)(tS, { publish: l }) : null;
}
var tE = l(314116),
    tI = l(364522),
    tT = l(406810),
    tM = l(381849),
    t_ = l(977628);
function tP(e) {
    let t = Date.parse(e);
    return Number.isNaN(t)
        ? { relative: null, absolute: null }
        : {
              relative: (0, tM.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: tM._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function tR(e) {
    return (0, tE.A)({
        title: E.intl.string(C.default.qOUOPE),
        subtitle: E.intl.string(C.default.k2JBj5),
        confirmText: E.intl.string(C.default["+sRK16"]),
        variant: "critical",
        onConfirm: e,
    });
}
function tL(e) {
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
                ? (0, n.jsx)("div", { className: t_.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: t_.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: E.intl.string(C.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: t_.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(tI.Ip, {
                          className: t_.p_,
                          children: (0, n.jsx)("div", {
                              className: t_.jO,
                              children: s.entries.map((e) => {
                                  let t = tP(e.authoredAt);
                                  return (0, n.jsxs)(
                                      e9.D,
                                      {
                                          className: t_.f_,
                                          onClick: () =>
                                              tR(() => {
                                                  (r(), i(e));
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: t_.bc,
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
            className: t_.nd,
            "aria-label": E.intl.string(C.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": E.intl.string(C.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: tT.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: E.intl.string(C.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: t_.rf, children: t }),
            ],
        })
    );
}
var tD = l(584698);
function tF(e) {
    let { proposal: t, onRestore: l } = e,
        a = tP(t.authored_at);
    return (0, n.jsx)(tn, {
        title: E.intl.string(C.default.khdMoL),
        children: (0, n.jsxs)("div", {
            className: tD.r,
            children: [
                (0, n.jsxs)("div", {
                    className: tD.z,
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
                    ? (0, n.jsx)(Q.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(C.default.eSDVDt),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var tO = l(530557),
    t$ = l(872162),
    tz = l(192308),
    tq = l(479191);
function tU(e) {
    let { projectId: t, request: r, awaiting: i } = e,
        s = a.useCallback(() => {
            (0, tz.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]),
        u = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: tO.R })), [r.fields]);
    return (0, n.jsxs)("article", {
        className: tq.L,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: null != i ? "text-brand" : "text-muted",
                tag: "span",
                children: E.intl.string(null != i ? C.default.sKNh1M : C.default["/e28TK"]),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : E.intl.string(C.default.jxvtin),
            }),
            (0, n.jsx)(t$.C, { label: E.intl.string(C.default["/e28TK"]), size: "xs", items: u }),
            (0, n.jsx)("div", {
                className: tq.s,
                children: (0, n.jsx)(Q.$, {
                    variant: "primary",
                    size: "sm",
                    onClick: s,
                    text: E.intl.string(C.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var tG = l(349735),
    tB = l(450112),
    tV = l(973e3);
function tH(e) {
    let { projectId: t, request: l, onDismiss: a } = e,
        r = null != l.note && "" !== l.note ? l.note : E.intl.string(C.default["V+DBhs"]);
    return (0, n.jsx)(tG.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: s, submit: o } = e;
            function d(e) {
                (e.preventDefault(), o());
            }
            let c = (0, n.jsx)(Q.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: s,
                disabled: !l,
                text: E.intl.string(C.default.Tuz9vw),
            });
            return null == a
                ? (0, n.jsxs)("form", {
                      className: tV.Mk,
                      onSubmit: d,
                      children: [
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(C.default.wgDhiQ),
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: r,
                          }),
                          t,
                          (0, n.jsx)("div", { className: tV.p0, children: c }),
                      ],
                  })
                : (0, n.jsxs)("form", {
                      className: i()(tB.nd, tB.jx),
                      "aria-label": E.intl.string(C.default.wgDhiQ),
                      onSubmit: d,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tB.wx,
                              children: [
                                  (0, n.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: tB.TK,
                                      children: E.intl.string(C.default.wgDhiQ),
                                  }),
                                  (0, n.jsx)(e9.D, {
                                      className: i()(tB.gb, tB.Q7),
                                      onClick: a,
                                      "aria-label": E.intl.string(C.default["6UTDHm"]),
                                      children: (0, n.jsx)(u.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: tV.DQ,
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: r,
                                  }),
                                  t,
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: tB.qr,
                              children: (0, n.jsx)("div", { className: tB.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var tW = l(196582);
let tK = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    tY = {
        snail: () => C.default["2l3AEQ"],
        goat: () => C.default["+FPL+I"],
        frog: () => C.default.w4GOfR,
        bunny: () => C.default.XmZT9M,
        cat: () => C.default.NnydwQ,
        caterpillar: () => C.default["4iXcNT"],
        butterfly: () => C.default.DoTGt5,
        dog: () => C.default["9zxqmP"],
        spider: () => C.default.HF0T3L,
        bee: () => C.default.XTzDga,
        bot: () => C.default.abtC2b,
    },
    tQ = {
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
function tX(e) {
    return { ...tQ[e], name: E.intl.string(tY[e]()) };
}
function tZ(e) {
    return tK.includes(e) ? tX(e) : void 0;
}
function tJ(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % tK.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, tK[(t + l) % tK.length]);
            }),
            n
        );
    })(e))
        t.set(l, tX(n));
    return t;
}
var t0 = l(683063),
    t1 = l(705754),
    t2 = l(883455),
    t5 = l(13699);
function t7(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        u = l.task,
        o = "running" === u.status,
        d = (0, eA.SY)(l.steps),
        c = o
            ? null != d
                ? (0, eA.WQ)(d)
                : e6(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(e6(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(C.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(C.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(C.default.vuv9bT, {
                                  task: t,
                                  duration: (0, e3.MB)(e.durationMs),
                              });
                          return E.intl.formatToPlainString(C.default.KS49RN, { task: t });
                      default:
                          return E.intl.formatToPlainString(C.default.KS49RN, { task: t });
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
                                    className: t5.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            t2.A,
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
                                      className: t5.iq,
                                      children: (0, n.jsx)(t1.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(tW.A, {
        glyph: (0, n.jsx)(t0.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: e6(u),
            position: "left",
            children: (0, n.jsx)("span", {
                className: t5.nC,
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
var t4 = l(847374),
    t3 = l(320448),
    t6 = l(140735),
    t8 = l(329456);
let t9 = [];
function le(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(t8.xL, {
            [t8.Vb]: "in_progress" === t,
            [t8.cT]: "completed" === t,
            [t8.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return E.intl.string(C.default.TkPGOH);
                case "in_progress":
                    return E.intl.string(C.default["oK+fmd"]);
                case "unfinished":
                    return E.intl.string(C.default["1ley3g"]);
                default:
                    return E.intl.string(C.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: t8.Qd,
                itemClassName: t8.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: t8.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: t8.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lt(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : t9), [l, t]),
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
        className: t8.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    t0.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: t8.MA,
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
                      className: t8.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function ll(e) {
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
            ((t = (s ?? t9).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? t9) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: t8.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || u ? t : "unfinished");
                return (0, n.jsxs)(
                    "li",
                    {
                        className: i()(t8.AS, { [t8.J1]: "completed" === l }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(le, { status: l }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t8.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", {
                                    className: t8.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, n.jsx)(lt, { agents: d.get(e.id) ?? t9, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != r
                ? (0, n.jsxs)("li", {
                      className: t8.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(le, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t8.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: t8.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ln(e) {
    let { todos: t, provisional: l, agents: r, announceProgress: i = !0, live: s = !0, superseded: u = !1 } = e,
        o = a.useId(),
        [d, c] = a.useState(!u),
        [f, m] = a.useState(u);
    f !== u && (m(u), c(!u));
    let h = a.useCallback(() => c((e) => !e), []),
        { completed: g, total: x } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === x) return null;
    let p = E.intl.formatToPlainString(C.default.bQvqly, { completed: g, total: x }),
        b = E.intl.formatToPlainString(C.default["QG/EiF"], { completed: g, total: x }),
        j = d ? t4.a : t3._;
    return (0, n.jsxs)(tn, {
        title: E.intl.string(C.default.qCRC6c),
        trailing: (0, n.jsxs)("span", {
            className: t8.ZY,
            children: [
                (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: p }),
                u
                    ? (0, n.jsx)(e9.D, {
                          className: t8.L$,
                          onClick: h,
                          "aria-expanded": d,
                          "aria-controls": o,
                          "aria-label": E.intl.string(d ? C.default.fIBJas : C.default.SVhXLT),
                          children: (0, n.jsx)(j, { size: "xs", color: "currentColor" }),
                      })
                    : null,
            ],
        }),
        className: t8.Nr,
        headerClassName: d ? void 0 : t8.RG,
        "data-vibegrations-todo-card": !0,
        "data-superseded": u ? "true" : void 0,
        children: [
            i && !u ? (0, n.jsx)(t6.A, { role: "status", "aria-live": "polite", children: b }) : null,
            (0, n.jsx)("div", {
                id: o,
                className: t8.rf,
                hidden: !d,
                children: (0, n.jsx)(ll, { todos: t, provisional: l, agents: r, live: s }),
            }),
        ],
    });
}
var la = l(744239),
    lr = l(229775),
    li = l(165648);
function ls(e) {
    let t = tJ(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tZ(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: e6(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function lu(e) {
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
            className: t5.pj,
            "data-live": !1,
            children: (0, n.jsx)(tW.A, {
                glyph: (0, n.jsx)(e7.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(C.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let b = r ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? u) : void 0)),
        j = m ? ((0, eA.lt)(l) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        N = tJ(k.map((e) => e.taskId)),
        w = !g && (r || k.some((e) => "running" === e.task.status)),
        A = ls(k);
    return (0, n.jsx)(tW.l.Provider, {
        value: k.length,
        children: (0, n.jsxs)("ol", {
            className: t5.pj,
            "data-live": w,
            children: [
                (0, n.jsx)(e5.A, {
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
                    let a = null != e.task.helperMark ? tZ(e.task.helperMark) : void 0,
                        r = a ?? N.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              t7,
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
                          className: t5.YO,
                          children: (0, n.jsx)(ln, { todos: j, provisional: c, agents: A, live: i, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function lo(e) {
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
            () => e8({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != o && o.length > 0 }),
            [l, r, s, o],
        ),
        { streamed: w, lastStreamedMessage: A, showsClosingMessage: S, closingContent: I } = N,
        T = (b ? j : void 0) ?? N.attachmentsHost,
        M = S && !b,
        _ = null == o ? null : (0, n.jsx)(tu.A, { projectId: t, attachments: o }),
        P = null == _ ? null : (0, n.jsx)("div", { className: t5.MT, children: _ }),
        R = p
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(C.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: t5.ue,
        children: [
            w.length > 0 && !b
                ? (0, n.jsx)("ol", {
                      className: t5.dO,
                      children: w
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: t5.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: li.PT,
                                              children: e4.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === T && e === A ? P : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(tj, { projectId: t, proposal: s, onApprove: x })
                : M
                  ? (0, n.jsxs)("div", {
                        className: i()(t5.ky, lr.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(li.PT, t5.cW),
                                children: e4.A.parse(I, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? P : null,
                            R,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(t5.ky, lr.XR, { [la.O]: null != c }),
                      children: (0, n.jsx)(tU, { projectId: t, request: d, awaiting: c }),
                  })
                : null,
            null != f
                ? (0, n.jsx)("div", {
                      className: i()(t5.ky, lr.XR),
                      children: (0, n.jsx)(tH, { projectId: t, request: f }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || M) ? null : _,
            null != m ? (0, n.jsx)(tC, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, n.jsx)(ti, { ideas: u, pickedIdeaIds: g, onPick: h }) : null,
            null != y ? (0, n.jsx)(tF, { proposal: y, onRestore: k }) : null,
            M ? null : R,
        ],
    });
}
var ld = l(864970),
    lc = l(146806),
    lf = l(475358),
    lm = l(81369),
    lh = l(922016),
    lg = l(980707),
    lx = l(477782),
    lp = l(717400),
    lv = l(663341),
    lb = l(826745),
    lj = l(783977),
    ly = l(559647),
    lk = l(775602),
    lN = l(234320),
    lw = l(379307),
    lA = l(285796),
    lS = l(590380),
    lC = l(298668);
let lE = eq.Is;
function lI(e, t, l, n) {
    let a = eH(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: eG++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (eW(e, t, [
            ...eH(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    "errorText" in n
                        ? eK(e, t, l.localId, { status: "error", errorText: n.errorText })
                        : eK(e, t, l.localId, { status: "ready", ref: n })
                          ? setTimeout(
                                () =>
                                    eK(e, t, l.localId, {
                                        status: "error",
                                        errorText: E.intl.string(C.default.HL9CT6),
                                    }),
                                eq.$f - 3e5,
                            )
                          : eY(e, n.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        eK(e, t, l.localId, { status: "error", errorText: E.intl.string(C.default.GwEHvn) }));
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
                        errorText: E.intl.formatToPlainString(C.default.DlX57a, { count: lE }),
                    },
                };
            if (!(0, eq.x5)(e.size, t))
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: E.intl.formatToPlainString(C.default.cI7t94, { size: (0, eq.ZJ)((0, eq.yr)(t)) }),
                    },
                };
            let r = eq.Wb.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function lT(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        r = eB.useState((e) => eV(e, t, l)),
        i = a.useCallback((e) => lI(t, l, e, n), [t, l, n]),
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
                null != (a = (n = eH(t, l)).find((t) => t.localId === e)) &&
                    (eQ(t, a),
                    eW(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        o = a.useCallback(() => eJ(t, l), [t, l]);
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
    return (0, n.jsxs)(lS.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: lC.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: lC.o1,
                onClick: () => l(t.localId),
                "aria-label": E.intl.string(C.default["3HWvgk"]),
                children: (0, n.jsx)(lA.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var l_ = l(789438);
let lP = "text-md/normal",
    lR = null;
function lL(e) {
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
                frontFrom: 1e3 * (0, lc._R)(f),
                frontTo: 1e3 * (0, lc._R)(h),
                backFrom: 1e3 * (0, lc.T)(f),
                backTo: 1e3 * (0, lc.T)(h),
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
        I = (0, F.bG)([lk.Ay], () => lk.Ay.useReducedMotion),
        T = t === E.intl.string(C.default.Jj8Ftb),
        M = s === t && T;
    function _(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(l_.VT, { [l_.qk]: a }),
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
            children: (0, n.jsx)(lf.e, { shortcut: "tab", className: l_.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ld.o, {
                text: t,
                variant: lP,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(l_.xM, { [l_.s2]: r }),
                onStart: w,
                onComplete: () => u(t),
            }),
            _(l_.IS, l || (!I && "out" === y), o),
            (0, n.jsx)("span", {
                ref: d,
                className: l_.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: lP, tag: "span", children: t }),
            }),
            M
                ? (0, n.jsxs)("span", {
                      className: l_.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: lP, tag: "span", className: l_.xM, children: t }),
                          _(l_.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function lD(e) {
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
            hasPendingContext: x = !1,
            onDraftHasTextChange: p,
            modelSettings: v,
            onModelSettingsChange: b,
        } = e,
        [j, y] = a.useState(() => eO.getDraft(t)),
        k = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), y(e));
            },
            [t],
        ),
        N = "" !== j.trim();
    a.useEffect(() => p?.(N), [N, p]);
    let [w, A] = a.useState(t);
    w !== t && (A(t), y(eO.getDraft(t)));
    let S = (0, F.bG)([lk.Ay], () => lk.Ay.isSubmitButtonEnabled),
        [I, T] = a.useState(!1);
    a.useEffect(() => {
        i || T(!1);
    }, [i]);
    let M = a.useRef(null),
        {
            drafts: _,
            addFiles: R,
            pasteFiles: L,
            removeDraft: D,
            settled: O,
            takeRefs: $,
        } = lT({ projectId: t, surface: "chat", onUploadFile: d }),
        z = "" !== j.trim() || _.length > 0 || x,
        q = l && z && O,
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
            if (!q) return;
            let e = $();
            u(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == lR && (lR = document.createElement("canvas").getContext("2d"));
                let i = lR;
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
            })(X.current?.querySelector("textarea") ?? null, ei.current, j);
            ("" !== t && G(t), k(""));
        }, [q, j, u, $, k]),
        V = a.useCallback(
            (e) => {
                (e.preventDefault(), B());
            },
            [B],
        ),
        H = a.useCallback(() => {
            null == o || I || (T(!0), o());
        }, [o, I]),
        W = null == h || "" !== j || !l || r || s || x ? null : h,
        K = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != o && !I) {
                    (e.preventDefault(), e.stopPropagation(), H());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != W) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(W));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), B());
            },
            [B, f, i, o, I, H, W, k],
        ),
        Y = a.useCallback(
            (e) => {
                l && L(e);
            },
            [l, L],
        );
    (0, lN.Vo)({
        event: P.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return Y(t);
        },
    });
    let Q = a.useCallback(
            (e) => {
                (R(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [R],
        ),
        X = a.useRef(null),
        Z = a.useRef(null),
        [J, ee] = a.useState(0),
        [et, el] = a.useState(!1);
    a.useEffect(() => {
        if (0 === j.length) return void el(!1);
        let e = X.current?.querySelector("textarea");
        if (null != e) {
            let t = l$(e);
            null != t && ee(t);
        }
        el(!0);
        let t = setTimeout(() => el(!1), lF);
        return () => clearTimeout(t);
    }, [j]);
    let en = a.useMemo(() => ({ "--custom-glow-x": `${J}px` }), [J]),
        ea = et ? ` ${l_.EB}` : "",
        er = s
            ? E.intl.string(C.default.pGFXZ0)
            : r
              ? E.intl.string(C.default.JeM47J)
              : l
                ? x
                    ? E.intl.string(C.default.Bs7bUv)
                    : g
                      ? E.intl.string(C.default.M3ovXY)
                      : E.intl.string(i ? C.default["67PpcP"] : C.default.ahRdoJ)
                : E.intl.string(C.default.nm4w9P),
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
        ef = "" === j && "" !== ec;
    return (0, n.jsxs)("form", {
        onSubmit: V,
        className: l_.DA,
        children: [
            _.length > 0
                ? (0, n.jsx)("div", {
                      className: l_.lN,
                      children: _.map((e) => (0, n.jsx)(lM, { draft: e, onRemove: D }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${l_.wg} ${l_.LP}${ea}`, style: en, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${l_.wg} ${l_.L3}${ea}`, style: en, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: l_.VA,
                ref: X,
                children: [
                    (0, n.jsx)("input", {
                        ref: M,
                        type: "file",
                        multiple: !0,
                        onChange: Q,
                        className: l_.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == m
                        ? (0, n.jsx)(to.m, {
                              text: E.intl.string(C.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: Z,
                                  type: "button",
                                  className: `${l_.Y0} ${l_.nu}`,
                                  disabled: !l,
                                  onClick: () => M.current?.click(),
                                  "aria-label": E.intl.string(C.default.d6Rqlu),
                                  children: (0, n.jsx)(lm.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: l_.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(lh.Y, {
                              targetElementRef: Z,
                              position: "top",
                              align: "left",
                              animation: lh.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(lg.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": E.intl.string(E.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(lx.rX, {
                                          children: [
                                              (0, n.jsx)(lx.Dr, {
                                                  id: "upload-file",
                                                  label: E.intl.string(E.t["d3+iYs"]),
                                                  iconLeft: lm.H,
                                                  leadingAccessory: { type: "icon", icon: lm.H },
                                                  action: () => M.current?.click(),
                                              }),
                                              null != m
                                                  ? (0, n.jsx)(lx.Dr, {
                                                        id: "import-project",
                                                        label: E.intl.string(C.default.edKajy),
                                                        iconLeft: lp.q,
                                                        leadingAccessory: { type: "icon", icon: lp.q },
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
                                      className: `${l_.Y0} ${l_.nu}`,
                                      disabled: !l,
                                      "aria-label": E.intl.string(E.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(lv.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: l_.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, n.jsx)("div", {
                              ref: eu,
                              className: l_.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(lL, { text: ec, offering: ed && null == U, typed: null != U }),
                          })
                        : null,
                    (0, n.jsx)(lb.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: Y,
                        placeholder: ef ? "" : er,
                        disabled: !l,
                        "aria-label": E.intl.string(C.default.OPr66w),
                        "aria-describedby": ef ? eo : void 0,
                        rows: 1,
                        className: l_.jp,
                    }),
                    ef ? (0, n.jsx)(t6.A, { id: eo, children: er }) : null,
                    (0, n.jsx)("div", {
                        className: l_.Sz,
                        children:
                            i && null != o
                                ? (0, n.jsx)(to.m, {
                                      text: E.intl.string(C.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${l_.Y0} ${l_.$E}`,
                                          disabled: I,
                                          onClick: H,
                                          "aria-label": E.intl.string(C.default.KdgI4k),
                                          children: (0, n.jsx)(e7.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : v?.tierSettings != null && null != b
                                  ? (0, n.jsx)(lw.A, {
                                        settings: v.tierSettings,
                                        tiers: v.tiers,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: b,
                                        className: `${l_.Y0} ${l_.$E}`,
                                        icon: (0, n.jsx)(lj.R, {
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
                              className: l_.fF,
                              children: [
                                  (0, n.jsx)("div", { className: l_.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: l_.rt,
                                      disabled: !q,
                                      "aria-label": E.intl.string(C.default["22GHMt"]),
                                      children: (0, n.jsx)(ly.SendMessageIcon, {
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
        ],
    });
}
let lF = 1500,
    lO = [
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
function l$(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = l$.mirror;
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
                (l$.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of lO) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
l$.mirror = null;
var lz = l(442433),
    lq = l(972786),
    lU = l(320095),
    lG = l(963852),
    lB = l(521981),
    lV = l(763754),
    lH = l(491182),
    lW = l(438729),
    lK = l(622868),
    lY = l(448368),
    lQ = l(837528),
    lX = l(439762),
    lZ = l(715628),
    lJ = l(752636),
    l0 = l(9842),
    l1 = l(589022),
    l2 = l(95701),
    l5 = l(994500),
    l7 = l(967198);
let l4 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function l3(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function l6(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function l8(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = l6(e, t),
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
        for (; l < 32 && l3(l6(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function l9(e, t) {
    let { streaming: l } = t,
        n = (0, F.bG)([lk.Ay], () => lk.Ay.useReducedMotion),
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
                      for (; r > 0 && l8(t, r);) r--;
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
                                    for (; n > t + 1 && l - n < 12 && l4.has(e.charAt(n - 1));) n--;
                                    return l4.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && l8(t, u);) u++;
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
var ne = l(725592),
    nt = l(73432),
    nl = l(365199),
    nn = l(194085),
    na = l(734495),
    nr = l(441136);
function ni(e) {
    let { message: t, onClose: l } = e,
        a = (0, na.A)(t);
    return (0, n.jsx)(lg.W, {
        navId: "vibegrations-message-actions",
        "aria-label": E.intl.string(E.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(lx.rX, { children: a }),
    });
}
function ns(e) {
    let { groupStart: t, renderMenu: l } = e,
        [r, s] = a.useState(!1),
        u = a.useRef(null),
        o = a.useCallback(() => s((e) => !e), []),
        d = a.useCallback(() => s(!1), []);
    return (0, n.jsx)("div", {
        className: i()(nr.QE, { [nr.Rn]: t, [nr.vg]: r }),
        children: (0, n.jsx)(nn.Ay, {
            children: (0, n.jsx)(lh.Y, {
                targetElementRef: u,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return l(t);
                },
                shouldShow: r,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: lh.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: l, ...a } = e,
                        { isShown: r } = t;
                    return (0, n.jsx)(nn.qv, {
                        ref: u,
                        label: E.intl.string(E.t["UKOtz+"]),
                        icon: nl.MoreHorizontalIcon,
                        selected: r,
                        onClick: o,
                        ...a,
                    });
                },
            }),
        }),
    });
}
function nu(e) {
    let { message: t, groupStart: l } = e,
        r = a.useCallback((e) => (0, n.jsx)(ni, { message: t, onClose: e }), [t]);
    return null == (0, na.A)(t) ? null : (0, n.jsx)(ns, { groupStart: l, renderMenu: r });
}
let no = (0, l2.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    nd = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nc(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(nr.Yq, { [nr.x1]: t }), children: e });
}
function nf(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nm(e, t, l) {
    let { content: r } = (0, lX.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: no, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(lW.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lZ.A)(i, r);
}
function nh(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lQ.m)(e, no, t.usernameProfile, r),
        u = (0, lQ.Jo)(t.avatarProfile, r),
        o = (0, F.bG)([l7.A], () => l7.A.getGuildId()),
        d = (0, F.bG)([eo.default], () => eo.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eo.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(l1.A, { ...t, user: l, currentUser: d, guildId: o ?? void 0 });
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
function ng(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, lB.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: nr.GV,
                              children: [
                                  (0, n.jsx)(nt.A, { className: nr.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, F.cf)(
            [l5.A],
            () => ({
                isReplyAuthorBlocked: l5.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: l5.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, lV.X4)(l),
        c = (0, lV.X4)(t),
        f = nh(l);
    return (0, n.jsx)(lY.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: no,
        referencedMessage: { state: l0.a.LOADED, message: l },
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
function nx(e) {
    let { message: t, author: l } = e,
        a = nh(t);
    return (0, n.jsx)(lK.Ay, {
        message: t,
        channel: no,
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
function np(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(() => (0, ne.Y)(r), [r]);
    let u = (0, F.bG)(
            [eo.default],
            () => (0, ne.T)(r, null != r ? eo.default.getUser(r) : null, eo.default.getCurrentUser()),
            [r],
        ),
        o = a.useMemo(() => (0, lV.FT)(u, null), [u]),
        d = a.useMemo(() => (0, ew.LL)(t), [t]),
        c = d?.body ?? t,
        f = a.useMemo(() => {
            if (null == u) return null;
            let e = (0, lG.Ay)({ channelId: no.id, content: c, author: u });
            return (0, lU.rh)({ ...e, timestamp: nf(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, u, l]);
    return null == f
        ? null
        : (0, n.jsx)(nv, { message: f, author: o, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function nv(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        u = nm(t, a);
    return (0, n.jsx)(lH.A, {
        className: nr.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(nx, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, n.jsxs)("div", {
                      className: nr.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: nr.GV,
                              children: [
                                  (0, n.jsx)(nt.A, { className: nr.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: nr.WO, children: u }),
                      ],
                  }),
        childrenAccessories: nc(i, "" !== a),
        childrenButtons: (0, n.jsx)(nu, { message: t, groupStart: s }),
    });
}
function nb(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: d,
        } = e,
        { text: c, revealing: f } = l9(t, { streaming: o }),
        m = a.useMemo(() => (0, lV.FT)(null, null), []),
        h = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        g = i?.userId,
        x = (0, F.bG)(
            [eo.default],
            () => (0, ne.T)(g, null != g ? eo.default.getUser(g) : null, eo.default.getCurrentUser()),
            [g],
        ),
        p = a.useMemo(() => (null == i ? null : (0, ew.LL)(i.content)), [i]),
        v = a.useMemo(() => {
            if (null == i || null == x) return null;
            let e = (0, lG.Ay)({ channelId: no.id, content: p?.body ?? i.content, author: x });
            return (0, lU.rh)({ ...e, id: i.id, timestamp: nf(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, p, x]),
        b = a.useMemo(() => (null == i ? void 0 : { channel_id: no.id, message_id: i.id }), [i]),
        j = a.useMemo(() => {
            let e = (0, lG.Ay)({ channelId: no.id, content: c, author: nd });
            return (0, lU.rh)({
                ...e,
                timestamp: nf(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != b ? { type: P.lAJ.REPLY, message_reference: b } : {}),
            });
        }, [c, l, b]),
        y = nm(j, c, nr.OS);
    return (0, n.jsxs)("div", {
        className: nr.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-vibegrations-revealing": f ? "true" : void 0,
        children: [
            (0, n.jsx)(lH.A, {
                className: nr.yE,
                author: h,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, n.jsx)(ng, { baseMessage: j, referenced: v, selected: p?.label, onJumpToReplied: s }),
                childrenHeader: (0, lJ.A)({ message: j, channel: no, author: h, guildId: void 0, isGroupStart: u }),
                childrenMessageContent: y,
                childrenAccessories: nc(r, "" !== c),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, n.jsx)("span", {
                      className: nr.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(O.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let nj = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
function ny(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, n.jsx)(nN, { projectId: t }) : (0, n.jsx)(nk, { projectId: t, notice: l });
}
function nk(e) {
    let { projectId: t, notice: l } = e,
        r = a.useContext(tN.Qc),
        i = (0, F.bG)([lq.Ay, ea.A], () => {
            let e = lq.Ay.getProject(t);
            return null == e ? "" : (ea.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        s = a.useCallback(() => {
            null != r && (0, tN.v0)(t, r);
        }, [r, t]);
    return (0, n.jsx)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: E.intl.format(
            (function (e) {
                if (!e.update) return C.default.ogEl54;
                switch (e.surface) {
                    case "bot":
                        return C.default.ncJb2S;
                    case "widget":
                        return C.default.gSpqdm;
                    case "automod":
                        return C.default.M3cBMT;
                    case "activity":
                    case null:
                        return C.default.tg9fgb;
                }
            })(l),
            { name: i, onOpen: s },
        ),
    });
}
function nN(e) {
    let { projectId: t } = e,
        l = (0, tN.Ay)(t);
    return null != l && tA(l)
        ? (0, n.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: E.intl.format(C.default.AcWS6c, { action: l.label, onUpdate: () => l.run("outdated_notice") }),
          })
        : null;
}
var nw = l(744898);
function nA(e) {
    let { onSelect: t, onClose: l = lz.Z_, onRestoreVersion: a } = e;
    return (0, n.jsx)(lg.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-turn-context",
        onClose: l,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, n.jsx)(lx.rX, {
            children: (0, n.jsx)(lx.Dr, {
                id: "restore-version",
                label: E.intl.string(C.default.eSDVDt),
                icon: nw.e,
                action: a,
            }),
        }),
    });
}
var nS = l(375068);
function nC(e) {
    let {
            projectId: t,
            messages: l,
            emptyState: r,
            ref: s,
            onPickIdea: u,
            onAskForIdeas: o,
            draftHasText: d,
            onApprovePlan: c,
            floatingSettingsMessageId: f,
            onRestoreVersion: h,
        } = e,
        g = a.useRef(null),
        x = a.useCallback(
            (e) => {
                ((g.current = e), "function" == typeof s ? s(e) : null != s && (s.current = e));
            },
            [s],
        ),
        [p, b] = a.useState(null),
        j = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(j.current), []);
    let y = a.useCallback((e) => {
            let t = g.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                b(e),
                window.clearTimeout(j.current),
                (j.current = window.setTimeout(() => b(null), 1600)));
        }, []),
        k = (0, F.bG)([lq.Ay], () => lq.Ay.getPublishStatus(t)?.state ?? null),
        N = tA((0, tN.Ay)(t))
            ? (function (e, t) {
                  if ("changes" !== t) return null;
                  for (let t = e.length - 1; t >= 0; t--) {
                      let l = e[t];
                      if ("user" !== l.role && "publish_notice" !== l.kind && !0 !== l.interrupted) {
                          if ((0, eS.BL)(l)) return l.render_id;
                          if (!(0, eS.B0)(e, t)) break;
                      }
                  }
                  return null;
              })(l, k)
            : null,
        w = a.useMemo(() => {
            let e;
            return (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = [],
                    n = (function (e) {
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
                function a(e, t) {
                    l.push({ row: e, groupable: { key: e.key, ...t } });
                }
                for (let l of e) {
                    if ("user" === l.role) {
                        a(
                            { kind: "user", key: l.render_id, message: l, groupStart: !1 },
                            { actor: "user", authorId: l.user_id, boundary: void 0 },
                        );
                        continue;
                    }
                    if ("publish_notice" === l.kind) {
                        let e = `${l.render_id}:publish`;
                        a(
                            { kind: "publishNotice", key: e, message: l, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, eS.BL)(l),
                        r = e8({
                            steps: l.steps,
                            content: l.content,
                            hasProposal: null != l.proposal,
                            hasAttachments: (l.attachments?.length ?? 0) > 0,
                        }),
                        i = r.lastStreamedMessage?.key,
                        s = (0, eA.C6)(l.steps, { turnActive: e }),
                        { lastWork: u, open: o } = (0, eA.CT)(s, { turnActive: e }),
                        d = s.at(-1)?.index,
                        c = !1;
                    for (let t of s) {
                        if (null != t.prose && nj.test(t.prose.content)) c = !0;
                        else if (null != t.prose && t.prose.key !== r.replyKey) {
                            let n = `${l.render_id}:${t.key}`;
                            a(
                                {
                                    kind: "prose",
                                    key: n,
                                    message: l,
                                    groupStart: !1,
                                    content: t.prose.content,
                                    hostsAttachments:
                                        "streamed" === r.attachmentsHost && t.prose.key === i && null != l.attachments,
                                    streaming: e && t.index === d && !t.hasWork,
                                },
                                { actor: "assistant", boundary: n },
                            );
                        }
                        (t.hasWork || t.hasTodos) &&
                            a(
                                {
                                    kind: "activity",
                                    key: `${l.render_id}:work-${t.index}`,
                                    message: l,
                                    groupStart: !1,
                                    segment: t.index,
                                    active: t.index === o,
                                    closed: t.index !== o,
                                    ...(null != t.durationMs ? { segmentDurationMs: t.durationMs } : {}),
                                    reportsDuration: t.index === u,
                                    hostsChecklist: t.hasTodos,
                                    turnActive: eC(l),
                                    checklistSuperseded: t.hasTodos && n.has(l.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let f = nj.test(l.content ?? "");
                    if (
                        (!0 === l.interrupted || c || f
                            ? a(
                                  {
                                      kind: "interrupted",
                                      key: `${l.render_id}:interrupted`,
                                      message: l,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : s.every((e) => !e.hasTodos) &&
                              (l.todos?.length ?? 0) > 0 &&
                              a(
                                  {
                                      kind: "legacyTodos",
                                      key: `${l.render_id}:todos`,
                                      message: l,
                                      groupStart: !1,
                                      checklistSuperseded: n.has(l.render_id),
                                  },
                                  { actor: null, boundary: void 0 },
                              ),
                        (r.showsClosingMessage && !f) ||
                            null != l.proposal ||
                            null != l.clarification ||
                            null != l.restoreProposal ||
                            (!e &&
                                (null != l.ideas ||
                                    null != l.publishCta ||
                                    null != l.secretRequest ||
                                    null != l.settingsRequest)) ||
                            "standalone" === r.attachmentsHost)
                    ) {
                        let t = `${l.render_id}:closing`;
                        a(
                            {
                                kind: "closing",
                                key: t,
                                message: l,
                                groupStart: !1,
                                active: e,
                                attachmentsHost: r.attachmentsHost,
                                content: r.closingContent,
                                sideReply: "side_reply" === l.kind,
                            },
                            {
                                actor: "assistant",
                                boundary: t,
                                separate: null != l.proposal || null != l.clarification || "side_reply" === l.kind,
                            },
                        );
                    }
                    l.render_id === t &&
                        a(
                            { kind: "outdatedNotice", key: `${l.render_id}:outdated`, message: l, groupStart: !1 },
                            { actor: null, boundary: void 0 },
                        );
                }
                let r = (function (e) {
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
                })(l.map((e) => e.groupable));
                return l.map((e, t) => ({ ...e.row, groupStart: r[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(l, k)),
                l.every((t) => null == t.publishCta || t.id === e)
                    ? l
                    : l.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
                N,
            );
        }, [l, k, N]),
        A = l.at(-1),
        S = (function (e, t, l) {
            var n;
            let r = null != t && "plan_implemented" === (n = t).kind && (0, eS.BL)(n) ? t : null,
                i = (0, tN.Ay)(r?.publishCta != null ? e : null),
                s = r?.publishCta != null && tw(i),
                u = null == r || s || l ? null : r.id,
                [o, d] = a.useState(null);
            return (
                null != o && o !== u && d(null),
                a.useEffect(() => {
                    if (null == u) return;
                    let e = window.setTimeout(() => d(u), 15e3);
                    return () => window.clearTimeout(e);
                }, [u]),
                null != u && o === u
            );
        })(t, A, !0 === d),
        I = a.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("assistant" === l.role) {
                            if (!(0, eS.BL)(l) || "plan_implemented" === l.kind) return null;
                            if (null != l.proposal) return l.render_id;
                        }
                    }
                    return null;
                })(l),
            [l],
        ),
        T =
            (A?.role !== "assistant" || null == A.awaitingUser || null == A.secretRequest
                ? null
                : (0, eS.BL)(A)
                  ? A.awaitingUser
                  : null) ?? void 0;
    if (0 === l.length) {
        if ("loading" === r)
            return (0, n.jsx)("ol", {
                ref: s,
                className: i()(nS.x7, nS.jH),
                "aria-busy": !0,
                children: (0, n.jsx)("li", { className: nS.Ub, children: (0, n.jsx)(m.y, {}) }),
            });
        let e = "unavailable" === r ? C.default.s4oxNv : C.default.khZEUv;
        return (0, n.jsx)("ol", {
            ref: s,
            className: nS.x7,
            children: (0, n.jsx)(nE, { role: "assistant", children: (0, n.jsx)(nb, { content: E.intl.string(e) }) }),
        });
    }
    return (0, n.jsxs)("ol", {
        ref: x,
        className: nS.x7,
        children: [
            w.map((e) => {
                let a = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                        return (0, n.jsx)(
                            nE,
                            {
                                role: "user",
                                anchorId: a.id,
                                highlighted: p === a.id,
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(np, {
                                    groupStart: e.groupStart,
                                    content: a.content,
                                    createdAt: a.created_at,
                                    userId: a.user_id,
                                    accessories:
                                        null != l ? (0, n.jsx)(tu.A, { projectId: t, attachments: l }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, n.jsx)(
                            nE,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(nb, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: a.created_at,
                                    accessories:
                                        e.hostsAttachments && null != a.attachments
                                            ? (0, n.jsx)(tu.A, { projectId: t, attachments: a.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, n.jsx)(
                            nE,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(lu, {
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
                            nE,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(nb, {
                                    groupStart: e.groupStart,
                                    content: null == a.publishNotice ? a.content : "",
                                    createdAt: a.created_at,
                                    accessories:
                                        null == a.publishNotice
                                            ? void 0
                                            : (0, n.jsx)(ny, { projectId: t, notice: a.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "outdatedNotice":
                        return (0, n.jsx)(
                            nE,
                            {
                                role: "assistant",
                                continuation: !0,
                                children: (0, n.jsx)(nb, {
                                    groupStart: !1,
                                    content: "",
                                    accessories: (0, n.jsx)(ny, { projectId: t, notice: "outdated" }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, n.jsx)(
                            nE,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(lu, { projectId: t, interrupted: !0, steps: a.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, n.jsx)(
                            nE,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(lu, {
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
                        let r =
                                null != h
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
                            i =
                                null != r && null != h
                                    ? () => {
                                          tR(() => h(r));
                                      }
                                    : void 0,
                            s = a.restoreProposal;
                        return (0, n.jsx)(
                            nE,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != i
                                        ? (e) => {
                                              (0, lz.jA)(e, (e) => (0, n.jsx)(nA, { ...e, onRestoreVersion: i }));
                                          }
                                        : void 0,
                                children: (0, n.jsx)(nb, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != i
                                            ? (0, n.jsx)(ns, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, n.jsx)(nA, { onClose: e, onSelect: e, onRestoreVersion: i }),
                                              })
                                            : void 0,
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
                                    })(l, a.in_reply_to),
                                    onJumpToReplied: null != a.in_reply_to ? () => y(a.in_reply_to) : void 0,
                                    accessories: (0, n.jsx)(lo, {
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
                                                  })(l, a, a.ideas),
                                        attachments: a.attachments,
                                        secretRequest: e.active ? void 0 : a.secretRequest,
                                        secretRequestAwaiting: a === A ? T : void 0,
                                        settingsRequest: e.active || a.id === f ? void 0 : a.settingsRequest,
                                        publishCta: e.active ? null : a.publishCta,
                                        onPickIdea: u,
                                        onApprovePlan: a.render_id === I ? c : void 0,
                                        restoreProposal: s,
                                        onRestoreProposal:
                                            null != s && null != h && a === A
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
                                                          void tR(() => h(e))
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
            null != T
                ? (0, n.jsx)(nE, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, n.jsx)(nb, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default["1LEnd8"]),
                          }),
                      }),
                  })
                : null,
            S
                ? (0, n.jsx)(nE, {
                      role: "assistant",
                      children: (0, n.jsx)(nb, {
                          content: E.intl.string(C.default.tG5PBo),
                          accessories: (0, n.jsx)(ts, { onAsk: o }),
                      }),
                  })
                : null,
        ],
    });
}
function nE(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1, onContextMenu: u } = e;
    return (0, n.jsx)("li", {
        onContextMenu: u,
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(nS.xk, { [nS.Qo]: r, [nS.q3]: s }),
        children: l,
    });
}
let nI = [C.default.krnkPq, C.default["8oUm/J"], C.default["6Ea4dF"], C.default.fQx5qC, C.default["phXeK/"]];
function nT(e) {
    return nI.some((t) => E.intl.string(t) === e);
}
function nM(e) {
    switch (e) {
        case "connecting":
            return E.intl.string(C.default.W7oyuf);
        case "closed":
            return E.intl.string(C.default["yBmS+I"]);
        case "failed":
            return E.intl.string(C.default.eE60xI);
    }
}
var n_ = l(559676),
    nP = l(823376),
    nR = l(495557);
function nL(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = l9(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        u = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: nR.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: u,
                className: nR.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(li.PT, nR.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: e4.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nD = l(921461);
function nF(e) {
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
                ? C.default.ivvYHP
                : n
                  ? C.default.aFffp2
                  : a
                    ? nI[0]
                    : l
                      ? C.default["0vH/5G"]
                      : i
                        ? C.default.Ly7F7x
                        : C.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, recalling: s, controlling: u }),
        x = E.intl.string(g),
        p = g === nI["0"],
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
        ((N.current = p), !p && nT(k.current) && b(j.current));
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (N.current) {
                    var e;
                    ((w.current = nT(k.current) ? w.current + 1 : 0),
                        b(((e = w.current), E.intl.string(nI[e % nI.length]))));
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
        T = a.useCallback(() => {
            A && null != S && h((e) => (e === S ? null : S));
        }, [A, S]),
        M = a.useCallback(() => h(null), []);
    return (0, n.jsx)(lh.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: M,
        renderPopout: () => (0, n.jsx)(nL, { id: f, activity: t }),
        children: () =>
            (0, n.jsxs)(e9.D, {
                innerRef: c,
                className: i()(nD.hF, A && nD.Xd),
                "aria-label": E.intl.string(r ? C.default.pGFXZ0 : p ? nI["0"] : C.default.SzdX35),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": E.intl.string(g),
                onClick: T,
                children: [
                    (0, n.jsx)("span", {
                        className: nD.bl,
                        children: (0, n.jsx)(nP.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: nD.xu,
                        "aria-hidden": !!u || !!p || void 0,
                        children: (0, n.jsx)(ld.o, {
                            ref: y,
                            text: v,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nD.yE,
                        }),
                    }),
                ],
            }),
    });
}
let nO = { second: 1e3, minute: 6e4 };
function n$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let l;
            if (null == e) return;
            let a = nO[t];
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
var nz = l(979148);
function nq(e) {
    let { startedAt: t } = e,
        l = n$(t);
    return (0, n.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: nz.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, e3.C7)(l),
    });
}
function nU(e) {
    let { startedAt: t } = e,
        l = n$(t, "minute");
    return (0, n.jsx)(t6.A, { role: "timer", children: (0, e3.Us)(l) });
}
var nG = l(280894);
function nB(e) {
    return e.toLocaleString();
}
function nV(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: nG.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: nG.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nB((0, eq.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nB(l.input_tokens),
                    " in \xb7 ",
                    nB(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${nB(l.cache_creation_input_tokens)} cache write \xb7 ${nB(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function nH(e) {
    let { project: t } = e,
        l = (0, eq.wU)(t.compaction),
        a = (0, eq.wU)(t.classifier),
        r = (0, eq.wV)(t.orchestrator, t.codegen),
        i = (0, eq.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: nG.si,
        role: "dialog",
        "aria-label": E.intl.string(C.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: nG.Q$,
                children: (0, n.jsxs)("div", {
                    className: nG.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nB((0, eq.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(nV, { label: E.intl.string(C.default.R9aduM), usage: r }),
            (0, n.jsx)(nV, { label: E.intl.string(C.default.Tj6b30), usage: l }),
            (0, n.jsx)(nV, { label: E.intl.string(C.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: nG.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(C.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eq.sj)(i) ? "\u2014" : `${Math.round(100 * (0, eq.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nW(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(lh.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(nH, { project: t }),
        children: (e) =>
            (0, n.jsx)(e9.D, {
                innerRef: l,
                className: nG.Y$,
                "aria-label": E.intl.string(C.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(td.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nK = l(258216);
function nY(e) {
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
        m = (0, n_.o4)(l),
        [h, g] = a.useState(null),
        x = a.useCallback((e) => g(nT(e) ? null : e), []),
        p =
            null == c
                ? null
                : ((t = (0, eq.a7)(c.cost_usd)),
                  {
                      text: E.intl.formatToPlainString(C.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: E.intl.formatToPlainString(C.default["7SZZvj"], { runes: t, turns: c.turns }),
                  }),
        b = r && null != i;
    return (0, n.jsxs)("div", {
        className: nK.jf,
        children: [
            (0, n.jsxs)("div", {
                className: nK.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    r || s || u || m
                        ? (0, n.jsx)(nF, {
                              activity: o,
                              compacting: d,
                              restoring: s,
                              recalling: u,
                              controlling: m,
                              spoken: h,
                              onSpokenChange: x,
                          })
                        : null,
                    b ? (0, n.jsx)(nq, { startedAt: i }) : null,
                ],
            }),
            b ? (0, n.jsx)(nU, { startedAt: i }) : null,
            null == c || null == p
                ? null
                : (0, n.jsxs)("span", {
                      className: nK.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": p.aria,
                              children: p.text,
                          }),
                          (0, n.jsx)(nW, { project: c }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(C.default.eDDdhB, { status: nM(f) }),
                      "data-vibegrations-conn": !0,
                      "data-state": f,
                      className: nK.XF,
                      children: nM(f),
                  }),
        ],
    });
}
var nQ = l(621466),
    nX = l(658675),
    nZ = l(22231),
    nJ = l(408278),
    n0 = l(900797),
    n1 = l(123292);
function n2(e, t, l) {
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
var n5 = l(856795),
    n7 = l(424110);
function n4(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: u = !0, selected: o } = e,
        d = a.useId(),
        c = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(e9.D, {
        className: i()(n7.uK, { [n7.ue]: r, [n7.h4]: !0 === o }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": E.intl.formatToPlainString(c ? C.default.aL1BKQ : C.default.k7lEgj, { answer: t.label }),
        "aria-describedby": f ? d : void 0,
        "aria-disabled": r,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: u ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, n.jsx)("span", { className: n7.dy, children: (0, n.jsx)(nX.P, { checked: o, disabled: r }) })
                : (0, n.jsx)("span", { className: n7.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: n7.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: n7.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: n7.ed,
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
                      className: n7.rM,
                      children: E.intl.string(C.default.OXRWyV),
                  })
                : null,
        ],
    });
}
let n3 = [];
function n6(e) {
    let { question: t, draft: l, selected: a, direction: r, disabled: s } = e,
        u = "" === l.trim() ? null : l,
        o = !0 === t.multi_select;
    return (0, n.jsxs)("div", {
        className: i()(n7.Ge, n7.x1),
        "data-direction": r,
        "aria-hidden": !0,
        children: [
            o
                ? (0, n.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: n7.aK,
                      children: E.intl.string(C.default.jt5JBA),
                  })
                : null,
            t.options.map((e, t) =>
                (0, n.jsx)(
                    n4,
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
                className: n7.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: n7.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(nZ.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == u ? null : (0, n.jsx)("span", { className: i()(n7.Pu, n7.es), children: u }),
                ],
            }),
        ],
    });
}
function n8(e) {
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
        T = a.useRef(null),
        M = a.useRef(0),
        _ = null == l,
        P = t.questions.length,
        R = Math.min(h, P - 1),
        L = t.questions[R],
        [D, F] = a.useState({ id: L.id, expanded: !1 }),
        O = D.id === L.id && D.expanded,
        [$, z] = a.useState(null),
        q = d[L.id] ?? "",
        U = !0 === L.multi_select,
        G = f[L.id] ?? n3,
        { text: B, phase: V } = (0, n5.Q)(L.question),
        H = B === L.question,
        W = H && $?.id === L.id && $.truncated;
    a.useLayoutEffect(() => {
        if (null == S || O || !H) return;
        function e() {
            if (null == S) return;
            let e = S.scrollHeight > S.clientHeight + 1;
            z((t) => (t?.id === L.id && t.truncated === e ? t : { id: L.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(S), () => t.disconnect());
    }, [H, S, L.id, O]);
    let K = E.intl.string(O ? E.t.iTcuma : E.t.dcl9MQ),
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
        X = a.useCallback(
            (e, t) => {
                M.current += 1;
                let l = M.current;
                (p({ direction: t, moves: l }),
                    j({ question: L, draft: q, selected: G, direction: t, moves: l }),
                    w(!0),
                    g(e));
            },
            [q, L, G],
        ),
        Z = a.useCallback(() => {
            let e = A.current,
                t = T.current;
            null != e && null != t && k({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = A.current,
            t = T.current;
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
                if (_) return;
                let l = { ...s, [L.id]: e };
                o(l);
                let n = n2(t, l, R);
                null == n ? Y(l) : X(n, n < R ? "back" : "forward");
            },
            [s, t, _, R, L.id, Y, X],
        ),
        et = a.useCallback(() => {
            _ || 0 === R || X(R - 1, "back");
        }, [_, R, X]),
        el = R > 0 && !_,
        en = a.useCallback(
            (e) => {
                (c((e) => ({ ...e, [L.id]: "" })), ee({ kind: "option", optionId: e.id, text: e.label }));
            },
            [L.id, ee],
        ),
        ea = a.useMemo(() => {
            let e, t;
            return U
                ? ((e = q.trim()),
                  (t = L.options.filter((e) => G.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: G,
                      ...("" === e ? {} : { custom: e }),
                      text: [...t, ...("" === e ? [] : [e])].join(", "),
                  })
                : null;
        }, [q, U, L, G]),
        er = a.useCallback(() => {
            if (null != ea) {
                "" !== ea.text && ee(ea);
                return;
            }
            let e = q.trim();
            "" !== e && ee({ kind: "custom", text: e });
        }, [q, ea, ee]),
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
                    : "" !== q.trim()
                      ? { kind: "custom", text: q.trim() }
                      : (s[L.id] ?? null),
            [s, q, ea, L.id],
        ),
        ef = null != ec && !_,
        em = null == n2(t, null != ec ? { ...s, [L.id]: ec } : s, R),
        eh = a.useCallback(() => {
            null == ec || _ || ee(ec);
        }, [_, ec, ee]),
        eg = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (!((0, nQ.vq)(e.target, HTMLTextAreaElement) || (0, nQ.vq)(e.target, HTMLInputElement)) &&
                        ("ArrowLeft" === e.key && el
                            ? (e.preventDefault(), et())
                            : "ArrowRight" === e.key && ef && (e.preventDefault(), eh())));
            },
            [el, ef, et, eh],
        );
    return (0, n.jsxs)("section", {
        className: i()(n7.$O, { [n7.fI]: ei && !eu, [n7.Oh]: eu }),
        role: "dialog",
        "aria-label": L.question,
        "data-vibegrations-clarification": t.id,
        "data-state": _ ? "inert" : "open",
        "data-question-expanded": O ? "true" : void 0,
        "data-step": R,
        tabIndex: -1,
        onKeyDown: eg,
        children: [
            (0, n.jsxs)("div", {
                className: n7.rf,
                style: null == y ? void 0 : { height: y.heading + y.rows },
                "data-moving": N ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: A,
                        className: n7.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: I,
                                tag: "span",
                                id: `${L.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: O ? void 0 : 5,
                                className: i()(tB.TK, n7.R_, { [n7.TB]: "exit" === V, [n7.JU]: "enter" === V }),
                                children: B,
                            }),
                            W || O
                                ? (0, n.jsx)("div", {
                                      className: tB.Q7,
                                      children: (0, n.jsx)(to.m, {
                                          text: K,
                                          children: (0, n.jsx)(nJ.K, {
                                              icon: O ? n0.t : t4.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => F({ id: L.id, expanded: !O }),
                                              "aria-label": K,
                                              "aria-controls": `${L.id}-label`,
                                              "aria-expanded": O,
                                          }),
                                      }),
                                  })
                                : null,
                            null == r
                                ? null
                                : (0, n.jsx)(e9.D, {
                                      className: i()(tB.gb, tB.Q7),
                                      onClick: ed,
                                      "aria-label": E.intl.string(C.default.fMdUNR),
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
                        className: n7.Cg,
                        style: null == y ? void 0 : { insetBlockStart: y.heading },
                        children: (0, n.jsxs)("div", {
                            className: n7.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: T,
                                    className: n7.Ge,
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
                                                  className: n7.aK,
                                                  children: E.intl.string(C.default.jt5JBA),
                                              })
                                            : null,
                                        L.options.map((e, t) =>
                                            (0, n.jsx)(
                                                n4,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: _,
                                                    selected: U ? G.includes(e.id) : void 0,
                                                    onPick: (e) =>
                                                        U
                                                            ? m((t) => {
                                                                  var l, n;
                                                                  let a;
                                                                  return {
                                                                      ...t,
                                                                      [L.id]:
                                                                          ((l = t[L.id] ?? n3),
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
                                            className: n7.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: n7.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(nZ.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(lb.y, {
                                                    value: q,
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
                                                    placeholder: E.intl.string(C.default.qifsdL),
                                                    "aria-label": E.intl.formatToPlainString(C.default.XHESTL, {
                                                        question: L.question,
                                                    }),
                                                    disabled: _,
                                                    rows: 1,
                                                    className: n7.Pu,
                                                    "data-vibegrations-clarification-other": L.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == b
                                    ? null
                                    : (0, n.jsx)(
                                          n6,
                                          {
                                              question: b.question,
                                              draft: b.draft,
                                              selected: b.selected,
                                              direction: b.direction,
                                              disabled: _,
                                          },
                                          b.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            P > 1 || U
                ? (0, n.jsxs)("div", {
                      className: tB.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children:
                                  P > 1
                                      ? E.intl.formatToPlainString(C.default["7bypa+"], { index: R + 1, total: P })
                                      : null,
                          }),
                          (0, n.jsxs)("div", {
                              className: tB.zt,
                              children: [
                                  el
                                      ? (0, n.jsx)(n1.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: E.intl.string(C.default.yKdgqw),
                                            onClick: et,
                                            "data-vibegrations-clarification-back": !0,
                                        })
                                      : null,
                                  (0, n.jsx)(Q.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(em ? E.t.geKm7t : C.default.S7Sa6j),
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
var n9 = l(643278),
    ae = l(191521),
    at = l(405189);
function al(e) {
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
    let T = null != r && r.length > 0,
        M = a.useCallback(() => b((e) => !e), []);
    return h
        ? (0, n.jsxs)("div", {
              className: at.qd,
              "data-placement": f,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(at.vK, { [at.ho]: x && c, [at.ET]: !c }),
                      children: [
                          null == d
                              ? (0, n.jsx)("ol", {
                                    className: i()(at.Rk, t5.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(tW.A, {
                                        glyph: (0, n.jsx)(ae.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(e9.D, {
                                    className: at.pZ,
                                    onClick: d,
                                    "aria-label": E.intl.string(C.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(at.Rk, t5.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(tW.A, {
                                            glyph: (0, n.jsx)(ae.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, n.jsx)(to.m, {
                                    text: E.intl.string(C.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(e9.D, {
                                        className: at.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(C.default.qCRC6c),
                                        children: (0, n.jsx)(n9.ClipboardListIcon, {
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
                  k && T
                      ? (0, n.jsx)("div", {
                            className: i()(at.vB, { [at.pg]: v && w, [at.ui]: !v }),
                            children: (0, n.jsx)(ln, {
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
var an = l(106430),
    aa = l(522250),
    ar = l(670455),
    ai = l(698638),
    as = l(348800);
let au = [E.intl.string(C.default["E+Q26x"]), E.intl.string(C.default["06/jqP"]), E.intl.string(C.default["3gSfUa"])];
function ao(e) {
    var t;
    let { projectId: r, restoreState: i, onRestoreVersion: s } = e,
        u = (0, F.bG)([eS.Ay], () => eS.Ay.getMessages(r), [r]),
        o = (0, F.bG)([f.Ay], () => f.Ay.getConnState(r), [r]),
        d = (0, F.bG)([f.Ay], () => f.Ay.isChatStopped(r), [r]),
        c = (0, F.bG)([eS.Ay], () => eS.Ay.getProjectUsage(r), [r]),
        m = (0, F.bG)([eS.Ay], () => eS.Ay.getThinkingActivity(r), [r]),
        h = (0, F.bG)([eS.Ay], () => eS.Ay.isCompacting(r), [r]),
        g = (0, F.bG)([f.Ay], () => f.Ay.getModelSettings(r), [r]),
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
        (0, e2.v6)(r),
        a.useEffect(
            () => () =>
                (function (e) {
                    if ((0, aa.jb)(e)) return;
                    let t = (0, aa.hl)(e);
                    t < aa.qu ||
                        (0, aa.Xi)(e) ||
                        an.A.possiblyShowFeedbackModal(ar.MW.VIBEGRATIONS, () => {
                            ((0, aa.AH)(e),
                                (0, tz.openModalLazy)(async () => {
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
    let A = (0, e1.Q_)(r),
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
                      (0, e1.PS)(r));
            },
            [A, S, r],
        ),
        T = a.useCallback(() => (0, f.fu)(r), [r]),
        M = a.useCallback((e) => e0(r, e.implementation_prompt), [r]),
        [_, P] = (function (e) {
            let [t, l] = a.useState(() => e$(e)),
                [n, r] = a.useState(e),
                i = n !== e,
                s = i ? e$(e) : t;
            return (i && (r(e), l(s)), [s, l]);
        })(r),
        R = a.useCallback(() => S(E.intl.string(C.default["3sTTBu"])), [S]),
        L = a.useCallback((e, t) => e0(r, e, { clarificationAnswers: t }), [r]),
        D = a.useCallback((e) => (0, f.XZ)(r, e), [r]),
        O = a.useCallback((e) => (0, f.vX)(r, e), [r]),
        $ = a.useCallback((e) => lI(r, "chat", Array.from(e), O), [r, O]),
        z = a.useCallback(() => e0(r, E.intl.string(C.default.Jj8Ftb)), [r]),
        q = i?.status === "restoring",
        U = "open" === o && !d && !q,
        G = u[u.length - 1],
        B = null != G && "assistant" === G.role && null != G.proposal,
        [V, H] = a.useState(null),
        W = G?.clarification != null && G.clarification.id !== V ? G.clarification : null,
        K = a.useCallback(() => {
            null != W && H(W.id);
        }, [W]),
        Y = (0, F.bG)([f.Ay], () => f.Ay.getSettings(r), [r]),
        [X, Z] = a.useState(null),
        J =
            null != G &&
            "assistant" === G.role &&
            null != G.settingsRequest &&
            (0, eS.BL)(G) &&
            G.id !== X &&
            ((t = G.settingsRequest),
            null != Y &&
                (t.keys ?? []).some((e) => {
                    let t = Y.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return Y.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = Y.values[e];
                    return null == l || "" === l;
                }))
                ? G
                : null,
        ee = J?.settingsRequest ?? null,
        et = a.useCallback(() => {
            null != J && Z(J.id);
        }, [J]),
        el = null != ee,
        en = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, F.bG)([eS.Ay], () => eS.Ay.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, F.bG)([eS.Ay], () => eS.Ay.isHistoryUnavailable(r), [r]),
            connState: o,
        }),
        ea = "loading" === en && 0 === u.length,
        er = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return au[e % au.length];
        }, [r]),
        ei = B ? E.intl.string(C.default.Jj8Ftb) : "greeting" === en && 0 === u.length ? er : null,
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
                          let e = eE.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(es)
                : void 0,
        ed = B && U ? z : void 0,
        ec = a.useCallback(() => e0(r, E.intl.string(C.default.ga8too)), [r]),
        [ef, em] = a.useState(null),
        [eh, eg] = a.useState(eu);
    (eh !== eu && (eg(eu), eu || em(null)),
        a.useEffect(() => {
            if (!eu) return;
            let e = p.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? em(null)
                        : em(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eu, es?.steps]));
    let ex = a.useMemo(() => (null != es ? (0, e5.b)(es.steps) : ""), [es]),
        ep = a.useMemo(() => (null != es ? ((0, eA.lt)(es.steps) ?? es.todos) : void 0), [es]),
        ev = es?.provisionalTodo,
        eb = null != es && eC(es),
        ej = a.useMemo(() => {
            var e;
            return null != es ? ((e = es.steps), ls((0, eA.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, n.jsxs)("section", {
        ref: x,
        "data-vibegrations-chat": !0,
        className: as.TE,
        children: [
            U
                ? (0, n.jsx)(eN.A, {
                      title: E.intl.string(C.default.UazRD1),
                      description: E.intl.string(C.default["O4r42+"]),
                      icons: ai.ir,
                      onDrop: $,
                  })
                : null,
            (0, n.jsx)(al, {
                onJumpToActivity: N,
                line: ex,
                placement: eu && "top" === ef ? "top" : null,
                todos: ep,
                todosLive: eb,
                provisionalTodo: ev,
                agents: ej,
            }),
            (0, n.jsxs)("div", {
                className: as.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: p,
                        onScroll: w,
                        scrollbarGutter: ea ? "both-edges" : "stable",
                        className: [as.N$, y ? null : as.hB, el ? as.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(nC, {
                            ref: b,
                            projectId: r,
                            messages: u,
                            emptyState: en,
                            floatingSettingsMessageId: J?.id,
                            onPickIdea: U ? M : void 0,
                            onAskForIdeas: U ? R : void 0,
                            draftHasText: _,
                            onApprovePlan: U ? ec : void 0,
                            onRestoreVersion: q || eu ? void 0 : s,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: as.NJ,
                        children: (0, n.jsx)(nY, {
                            projectId: r,
                            thinking: eu,
                            turnStartedAt: eo,
                            restoring: q,
                            recalling: ea,
                            thinkingActivity: m,
                            compacting: h,
                            projectUsage: c,
                            connState: o,
                        }),
                    }),
                    null == W
                        ? null
                        : (0, n.jsx)("div", {
                              className: el ? `${as.B5} ${as.J9}` : as.B5,
                              children: (0, n.jsx)(
                                  n8,
                                  { clarification: W, onSubmit: U ? L : void 0, onDismiss: K },
                                  W.id,
                              ),
                          }),
                    null == ee
                        ? null
                        : (0, n.jsx)("div", {
                              className: as.B5,
                              children: (0, n.jsx)(tH, { projectId: r, request: ee, onDismiss: et }, J?.id),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: as.Jx,
                children: [
                    (0, n.jsx)(al, {
                        onJumpToActivity: N,
                        line: ex,
                        placement: eu && "bottom" === ef ? "bottom" : null,
                        todos: ep,
                        todosLive: eb,
                        provisionalTodo: ev,
                        agents: ej,
                    }),
                    0 === A.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: as.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(C.default.Lkx0Kk, {
                                          count: A.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(C.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(Q.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(C.default.B0YARo),
                                      onClick: () => (0, e1.PS)(r),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(lD, {
                        projectId: r,
                        canSend: U,
                        stopped: d,
                        running: eu,
                        restoring: q,
                        onSend: I,
                        hasPendingContext: A.annotations.length > 0,
                        onInterrupt: U ? T : void 0,
                        onUploadFile: O,
                        onApprove: ed,
                        suggestion: ei,
                        questionOpen: null != W || null != ee,
                        modelSettings: g,
                        onModelSettingsChange: D,
                        onDraftHasTextChange: P,
                    }),
                ],
            }),
        ],
    });
}
var ad = l(661531),
    ac = l(602853),
    af = l(517461),
    am = l(761929),
    ah = l(927506);
function ag(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, ac.r)(ad.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = a.useRef(null),
        [o, d] = (0, af.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = a.useState(o ?? 460),
        m = (0, eI.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? m + s : 0);
    }, [m, t, s, r]);
    let h = (0, am.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: am.R.HORIZONTAL_LEFT,
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
        className: ah.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: ah.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: u, className: ah.kL, style: { width: m }, children: i }),
        ],
    });
}
var ax = l(376357),
    ap = l(857250),
    av = l(97483),
    ab = l(624479),
    aj = l(92446),
    ay = l(761508),
    ak = l(540999),
    aN = l(957565);
let aw = [],
    aA = new Map(),
    aS = new Map(),
    aC = new Map(),
    aE = new Map(),
    aI = new Map(),
    aT = new Map(),
    aM = new Map();
class a_ extends F.Ay.Store {
    getStatus(e) {
        return aA.get(e) ?? null;
    }
    getFetchState(e) {
        return aS.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return aE.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return aT.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return aI.get(e) ?? null;
    }
    getModelCalls(e) {
        return aM.get(e) ?? aw;
    }
    getForceCompactionState(e) {
        return aC.get(e) ?? "idle";
    }
}
let aP = new a_(e_.h, {
    LOGOUT: function () {
        if (
            0 === aA.size &&
            0 === aS.size &&
            0 === aC.size &&
            0 === aE.size &&
            0 === aI.size &&
            0 === aT.size &&
            0 === aM.size
        )
            return !1;
        (aA.clear(), aS.clear(), aC.clear(), aE.clear(), aI.clear(), aT.clear(), aM.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        aS.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === aC.get(t);
        n &&
            aC.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === aS.get(t);
        if ((a && aS.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? aS.set(t, "failed") : (aA.set(t, l), aS.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        aE.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        aI.set(e.projectId, {
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
        aC.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        aC.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = aM.get(e.projectId);
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
        aM.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, eq.aM)(l.total)) return !1;
        aT.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (aA.delete(t), aS.delete(t), aC.delete(t), aE.delete(t), aI.delete(t), aT.delete(t), aM.delete(t));
    },
});
function aR(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function aL(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function aD(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function aF(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function aO(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function a$(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function az(e) {
    return E.intl.string("preview" === e ? C.default["+m8XM6"] : C.default.kiOVnt);
}
let aq = ["all", "preview", "stable", "web"],
    aU = new Set(["error", "aborted", "length"]);
function aG(e) {
    switch (e.reason) {
        case "local":
            return E.intl.string(C.default.M7Vn6y);
        case "unconfigured":
            return E.intl.string(C.default.QirpMl);
        case "unauthorized":
            return E.intl.string(C.default.QZ1e4l);
        default:
            return null != e.detail
                ? E.intl.formatToPlainString(C.default.zUTHf7, { detail: e.detail })
                : E.intl.string(C.default.WIAQes);
    }
}
function aB(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(C.default.SBkDIZ, {
              p50: aR(e.memory_p50_bytes ?? 0),
              p999: aR(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let aV = {
    db: () => C.default.r6cciE,
    db_preview: () => C.default.JmIyL8,
    runtime: () => C.default.bzNyv8,
    runtime_preview: () => C.default["LONZ/8"],
    bot: () => C.default.jdpw3A,
    bot_preview: () => C.default["/g6wUz"],
};
var aH = l(69985);
function aW(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aH.KE,
        children: [
            (0, n.jsx)("div", {
                className: aH.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: E.intl.string(C.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.formatToPlainString(C.default["4NpaEk"], { time: aO(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(Q.$, { variant: "secondary", size: "sm", text: E.intl.string(C.default.aw0IJm), onClick: a }),
        ],
    });
}
function aK(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: aH.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: aH.Gf, children: t }),
            l,
        ],
    });
}
function aY(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: aH.N8,
        children: [
            (0, n.jsxs)("div", {
                className: aH.x7,
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
function aQ(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: aH.N8,
        children: [
            (0, n.jsxs)("div", {
                className: aH.x7,
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
                className: aH.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? aH.aV : aH.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function aX(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(aY, {
            label: E.intl.string(C.default.H6PMwW),
            value: E.intl.string(C.default.TLOZ8J),
            hint: aG(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(aY, {
            label: E.intl.string(C.default.H6PMwW),
            value: "\u2014",
            hint: E.intl.string(C.default.uAzxdh),
        });
    let a = aB(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aY, { label: E.intl.string(C.default.awAqRi), value: aL(l.cpu_ms) }),
            null != a && (0, n.jsx)(aY, { label: E.intl.string(C.default.WdGviA), value: a }),
        ],
    });
}
function aZ(e) {
    let { analytics: t } = e,
        l = E.intl.string(C.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(aK, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: aG(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? aV[t] : null) ? E.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(aK, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: E.intl.string(C.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          aY,
                          {
                              label: l,
                              value: E.intl.formatToPlainString(C.default.AnRynJ, { cpu: aL(t.cpu_ms) }),
                              hint: aB(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var aJ = l(522652);
let a0 = [];
function a1(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && aU.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? aL(l.durationMs) : null,
                    `${aD(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${aD(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: aJ.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aJ.Q5,
                children: aF(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: aJ.qN,
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
function a2(e, t) {
    return (0, n.jsx)(aY, {
        label: e,
        value: E.intl.formatToPlainString(C.default.U98VaN, { count: aD((0, eq.aM)(t)) }),
        hint: `${aD(t.input_tokens)} in \xb7 ${aD(t.output_tokens)} out \xb7 ${aD(t.cache_read_input_tokens)} cache read`,
    });
}
function a5(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        u = (0, F.bG)([aP], () => aP.getLastTurnUsage(t), [t]),
        o = (0, F.bG)([aP], () => aP.getLastCompaction(t), [t]),
        d = (0, F.bG)([aP], () => aP.getLastCompactionDecline(t), [t]),
        c = (0, F.bG)([aP], () => aP.getForceCompactionState(t), [t]),
        m = a.useCallback(() => (0, f.Lj)(t), [t]),
        h = a.useCallback(() => (0, f.Lj)(t, !0), [t]),
        g = (0, F.bG)([aP], () => (s ? a0 : aP.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = o?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: aJ.Mf,
        children: [
            (0, n.jsx)(aW, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(aK, {
                title: E.intl.string(C.default.IYpHtT),
                children:
                    null == x
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(aY, {
                                      label: E.intl.string(C.default["8MSJDH"]),
                                      value: aD((0, eq.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(C.default["6Z2KhK"], { count: aD(x.turns) }),
                                  }),
                                  a2(E.intl.string(C.default.hk4jJr), x.orchestrator),
                                  a2(E.intl.string(C.default.R9aduM), x.codegen),
                                  a2(E.intl.string(C.default.Tj6b30), (0, eq.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(aY, {
                                          label: E.intl.string(C.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${aD(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(aK, {
                title: E.intl.string(C.default.lo4mY6),
                children:
                    null == u
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  a2(E.intl.string(C.default["VwF+oY"]), u.total),
                                  (0, n.jsx)(aY, {
                                      label: E.intl.string(C.default["kILb+R"]),
                                      value: `${Math.round((u.cache_hit_rate ?? (0, eq.CA)(u.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(aK, {
                title: E.intl.string(C.default.mn8279),
                children: [
                    null != o && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(aQ, {
                                      label: E.intl.string(C.default.dKFhCg),
                                      used: o.tokensAfter,
                                      max: j,
                                      formatValue: aD,
                                  }),
                                  (0, n.jsx)(aY, {
                                      label: E.intl.string(C.default.ntZb8d),
                                      value: `${aD(o.tokensBefore)} \u{2192} ${aD(o.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(C.default.jA05ru, {
                                          count: aD(o.retainedMessages),
                                          time: aO(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? E.intl.formatToPlainString(C.default.LKGmsP, { ceiling: aD(j) })
                                      : E.intl.string(C.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(aY, {
                            label: E.intl.string(C.default["se+2ls"]),
                            value: `${aD(d.projected)} / ${aD(d.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(C.default.KHK44U, { time: aO(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: aJ.Lj,
                        children: [
                            (0, n.jsx)(Q.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(C.default.B0KV7p),
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
                                    if ("idle" === e) return E.intl.string(C.default.wBng42);
                                    if ("pending" === e) return E.intl.string(C.default["0tgo31"]);
                                    let t = aO(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return E.intl.formatToPlainString(C.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? C.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? C.default.GV4sdd
                                              : C.default["Y+0nUb"];
                                    return E.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(Q.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: E.intl.string(C.default["044+ju"]),
                                            onClick: h,
                                        }),
                                        (0, n.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: E.intl.string(C.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(aK, {
                    title: E.intl.string(C.default.F5eP7e),
                    children:
                        0 === g.length
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(C.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(a1, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, n.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: E.intl.formatToPlainString(C.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || l?.analytics != null) &&
                (0, n.jsxs)(aK, {
                    title: E.intl.string(C.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(aY, {
                                        label: E.intl.string(C.default["wt5X/o"]),
                                        value: aO(b.instance_since),
                                        hint: E.intl.string(C.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(aY, { label: E.intl.string(C.default["4lgurx"]), value: aD(b.sockets) }),
                                    (0, n.jsx)(aY, {
                                        label: E.intl.string(C.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(C.default["9KlveJ"])
                                            : E.intl.string(C.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(aY, {
                                            label: E.intl.string(C.default["/hOBkc"]),
                                            value: aD(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(aX, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(aK, {
                    title: E.intl.string(C.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(aY, {
                            label: E.intl.string(C.default.Rb6m3E),
                            value: aD(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(aY, {
                            label: E.intl.string(C.default.WQ9pMe),
                            value: E.intl.formatToPlainString(C.default.U98VaN, { count: aD(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(aY, {
                            label: E.intl.string(C.default.iEAvzu),
                            value: E.intl.formatToPlainString(C.default.U98VaN, {
                                count: aD(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(aY, {
                            label: E.intl.string(C.default["jbhs+f"]),
                            value: aD(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(aY, { label: E.intl.string(C.default.TOQnq4), value: aD(p.max_build_attempts) }),
                        (0, n.jsx)(aY, { label: E.intl.string(C.default.RIDc6D), value: aD(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var a7 = l(629584),
    a4 = l(683438),
    a3 = l(849363);
function a6(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: a3.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(C.default.TV42NS),
              }),
          });
}
function a8(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: a3.qf,
              children: [
                  (0, n.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: E.intl.string(C.default.TV42NS),
                  }),
                  (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(C.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: a3.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function a9(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: a3.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(C.default["U/qDX9"]),
              }),
          })
        : null;
}
var re = l(417397);
let rt = a.memo(function (e) {
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
        className: re.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: re.Mt,
                selectable: !0,
                children: aF(l.ts),
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
                className: re.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: re.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: re.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: re.Cq,
                            title: l.build ?? void 0,
                            children: E.intl.string(C.default.GO6JcR),
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
                                  (0, n.jsxs)(e9.D, {
                                      className: re.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": u,
                                      "aria-label": E.intl.string(C.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(t4.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(t3._, {
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
                                                  E.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker ? C.default.lXkB6Z : C.default.wkbYxG,
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
                                          className: re.dF,
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
function rl(e) {
    let { projectId: t } = e,
        l = (0, F.bG)([lq.Ay], () => lq.Ay.getLogs(t), [t]),
        r = (0, F.bG)([lq.Ay], () => lq.Ay.getHistoryState(t, "logs")),
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
                aq.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return az(e);
                            case "web":
                                return E.intl.string(C.default.J2TPCe);
                            default:
                                return E.intl.string(C.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: re.$F,
        children: [
            (0, n.jsxs)("div", {
                className: re.y4,
                children: [
                    (0, n.jsx)(a7.I, {
                        look: "pill",
                        "aria-label": E.intl.string(C.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: re.KT,
                        children: (0, n.jsx)(a4.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: E.intl.string(C.default["MX4vr/"]),
                            "aria-label": E.intl.string(C.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(a6, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: m,
                overflow: "auto",
                className: re.sx,
                children: [
                    (0, n.jsx)(a9, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(a8, {
                              state: r,
                              emptyTitle: E.intl.string(C.default.mcFyYc),
                              emptyBody: E.intl.string(C.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(C.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(rt, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function rn(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(aK, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(C.default.W4hcKL),
                      }),
        })
    );
}
function ra(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(aY, {
                      label: E.intl.formatToPlainString(C.default.f8ix3w, { env: az(l) }),
                      value: ((t = a.connected), E.intl.string(t ? C.default["9KlveJ"] : C.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(aY, {
                      label: E.intl.string(C.default["0AB7l3"]),
                      value: aD(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${aO(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(aY, { label: E.intl.string(C.default.ElaQ0A), value: aD(a.guild_count) }),
                  (0, n.jsx)(aY, {
                      label: E.intl.string(C.default.SJtBTN),
                      value: aD(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? E.intl.formatToPlainString(C.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: aO(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(aY, {
                          label: E.intl.string(C.default.N4l504),
                          value: aD(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(aY, { label: az(l), value: E.intl.string(C.default.C6xjtD) });
}
function rr(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(aY, {
        label: az(t),
        value: E.intl.formatToPlainString(C.default.Yur5Zm, { requests: aD(l.requests), failures: aD(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? E.intl.formatToPlainString(C.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: aO(l.last_failure.at),
                  })
                : E.intl.formatToPlainString(C.default["1PdrB1"], { time: aO(l.since) }),
    });
}
function ri(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aY, {
                label: E.intl.formatToPlainString(C.default.BVORfc, { env: az(t) }),
                value: aD(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    aY,
                    {
                        label: E.intl.formatToPlainString(C.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? E.intl.formatToPlainString(C.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? E.intl.formatToPlainString(C.default["7ecbr3"], { time: aO(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function rs(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(aY, {
        label: az(t),
        value: E.intl.formatToPlainString(C.default.voXL2a, { calls: aD(l.calls), errors: aD(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function ru(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(aK, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(C.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(aK, {
        title: t,
        children: [
            (0, n.jsx)(aY, {
                label: E.intl.string(C.default.KOnL3g),
                value: aD(l.requests),
                hint: E.intl.formatToPlainString(C.default["1PdrB1"], { time: aO(l.since) }),
            }),
            (0, n.jsx)(aY, { label: E.intl.string(C.default.CjPhyY), value: aD(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(aQ, {
                              label: E.intl.string(C.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: aL,
                          }),
                          (0, n.jsx)(aY, {
                              label: E.intl.string(C.default["+rYPHD"]),
                              value: aL(r),
                              hint: E.intl.formatToPlainString(C.default["+LxC7W"], {
                                  total: aL(l.cpu_ms_total),
                                  wall: aL(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(aY, {
                      label: E.intl.string(C.default["V/nNbs"]),
                      value: E.intl.string(C.default.YKWIxp),
                      hint: E.intl.string(C.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(aY, { label: E.intl.string(C.default.ueEMPa), value: aL(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(aY, { label: E.intl.string(C.default.vM2krr), value: aD(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(aY, {
                label: E.intl.string(C.default.g1O88C),
                value: aD(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(C.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(aY, { label: E.intl.string(C.default.JUZs7g), value: a$(l.build) }),
        ],
    });
}
function ro(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        u = i
            ? [{ key: "shared", label: E.intl.string(C.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: E.intl.string(C.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: E.intl.string(C.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(aK, {
        title: E.intl.string(C.default.i91625),
        children: u.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(aY, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(aY, {
                                  label: E.intl.formatToPlainString(C.default["9TpIQg"], { env: l }),
                                  value: aR(r.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      r.r2_truncated ? C.default.o45MMA : C.default.S7o3vV,
                                      { count: aD(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(aQ, {
                                      label: E.intl.formatToPlainString(C.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: aR,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function rd(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aJ.Mf,
        children: [
            (0, n.jsx)(aW, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(ru, {
                            title: E.intl.string(C.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(ru, {
                            title: E.intl.string(C.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(ro, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(rn, {
                                title: E.intl.string(C.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ra, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(rn, {
                                title: E.intl.string(C.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(rr, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(rn, {
                                title: E.intl.string(C.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ri, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(rn, {
                                title: E.intl.string(C.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(rs, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(aZ, { analytics: t.analytics }),
                        (0, n.jsxs)(aK, {
                            title: E.intl.string(C.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(aY, {
                                    label: E.intl.string(C.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? a$(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(aY, {
                                    label: E.intl.string(C.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? a$(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function rc(e, t) {
    return String(e).padStart(t, "0");
}
function rf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${rc(n.getHours(), 2)}:${rc(n.getMinutes(), 2)}:${rc(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${rc(n.getMilliseconds(), 3)}` : a;
}
var rm = l(977129);
let rh = new Map(),
    rg = new Map(),
    rx = 0,
    rp = 0;
async function rv(e, t, l) {
    let n = rx,
        a = rh.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < rp) return { status: "forbidden" };
    let r = rg.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, rm.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((rp = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let u = await s.json();
            if (!0 !== u.available || null == u.rich) return { status: "unavailable" };
            if (n !== rx) return { status: "failed" };
            var l = u.rich;
            for (rh.set(t, l); rh.size > 100;) {
                let e = rh.keys().next();
                if (!0 === e.done) break;
                rh.delete(e.value);
            }
            return { status: "loaded", rich: u.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    rg.set(t, i);
    let s = await i;
    return (rg.get(t) === i && rg.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function rb() {
    ((rx += 1), rh.clear(), rg.clear(), (rp = 0));
}
function rj(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function ry(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function rk(e) {
    switch (e) {
        case "subagent":
            return E.intl.string(C.default["EoY7D+"]);
        case "context":
            return E.intl.string(C.default.KVFrD3);
        case "tool":
            return E.intl.string(C.default["/N6ZU9"]);
        case "delegated":
            return E.intl.string(C.default.HcEbf2);
        default:
            return E.intl.string(C.default.AhOqQs);
    }
}
function rN(e) {
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
let rw = ["model", "tool", "subagent", "delegated", "context"];
function rA(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(rN(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function rS(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let rC = ["arguments", "result", "usage", "diagnostics"];
var rE = l(40715);
let rI = { started: rE.Vf, ok: rE.mo, error: rE.Sr };
function rT(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${rE.Om} ${rI[t] ?? rE.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return E.intl.string(C.default.HpKDyl);
                case "error":
                    return E.intl.string(C.default["5T4Dd0"]);
                default:
                    return E.intl.string(C.default.VbEmf0);
            }
        })(t),
    });
}
let rM = { model: rE.WI, subagent: rE.uM, context: rE.eH, tool: rE.pw, delegated: rE.C8 };
function r_(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: rE.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: rE.D6, children: t }),
            (0, n.jsx)("div", { className: rE.zL, children: l }),
        ],
    });
}
function rP(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(r_, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function rR(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: rE.WA, children: t });
}
function rL(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: rE.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: rE.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function rD(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: rE.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: rE.p8,
                children: [
                    (0, n.jsx)(t3._, { className: rE.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: rE.bG, children: l }),
        ],
    });
}
function rF(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(r_, {
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
            ? E.intl.formatToPlainString(C.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? E.intl.formatToPlainString(C.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(r_, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: rE.Kv,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return E.intl.string(C.default.xO6bcQ);
                            case "content":
                                return E.intl.string(C.default.gpBZRr);
                            default:
                                return E.intl.string(C.default.OZvPXt);
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
function rO(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: rE.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: rE.uh,
                          children: E.intl.string(C.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          r_,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: rE.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: rE.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: E.intl.string(C.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? E.intl.string(C.default["1kBG9Z"])
                                                        : E.intl.formatToPlainString(C.default.VGSwo4, {
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
function r$(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : E.intl.string(
                      "loading" === t.status
                          ? C.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? C.default.jEQTot
                            : C.default.fj5wM8,
                  );
    return null == l
        ? null
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: rE.E7, children: l });
}
function rz(e) {
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
                rC.filter((e) => n.has(e))
            );
        })(l, { childCount: u, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != rh.get(t)) return;
                    let l = new AbortController();
                    return (
                        rv(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = rh.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        f = rf(l.startedAt, "millis"),
        m = rN(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: rE._0,
        onKeyDown: h,
        role: "region",
        "aria-label": E.intl.formatToPlainString(C.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: rE.sy,
                children: (0, n.jsxs)("div", {
                    className: rE.HI,
                    children: [
                        (0, n.jsx)(rT, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${rE.PY} ${rM[m]}`,
                            children: rk(m),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: rE.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: rE.l5,
                            children: null == l.durationMs ? E.intl.string(C.default.HpKDyl) : rj(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: rE.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            o.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(rL, {
                      title: E.intl.string(C.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(rF, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(rO, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(r$, { detail: d }),
                      ],
                  })
                : null,
            o.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(rL, {
                      title: E.intl.string(C.default.KXrf5F),
                      children: [
                          (0, n.jsx)(rP, {
                              label: E.intl.string(C.default["2Aii2k"]),
                              value: E.intl.formatToPlainString(C.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(rP, {
                                    label: E.intl.string(C.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(r_, {
                                    label: E.intl.string(C.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: E.intl.string(C.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(rO, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            o.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(rL, {
                      title: E.intl.string(C.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(rR, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(rP, {
                                            label: E.intl.string(C.default.Ran4BY),
                                            value: E.intl.formatToPlainString(C.default["PYO+Jv"], {
                                                tokens: ry(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(rP, {
                                            label: E.intl.string(C.default.vPIcyv),
                                            value: E.intl.formatToPlainString(C.default.Qy2iTq, {
                                                system: ry(l.systemTokens),
                                                tools: ry(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: ry(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(rP, {
                                            label: E.intl.string(C.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(rP, {
                                            label: E.intl.string(C.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(rP, {
                                            label: E.intl.string(C.default.VyAl6j),
                                            value: E.intl.formatToPlainString(C.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(rP, {
                                            label: E.intl.string(C.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: rE.E7,
                              children: E.intl.string(C.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            o.includes("arguments") || o.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: rE.E7,
                      children: E.intl.string(C.default["ppv+97"]),
                  })
                : null,
            o.includes("diagnostics")
                ? (0, n.jsx)(rD, {
                      title: E.intl.string(C.default.T7SFyZ),
                      children: (0, n.jsxs)(rR, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(r_, {
                                        label: E.intl.string(C.default.NnBqcd),
                                        value: (0, n.jsx)(e9.D, {
                                            tag: "div",
                                            className: rE.mi,
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
                                  : (0, n.jsx)(rP, {
                                        label: E.intl.string(C.default.fI6mzD),
                                        value: E.intl.formatToPlainString(C.default.hO8FYp, { count: u }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(rP, { label: E.intl.string(C.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(rP, { label: E.intl.string(C.default["XVTP/S"]), value: l.id }),
                              null == f ? null : (0, n.jsx)(rP, { label: E.intl.string(C.default.rD7bm0), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(rP, { label: E.intl.string(C.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: rE.Hm,
                                                children: E.intl.string(C.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    rP,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? E.intl.formatToPlainString(C.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : E.intl.formatToPlainString(C.default["/L6GFe"], {
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
                className: rE.E7,
                children: E.intl.string(C.default.khAjR0),
            }),
        ],
    });
}
let rq = { model: rE.WI, subagent: rE.uM, context: rE.eH, tool: rE.pw, delegated: rE.C8 };
function rU(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = rN(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return rw.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: rE.M0,
        children: [
            (0, n.jsx)("div", {
                className: rE.pZ,
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
                                            className: `${rE.dL} ${rq[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: rE.z4,
                role: "group",
                "aria-label": E.intl.string(C.default.UZ1OlR),
                children: rw.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: rE.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${rE.A9} ${rq[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: rk(e) }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: E.intl.formatToPlainString(C.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: E.intl.formatToPlainString(C.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: rj(a),
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
let rG = { model: rE.WI, subagent: rE.uM, context: rE.eH, tool: rE.pw, delegated: rE.C8 };
function rB(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        u = rN(t),
        o = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? E.intl.formatToPlainString(C.default["PYO+Jv"], { tokens: ry(t.promptTokens) })
                : null != t.durationMs
                  ? rj(t.durationMs)
                  : null;
    return (0, n.jsxs)(e9.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${rE.nM} ${s ? rE.A5 : ""} ${"error" === t.status ? rE.Cr : ""} ${l ? rE.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: rE.sU,
                children: [
                    (0, n.jsx)(rT, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${rE.PY} ${rG[u]}`,
                        children: rk(u),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: rE.G9,
                        children: o,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: rE.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: rE.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: rE.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rV(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, F.yK)([lq.Ay], () => lq.Ay.getTrace(l), [l]),
        s = (0, F.bG)([lq.Ay], () => lq.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => rb, [l]);
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
            return 0 === t ? 40 : (0, eI.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, eI.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, am.A)({
            resizableDomNodeRef: g,
            orientation: am.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, eI.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (o(null), j(u));
        }, [u, j]),
        T = a.useMemo(() => rA(i, r), [i, r]),
        M = a.useMemo(
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
                    .map((e, t) => ({ ...e, index: t, entries: rA(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        _ = rS(T, u),
        P = _?.kind === "tool" ? rS(i, _.parentId ?? null) : null,
        R = null == _ ? 0 : ((t = _.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = T[T.length - 1];
    a.useLayoutEffect(() => {
        if (null != u) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, u]);
    let D = a.useCallback(
        (e) => {
            if (0 === T.length) return;
            let t = T.findIndex((e) => e.id === u);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(T.length - 1, t));
                (o(T[l].id), document.getElementById(`trace-${T[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? T.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(T.length - 1)
                      : "Escape" === e.key && null != u && (e.preventDefault(), o(null), j(u));
        },
        [T, u, j],
    );
    return 0 === i.length
        ? (0, n.jsx)("div", {
              className: rE.uP,
              ref: h,
              children: (0, n.jsx)(a8, {
                  state: s,
                  emptyTitle: E.intl.string(C.default.Iyt8OJ),
                  emptyBody: E.intl.string(C.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${rE.uP} ${f ? rE.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: rE.DK,
                      children: [
                          (0, n.jsx)(rU, { entries: i }),
                          (0, n.jsx)(a6, { state: s }),
                          0 === T.length
                              ? (0, n.jsx)("div", {
                                    className: rE.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: E.intl.string(C.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: x,
                                    className: rE.Ns,
                                    children: [
                                        (0, n.jsx)(a9, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": E.intl.string(C.default["QATZ+A"]),
                                            className: rE.p_,
                                            children: M.map((e) => {
                                                let t = rf(e.startedAt),
                                                    l = E.intl.formatToPlainString(C.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: rE.mf,
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
                                                                              children: rj(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: rE.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        rB,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === u,
                                                                            tabbable: e.id === (u ?? T[0]?.id),
                                                                            onSelect: y,
                                                                            onKeyDown: D,
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
                  null == _
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": E.intl.string(C.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: rE.b1,
                                    onPointerDown: A,
                                    onKeyDown: S,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: rE.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(rz, {
                                        projectId: l,
                                        entry: _,
                                        parent: P,
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
var rH = l(402879);
function rW(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, F.yK)([lq.Ay], () => lq.Ay.getTrace(t), [t]),
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
            (0, rH.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: rE.ED,
                children: (0, n.jsx)(a4.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: E.intl.string(C.default.NfncNw),
                    "aria-label": E.intl.string(C.default.NfncNw),
                }),
            }),
            (0, n.jsx)(lh.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: lh.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(lg.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": E.intl.string(E.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(lx.rX, {
                            children: (0, n.jsx)(lx.Dr, {
                                id: "export",
                                label: E.intl.string(C.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: u,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(nJ.K, {
                        ...e,
                        buttonRef: s,
                        icon: nl.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": E.intl.string(E.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var rK = l(497243);
function rY(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, o] = a.useState(""),
        c = (0, F.bG)([ak.A], () => ak.A.isDeveloper),
        m = (0, F.bG)([aP], () => aP.getStatus(t), [t]),
        h = (0, F.bG)([aP], () => aP.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, f.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, f.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, aN.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: aP.getStatus(t),
                        last_turn_usage: aP.getLastTurnUsage(t),
                        last_compaction: aP.getLastCompaction(t),
                        last_compaction_decline: aP.getLastCompactionDecline(t),
                        model_calls: aP.getModelCalls(t),
                        logs: lq.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ax.P)((0, ap.o)(E.intl.string(C.default.sDSDiO), av.Ck.SUCCESS)),
            );
        }, [t]),
        p = E.intl.string(C.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rK.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: ab.CopyIcon,
                            tooltip: E.intl.string(C.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: aj.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rK.rf,
                children: [
                    (0, n.jsxs)(ay.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": E.intl.string(C.default.uNyR86),
                        className: rK.vR,
                        children: [
                            (0, n.jsx)(ay.V.Item, { id: "logs", children: E.intl.string(C.default["1mpzdJ"]) }),
                            (0, n.jsx)(ay.V.Item, { id: "worker", children: E.intl.string(C.default.whGHLD) }),
                            (0, n.jsx)(ay.V.Item, { id: "agent", children: E.intl.string(C.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(ay.V.Item, { id: "trace", children: E.intl.string(C.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(rl, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(rd, { status: m, fetchState: h, onRefresh: g })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rK.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rK.XH,
                                          children: (0, n.jsx)(rW, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, n.jsx)(rV, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(a5, { projectId: t, status: m, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rQ = l(333007),
    rX = l(103557),
    rZ = l(97808),
    rJ = l(778712),
    r0 = l(365912),
    r1 = l(775121),
    r2 = l(486020),
    r5 = l(277437);
function r7(e) {
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
        } = lT({ projectId: t, surface: "design", onUploadFile: h }),
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
        [I, T] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = S.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => T({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = I?.height ?? 44,
        _ = r.left + 8,
        P = r.top + 8,
        R = Math.max(l.x, _),
        L = Math.min(Math.max(l.y + 32 + 4, P), Math.max(P, r.top + r.height - M - 8));
    return (0, n.jsxs)("div", {
        ref: S,
        className: i()(r5.M0, { [r5.ho]: w && !m, [r5.ET]: m }),
        style: { left: R, top: L },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: r5.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(to.m, {
                position: "bottom",
                text: E.intl.string(C.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: r5.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": E.intl.string(C.default.d6Rqlu),
                    children: (0, n.jsx)(lm.H, { size: "custom", color: "currentColor", className: r5.WW }),
                }),
            }),
            (0, n.jsx)(lb.y, {
                autoFocus: !0,
                rows: 1,
                className: r5.hF,
                value: u,
                placeholder: "" === s ? E.intl.string(C.default.FK09JH) : `Edit ${s}`,
                "aria-label": E.intl.string(C.default["qR+sGX"]),
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
                      className: r5.ZO,
                      children: g.map((e) => (0, n.jsx)(lM, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var r4 = l(320510);
function r3(e) {
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
function r6(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = r3(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var r8 = l(940107),
    r9 = l(42843);
let ie = { x: 25, y: 21 };
function it(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function il(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function ia(e, t, l, n) {
    let a = il(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function ir(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function ii(e) {
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
function is(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        u = null != l && l === r ? t : null,
        { active: o, annotations: d } = (0, e1.Q_)(u),
        c = (0, n_.o4)(u),
        m = (0, tz.useHasAnyModalOpen)(),
        h = (0, F.bG)([eo.default], () => eo.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, S] = a.useState(null),
        [I, T] = a.useState(!1),
        M = a.useRef(null),
        _ = a.useRef(null),
        P = a.useRef(null),
        [R, L] = a.useState(null),
        [D, O] = a.useState(!1),
        [$, z] = a.useState(null),
        [q, U] = a.useState(null),
        G = a.useRef(!1),
        [B, V] = a.useState(!1),
        [H, W] = a.useState(null),
        K = o && !c && !m;
    null == $ || (K && $.projectId === u) || z(null);
    let Y = $?.projectId ?? null;
    (a.useEffect(() => {
        if (null != Y) return () => eZ(Y, "design");
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
                p((t) => (it(t, e) ? t : e));
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
                (0, r4.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? ii(t.response) : null;
                        null == l ? w(!0) : (j(l), (0, e1._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
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
    let X = a.useRef(null);
    (a.useEffect(() => {
        if (!K || null == x || null == u) return;
        if (null == b) {
            X.current = x;
            return;
        }
        if (it(X.current, x)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            X.current = x;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, r4.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !et.current) return;
                        let l = ii(e.response);
                        null != l && (j(l), (0, e1._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = r3(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, e1.fA)(u, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, x, b, d, u, i]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), z(null), W(null), j(null));
                };
        }, [K]));
    let Z = a.useRef(null),
        J = a.useRef(null),
        ee = a.useRef(!1),
        et = a.useRef(!1);
    a.useEffect(() => {
        ((et.current = K), K || ((Z.current = null), (J.current = null), (P.current = null), T(!1)));
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
                    (0, r8.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(r6, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((ee.current = !1), et.current)) {
                                if ("picked" !== t.status || ih(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && O(!0);
                                else {
                                    let e = (0, ew.ts)(t.target);
                                    (L((t) => (im(t, e) ? t : e)),
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
            (U({ at: $.at, label: $.label, draft: $.draft, instant: e }), V(e), z(null));
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
            if (null == q) return;
            let e = setTimeout(() => U(null), id);
            return () => clearTimeout(e);
        }, [q]));
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
                    (eZ(u, "design"),
                    W(null),
                    (G.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: l, label: (0, ew.ts)(e) }));
            },
            [u],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ec = a.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = _.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ec);
    let ef = a.useCallback(
            (e) => {
                if (null == x || null != H) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), T(!0), null != $)) {
                    (Math.abs(e.clientX - $.at.x) > ic || Math.abs(e.clientY - $.at.y) > ic) && (G.current = !0);
                    return;
                }
                if (!er) return void S(null);
                let t = ed(e, x);
                if (D) {
                    let e = (0, ew.jo)(ei, t.x, t.y),
                        l = null != e && ih(e, x, ea) ? null : e;
                    if (null != l) {
                        let e = (0, ew.ts)(l);
                        L((t) => (im(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = J.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((J.current = l), (Z.current = l), el());
            },
            [x, ea, er, ed, D, ei, $, H, ec, el],
        ),
        em = a.useCallback(() => {
            (T(!1), S(null), (J.current = null), (Z.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !er || D || null != $ || null != H) return;
        let e = P.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((J.current = n), (Z.current = n), el());
    }, [K, I, er, D, $, H, el]);
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
            null != u && (S(null), (0, e1.PS)(u));
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
                r1.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        r1.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ep.current());
        }
        function t(e) {
            let t = e.target;
            (0, nQ.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, r0.J$)(e), !0);
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
                ((0, ew.to)(H.draft) && ((0, e1.dy)(u, g, H.id, H.draft.trim()), W({ ...H, editing: !1 })));
        }, [u, H, g]),
        eA = a.useCallback(() => {
            null != u && null != H && null != g && ((0, e1.PR)(u, g, H.id), W(null));
        }, [u, H, g]),
        eS = o
            ? y
                ? E.intl.string(C.default.jQQ8i2)
                : N
                  ? E.intl.string(C.default.zvU2QH)
                  : E.intl.formatToPlainString(C.default.A4HDMU, { count: d.length })
            : "",
        eC = K && null != x,
        eE = I && null == H,
        eI = null == H ? null : d.find((e) => e.id === H.id),
        eT = $?.target ?? eI?.target ?? null,
        eM = $ ?? q,
        e_ = $ ?? (q?.instant === !0 ? null : q),
        eP =
            null != eI && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = ir(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(ia(eI.target, eI.anchor, x, ea), x)
                : null;
    return (0, rQ.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: r9.Li,
            children: [
                (0, n.jsx)("div", {
                    className: r9.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eC
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: r9.MT,
                                  style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                  "data-plain-cursor": eE ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": E.intl.string(C.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ef,
                                  onMouseLeave: em,
                                  onClick: eh,
                                  onKeyDown: ej,
                              }),
                              null != A && null == $ && null == H ? (0, n.jsx)(ig, { box: il(A, x, ea) }) : null,
                              (0, n.jsx)("div", {
                                  ref: M,
                                  className: r9.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: r9.xz,
                                      "data-shown": null != A && null == H && null == $ ? "" : void 0,
                                      "data-instant": B ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: r9.Ux,
                                          children: [
                                              null == R
                                                  ? null
                                                  : (0, n.jsx)("span", { className: r9.Tl, children: R.kind }),
                                              null == R || "" === R.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: r9.kh, children: [" ", R.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: _,
                                  className: r9.Y,
                                  children: eE
                                      ? (0, n.jsx)(nt.A, { className: r9.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == e_
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: r9.aZ,
                                        style: { transform: `translate3d(${e_.at.x + 12}px, ${e_.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: r9.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == $ ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: r9.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: r9.Tl, children: e_.label.kind }),
                                                    "" === e_.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: r9.kh,
                                                              children: [" ", e_.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, n.jsx)("div", { className: r9.D0, style: il(eT, x, ea), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = ia(e.target, e.anchor, x, ea),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: r9.xL,
                                          style: { ...ir(l, x), width: 24, height: 24 },
                                          "aria-label": E.intl.formatToPlainString(C.default.zicHlU, {
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
                                          children: (0, n.jsx)(iu, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eM || null == u
                                  ? null
                                  : (0, n.jsx)(r7, {
                                        projectId: u,
                                        at: { x: eM.at.x + 12, y: eM.at.y + 12 },
                                        bounds: x,
                                        kind: eM.label.kind,
                                        value: eM.draft,
                                        canSubmit: null != $ && (0, ew.to)(eM.draft),
                                        onChange: (e) => {
                                            null != $ && z({ ...$, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: en,
                                        onUploadFile: ek,
                                        closing: null == $,
                                    }),
                              null != eI && null != H && null != eP
                                  ? (0, n.jsxs)(io, {
                                        point: eP,
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
                                                ? (0, n.jsx)(rX.f, {
                                                      autoFocus: !0,
                                                      label: E.intl.string(C.default["qR+sGX"]),
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
                                                      className: r9.aC,
                                                      children: eI.comment,
                                                  }),
                                            (0, e1.zz)(eI, g)
                                                ? (0, n.jsx)("div", {
                                                      className: r9.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: r9.nv,
                                                                        children: E.intl.string(C.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: E.intl.string(C.default.cLsnYH),
                                                                        onClick: () =>
                                                                            W({ ...H, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: E.intl.string(C.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eA,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: E.intl.string(C.default.ncz32j),
                                                                        onClick: () =>
                                                                            W({
                                                                                ...H,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    H.editing
                                                                        ? (0, n.jsx)(Q.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, ew.to)(H.draft),
                                                                              text: E.intl.string(C.default.wIeFN0),
                                                                              onClick: eN,
                                                                          })
                                                                        : (0, n.jsx)(Q.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: E.intl.string(C.default.DKZggU),
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
function iu(e) {
    let { authorId: t } = e,
        l = (0, F.bG)([eo.default], () => eo.default.getUser(t), [t]);
    return (0, n.jsx)(rZ.eu, {
        src: null == l ? null : r2.Ay.getUserAvatarURL(l),
        size: rJ._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function io(e) {
    let t,
        l,
        r,
        i,
        s,
        u,
        { point: o, frame: d, authorId: c, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(ie);
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
        className: r9.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: r9.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: r9.ip, children: (0, n.jsx)(iu, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: r9.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: r9.zI, children: x }),
        ],
    });
}
let id = 300,
    ic = 2;
function im(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function ih(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function ig(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: r9.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var ix = l(11055),
    ip = l(175841),
    iv = l(533140),
    ib = l(342667);
function ij(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: r } = e,
        { stop: i, stopping: s } = (function (e) {
            let t = (0, F.bG)([eS.Ay], () => null != e && eS.Ay.isThinking(e)),
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
        className: ib.M0,
        "data-phase": t,
        "data-testid": "vibegrations-control-notice",
        children: [
            (0, n.jsxs)("div", {
                className: ib.sp,
                children: [
                    (0, n.jsx)(ip.SparklesIcon, { size: "sm", color: "currentColor" }),
                    u ? (0, n.jsx)(nP.i, { size: 12, color: "currentColor" }) : null,
                    (0, n.jsxs)("div", {
                        className: ib.f4,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: ib.w9,
                                children: E.intl.string(u ? C.default.ydhvN1 : C.default["7U6tIB"]),
                            }),
                            u
                                ? (0, n.jsx)(v.E, {
                                      variant: "text-xs/medium",
                                      color: "none",
                                      className: ib.Rb,
                                      children: E.intl.string(C.default.NldIIG),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            u
                ? (0, n.jsxs)("div", {
                      className: ib.lC,
                      children: [
                          null != r
                              ? (0, n.jsx)(Q.$, {
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    text: E.intl.string(C.default.kj5epw),
                                    onClick: r,
                                })
                              : null,
                          null != i
                              ? (0, n.jsx)(Q.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: E.intl.string(C.default["2HalWx"]),
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
function iy(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            resolveIframe: i,
            frameId: s,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, n_.o4)(null != l && l === r ? t : null),
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
        c = (0, tz.useHasAnyModalOpen)(),
        f = (0, iv.V0)(s);
    a.useEffect(() => {
        o && f && null != s && (0, iv.c2)(s);
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
    return (0, rQ.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: ib.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children:
                        "controlling" === d
                            ? E.intl.string(C.default.dIE9zO)
                            : "handoff" === d
                              ? E.intl.string(C.default["7U6tIB"])
                              : "",
                }),
                p
                    ? (0, n.jsx)("div", {
                          className: ib.om,
                          style: v,
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
                x
                    ? (0, n.jsx)("div", {
                          className: ib.D,
                          style: v,
                          children: (0, n.jsx)(ij, { phase: d, projectId: t, onOpenPublishedApp: u }),
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var ik = l(237528),
    iN = l(664121),
    iw = l(95477),
    iA = l(724401);
function iS(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function iC(e) {
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
        T = a.useCallback(
            (e, t) => {
                (0, tE.A)({
                    title: E.intl.string(C.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? E.intl.formatToPlainString(C.default["0lt6bH"], { target: e })
                            : E.intl.formatToPlainString(C.default.zVcDfj, {
                                  environment: E.intl.string(
                                      "preview" === o ? C.default["/kYdZe"] : C.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: E.intl.string(C.default.ZlKerR),
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
                                              text: E.intl.string(C.default.kIWqXR),
                                          }),
                                          S())
                                        : "expired" === e.code
                                          ? (k({
                                                phase: "settled",
                                                environment: o,
                                                tone: "danger",
                                                text: E.intl.formatToPlainString(C.default.PeVYaC, { days: 30 }),
                                            }),
                                            S())
                                          : "unconfirmed" === e.code
                                            ? (k({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: E.intl.string(C.default["2xSPXh"]),
                                              }),
                                              S())
                                            : k({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: E.intl.string(C.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    k({
                                        phase: "settled",
                                        environment: o,
                                        tone: "danger",
                                        text: E.intl.string(C.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [o, s, S],
        ),
        M = a.useCallback(() => {
            (k({ phase: "busy", environment: o, kind: "create" }),
                (0, f._m)(l, o, x)
                    .then(() => {
                        (p(""),
                            k({
                                phase: "settled",
                                environment: o,
                                tone: "positive",
                                text: E.intl.string(C.default.mfAoFT),
                            }),
                            S());
                    })
                    .catch(() => {
                        k({ phase: "settled", environment: o, tone: "danger", text: E.intl.string(C.default.uhhqP3) });
                    }));
        }, [l, o, x, S]),
        _ = "loaded" === I.status ? I.window : null,
        P = "loaded" === I.status ? I.nowMs : 0,
        R = _?.earliestRestoreTimestampMs ?? P - 2592e6,
        L = "" === b ? null : new Date(b).getTime(),
        D = null != L && !Number.isNaN(L) && L >= R && L <= P,
        F =
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
                ? (0, n.jsx)("div", { className: iA.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: iA.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: E.intl.string(C.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: iA.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(tI.Ip, {
                          className: iA.p_,
                          children: (0, n.jsx)("div", {
                              className: iA.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, tM.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: tM._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: iA.KW,
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return E.intl.string(C.default.h4zhWL);
                                                          case "undo":
                                                              return E.intl.string(C.default["c/tNny"]);
                                                          default:
                                                              return E.intl.string(C.default["jViU+0"]);
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
                                                  (0, n.jsx)(ik.v, {
                                                      text: E.intl.string(C.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: iA.AD,
                                                title: E.intl.formatToPlainString(C.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: iA.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            e9.D,
                                            {
                                                className: iA.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          T(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, f.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: iA.Pf,
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
            className: iA.nd,
            "aria-label": E.intl.string(C.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": E.intl.string(C.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: iN.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: E.intl.string(C.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: iA.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: iA.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(ay.V, {
                                        selectedItem: o,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": E.intl.string(C.default.CNvRyJ),
                                        className: iA.vR,
                                        children: [
                                            (0, n.jsx)(ay.V.Item, {
                                                id: "preview",
                                                children: E.intl.string(C.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(ay.V.Item, {
                                                id: "stable",
                                                children: E.intl.string(C.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        E.intl.formatToPlainString(C.default.l07ism, { days: 30 }),
                                        null != _
                                            ? ` ${new Date(_.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === F.kind
                                    ? (0, n.jsxs)("div", {
                                          className: iA.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: E.intl.string(C.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === F.kind
                                      ? (0, n.jsx)("div", {
                                            className: iA.lm,
                                            role: "danger" === F.tone ? "alert" : "status",
                                            children: (0, n.jsx)(v.E, {
                                                variant: "text-sm/normal",
                                                color:
                                                    "danger" === F.tone
                                                        ? "text-feedback-critical"
                                                        : "text-feedback-positive",
                                                children: F.text,
                                            }),
                                        })
                                      : null,
                            ],
                        }),
                        t,
                        (0, n.jsxs)("div", {
                            className: iA.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: iA.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: iA.Fv,
                                            children: (0, n.jsx)(iw.k, {
                                                label: E.intl.string(C.default.hJb78b),
                                                value: x,
                                                onChange: p,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(Q.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: E.intl.string(C.default["14UarN"]),
                                            onClick: M,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: iA._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: iA.kv,
                                            children: (0, n.jsx)(iw.k, {
                                                label: E.intl.string(C.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: iS(R),
                                                max: iS(P),
                                                disabled: N || null == _,
                                                onChange: j,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(Q.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: E.intl.string(C.default["3D/vYN"]),
                                            disabled: N || !D,
                                            onClick: () => {
                                                null != L && T(new Date(L).toLocaleString(), () => (0, f.dz)(l, o, L));
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
var iE = l(120426),
    iI = l(873727),
    iT = l(147248),
    iM = l(418842),
    i_ = l(363195),
    iP = l(885386),
    iR = l(171936),
    iL = l(796036);
function iD(e) {
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
        let l = (0, F.bG)([i_.A], () => (0, iI.x4)(i_.A.theme)),
            n = (0, F.bG)([iT.A], () => iT.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, F.cf)([lk.Ay], () => ({
                reducedMotion: lk.Ay.useReducedMotion,
                fontScale: (0, iI.U0)(),
                highContrast: lk.Ay.isHighContrastModeEnabled,
                forcedColors: lk.Ay.useForcedColors,
                underlineLinks: lk.Ay.alwaysShowLinkDecorations,
            })),
            d = iP.hH.useSetting(),
            c = (0, iM.C)(),
            f = a.useRef(!1),
            m = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, iE.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, iI.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, r8.W)(n, "set-env", a, {
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
                let l = (0, iE.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, iE.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, iR.mn)(t, () => (0, iE.F)(g, v));
        }, [t, g, v]));
    let b = a.useCallback(() => (0, iE.F)(g, v), [g, v]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: x, className: ej.fm, children: f })],
            }),
            m,
            (0, n.jsx)(iy, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                frameId: v,
                onOpenPublishedApp: h,
            }),
            (0, n.jsx)(is, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function iF(e) {
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
            previewGate: T,
            channelMessages: M,
            availability: _,
            activeMode: P,
            widgetApplicationId: R,
            onOpenPublishedApp: L = null,
        } = e,
        D = a.useRef(null),
        [F, O] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (m.type === s.U.MAIN) return ((0, c.HV)(r), () => (0, c.HV)(null));
    }, [r, m.type]),
        a.useEffect(() => {
            null != t && ((0, f.Hc)(t), (0, iL.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = D.current;
            if (null == e) return;
            function t() {
                null != e && O(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        a.useLayoutEffect(() => () => (0, c.Zq)(0), []));
    let $ = Math.max(360, F - 320),
        z = null != M ? M.open : g,
        q = g || m.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: D,
        className: ej.LB,
        children: (0, n.jsx)(iD, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: o,
            surface: m,
            header: h,
            onOpenPublishedApp: L,
            mainClassName: null == h ? void 0 : i()(ej.ez, { [ej.zt]: z }),
            content: (0, n.jsx)(eg, {
                applicationId: r,
                previewApplicationId: o,
                surface: m,
                previewReady: I,
                previewGate: T,
                availability: _,
                activeMode: P,
                widgetApplicationId: R,
            }),
            sidebar:
                null != M
                    ? (0, n.jsx)(ag, {
                          open: M.open,
                          maxWidth: $,
                          onWidthChange: c.Zq,
                          children: M.open
                              ? (0, n.jsx)(ey, { channel: M.channel, guild: M.guild, onClose: M.onClose })
                              : null,
                      })
                    : null != t && q
                      ? (0, n.jsx)(ag, {
                            open: g,
                            maxWidth: $,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(rY, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            tL,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(iC, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(ix.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": E.intl.string(E.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == x
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: u.P,
                                                                        tooltip: E.intl.string(C.default.YdgE0j),
                                                                        onClick: x,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(d.Ay.Title, {
                                                          children: E.intl.string(E.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ej.cb,
                                                      children: (0, n.jsx)(
                                                          ao,
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
