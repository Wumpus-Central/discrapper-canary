l.d(t, { A: () => r1 });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(789645),
    o = l(672929),
    u = l(58736),
    d = l(948230),
    c = l(277977),
    m = l(289873),
    f = l(821609),
    h = l(627363),
    g = l(580954),
    x = l(753514),
    p = l(297264),
    v = l(834730),
    b = l(625180),
    j = l(91242),
    y = l(812901),
    k = l(317608),
    w = l(206600),
    N = l(869146),
    A = l(742023),
    E = l(697744),
    S = l(50617),
    C = l(375708),
    I = l(296167);
function M(e) {
    let { className: t } = e,
        { Component: l, events: r, getDuration: i } = (0, E.c)();
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
                    children: C.intl.string(S.default.jTuX7C),
                }),
            ],
        })
    );
}
var T = l(328284);
function R(e) {
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
var P = l(652215),
    _ = l(165610),
    L = l(963691);
function F(e) {
    let { applicationId: t, surface: l } = e,
        { frame: r, state: i } = (0, w.A)({ applicationId: t, surface: l }),
        s = (0, _.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = j.A.getFrame(e);
                    if (null == t || N.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT)) return;
                    let l = j.A.getMainFrame()?.id === e;
                    t.intent === _.sV.MAIN
                        ? (l || b.A.promoteFrame(e), b.A.resetFrameLayoutModes(e))
                        : l && b.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = j.A.getFrame(s)) &&
                        ((0, _.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        A.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === _.sV.INLINE && b.A.promoteFrame(s),
                              b.A.updateFrameLayoutMode({ frameId: s, layoutMode: _.y0.PIP }))
                            : e.intent === _.sV.MAIN && b.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case w.n.Launched:
            return (0, n.jsx)(k.A, { frameId: r.id, level: y.A.WithinAppContent, className: L.Z7 });
        case w.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(R, {
                    title: C.intl.string(S.default["4f6Vkr"]),
                    body: C.intl.string(S.default.LJ2q1H),
                }),
            });
        case w.n.NoApplication:
            return (0, n.jsx)(M, { className: L.qs });
        case w.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(R, {
                    title: C.intl.string(S.default.FHOJiH),
                    body: C.intl.string(S.default["1yLQoV"]),
                }),
            });
        case w.n.Error:
            return (0, n.jsxs)("div", {
                className: L.qs,
                children: [
                    (0, n.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: C.intl.string(S.default.MeLWCr),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: L.tj,
                        children: C.intl.string(S.default["1RCbQT"]),
                    }),
                ],
            });
        case w.n.AwaitingLaunch:
        case w.n.Loading:
            return (0, n.jsx)("div", { className: L.qs, children: (0, n.jsx)(m.y, {}) });
    }
}
var D = l(17928),
    $ = l(323384),
    O = l(308528),
    z = l(334738),
    q = l(688438),
    U = l(355622),
    B = l(734057),
    G = l(531685),
    V = l(365971),
    W = l(362417);
