l.d(t, { A: () => il });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(991690),
    u = l(789645),
    o = l(672929),
    d = l(58736),
    c = l(948230),
    m = l(277977),
    f = l(289873),
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
        { frame: r, state: i } = (0, N.A)({ applicationId: t, surface: l }),
        s = (0, _.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = j.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT)) return;
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
        case N.n.Launched:
            return (0, n.jsx)(k.A, { frameId: r.id, level: y.A.WithinAppContent, className: L.Z7 });
        case N.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(R, {
                    title: C.intl.string(S.default["4f6Vkr"]),
                    body: C.intl.string(S.default.LJ2q1H),
                }),
            });
        case N.n.NoApplication:
            return (0, n.jsx)(M, { className: L.qs });
        case N.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(R, {
                    title: C.intl.string(S.default.FHOJiH),
                    body: C.intl.string(S.default["1yLQoV"]),
                }),
            });
        case N.n.Error:
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
        case N.n.AwaitingLaunch:
        case N.n.Loading:
            return (0, n.jsx)("div", { className: L.qs, children: (0, n.jsx)(f.y, {}) });
    }
}
var D = l(17928),
    $ = l(323384),
    O = l(308528),
    q = l(334738),
    z = l(688438),
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
    return (0, n.jsx)("div", { className: W.f, children: (0, n.jsx)(f.y, {}) });
}
function Y(e) {
    let t,
        l,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, h.YY)(r),
        u = i?.bot?.id ?? null,
        o = (0, D.bG)([B.A], () => {
            if (null == u) return null;
            let e = B.A.getDMFromUserId(u);
            return null != e ? B.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        a.useEffect(() => {
            null != t && O.A.preload(P.ME, t);
        }, [t]),
        (l = (0, D.bG)([G.A], () => G.A.isFocused())),
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
        m = null != u && d === u;
    return (a.useEffect(() => {
        if (null == u || null != o) return;
        let e = !1;
        return (
            O.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || c(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, o]),
    s)
        ? (0, n.jsx)(K, {})
        : null == u || m
          ? (0, n.jsx)(H, { message: C.intl.string(S.default.bl4eBc) })
          : null == o
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: W.g,
                  children: (0, n.jsx)(z.A, { channel: o, guild: null, chatInputType: U.oU.SIDEBAR }, o.id),
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
        noPadding: m,
        obscured: f,
    } = (0, X.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, n.jsxs)("section", {
        className: J.Nr,
        "aria-label": t,
        children: [
            (0, n.jsx)("div", {
                className: J.rf,
                children: (0, n.jsx)(Z.A, {
                    obscured: !0 === f,
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
                                className: i()(J.Qs, c ? J.cw : null, m ? J.pN : null),
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
    eu = l(479299),
    eo = l(287809),
    ed = l(58551),
    ec = l(71495);
function em(e) {
    let { applicationId: t } = e,
        l = (0, D.bG)([eo.default], () => eo.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(ef, { applicationId: t, user: l });
}
function ef(e) {
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
        m = (0, o.A)(t, r),
        { isLoading: p } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != m && (0, g.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(f.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: eh.q,
            children: null == s.authorizeProps ? (0, n.jsx)(f.y, {}) : (0, n.jsx)(ee, { ...s.authorizeProps }),
        });
    if (!i) return (0, n.jsx)(M, { className: eh.q });
    if (null == t) return null;
    if (p) return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(f.y, {}) });
    let v = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, x.z3)(d), "aria-label": (0, x.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eh.R,
        ...v,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, n.jsx)(F, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, n.jsx)("div", {
                          className: eh.q,
                          children: (0, n.jsx)(R, {
                              wide: !0,
                              title: C.intl.string(S.default.SGHO9K),
                              body: C.intl.string(S.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(em, { applicationId: c })
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
    eN = l(29692),
    ew = l(903586),
    eA = l(66708),
    eE = l(74029),
    eS = l(783791),
    eC = l(717447),
    eI = l(29080),
    eM = l(46054),
    eT = l(76275);
function eR(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : C.intl.string(S.default.MdXWEK);
}
function eP(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, ew.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, ew.Lf)(t),
        u = s && null != i && i.content.trim() === l.trim(),
        o = !n && "" !== l && !u;
    return {
        streamed: r,
        lastStreamedMessage: i,
        showsClosingMessage: o,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: o, endsOnStreamedMessage: s }),
    };
}
(l(134528), l(947204));
var e_ = l(939249),
    eL = l(478016),
    eF = l(34136);
function eD(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...u } = e;
    return (0, n.jsxs)("section", {
        className: i()(eF.Nr, r),
        ...u,
        children: [
            (0, n.jsxs)("header", {
                className: i()(eF.wx, null != l && eF.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var e$ = l(113757);
function eO(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        u = null == r;
    return (0, n.jsxs)(e_.D, {
        className: i()(e$.nM, { [e$.f1]: u, [e$.CZ]: l }),
        onClick: u ? void 0 : () => r(t),
        "aria-label": C.intl.formatToPlainString(S.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": u,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: e$.jo,
                children: [
                    l
                        ? (0, n.jsx)(eL.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: e$.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: e$.G9,
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
function eq(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(eD, {
        title: C.intl.string(S.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                eO,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var ez = l(435619),
    eU = l(866665),
    eB = l(885574),
    eG = l(430392),
    eV = l(632015),
    eW = l(256905),
    eH = l(824757);
function eK(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: eH.uW,
        children: [
            (0, n.jsxs)("span", {
                className: eH.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eY() {
    return (0, n.jsx)(eU.m, {
        text: C.intl.string(S.default.DXe2dP),
        children: (0, n.jsx)(e_.D, {
            className: eH.bk,
            "aria-label": C.intl.string(S.default.Y6y4nQ),
            children: (0, n.jsx)(eB.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eQ(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(eK, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: eH.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: eH.jw,
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
function eX(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? $.k : eG.RobotIcon;
    return (0, n.jsxs)("span", {
        className: eH.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: eH.L6,
                      children: [
                          (0, n.jsx)(eV.f, {
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
                className: eH.L6,
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
function eZ(e) {
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
                        (0, m.PK)(e, t).then(
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
                            (0, m.n6)(e, t).then(
                                (e) => {
                                    e && 0 === s ? u(1) : i(!0);
                                },
                                () => i(!0),
                            ));
                    }, [e, t, s]),
                }
            );
        })(t, r),
        o = C.intl.string(S.default.FW8UcU),
        d = a.useCallback(() => {
            (0, m.PK)(t, r).then(
                (e) => {
                    (0, eW.R)({
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
        : (0, n.jsx)(eK, {
              label: C.intl.string(S.default["9W8SbY"]),
              info: (0, n.jsx)(eY, {}),
              children: (0, n.jsx)(e_.D, {
                  className: eH.xX,
                  onClick: d,
                  "aria-label": C.intl.string(S.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: o, className: eH.sN, onError: u }) : null,
              }),
          });
}
function eJ(e) {
    let { projectId: t, proposal: l } = e;
    return (0, n.jsx)(eD, {
        title: C.intl.string(S.default["60htw+"]),
        trailing: (0, n.jsx)(eX, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: eH.rf,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(eZ, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(eK, {
                          label: C.intl.string(S.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: eH.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: eH.Aw,
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
                    ? (0, n.jsx)(eK, {
                          label: C.intl.string(C.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: eH.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: eH.uX,
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
                (0, n.jsx)(eQ, { label: C.intl.string(S.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eQ, { label: C.intl.string(S.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var e0 = l(192308),
    e1 = l(479191);
function e2(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, e0.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]);
    return (0, n.jsxs)("article", {
        className: e1.Lo,
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
                className: e1.cS,
                children: r.fields.map((e) =>
                    (0, n.jsx)(
                        "span",
                        {
                            className: e1.$H,
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
                className: e1.sq,
                children: (0, n.jsx)(Q.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: C.intl.string(S.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var e7 = l(408278),
    e6 = l(349735),
    e5 = l(973e3);
function e4(e) {
    let { projectId: t, request: l, onDismiss: a } = e;
    return (0, n.jsx)(e6.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: r, saving: i } = e;
            return (0, n.jsxs)("article", {
                className: e5.Mk,
                children: [
                    (0, n.jsxs)("div", {
                        className: e5.TS,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                tag: "span",
                                children: C.intl.string(S.default.wgDhiQ),
                            }),
                            null == a
                                ? null
                                : (0, n.jsx)(e7.K, {
                                      icon: u.P,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: a,
                                      "aria-label": C.intl.string(S.default["6UTDHm"]),
                                  }),
                        ],
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: null != l.note && "" !== l.note ? l.note : C.intl.string(S.default["V+DBhs"]),
                    }),
                    t,
                    (0, n.jsx)("div", {
                        className: e5.p0,
                        children: (0, n.jsx)(Q.$, {
                            variant: "primary",
                            size: "sm",
                            type: "submit",
                            loading: i,
                            disabled: !r,
                            text: C.intl.string(S.default.Tuz9vw),
                        }),
                    }),
                ],
            });
        },
    });
}
var e3 = l(196582);
let e9 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    e8 = {
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
    te = {
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
function tt(e) {
    return { ...te[e], name: C.intl.string(e8[e]()) };
}
function tl(e) {
    return e9.includes(e) ? tt(e) : void 0;
}
function tn(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % e9.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, e9[(t + l) % e9.length]);
            }),
            n
        );
    })(e))
        t.set(l, tt(n));
    return t;
}
var ta = l(683063),
    tr = l(705754),
    ti = l(883455),
    ts = l(13699);
function tu(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        u = l.task,
        o = "running" === u.status,
        d = (0, ew.SY)(l.steps),
        c = o
            ? null != d
                ? (0, ew.WQ)(d)
                : eR(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(eR(e));
                  switch (e.status) {
                      case "failed":
                          return C.intl.formatToPlainString(S.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return C.intl.formatToPlainString(S.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return C.intl.formatToPlainString(S.default.vuv9bT, {
                                  task: t,
                                  duration: (0, eT.M)(e.durationMs),
                              });
                          return C.intl.formatToPlainString(S.default.KS49RN, { task: t });
                      default:
                          return C.intl.formatToPlainString(S.default.KS49RN, { task: t });
                  }
              })(u),
        m = o ? d : void 0,
        f =
            u.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, n.jsx)("ol", {
                                    className: ts.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            ti.A,
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
                                      className: ts.iq,
                                      children: (0, n.jsx)(tr.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(e3.A, {
        glyph: (0, n.jsx)(ta.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: eR(u),
            position: "left",
            children: (0, n.jsx)("span", {
                className: ts.nC,
                children: (0, n.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: o,
        settled: !o,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
l(321073);
var to = l(140735),
    td = l(329456);
let tc = [];
function tm(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(td.xL, { [td.Vb]: "in_progress" === t, [td.cT]: "completed" === t }),
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
            (0, n.jsx)(f.y, {
                type: f.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: td.Qd,
                itemClassName: td.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: td.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: td.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tf(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tc), [l, t]),
        i = a.useMemo(() => new Set(r.map((e) => e.key)), [r]),
        s = r.map((e) => e.key).join("\0"),
        [u, o] = a.useState(r),
        [d, c] = a.useState(s),
        [m, f] = a.useState(!1);
    d !== s && (c(s), o([...r, ...u.filter((e) => !i.has(e.key))]), 0 === r.length && f(!1));
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
                    e = requestAnimationFrame(() => f(!0));
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
        className: td.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    ta.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: td.MA,
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
                      className: td.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function th(e) {
    let t,
        { todos: l, provisional: r, agents: s } = e,
        u = (function (e) {
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
        o =
            ((t = (s ?? tc).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tc) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: td.p_,
        children: [
            l.map((e) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: i()(td.AS, { [td.J1]: "completed" === e.status }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tm, { status: e.status }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: td.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", { className: td.Qq, children: e.text }),
                            }),
                            (0, n.jsx)(tf, { agents: o.get(e.id) ?? tc, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != r
                ? (0, n.jsxs)("li", {
                      className: td.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tm, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: td.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: td.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tg(e) {
    let { todos: t, provisional: l, agents: a, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, n.jsxs)(eD, {
              title: C.intl.string(S.default.qCRC6c),
              trailing: (0, n.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: C.intl.formatToPlainString(S.default.bQvqly, { completed: i, total: s }),
              }),
              className: td.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, n.jsx)(to.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: C.intl.formatToPlainString(S.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, n.jsx)("div", {
                      className: td.rf,
                      children: (0, n.jsx)(th, { todos: t, provisional: l, agents: a }),
                  }),
              ],
          });
}
var tx = l(229775),
    tp = l(165648);
function tv(e) {
    let t = tn(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tl(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: eR(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tb(e) {
    let {
            projectId: t,
            steps: l,
            active: r = !1,
            durationMs: i,
            interrupted: s = !1,
            todos: u,
            provisionalTodo: o,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: f = !1,
            segmentDurationMs: h,
        } = e,
        g = a.useMemo(() => (0, ew.GO)(l, { turnActive: r }), [l, r]),
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
            className: ts.pj,
            "data-live": !1,
            children: (0, n.jsx)(e3.A, {
                glyph: (0, n.jsx)(eI.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(S.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = r ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, ew.lt)(l) ?? u ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !b) return null;
    let j = x.tasks,
        y = tn(j.map((e) => e.taskId)),
        k = !f && (r || j.some((e) => "running" === e.task.status)),
        N = tv(j);
    return (0, n.jsx)(e3.l.Provider, {
        value: j.length,
        children: (0, n.jsxs)("ol", {
            className: ts.pj,
            "data-live": k,
            children: [
                (0, n.jsx)(eC.A, {
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
                    let a = null != e.task.helperMark ? tl(e.task.helperMark) : void 0,
                        r = a ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              tu,
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
                          className: ts.YO,
                          children: (0, n.jsx)(tg, { todos: v, provisional: o, agents: N }),
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
            ideas: u,
            attachments: o,
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
            () => eP({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != o && o.length > 0 }),
            [l, r, s, o],
        ),
        y = null == o ? null : (0, n.jsx)(ez.A, { projectId: t, attachments: o }),
        k = null == y ? null : (0, n.jsx)("div", { className: ts.MT, children: y }),
        N = h
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(S.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: ts.ue,
        children: [
            x.length > 0 && !g
                ? (0, n.jsx)("ol", {
                      className: ts.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: ts.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tp.PT,
                                              children: eM.A.parse(e.content, !0, {
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
                ? (0, n.jsx)(eJ, { projectId: t, proposal: s })
                : b
                  ? (0, n.jsxs)("div", {
                        className: i()(ts.ky, tx.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tp.PT, ts.cW),
                                children: eM.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === j ? k : null,
                            N,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(ts.ky, tx.XR),
                      children: (0, n.jsx)(e2, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(ts.ky, tx.XR),
                      children: (0, n.jsx)(e4, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === j ? y : null,
            null != u && u.length > 0 ? (0, n.jsx)(eq, { ideas: u, pickedIdeaIds: f, onPick: m }) : null,
            b ? null : N,
        ],
    });
}
var ty = l(864970),
    tk = l(146806),
    tN = l(475358),
    tw = l(81369),
    tA = l(922016),
    tE = l(980707),
    tS = l(477782),
    tC = l(717400),
    tI = l(663341),
    tM = l(826745),
    tT = l(783977),
    tR = l(559647),
    tP = l(775602),
    t_ = l(435558),
    tL = l.n(t_),
    tF = l(506774),
    tD = l(228366);
let t$ = "VibegrationsComposerDrafts";
function tO() {
    return tF.w.get(t$) ?? {};
}
let tq = new Map(),
    tz = tL().throttle(() => {
        if (0 === tq.size) return;
        let e = tO();
        for (let [t, l] of tq) "" === l ? delete e[t] : (e[t] = l);
        (tq.clear(), tF.w.set(t$, e));
    }, 1e3);
class tU extends D.Ay.Store {
    getDraft(e) {
        let t = tq.get(e);
        return null != t ? t : (tO()[e] ?? "");
    }
}
let tB = new tU(tD.h, {
    LOGOUT: function () {
        return (tq.clear(), tz.cancel(), tF.w.remove(t$), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (tq.set(t, l), tz(), "" === l && tz.flush(), !1);
    },
});
var tG = l(43105),
    tV = l(252510);
let tW = [S.default.ZK2O25, S.default["122Ir6"], S.default["9KCASa"]];
function tH(e) {
    let { targetElementRef: t, onDismiss: l } = e,
        r = a.useMemo(() => [{ text: C.intl.string(S.default.sZCqrE), onClick: l }], [l]);
    return (0, n.jsx)(tG.A, {
        targetElementRef: t,
        title: C.intl.string(S.default.n8wtkv),
        body: C.intl.format(S.default.Oaq2Cc, {
            content: (0, n.jsxs)("div", {
                className: tV.r,
                children: [
                    C.intl.string(S.default.cK0dk1),
                    (0, n.jsx)("ul", {
                        className: tV.e,
                        children: tW.map((e, t) => (0, n.jsx)("li", { children: C.intl.string(e) }, t)),
                    }),
                ],
            }),
        }),
        position: "top",
        actions: r,
        onRequestClose: l,
    });
}
var tK = l(113491);
(l(323874), l(14289), l(35956));
var tY = l(285796),
    tQ = l(673724),
    tX = l(590380),
    tZ = l(298668);
let tJ = tQ.Is,
    t0 = 0;
function t1(e) {
    let { onUploadFile: t, onDeleteFile: l } = e,
        [n, r] = a.useState([]),
        i = a.useRef([]),
        s = a.useRef(new Set()),
        u = a.useRef(t);
    u.current = t;
    let o = a.useRef(l);
    o.current = l;
    let d = a.useCallback((e) => {
            ((i.current = e), r(e));
        }, []),
        c = a.useCallback((e) => {
            o.current(e.id).catch((e) => {
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
                        a = ++t0,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tJ) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: C.intl.formatToPlainString(S.default.DlX57a, { count: tJ }),
                        });
                        continue;
                    }
                    if (!(0, tQ.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: C.intl.formatToPlainString(S.default.cI7t94, {
                                size: (0, tQ.ZJ)((0, tQ.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = tQ.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    (t.push({ ...r, previewUrl: i }), l.push({ file: n, localId: a }));
                }
                for (let { file: e, localId: n } of (d(t), l))
                    u.current(e).then(
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
function t2(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(tX.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: tZ.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: tZ.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(S.default["3HWvgk"]),
                children: (0, n.jsx)(tY.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t7 = l(789438);
let t6 = "text-md/normal",
    t5 = null;
function t4(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, u] = a.useState(t),
        o = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [m, f] = a.useState(0),
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
            (g(i + r), f(s));
            let u = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                m = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : u / c;
            p({
                frontFrom: 1e3 * (0, tk._R)(m),
                frontTo: 1e3 * (0, tk._R)(h),
                backFrom: 1e3 * (0, tk.T)(m),
                backTo: 1e3 * (0, tk.T)(h),
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
        E = "out" === y ? x.frontTo : x.backTo,
        I = (0, D.bG)([tP.Ay], () => tP.Ay.useReducedMotion),
        M = t === C.intl.string(S.default.Jj8Ftb),
        T = s === t && M;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(t7.VT, { [t7.qk]: a }),
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
            children: (0, n.jsx)(tN.e, { shortcut: "tab", className: t7.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ty.o, {
                text: t,
                variant: t6,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(t7.xM, { [t7.s2]: r }),
                onStart: w,
                onComplete: () => u(t),
            }),
            R(t7.IS, l || (!I && "out" === y), o),
            (0, n.jsx)("span", {
                ref: d,
                className: t7.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: t6, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: t7.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: t6, tag: "span", className: t7.xM, children: t }),
                          R(t7.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function t3(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: u,
            onInterrupt: o,
            onUploadFile: d,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            tipOpen: p = !1,
            onDismissTip: v,
            hasPendingContext: b = !1,
            modelSettings: j,
            onModelSettingsChange: y,
        } = e,
        [k, N] = a.useState(() => tB.getDraft(t)),
        w = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), N(e));
            },
            [t],
        ),
        [A, E] = a.useState(t);
    A !== t && (E(t), N(tB.getDraft(t)));
    let I = (0, D.bG)([tP.Ay], () => tP.Ay.isSubmitButtonEnabled),
        [M, T] = a.useState(!1),
        [R, P] = a.useState(!1);
    a.useEffect(() => {
        i || P(!1);
    }, [i]);
    let _ = a.useRef(null),
        { drafts: L, addFiles: F, removeDraft: $, settled: O, takeRefs: q } = t1({ onUploadFile: d, onDeleteFile: m }),
        z = "" !== k.trim() || L.length > 0 || b,
        U = l && z && O,
        [B, G] = a.useState(null);
    a.useEffect(() => {
        if (null == B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]);
    let V = a.useCallback(() => {
            if (!U) return;
            v?.();
            let e = q();
            u(k, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == t5 && (t5 = document.createElement("canvas").getContext("2d"));
                let i = t5;
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
                    m = c.lastIndexOf(" ");
                return (m > 0 ? c.slice(0, m) : c).trimEnd();
            })(ee.current?.querySelector("textarea") ?? null, eo.current, k);
            ("" !== t && G(t), w(""));
        }, [U, k, u, q, w, v]),
        W = a.useCallback(
            (e) => {
                (e.preventDefault(), V());
            },
            [V],
        ),
        H = a.useCallback(() => {
            null == o || R || (P(!0), o());
        }, [o, R]),
        K = null == g || "" !== k || !l || r || s || b ? null : g,
        Y = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != o && !R) {
                    (e.preventDefault(), e.stopPropagation(), H());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != K) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), w(K));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), V());
            },
            [V, f, i, o, R, H, K, w],
        ),
        Q = a.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), F(t));
            },
            [l, F],
        ),
        X = a.useCallback(
            (e) => {
                (e.preventDefault(), T(!1), l && F(Array.from(e.dataTransfer.files)));
            },
            [l, F],
        ),
        Z = a.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), T(!0));
        }, []),
        J = a.useCallback(
            (e) => {
                (F(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [F],
        ),
        ee = a.useRef(null),
        et = a.useRef(null),
        [el, en] = a.useState(0),
        [ea, er] = a.useState(!1);
    a.useEffect(() => {
        if (0 === k.length) return void er(!1);
        let e = ee.current?.querySelector("textarea");
        if (null != e) {
            let t = le(e);
            null != t && en(t);
        }
        er(!0);
        let t = setTimeout(() => er(!1), t9);
        return () => clearTimeout(t);
    }, [k]);
    let ei = a.useMemo(() => ({ "--custom-glow-x": `${el}px` }), [el]),
        es = ea ? ` ${t7.EB}` : "",
        eu = s
            ? C.intl.string(S.default.pGFXZ0)
            : r
              ? C.intl.string(S.default.JeM47J)
              : l
                ? b
                    ? C.intl.string(S.default.Bs7bUv)
                    : x
                      ? C.intl.string(S.default.M3ovXY)
                      : C.intl.string(i ? S.default["67PpcP"] : S.default.ahRdoJ)
                : C.intl.string(S.default.nm4w9P),
        eo = a.useRef(0),
        ed = a.useRef(null),
        ec = a.useCallback((e) => {
            if ((ed.current?.disconnect(), null == e)) return;
            eo.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eo.current = e.clientWidth;
            });
            (t.observe(e), (ed.current = t));
        }, []),
        em = a.useId(),
        ef = null != K,
        eh = B ?? K ?? eu,
        eg = "" === k && "" !== eh;
    return (0, n.jsxs)("form", {
        onSubmit: W,
        onDrop: X,
        onDragOver: Z,
        onDragLeave: () => T(!1),
        className: M ? `${t7.DA} ${t7.pV}` : t7.DA,
        children: [
            L.length > 0
                ? (0, n.jsx)("div", {
                      className: t7.lN,
                      children: L.map((e) => (0, n.jsx)(t2, { draft: e, onRemove: $ }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${t7.wg} ${t7.LP}${es}`, style: ei, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${t7.wg} ${t7.L3}${es}`, style: ei, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: t7.VA,
                ref: ee,
                children: [
                    (0, n.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: J,
                        className: t7.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == h
                        ? (0, n.jsx)(eU.m, {
                              text: C.intl.string(S.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: et,
                                  type: "button",
                                  className: `${t7.Y0} ${t7.nu}`,
                                  disabled: !l,
                                  onClick: () => _.current?.click(),
                                  "aria-label": C.intl.string(S.default.d6Rqlu),
                                  children: (0, n.jsx)(tw.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: t7.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tA.Y, {
                              targetElementRef: et,
                              position: "top",
                              align: "left",
                              animation: tA.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tE.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(tS.rX, {
                                          children: [
                                              (0, n.jsx)(tS.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: tw.H,
                                                  leadingAccessory: { type: "icon", icon: tw.H },
                                                  action: () => _.current?.click(),
                                              }),
                                              null != h
                                                  ? (0, n.jsx)(tS.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(S.default.edKajy),
                                                        iconLeft: tC.q,
                                                        leadingAccessory: { type: "icon", icon: tC.q },
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
                                      ref: et,
                                      type: "button",
                                      className: `${t7.Y0} ${t7.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(tI.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: t7.Qu,
                                      }),
                                  });
                              },
                          }),
                    eg
                        ? (0, n.jsx)("div", {
                              ref: ec,
                              className: t7.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(t4, { text: eh, offering: ef && null == B, typed: null != B }),
                          })
                        : null,
                    (0, n.jsx)(tM.y, {
                        value: k,
                        onChange: (e) => w(e.currentTarget.value),
                        onKeyDown: Y,
                        onPaste: Q,
                        placeholder: eg ? "" : eu,
                        disabled: !l,
                        "aria-label": C.intl.string(S.default.OPr66w),
                        "aria-describedby": eg ? em : void 0,
                        rows: 1,
                        className: t7.jp,
                    }),
                    eg ? (0, n.jsx)(to.A, { id: em, children: eu }) : null,
                    (0, n.jsx)("div", {
                        className: t7.Sz,
                        children:
                            i && null != o
                                ? (0, n.jsx)(eU.m, {
                                      text: C.intl.string(S.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${t7.Y0} ${t7.$E}`,
                                          disabled: R,
                                          onClick: H,
                                          "aria-label": C.intl.string(S.default.KdgI4k),
                                          children: (0, n.jsx)(eI.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != j && null != y
                                  ? (0, n.jsx)(tK.A, {
                                        settings: j.settings,
                                        choices: j.choices,
                                        disabled: !l,
                                        onChange: y,
                                        className: `${t7.Y0} ${t7.$E}`,
                                        icon: (0, n.jsx)(tT.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    I
                        ? (0, n.jsxs)("div", {
                              className: t7.fF,
                              children: [
                                  (0, n.jsx)("div", { className: t7.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: t7.rt,
                                      disabled: !U,
                                      "aria-label": C.intl.string(S.default["22GHMt"]),
                                      children: (0, n.jsx)(tR.SendMessageIcon, {
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
            p && null != v ? (0, n.jsx)(tH, { targetElementRef: ee, onDismiss: v }) : null,
        ],
    });
}
let t9 = 1500,
    t8 = [
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
function le(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = le.mirror;
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
                (le.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of t8) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
le.mirror = null;
var lt = l(320095),
    ll = l(963852),
    ln = l(521981),
    la = l(763754),
    lr = l(491182),
    li = l(438729),
    ls = l(622868),
    lu = l(448368),
    lo = l(837528),
    ld = l(190457),
    lc = l(715628),
    lm = l(752636),
    lf = l(9842),
    lh = l(589022),
    lg = l(95701),
    lx = l(994500),
    lp = l(967198);
let lv = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lb(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lj(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function ly(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lj(e, t),
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
    if (lb(a) && lb(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lb(lj(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function lk(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([tP.Ay], () => tP.Ay.useReducedMotion),
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
                      for (; r > 0 && ly(t, r);) r--;
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
        m = a.useRef(0);
    (a.useEffect(() => {
        if (o)
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
                                    for (; n > t + 1 && l - n < 12 && lv.has(e.charAt(n - 1));) n--;
                                    return lv.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && ly(t, u);) u++;
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
    let f = Math.min(u.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: r && f < e.length };
}
var lN = l(803306);
let lw = new Set(),
    lA = new Map();
function lE(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
var lS = l(73432),
    lC = l(441136);
let lI = (0, lg.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    lM = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lT(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lC.Yq, { [lC.x1]: t }), children: e });
}
function lR(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lP(e, t, l) {
    let { content: r } = (0, ld.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lI, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(li.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lc.A)(i, r);
}
function l_(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lo.m)(e, lI, t.usernameProfile, r),
        u = (0, lo.Jo)(t.avatarProfile, r),
        o = (0, D.bG)([lp.A], () => lp.A.getGuildId()),
        d = (0, D.bG)([eo.default], () => eo.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eo.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(lh.A, { ...t, user: l, currentUser: d, guildId: o ?? void 0 });
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
function lL(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, ln.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lC.GV,
                              children: [
                                  (0, n.jsx)(lS.A, { className: lC.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, D.cf)(
            [lx.A],
            () => ({
                isReplyAuthorBlocked: lx.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lx.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, la.X4)(l),
        c = (0, la.X4)(t),
        m = l_(l);
    return (0, n.jsx)(lu.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lI,
        referencedMessage: { state: lf.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
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
function lF(e) {
    let { message: t, author: l } = e,
        a = l_(t);
    return (0, n.jsx)(ls.Ay, {
        message: t,
        channel: lI,
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
function lD(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || lw.has(e) || null != eo.default.getUser(e)) return;
                let t = lA.get(e) ?? 0;
                t >= 3 ||
                    (lA.set(e, t + 1),
                    lw.add(e),
                    lN
                        .wz(e)
                        .finally(() => lw.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let u = (0, D.bG)(
            [eo.default],
            () => lE(r, null != r ? eo.default.getUser(r) : null, eo.default.getCurrentUser()),
            [r],
        ),
        o = a.useMemo(() => (0, la.FT)(u, null), [u]),
        d = a.useMemo(() => (0, eN.LL)(t), [t]),
        c = d?.body ?? t,
        m = a.useMemo(() => {
            if (null == u) return null;
            let e = (0, ll.Ay)({ channelId: lI.id, content: c, author: u });
            return (0, lt.rh)({ ...e, timestamp: lR(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, u, l]);
    return null == m
        ? null
        : (0, n.jsx)(l$, { message: m, author: o, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function l$(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        u = lP(t, a);
    return (0, n.jsx)(lr.A, {
        className: lC.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(lF, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, n.jsxs)("div", {
                      className: lC.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lC.GV,
                              children: [
                                  (0, n.jsx)(lS.A, { className: lC.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lC.WO, children: u }),
                      ],
                  }),
        childrenAccessories: lT(i, "" !== a),
        disableInteraction: !0,
    });
}
function lO(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
        } = e,
        { text: d, revealing: c } = lk(t, { streaming: o }),
        m = a.useMemo(() => (0, la.FT)(null, null), []),
        f = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, D.bG)(
            [eo.default],
            () => lE(h, null != h ? eo.default.getUser(h) : null, eo.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, eN.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, ll.Ay)({ channelId: lI.id, content: x?.body ?? i.content, author: g });
            return (0, lt.rh)({ ...e, id: i.id, timestamp: lR(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lI.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, ll.Ay)({ channelId: lI.id, content: d, author: lM });
            return (0, lt.rh)({
                ...e,
                timestamp: lR(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != v ? { type: P.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = lP(b, d, lC.OS);
    return (0, n.jsxs)("div", {
        className: lC.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(lr.A, {
                className: lC.yE,
                author: f,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(lL, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, lm.A)({ message: b, channel: lI, author: f, guildId: void 0, isGroupStart: u }),
                childrenMessageContent: j,
                childrenAccessories: lT(r, "" !== d),
                disableInteraction: !0,
            }),
            u
                ? (0, n.jsx)("span", {
                      className: lC.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)($.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let lq = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var lz = l(375068);
function lU(e) {
    let { projectId: t, messages: l, ref: r, onPickIdea: i, floatingSettingsMessageId: s } = e,
        u = a.useRef(null),
        o = a.useCallback(
            (e) => {
                ((u.current = e), "function" == typeof r ? r(e) : null != r && (r.current = e));
            },
            [r],
        ),
        [d, c] = a.useState(null),
        m = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(m.current), []);
    let f = a.useCallback((e) => {
            let t = u.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                c(e),
                window.clearTimeout(m.current),
                (m.current = window.setTimeout(() => c(null), 1600)));
        }, []),
        h = a.useMemo(
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
                        let e = !(0, eS.BL)(t),
                            n = eP({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, ew.C6)(t.steps, { turnActive: e }),
                            { lastWork: i, open: s } = (0, ew.CT)(r, { turnActive: e }),
                            u = r.at(-1)?.index,
                            o = !1;
                        for (let d of r) {
                            if (null != d.prose && lq.test(d.prose.content)) o = !0;
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
                                        streaming: e && d.index === u && !d.hasWork,
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
                        let d = lq.test(t.content ?? "");
                        if (
                            (!0 === t.interrupted || o || d
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
              className: lz.x7,
              children: (0, n.jsx)(lB, {
                  role: "assistant",
                  children: (0, n.jsx)(lO, { content: C.intl.string(S.default.khZEUv) }),
              }),
          })
        : (0, n.jsx)("ol", {
              ref: o,
              className: lz.x7,
              children: h.map((e) => {
                  let a = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                          return (0, n.jsx)(
                              lB,
                              {
                                  role: "user",
                                  anchorId: a.id,
                                  highlighted: d === a.id,
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lD, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != l ? (0, n.jsx)(ez.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, n.jsx)(
                              lB,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lO, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, n.jsx)(ez.A, { projectId: t, attachments: a.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, n.jsx)(
                              lB,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tb, {
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
                              lB,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tb, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, n.jsx)(
                              lB,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tb, {
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
                              lB,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lO, {
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
                                      onJumpToReplied: null != a.in_reply_to ? () => f(a.in_reply_to) : void 0,
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
                                          settingsRequest: a.id === s ? void 0 : a.settingsRequest,
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
function lB(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(lz.xk, { [lz.Qo]: r, [lz.q3]: s }),
        children: l,
    });
}
function lG(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(S.default.W7oyuf);
        case "closed":
            return C.intl.string(S.default["yBmS+I"]);
        case "failed":
            return C.intl.string(S.default.eE60xI);
    }
}
var lV = l(559676),
    lW = l(625903),
    lH = l(976814),
    lK = l(964675);
function lY(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        r = a.useCallback(() => {
            (0, lH.A)(t, { isPreview: !0 });
        }, [t]);
    return l
        ? (0, n.jsx)(e_.D, {
              className: lK.h,
              "aria-label": C.intl.string(S.default.gTMvzD),
              onClick: r,
              children: (0, n.jsx)(lW.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lQ = l(823376),
    lX = l(495557);
function lZ(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = lk(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        u = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lX.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: u,
                className: lX.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tp.PT, lX.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eM.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lJ = l(921461);
function l0(e) {
    let { activity: t, compacting: l = !1, restoring: r = !1, controlling: s = !1, spoken: u, onSpokenChange: o } = e,
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
        [x, p] = a.useState(u ?? g),
        v = a.useRef(g);
    (a.useEffect(() => {
        v.current = g;
    }, [g]),
        a.useEffect(() => {
            o?.(x);
        }, [x, o]));
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
        N = y && null != k && m === k,
        w = a.useCallback(() => {
            y && null != k && f((e) => (e === k ? null : k));
        }, [y, k]),
        A = a.useCallback(() => f(null), []);
    return (0, n.jsx)(tA.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: N,
        onRequestClose: A,
        renderPopout: () => (0, n.jsx)(lZ, { id: c, activity: t }),
        children: () =>
            (0, n.jsxs)(e_.D, {
                innerRef: d,
                className: i()(lJ.hF, y && lJ.Xd),
                "aria-label": C.intl.string(r ? S.default.pGFXZ0 : S.default.SzdX35),
                "aria-expanded": N,
                "aria-describedby": N ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(h),
                onClick: w,
                children: [
                    (0, n.jsx)("span", {
                        className: lJ.bl,
                        children: (0, n.jsx)(lQ.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: lJ.xu,
                        "aria-hidden": !!s || void 0,
                        children: (0, n.jsx)(ty.o, {
                            ref: b,
                            text: x,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: lJ.yE,
                        }),
                    }),
                ],
            }),
    });
}
var l1 = l(280894);
function l2(e) {
    return e.toLocaleString();
}
function l7(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: l1.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: l1.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [l2((0, tQ.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    l2(l.input_tokens),
                    " in \xb7 ",
                    l2(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${l2(l.cache_creation_input_tokens)} cache write \xb7 ${l2(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function l6(e) {
    let { project: t } = e,
        l = (0, tQ.wU)(t.compaction),
        a = (0, tQ.wU)(t.classifier),
        r = (0, tQ.wV)(t.orchestrator, t.codegen),
        i = (0, tQ.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: l1.si,
        role: "dialog",
        "aria-label": C.intl.string(S.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: l1.Q$,
                children: (0, n.jsxs)("div", {
                    className: l1.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [l2((0, tQ.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(l7, { label: C.intl.string(S.default.R9aduM), usage: r }),
            (0, n.jsx)(l7, { label: C.intl.string(S.default.Tj6b30), usage: l }),
            (0, n.jsx)(l7, { label: C.intl.string(S.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: l1.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(S.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tQ.sj)(i) ? "\u2014" : `${Math.round(100 * (0, tQ.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function l5(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tA.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(l6, { project: t }),
        children: (e) =>
            (0, n.jsx)(e_.D, {
                innerRef: l,
                className: l1.Y$,
                "aria-label": C.intl.string(S.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(eB.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var l4 = l(258216);
function l3(e) {
    let t,
        {
            projectId: l,
            thinking: r,
            restoring: i = !1,
            thinkingActivity: s,
            compacting: u,
            projectUsage: o,
            connState: d,
        } = e,
        c = (0, lV.o4)(l),
        [m, f] = a.useState(null),
        h =
            null == o
                ? null
                : ((t = (0, tQ.a7)(o.cost_usd)),
                  {
                      text: C.intl.formatToPlainString(S.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: C.intl.formatToPlainString(S.default["7SZZvj"], { runes: t, turns: o.turns }),
                  });
    return (0, n.jsxs)("div", {
        className: l4.jf,
        children: [
            (0, n.jsx)("div", {
                className: l4.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    r || i || c
                        ? (0, n.jsx)(l0, {
                              activity: s,
                              compacting: u,
                              restoring: i,
                              controlling: c,
                              spoken: m,
                              onSpokenChange: f,
                          })
                        : null,
            }),
            (0, n.jsx)(lY, { projectId: l }),
            null == o || null == h
                ? null
                : (0, n.jsxs)("span", {
                      className: l4.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": h.aria,
                              children: h.text,
                          }),
                          (0, n.jsx)(l5, { project: o }),
                      ],
                  }),
            "open" === d
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === d ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(S.default.eDDdhB, { status: lG(d) }),
                      "data-vibegrations-conn": !0,
                      "data-state": d,
                      className: l4.XF,
                      children: lG(d),
                  }),
        ],
    });
}
var l9 = l(22231),
    l8 = l(900797),
    ne = l(847374),
    nt = l(477155),
    nl = l(935286),
    nn = l(856795),
    na = l(424110);
function nr(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: u = !0 } = e,
        o = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(e_.D, {
        className: i()(na.uK, { [na.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": C.intl.formatToPlainString(d ? S.default.aL1BKQ : S.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? o : void 0,
        "aria-disabled": r,
        tabIndex: u ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: na.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: na.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: na.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: na.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, n.jsx)(v.E, {
                              tag: "span",
                              id: o,
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
                      className: na.rM,
                      children: C.intl.string(S.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function ni(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(na.Ge, na.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(nr, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: na.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: na.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(l9.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(na.Pu, na.es), children: s }),
                ],
            }),
        ],
    });
}
function ns(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [s, o] = a.useState({}),
        [d, c] = a.useState({}),
        [m, f] = a.useState(0),
        [h, g] = a.useState(null),
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        N = a.useRef(null),
        [w, A] = a.useState(null),
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
        { text: q, phase: z } = (0, nn.Q)(P.question),
        U = q === P.question,
        B = U && D?.id === P.id && D.truncated;
    a.useLayoutEffect(() => {
        if (null == w || F || !U) return;
        function e() {
            if (null == w) return;
            let e = w.scrollHeight > w.clientHeight + 1;
            $((t) => (t?.id === P.id && t.truncated === e ? t : { id: P.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(w), () => t.disconnect());
    }, [U, w, P.id, F]);
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
            let e = N.current,
                t = E.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = N.current,
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
                o(l);
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
            (o((t) => {
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
        className: i()(na.$O, { [na.fI]: J && !et, [na.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: na.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: N,
                        className: na.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(na.TK, na.R_, { [na.TB]: "exit" === z, [na.JU]: "enter" === z }),
                                children: q,
                            }),
                            B || F
                                ? (0, n.jsx)("div", {
                                      className: na.Q7,
                                      children: (0, n.jsx)(eU.m, {
                                          text: G,
                                          children: (0, n.jsx)(e7.K, {
                                              icon: F ? l8.t : ne.a,
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
                                : (0, n.jsx)(e_.D, {
                                      className: i()(na.gb, na.Q7),
                                      onClick: en,
                                      "aria-label": C.intl.string(S.default.fMdUNR),
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
                        className: na.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: na.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: E,
                                    className: na.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                nr,
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
                                            className: na.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: na.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(l9.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tM.y, {
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
                                                    className: na.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, n.jsx)(
                                          ni,
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
                      className: na.qr,
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
                              className: na.Np,
                              children: [
                                  (0, n.jsx)(e_.D, {
                                      className: i()(na.gb, { [na.yI]: !X }),
                                      onClick: X ? Q : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": M,
                                      "aria-label": C.intl.string(S.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, n.jsx)(nt.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(e_.D, {
                                      className: i()(na.gb, { [na.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": M,
                                      "aria-label": C.intl.string(S.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(nl.E, {
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
var nu = l(643278),
    no = l(191521),
    nd = l(405189);
function nc(e) {
    let { line: t, placement: l, todos: r, provisionalTodo: s, agents: u, onJumpToActivity: o } = e,
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
        [N, w] = a.useState(!1),
        [A, E] = a.useState(p);
    (A !== p && (E(p), p ? k(!0) : w(!1)),
        a.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        a.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => w(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, p]));
    let I = null != r && r.length > 0,
        M = a.useCallback(() => v((e) => !e), []);
    return f
        ? (0, n.jsxs)("div", {
              className: nd.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(nd.vK, { [nd.ho]: g && d, [nd.ET]: !d }),
                      children: [
                          null == o
                              ? (0, n.jsx)("ol", {
                                    className: i()(nd.Rk, ts.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(e3.A, {
                                        glyph: (0, n.jsx)(no.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(e_.D, {
                                    className: nd.pZ,
                                    onClick: o,
                                    "aria-label": C.intl.string(S.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(nd.Rk, ts.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(e3.A, {
                                            glyph: (0, n.jsx)(no.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, n.jsx)(eU.m, {
                                    text: C.intl.string(S.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(e_.D, {
                                        className: nd.BO,
                                        onClick: M,
                                        "aria-expanded": p,
                                        "aria-label": C.intl.string(S.default.qCRC6c),
                                        children: (0, n.jsx)(nu.ClipboardListIcon, {
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
                            className: i()(nd.vB, { [nd.pg]: p && N, [nd.ui]: !p }),
                            children: (0, n.jsx)(tg, { todos: r, provisional: s, agents: u, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nm = l(366010),
    nf = l(825484),
    nh = l(859703),
    ng = l(738822),
    nx = l(291749),
    np = l(590202),
    nv = l(792620),
    nb = l(201805),
    nj = l(617986),
    ny = l(363195),
    nk = l(971276),
    nN = l(710969);
let nw = !1;
function nA() {
    return nw;
}
var nE = l(749414);
function nS(e) {
    let t,
        l,
        r,
        { open: i } = e,
        s =
            ((t = (0, nb.dN)()),
            (l = (0, D.bG)([nh.A], () => nh.A.isQuestAccessSuspended || null != nh.A.questEnrollmentBlockedUntil, [])),
            (r = (0, D.bG)([nh.A], () => null != nh.A.getQuestPreviewOverride(ng.uF.QUEST_BAR_V2), [])),
            null != t && (0, nv.vv)(t)
                ? (function (e, t) {
                      let { overridden: l, gatesClosed: n } = t;
                      return null != e && (0, nk.s)()
                          ? l
                              ? e.userStatus?.claimedAt != null
                                  ? null
                                  : e
                              : n || (0, nN.Ic)(e) || e.userStatus?.completedAt != null
                                ? null
                                : e
                          : null;
                  })(t, { overridden: r, gatesClosed: l })
                : null),
        [u, o] = a.useState(nA),
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
        })(i && !u && null != s),
        [m, f] = a.useState(s);
    null != s && s !== m && f(s);
    let h = s ?? m,
        g = (0, D.bG)([ny.A], () => ny.A.getState().theme),
        x = (0, nm.M)(g) ? P.NJ8.DARK : P.NJ8.LIGHT,
        p = null != h ? (0, nx.tW)(h, nx.fY.GAME_TILE, x).url : null,
        b = null != p && "" !== p ? p : null,
        j = a.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: ng.uF.QUEST_BAR_V2,
                sourceQuestContent: ng.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: np.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, nj.d5)({ quest: s, ...e })
                : await (0, nj.e0)(s, { ...e, questContentCTA: np.Cy.ACCEPT_QUEST });
        }, [s]),
        y = a.useCallback(() => {
            ((nw = !0), o(!0));
        }, []);
    return d && null != h
        ? (0, n.jsxs)("aside", {
              className: nE.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, n.jsxs)("div", {
                            className: nE.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("img", { className: nE.Rx, src: b, alt: "" }),
                                (0, n.jsx)("div", { className: nE._e }),
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: nE.iB,
                      children: [
                          null != b ? (0, n.jsx)("img", { className: nE.w1, src: b, alt: "" }) : null,
                          (0, n.jsxs)("div", {
                              className: nE.Ug,
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
                                      children: C.intl.format(C.t.EQa7os, { questName: h.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsxs)(nf.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, n.jsx)(Q.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: C.intl.string(S.default.egO5fO),
                          }),
                          (0, n.jsx)(Q.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: j,
                              text: C.intl.string(C.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var nC = l(651649),
    nI = l(522250),
    nM = l(670455),
    nT = l(348800);
let nR = [C.intl.string(S.default["E+Q26x"]), C.intl.string(S.default["06/jqP"]), C.intl.string(S.default["3gSfUa"])];
function nP(e) {
    var t;
    let { projectId: r, restoreState: i } = e,
        s = (0, D.bG)([eS.Ay], () => eS.Ay.getMessages(r), [r]),
        u = (0, D.bG)([m.Ay], () => m.Ay.getConnState(r), [r]),
        o = (0, D.bG)([m.Ay], () => m.Ay.isChatStopped(r), [r]),
        d = (0, D.bG)([eS.Ay], () => eS.Ay.getProjectUsage(r), [r]),
        c = (0, D.bG)([eS.Ay], () => eS.Ay.getThinkingActivity(r), [r]),
        f = (0, D.bG)([eS.Ay], () => eS.Ay.isCompacting(r), [r]),
        h = (0, D.bG)([m.Ay], () => m.Ay.getModelSettings(r), [r]),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(null),
        b = a.useRef(!0),
        [j, y] = a.useState(!0);
    a.useEffect(() => {
        b.current && x.current?.scrollToBottom();
    }, [s]);
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
        N = a.useCallback(() => {
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
            (0, m.Hc)(r);
        }, [r]),
        a.useEffect(
            () => () => {
                let e;
                (e = (0, nI.hl)(r)) < nI.qu ||
                    (!(0, nI.Xi)(r) &&
                        nC.A.possiblyShowFeedbackModal(nM.MW.VIBEGRATIONS, () => {
                            ((0, nI.AH)(r),
                                (0, e0.openModalLazy)(async () => {
                                    let { default: t } = await Promise.all([
                                        l.e("312513"),
                                        l.e("218413"),
                                        l.e("137381"),
                                        l.e("847004"),
                                        l.e("341676"),
                                    ]).then(l.bind(l, 580711));
                                    return (l) => (0, n.jsx)(t, { ...l, projectId: r, promptCount: e });
                                }));
                        }));
            },
            [r],
        ));
    let w = (0, eE.Q_)(r),
        A = a.useCallback(
            (e, t) => {
                (0, m.dv)(r, e, t);
            },
            [r],
        ),
        E = a.useCallback(
            (e, t) => {
                0 === w.annotations.length
                    ? A(e, t)
                    : (A((0, eN.Mx)({ annotations: w.annotations, metaComment: e, context: w.context }), t),
                      (0, eE.PS)(r));
            },
            [w, A, r],
        ),
        I = a.useCallback(() => (0, m.fu)(r), [r]),
        M = a.useCallback((e) => A(e.implementation_prompt), [A]),
        T = a.useCallback((e) => A(e), [A]),
        R = a.useCallback((e) => (0, m.XZ)(r, e), [r]),
        P = a.useCallback((e) => (0, m.vX)(r, e), [r]),
        _ = a.useCallback((e) => (0, m.Vm)(r, e), [r]),
        L = a.useCallback(() => A(C.intl.string(S.default.Jj8Ftb)), [A]),
        F = i?.status === "restoring",
        $ = "open" === u && !o && !F,
        O = s[s.length - 1],
        q = null != O && "assistant" === O.role && null != O.proposal,
        [z, U] = a.useState(null),
        B = O?.clarification != null && O.clarification.id !== z ? O.clarification : null,
        G = a.useCallback(() => {
            null != B && U(B.id);
        }, [B]),
        [V, W] = a.useState(!1);
    a.useEffect(() => {
        if (!(0, eA.Fy)(r)) return;
        let e = setTimeout(() => {
            ((0, eA.fA)(), W(!0));
        }, 0);
        return () => clearTimeout(e);
    }, [r]);
    let H = a.useCallback(() => W(!1), []),
        K = (0, D.bG)([m.Ay], () => m.Ay.getSettings(r), [r]),
        [Y, X] = a.useState(null),
        Z =
            !V &&
            null != O &&
            "assistant" === O.role &&
            null != O.settingsRequest &&
            O.id !== Y &&
            ((t = O.settingsRequest),
            null != K &&
                (t.keys ?? []).some((e) => {
                    let t = K.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return K.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = K.values[e];
                    return null == l || "" === l;
                }))
                ? O
                : null,
        J = Z?.settingsRequest ?? null,
        ee = a.useCallback(() => {
            null != Z && X(Z.id);
        }, [Z]),
        et = V || null != J,
        el = (0, D.bG)([eS.Ay], () => eS.Ay.hasLoadedHistory(r), [r]),
        en = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return nR[e % nR.length];
        }, [r]),
        ea = q
            ? C.intl.string(S.default.Jj8Ftb)
            : O?.kind === "plan_implemented"
              ? C.intl.string(S.default["3sTTBu"])
              : el && 0 === s.length
                ? en
                : null,
        er = a.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, eS.BL)(t)) return t;
            }
        }, [s]),
        ei = null != er,
        es = q && $ ? L : void 0,
        [eu, eo] = a.useState(null),
        [ed, ec] = a.useState(ei);
    (ed !== ei && (ec(ei), ei || eo(null)),
        a.useEffect(() => {
            if (!ei) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eo(null)
                        : eo(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [ei, er?.steps]));
    let em = a.useMemo(() => (null != er ? (0, eC.b)(er.steps) : ""), [er]),
        ef = a.useMemo(() => (null != er ? ((0, ew.lt)(er.steps) ?? er.todos) : void 0), [er]),
        eh = er?.provisionalTodo,
        eg = a.useMemo(() => {
            var e;
            return null != er ? ((e = er.steps), tv((0, ew.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [er]);
    return (0, n.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nT.TE,
        children: [
            (0, n.jsx)(nS, { open: null != er }),
            (0, n.jsx)(nc, {
                onJumpToActivity: k,
                line: em,
                placement: ei && "top" === eu ? "top" : null,
                todos: ef,
                provisionalTodo: eh,
                agents: eg,
            }),
            (0, n.jsxs)("div", {
                className: nT.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: x,
                        onScroll: N,
                        className: [nT.N$, j ? null : nT.hB, et ? nT.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(lU, {
                            ref: p,
                            projectId: r,
                            messages: s,
                            floatingSettingsMessageId: Z?.id,
                            onPickIdea: $ ? M : void 0,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: nT.NJ,
                        children: (0, n.jsx)(l3, {
                            projectId: r,
                            thinking: ei,
                            restoring: F,
                            thinkingActivity: c,
                            compacting: f,
                            projectUsage: d,
                            connState: u,
                        }),
                    }),
                    null == B
                        ? null
                        : (0, n.jsx)("div", {
                              className: et ? `${nT.B5} ${nT.J9}` : nT.B5,
                              children: (0, n.jsx)(
                                  ns,
                                  { clarification: B, onSubmit: $ ? T : void 0, onDismiss: G },
                                  B.id,
                              ),
                          }),
                    null == J
                        ? null
                        : (0, n.jsx)("div", {
                              className: nT.B5,
                              children: (0, n.jsx)("div", {
                                  className: nT.ws,
                                  children: (0, n.jsx)(e4, { projectId: r, request: J, onDismiss: ee }, Z?.id),
                              }),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nT.Jx,
                children: [
                    (0, n.jsx)(nc, {
                        onJumpToActivity: k,
                        line: em,
                        placement: ei && "bottom" === eu ? "bottom" : null,
                        todos: ef,
                        provisionalTodo: eh,
                        agents: eg,
                    }),
                    0 === w.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: nT.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: C.intl.formatToPlainString(S.default.Lkx0Kk, {
                                          count: w.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: C.intl.string(S.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(Q.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: C.intl.string(S.default.B0YARo),
                                      onClick: () => (0, eE.PS)(r),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(t3, {
                        projectId: r,
                        canSend: $,
                        stopped: o,
                        running: ei,
                        restoring: F,
                        onSend: E,
                        hasPendingContext: w.annotations.length > 0,
                        onInterrupt: $ ? I : void 0,
                        onUploadFile: P,
                        onDeleteFile: _,
                        onApprove: es,
                        suggestion: ea,
                        questionOpen: null != B || null != J,
                        tipOpen: V,
                        onDismissTip: H,
                        modelSettings: h,
                        onModelSettingsChange: R,
                    }),
                ],
            }),
        ],
    });
}
var n_ = l(661531),
    nL = l(602853),
    nF = l(517461),
    nD = l(761929),
    n$ = l(927506);
function nO(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, nL.r)(n_.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = a.useRef(null),
        [o, d] = (0, nF.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = a.useState(o ?? 460),
        f = (0, t_.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? f + s : 0);
    }, [f, t, s, r]);
    let h = (0, nD.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nD.R.HORIZONTAL_LEFT,
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
        className: n$.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: n$.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: u, className: n$.kL, style: { width: f }, children: i }),
        ],
    });
}
var nq = l(691540),
    nz = l(857250),
    nU = l(97483),
    nB = l(624479),
    nG = l(92446),
    nV = l(761508),
    nW = l(540999),
    nH = l(957565);
let nK = [],
    nY = new Map(),
    nQ = new Map(),
    nX = new Map(),
    nZ = new Map(),
    nJ = new Map(),
    n0 = new Map(),
    n1 = new Map();
class n2 extends D.Ay.Store {
    getStatus(e) {
        return nY.get(e) ?? null;
    }
    getFetchState(e) {
        return nQ.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nZ.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return n0.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return nJ.get(e) ?? null;
    }
    getModelCalls(e) {
        return n1.get(e) ?? nK;
    }
    getForceCompactionState(e) {
        return nX.get(e) ?? "idle";
    }
}
let n7 = new n2(tD.h, {
    LOGOUT: function () {
        if (
            0 === nY.size &&
            0 === nQ.size &&
            0 === nX.size &&
            0 === nZ.size &&
            0 === nJ.size &&
            0 === n0.size &&
            0 === n1.size
        )
            return !1;
        (nY.clear(), nQ.clear(), nX.clear(), nZ.clear(), nJ.clear(), n0.clear(), n1.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nQ.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === nX.get(t);
        n &&
            nX.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === nQ.get(t);
        if ((a && nQ.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nQ.set(t, "failed") : (nY.set(t, l), nQ.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nZ.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        nJ.set(e.projectId, {
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
        nX.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        nX.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = n1.get(e.projectId);
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
        n1.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, tQ.aM)(l.total)) return !1;
        n0.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (nY.delete(t), nQ.delete(t), nX.delete(t), nZ.delete(t), nJ.delete(t), n0.delete(t), n1.delete(t));
    },
});
var n6 = l(972786);
function n5(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function n4(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function n3(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function n9(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function n8(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function ae(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function at(e) {
    return C.intl.string("preview" === e ? S.default["+m8XM6"] : S.default.kiOVnt);
}
let al = ["all", "preview", "stable", "web"],
    an = new Set(["error", "aborted", "length"]);
function aa(e) {
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
function ar(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(S.default.SBkDIZ, {
              p50: n5(e.memory_p50_bytes ?? 0),
              p999: n5(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let ai = {
    db: () => S.default.r6cciE,
    db_preview: () => S.default.JmIyL8,
    runtime: () => S.default.bzNyv8,
    runtime_preview: () => S.default["LONZ/8"],
    bot: () => S.default.jdpw3A,
    bot_preview: () => S.default["/g6wUz"],
};
var as = l(69985);
function au(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: as.KE,
        children: [
            (0, n.jsx)("div", {
                className: as.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS })
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
                                  children: C.intl.formatToPlainString(S.default["4NpaEk"], { time: n8(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(Q.$, { variant: "secondary", size: "sm", text: C.intl.string(S.default.aw0IJm), onClick: a }),
        ],
    });
}
function ao(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: as.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: as.Gf, children: t }),
            l,
        ],
    });
}
function ad(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: as.N8,
        children: [
            (0, n.jsxs)("div", {
                className: as.x7,
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
function ac(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: as.N8,
        children: [
            (0, n.jsxs)("div", {
                className: as.x7,
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
                className: as.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? as.aV : as.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function am(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(ad, {
            label: C.intl.string(S.default.H6PMwW),
            value: C.intl.string(S.default.TLOZ8J),
            hint: aa(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(ad, {
            label: C.intl.string(S.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(S.default.uAzxdh),
        });
    let a = ar(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ad, { label: C.intl.string(S.default.awAqRi), value: n4(l.cpu_ms) }),
            null != a && (0, n.jsx)(ad, { label: C.intl.string(S.default.WdGviA), value: a }),
        ],
    });
}
function af(e) {
    let { analytics: t } = e,
        l = C.intl.string(S.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(ao, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: aa(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? ai[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(ao, {
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
                          ad,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(S.default.AnRynJ, { cpu: n4(t.cpu_ms) }),
                              hint: ar(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var ah = l(522652);
let ag = [];
function ax(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && an.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? n4(l.durationMs) : null,
                    `${n3(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${n3(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: ah.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ah.Q5,
                children: n9(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: ah.qN,
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
function ap(e, t) {
    return (0, n.jsx)(ad, {
        label: e,
        value: C.intl.formatToPlainString(S.default.U98VaN, { count: n3((0, tQ.aM)(t)) }),
        hint: `${n3(t.input_tokens)} in \xb7 ${n3(t.output_tokens)} out \xb7 ${n3(t.cache_read_input_tokens)} cache read`,
    });
}
function av(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        u = (0, D.bG)([n7], () => n7.getLastTurnUsage(t), [t]),
        o = (0, D.bG)([n7], () => n7.getLastCompaction(t), [t]),
        d = (0, D.bG)([n7], () => n7.getLastCompactionDecline(t), [t]),
        c = (0, D.bG)([n7], () => n7.getForceCompactionState(t), [t]),
        f = a.useCallback(() => (0, m.Lj)(t), [t]),
        h = a.useCallback(() => (0, m.Lj)(t, !0), [t]),
        g = (0, D.bG)([n7], () => (s ? ag : n7.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = o?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: ah.Mf,
        children: [
            (0, n.jsx)(au, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(ao, {
                title: C.intl.string(S.default.IYpHtT),
                children:
                    null == x
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ad, {
                                      label: C.intl.string(S.default["8MSJDH"]),
                                      value: n3((0, tQ.a7)(x.cost_usd)),
                                      hint: C.intl.formatToPlainString(S.default["6Z2KhK"], { count: n3(x.turns) }),
                                  }),
                                  ap(C.intl.string(S.default.hk4jJr), x.orchestrator),
                                  ap(C.intl.string(S.default.R9aduM), x.codegen),
                                  ap(C.intl.string(S.default.Tj6b30), (0, tQ.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(ad, {
                                          label: C.intl.string(S.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${n3(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(ao, {
                title: C.intl.string(S.default.lo4mY6),
                children:
                    null == u
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  ap(C.intl.string(S.default["VwF+oY"]), u.total),
                                  (0, n.jsx)(ad, {
                                      label: C.intl.string(S.default["kILb+R"]),
                                      value: `${Math.round((u.cache_hit_rate ?? (0, tQ.CA)(u.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(ao, {
                title: C.intl.string(S.default.mn8279),
                children: [
                    null != o && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ac, {
                                      label: C.intl.string(S.default.dKFhCg),
                                      used: o.tokensAfter,
                                      max: j,
                                      formatValue: n3,
                                  }),
                                  (0, n.jsx)(ad, {
                                      label: C.intl.string(S.default.ntZb8d),
                                      value: `${n3(o.tokensBefore)} \u{2192} ${n3(o.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(S.default.jA05ru, {
                                          count: n3(o.retainedMessages),
                                          time: n8(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? C.intl.formatToPlainString(S.default.LKGmsP, { ceiling: n3(j) })
                                      : C.intl.string(S.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(ad, {
                            label: C.intl.string(S.default["se+2ls"]),
                            value: `${n3(d.projected)} / ${n3(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(S.default.KHK44U, { time: n8(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: ah.Lj,
                        children: [
                            (0, n.jsx)(Q.$, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(S.default.B0KV7p),
                                disabled: "pending" === c,
                                onClick: f,
                            }),
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return C.intl.string(S.default.wBng42);
                                    if ("pending" === e) return C.intl.string(S.default["0tgo31"]);
                                    let t = n8(e.observedAt);
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
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(Q.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: C.intl.string(S.default["044+ju"]),
                                            onClick: h,
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
                (0, n.jsx)(ao, {
                    title: C.intl.string(S.default.F5eP7e),
                    children:
                        0 === g.length
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: C.intl.string(S.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(ax, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, n.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: C.intl.formatToPlainString(S.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || l?.analytics != null) &&
                (0, n.jsxs)(ao, {
                    title: C.intl.string(S.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(ad, {
                                        label: C.intl.string(S.default["wt5X/o"]),
                                        value: n8(b.instance_since),
                                        hint: C.intl.string(S.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(ad, { label: C.intl.string(S.default["4lgurx"]), value: n3(b.sockets) }),
                                    (0, n.jsx)(ad, {
                                        label: C.intl.string(S.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? C.intl.string(S.default["9KlveJ"])
                                            : C.intl.string(S.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(ad, {
                                            label: C.intl.string(S.default["/hOBkc"]),
                                            value: n3(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(am, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(ao, {
                    title: C.intl.string(S.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(ad, { label: C.intl.string(S.default["5iHZLk"]), value: n3(p.max_iterations) }),
                        (0, n.jsx)(ad, {
                            label: C.intl.string(S.default.Rb6m3E),
                            value: n3(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(ad, {
                            label: C.intl.string(S.default.WQ9pMe),
                            value: C.intl.formatToPlainString(S.default.U98VaN, { count: n3(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(ad, {
                            label: C.intl.string(S.default.iEAvzu),
                            value: C.intl.formatToPlainString(S.default.U98VaN, {
                                count: n3(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(ad, {
                            label: C.intl.string(S.default["jbhs+f"]),
                            value: n3(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(ad, { label: C.intl.string(S.default.TOQnq4), value: n3(p.max_build_attempts) }),
                        (0, n.jsx)(ad, { label: C.intl.string(S.default.RIDc6D), value: n3(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var ab = l(320448),
    aj = l(629584),
    ay = l(683438),
    ak = l(849363);
function aN(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: ak.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(S.default.TV42NS),
              }),
          });
}
function aw(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: ak.qf,
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
              className: ak.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function aA(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: ak.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(S.default["U/qDX9"]),
              }),
          })
        : null;
}
var aE = l(417397);
let aS = a.memo(function (e) {
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
        className: aE.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aE.Mt,
                selectable: !0,
                children: n9(l.ts),
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
                className: aE.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: aE.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: aE.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: aE.Cq,
                            title: l.build ?? void 0,
                            children: C.intl.string(S.default.GO6JcR),
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
                                  (0, n.jsxs)(e_.D, {
                                      className: aE.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": u,
                                      "aria-label": C.intl.string(S.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(ne.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(ab._, {
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
                                                      "[\u2026]" === o.marker ? S.default.lXkB6Z : S.default.wkbYxG,
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
                                          className: aE.dF,
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
function aC(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([n6.Ay], () => n6.Ay.getLogs(t), [t]),
        r = (0, D.bG)([n6.Ay], () => n6.Ay.getHistoryState(t, "logs")),
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
                al.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return at(e);
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
        className: aE.$F,
        children: [
            (0, n.jsxs)("div", {
                className: aE.y4,
                children: [
                    (0, n.jsx)(aj.I, {
                        look: "pill",
                        "aria-label": C.intl.string(S.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: aE.KT,
                        children: (0, n.jsx)(ay.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: C.intl.string(S.default["MX4vr/"]),
                            "aria-label": C.intl.string(S.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(aN, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: aE.sx,
                children: [
                    (0, n.jsx)(aA, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(aw, {
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
                          : d.map((e) => (0, n.jsx)(aS, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function aI(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(ao, {
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
function aM(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ad, {
                      label: C.intl.formatToPlainString(S.default.f8ix3w, { env: at(l) }),
                      value: ((t = a.connected), C.intl.string(t ? S.default["9KlveJ"] : S.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(ad, {
                      label: C.intl.string(S.default["0AB7l3"]),
                      value: n3(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${n8(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(ad, { label: C.intl.string(S.default.ElaQ0A), value: n3(a.guild_count) }),
                  (0, n.jsx)(ad, {
                      label: C.intl.string(S.default.SJtBTN),
                      value: n3(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(S.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: n8(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(ad, {
                          label: C.intl.string(S.default.N4l504),
                          value: n3(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(ad, { label: at(l), value: C.intl.string(S.default.C6xjtD) });
}
function aT(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(ad, {
        label: at(t),
        value: C.intl.formatToPlainString(S.default.Yur5Zm, { requests: n3(l.requests), failures: n3(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(S.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: n8(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(S.default["1PdrB1"], { time: n8(l.since) }),
    });
}
function aR(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ad, {
                label: C.intl.formatToPlainString(S.default.BVORfc, { env: at(t) }),
                value: n3(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    ad,
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
                                  ? C.intl.formatToPlainString(S.default["7ecbr3"], { time: n8(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function aP(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(ad, {
        label: at(t),
        value: C.intl.formatToPlainString(S.default.voXL2a, { calls: n3(l.calls), errors: n3(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function a_(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(ao, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(S.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(ao, {
        title: t,
        children: [
            (0, n.jsx)(ad, {
                label: C.intl.string(S.default.KOnL3g),
                value: n3(l.requests),
                hint: C.intl.formatToPlainString(S.default["1PdrB1"], { time: n8(l.since) }),
            }),
            (0, n.jsx)(ad, { label: C.intl.string(S.default.CjPhyY), value: n3(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(ac, {
                              label: C.intl.string(S.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: n4,
                          }),
                          (0, n.jsx)(ad, {
                              label: C.intl.string(S.default["+rYPHD"]),
                              value: n4(r),
                              hint: C.intl.formatToPlainString(S.default["+LxC7W"], {
                                  total: n4(l.cpu_ms_total),
                                  wall: n4(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(ad, {
                      label: C.intl.string(S.default["V/nNbs"]),
                      value: C.intl.string(S.default.YKWIxp),
                      hint: C.intl.string(S.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(ad, { label: C.intl.string(S.default.ueEMPa), value: n4(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(ad, { label: C.intl.string(S.default.vM2krr), value: n3(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(ad, {
                label: C.intl.string(S.default.g1O88C),
                value: n3(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(S.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(ad, { label: C.intl.string(S.default.JUZs7g), value: ae(l.build) }),
        ],
    });
}
function aL(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        u = i
            ? [{ key: "shared", label: C.intl.string(S.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(S.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(S.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(ao, {
        title: C.intl.string(S.default.i91625),
        children: u.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(ad, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(ad, {
                                  label: C.intl.formatToPlainString(S.default["9TpIQg"], { env: l }),
                                  value: n5(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? S.default.o45MMA : S.default.S7o3vV,
                                      { count: n3(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(ac, {
                                      label: C.intl.formatToPlainString(S.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: n5,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aF(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: ah.Mf,
        children: [
            (0, n.jsx)(au, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(a_, {
                            title: C.intl.string(S.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(a_, {
                            title: C.intl.string(S.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aL, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(aI, {
                                title: C.intl.string(S.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aM, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(aI, {
                                title: C.intl.string(S.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aT, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(aI, {
                                title: C.intl.string(S.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aR, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(aI, {
                                title: C.intl.string(S.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aP, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(af, { analytics: t.analytics }),
                        (0, n.jsxs)(ao, {
                            title: C.intl.string(S.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(ad, {
                                    label: C.intl.string(S.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? ae(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(ad, {
                                    label: C.intl.string(S.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? ae(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function aD(e, t) {
    return String(e).padStart(t, "0");
}
function a$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aD(n.getHours(), 2)}:${aD(n.getMinutes(), 2)}:${aD(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aD(n.getMilliseconds(), 3)}` : a;
}
var aO = l(977129);
let aq = new Map(),
    az = new Map(),
    aU = 0,
    aB = 0;
async function aG(e, t, l) {
    let n = aU,
        a = aq.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aB) return { status: "forbidden" };
    let r = az.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aO.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((aB = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let u = await s.json();
            if (!0 !== u.available || null == u.rich) return { status: "unavailable" };
            if (n !== aU) return { status: "failed" };
            var l = u.rich;
            for (aq.set(t, l); aq.size > 100;) {
                let e = aq.keys().next();
                if (!0 === e.done) break;
                aq.delete(e.value);
            }
            return { status: "loaded", rich: u.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    az.set(t, i);
    let s = await i;
    return (az.get(t) === i && az.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function aV() {
    ((aU += 1), aq.clear(), az.clear(), (aB = 0));
}
function aW(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aH(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function aK(e) {
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
function aY(e) {
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
let aQ = ["model", "tool", "subagent", "delegated", "context"];
function aX(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(aY(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function aZ(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aJ = ["arguments", "result", "usage", "diagnostics"];
var a0 = l(40715);
let a1 = { started: a0.Vf, ok: a0.mo, error: a0.Sr };
function a2(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${a0.Om} ${a1[t] ?? a0.Vf}`,
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
let a7 = { model: a0.WI, subagent: a0.uM, context: a0.eH, tool: a0.pw, delegated: a0.C8 };
function a6(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: a0.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: a0.D6, children: t }),
            (0, n.jsx)("div", { className: a0.zL, children: l }),
        ],
    });
}
function a5(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(a6, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function a4(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: a0.WA, children: t });
}
function a3(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: a0.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: a0.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function a9(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: a0.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: a0.p8,
                children: [
                    (0, n.jsx)(ab._, { className: a0.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: a0.bG, children: l }),
        ],
    });
}
function a8(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(a6, {
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
    return (0, n.jsx)(a6, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: a0.Kv,
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
function re(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: a0.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: a0.uh,
                          children: C.intl.string(S.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          a6,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: a0.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: a0.Px,
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
function rt(e) {
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
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: a0.E7, children: l });
}
function rl(e) {
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
                aJ.filter((e) => n.has(e))
            );
        })(l, { childCount: u, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aq.get(t)) return;
                    let l = new AbortController();
                    return (
                        aG(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aq.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = a$(l.startedAt, "millis"),
        f = aY(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: a0._0,
        onKeyDown: h,
        role: "region",
        "aria-label": C.intl.formatToPlainString(S.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: a0.sy,
                children: (0, n.jsxs)("div", {
                    className: a0.HI,
                    children: [
                        (0, n.jsx)(a2, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${a0.PY} ${a7[f]}`,
                            children: aK(f),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: a0.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: a0.l5,
                            children: null == l.durationMs ? C.intl.string(S.default.HpKDyl) : aW(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: a0.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            o.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(a3, {
                      title: C.intl.string(S.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(a8, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(re, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(rt, { detail: d }),
                      ],
                  })
                : null,
            o.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(a3, {
                      title: C.intl.string(S.default.KXrf5F),
                      children: [
                          (0, n.jsx)(a5, {
                              label: C.intl.string(S.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(S.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(a5, {
                                    label: C.intl.string(S.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(a6, {
                                    label: C.intl.string(S.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: C.intl.string(S.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(re, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            o.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(a3, {
                      title: C.intl.string(S.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(a4, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(a5, {
                                            label: C.intl.string(S.default.Ran4BY),
                                            value: C.intl.formatToPlainString(S.default["PYO+Jv"], {
                                                tokens: aH(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(a5, {
                                            label: C.intl.string(S.default.vPIcyv),
                                            value: C.intl.formatToPlainString(S.default.Qy2iTq, {
                                                system: aH(l.systemTokens),
                                                tools: aH(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: aH(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(a5, {
                                            label: C.intl.string(S.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(a5, {
                                            label: C.intl.string(S.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(a5, {
                                            label: C.intl.string(S.default.VyAl6j),
                                            value: C.intl.formatToPlainString(S.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(a5, {
                                            label: C.intl.string(S.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: a0.E7,
                              children: C.intl.string(S.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            o.includes("arguments") || o.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: a0.E7,
                      children: C.intl.string(S.default["ppv+97"]),
                  })
                : null,
            o.includes("diagnostics")
                ? (0, n.jsx)(a9, {
                      title: C.intl.string(S.default.T7SFyZ),
                      children: (0, n.jsxs)(a4, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(a6, {
                                        label: C.intl.string(S.default.NnBqcd),
                                        value: (0, n.jsx)(e_.D, {
                                            tag: "div",
                                            className: a0.mi,
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
                                  : (0, n.jsx)(a5, {
                                        label: C.intl.string(S.default.fI6mzD),
                                        value: C.intl.formatToPlainString(S.default.hO8FYp, { count: u }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(a5, { label: C.intl.string(S.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(a5, { label: C.intl.string(S.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, n.jsx)(a5, { label: C.intl.string(S.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(a5, { label: C.intl.string(S.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: a0.Hm,
                                                children: C.intl.string(S.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    a5,
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
                className: a0.E7,
                children: C.intl.string(S.default.khAjR0),
            }),
        ],
    });
}
let rn = { model: a0.WI, subagent: a0.uM, context: a0.eH, tool: a0.pw, delegated: a0.C8 };
function ra(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = aY(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return aQ.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: a0.M0,
        children: [
            (0, n.jsx)("div", {
                className: a0.pZ,
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
                                            className: `${a0.dL} ${rn[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: a0.z4,
                role: "group",
                "aria-label": C.intl.string(S.default.UZ1OlR),
                children: aQ.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: a0.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${a0.A9} ${rn[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: aK(e) }),
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
                                          children: aW(a),
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
let rr = { model: a0.WI, subagent: a0.uM, context: a0.eH, tool: a0.pw, delegated: a0.C8 };
function ri(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        u = aY(t),
        o = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(S.default["PYO+Jv"], { tokens: aH(t.promptTokens) })
                : null != t.durationMs
                  ? aW(t.durationMs)
                  : null;
    return (0, n.jsxs)(e_.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${a0.nM} ${s ? a0.A5 : ""} ${"error" === t.status ? a0.Cr : ""} ${l ? a0.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: a0.sU,
                children: [
                    (0, n.jsx)(a2, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${a0.PY} ${rr[u]}`,
                        children: aK(u),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: a0.G9,
                        children: o,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: a0.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: a0.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: a0.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rs(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([n6.Ay], () => n6.Ay.getTrace(l), [l]),
        s = (0, D.bG)([n6.Ay], () => n6.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => aV, [l]);
    let [u, o] = a.useState(null),
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
        y = a.useCallback((e) => o((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, t_.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, t_.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, nD.A)({
            resizableDomNodeRef: g,
            orientation: nD.R.VERTICAL_TOP,
            getClampedValue: N,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => f(!0),
            onElementResizeEnd: () => f(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        A = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), w(e));
            },
            [w],
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
            null != t && (e.preventDefault(), c((e) => (0, t_.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (o(null), j(u));
        }, [u, j]),
        M = a.useMemo(() => aX(i, r), [i, r]),
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
                    .map((e, t) => ({ ...e, index: t, entries: aX(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = aZ(M, u),
        P = R?.kind === "tool" ? aZ(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
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
              className: a0.uP,
              ref: h,
              children: (0, n.jsx)(aw, {
                  state: s,
                  emptyTitle: C.intl.string(S.default.Iyt8OJ),
                  emptyBody: C.intl.string(S.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${a0.uP} ${m ? a0.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: a0.DK,
                      children: [
                          (0, n.jsx)(ra, { entries: i }),
                          (0, n.jsx)(aN, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: a0.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(S.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: x,
                                    className: a0.Ns,
                                    children: [
                                        (0, n.jsx)(aA, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(S.default["QATZ+A"]),
                                            className: a0.p_,
                                            children: T.map((e) => {
                                                let t = a$(e.startedAt),
                                                    l = C.intl.formatToPlainString(S.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: a0.mf,
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
                                                                              children: aW(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: a0.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        ri,
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
                                    className: a0.b1,
                                    onPointerDown: A,
                                    onKeyDown: E,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: a0.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(rl, {
                                        projectId: l,
                                        entry: R,
                                        parent: P,
                                        childCount: _,
                                        onSelect: o,
                                        onClose: I,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var ru = l(365199),
    ro = l(402879);
function rd(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([n6.Ay], () => n6.Ay.getTrace(t), [t]),
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
            (0, ro.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: a0.ED,
                children: (0, n.jsx)(ay.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: C.intl.string(S.default.NfncNw),
                    "aria-label": C.intl.string(S.default.NfncNw),
                }),
            }),
            (0, n.jsx)(tA.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tA.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tE.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(tS.rX, {
                            children: (0, n.jsx)(tS.Dr, {
                                id: "export",
                                label: C.intl.string(S.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: u,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(e7.K, {
                        ...e,
                        buttonRef: s,
                        icon: ru.MoreHorizontalIcon,
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
var rc = l(497243);
function rm(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, o] = a.useState(""),
        c = (0, D.bG)([nW.A], () => nW.A.isDeveloper),
        f = (0, D.bG)([n7], () => n7.getStatus(t), [t]),
        h = (0, D.bG)([n7], () => n7.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, m.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, m.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, nH.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: n7.getStatus(t),
                        last_turn_usage: n7.getLastTurnUsage(t),
                        last_compaction: n7.getLastCompaction(t),
                        last_compaction_decline: n7.getLastCompactionDecline(t),
                        model_calls: n7.getModelCalls(t),
                        logs: n6.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nq.P0)((0, nz.o)(C.intl.string(S.default.sDSDiO), nU.Ck.SUCCESS)),
            );
        }, [t]),
        p = C.intl.string(S.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rc.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: nB.CopyIcon,
                            tooltip: C.intl.string(S.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: nG.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rc.rf,
                children: [
                    (0, n.jsxs)(nV.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(S.default.uNyR86),
                        className: rc.vR,
                        children: [
                            (0, n.jsx)(nV.V.Item, { id: "logs", children: C.intl.string(S.default["1mpzdJ"]) }),
                            (0, n.jsx)(nV.V.Item, { id: "worker", children: C.intl.string(S.default.whGHLD) }),
                            (0, n.jsx)(nV.V.Item, { id: "agent", children: C.intl.string(S.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(nV.V.Item, { id: "trace", children: C.intl.string(S.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(aC, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aF, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rc.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rc.XH,
                                          children: (0, n.jsx)(rd, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, n.jsx)(rs, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(av, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rf = l(333007),
    rh = l(621466),
    rg = l(103557),
    rx = l(97808),
    rp = l(778712),
    rv = l(365912),
    rb = l(775121),
    rj = l(486020),
    ry = l(277437);
function rk(e) {
    let {
            at: t,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: o,
            onDismiss: d,
            canSubmit: c,
            closing: m,
            onUploadFile: f,
            onDeleteFile: h,
        } = e,
        { drafts: g, addFiles: x, removeDraft: p, settled: v, takeRefs: b } = t1({ onUploadFile: f, onDeleteFile: h }),
        j = a.useRef(null),
        y = (c || g.length > 0) && v && !m,
        k = a.useCallback(() => {
            if (!y) return;
            let e = b();
            o(e.length > 0 ? e : void 0);
        }, [y, b, o]),
        [N, w] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => w(!0));
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
        className: i()(ry.M0, { [ry.ho]: N && !m, [ry.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: ry.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(eU.m, {
                position: "bottom",
                text: C.intl.string(S.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: ry.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": C.intl.string(S.default.d6Rqlu),
                    children: (0, n.jsx)(tw.H, { size: "custom", color: "currentColor", className: ry.WW }),
                }),
            }),
            (0, n.jsx)(tM.y, {
                autoFocus: !0,
                rows: 1,
                className: ry.hF,
                value: s,
                placeholder: "" === r ? C.intl.string(S.default.FK09JH) : `Edit ${r}`,
                "aria-label": C.intl.string(S.default["qR+sGX"]),
                onChange: (e) => u(e.target.value),
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
                      className: ry.ZO,
                      children: g.map((e) => (0, n.jsx)(t2, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rN = l(320510);
function rw(e) {
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
function rA(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rw(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var rE = l(940107),
    rS = l(42843);
let rC = { x: 25, y: 21 };
function rI(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rM(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rT(e, t, l, n) {
    let a = rM(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rR(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rP(e) {
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
function r_(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        u = null != l && l === r ? t : null,
        { active: o, annotations: d } = (0, eE.Q_)(u),
        c = (0, lV.o4)(u),
        f = (0, e0.useHasAnyModalOpen)(),
        h = (0, D.bG)([eo.default], () => eo.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, E] = a.useState(null),
        [I, M] = a.useState(!1),
        T = a.useRef(null),
        R = a.useRef(null),
        P = a.useRef(null),
        [_, L] = a.useState(null),
        [F, $] = a.useState(!1),
        [O, q] = a.useState(null),
        [z, U] = a.useState(null),
        B = a.useRef(!1),
        [G, V] = a.useState(!1),
        [W, H] = a.useState(null),
        K = o && !c && !f;
    (a.useEffect(() => {
        if (!K) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            p((t) => (rI(t, e) ? t : e));
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
                (0, rN.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? rP(t.response) : null;
                        null == l ? w(!0) : (j(l), (0, eE._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
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
    let Y = a.useRef(null);
    (a.useEffect(() => {
        if (!K || null == x || null == u) return;
        if (null == b) {
            Y.current = x;
            return;
        }
        if (rI(Y.current, x)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            Y.current = x;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rN.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !ee.current) return;
                        let l = rP(e.response);
                        null != l && (j(l), (0, eE._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rw(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, eE.fA)(u, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, x, b, d, u, i]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (E(null), q(null), H(null), j(null));
                };
        }, [K]));
    let X = a.useRef(null),
        Z = a.useRef(null),
        J = a.useRef(!1),
        ee = a.useRef(!1);
    a.useEffect(() => {
        ((ee.current = K), K || ((X.current = null), (Z.current = null), (P.current = null), M(!1)));
    }, [K]);
    let et = a.useCallback(
            function e() {
                if (J.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = i();
                null != l &&
                    ((J.current = !0),
                    (0, rE.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rA, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((J.current = !1), ee.current)) {
                                if ("picked" !== t.status || rq(t.target, ei.current.rect, ei.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? E(null)
                                        : "unsupported" === t.status && $(!0);
                                else {
                                    let e = (0, eN.ts)(t.target);
                                    (L((t) => (rO(t, e) ? t : e)),
                                        E((e) => {
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
            let e = !B.current;
            (U({ at: O.at, label: O.label, draft: O.draft, instant: e }), V(e), q(null));
        }, [O]);
    (a.useEffect(() => {
        if (!G) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [G]),
        a.useEffect(() => {
            if (null == z) return;
            let e = setTimeout(() => U(null), rD);
            return () => clearTimeout(e);
        }, [z]));
    let en = null == b || null == x || b.viewport.width < 1 ? 1 : x.width / b.viewport.width,
        ea = null != b || N,
        er = a.useMemo(() => b?.elements ?? [], [b]),
        ei = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        ei.current = { rect: x, scale: en };
    }, [x, en]);
    let es = a.useCallback((e, t, l) => {
            (H(null), (B.current = !1), q({ target: e, anchor: t, draft: "", at: l, label: (0, eN.ts)(e) }));
        }, []),
        eu = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        ed = a.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = R.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ed);
    let ec = a.useCallback(
            (e) => {
                if (null == x || null != W) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), M(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > r$ || Math.abs(e.clientY - O.at.y) > r$) && (B.current = !0);
                    return;
                }
                if (!ea) return void E(null);
                let t = eu(e, x);
                if (F) {
                    let e = (0, eN.jo)(er, t.x, t.y),
                        l = null != e && rq(e, x, en) ? null : e;
                    if (null != l) {
                        let e = (0, eN.ts)(l);
                        L((t) => (rO(t, e) ? t : e));
                    }
                    E((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Z.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Z.current = l), (X.current = l), et());
            },
            [x, en, ea, eu, F, er, O, W, ed, et],
        ),
        em = a.useCallback(() => {
            (M(!1), E(null), (Z.current = null), (X.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !ea || F || null != O || null != W) return;
        let e = P.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Z.current = n), (X.current = n), et());
    }, [K, I, ea, F, O, W, et]);
    let ef = a.useCallback(
            (e) => {
                if (null != O || null != W) {
                    (el(), H(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = eu(e, x);
                es(A, (0, eN.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, x, eu, O, W, es, el],
        ),
        eh = a.useCallback(() => {
            null != u && (E(null), (0, eE.PS)(u));
        }, [u]),
        eg = a.useCallback(() => {
            null != u &&
                (null != O
                    ? el()
                    : W?.confirmingRemove === !0
                      ? H({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? H(null)
                        : eh());
        }, [u, O, W, el, eh]),
        ex = a.useRef(eg),
        ep = a.useRef(eh);
    a.useLayoutEffect(() => {
        ((ex.current = eg), (ep.current = eh));
    });
    let ev = a.useRef(null);
    a.useEffect(() => {
        if (K)
            return (
                rb.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rb.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, rh.vq)(t) &&
                ev.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rv.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ep.current();
        }
    }, [K, s]);
    let eb = a.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != O || null != W || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : er.findIndex((e) => e.ref === A.ref);
                    E(er[(l + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    es(A, eN.F6, { x: (x?.left ?? 0) + A.rect.x * en, y: (x?.top ?? 0) + A.rect.y * en }));
            },
            [u, O, W, er, A, es, eg, x, en],
        ),
        ej = a.useCallback(
            (e) => {
                null == u ||
                    null == O ||
                    (((0, eN.to)(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, m.dv)(u, (0, eN.v_)(O.target, O.draft), e), el(), E(null)));
            },
            [u, O, el],
        ),
        ey = a.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, m.vX)(u, e)), [u]),
        ek = a.useCallback((e) => (null == u ? Promise.resolve() : (0, m.Vm)(u, e)), [u]),
        ew = a.useCallback(() => {
            null == u ||
                null == W ||
                null == g ||
                ((0, eN.to)(W.draft) && ((0, eE.dy)(u, g, W.id, W.draft.trim()), H({ ...W, editing: !1 })));
        }, [u, W, g]),
        eA = a.useCallback(() => {
            null != u && null != W && null != g && ((0, eE.PR)(u, g, W.id), H(null));
        }, [u, W, g]),
        eS = o
            ? y
                ? C.intl.string(S.default.jQQ8i2)
                : N
                  ? C.intl.string(S.default.zvU2QH)
                  : C.intl.formatToPlainString(S.default.A4HDMU, { count: d.length })
            : "",
        eC = K && null != x,
        eI = I && null == W,
        eM = null == W ? null : d.find((e) => e.id === W.id),
        eT = O?.target ?? eM?.target ?? null,
        eR = O ?? z,
        eP = O ?? (z?.instant === !0 ? null : z),
        e_ =
            null != eM && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = rR(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rT(eM.target, eM.anchor, x, en), x)
                : null;
    return (0, rf.createPortal)(
        (0, n.jsxs)("div", {
            ref: ev,
            className: rS.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rS.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eC
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rS.MT,
                                  style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                  "data-plain-cursor": eI ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": C.intl.string(S.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ec,
                                  onMouseLeave: em,
                                  onClick: ef,
                                  onKeyDown: eb,
                              }),
                              null != A && null == O && null == W ? (0, n.jsx)(rz, { box: rM(A, x, en) }) : null,
                              (0, n.jsx)("div", {
                                  ref: T,
                                  className: rS.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rS.xz,
                                      "data-shown": null != A && null == W && null == O ? "" : void 0,
                                      "data-instant": G ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: rS.Ux,
                                          children: [
                                              null == _
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rS.Tl, children: _.kind }),
                                              null == _ || "" === _.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rS.kh, children: [" ", _.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rS.Y,
                                  children: eI
                                      ? (0, n.jsx)(lS.A, { className: rS.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eP
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rS.aZ,
                                        style: { transform: `translate3d(${eP.at.x + 12}px, ${eP.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rS.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: rS.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rS.Tl, children: eP.label.kind }),
                                                    "" === eP.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rS.kh,
                                                              children: [" ", eP.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, n.jsx)("div", { className: rS.D0, style: rM(eT, x, en), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rT(e.target, e.anchor, x, en),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rS.xL,
                                          style: { ...rR(l, x), width: 24, height: 24 },
                                          "aria-label": C.intl.formatToPlainString(S.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, eN.iw)(e.target),
                                          }),
                                          "aria-expanded": W?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == O && H(a);
                                          },
                                          onFocus: () => {
                                              null == O && H(a);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), el(), H(a));
                                          },
                                          children: (0, n.jsx)(rL, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eR
                                  ? null
                                  : (0, n.jsx)(rk, {
                                        at: { x: eR.at.x + 12, y: eR.at.y + 12 },
                                        bounds: x,
                                        kind: eR.label.kind,
                                        value: eR.draft,
                                        canSubmit: null != O && (0, eN.to)(eR.draft),
                                        onChange: (e) => {
                                            null != O && q({ ...O, draft: e });
                                        },
                                        onSubmit: ej,
                                        onDismiss: el,
                                        onUploadFile: ey,
                                        onDeleteFile: ek,
                                        closing: null == O,
                                    }),
                              null != eM && null != W && null != e_
                                  ? (0, n.jsxs)(rF, {
                                        point: e_,
                                        frame: x,
                                        authorId: eM.authorId,
                                        title: (0, eN.iw)(eM.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            W.confirmingRemove ? H({ ...W, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            W.editing || W.confirmingRemove || H(null);
                                        },
                                        children: [
                                            W.editing
                                                ? (0, n.jsx)(rg.f, {
                                                      autoFocus: !0,
                                                      label: C.intl.string(S.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: W.draft,
                                                      maxLength: eN.gq,
                                                      rows: 3,
                                                      onChange: (e) => H({ ...W, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ew());
                                                      },
                                                  })
                                                : (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rS.aC,
                                                      children: eM.comment,
                                                  }),
                                            (0, eE.zz)(eM, g)
                                                ? (0, n.jsx)("div", {
                                                      className: rS.eB,
                                                      children: W.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rS.nv,
                                                                        children: C.intl.string(S.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...W, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.ncz32j),
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
                                                                        text: C.intl.string(S.default.ncz32j),
                                                                        onClick: () =>
                                                                            H({
                                                                                ...W,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    W.editing
                                                                        ? (0, n.jsx)(Q.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, eN.to)(W.draft),
                                                                              text: C.intl.string(S.default.wIeFN0),
                                                                              onClick: ew,
                                                                          })
                                                                        : (0, n.jsx)(Q.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: C.intl.string(S.default.DKZggU),
                                                                              onClick: () =>
                                                                                  H({
                                                                                      ...W,
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
function rL(e) {
    let { authorId: t } = e,
        l = (0, D.bG)([eo.default], () => eo.default.getUser(t), [t]);
    return (0, n.jsx)(rx.eu, {
        src: null == l ? null : rj.Ay.getUserAvatarURL(l),
        size: rp._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rF(e) {
    let t,
        l,
        r,
        i,
        s,
        u,
        { point: o, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rC);
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
        E = {
            left: k,
            top: N,
            "--custom-vibegrations-card-origin-x": `${w}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, n.jsxs)("div", {
        ref: p,
        className: rS.Nr,
        style: E,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rS.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rS.ip, children: (0, n.jsx)(rL, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rS.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rS.zI, children: x }),
        ],
    });
}
let rD = 300,
    r$ = 2;
function rO(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rq(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rz(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rS.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rU = l(11055),
    rB = l(533140),
    rG = l(342667);
function rV(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, frameId: s } = e,
        u = (0, lV.o4)(null != l && l === r ? t : null),
        o = (0, e0.useHasAnyModalOpen)(),
        d = (0, rB.V0)(s);
    a.useEffect(() => {
        u && d && null != s && (0, rB.c2)(s);
    }, [u, d, s]);
    let [c, m] = a.useState(null);
    a.useEffect(() => {
        if (!u) return;
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
    }, [u, i]);
    let f = u && null != c && !o;
    return (0, rf.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: rG.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: u ? C.intl.string(S.default.dIE9zO) : "",
                }),
                f
                    ? (0, n.jsx)("div", {
                          className: rG.o,
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
var rW = l(314116),
    rH = l(364522),
    rK = l(237528),
    rY = l(664121),
    rQ = l(95477),
    rX = l(381849),
    rZ = l(724401);
function rJ(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function r0(e) {
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
        E = a.useCallback(() => A((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${o}`;
        return (
            Promise.all([(0, m.DM)(l, o), (0, m.ms)(l, o)])
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
                (0, rW.A)({
                    title: C.intl.string(S.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? C.intl.formatToPlainString(S.default["0lt6bH"], { target: e })
                            : C.intl.formatToPlainString(S.default.zVcDfj, {
                                  environment: C.intl.string(
                                      "preview" === o ? S.default["/kYdZe"] : S.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: C.intl.string(S.default.ZlKerR),
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
                                              text: C.intl.string(S.default.kIWqXR),
                                          }),
                                          E())
                                        : "expired" === e.code
                                          ? (k({
                                                phase: "settled",
                                                environment: o,
                                                tone: "danger",
                                                text: C.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                            }),
                                            E())
                                          : "unconfirmed" === e.code
                                            ? (k({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: C.intl.string(S.default["2xSPXh"]),
                                              }),
                                              E())
                                            : k({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: C.intl.string(S.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    k({
                                        phase: "settled",
                                        environment: o,
                                        tone: "danger",
                                        text: C.intl.string(S.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [o, s, E],
        ),
        T = a.useCallback(() => {
            (k({ phase: "busy", environment: o, kind: "create" }),
                (0, m._m)(l, o, x)
                    .then(() => {
                        (p(""),
                            k({
                                phase: "settled",
                                environment: o,
                                tone: "positive",
                                text: C.intl.string(S.default.mfAoFT),
                            }),
                            E());
                    })
                    .catch(() => {
                        k({ phase: "settled", environment: o, tone: "danger", text: C.intl.string(S.default.uhhqP3) });
                    }));
        }, [l, o, x, E]),
        R = "loaded" === I.status ? I.window : null,
        P = "loaded" === I.status ? I.nowMs : 0,
        _ = R?.earliestRestoreTimestampMs ?? P - 2592e6,
        L = "" === b ? null : new Date(b).getTime(),
        F = null != L && !Number.isNaN(L) && L >= _ && L <= P,
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
                ? (0, n.jsx)("div", { className: rZ.E8, children: (0, n.jsx)(f.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: rZ.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(S.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: rZ.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(rH.Ip, {
                          className: rZ.p_,
                          children: (0, n.jsx)("div", {
                              className: rZ.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rX.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rX._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: rZ.KW,
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
                                                  (0, n.jsx)(rK.v, {
                                                      text: C.intl.string(S.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: rZ.AD,
                                                title: C.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: rZ.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            e_.D,
                                            {
                                                className: rZ.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          M(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, m.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: rZ.Pf,
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
            className: rZ.nd,
            "aria-label": C.intl.string(S.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(S.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: rY.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(S.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: rZ.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: rZ.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(nV.V, {
                                        selectedItem: o,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": C.intl.string(S.default.CNvRyJ),
                                        className: rZ.vR,
                                        children: [
                                            (0, n.jsx)(nV.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(S.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(nV.V.Item, {
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
                                        null != R
                                            ? ` ${new Date(R.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === D.kind
                                    ? (0, n.jsxs)("div", {
                                          className: rZ.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: C.intl.string(S.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === D.kind
                                      ? (0, n.jsx)("div", {
                                            className: rZ.lm,
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
                            className: rZ.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: rZ.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rZ.Fv,
                                            children: (0, n.jsx)(rQ.k, {
                                                label: C.intl.string(S.default.hJb78b),
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
                                            text: C.intl.string(S.default["14UarN"]),
                                            onClick: T,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: rZ._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rZ.kv,
                                            children: (0, n.jsx)(rQ.k, {
                                                label: C.intl.string(S.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: rJ(_),
                                                max: rJ(P),
                                                disabled: N || null == R,
                                                onChange: j,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(Q.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: C.intl.string(S.default["3D/vYN"]),
                                            disabled: N || !F,
                                            onClick: () => {
                                                null != L && M(new Date(L).toLocaleString(), () => (0, m.dz)(l, o, L));
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
var r1 = l(406810),
    r2 = l(977628);
function r7(e) {
    let t,
        { projectId: l, onClose: r, onRestore: i } = e,
        [s, o] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, m.ST)(l)
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
                ? (0, n.jsx)("div", { className: r2.E8, children: (0, n.jsx)(f.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: r2.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(S.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: r2.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(rH.Ip, {
                          className: r2.p_,
                          children: (0, n.jsx)("div", {
                              className: r2.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rX.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rX._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      e_.D,
                                      {
                                          className: r2.f_,
                                          onClick: () =>
                                              (0, rW.A)({
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
                                                  className: r2.bc,
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
            className: r2.nd,
            "aria-label": C.intl.string(S.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(S.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: r1.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(S.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: r2.rf, children: t }),
            ],
        })
    );
}
var r6 = l(120426),
    r5 = l(873727),
    r4 = l(147248),
    r3 = l(418842),
    r9 = l(885386),
    r8 = l(171936),
    ie = l(796036);
function it(e) {
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
        let l = (0, D.bG)([ny.A], () => (0, r5.x4)(ny.A.theme)),
            n = (0, D.bG)([r4.A], () => r4.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, D.cf)([tP.Ay], () => ({
                reducedMotion: tP.Ay.useReducedMotion,
                fontScale: (0, r5.U0)(),
                highContrast: tP.Ay.isHighContrastModeEnabled,
                forcedColors: tP.Ay.useForcedColors,
                underlineLinks: tP.Ay.alwaysShowLinkDecorations,
            })),
            d = r9.hH.useSetting(),
            c = (0, r3.C)(),
            m = a.useRef(!1),
            f = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, r6.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, r5.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, rE.W)(n, "set-env", a, {
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
                let l = (0, r6.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, r6.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, r8.mn)(t, () => (0, r6.F)(h, p));
        }, [t, h, p]));
    let v = a.useCallback(() => (0, r6.F)(h, p), [h, p]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: g, className: ej.fm, children: m })],
            }),
            f,
            (0, n.jsx)(rV, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                frameId: p,
            }),
            (0, n.jsx)(r_, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                toggleRef: l,
            }),
        ],
    });
}
function il(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: o,
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
            onRestoreVersion: N,
            debugOpen: w = !1,
            onCloseDebug: A,
            restoreState: E,
            previewReady: I,
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
            null != t && ((0, m.Hc)(t), (0, ie.s)());
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
        q = g || f.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: L,
        className: ej.LB,
        children: (0, n.jsx)(it, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: o,
            surface: f,
            header: h,
            mainClassName: null == h ? void 0 : i()(ej.ez, { [ej.zt]: O }),
            content: (0, n.jsx)(eg, {
                applicationId: r,
                previewApplicationId: o,
                surface: f,
                previewReady: I,
                previewGate: M,
                availability: R,
                activeMode: P,
                widgetApplicationId: _,
            }),
            sidebar:
                null != T
                    ? (0, n.jsx)(nO, {
                          open: T.open,
                          maxWidth: $,
                          onWidthChange: c.Zq,
                          children: T.open
                              ? (0, n.jsx)(ey, { channel: T.channel, guild: T.guild, onClose: T.onClose })
                              : null,
                      })
                    : null != t && q
                      ? (0, n.jsx)(nO, {
                            open: g,
                            maxWidth: $,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(rm, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            r7,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(r0, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(rU.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": C.intl.string(C.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == x
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: u.P,
                                                                        tooltip: C.intl.string(S.default.YdgE0j),
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
                                                      children: (0, n.jsx)(nP, { projectId: t, restoreState: E }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
