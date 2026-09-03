l.d(t, { A: () => rp });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(789645),
    o = l(672929),
    u = l(58736),
    d = l(948230),
    c = l(18739),
    m = l(289873),
    f = l(821609),
    h = l(627363),
    g = l(580954),
    x = l(297264),
    p = l(834730),
    v = l(625180),
    j = l(91242),
    b = l(812901),
    y = l(317608),
    k = l(35367),
    N = l(869146),
    A = l(742023),
    w = l(697744),
    S = l(50617),
    E = l(375708),
    C = l(296167);
function I(e) {
    let { className: t } = e,
        { Component: l, events: r, getDuration: i } = (0, w.c)();
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
                (0, n.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: C.o,
                    children: E.intl.string(S.default.jTuX7C),
                }),
            ],
        })
    );
}
var T = l(328284);
function M(e) {
    let { title: t, body: l, wide: a = !1, children: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(T.Bf, a && T.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: T.Ux,
                children: [
                    (0, n.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, n.jsx)(p.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var P = l(652215),
    _ = l(165610),
    R = l(963691);
function L(e) {
    let { applicationId: t, surface: l } = e,
        { frame: r, state: i } = (0, k.A)({ applicationId: t, surface: l }),
        s = (0, _.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = j.A.getFrame(e);
                    if (null == t || N.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT)) return;
                    let l = j.A.getMainFrame()?.id === e;
                    t.intent === _.sV.MAIN
                        ? (l || v.A.promoteFrame(e), v.A.resetFrameLayoutModes(e))
                        : l && v.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = j.A.getFrame(s)) &&
                        ((0, _.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        A.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === _.sV.INLINE && v.A.promoteFrame(s),
                              v.A.updateFrameLayoutMode({ frameId: s, layoutMode: _.y0.PIP }))
                            : e.intent === _.sV.MAIN && v.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case k.n.Launched:
            return (0, n.jsx)(y.A, { frameId: r.id, level: b.A.WithinAppContent, className: R.Z7 });
        case k.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: R.qs,
                children: (0, n.jsx)(M, {
                    title: E.intl.string(S.default["4f6Vkr"]),
                    body: E.intl.string(S.default.LJ2q1H),
                }),
            });
        case k.n.NoApplication:
            return (0, n.jsx)(I, { className: R.qs });
        case k.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: R.qs,
                children: (0, n.jsx)(M, {
                    title: E.intl.string(S.default.FHOJiH),
                    body: E.intl.string(S.default["1yLQoV"]),
                }),
            });
        case k.n.Error:
            return (0, n.jsxs)("div", {
                className: R.qs,
                children: [
                    (0, n.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.MeLWCr),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: R.tj,
                        children: E.intl.string(S.default["1RCbQT"]),
                    }),
                ],
            });
        case k.n.AwaitingLaunch:
        case k.n.Loading:
            return (0, n.jsx)("div", { className: R.qs, children: (0, n.jsx)(m.y, {}) });
    }
}
var D = l(17928),
    F = l(323384),
    $ = l(308528),
    q = l(334738),
    O = l(802426),
    z = l(355622),
    G = l(734057),
    B = l(531685),
    U = l(365971),
    V = l(362417);
