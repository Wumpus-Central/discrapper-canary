l.d(t, { A: () => r2 });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(991690),
    o = l(789645),
    u = l(672929),
    d = l(58736),
    c = l(948230),
    m = l(277977),
    f = l(289873),
    h = l(821609),
    g = l(627363),
    x = l(580954),
    p = l(753514),
    v = l(297264),
    b = l(834730),
    j = l(625180),
    y = l(91242),
    k = l(812901),
    w = l(317608),
    N = l(206600),
    A = l(869146),
    E = l(742023),
    S = l(697744),
    C = l(50617),
    I = l(375708),
    M = l(296167);
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
                (0, n.jsx)(b.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: M.o,
                    children: I.intl.string(C.default.jTuX7C),
                }),
            ],
        })
    );
}
var R = l(328284);
function P(e) {
    let { title: t, body: l, wide: a = !1, children: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(R.Bf, a && R.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: R.Ux,
                children: [
                    (0, n.jsx)(v.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, n.jsx)(b.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var _ = l(652215),
    L = l(165610),
    F = l(963691);
function D(e) {
    let { applicationId: t, surface: l } = e,
        { frame: r, state: i } = (0, N.A)({ applicationId: t, surface: l }),
        s = (0, L.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = y.A.getFrame(e);
                    if (null == t || A.A.getWindowOpen(_.MLl.ACTIVITY_POPOUT)) return;
                    let l = y.A.getMainFrame()?.id === e;
                    t.intent === L.sV.MAIN
                        ? (l || j.A.promoteFrame(e), j.A.resetFrameLayoutModes(e))
                        : l && j.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = y.A.getFrame(s)) &&
                        ((0, L.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        E.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === L.sV.INLINE && j.A.promoteFrame(s),
                              j.A.updateFrameLayoutMode({ frameId: s, layoutMode: L.y0.PIP }))
                            : e.intent === L.sV.MAIN && j.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case N.n.Launched:
            return (0, n.jsx)(w.A, { frameId: r.id, level: k.A.WithinAppContent, className: F.Z7 });
        case N.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: F.qs,
                children: (0, n.jsx)(P, {
                    title: I.intl.string(C.default["4f6Vkr"]),
                    body: I.intl.string(C.default.LJ2q1H),
                }),
            });
        case N.n.NoApplication:
            return (0, n.jsx)(T, { className: F.qs });
        case N.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: F.qs,
                children: (0, n.jsx)(P, {
                    title: I.intl.string(C.default.FHOJiH),
                    body: I.intl.string(C.default["1yLQoV"]),
                }),
            });
        case N.n.Error:
            return (0, n.jsxs)("div", {
                className: F.qs,
                children: [
                    (0, n.jsx)(v.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: I.intl.string(C.default.MeLWCr),
                    }),
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: F.tj,
                        children: I.intl.string(C.default["1RCbQT"]),
                    }),
                ],
            });
        case N.n.AwaitingLaunch:
        case N.n.Loading:
            return (0, n.jsx)("div", { className: F.qs, children: (0, n.jsx)(f.y, {}) });
    }
}
var $ = l(17928),
    O = l(323384),
    z = l(308528),
    q = l(334738),
    U = l(688438),
    B = l(355622),
    G = l(734057),
    V = l(531685),
    W = l(365971),
    H = l(362417);
