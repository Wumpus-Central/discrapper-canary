l.d(t, { A: () => rJ });
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
    x = l(297264),
    p = l(834730),
    v = l(625180),
    b = l(91242),
    j = l(812901),
    y = l(317608),
    k = l(206600),
    w = l(869146),
    N = l(742023),
    A = l(697744),
    E = l(50617),
    S = l(375708),
    C = l(296167);
function I(e) {
    let { className: t } = e,
        { Component: l, events: r, getDuration: i } = (0, A.c)();
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
                    children: S.intl.string(E.default.jTuX7C),
                }),
            ],
        })
    );
}
var M = l(328284);
function T(e) {
    let { title: t, body: l, wide: a = !1, children: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(M.Bf, a && M.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: M.Ux,
                children: [
                    (0, n.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, n.jsx)(p.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var R = l(652215),
    P = l(165610),
    _ = l(963691);
function L(e) {
    let { applicationId: t, surface: l } = e,
        { frame: r, state: i } = (0, k.A)({ applicationId: t, surface: l }),
        s = (0, P.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(R.MLl.ACTIVITY_POPOUT)) return;
                    let l = b.A.getMainFrame()?.id === e;
                    t.intent === P.sV.MAIN
                        ? (l || v.A.promoteFrame(e), v.A.resetFrameLayoutModes(e))
                        : l && v.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = b.A.getFrame(s)) &&
                        ((0, P.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        N.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === P.sV.INLINE && v.A.promoteFrame(s),
                              v.A.updateFrameLayoutMode({ frameId: s, layoutMode: P.y0.PIP }))
                            : e.intent === P.sV.MAIN && v.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case k.n.Launched:
            return (0, n.jsx)(y.A, { frameId: r.id, level: j.A.WithinAppContent, className: _.Z7 });
        case k.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: _.qs,
                children: (0, n.jsx)(T, {
                    title: S.intl.string(E.default["4f6Vkr"]),
                    body: S.intl.string(E.default.LJ2q1H),
                }),
            });
        case k.n.NoApplication:
            return (0, n.jsx)(I, { className: _.qs });
        case k.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: _.qs,
                children: (0, n.jsx)(T, {
                    title: S.intl.string(E.default.FHOJiH),
                    body: S.intl.string(E.default["1yLQoV"]),
                }),
            });
        case k.n.Error:
            return (0, n.jsxs)("div", {
                className: _.qs,
                children: [
                    (0, n.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: S.intl.string(E.default.MeLWCr),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: _.tj,
                        children: S.intl.string(E.default["1RCbQT"]),
                    }),
                ],
            });
        case k.n.AwaitingLaunch:
        case k.n.Loading:
            return (0, n.jsx)("div", { className: _.qs, children: (0, n.jsx)(m.y, {}) });
    }
}
var F = l(17928),
    D = l(323384),
    $ = l(308528),
    z = l(334738),
    O = l(688438),
    q = l(355622),
    G = l(734057),
    B = l(531685),
    U = l(365971),
    V = l(362417);