function W(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: V.f,
        children: [
            (0, n.jsx)(F.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function H() {
    return (0, n.jsx)("div", { className: V.f, children: (0, n.jsx)(m.y, {}) });
}
function Q(e) {
    let t,
        l,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, h.YY)(r),
        o = i?.bot?.id ?? null,
        u = (0, D.bG)([G.A], () => {
            if (null == o) return null;
            let e = G.A.getDMFromUserId(o);
            return null != e ? G.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        a.useEffect(() => {
            null != t && $.A.preload(P.ME, t);
        }, [t]),
        (l = (0, D.bG)([B.A], () => B.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, U.Xg)();
            return (
                (0, q.yl)(t, e),
                () => {
                    (0, q.dm)(t, e);
                }
            );
        }, [t, l]);
    let [d, c] = a.useState(null),
        m = null != o && d === o;
    return (a.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            $.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, n.jsx)(H, {})
        : null == o || m
          ? (0, n.jsx)(W, { message: E.intl.string(S.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(H, {})
            : (0, n.jsx)("div", {
                  className: V.g,
                  children: (0, n.jsx)(O.A, { channel: u, guild: null, chatInputType: z.oU.SIDEBAR }, u.id),
              });
}
var K = l(148853),
    Y = l(598748),
    X = l(486610),
    Z = l(531913),
    J = l(587895),
    ee = l(633075),
    et = l(946356),
    el = l(139730),
    en = l(520082),
    ea = l(287809),
    er = l(675210),
    ei = l(71495);
function es(e) {
    let { applicationId: t } = e,
        l = (0, D.bG)([ea.default], () => ea.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(eo, { applicationId: t, user: l });
}
function eo(e) {
    let { applicationId: t, user: l } = e,
        r = (0, D.bG)([J.A], () => J.A.getApplication(t)),
        i = a.useMemo(() => new ee.R({ applicationId: t }), [t]),
        s = (0, Z.A)(l.id, t),
        o = s.surfaceConfigs,
        u = (0, er.yZ)({
            widgetTop: null != o[Y.m.WIDGET_TOP],
            widgetBottom: null != o[Y.m.WIDGET_BOTTOM],
            miniProfile: null != o[Y.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, n.jsx)("div", {
              className: ei.$C,
              children: (0, n.jsxs)("div", {
                  className: ei.PV,
                  children: [
                      u.hasMainCard
                          ? (0, n.jsx)("div", {
                                className: ei.a9,
                                children: (0, n.jsx)(et.A.Overlay, {
                                    className: ei.Qb,
                                    children: (0, n.jsx)(en.A, {
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
                      u.hasPopoutCard && null != r
                          ? (0, n.jsx)("div", {
                                className: ei.ql,
                                children: (0, n.jsx)(el.A, { application: r, rendererProps: s, renderText: X.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var eu = l(976102);
function ed(e) {
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
        x = (0, o.A)(t, r),
        { isLoading: p } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != x && (0, g.A)().leaveFrame(x.id);
        }, [x, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: eu.q, children: (0, n.jsx)(m.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: eu.q,
            children: (0, n.jsx)(M, {
                wide: !0,
                title: E.intl.string(S.default.DYwf2n),
                body: E.intl.string(S.default.WWj3pN),
                children: (0, n.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: E.intl.string(S.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!i) return (0, n.jsx)(I, { className: eu.q });
    if (null == t) return null;
    if (p) return (0, n.jsx)("div", { className: eu.q, children: (0, n.jsx)(m.y, {}) });
    let v = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, K.z3)(d), "aria-label": (0, K.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eu.R,
        ...v,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, n.jsx)(L, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, n.jsx)("div", {
                          className: eu.q,
                          children: (0, n.jsx)(M, {
                              wide: !0,
                              title: E.intl.string(S.default.SGHO9K),
                              body: E.intl.string(S.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(es, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, n.jsx)(Q, { previewApplicationId: l }) : null,
        ],
    });
}
var ec = l(534890),
    em = l(738876),
    ef = l(47167),
    eh = l(31717),
    eg = l(372054);
function ex(e) {
    let { channel: t, guild: l, onClose: a } = e,
        r = (0, ef.Ay)(t),
        i = (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: eg.Wx,
        children: [
            (0, n.jsx)(em.A, { channel: t, draftType: eh.C.ChannelMessage }),
            (0, n.jsxs)(u.Ay, {
                toolbar: i,
                "aria-label": E.intl.string(E.t.BIYAqa),
                children: [
                    (0, n.jsx)(u.Ay.ChannelIcon, { icon: ec.ChatIcon, "aria-label": E.intl.string(E.t["/VQax8"]) }),
                    (0, n.jsx)(u.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: eg.GZ,
                children: (0, n.jsx)(O.A, { channel: t, guild: l, chatInputType: z.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ep = l(689175),
    ev = l(903586),
    ej = l(783791),
    eb = l(717447),
    ey = l(29080),
    ek = l(46054);
function eN(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, ev.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, ev.Lf)(t),
        o = s && null != i && i.content.trim() === l.trim(),
        u = !n && "" !== l && !o;
    return {
        streamed: r,
        lastStreamedMessage: i,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: s }),
    };
}
l(134528), l(947204);
var eA = l(939249),
    ew = l(478016),
    eS = l(34136);
function eE(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, n.jsxs)("section", {
        className: i()(eS.Nr, r),
        ...o,
        children: [
            (0, n.jsxs)("header", {
                className: i()(eS.wx, null != l && eS.o5, s),
                children: [
                    (0, n.jsx)(p.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var eC = l(113757);
function eI(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(eA.D, {
        className: i()(eC.nM, { [eC.f1]: o, [eC.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": E.intl.formatToPlainString(S.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: eC.jo,
                children: [
                    l
                        ? (0, n.jsx)(ew.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eC.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(p.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eC.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, n.jsx)(p.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eT(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                s((t) => new Set(t).add(e.id)), r?.(e);
            },
            [r],
        );
    return (0, n.jsx)(eE, {
        title: E.intl.string(S.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                eI,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eM = l(435619),
    eP = l(866665),
    e_ = l(885574),
    eR = l(430392),
    eL = l(632015),
    eD = l(256905),
    eF = l(824757);
function e$(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: eF.uW,
        children: [
            (0, n.jsxs)("span", {
                className: eF.a9,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eq() {
    return (0, n.jsx)(eP.m, {
        text: E.intl.string(S.default.DXe2dP),
        children: (0, n.jsx)(eA.D, {
            className: eF.bk,
            "aria-label": E.intl.string(S.default.Y6y4nQ),
            children: (0, n.jsx)(e_.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eO(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(e$, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: eF.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: eF.jw,
                              children: (0, n.jsx)(p.E, {
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
function ez(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? F.k : eR.RobotIcon;
    return (0, n.jsxs)("span", {
        className: eF.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: eF.L6,
                      children: [
                          (0, n.jsx)(eL.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, n.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: E.intl.string(S.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: eF.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: E.intl.string(t ? E.t.IC5Ann : S.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eG(e) {
    let { projectId: t, design: l } = e,
        [r, i] = a.useState(null),
        [s, o] = a.useState(!1),
        { id: u } = l,
        [d, m] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, c.PK)(t, u).then(
                (t) => {
                    e || i(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, u, d]);
    let f = E.intl.string(S.default.FW8UcU),
        h = a.useCallback(() => {
            (0, c.PK)(t, u).then(
                (e) => {
                    (0, eD.R)({
                        items: [{ type: "IMAGE", url: e, alt: f }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, u, f]),
        g = a.useCallback(() => {
            i(null),
                (0, c.n6)(t, u).then(
                    (e) => {
                        e ? 0 === d && m(1) : o(!0);
                    },
                    () => {},
                );
        }, [t, u, d]);
    return s
        ? null
        : (0, n.jsx)(e$, {
              label: E.intl.string(S.default["9W8SbY"]),
              info: (0, n.jsx)(eq, {}),
              children: (0, n.jsx)(eA.D, {
                  className: eF.xX,
                  onClick: h,
                  "aria-label": E.intl.string(S.default.CBrpNv),
                  children: null != r ? (0, n.jsx)("img", { src: r, alt: f, className: eF.sN, onError: g }) : null,
              }),
          });
}
function eB(e) {
    let { projectId: t, proposal: l } = e;
    return (0, n.jsx)(eE, {
        title: E.intl.string(S.default["60htw+"]),
        trailing: (0, n.jsx)(ez, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: eF.rf,
            children: [
                (0, n.jsx)(p.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(eG, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(e$, {
                          label: E.intl.string(S.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: eF.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: eF.Aw,
                                          children: (0, n.jsx)(p.E, {
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
                    ? (0, n.jsx)(e$, {
                          label: E.intl.string(E.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: eF.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: eF.uX,
                                          children: [
                                              (0, n.jsxs)(p.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, n.jsx)(p.E, {
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
                (0, n.jsx)(eO, { label: E.intl.string(S.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eO, { label: E.intl.string(S.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eU = l(192308),
    eV = l(479191);
function eW(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, eU.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]);
    return (0, n.jsxs)("article", {
        className: eV.Lo,
        children: [
            (0, n.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default["/e28TK"]),
            }),
            (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.jxvtin),
            }),
            (0, n.jsx)("div", {
                className: eV.cS,
                children: r.fields.map((e) =>
                    (0, n.jsx)(
                        "span",
                        {
                            className: eV.$H,
                            children: (0, n.jsx)(p.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tag: "span",
                                children: e.label,
                            }),
                        },
                        e.name,
                    ),
                ),
            }),
            (0, n.jsx)("div", {
                className: eV.sq,
                children: (0, n.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: E.intl.string(S.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eH = l(976814),
    eQ = l(973e3);
function eK(e) {
    let { projectId: t, request: l } = e,
        r = (0, D.bG)([c.Ay], () => c.Ay.getSettings(t)),
        i = (l.keys ?? []).map((e) => r?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = a.useCallback(() => {
            (0, eH.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0 });
        }, [t, l]);
    return (0, n.jsxs)("article", {
        className: eQ.Mk,
        children: [
            (0, n.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(S.default.wgDhiQ),
            }),
            (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : E.intl.string(S.default["V+DBhs"]),
            }),
            i.length > 0
                ? (0, n.jsx)("div", {
                      className: eQ.R6,
                      children: i.map((e) =>
                          (0, n.jsx)(
                              "span",
                              {
                                  className: eQ.K4,
                                  children: (0, n.jsx)(p.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      tag: "span",
                                      children: e.label,
                                  }),
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            (0, n.jsx)("div", {
                className: eQ.p0,
                children: (0, n.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: E.intl.string(S.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eY = l(196582);
function eX(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function eZ(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function eJ(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e0(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e1(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e2(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e7(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e6(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e3(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e5(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e4(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, n.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e9() {
    return [
        { key: "snail", Illocon: eX, tint: "var(--illo-yellow-40)", name: te(S.default["2l3AEQ"]) },
        { key: "goat", Illocon: eZ, tint: "var(--illo-orange-40)", name: te(S.default["+FPL+I"]) },
        { key: "frog", Illocon: eJ, tint: "var(--illo-green-40)", name: te(S.default.w4GOfR) },
        { key: "bunny", Illocon: e0, tint: "var(--illo-pink-40)", name: te(S.default.XmZT9M) },
        { key: "cat", Illocon: e1, tint: "var(--illo-pink-40)", name: te(S.default.NnydwQ) },
        { key: "caterpillar", Illocon: e2, tint: "var(--illo-green-40)", name: te(S.default["4iXcNT"]) },
        { key: "butterfly", Illocon: e7, tint: "var(--illo-purple-40)", name: te(S.default.DoTGt5) },
        { key: "dog", Illocon: e6, tint: "var(--illo-yellow-40)", name: te(S.default["9zxqmP"]) },
        { key: "spider", Illocon: e3, tint: "var(--illo-orange-40)", name: te(S.default.HF0T3L) },
        { key: "bee", Illocon: e5, tint: "var(--illo-yellow-40)", name: te(S.default.XTzDga) },
        { key: "bot", Illocon: e4, tint: "var(--illo-purple-40)", name: te(S.default.abtC2b) },
    ];
}
function e8(e) {
    return e9().find((t) => t.key === e);
}
function te(e) {
    return E.intl.string(e);
}
function tt(e) {
    let t = e9(),
        l = 0,
        n = e[0] ?? "";
    for (let e = 0; e < n.length; e++) l = (31 * l + n.charCodeAt(e)) % t.length;
    let a = new Map();
    return (
        e.forEach((e, n) => {
            a.set(e, t[(l + n) % t.length]);
        }),
        a
    );
}
var tl = l(683063),
    tn = l(705754),
    ta = l(883455),
    tr = l(13699);
function ti(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.MdXWEK);
}
function ts(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, ev.SY)(l.steps),
        c = u
            ? null != d
                ? (0, ev.WQ)(d)
                : ti(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ti(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return E.intl.formatToPlainString(S.default.RsOwXc, { count: t });
                                      let l = Math.round(t / 60);
                                      return l < 60
                                          ? E.intl.formatToPlainString(S.default["z+U4YX"], { count: l })
                                          : E.intl.formatToPlainString(S.default["7Q/vz0"], {
                                                hours: Math.floor(l / 60),
                                                minutes: l % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return E.intl.formatToPlainString(S.default.KS49RN, { task: t });
                      default:
                          return E.intl.formatToPlainString(S.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, n.jsx)("ol", {
                                    className: tr.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            ta.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: tr.iq,
                                      children: (0, n.jsx)(tn.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(eY.A, {
        glyph: (0, n.jsx)(tl.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ti(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: tr.nC,
                children: (0, n.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
l(321073);
var to = l(140735),
    tu = l(329456);
let td = [];
function tc(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tu.xL, { [tu.Vb]: "in_progress" === t, [tu.cT]: "completed" === t }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return E.intl.string(S.default.TkPGOH);
                case "in_progress":
                    return E.intl.string(S.default["oK+fmd"]);
                default:
                    return E.intl.string(S.default.d7lieu);
            }
        })(t),
        children: [
            "in_progress" === t
                ? (0, n.jsx)(m.y, {
                      type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                      className: tu.Qd,
                      itemClassName: tu.xB,
                      "aria-hidden": !0,
                  })
                : null,
            (0, n.jsx)("svg", {
                className: tu.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tu.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tm(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : td), [l, t]),
        i = a.useMemo(() => new Set(r.map((e) => e.key)), [r]),
        s = r.map((e) => e.key).join("\0"),
        [o, u] = a.useState(r),
        [d, c] = a.useState(s),
        [m, f] = a.useState(!1);
    d !== s && (c(s), u([...r, ...o.filter((e) => !i.has(e.key))]), 0 === r.length && f(!1));
    let h = o.some((e) => !i.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(r), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, r, l]),
        a.useEffect(() => {
            if (!l || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, n.jsxs)("span", {
        className: tu.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    tl.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tu.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, n.jsx)(s, { size: 16, alt: a, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, n.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tu.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tf(e) {
    let t,
        { todos: l, provisional: r, agents: s } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [l, n] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, o] = a.useState(() => new Set());
            return (
                r !== t && (i(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                a.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [s]),
                s
            );
        })(a.useMemo(() => l.map((e) => e.id), [l])),
        u =
            ((t = (s ?? td).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? td) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tu.p_,
        children: [
            l.map((e) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tu.AS, { [tu.J1]: "completed" === e.status }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tc, { status: e.status }),
                            (0, n.jsx)(p.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tu.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", { className: tu.Qq, children: e.text }),
                            }),
                            (0, n.jsx)(tm, { agents: u.get(e.id) ?? td, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tu.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tc, { status: "pending" }),
                          (0, n.jsx)(p.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tu.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tu.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function th(e) {
    let { todos: t, provisional: l, agents: a, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, n.jsxs)(eE, {
              title: E.intl.string(S.default.qCRC6c),
              trailing: (0, n.jsx)(p.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: E.intl.formatToPlainString(S.default.bQvqly, { completed: i, total: s }),
              }),
              className: tu.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, n.jsx)(to.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: E.intl.formatToPlainString(S.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, n.jsx)("div", {
                      className: tu.rf,
                      children: (0, n.jsx)(tf, { todos: t, provisional: l, agents: a }),
                  }),
              ],
          });
}
var tg = l(229775),
    tx = l(165648);
function tp(e) {
    let t = tt(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? e8(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: ti(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tv(e) {
    let {
            projectId: t,
            steps: l,
            active: r = !1,
            durationMs: i,
            interrupted: s = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: f = !1,
            segmentDurationMs: h,
        } = e,
        g = a.useMemo(() => (0, ev.GO)(l, { turnActive: r }), [l, r]),
        x = a.useMemo(
            () =>
                null == d
                    ? g
                    : {
                          ...g,
                          steps: g.steps.filter((e) => e.segment === d),
                          tasks: g.tasks.filter((e) => e.task.segment === d),
                      },
            [g, d],
        );
    if (s)
        return (0, n.jsx)("ol", {
            className: tr.pj,
            "data-live": !1,
            children: (0, n.jsx)(eY.A, {
                glyph: (0, n.jsx)(ey.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = r ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, ev.lt)(l) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !j) return null;
    let b = x.tasks,
        y = tt(b.map((e) => e.taskId)),
        k = !f && (r || b.some((e) => "running" === e.task.status)),
        N = tp(b);
    return (0, n.jsx)(eY.l.Provider, {
        value: b.length,
        children: (0, n.jsxs)("ol", {
            className: tr.pj,
            "data-live": k,
            children: [
                (0, n.jsx)(eb.Ay, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: f,
                    durationMs: p,
                    connectsDown: b.length > 0,
                }),
                b.map((e, l) => {
                    let a = null != e.task.helperMark ? e8(e.task.helperMark) : void 0,
                        r = a ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              ts,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != a && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: l < b.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, n.jsx)("li", {
                          className: tr.YO,
                          children: (0, n.jsx)(th, { todos: v, provisional: u, agents: N }),
                      })
                    : null,
            ],
        }),
    });
}
function tj(e) {
    let {
            projectId: t,
            steps: l,
            content: r,
            proposal: s,
            ideas: o,
            attachments: u,
            secretRequest: d,
            settingsRequest: c,
            onPickIdea: m,
            pickedIdeaIds: f,
            sideReply: h = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: x,
            lastStreamedMessage: v,
            showsClosingMessage: j,
            attachmentsHost: b,
        } = a.useMemo(
            () => eN({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        y = null == u ? null : (0, n.jsx)(eM.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, n.jsx)("div", { className: tr.MT, children: y }),
        N = h
            ? (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: tr.ue,
        children: [
            x.length > 0 && !g
                ? (0, n.jsx)("ol", {
                      className: tr.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: tr.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tx.PT,
                                              children: ek.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === v ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(eB, { projectId: t, proposal: s })
                : j
                  ? (0, n.jsxs)("div", {
                        className: i()(tr.ky, tg.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tx.PT, tr.cW),
                                children: ek.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? k : null,
                            N,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(tr.ky, tg.XR),
                      children: (0, n.jsx)(eW, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(tr.ky, tg.XR),
                      children: (0, n.jsx)(eK, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === b ? y : null,
            null != o && o.length > 0 ? (0, n.jsx)(eT, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            j ? null : N,
        ],
    });
}
l(323874), l(14289), l(35956);
var tb = l(475358),
    ty = l(922016),
    tk = l(980707),
    tN = l(477782),
    tA = l(81369),
    tw = l(717400),
    tS = l(663341),
    tE = l(826745),
    tC = l(783977),
    tI = l(559647),
    tT = l(285796),
    tM = l(775602),
    tP = l(673724),
    t_ = l(435558),
    tR = l.n(t_),
    tL = l(506774),
    tD = l(228366);
let tF = "VibegrationsComposerDrafts";
function t$() {
    return tL.w.get(tF) ?? {};
}
let tq = new Map(),
    tO = tR().throttle(() => {
        if (0 === tq.size) return;
        let e = t$();
        for (let [t, l] of tq) "" === l ? delete e[t] : (e[t] = l);
        tq.clear(), tL.w.set(tF, e);
    }, 1e3);
class tz extends D.Ay.Store {
    getDraft(e) {
        let t = tq.get(e);
        return null != t ? t : (t$()[e] ?? "");
    }
}
let tG = new tz(tD.h, {
    LOGOUT: function () {
        return tq.clear(), tO.cancel(), tL.w.remove(tF), !1;
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return tq.set(t, l), tO(), "" === l && tO.flush(), !1;
    },
});
var tB = l(590380),
    tU = l(113491),
    tV = l(789438);
let tW = tP.Is;
function tH(e) {
    let { text: t } = e,
        [l, r] = a.useState(""),
        [i, s] = a.useState("enterStart"),
        [o, u] = a.useState("");
    t !== o && (u(t), t !== l && ("" === l ? (r(t), s("enterStart")) : "idle" === i && s("exit"))),
        a.useEffect(() => {
            if ("exit" === i) {
                let e = window.setTimeout(() => {
                    r(t), s("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === i) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => s("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [i, t]);
    let d = "exit" === i ? tV.t0 : "enterStart" === i ? tV.Rj : "";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("span", { className: `${tV.xM} ${tV.nT} ${d}`, children: l }),
            (0, n.jsx)(tb.e, { shortcut: "tab", className: `${tV.xT} ${tV.nT} ${d}`, keyClassName: tV.IS }),
        ],
    });
}
let tQ = 0;
function tK(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: c,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            modelSettings: p,
            onModelSettingsChange: v,
        } = e,
        [j, b] = a.useState(() => tG.getDraft(t)),
        y = a.useCallback(
            (e) => {
                (0, d.I$)(t, e), b(e);
            },
            [t],
        ),
        [k, N] = a.useState(t);
    k !== t && (N(t), b(tG.getDraft(t)));
    let A = (0, D.bG)([tM.Ay], () => tM.Ay.isSubmitButtonEnabled),
        [w, C] = a.useState([]),
        [I, T] = a.useState(!1),
        [M, P] = a.useState(!1);
    a.useEffect(() => {
        i || P(!1);
    }, [i]);
    let _ = a.useRef(null),
        R = a.useRef([]),
        L = a.useRef(new Set()),
        F = a.useRef(m);
    F.current = m;
    let $ = a.useCallback((e) => {
            (R.current = e), C(e);
        }, []),
        q = a.useCallback((e) => {
            F.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    a.useEffect(() => {
        let e = L.current;
        return () => {
            for (let t of R.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && q(t.ref);
        };
    }, [q]);
    let O = a.useCallback(
            (e, t) => {
                if (L.current.has(e)) return;
                let l = R.current;
                l.some((t) => t.localId === e) && $(l.map((l) => (l.localId === e ? { ...l, ...t } : l)));
            },
            [$],
        ),
        z = a.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...R.current],
                    l = [];
                for (let n of e) {
                    let e = "" === n.type ? "application/octet-stream" : n.type,
                        a = ++tQ,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tW) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: E.intl.formatToPlainString(S.default.DlX57a, { count: tW }),
                        });
                        continue;
                    }
                    if (!(0, tP.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: E.intl.formatToPlainString(S.default.cI7t94, {
                                size: (0, tP.ZJ)((0, tP.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = tP.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    t.push({ ...r, previewUrl: i }), l.push({ file: n, localId: a });
                }
                for (let { file: e, localId: n } of ($(t), l))
                    c(e).then(
                        (e) => {
                            L.current.has(n) ? q(e) : O(n, { status: "ready", ref: e });
                        },
                        (e) => {
                            L.current.has(n) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                O(n, { status: "error", errorText: E.intl.string(S.default.GwEHvn) }));
                        },
                    );
            },
            [q, c, O, $],
        ),
        G = a.useCallback(
            (e) => {
                let t = R.current,
                    l = t.find((t) => t.localId === e);
                L.current.add(e),
                    l?.previewUrl != null && URL.revokeObjectURL(l.previewUrl),
                    l?.ref != null && q(l.ref),
                    $(t.filter((t) => t.localId !== e));
            },
            [q, $],
        ),
        B = w.every((e) => "ready" === e.status),
        U = "" !== j.trim() || w.length > 0,
        V = l && U && B,
        W = a.useCallback(() => {
            if (!V) return;
            let e = R.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (o(j, e.length > 0 ? e : void 0), R.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            y(""), $([]);
        }, [V, j, o, $, y]),
        H = a.useCallback(
            (e) => {
                e.preventDefault(), W();
            },
            [W],
        ),
        Q = a.useCallback(() => {
            null == u || M || (P(!0), u());
        }, [u, M]),
        K = null == g || "" !== j || !l || r || s ? null : g,
        Y = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !M) {
                    e.preventDefault(), e.stopPropagation(), Q();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != K) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), y(K);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), W());
            },
            [W, f, i, u, M, Q, K, y],
        ),
        X = a.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), z(t));
            },
            [l, z],
        ),
        Z = a.useCallback(
            (e) => {
                e.preventDefault(), T(!1), l && z(Array.from(e.dataTransfer.files));
            },
            [l, z],
        ),
        J = a.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), T(!0));
        }, []),
        ee = a.useCallback(
            (e) => {
                z(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [z],
        ),
        et = a.useRef(null),
        el = a.useRef(null),
        [en, ea] = a.useState(0),
        [er, ei] = a.useState(!1);
    a.useEffect(() => {
        if (0 === j.length) return void ei(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = tZ(e);
            null != t && ea(t);
        }
        ei(!0);
        let t = setTimeout(() => ei(!1), tY);
        return () => clearTimeout(t);
    }, [j]);
    let es = a.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        eo = er ? ` ${tV.EB}` : "",
        eu = null != K;
    return (0, n.jsxs)("form", {
        onSubmit: H,
        onDrop: Z,
        onDragOver: J,
        onDragLeave: () => T(!1),
        className: I ? `${tV.DA} ${tV.pV}` : tV.DA,
        children: [
            w.length > 0
                ? (0, n.jsx)("div", {
                      className: tV.lN,
                      children: w.map((e) => (0, n.jsx)(tJ, { draft: e, onRemove: G }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${tV.wg} ${tV.LP}${eo}`, style: es, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${tV.wg} ${tV.L3}${eo}`, style: es, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: tV.VA,
                ref: et,
                children: [
                    (0, n.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: tV.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, n.jsx)(ty.Y, {
                        targetElementRef: el,
                        position: "top",
                        align: "left",
                        animation: ty.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, n.jsx)(tk.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": E.intl.string(E.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, n.jsxs)(tN.rX, {
                                    children: [
                                        (0, n.jsx)(tN.Dr, {
                                            id: "upload-file",
                                            label: E.intl.string(E.t["d3+iYs"]),
                                            iconLeft: tA.H,
                                            leadingAccessory: { type: "icon", icon: tA.H },
                                            action: () => _.current?.click(),
                                        }),
                                        null != h
                                            ? (0, n.jsx)(tN.Dr, {
                                                  id: "import-project",
                                                  label: E.intl.string(S.default.edKajy),
                                                  iconLeft: tw.q,
                                                  leadingAccessory: { type: "icon", icon: tw.q },
                                                  action: h,
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
                                ref: el,
                                type: "button",
                                className: `${tV.Y0} ${tV.nu}`,
                                disabled: !l,
                                "aria-label": E.intl.string(E.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": a,
                                children: (0, n.jsx)(tS.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tV.Qu,
                                }),
                            });
                        },
                    }),
                    null == K
                        ? null
                        : (0, n.jsx)("div", {
                              className: tV.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(tH, { text: K }),
                          }),
                    (0, n.jsx)(tE.y, {
                        value: j,
                        onChange: (e) => y(e.currentTarget.value),
                        onKeyDown: Y,
                        onPaste: X,
                        placeholder: s
                            ? E.intl.string(S.default.pGFXZ0)
                            : r
                              ? E.intl.string(S.default.JeM47J)
                              : l
                                ? eu
                                    ? ""
                                    : x
                                      ? E.intl.string(S.default.M3ovXY)
                                      : E.intl.string(i ? S.default["67PpcP"] : S.default.ahRdoJ)
                                : E.intl.string(S.default.nm4w9P),
                        disabled: !l,
                        "aria-label": E.intl.string(S.default.OPr66w),
                        rows: 1,
                        className: tV.jp,
                    }),
                    (0, n.jsx)("div", {
                        className: tV.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(eP.m, {
                                      text: E.intl.string(S.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${tV.Y0} ${tV.$E}`,
                                          disabled: M,
                                          onClick: Q,
                                          "aria-label": E.intl.string(S.default.KdgI4k),
                                          children: (0, n.jsx)(ey.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != p && null != v
                                  ? (0, n.jsx)(tU.A, {
                                        settings: p.settings,
                                        choices: p.choices,
                                        disabled: !l,
                                        onChange: v,
                                        className: `${tV.Y0} ${tV.$E}`,
                                        icon: (0, n.jsx)(tC.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    A
                        ? (0, n.jsxs)("div", {
                              className: tV.fF,
                              children: [
                                  (0, n.jsx)("div", { className: tV.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: tV.rt,
                                      disabled: !V,
                                      "aria-label": E.intl.string(S.default["22GHMt"]),
                                      children: (0, n.jsx)(tI.SendMessageIcon, {
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
let tY = 1500,
    tX = [
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
function tZ(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = tZ.mirror;
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
                (tZ.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of tX) t.style.setProperty(e, l.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let n = document.createElement("span");
    (n.textContent = "\u200B"), t.appendChild(n);
    let a = n.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function tJ(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(tB.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tV.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: tV.o1,
                onClick: () => l(t.localId),
                "aria-label": E.intl.string(S.default["3HWvgk"]),
                children: (0, n.jsx)(tT.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
tZ.mirror = null;
var t0 = l(320095),
    t1 = l(963852),
    t2 = l(521981),
    t7 = l(763754),
    t6 = l(491182),
    t3 = l(438729),
    t5 = l(622868),
    t4 = l(308334),
    t9 = l(837528),
    t8 = l(432433),
    le = l(715628),
    lt = l(752636),
    ll = l(9842),
    ln = l(589022),
    la = l(95701),
    lr = l(994500),
    li = l(967198),
    ls = l(803306);
let lo = new Set(),
    lu = new Map();
function ld(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
let lc = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lm(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lf(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lh(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lf(e, t),
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
    if (lm(a) && lm(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lm(lf(e, n)); ) l++, (n -= 2);
        return l % 2 == 1;
    }
    return !1;
}
function lg(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([tM.Ay], () => tM.Ay.useReducedMotion),
        r = l && !n,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        o = i;
    o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r); ) r++;
                      for (; r > 0 && lh(t, r); ) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== i && s(o);
    let u = r && o.length < e.length,
        d = a.useRef(o);
    a.useLayoutEffect(() => {
        d.current = o;
    });
    let c = a.useRef(0),
        m = a.useRef(0);
    a.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let l = 0 === m.current ? 32 : t - m.current;
                    if (l >= 32) {
                        m.current = t;
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
                                    for (; n > t + 1 && l - n < 12 && lc.has(e.charAt(n - 1)); ) n--;
                                    return lc.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lh(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        a.useEffect(() => {
            if (u)
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
        }, [u]);
    let f = Math.min(o.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: r && f < e.length };
}
var lx = l(441136);
let lp = (0, la.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    lv = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lj(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lx.Yq, { [lx.x1]: t }), children: e });
}
function lb(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function ly(e, t, l) {
    let { content: r } = (0, t8.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lp, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(t3.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, le.A)(i, r);
}
function lk(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, t9.m)(e, lp, t.usernameProfile, r),
        o = (0, t9.Jo)(t.avatarProfile, r),
        u = (0, D.bG)([li.A], () => li.A.getGuildId()),
        d = (0, D.bG)([ea.default], () => ea.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = ea.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(ln.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: i,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function lN(e) {
    let { baseMessage: t, referenced: l, onJumpToReplied: r } = e,
        i = a.useMemo(
            () => ("" !== l.content ? (0, t2.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [l],
        ),
        { isReplyAuthorBlocked: s, isReplyAuthorIgnored: o } = (0, D.cf)(
            [lr.A],
            () => ({
                isReplyAuthorBlocked: lr.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lr.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        u = (0, t7.X4)(l),
        d = (0, t7.X4)(t),
        c = lk(l);
    return (0, n.jsx)(t4.A, {
        repliedAuthor: u,
        baseAuthor: d,
        baseMessage: t,
        channel: lp,
        referencedMessage: { state: ll.a.LOADED, message: l },
        content: i,
        compact: !1,
        isReplyAuthorBlocked: s,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: c.renderPopout,
        showAvatarPopout: c.showAvatarPopout,
        showUsernamePopout: c.showUsernamePopout,
        onClickAvatar: c.onClickAvatar,
        onClickUsername: c.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: c.onPopoutRequestClose,
    });
}
function lA(e) {
    let { message: t, author: l } = e,
        a = lk(t);
    return (0, n.jsx)(t5.Ay, {
        message: t,
        channel: lp,
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
function lw(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || lo.has(e) || null != ea.default.getUser(e)) return;
                let t = lu.get(e) ?? 0;
                t >= 3 ||
                    (lu.set(e, t + 1),
                    lo.add(e),
                    ls
                        .getUser(e)
                        .finally(() => lo.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, D.bG)(
            [ea.default],
            () => ld(r, null != r ? ea.default.getUser(r) : null, ea.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, t7.FT)(o, null), [o]),
        d = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, t1.Ay)({ channelId: lp.id, content: t, author: o });
            return (0, t0.rh)({ ...e, timestamp: lb(l, e.timestamp), state: P.cmJ.SENT });
        }, [t, o, l]);
    return null == d ? null : (0, n.jsx)(lS, { message: d, author: u, content: t, accessories: i, groupStart: s });
}
function lS(e) {
    let { message: t, author: l, content: a, accessories: r, groupStart: i = !0 } = e,
        s = ly(t, a);
    return (0, n.jsx)(t6.A, {
        className: lx.yE,
        author: l,
        childrenHeader: i ? (0, n.jsx)(lA, { message: t, author: l }) : void 0,
        childrenMessageContent: s,
        childrenAccessories: lj(r, "" !== a),
        disableInteraction: !0,
    });
}
function lE(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lg(t, { streaming: u }),
        m = a.useMemo(() => (0, t7.FT)(null, null), []),
        f = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, D.bG)(
            [ea.default],
            () => ld(h, null != h ? ea.default.getUser(h) : null, ea.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, t1.Ay)({ channelId: lp.id, content: i.content, author: g });
            return (0, t0.rh)({ ...e, id: i.id, timestamp: lb(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, g]),
        p = a.useMemo(() => (null == i ? void 0 : { channel_id: lp.id, message_id: i.id }), [i]),
        v = a.useMemo(() => {
            let e = (0, t1.Ay)({ channelId: lp.id, content: d, author: lv });
            return (0, t0.rh)({
                ...e,
                timestamp: lb(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != p ? { type: P.lAJ.REPLY, message_reference: p } : {}),
            });
        }, [d, l, p]),
        j = ly(v, d, lx.OS);
    return (0, n.jsxs)("div", {
        className: lx.$4,
        "data-replying": null != x ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(t6.A, {
                className: lx.yE,
                author: f,
                childrenRepliedMessage:
                    null == x ? null : (0, n.jsx)(lN, { baseMessage: v, referenced: x, onJumpToReplied: s }),
                childrenHeader: (0, lt.A)({ message: v, channel: lp, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lj(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lx.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(F.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var lC = l(375068);
function lI(e) {
    let { projectId: t, messages: l, ref: r, onPickIdea: i } = e,
        s = a.useRef(null),
        o = a.useCallback(
            (e) => {
                (s.current = e), "function" == typeof r ? r(e) : null != r && (r.current = e);
            },
            [r],
        ),
        [u, d] = a.useState(null),
        c = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = a.useCallback((e) => {
            let t = s.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600));
        }, []),
        f = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    function l(e, l) {
                        t.push({ row: e, groupable: { key: e.key, ...l } });
                    }
                    for (let t of e) {
                        if ("user" === t.role) {
                            l(
                                { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                                { actor: "user", authorId: t.user_id, boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, ej.BL)(t),
                            n = eN({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, ev.C6)(t.steps, { turnActive: e }),
                            { lastWork: i, open: s } = (0, ev.CT)(r, { turnActive: e }),
                            o = r.at(-1)?.index;
                        for (let u of r) {
                            if (null != u.prose) {
                                let r = `${t.render_id}:${u.key}`;
                                l(
                                    {
                                        kind: "prose",
                                        key: r,
                                        message: t,
                                        groupStart: !1,
                                        content: u.prose.content,
                                        hostsAttachments:
                                            "streamed" === n.attachmentsHost &&
                                            u.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && u.index === o && !u.hasWork,
                                    },
                                    { actor: "assistant", boundary: r },
                                );
                            }
                            (u.hasWork || u.hasTodos) &&
                                l(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${u.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: u.index,
                                        active: u.index === s,
                                        closed: u.index !== s,
                                        ...(null != u.durationMs ? { segmentDurationMs: u.durationMs } : {}),
                                        reportsDuration: u.index === i,
                                        hostsChecklist: u.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        if (
                            (!0 === t.interrupted
                                ? l(
                                      {
                                          kind: "interrupted",
                                          key: `${t.render_id}:interrupted`,
                                          message: t,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : r.every((e) => !e.hasTodos) &&
                                  (t.todos?.length ?? 0) > 0 &&
                                  l(
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            n.showsClosingMessage ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === n.attachmentsHost)
                        ) {
                            let a = `${t.render_id}:closing`;
                            l(
                                {
                                    kind: "closing",
                                    key: a,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: n.attachmentsHost,
                                },
                                {
                                    actor: "assistant",
                                    boundary: a,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let n = (function (e) {
                        let t,
                            l,
                            n = [],
                            a = null,
                            r = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                n.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (l = void 0);
                                continue;
                            }
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                            e && ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                                n.push(e);
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: n[t] ?? !0 }));
                })(l),
            [l],
        );
    return 0 === l.length
        ? (0, n.jsx)("ol", {
              ref: r,
              className: lC.x7,
              children: (0, n.jsx)(lT, {
                  role: "assistant",
                  children: (0, n.jsx)(lE, { content: E.intl.string(S.default.khZEUv) }),
              }),
          })
        : (0, n.jsx)("ol", {
              ref: o,
              className: lC.x7,
              children: f.map((e) => {
                  let a = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                          return (0, n.jsx)(
                              lT,
                              {
                                  role: "user",
                                  anchorId: a.id,
                                  highlighted: u === a.id,
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lw, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != l ? (0, n.jsx)(eM.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, n.jsx)(
                              lT,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lE, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, n.jsx)(eM.A, { projectId: t, attachments: a.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, n.jsx)(
                              lT,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tv, {
                                      projectId: t,
                                      steps: a.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != a.finished_at ? a.finished_at - a.created_at : void 0,
                                      todos: a.todos,
                                      provisionalTodo: a.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, n.jsx)(
                              lT,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tv, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, n.jsx)(
                              lT,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tv, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: a.todos,
                                      provisionalTodo: a.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, n.jsx)(
                              lT,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lE, {
                                      groupStart: e.groupStart,
                                      content: a.content,
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
                                      onJumpToReplied: null != a.in_reply_to ? () => m(a.in_reply_to) : void 0,
                                      accessories: (0, n.jsx)(tj, {
                                          projectId: t,
                                          steps: a.steps,
                                          announcement: a.announcement,
                                          content: "",
                                          proposal: a.proposal,
                                          interrupted: !0 === a.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: a.ideas,
                                          pickedIdeaIds:
                                              null == a.ideas
                                                  ? void 0
                                                  : (function (e, t, l) {
                                                        let n = new Set();
                                                        for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                            let t = e[a];
                                                            if ("user" === t.role)
                                                                for (let e of l)
                                                                    e.implementation_prompt.trim() ===
                                                                        t.content.trim() && n.add(e.id);
                                                        }
                                                        return n;
                                                    })(l, a, a.ideas),
                                          attachments: a.attachments,
                                          secretRequest: a.secretRequest,
                                          settingsRequest: a.settingsRequest,
                                          onPickIdea: i,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function lT(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(lC.xk, { [lC.Qo]: r, [lC.q3]: s }),
        children: l,
    });
}
var lM = l(625903),
    lP = l(964675);
function l_(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([c.Ay], () => null != c.Ay.getSettings(t), [t]),
        r = a.useCallback(() => {
            (0, eH.A)(t);
        }, [t]);
    return l
        ? (0, n.jsx)(eA.D, {
              className: lP.h,
              "aria-label": E.intl.string(S.default.gTMvzD),
              onClick: r,
              children: (0, n.jsx)(lM.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lR = l(863610),
    lL = l(495557);
function lD(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = lg(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lL.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ep.Ch, {
                ref: o,
                className: lL.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tx.PT, lL.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: ek.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lF = l(921461);
function l$(e) {
    let { activity: t, compacting: l = !1, restoring: r = !1, controlling: s = !1 } = e,
        o = a.useRef(null),
        u = a.useId(),
        [d, c] = a.useState(null),
        m = null != t && "end" !== t.phase,
        f = s
            ? S.default.ivvYHP
            : r
              ? S.default.aFffp2
              : l
                ? S.default["0vH/5G"]
                : m
                  ? S.default.Ly7F7x
                  : S.default.QDGuNS,
        h = null != t && "" !== t.text,
        g = t?.session ?? null,
        x = h && null != g && d === g,
        v = a.useCallback(() => {
            h && null != g && c((e) => (e === g ? null : g));
        }, [h, g]),
        j = a.useCallback(() => c(null), []);
    return (0, n.jsx)(ty.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: x,
        onRequestClose: j,
        renderPopout: () => (0, n.jsx)(lD, { id: u, activity: t }),
        children: () =>
            (0, n.jsxs)(eA.D, {
                innerRef: o,
                className: i()(lF.hF, h && lF.Xd),
                "aria-label": E.intl.string(r ? S.default.pGFXZ0 : S.default.SzdX35),
                "aria-expanded": x,
                "aria-describedby": x ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: v,
                children: [
                    (0, n.jsx)("span", {
                        className: lF.bl,
                        children: (0, n.jsx)(lR.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, n.jsx)(p.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!s || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: E.intl.string(f),
                    }),
                ],
            }),
    });
}
var lq = l(280894);
function lO(e) {
    return e.toLocaleString();
}
function lz(e) {
    let { label: t, usage: l } = e;
    return (0, n.jsxs)("div", {
        className: lq.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: lq.mf,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lO((0, tP.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(p.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lO(l.input_tokens),
                    " in \xb7 ",
                    lO(l.output_tokens),
                    " out \xb7 ",
                    lO(l.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    lO(l.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function lG(e) {
    let { project: t } = e,
        l = (0, tP.wU)(t.compaction),
        a = (0, tP.wV)((0, tP.wV)(t.orchestrator, t.codegen), l);
    return (0, n.jsxs)("div", {
        className: lq.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: lq.Q$,
                children: (0, n.jsxs)("div", {
                    className: lq.mf,
                    children: [
                        (0, n.jsxs)(p.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lO((0, tP.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(lz, { label: E.intl.string(S.default.hk4jJr), usage: t.orchestrator }),
            (0, n.jsx)(lz, { label: E.intl.string(S.default.R9aduM), usage: t.codegen }),
            (0, n.jsx)(lz, { label: E.intl.string(S.default.Tj6b30), usage: l }),
            (0, n.jsxs)("div", {
                className: lq.mf,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["kILb+R"]),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tP.sj)(a) ? "\u2014" : `${Math.round(100 * (0, tP.CA)(a))}%`,
                    }),
                ],
            }),
        ],
    });
}
function lB(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(ty.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(lG, { project: t }),
        children: (e) =>
            (0, n.jsx)(eA.D, {
                innerRef: l,
                className: lq.Y$,
                "aria-label": E.intl.string(S.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(e_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lU = l(985451),
    lV = l(258216);
function lW(e) {
    switch (e) {
        case "connecting":
            return E.intl.string(S.default.W7oyuf);
        case "failed":
            return E.intl.string(S.default.eE60xI);
        case "closed":
            return E.intl.string(S.default["yBmS+I"]);
    }
}
function lH(e) {
    let {
            projectId: t,
            thinking: l,
            restoring: a = !1,
            thinkingActivity: r,
            compacting: i,
            projectUsage: s,
            connState: o,
        } = e,
        u = (0, lU.o4)(t);
    return (0, n.jsxs)("div", {
        className: lV.jf,
        children: [
            (0, n.jsx)("div", {
                className: lV.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    l || a || u ? (0, n.jsx)(l$, { activity: r, compacting: i, restoring: a, controlling: u }) : null,
            }),
            (0, n.jsx)(l_, { projectId: t }),
            null == s
                ? null
                : (0, n.jsxs)("span", {
                      className: lV.BP,
                      children: [
                          (0, n.jsx)(p.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": E.intl.formatToPlainString(S.default["7SZZvj"], {
                                  runes: (0, tP.a7)(s.cost_usd),
                                  turns: s.turns,
                              }),
                              children: E.intl.formatToPlainString(S.default["4PFO2p"], {
                                  runes: (0, tP.a7)(s.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, n.jsx)(lB, { project: s }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, n.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default.eDDdhB, { status: lW(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: lV.XF,
                      children: lW(o),
                  }),
        ],
    });
}
var lQ = l(22231),
    lK = l(408278),
    lY = l(900797),
    lX = l(847374),
    lZ = l(477155),
    lJ = l(935286),
    l0 = l(856795),
    l1 = l(424110);
function l2(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eA.D, {
        className: i()(l1.uK, { [l1.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": E.intl.formatToPlainString(d ? S.default.aL1BKQ : S.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: l1.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: l1.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: l1.l8,
                        children: (0, n.jsx)(p.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l1.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, n.jsx)(p.E, {
                              tag: "span",
                              id: u,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, n.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: l1.rM,
                      children: E.intl.string(S.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function l7(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(l1.Ge, l1.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(l2, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: l1.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: l1.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(lQ.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(l1.Pu, l1.es), children: s }),
                ],
            }),
        ],
    });
}
function l6(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [o, u] = a.useState({}),
        [d, c] = a.useState({}),
        [m, f] = a.useState(0),
        [h, g] = a.useState(null),
        [x, v] = a.useState(null),
        [j, b] = a.useState(null),
        [y, k] = a.useState(!1),
        N = a.useRef(null),
        [A, w] = a.useState(null),
        C = a.useRef(null),
        I = a.useRef(0),
        T = null == l,
        M = t.questions.length,
        P = Math.min(m, M - 1),
        _ = t.questions[P],
        [R, L] = a.useState({ id: _.id, expanded: !1 }),
        D = R.id === _.id && R.expanded,
        [F, $] = a.useState(null),
        q = d[_.id] ?? "",
        { text: O, phase: z } = (0, l0.Q)(_.question),
        G = O === _.question,
        B = G && F?.id === _.id && F.truncated;
    a.useLayoutEffect(() => {
        if (null == A || D || !G) return;
        function e() {
            if (null == A) return;
            let e = A.scrollHeight > A.clientHeight + 1;
            $((t) => (t?.id === _.id && t.truncated === e ? t : { id: _.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return t.observe(A), () => t.disconnect();
    }, [G, A, _.id, D]);
    let U = E.intl.string(D ? E.t.iTcuma : E.t.dcl9MQ),
        V = a.useCallback(
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
                "" !== n && l(n);
            },
            [t, l],
        ),
        W = a.useCallback(
            (e, t) => {
                I.current += 1;
                let l = I.current;
                g({ direction: t, moves: l }), v({ question: _, draft: q, direction: t, moves: l }), k(!0), f(e);
            },
            [q, _],
        ),
        H = a.useCallback(() => {
            let e = N.current,
                t = C.current;
            null != e && null != t && b({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = N.current,
            t = C.current;
        if (null == e || null == t) return;
        H();
        let l = new ResizeObserver(H);
        return l.observe(e), l.observe(t), () => l.disconnect();
    }, [H]);
    let Q = h?.moves;
    a.useEffect(() => {
        if (null == Q) return;
        let e = setTimeout(() => v(null), 400),
            t = setTimeout(() => k(!1), 500);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [Q]);
    let K = a.useCallback(
            (e) => {
                if (T) return;
                let l = { ...o, [_.id]: e };
                u(l);
                let n = (function (e, t, l) {
                    let { questions: n } = e;
                    for (let e = 1; e <= n.length; e++) {
                        let a = (l + e) % n.length,
                            r = t[n[a].id];
                        if (null == r || "" === r.text.trim()) return a;
                    }
                    return null;
                })(t, l, P);
                null == n ? V(l) : W(n, n < P ? "back" : "forward");
            },
            [o, t, T, P, _.id, V, W],
        ),
        Y = a.useCallback(() => {
            if (T || 0 === P) return;
            let e = t.questions[P - 1];
            u((t) => {
                let l = { ...t };
                return delete l[e.id], l;
            }),
                c((t) => {
                    let l = { ...t };
                    return delete l[e.id], l;
                }),
                W(P - 1, "back");
        }, [t, T, P, W]),
        X = P > 0 && !T,
        Z = a.useCallback(() => {
            let e = q.trim();
            "" !== e && K({ kind: "custom", text: e });
        }, [q, K]),
        [J, ee] = a.useState(!1),
        [et, el] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let en = a.useCallback(() => {
            null != r && (el(!0), setTimeout(r, 150));
        }, [r]),
        ea = a.useCallback(() => {
            T || P >= M - 1 || W(P + 1, "forward");
        }, [T, P, M, W]),
        er = P < M - 1 && !T;
    return (0, n.jsxs)("section", {
        className: i()(l1.$O, { [l1.fI]: J && !et, [l1.Oh]: et }),
        role: "dialog",
        "aria-label": _.question,
        "data-vibegrations-clarification": t.id,
        "data-state": T ? "inert" : "open",
        "data-question-expanded": D ? "true" : void 0,
        "data-step": P,
        children: [
            (0, n.jsxs)("div", {
                className: l1.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: N,
                        className: l1.wx,
                        children: [
                            (0, n.jsx)(p.E, {
                                ref: w,
                                tag: "span",
                                id: `${_.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: D ? void 0 : 5,
                                className: i()(l1.TK, l1.R_, { [l1.TB]: "exit" === z, [l1.JU]: "enter" === z }),
                                children: O,
                            }),
                            B || D
                                ? (0, n.jsx)("div", {
                                      className: l1.Q7,
                                      children: (0, n.jsx)(eP.m, {
                                          text: U,
                                          children: (0, n.jsx)(lK.K, {
                                              icon: D ? lY.t : lX.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: _.id, expanded: !D }),
                                              "aria-label": U,
                                              "aria-controls": `${_.id}-label`,
                                              "aria-expanded": D,
                                          }),
                                      }),
                                  })
                                : null,
                            null == r
                                ? null
                                : (0, n.jsx)(eA.D, {
                                      className: i()(l1.gb, l1.Q7),
                                      onClick: en,
                                      "aria-label": E.intl.string(S.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, n.jsx)(s.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: l1.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, n.jsxs)("div", {
                            className: l1.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: C,
                                    className: l1.Ge,
                                    role: "group",
                                    "aria-labelledby": `${_.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        _.options.map((e, t) =>
                                            (0, n.jsx)(
                                                l2,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: T,
                                                    onPick: (e) => K({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: l1.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: l1.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(lQ.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tE.y, {
                                                    value: q,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [_.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), Z());
                                                    },
                                                    placeholder: E.intl.string(S.default.qifsdL),
                                                    "aria-label": E.intl.formatToPlainString(S.default.XHESTL, {
                                                        question: _.question,
                                                    }),
                                                    disabled: T,
                                                    rows: 1,
                                                    className: l1.Pu,
                                                    "data-vibegrations-clarification-other": _.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, n.jsx)(
                                          l7,
                                          { question: x.question, draft: x.draft, direction: x.direction, disabled: T },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            M > 1
                ? (0, n.jsxs)("div", {
                      className: l1.qr,
                      children: [
                          (0, n.jsx)(p.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: E.intl.formatToPlainString(S.default["7bypa+"], { index: P + 1, total: M }),
                          }),
                          (0, n.jsxs)("div", {
                              className: l1.Np,
                              children: [
                                  (0, n.jsx)(eA.D, {
                                      className: i()(l1.gb, { [l1.yI]: !X }),
                                      onClick: X ? Y : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": T,
                                      "aria-label": E.intl.string(S.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, n.jsx)(lZ.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eA.D, {
                                      className: i()(l1.gb, { [l1.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": T,
                                      "aria-label": E.intl.string(S.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(lJ.E, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var l3 = l(643278),
    l5 = l(191521),
    l4 = l(405189);
function l9(e) {
    let { line: t, placement: l, todos: r, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        d = null != l,
        [c, m] = a.useState(l ?? "top"),
        [f, h] = a.useState(d),
        [g, x] = a.useState(!1),
        [p, v] = a.useState(!1),
        [j, b] = a.useState(d);
    j !== d && (b(d), null != l ? (m(l), h(!0)) : (x(!1), v(!1))),
        a.useEffect(() => {
            if (d || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [d, f]),
        a.useEffect(() => {
            if (!f || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [f, d]);
    let [y, k] = a.useState(!1),
        [N, A] = a.useState(!1),
        [w, C] = a.useState(p);
    w !== p && (C(p), p ? k(!0) : A(!1)),
        a.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        a.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => A(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, p]);
    let I = null != r && r.length > 0,
        T = a.useCallback(() => v((e) => !e), []);
    return f
        ? (0, n.jsxs)("div", {
              className: l4.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(l4.vK, { [l4.ho]: g && d, [l4.ET]: !d }),
                      children: [
                          null == u
                              ? (0, n.jsx)("ol", {
                                    className: i()(l4.Rk, tr.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(eY.A, {
                                        glyph: (0, n.jsx)(l5.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eA.D, {
                                    className: l4.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(l4.Rk, tr.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(eY.A, {
                                            glyph: (0, n.jsx)(l5.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, n.jsx)(eP.m, {
                                    text: E.intl.string(S.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eA.D, {
                                        className: l4.BO,
                                        onClick: T,
                                        "aria-expanded": p,
                                        "aria-label": E.intl.string(S.default.qCRC6c),
                                        children: (0, n.jsx)(l3.ClipboardListIcon, {
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
                  y && I
                      ? (0, n.jsx)("div", {
                            className: i()(l4.vB, { [l4.pg]: p && N, [l4.ui]: !p }),
                            children: (0, n.jsx)(th, { todos: r, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var l8 = l(366010),
    ne = l(825484),
    nt = l(859703),
    nl = l(738822),
    nn = l(291749),
    na = l(971276),
    nr = l(590202),
    ni = l(710969),
    ns = l(792620),
    no = l(130490),
    nu = l(617986),
    nd = l(363195),
    nc = l(749414);
let nm = !1;
function nf(e) {
    let t,
        l,
        r,
        { open: i } = e,
        s =
            ((t = (0, no.dN)()),
            (l = (0, D.bG)([nt.A], () => nt.A.isQuestAccessSuspended || null != nt.A.questEnrollmentBlockedUntil, [])),
            (r = (0, D.bG)([nt.A], () => null != nt.A.getQuestPreviewOverride(nl.uF.QUEST_BAR_V2), [])),
            null != t && (0, ns.vv)(t)
                ? r
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, na.s)() || l || (0, ni.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = a.useState(() => nm),
        { mounted: d, closing: c } = (function (e) {
            let [t, l] = a.useState(e),
                [n, r] = a.useState(!1),
                i = a.useRef(null);
            return (
                e && (!t || n) ? (l(!0), r(!1)) : e || !t || n || r(!0),
                a.useEffect(() => {
                    if (!e && t)
                        return (
                            (i.current = setTimeout(() => {
                                (i.current = null), r(!1), l(!1);
                            }, 150)),
                            () => {
                                null != i.current && (clearTimeout(i.current), (i.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: n }
            );
        })(i && !o && null != s),
        [m, h] = a.useState(s);
    null != s && s !== m && h(s);
    let g = s ?? m,
        x = (0, D.bG)([nd.A], () => nd.A.getState().theme),
        v = (0, l8.M)(x) ? P.NJ8.DARK : P.NJ8.LIGHT,
        j = null != g ? (0, nn.tW)(g, nn.fY.GAME_TILE, v).url : null,
        b = null != j && "" !== j ? j : null,
        y = a.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: nl.uF.QUEST_BAR_V2,
                sourceQuestContent: nl.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: nr.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, nu.d5)({ quest: s, ...e })
                : await (0, nu.e0)(s, { ...e, questContentCTA: nr.Cy.ACCEPT_QUEST });
        }, [s]),
        k = a.useCallback(() => {
            (nm = !0), u(!0);
        }, []);
    return d && null != g
        ? (0, n.jsxs)("aside", {
              className: nc.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, n.jsxs)("div", {
                            className: nc.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("img", { className: nc.Rx, src: b, alt: "" }),
                                (0, n.jsx)("div", { className: nc._e }),
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: nc.iB,
                      children: [
                          null != b ? (0, n.jsx)("img", { className: nc.w1, src: b, alt: "" }) : null,
                          (0, n.jsxs)("div", {
                              className: nc.Ug,
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: E.intl.string(S.default["09LJ+I"]),
                                  }),
                                  (0, n.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: E.intl.format(E.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsxs)(ne.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, n.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: E.intl.string(S.default.egO5fO),
                          }),
                          (0, n.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: E.intl.string(E.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var nh = l(651649),
    ng = l(670455);
let nx = "shownVibegrationsFeedbackProjectIds";
var np = l(348800);
let nv = [E.intl.string(S.default["E+Q26x"]), E.intl.string(S.default["06/jqP"]), E.intl.string(S.default["3gSfUa"])];
function nj(e) {
    let { projectId: t, restoreState: r } = e,
        i = (0, D.bG)([ej.Ay], () => ej.Ay.getMessages(t), [t]),
        s = (0, D.bG)([c.Ay], () => c.Ay.getConnState(t), [t]),
        o = (0, D.bG)([c.Ay], () => c.Ay.isChatStopped(t), [t]),
        u = (0, D.bG)([ej.Ay], () => ej.Ay.getProjectUsage(t), [t]),
        d = (0, D.bG)([ej.Ay], () => ej.Ay.getThinkingActivity(t), [t]),
        m = (0, D.bG)([ej.Ay], () => ej.Ay.isCompacting(t), [t]),
        f = (0, D.bG)([c.Ay], () => c.Ay.getModelSettings(t), [t]),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(!0),
        [v, j] = a.useState(!0);
    a.useEffect(() => {
        p.current && g.current?.scrollToBottom();
    }, [i]);
    let b = a.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        y = a.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            p.current = t < 32;
            let l = t > 1;
            j((e) => (!l === e ? e : !l));
        }, []);
    a.useLayoutEffect(() => {
        let e = h.current,
            t = x.current;
        if (null == e) return;
        let l = g.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            p.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let i of t)
                if (i.target === e) {
                    let e = i.contentRect.width;
                    if (e === n) continue;
                    (n = e), s();
                } else if (i.target === l) {
                    let e = i.contentRect.height;
                    if (e === r) continue;
                    (r = e), s();
                } else {
                    let e = i.contentRect.height;
                    if (e === a) continue;
                    (a = e), s();
                }
        });
        return (
            o.observe(e),
            null != l && o.observe(l),
            null != t && o.observe(t),
            () => {
                o.disconnect(), null != i && cancelAnimationFrame(i);
            }
        );
    }, []),
        a.useEffect(() => {
            (0, c.Hc)(t);
        }, [t]),
        a.useEffect(
            () => () =>
                (function (e) {
                    let t = ej.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ej.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tL.w.get(nx) ?? []).includes(e) ||
                            nh.A.possiblyShowFeedbackModal(ng.MW.VIBEGRATIONS, () => {
                                let a;
                                (a = tL.w.get(nx) ?? []).includes(e) || tL.w.set(nx, [...a, e]),
                                    (0, eU.openModalLazy)(async () => {
                                        let { default: a } = await Promise.all([
                                            l.e("312513"),
                                            l.e("36395"),
                                            l.e("155925"),
                                            l.e("218413"),
                                            l.e("137381"),
                                            l.e("847004"),
                                            l.e("341676"),
                                        ]).then(l.bind(l, 580711));
                                        return (l) => (0, n.jsx)(a, { ...l, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let k = a.useCallback(
            (e, l) => {
                (0, c.dv)(t, e, l);
            },
            [t],
        ),
        N = a.useCallback(() => (0, c.fu)(t), [t]),
        A = a.useCallback((e) => k(e.implementation_prompt), [k]),
        w = a.useCallback((e) => k(e), [k]),
        C = a.useCallback((e) => (0, c.XZ)(t, e), [t]),
        I = a.useCallback((e) => (0, c.vX)(t, e), [t]),
        T = a.useCallback((e) => (0, c.Vm)(t, e), [t]),
        M = a.useCallback(() => k(E.intl.string(S.default.Jj8Ftb)), [k]),
        P = r?.status === "restoring",
        _ = "open" === s && !o && !P,
        R = i[i.length - 1],
        L = null != R && "assistant" === R.role && null != R.proposal,
        [F, $] = a.useState(null),
        q = R?.clarification != null && R.clarification.id !== F ? R.clarification : null,
        O = a.useCallback(() => {
            null != q && $(q.id);
        }, [q]),
        z = (0, D.bG)([ej.Ay], () => ej.Ay.hasLoadedHistory(t), [t]),
        G = a.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return nv[e % nv.length];
        }, [t]),
        B = L
            ? E.intl.string(S.default.Jj8Ftb)
            : R?.kind === "plan_implemented"
              ? E.intl.string(S.default["3sTTBu"])
              : z && 0 === i.length
                ? G
                : null,
        U = a.useMemo(() => {
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                if ("assistant" === t.role && !(0, ej.BL)(t)) return t;
            }
        }, [i]),
        V = null != U,
        W = L && _ ? M : void 0,
        [H, Q] = a.useState(null),
        [K, Y] = a.useState(V);
    K !== V && (Y(V), V || Q(null)),
        a.useEffect(() => {
            if (!V) return;
            let e = g.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Q(null)
                        : Q(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return l.observe(t), () => l.disconnect();
        }, [V, U?.steps]);
    let X = a.useMemo(() => (null != U ? (0, eb.b9)(U.steps) : ""), [U]),
        Z = a.useMemo(() => (null != U ? ((0, ev.lt)(U.steps) ?? U.todos) : void 0), [U]),
        J = U?.provisionalTodo,
        ee = a.useMemo(() => {
            var e;
            return null != U ? ((e = U.steps), tp((0, ev.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [U]);
    return (0, n.jsxs)("section", {
        ref: h,
        "data-vibegrations-chat": !0,
        className: np.TE,
        children: [
            (0, n.jsx)(nf, { open: null != U }),
            (0, n.jsx)(l9, {
                onJumpToActivity: b,
                line: X,
                placement: V && "top" === H ? "top" : null,
                todos: Z,
                provisionalTodo: J,
                agents: ee,
            }),
            (0, n.jsxs)("div", {
                className: np.JX,
                children: [
                    (0, n.jsx)(ep.Ch, {
                        ref: g,
                        onScroll: y,
                        className: v ? np.N$ : `${np.N$} ${np.hB}`,
                        children: (0, n.jsx)(lI, { ref: x, projectId: t, messages: i, onPickIdea: _ ? A : void 0 }),
                    }),
                    (0, n.jsx)("div", {
                        className: np.NJ,
                        children: (0, n.jsx)(lH, {
                            projectId: t,
                            thinking: V,
                            restoring: P,
                            thinkingActivity: d,
                            compacting: m,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == q
                        ? null
                        : (0, n.jsx)("div", {
                              className: np.B5,
                              children: (0, n.jsx)(
                                  l6,
                                  { clarification: q, onSubmit: _ ? w : void 0, onDismiss: O },
                                  q.id,
                              ),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: np.Jx,
                children: [
                    (0, n.jsx)(l9, {
                        onJumpToActivity: b,
                        line: X,
                        placement: V && "bottom" === H ? "bottom" : null,
                        todos: Z,
                        provisionalTodo: J,
                        agents: ee,
                    }),
                    (0, n.jsx)(tK, {
                        projectId: t,
                        canSend: _,
                        stopped: o,
                        running: V,
                        restoring: P,
                        onSend: k,
                        onInterrupt: _ ? N : void 0,
                        onUploadFile: I,
                        onDeleteFile: T,
                        onApprove: W,
                        suggestion: B,
                        questionOpen: null != q,
                        modelSettings: f,
                        onModelSettingsChange: C,
                    }),
                ],
            }),
        ],
    });
}
var nb = l(661531),
    ny = l(602853),
    nk = l(517461),
    nN = l(761929),
    nA = l(927506);
function nw(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, ny.r)(nb.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nk.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = a.useState(u ?? 460),
        f = (0, t_.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? f + s : 0);
    }, [f, t, s, r]);
    let h = (0, nN.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nN.R.HORIZONTAL_LEFT,
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
        className: nA.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: nA.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: o, className: nA.kL, style: { width: f }, children: i }),
        ],
    });
}
var nS = l(691540),
    nE = l(857250),
    nC = l(97483),
    nI = l(624479),
    nT = l(92446),
    nM = l(761508),
    nP = l(540999),
    n_ = l(957565);
let nR = [],
    nL = new Map(),
    nD = new Map(),
    nF = new Map(),
    n$ = new Map(),
    nq = new Map(),
    nO = new Map();
class nz extends D.Ay.Store {
    getStatus(e) {
        return nL.get(e) ?? null;
    }
    getFetchState(e) {
        return nD.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nF.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return nq.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return n$.get(e) ?? null;
    }
    getModelCalls(e) {
        return nO.get(e) ?? nR;
    }
}
let nG = new nz(tD.h, {
    LOGOUT: function () {
        if (0 === nL.size && 0 === nD.size && 0 === nF.size && 0 === n$.size && 0 === nq.size && 0 === nO.size)
            return !1;
        nL.clear(), nD.clear(), nF.clear(), n$.clear(), nq.clear(), nO.clear();
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nD.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l || "loading" !== nD.get(t)) return !1;
        nD.set(t, "failed");
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nD.set(t, "failed") : (nL.set(t, l), nD.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nF.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        n$.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = nO.get(e.projectId);
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
        nO.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, tP.aM)(l.total)) return !1;
        nq.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        nL.delete(t), nD.delete(t), nF.delete(t), n$.delete(t), nq.delete(t), nO.delete(t);
    },
});
var nB = l(972786);
function nU(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function nV(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function nW(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function nH(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function nQ(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function nK(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
var nY = l(69985);
function nX(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: nY.KE,
        children: [
            (0, n.jsx)("div", {
                className: nY.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: E.intl.string(S.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(p.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.formatToPlainString(S.default["4NpaEk"], { time: nQ(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(f.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.aw0IJm), onClick: a }),
        ],
    });
}
function nZ(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: nY.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(p.E, { variant: "text-xs/semibold", color: "text-muted", className: nY.Gf, children: t }),
            l,
        ],
    });
}
function nJ(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: nY.N8,
        children: [
            (0, n.jsxs)("div", {
                className: nY.x7,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != a && (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
        ],
    });
}
function n0(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: nY.N8,
        children: [
            (0, n.jsxs)("div", {
                className: nY.x7,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(l)} / ${r(a)}`,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: nY.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? nY.aV : nY.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function n1(e) {
    switch (e.reason) {
        case "local":
            return E.intl.string(S.default.M7Vn6y);
        case "unconfigured":
            return E.intl.string(S.default.QirpMl);
        case "unauthorized":
            return E.intl.string(S.default.QZ1e4l);
        default:
            return null != e.detail
                ? E.intl.formatToPlainString(S.default.zUTHf7, { detail: e.detail })
                : E.intl.string(S.default.WIAQes);
    }
}
function n2(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default.SBkDIZ, {
              p50: nU(e.memory_p50_bytes ?? 0),
              p999: nU(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let n7 = {
    db: () => S.default.r6cciE,
    db_preview: () => S.default.JmIyL8,
    runtime: () => S.default.bzNyv8,
    runtime_preview: () => S.default["LONZ/8"],
    bot: () => S.default.jdpw3A,
    bot_preview: () => S.default["/g6wUz"],
};
function n6(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(nJ, {
            label: E.intl.string(S.default.H6PMwW),
            value: E.intl.string(S.default.TLOZ8J),
            hint: n1(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(nJ, {
            label: E.intl.string(S.default.H6PMwW),
            value: "\u2014",
            hint: E.intl.string(S.default.uAzxdh),
        });
    let a = n2(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(nJ, { label: E.intl.string(S.default.awAqRi), value: nV(l.cpu_ms) }),
            null != a && (0, n.jsx)(nJ, { label: E.intl.string(S.default.WdGviA), value: a }),
        ],
    });
}
function n3(e) {
    let { analytics: t } = e,
        l = E.intl.string(S.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(nZ, {
            title: l,
            children: (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: n1(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? n7[t] : null) ? E.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(nZ, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(p.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          nJ,
                          {
                              label: l,
                              value: E.intl.formatToPlainString(S.default.AnRynJ, { cpu: nV(t.cpu_ms) }),
                              hint: n2(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var n5 = l(522652);
let n4 = new Set(["error", "aborted", "length"]),
    n9 = [];
function n8(e) {
    let { call: t } = e,
        l = null != t.stopReason && n4.has(t.stopReason),
        a = [
            null != t.durationMs ? nV(t.durationMs) : null,
            `${nW(t.inputTokens + t.cacheReadTokens + t.cacheWriteTokens)} \u{2192} ${nW(t.outputTokens)}`,
            l ? t.stopReason : null,
        ]
            .filter((e) => null != e)
            .join(" \xb7 ");
    return (0, n.jsxs)("div", {
        className: n5.p5,
        children: [
            (0, n.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: n5.Q5,
                children: nH(t.observedAt),
            }),
            (0, n.jsxs)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: n5.qN,
                children: [t.role, " \xb7 ", t.model],
            }),
            (0, n.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: l ? "text-feedback-critical" : "text-muted",
                children: a,
            }),
        ],
    });
}
function ae(e, t) {
    return (0, n.jsx)(nJ, {
        label: e,
        value: E.intl.formatToPlainString(S.default.U98VaN, { count: nW((0, tP.aM)(t)) }),
        hint: `${nW(t.input_tokens)} in \xb7 ${nW(t.output_tokens)} out \xb7 ${nW(t.cache_read_input_tokens)} cache read`,
    });
}
function at(e) {
    let { projectId: t, status: l, fetchState: a, onRefresh: r, traceVisible: i = !1 } = e,
        s = (0, D.bG)([nG], () => nG.getLastTurnUsage(t), [t]),
        o = (0, D.bG)([nG], () => nG.getLastCompaction(t), [t]),
        u = (0, D.bG)([nG], () => nG.getLastCompactionDecline(t), [t]),
        d = (0, D.bG)([nG], () => (i ? n9 : nG.getModelCalls(t)), [t, i]),
        c = l?.agent?.lifetime ?? null,
        m = l?.agent?.limits ?? null,
        f = l?.agent?.session ?? null,
        h = o?.promptCeiling ?? m?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: n5.Mf,
        children: [
            (0, n.jsx)(nX, { generatedAt: l?.generated_at ?? null, fetchState: a, onRefresh: r }),
            (0, n.jsx)(nZ, {
                title: E.intl.string(S.default.IYpHtT),
                children:
                    null == c
                        ? (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(nJ, {
                                      label: E.intl.string(S.default["8MSJDH"]),
                                      value: nW((0, tP.a7)(c.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default["6Z2KhK"], { count: nW(c.turns) }),
                                  }),
                                  ae(E.intl.string(S.default.hk4jJr), c.orchestrator),
                                  ae(E.intl.string(S.default.R9aduM), c.codegen),
                                  ae(E.intl.string(S.default.Tj6b30), (0, tP.wU)(c.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(nJ, {
                                          label: E.intl.string(S.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${nW(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(nZ, {
                title: E.intl.string(S.default.lo4mY6),
                children:
                    null == s
                        ? (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  ae(E.intl.string(S.default["VwF+oY"]), s.total),
                                  (0, n.jsx)(nJ, {
                                      label: E.intl.string(S.default["kILb+R"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, tP.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(nZ, {
                title: E.intl.string(S.default.mn8279),
                children: [
                    null != o && null != h
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(n0, {
                                      label: E.intl.string(S.default.dKFhCg),
                                      used: o.tokensAfter,
                                      max: h,
                                      formatValue: nW,
                                  }),
                                  (0, n.jsx)(nJ, {
                                      label: E.intl.string(S.default.ntZb8d),
                                      value: `${nW(o.tokensBefore)} \u{2192} ${nW(o.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.jA05ru, {
                                          count: nW(o.retainedMessages),
                                          time: nQ(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != h
                                      ? E.intl.formatToPlainString(S.default.LKGmsP, { ceiling: nW(h) })
                                      : E.intl.string(S.default.gPabB9),
                          }),
                    null != u &&
                        (0, n.jsx)(nJ, {
                            label: E.intl.string(S.default["se+2ls"]),
                            value: `${nW(u.projected)} / ${nW(u.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default.KHK44U, { time: nQ(u.observedAt) }),
                        }),
                ],
            }),
            !i &&
                (0, n.jsx)(nZ, {
                    title: E.intl.string(S.default.F5eP7e),
                    children:
                        0 === d.length
                            ? (0, n.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(S.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      d
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(n8, { call: e }, e.id)),
                                      d.length > 30 &&
                                          (0, n.jsx)(p.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: E.intl.formatToPlainString(S.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: d.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != f || l?.analytics != null) &&
                (0, n.jsxs)(nZ, {
                    title: E.intl.string(S.default.ZRxAPD),
                    children: [
                        null != f &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(nJ, {
                                        label: E.intl.string(S.default["wt5X/o"]),
                                        value: nQ(f.instance_since),
                                        hint: E.intl.string(S.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(nJ, { label: E.intl.string(S.default["4lgurx"]), value: nW(f.sockets) }),
                                    (0, n.jsx)(nJ, {
                                        label: E.intl.string(S.default["a/LXBt"]),
                                        value: f.turn_inflight
                                            ? E.intl.string(S.default["9KlveJ"])
                                            : E.intl.string(S.default["4tYZVa"]),
                                    }),
                                    f.queued_messages > 0 &&
                                        (0, n.jsx)(nJ, {
                                            label: E.intl.string(S.default["/hOBkc"]),
                                            value: nW(f.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(n6, { analytics: l.analytics }),
                    ],
                }),
            null != m &&
                (0, n.jsxs)(nZ, {
                    title: E.intl.string(S.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(nJ, { label: E.intl.string(S.default["5iHZLk"]), value: nW(m.max_iterations) }),
                        (0, n.jsx)(nJ, {
                            label: E.intl.string(S.default.Rb6m3E),
                            value: nW(m.max_subagent_iterations),
                        }),
                        (0, n.jsx)(nJ, {
                            label: E.intl.string(S.default.WQ9pMe),
                            value: E.intl.formatToPlainString(S.default.U98VaN, { count: nW(m.context_window_tokens) }),
                        }),
                        (0, n.jsx)(nJ, {
                            label: E.intl.string(S.default.iEAvzu),
                            value: E.intl.formatToPlainString(S.default.U98VaN, {
                                count: nW(m.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(nJ, {
                            label: E.intl.string(S.default["jbhs+f"]),
                            value: nW(m.max_user_message_chars),
                        }),
                        (0, n.jsx)(nJ, { label: E.intl.string(S.default.TOQnq4), value: nW(m.max_build_attempts) }),
                        (0, n.jsx)(nJ, { label: E.intl.string(S.default.RIDc6D), value: nW(m.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var al = l(320448),
    an = l(629584),
    aa = l(683438),
    ar = l(849363);
function ai(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: ar.ut,
              children: (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.TV42NS),
              }),
          });
}
function as(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: ar.qf,
              children: [
                  (0, n.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: E.intl.string(S.default.TV42NS),
                  }),
                  (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: ar.qf,
              children: [
                  (0, n.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function ao(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: ar.ps,
              children: (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default["U/qDX9"]),
              }),
          })
        : null;
}
var au = l(417397);
let ad = ["all", "preview", "stable", "web"],
    ac = a.memo(function (e) {
        var t;
        let { entry: l, showSource: r } = e,
            [i, s] = a.useState(!1),
            o = a.useId(),
            u = a.useMemo(
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
            className: au.vK,
            children: [
                (0, n.jsx)(p.E, {
                    tag: "span",
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    className: au.Mt,
                    selectable: !0,
                    children: nH(l.ts),
                }),
                (0, n.jsx)(p.E, {
                    tag: "span",
                    variant: "text-xxs/semibold",
                    color:
                        "error" === (t = l.level)
                            ? "text-feedback-critical"
                            : "warn" === t
                              ? "text-feedback-warning"
                              : "text-muted",
                    className: au.dm,
                    children: l.level,
                }),
                (0, n.jsxs)("span", {
                    className: au.t4,
                    children: [
                        r &&
                            null != l.source &&
                            (0, n.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-subtle",
                                className: au.Cq,
                                children: l.source,
                            }),
                        null != l.kind &&
                            (0, n.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-feedback-critical",
                                className: au.Cq,
                                title: l.build ?? void 0,
                                children: E.intl.string(S.default.GO6JcR),
                            }),
                        null != u
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      "" !== u.prefix &&
                                          (0, n.jsxs)(p.E, {
                                              tag: "span",
                                              variant: "text-xs/normal",
                                              color: d,
                                              selectable: !0,
                                              children: [u.prefix, " "],
                                          }),
                                      (0, n.jsxs)(eA.D, {
                                          className: au.Pq,
                                          "aria-expanded": i,
                                          "aria-controls": o,
                                          "aria-label": E.intl.string(S.default.ehmgbH),
                                          onClick: () => s((e) => !e),
                                          children: [
                                              i
                                                  ? (0, n.jsx)(lX.a, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, n.jsx)(al._, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    }),
                                              (0, n.jsxs)(p.E, {
                                                  tag: "span",
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  children: [
                                                      u.marker,
                                                      " ",
                                                      E.intl.formatToPlainString(
                                                          "[\u2026]" === u.marker ? S.default.lXkB6Z : S.default.wkbYxG,
                                                          { count: u.size },
                                                      ),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      i &&
                                          (0, n.jsx)(p.E, {
                                              tag: "div",
                                              variant: "text-xs/normal",
                                              color: d,
                                              className: au.dF,
                                              selectable: !0,
                                              id: o,
                                              children: u.pretty,
                                          }),
                                  ],
                              })
                            : (0, n.jsx)(p.E, {
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
function am(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([nB.Ay], () => nB.Ay.getLogs(t), [t]),
        r = (0, D.bG)([nB.Ay], () => nB.Ay.getHistoryState(t, "logs")),
        [i, s] = a.useState("all"),
        [o, u] = a.useState(""),
        d = a.useMemo(() => {
            let e = o.trim().toLowerCase();
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
        }, [l, i, o]),
        c = a.useRef(null),
        m = a.useRef(!0);
    a.useEffect(() => {
        m.current && c.current?.scrollToBottom();
    }, [d]);
    let f = a.useCallback(() => {
            let e = c.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        h = a.useMemo(
            () =>
                ad.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                                return E.intl.string(S.default["+m8XM6"]);
                            case "stable":
                                return E.intl.string(S.default.kiOVnt);
                            case "web":
                                return E.intl.string(S.default.J2TPCe);
                            default:
                                return E.intl.string(S.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: au.$F,
        children: [
            (0, n.jsxs)("div", {
                className: au.y4,
                children: [
                    (0, n.jsx)(an.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: au.KT,
                        children: (0, n.jsx)(aa.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: E.intl.string(S.default["MX4vr/"]),
                            "aria-label": E.intl.string(S.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(ai, { state: r }),
            (0, n.jsxs)(ep.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: au.sx,
                children: [
                    (0, n.jsx)(ao, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(as, {
                              state: r,
                              emptyTitle: E.intl.string(S.default.mcFyYc),
                              emptyBody: E.intl.string(S.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(S.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(ac, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function af(e) {
    return E.intl.string("preview" === e ? S.default["+m8XM6"] : S.default.kiOVnt);
}
function ah(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(nZ, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(p.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(S.default.W4hcKL),
                      }),
        })
    );
}
function ag(e) {
    let { env: t, bot: l } = e;
    return l.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(nJ, {
                      label: E.intl.formatToPlainString(S.default.f8ix3w, { env: af(t) }),
                      value: l.connected ? E.intl.string(S.default["9KlveJ"]) : E.intl.string(S.default["4tYZVa"]),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(nJ, {
                      label: E.intl.string(S.default["0AB7l3"]),
                      value: nW(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${nQ(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(nJ, { label: E.intl.string(S.default.ElaQ0A), value: nW(l.guild_count) }),
                  (0, n.jsx)(nJ, {
                      label: E.intl.string(S.default.SJtBTN),
                      value: nW(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.bSzLue, {
                                    code: l.last_close_code,
                                    time: nQ(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, n.jsx)(nJ, {
                          label: E.intl.string(S.default.N4l504),
                          value: nW(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(nJ, { label: af(t), value: E.intl.string(S.default.C6xjtD) });
}
function ax(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(nJ, {
        label: af(t),
        value: E.intl.formatToPlainString(S.default.Yur5Zm, { requests: nW(l.requests), failures: nW(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? E.intl.formatToPlainString(S.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: nQ(l.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["1PdrB1"], { time: nQ(l.since) }),
    });
}
function ap(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(nJ, {
                label: E.intl.formatToPlainString(S.default.BVORfc, { env: af(t) }),
                value: nW(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    nJ,
                    {
                        label: E.intl.formatToPlainString(S.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? E.intl.formatToPlainString(S.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? E.intl.formatToPlainString(S.default["7ecbr3"], { time: nQ(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function av(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(nJ, {
        label: af(t),
        value: E.intl.formatToPlainString(S.default.voXL2a, { calls: nW(l.calls), errors: nW(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function aj(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(nZ, {
            title: t,
            children: (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(nZ, {
        title: t,
        children: [
            (0, n.jsx)(nJ, {
                label: E.intl.string(S.default.KOnL3g),
                value: nW(l.requests),
                hint: E.intl.formatToPlainString(S.default["1PdrB1"], { time: nQ(l.since) }),
            }),
            (0, n.jsx)(nJ, { label: E.intl.string(S.default.CjPhyY), value: nW(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(n0, {
                              label: E.intl.string(S.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: nV,
                          }),
                          (0, n.jsx)(nJ, {
                              label: E.intl.string(S.default["+rYPHD"]),
                              value: nV(r),
                              hint: E.intl.formatToPlainString(S.default["+LxC7W"], {
                                  total: nV(l.cpu_ms_total),
                                  wall: nV(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(nJ, {
                      label: E.intl.string(S.default["V/nNbs"]),
                      value: E.intl.string(S.default.YKWIxp),
                      hint: E.intl.string(S.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(nJ, { label: E.intl.string(S.default.ueEMPa), value: nV(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(nJ, { label: E.intl.string(S.default.vM2krr), value: nW(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(nJ, {
                label: E.intl.string(S.default.g1O88C),
                value: nW(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(nJ, { label: E.intl.string(S.default.JUZs7g), value: nK(l.build) }),
        ],
    });
}
function ab(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: E.intl.string(S.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: E.intl.string(S.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: E.intl.string(S.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(nZ, {
        title: E.intl.string(S.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(nJ, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(nJ, {
                                  label: E.intl.formatToPlainString(S.default["9TpIQg"], { env: l }),
                                  value: nU(r.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      r.r2_truncated ? S.default.o45MMA : S.default.S7o3vV,
                                      { count: nW(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(n0, {
                                      label: E.intl.formatToPlainString(S.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: nU,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function ay(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: n5.Mf,
        children: [
            (0, n.jsx)(nX, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(aj, {
                            title: E.intl.string(S.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aj, {
                            title: E.intl.string(S.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(ab, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(ah, {
                                title: E.intl.string(S.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ag, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(ah, {
                                title: E.intl.string(S.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ax, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(ah, {
                                title: E.intl.string(S.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ap, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(ah, {
                                title: E.intl.string(S.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(av, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(n3, { analytics: t.analytics }),
                        (0, n.jsxs)(nZ, {
                            title: E.intl.string(S.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(nJ, {
                                    label: E.intl.string(S.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? nK(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(nJ, {
                                    label: E.intl.string(S.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? nK(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function ak(e, t) {
    return String(e).padStart(t, "0");
}
function aN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${ak(n.getHours(), 2)}:${ak(n.getMinutes(), 2)}:${ak(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${ak(n.getMilliseconds(), 3)}` : a;
}
var aA = l(977129);
let aw = new Map(),
    aS = new Map(),
    aE = 0,
    aC = 0;
async function aI(e, t, l) {
    let n = aE,
        a = aw.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aC) return { status: "forbidden" };
    let r = aS.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aA.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return (aC = Date.now() + 6e4), { status: "forbidden" };
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aE) return { status: "failed" };
            var l = o.rich;
            for (aw.set(t, l); aw.size > 100; ) {
                let e = aw.keys().next();
                if (!0 === e.done) break;
                aw.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    aS.set(t, i);
    let s = await i;
    return aS.get(t) === i && aS.delete(t), l?.aborted === !0 ? { status: "failed" } : s;
}
function aT() {
    (aE += 1), aw.clear(), aS.clear(), (aC = 0);
}
function aM(e) {
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
let aP = ["model", "tool", "subagent", "delegated", "context"];
function a_(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(aM(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function aR(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aL = ["arguments", "result", "usage", "diagnostics"];
function aD(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aF(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function a$(e) {
    switch (e) {
        case "subagent":
            return E.intl.string(S.default["EoY7D+"]);
        case "context":
            return E.intl.string(S.default.KVFrD3);
        case "tool":
            return E.intl.string(S.default["/N6ZU9"]);
        case "delegated":
            return E.intl.string(S.default.HcEbf2);
        default:
            return E.intl.string(S.default.AhOqQs);
    }
}
var aq = l(40715);
let aO = { started: aq.Vf, ok: aq.mo, error: aq.Sr };
function az(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${aq.Om} ${aO[t] ?? aq.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return E.intl.string(S.default.HpKDyl);
                case "error":
                    return E.intl.string(S.default["5T4Dd0"]);
                default:
                    return E.intl.string(S.default.VbEmf0);
            }
        })(t),
    });
}
let aG = { model: aq.WI, subagent: aq.uM, context: aq.eH, tool: aq.pw, delegated: aq.C8 };
function aB(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: aq.wV,
        children: [
            (0, n.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", className: aq.D6, children: t }),
            (0, n.jsx)("div", { className: aq.zL, children: l }),
        ],
    });
}
function aU(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(aB, {
        label: t,
        value: (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function aV(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: aq.WA, children: t });
}
function aW(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: aq.xd,
        children: [
            (0, n.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: aq.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function aH(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: aq.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: aq.p8,
                children: [
                    (0, n.jsx)(al._, { className: aq.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(p.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: aq.bG, children: l }),
        ],
    });
}
function aQ(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(aB, {
            label: t.key,
            value: (0, n.jsx)(p.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? E.intl.formatToPlainString(S.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? E.intl.formatToPlainString(S.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(aB, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: aq.Kv,
            children: [
                (0, n.jsx)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return E.intl.string(S.default.xO6bcQ);
                            case "content":
                                return E.intl.string(S.default.gpBZRr);
                            default:
                                return E.intl.string(S.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, n.jsx)(p.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function aK(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: aq.QR,
                      children: (0, n.jsx)(p.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: aq.uh,
                          children: E.intl.string(S.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          aB,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: aq.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: aq.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: E.intl.string(S.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? E.intl.string(S.default["1kBG9Z"])
                                                        : E.intl.formatToPlainString(S.default.VGSwo4, {
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
function aY(e) {
    let { detail: t } = e;
    if (null == t || "loaded" === t.status || "forbidden" === t.status) return null;
    let l =
        "loading" === t.status ? S.default["vBF/0G"] : "unavailable" === t.status ? S.default.jEQTot : S.default.fj5wM8;
    return (0, n.jsx)(p.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: aq.E7,
        children: E.intl.string(l),
    });
}
function aX(e) {
    let { projectId: t, entry: l, onClose: r, parent: i, onSelect: s, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = new Set();
            if ("tool" === e.kind)
                ((null != e.fields && e.fields.length > 0) || null != e.detailId) && n.add("arguments"),
                    "started" !== e.status && n.add("result");
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
                aL.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aw.get(t)) return;
                    let l = new AbortController();
                    return (
                        aI(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aw.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = aN(l.startedAt, "millis"),
        f = aM(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ep.Ch, {
        className: aq._0,
        onKeyDown: h,
        role: "region",
        "aria-label": E.intl.formatToPlainString(S.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: aq.sy,
                children: (0, n.jsxs)("div", {
                    className: aq.HI,
                    children: [
                        (0, n.jsx)(az, { status: l.status }),
                        (0, n.jsx)(p.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${aq.PY} ${aG[f]}`,
                            children: a$(f),
                        }),
                        (0, n.jsx)(p.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: aq.kc,
                            children: c,
                        }),
                        (0, n.jsx)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: aq.l5,
                            children: null == l.durationMs ? E.intl.string(S.default.HpKDyl) : aD(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aq.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(aW, {
                      title: E.intl.string(S.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(aQ, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(aK, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(aY, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(aW, {
                      title: E.intl.string(S.default.KXrf5F),
                      children: [
                          (0, n.jsx)(aU, {
                              label: E.intl.string(S.default["2Aii2k"]),
                              value: E.intl.formatToPlainString(S.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(aU, {
                                    label: E.intl.string(S.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(aB, {
                                    label: E.intl.string(S.default["UV2R1/"]),
                                    value: (0, n.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: E.intl.string(S.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(aK, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(aW, {
                      title: E.intl.string(S.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(aV, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(aU, {
                                            label: E.intl.string(S.default.Ran4BY),
                                            value: E.intl.formatToPlainString(S.default["PYO+Jv"], {
                                                tokens: aF(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(aU, {
                                            label: E.intl.string(S.default.vPIcyv),
                                            value: E.intl.formatToPlainString(S.default.Qy2iTq, {
                                                system: aF(l.systemTokens),
                                                tools: aF(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: aF(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(aU, {
                                            label: E.intl.string(S.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(aU, {
                                            label: E.intl.string(S.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(aU, {
                                            label: E.intl.string(S.default.VyAl6j),
                                            value: E.intl.formatToPlainString(S.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(aU, {
                                            label: E.intl.string(S.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: aq.E7,
                              children: E.intl.string(S.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: aq.E7,
                      children: E.intl.string(S.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(aH, {
                      title: E.intl.string(S.default.T7SFyZ),
                      children: (0, n.jsxs)(aV, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(aB, {
                                        label: E.intl.string(S.default.NnBqcd),
                                        value: (0, n.jsx)(eA.D, {
                                            tag: "div",
                                            className: aq.mi,
                                            onClick: () => s(i.id),
                                            children: (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === i.kind ? i.model : i.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, n.jsx)(aU, {
                                        label: E.intl.string(S.default.fI6mzD),
                                        value: E.intl.formatToPlainString(S.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(aU, { label: E.intl.string(S.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(aU, { label: E.intl.string(S.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, n.jsx)(aU, { label: E.intl.string(S.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(aU, { label: E.intl.string(S.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: aq.Hm,
                                                children: E.intl.string(S.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    aU,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? E.intl.formatToPlainString(S.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : E.intl.formatToPlainString(S.default["/L6GFe"], {
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
            (0, n.jsx)(p.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aq.E7,
                children: E.intl.string(S.default.khAjR0),
            }),
        ],
    });
}
let aZ = { model: aq.WI, subagent: aq.uM, context: aq.eH, tool: aq.pw, delegated: aq.C8 };
function aJ(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = aM(n);
                        (t[e] += n.durationMs ?? 0), (l[e] += 1);
                    }
                    return aP.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: aq.M0,
        children: [
            (0, n.jsx)("div", {
                className: aq.pZ,
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
                                            className: `${aq.dL} ${aZ[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: aq.z4,
                role: "group",
                "aria-label": E.intl.string(S.default.UZ1OlR),
                children: aP.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: aq.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${aq.A9} ${aZ[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: a$(e) }),
                                (0, n.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: E.intl.formatToPlainString(S.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: E.intl.formatToPlainString(S.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(p.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: aD(a),
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
let a0 = { model: aq.WI, subagent: aq.uM, context: aq.eH, tool: aq.pw, delegated: aq.C8 };
function a1(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = aM(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? E.intl.formatToPlainString(S.default["PYO+Jv"], { tokens: aF(t.promptTokens) })
                : null != t.durationMs
                  ? aD(t.durationMs)
                  : null;
    return (0, n.jsxs)(eA.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${aq.nM} ${s ? aq.A5 : ""} ${"error" === t.status ? aq.Cr : ""} ${l ? aq.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: aq.sU,
                children: [
                    (0, n.jsx)(az, { status: t.status }),
                    (0, n.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${aq.PY} ${a0[o]}`,
                        children: a$(o),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: aq.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: aq.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aq.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aq.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function a2(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([nB.Ay], () => nB.Ay.getTrace(l), [l]),
        s = (0, D.bG)([nB.Ay], () => nB.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => aT, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [m, f] = a.useState(!1),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        j = a.useId(),
        b = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, t_.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, t_.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        A = (0, nN.A)({
            resizableDomNodeRef: g,
            orientation: nN.R.VERTICAL_TOP,
            getClampedValue: N,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => f(!0),
            onElementResizeEnd: () => f(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        w = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), A(e));
            },
            [A],
        ),
        C = a.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, t_.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            u(null), b(o);
        }, [o, b]),
        T = a.useMemo(() => a_(i, r), [i, r]),
        M = a.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = null;
                    for (let n of e) {
                        let e = n.turnId ?? null;
                        (null == l || l.turnId !== e) &&
                            ((l = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: l.entries, startedAt: n.startedAt, spanMs: null })),
                            l.entries.push(n);
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
                    .map((e, t) => ({ ...e, index: t, entries: a_(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        P = aR(T, o),
        _ = P?.kind === "tool" ? aR(i, P.parentId ?? null) : null,
        R = null == P ? 0 : ((t = P.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = T[T.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, o]);
    let F = a.useCallback(
        (e) => {
            if (0 === T.length) return;
            let t = T.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(T.length - 1, t));
                u(T[l].id), document.getElementById(`trace-${T[l].id}`)?.scrollIntoView({ block: "nearest" });
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? T.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(T.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), b(o));
        },
        [T, o, b],
    );
    return 0 === i.length
        ? (0, n.jsx)("div", {
              className: aq.uP,
              ref: h,
              children: (0, n.jsx)(as, {
                  state: s,
                  emptyTitle: E.intl.string(S.default.Iyt8OJ),
                  emptyBody: E.intl.string(S.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${aq.uP} ${m ? aq.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: aq.DK,
                      children: [
                          (0, n.jsx)(aJ, { entries: i }),
                          (0, n.jsx)(ai, { state: s }),
                          0 === T.length
                              ? (0, n.jsx)("div", {
                                    className: aq.Ie,
                                    children: (0, n.jsx)(p.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: E.intl.string(S.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ep.Ch, {
                                    ref: x,
                                    className: aq.Ns,
                                    children: [
                                        (0, n.jsx)(ao, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: v,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": E.intl.string(S.default["QATZ+A"]),
                                            className: aq.p_,
                                            children: M.map((e) => {
                                                let t = aN(e.startedAt),
                                                    l = E.intl.formatToPlainString(S.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: aq.mf,
                                                                children: [
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, n.jsx)(p.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: aD(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: aq.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        a1,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? T[0]?.id),
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
                                    "aria-label": E.intl.string(S.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: aq.b1,
                                    onPointerDown: w,
                                    onKeyDown: C,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: aq.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(aX, {
                                        projectId: l,
                                        entry: P,
                                        parent: _,
                                        childCount: R,
                                        onSelect: u,
                                        onClose: I,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var a7 = l(365199),
    a6 = l(402879);
function a3(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([nB.Ay], () => nB.Ay.getTrace(t), [t]),
        s = a.useRef(null),
        o = a.useCallback(() => {
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
            (0, a6.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: aq.ED,
                children: (0, n.jsx)(aa.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: E.intl.string(S.default.NfncNw),
                    "aria-label": E.intl.string(S.default.NfncNw),
                }),
            }),
            (0, n.jsx)(ty.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: ty.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tk.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": E.intl.string(E.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(tN.rX, {
                            children: (0, n.jsx)(tN.Dr, {
                                id: "export",
                                label: E.intl.string(S.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(lK.K, {
                        ...e,
                        buttonRef: s,
                        icon: a7.MoreHorizontalIcon,
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
var a5 = l(497243);
function a4(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [o, d] = a.useState(""),
        m = (0, D.bG)([nP.A], () => nP.A.isDeveloper),
        f = (0, D.bG)([nG], () => nG.getStatus(t), [t]),
        h = (0, D.bG)([nG], () => nG.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, c.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, c.R7)(t), [t]),
        x = a.useCallback(() => {
            let e = {
                captured_at: new Date().toISOString(),
                project_id: t,
                status: nG.getStatus(t),
                last_turn_usage: nG.getLastTurnUsage(t),
                last_compaction: nG.getLastCompaction(t),
                last_compaction_decline: nG.getLastCompactionDecline(t),
                model_calls: nG.getModelCalls(t),
                logs: nB.Ay.getLogs(t),
            };
            (0, n_.C)(JSON.stringify(e, null, 2), () =>
                (0, nS.P0)((0, nE.o)(E.intl.string(S.default.sDSDiO), nC.Ck.SUCCESS)),
            );
        }, [t]),
        p = E.intl.string(S.default.KampIf);
    return (0, n.jsxs)("section", {
        className: a5.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(u.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.Ay.Icon, {
                            icon: nI.CopyIcon,
                            tooltip: E.intl.string(S.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(u.Ay.ChannelIcon, { icon: nT.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(u.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: a5.rf,
                children: [
                    (0, n.jsxs)(nM.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": E.intl.string(S.default.uNyR86),
                        className: a5.vR,
                        children: [
                            (0, n.jsx)(nM.V.Item, { id: "logs", children: E.intl.string(S.default["1mpzdJ"]) }),
                            (0, n.jsx)(nM.V.Item, { id: "worker", children: E.intl.string(S.default.whGHLD) }),
                            (0, n.jsx)(nM.V.Item, { id: "agent", children: E.intl.string(S.default.cK3AvL) }),
                            m
                                ? (0, n.jsx)(nM.V.Item, { id: "trace", children: E.intl.string(S.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(am, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(ay, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === r && m
                            ? (0, n.jsxs)("div", {
                                  className: a5.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: a5.XH,
                                          children: (0, n.jsx)(a3, { projectId: t, query: o, onQueryChange: d }),
                                      }),
                                      (0, n.jsx)(a2, { projectId: t, query: o }),
                                  ],
                              })
                            : (0, n.jsx)(at, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: m }),
                ],
            }),
        ],
    });
}
var a9 = l(11055),
    a8 = l(333007),
    re = l(342667);
function rt(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i } = e,
        s = (0, lU.o4)(null != l && l === r ? t : null),
        o = (0, eU.useHasAnyModalOpen)(),
        [u, d] = a.useState(null);
    a.useEffect(() => {
        if (!s) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            d((t) =>
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
                window.clearInterval(t), window.removeEventListener("resize", e);
            }
        );
    }, [s, i]);
    let c = s && null != u && !o;
    return (0, a8.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: re.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: s ? E.intl.string(S.default.dIE9zO) : "",
                }),
                c
                    ? (0, n.jsx)("div", {
                          className: re.o,
                          style: { left: u.left, top: u.top, width: u.width, height: u.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var rl = l(314116),
    rn = l(364522),
    ra = l(406810),
    rr = l(381849),
    ri = l(977628);
function rs(e) {
    let t,
        { projectId: l, onClose: r, onRestore: i } = e,
        [o, d] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, c.ST)(l)
                    .then((t) => {
                        e || d({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || d({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [l]),
        (t =
            "loading" === o.status
                ? (0, n.jsx)("div", { className: ri.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === o.status
                  ? (0, n.jsx)("div", {
                        className: ri.E8,
                        role: "alert",
                        children: (0, n.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default["mSJn+K"]),
                        }),
                    })
                  : 0 === o.entries.length
                    ? (0, n.jsx)("div", {
                          className: ri.E8,
                          children: (0, n.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(rn.Ip, {
                          className: ri.p_,
                          children: (0, n.jsx)("div", {
                              className: ri.jO,
                              children: o.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rr.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rr._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      "button",
                                      {
                                          className: ri.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, rl.A)({
                                                  title: E.intl.string(S.default.qOUOPE),
                                                  subtitle: E.intl.string(S.default.k2JBj5),
                                                  confirmText: E.intl.string(S.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      r(), i(e);
                                                  },
                                              }),
                                          children: [
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-md/medium",
                                                  className: ri.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != l.relative &&
                                                  (0, n.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: l.absolute ?? void 0,
                                                      children: l.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, n.jsxs)("section", {
            className: ri.nd,
            "aria-label": E.intl.string(S.default.jAWwzi),
            children: [
                (0, n.jsxs)(u.Ay, {
                    "aria-label": E.intl.string(S.default.jAWwzi),
                    toolbar: (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(u.Ay.ChannelIcon, { icon: ra.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(u.Ay.Title, { children: E.intl.string(S.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: ri.rf, children: t }),
            ],
        })
    );
}
var ro = l(120426),
    ru = l(873727),
    rd = l(147248),
    rc = l(418842),
    rm = l(885386),
    rf = l(940107),
    rh = l(171936),
    rg = l(796036);
function rx(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: d,
            content: c,
            sidebar: m,
        } = e,
        [f, h] = a.useState(null),
        g = (0, o.A)(l, s),
        x = g?.id ?? null;
    !(function (e, t) {
        let l = (0, D.bG)([nd.A], () => (0, ru.x4)(nd.A.theme)),
            n = (0, D.bG)([rd.A], () => rd.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, D.cf)([tM.Ay], () => ({
                reducedMotion: tM.Ay.useReducedMotion,
                fontScale: (0, ru.U0)(),
                highContrast: tM.Ay.isHighContrastModeEnabled,
                forcedColors: tM.Ay.useForcedColors,
                underlineLinks: tM.Ay.alwaysShowLinkDecorations,
            })),
            d = rm.hH.useSetting(),
            c = (0, rc.C)(),
            m = a.useRef(!1),
            f = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, ro.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, ru.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rf.W)(n, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, i, t, s, d, e, r, c, u]),
            p = a.useRef(x);
        a.useLayoutEffect(() => {
            p.current = x;
        });
        let v = a.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    (m.current = !1), f.current || p.current();
                }));
        }, []);
        a.useEffect(
            () => (
                (f.current = !1),
                () => {
                    f.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                v();
            }, [n, v]),
            a.useLayoutEffect(() => {
                x(), v();
            }, [v, x]),
            a.useLayoutEffect(() => {
                let l = (0, ro.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, ro.F)(e, t) && ((g.current = null), v());
                }
                return document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0);
            }, [t, e, v]),
            a.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]);
    })(f, x),
        a.useEffect(() => {
            if (null != t) return (0, rh.mn)(t, () => (0, ro.F)(f, x));
        }, [t, f, x]);
    let p = a.useCallback(() => (0, ro.F)(f, x), [f, x]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(eg.Mh, d),
                children: [u, (0, n.jsx)("div", { ref: h, className: eg.fm, children: c })],
            }),
            m,
            (0, n.jsx)(rt, { projectId: t ?? null, applicationId: l, previewApplicationId: r, resolveIframe: p }),
        ],
    });
}
function rp(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: m,
            chatOpen: f,
            onCloseChat: h,
            versionHistoryOpen: g = !1,
            onCloseVersionHistory: x,
            onRestoreVersion: p,
            debugOpen: v = !1,
            onCloseDebug: j,
            restoreState: b,
            previewReady: y,
            previewGate: k,
            channelMessages: N,
            availability: A,
            activeMode: w,
            widgetApplicationId: C,
        } = e,
        I = a.useRef(null),
        [T, M] = a.useState(0);
    a.useLayoutEffect(() => {
        if (o.type === _.U4.MAIN) return (0, d.HV)(l), () => (0, d.HV)(null);
    }, [l, o.type]),
        a.useEffect(() => {
            null != t && ((0, c.Hc)(t), (0, rg.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            function t() {
                null != e && M(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return l.observe(e), () => l.disconnect();
        }, []),
        a.useEffect(() => () => (0, d.Zq)(0), []);
    let P = Math.max(360, T - 320),
        R = null != N ? N.open : f,
        L = f || o.type === _.U4.MAIN;
    return (0, n.jsx)("div", {
        ref: I,
        className: eg.LB,
        children: (0, n.jsx)(rx, {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: m,
            mainClassName: null == m ? void 0 : i()(eg.ez, { [eg.zt]: R }),
            content: (0, n.jsx)(ed, {
                applicationId: l,
                previewApplicationId: r,
                surface: o,
                previewReady: y,
                previewGate: k,
                availability: A,
                activeMode: w,
                widgetApplicationId: C,
            }),
            sidebar:
                null != N
                    ? (0, n.jsx)(nw, {
                          open: N.open,
                          maxWidth: P,
                          onWidthChange: d.Zq,
                          children: N.open
                              ? (0, n.jsx)(ex, { channel: N.channel, guild: N.guild, onClose: N.onClose })
                              : null,
                      })
                    : null != t && L
                      ? (0, n.jsx)(nw, {
                            open: f,
                            maxWidth: P,
                            onWidthChange: d.Zq,
                            children: (0, n.jsx)("div", {
                                className: eg.cO,
                                children: v
                                    ? (0, n.jsx)(a4, { projectId: t, onClose: j ?? (() => {}) }, t)
                                    : g
                                      ? (0, n.jsx)(
                                            rs,
                                            { projectId: t, onClose: x ?? (() => {}), onRestore: p ?? (() => {}) },
                                            t,
                                        )
                                      : (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(a9.A, { projectId: t }),
                                                (0, n.jsx)(u.Ay, {
                                                    "aria-label": E.intl.string(E.t["/VQax8"]),
                                                    toolbar:
                                                        null == h
                                                            ? null
                                                            : (0, n.jsx)(u.Ay.Icon, {
                                                                  icon: s.P,
                                                                  tooltip: E.intl.string(S.default.YdgE0j),
                                                                  onClick: h,
                                                              }),
                                                    children: (0, n.jsx)(u.Ay.Title, {
                                                        children: E.intl.string(E.t["/VQax8"]),
                                                    }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    className: eg.cb,
                                                    children: (0, n.jsx)(nj, { projectId: t, restoreState: b }, t),
                                                }),
                                            ],
                                        }),
                            }),
                        })
                      : null,
        }),
    });
}