function H(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: W.f,
        children: [
            (0, n.jsx)($.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function K() {
    return (0, n.jsx)("div", { className: W.f, children: (0, n.jsx)(m.y, {}) });
}
function Y(e) {
    let t,
        l,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, h.YY)(r),
        o = i?.bot?.id ?? null,
        u = (0, D.bG)([B.A], () => {
            if (null == o) return null;
            let e = B.A.getDMFromUserId(o);
            return null != e ? B.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        a.useEffect(() => {
            null != t && O.A.preload(P.ME, t);
        }, [t]),
        (l = (0, D.bG)([G.A], () => G.A.isFocused())),
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
        m = null != o && d === o;
    return (a.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            O.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, n.jsx)(K, {})
        : null == o || m
          ? (0, n.jsx)(H, { message: C.intl.string(S.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: W.g,
                  children: (0, n.jsx)(q.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
              });
}
var Q = l(598748),
    X = l(486610),
    Z = l(531913),
    J = l(587895),
    ee = l(633075),
    et = l(946356),
    el = l(139730),
    en = l(479299),
    ea = l(287809),
    er = l(58551),
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
            widgetTop: null != o[Q.m.WIDGET_TOP],
            widgetBottom: null != o[Q.m.WIDGET_BOTTOM],
            miniProfile: null != o[Q.m.MINI_PROFILE],
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
        p = (0, o.A)(t, r),
        { isLoading: v } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != p && (0, g.A)().leaveFrame(p.id);
        }, [p, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: eu.q, children: (0, n.jsx)(m.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: eu.q,
            children: (0, n.jsx)(R, {
                wide: !0,
                title: C.intl.string(S.default.DYwf2n),
                body: C.intl.string(S.default.WWj3pN),
                children: (0, n.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: C.intl.string(S.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!i) return (0, n.jsx)(M, { className: eu.q });
    if (null == t) return null;
    if (v) return (0, n.jsx)("div", { className: eu.q, children: (0, n.jsx)(m.y, {}) });
    let b = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, x.z3)(d), "aria-label": (0, x.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eu.R,
        ...b,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, n.jsx)(F, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, n.jsx)("div", {
                          className: eu.q,
                          children: (0, n.jsx)(R, {
                              wide: !0,
                              title: C.intl.string(S.default.SGHO9K),
                              body: C.intl.string(S.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(es, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, n.jsx)(Y, { previewApplicationId: l }) : null,
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
        i = (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: eg.Wx,
        children: [
            (0, n.jsx)(em.A, { channel: t, draftType: eh.C.ChannelMessage }),
            (0, n.jsxs)(u.Ay, {
                toolbar: i,
                "aria-label": C.intl.string(C.t.BIYAqa),
                children: [
                    (0, n.jsx)(u.Ay.ChannelIcon, { icon: ec.ChatIcon, "aria-label": C.intl.string(C.t["/VQax8"]) }),
                    (0, n.jsx)(u.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: eg.GZ,
                children: (0, n.jsx)(q.A, { channel: t, guild: l, chatInputType: U.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ep = l(689175),
    ev = l(29692),
    eb = l(903586),
    ej = l(74029),
    ey = l(783791),
    ek = l(717447),
    ew = l(29080),
    eN = l(46054),
    eA = l(76275);
function eE(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : C.intl.string(S.default.MdXWEK);
}
function eS(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, eb.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, eb.Lf)(t),
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
var eC = l(939249),
    eI = l(478016),
    eM = l(34136);
function eT(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, n.jsxs)("section", {
        className: i()(eM.Nr, r),
        ...o,
        children: [
            (0, n.jsxs)("header", {
                className: i()(eM.wx, null != l && eM.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var eR = l(113757);
function eP(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(eC.D, {
        className: i()(eR.nM, { [eR.f1]: o, [eR.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": C.intl.formatToPlainString(S.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: eR.jo,
                children: [
                    l
                        ? (0, n.jsx)(eI.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eR.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eR.G9,
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
function e_(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(eT, {
        title: C.intl.string(S.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                eP,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eL = l(435619),
    eF = l(866665),
    eD = l(885574),
    e$ = l(430392),
    eO = l(632015),
    ez = l(256905),
    eq = l(824757);
function eU(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: eq.uW,
        children: [
            (0, n.jsxs)("span", {
                className: eq.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eB() {
    return (0, n.jsx)(eF.m, {
        text: C.intl.string(S.default.DXe2dP),
        children: (0, n.jsx)(eC.D, {
            className: eq.bk,
            "aria-label": C.intl.string(S.default.Y6y4nQ),
            children: (0, n.jsx)(eD.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eG(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(eU, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: eq.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: eq.jw,
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
function eV(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? $.k : e$.RobotIcon;
    return (0, n.jsxs)("span", {
        className: eq.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: eq.L6,
                      children: [
                          (0, n.jsx)(eO.f, {
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
                              children: C.intl.string(S.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: eq.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: C.intl.string(t ? C.t.IC5Ann : S.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eW(e) {
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
                        (0, c.PK)(e, t).then(
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
                            (0, c.n6)(e, t).then(
                                (e) => {
                                    e && 0 === s ? o(1) : i(!0);
                                },
                                () => i(!0),
                            ));
                    }, [e, t, s]),
                }
            );
        })(t, r),
        u = C.intl.string(S.default.FW8UcU),
        d = a.useCallback(() => {
            (0, c.PK)(t, r).then(
                (e) => {
                    (0, ez.R)({
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
        : (0, n.jsx)(eU, {
              label: C.intl.string(S.default["9W8SbY"]),
              info: (0, n.jsx)(eB, {}),
              children: (0, n.jsx)(eC.D, {
                  className: eq.xX,
                  onClick: d,
                  "aria-label": C.intl.string(S.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: u, className: eq.sN, onError: o }) : null,
              }),
          });
}
function eH(e) {
    let { projectId: t, proposal: l } = e;
    return (0, n.jsx)(eT, {
        title: C.intl.string(S.default["60htw+"]),
        trailing: (0, n.jsx)(eV, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: eq.rf,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(eW, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(eU, {
                          label: C.intl.string(S.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: eq.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: eq.Aw,
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
                    ? (0, n.jsx)(eU, {
                          label: C.intl.string(C.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: eq.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: eq.uX,
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
                (0, n.jsx)(eG, { label: C.intl.string(S.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eG, { label: C.intl.string(S.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eK = l(192308),
    eY = l(479191);
function eQ(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, eK.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]);
    return (0, n.jsxs)("article", {
        className: eY.Lo,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: C.intl.string(S.default["/e28TK"]),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : C.intl.string(S.default.jxvtin),
            }),
            (0, n.jsx)("div", {
                className: eY.cS,
                children: r.fields.map((e) =>
                    (0, n.jsx)(
                        "span",
                        {
                            className: eY.$H,
                            children: (0, n.jsx)(v.E, {
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
                className: eY.sq,
                children: (0, n.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: C.intl.string(S.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eX = l(976814),
    eZ = l(973e3);
function eJ(e) {
    let { projectId: t, request: l } = e,
        r = (0, D.bG)([c.Ay], () => c.Ay.getSettings(t)),
        i = (l.keys ?? []).map((e) => r?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = a.useCallback(() => {
            (0, eX.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0, isPreview: !0 });
        }, [t, l]);
    return (0, n.jsxs)("article", {
        className: eZ.Mk,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: C.intl.string(S.default.wgDhiQ),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : C.intl.string(S.default["V+DBhs"]),
            }),
            i.length > 0
                ? (0, n.jsx)("div", {
                      className: eZ.R6,
                      children: i.map((e) =>
                          (0, n.jsx)(
                              "span",
                              {
                                  className: eZ.K4,
                                  children: (0, n.jsx)(v.E, {
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
                className: eZ.p0,
                children: (0, n.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: C.intl.string(S.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var e0 = l(196582);
let e1 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    e2 = {
        snail: () => S.default["2l3AEQ"],
        goat: () => S.default["+FPL+I"],
        frog: () => S.default.w4GOfR,
        bunny: () => S.default.XmZT9M,
        cat: () => S.default.NnydwQ,
        caterpillar: () => S.default["4iXcNT"],
        butterfly: () => S.default.DoTGt5,
        dog: () => S.default["9zxqmP"],
        spider: () => S.default.HF0T3L,
        bee: () => S.default.XTzDga,
        bot: () => S.default.abtC2b,
    },
    e7 = {
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
function e6(e) {
    return { ...e7[e], name: C.intl.string(e2[e]()) };
}
function e4(e) {
    return e1.includes(e) ? e6(e) : void 0;
}
function e5(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % e1.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, e1[(t + l) % e1.length]);
            }),
            n
        );
    })(e))
        t.set(l, e6(n));
    return t;
}
var e3 = l(683063),
    e9 = l(705754),
    e8 = l(883455),
    te = l(13699);
function tt(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, eb.SY)(l.steps),
        c = u
            ? null != d
                ? (0, eb.WQ)(d)
                : eE(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(eE(e));
                  switch (e.status) {
                      case "failed":
                          return C.intl.formatToPlainString(S.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return C.intl.formatToPlainString(S.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return C.intl.formatToPlainString(S.default.vuv9bT, {
                                  task: t,
                                  duration: (0, eA.M)(e.durationMs),
                              });
                          return C.intl.formatToPlainString(S.default.KS49RN, { task: t });
                      default:
                          return C.intl.formatToPlainString(S.default.KS49RN, { task: t });
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
                                    className: te.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            e8.A,
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
                                      className: te.iq,
                                      children: (0, n.jsx)(e9.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(e0.A, {
        glyph: (0, n.jsx)(e3.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: eE(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: te.nC,
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
var tl = l(140735),
    tn = l(329456);
let ta = [];
function tr(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tn.xL, { [tn.Vb]: "in_progress" === t, [tn.cT]: "completed" === t }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return C.intl.string(S.default.TkPGOH);
                case "in_progress":
                    return C.intl.string(S.default["oK+fmd"]);
                default:
                    return C.intl.string(S.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: tn.Qd,
                itemClassName: tn.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tn.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tn.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ti(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : ta), [l, t]),
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
        className: tn.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    e3.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tn.MA,
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
                      className: tn.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function ts(e) {
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
            ((t = (s ?? ta).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? ta) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tn.p_,
        children: [
            l.map((e) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tn.AS, { [tn.J1]: "completed" === e.status }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tr, { status: e.status }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tn.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", { className: tn.Qq, children: e.text }),
                            }),
                            (0, n.jsx)(ti, { agents: u.get(e.id) ?? ta, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tn.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tr, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tn.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tn.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function to(e) {
    let { todos: t, provisional: l, agents: a, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, n.jsxs)(eT, {
              title: C.intl.string(S.default.qCRC6c),
              trailing: (0, n.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: C.intl.formatToPlainString(S.default.bQvqly, { completed: i, total: s }),
              }),
              className: tn.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, n.jsx)(tl.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: C.intl.formatToPlainString(S.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, n.jsx)("div", {
                      className: tn.rf,
                      children: (0, n.jsx)(ts, { todos: t, provisional: l, agents: a }),
                  }),
              ],
          });
}
var tu = l(229775),
    td = l(165648);
function tc(e) {
    let t = e5(e.map((e) => e.taskId));
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
                      task: eE(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tm(e) {
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
        g = a.useMemo(() => (0, eb.GO)(l, { turnActive: r }), [l, r]),
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
            className: te.pj,
            "data-live": !1,
            children: (0, n.jsx)(e0.A, {
                glyph: (0, n.jsx)(ew.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(S.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = r ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, eb.lt)(l) ?? o ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !b) return null;
    let j = x.tasks,
        y = e5(j.map((e) => e.taskId)),
        k = !f && (r || j.some((e) => "running" === e.task.status)),
        w = tc(j);
    return (0, n.jsx)(e0.l.Provider, {
        value: j.length,
        children: (0, n.jsxs)("ol", {
            className: te.pj,
            "data-live": k,
            children: [
                (0, n.jsx)(ek.A, {
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
                              tt,
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
                          className: te.YO,
                          children: (0, n.jsx)(to, { todos: v, provisional: u, agents: w }),
                      })
                    : null,
            ],
        }),
    });
}
function tf(e) {
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
            showsClosingMessage: b,
            attachmentsHost: j,
        } = a.useMemo(
            () => eS({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        y = null == u ? null : (0, n.jsx)(eL.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, n.jsx)("div", { className: te.MT, children: y }),
        w = h
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(S.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: te.ue,
        children: [
            x.length > 0 && !g
                ? (0, n.jsx)("ol", {
                      className: te.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: te.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: td.PT,
                                              children: eN.A.parse(e.content, !0, {
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
                ? (0, n.jsx)(eH, { projectId: t, proposal: s })
                : b
                  ? (0, n.jsxs)("div", {
                        className: i()(te.ky, tu.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(td.PT, te.cW),
                                children: eN.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === j ? k : null,
                            w,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(te.ky, tu.XR),
                      children: (0, n.jsx)(eQ, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(te.ky, tu.XR),
                      children: (0, n.jsx)(eJ, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === j ? y : null,
            null != o && o.length > 0 ? (0, n.jsx)(e_, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            b ? null : w,
        ],
    });
}
var th = l(864970),
    tg = l(146806),
    tx = l(475358),
    tp = l(81369),
    tv = l(922016),
    tb = l(980707),
    tj = l(477782),
    ty = l(717400),
    tk = l(663341),
    tw = l(826745),
    tN = l(783977),
    tA = l(559647),
    tE = l(775602),
    tS = l(435558),
    tC = l.n(tS),
    tI = l(506774),
    tM = l(228366);
let tT = "VibegrationsComposerDrafts";
function tR() {
    return tI.w.get(tT) ?? {};
}
let tP = new Map(),
    t_ = tC().throttle(() => {
        if (0 === tP.size) return;
        let e = tR();
        for (let [t, l] of tP) "" === l ? delete e[t] : (e[t] = l);
        (tP.clear(), tI.w.set(tT, e));
    }, 1e3);
class tL extends D.Ay.Store {
    getDraft(e) {
        let t = tP.get(e);
        return null != t ? t : (tR()[e] ?? "");
    }
}
let tF = new tL(tM.h, {
    LOGOUT: function () {
        return (tP.clear(), t_.cancel(), tI.w.remove(tT), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (tP.set(t, l), t_(), "" === l && t_.flush(), !1);
    },
});
var tD = l(113491);
(l(323874), l(14289), l(35956));
var t$ = l(285796),
    tO = l(673724),
    tz = l(590380),
    tq = l(298668);
let tU = tO.Is,
    tB = 0;
function tG(e) {
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
                        a = ++tB,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tU) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: C.intl.formatToPlainString(S.default.DlX57a, { count: tU }),
                        });
                        continue;
                    }
                    if (!(0, tO.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: C.intl.formatToPlainString(S.default.cI7t94, {
                                size: (0, tO.ZJ)((0, tO.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = tO.Wb.has(e) ? URL.createObjectURL(n) : void 0;
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
                                m(n, { status: "error", errorText: C.intl.string(S.default.GwEHvn) }));
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
function tV(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(tz.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tq.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: tq.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(S.default["3HWvgk"]),
                children: (0, n.jsx)(t$.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tW = l(789438);
let tH = "text-md/normal",
    tK = null;
function tY(e) {
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
                frontFrom: 1e3 * (0, tg._R)(m),
                frontTo: 1e3 * (0, tg._R)(h),
                backFrom: 1e3 * (0, tg.T)(m),
                backTo: 1e3 * (0, tg.T)(h),
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
        w = a.useRef(!1),
        N = a.useCallback(() => {
            (k(w.current ? (l ? "through" : "out") : l ? "in" : null), j((e) => e + 1));
        }, [l]);
    a.useEffect(() => {
        w.current = l;
    }, [l, t]);
    let A = "in" === y ? x.backFrom : x.frontFrom,
        E = "out" === y ? x.frontTo : x.backTo,
        I = (0, D.bG)([tE.Ay], () => tE.Ay.useReducedMotion),
        M = t === C.intl.string(S.default.Jj8Ftb),
        T = s === t && M;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(tW.VT, { [tW.qk]: a }),
            style: a
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, E - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, n.jsx)(tx.e, { shortcut: "tab", className: tW.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(th.o, {
                text: t,
                variant: tH,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(tW.xM, { [tW.s2]: r }),
                onStart: N,
                onComplete: () => o(t),
            }),
            R(tW.IS, l || (!I && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: tW.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: tH, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: tW.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: tH, tag: "span", className: tW.xM, children: t }),
                          R(tW.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function tQ(e) {
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
            hasPendingContext: p = !1,
            modelSettings: v,
            onModelSettingsChange: b,
        } = e,
        [j, y] = a.useState(() => tF.getDraft(t)),
        k = a.useCallback(
            (e) => {
                ((0, d.I$)(t, e), y(e));
            },
            [t],
        ),
        [w, N] = a.useState(t);
    w !== t && (N(t), y(tF.getDraft(t)));
    let A = (0, D.bG)([tE.Ay], () => tE.Ay.isSubmitButtonEnabled),
        [E, I] = a.useState(!1),
        [M, T] = a.useState(!1);
    a.useEffect(() => {
        i || T(!1);
    }, [i]);
    let R = a.useRef(null),
        { drafts: P, addFiles: _, removeDraft: L, settled: F, takeRefs: $ } = tG({ onUploadFile: c, onDeleteFile: m }),
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
            let e = $();
            o(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == tK && (tK = document.createElement("canvas").getContext("2d"));
                let i = tK;
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
        }, [z, j, o, $, k]),
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
                (e.preventDefault(), I(!1), l && _(Array.from(e.dataTransfer.files)));
            },
            [l, _],
        ),
        Q = a.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), I(!0));
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
            let t = tJ(e);
            null != t && et(t);
        }
        en(!0);
        let t = setTimeout(() => en(!1), tX);
        return () => clearTimeout(t);
    }, [j]);
    let ea = a.useMemo(() => ({ "--custom-glow-x": `${ee}px` }), [ee]),
        er = el ? ` ${tW.EB}` : "",
        ei = s
            ? C.intl.string(S.default.pGFXZ0)
            : r
              ? C.intl.string(S.default.JeM47J)
              : l
                ? p
                    ? C.intl.string(S.default.Bs7bUv)
                    : x
                      ? C.intl.string(S.default.M3ovXY)
                      : C.intl.string(i ? S.default["67PpcP"] : S.default.ahRdoJ)
                : C.intl.string(S.default.nm4w9P),
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
        onDragLeave: () => I(!1),
        className: E ? `${tW.DA} ${tW.pV}` : tW.DA,
        children: [
            P.length > 0
                ? (0, n.jsx)("div", {
                      className: tW.lN,
                      children: P.map((e) => (0, n.jsx)(tV, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${tW.wg} ${tW.LP}${er}`, style: ea, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${tW.wg} ${tW.L3}${er}`, style: ea, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: tW.VA,
                ref: Z,
                children: [
                    (0, n.jsx)("input", {
                        ref: R,
                        type: "file",
                        multiple: !0,
                        onChange: X,
                        className: tW.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == h
                        ? (0, n.jsx)(eF.m, {
                              text: C.intl.string(S.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: J,
                                  type: "button",
                                  className: `${tW.Y0} ${tW.nu}`,
                                  disabled: !l,
                                  onClick: () => R.current?.click(),
                                  "aria-label": C.intl.string(S.default.d6Rqlu),
                                  children: (0, n.jsx)(tp.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: tW.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tv.Y, {
                              targetElementRef: J,
                              position: "top",
                              align: "left",
                              animation: tv.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tb.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(tj.rX, {
                                          children: [
                                              (0, n.jsx)(tj.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: tp.H,
                                                  leadingAccessory: { type: "icon", icon: tp.H },
                                                  action: () => R.current?.click(),
                                              }),
                                              null != h
                                                  ? (0, n.jsx)(tj.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(S.default.edKajy),
                                                        iconLeft: ty.q,
                                                        leadingAccessory: { type: "icon", icon: ty.q },
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
                                      className: `${tW.Y0} ${tW.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(tk.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: tW.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, n.jsx)("div", {
                              ref: eu,
                              className: tW.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(tY, { text: em, offering: ec && null == q, typed: null != q }),
                          })
                        : null,
                    (0, n.jsx)(tw.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: H,
                        onPaste: K,
                        placeholder: ef ? "" : ei,
                        disabled: !l,
                        "aria-label": C.intl.string(S.default.OPr66w),
                        "aria-describedby": ef ? ed : void 0,
                        rows: 1,
                        className: tW.jp,
                    }),
                    ef ? (0, n.jsx)(tl.A, { id: ed, children: ei }) : null,
                    (0, n.jsx)("div", {
                        className: tW.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(eF.m, {
                                      text: C.intl.string(S.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${tW.Y0} ${tW.$E}`,
                                          disabled: M,
                                          onClick: V,
                                          "aria-label": C.intl.string(S.default.KdgI4k),
                                          children: (0, n.jsx)(ew.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != v && null != b
                                  ? (0, n.jsx)(tD.A, {
                                        settings: v.settings,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: b,
                                        className: `${tW.Y0} ${tW.$E}`,
                                        icon: (0, n.jsx)(tN.R, {
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
                              className: tW.fF,
                              children: [
                                  (0, n.jsx)("div", { className: tW.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: tW.rt,
                                      disabled: !z,
                                      "aria-label": C.intl.string(S.default["22GHMt"]),
                                      children: (0, n.jsx)(tA.SendMessageIcon, {
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
let tX = 1500,
    tZ = [
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
function tJ(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = tJ.mirror;
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
                (tJ.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of tZ) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
tJ.mirror = null;
var t0 = l(320095),
    t1 = l(963852),
    t2 = l(521981),
    t7 = l(763754),
    t6 = l(491182),
    t4 = l(438729),
    t5 = l(622868),
    t3 = l(448368),
    t9 = l(837528),
    t8 = l(601280),
    le = l(715628),
    lt = l(752636),
    ll = l(9842),
    ln = l(589022),
    la = l(95701),
    lr = l(994500),
    li = l(967198);
let ls = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lo(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lu(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function ld(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lu(e, t),
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
    if (lo(a) && lo(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lo(lu(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function lc(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([tE.Ay], () => tE.Ay.useReducedMotion),
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
                      for (; r > 0 && ld(t, r);) r--;
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
                                    for (; n > t + 1 && l - n < 12 && ls.has(e.charAt(n - 1));) n--;
                                    return ls.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && ld(t, o);) o++;
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
var lm = l(803306);
let lf = new Set(),
    lh = new Map();
function lg(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
var lx = l(73432),
    lp = l(441136);
let lv = (0, la.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    lb = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lj(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lp.Yq, { [lp.x1]: t }), children: e });
}
function ly(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lk(e, t, l) {
    let { content: r } = (0, t8.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lv, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(t4.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, le.A)(i, r);
}
function lw(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, t9.m)(e, lv, t.usernameProfile, r),
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
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, t2.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lp.GV,
                              children: [
                                  (0, n.jsx)(lx.A, { className: lp.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, D.cf)(
            [lr.A],
            () => ({
                isReplyAuthorBlocked: lr.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lr.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, t7.X4)(l),
        c = (0, t7.X4)(t),
        m = lw(l);
    return (0, n.jsx)(t3.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lv,
        referencedMessage: { state: ll.a.LOADED, message: l },
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
function lA(e) {
    let { message: t, author: l } = e,
        a = lw(t);
    return (0, n.jsx)(t5.Ay, {
        message: t,
        channel: lv,
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
function lE(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || lf.has(e) || null != ea.default.getUser(e)) return;
                let t = lh.get(e) ?? 0;
                t >= 3 ||
                    (lh.set(e, t + 1),
                    lf.add(e),
                    lm
                        .getUser(e)
                        .finally(() => lf.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, D.bG)(
            [ea.default],
            () => lg(r, null != r ? ea.default.getUser(r) : null, ea.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, t7.FT)(o, null), [o]),
        d = a.useMemo(() => (0, ev.LL)(t), [t]),
        c = d?.body ?? t,
        m = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, t1.Ay)({ channelId: lv.id, content: c, author: o });
            return (0, t0.rh)({ ...e, timestamp: ly(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, o, l]);
    return null == m
        ? null
        : (0, n.jsx)(lS, { message: m, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function lS(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = lk(t, a);
    return (0, n.jsx)(t6.A, {
        className: lp.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(lA, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: lp.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lp.GV,
                              children: [
                                  (0, n.jsx)(lx.A, { className: lp.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lp.WO, children: o }),
                      ],
                  }),
        childrenAccessories: lj(i, "" !== a),
        disableInteraction: !0,
    });
}
function lC(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lc(t, { streaming: u }),
        m = a.useMemo(() => (0, t7.FT)(null, null), []),
        f = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, D.bG)(
            [ea.default],
            () => lg(h, null != h ? ea.default.getUser(h) : null, ea.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, ev.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, t1.Ay)({ channelId: lv.id, content: x?.body ?? i.content, author: g });
            return (0, t0.rh)({ ...e, id: i.id, timestamp: ly(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lv.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, t1.Ay)({ channelId: lv.id, content: d, author: lb });
            return (0, t0.rh)({
                ...e,
                timestamp: ly(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != v ? { type: P.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = lk(b, d, lp.OS);
    return (0, n.jsxs)("div", {
        className: lp.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(t6.A, {
                className: lp.yE,
                author: f,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(lN, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, lt.A)({ message: b, channel: lv, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lj(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lp.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)($.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let lI = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var lM = l(375068);
function lT(e) {
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
                        let e = !(0, ey.BL)(t),
                            n = eS({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, eb.C6)(t.steps, { turnActive: e }),
                            { lastWork: i, open: s } = (0, eb.CT)(r, { turnActive: e }),
                            o = r.at(-1)?.index,
                            u = !1;
                        for (let d of r) {
                            if (null != d.prose && lI.test(d.prose.content)) u = !0;
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
                        let d = lI.test(t.content ?? "");
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
              className: lM.x7,
              children: (0, n.jsx)(lR, {
                  role: "assistant",
                  children: (0, n.jsx)(lC, { content: C.intl.string(S.default.khZEUv) }),
              }),
          })
        : (0, n.jsx)("ol", {
              ref: o,
              className: lM.x7,
              children: f.map((e) => {
                  let a = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                          return (0, n.jsx)(
                              lR,
                              {
                                  role: "user",
                                  anchorId: a.id,
                                  highlighted: u === a.id,
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lE, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != l ? (0, n.jsx)(eL.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, n.jsx)(
                              lR,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lC, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, n.jsx)(eL.A, { projectId: t, attachments: a.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, n.jsx)(
                              lR,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tm, {
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
                              lR,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tm, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, n.jsx)(
                              lR,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tm, {
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
                              lR,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lC, {
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
                                      accessories: (0, n.jsx)(tf, {
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
function lR(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(lM.xk, { [lM.Qo]: r, [lM.q3]: s }),
        children: l,
    });
}
function lP(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(S.default.W7oyuf);
        case "closed":
            return C.intl.string(S.default["yBmS+I"]);
        case "failed":
            return C.intl.string(S.default.eE60xI);
    }
}
var l_ = l(559676),
    lL = l(625903),
    lF = l(964675);
function lD(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([c.Ay], () => null != c.Ay.getSettings(t), [t]),
        r = a.useCallback(() => {
            (0, eX.A)(t, { isPreview: !0 });
        }, [t]);
    return l
        ? (0, n.jsx)(eC.D, {
              className: lF.h,
              "aria-label": C.intl.string(S.default.gTMvzD),
              onClick: r,
              children: (0, n.jsx)(lL.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var l$ = l(823376),
    lO = l(495557);
function lz(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = lc(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lO.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ep.Ch, {
                ref: o,
                className: lO.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(td.PT, lO.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eN.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lq = l(921461);
function lU(e) {
    let { activity: t, compacting: l = !1, restoring: r = !1, controlling: s = !1, spoken: o, onSpokenChange: u } = e,
        d = a.useRef(null),
        c = a.useId(),
        [m, f] = a.useState(null),
        h = (function (e) {
            let { activity: t, compacting: l = !1, restoring: n = !1, controlling: a = !1 } = e,
                r = null != t && "end" !== t.phase;
            return a
                ? S.default.ivvYHP
                : n
                  ? S.default.aFffp2
                  : l
                    ? S.default["0vH/5G"]
                    : r
                      ? S.default.Ly7F7x
                      : S.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, controlling: s }),
        g = C.intl.string(h),
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
    return (0, n.jsx)(tv.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: w,
        onRequestClose: A,
        renderPopout: () => (0, n.jsx)(lz, { id: c, activity: t }),
        children: () =>
            (0, n.jsxs)(eC.D, {
                innerRef: d,
                className: i()(lq.hF, y && lq.Xd),
                "aria-label": C.intl.string(r ? S.default.pGFXZ0 : S.default.SzdX35),
                "aria-expanded": w,
                "aria-describedby": w ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(h),
                onClick: N,
                children: [
                    (0, n.jsx)("span", {
                        className: lq.bl,
                        children: (0, n.jsx)(l$.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: lq.xu,
                        "aria-hidden": !!s || void 0,
                        children: (0, n.jsx)(th.o, {
                            ref: b,
                            text: x,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: lq.yE,
                        }),
                    }),
                ],
            }),
    });
}
var lB = l(280894);
function lG(e) {
    return e.toLocaleString();
}
function lV(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: lB.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: lB.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lG((0, tO.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lG(l.input_tokens),
                    " in \xb7 ",
                    lG(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${lG(l.cache_creation_input_tokens)} cache write \xb7 ${lG(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function lW(e) {
    let { project: t } = e,
        l = (0, tO.wU)(t.compaction),
        a = (0, tO.wU)(t.classifier),
        r = (0, tO.wV)(t.orchestrator, t.codegen),
        i = (0, tO.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: lB.si,
        role: "dialog",
        "aria-label": C.intl.string(S.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: lB.Q$,
                children: (0, n.jsxs)("div", {
                    className: lB.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lG((0, tO.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(lV, { label: C.intl.string(S.default.R9aduM), usage: r }),
            (0, n.jsx)(lV, { label: C.intl.string(S.default.Tj6b30), usage: l }),
            (0, n.jsx)(lV, { label: C.intl.string(S.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: lB.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(S.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tO.sj)(i) ? "\u2014" : `${Math.round(100 * (0, tO.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function lH(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tv.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(lW, { project: t }),
        children: (e) =>
            (0, n.jsx)(eC.D, {
                innerRef: l,
                className: lB.Y$,
                "aria-label": C.intl.string(S.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(eD.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lK = l(258216);
function lY(e) {
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
        c = (0, l_.o4)(l),
        [m, f] = a.useState(null),
        h =
            null == u
                ? null
                : ((t = (0, tO.a7)(u.cost_usd)),
                  {
                      text: C.intl.formatToPlainString(S.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: C.intl.formatToPlainString(S.default["7SZZvj"], { runes: t, turns: u.turns }),
                  });
    return (0, n.jsxs)("div", {
        className: lK.jf,
        children: [
            (0, n.jsx)("div", {
                className: lK.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    r || i || c
                        ? (0, n.jsx)(lU, {
                              activity: s,
                              compacting: o,
                              restoring: i,
                              controlling: c,
                              spoken: m,
                              onSpokenChange: f,
                          })
                        : null,
            }),
            (0, n.jsx)(lD, { projectId: l }),
            null == u || null == h
                ? null
                : (0, n.jsxs)("span", {
                      className: lK.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": h.aria,
                              children: h.text,
                          }),
                          (0, n.jsx)(lH, { project: u }),
                      ],
                  }),
            "open" === d
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === d ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(S.default.eDDdhB, { status: lP(d) }),
                      "data-vibegrations-conn": !0,
                      "data-state": d,
                      className: lK.XF,
                      children: lP(d),
                  }),
        ],
    });
}
var lQ = l(22231),
    lX = l(408278),
    lZ = l(900797),
    lJ = l(847374),
    l0 = l(477155),
    l1 = l(935286),
    l2 = l(856795),
    l7 = l(424110);
function l6(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eC.D, {
        className: i()(l7.uK, { [l7.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": C.intl.formatToPlainString(d ? S.default.aL1BKQ : S.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: l7.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: l7.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: l7.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l7.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, n.jsx)(v.E, {
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
                ? (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: l7.rM,
                      children: C.intl.string(S.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function l4(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(l7.Ge, l7.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(l6, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: l7.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: l7.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(lQ.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(l7.Pu, l7.es), children: s }),
                ],
            }),
        ],
    });
}
function l5(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [o, u] = a.useState({}),
        [d, c] = a.useState({}),
        [m, f] = a.useState(0),
        [h, g] = a.useState(null),
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        w = a.useRef(null),
        [N, A] = a.useState(null),
        E = a.useRef(null),
        I = a.useRef(0),
        M = null == l,
        T = t.questions.length,
        R = Math.min(m, T - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        O = d[P.id] ?? "",
        { text: z, phase: q } = (0, l2.Q)(P.question),
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
    let G = C.intl.string(F ? C.t.iTcuma : C.t.dcl9MQ),
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
                let l = { ...o, [P.id]: e };
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
            [o, t, M, R, P.id, V, W],
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
        className: i()(l7.$O, { [l7.fI]: J && !et, [l7.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: l7.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: w,
                        className: l7.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(l7.TK, l7.R_, { [l7.TB]: "exit" === q, [l7.JU]: "enter" === q }),
                                children: z,
                            }),
                            B || F
                                ? (0, n.jsx)("div", {
                                      className: l7.Q7,
                                      children: (0, n.jsx)(eF.m, {
                                          text: G,
                                          children: (0, n.jsx)(lX.K, {
                                              icon: F ? lZ.t : lJ.a,
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
                                : (0, n.jsx)(eC.D, {
                                      className: i()(l7.gb, l7.Q7),
                                      onClick: en,
                                      "aria-label": C.intl.string(S.default.fMdUNR),
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
                        className: l7.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: l7.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: E,
                                    className: l7.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                l6,
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
                                            className: l7.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: l7.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(lQ.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tw.y, {
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
                                                    placeholder: C.intl.string(S.default.qifsdL),
                                                    "aria-label": C.intl.formatToPlainString(S.default.XHESTL, {
                                                        question: P.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: l7.Pu,
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
                      className: l7.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: C.intl.formatToPlainString(S.default["7bypa+"], { index: R + 1, total: T }),
                          }),
                          (0, n.jsxs)("div", {
                              className: l7.Np,
                              children: [
                                  (0, n.jsx)(eC.D, {
                                      className: i()(l7.gb, { [l7.yI]: !X }),
                                      onClick: X ? Q : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": M,
                                      "aria-label": C.intl.string(S.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, n.jsx)(l0.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eC.D, {
                                      className: i()(l7.gb, { [l7.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": M,
                                      "aria-label": C.intl.string(S.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(l1.E, {
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
    l9 = l(191521),
    l8 = l(405189);
function ne(e) {
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
    let I = null != r && r.length > 0,
        M = a.useCallback(() => v((e) => !e), []);
    return f
        ? (0, n.jsxs)("div", {
              className: l8.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(l8.vK, { [l8.ho]: g && d, [l8.ET]: !d }),
                      children: [
                          null == u
                              ? (0, n.jsx)("ol", {
                                    className: i()(l8.Rk, te.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(e0.A, {
                                        glyph: (0, n.jsx)(l9.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eC.D, {
                                    className: l8.pZ,
                                    onClick: u,
                                    "aria-label": C.intl.string(S.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(l8.Rk, te.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(e0.A, {
                                            glyph: (0, n.jsx)(l9.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, n.jsx)(eF.m, {
                                    text: C.intl.string(S.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eC.D, {
                                        className: l8.BO,
                                        onClick: M,
                                        "aria-expanded": p,
                                        "aria-label": C.intl.string(S.default.qCRC6c),
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
                            className: i()(l8.vB, { [l8.pg]: p && w, [l8.ui]: !p }),
                            children: (0, n.jsx)(to, { todos: r, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nt = l(366010),
    nl = l(825484),
    nn = l(859703),
    na = l(738822),
    nr = l(291749),
    ni = l(590202),
    ns = l(792620),
    no = l(130490),
    nu = l(617986),
    nd = l(363195),
    nc = l(971276),
    nm = l(710969);
let nf = !1;
function nh() {
    return nf;
}
var ng = l(749414);
function nx(e) {
    let t,
        l,
        r,
        { open: i } = e,
        s =
            ((t = (0, no.dN)()),
            (l = (0, D.bG)([nn.A], () => nn.A.isQuestAccessSuspended || null != nn.A.questEnrollmentBlockedUntil, [])),
            (r = (0, D.bG)([nn.A], () => null != nn.A.getQuestPreviewOverride(na.uF.QUEST_BAR_V2), [])),
            null != t && (0, ns.vv)(t)
                ? (function (e, t) {
                      let { overridden: l, gatesClosed: n } = t;
                      return null != e && (0, nc.s)()
                          ? l
                              ? e.userStatus?.claimedAt != null
                                  ? null
                                  : e
                              : n || (0, nm.Ic)(e) || e.userStatus?.completedAt != null
                                ? null
                                : e
                          : null;
                  })(t, { overridden: r, gatesClosed: l })
                : null),
        [o, u] = a.useState(nh),
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
        [m, h] = a.useState(s);
    null != s && s !== m && h(s);
    let g = s ?? m,
        x = (0, D.bG)([nd.A], () => nd.A.getState().theme),
        p = (0, nt.M)(x) ? P.NJ8.DARK : P.NJ8.LIGHT,
        b = null != g ? (0, nr.tW)(g, nr.fY.GAME_TILE, p).url : null,
        j = null != b && "" !== b ? b : null,
        y = a.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: na.uF.QUEST_BAR_V2,
                sourceQuestContent: na.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: ni.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, nu.d5)({ quest: s, ...e })
                : await (0, nu.e0)(s, { ...e, questContentCTA: ni.Cy.ACCEPT_QUEST });
        }, [s]),
        k = a.useCallback(() => {
            ((nf = !0), u(!0));
        }, []);
    return d && null != g
        ? (0, n.jsxs)("aside", {
              className: ng.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != j
                      ? (0, n.jsxs)("div", {
                            className: ng.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("img", { className: ng.Rx, src: j, alt: "" }),
                                (0, n.jsx)("div", { className: ng._e }),
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: ng.iB,
                      children: [
                          null != j ? (0, n.jsx)("img", { className: ng.w1, src: j, alt: "" }) : null,
                          (0, n.jsxs)("div", {
                              className: ng.Ug,
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: C.intl.string(S.default["09LJ+I"]),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: C.intl.format(C.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsxs)(nl.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, n.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: C.intl.string(S.default.egO5fO),
                          }),
                          (0, n.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: C.intl.string(C.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var np = l(651649),
    nv = l(522250),
    nb = l(670455),
    nj = l(348800);
let ny = [C.intl.string(S.default["E+Q26x"]), C.intl.string(S.default["06/jqP"]), C.intl.string(S.default["3gSfUa"])];
function nk(e) {
    let { projectId: t, restoreState: r } = e,
        i = (0, D.bG)([ey.Ay], () => ey.Ay.getMessages(t), [t]),
        s = (0, D.bG)([c.Ay], () => c.Ay.getConnState(t), [t]),
        o = (0, D.bG)([c.Ay], () => c.Ay.isChatStopped(t), [t]),
        u = (0, D.bG)([ey.Ay], () => ey.Ay.getProjectUsage(t), [t]),
        d = (0, D.bG)([ey.Ay], () => ey.Ay.getThinkingActivity(t), [t]),
        m = (0, D.bG)([ey.Ay], () => ey.Ay.isCompacting(t), [t]),
        h = (0, D.bG)([c.Ay], () => c.Ay.getModelSettings(t), [t]),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(null),
        b = a.useRef(!0),
        [j, y] = a.useState(!0);
    a.useEffect(() => {
        b.current && x.current?.scrollToBottom();
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
            b.current = t < 32;
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
            b.current &&
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
            (0, c.Hc)(t);
        }, [t]),
        a.useEffect(
            () => () => {
                let e;
                (e = (0, nv.hl)(t)) < nv.qu ||
                    (!(0, nv.Xi)(t) &&
                        np.A.possiblyShowFeedbackModal(nb.MW.VIBEGRATIONS, () => {
                            ((0, nv.AH)(t),
                                (0, eK.openModalLazy)(async () => {
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
    let N = (0, ej.Q_)(t),
        A = a.useCallback(
            (e, l) => {
                (0, c.dv)(t, e, l);
            },
            [t],
        ),
        E = a.useCallback(
            (e, l) => {
                0 === N.annotations.length
                    ? A(e, l)
                    : (A((0, ev.Mx)({ annotations: N.annotations, metaComment: e, context: N.context }), l),
                      (0, ej.PS)(t));
            },
            [N, A, t],
        ),
        I = a.useCallback(() => (0, c.fu)(t), [t]),
        M = a.useCallback((e) => A(e.implementation_prompt), [A]),
        T = a.useCallback((e) => A(e), [A]),
        R = a.useCallback((e) => (0, c.XZ)(t, e), [t]),
        P = a.useCallback((e) => (0, c.vX)(t, e), [t]),
        _ = a.useCallback((e) => (0, c.Vm)(t, e), [t]),
        L = a.useCallback(() => A(C.intl.string(S.default.Jj8Ftb)), [A]),
        F = r?.status === "restoring",
        $ = "open" === s && !o && !F,
        O = i[i.length - 1],
        z = null != O && "assistant" === O.role && null != O.proposal,
        [q, U] = a.useState(null),
        B = O?.clarification != null && O.clarification.id !== q ? O.clarification : null,
        G = a.useCallback(() => {
            null != B && U(B.id);
        }, [B]),
        V = (0, D.bG)([ey.Ay], () => ey.Ay.hasLoadedHistory(t), [t]),
        W = a.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return ny[e % ny.length];
        }, [t]),
        H = z
            ? C.intl.string(S.default.Jj8Ftb)
            : O?.kind === "plan_implemented"
              ? C.intl.string(S.default["3sTTBu"])
              : V && 0 === i.length
                ? W
                : null,
        K = a.useMemo(() => {
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                if ("assistant" === t.role && !(0, ey.BL)(t)) return t;
            }
        }, [i]),
        Y = null != K,
        Q = z && $ ? L : void 0,
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
    let et = a.useMemo(() => (null != K ? (0, ek.b)(K.steps) : ""), [K]),
        el = a.useMemo(() => (null != K ? ((0, eb.lt)(K.steps) ?? K.todos) : void 0), [K]),
        en = K?.provisionalTodo,
        ea = a.useMemo(() => {
            var e;
            return null != K ? ((e = K.steps), tc((0, eb.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [K]);
    return (0, n.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nj.TE,
        children: [
            (0, n.jsx)(nx, { open: null != K }),
            (0, n.jsx)(ne, {
                onJumpToActivity: k,
                line: et,
                placement: Y && "top" === X ? "top" : null,
                todos: el,
                provisionalTodo: en,
                agents: ea,
            }),
            (0, n.jsxs)("div", {
                className: nj.JX,
                children: [
                    (0, n.jsx)(ep.Ch, {
                        ref: x,
                        onScroll: w,
                        className: j ? nj.N$ : `${nj.N$} ${nj.hB}`,
                        children: (0, n.jsx)(lT, { ref: p, projectId: t, messages: i, onPickIdea: $ ? M : void 0 }),
                    }),
                    (0, n.jsx)("div", {
                        className: nj.NJ,
                        children: (0, n.jsx)(lY, {
                            projectId: t,
                            thinking: Y,
                            restoring: F,
                            thinkingActivity: d,
                            compacting: m,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == B
                        ? null
                        : (0, n.jsx)("div", {
                              className: nj.B5,
                              children: (0, n.jsx)(
                                  l5,
                                  { clarification: B, onSubmit: $ ? T : void 0, onDismiss: G },
                                  B.id,
                              ),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nj.Jx,
                children: [
                    (0, n.jsx)(ne, {
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
                              className: nj.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: C.intl.formatToPlainString(S.default.Lkx0Kk, {
                                          count: N.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: C.intl.string(S.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: C.intl.string(S.default.B0YARo),
                                      onClick: () => (0, ej.PS)(t),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(tQ, {
                        projectId: t,
                        canSend: $,
                        stopped: o,
                        running: Y,
                        restoring: F,
                        onSend: E,
                        hasPendingContext: N.annotations.length > 0,
                        onInterrupt: $ ? I : void 0,
                        onUploadFile: P,
                        onDeleteFile: _,
                        onApprove: Q,
                        suggestion: H,
                        questionOpen: null != B,
                        modelSettings: h,
                        onModelSettingsChange: R,
                    }),
                ],
            }),
        ],
    });
}
var nw = l(661531),
    nN = l(602853),
    nA = l(517461),
    nE = l(761929),
    nS = l(927506);
function nC(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, nN.r)(nw.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nA.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = a.useState(u ?? 460),
        f = (0, tS.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? f + s : 0);
    }, [f, t, s, r]);
    let h = (0, nE.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nE.R.HORIZONTAL_LEFT,
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
        className: nS.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: nS.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: o, className: nS.kL, style: { width: f }, children: i }),
        ],
    });
}
var nI = l(691540),
    nM = l(857250),
    nT = l(97483),
    nR = l(624479),
    nP = l(92446),
    n_ = l(761508),
    nL = l(540999),
    nF = l(957565);
let nD = [],
    n$ = new Map(),
    nO = new Map(),
    nz = new Map(),
    nq = new Map(),
    nU = new Map(),
    nB = new Map(),
    nG = new Map();
class nV extends D.Ay.Store {
    getStatus(e) {
        return n$.get(e) ?? null;
    }
    getFetchState(e) {
        return nO.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nq.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return nB.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return nU.get(e) ?? null;
    }
    getModelCalls(e) {
        return nG.get(e) ?? nD;
    }
    getForceCompactionState(e) {
        return nz.get(e) ?? "idle";
    }
}
let nW = new nV(tM.h, {
    LOGOUT: function () {
        if (
            0 === n$.size &&
            0 === nO.size &&
            0 === nz.size &&
            0 === nq.size &&
            0 === nU.size &&
            0 === nB.size &&
            0 === nG.size
        )
            return !1;
        (n$.clear(), nO.clear(), nz.clear(), nq.clear(), nU.clear(), nB.clear(), nG.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nO.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === nz.get(t);
        n &&
            nz.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === nO.get(t);
        if ((a && nO.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nO.set(t, "failed") : (n$.set(t, l), nO.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nq.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        nU.set(e.projectId, {
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
        nz.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        nz.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = nG.get(e.projectId);
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
        nG.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, tO.aM)(l.total)) return !1;
        nB.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (n$.delete(t), nO.delete(t), nz.delete(t), nq.delete(t), nU.delete(t), nB.delete(t), nG.delete(t));
    },
});
var nH = l(972786);
function nK(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function nY(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function nQ(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function nX(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function nZ(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function nJ(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function n0(e) {
    return C.intl.string("preview" === e ? S.default["+m8XM6"] : S.default.kiOVnt);
}
let n1 = ["all", "preview", "stable", "web"],
    n2 = new Set(["error", "aborted", "length"]);
function n7(e) {
    switch (e.reason) {
        case "local":
            return C.intl.string(S.default.M7Vn6y);
        case "unconfigured":
            return C.intl.string(S.default.QirpMl);
        case "unauthorized":
            return C.intl.string(S.default.QZ1e4l);
        default:
            return null != e.detail
                ? C.intl.formatToPlainString(S.default.zUTHf7, { detail: e.detail })
                : C.intl.string(S.default.WIAQes);
    }
}
function n6(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(S.default.SBkDIZ, {
              p50: nK(e.memory_p50_bytes ?? 0),
              p999: nK(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let n4 = {
    db: () => S.default.r6cciE,
    db_preview: () => S.default.JmIyL8,
    runtime: () => S.default.bzNyv8,
    runtime_preview: () => S.default["LONZ/8"],
    bot: () => S.default.jdpw3A,
    bot_preview: () => S.default["/g6wUz"],
};
var n5 = l(69985);
function n3(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: n5.KE,
        children: [
            (0, n.jsx)("div", {
                className: n5.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: C.intl.string(S.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: C.intl.formatToPlainString(S.default["4NpaEk"], { time: nZ(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(f.$, { variant: "secondary", size: "sm", text: C.intl.string(S.default.aw0IJm), onClick: a }),
        ],
    });
}
function n9(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: n5.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: n5.Gf, children: t }),
            l,
        ],
    });
}
function n8(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: n5.N8,
        children: [
            (0, n.jsxs)("div", {
                className: n5.x7,
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
function ae(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: n5.N8,
        children: [
            (0, n.jsxs)("div", {
                className: n5.x7,
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
                className: n5.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? n5.aV : n5.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function at(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(n8, {
            label: C.intl.string(S.default.H6PMwW),
            value: C.intl.string(S.default.TLOZ8J),
            hint: n7(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(n8, {
            label: C.intl.string(S.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(S.default.uAzxdh),
        });
    let a = n6(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(n8, { label: C.intl.string(S.default.awAqRi), value: nY(l.cpu_ms) }),
            null != a && (0, n.jsx)(n8, { label: C.intl.string(S.default.WdGviA), value: a }),
        ],
    });
}
function al(e) {
    let { analytics: t } = e,
        l = C.intl.string(S.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(n9, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: n7(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? n4[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(n9, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: C.intl.string(S.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          n8,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(S.default.AnRynJ, { cpu: nY(t.cpu_ms) }),
                              hint: n6(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var an = l(522652);
let aa = [];
function ar(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && n2.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? nY(l.durationMs) : null,
                    `${nQ(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${nQ(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: an.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: an.Q5,
                children: nX(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: an.qN,
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
function ai(e, t) {
    return (0, n.jsx)(n8, {
        label: e,
        value: C.intl.formatToPlainString(S.default.U98VaN, { count: nQ((0, tO.aM)(t)) }),
        hint: `${nQ(t.input_tokens)} in \xb7 ${nQ(t.output_tokens)} out \xb7 ${nQ(t.cache_read_input_tokens)} cache read`,
    });
}
function as(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, D.bG)([nW], () => nW.getLastTurnUsage(t), [t]),
        u = (0, D.bG)([nW], () => nW.getLastCompaction(t), [t]),
        d = (0, D.bG)([nW], () => nW.getLastCompactionDecline(t), [t]),
        m = (0, D.bG)([nW], () => nW.getForceCompactionState(t), [t]),
        h = a.useCallback(() => (0, c.Lj)(t), [t]),
        g = a.useCallback(() => (0, c.Lj)(t, !0), [t]),
        x = (0, D.bG)([nW], () => (s ? aa : nW.getModelCalls(t)), [t, s]),
        p = l?.agent?.lifetime ?? null,
        b = l?.agent?.limits ?? null,
        j = l?.agent?.session ?? null,
        y = u?.promptCeiling ?? b?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: an.Mf,
        children: [
            (0, n.jsx)(n3, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(n9, {
                title: C.intl.string(S.default.IYpHtT),
                children:
                    null == p
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(n8, {
                                      label: C.intl.string(S.default["8MSJDH"]),
                                      value: nQ((0, tO.a7)(p.cost_usd)),
                                      hint: C.intl.formatToPlainString(S.default["6Z2KhK"], { count: nQ(p.turns) }),
                                  }),
                                  ai(C.intl.string(S.default.hk4jJr), p.orchestrator),
                                  ai(C.intl.string(S.default.R9aduM), p.codegen),
                                  ai(C.intl.string(S.default.Tj6b30), (0, tO.wU)(p.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(n8, {
                                          label: C.intl.string(S.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${nQ(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(n9, {
                title: C.intl.string(S.default.lo4mY6),
                children:
                    null == o
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  ai(C.intl.string(S.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(n8, {
                                      label: C.intl.string(S.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, tO.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(n9, {
                title: C.intl.string(S.default.mn8279),
                children: [
                    null != u && null != y
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ae, {
                                      label: C.intl.string(S.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: nQ,
                                  }),
                                  (0, n.jsx)(n8, {
                                      label: C.intl.string(S.default.ntZb8d),
                                      value: `${nQ(u.tokensBefore)} \u{2192} ${nQ(u.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(S.default.jA05ru, {
                                          count: nQ(u.retainedMessages),
                                          time: nZ(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? C.intl.formatToPlainString(S.default.LKGmsP, { ceiling: nQ(y) })
                                      : C.intl.string(S.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(n8, {
                            label: C.intl.string(S.default["se+2ls"]),
                            value: `${nQ(d.projected)} / ${nQ(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(S.default.KHK44U, { time: nZ(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: an.Lj,
                        children: [
                            (0, n.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(S.default.B0KV7p),
                                disabled: "pending" === m,
                                onClick: h,
                            }),
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof m && "compacted" !== m.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return C.intl.string(S.default.wBng42);
                                    if ("pending" === e) return C.intl.string(S.default["0tgo31"]);
                                    let t = nZ(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return C.intl.formatToPlainString(S.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? S.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? S.default.GV4sdd
                                              : S.default["Y+0nUb"];
                                    return C.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(m),
                            }),
                            "object" == typeof m &&
                                !0 === m.pendingTurn &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: C.intl.string(S.default["044+ju"]),
                                            onClick: g,
                                        }),
                                        (0, n.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: C.intl.string(S.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(n9, {
                    title: C.intl.string(S.default.F5eP7e),
                    children:
                        0 === x.length
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: C.intl.string(S.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      x
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(ar, { call: e }, e.id)),
                                      x.length > 30 &&
                                          (0, n.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: C.intl.formatToPlainString(S.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: x.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != j || l?.analytics != null) &&
                (0, n.jsxs)(n9, {
                    title: C.intl.string(S.default.ZRxAPD),
                    children: [
                        null != j &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(n8, {
                                        label: C.intl.string(S.default["wt5X/o"]),
                                        value: nZ(j.instance_since),
                                        hint: C.intl.string(S.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(n8, { label: C.intl.string(S.default["4lgurx"]), value: nQ(j.sockets) }),
                                    (0, n.jsx)(n8, {
                                        label: C.intl.string(S.default["a/LXBt"]),
                                        value: j.turn_inflight
                                            ? C.intl.string(S.default["9KlveJ"])
                                            : C.intl.string(S.default["4tYZVa"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, n.jsx)(n8, {
                                            label: C.intl.string(S.default["/hOBkc"]),
                                            value: nQ(j.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(at, { analytics: l.analytics }),
                    ],
                }),
            null != b &&
                (0, n.jsxs)(n9, {
                    title: C.intl.string(S.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(n8, { label: C.intl.string(S.default["5iHZLk"]), value: nQ(b.max_iterations) }),
                        (0, n.jsx)(n8, {
                            label: C.intl.string(S.default.Rb6m3E),
                            value: nQ(b.max_subagent_iterations),
                        }),
                        (0, n.jsx)(n8, {
                            label: C.intl.string(S.default.WQ9pMe),
                            value: C.intl.formatToPlainString(S.default.U98VaN, { count: nQ(b.context_window_tokens) }),
                        }),
                        (0, n.jsx)(n8, {
                            label: C.intl.string(S.default.iEAvzu),
                            value: C.intl.formatToPlainString(S.default.U98VaN, {
                                count: nQ(b.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(n8, {
                            label: C.intl.string(S.default["jbhs+f"]),
                            value: nQ(b.max_user_message_chars),
                        }),
                        (0, n.jsx)(n8, { label: C.intl.string(S.default.TOQnq4), value: nQ(b.max_build_attempts) }),
                        (0, n.jsx)(n8, { label: C.intl.string(S.default.RIDc6D), value: nQ(b.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var ao = l(320448),
    au = l(629584),
    ad = l(683438),
    ac = l(849363);
function am(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: ac.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(S.default.TV42NS),
              }),
          });
}
function af(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: ac.qf,
              children: [
                  (0, n.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: C.intl.string(S.default.TV42NS),
                  }),
                  (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: C.intl.string(S.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: ac.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function ah(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: ac.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(S.default["U/qDX9"]),
              }),
          })
        : null;
}
var ag = l(417397);
let ax = a.memo(function (e) {
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
        className: ag.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ag.Mt,
                selectable: !0,
                children: nX(l.ts),
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
                className: ag.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: ag.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: ag.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: ag.Cq,
                            title: l.build ?? void 0,
                            children: C.intl.string(S.default.GO6JcR),
                        }),
                    null != u
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, n.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, n.jsxs)(eC.D, {
                                      className: ag.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": o,
                                      "aria-label": C.intl.string(S.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(lJ.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(ao._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, n.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  C.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? S.default.lXkB6Z : S.default.wkbYxG,
                                                      { count: u.size },
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
                                          className: ag.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
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
function ap(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([nH.Ay], () => nH.Ay.getLogs(t), [t]),
        r = (0, D.bG)([nH.Ay], () => nH.Ay.getHistoryState(t, "logs")),
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
                n1.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return n0(e);
                            case "web":
                                return C.intl.string(S.default.J2TPCe);
                            default:
                                return C.intl.string(S.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: ag.$F,
        children: [
            (0, n.jsxs)("div", {
                className: ag.y4,
                children: [
                    (0, n.jsx)(au.I, {
                        look: "pill",
                        "aria-label": C.intl.string(S.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: ag.KT,
                        children: (0, n.jsx)(ad.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: C.intl.string(S.default["MX4vr/"]),
                            "aria-label": C.intl.string(S.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(am, { state: r }),
            (0, n.jsxs)(ep.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: ag.sx,
                children: [
                    (0, n.jsx)(ah, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(af, {
                              state: r,
                              emptyTitle: C.intl.string(S.default.mcFyYc),
                              emptyBody: C.intl.string(S.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(S.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(ax, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function av(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(n9, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: C.intl.string(S.default.W4hcKL),
                      }),
        })
    );
}
function ab(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(n8, {
                      label: C.intl.formatToPlainString(S.default.f8ix3w, { env: n0(l) }),
                      value: ((t = a.connected), C.intl.string(t ? S.default["9KlveJ"] : S.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(n8, {
                      label: C.intl.string(S.default["0AB7l3"]),
                      value: nQ(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${nZ(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(n8, { label: C.intl.string(S.default.ElaQ0A), value: nQ(a.guild_count) }),
                  (0, n.jsx)(n8, {
                      label: C.intl.string(S.default.SJtBTN),
                      value: nQ(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(S.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: nZ(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(n8, {
                          label: C.intl.string(S.default.N4l504),
                          value: nQ(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(n8, { label: n0(l), value: C.intl.string(S.default.C6xjtD) });
}
function aj(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(n8, {
        label: n0(t),
        value: C.intl.formatToPlainString(S.default.Yur5Zm, { requests: nQ(l.requests), failures: nQ(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(S.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: nZ(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(S.default["1PdrB1"], { time: nZ(l.since) }),
    });
}
function ay(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(n8, {
                label: C.intl.formatToPlainString(S.default.BVORfc, { env: n0(t) }),
                value: nQ(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    n8,
                    {
                        label: C.intl.formatToPlainString(S.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? C.intl.formatToPlainString(S.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? C.intl.formatToPlainString(S.default["7ecbr3"], { time: nZ(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ak(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(n8, {
        label: n0(t),
        value: C.intl.formatToPlainString(S.default.voXL2a, { calls: nQ(l.calls), errors: nQ(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function aw(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(n9, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(S.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(n9, {
        title: t,
        children: [
            (0, n.jsx)(n8, {
                label: C.intl.string(S.default.KOnL3g),
                value: nQ(l.requests),
                hint: C.intl.formatToPlainString(S.default["1PdrB1"], { time: nZ(l.since) }),
            }),
            (0, n.jsx)(n8, { label: C.intl.string(S.default.CjPhyY), value: nQ(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(ae, {
                              label: C.intl.string(S.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: nY,
                          }),
                          (0, n.jsx)(n8, {
                              label: C.intl.string(S.default["+rYPHD"]),
                              value: nY(r),
                              hint: C.intl.formatToPlainString(S.default["+LxC7W"], {
                                  total: nY(l.cpu_ms_total),
                                  wall: nY(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(n8, {
                      label: C.intl.string(S.default["V/nNbs"]),
                      value: C.intl.string(S.default.YKWIxp),
                      hint: C.intl.string(S.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(n8, { label: C.intl.string(S.default.ueEMPa), value: nY(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(n8, { label: C.intl.string(S.default.vM2krr), value: nQ(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(n8, {
                label: C.intl.string(S.default.g1O88C),
                value: nQ(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(S.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(n8, { label: C.intl.string(S.default.JUZs7g), value: nJ(l.build) }),
        ],
    });
}
function aN(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: C.intl.string(S.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(S.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(S.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(n9, {
        title: C.intl.string(S.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(n8, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(n8, {
                                  label: C.intl.formatToPlainString(S.default["9TpIQg"], { env: l }),
                                  value: nK(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? S.default.o45MMA : S.default.S7o3vV,
                                      { count: nQ(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(ae, {
                                      label: C.intl.formatToPlainString(S.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: nK,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aA(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: an.Mf,
        children: [
            (0, n.jsx)(n3, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(aw, {
                            title: C.intl.string(S.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aw, {
                            title: C.intl.string(S.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aN, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(av, {
                                title: C.intl.string(S.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ab, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(av, {
                                title: C.intl.string(S.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aj, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(av, {
                                title: C.intl.string(S.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ay, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(av, {
                                title: C.intl.string(S.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ak, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(al, { analytics: t.analytics }),
                        (0, n.jsxs)(n9, {
                            title: C.intl.string(S.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(n8, {
                                    label: C.intl.string(S.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? nJ(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(n8, {
                                    label: C.intl.string(S.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? nJ(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function aE(e, t) {
    return String(e).padStart(t, "0");
}
function aS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aE(n.getHours(), 2)}:${aE(n.getMinutes(), 2)}:${aE(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aE(n.getMilliseconds(), 3)}` : a;
}
var aC = l(977129);
let aI = new Map(),
    aM = new Map(),
    aT = 0,
    aR = 0;
async function aP(e, t, l) {
    let n = aT,
        a = aI.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aR) return { status: "forbidden" };
    let r = aM.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aC.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((aR = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aT) return { status: "failed" };
            var l = o.rich;
            for (aI.set(t, l); aI.size > 100;) {
                let e = aI.keys().next();
                if (!0 === e.done) break;
                aI.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    aM.set(t, i);
    let s = await i;
    return (aM.get(t) === i && aM.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function a_() {
    ((aT += 1), aI.clear(), aM.clear(), (aR = 0));
}
function aL(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aF(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function aD(e) {
    switch (e) {
        case "subagent":
            return C.intl.string(S.default["EoY7D+"]);
        case "context":
            return C.intl.string(S.default.KVFrD3);
        case "tool":
            return C.intl.string(S.default["/N6ZU9"]);
        case "delegated":
            return C.intl.string(S.default.HcEbf2);
        default:
            return C.intl.string(S.default.AhOqQs);
    }
}
function a$(e) {
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
let aO = ["model", "tool", "subagent", "delegated", "context"];
function az(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(a$(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function aq(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aU = ["arguments", "result", "usage", "diagnostics"];
var aB = l(40715);
let aG = { started: aB.Vf, ok: aB.mo, error: aB.Sr };
function aV(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${aB.Om} ${aG[t] ?? aB.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return C.intl.string(S.default.HpKDyl);
                case "error":
                    return C.intl.string(S.default["5T4Dd0"]);
                default:
                    return C.intl.string(S.default.VbEmf0);
            }
        })(t),
    });
}
let aW = { model: aB.WI, subagent: aB.uM, context: aB.eH, tool: aB.pw, delegated: aB.C8 };
function aH(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: aB.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: aB.D6, children: t }),
            (0, n.jsx)("div", { className: aB.zL, children: l }),
        ],
    });
}
function aK(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(aH, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function aY(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: aB.WA, children: t });
}
function aQ(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: aB.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: aB.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function aX(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: aB.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: aB.p8,
                children: [
                    (0, n.jsx)(ao._, { className: aB.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: aB.bG, children: l }),
        ],
    });
}
function aZ(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(aH, {
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
            ? C.intl.formatToPlainString(S.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? C.intl.formatToPlainString(S.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(aH, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: aB.Kv,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return C.intl.string(S.default.xO6bcQ);
                            case "content":
                                return C.intl.string(S.default.gpBZRr);
                            default:
                                return C.intl.string(S.default.OZvPXt);
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
function aJ(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: aB.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: aB.uh,
                          children: C.intl.string(S.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          aH,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: aB.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: aB.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: C.intl.string(S.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? C.intl.string(S.default["1kBG9Z"])
                                                        : C.intl.formatToPlainString(S.default.VGSwo4, {
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
function a0(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : C.intl.string(
                      "loading" === t.status
                          ? S.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? S.default.jEQTot
                            : S.default.fj5wM8,
                  );
    return null == l
        ? null
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: aB.E7, children: l });
}
function a1(e) {
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
                aU.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aI.get(t)) return;
                    let l = new AbortController();
                    return (
                        aP(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aI.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = aS(l.startedAt, "millis"),
        f = a$(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ep.Ch, {
        className: aB._0,
        onKeyDown: h,
        role: "region",
        "aria-label": C.intl.formatToPlainString(S.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: aB.sy,
                children: (0, n.jsxs)("div", {
                    className: aB.HI,
                    children: [
                        (0, n.jsx)(aV, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${aB.PY} ${aW[f]}`,
                            children: aD(f),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: aB.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: aB.l5,
                            children: null == l.durationMs ? C.intl.string(S.default.HpKDyl) : aL(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aB.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(aQ, {
                      title: C.intl.string(S.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(aZ, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(aJ, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(a0, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(aQ, {
                      title: C.intl.string(S.default.KXrf5F),
                      children: [
                          (0, n.jsx)(aK, {
                              label: C.intl.string(S.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(S.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(aK, {
                                    label: C.intl.string(S.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(aH, {
                                    label: C.intl.string(S.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: C.intl.string(S.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(aJ, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(aQ, {
                      title: C.intl.string(S.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(aY, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(aK, {
                                            label: C.intl.string(S.default.Ran4BY),
                                            value: C.intl.formatToPlainString(S.default["PYO+Jv"], {
                                                tokens: aF(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(aK, {
                                            label: C.intl.string(S.default.vPIcyv),
                                            value: C.intl.formatToPlainString(S.default.Qy2iTq, {
                                                system: aF(l.systemTokens),
                                                tools: aF(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: aF(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(aK, {
                                            label: C.intl.string(S.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(aK, {
                                            label: C.intl.string(S.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(aK, {
                                            label: C.intl.string(S.default.VyAl6j),
                                            value: C.intl.formatToPlainString(S.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(aK, {
                                            label: C.intl.string(S.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: aB.E7,
                              children: C.intl.string(S.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: aB.E7,
                      children: C.intl.string(S.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(aX, {
                      title: C.intl.string(S.default.T7SFyZ),
                      children: (0, n.jsxs)(aY, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(aH, {
                                        label: C.intl.string(S.default.NnBqcd),
                                        value: (0, n.jsx)(eC.D, {
                                            tag: "div",
                                            className: aB.mi,
                                            onClick: () => s(i.id),
                                            children: (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === i.kind ? i.model : i.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, n.jsx)(aK, {
                                        label: C.intl.string(S.default.fI6mzD),
                                        value: C.intl.formatToPlainString(S.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(aK, { label: C.intl.string(S.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(aK, { label: C.intl.string(S.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, n.jsx)(aK, { label: C.intl.string(S.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(aK, { label: C.intl.string(S.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: aB.Hm,
                                                children: C.intl.string(S.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    aK,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? C.intl.formatToPlainString(S.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : C.intl.formatToPlainString(S.default["/L6GFe"], {
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
                className: aB.E7,
                children: C.intl.string(S.default.khAjR0),
            }),
        ],
    });
}
let a2 = { model: aB.WI, subagent: aB.uM, context: aB.eH, tool: aB.pw, delegated: aB.C8 };
function a7(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = a$(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return aO.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: aB.M0,
        children: [
            (0, n.jsx)("div", {
                className: aB.pZ,
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
                                            className: `${aB.dL} ${a2[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: aB.z4,
                role: "group",
                "aria-label": C.intl.string(S.default.UZ1OlR),
                children: aO.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: aB.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${aB.A9} ${a2[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: aD(e) }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: C.intl.formatToPlainString(S.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: C.intl.formatToPlainString(S.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: aL(a),
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
let a6 = { model: aB.WI, subagent: aB.uM, context: aB.eH, tool: aB.pw, delegated: aB.C8 };
function a4(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = a$(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(S.default["PYO+Jv"], { tokens: aF(t.promptTokens) })
                : null != t.durationMs
                  ? aL(t.durationMs)
                  : null;
    return (0, n.jsxs)(eC.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${aB.nM} ${s ? aB.A5 : ""} ${"error" === t.status ? aB.Cr : ""} ${l ? aB.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: aB.sU,
                children: [
                    (0, n.jsx)(aV, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${aB.PY} ${a6[o]}`,
                        children: aD(o),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: aB.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: aB.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aB.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aB.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function a5(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([nH.Ay], () => nH.Ay.getTrace(l), [l]),
        s = (0, D.bG)([nH.Ay], () => nH.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => a_, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [m, f] = a.useState(!1),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(null),
        b = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, tS.clamp)((e / t) * 100, 25, 75);
        }, []),
        w = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, tS.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, nE.A)({
            resizableDomNodeRef: g,
            orientation: nE.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, tS.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        M = a.useMemo(() => az(i, r), [i, r]),
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
                    .map((e, t) => ({ ...e, index: t, entries: az(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = aq(M, o),
        P = R?.kind === "tool" ? aq(i, R.parentId ?? null) : null,
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
              className: aB.uP,
              ref: h,
              children: (0, n.jsx)(af, {
                  state: s,
                  emptyTitle: C.intl.string(S.default.Iyt8OJ),
                  emptyBody: C.intl.string(S.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${aB.uP} ${m ? aB.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: aB.DK,
                      children: [
                          (0, n.jsx)(a7, { entries: i }),
                          (0, n.jsx)(am, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: aB.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(S.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ep.Ch, {
                                    ref: x,
                                    className: aB.Ns,
                                    children: [
                                        (0, n.jsx)(ah, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(S.default["QATZ+A"]),
                                            className: aB.p_,
                                            children: T.map((e) => {
                                                let t = aS(e.startedAt),
                                                    l = C.intl.formatToPlainString(S.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: aB.mf,
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
                                                                              children: aL(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: aB.M5,
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
                                    "aria-label": C.intl.string(S.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: aB.b1,
                                    onPointerDown: A,
                                    onKeyDown: E,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: aB.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(a1, {
                                        projectId: l,
                                        entry: R,
                                        parent: P,
                                        childCount: _,
                                        onSelect: u,
                                        onClose: I,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var a3 = l(365199),
    a9 = l(402879);
function a8(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([nH.Ay], () => nH.Ay.getTrace(t), [t]),
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
            (0, a9.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: aB.ED,
                children: (0, n.jsx)(ad.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: C.intl.string(S.default.NfncNw),
                    "aria-label": C.intl.string(S.default.NfncNw),
                }),
            }),
            (0, n.jsx)(tv.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tv.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tb.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(tj.rX, {
                            children: (0, n.jsx)(tj.Dr, {
                                id: "export",
                                label: C.intl.string(S.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(lX.K, {
                        ...e,
                        buttonRef: s,
                        icon: a3.MoreHorizontalIcon,
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
var re = l(497243);
function rt(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [o, d] = a.useState(""),
        m = (0, D.bG)([nL.A], () => nL.A.isDeveloper),
        f = (0, D.bG)([nW], () => nW.getStatus(t), [t]),
        h = (0, D.bG)([nW], () => nW.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, c.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, c.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, nF.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: nW.getStatus(t),
                        last_turn_usage: nW.getLastTurnUsage(t),
                        last_compaction: nW.getLastCompaction(t),
                        last_compaction_decline: nW.getLastCompactionDecline(t),
                        model_calls: nW.getModelCalls(t),
                        logs: nH.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nI.P0)((0, nM.o)(C.intl.string(S.default.sDSDiO), nT.Ck.SUCCESS)),
            );
        }, [t]),
        p = C.intl.string(S.default.KampIf);
    return (0, n.jsxs)("section", {
        className: re.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(u.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.Ay.Icon, {
                            icon: nR.CopyIcon,
                            tooltip: C.intl.string(S.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(u.Ay.ChannelIcon, { icon: nP.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(u.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: re.rf,
                children: [
                    (0, n.jsxs)(n_.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(S.default.uNyR86),
                        className: re.vR,
                        children: [
                            (0, n.jsx)(n_.V.Item, { id: "logs", children: C.intl.string(S.default["1mpzdJ"]) }),
                            (0, n.jsx)(n_.V.Item, { id: "worker", children: C.intl.string(S.default.whGHLD) }),
                            (0, n.jsx)(n_.V.Item, { id: "agent", children: C.intl.string(S.default.cK3AvL) }),
                            m
                                ? (0, n.jsx)(n_.V.Item, { id: "trace", children: C.intl.string(S.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(ap, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aA, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === r && m
                            ? (0, n.jsxs)("div", {
                                  className: re.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: re.XH,
                                          children: (0, n.jsx)(a8, { projectId: t, query: o, onQueryChange: d }),
                                      }),
                                      (0, n.jsx)(a5, { projectId: t, query: o }),
                                  ],
                              })
                            : (0, n.jsx)(as, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: m }),
                ],
            }),
        ],
    });
}
var rl = l(333007),
    rn = l(621466),
    ra = l(103557),
    rr = l(97808),
    ri = l(778712),
    rs = l(365912),
    ro = l(775121),
    ru = l(486020),
    rd = l(277437);
function rc(e) {
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
        { drafts: g, addFiles: x, removeDraft: p, settled: v, takeRefs: b } = tG({ onUploadFile: f, onDeleteFile: h }),
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
        [E, I] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = A.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = E?.height ?? 44,
        T = l.left + 8,
        R = l.top + 8,
        P = Math.max(t.x, T),
        _ = Math.min(Math.max(t.y + 32 + 4, R), Math.max(R, l.top + l.height - M - 8));
    return (0, n.jsxs)("div", {
        ref: A,
        className: i()(rd.M0, { [rd.ho]: w && !m, [rd.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: rd.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(eF.m, {
                position: "bottom",
                text: C.intl.string(S.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: rd.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": C.intl.string(S.default.d6Rqlu),
                    children: (0, n.jsx)(tp.H, { size: "custom", color: "currentColor", className: rd.WW }),
                }),
            }),
            (0, n.jsx)(tw.y, {
                autoFocus: !0,
                rows: 1,
                className: rd.hF,
                value: s,
                placeholder: "" === r ? C.intl.string(S.default.FK09JH) : `Edit ${r}`,
                "aria-label": C.intl.string(S.default["qR+sGX"]),
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
                      className: rd.ZO,
                      children: g.map((e) => (0, n.jsx)(tV, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rm = l(320510);
function rf(e) {
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
function rh(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rf(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var rg = l(940107),
    rx = l(42843);
let rp = { x: 25, y: 21 };
function rv(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rb(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rj(e, t, l, n) {
    let a = rb(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function ry(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rk(e) {
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
function rw(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        o = null != l && l === r ? t : null,
        { active: u, annotations: d } = (0, ej.Q_)(o),
        m = (0, l_.o4)(o),
        h = (0, eK.useHasAnyModalOpen)(),
        g = (0, D.bG)([ea.default], () => ea.default.getCurrentUser()),
        x = g?.id ?? null,
        [p, b] = a.useState(null),
        [j, y] = a.useState(null),
        [k, w] = a.useState(!1),
        [N, A] = a.useState(!1),
        [E, I] = a.useState(null),
        [M, T] = a.useState(!1),
        R = a.useRef(null),
        P = a.useRef(null),
        _ = a.useRef(null),
        [L, F] = a.useState(null),
        [$, O] = a.useState(!1),
        [z, q] = a.useState(null),
        [U, B] = a.useState(null),
        G = a.useRef(!1),
        [V, W] = a.useState(!1),
        [H, K] = a.useState(null),
        Y = u && !m && !h;
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
            b((t) => (rv(t, e) ? t : e));
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
                (0, rm.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let l = "completed" === t.status ? rk(t.response) : null;
                        null == l ? A(!0) : (y(l), (0, ej._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
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
        if (rv(Q.current, p)) return;
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
                    (0, rm.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !ee.current) return;
                        let l = rk(e.response);
                        null != l && (y(l), (0, ej._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rf(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, ej.fA)(o, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Y, p, j, d, o, i]),
        a.useEffect(() => {
            if (!Y)
                return () => {
                    (I(null), q(null), K(null), y(null));
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
                    (0, rg.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rh, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((J.current = !1), ee.current)) {
                                if ("picked" !== t.status || rI(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? I(null)
                                        : "unsupported" === t.status && O(!0);
                                else {
                                    let e = (0, ev.ts)(t.target);
                                    (F((t) => (rC(t, e) ? t : e)),
                                        I((e) => {
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
            let e = setTimeout(() => B(null), rE);
            return () => clearTimeout(e);
        }, [U]));
    let en = null == j || null == p || j.viewport.width < 1 ? 1 : p.width / j.viewport.width,
        er = null != j || N,
        ei = a.useMemo(() => j?.elements ?? [], [j]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: p, scale: en };
    }, [p, en]);
    let eo = a.useCallback((e, t, l) => {
            (K(null), (G.current = !1), q({ target: e, anchor: t, draft: "", at: l, label: (0, ev.ts)(e) }));
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
                    (Math.abs(e.clientX - z.at.x) > rS || Math.abs(e.clientY - z.at.y) > rS) && (G.current = !0);
                    return;
                }
                if (!er) return void I(null);
                let t = eu(e, p);
                if ($) {
                    let e = (0, ev.jo)(ei, t.x, t.y),
                        l = null != e && rI(e, p, en) ? null : e;
                    if (null != l) {
                        let e = (0, ev.ts)(l);
                        F((t) => (rC(t, e) ? t : e));
                    }
                    I((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Z.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Z.current = l), (X.current = l), et());
            },
            [p, en, er, eu, $, ei, z, H, ed, et],
        ),
        em = a.useCallback(() => {
            (T(!1), I(null), (Z.current = null), (X.current = null));
        }, []);
    a.useEffect(() => {
        if (!Y || !M || !er || $ || null != z || null != H) return;
        let e = _.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Z.current = n), (X.current = n), et());
    }, [Y, M, er, $, z, H, et]);
    let ef = a.useCallback(
            (e) => {
                if (null != z || null != H) {
                    (el(), K(null));
                    return;
                }
                if (null == E || null == p) return;
                let t = eu(e, p);
                eo(E, (0, ev.ec)(E, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [E, p, eu, z, H, eo, el],
        ),
        eh = a.useCallback(() => {
            null != o && (I(null), (0, ej.PS)(o));
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
    let eb = a.useRef(null);
    a.useEffect(() => {
        if (Y)
            return (
                ro.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        ro.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, rn.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rs.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ep.current();
        }
    }, [Y, s]);
    let ey = a.useCallback(
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
                    I(ei[(l + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != E &&
                    (e.preventDefault(),
                    eo(E, ev.F6, { x: (p?.left ?? 0) + E.rect.x * en, y: (p?.top ?? 0) + E.rect.y * en }));
            },
            [o, z, H, ei, E, eo, eg, p, en],
        ),
        ek = a.useCallback(
            (e) => {
                null == o ||
                    null == z ||
                    (((0, ev.to)(z.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, c.dv)(o, (0, ev.v_)(z.target, z.draft), e), el(), I(null)));
            },
            [o, z, el],
        ),
        ew = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, c.vX)(o, e)), [o]),
        eN = a.useCallback((e) => (null == o ? Promise.resolve() : (0, c.Vm)(o, e)), [o]),
        eA = a.useCallback(() => {
            null == o ||
                null == H ||
                null == x ||
                ((0, ev.to)(H.draft) && ((0, ej.dy)(o, x, H.id, H.draft.trim()), K({ ...H, editing: !1 })));
        }, [o, H, x]),
        eE = a.useCallback(() => {
            null != o && null != H && null != x && ((0, ej.PR)(o, x, H.id), K(null));
        }, [o, H, x]),
        eS = u
            ? k
                ? C.intl.string(S.default.jQQ8i2)
                : N
                  ? C.intl.string(S.default.zvU2QH)
                  : C.intl.formatToPlainString(S.default.A4HDMU, { count: d.length })
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
                      let { left: l, top: n } = ry(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rj(eM.target, eM.anchor, p, en), p)
                : null;
    return (0, rl.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: rx.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rx.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eC
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rx.MT,
                                  style: { left: p.left, top: p.top, width: p.width, height: p.height },
                                  "data-plain-cursor": eI ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": C.intl.string(S.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ec,
                                  onMouseLeave: em,
                                  onClick: ef,
                                  onKeyDown: ey,
                              }),
                              null != E && null == z && null == H ? (0, n.jsx)(rM, { box: rb(E, p, en) }) : null,
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rx.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rx.xz,
                                      "data-shown": null != E && null == H && null == z ? "" : void 0,
                                      "data-instant": V ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: rx.Ux,
                                          children: [
                                              null == L
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rx.Tl, children: L.kind }),
                                              null == L || "" === L.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rx.kh, children: [" ", L.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: P,
                                  className: rx.Y,
                                  children: eI
                                      ? (0, n.jsx)(lx.A, { className: rx.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eP
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rx.aZ,
                                        style: { transform: `translate3d(${eP.at.x + 12}px, ${eP.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rx.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == z ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: rx.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rx.Tl, children: eP.label.kind }),
                                                    "" === eP.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rx.kh,
                                                              children: [" ", eP.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, n.jsx)("div", { className: rx.D0, style: rb(eT, p, en), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rj(e.target, e.anchor, p, en),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rx.xL,
                                          style: { ...ry(l, p), width: 24, height: 24 },
                                          "aria-label": C.intl.formatToPlainString(S.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, ev.iw)(e.target),
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
                                          children: (0, n.jsx)(rN, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eR
                                  ? null
                                  : (0, n.jsx)(rc, {
                                        at: { x: eR.at.x + 12, y: eR.at.y + 12 },
                                        bounds: p,
                                        kind: eR.label.kind,
                                        value: eR.draft,
                                        canSubmit: null != z && (0, ev.to)(eR.draft),
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
                                  ? (0, n.jsxs)(rA, {
                                        point: e_,
                                        frame: p,
                                        authorId: eM.authorId,
                                        title: (0, ev.iw)(eM.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            H.confirmingRemove ? K({ ...H, confirmingRemove: !1 }) : K(null);
                                        },
                                        onMouseLeave: () => {
                                            H.editing || H.confirmingRemove || K(null);
                                        },
                                        children: [
                                            H.editing
                                                ? (0, n.jsx)(ra.f, {
                                                      autoFocus: !0,
                                                      label: C.intl.string(S.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: H.draft,
                                                      maxLength: ev.gq,
                                                      rows: 3,
                                                      onChange: (e) => K({ ...H, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eA());
                                                      },
                                                  })
                                                : (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rx.aC,
                                                      children: eM.comment,
                                                  }),
                                            (0, ej.zz)(eM, x)
                                                ? (0, n.jsx)("div", {
                                                      className: rx.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rx.nv,
                                                                        children: C.intl.string(S.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.cLsnYH),
                                                                        onClick: () =>
                                                                            K({ ...H, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eE,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.ncz32j),
                                                                        onClick: () =>
                                                                            K({
                                                                                ...H,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    H.editing
                                                                        ? (0, n.jsx)(f.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, ev.to)(H.draft),
                                                                              text: C.intl.string(S.default.wIeFN0),
                                                                              onClick: eA,
                                                                          })
                                                                        : (0, n.jsx)(f.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: C.intl.string(S.default.DKZggU),
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
function rN(e) {
    let { authorId: t } = e,
        l = (0, D.bG)([ea.default], () => ea.default.getUser(t), [t]);
    return (0, n.jsx)(rr.eu, {
        src: null == l ? null : ru.Ay.getUserAvatarURL(l),
        size: ri._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rA(e) {
    let t,
        l,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rp);
    a.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
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
        className: rx.Nr,
        style: E,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rx.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rx.ip, children: (0, n.jsx)(rN, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rx.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rx.zI, children: x }),
        ],
    });
}
let rE = 300,
    rS = 2;
function rC(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rI(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rM(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rx.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rT = l(11055),
    rR = l(533140),
    rP = l(342667);
function r_(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, frameId: s } = e,
        o = (0, l_.o4)(null != l && l === r ? t : null),
        u = (0, eK.useHasAnyModalOpen)(),
        d = (0, rR.V0)(s);
    a.useEffect(() => {
        o && d && null != s && (0, rR.c2)(s);
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
    return (0, rl.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: rP.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: o ? C.intl.string(S.default.dIE9zO) : "",
                }),
                f
                    ? (0, n.jsx)("div", {
                          className: rP.o,
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
var rL = l(314116),
    rF = l(364522),
    rD = l(237528),
    r$ = l(664121),
    rO = l(95477),
    rz = l(381849),
    rq = l(724401);
function rU(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function rB(e) {
    let t,
        { projectId: l, installScope: r, onClose: i } = e,
        o = "user" === r ? ["stable"] : ["preview", "stable"],
        [d, h] = a.useState(o[0] ?? "stable"),
        [g, x] = a.useState({ status: "loading" }),
        [p, b] = a.useState(""),
        [j, y] = a.useState(""),
        [k, w] = a.useState({ phase: "idle" }),
        N = "busy" === k.phase,
        [A, E] = a.useState(0),
        I = a.useCallback(() => E((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${d}`;
        return (
            Promise.all([(0, c.DM)(l, d), (0, c.ms)(l, d)])
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
    }, [l, d, A]);
    let M = "loading" !== g.status && g.key === `${l}|${d}` ? g : { status: "loading" },
        T = a.useCallback(
            (e, t) => {
                (0, rL.A)({
                    title: C.intl.string(S.default.S3WHxG),
                    subtitle:
                        1 === o.length
                            ? C.intl.formatToPlainString(S.default["0lt6bH"], { target: e })
                            : C.intl.formatToPlainString(S.default.zVcDfj, {
                                  environment: C.intl.string(
                                      "preview" === d ? S.default["/kYdZe"] : S.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: C.intl.string(S.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (w({ phase: "busy", environment: d, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (w({
                                              phase: "settled",
                                              environment: d,
                                              tone: "positive",
                                              text: C.intl.string(S.default.kIWqXR),
                                          }),
                                          I())
                                        : "expired" === e.code
                                          ? (w({
                                                phase: "settled",
                                                environment: d,
                                                tone: "danger",
                                                text: C.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                            }),
                                            I())
                                          : "unconfirmed" === e.code
                                            ? (w({
                                                  phase: "settled",
                                                  environment: d,
                                                  tone: "danger",
                                                  text: C.intl.string(S.default["2xSPXh"]),
                                              }),
                                              I())
                                            : w({
                                                  phase: "settled",
                                                  environment: d,
                                                  tone: "danger",
                                                  text: C.intl.string(S.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    w({
                                        phase: "settled",
                                        environment: d,
                                        tone: "danger",
                                        text: C.intl.string(S.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [d, o, I],
        ),
        R = a.useCallback(() => {
            (w({ phase: "busy", environment: d, kind: "create" }),
                (0, c._m)(l, d, p)
                    .then(() => {
                        (b(""),
                            w({
                                phase: "settled",
                                environment: d,
                                tone: "positive",
                                text: C.intl.string(S.default.mfAoFT),
                            }),
                            I());
                    })
                    .catch(() => {
                        w({ phase: "settled", environment: d, tone: "danger", text: C.intl.string(S.default.uhhqP3) });
                    }));
        }, [l, d, p, I]),
        P = "loaded" === M.status ? M.window : null,
        _ = "loaded" === M.status ? M.nowMs : 0,
        L = P?.earliestRestoreTimestampMs ?? _ - 2592e6,
        F = "" === j ? null : new Date(j).getTime(),
        D = null != F && !Number.isNaN(F) && F >= L && F <= _,
        $ =
            "busy" === k.phase
                ? "restore" === k.kind && k.environment === d
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === k.phase && k.environment === d
                  ? { kind: "notice", tone: k.tone, text: k.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === M.status
                ? (0, n.jsx)("div", { className: rq.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === M.status
                  ? (0, n.jsx)("div", {
                        className: rq.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(S.default.pwFaXc),
                        }),
                    })
                  : 0 === M.points.length
                    ? (0, n.jsx)("div", {
                          className: rq.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(rF.Ip, {
                          className: rq.p_,
                          children: (0, n.jsx)("div", {
                              className: rq.jO,
                              children: M.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rz.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rz._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: rq.KW,
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return C.intl.string(S.default.h4zhWL);
                                                          case "undo":
                                                              return C.intl.string(S.default["c/tNny"]);
                                                          default:
                                                              return C.intl.string(S.default["jViU+0"]);
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
                                                  (0, n.jsx)(rD.v, {
                                                      text: C.intl.string(S.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: rq.AD,
                                                title: C.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: rq.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            eC.D,
                                            {
                                                className: rq.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          T(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, c.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: rq.Pf,
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
            className: rq.nd,
            "aria-label": C.intl.string(S.default.FRjicO),
            children: [
                (0, n.jsxs)(u.Ay, {
                    "aria-label": C.intl.string(S.default.FRjicO),
                    toolbar: (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(u.Ay.ChannelIcon, { icon: r$.R, "aria-hidden": !0 }),
                        (0, n.jsx)(u.Ay.Title, { children: C.intl.string(S.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: rq.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: rq.ne,
                            children: [
                                o.length > 1 &&
                                    (0, n.jsxs)(n_.V, {
                                        selectedItem: d,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (h(e), E(0));
                                        },
                                        "aria-label": C.intl.string(S.default.CNvRyJ),
                                        className: rq.vR,
                                        children: [
                                            (0, n.jsx)(n_.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(S.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(n_.V.Item, {
                                                id: "stable",
                                                children: C.intl.string(S.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        C.intl.formatToPlainString(S.default.l07ism, { days: 30 }),
                                        null != P
                                            ? ` ${new Date(P.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === $.kind
                                    ? (0, n.jsxs)("div", {
                                          className: rq.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: C.intl.string(S.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === $.kind
                                      ? (0, n.jsx)("div", {
                                            className: rq.lm,
                                            role: "danger" === $.tone ? "alert" : "status",
                                            children: (0, n.jsx)(v.E, {
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
                            className: rq.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: rq.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rq.Fv,
                                            children: (0, n.jsx)(rO.k, {
                                                label: C.intl.string(S.default.hJb78b),
                                                value: p,
                                                onChange: b,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(f.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: C.intl.string(S.default["14UarN"]),
                                            onClick: R,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: rq._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rq.kv,
                                            children: (0, n.jsx)(rO.k, {
                                                label: C.intl.string(S.default.rI7mpv),
                                                type: "datetime-local",
                                                value: j,
                                                min: rU(L),
                                                max: rU(_),
                                                disabled: N || null == P,
                                                onChange: y,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: C.intl.string(S.default["3D/vYN"]),
                                            disabled: N || !D,
                                            onClick: () => {
                                                null != F && T(new Date(F).toLocaleString(), () => (0, c.dz)(l, d, F));
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
var rG = l(406810),
    rV = l(977628);
function rW(e) {
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
                ? (0, n.jsx)("div", { className: rV.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === o.status
                  ? (0, n.jsx)("div", {
                        className: rV.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(S.default["mSJn+K"]),
                        }),
                    })
                  : 0 === o.entries.length
                    ? (0, n.jsx)("div", {
                          className: rV.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(rF.Ip, {
                          className: rV.p_,
                          children: (0, n.jsx)("div", {
                              className: rV.jO,
                              children: o.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rz.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rz._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      eC.D,
                                      {
                                          className: rV.f_,
                                          onClick: () =>
                                              (0, rL.A)({
                                                  title: C.intl.string(S.default.qOUOPE),
                                                  subtitle: C.intl.string(S.default.k2JBj5),
                                                  confirmText: C.intl.string(S.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      (r(), i(e));
                                                  },
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: rV.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != l.relative &&
                                                  (0, n.jsx)(v.E, {
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
            className: rV.nd,
            "aria-label": C.intl.string(S.default.jAWwzi),
            children: [
                (0, n.jsxs)(u.Ay, {
                    "aria-label": C.intl.string(S.default.jAWwzi),
                    toolbar: (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(u.Ay.ChannelIcon, { icon: rG.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(u.Ay.Title, { children: C.intl.string(S.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: rV.rf, children: t }),
            ],
        })
    );
}
var rH = l(120426),
    rK = l(873727),
    rY = l(147248),
    rQ = l(418842),
    rX = l(885386),
    rZ = l(171936),
    rJ = l(796036);
function r0(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: d,
            mainClassName: c,
            content: m,
            sidebar: f,
        } = e,
        [h, g] = a.useState(null),
        x = (0, o.A)(r, u),
        p = x?.id ?? null;
    (!(function (e, t) {
        let l = (0, D.bG)([nd.A], () => (0, rK.x4)(nd.A.theme)),
            n = (0, D.bG)([rY.A], () => rY.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, D.cf)([tE.Ay], () => ({
                reducedMotion: tE.Ay.useReducedMotion,
                fontScale: (0, rK.U0)(),
                highContrast: tE.Ay.isHighContrastModeEnabled,
                forcedColors: tE.Ay.useForcedColors,
                underlineLinks: tE.Ay.alwaysShowLinkDecorations,
            })),
            d = rX.hH.useSetting(),
            c = (0, rQ.C)(),
            m = a.useRef(!1),
            f = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, rH.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, rK.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rg.W)(n, "set-env", a, {
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
                let l = (0, rH.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, rH.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, rZ.mn)(t, () => (0, rH.F)(h, p));
        }, [t, h, p]));
    let v = a.useCallback(() => (0, rH.F)(h, p), [h, p]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(eg.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: g, className: eg.fm, children: m })],
            }),
            f,
            (0, n.jsx)(r_, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                frameId: p,
            }),
            (0, n.jsx)(rw, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                toggleRef: l,
            }),
        ],
    });
}
function r1(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: o,
            surface: m,
            header: f,
            chatOpen: h,
            onCloseChat: g,
            chatHeaderAction: x,
            versionHistoryOpen: p = !1,
            restorePointsOpen: v = !1,
            onCloseRestorePoints: b,
            installScope: j = null,
            onCloseVersionHistory: y,
            onRestoreVersion: k,
            debugOpen: w = !1,
            onCloseDebug: N,
            restoreState: A,
            previewReady: E,
            previewGate: I,
            channelMessages: M,
            availability: T,
            activeMode: R,
            widgetApplicationId: P,
        } = e,
        L = a.useRef(null),
        [F, D] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (m.type === _.U4.MAIN) return ((0, d.HV)(r), () => (0, d.HV)(null));
    }, [r, m.type]),
        a.useEffect(() => {
            null != t && ((0, c.Hc)(t), (0, rJ.s)());
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
        a.useEffect(() => () => (0, d.Zq)(0), []));
    let $ = Math.max(360, F - 320),
        O = null != M ? M.open : h,
        z = h || m.type === _.U4.MAIN;
    return (0, n.jsx)("div", {
        ref: L,
        className: eg.LB,
        children: (0, n.jsx)(r0, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: o,
            surface: m,
            header: f,
            mainClassName: null == f ? void 0 : i()(eg.ez, { [eg.zt]: O }),
            content: (0, n.jsx)(ed, {
                applicationId: r,
                previewApplicationId: o,
                surface: m,
                previewReady: E,
                previewGate: I,
                availability: T,
                activeMode: R,
                widgetApplicationId: P,
            }),
            sidebar:
                null != M
                    ? (0, n.jsx)(nC, {
                          open: M.open,
                          maxWidth: $,
                          onWidthChange: d.Zq,
                          children: M.open
                              ? (0, n.jsx)(ex, { channel: M.channel, guild: M.guild, onClose: M.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(nC, {
                            open: h,
                            maxWidth: $,
                            onWidthChange: d.Zq,
                            children: (0, n.jsx)("div", {
                                className: eg.cO,
                                children: w
                                    ? (0, n.jsx)(rt, { projectId: t, onClose: N ?? (() => {}) }, t)
                                    : p
                                      ? (0, n.jsx)(
                                            rW,
                                            { projectId: t, onClose: y ?? (() => {}), onRestore: k ?? (() => {}) },
                                            t,
                                        )
                                      : v
                                        ? (0, n.jsx)(rB, { projectId: t, installScope: j, onClose: b ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(rT.A, { projectId: t }),
                                                  (0, n.jsx)(u.Ay, {
                                                      "aria-label": C.intl.string(C.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              x,
                                                              null == g
                                                                  ? null
                                                                  : (0, n.jsx)(u.Ay.Icon, {
                                                                        icon: s.P,
                                                                        tooltip: C.intl.string(S.default.YdgE0j),
                                                                        onClick: g,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(u.Ay.Title, {
                                                          children: C.intl.string(C.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: eg.cb,
                                                      children: (0, n.jsx)(nk, { projectId: t, restoreState: A }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