function W(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: V.f,
        children: [
            (0, n.jsx)(D.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function H() {
    return (0, n.jsx)("div", { className: V.f, children: (0, n.jsx)(m.y, {}) });
}
function Y(e) {
    let t,
        l,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, h.YY)(r),
        o = i?.bot?.id ?? null,
        u = (0, F.bG)([G.A], () => {
            if (null == o) return null;
            let e = G.A.getDMFromUserId(o);
            return null != e ? G.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        a.useEffect(() => {
            null != t && $.A.preload(R.ME, t);
        }, [t]),
        (l = (0, F.bG)([B.A], () => B.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, U.Xg)();
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
          ? (0, n.jsx)(W, { message: S.intl.string(E.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(H, {})
            : (0, n.jsx)("div", {
                  className: V.g,
                  children: (0, n.jsx)(O.A, { channel: u, guild: null, chatInputType: q.oU.SIDEBAR }, u.id),
              });
}
var Q = l(148853),
    K = l(598748),
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
        l = (0, F.bG)([ea.default], () => ea.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(eo, { applicationId: t, user: l });
}
function eo(e) {
    let { applicationId: t, user: l } = e,
        r = (0, F.bG)([J.A], () => J.A.getApplication(t)),
        i = a.useMemo(() => new ee.R({ applicationId: t }), [t]),
        s = (0, Z.A)(l.id, t),
        o = s.surfaceConfigs,
        u = (0, er.yZ)({
            widgetTop: null != o[K.m.WIDGET_TOP],
            widgetBottom: null != o[K.m.WIDGET_BOTTOM],
            miniProfile: null != o[K.m.MINI_PROFILE],
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
            children: (0, n.jsx)(T, {
                wide: !0,
                title: S.intl.string(E.default.DYwf2n),
                body: S.intl.string(E.default.WWj3pN),
                children: (0, n.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: S.intl.string(E.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!i) return (0, n.jsx)(I, { className: eu.q });
    if (null == t) return null;
    if (p) return (0, n.jsx)("div", { className: eu.q, children: (0, n.jsx)(m.y, {}) });
    let v = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, Q.z3)(d), "aria-label": (0, Q.kZ)(d) } : {};
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
                          children: (0, n.jsx)(T, {
                              wide: !0,
                              title: S.intl.string(E.default.SGHO9K),
                              body: S.intl.string(E.default["pV/rS2"]),
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
        i = (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: eg.Wx,
        children: [
            (0, n.jsx)(em.A, { channel: t, draftType: eh.C.ChannelMessage }),
            (0, n.jsxs)(u.Ay, {
                toolbar: i,
                "aria-label": S.intl.string(S.t.BIYAqa),
                children: [
                    (0, n.jsx)(u.Ay.ChannelIcon, { icon: ec.ChatIcon, "aria-label": S.intl.string(S.t["/VQax8"]) }),
                    (0, n.jsx)(u.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: eg.GZ,
                children: (0, n.jsx)(O.A, { channel: t, guild: l, chatInputType: q.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ep = l(689175),
    ev = l(29692),
    eb = l(903586),
    ej = l(783791),
    ey = l(717447),
    ek = l(29080),
    ew = l(46054);
function eN(e) {
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
var eA = l(939249),
    eE = l(478016),
    eS = l(34136);
function eC(e) {
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
var eI = l(113757);
function eM(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(eA.D, {
        className: i()(eI.nM, { [eI.f1]: o, [eI.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": S.intl.formatToPlainString(E.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: eI.jo,
                children: [
                    l
                        ? (0, n.jsx)(eE.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eI.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(p.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eI.G9,
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
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(eC, {
        title: S.intl.string(E.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                eM,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eR = l(435619),
    eP = l(866665),
    e_ = l(885574),
    eL = l(430392),
    eF = l(632015),
    eD = l(256905),
    e$ = l(824757);
function ez(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: e$.uW,
        children: [
            (0, n.jsxs)("span", {
                className: e$.a9,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eO() {
    return (0, n.jsx)(eP.m, {
        text: S.intl.string(E.default.DXe2dP),
        children: (0, n.jsx)(eA.D, {
            className: e$.bk,
            "aria-label": S.intl.string(E.default.Y6y4nQ),
            children: (0, n.jsx)(e_.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eq(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(ez, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: e$.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: e$.jw,
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
function eG(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? D.k : eL.RobotIcon;
    return (0, n.jsxs)("span", {
        className: e$.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: e$.L6,
                      children: [
                          (0, n.jsx)(eF.f, {
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
                              children: S.intl.string(E.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: e$.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: S.intl.string(t ? S.t.IC5Ann : E.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eB(e) {
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
        u = S.intl.string(E.default.FW8UcU),
        d = a.useCallback(() => {
            (0, c.PK)(t, r).then(
                (e) => {
                    (0, eD.R)({
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
        : (0, n.jsx)(ez, {
              label: S.intl.string(E.default["9W8SbY"]),
              info: (0, n.jsx)(eO, {}),
              children: (0, n.jsx)(eA.D, {
                  className: e$.xX,
                  onClick: d,
                  "aria-label": S.intl.string(E.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: u, className: e$.sN, onError: o }) : null,
              }),
          });
}
function eU(e) {
    let { projectId: t, proposal: l } = e;
    return (0, n.jsx)(eC, {
        title: S.intl.string(E.default["60htw+"]),
        trailing: (0, n.jsx)(eG, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: e$.rf,
            children: [
                (0, n.jsx)(p.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(eB, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(ez, {
                          label: S.intl.string(E.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: e$.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: e$.Aw,
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
                    ? (0, n.jsx)(ez, {
                          label: S.intl.string(S.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: e$.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: e$.uX,
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
                (0, n.jsx)(eq, { label: S.intl.string(E.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eq, { label: S.intl.string(E.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eV = l(192308),
    eW = l(479191);
function eH(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, eV.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]);
    return (0, n.jsxs)("article", {
        className: eW.Lo,
        children: [
            (0, n.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: S.intl.string(E.default["/e28TK"]),
            }),
            (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : S.intl.string(E.default.jxvtin),
            }),
            (0, n.jsx)("div", {
                className: eW.cS,
                children: r.fields.map((e) =>
                    (0, n.jsx)(
                        "span",
                        {
                            className: eW.$H,
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
                className: eW.sq,
                children: (0, n.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: S.intl.string(E.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eY = l(976814),
    eQ = l(973e3);
function eK(e) {
    let { projectId: t, request: l } = e,
        r = (0, F.bG)([c.Ay], () => c.Ay.getSettings(t)),
        i = (l.keys ?? []).map((e) => r?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = a.useCallback(() => {
            (0, eY.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0, isPreview: !0 });
        }, [t, l]);
    return (0, n.jsxs)("article", {
        className: eQ.Mk,
        children: [
            (0, n.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: S.intl.string(E.default.wgDhiQ),
            }),
            (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : S.intl.string(E.default["V+DBhs"]),
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
                    text: S.intl.string(E.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eX = l(196582);
let eZ = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    eJ = {
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
    e0 = {
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
function e1(e) {
    return { ...e0[e], name: S.intl.string(eJ[e]()) };
}
function e2(e) {
    return eZ.includes(e) ? e1(e) : void 0;
}
function e3(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % eZ.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, eZ[(t + l) % eZ.length]);
            }),
            n
        );
    })(e))
        t.set(l, e1(n));
    return t;
}
var e4 = l(683063),
    e7 = l(76275),
    e6 = l(705754),
    e5 = l(883455),
    e8 = l(13699);
function e9(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : S.intl.string(E.default.MdXWEK);
}
function te(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, eb.SY)(l.steps),
        c = u
            ? null != d
                ? (0, eb.WQ)(d)
                : e9(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(e9(e));
                  switch (e.status) {
                      case "failed":
                          return S.intl.formatToPlainString(E.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return S.intl.formatToPlainString(E.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return S.intl.formatToPlainString(E.default.vuv9bT, {
                                  task: t,
                                  duration: (0, e7.M)(e.durationMs),
                              });
                          return S.intl.formatToPlainString(E.default.KS49RN, { task: t });
                      default:
                          return S.intl.formatToPlainString(E.default.KS49RN, { task: t });
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
                                    className: e8.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            e5.A,
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
                                      className: e8.iq,
                                      children: (0, n.jsx)(e6.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(eX.A, {
        glyph: (0, n.jsx)(e4.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: e9(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: e8.nC,
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
var tt = l(140735),
    tl = l(329456);
let tn = [];
function ta(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tl.xL, { [tl.Vb]: "in_progress" === t, [tl.cT]: "completed" === t }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return S.intl.string(E.default.TkPGOH);
                case "in_progress":
                    return S.intl.string(E.default["oK+fmd"]);
                default:
                    return S.intl.string(E.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: tl.Qd,
                itemClassName: tl.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tl.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tl.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tr(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tn), [l, t]),
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
        className: tl.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    e4.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tl.MA,
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
                      className: tl.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function ti(e) {
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
            ((t = (s ?? tn).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tn) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tl.p_,
        children: [
            l.map((e) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tl.AS, { [tl.J1]: "completed" === e.status }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(ta, { status: e.status }),
                            (0, n.jsx)(p.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tl.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", { className: tl.Qq, children: e.text }),
                            }),
                            (0, n.jsx)(tr, { agents: u.get(e.id) ?? tn, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tl.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(ta, { status: "pending" }),
                          (0, n.jsx)(p.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tl.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tl.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ts(e) {
    let { todos: t, provisional: l, agents: a, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, n.jsxs)(eC, {
              title: S.intl.string(E.default.qCRC6c),
              trailing: (0, n.jsx)(p.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: S.intl.formatToPlainString(E.default.bQvqly, { completed: i, total: s }),
              }),
              className: tl.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, n.jsx)(tt.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: S.intl.formatToPlainString(E.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, n.jsx)("div", {
                      className: tl.rf,
                      children: (0, n.jsx)(ti, { todos: t, provisional: l, agents: a }),
                  }),
              ],
          });
}
var to = l(229775),
    tu = l(165648);
function td(e) {
    let t = e3(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? e2(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: e9(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tc(e) {
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
            className: e8.pj,
            "data-live": !1,
            children: (0, n.jsx)(eX.A, {
                glyph: (0, n.jsx)(ek.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: S.intl.string(E.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = r ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, eb.lt)(l) ?? o ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !b) return null;
    let j = x.tasks,
        y = e3(j.map((e) => e.taskId)),
        k = !f && (r || j.some((e) => "running" === e.task.status)),
        w = td(j);
    return (0, n.jsx)(eX.l.Provider, {
        value: j.length,
        children: (0, n.jsxs)("ol", {
            className: e8.pj,
            "data-live": k,
            children: [
                (0, n.jsx)(ey.A, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: j.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: f,
                    durationMs: p,
                    connectsDown: j.length > 0,
                }),
                j.map((e, l) => {
                    let a = null != e.task.helperMark ? e2(e.task.helperMark) : void 0,
                        r = a ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              te,
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
                          className: e8.YO,
                          children: (0, n.jsx)(ts, { todos: v, provisional: u, agents: w }),
                      })
                    : null,
            ],
        }),
    });
}
function tm(e) {
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
            showsClosingMessage: b,
            attachmentsHost: j,
        } = a.useMemo(
            () => eN({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        y = null == u ? null : (0, n.jsx)(eR.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, n.jsx)("div", { className: e8.MT, children: y }),
        w = h
            ? (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: S.intl.string(E.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: e8.ue,
        children: [
            x.length > 0 && !g
                ? (0, n.jsx)("ol", {
                      className: e8.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: e8.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tu.PT,
                                              children: ew.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === j && e === v ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(eU, { projectId: t, proposal: s })
                : b
                  ? (0, n.jsxs)("div", {
                        className: i()(e8.ky, to.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tu.PT, e8.cW),
                                children: ew.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === j ? k : null,
                            w,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(e8.ky, to.XR),
                      children: (0, n.jsx)(eH, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(e8.ky, to.XR),
                      children: (0, n.jsx)(eK, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === j ? y : null,
            null != o && o.length > 0 ? (0, n.jsx)(eT, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            b ? null : w,
        ],
    });
}
var tf = l(864970),
    th = l(146806),
    tg = l(475358),
    tx = l(81369),
    tp = l(922016),
    tv = l(980707),
    tb = l(477782),
    tj = l(717400),
    ty = l(663341),
    tk = l(826745),
    tw = l(783977),
    tN = l(559647),
    tA = l(775602),
    tE = l(435558),
    tS = l.n(tE),
    tC = l(506774),
    tI = l(228366);
let tM = "VibegrationsComposerDrafts";
function tT() {
    return tC.w.get(tM) ?? {};
}
let tR = new Map(),
    tP = tS().throttle(() => {
        if (0 === tR.size) return;
        let e = tT();
        for (let [t, l] of tR) "" === l ? delete e[t] : (e[t] = l);
        (tR.clear(), tC.w.set(tM, e));
    }, 1e3);
class t_ extends F.Ay.Store {
    getDraft(e) {
        let t = tR.get(e);
        return null != t ? t : (tT()[e] ?? "");
    }
}
let tL = new t_(tI.h, {
    LOGOUT: function () {
        return (tR.clear(), tP.cancel(), tC.w.remove(tM), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (tR.set(t, l), tP(), "" === l && tP.flush(), !1);
    },
});
var tF = l(113491);
(l(323874), l(14289), l(35956));
var tD = l(285796),
    t$ = l(673724),
    tz = l(590380),
    tO = l(298668);
let tq = t$.Is,
    tG = 0;
function tB(e) {
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
                    if (t.length >= tq) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: S.intl.formatToPlainString(E.default.DlX57a, { count: tq }),
                        });
                        continue;
                    }
                    if (!(0, t$.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: S.intl.formatToPlainString(E.default.cI7t94, {
                                size: (0, t$.ZJ)((0, t$.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = t$.Wb.has(e) ? URL.createObjectURL(n) : void 0;
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
                                m(n, { status: "error", errorText: S.intl.string(E.default.GwEHvn) }));
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
function tU(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(tz.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tO.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: tO.o1,
                onClick: () => l(t.localId),
                "aria-label": S.intl.string(E.default["3HWvgk"]),
                children: (0, n.jsx)(tD.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tV = l(789438);
let tW = "text-md/normal",
    tH = null;
function tY(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [m, f] = a.useState(0),
        [h, g] = a.useState(0),
        [x, v] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            v({
                frontFrom: 1e3 * (0, th._R)(m),
                frontTo: 1e3 * (0, th._R)(h),
                backFrom: 1e3 * (0, th.T)(m),
                backTo: 1e3 * (0, th.T)(h),
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
        C = "out" === y ? x.frontTo : x.backTo,
        I = (0, F.bG)([tA.Ay], () => tA.Ay.useReducedMotion),
        M = t === S.intl.string(E.default.Jj8Ftb),
        T = s === t && M;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(tV.VT, { [tV.qk]: a }),
            style: a
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, n.jsx)(tg.e, { shortcut: "tab", className: tV.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tf.o, {
                text: t,
                variant: tW,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(tV.xM, { [tV.s2]: r }),
                onStart: N,
                onComplete: () => o(t),
            }),
            R(tV.IS, l || (!I && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: tV.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(p.E, { variant: tW, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: tV.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(p.E, { variant: tW, tag: "span", className: tV.xM, children: t }),
                          R(tV.IS, !0),
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
        [j, y] = a.useState(() => tL.getDraft(t)),
        k = a.useCallback(
            (e) => {
                ((0, d.I$)(t, e), y(e));
            },
            [t],
        ),
        [w, N] = a.useState(t);
    w !== t && (N(t), y(tL.getDraft(t)));
    let A = (0, F.bG)([tA.Ay], () => tA.Ay.isSubmitButtonEnabled),
        [C, I] = a.useState(!1),
        [M, T] = a.useState(!1);
    a.useEffect(() => {
        i || T(!1);
    }, [i]);
    let R = a.useRef(null),
        { drafts: P, addFiles: _, removeDraft: L, settled: D, takeRefs: $ } = tB({ onUploadFile: c, onDeleteFile: m }),
        z = "" !== j.trim() || P.length > 0 || p,
        O = l && z && D,
        [q, G] = a.useState(null);
    a.useEffect(() => {
        if (null == q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]);
    let B = a.useCallback(() => {
            if (!O) return;
            let e = $();
            o(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == tH && (tH = document.createElement("canvas").getContext("2d"));
                let i = tH;
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
            ("" !== t && G(t), k(""));
        }, [O, j, o, $, k]),
        U = a.useCallback(
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
        Y = a.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), _(t));
            },
            [l, _],
        ),
        Q = a.useCallback(
            (e) => {
                (e.preventDefault(), I(!1), l && _(Array.from(e.dataTransfer.files)));
            },
            [l, _],
        ),
        K = a.useCallback((e) => {
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
            let t = tZ(e);
            null != t && et(t);
        }
        en(!0);
        let t = setTimeout(() => en(!1), tK);
        return () => clearTimeout(t);
    }, [j]);
    let ea = a.useMemo(() => ({ "--custom-glow-x": `${ee}px` }), [ee]),
        er = el ? ` ${tV.EB}` : "",
        ei = s
            ? S.intl.string(E.default.pGFXZ0)
            : r
              ? S.intl.string(E.default.JeM47J)
              : l
                ? p
                    ? S.intl.string(E.default.Bs7bUv)
                    : x
                      ? S.intl.string(E.default.M3ovXY)
                      : S.intl.string(i ? E.default["67PpcP"] : E.default.ahRdoJ)
                : S.intl.string(E.default.nm4w9P),
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
        onSubmit: U,
        onDrop: Q,
        onDragOver: K,
        onDragLeave: () => I(!1),
        className: C ? `${tV.DA} ${tV.pV}` : tV.DA,
        children: [
            P.length > 0
                ? (0, n.jsx)("div", {
                      className: tV.lN,
                      children: P.map((e) => (0, n.jsx)(tU, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${tV.wg} ${tV.LP}${er}`, style: ea, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${tV.wg} ${tV.L3}${er}`, style: ea, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: tV.VA,
                ref: Z,
                children: [
                    (0, n.jsx)("input", {
                        ref: R,
                        type: "file",
                        multiple: !0,
                        onChange: X,
                        className: tV.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == h
                        ? (0, n.jsx)(eP.m, {
                              text: S.intl.string(E.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: J,
                                  type: "button",
                                  className: `${tV.Y0} ${tV.nu}`,
                                  disabled: !l,
                                  onClick: () => R.current?.click(),
                                  "aria-label": S.intl.string(E.default.d6Rqlu),
                                  children: (0, n.jsx)(tx.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: tV.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tp.Y, {
                              targetElementRef: J,
                              position: "top",
                              align: "left",
                              animation: tp.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tv.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": S.intl.string(S.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(tb.rX, {
                                          children: [
                                              (0, n.jsx)(tb.Dr, {
                                                  id: "upload-file",
                                                  label: S.intl.string(S.t["d3+iYs"]),
                                                  iconLeft: tx.H,
                                                  leadingAccessory: { type: "icon", icon: tx.H },
                                                  action: () => R.current?.click(),
                                              }),
                                              null != h
                                                  ? (0, n.jsx)(tb.Dr, {
                                                        id: "import-project",
                                                        label: S.intl.string(E.default.edKajy),
                                                        iconLeft: tj.q,
                                                        leadingAccessory: { type: "icon", icon: tj.q },
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
                                      className: `${tV.Y0} ${tV.nu}`,
                                      disabled: !l,
                                      "aria-label": S.intl.string(S.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(ty.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: tV.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, n.jsx)("div", {
                              ref: eu,
                              className: tV.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(tY, { text: em, offering: ec && null == q, typed: null != q }),
                          })
                        : null,
                    (0, n.jsx)(tk.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: H,
                        onPaste: Y,
                        placeholder: ef ? "" : ei,
                        disabled: !l,
                        "aria-label": S.intl.string(E.default.OPr66w),
                        "aria-describedby": ef ? ed : void 0,
                        rows: 1,
                        className: tV.jp,
                    }),
                    ef ? (0, n.jsx)(tt.A, { id: ed, children: ei }) : null,
                    (0, n.jsx)("div", {
                        className: tV.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(eP.m, {
                                      text: S.intl.string(E.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${tV.Y0} ${tV.$E}`,
                                          disabled: M,
                                          onClick: V,
                                          "aria-label": S.intl.string(E.default.KdgI4k),
                                          children: (0, n.jsx)(ek.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != v && null != b
                                  ? (0, n.jsx)(tF.A, {
                                        settings: v.settings,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: b,
                                        className: `${tV.Y0} ${tV.$E}`,
                                        icon: (0, n.jsx)(tw.R, {
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
                                      disabled: !O,
                                      "aria-label": S.intl.string(E.default["22GHMt"]),
                                      children: (0, n.jsx)(tN.SendMessageIcon, {
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
let tK = 1500,
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
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
tZ.mirror = null;
var tJ = l(320095),
    t0 = l(963852),
    t1 = l(521981),
    t2 = l(763754),
    t3 = l(491182),
    t4 = l(438729),
    t7 = l(622868),
    t6 = l(308334),
    t5 = l(837528),
    t8 = l(432433),
    t9 = l(715628),
    le = l(752636),
    lt = l(9842),
    ll = l(589022),
    ln = l(95701),
    la = l(994500),
    lr = l(967198),
    li = l(803306);
let ls = new Set(),
    lo = new Map();
function lu(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
var ld = l(73432);
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
        for (; l < 32 && lm(lf(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function lg(e, t) {
    let { streaming: l } = t,
        n = (0, F.bG)([tA.Ay], () => tA.Ay.useReducedMotion),
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
                      for (; r > 0 && lh(t, r);) r--;
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
                                    for (; n > t + 1 && l - n < 12 && lc.has(e.charAt(n - 1));) n--;
                                    return lc.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lh(t, o);) o++;
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
var lx = l(441136);
let lp = (0, ln.createChannelRecord)({ id: "vibegrations-builder", type: R.rbe.DM }),
    lv = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lb(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lx.Yq, { [lx.x1]: t }), children: e });
}
function lj(e, t) {
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
          ? (0, n.jsx)(t4.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, t9.A)(i, r);
}
function lk(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, t5.m)(e, lp, t.usernameProfile, r),
        o = (0, t5.Jo)(t.avatarProfile, r),
        u = (0, F.bG)([lr.A], () => lr.A.getGuildId()),
        d = (0, F.bG)([ea.default], () => ea.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = ea.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(ll.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
function lw(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, t1.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lx.GV,
                              children: [
                                  (0, n.jsx)(ld.A, { className: lx.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, F.cf)(
            [la.A],
            () => ({
                isReplyAuthorBlocked: la.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: la.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, t2.X4)(l),
        c = (0, t2.X4)(t),
        m = lk(l);
    return (0, n.jsx)(t6.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lp,
        referencedMessage: { state: lt.a.LOADED, message: l },
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
function lN(e) {
    let { message: t, author: l } = e,
        a = lk(t);
    return (0, n.jsx)(t7.Ay, {
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
function lA(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || ls.has(e) || null != ea.default.getUser(e)) return;
                let t = lo.get(e) ?? 0;
                t >= 3 ||
                    (lo.set(e, t + 1),
                    ls.add(e),
                    li
                        .getUser(e)
                        .finally(() => ls.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, F.bG)(
            [ea.default],
            () => lu(r, null != r ? ea.default.getUser(r) : null, ea.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, t2.FT)(o, null), [o]),
        d = a.useMemo(() => (0, ev.LL)(t), [t]),
        c = d?.body ?? t,
        m = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, t0.Ay)({ channelId: lp.id, content: c, author: o });
            return (0, tJ.rh)({ ...e, timestamp: lj(l, e.timestamp), state: R.cmJ.SENT });
        }, [c, o, l]);
    return null == m
        ? null
        : (0, n.jsx)(lE, { message: m, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function lE(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = ly(t, a);
    return (0, n.jsx)(t3.A, {
        className: lx.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(lN, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: lx.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lx.GV,
                              children: [
                                  (0, n.jsx)(ld.A, { className: lx.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lx.WO, children: o }),
                      ],
                  }),
        childrenAccessories: lb(i, "" !== a),
        disableInteraction: !0,
    });
}
function lS(e) {
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
        m = a.useMemo(() => (0, t2.FT)(null, null), []),
        f = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, F.bG)(
            [ea.default],
            () => lu(h, null != h ? ea.default.getUser(h) : null, ea.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, ev.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, t0.Ay)({ channelId: lp.id, content: x?.body ?? i.content, author: g });
            return (0, tJ.rh)({ ...e, id: i.id, timestamp: lj(i.createdAt, e.timestamp), state: R.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lp.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, t0.Ay)({ channelId: lp.id, content: d, author: lv });
            return (0, tJ.rh)({
                ...e,
                timestamp: lj(l, e.timestamp),
                state: R.cmJ.SENT,
                ...(null != v ? { type: R.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = ly(b, d, lx.OS);
    return (0, n.jsxs)("div", {
        className: lx.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(t3.A, {
                className: lx.yE,
                author: f,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(lw, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, le.A)({ message: b, channel: lp, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lb(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lx.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(D.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let lC = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var lI = l(375068);
function lM(e) {
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
                        let e = !(0, ej.BL)(t),
                            n = eN({
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
                            if (null != d.prose && lC.test(d.prose.content)) u = !0;
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
                        let d = lC.test(t.content ?? "");
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
              className: lI.x7,
              children: (0, n.jsx)(lT, {
                  role: "assistant",
                  children: (0, n.jsx)(lS, { content: S.intl.string(E.default.khZEUv) }),
              }),
          })
        : (0, n.jsx)("ol", {
              ref: o,
              className: lI.x7,
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
                                  children: (0, n.jsx)(lA, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != l ? (0, n.jsx)(eR.A, { projectId: t, attachments: l }) : void 0,
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
                                  children: (0, n.jsx)(lS, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, n.jsx)(eR.A, { projectId: t, attachments: a.attachments })
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
                                  children: (0, n.jsx)(tc, {
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
                                  children: (0, n.jsx)(tc, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, n.jsx)(
                              lT,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tc, {
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
                                  children: (0, n.jsx)(lS, {
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
                                      accessories: (0, n.jsx)(tm, {
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
        className: i()(lI.xk, { [lI.Qo]: r, [lI.q3]: s }),
        children: l,
    });
}
var lR = l(625903),
    lP = l(964675);
function l_(e) {
    let { projectId: t } = e,
        l = (0, F.bG)([c.Ay], () => null != c.Ay.getSettings(t), [t]),
        r = a.useCallback(() => {
            (0, eY.A)(t, { isPreview: !0 });
        }, [t]);
    return l
        ? (0, n.jsx)(eA.D, {
              className: lP.h,
              "aria-label": S.intl.string(E.default.gTMvzD),
              onClick: r,
              children: (0, n.jsx)(lR.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lL = l(823376),
    lF = l(495557);
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
            className: lF.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ep.Ch, {
                ref: o,
                className: lF.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tu.PT, lF.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: ew.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var l$ = l(921461);
function lz(e) {
    let { activity: t, compacting: l = !1, restoring: r = !1, controlling: s = !1, spoken: o, onSpokenChange: u } = e,
        d = a.useRef(null),
        c = a.useId(),
        [m, f] = a.useState(null),
        h = null != t && "end" !== t.phase,
        g = s
            ? E.default.ivvYHP
            : r
              ? E.default.aFffp2
              : l
                ? E.default["0vH/5G"]
                : h
                  ? E.default.Ly7F7x
                  : E.default.QDGuNS,
        x = `${S.intl.string(E.default.Xmvb23)} ${S.intl.string(g)}`,
        [p, v] = a.useState(o ?? x),
        b = a.useRef(x);
    (a.useEffect(() => {
        b.current = x;
    }, [x]),
        a.useEffect(() => {
            u?.(p);
        }, [p, u]));
    let j = a.useRef(null),
        y = a.useRef(p);
    (a.useEffect(() => {
        y.current = p;
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                b.current !== y.current ? v(b.current) : j.current?.play();
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
                (j.current?.stop(), a());
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
    let k = null != t && "" !== t.text,
        w = t?.session ?? null,
        N = k && null != w && m === w,
        A = a.useCallback(() => {
            k && null != w && f((e) => (e === w ? null : w));
        }, [k, w]),
        C = a.useCallback(() => f(null), []);
    return (0, n.jsx)(tp.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: N,
        onRequestClose: C,
        renderPopout: () => (0, n.jsx)(lD, { id: c, activity: t }),
        children: () =>
            (0, n.jsxs)(eA.D, {
                innerRef: d,
                className: i()(l$.hF, k && l$.Xd),
                "aria-label": S.intl.string(r ? E.default.pGFXZ0 : E.default.SzdX35),
                "aria-expanded": N,
                "aria-describedby": N ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": S.intl.string(g),
                onClick: A,
                children: [
                    (0, n.jsx)("span", {
                        className: l$.bl,
                        children: (0, n.jsx)(lL.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: l$.xu,
                        "aria-hidden": !!s || void 0,
                        children: (0, n.jsx)(tf.o, {
                            ref: j,
                            text: p,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: l$.yE,
                        }),
                    }),
                ],
            }),
    });
}
var lO = l(280894);
function lq(e) {
    return e.toLocaleString();
}
function lG(e) {
    let { label: t, usage: l } = e;
    return (0, n.jsxs)("div", {
        className: lO.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: lO.mf,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lq((0, t$.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(p.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lq(l.input_tokens),
                    " in \xb7 ",
                    lq(l.output_tokens),
                    " out \xb7 ",
                    lq(l.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    lq(l.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function lB(e) {
    let { project: t } = e,
        l = (0, t$.wU)(t.compaction),
        a = (0, t$.wV)(t.orchestrator, t.codegen),
        r = (0, t$.wV)(a, l);
    return (0, n.jsxs)("div", {
        className: lO.si,
        role: "dialog",
        "aria-label": S.intl.string(E.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: lO.Q$,
                children: (0, n.jsxs)("div", {
                    className: lO.mf,
                    children: [
                        (0, n.jsxs)(p.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lq((0, t$.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(lG, { label: S.intl.string(E.default.R9aduM), usage: a }),
            (0, n.jsx)(lG, { label: S.intl.string(E.default.Tj6b30), usage: l }),
            (0, n.jsxs)("div", {
                className: lO.mf,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: S.intl.string(E.default["kILb+R"]),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, t$.sj)(r) ? "\u2014" : `${Math.round(100 * (0, t$.CA)(r))}%`,
                    }),
                ],
            }),
        ],
    });
}
function lU(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tp.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(lB, { project: t }),
        children: (e) =>
            (0, n.jsx)(eA.D, {
                innerRef: l,
                className: lO.Y$,
                "aria-label": S.intl.string(E.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(e_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lV = l(985451),
    lW = l(258216);
function lH(e) {
    switch (e) {
        case "connecting":
            return S.intl.string(E.default.W7oyuf);
        case "failed":
            return S.intl.string(E.default.eE60xI);
        case "closed":
            return S.intl.string(E.default["yBmS+I"]);
    }
}
function lY(e) {
    let {
            projectId: t,
            thinking: l,
            restoring: r = !1,
            thinkingActivity: i,
            compacting: s,
            projectUsage: o,
            connState: u,
        } = e,
        d = (0, lV.o4)(t),
        [c, m] = a.useState(null);
    return (0, n.jsxs)("div", {
        className: lW.jf,
        children: [
            (0, n.jsx)("div", {
                className: lW.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    l || r || d
                        ? (0, n.jsx)(lz, {
                              activity: i,
                              compacting: s,
                              restoring: r,
                              controlling: d,
                              spoken: c,
                              onSpokenChange: m,
                          })
                        : null,
            }),
            (0, n.jsx)(l_, { projectId: t }),
            null == o
                ? null
                : (0, n.jsxs)("span", {
                      className: lW.BP,
                      children: [
                          (0, n.jsx)(p.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": S.intl.formatToPlainString(E.default["7SZZvj"], {
                                  runes: (0, t$.a7)(o.cost_usd),
                                  turns: o.turns,
                              }),
                              children: S.intl.formatToPlainString(E.default["4PFO2p"], {
                                  runes: (0, t$.a7)(o.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, n.jsx)(lU, { project: o }),
                      ],
                  }),
            "open" === u
                ? null
                : (0, n.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === u ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": S.intl.formatToPlainString(E.default.eDDdhB, { status: lH(u) }),
                      "data-vibegrations-conn": !0,
                      "data-state": u,
                      className: lW.XF,
                      children: lH(u),
                  }),
        ],
    });
}
var lQ = l(22231),
    lK = l(408278),
    lX = l(900797),
    lZ = l(847374),
    lJ = l(477155),
    l0 = l(935286),
    l1 = l(856795),
    l2 = l(424110);
function l3(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eA.D, {
        className: i()(l2.uK, { [l2.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": S.intl.formatToPlainString(d ? E.default.aL1BKQ : E.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: l2.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: l2.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: l2.l8,
                        children: (0, n.jsx)(p.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l2.ed,
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
                      className: l2.rM,
                      children: S.intl.string(E.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function l4(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(l2.Ge, l2.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(l3, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: l2.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: l2.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(lQ.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(l2.Pu, l2.es), children: s }),
                ],
            }),
        ],
    });
}
function l7(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [o, u] = a.useState({}),
        [d, c] = a.useState({}),
        [m, f] = a.useState(0),
        [h, g] = a.useState(null),
        [x, v] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        w = a.useRef(null),
        [N, A] = a.useState(null),
        C = a.useRef(null),
        I = a.useRef(0),
        M = null == l,
        T = t.questions.length,
        R = Math.min(m, T - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        z = d[P.id] ?? "",
        { text: O, phase: q } = (0, l1.Q)(P.question),
        G = O === P.question,
        B = G && D?.id === P.id && D.truncated;
    a.useLayoutEffect(() => {
        if (null == N || F || !G) return;
        function e() {
            if (null == N) return;
            let e = N.scrollHeight > N.clientHeight + 1;
            $((t) => (t?.id === P.id && t.truncated === e ? t : { id: P.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(N), () => t.disconnect());
    }, [G, N, P.id, F]);
    let U = S.intl.string(F ? S.t.iTcuma : S.t.dcl9MQ),
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
                (g({ direction: t, moves: l }), v({ question: P, draft: z, direction: t, moves: l }), k(!0), f(e));
            },
            [z, P],
        ),
        H = a.useCallback(() => {
            let e = w.current,
                t = C.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = w.current,
            t = C.current;
        if (null == e || null == t) return;
        H();
        let l = new ResizeObserver(H);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [H]);
    let Y = h?.moves;
    a.useEffect(() => {
        if (null == Y) return;
        let e = setTimeout(() => v(null), 400),
            t = setTimeout(() => k(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [Y]);
    let Q = a.useCallback(
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
        K = a.useCallback(() => {
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
            let e = z.trim();
            "" !== e && Q({ kind: "custom", text: e });
        }, [z, Q]),
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
        className: i()(l2.$O, { [l2.fI]: J && !et, [l2.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: l2.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: w,
                        className: l2.wx,
                        children: [
                            (0, n.jsx)(p.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(l2.TK, l2.R_, { [l2.TB]: "exit" === q, [l2.JU]: "enter" === q }),
                                children: O,
                            }),
                            B || F
                                ? (0, n.jsx)("div", {
                                      className: l2.Q7,
                                      children: (0, n.jsx)(eP.m, {
                                          text: U,
                                          children: (0, n.jsx)(lK.K, {
                                              icon: F ? lX.t : lZ.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: P.id, expanded: !F }),
                                              "aria-label": U,
                                              "aria-controls": `${P.id}-label`,
                                              "aria-expanded": F,
                                          }),
                                      }),
                                  })
                                : null,
                            null == r
                                ? null
                                : (0, n.jsx)(eA.D, {
                                      className: i()(l2.gb, l2.Q7),
                                      onClick: en,
                                      "aria-label": S.intl.string(E.default.fMdUNR),
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
                        className: l2.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: l2.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: C,
                                    className: l2.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                l3,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: M,
                                                    onPick: (e) => Q({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: l2.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: l2.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(lQ.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tk.y, {
                                                    value: z,
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
                                                    placeholder: S.intl.string(E.default.qifsdL),
                                                    "aria-label": S.intl.formatToPlainString(E.default.XHESTL, {
                                                        question: P.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: l2.Pu,
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
                      className: l2.qr,
                      children: [
                          (0, n.jsx)(p.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: S.intl.formatToPlainString(E.default["7bypa+"], { index: R + 1, total: T }),
                          }),
                          (0, n.jsxs)("div", {
                              className: l2.Np,
                              children: [
                                  (0, n.jsx)(eA.D, {
                                      className: i()(l2.gb, { [l2.yI]: !X }),
                                      onClick: X ? K : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": M,
                                      "aria-label": S.intl.string(E.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, n.jsx)(lJ.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eA.D, {
                                      className: i()(l2.gb, { [l2.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": M,
                                      "aria-label": S.intl.string(E.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(l0.E, {
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
var l6 = l(643278),
    l5 = l(191521),
    l8 = l(405189);
function l9(e) {
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
        [A, C] = a.useState(p);
    (A !== p && (C(p), p ? k(!0) : N(!1)),
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
                                    className: i()(l8.Rk, e8.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(eX.A, {
                                        glyph: (0, n.jsx)(l5.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eA.D, {
                                    className: l8.pZ,
                                    onClick: u,
                                    "aria-label": S.intl.string(E.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(l8.Rk, e8.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(eX.A, {
                                            glyph: (0, n.jsx)(l5.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, n.jsx)(eP.m, {
                                    text: S.intl.string(E.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eA.D, {
                                        className: l8.BO,
                                        onClick: M,
                                        "aria-expanded": p,
                                        "aria-label": S.intl.string(E.default.qCRC6c),
                                        children: (0, n.jsx)(l6.ClipboardListIcon, {
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
                            children: (0, n.jsx)(ts, { todos: r, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var ne = l(366010),
    nt = l(825484),
    nl = l(859703),
    nn = l(738822),
    na = l(291749),
    nr = l(971276),
    ni = l(590202),
    ns = l(710969),
    no = l(792620),
    nu = l(130490),
    nd = l(617986),
    nc = l(363195),
    nm = l(749414);
let nf = !1;
function nh(e) {
    let t,
        l,
        r,
        { open: i } = e,
        s =
            ((t = (0, nu.dN)()),
            (l = (0, F.bG)([nl.A], () => nl.A.isQuestAccessSuspended || null != nl.A.questEnrollmentBlockedUntil, [])),
            (r = (0, F.bG)([nl.A], () => null != nl.A.getQuestPreviewOverride(nn.uF.QUEST_BAR_V2), [])),
            null != t && (0, no.vv)(t)
                ? r
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, nr.s)() || l || (0, ns.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = a.useState(() => nf),
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
        x = (0, F.bG)([nc.A], () => nc.A.getState().theme),
        v = (0, ne.M)(x) ? R.NJ8.DARK : R.NJ8.LIGHT,
        b = null != g ? (0, na.tW)(g, na.fY.GAME_TILE, v).url : null,
        j = null != b && "" !== b ? b : null,
        y = a.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: nn.uF.QUEST_BAR_V2,
                sourceQuestContent: nn.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: ni.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, nd.d5)({ quest: s, ...e })
                : await (0, nd.e0)(s, { ...e, questContentCTA: ni.Cy.ACCEPT_QUEST });
        }, [s]),
        k = a.useCallback(() => {
            ((nf = !0), u(!0));
        }, []);
    return d && null != g
        ? (0, n.jsxs)("aside", {
              className: nm.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != j
                      ? (0, n.jsxs)("div", {
                            className: nm.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("img", { className: nm.Rx, src: j, alt: "" }),
                                (0, n.jsx)("div", { className: nm._e }),
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: nm.iB,
                      children: [
                          null != j ? (0, n.jsx)("img", { className: nm.w1, src: j, alt: "" }) : null,
                          (0, n.jsxs)("div", {
                              className: nm.Ug,
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: S.intl.string(E.default["09LJ+I"]),
                                  }),
                                  (0, n.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: S.intl.format(S.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsxs)(nt.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, n.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: S.intl.string(E.default.egO5fO),
                          }),
                          (0, n.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: S.intl.string(S.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var ng = l(651649),
    nx = l(670455);
let np = "shownVibegrationsFeedbackProjectIds";
var nv = l(783134),
    nb = l(348800);
let nj = [S.intl.string(E.default["E+Q26x"]), S.intl.string(E.default["06/jqP"]), S.intl.string(E.default["3gSfUa"])];
function ny(e) {
    let { projectId: t, restoreState: r } = e,
        i = (0, F.bG)([ej.Ay], () => ej.Ay.getMessages(t), [t]),
        s = (0, F.bG)([c.Ay], () => c.Ay.getConnState(t), [t]),
        o = (0, F.bG)([c.Ay], () => c.Ay.isChatStopped(t), [t]),
        u = (0, F.bG)([ej.Ay], () => ej.Ay.getProjectUsage(t), [t]),
        d = (0, F.bG)([ej.Ay], () => ej.Ay.getThinkingActivity(t), [t]),
        m = (0, F.bG)([ej.Ay], () => ej.Ay.isCompacting(t), [t]),
        h = (0, F.bG)([c.Ay], () => c.Ay.getModelSettings(t), [t]),
        g = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
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
            t = v.current;
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
            () => () =>
                (function (e) {
                    let t = ej.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ej.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tC.w.get(np) ?? []).includes(e) ||
                            ng.A.possiblyShowFeedbackModal(nx.MW.VIBEGRATIONS, () => {
                                let a;
                                ((a = tC.w.get(np) ?? []).includes(e) || tC.w.set(np, [...a, e]),
                                    (0, eV.openModalLazy)(async () => {
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
                                    }));
                            }));
                })(t),
            [t],
        ));
    let N = (0, nv.Q_)(t),
        A = a.useCallback(
            (e, l) => {
                (0, c.dv)(t, e, l);
            },
            [t],
        ),
        C = a.useCallback(
            (e, l) => {
                0 === N.annotations.length
                    ? A(e, l)
                    : (A((0, ev.Mx)({ annotations: N.annotations, metaComment: e, context: N.context }), l),
                      (0, nv.PS)(t));
            },
            [N, A, t],
        ),
        I = a.useCallback(() => (0, c.fu)(t), [t]),
        M = a.useCallback((e) => A(e.implementation_prompt), [A]),
        T = a.useCallback((e) => A(e), [A]),
        R = a.useCallback((e) => (0, c.XZ)(t, e), [t]),
        P = a.useCallback((e) => (0, c.vX)(t, e), [t]),
        _ = a.useCallback((e) => (0, c.Vm)(t, e), [t]),
        L = a.useCallback(() => A(S.intl.string(E.default.Jj8Ftb)), [A]),
        D = r?.status === "restoring",
        $ = "open" === s && !o && !D,
        z = i[i.length - 1],
        O = null != z && "assistant" === z.role && null != z.proposal,
        [q, G] = a.useState(null),
        B = z?.clarification != null && z.clarification.id !== q ? z.clarification : null,
        U = a.useCallback(() => {
            null != B && G(B.id);
        }, [B]),
        V = (0, F.bG)([ej.Ay], () => ej.Ay.hasLoadedHistory(t), [t]),
        W = a.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return nj[e % nj.length];
        }, [t]),
        H = O
            ? S.intl.string(E.default.Jj8Ftb)
            : z?.kind === "plan_implemented"
              ? S.intl.string(E.default["3sTTBu"])
              : V && 0 === i.length
                ? W
                : null,
        Y = a.useMemo(() => {
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                if ("assistant" === t.role && !(0, ej.BL)(t)) return t;
            }
        }, [i]),
        Q = null != Y,
        K = O && $ ? L : void 0,
        [X, Z] = a.useState(null),
        [J, ee] = a.useState(Q);
    (J !== Q && (ee(Q), Q || Z(null)),
        a.useEffect(() => {
            if (!Q) return;
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
        }, [Q, Y?.steps]));
    let et = a.useMemo(() => (null != Y ? (0, ey.b)(Y.steps) : ""), [Y]),
        el = a.useMemo(() => (null != Y ? ((0, eb.lt)(Y.steps) ?? Y.todos) : void 0), [Y]),
        en = Y?.provisionalTodo,
        ea = a.useMemo(() => {
            var e;
            return null != Y ? ((e = Y.steps), td((0, eb.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [Y]);
    return (0, n.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nb.TE,
        children: [
            (0, n.jsx)(nh, { open: null != Y }),
            (0, n.jsx)(l9, {
                onJumpToActivity: k,
                line: et,
                placement: Q && "top" === X ? "top" : null,
                todos: el,
                provisionalTodo: en,
                agents: ea,
            }),
            (0, n.jsxs)("div", {
                className: nb.JX,
                children: [
                    (0, n.jsx)(ep.Ch, {
                        ref: x,
                        onScroll: w,
                        className: j ? nb.N$ : `${nb.N$} ${nb.hB}`,
                        children: (0, n.jsx)(lM, { ref: v, projectId: t, messages: i, onPickIdea: $ ? M : void 0 }),
                    }),
                    (0, n.jsx)("div", {
                        className: nb.NJ,
                        children: (0, n.jsx)(lY, {
                            projectId: t,
                            thinking: Q,
                            restoring: D,
                            thinkingActivity: d,
                            compacting: m,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == B
                        ? null
                        : (0, n.jsx)("div", {
                              className: nb.B5,
                              children: (0, n.jsx)(
                                  l7,
                                  { clarification: B, onSubmit: $ ? T : void 0, onDismiss: U },
                                  B.id,
                              ),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nb.Jx,
                children: [
                    (0, n.jsx)(l9, {
                        onJumpToActivity: k,
                        line: et,
                        placement: Q && "bottom" === X ? "bottom" : null,
                        todos: el,
                        provisionalTodo: en,
                        agents: ea,
                    }),
                    0 === N.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: nb.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(p.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: S.intl.formatToPlainString(E.default.Lkx0Kk, {
                                          count: N.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: S.intl.string(E.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: S.intl.string(E.default.B0YARo),
                                      onClick: () => (0, nv.PS)(t),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(tQ, {
                        projectId: t,
                        canSend: $,
                        stopped: o,
                        running: Q,
                        restoring: D,
                        onSend: C,
                        hasPendingContext: N.annotations.length > 0,
                        onInterrupt: $ ? I : void 0,
                        onUploadFile: P,
                        onDeleteFile: _,
                        onApprove: K,
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
var nk = l(661531),
    nw = l(602853),
    nN = l(517461),
    nA = l(761929),
    nE = l(927506);
function nS(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, nw.r)(nk.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nN.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = a.useState(u ?? 460),
        f = (0, tE.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? f + s : 0);
    }, [f, t, s, r]);
    let h = (0, nA.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nA.R.HORIZONTAL_LEFT,
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
        className: nE.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: nE.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: o, className: nE.kL, style: { width: f }, children: i }),
        ],
    });
}
var nC = l(691540),
    nI = l(857250),
    nM = l(97483),
    nT = l(624479),
    nR = l(92446),
    nP = l(761508),
    n_ = l(540999),
    nL = l(957565);
let nF = [],
    nD = new Map(),
    n$ = new Map(),
    nz = new Map(),
    nO = new Map(),
    nq = new Map(),
    nG = new Map(),
    nB = new Map();
class nU extends F.Ay.Store {
    getStatus(e) {
        return nD.get(e) ?? null;
    }
    getFetchState(e) {
        return n$.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nO.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return nG.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return nq.get(e) ?? null;
    }
    getModelCalls(e) {
        return nB.get(e) ?? nF;
    }
    getForceCompactionState(e) {
        return nz.get(e) ?? "idle";
    }
}
let nV = new nU(tI.h, {
    LOGOUT: function () {
        if (
            0 === nD.size &&
            0 === n$.size &&
            0 === nz.size &&
            0 === nO.size &&
            0 === nq.size &&
            0 === nG.size &&
            0 === nB.size
        )
            return !1;
        (nD.clear(), n$.clear(), nz.clear(), nO.clear(), nq.clear(), nG.clear(), nB.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        n$.set(t, "loading");
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
        let a = "loading" === n$.get(t);
        if ((a && n$.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? n$.set(t, "failed") : (nD.set(t, l), n$.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nO.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        nq.set(e.projectId, {
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
        let t = nB.get(e.projectId);
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
        nB.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, t$.aM)(l.total)) return !1;
        nG.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (nD.delete(t), n$.delete(t), nz.delete(t), nO.delete(t), nq.delete(t), nG.delete(t), nB.delete(t));
    },
});
var nW = l(972786);
function nH(e) {
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
function nK(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function nX(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function nZ(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function nJ(e) {
    return S.intl.string("preview" === e ? E.default["+m8XM6"] : E.default.kiOVnt);
}
let n0 = ["all", "preview", "stable", "web"],
    n1 = new Set(["error", "aborted", "length"]);
function n2(e) {
    switch (e.reason) {
        case "local":
            return S.intl.string(E.default.M7Vn6y);
        case "unconfigured":
            return S.intl.string(E.default.QirpMl);
        case "unauthorized":
            return S.intl.string(E.default.QZ1e4l);
        default:
            return null != e.detail
                ? S.intl.formatToPlainString(E.default.zUTHf7, { detail: e.detail })
                : S.intl.string(E.default.WIAQes);
    }
}
function n3(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : S.intl.formatToPlainString(E.default.SBkDIZ, {
              p50: nH(e.memory_p50_bytes ?? 0),
              p999: nH(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let n4 = {
    db: () => E.default.r6cciE,
    db_preview: () => E.default.JmIyL8,
    runtime: () => E.default.bzNyv8,
    runtime_preview: () => E.default["LONZ/8"],
    bot: () => E.default.jdpw3A,
    bot_preview: () => E.default["/g6wUz"],
};
var n7 = l(69985);
function n6(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: n7.KE,
        children: [
            (0, n.jsx)("div", {
                className: n7.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: S.intl.string(E.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(p.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: S.intl.formatToPlainString(E.default["4NpaEk"], { time: nX(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(f.$, { variant: "secondary", size: "sm", text: S.intl.string(E.default.aw0IJm), onClick: a }),
        ],
    });
}
function n5(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: n7.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(p.E, { variant: "text-xs/semibold", color: "text-muted", className: n7.Gf, children: t }),
            l,
        ],
    });
}
function n8(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: n7.N8,
        children: [
            (0, n.jsxs)("div", {
                className: n7.x7,
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
function n9(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: n7.N8,
        children: [
            (0, n.jsxs)("div", {
                className: n7.x7,
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
                className: n7.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? n7.aV : n7.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function ae(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(n8, {
            label: S.intl.string(E.default.H6PMwW),
            value: S.intl.string(E.default.TLOZ8J),
            hint: n2(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(n8, {
            label: S.intl.string(E.default.H6PMwW),
            value: "\u2014",
            hint: S.intl.string(E.default.uAzxdh),
        });
    let a = n3(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(n8, { label: S.intl.string(E.default.awAqRi), value: nY(l.cpu_ms) }),
            null != a && (0, n.jsx)(n8, { label: S.intl.string(E.default.WdGviA), value: a }),
        ],
    });
}
function at(e) {
    let { analytics: t } = e,
        l = S.intl.string(E.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(n5, {
            title: l,
            children: (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: n2(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? n4[t] : null) ? S.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(n5, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(p.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: S.intl.string(E.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          n8,
                          {
                              label: l,
                              value: S.intl.formatToPlainString(E.default.AnRynJ, { cpu: nY(t.cpu_ms) }),
                              hint: n3(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var al = l(522652);
let an = [];
function aa(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && n1.has(l.stopReason)),
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
        className: al.p5,
        children: [
            (0, n.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: al.Q5,
                children: nK(l.observedAt),
            }),
            (0, n.jsxs)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: al.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, n.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: r ? "text-feedback-critical" : "text-muted",
                children: a,
            }),
        ],
    });
}
function ar(e, t) {
    return (0, n.jsx)(n8, {
        label: e,
        value: S.intl.formatToPlainString(E.default.U98VaN, { count: nQ((0, t$.aM)(t)) }),
        hint: `${nQ(t.input_tokens)} in \xb7 ${nQ(t.output_tokens)} out \xb7 ${nQ(t.cache_read_input_tokens)} cache read`,
    });
}
function ai(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, F.bG)([nV], () => nV.getLastTurnUsage(t), [t]),
        u = (0, F.bG)([nV], () => nV.getLastCompaction(t), [t]),
        d = (0, F.bG)([nV], () => nV.getLastCompactionDecline(t), [t]),
        m = (0, F.bG)([nV], () => nV.getForceCompactionState(t), [t]),
        h = a.useCallback(() => (0, c.Lj)(t), [t]),
        g = a.useCallback(() => (0, c.Lj)(t, !0), [t]),
        x = (0, F.bG)([nV], () => (s ? an : nV.getModelCalls(t)), [t, s]),
        v = l?.agent?.lifetime ?? null,
        b = l?.agent?.limits ?? null,
        j = l?.agent?.session ?? null,
        y = u?.promptCeiling ?? b?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: al.Mf,
        children: [
            (0, n.jsx)(n6, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(n5, {
                title: S.intl.string(E.default.IYpHtT),
                children:
                    null == v
                        ? (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: S.intl.string(E.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(n8, {
                                      label: S.intl.string(E.default["8MSJDH"]),
                                      value: nQ((0, t$.a7)(v.cost_usd)),
                                      hint: S.intl.formatToPlainString(E.default["6Z2KhK"], { count: nQ(v.turns) }),
                                  }),
                                  ar(S.intl.string(E.default.hk4jJr), v.orchestrator),
                                  ar(S.intl.string(E.default.R9aduM), v.codegen),
                                  ar(S.intl.string(E.default.Tj6b30), (0, t$.wU)(v.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(n8, {
                                          label: S.intl.string(E.default.Q2OlgI),
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
            (0, n.jsx)(n5, {
                title: S.intl.string(E.default.lo4mY6),
                children:
                    null == o
                        ? (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: S.intl.string(E.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  ar(S.intl.string(E.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(n8, {
                                      label: S.intl.string(E.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, t$.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(n5, {
                title: S.intl.string(E.default.mn8279),
                children: [
                    null != u && null != y
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(n9, {
                                      label: S.intl.string(E.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: nQ,
                                  }),
                                  (0, n.jsx)(n8, {
                                      label: S.intl.string(E.default.ntZb8d),
                                      value: `${nQ(u.tokensBefore)} \u{2192} ${nQ(u.tokensAfter)}`,
                                      hint: S.intl.formatToPlainString(E.default.jA05ru, {
                                          count: nQ(u.retainedMessages),
                                          time: nX(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? S.intl.formatToPlainString(E.default.LKGmsP, { ceiling: nQ(y) })
                                      : S.intl.string(E.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(n8, {
                            label: S.intl.string(E.default["se+2ls"]),
                            value: `${nQ(d.projected)} / ${nQ(d.threshold)}`,
                            critical: !0,
                            hint: S.intl.formatToPlainString(E.default.KHK44U, { time: nX(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: al.Lj,
                        children: [
                            (0, n.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: S.intl.string(E.default.B0KV7p),
                                disabled: "pending" === m,
                                onClick: h,
                            }),
                            (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof m && "compacted" !== m.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return S.intl.string(E.default.wBng42);
                                    if ("pending" === e) return S.intl.string(E.default["0tgo31"]);
                                    let t = nX(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return S.intl.formatToPlainString(E.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? E.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? E.default.GV4sdd
                                              : E.default["Y+0nUb"];
                                    return S.intl.formatToPlainString(l, {
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
                                            text: S.intl.string(E.default["044+ju"]),
                                            onClick: g,
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: S.intl.string(E.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(n5, {
                    title: S.intl.string(E.default.F5eP7e),
                    children:
                        0 === x.length
                            ? (0, n.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: S.intl.string(E.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      x
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(aa, { call: e }, e.id)),
                                      x.length > 30 &&
                                          (0, n.jsx)(p.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: S.intl.formatToPlainString(E.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: x.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != j || l?.analytics != null) &&
                (0, n.jsxs)(n5, {
                    title: S.intl.string(E.default.ZRxAPD),
                    children: [
                        null != j &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(n8, {
                                        label: S.intl.string(E.default["wt5X/o"]),
                                        value: nX(j.instance_since),
                                        hint: S.intl.string(E.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(n8, { label: S.intl.string(E.default["4lgurx"]), value: nQ(j.sockets) }),
                                    (0, n.jsx)(n8, {
                                        label: S.intl.string(E.default["a/LXBt"]),
                                        value: j.turn_inflight
                                            ? S.intl.string(E.default["9KlveJ"])
                                            : S.intl.string(E.default["4tYZVa"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, n.jsx)(n8, {
                                            label: S.intl.string(E.default["/hOBkc"]),
                                            value: nQ(j.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(ae, { analytics: l.analytics }),
                    ],
                }),
            null != b &&
                (0, n.jsxs)(n5, {
                    title: S.intl.string(E.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(n8, { label: S.intl.string(E.default["5iHZLk"]), value: nQ(b.max_iterations) }),
                        (0, n.jsx)(n8, {
                            label: S.intl.string(E.default.Rb6m3E),
                            value: nQ(b.max_subagent_iterations),
                        }),
                        (0, n.jsx)(n8, {
                            label: S.intl.string(E.default.WQ9pMe),
                            value: S.intl.formatToPlainString(E.default.U98VaN, { count: nQ(b.context_window_tokens) }),
                        }),
                        (0, n.jsx)(n8, {
                            label: S.intl.string(E.default.iEAvzu),
                            value: S.intl.formatToPlainString(E.default.U98VaN, {
                                count: nQ(b.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(n8, {
                            label: S.intl.string(E.default["jbhs+f"]),
                            value: nQ(b.max_user_message_chars),
                        }),
                        (0, n.jsx)(n8, { label: S.intl.string(E.default.TOQnq4), value: nQ(b.max_build_attempts) }),
                        (0, n.jsx)(n8, { label: S.intl.string(E.default.RIDc6D), value: nQ(b.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var as = l(320448),
    ao = l(629584),
    au = l(683438),
    ad = l(849363);
function ac(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: ad.ut,
              children: (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: S.intl.string(E.default.TV42NS),
              }),
          });
}
function am(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: ad.qf,
              children: [
                  (0, n.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: S.intl.string(E.default.TV42NS),
                  }),
                  (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: S.intl.string(E.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: ad.qf,
              children: [
                  (0, n.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function af(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: ad.ps,
              children: (0, n.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: S.intl.string(E.default["U/qDX9"]),
              }),
          })
        : null;
}
var ah = l(417397);
let ag = a.memo(function (e) {
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
        className: ah.vK,
        children: [
            (0, n.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ah.Mt,
                selectable: !0,
                children: nK(l.ts),
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
                className: ah.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: ah.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(p.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: ah.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(p.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: ah.Cq,
                            title: l.build ?? void 0,
                            children: S.intl.string(E.default.GO6JcR),
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
                                      className: ah.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": o,
                                      "aria-label": S.intl.string(E.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(lZ.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(as._, {
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
                                                  S.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? E.default.lXkB6Z : E.default.wkbYxG,
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
                                          className: ah.dF,
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
function ax(e) {
    let { projectId: t } = e,
        l = (0, F.bG)([nW.Ay], () => nW.Ay.getLogs(t), [t]),
        r = (0, F.bG)([nW.Ay], () => nW.Ay.getHistoryState(t, "logs")),
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
                n0.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return nJ(e);
                            case "web":
                                return S.intl.string(E.default.J2TPCe);
                            default:
                                return S.intl.string(E.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: ah.$F,
        children: [
            (0, n.jsxs)("div", {
                className: ah.y4,
                children: [
                    (0, n.jsx)(ao.I, {
                        look: "pill",
                        "aria-label": S.intl.string(E.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: ah.KT,
                        children: (0, n.jsx)(au.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: S.intl.string(E.default["MX4vr/"]),
                            "aria-label": S.intl.string(E.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(ac, { state: r }),
            (0, n.jsxs)(ep.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: ah.sx,
                children: [
                    (0, n.jsx)(af, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(am, {
                              state: r,
                              emptyTitle: S.intl.string(E.default.mcFyYc),
                              emptyBody: S.intl.string(E.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: S.intl.string(E.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(ag, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function ap(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(n5, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(p.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: S.intl.string(E.default.W4hcKL),
                      }),
        })
    );
}
function av(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(n8, {
                      label: S.intl.formatToPlainString(E.default.f8ix3w, { env: nJ(l) }),
                      value: ((t = a.connected), S.intl.string(t ? E.default["9KlveJ"] : E.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(n8, {
                      label: S.intl.string(E.default["0AB7l3"]),
                      value: nQ(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${nX(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(n8, { label: S.intl.string(E.default.ElaQ0A), value: nQ(a.guild_count) }),
                  (0, n.jsx)(n8, {
                      label: S.intl.string(E.default.SJtBTN),
                      value: nQ(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? S.intl.formatToPlainString(E.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: nX(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(n8, {
                          label: S.intl.string(E.default.N4l504),
                          value: nQ(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(n8, { label: nJ(l), value: S.intl.string(E.default.C6xjtD) });
}
function ab(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(n8, {
        label: nJ(t),
        value: S.intl.formatToPlainString(E.default.Yur5Zm, { requests: nQ(l.requests), failures: nQ(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? S.intl.formatToPlainString(E.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: nX(l.last_failure.at),
                  })
                : S.intl.formatToPlainString(E.default["1PdrB1"], { time: nX(l.since) }),
    });
}
function aj(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(n8, {
                label: S.intl.formatToPlainString(E.default.BVORfc, { env: nJ(t) }),
                value: nQ(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    n8,
                    {
                        label: S.intl.formatToPlainString(E.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? S.intl.formatToPlainString(E.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? S.intl.formatToPlainString(E.default["7ecbr3"], { time: nX(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ay(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(n8, {
        label: nJ(t),
        value: S.intl.formatToPlainString(E.default.voXL2a, { calls: nQ(l.calls), errors: nQ(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function ak(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(n5, {
            title: t,
            children: (0, n.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: S.intl.string(E.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(n5, {
        title: t,
        children: [
            (0, n.jsx)(n8, {
                label: S.intl.string(E.default.KOnL3g),
                value: nQ(l.requests),
                hint: S.intl.formatToPlainString(E.default["1PdrB1"], { time: nX(l.since) }),
            }),
            (0, n.jsx)(n8, { label: S.intl.string(E.default.CjPhyY), value: nQ(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(n9, {
                              label: S.intl.string(E.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: nY,
                          }),
                          (0, n.jsx)(n8, {
                              label: S.intl.string(E.default["+rYPHD"]),
                              value: nY(r),
                              hint: S.intl.formatToPlainString(E.default["+LxC7W"], {
                                  total: nY(l.cpu_ms_total),
                                  wall: nY(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(n8, {
                      label: S.intl.string(E.default["V/nNbs"]),
                      value: S.intl.string(E.default.YKWIxp),
                      hint: S.intl.string(E.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(n8, { label: S.intl.string(E.default.ueEMPa), value: nY(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(n8, { label: S.intl.string(E.default.vM2krr), value: nQ(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(n8, {
                label: S.intl.string(E.default.g1O88C),
                value: nQ(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: S.intl.formatToPlainString(E.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(n8, { label: S.intl.string(E.default.JUZs7g), value: nZ(l.build) }),
        ],
    });
}
function aw(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: S.intl.string(E.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: S.intl.string(E.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: S.intl.string(E.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(n5, {
        title: S.intl.string(E.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(n8, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(n8, {
                                  label: S.intl.formatToPlainString(E.default["9TpIQg"], { env: l }),
                                  value: nH(r.r2_bytes),
                                  hint: S.intl.formatToPlainString(
                                      r.r2_truncated ? E.default.o45MMA : E.default.S7o3vV,
                                      { count: nQ(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(n9, {
                                      label: S.intl.formatToPlainString(E.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: nH,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aN(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: al.Mf,
        children: [
            (0, n.jsx)(n6, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(ak, {
                            title: S.intl.string(E.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(ak, {
                            title: S.intl.string(E.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aw, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(ap, {
                                title: S.intl.string(E.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(av, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(ap, {
                                title: S.intl.string(E.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ab, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(ap, {
                                title: S.intl.string(E.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aj, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(ap, {
                                title: S.intl.string(E.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ay, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(at, { analytics: t.analytics }),
                        (0, n.jsxs)(n5, {
                            title: S.intl.string(E.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(n8, {
                                    label: S.intl.string(E.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? nZ(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(n8, {
                                    label: S.intl.string(E.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? nZ(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function aA(e, t) {
    return String(e).padStart(t, "0");
}
function aE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aA(n.getHours(), 2)}:${aA(n.getMinutes(), 2)}:${aA(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aA(n.getMilliseconds(), 3)}` : a;
}
var aS = l(977129);
let aC = new Map(),
    aI = new Map(),
    aM = 0,
    aT = 0;
async function aR(e, t, l) {
    let n = aM,
        a = aC.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aT) return { status: "forbidden" };
    let r = aI.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aS.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((aT = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aM) return { status: "failed" };
            var l = o.rich;
            for (aC.set(t, l); aC.size > 100;) {
                let e = aC.keys().next();
                if (!0 === e.done) break;
                aC.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    aI.set(t, i);
    let s = await i;
    return (aI.get(t) === i && aI.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function aP() {
    ((aM += 1), aC.clear(), aI.clear(), (aT = 0));
}
function a_(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aL(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function aF(e) {
    switch (e) {
        case "subagent":
            return S.intl.string(E.default["EoY7D+"]);
        case "context":
            return S.intl.string(E.default.KVFrD3);
        case "tool":
            return S.intl.string(E.default["/N6ZU9"]);
        case "delegated":
            return S.intl.string(E.default.HcEbf2);
        default:
            return S.intl.string(E.default.AhOqQs);
    }
}
function aD(e) {
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
let a$ = ["model", "tool", "subagent", "delegated", "context"];
function az(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(aD(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function aO(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aq = ["arguments", "result", "usage", "diagnostics"];
var aG = l(40715);
let aB = { started: aG.Vf, ok: aG.mo, error: aG.Sr };
function aU(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${aG.Om} ${aB[t] ?? aG.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return S.intl.string(E.default.HpKDyl);
                case "error":
                    return S.intl.string(E.default["5T4Dd0"]);
                default:
                    return S.intl.string(E.default.VbEmf0);
            }
        })(t),
    });
}
let aV = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function aW(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: aG.wV,
        children: [
            (0, n.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", className: aG.D6, children: t }),
            (0, n.jsx)("div", { className: aG.zL, children: l }),
        ],
    });
}
function aH(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(aW, {
        label: t,
        value: (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function aY(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: aG.WA, children: t });
}
function aQ(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: aG.xd,
        children: [
            (0, n.jsx)(p.E, {
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
function aK(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: aG.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: aG.p8,
                children: [
                    (0, n.jsx)(as._, { className: aG.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(p.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: aG.bG, children: l }),
        ],
    });
}
function aX(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(aW, {
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
            ? S.intl.formatToPlainString(E.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? S.intl.formatToPlainString(E.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(aW, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: aG.Kv,
            children: [
                (0, n.jsx)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return S.intl.string(E.default.xO6bcQ);
                            case "content":
                                return S.intl.string(E.default.gpBZRr);
                            default:
                                return S.intl.string(E.default.OZvPXt);
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
function aZ(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: aG.QR,
                      children: (0, n.jsx)(p.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: aG.uh,
                          children: S.intl.string(E.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          aW,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: aG.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: aG.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: S.intl.string(E.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? S.intl.string(E.default["1kBG9Z"])
                                                        : S.intl.formatToPlainString(E.default.VGSwo4, {
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
function aJ(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : S.intl.string(
                      "loading" === t.status
                          ? E.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? E.default.jEQTot
                            : E.default.fj5wM8,
                  );
    return null == l
        ? null
        : (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-subtle", className: aG.E7, children: l });
}
function a0(e) {
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
                aq.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aC.get(t)) return;
                    let l = new AbortController();
                    return (
                        aR(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aC.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = aE(l.startedAt, "millis"),
        f = aD(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ep.Ch, {
        className: aG._0,
        onKeyDown: h,
        role: "region",
        "aria-label": S.intl.formatToPlainString(E.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: aG.sy,
                children: (0, n.jsxs)("div", {
                    className: aG.HI,
                    children: [
                        (0, n.jsx)(aU, { status: l.status }),
                        (0, n.jsx)(p.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${aG.PY} ${aV[f]}`,
                            children: aF(f),
                        }),
                        (0, n.jsx)(p.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: aG.kc,
                            children: c,
                        }),
                        (0, n.jsx)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: aG.l5,
                            children: null == l.durationMs ? S.intl.string(E.default.HpKDyl) : a_(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aG.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(aQ, {
                      title: S.intl.string(E.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(aX, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(aZ, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(aJ, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(aQ, {
                      title: S.intl.string(E.default.KXrf5F),
                      children: [
                          (0, n.jsx)(aH, {
                              label: S.intl.string(E.default["2Aii2k"]),
                              value: S.intl.formatToPlainString(E.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(aH, {
                                    label: S.intl.string(E.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(aW, {
                                    label: S.intl.string(E.default["UV2R1/"]),
                                    value: (0, n.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: S.intl.string(E.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(aZ, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(aQ, {
                      title: S.intl.string(E.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(aY, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(aH, {
                                            label: S.intl.string(E.default.Ran4BY),
                                            value: S.intl.formatToPlainString(E.default["PYO+Jv"], {
                                                tokens: aL(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(aH, {
                                            label: S.intl.string(E.default.vPIcyv),
                                            value: S.intl.formatToPlainString(E.default.Qy2iTq, {
                                                system: aL(l.systemTokens),
                                                tools: aL(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: aL(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(aH, {
                                            label: S.intl.string(E.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(aH, {
                                            label: S.intl.string(E.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(aH, {
                                            label: S.intl.string(E.default.VyAl6j),
                                            value: S.intl.formatToPlainString(E.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(aH, {
                                            label: S.intl.string(E.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: aG.E7,
                              children: S.intl.string(E.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: aG.E7,
                      children: S.intl.string(E.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(aK, {
                      title: S.intl.string(E.default.T7SFyZ),
                      children: (0, n.jsxs)(aY, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(aW, {
                                        label: S.intl.string(E.default.NnBqcd),
                                        value: (0, n.jsx)(eA.D, {
                                            tag: "div",
                                            className: aG.mi,
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
                                  : (0, n.jsx)(aH, {
                                        label: S.intl.string(E.default.fI6mzD),
                                        value: S.intl.formatToPlainString(E.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(aH, { label: S.intl.string(E.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(aH, { label: S.intl.string(E.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, n.jsx)(aH, { label: S.intl.string(E.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(aH, { label: S.intl.string(E.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: aG.Hm,
                                                children: S.intl.string(E.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    aH,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? S.intl.formatToPlainString(E.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : S.intl.formatToPlainString(E.default["/L6GFe"], {
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
                className: aG.E7,
                children: S.intl.string(E.default.khAjR0),
            }),
        ],
    });
}
let a1 = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function a2(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = aD(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return a$.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
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
                                            className: `${aG.dL} ${a1[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: aG.z4,
                role: "group",
                "aria-label": S.intl.string(E.default.UZ1OlR),
                children: a$.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: aG.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${aG.A9} ${a1[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: aF(e) }),
                                (0, n.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: S.intl.formatToPlainString(E.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: S.intl.formatToPlainString(E.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(p.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: a_(a),
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
let a3 = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function a4(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = aD(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? S.intl.formatToPlainString(E.default["PYO+Jv"], { tokens: aL(t.promptTokens) })
                : null != t.durationMs
                  ? a_(t.durationMs)
                  : null;
    return (0, n.jsxs)(eA.D, {
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
                    (0, n.jsx)(aU, { status: t.status }),
                    (0, n.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${aG.PY} ${a3[o]}`,
                        children: aF(o),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: aG.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: aG.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aG.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aG.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function a7(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, F.yK)([nW.Ay], () => nW.Ay.getTrace(l), [l]),
        s = (0, F.bG)([nW.Ay], () => nW.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => aP, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [m, f] = a.useState(!1),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, tE.clamp)((e / t) * 100, 25, 75);
        }, []),
        w = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, tE.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, nA.A)({
            resizableDomNodeRef: g,
            orientation: nA.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, tE.clamp)(e + t, 25, 75)));
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
        R = aO(M, o),
        P = R?.kind === "tool" ? aO(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = M[M.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, o]);
    let D = a.useCallback(
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
              children: (0, n.jsx)(am, {
                  state: s,
                  emptyTitle: S.intl.string(E.default.Iyt8OJ),
                  emptyBody: S.intl.string(E.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${aG.uP} ${m ? aG.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: aG.DK,
                      children: [
                          (0, n.jsx)(a2, { entries: i }),
                          (0, n.jsx)(ac, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: aG.Ie,
                                    children: (0, n.jsx)(p.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: S.intl.string(E.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ep.Ch, {
                                    ref: x,
                                    className: aG.Ns,
                                    children: [
                                        (0, n.jsx)(af, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: v,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": S.intl.string(E.default["QATZ+A"]),
                                            className: aG.p_,
                                            children: T.map((e) => {
                                                let t = aE(e.startedAt),
                                                    l = S.intl.formatToPlainString(E.default["Y/j+TD"], {
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
                                                                              children: a_(e.spanMs),
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
                  null == R
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": S.intl.string(E.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: aG.b1,
                                    onPointerDown: A,
                                    onKeyDown: C,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: aG.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(a0, {
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
var a6 = l(365199),
    a5 = l(402879);
function a8(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, F.yK)([nW.Ay], () => nW.Ay.getTrace(t), [t]),
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
            (0, a5.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: aG.ED,
                children: (0, n.jsx)(au.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: S.intl.string(E.default.NfncNw),
                    "aria-label": S.intl.string(E.default.NfncNw),
                }),
            }),
            (0, n.jsx)(tp.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tp.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tv.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": S.intl.string(S.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(tb.rX, {
                            children: (0, n.jsx)(tb.Dr, {
                                id: "export",
                                label: S.intl.string(E.default.A3Z3ar),
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
                        icon: a6.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": S.intl.string(S.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var a9 = l(497243);
function re(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [o, d] = a.useState(""),
        m = (0, F.bG)([n_.A], () => n_.A.isDeveloper),
        f = (0, F.bG)([nV], () => nV.getStatus(t), [t]),
        h = (0, F.bG)([nV], () => nV.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, c.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, c.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, nL.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: nV.getStatus(t),
                        last_turn_usage: nV.getLastTurnUsage(t),
                        last_compaction: nV.getLastCompaction(t),
                        last_compaction_decline: nV.getLastCompactionDecline(t),
                        model_calls: nV.getModelCalls(t),
                        logs: nW.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nC.P0)((0, nI.o)(S.intl.string(E.default.sDSDiO), nM.Ck.SUCCESS)),
            );
        }, [t]),
        p = S.intl.string(E.default.KampIf);
    return (0, n.jsxs)("section", {
        className: a9.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(u.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.Ay.Icon, {
                            icon: nT.CopyIcon,
                            tooltip: S.intl.string(E.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(u.Ay.ChannelIcon, { icon: nR.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(u.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: a9.rf,
                children: [
                    (0, n.jsxs)(nP.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": S.intl.string(E.default.uNyR86),
                        className: a9.vR,
                        children: [
                            (0, n.jsx)(nP.V.Item, { id: "logs", children: S.intl.string(E.default["1mpzdJ"]) }),
                            (0, n.jsx)(nP.V.Item, { id: "worker", children: S.intl.string(E.default.whGHLD) }),
                            (0, n.jsx)(nP.V.Item, { id: "agent", children: S.intl.string(E.default.cK3AvL) }),
                            m
                                ? (0, n.jsx)(nP.V.Item, { id: "trace", children: S.intl.string(E.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(ax, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aN, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === r && m
                            ? (0, n.jsxs)("div", {
                                  className: a9.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: a9.XH,
                                          children: (0, n.jsx)(a8, { projectId: t, query: o, onQueryChange: d }),
                                      }),
                                      (0, n.jsx)(a7, { projectId: t, query: o }),
                                  ],
                              })
                            : (0, n.jsx)(ai, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: m }),
                ],
            }),
        ],
    });
}
var rt = l(333007),
    rl = l(621466),
    rn = l(103557),
    ra = l(97808),
    rr = l(778712),
    ri = l(365912),
    rs = l(775121),
    ro = l(486020),
    ru = l(277437);
function rd(e) {
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
        { drafts: g, addFiles: x, removeDraft: p, settled: v, takeRefs: b } = tB({ onUploadFile: f, onDeleteFile: h }),
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
        [C, I] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = A.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = C?.height ?? 44,
        T = l.left + 8,
        R = l.top + 8,
        P = Math.max(t.x, T),
        _ = Math.min(Math.max(t.y + 32 + 4, R), Math.max(R, l.top + l.height - M - 8));
    return (0, n.jsxs)("div", {
        ref: A,
        className: i()(ru.M0, { [ru.ho]: w && !m, [ru.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: ru.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(eP.m, {
                position: "bottom",
                text: S.intl.string(E.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: ru.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": S.intl.string(E.default.d6Rqlu),
                    children: (0, n.jsx)(tx.H, { size: "custom", color: "currentColor", className: ru.WW }),
                }),
            }),
            (0, n.jsx)(tk.y, {
                autoFocus: !0,
                rows: 1,
                className: ru.hF,
                value: s,
                placeholder: "" === r ? S.intl.string(E.default.FK09JH) : `Edit ${r}`,
                "aria-label": S.intl.string(E.default["qR+sGX"]),
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
                      className: ru.ZO,
                      children: g.map((e) => (0, n.jsx)(tU, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rc = l(320510),
    rm = l(940107);
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
var rh = l(42843);
let rg = { x: 25, y: 21 };
function rx(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rp(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rv(e, t, l, n) {
    let a = rp(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rb(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rj(e) {
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
function ry(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        o = null != l && l === r ? t : null,
        { active: u, annotations: d } = (0, nv.Q_)(o),
        m = (0, lV.o4)(o),
        h = (0, eV.useHasAnyModalOpen)(),
        g = (0, F.bG)([ea.default], () => ea.default.getCurrentUser()),
        x = g?.id ?? null,
        [v, b] = a.useState(null),
        [j, y] = a.useState(null),
        [k, w] = a.useState(!1),
        [N, A] = a.useState(!1),
        [C, I] = a.useState(null),
        [M, T] = a.useState(!1),
        R = a.useRef(null),
        P = a.useRef(null),
        _ = a.useRef(null),
        [L, D] = a.useState(null),
        [$, z] = a.useState(!1),
        [O, q] = a.useState(null),
        [G, B] = a.useState(null),
        U = a.useRef(!1),
        [V, W] = a.useState(!1),
        [H, Y] = a.useState(null),
        Q = u && !m && !h;
    (a.useEffect(() => {
        if (!Q) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            b((t) => (rx(t, e) ? t : e));
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [Q, i]),
        a.useEffect(() => {
            if (!Q || null == o) return;
            let e = !0,
                t = i();
            if (null == t) return void A(!0);
            (w(!0), A(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, rc.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let l = "completed" === t.status ? rj(t.response) : null;
                        null == l ? A(!0) : (y(l), (0, nv._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (w(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [Q, i, o]));
    let K = a.useRef(null);
    (a.useEffect(() => {
        if (!Q || null == v || null == o) return;
        if (null == j) {
            K.current = v;
            return;
        }
        if (rx(K.current, v)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            K.current = v;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rc.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !ee.current) return;
                        let l = rj(e.response);
                        null != l && (y(l), (0, nv._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rf(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, nv.fA)(o, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, v, j, d, o, i]),
        a.useEffect(() => {
            if (!Q)
                return () => {
                    (I(null), q(null), Y(null), y(null));
                };
        }, [Q]));
    let X = a.useRef(null),
        Z = a.useRef(null),
        J = a.useRef(!1),
        ee = a.useRef(!1);
    a.useEffect(() => {
        ((ee.current = Q), Q || ((X.current = null), (Z.current = null), (_.current = null), T(!1)));
    }, [Q]);
    let et = a.useCallback(
            function e() {
                if (J.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = i();
                null != l &&
                    ((J.current = !0),
                    (0, rm.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(
                            (e) => {
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
                            },
                            () => ({ status: "failed" }),
                        )
                        .then((t) => {
                            if (((J.current = !1), ee.current)) {
                                if ("picked" !== t.status || rS(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? I(null)
                                        : "unsupported" === t.status && z(!0);
                                else {
                                    let e = (0, ev.ts)(t.target);
                                    (D((t) => (rE(t, e) ? t : e)),
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
            if (null == O) return;
            let e = !U.current;
            (B({ at: O.at, label: O.label, draft: O.draft, instant: e }), W(e), q(null));
        }, [O]);
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
            if (null == G) return;
            let e = setTimeout(() => B(null), rN);
            return () => clearTimeout(e);
        }, [G]));
    let en = null == j || null == v || j.viewport.width < 1 ? 1 : v.width / j.viewport.width,
        er = null != j || N,
        ei = a.useMemo(() => j?.elements ?? [], [j]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: v, scale: en };
    }, [v, en]);
    let eo = a.useCallback((e, t, l) => {
            (Y(null), (U.current = !1), q({ target: e, anchor: t, draft: "", at: l, label: (0, ev.ts)(e) }));
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
                if (null == v || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ed(), T(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > rA || Math.abs(e.clientY - O.at.y) > rA) && (U.current = !0);
                    return;
                }
                if (!er) return void I(null);
                let t = eu(e, v);
                if ($) {
                    let e = (0, ev.jo)(ei, t.x, t.y),
                        l = null != e && rS(e, v, en) ? null : e;
                    if (null != l) {
                        let e = (0, ev.ts)(l);
                        D((t) => (rE(t, e) ? t : e));
                    }
                    I((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Z.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Z.current = l), (X.current = l), et());
            },
            [v, en, er, eu, $, ei, O, H, ed, et],
        ),
        em = a.useCallback(() => {
            (T(!1), I(null), (Z.current = null), (X.current = null));
        }, []);
    a.useEffect(() => {
        if (!Q || !M || !er || $ || null != O || null != H) return;
        let e = _.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Z.current = n), (X.current = n), et());
    }, [Q, M, er, $, O, H, et]);
    let ef = a.useCallback(
            (e) => {
                if (null != O || null != H) {
                    (el(), Y(null));
                    return;
                }
                if (null == C || null == v) return;
                let t = eu(e, v);
                eo(C, (0, ev.ec)(C, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [C, v, eu, O, H, eo, el],
        ),
        eh = a.useCallback(() => {
            null != o && (I(null), (0, nv.PS)(o));
        }, [o]),
        eg = a.useCallback(() => {
            null != o &&
                (null != O
                    ? el()
                    : H?.confirmingRemove === !0
                      ? Y({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? Y(null)
                        : eh());
        }, [o, O, H, el, eh]),
        ex = a.useRef(eg),
        ep = a.useRef(eh);
    a.useLayoutEffect(() => {
        ((ex.current = eg), (ep.current = eh));
    });
    let eb = a.useRef(null);
    a.useEffect(() => {
        if (Q)
            return (
                rs.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rs.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, rl.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, ri.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ep.current();
        }
    }, [Q, s]);
    let ej = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != O || null != H || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == C ? -1 : ei.findIndex((e) => e.ref === C.ref);
                    I(ei[(l + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != C &&
                    (e.preventDefault(),
                    eo(C, ev.F6, { x: (v?.left ?? 0) + C.rect.x * en, y: (v?.top ?? 0) + C.rect.y * en }));
            },
            [o, O, H, ei, C, eo, eg, v, en],
        ),
        ey = a.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    (((0, ev.to)(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, c.dv)(o, (0, ev.v_)(O.target, O.draft), e), el(), I(null)));
            },
            [o, O, el],
        ),
        ek = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, c.vX)(o, e)), [o]),
        ew = a.useCallback((e) => (null == o ? Promise.resolve() : (0, c.Vm)(o, e)), [o]),
        eN = a.useCallback(() => {
            null == o ||
                null == H ||
                null == x ||
                ((0, ev.to)(H.draft) && ((0, nv.dy)(o, x, H.id, H.draft.trim()), Y({ ...H, editing: !1 })));
        }, [o, H, x]),
        eA = a.useCallback(() => {
            null != o && null != H && null != x && ((0, nv.PR)(o, x, H.id), Y(null));
        }, [o, H, x]),
        eE = u
            ? k
                ? S.intl.string(E.default.jQQ8i2)
                : N
                  ? S.intl.string(E.default.zvU2QH)
                  : S.intl.formatToPlainString(E.default.A4HDMU, { count: d.length })
            : "",
        eS = Q && null != v,
        eC = M && null == H,
        eI = null == H ? null : d.find((e) => e.id === H.id),
        eM = O?.target ?? eI?.target ?? null,
        eT = O ?? G,
        eR = O ?? (G?.instant === !0 ? null : G),
        eP =
            null != eI && null != v
                ? (function (e, t) {
                      let { left: l, top: n } = rb(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rv(eI.target, eI.anchor, v, en), v)
                : null;
    return (0, rt.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: rh.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rh.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eE,
                }),
                eS
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rh.MT,
                                  style: { left: v.left, top: v.top, width: v.width, height: v.height },
                                  "data-plain-cursor": eC ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": S.intl.string(E.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ec,
                                  onMouseLeave: em,
                                  onClick: ef,
                                  onKeyDown: ej,
                              }),
                              null != C && null == O && null == H ? (0, n.jsx)(rC, { box: rp(C, v, en) }) : null,
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rh.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rh.xz,
                                      "data-shown": null != C && null == H && null == O ? "" : void 0,
                                      "data-instant": V ? "" : void 0,
                                      children: (0, n.jsxs)(p.E, {
                                          variant: "text-xs/medium",
                                          className: rh.Ux,
                                          children: [
                                              null == L
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rh.Tl, children: L.kind }),
                                              null == L || "" === L.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rh.kh, children: [" ", L.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: P,
                                  className: rh.Y,
                                  children: eC
                                      ? (0, n.jsx)(ld.A, { className: rh.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eR
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rh.aZ,
                                        style: { transform: `translate3d(${eR.at.x + 12}px, ${eR.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rh.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, n.jsxs)(p.E, {
                                                variant: "text-xs/medium",
                                                className: rh.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rh.Tl, children: eR.label.kind }),
                                                    "" === eR.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rh.kh,
                                                              children: [" ", eR.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eM
                                  ? (0, n.jsx)("div", { className: rh.D0, style: rp(eM, v, en), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rv(e.target, e.anchor, v, en),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rh.xL,
                                          style: { ...rb(l, v), width: 24, height: 24 },
                                          "aria-label": S.intl.formatToPlainString(E.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, ev.iw)(e.target),
                                          }),
                                          "aria-expanded": H?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == O && Y(a);
                                          },
                                          onFocus: () => {
                                              null == O && Y(a);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), el(), Y(a));
                                          },
                                          children: (0, n.jsx)(rk, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eT
                                  ? null
                                  : (0, n.jsx)(rd, {
                                        at: { x: eT.at.x + 12, y: eT.at.y + 12 },
                                        bounds: v,
                                        kind: eT.label.kind,
                                        value: eT.draft,
                                        canSubmit: null != O && (0, ev.to)(eT.draft),
                                        onChange: (e) => {
                                            null != O && q({ ...O, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: el,
                                        onUploadFile: ek,
                                        onDeleteFile: ew,
                                        closing: null == O,
                                    }),
                              null != eI && null != H && null != eP
                                  ? (0, n.jsxs)(rw, {
                                        point: eP,
                                        frame: v,
                                        authorId: eI.authorId,
                                        title: (0, ev.iw)(eI.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            H.confirmingRemove ? Y({ ...H, confirmingRemove: !1 }) : Y(null);
                                        },
                                        onMouseLeave: () => {
                                            H.editing || H.confirmingRemove || Y(null);
                                        },
                                        children: [
                                            H.editing
                                                ? (0, n.jsx)(rn.f, {
                                                      autoFocus: !0,
                                                      label: S.intl.string(E.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: H.draft,
                                                      maxLength: ev.gq,
                                                      rows: 3,
                                                      onChange: (e) => Y({ ...H, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eN());
                                                      },
                                                  })
                                                : (0, n.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rh.aC,
                                                      children: eI.comment,
                                                  }),
                                            (0, nv.zz)(eI, x)
                                                ? (0, n.jsx)("div", {
                                                      className: rh.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rh.nv,
                                                                        children: S.intl.string(E.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: S.intl.string(E.default.cLsnYH),
                                                                        onClick: () =>
                                                                            Y({ ...H, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: S.intl.string(E.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eA,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(f.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: S.intl.string(E.default.ncz32j),
                                                                        onClick: () =>
                                                                            Y({
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
                                                                              text: S.intl.string(E.default.wIeFN0),
                                                                              onClick: eN,
                                                                          })
                                                                        : (0, n.jsx)(f.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: S.intl.string(E.default.DKZggU),
                                                                              onClick: () =>
                                                                                  Y({
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
function rk(e) {
    let { authorId: t } = e,
        l = (0, F.bG)([ea.default], () => ea.default.getUser(t), [t]);
    return (0, n.jsx)(ra.eu, {
        src: null == l ? null : ro.Ay.getUserAvatarURL(l),
        size: rr._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rw(e) {
    let t,
        l,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        v = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rg);
    a.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
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
        ref: v,
        className: rh.Nr,
        style: E,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rh.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rh.ip, children: (0, n.jsx)(rk, { authorId: c }) }),
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rh.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rh.zI, children: x }),
        ],
    });
}
let rN = 300,
    rA = 2;
function rE(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rS(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rC(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rh.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rI = l(11055),
    rM = l(533140),
    rT = l(342667);
function rR(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, frameId: s } = e,
        o = (0, lV.o4)(null != l && l === r ? t : null),
        u = (0, eV.useHasAnyModalOpen)(),
        d = (0, rM.V0)(s);
    a.useEffect(() => {
        o && d && null != s && (0, rM.c2)(s);
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
    return (0, rt.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: rT.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: o ? S.intl.string(E.default.dIE9zO) : "",
                }),
                f
                    ? (0, n.jsx)("div", {
                          className: rT.o,
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
var rP = l(314116),
    r_ = l(364522),
    rL = l(237528),
    rF = l(664121),
    rD = l(95477),
    r$ = l(381849),
    rz = l(724401);
function rO(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function rq(e) {
    let t,
        { projectId: l, installScope: r, onClose: i } = e,
        o = "user" === r ? ["stable"] : ["preview", "stable"],
        [d, h] = a.useState(o[0] ?? "stable"),
        [g, x] = a.useState({ status: "loading" }),
        [v, b] = a.useState(""),
        [j, y] = a.useState(""),
        [k, w] = a.useState({ phase: "idle" }),
        N = "busy" === k.phase,
        [A, C] = a.useState(0),
        I = a.useCallback(() => C((e) => e + 1), []);
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
                (0, rP.A)({
                    title: S.intl.string(E.default.S3WHxG),
                    subtitle:
                        1 === o.length
                            ? S.intl.formatToPlainString(E.default["0lt6bH"], { target: e })
                            : S.intl.formatToPlainString(E.default.zVcDfj, {
                                  environment: S.intl.string(
                                      "preview" === d ? E.default["/kYdZe"] : E.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: S.intl.string(E.default.ZlKerR),
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
                                              text: S.intl.string(E.default.kIWqXR),
                                          }),
                                          I())
                                        : "expired" === e.code
                                          ? (w({
                                                phase: "settled",
                                                environment: d,
                                                tone: "danger",
                                                text: S.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                            }),
                                            I())
                                          : "unconfirmed" === e.code
                                            ? (w({
                                                  phase: "settled",
                                                  environment: d,
                                                  tone: "danger",
                                                  text: S.intl.string(E.default["2xSPXh"]),
                                              }),
                                              I())
                                            : w({
                                                  phase: "settled",
                                                  environment: d,
                                                  tone: "danger",
                                                  text: S.intl.string(E.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    w({
                                        phase: "settled",
                                        environment: d,
                                        tone: "danger",
                                        text: S.intl.string(E.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [d, o, I],
        ),
        R = a.useCallback(() => {
            (w({ phase: "busy", environment: d, kind: "create" }),
                (0, c._m)(l, d, v)
                    .then(() => {
                        (b(""),
                            w({
                                phase: "settled",
                                environment: d,
                                tone: "positive",
                                text: S.intl.string(E.default.mfAoFT),
                            }),
                            I());
                    })
                    .catch(() => {
                        w({ phase: "settled", environment: d, tone: "danger", text: S.intl.string(E.default.uhhqP3) });
                    }));
        }, [l, d, v, I]),
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
                ? (0, n.jsx)("div", { className: rz.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === M.status
                  ? (0, n.jsx)("div", {
                        className: rz.E8,
                        role: "alert",
                        children: (0, n.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: S.intl.string(E.default.pwFaXc),
                        }),
                    })
                  : 0 === M.points.length
                    ? (0, n.jsx)("div", {
                          className: rz.E8,
                          children: (0, n.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(E.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(r_.Ip, {
                          className: rz.p_,
                          children: (0, n.jsx)("div", {
                              className: rz.jO,
                              children: M.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, r$.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: r$._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: rz.KW,
                                          children: [
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return S.intl.string(E.default.h4zhWL);
                                                          case "undo":
                                                              return S.intl.string(E.default["c/tNny"]);
                                                          default:
                                                              return S.intl.string(E.default["jViU+0"]);
                                                      }
                                                  })(e.origin),
                                              }),
                                              null != a.relative &&
                                                  (0, n.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: a.absolute ?? void 0,
                                                      children: a.relative,
                                                  }),
                                              e.expired &&
                                                  (0, n.jsx)(rL.v, {
                                                      text: S.intl.string(E.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: rz.AD,
                                                title: S.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: rz.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            eA.D,
                                            {
                                                className: rz.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          T(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, c.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        className: rz.Pf,
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
            className: rz.nd,
            "aria-label": S.intl.string(E.default.FRjicO),
            children: [
                (0, n.jsxs)(u.Ay, {
                    "aria-label": S.intl.string(E.default.FRjicO),
                    toolbar: (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(u.Ay.ChannelIcon, { icon: rF.R, "aria-hidden": !0 }),
                        (0, n.jsx)(u.Ay.Title, { children: S.intl.string(E.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: rz.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: rz.ne,
                            children: [
                                o.length > 1 &&
                                    (0, n.jsxs)(nP.V, {
                                        selectedItem: d,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (h(e), C(0));
                                        },
                                        "aria-label": S.intl.string(E.default.CNvRyJ),
                                        className: rz.vR,
                                        children: [
                                            (0, n.jsx)(nP.V.Item, {
                                                id: "preview",
                                                children: S.intl.string(E.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(nP.V.Item, {
                                                id: "stable",
                                                children: S.intl.string(E.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        S.intl.formatToPlainString(E.default.l07ism, { days: 30 }),
                                        null != P
                                            ? ` ${new Date(P.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === $.kind
                                    ? (0, n.jsxs)("div", {
                                          className: rz.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  children: S.intl.string(E.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === $.kind
                                      ? (0, n.jsx)("div", {
                                            className: rz.lm,
                                            role: "danger" === $.tone ? "alert" : "status",
                                            children: (0, n.jsx)(p.E, {
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
                            className: rz.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: rz.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rz.Fv,
                                            children: (0, n.jsx)(rD.k, {
                                                label: S.intl.string(E.default.hJb78b),
                                                value: v,
                                                onChange: b,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(f.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: S.intl.string(E.default["14UarN"]),
                                            onClick: R,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: rz._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rz.kv,
                                            children: (0, n.jsx)(rD.k, {
                                                label: S.intl.string(E.default.rI7mpv),
                                                type: "datetime-local",
                                                value: j,
                                                min: rO(L),
                                                max: rO(_),
                                                disabled: N || null == P,
                                                onChange: y,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: S.intl.string(E.default["3D/vYN"]),
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
    rB = l(977628);
function rU(e) {
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
                ? (0, n.jsx)("div", { className: rB.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === o.status
                  ? (0, n.jsx)("div", {
                        className: rB.E8,
                        role: "alert",
                        children: (0, n.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: S.intl.string(E.default["mSJn+K"]),
                        }),
                    })
                  : 0 === o.entries.length
                    ? (0, n.jsx)("div", {
                          className: rB.E8,
                          children: (0, n.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(E.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(r_.Ip, {
                          className: rB.p_,
                          children: (0, n.jsx)("div", {
                              className: rB.jO,
                              children: o.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, r$.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: r$._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      eA.D,
                                      {
                                          className: rB.f_,
                                          onClick: () =>
                                              (0, rP.A)({
                                                  title: S.intl.string(E.default.qOUOPE),
                                                  subtitle: S.intl.string(E.default.k2JBj5),
                                                  confirmText: S.intl.string(E.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      (r(), i(e));
                                                  },
                                              }),
                                          children: [
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-md/medium",
                                                  className: rB.bc,
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
            className: rB.nd,
            "aria-label": S.intl.string(E.default.jAWwzi),
            children: [
                (0, n.jsxs)(u.Ay, {
                    "aria-label": S.intl.string(E.default.jAWwzi),
                    toolbar: (0, n.jsx)(u.Ay.Icon, { icon: s.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(u.Ay.ChannelIcon, { icon: rG.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(u.Ay.Title, { children: S.intl.string(E.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: rB.rf, children: t }),
            ],
        })
    );
}
var rV = l(120426),
    rW = l(873727),
    rH = l(147248),
    rY = l(418842),
    rQ = l(885386),
    rK = l(171936),
    rX = l(796036);
function rZ(e) {
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
        let l = (0, F.bG)([nc.A], () => (0, rW.x4)(nc.A.theme)),
            n = (0, F.bG)([rH.A], () => rH.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, F.cf)([tA.Ay], () => ({
                reducedMotion: tA.Ay.useReducedMotion,
                fontScale: (0, rW.U0)(),
                highContrast: tA.Ay.isHighContrastModeEnabled,
                forcedColors: tA.Ay.useForcedColors,
                underlineLinks: tA.Ay.alwaysShowLinkDecorations,
            })),
            d = rQ.hH.useSetting(),
            c = (0, rY.C)(),
            m = a.useRef(!1),
            f = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, rV.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, rW.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rm.W)(n, "set-env", a, {
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
                let l = (0, rV.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, rV.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, rK.mn)(t, () => (0, rV.F)(h, p));
        }, [t, h, p]));
    let v = a.useCallback(() => (0, rV.F)(h, p), [h, p]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(eg.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: g, className: eg.fm, children: m })],
            }),
            f,
            (0, n.jsx)(rR, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                frameId: p,
            }),
            (0, n.jsx)(ry, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                toggleRef: l,
            }),
        ],
    });
}
function rJ(e) {
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
            previewReady: C,
            previewGate: I,
            channelMessages: M,
            availability: T,
            activeMode: R,
            widgetApplicationId: _,
        } = e,
        L = a.useRef(null),
        [F, D] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (m.type === P.U4.MAIN) return ((0, d.HV)(r), () => (0, d.HV)(null));
    }, [r, m.type]),
        a.useEffect(() => {
            null != t && ((0, c.Hc)(t), (0, rX.s)());
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
        z = null != M ? M.open : h,
        O = h || m.type === P.U4.MAIN;
    return (0, n.jsx)("div", {
        ref: L,
        className: eg.LB,
        children: (0, n.jsx)(rZ, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: o,
            surface: m,
            header: f,
            mainClassName: null == f ? void 0 : i()(eg.ez, { [eg.zt]: z }),
            content: (0, n.jsx)(ed, {
                applicationId: r,
                previewApplicationId: o,
                surface: m,
                previewReady: C,
                previewGate: I,
                availability: T,
                activeMode: R,
                widgetApplicationId: _,
            }),
            sidebar:
                null != M
                    ? (0, n.jsx)(nS, {
                          open: M.open,
                          maxWidth: $,
                          onWidthChange: d.Zq,
                          children: M.open
                              ? (0, n.jsx)(ex, { channel: M.channel, guild: M.guild, onClose: M.onClose })
                              : null,
                      })
                    : null != t && O
                      ? (0, n.jsx)(nS, {
                            open: h,
                            maxWidth: $,
                            onWidthChange: d.Zq,
                            children: (0, n.jsx)("div", {
                                className: eg.cO,
                                children: w
                                    ? (0, n.jsx)(re, { projectId: t, onClose: N ?? (() => {}) }, t)
                                    : p
                                      ? (0, n.jsx)(
                                            rU,
                                            { projectId: t, onClose: y ?? (() => {}), onRestore: k ?? (() => {}) },
                                            t,
                                        )
                                      : v
                                        ? (0, n.jsx)(rq, { projectId: t, installScope: j, onClose: b ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(rI.A, { projectId: t }),
                                                  (0, n.jsx)(u.Ay, {
                                                      "aria-label": S.intl.string(S.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              x,
                                                              null == g
                                                                  ? null
                                                                  : (0, n.jsx)(u.Ay.Icon, {
                                                                        icon: s.P,
                                                                        tooltip: S.intl.string(E.default.YdgE0j),
                                                                        onClick: g,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(u.Ay.Title, {
                                                          children: S.intl.string(S.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: eg.cb,
                                                      children: (0, n.jsx)(ny, { projectId: t, restoreState: A }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