function K(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: H.f,
        children: [
            (0, n.jsx)(O.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function Y() {
    return (0, n.jsx)("div", { className: H.f, children: (0, n.jsx)(f.y, {}) });
}
function Q(e) {
    let t,
        l,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, g.YY)(r),
        o = i?.bot?.id ?? null,
        u = (0, $.bG)([G.A], () => {
            if (null == o) return null;
            let e = G.A.getDMFromUserId(o);
            return null != e ? G.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        a.useEffect(() => {
            null != t && z.A.preload(_.ME, t);
        }, [t]),
        (l = (0, $.bG)([V.A], () => V.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, W.Xg)();
            return (
                (0, q.yl)(t, e),
                () => {
                    (0, q.dm)(t, e);
                }
            );
        }, [t, l]));
    let [d, c] = a.useState(null),
        m = null != o && d === o;
    return (a.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            z.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, n.jsx)(Y, {})
        : null == o || m
          ? (0, n.jsx)(K, { message: I.intl.string(C.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(Y, {})
            : (0, n.jsx)("div", {
                  className: H.g,
                  children: (0, n.jsx)(U.A, { channel: u, guild: null, chatInputType: B.oU.SIDEBAR }, u.id),
              });
}
var X = l(598748),
    Z = l(486610),
    J = l(531913),
    ee = l(587895),
    et = l(633075),
    el = l(946356),
    en = l(139730),
    ea = l(479299),
    er = l(287809),
    ei = l(58551),
    es = l(71495);
function eo(e) {
    let { applicationId: t } = e,
        l = (0, $.bG)([er.default], () => er.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(eu, { applicationId: t, user: l });
}
function eu(e) {
    let { applicationId: t, user: l } = e,
        r = (0, $.bG)([ee.A], () => ee.A.getApplication(t)),
        i = a.useMemo(() => new et.R({ applicationId: t }), [t]),
        s = (0, J.A)(l.id, t),
        o = s.surfaceConfigs,
        u = (0, ei.yZ)({
            widgetTop: null != o[X.m.WIDGET_TOP],
            widgetBottom: null != o[X.m.WIDGET_BOTTOM],
            miniProfile: null != o[X.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, n.jsx)("div", {
              className: es.$C,
              children: (0, n.jsxs)("div", {
                  className: es.PV,
                  children: [
                      u.hasMainCard
                          ? (0, n.jsx)("div", {
                                className: es.a9,
                                children: (0, n.jsx)(el.A.Overlay, {
                                    className: es.Qb,
                                    children: (0, n.jsx)(ea.A, {
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
                                className: es.ql,
                                children: (0, n.jsx)(en.A, { application: r, rendererProps: s, renderText: Z.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var ed = l(976102);
function ec(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: r,
            previewReady: i,
            previewGate: s,
            availability: o,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        m = (0, u.A)(t, r),
        { isLoading: v } = (0, g.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != m && (0, x.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: ed.q, children: (0, n.jsx)(f.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: ed.q,
            children: (0, n.jsx)(P, {
                wide: !0,
                title: I.intl.string(C.default.DYwf2n),
                body: I.intl.string(C.default.WWj3pN),
                children: (0, n.jsx)(h.$, {
                    variant: "primary",
                    size: "md",
                    text: I.intl.string(C.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!i) return (0, n.jsx)(T, { className: ed.q });
    if (null == t) return null;
    if (v) return (0, n.jsx)("div", { className: ed.q, children: (0, n.jsx)(f.y, {}) });
    let b = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, p.z3)(d), "aria-label": (0, p.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: ed.R,
        ...b,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, n.jsx)(D, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, n.jsx)("div", {
                          className: ed.q,
                          children: (0, n.jsx)(P, {
                              wide: !0,
                              title: I.intl.string(C.default.SGHO9K),
                              body: I.intl.string(C.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(eo, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, n.jsx)(Q, { previewApplicationId: l }) : null,
        ],
    });
}
var em = l(534890),
    ef = l(738876),
    eh = l(47167),
    eg = l(31717),
    ex = l(372054);
function ep(e) {
    let { channel: t, guild: l, onClose: a } = e,
        r = (0, eh.Ay)(t),
        i = (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: I.intl.string(I.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: ex.Wx,
        children: [
            (0, n.jsx)(ef.A, { channel: t, draftType: eg.C.ChannelMessage }),
            (0, n.jsxs)(d.Ay, {
                toolbar: i,
                "aria-label": I.intl.string(I.t.BIYAqa),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: em.ChatIcon, "aria-label": I.intl.string(I.t["/VQax8"]) }),
                    (0, n.jsx)(d.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ex.GZ,
                children: (0, n.jsx)(U.A, { channel: t, guild: l, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ev = l(689175),
    eb = l(29692),
    ej = l(903586),
    ey = l(74029),
    ek = l(783791),
    ew = l(717447),
    eN = l(29080),
    eA = l(46054),
    eE = l(76275);
function eS(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : I.intl.string(C.default.MdXWEK);
}
function eC(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, ej.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, ej.Lf)(t),
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
(l(134528), l(947204));
var eI = l(939249),
    eM = l(478016),
    eT = l(34136);
function eR(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, n.jsxs)("section", {
        className: i()(eT.Nr, r),
        ...o,
        children: [
            (0, n.jsxs)("header", {
                className: i()(eT.wx, null != l && eT.o5, s),
                children: [
                    (0, n.jsx)(b.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var eP = l(113757);
function e_(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(eI.D, {
        className: i()(eP.nM, { [eP.f1]: o, [eP.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": I.intl.formatToPlainString(C.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: eP.jo,
                children: [
                    l
                        ? (0, n.jsx)(eM.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eP.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(b.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eP.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, n.jsx)(b.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eL(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(eR, {
        title: I.intl.string(C.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                e_,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eF = l(435619),
    eD = l(866665),
    e$ = l(885574),
    eO = l(430392),
    ez = l(632015),
    eq = l(256905),
    eU = l(824757);
function eB(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: eU.uW,
        children: [
            (0, n.jsxs)("span", {
                className: eU.a9,
                children: [
                    (0, n.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eG() {
    return (0, n.jsx)(eD.m, {
        text: I.intl.string(C.default.DXe2dP),
        children: (0, n.jsx)(eI.D, {
            className: eU.bk,
            "aria-label": I.intl.string(C.default.Y6y4nQ),
            children: (0, n.jsx)(e$.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eV(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(eB, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: eU.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: eU.jw,
                              children: (0, n.jsx)(b.E, {
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
function eW(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? O.k : eO.RobotIcon;
    return (0, n.jsxs)("span", {
        className: eU.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: eU.L6,
                      children: [
                          (0, n.jsx)(ez.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, n.jsx)(b.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: I.intl.string(C.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: eU.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: I.intl.string(t ? I.t.IC5Ann : C.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eH(e) {
    let { projectId: t, design: l } = e,
        { id: r } = l,
        {
            src: i,
            gone: s,
            handleError: o,
        } = (function (e, t) {
            let [l, n] = a.useState(null),
                [r, i] = a.useState(!1),
                [s, o] = a.useState(0);
            return (
                a.useEffect(() => {
                    let l = !1;
                    return (
                        (0, m.PK)(e, t).then(
                            (e) => {
                                l || n(e);
                            },
                            () => {
                                l || (0 === s ? o(1) : i(!0));
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
                            (0, m.n6)(e, t).then(
                                (e) => {
                                    e && 0 === s ? o(1) : i(!0);
                                },
                                () => i(!0),
                            ));
                    }, [e, t, s]),
                }
            );
        })(t, r),
        u = I.intl.string(C.default.FW8UcU),
        d = a.useCallback(() => {
            (0, m.PK)(t, r).then(
                (e) => {
                    (0, eq.R)({
                        items: [{ type: "IMAGE", url: e, alt: u }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, r, u]);
    return s
        ? null
        : (0, n.jsx)(eB, {
              label: I.intl.string(C.default["9W8SbY"]),
              info: (0, n.jsx)(eG, {}),
              children: (0, n.jsx)(eI.D, {
                  className: eU.xX,
                  onClick: d,
                  "aria-label": I.intl.string(C.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: u, className: eU.sN, onError: o }) : null,
              }),
          });
}
function eK(e) {
    let { projectId: t, proposal: l } = e;
    return (0, n.jsx)(eR, {
        title: I.intl.string(C.default["60htw+"]),
        trailing: (0, n.jsx)(eW, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: eU.rf,
            children: [
                (0, n.jsx)(b.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(eH, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(eB, {
                          label: I.intl.string(C.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: eU.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: eU.Aw,
                                          children: (0, n.jsx)(b.E, {
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
                    ? (0, n.jsx)(eB, {
                          label: I.intl.string(I.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: eU.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: eU.uX,
                                          children: [
                                              (0, n.jsxs)(b.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, n.jsx)(b.E, {
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
                (0, n.jsx)(eV, { label: I.intl.string(C.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eV, { label: I.intl.string(C.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eY = l(192308),
    eQ = l(479191);
function eX(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, eY.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]);
    return (0, n.jsxs)("article", {
        className: eQ.Lo,
        children: [
            (0, n.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: I.intl.string(C.default["/e28TK"]),
            }),
            (0, n.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : I.intl.string(C.default.jxvtin),
            }),
            (0, n.jsx)("div", {
                className: eQ.cS,
                children: r.fields.map((e) =>
                    (0, n.jsx)(
                        "span",
                        {
                            className: eQ.$H,
                            children: (0, n.jsx)(b.E, {
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
                className: eQ.sq,
                children: (0, n.jsx)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: I.intl.string(C.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eZ = l(976814),
    eJ = l(973e3);
function e0(e) {
    let { projectId: t, request: l } = e,
        r = (0, $.bG)([m.Ay], () => m.Ay.getSettings(t)),
        i = (l.keys ?? []).map((e) => r?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = a.useCallback(() => {
            (0, eZ.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0, isPreview: !0 });
        }, [t, l]);
    return (0, n.jsxs)("article", {
        className: eJ.Mk,
        children: [
            (0, n.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: I.intl.string(C.default.wgDhiQ),
            }),
            (0, n.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : I.intl.string(C.default["V+DBhs"]),
            }),
            i.length > 0
                ? (0, n.jsx)("div", {
                      className: eJ.R6,
                      children: i.map((e) =>
                          (0, n.jsx)(
                              "span",
                              {
                                  className: eJ.K4,
                                  children: (0, n.jsx)(b.E, {
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
                className: eJ.p0,
                children: (0, n.jsx)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: I.intl.string(C.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var e1 = l(196582);
let e2 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    e7 = {
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
    e6 = {
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
function e5(e) {
    return { ...e6[e], name: I.intl.string(e7[e]()) };
}
function e4(e) {
    return e2.includes(e) ? e5(e) : void 0;
}
function e3(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % e2.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, e2[(t + l) % e2.length]);
            }),
            n
        );
    })(e))
        t.set(l, e5(n));
    return t;
}
var e9 = l(683063),
    e8 = l(705754),
    te = l(883455),
    tt = l(13699);
function tl(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, ej.SY)(l.steps),
        c = u
            ? null != d
                ? (0, ej.WQ)(d)
                : eS(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(eS(e));
                  switch (e.status) {
                      case "failed":
                          return I.intl.formatToPlainString(C.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return I.intl.formatToPlainString(C.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return I.intl.formatToPlainString(C.default.vuv9bT, {
                                  task: t,
                                  duration: (0, eE.M)(e.durationMs),
                              });
                          return I.intl.formatToPlainString(C.default.KS49RN, { task: t });
                      default:
                          return I.intl.formatToPlainString(C.default.KS49RN, { task: t });
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
                                    className: tt.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            te.A,
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
                                      className: tt.iq,
                                      children: (0, n.jsx)(e8.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(e1.A, {
        glyph: (0, n.jsx)(e9.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: eS(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: tt.nC,
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
var tn = l(140735),
    ta = l(329456);
let tr = [];
function ti(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(ta.xL, { [ta.Vb]: "in_progress" === t, [ta.cT]: "completed" === t }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return I.intl.string(C.default.TkPGOH);
                case "in_progress":
                    return I.intl.string(C.default["oK+fmd"]);
                default:
                    return I.intl.string(C.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(f.y, {
                type: f.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: ta.Qd,
                itemClassName: ta.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: ta.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: ta.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ts(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tr), [l, t]),
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
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, n.jsxs)("span", {
        className: ta.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    e9.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: ta.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, n.jsx)(s, { size: 16, alt: a, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, n.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: ta.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function to(e) {
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
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(a.useMemo(() => l.map((e) => e.id), [l])),
        u =
            ((t = (s ?? tr).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tr) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: ta.p_,
        children: [
            l.map((e) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: i()(ta.AS, { [ta.J1]: "completed" === e.status }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(ti, { status: e.status }),
                            (0, n.jsx)(b.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: ta.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", { className: ta.Qq, children: e.text }),
                            }),
                            (0, n.jsx)(ts, { agents: u.get(e.id) ?? tr, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != r
                ? (0, n.jsxs)("li", {
                      className: ta.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(ti, { status: "pending" }),
                          (0, n.jsx)(b.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ta.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: ta.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tu(e) {
    let { todos: t, provisional: l, agents: a, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, n.jsxs)(eR, {
              title: I.intl.string(C.default.qCRC6c),
              trailing: (0, n.jsx)(b.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: I.intl.formatToPlainString(C.default.bQvqly, { completed: i, total: s }),
              }),
              className: ta.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, n.jsx)(tn.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: I.intl.formatToPlainString(C.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, n.jsx)("div", {
                      className: ta.rf,
                      children: (0, n.jsx)(to, { todos: t, provisional: l, agents: a }),
                  }),
              ],
          });
}
var td = l(229775),
    tc = l(165648);
function tm(e) {
    let t = e3(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? e4(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: eS(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tf(e) {
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
        g = a.useMemo(() => (0, ej.GO)(l, { turnActive: r }), [l, r]),
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
            className: tt.pj,
            "data-live": !1,
            children: (0, n.jsx)(e1.A, {
                glyph: (0, n.jsx)(eN.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: I.intl.string(C.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = r ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, ej.lt)(l) ?? o ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !b) return null;
    let j = x.tasks,
        y = e3(j.map((e) => e.taskId)),
        k = !f && (r || j.some((e) => "running" === e.task.status)),
        w = tm(j);
    return (0, n.jsx)(e1.l.Provider, {
        value: j.length,
        children: (0, n.jsxs)("ol", {
            className: tt.pj,
            "data-live": k,
            children: [
                (0, n.jsx)(ew.A, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: j.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: f,
                    durationMs: p,
                    connectsDown: j.length > 0,
                    tier: g.turn?.tier,
                }),
                j.map((e, l) => {
                    let a = null != e.task.helperMark ? e4(e.task.helperMark) : void 0,
                        r = a ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              tl,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != a && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: l < j.length - 1,
                              },
                              e.taskId,
                          );
                }),
                b
                    ? (0, n.jsx)("li", {
                          className: tt.YO,
                          children: (0, n.jsx)(tu, { todos: v, provisional: u, agents: w }),
                      })
                    : null,
            ],
        }),
    });
}
function th(e) {
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
            lastStreamedMessage: p,
            showsClosingMessage: v,
            attachmentsHost: j,
        } = a.useMemo(
            () => eC({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        y = null == u ? null : (0, n.jsx)(eF.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, n.jsx)("div", { className: tt.MT, children: y }),
        w = h
            ? (0, n.jsx)(b.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: I.intl.string(C.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: tt.ue,
        children: [
            x.length > 0 && !g
                ? (0, n.jsx)("ol", {
                      className: tt.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: tt.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tc.PT,
                                              children: eA.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === j && e === p ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(eK, { projectId: t, proposal: s })
                : v
                  ? (0, n.jsxs)("div", {
                        className: i()(tt.ky, td.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tc.PT, tt.cW),
                                children: eA.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === j ? k : null,
                            w,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(tt.ky, td.XR),
                      children: (0, n.jsx)(eX, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(tt.ky, td.XR),
                      children: (0, n.jsx)(e0, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === j ? y : null,
            null != o && o.length > 0 ? (0, n.jsx)(eL, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            v ? null : w,
        ],
    });
}
var tg = l(864970),
    tx = l(146806),
    tp = l(475358),
    tv = l(81369),
    tb = l(922016),
    tj = l(980707),
    ty = l(477782),
    tk = l(717400),
    tw = l(663341),
    tN = l(826745),
    tA = l(783977),
    tE = l(559647),
    tS = l(775602),
    tC = l(435558),
    tI = l.n(tC),
    tM = l(506774),
    tT = l(228366);
let tR = "VibegrationsComposerDrafts";
function tP() {
    return tM.w.get(tR) ?? {};
}
let t_ = new Map(),
    tL = tI().throttle(() => {
        if (0 === t_.size) return;
        let e = tP();
        for (let [t, l] of t_) "" === l ? delete e[t] : (e[t] = l);
        (t_.clear(), tM.w.set(tR, e));
    }, 1e3);
class tF extends $.Ay.Store {
    getDraft(e) {
        let t = t_.get(e);
        return null != t ? t : (tP()[e] ?? "");
    }
}
let tD = new tF(tT.h, {
    LOGOUT: function () {
        return (t_.clear(), tL.cancel(), tM.w.remove(tR), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (t_.set(t, l), tL(), "" === l && tL.flush(), !1);
    },
});
var t$ = l(113491);
(l(323874), l(14289), l(35956));
var tO = l(285796),
    tz = l(673724),
    tq = l(590380),
    tU = l(298668);
let tB = tz.Is,
    tG = 0;
function tV(e) {
    let { onUploadFile: t, onDeleteFile: l } = e,
        [n, r] = a.useState([]),
        i = a.useRef([]),
        s = a.useRef(new Set()),
        o = a.useRef(t);
    o.current = t;
    let u = a.useRef(l);
    u.current = l;
    let d = a.useCallback((e) => {
            ((i.current = e), r(e));
        }, []),
        c = a.useCallback((e) => {
            u.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    a.useEffect(() => {
        let e = s.current;
        return () => {
            for (let t of i.current)
                (e.add(t.localId),
                    null != t.previewUrl && URL.revokeObjectURL(t.previewUrl),
                    null != t.ref && c(t.ref));
        };
    }, [c]);
    let m = a.useCallback(
            (e, t) => {
                if (s.current.has(e)) return;
                let l = i.current;
                l.some((t) => t.localId === e) && d(l.map((l) => (l.localId === e ? { ...l, ...t } : l)));
            },
            [d],
        ),
        f = a.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...i.current],
                    l = [];
                for (let n of e) {
                    let e = "" === n.type ? "application/octet-stream" : n.type,
                        a = ++tG,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tB) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: I.intl.formatToPlainString(C.default.DlX57a, { count: tB }),
                        });
                        continue;
                    }
                    if (!(0, tz.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: I.intl.formatToPlainString(C.default.cI7t94, {
                                size: (0, tz.ZJ)((0, tz.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = tz.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    (t.push({ ...r, previewUrl: i }), l.push({ file: n, localId: a }));
                }
                for (let { file: e, localId: n } of (d(t), l))
                    o.current(e).then(
                        (e) => {
                            s.current.has(n) ? c(e) : m(n, { status: "ready", ref: e });
                        },
                        (e) => {
                            s.current.has(n) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                m(n, { status: "error", errorText: I.intl.string(C.default.GwEHvn) }));
                        },
                    );
            },
            [c, m, d],
        ),
        h = a.useCallback(
            (e) => {
                let t = i.current,
                    l = t.find((t) => t.localId === e);
                (s.current.add(e),
                    l?.previewUrl != null && URL.revokeObjectURL(l.previewUrl),
                    l?.ref != null && c(l.ref),
                    d(t.filter((t) => t.localId !== e)));
            },
            [c, d],
        ),
        g = a.useCallback(() => {
            let e = i.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let e of i.current) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
            return (d([]), e);
        }, [d]);
    return { drafts: n, addFiles: f, removeDraft: h, settled: n.every((e) => "ready" === e.status), takeRefs: g };
}
function tW(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(tq.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(b.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: tU.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: tU.o1,
                onClick: () => l(t.localId),
                "aria-label": I.intl.string(C.default["3HWvgk"]),
                children: (0, n.jsx)(tO.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tH = l(789438);
let tK = "text-md/normal",
    tY = null;
function tQ(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [m, f] = a.useState(0),
        [h, g] = a.useState(0),
        [x, p] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = c.current;
        function n() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = d.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (g(i + r), f(s));
            let o = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                m = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : o / c;
            p({
                frontFrom: 1e3 * (0, tx._R)(m),
                frontTo: 1e3 * (0, tx._R)(h),
                backFrom: 1e3 * (0, tx.T)(m),
                backTo: 1e3 * (0, tx.T)(h),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        a.useEffect(() => {
            c.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [v, j] = a.useState(0),
        [y, k] = a.useState(null),
        w = a.useRef(!1),
        N = a.useCallback(() => {
            (k(w.current ? (l ? "through" : "out") : l ? "in" : null), j((e) => e + 1));
        }, [l]);
    a.useEffect(() => {
        w.current = l;
    }, [l, t]);
    let A = "in" === y ? x.backFrom : x.frontFrom,
        E = "out" === y ? x.frontTo : x.backTo,
        S = (0, $.bG)([tS.Ay], () => tS.Ay.useReducedMotion),
        M = t === I.intl.string(C.default.Jj8Ftb),
        T = s === t && M;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(tH.VT, { [tH.qk]: a }),
            style: a
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, E - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && v > 0 && null != y ? v % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, n.jsx)(tp.e, { shortcut: "tab", className: tH.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tg.o, {
                text: t,
                variant: tK,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(tH.xM, { [tH.s2]: r }),
                onStart: N,
                onComplete: () => o(t),
            }),
            R(tH.IS, l || (!S && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: tH.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(b.E, { variant: tK, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: tH.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(b.E, { variant: tK, tag: "span", className: tH.xM, children: t }),
                          R(tH.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function tX(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            hasPendingContext: p = !1,
            modelSettings: v,
            onModelSettingsChange: b,
        } = e,
        [j, y] = a.useState(() => tD.getDraft(t)),
        k = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), y(e));
            },
            [t],
        ),
        [w, N] = a.useState(t);
    w !== t && (N(t), y(tD.getDraft(t)));
    let A = (0, $.bG)([tS.Ay], () => tS.Ay.isSubmitButtonEnabled),
        [E, S] = a.useState(!1),
        [M, T] = a.useState(!1);
    a.useEffect(() => {
        i || T(!1);
    }, [i]);
    let R = a.useRef(null),
        { drafts: P, addFiles: _, removeDraft: L, settled: F, takeRefs: D } = tV({ onUploadFile: d, onDeleteFile: m }),
        O = "" !== j.trim() || P.length > 0 || p,
        z = l && O && F,
        [q, U] = a.useState(null);
    a.useEffect(() => {
        if (null == q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => U(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]);
    let B = a.useCallback(() => {
            if (!z) return;
            let e = D();
            o(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == tY && (tY = document.createElement("canvas").getContext("2d"));
                let i = tY;
                if (null == i) return r;
                let s = getComputedStyle(e);
                i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                if (o <= 0 || i.measureText(r).width <= o) return r;
                let u = 0,
                    d = r.length;
                for (; u < d;) {
                    let e = Math.ceil((u + d) / 2);
                    i.measureText(r.slice(0, e)).width <= o ? (u = e) : (d = e - 1);
                }
                let c = r.slice(0, u),
                    m = c.lastIndexOf(" ");
                return (m > 0 ? c.slice(0, m) : c).trimEnd();
            })(Z.current?.querySelector("textarea") ?? null, es.current, j);
            ("" !== t && U(t), k(""));
        }, [z, j, o, D, k]),
        G = a.useCallback(
            (e) => {
                (e.preventDefault(), B());
            },
            [B],
        ),
        V = a.useCallback(() => {
            null == u || M || (T(!0), u());
        }, [u, M]),
        W = null == g || "" !== j || !l || r || s || p ? null : g,
        H = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !M) {
                    (e.preventDefault(), e.stopPropagation(), V());
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
            [B, f, i, u, M, V, W, k],
        ),
        K = a.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), _(t));
            },
            [l, _],
        ),
        Y = a.useCallback(
            (e) => {
                (e.preventDefault(), S(!1), l && _(Array.from(e.dataTransfer.files)));
            },
            [l, _],
        ),
        Q = a.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), S(!0));
        }, []),
        X = a.useCallback(
            (e) => {
                (_(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [_],
        ),
        Z = a.useRef(null),
        J = a.useRef(null),
        [ee, et] = a.useState(0),
        [el, en] = a.useState(!1);
    a.useEffect(() => {
        if (0 === j.length) return void en(!1);
        let e = Z.current?.querySelector("textarea");
        if (null != e) {
            let t = t0(e);
            null != t && et(t);
        }
        en(!0);
        let t = setTimeout(() => en(!1), tZ);
        return () => clearTimeout(t);
    }, [j]);
    let ea = a.useMemo(() => ({ "--custom-glow-x": `${ee}px` }), [ee]),
        er = el ? ` ${tH.EB}` : "",
        ei = s
            ? I.intl.string(C.default.pGFXZ0)
            : r
              ? I.intl.string(C.default.JeM47J)
              : l
                ? p
                    ? I.intl.string(C.default.Bs7bUv)
                    : x
                      ? I.intl.string(C.default.M3ovXY)
                      : I.intl.string(i ? C.default["67PpcP"] : C.default.ahRdoJ)
                : I.intl.string(C.default.nm4w9P),
        es = a.useRef(0),
        eo = a.useRef(null),
        eu = a.useCallback((e) => {
            if ((eo.current?.disconnect(), null == e)) return;
            es.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                es.current = e.clientWidth;
            });
            (t.observe(e), (eo.current = t));
        }, []),
        ed = a.useId(),
        ec = null != W,
        em = q ?? W ?? ei,
        ef = "" === j && "" !== em;
    return (0, n.jsxs)("form", {
        onSubmit: G,
        onDrop: Y,
        onDragOver: Q,
        onDragLeave: () => S(!1),
        className: E ? `${tH.DA} ${tH.pV}` : tH.DA,
        children: [
            P.length > 0
                ? (0, n.jsx)("div", {
                      className: tH.lN,
                      children: P.map((e) => (0, n.jsx)(tW, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${tH.wg} ${tH.LP}${er}`, style: ea, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${tH.wg} ${tH.L3}${er}`, style: ea, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: tH.VA,
                ref: Z,
                children: [
                    (0, n.jsx)("input", {
                        ref: R,
                        type: "file",
                        multiple: !0,
                        onChange: X,
                        className: tH.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == h
                        ? (0, n.jsx)(eD.m, {
                              text: I.intl.string(C.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: J,
                                  type: "button",
                                  className: `${tH.Y0} ${tH.nu}`,
                                  disabled: !l,
                                  onClick: () => R.current?.click(),
                                  "aria-label": I.intl.string(C.default.d6Rqlu),
                                  children: (0, n.jsx)(tv.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: tH.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tb.Y, {
                              targetElementRef: J,
                              position: "top",
                              align: "left",
                              animation: tb.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tj.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": I.intl.string(I.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(ty.rX, {
                                          children: [
                                              (0, n.jsx)(ty.Dr, {
                                                  id: "upload-file",
                                                  label: I.intl.string(I.t["d3+iYs"]),
                                                  iconLeft: tv.H,
                                                  leadingAccessory: { type: "icon", icon: tv.H },
                                                  action: () => R.current?.click(),
                                              }),
                                              null != h
                                                  ? (0, n.jsx)(ty.Dr, {
                                                        id: "import-project",
                                                        label: I.intl.string(C.default.edKajy),
                                                        iconLeft: tk.q,
                                                        leadingAccessory: { type: "icon", icon: tk.q },
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
                                      ref: J,
                                      type: "button",
                                      className: `${tH.Y0} ${tH.nu}`,
                                      disabled: !l,
                                      "aria-label": I.intl.string(I.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(tw.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: tH.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, n.jsx)("div", {
                              ref: eu,
                              className: tH.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(tQ, { text: em, offering: ec && null == q, typed: null != q }),
                          })
                        : null,
                    (0, n.jsx)(tN.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: H,
                        onPaste: K,
                        placeholder: ef ? "" : ei,
                        disabled: !l,
                        "aria-label": I.intl.string(C.default.OPr66w),
                        "aria-describedby": ef ? ed : void 0,
                        rows: 1,
                        className: tH.jp,
                    }),
                    ef ? (0, n.jsx)(tn.A, { id: ed, children: ei }) : null,
                    (0, n.jsx)("div", {
                        className: tH.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(eD.m, {
                                      text: I.intl.string(C.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${tH.Y0} ${tH.$E}`,
                                          disabled: M,
                                          onClick: V,
                                          "aria-label": I.intl.string(C.default.KdgI4k),
                                          children: (0, n.jsx)(eN.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != v && null != b
                                  ? (0, n.jsx)(t$.A, {
                                        settings: v.settings,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: b,
                                        className: `${tH.Y0} ${tH.$E}`,
                                        icon: (0, n.jsx)(tA.R, {
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
                              className: tH.fF,
                              children: [
                                  (0, n.jsx)("div", { className: tH.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: tH.rt,
                                      disabled: !z,
                                      "aria-label": I.intl.string(C.default["22GHMt"]),
                                      children: (0, n.jsx)(tE.SendMessageIcon, {
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
let tZ = 1500,
    tJ = [
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
function t0(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t0.mirror;
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
                (t0.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of tJ) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
t0.mirror = null;
var t1 = l(320095),
    t2 = l(963852),
    t7 = l(521981),
    t6 = l(763754),
    t5 = l(491182),
    t4 = l(438729),
    t3 = l(622868),
    t9 = l(448368),
    t8 = l(837528),
    le = l(601280),
    lt = l(715628),
    ll = l(752636),
    ln = l(9842),
    la = l(589022),
    lr = l(95701),
    li = l(994500),
    ls = l(967198);
let lo = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lu(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function ld(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lc(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = ld(e, t),
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
    if (lu(a) && lu(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lu(ld(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function lm(e, t) {
    let { streaming: l } = t,
        n = (0, $.bG)([tS.Ay], () => tS.Ay.useReducedMotion),
        r = l && !n,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        o = i;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && lc(t, r);) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== i && s(o));
    let u = r && o.length < e.length,
        d = a.useRef(o);
    a.useLayoutEffect(() => {
        d.current = o;
    });
    let c = a.useRef(0),
        m = a.useRef(0);
    (a.useEffect(() => {
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
                                    for (; n > t + 1 && l - n < 12 && lo.has(e.charAt(n - 1));) n--;
                                    return lo.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lc(t, o);) o++;
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
        }, [u]));
    let f = Math.min(o.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: r && f < e.length };
}
var lf = l(803306);
let lh = new Set(),
    lg = new Map();
function lx(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
var lp = l(73432),
    lv = l(441136);
let lb = (0, lr.createChannelRecord)({ id: "vibegrations-builder", type: _.rbe.DM }),
    lj = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function ly(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lv.Yq, { [lv.x1]: t }), children: e });
}
function lk(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lw(e, t, l) {
    let { content: r } = (0, le.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lb, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(t4.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lt.A)(i, r);
}
function lN(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, t8.m)(e, lb, t.usernameProfile, r),
        o = (0, t8.Jo)(t.avatarProfile, r),
        u = (0, $.bG)([ls.A], () => ls.A.getGuildId()),
        d = (0, $.bG)([er.default], () => er.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = er.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(la.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
function lA(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, t7.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lv.GV,
                              children: [
                                  (0, n.jsx)(lp.A, { className: lv.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, $.cf)(
            [li.A],
            () => ({
                isReplyAuthorBlocked: li.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: li.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, t6.X4)(l),
        c = (0, t6.X4)(t),
        m = lN(l);
    return (0, n.jsx)(t9.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lb,
        referencedMessage: { state: ln.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != i,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: i,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function lE(e) {
    let { message: t, author: l } = e,
        a = lN(t);
    return (0, n.jsx)(t3.Ay, {
        message: t,
        channel: lb,
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
function lS(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || lh.has(e) || null != er.default.getUser(e)) return;
                let t = lg.get(e) ?? 0;
                t >= 3 ||
                    (lg.set(e, t + 1),
                    lh.add(e),
                    lf
                        .getUser(e)
                        .finally(() => lh.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, $.bG)(
            [er.default],
            () => lx(r, null != r ? er.default.getUser(r) : null, er.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, t6.FT)(o, null), [o]),
        d = a.useMemo(() => (0, eb.LL)(t), [t]),
        c = d?.body ?? t,
        m = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, t2.Ay)({ channelId: lb.id, content: c, author: o });
            return (0, t1.rh)({ ...e, timestamp: lk(l, e.timestamp), state: _.cmJ.SENT });
        }, [c, o, l]);
    return null == m
        ? null
        : (0, n.jsx)(lC, { message: m, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function lC(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = lw(t, a);
    return (0, n.jsx)(t5.A, {
        className: lv.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(lE, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: lv.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lv.GV,
                              children: [
                                  (0, n.jsx)(lp.A, { className: lv.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lv.WO, children: o }),
                      ],
                  }),
        childrenAccessories: ly(i, "" !== a),
        disableInteraction: !0,
    });
}
function lI(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lm(t, { streaming: u }),
        m = a.useMemo(() => (0, t6.FT)(null, null), []),
        f = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, $.bG)(
            [er.default],
            () => lx(h, null != h ? er.default.getUser(h) : null, er.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, eb.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, t2.Ay)({ channelId: lb.id, content: x?.body ?? i.content, author: g });
            return (0, t1.rh)({ ...e, id: i.id, timestamp: lk(i.createdAt, e.timestamp), state: _.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lb.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, t2.Ay)({ channelId: lb.id, content: d, author: lj });
            return (0, t1.rh)({
                ...e,
                timestamp: lk(l, e.timestamp),
                state: _.cmJ.SENT,
                ...(null != v ? { type: _.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = lw(b, d, lv.OS);
    return (0, n.jsxs)("div", {
        className: lv.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(t5.A, {
                className: lv.yE,
                author: f,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(lA, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, ll.A)({ message: b, channel: lb, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: ly(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lv.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(O.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let lM = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var lT = l(375068);
function lR(e) {
    let { projectId: t, messages: l, ref: r, onPickIdea: i } = e,
        s = a.useRef(null),
        o = a.useCallback(
            (e) => {
                ((s.current = e), "function" == typeof r ? r(e) : null != r && (r.current = e));
            },
            [r],
        ),
        [u, d] = a.useState(null),
        c = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = a.useCallback((e) => {
            let t = s.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600)));
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
                        let e = !(0, ek.BL)(t),
                            n = eC({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, ej.C6)(t.steps, { turnActive: e }),
                            { lastWork: i, open: s } = (0, ej.CT)(r, { turnActive: e }),
                            o = r.at(-1)?.index,
                            u = !1;
                        for (let d of r) {
                            if (null != d.prose && lM.test(d.prose.content)) u = !0;
                            else if (null != d.prose) {
                                let r = `${t.render_id}:${d.key}`;
                                l(
                                    {
                                        kind: "prose",
                                        key: r,
                                        message: t,
                                        groupStart: !1,
                                        content: d.prose.content,
                                        hostsAttachments:
                                            "streamed" === n.attachmentsHost &&
                                            d.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && d.index === o && !d.hasWork,
                                    },
                                    { actor: "assistant", boundary: r },
                                );
                            }
                            (d.hasWork || d.hasTodos) &&
                                l(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${d.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: d.index,
                                        active: d.index === s,
                                        closed: d.index !== s,
                                        ...(null != d.durationMs ? { segmentDurationMs: d.durationMs } : {}),
                                        reportsDuration: d.index === i,
                                        hostsChecklist: d.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let d = lM.test(t.content ?? "");
                        if (
                            (!0 === t.interrupted || u || d
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
                            (n.showsClosingMessage && !d) ||
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
                                (n.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (l = void 0));
                                continue;
                            }
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                            (e &&
                                ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                                n.push(e));
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
              className: lT.x7,
              children: (0, n.jsx)(lP, {
                  role: "assistant",
                  children: (0, n.jsx)(lI, { content: I.intl.string(C.default.khZEUv) }),
              }),
          })
        : (0, n.jsx)("ol", {
              ref: o,
              className: lT.x7,
              children: f.map((e) => {
                  let a = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                          return (0, n.jsx)(
                              lP,
                              {
                                  role: "user",
                                  anchorId: a.id,
                                  highlighted: u === a.id,
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lS, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != l ? (0, n.jsx)(eF.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, n.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lI, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, n.jsx)(eF.A, { projectId: t, attachments: a.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, n.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tf, {
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
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tf, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, n.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tf, {
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
                              lP,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lI, {
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
                                      accessories: (0, n.jsx)(th, {
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
function lP(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(lT.xk, { [lT.Qo]: r, [lT.q3]: s }),
        children: l,
    });
}
function l_(e) {
    switch (e) {
        case "connecting":
            return I.intl.string(C.default.W7oyuf);
        case "closed":
            return I.intl.string(C.default["yBmS+I"]);
        case "failed":
            return I.intl.string(C.default.eE60xI);
    }
}
var lL = l(559676),
    lF = l(625903),
    lD = l(964675);
function l$(e) {
    let { projectId: t } = e,
        l = (0, $.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        r = a.useCallback(() => {
            (0, eZ.A)(t, { isPreview: !0 });
        }, [t]);
    return l
        ? (0, n.jsx)(eI.D, {
              className: lD.h,
              "aria-label": I.intl.string(C.default.gTMvzD),
              onClick: r,
              children: (0, n.jsx)(lF.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lO = l(823376),
    lz = l(495557);
function lq(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = lm(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lz.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ev.Ch, {
                ref: o,
                className: lz.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tc.PT, lz.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eA.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lU = l(921461);
function lB(e) {
    let { activity: t, compacting: l = !1, restoring: r = !1, controlling: s = !1, spoken: o, onSpokenChange: u } = e,
        d = a.useRef(null),
        c = a.useId(),
        [m, f] = a.useState(null),
        h = (function (e) {
            let { activity: t, compacting: l = !1, restoring: n = !1, controlling: a = !1 } = e,
                r = null != t && "end" !== t.phase;
            return a
                ? C.default.ivvYHP
                : n
                  ? C.default.aFffp2
                  : l
                    ? C.default["0vH/5G"]
                    : r
                      ? C.default.Ly7F7x
                      : C.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, controlling: s }),
        g = I.intl.string(h),
        [x, p] = a.useState(o ?? g),
        v = a.useRef(g);
    (a.useEffect(() => {
        v.current = g;
    }, [g]),
        a.useEffect(() => {
            u?.(x);
        }, [x, u]));
    let b = a.useRef(null),
        j = a.useRef(x);
    (a.useEffect(() => {
        j.current = x;
    }, [x]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                v.current !== j.current ? p(v.current) : b.current?.play();
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
                (b.current?.stop(), a());
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
    let y = null != t && "" !== t.text,
        k = t?.session ?? null,
        w = y && null != k && m === k,
        N = a.useCallback(() => {
            y && null != k && f((e) => (e === k ? null : k));
        }, [y, k]),
        A = a.useCallback(() => f(null), []);
    return (0, n.jsx)(tb.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: w,
        onRequestClose: A,
        renderPopout: () => (0, n.jsx)(lq, { id: c, activity: t }),
        children: () =>
            (0, n.jsxs)(eI.D, {
                innerRef: d,
                className: i()(lU.hF, y && lU.Xd),
                "aria-label": I.intl.string(r ? C.default.pGFXZ0 : C.default.SzdX35),
                "aria-expanded": w,
                "aria-describedby": w ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": I.intl.string(h),
                onClick: N,
                children: [
                    (0, n.jsx)("span", {
                        className: lU.bl,
                        children: (0, n.jsx)(lO.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: lU.xu,
                        "aria-hidden": !!s || void 0,
                        children: (0, n.jsx)(tg.o, {
                            ref: b,
                            text: x,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: lU.yE,
                        }),
                    }),
                ],
            }),
    });
}
var lG = l(280894);
function lV(e) {
    return e.toLocaleString();
}
function lW(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: lG.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: lG.mf,
                children: [
                    (0, n.jsx)(b.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lV((0, tz.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(b.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lV(l.input_tokens),
                    " in \xb7 ",
                    lV(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${lV(l.cache_creation_input_tokens)} cache write \xb7 ${lV(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function lH(e) {
    let { project: t } = e,
        l = (0, tz.wU)(t.compaction),
        a = (0, tz.wU)(t.classifier),
        r = (0, tz.wV)(t.orchestrator, t.codegen),
        i = (0, tz.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: lG.si,
        role: "dialog",
        "aria-label": I.intl.string(C.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: lG.Q$,
                children: (0, n.jsxs)("div", {
                    className: lG.mf,
                    children: [
                        (0, n.jsxs)(b.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lV((0, tz.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(lW, { label: I.intl.string(C.default.R9aduM), usage: r }),
            (0, n.jsx)(lW, { label: I.intl.string(C.default.Tj6b30), usage: l }),
            (0, n.jsx)(lW, { label: I.intl.string(C.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: lG.mf,
                children: [
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(C.default["kILb+R"]),
                    }),
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tz.sj)(i) ? "\u2014" : `${Math.round(100 * (0, tz.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function lK(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tb.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(lH, { project: t }),
        children: (e) =>
            (0, n.jsx)(eI.D, {
                innerRef: l,
                className: lG.Y$,
                "aria-label": I.intl.string(C.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(e$.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lY = l(258216);
function lQ(e) {
    let t,
        {
            projectId: l,
            thinking: r,
            restoring: i = !1,
            thinkingActivity: s,
            compacting: o,
            projectUsage: u,
            connState: d,
        } = e,
        c = (0, lL.o4)(l),
        [m, f] = a.useState(null),
        h =
            null == u
                ? null
                : ((t = (0, tz.a7)(u.cost_usd)),
                  {
                      text: I.intl.formatToPlainString(C.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: I.intl.formatToPlainString(C.default["7SZZvj"], { runes: t, turns: u.turns }),
                  });
    return (0, n.jsxs)("div", {
        className: lY.jf,
        children: [
            (0, n.jsx)("div", {
                className: lY.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    r || i || c
                        ? (0, n.jsx)(lB, {
                              activity: s,
                              compacting: o,
                              restoring: i,
                              controlling: c,
                              spoken: m,
                              onSpokenChange: f,
                          })
                        : null,
            }),
            (0, n.jsx)(l$, { projectId: l }),
            null == u || null == h
                ? null
                : (0, n.jsxs)("span", {
                      className: lY.BP,
                      children: [
                          (0, n.jsx)(b.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": h.aria,
                              children: h.text,
                          }),
                          (0, n.jsx)(lK, { project: u }),
                      ],
                  }),
            "open" === d
                ? null
                : (0, n.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === d ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": I.intl.formatToPlainString(C.default.eDDdhB, { status: l_(d) }),
                      "data-vibegrations-conn": !0,
                      "data-state": d,
                      className: lY.XF,
                      children: l_(d),
                  }),
        ],
    });
}
var lX = l(22231),
    lZ = l(408278),
    lJ = l(900797),
    l0 = l(847374),
    l1 = l(477155),
    l2 = l(935286),
    l7 = l(856795),
    l6 = l(424110);
function l5(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eI.D, {
        className: i()(l6.uK, { [l6.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": I.intl.formatToPlainString(d ? C.default.aL1BKQ : C.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: l6.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: l6.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: l6.l8,
                        children: (0, n.jsx)(b.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l6.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, n.jsx)(b.E, {
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
                ? (0, n.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: l6.rM,
                      children: I.intl.string(C.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function l4(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(l6.Ge, l6.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(l5, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: l6.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: l6.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(lX.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(l6.Pu, l6.es), children: s }),
                ],
            }),
        ],
    });
}
function l3(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [s, u] = a.useState({}),
        [d, c] = a.useState({}),
        [m, f] = a.useState(0),
        [h, g] = a.useState(null),
        [x, p] = a.useState(null),
        [v, j] = a.useState(null),
        [y, k] = a.useState(!1),
        w = a.useRef(null),
        [N, A] = a.useState(null),
        E = a.useRef(null),
        S = a.useRef(0),
        M = null == l,
        T = t.questions.length,
        R = Math.min(m, T - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        O = d[P.id] ?? "",
        { text: z, phase: q } = (0, l7.Q)(P.question),
        U = z === P.question,
        B = U && D?.id === P.id && D.truncated;
    a.useLayoutEffect(() => {
        if (null == N || F || !U) return;
        function e() {
            if (null == N) return;
            let e = N.scrollHeight > N.clientHeight + 1;
            $((t) => (t?.id === P.id && t.truncated === e ? t : { id: P.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(N), () => t.disconnect());
    }, [U, N, P.id, F]);
    let G = I.intl.string(F ? I.t.iTcuma : I.t.dcl9MQ),
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
                S.current += 1;
                let l = S.current;
                (g({ direction: t, moves: l }), p({ question: P, draft: O, direction: t, moves: l }), k(!0), f(e));
            },
            [O, P],
        ),
        H = a.useCallback(() => {
            let e = w.current,
                t = E.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = w.current,
            t = E.current;
        if (null == e || null == t) return;
        H();
        let l = new ResizeObserver(H);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [H]);
    let K = h?.moves;
    a.useEffect(() => {
        if (null == K) return;
        let e = setTimeout(() => p(null), 400),
            t = setTimeout(() => k(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [K]);
    let Y = a.useCallback(
            (e) => {
                if (M) return;
                let l = { ...s, [P.id]: e };
                u(l);
                let n = (function (e, t, l) {
                    let { questions: n } = e;
                    for (let e = 1; e <= n.length; e++) {
                        let a = (l + e) % n.length,
                            r = t[n[a].id];
                        if (null == r || "" === r.text.trim()) return a;
                    }
                    return null;
                })(t, l, R);
                null == n ? V(l) : W(n, n < R ? "back" : "forward");
            },
            [s, t, M, R, P.id, V, W],
        ),
        Q = a.useCallback(() => {
            if (M || 0 === R) return;
            let e = t.questions[R - 1];
            (u((t) => {
                let l = { ...t };
                return (delete l[e.id], l);
            }),
                c((t) => {
                    let l = { ...t };
                    return (delete l[e.id], l);
                }),
                W(R - 1, "back"));
        }, [t, M, R, W]),
        X = R > 0 && !M,
        Z = a.useCallback(() => {
            let e = O.trim();
            "" !== e && Y({ kind: "custom", text: e });
        }, [O, Y]),
        [J, ee] = a.useState(!1),
        [et, el] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let en = a.useCallback(() => {
            null != r && (el(!0), setTimeout(r, 150));
        }, [r]),
        ea = a.useCallback(() => {
            M || R >= T - 1 || W(R + 1, "forward");
        }, [M, R, T, W]),
        er = R < T - 1 && !M;
    return (0, n.jsxs)("section", {
        className: i()(l6.$O, { [l6.fI]: J && !et, [l6.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: l6.rf,
                style: null == v ? void 0 : { height: v.heading + v.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: w,
                        className: l6.wx,
                        children: [
                            (0, n.jsx)(b.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(l6.TK, l6.R_, { [l6.TB]: "exit" === q, [l6.JU]: "enter" === q }),
                                children: z,
                            }),
                            B || F
                                ? (0, n.jsx)("div", {
                                      className: l6.Q7,
                                      children: (0, n.jsx)(eD.m, {
                                          text: G,
                                          children: (0, n.jsx)(lZ.K, {
                                              icon: F ? lJ.t : l0.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: P.id, expanded: !F }),
                                              "aria-label": G,
                                              "aria-controls": `${P.id}-label`,
                                              "aria-expanded": F,
                                          }),
                                      }),
                                  })
                                : null,
                            null == r
                                ? null
                                : (0, n.jsx)(eI.D, {
                                      className: i()(l6.gb, l6.Q7),
                                      onClick: en,
                                      "aria-label": I.intl.string(C.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, n.jsx)(o.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: l6.Cg,
                        style: null == v ? void 0 : { insetBlockStart: v.heading },
                        children: (0, n.jsxs)("div", {
                            className: l6.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: E,
                                    className: l6.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                l5,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: M,
                                                    onPick: (e) => Y({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: l6.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: l6.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(lX.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tN.y, {
                                                    value: O,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [P.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), Z());
                                                    },
                                                    placeholder: I.intl.string(C.default.qifsdL),
                                                    "aria-label": I.intl.formatToPlainString(C.default.XHESTL, {
                                                        question: P.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: l6.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, n.jsx)(
                                          l4,
                                          { question: x.question, draft: x.draft, direction: x.direction, disabled: M },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            T > 1
                ? (0, n.jsxs)("div", {
                      className: l6.qr,
                      children: [
                          (0, n.jsx)(b.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: I.intl.formatToPlainString(C.default["7bypa+"], { index: R + 1, total: T }),
                          }),
                          (0, n.jsxs)("div", {
                              className: l6.Np,
                              children: [
                                  (0, n.jsx)(eI.D, {
                                      className: i()(l6.gb, { [l6.yI]: !X }),
                                      onClick: X ? Q : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": M,
                                      "aria-label": I.intl.string(C.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, n.jsx)(l1.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eI.D, {
                                      className: i()(l6.gb, { [l6.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": M,
                                      "aria-label": I.intl.string(C.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(l2.E, {
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
var l9 = l(643278),
    l8 = l(191521),
    ne = l(405189);
function nt(e) {
    let { line: t, placement: l, todos: r, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        d = null != l,
        [c, m] = a.useState(l ?? "top"),
        [f, h] = a.useState(d),
        [g, x] = a.useState(!1),
        [p, v] = a.useState(!1),
        [b, j] = a.useState(d);
    (b !== d && (j(d), null != l ? (m(l), h(!0)) : (x(!1), v(!1))),
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
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, d]));
    let [y, k] = a.useState(!1),
        [w, N] = a.useState(!1),
        [A, E] = a.useState(p);
    (A !== p && (E(p), p ? k(!0) : N(!1)),
        a.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        a.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, p]));
    let S = null != r && r.length > 0,
        M = a.useCallback(() => v((e) => !e), []);
    return f
        ? (0, n.jsxs)("div", {
              className: ne.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(ne.vK, { [ne.ho]: g && d, [ne.ET]: !d }),
                      children: [
                          null == u
                              ? (0, n.jsx)("ol", {
                                    className: i()(ne.Rk, tt.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(e1.A, {
                                        glyph: (0, n.jsx)(l8.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eI.D, {
                                    className: ne.pZ,
                                    onClick: u,
                                    "aria-label": I.intl.string(C.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(ne.Rk, tt.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(e1.A, {
                                            glyph: (0, n.jsx)(l8.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          S
                              ? (0, n.jsx)(eD.m, {
                                    text: I.intl.string(C.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eI.D, {
                                        className: ne.BO,
                                        onClick: M,
                                        "aria-expanded": p,
                                        "aria-label": I.intl.string(C.default.qCRC6c),
                                        children: (0, n.jsx)(l9.ClipboardListIcon, {
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
                  y && S
                      ? (0, n.jsx)("div", {
                            className: i()(ne.vB, { [ne.pg]: p && w, [ne.ui]: !p }),
                            children: (0, n.jsx)(tu, { todos: r, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nl = l(366010),
    nn = l(825484),
    na = l(859703),
    nr = l(738822),
    ni = l(291749),
    ns = l(590202),
    no = l(792620),
    nu = l(201805),
    nd = l(617986),
    nc = l(363195),
    nm = l(971276),
    nf = l(710969);
let nh = !1;
function ng() {
    return nh;
}
var nx = l(749414);
function np(e) {
    let t,
        l,
        r,
        { open: i } = e,
        s =
            ((t = (0, nu.dN)()),
            (l = (0, $.bG)([na.A], () => na.A.isQuestAccessSuspended || null != na.A.questEnrollmentBlockedUntil, [])),
            (r = (0, $.bG)([na.A], () => null != na.A.getQuestPreviewOverride(nr.uF.QUEST_BAR_V2), [])),
            null != t && (0, no.vv)(t)
                ? (function (e, t) {
                      let { overridden: l, gatesClosed: n } = t;
                      return null != e && (0, nm.s)()
                          ? l
                              ? e.userStatus?.claimedAt != null
                                  ? null
                                  : e
                              : n || (0, nf.Ic)(e) || e.userStatus?.completedAt != null
                                ? null
                                : e
                          : null;
                  })(t, { overridden: r, gatesClosed: l })
                : null),
        [o, u] = a.useState(ng),
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
                                ((i.current = null), r(!1), l(!1));
                            }, 150)),
                            () => {
                                null != i.current && (clearTimeout(i.current), (i.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: n }
            );
        })(i && !o && null != s),
        [m, f] = a.useState(s);
    null != s && s !== m && f(s);
    let g = s ?? m,
        x = (0, $.bG)([nc.A], () => nc.A.getState().theme),
        p = (0, nl.M)(x) ? _.NJ8.DARK : _.NJ8.LIGHT,
        v = null != g ? (0, ni.tW)(g, ni.fY.GAME_TILE, p).url : null,
        j = null != v && "" !== v ? v : null,
        y = a.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: nr.uF.QUEST_BAR_V2,
                sourceQuestContent: nr.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: ns.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, nd.d5)({ quest: s, ...e })
                : await (0, nd.e0)(s, { ...e, questContentCTA: ns.Cy.ACCEPT_QUEST });
        }, [s]),
        k = a.useCallback(() => {
            ((nh = !0), u(!0));
        }, []);
    return d && null != g
        ? (0, n.jsxs)("aside", {
              className: nx.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != j
                      ? (0, n.jsxs)("div", {
                            className: nx.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("img", { className: nx.Rx, src: j, alt: "" }),
                                (0, n.jsx)("div", { className: nx._e }),
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: nx.iB,
                      children: [
                          null != j ? (0, n.jsx)("img", { className: nx.w1, src: j, alt: "" }) : null,
                          (0, n.jsxs)("div", {
                              className: nx.Ug,
                              children: [
                                  (0, n.jsx)(b.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: I.intl.string(C.default["09LJ+I"]),
                                  }),
                                  (0, n.jsx)(b.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: I.intl.format(I.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsxs)(nn.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, n.jsx)(h.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: I.intl.string(C.default.egO5fO),
                          }),
                          (0, n.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: I.intl.string(I.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var nv = l(651649),
    nb = l(522250),
    nj = l(670455),
    ny = l(348800);
let nk = [I.intl.string(C.default["E+Q26x"]), I.intl.string(C.default["06/jqP"]), I.intl.string(C.default["3gSfUa"])];
function nw(e) {
    let { projectId: t, restoreState: r } = e,
        i = (0, $.bG)([ek.Ay], () => ek.Ay.getMessages(t), [t]),
        s = (0, $.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, $.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, $.bG)([ek.Ay], () => ek.Ay.getProjectUsage(t), [t]),
        d = (0, $.bG)([ek.Ay], () => ek.Ay.getThinkingActivity(t), [t]),
        c = (0, $.bG)([ek.Ay], () => ek.Ay.isCompacting(t), [t]),
        f = (0, $.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(null),
        v = a.useRef(!0),
        [j, y] = a.useState(!0);
    a.useEffect(() => {
        v.current && x.current?.scrollToBottom();
    }, [i]);
    let k = a.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        w = a.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            v.current = t < 32;
            let l = t > 1;
            y((e) => (!l === e ? e : !l));
        }, []);
    (a.useLayoutEffect(() => {
        let e = g.current,
            t = p.current;
        if (null == e) return;
        let l = x.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            v.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => x.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
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
            o.observe(e),
            null != l && o.observe(l),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != i && cancelAnimationFrame(i));
            }
        );
    }, []),
        a.useEffect(() => {
            (0, m.Hc)(t);
        }, [t]),
        a.useEffect(
            () => () => {
                let e;
                (e = (0, nb.hl)(t)) < nb.qu ||
                    (!(0, nb.Xi)(t) &&
                        nv.A.possiblyShowFeedbackModal(nj.MW.VIBEGRATIONS, () => {
                            ((0, nb.AH)(t),
                                (0, eY.openModalLazy)(async () => {
                                    let { default: a } = await Promise.all([
                                        l.e("312513"),
                                        l.e("218413"),
                                        l.e("137381"),
                                        l.e("847004"),
                                        l.e("341676"),
                                    ]).then(l.bind(l, 580711));
                                    return (l) => (0, n.jsx)(a, { ...l, projectId: t, promptCount: e });
                                }));
                        }));
            },
            [t],
        ));
    let N = (0, ey.Q_)(t),
        A = a.useCallback(
            (e, l) => {
                (0, m.dv)(t, e, l);
            },
            [t],
        ),
        E = a.useCallback(
            (e, l) => {
                0 === N.annotations.length
                    ? A(e, l)
                    : (A((0, eb.Mx)({ annotations: N.annotations, metaComment: e, context: N.context }), l),
                      (0, ey.PS)(t));
            },
            [N, A, t],
        ),
        S = a.useCallback(() => (0, m.fu)(t), [t]),
        M = a.useCallback((e) => A(e.implementation_prompt), [A]),
        T = a.useCallback((e) => A(e), [A]),
        R = a.useCallback((e) => (0, m.XZ)(t, e), [t]),
        P = a.useCallback((e) => (0, m.vX)(t, e), [t]),
        _ = a.useCallback((e) => (0, m.Vm)(t, e), [t]),
        L = a.useCallback(() => A(I.intl.string(C.default.Jj8Ftb)), [A]),
        F = r?.status === "restoring",
        D = "open" === s && !o && !F,
        O = i[i.length - 1],
        z = null != O && "assistant" === O.role && null != O.proposal,
        [q, U] = a.useState(null),
        B = O?.clarification != null && O.clarification.id !== q ? O.clarification : null,
        G = a.useCallback(() => {
            null != B && U(B.id);
        }, [B]),
        V = (0, $.bG)([ek.Ay], () => ek.Ay.hasLoadedHistory(t), [t]),
        W = a.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return nk[e % nk.length];
        }, [t]),
        H = z
            ? I.intl.string(C.default.Jj8Ftb)
            : O?.kind === "plan_implemented"
              ? I.intl.string(C.default["3sTTBu"])
              : V && 0 === i.length
                ? W
                : null,
        K = a.useMemo(() => {
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                if ("assistant" === t.role && !(0, ek.BL)(t)) return t;
            }
        }, [i]),
        Y = null != K,
        Q = z && D ? L : void 0,
        [X, Z] = a.useState(null),
        [J, ee] = a.useState(Y);
    (J !== Y && (ee(Y), Y || Z(null)),
        a.useEffect(() => {
            if (!Y) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Z(null)
                        : Z(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [Y, K?.steps]));
    let et = a.useMemo(() => (null != K ? (0, ew.b)(K.steps) : ""), [K]),
        el = a.useMemo(() => (null != K ? ((0, ej.lt)(K.steps) ?? K.todos) : void 0), [K]),
        en = K?.provisionalTodo,
        ea = a.useMemo(() => {
            var e;
            return null != K ? ((e = K.steps), tm((0, ej.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [K]);
    return (0, n.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: ny.TE,
        children: [
            (0, n.jsx)(np, { open: null != K }),
            (0, n.jsx)(nt, {
                onJumpToActivity: k,
                line: et,
                placement: Y && "top" === X ? "top" : null,
                todos: el,
                provisionalTodo: en,
                agents: ea,
            }),
            (0, n.jsxs)("div", {
                className: ny.JX,
                children: [
                    (0, n.jsx)(ev.Ch, {
                        ref: x,
                        onScroll: w,
                        className: j ? ny.N$ : `${ny.N$} ${ny.hB}`,
                        children: (0, n.jsx)(lR, { ref: p, projectId: t, messages: i, onPickIdea: D ? M : void 0 }),
                    }),
                    (0, n.jsx)("div", {
                        className: ny.NJ,
                        children: (0, n.jsx)(lQ, {
                            projectId: t,
                            thinking: Y,
                            restoring: F,
                            thinkingActivity: d,
                            compacting: c,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == B
                        ? null
                        : (0, n.jsx)("div", {
                              className: ny.B5,
                              children: (0, n.jsx)(
                                  l3,
                                  { clarification: B, onSubmit: D ? T : void 0, onDismiss: G },
                                  B.id,
                              ),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ny.Jx,
                children: [
                    (0, n.jsx)(nt, {
                        onJumpToActivity: k,
                        line: et,
                        placement: Y && "bottom" === X ? "bottom" : null,
                        todos: el,
                        provisionalTodo: en,
                        agents: ea,
                    }),
                    0 === N.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: ny.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(b.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: I.intl.formatToPlainString(C.default.Lkx0Kk, {
                                          count: N.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(b.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: I.intl.string(C.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(h.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: I.intl.string(C.default.B0YARo),
                                      onClick: () => (0, ey.PS)(t),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(tX, {
                        projectId: t,
                        canSend: D,
                        stopped: o,
                        running: Y,
                        restoring: F,
                        onSend: E,
                        hasPendingContext: N.annotations.length > 0,
                        onInterrupt: D ? S : void 0,
                        onUploadFile: P,
                        onDeleteFile: _,
                        onApprove: Q,
                        suggestion: H,
                        questionOpen: null != B,
                        modelSettings: f,
                        onModelSettingsChange: R,
                    }),
                ],
            }),
        ],
    });
}
var nN = l(661531),
    nA = l(602853),
    nE = l(517461),
    nS = l(761929),
    nC = l(927506);
function nI(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, nA.r)(nN.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nE.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = a.useState(u ?? 460),
        f = (0, tC.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? f + s : 0);
    }, [f, t, s, r]);
    let h = (0, nS.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nS.R.HORIZONTAL_LEFT,
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
        className: nC.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: nC.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: o, className: nC.kL, style: { width: f }, children: i }),
        ],
    });
}
var nM = l(691540),
    nT = l(857250),
    nR = l(97483),
    nP = l(624479),
    n_ = l(92446),
    nL = l(761508),
    nF = l(540999),
    nD = l(957565);
let n$ = [],
    nO = new Map(),
    nz = new Map(),
    nq = new Map(),
    nU = new Map(),
    nB = new Map(),
    nG = new Map(),
    nV = new Map();
class nW extends $.Ay.Store {
    getStatus(e) {
        return nO.get(e) ?? null;
    }
    getFetchState(e) {
        return nz.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nU.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return nG.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return nB.get(e) ?? null;
    }
    getModelCalls(e) {
        return nV.get(e) ?? n$;
    }
    getForceCompactionState(e) {
        return nq.get(e) ?? "idle";
    }
}
let nH = new nW(tT.h, {
    LOGOUT: function () {
        if (
            0 === nO.size &&
            0 === nz.size &&
            0 === nq.size &&
            0 === nU.size &&
            0 === nB.size &&
            0 === nG.size &&
            0 === nV.size
        )
            return !1;
        (nO.clear(), nz.clear(), nq.clear(), nU.clear(), nB.clear(), nG.clear(), nV.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nz.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === nq.get(t);
        n &&
            nq.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === nz.get(t);
        if ((a && nz.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nz.set(t, "failed") : (nO.set(t, l), nz.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nU.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        nB.set(e.projectId, {
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
        nq.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        nq.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = nV.get(e.projectId);
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
        nV.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, tz.aM)(l.total)) return !1;
        nG.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (nO.delete(t), nz.delete(t), nq.delete(t), nU.delete(t), nB.delete(t), nG.delete(t), nV.delete(t));
    },
});
var nK = l(972786);
function nY(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function nQ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function nX(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function nZ(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function nJ(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function n0(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function n1(e) {
    return I.intl.string("preview" === e ? C.default["+m8XM6"] : C.default.kiOVnt);
}
let n2 = ["all", "preview", "stable", "web"],
    n7 = new Set(["error", "aborted", "length"]);
function n6(e) {
    switch (e.reason) {
        case "local":
            return I.intl.string(C.default.M7Vn6y);
        case "unconfigured":
            return I.intl.string(C.default.QirpMl);
        case "unauthorized":
            return I.intl.string(C.default.QZ1e4l);
        default:
            return null != e.detail
                ? I.intl.formatToPlainString(C.default.zUTHf7, { detail: e.detail })
                : I.intl.string(C.default.WIAQes);
    }
}
function n5(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : I.intl.formatToPlainString(C.default.SBkDIZ, {
              p50: nY(e.memory_p50_bytes ?? 0),
              p999: nY(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let n4 = {
    db: () => C.default.r6cciE,
    db_preview: () => C.default.JmIyL8,
    runtime: () => C.default.bzNyv8,
    runtime_preview: () => C.default["LONZ/8"],
    bot: () => C.default.jdpw3A,
    bot_preview: () => C.default["/g6wUz"],
};
var n3 = l(69985);
function n9(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: n3.KE,
        children: [
            (0, n.jsx)("div", {
                className: n3.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(b.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: I.intl.string(C.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(b.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: I.intl.formatToPlainString(C.default["4NpaEk"], { time: nJ(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(h.$, { variant: "secondary", size: "sm", text: I.intl.string(C.default.aw0IJm), onClick: a }),
        ],
    });
}
function n8(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: n3.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(b.E, { variant: "text-xs/semibold", color: "text-muted", className: n3.Gf, children: t }),
            l,
        ],
    });
}
function ae(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: n3.N8,
        children: [
            (0, n.jsxs)("div", {
                className: n3.x7,
                children: [
                    (0, n.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != a && (0, n.jsx)(b.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
        ],
    });
}
function at(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: n3.N8,
        children: [
            (0, n.jsxs)("div", {
                className: n3.x7,
                children: [
                    (0, n.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(l)} / ${r(a)}`,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: n3.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? n3.aV : n3.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function al(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(ae, {
            label: I.intl.string(C.default.H6PMwW),
            value: I.intl.string(C.default.TLOZ8J),
            hint: n6(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(ae, {
            label: I.intl.string(C.default.H6PMwW),
            value: "\u2014",
            hint: I.intl.string(C.default.uAzxdh),
        });
    let a = n5(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ae, { label: I.intl.string(C.default.awAqRi), value: nQ(l.cpu_ms) }),
            null != a && (0, n.jsx)(ae, { label: I.intl.string(C.default.WdGviA), value: a }),
        ],
    });
}
function an(e) {
    let { analytics: t } = e,
        l = I.intl.string(C.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(n8, {
            title: l,
            children: (0, n.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: n6(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? n4[t] : null) ? I.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(n8, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(b.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: I.intl.string(C.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          ae,
                          {
                              label: l,
                              value: I.intl.formatToPlainString(C.default.AnRynJ, { cpu: nQ(t.cpu_ms) }),
                              hint: n5(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var aa = l(522652);
let ar = [];
function ai(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && n7.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? nQ(l.durationMs) : null,
                    `${nX(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${nX(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: aa.p5,
        children: [
            (0, n.jsx)(b.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aa.Q5,
                children: nZ(l.observedAt),
            }),
            (0, n.jsxs)(b.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: aa.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, n.jsx)(b.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: r ? "text-feedback-critical" : "text-muted",
                children: a,
            }),
        ],
    });
}
function as(e, t) {
    return (0, n.jsx)(ae, {
        label: e,
        value: I.intl.formatToPlainString(C.default.U98VaN, { count: nX((0, tz.aM)(t)) }),
        hint: `${nX(t.input_tokens)} in \xb7 ${nX(t.output_tokens)} out \xb7 ${nX(t.cache_read_input_tokens)} cache read`,
    });
}
function ao(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, $.bG)([nH], () => nH.getLastTurnUsage(t), [t]),
        u = (0, $.bG)([nH], () => nH.getLastCompaction(t), [t]),
        d = (0, $.bG)([nH], () => nH.getLastCompactionDecline(t), [t]),
        c = (0, $.bG)([nH], () => nH.getForceCompactionState(t), [t]),
        f = a.useCallback(() => (0, m.Lj)(t), [t]),
        g = a.useCallback(() => (0, m.Lj)(t, !0), [t]),
        x = (0, $.bG)([nH], () => (s ? ar : nH.getModelCalls(t)), [t, s]),
        p = l?.agent?.lifetime ?? null,
        v = l?.agent?.limits ?? null,
        j = l?.agent?.session ?? null,
        y = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: aa.Mf,
        children: [
            (0, n.jsx)(n9, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(n8, {
                title: I.intl.string(C.default.IYpHtT),
                children:
                    null == p
                        ? (0, n.jsx)(b.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: I.intl.string(C.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ae, {
                                      label: I.intl.string(C.default["8MSJDH"]),
                                      value: nX((0, tz.a7)(p.cost_usd)),
                                      hint: I.intl.formatToPlainString(C.default["6Z2KhK"], { count: nX(p.turns) }),
                                  }),
                                  as(I.intl.string(C.default.hk4jJr), p.orchestrator),
                                  as(I.intl.string(C.default.R9aduM), p.codegen),
                                  as(I.intl.string(C.default.Tj6b30), (0, tz.wU)(p.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(ae, {
                                          label: I.intl.string(C.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${nX(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(n8, {
                title: I.intl.string(C.default.lo4mY6),
                children:
                    null == o
                        ? (0, n.jsx)(b.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: I.intl.string(C.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  as(I.intl.string(C.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(ae, {
                                      label: I.intl.string(C.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, tz.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(n8, {
                title: I.intl.string(C.default.mn8279),
                children: [
                    null != u && null != y
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(at, {
                                      label: I.intl.string(C.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: nX,
                                  }),
                                  (0, n.jsx)(ae, {
                                      label: I.intl.string(C.default.ntZb8d),
                                      value: `${nX(u.tokensBefore)} \u{2192} ${nX(u.tokensAfter)}`,
                                      hint: I.intl.formatToPlainString(C.default.jA05ru, {
                                          count: nX(u.retainedMessages),
                                          time: nJ(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(b.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? I.intl.formatToPlainString(C.default.LKGmsP, { ceiling: nX(y) })
                                      : I.intl.string(C.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(ae, {
                            label: I.intl.string(C.default["se+2ls"]),
                            value: `${nX(d.projected)} / ${nX(d.threshold)}`,
                            critical: !0,
                            hint: I.intl.formatToPlainString(C.default.KHK44U, { time: nJ(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: aa.Lj,
                        children: [
                            (0, n.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: I.intl.string(C.default.B0KV7p),
                                disabled: "pending" === c,
                                onClick: f,
                            }),
                            (0, n.jsx)(b.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return I.intl.string(C.default.wBng42);
                                    if ("pending" === e) return I.intl.string(C.default["0tgo31"]);
                                    let t = nJ(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return I.intl.formatToPlainString(C.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? C.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? C.default.GV4sdd
                                              : C.default["Y+0nUb"];
                                    return I.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(h.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: I.intl.string(C.default["044+ju"]),
                                            onClick: g,
                                        }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: I.intl.string(C.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(n8, {
                    title: I.intl.string(C.default.F5eP7e),
                    children:
                        0 === x.length
                            ? (0, n.jsx)(b.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I.intl.string(C.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      x
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(ai, { call: e }, e.id)),
                                      x.length > 30 &&
                                          (0, n.jsx)(b.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: I.intl.formatToPlainString(C.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: x.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != j || l?.analytics != null) &&
                (0, n.jsxs)(n8, {
                    title: I.intl.string(C.default.ZRxAPD),
                    children: [
                        null != j &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(ae, {
                                        label: I.intl.string(C.default["wt5X/o"]),
                                        value: nJ(j.instance_since),
                                        hint: I.intl.string(C.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(ae, { label: I.intl.string(C.default["4lgurx"]), value: nX(j.sockets) }),
                                    (0, n.jsx)(ae, {
                                        label: I.intl.string(C.default["a/LXBt"]),
                                        value: j.turn_inflight
                                            ? I.intl.string(C.default["9KlveJ"])
                                            : I.intl.string(C.default["4tYZVa"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, n.jsx)(ae, {
                                            label: I.intl.string(C.default["/hOBkc"]),
                                            value: nX(j.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(al, { analytics: l.analytics }),
                    ],
                }),
            null != v &&
                (0, n.jsxs)(n8, {
                    title: I.intl.string(C.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(ae, { label: I.intl.string(C.default["5iHZLk"]), value: nX(v.max_iterations) }),
                        (0, n.jsx)(ae, {
                            label: I.intl.string(C.default.Rb6m3E),
                            value: nX(v.max_subagent_iterations),
                        }),
                        (0, n.jsx)(ae, {
                            label: I.intl.string(C.default.WQ9pMe),
                            value: I.intl.formatToPlainString(C.default.U98VaN, { count: nX(v.context_window_tokens) }),
                        }),
                        (0, n.jsx)(ae, {
                            label: I.intl.string(C.default.iEAvzu),
                            value: I.intl.formatToPlainString(C.default.U98VaN, {
                                count: nX(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(ae, {
                            label: I.intl.string(C.default["jbhs+f"]),
                            value: nX(v.max_user_message_chars),
                        }),
                        (0, n.jsx)(ae, { label: I.intl.string(C.default.TOQnq4), value: nX(v.max_build_attempts) }),
                        (0, n.jsx)(ae, { label: I.intl.string(C.default.RIDc6D), value: nX(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var au = l(320448),
    ad = l(629584),
    ac = l(683438),
    am = l(849363);
function af(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: am.ut,
              children: (0, n.jsx)(b.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: I.intl.string(C.default.TV42NS),
              }),
          });
}
function ah(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: am.qf,
              children: [
                  (0, n.jsx)(b.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: I.intl.string(C.default.TV42NS),
                  }),
                  (0, n.jsx)(b.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: I.intl.string(C.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: am.qf,
              children: [
                  (0, n.jsx)(b.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(b.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function ag(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: am.ps,
              children: (0, n.jsx)(b.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: I.intl.string(C.default["U/qDX9"]),
              }),
          })
        : null;
}
var ax = l(417397);
let ap = a.memo(function (e) {
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
        className: ax.vK,
        children: [
            (0, n.jsx)(b.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ax.Mt,
                selectable: !0,
                children: nZ(l.ts),
            }),
            (0, n.jsx)(b.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: ax.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: ax.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(b.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: ax.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(b.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: ax.Cq,
                            title: l.build ?? void 0,
                            children: I.intl.string(C.default.GO6JcR),
                        }),
                    null != u
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, n.jsxs)(b.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, n.jsxs)(eI.D, {
                                      className: ax.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": o,
                                      "aria-label": I.intl.string(C.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(l0.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(au._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, n.jsxs)(b.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  I.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? C.default.lXkB6Z : C.default.wkbYxG,
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  i &&
                                      (0, n.jsx)(b.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: ax.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, n.jsx)(b.E, {
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
function av(e) {
    let { projectId: t } = e,
        l = (0, $.bG)([nK.Ay], () => nK.Ay.getLogs(t), [t]),
        r = (0, $.bG)([nK.Ay], () => nK.Ay.getHistoryState(t, "logs")),
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
                n2.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return n1(e);
                            case "web":
                                return I.intl.string(C.default.J2TPCe);
                            default:
                                return I.intl.string(C.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: ax.$F,
        children: [
            (0, n.jsxs)("div", {
                className: ax.y4,
                children: [
                    (0, n.jsx)(ad.I, {
                        look: "pill",
                        "aria-label": I.intl.string(C.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: ax.KT,
                        children: (0, n.jsx)(ac.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: I.intl.string(C.default["MX4vr/"]),
                            "aria-label": I.intl.string(C.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(af, { state: r }),
            (0, n.jsxs)(ev.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: ax.sx,
                children: [
                    (0, n.jsx)(ag, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(ah, {
                              state: r,
                              emptyTitle: I.intl.string(C.default.mcFyYc),
                              emptyBody: I.intl.string(C.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(b.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: I.intl.string(C.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(ap, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function ab(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(n8, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(b.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: I.intl.string(C.default.W4hcKL),
                      }),
        })
    );
}
function aj(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ae, {
                      label: I.intl.formatToPlainString(C.default.f8ix3w, { env: n1(l) }),
                      value: ((t = a.connected), I.intl.string(t ? C.default["9KlveJ"] : C.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(ae, {
                      label: I.intl.string(C.default["0AB7l3"]),
                      value: nX(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${nJ(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(ae, { label: I.intl.string(C.default.ElaQ0A), value: nX(a.guild_count) }),
                  (0, n.jsx)(ae, {
                      label: I.intl.string(C.default.SJtBTN),
                      value: nX(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? I.intl.formatToPlainString(C.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: nJ(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(ae, {
                          label: I.intl.string(C.default.N4l504),
                          value: nX(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(ae, { label: n1(l), value: I.intl.string(C.default.C6xjtD) });
}
function ay(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(ae, {
        label: n1(t),
        value: I.intl.formatToPlainString(C.default.Yur5Zm, { requests: nX(l.requests), failures: nX(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? I.intl.formatToPlainString(C.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: nJ(l.last_failure.at),
                  })
                : I.intl.formatToPlainString(C.default["1PdrB1"], { time: nJ(l.since) }),
    });
}
function ak(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ae, {
                label: I.intl.formatToPlainString(C.default.BVORfc, { env: n1(t) }),
                value: nX(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    ae,
                    {
                        label: I.intl.formatToPlainString(C.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? I.intl.formatToPlainString(C.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? I.intl.formatToPlainString(C.default["7ecbr3"], { time: nJ(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function aw(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(ae, {
        label: n1(t),
        value: I.intl.formatToPlainString(C.default.voXL2a, { calls: nX(l.calls), errors: nX(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function aN(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(n8, {
            title: t,
            children: (0, n.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: I.intl.string(C.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(n8, {
        title: t,
        children: [
            (0, n.jsx)(ae, {
                label: I.intl.string(C.default.KOnL3g),
                value: nX(l.requests),
                hint: I.intl.formatToPlainString(C.default["1PdrB1"], { time: nJ(l.since) }),
            }),
            (0, n.jsx)(ae, { label: I.intl.string(C.default.CjPhyY), value: nX(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(at, {
                              label: I.intl.string(C.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: nQ,
                          }),
                          (0, n.jsx)(ae, {
                              label: I.intl.string(C.default["+rYPHD"]),
                              value: nQ(r),
                              hint: I.intl.formatToPlainString(C.default["+LxC7W"], {
                                  total: nQ(l.cpu_ms_total),
                                  wall: nQ(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(ae, {
                      label: I.intl.string(C.default["V/nNbs"]),
                      value: I.intl.string(C.default.YKWIxp),
                      hint: I.intl.string(C.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(ae, { label: I.intl.string(C.default.ueEMPa), value: nQ(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(ae, { label: I.intl.string(C.default.vM2krr), value: nX(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(ae, {
                label: I.intl.string(C.default.g1O88C),
                value: nX(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: I.intl.formatToPlainString(C.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(ae, { label: I.intl.string(C.default.JUZs7g), value: n0(l.build) }),
        ],
    });
}
function aA(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: I.intl.string(C.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: I.intl.string(C.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: I.intl.string(C.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(n8, {
        title: I.intl.string(C.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(ae, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(ae, {
                                  label: I.intl.formatToPlainString(C.default["9TpIQg"], { env: l }),
                                  value: nY(r.r2_bytes),
                                  hint: I.intl.formatToPlainString(
                                      r.r2_truncated ? C.default.o45MMA : C.default.S7o3vV,
                                      { count: nX(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(at, {
                                      label: I.intl.formatToPlainString(C.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: nY,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aE(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aa.Mf,
        children: [
            (0, n.jsx)(n9, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(aN, {
                            title: I.intl.string(C.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aN, {
                            title: I.intl.string(C.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aA, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(ab, {
                                title: I.intl.string(C.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aj, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(ab, {
                                title: I.intl.string(C.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ay, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(ab, {
                                title: I.intl.string(C.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ak, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(ab, {
                                title: I.intl.string(C.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aw, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(an, { analytics: t.analytics }),
                        (0, n.jsxs)(n8, {
                            title: I.intl.string(C.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(ae, {
                                    label: I.intl.string(C.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? n0(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(ae, {
                                    label: I.intl.string(C.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? n0(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function aS(e, t) {
    return String(e).padStart(t, "0");
}
function aC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aS(n.getHours(), 2)}:${aS(n.getMinutes(), 2)}:${aS(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aS(n.getMilliseconds(), 3)}` : a;
}
var aI = l(977129);
let aM = new Map(),
    aT = new Map(),
    aR = 0,
    aP = 0;
async function a_(e, t, l) {
    let n = aR,
        a = aM.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aP) return { status: "forbidden" };
    let r = aT.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aI.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((aP = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aR) return { status: "failed" };
            var l = o.rich;
            for (aM.set(t, l); aM.size > 100;) {
                let e = aM.keys().next();
                if (!0 === e.done) break;
                aM.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    aT.set(t, i);
    let s = await i;
    return (aT.get(t) === i && aT.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function aL() {
    ((aR += 1), aM.clear(), aT.clear(), (aP = 0));
}
function aF(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aD(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function a$(e) {
    switch (e) {
        case "subagent":
            return I.intl.string(C.default["EoY7D+"]);
        case "context":
            return I.intl.string(C.default.KVFrD3);
        case "tool":
            return I.intl.string(C.default["/N6ZU9"]);
        case "delegated":
            return I.intl.string(C.default.HcEbf2);
        default:
            return I.intl.string(C.default.AhOqQs);
    }
}
function aO(e) {
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
let az = ["model", "tool", "subagent", "delegated", "context"];
function aq(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(aO(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function aU(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aB = ["arguments", "result", "usage", "diagnostics"];
var aG = l(40715);
let aV = { started: aG.Vf, ok: aG.mo, error: aG.Sr };
function aW(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${aG.Om} ${aV[t] ?? aG.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return I.intl.string(C.default.HpKDyl);
                case "error":
                    return I.intl.string(C.default["5T4Dd0"]);
                default:
                    return I.intl.string(C.default.VbEmf0);
            }
        })(t),
    });
}
let aH = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function aK(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: aG.wV,
        children: [
            (0, n.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", className: aG.D6, children: t }),
            (0, n.jsx)("div", { className: aG.zL, children: l }),
        ],
    });
}
function aY(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(aK, {
        label: t,
        value: (0, n.jsx)(b.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function aQ(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: aG.WA, children: t });
}
function aX(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: aG.xd,
        children: [
            (0, n.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: aG.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function aZ(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: aG.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: aG.p8,
                children: [
                    (0, n.jsx)(au._, { className: aG.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(b.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: aG.bG, children: l }),
        ],
    });
}
function aJ(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(aK, {
            label: t.key,
            value: (0, n.jsx)(b.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? I.intl.formatToPlainString(C.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? I.intl.formatToPlainString(C.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(aK, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: aG.Kv,
            children: [
                (0, n.jsx)(b.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return I.intl.string(C.default.xO6bcQ);
                            case "content":
                                return I.intl.string(C.default.gpBZRr);
                            default:
                                return I.intl.string(C.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, n.jsx)(b.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function a0(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: aG.QR,
                      children: (0, n.jsx)(b.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: aG.uh,
                          children: I.intl.string(C.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          aK,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: aG.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(b.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: aG.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(b.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: I.intl.string(C.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(b.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? I.intl.string(C.default["1kBG9Z"])
                                                        : I.intl.formatToPlainString(C.default.VGSwo4, {
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
function a1(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : I.intl.string(
                      "loading" === t.status
                          ? C.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? C.default.jEQTot
                            : C.default.fj5wM8,
                  );
    return null == l
        ? null
        : (0, n.jsx)(b.E, { variant: "text-xs/normal", color: "text-subtle", className: aG.E7, children: l });
}
function a2(e) {
    let { projectId: t, entry: l, onClose: r, parent: i, onSelect: s, childCount: o } = e,
        u = (function (e) {
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
                aB.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aM.get(t)) return;
                    let l = new AbortController();
                    return (
                        a_(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aM.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = aC(l.startedAt, "millis"),
        f = aO(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ev.Ch, {
        className: aG._0,
        onKeyDown: h,
        role: "region",
        "aria-label": I.intl.formatToPlainString(C.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: aG.sy,
                children: (0, n.jsxs)("div", {
                    className: aG.HI,
                    children: [
                        (0, n.jsx)(aW, { status: l.status }),
                        (0, n.jsx)(b.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${aG.PY} ${aH[f]}`,
                            children: a$(f),
                        }),
                        (0, n.jsx)(b.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: aG.kc,
                            children: c,
                        }),
                        (0, n.jsx)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: aG.l5,
                            children: null == l.durationMs ? I.intl.string(C.default.HpKDyl) : aF(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(b.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aG.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(aX, {
                      title: I.intl.string(C.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(aJ, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(a0, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(a1, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(aX, {
                      title: I.intl.string(C.default.KXrf5F),
                      children: [
                          (0, n.jsx)(aY, {
                              label: I.intl.string(C.default["2Aii2k"]),
                              value: I.intl.formatToPlainString(C.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(aY, {
                                    label: I.intl.string(C.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(aK, {
                                    label: I.intl.string(C.default["UV2R1/"]),
                                    value: (0, n.jsx)(b.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: I.intl.string(C.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(a0, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(aX, {
                      title: I.intl.string(C.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(aQ, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(aY, {
                                            label: I.intl.string(C.default.Ran4BY),
                                            value: I.intl.formatToPlainString(C.default["PYO+Jv"], {
                                                tokens: aD(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(aY, {
                                            label: I.intl.string(C.default.vPIcyv),
                                            value: I.intl.formatToPlainString(C.default.Qy2iTq, {
                                                system: aD(l.systemTokens),
                                                tools: aD(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: aD(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(aY, {
                                            label: I.intl.string(C.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(aY, {
                                            label: I.intl.string(C.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(aY, {
                                            label: I.intl.string(C.default.VyAl6j),
                                            value: I.intl.formatToPlainString(C.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(aY, {
                                            label: I.intl.string(C.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(b.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: aG.E7,
                              children: I.intl.string(C.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(b.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: aG.E7,
                      children: I.intl.string(C.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(aZ, {
                      title: I.intl.string(C.default.T7SFyZ),
                      children: (0, n.jsxs)(aQ, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(aK, {
                                        label: I.intl.string(C.default.NnBqcd),
                                        value: (0, n.jsx)(eI.D, {
                                            tag: "div",
                                            className: aG.mi,
                                            onClick: () => s(i.id),
                                            children: (0, n.jsx)(b.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === i.kind ? i.model : i.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, n.jsx)(aY, {
                                        label: I.intl.string(C.default.fI6mzD),
                                        value: I.intl.formatToPlainString(C.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(aY, { label: I.intl.string(C.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(aY, { label: I.intl.string(C.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, n.jsx)(aY, { label: I.intl.string(C.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(aY, { label: I.intl.string(C.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(b.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: aG.Hm,
                                                children: I.intl.string(C.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    aY,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? I.intl.formatToPlainString(C.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : I.intl.formatToPlainString(C.default["/L6GFe"], {
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
            (0, n.jsx)(b.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aG.E7,
                children: I.intl.string(C.default.khAjR0),
            }),
        ],
    });
}
let a7 = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function a6(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = aO(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return az.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: aG.M0,
        children: [
            (0, n.jsx)("div", {
                className: aG.pZ,
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
                                            className: `${aG.dL} ${a7[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: aG.z4,
                role: "group",
                "aria-label": I.intl.string(C.default.UZ1OlR),
                children: az.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: aG.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${aG.A9} ${a7[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(b.E, { variant: "text-xs/normal", color: "text-muted", children: a$(e) }),
                                (0, n.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: I.intl.formatToPlainString(C.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(b.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: I.intl.formatToPlainString(C.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(b.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: aF(a),
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
let a5 = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function a4(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = aO(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? I.intl.formatToPlainString(C.default["PYO+Jv"], { tokens: aD(t.promptTokens) })
                : null != t.durationMs
                  ? aF(t.durationMs)
                  : null;
    return (0, n.jsxs)(eI.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${aG.nM} ${s ? aG.A5 : ""} ${"error" === t.status ? aG.Cr : ""} ${l ? aG.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: aG.sU,
                children: [
                    (0, n.jsx)(aW, { status: t.status }),
                    (0, n.jsx)(b.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${aG.PY} ${a5[o]}`,
                        children: a$(o),
                    }),
                    (0, n.jsx)(b.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: aG.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(b.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: aG.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(b.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aG.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(b.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aG.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function a3(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, $.yK)([nK.Ay], () => nK.Ay.getTrace(l), [l]),
        s = (0, $.bG)([nK.Ay], () => nK.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => aL, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [m, f] = a.useState(!1),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(null),
        v = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, tC.clamp)((e / t) * 100, 25, 75);
        }, []),
        w = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, tC.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, nS.A)({
            resizableDomNodeRef: g,
            orientation: nS.R.VERTICAL_TOP,
            getClampedValue: w,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => f(!0),
            onElementResizeEnd: () => f(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        A = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), N(e));
            },
            [N],
        ),
        E = a.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, tC.clamp)(e + t, 25, 75)));
        }, []),
        S = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        M = a.useMemo(() => aq(i, r), [i, r]),
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
                    .map((e, t) => ({ ...e, index: t, entries: aq(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = aU(M, o),
        P = R?.kind === "tool" ? aU(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = M[M.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, o]);
    let F = a.useCallback(
        (e) => {
            if (0 === M.length) return;
            let t = M.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(M.length - 1, t));
                (u(M[l].id), document.getElementById(`trace-${M[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? M.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(M.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), j(o));
        },
        [M, o, j],
    );
    return 0 === i.length
        ? (0, n.jsx)("div", {
              className: aG.uP,
              ref: h,
              children: (0, n.jsx)(ah, {
                  state: s,
                  emptyTitle: I.intl.string(C.default.Iyt8OJ),
                  emptyBody: I.intl.string(C.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${aG.uP} ${m ? aG.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: aG.DK,
                      children: [
                          (0, n.jsx)(a6, { entries: i }),
                          (0, n.jsx)(af, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: aG.Ie,
                                    children: (0, n.jsx)(b.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: I.intl.string(C.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ev.Ch, {
                                    ref: x,
                                    className: aG.Ns,
                                    children: [
                                        (0, n.jsx)(ag, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: v,
                                            role: "listbox",
                                            "aria-label": I.intl.string(C.default["QATZ+A"]),
                                            className: aG.p_,
                                            children: T.map((e) => {
                                                let t = aC(e.startedAt),
                                                    l = I.intl.formatToPlainString(C.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: aG.mf,
                                                                children: [
                                                                    (0, n.jsx)(b.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, n.jsx)(b.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, n.jsx)(b.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: aF(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: aG.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        a4,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? M[0]?.id),
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
                  null == R
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": I.intl.string(C.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: aG.b1,
                                    onPointerDown: A,
                                    onKeyDown: E,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: aG.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(a2, {
                                        projectId: l,
                                        entry: R,
                                        parent: P,
                                        childCount: _,
                                        onSelect: u,
                                        onClose: S,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var a9 = l(365199),
    a8 = l(402879);
function re(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, $.yK)([nK.Ay], () => nK.Ay.getTrace(t), [t]),
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
            (0, a8.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: aG.ED,
                children: (0, n.jsx)(ac.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: I.intl.string(C.default.NfncNw),
                    "aria-label": I.intl.string(C.default.NfncNw),
                }),
            }),
            (0, n.jsx)(tb.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tb.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tj.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": I.intl.string(I.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(ty.rX, {
                            children: (0, n.jsx)(ty.Dr, {
                                id: "export",
                                label: I.intl.string(C.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(lZ.K, {
                        ...e,
                        buttonRef: s,
                        icon: a9.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": I.intl.string(I.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var rt = l(497243);
function rl(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, u] = a.useState(""),
        c = (0, $.bG)([nF.A], () => nF.A.isDeveloper),
        f = (0, $.bG)([nH], () => nH.getStatus(t), [t]),
        h = (0, $.bG)([nH], () => nH.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, m.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, m.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, nD.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: nH.getStatus(t),
                        last_turn_usage: nH.getLastTurnUsage(t),
                        last_compaction: nH.getLastCompaction(t),
                        last_compaction_decline: nH.getLastCompactionDecline(t),
                        model_calls: nH.getModelCalls(t),
                        logs: nK.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nM.P0)((0, nT.o)(I.intl.string(C.default.sDSDiO), nR.Ck.SUCCESS)),
            );
        }, [t]),
        p = I.intl.string(C.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rt.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: nP.CopyIcon,
                            tooltip: I.intl.string(C.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: I.intl.string(I.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: n_.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rt.rf,
                children: [
                    (0, n.jsxs)(nL.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": I.intl.string(C.default.uNyR86),
                        className: rt.vR,
                        children: [
                            (0, n.jsx)(nL.V.Item, { id: "logs", children: I.intl.string(C.default["1mpzdJ"]) }),
                            (0, n.jsx)(nL.V.Item, { id: "worker", children: I.intl.string(C.default.whGHLD) }),
                            (0, n.jsx)(nL.V.Item, { id: "agent", children: I.intl.string(C.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(nL.V.Item, { id: "trace", children: I.intl.string(C.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(av, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aE, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rt.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rt.XH,
                                          children: (0, n.jsx)(re, { projectId: t, query: s, onQueryChange: u }),
                                      }),
                                      (0, n.jsx)(a3, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(ao, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rn = l(333007),
    ra = l(621466),
    rr = l(103557),
    ri = l(97808),
    rs = l(778712),
    ro = l(365912),
    ru = l(775121),
    rd = l(486020),
    rc = l(277437);
function rm(e) {
    let {
            at: t,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
            onSubmit: u,
            onDismiss: d,
            canSubmit: c,
            closing: m,
            onUploadFile: f,
            onDeleteFile: h,
        } = e,
        { drafts: g, addFiles: x, removeDraft: p, settled: v, takeRefs: b } = tV({ onUploadFile: f, onDeleteFile: h }),
        j = a.useRef(null),
        y = (c || g.length > 0) && v && !m,
        k = a.useCallback(() => {
            if (!y) return;
            let e = b();
            u(e.length > 0 ? e : void 0);
        }, [y, b, u]),
        [w, N] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let A = a.useRef(null),
        [E, S] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = A.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => S({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = E?.height ?? 44,
        T = l.left + 8,
        R = l.top + 8,
        P = Math.max(t.x, T),
        _ = Math.min(Math.max(t.y + 32 + 4, R), Math.max(R, l.top + l.height - M - 8));
    return (0, n.jsxs)("div", {
        ref: A,
        className: i()(rc.M0, { [rc.ho]: w && !m, [rc.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: rc.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(eD.m, {
                position: "bottom",
                text: I.intl.string(C.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: rc.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": I.intl.string(C.default.d6Rqlu),
                    children: (0, n.jsx)(tv.H, { size: "custom", color: "currentColor", className: rc.WW }),
                }),
            }),
            (0, n.jsx)(tN.y, {
                autoFocus: !0,
                rows: 1,
                className: rc.hF,
                value: s,
                placeholder: "" === r ? I.intl.string(C.default.FK09JH) : `Edit ${r}`,
                "aria-label": I.intl.string(C.default["qR+sGX"]),
                onChange: (e) => o(e.target.value),
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                },
            }),
            g.length > 0
                ? (0, n.jsx)("div", {
                      className: rc.ZO,
                      children: g.map((e) => (0, n.jsx)(tW, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rf = l(320510);
function rh(e) {
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
function rg(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rh(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var rx = l(940107),
    rp = l(42843);
let rv = { x: 25, y: 21 };
function rb(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rj(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function ry(e, t, l, n) {
    let a = rj(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rk(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rw(e) {
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
function rN(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        o = null != l && l === r ? t : null,
        { active: u, annotations: d } = (0, ey.Q_)(o),
        c = (0, lL.o4)(o),
        f = (0, eY.useHasAnyModalOpen)(),
        g = (0, $.bG)([er.default], () => er.default.getCurrentUser()),
        x = g?.id ?? null,
        [p, v] = a.useState(null),
        [j, y] = a.useState(null),
        [k, w] = a.useState(!1),
        [N, A] = a.useState(!1),
        [E, S] = a.useState(null),
        [M, T] = a.useState(!1),
        R = a.useRef(null),
        P = a.useRef(null),
        _ = a.useRef(null),
        [L, F] = a.useState(null),
        [D, O] = a.useState(!1),
        [z, q] = a.useState(null),
        [U, B] = a.useState(null),
        G = a.useRef(!1),
        [V, W] = a.useState(!1),
        [H, K] = a.useState(null),
        Y = u && !c && !f;
    (a.useEffect(() => {
        if (!Y) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            v((t) => (rb(t, e) ? t : e));
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [Y, i]),
        a.useEffect(() => {
            if (!Y || null == o) return;
            let e = !0,
                t = i();
            if (null == t) return void A(!0);
            (w(!0), A(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, rf.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let l = "completed" === t.status ? rw(t.response) : null;
                        null == l ? A(!0) : (y(l), (0, ey._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (w(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [Y, i, o]));
    let Q = a.useRef(null);
    (a.useEffect(() => {
        if (!Y || null == p || null == o) return;
        if (null == j) {
            Q.current = p;
            return;
        }
        if (rb(Q.current, p)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            Q.current = p;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rf.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !ee.current) return;
                        let l = rw(e.response);
                        null != l && (y(l), (0, ey._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rh(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, ey.fA)(o, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Y, p, j, d, o, i]),
        a.useEffect(() => {
            if (!Y)
                return () => {
                    (S(null), q(null), K(null), y(null));
                };
        }, [Y]));
    let X = a.useRef(null),
        Z = a.useRef(null),
        J = a.useRef(!1),
        ee = a.useRef(!1);
    a.useEffect(() => {
        ((ee.current = Y), Y || ((X.current = null), (Z.current = null), (_.current = null), T(!1)));
    }, [Y]);
    let et = a.useCallback(
            function e() {
                if (J.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = i();
                null != l &&
                    ((J.current = !0),
                    (0, rx.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rg, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((J.current = !1), ee.current)) {
                                if ("picked" !== t.status || rM(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && O(!0);
                                else {
                                    let e = (0, eb.ts)(t.target);
                                    (F((t) => (rI(t, e) ? t : e)),
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
        el = a.useCallback(() => {
            if (null == z) return;
            let e = !G.current;
            (B({ at: z.at, label: z.label, draft: z.draft, instant: e }), W(e), q(null));
        }, [z]);
    (a.useEffect(() => {
        if (!V) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => W(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [V]),
        a.useEffect(() => {
            if (null == U) return;
            let e = setTimeout(() => B(null), rS);
            return () => clearTimeout(e);
        }, [U]));
    let en = null == j || null == p || j.viewport.width < 1 ? 1 : p.width / j.viewport.width,
        ea = null != j || N,
        ei = a.useMemo(() => j?.elements ?? [], [j]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: p, scale: en };
    }, [p, en]);
    let eo = a.useCallback((e, t, l) => {
            (K(null), (G.current = !1), q({ target: e, anchor: t, draft: "", at: l, label: (0, eb.ts)(e) }));
        }, []),
        eu = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        ed = a.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = R.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = P.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ed);
    let ec = a.useCallback(
            (e) => {
                if (null == p || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ed(), T(!0), null != z)) {
                    (Math.abs(e.clientX - z.at.x) > rC || Math.abs(e.clientY - z.at.y) > rC) && (G.current = !0);
                    return;
                }
                if (!ea) return void S(null);
                let t = eu(e, p);
                if (D) {
                    let e = (0, eb.jo)(ei, t.x, t.y),
                        l = null != e && rM(e, p, en) ? null : e;
                    if (null != l) {
                        let e = (0, eb.ts)(l);
                        F((t) => (rI(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Z.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Z.current = l), (X.current = l), et());
            },
            [p, en, ea, eu, D, ei, z, H, ed, et],
        ),
        em = a.useCallback(() => {
            (T(!1), S(null), (Z.current = null), (X.current = null));
        }, []);
    a.useEffect(() => {
        if (!Y || !M || !ea || D || null != z || null != H) return;
        let e = _.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Z.current = n), (X.current = n), et());
    }, [Y, M, ea, D, z, H, et]);
    let ef = a.useCallback(
            (e) => {
                if (null != z || null != H) {
                    (el(), K(null));
                    return;
                }
                if (null == E || null == p) return;
                let t = eu(e, p);
                eo(E, (0, eb.ec)(E, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [E, p, eu, z, H, eo, el],
        ),
        eh = a.useCallback(() => {
            null != o && (S(null), (0, ey.PS)(o));
        }, [o]),
        eg = a.useCallback(() => {
            null != o &&
                (null != z
                    ? el()
                    : H?.confirmingRemove === !0
                      ? K({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? K(null)
                        : eh());
        }, [o, z, H, el, eh]),
        ex = a.useRef(eg),
        ep = a.useRef(eh);
    a.useLayoutEffect(() => {
        ((ex.current = eg), (ep.current = eh));
    });
    let ev = a.useRef(null);
    a.useEffect(() => {
        if (Y)
            return (
                ru.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        ru.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, ra.vq)(t) &&
                ev.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, ro.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ep.current();
        }
    }, [Y, s]);
    let ej = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != z || null != H || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == E ? -1 : ei.findIndex((e) => e.ref === E.ref);
                    S(ei[(l + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != E &&
                    (e.preventDefault(),
                    eo(E, eb.F6, { x: (p?.left ?? 0) + E.rect.x * en, y: (p?.top ?? 0) + E.rect.y * en }));
            },
            [o, z, H, ei, E, eo, eg, p, en],
        ),
        ek = a.useCallback(
            (e) => {
                null == o ||
                    null == z ||
                    (((0, eb.to)(z.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, m.dv)(o, (0, eb.v_)(z.target, z.draft), e), el(), S(null)));
            },
            [o, z, el],
        ),
        ew = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, m.vX)(o, e)), [o]),
        eN = a.useCallback((e) => (null == o ? Promise.resolve() : (0, m.Vm)(o, e)), [o]),
        eA = a.useCallback(() => {
            null == o ||
                null == H ||
                null == x ||
                ((0, eb.to)(H.draft) && ((0, ey.dy)(o, x, H.id, H.draft.trim()), K({ ...H, editing: !1 })));
        }, [o, H, x]),
        eE = a.useCallback(() => {
            null != o && null != H && null != x && ((0, ey.PR)(o, x, H.id), K(null));
        }, [o, H, x]),
        eS = u
            ? k
                ? I.intl.string(C.default.jQQ8i2)
                : N
                  ? I.intl.string(C.default.zvU2QH)
                  : I.intl.formatToPlainString(C.default.A4HDMU, { count: d.length })
            : "",
        eC = Y && null != p,
        eI = M && null == H,
        eM = null == H ? null : d.find((e) => e.id === H.id),
        eT = z?.target ?? eM?.target ?? null,
        eR = z ?? U,
        eP = z ?? (U?.instant === !0 ? null : U),
        e_ =
            null != eM && null != p
                ? (function (e, t) {
                      let { left: l, top: n } = rk(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(ry(eM.target, eM.anchor, p, en), p)
                : null;
    return (0, rn.createPortal)(
        (0, n.jsxs)("div", {
            ref: ev,
            className: rp.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rp.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eC
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rp.MT,
                                  style: { left: p.left, top: p.top, width: p.width, height: p.height },
                                  "data-plain-cursor": eI ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": I.intl.string(C.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ec,
                                  onMouseLeave: em,
                                  onClick: ef,
                                  onKeyDown: ej,
                              }),
                              null != E && null == z && null == H ? (0, n.jsx)(rT, { box: rj(E, p, en) }) : null,
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rp.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rp.xz,
                                      "data-shown": null != E && null == H && null == z ? "" : void 0,
                                      "data-instant": V ? "" : void 0,
                                      children: (0, n.jsxs)(b.E, {
                                          variant: "text-xs/medium",
                                          className: rp.Ux,
                                          children: [
                                              null == L
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rp.Tl, children: L.kind }),
                                              null == L || "" === L.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rp.kh, children: [" ", L.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: P,
                                  className: rp.Y,
                                  children: eI
                                      ? (0, n.jsx)(lp.A, { className: rp.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eP
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rp.aZ,
                                        style: { transform: `translate3d(${eP.at.x + 12}px, ${eP.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rp.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == z ? "" : void 0,
                                            children: (0, n.jsxs)(b.E, {
                                                variant: "text-xs/medium",
                                                className: rp.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rp.Tl, children: eP.label.kind }),
                                                    "" === eP.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rp.kh,
                                                              children: [" ", eP.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, n.jsx)("div", { className: rp.D0, style: rj(eT, p, en), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = ry(e.target, e.anchor, p, en),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rp.xL,
                                          style: { ...rk(l, p), width: 24, height: 24 },
                                          "aria-label": I.intl.formatToPlainString(C.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, eb.iw)(e.target),
                                          }),
                                          "aria-expanded": H?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == z && K(a);
                                          },
                                          onFocus: () => {
                                              null == z && K(a);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), el(), K(a));
                                          },
                                          children: (0, n.jsx)(rA, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eR
                                  ? null
                                  : (0, n.jsx)(rm, {
                                        at: { x: eR.at.x + 12, y: eR.at.y + 12 },
                                        bounds: p,
                                        kind: eR.label.kind,
                                        value: eR.draft,
                                        canSubmit: null != z && (0, eb.to)(eR.draft),
                                        onChange: (e) => {
                                            null != z && q({ ...z, draft: e });
                                        },
                                        onSubmit: ek,
                                        onDismiss: el,
                                        onUploadFile: ew,
                                        onDeleteFile: eN,
                                        closing: null == z,
                                    }),
                              null != eM && null != H && null != e_
                                  ? (0, n.jsxs)(rE, {
                                        point: e_,
                                        frame: p,
                                        authorId: eM.authorId,
                                        title: (0, eb.iw)(eM.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            H.confirmingRemove ? K({ ...H, confirmingRemove: !1 }) : K(null);
                                        },
                                        onMouseLeave: () => {
                                            H.editing || H.confirmingRemove || K(null);
                                        },
                                        children: [
                                            H.editing
                                                ? (0, n.jsx)(rr.f, {
                                                      autoFocus: !0,
                                                      label: I.intl.string(C.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: H.draft,
                                                      maxLength: eb.gq,
                                                      rows: 3,
                                                      onChange: (e) => K({ ...H, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eA());
                                                      },
                                                  })
                                                : (0, n.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rp.aC,
                                                      children: eM.comment,
                                                  }),
                                            (0, ey.zz)(eM, x)
                                                ? (0, n.jsx)("div", {
                                                      className: rp.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(b.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rp.nv,
                                                                        children: I.intl.string(C.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(h.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: I.intl.string(C.default.cLsnYH),
                                                                        onClick: () =>
                                                                            K({ ...H, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(h.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: I.intl.string(C.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eE,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(h.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: I.intl.string(C.default.ncz32j),
                                                                        onClick: () =>
                                                                            K({
                                                                                ...H,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    H.editing
                                                                        ? (0, n.jsx)(h.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, eb.to)(H.draft),
                                                                              text: I.intl.string(C.default.wIeFN0),
                                                                              onClick: eA,
                                                                          })
                                                                        : (0, n.jsx)(h.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: I.intl.string(C.default.DKZggU),
                                                                              onClick: () =>
                                                                                  K({
                                                                                      ...H,
                                                                                      editing: !0,
                                                                                      draft: eM.comment,
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
function rA(e) {
    let { authorId: t } = e,
        l = (0, $.bG)([er.default], () => er.default.getUser(t), [t]);
    return (0, n.jsx)(ri.eu, {
        src: null == l ? null : rd.Ay.getUserAvatarURL(l),
        size: rs._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rE(e) {
    let t,
        l,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        v = a.useRef(null),
        [j, y] = a.useState(rv);
    a.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: A,
        } = ((l = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (i = Math.max((r = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), l)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, r), i)), originX: u.x - s, originY: u.y - o }),
        E = {
            left: k,
            top: w,
            "--custom-vibegrations-card-origin-x": `${N}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, n.jsxs)("div", {
        ref: p,
        className: rp.Nr,
        style: E,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rp.MY,
                children: [
                    (0, n.jsx)("span", { ref: v, className: rp.ip, children: (0, n.jsx)(rA, { authorId: c }) }),
                    (0, n.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rp.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rp.zI, children: x }),
        ],
    });
}
let rS = 300,
    rC = 2;
function rI(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rM(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rT(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rp.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rR = l(11055),
    rP = l(533140),
    r_ = l(342667);
function rL(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, frameId: s } = e,
        o = (0, lL.o4)(null != l && l === r ? t : null),
        u = (0, eY.useHasAnyModalOpen)(),
        d = (0, rP.V0)(s);
    a.useEffect(() => {
        o && d && null != s && (0, rP.c2)(s);
    }, [o, d, s]);
    let [c, m] = a.useState(null);
    a.useEffect(() => {
        if (!o) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            m((t) =>
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
    }, [o, i]);
    let f = o && null != c && !u;
    return (0, rn.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: r_.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: o ? I.intl.string(C.default.dIE9zO) : "",
                }),
                f
                    ? (0, n.jsx)("div", {
                          className: r_.o,
                          style: { left: c.left, top: c.top, width: c.width, height: c.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var rF = l(314116),
    rD = l(364522),
    r$ = l(237528),
    rO = l(664121),
    rz = l(95477),
    rq = l(381849),
    rU = l(724401);
function rB(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function rG(e) {
    let t,
        { projectId: l, installScope: r, onClose: i } = e,
        s = "user" === r ? ["stable"] : ["preview", "stable"],
        [u, c] = a.useState(s[0] ?? "stable"),
        [g, x] = a.useState({ status: "loading" }),
        [p, v] = a.useState(""),
        [j, y] = a.useState(""),
        [k, w] = a.useState({ phase: "idle" }),
        N = "busy" === k.phase,
        [A, E] = a.useState(0),
        S = a.useCallback(() => E((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${u}`;
        return (
            Promise.all([(0, m.DM)(l, u), (0, m.ms)(l, u)])
                .then((l) => {
                    let [n, a] = l;
                    e || x({ status: "loaded", key: t, points: n, window: a, nowMs: Date.now() });
                })
                .catch(() => {
                    e || x({ status: "failed", key: t });
                }),
            () => {
                e = !0;
            }
        );
    }, [l, u, A]);
    let M = "loading" !== g.status && g.key === `${l}|${u}` ? g : { status: "loading" },
        T = a.useCallback(
            (e, t) => {
                (0, rF.A)({
                    title: I.intl.string(C.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? I.intl.formatToPlainString(C.default["0lt6bH"], { target: e })
                            : I.intl.formatToPlainString(C.default.zVcDfj, {
                                  environment: I.intl.string(
                                      "preview" === u ? C.default["/kYdZe"] : C.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: I.intl.string(C.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (w({ phase: "busy", environment: u, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (w({
                                              phase: "settled",
                                              environment: u,
                                              tone: "positive",
                                              text: I.intl.string(C.default.kIWqXR),
                                          }),
                                          S())
                                        : "expired" === e.code
                                          ? (w({
                                                phase: "settled",
                                                environment: u,
                                                tone: "danger",
                                                text: I.intl.formatToPlainString(C.default.PeVYaC, { days: 30 }),
                                            }),
                                            S())
                                          : "unconfirmed" === e.code
                                            ? (w({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: I.intl.string(C.default["2xSPXh"]),
                                              }),
                                              S())
                                            : w({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: I.intl.string(C.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    w({
                                        phase: "settled",
                                        environment: u,
                                        tone: "danger",
                                        text: I.intl.string(C.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [u, s, S],
        ),
        R = a.useCallback(() => {
            (w({ phase: "busy", environment: u, kind: "create" }),
                (0, m._m)(l, u, p)
                    .then(() => {
                        (v(""),
                            w({
                                phase: "settled",
                                environment: u,
                                tone: "positive",
                                text: I.intl.string(C.default.mfAoFT),
                            }),
                            S());
                    })
                    .catch(() => {
                        w({ phase: "settled", environment: u, tone: "danger", text: I.intl.string(C.default.uhhqP3) });
                    }));
        }, [l, u, p, S]),
        P = "loaded" === M.status ? M.window : null,
        _ = "loaded" === M.status ? M.nowMs : 0,
        L = P?.earliestRestoreTimestampMs ?? _ - 2592e6,
        F = "" === j ? null : new Date(j).getTime(),
        D = null != F && !Number.isNaN(F) && F >= L && F <= _,
        $ =
            "busy" === k.phase
                ? "restore" === k.kind && k.environment === u
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === k.phase && k.environment === u
                  ? { kind: "notice", tone: k.tone, text: k.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === M.status
                ? (0, n.jsx)("div", { className: rU.E8, children: (0, n.jsx)(f.y, {}) })
                : "failed" === M.status
                  ? (0, n.jsx)("div", {
                        className: rU.E8,
                        role: "alert",
                        children: (0, n.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: I.intl.string(C.default.pwFaXc),
                        }),
                    })
                  : 0 === M.points.length
                    ? (0, n.jsx)("div", {
                          className: rU.E8,
                          children: (0, n.jsx)(b.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: I.intl.string(C.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(rD.Ip, {
                          className: rU.p_,
                          children: (0, n.jsx)("div", {
                              className: rU.jO,
                              children: M.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rq.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rq._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: rU.KW,
                                          children: [
                                              (0, n.jsx)(b.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return I.intl.string(C.default.h4zhWL);
                                                          case "undo":
                                                              return I.intl.string(C.default["c/tNny"]);
                                                          default:
                                                              return I.intl.string(C.default["jViU+0"]);
                                                      }
                                                  })(e.origin),
                                              }),
                                              null != a.relative &&
                                                  (0, n.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: a.absolute ?? void 0,
                                                      children: a.relative,
                                                  }),
                                              e.expired &&
                                                  (0, n.jsx)(r$.v, {
                                                      text: I.intl.string(C.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: rU.AD,
                                                title: I.intl.formatToPlainString(C.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(b.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: rU.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            eI.D,
                                            {
                                                className: rU.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          T(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, m.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(b.E, {
                                                        variant: "text-md/medium",
                                                        className: rU.Pf,
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
            className: rU.nd,
            "aria-label": I.intl.string(C.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": I.intl.string(C.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: I.intl.string(I.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: rO.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: I.intl.string(C.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: rU.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: rU.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(nL.V, {
                                        selectedItem: u,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), E(0));
                                        },
                                        "aria-label": I.intl.string(C.default.CNvRyJ),
                                        className: rU.vR,
                                        children: [
                                            (0, n.jsx)(nL.V.Item, {
                                                id: "preview",
                                                children: I.intl.string(C.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(nL.V.Item, {
                                                id: "stable",
                                                children: I.intl.string(C.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        I.intl.formatToPlainString(C.default.l07ism, { days: 30 }),
                                        null != P
                                            ? ` ${new Date(P.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === $.kind
                                    ? (0, n.jsxs)("div", {
                                          className: rU.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(b.E, {
                                                  variant: "text-sm/normal",
                                                  children: I.intl.string(C.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === $.kind
                                      ? (0, n.jsx)("div", {
                                            className: rU.lm,
                                            role: "danger" === $.tone ? "alert" : "status",
                                            children: (0, n.jsx)(b.E, {
                                                variant: "text-sm/normal",
                                                color:
                                                    "danger" === $.tone
                                                        ? "text-feedback-critical"
                                                        : "text-feedback-positive",
                                                children: $.text,
                                            }),
                                        })
                                      : null,
                            ],
                        }),
                        t,
                        (0, n.jsxs)("div", {
                            className: rU.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: rU.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rU.Fv,
                                            children: (0, n.jsx)(rz.k, {
                                                label: I.intl.string(C.default.hJb78b),
                                                value: p,
                                                onChange: v,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(h.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: I.intl.string(C.default["14UarN"]),
                                            onClick: R,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: rU._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rU.kv,
                                            children: (0, n.jsx)(rz.k, {
                                                label: I.intl.string(C.default.rI7mpv),
                                                type: "datetime-local",
                                                value: j,
                                                min: rB(L),
                                                max: rB(_),
                                                disabled: N || null == P,
                                                onChange: y,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(h.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: I.intl.string(C.default["3D/vYN"]),
                                            disabled: N || !D,
                                            onClick: () => {
                                                null != F && T(new Date(F).toLocaleString(), () => (0, m.dz)(l, u, F));
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
var rV = l(406810),
    rW = l(977628);
function rH(e) {
    let t,
        { projectId: l, onClose: r, onRestore: i } = e,
        [s, u] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, m.ST)(l)
                    .then((t) => {
                        e || u({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || u({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [l]),
        (t =
            "loading" === s.status
                ? (0, n.jsx)("div", { className: rW.E8, children: (0, n.jsx)(f.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: rW.E8,
                        role: "alert",
                        children: (0, n.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: I.intl.string(C.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: rW.E8,
                          children: (0, n.jsx)(b.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: I.intl.string(C.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(rD.Ip, {
                          className: rW.p_,
                          children: (0, n.jsx)("div", {
                              className: rW.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rq.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rq._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      eI.D,
                                      {
                                          className: rW.f_,
                                          onClick: () =>
                                              (0, rF.A)({
                                                  title: I.intl.string(C.default.qOUOPE),
                                                  subtitle: I.intl.string(C.default.k2JBj5),
                                                  confirmText: I.intl.string(C.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      (r(), i(e));
                                                  },
                                              }),
                                          children: [
                                              (0, n.jsx)(b.E, {
                                                  variant: "text-md/medium",
                                                  className: rW.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != l.relative &&
                                                  (0, n.jsx)(b.E, {
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
            className: rW.nd,
            "aria-label": I.intl.string(C.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": I.intl.string(C.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: I.intl.string(I.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: rV.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: I.intl.string(C.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: rW.rf, children: t }),
            ],
        })
    );
}
var rK = l(120426),
    rY = l(873727),
    rQ = l(147248),
    rX = l(418842),
    rZ = l(885386),
    rJ = l(171936),
    r0 = l(796036);
function r1(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            header: d,
            mainClassName: c,
            content: m,
            sidebar: f,
        } = e,
        [h, g] = a.useState(null),
        x = (0, u.A)(r, o),
        p = x?.id ?? null;
    (!(function (e, t) {
        let l = (0, $.bG)([nc.A], () => (0, rY.x4)(nc.A.theme)),
            n = (0, $.bG)([rQ.A], () => rQ.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, $.cf)([tS.Ay], () => ({
                reducedMotion: tS.Ay.useReducedMotion,
                fontScale: (0, rY.U0)(),
                highContrast: tS.Ay.isHighContrastModeEnabled,
                forcedColors: tS.Ay.useForcedColors,
                underlineLinks: tS.Ay.alwaysShowLinkDecorations,
            })),
            d = rZ.hH.useSetting(),
            c = (0, rX.C)(),
            m = a.useRef(!1),
            f = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, rK.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, rY.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rx.W)(n, "set-env", a, {
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
                    ((m.current = !1), f.current || p.current());
                }));
        }, []);
        (a.useEffect(
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
                (x(), v());
            }, [v, x]),
            a.useLayoutEffect(() => {
                let l = (0, rK.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, rK.F)(e, t) && ((g.current = null), v());
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
    })(h, p),
        a.useEffect(() => {
            if (null != t) return (0, rJ.mn)(t, () => (0, rK.F)(h, p));
        }, [t, h, p]));
    let v = a.useCallback(() => (0, rK.F)(h, p), [h, p]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ex.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: g, className: ex.fm, children: m })],
            }),
            f,
            (0, n.jsx)(rL, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                frameId: p,
            }),
            (0, n.jsx)(rN, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                toggleRef: l,
            }),
        ],
    });
}
function r2(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: f,
            header: h,
            chatOpen: g,
            onCloseChat: x,
            chatHeaderAction: p,
            versionHistoryOpen: v = !1,
            restorePointsOpen: b = !1,
            onCloseRestorePoints: j,
            installScope: y = null,
            onCloseVersionHistory: k,
            onRestoreVersion: w,
            debugOpen: N = !1,
            onCloseDebug: A,
            restoreState: E,
            previewReady: S,
            previewGate: M,
            channelMessages: T,
            availability: R,
            activeMode: P,
            widgetApplicationId: _,
        } = e,
        L = a.useRef(null),
        [F, D] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (f.type === s.U.MAIN) return ((0, c.HV)(r), () => (0, c.HV)(null));
    }, [r, f.type]),
        a.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, r0.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = L.current;
            if (null == e) return;
            function t() {
                null != e && D(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        a.useEffect(() => () => (0, c.Zq)(0), []));
    let $ = Math.max(360, F - 320),
        O = null != T ? T.open : g,
        z = g || f.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: L,
        className: ex.LB,
        children: (0, n.jsx)(r1, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: f,
            header: h,
            mainClassName: null == h ? void 0 : i()(ex.ez, { [ex.zt]: O }),
            content: (0, n.jsx)(ec, {
                applicationId: r,
                previewApplicationId: u,
                surface: f,
                previewReady: S,
                previewGate: M,
                availability: R,
                activeMode: P,
                widgetApplicationId: _,
            }),
            sidebar:
                null != T
                    ? (0, n.jsx)(nI, {
                          open: T.open,
                          maxWidth: $,
                          onWidthChange: c.Zq,
                          children: T.open
                              ? (0, n.jsx)(ep, { channel: T.channel, guild: T.guild, onClose: T.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(nI, {
                            open: g,
                            maxWidth: $,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ex.cO,
                                children: N
                                    ? (0, n.jsx)(rl, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            rH,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: w ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(rG, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(rR.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": I.intl.string(I.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == x
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: o.P,
                                                                        tooltip: I.intl.string(C.default.YdgE0j),
                                                                        onClick: x,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(d.Ay.Title, {
                                                          children: I.intl.string(I.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ex.cb,
                                                      children: (0, n.jsx)(nw, { projectId: t, restoreState: E }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
