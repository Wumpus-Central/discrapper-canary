l.d(t, { A: () => ia });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(991690),
    o = l(789645),
    u = l(672929),
    d = l(58736),
    c = l(948230),
    f = l(277977),
    m = l(289873),
    h = l(627363),
    x = l(580954),
    g = l(753514),
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
function T(e) {
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
var M = l(328284);
function R(e) {
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
            return (0, n.jsx)(T, { className: L.qs });
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
            return (0, n.jsx)("div", { className: L.qs, children: (0, n.jsx)(m.y, {}) });
    }
}
var D = l(17928),
    $ = l(323384),
    O = l(308528),
    q = l(334738),
    z = l(688438),
    B = l(355622),
    U = l(734057),
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
        u = (0, D.bG)([U.A], () => {
            if (null == o) return null;
            let e = U.A.getDMFromUserId(o);
            return null != e ? U.A.getChannel(e) : null;
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
                (0, q.yl)(t, e),
                () => {
                    (0, q.dm)(t, e);
                }
            );
        }, [t, l]));
    let [d, c] = a.useState(null),
        f = null != o && d === o;
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
        : null == o || f
          ? (0, n.jsx)(H, { message: C.intl.string(S.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: W.g,
                  children: (0, n.jsx)(z.A, { channel: u, guild: null, chatInputType: B.oU.SIDEBAR }, u.id),
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
        actions: o,
        nextStep: u,
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
                                children: [s, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != o && o.length > 0
                ? (0, n.jsx)("div", {
                      className: J.o1,
                      children: o.map((e, t) => (0, n.jsx)(X.$, { size: "md", ...e }, t)),
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
    eo = l(479299),
    eu = l(287809),
    ed = l(58551),
    ec = l(71495);
function ef(e) {
    let { applicationId: t } = e,
        l = (0, D.bG)([eu.default], () => eu.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(em, { applicationId: t, user: l });
}
function em(e) {
    let { applicationId: t, user: l } = e,
        r = (0, D.bG)([ea.A], () => ea.A.getApplication(t)),
        i = a.useMemo(() => new er.R({ applicationId: t }), [t]),
        s = (0, en.A)(l.id, t),
        o = s.surfaceConfigs,
        u = (0, ed.yZ)({
            widgetTop: null != o[et.m.WIDGET_TOP],
            widgetBottom: null != o[et.m.WIDGET_BOTTOM],
            miniProfile: null != o[et.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, n.jsx)("div", {
              className: ec.$C,
              children: (0, n.jsxs)("div", {
                  className: ec.PV,
                  children: [
                      u.hasMainCard
                          ? (0, n.jsx)("div", {
                                className: ec.a9,
                                children: (0, n.jsx)(ei.A.Overlay, {
                                    className: ec.Qb,
                                    children: (0, n.jsx)(eo.A, {
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
function ex(e) {
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
        f = (0, u.A)(t, r),
        { isLoading: p } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != f && (0, x.A)().leaveFrame(f.id);
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
    if (p) return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    let v = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, g.z3)(d), "aria-label": (0, g.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eh.R,
        ...v,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, n.jsx)(F, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, n.jsx)("div", {
                          className: eh.q,
                          children: (0, n.jsx)(R, {
                              wide: !0,
                              title: C.intl.string(S.default.SGHO9K),
                              body: C.intl.string(S.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(ef, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, n.jsx)(Y, { previewApplicationId: l }) : null,
        ],
    });
}
var eg = l(534890),
    ep = l(738876),
    ev = l(47167),
    eb = l(31717),
    ej = l(372054);
function ey(e) {
    let { channel: t, guild: l, onClose: a } = e,
        r = (0, ev.Ay)(t),
        i = (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: ej.Wx,
        children: [
            (0, n.jsx)(ep.A, { channel: t, draftType: eb.C.ChannelMessage }),
            (0, n.jsxs)(d.Ay, {
                toolbar: i,
                "aria-label": C.intl.string(C.t.BIYAqa),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: eg.ChatIcon, "aria-label": C.intl.string(C.t["/VQax8"]) }),
                    (0, n.jsx)(d.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ej.GZ,
                children: (0, n.jsx)(z.A, { channel: t, guild: l, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ek = l(689175),
    eN = l(29692),
    ew = l(903586),
    eA = l(783791);
function eE(e) {
    return !(0, eA.BL)(e) && !0 !== e.stopRequested;
}
var eS = l(935208),
    eC = l(66708),
    eI = l(74029),
    eT = l(717447),
    eM = l(29080),
    eR = l(46054),
    eP = l(76275);
function e_(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : C.intl.string(S.default.MdXWEK);
}
function eL(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, ew.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, ew.Lf)(t),
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
var eF = l(939249),
    eD = l(478016),
    e$ = l(34136);
function eO(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, n.jsxs)("section", {
        className: i()(e$.Nr, r),
        ...o,
        children: [
            (0, n.jsxs)("header", {
                className: i()(e$.wx, null != l && e$.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var eq = l(113757);
function ez(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(eF.D, {
        className: i()(eq.nM, { [eq.f1]: o, [eq.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": C.intl.formatToPlainString(S.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: eq.jo,
                children: [
                    l
                        ? (0, n.jsx)(eD.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eq.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eq.G9,
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
function eB(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(eO, {
        title: C.intl.string(S.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                ez,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eU = l(435619),
    eG = l(866665),
    eV = l(885574),
    eW = l(430392),
    eH = l(632015),
    eK = l(256905),
    eY = l(824757);
function eX(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: eY.uW,
        children: [
            (0, n.jsxs)("span", {
                className: eY.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eQ() {
    return (0, n.jsx)(eG.m, {
        text: C.intl.string(S.default.DXe2dP),
        children: (0, n.jsx)(eF.D, {
            className: eY.bk,
            "aria-label": C.intl.string(S.default.Y6y4nQ),
            children: (0, n.jsx)(eV.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eZ(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(eX, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: eY.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: eY.jw,
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
function eJ(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? $.k : eW.RobotIcon;
    return (0, n.jsxs)("span", {
        className: eY.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: eY.L6,
                      children: [
                          (0, n.jsx)(eH.f, {
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
                className: eY.L6,
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
function e0(e) {
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
                        (0, f.PK)(e, t).then(
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
                            (0, f.n6)(e, t).then(
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
            (0, f.PK)(t, r).then(
                (e) => {
                    (0, eK.R)({
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
        : (0, n.jsx)(eX, {
              label: C.intl.string(S.default["9W8SbY"]),
              info: (0, n.jsx)(eQ, {}),
              children: (0, n.jsx)(eF.D, {
                  className: eY.xX,
                  onClick: d,
                  "aria-label": C.intl.string(S.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: u, className: eY.sN, onError: o }) : null,
              }),
          });
}
function e1(e) {
    let { projectId: t, proposal: l, onApprove: a } = e;
    return (0, n.jsx)(eO, {
        title: C.intl.string(S.default["60htw+"]),
        trailing: (0, n.jsx)(eJ, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: eY.rf,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(e0, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(eX, {
                          label: C.intl.string(S.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: eY.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: eY.Aw,
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
                    ? (0, n.jsx)(eX, {
                          label: C.intl.string(C.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: eY.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: eY.uX,
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
                (0, n.jsx)(eZ, { label: C.intl.string(S.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eZ, { label: C.intl.string(S.default.Cn9qix), names: l.privileged_intents ?? [] }),
                null != a
                    ? (0, n.jsx)("div", {
                          className: eY.o1,
                          children: (0, n.jsx)(X.$, {
                              variant: "primary",
                              size: "sm",
                              text: C.intl.string(S.default["hG0Y0+"]),
                              onClick: a,
                          }),
                      })
                    : null,
            ],
        }),
    });
}
var e2 = l(530557),
    e7 = l(872162),
    e5 = l(192308),
    e3 = l(479191);
function e4(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, e5.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]),
        s = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: e2.R })), [r.fields]);
    return (0, n.jsxs)("article", {
        className: e3.L,
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
            (0, n.jsx)(e7.C, { label: C.intl.string(S.default["/e28TK"]), size: "xs", items: s }),
            (0, n.jsx)("div", {
                className: e3.s,
                children: (0, n.jsx)(X.$, {
                    variant: "primary",
                    size: "sm",
                    onClick: i,
                    text: C.intl.string(S.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var e6 = l(408278),
    e8 = l(349735),
    e9 = l(973e3);
function te(e) {
    let { projectId: t, request: l, onDismiss: a } = e;
    return (0, n.jsx)(e8.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: r, saving: i, submit: s } = e;
            return (0, n.jsxs)("form", {
                className: e9.Mk,
                onSubmit: (e) => {
                    (e.preventDefault(), s());
                },
                children: [
                    (0, n.jsxs)("div", {
                        className: e9.TS,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                tag: "span",
                                children: C.intl.string(S.default.wgDhiQ),
                            }),
                            null == a
                                ? null
                                : (0, n.jsx)(e6.K, {
                                      icon: o.P,
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
                        className: e9.p0,
                        children: (0, n.jsx)(X.$, {
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
var tt = l(196582);
let tl = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    tn = {
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
    ta = {
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
function tr(e) {
    return { ...ta[e], name: C.intl.string(tn[e]()) };
}
function ti(e) {
    return tl.includes(e) ? tr(e) : void 0;
}
function ts(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % tl.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, tl[(t + l) % tl.length]);
            }),
            n
        );
    })(e))
        t.set(l, tr(n));
    return t;
}
var to = l(683063),
    tu = l(705754),
    td = l(883455),
    tc = l(13699);
function tf(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, ew.SY)(l.steps),
        c = u
            ? null != d
                ? (0, ew.WQ)(d)
                : e_(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(e_(e));
                  switch (e.status) {
                      case "failed":
                          return C.intl.formatToPlainString(S.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return C.intl.formatToPlainString(S.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return C.intl.formatToPlainString(S.default.vuv9bT, {
                                  task: t,
                                  duration: (0, eP.MB)(e.durationMs),
                              });
                          return C.intl.formatToPlainString(S.default.KS49RN, { task: t });
                      default:
                          return C.intl.formatToPlainString(S.default.KS49RN, { task: t });
                  }
              })(o),
        f = u ? d : void 0,
        m =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, n.jsx)("ol", {
                                    className: tc.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            td.A,
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
                                      className: tc.iq,
                                      children: (0, n.jsx)(tu.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(tt.A, {
        glyph: (0, n.jsx)(to.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: e_(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: tc.nC,
                children: (0, n.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
l(321073);
var tm = l(847374),
    th = l(320448),
    tx = l(140735),
    tg = l(329456);
let tp = [];
function tv(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tg.xL, {
            [tg.Vb]: "in_progress" === t,
            [tg.cT]: "completed" === t,
            [tg.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return C.intl.string(S.default.TkPGOH);
                case "in_progress":
                    return C.intl.string(S.default["oK+fmd"]);
                case "unfinished":
                    return C.intl.string(S.default["1ley3g"]);
                default:
                    return C.intl.string(S.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: tg.Qd,
                itemClassName: tg.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tg.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tg.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tb(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tp), [l, t]),
        i = a.useMemo(() => new Set(r.map((e) => e.key)), [r]),
        s = r.map((e) => e.key).join("\0"),
        [o, u] = a.useState(r),
        [d, c] = a.useState(s),
        [f, m] = a.useState(!1);
    d !== s && (c(s), u([...r, ...o.filter((e) => !i.has(e.key))]), 0 === r.length && m(!1));
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
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let x = o.slice(0, 3),
        g = o.length - x.length;
    return (0, n.jsxs)("span", {
        className: tg.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            x.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    to.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tg.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, n.jsx)(s, { size: 16, alt: a, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tg.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function tj(e) {
    let t,
        { todos: l, provisional: r, agents: s, live: o = !0 } = e,
        u = (function (e) {
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
        d =
            ((t = (s ?? tp).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tp) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tg.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tg.AS, { [tg.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tv, { status: l }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: tg.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", {
                                    className: tg.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, n.jsx)(tb, { agents: d.get(e.id) ?? tp, active: "in_progress" === l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tg.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tv, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tg.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tg.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ty(e) {
    let { todos: t, provisional: l, agents: r, announceProgress: i = !0, live: s = !0, superseded: o = !1 } = e,
        u = a.useId(),
        [d, c] = a.useState(!o),
        [f, m] = a.useState(o);
    f !== o && (m(o), c(!o));
    let h = a.useCallback(() => c((e) => !e), []),
        { completed: x, total: g } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === g) return null;
    let p = C.intl.formatToPlainString(S.default.bQvqly, { completed: x, total: g }),
        b = C.intl.formatToPlainString(S.default["QG/EiF"], { completed: x, total: g }),
        j = d ? tm.a : th._;
    return (0, n.jsxs)(eO, {
        title: C.intl.string(S.default.qCRC6c),
        trailing: (0, n.jsxs)("span", {
            className: tg.ZY,
            children: [
                (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: p }),
                o
                    ? (0, n.jsx)(eF.D, {
                          className: tg.L$,
                          onClick: h,
                          "aria-expanded": d,
                          "aria-controls": u,
                          "aria-label": C.intl.string(d ? S.default.fIBJas : S.default.SVhXLT),
                          children: (0, n.jsx)(j, { size: "xs", color: "currentColor" }),
                      })
                    : null,
            ],
        }),
        className: tg.Nr,
        headerClassName: d ? void 0 : tg.RG,
        "data-vibegrations-todo-card": !0,
        "data-superseded": o ? "true" : void 0,
        children: [
            i && !o ? (0, n.jsx)(tx.A, { role: "status", "aria-live": "polite", children: b }) : null,
            (0, n.jsx)("div", {
                id: u,
                className: tg.rf,
                hidden: !d,
                children: (0, n.jsx)(tj, { todos: t, provisional: l, agents: r, live: s }),
            }),
        ],
    });
}
var tk = l(229775),
    tN = l(165648);
function tw(e) {
    let t = ts(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? ti(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: e_(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tA(e) {
    let {
            projectId: t,
            steps: l,
            active: r = !1,
            turnActive: i = r,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: d,
            provisionalTodo: c,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: x = !1,
            segmentDurationMs: g,
        } = e,
        p = a.useMemo(() => (0, ew.GO)(l, { turnActive: r }), [l, r]),
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
    if (u)
        return (0, n.jsx)("ol", {
            className: tc.pj,
            "data-live": !1,
            children: (0, n.jsx)(tt.A, {
                glyph: (0, n.jsx)(eM.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(S.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let b = r ? void 0 : (g ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        j = m ? ((0, ew.lt)(l) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        N = ts(k.map((e) => e.taskId)),
        w = !x && (r || k.some((e) => "running" === e.task.status)),
        A = tw(k);
    return (0, n.jsx)(tt.l.Provider, {
        value: k.length,
        children: (0, n.jsxs)("ol", {
            className: tc.pj,
            "data-live": w,
            children: [
                (0, n.jsx)(eT.A, {
                    projectId: t,
                    steps: v.steps,
                    fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: x,
                    durationMs: b,
                    connectsDown: k.length > 0,
                    tier: p.turn?.tier,
                }),
                k.map((e, l) => {
                    let a = null != e.task.helperMark ? ti(e.task.helperMark) : void 0,
                        r = a ?? N.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              tf,
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
                          className: tc.YO,
                          children: (0, n.jsx)(ty, { todos: j, provisional: c, agents: A, live: i, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function tE(e) {
    let {
            projectId: t,
            steps: l,
            content: r,
            proposal: s,
            ideas: o,
            attachments: u,
            secretRequest: d,
            settingsRequest: c,
            onPickIdea: f,
            pickedIdeaIds: m,
            onApprovePlan: h,
            sideReply: x = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: p,
            lastStreamedMessage: b,
            showsClosingMessage: j,
            attachmentsHost: y,
        } = a.useMemo(
            () => eL({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        k = null == u ? null : (0, n.jsx)(eU.A, { projectId: t, attachments: u }),
        N = null == k ? null : (0, n.jsx)("div", { className: tc.MT, children: k }),
        w = x
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(S.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: tc.ue,
        children: [
            p.length > 0 && !g
                ? (0, n.jsx)("ol", {
                      className: tc.dO,
                      children: p
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: tc.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tN.PT,
                                              children: eR.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === y && e === b ? N : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(e1, { projectId: t, proposal: s, onApprove: h })
                : j
                  ? (0, n.jsxs)("div", {
                        className: i()(tc.ky, tk.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tN.PT, tc.cW),
                                children: eR.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === y ? N : null,
                            w,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(tc.ky, tk.XR),
                      children: (0, n.jsx)(e4, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(tc.ky, tk.XR),
                      children: (0, n.jsx)(te, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === y ? k : null,
            null != o && o.length > 0 ? (0, n.jsx)(eB, { ideas: o, pickedIdeaIds: m, onPick: f }) : null,
            j ? null : w,
        ],
    });
}
var tS = l(864970),
    tC = l(146806),
    tI = l(475358),
    tT = l(81369),
    tM = l(922016),
    tR = l(980707),
    tP = l(477782),
    t_ = l(717400),
    tL = l(663341),
    tF = l(826745),
    tD = l(783977),
    t$ = l(559647),
    tO = l(775602),
    tq = l(435558),
    tz = l.n(tq),
    tB = l(506774),
    tU = l(228366);
let tG = "VibegrationsComposerDrafts";
function tV() {
    return tB.w.get(tG) ?? {};
}
let tW = new Map(),
    tH = tz().throttle(() => {
        if (0 === tW.size) return;
        let e = tV();
        for (let [t, l] of tW) "" === l ? delete e[t] : (e[t] = l);
        (tW.clear(), tB.w.set(tG, e));
    }, 1e3);
class tK extends D.Ay.Store {
    getDraft(e) {
        let t = tW.get(e);
        return null != t ? t : (tV()[e] ?? "");
    }
}
let tY = new tK(tU.h, {
    LOGOUT: function () {
        return (tW.clear(), tH.cancel(), tB.w.remove(tG), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (tW.set(t, l), tH(), "" === l && tH.flush(), !1);
    },
});
var tX = l(43105),
    tQ = l(252510);
let tZ = [S.default.ZK2O25, S.default["122Ir6"], S.default["9KCASa"]];
function tJ(e) {
    let { targetElementRef: t, onDismiss: l } = e,
        r = a.useMemo(() => [{ text: C.intl.string(S.default.sZCqrE), onClick: l }], [l]);
    return (0, n.jsx)(tX.A, {
        targetElementRef: t,
        title: C.intl.string(S.default.n8wtkv),
        body: C.intl.format(S.default.Oaq2Cc, {
            content: (0, n.jsxs)("div", {
                className: tQ.r,
                children: [
                    C.intl.string(S.default.cK0dk1),
                    (0, n.jsx)("ul", {
                        className: tQ.e,
                        children: tZ.map((e, t) => (0, n.jsx)("li", { children: C.intl.string(e) }, t)),
                    }),
                ],
            }),
        }),
        position: "top",
        actions: r,
        onRequestClose: l,
    });
}
var t0 = l(379307);
(l(323874), l(14289), l(35956));
var t1 = l(285796),
    t2 = l(673724),
    t7 = l(839214);
let t5 = [],
    t3 = 1,
    t4 = (0, t7.D)(() => ({ draftsByProject: {} }));
function t6(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? t5;
}
function t8(e, t) {
    return t6(t4.getState(), e, t);
}
function t9(e, t, l) {
    let { draftsByProject: n } = t4.getState();
    t4.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function le(e, t, l, n) {
    let a = t8(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (t9(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function lt(e, t) {
    (0, f.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function ll(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lt(e, t.ref.id));
}
function ln(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = t4.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? t5) l ? ll(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    t4.setState({ draftsByProject: i });
}
function la(e, t) {
    let l = t8(e, t);
    if (0 !== l.length) {
        for (let t of l) ll(e, t);
        t9(e, t, t5);
    }
}
(tU.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(t4.getState().draftsByProject)) ln(e, { deleteFromWorker: !0 });
}),
    tU.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ln(t, { deleteFromWorker: !1 });
    }));
var lr = l(590380),
    li = l(298668);
let ls = t2.Is;
function lo(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        r = t4.useState((e) => t6(e, t, l)),
        i = a.useRef(n);
    i.current = n;
    let s = a.useCallback(
            (e) => {
                let n = t8(t, l).length;
                !(function (e, t, l) {
                    if (0 === l.length) return;
                    let n = l.map((e) => {
                        let { draft: t, upload: l } = e;
                        return { draft: { ...t, localId: t3++ }, upload: l };
                    });
                    for (let { draft: l, upload: a } of (t9(e, t, [
                        ...t8(e, t),
                        ...n.map((e) => {
                            let { draft: t } = e;
                            return t;
                        }),
                    ]),
                    n))
                        a?.().then(
                            (n) => {
                                "errorText" in n
                                    ? le(e, t, l.localId, { status: "error", errorText: n.errorText })
                                    : le(e, t, l.localId, { status: "ready", ref: n })
                                      ? setTimeout(
                                            () =>
                                                le(e, t, l.localId, {
                                                    status: "error",
                                                    errorText: C.intl.string(S.default.HL9CT6),
                                                }),
                                            t2.$f - 3e5,
                                        )
                                      : lt(e, n.id);
                            },
                            (n) => {
                                (console.error("[vibegrations] attachment upload failed", n),
                                    le(e, t, l.localId, {
                                        status: "error",
                                        errorText: C.intl.string(S.default.GwEHvn),
                                    }));
                            },
                        );
                })(
                    t,
                    l,
                    e.map((e) => {
                        let t = "" === e.type ? "application/octet-stream" : e.type,
                            l = { name: e.name, contentType: t };
                        if (n++ >= ls)
                            return {
                                draft: {
                                    ...l,
                                    status: "error",
                                    errorText: C.intl.formatToPlainString(S.default.DlX57a, { count: ls }),
                                },
                            };
                        if (!(0, t2.x5)(e.size, t))
                            return {
                                draft: {
                                    ...l,
                                    status: "error",
                                    errorText: C.intl.formatToPlainString(S.default.cI7t94, {
                                        size: (0, t2.ZJ)((0, t2.yr)(t)),
                                    }),
                                },
                            };
                        let a = t2.Wb.has(t) ? URL.createObjectURL(e) : void 0;
                        return { draft: { ...l, status: "uploading", previewUrl: a }, upload: () => i.current(e) };
                    }),
                );
            },
            [t, l],
        ),
        o = a.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = t8(t, l)).find((t) => t.localId === e)) &&
                    (ll(t, a),
                    t9(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        u = a.useCallback(
            () =>
                (function (e, t) {
                    let l = t8(e, t);
                    if (0 === l.length) return [];
                    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
                    return (t9(e, t, t5), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
                })(t, l),
            [t, l],
        );
    return { drafts: r, addFiles: s, removeDraft: o, settled: r.every((e) => "ready" === e.status), takeRefs: u };
}
function lu(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(lr.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: li.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: li.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(S.default["3HWvgk"]),
                children: (0, n.jsx)(t1.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var ld = l(789438);
let lc = "text-md/normal",
    lf = null;
function lm(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [f, m] = a.useState(0),
        [h, x] = a.useState(0),
        [g, p] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            (x(i + r), m(s));
            let o = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                f = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : o / c;
            p({
                frontFrom: 1e3 * (0, tC._R)(f),
                frontTo: 1e3 * (0, tC._R)(h),
                backFrom: 1e3 * (0, tC.T)(f),
                backTo: 1e3 * (0, tC.T)(h),
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
    let A = "in" === y ? g.backFrom : g.frontFrom,
        E = "out" === y ? g.frontTo : g.backTo,
        I = (0, D.bG)([tO.Ay], () => tO.Ay.useReducedMotion),
        T = t === C.intl.string(S.default.Jj8Ftb),
        M = s === t && T;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(ld.VT, { [ld.qk]: a }),
            style: a
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, E - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, n.jsx)(tI.e, { shortcut: "tab", className: ld.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tS.o, {
                text: t,
                variant: lc,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(ld.xM, { [ld.s2]: r }),
                onStart: w,
                onComplete: () => o(t),
            }),
            R(ld.IS, l || (!I && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: ld.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: lc, tag: "span", children: t }),
            }),
            M
                ? (0, n.jsxs)("span", {
                      className: ld.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: lc, tag: "span", className: ld.xM, children: t }),
                          R(ld.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function lh(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onApprove: f,
            onImport: m,
            suggestion: h,
            questionOpen: x = !1,
            tipOpen: g = !1,
            onDismissTip: p,
            hasPendingContext: v = !1,
            modelSettings: b,
            onModelSettingsChange: j,
        } = e,
        [y, k] = a.useState(() => tY.getDraft(t)),
        N = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), k(e));
            },
            [t],
        ),
        [w, A] = a.useState(t);
    w !== t && (A(t), k(tY.getDraft(t)));
    let E = (0, D.bG)([tO.Ay], () => tO.Ay.isSubmitButtonEnabled),
        [I, T] = a.useState(!1),
        [M, R] = a.useState(!1);
    a.useEffect(() => {
        i || R(!1);
    }, [i]);
    let P = a.useRef(null),
        {
            drafts: _,
            addFiles: L,
            removeDraft: F,
            settled: $,
            takeRefs: O,
        } = lo({ projectId: t, surface: "chat", onUploadFile: d }),
        q = "" !== y.trim() || _.length > 0 || v,
        z = l && q && $,
        [B, U] = a.useState(null);
    a.useEffect(() => {
        if (null == B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => U(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]);
    let G = a.useCallback(() => {
            if (!z) return;
            p?.();
            let e = O();
            o(y, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == lf && (lf = document.createElement("canvas").getContext("2d"));
                let i = lf;
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
                    f = c.lastIndexOf(" ");
                return (f > 0 ? c.slice(0, f) : c).trimEnd();
            })(J.current?.querySelector("textarea") ?? null, eo.current, y);
            ("" !== t && U(t), N(""));
        }, [z, y, o, O, N, p]),
        V = a.useCallback(
            (e) => {
                (e.preventDefault(), G());
            },
            [G],
        ),
        W = a.useCallback(() => {
            null == u || M || (R(!0), u());
        }, [u, M]),
        H = null == h || "" !== y || !l || r || s || v ? null : h,
        K = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !M) {
                    (e.preventDefault(), e.stopPropagation(), W());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != H) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), N(H));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, f, i, u, M, W, H, N],
        ),
        Y = a.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), L(t));
            },
            [l, L],
        ),
        X = a.useCallback(
            (e) => {
                (e.preventDefault(), T(!1), l && L(Array.from(e.dataTransfer.files)));
            },
            [l, L],
        ),
        Q = a.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), T(!0));
        }, []),
        Z = a.useCallback(
            (e) => {
                (L(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [L],
        ),
        J = a.useRef(null),
        ee = a.useRef(null),
        [et, el] = a.useState(0),
        [en, ea] = a.useState(!1);
    a.useEffect(() => {
        if (0 === y.length) return void ea(!1);
        let e = J.current?.querySelector("textarea");
        if (null != e) {
            let t = lp(e);
            null != t && el(t);
        }
        ea(!0);
        let t = setTimeout(() => ea(!1), lx);
        return () => clearTimeout(t);
    }, [y]);
    let er = a.useMemo(() => ({ "--custom-glow-x": `${et}px` }), [et]),
        ei = en ? ` ${ld.EB}` : "",
        es = s
            ? C.intl.string(S.default.pGFXZ0)
            : r
              ? C.intl.string(S.default.JeM47J)
              : l
                ? v
                    ? C.intl.string(S.default.Bs7bUv)
                    : x
                      ? C.intl.string(S.default.M3ovXY)
                      : C.intl.string(i ? S.default["67PpcP"] : S.default.ahRdoJ)
                : C.intl.string(S.default.nm4w9P),
        eo = a.useRef(0),
        eu = a.useRef(null),
        ed = a.useCallback((e) => {
            if ((eu.current?.disconnect(), null == e)) return;
            eo.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eo.current = e.clientWidth;
            });
            (t.observe(e), (eu.current = t));
        }, []),
        ec = a.useId(),
        ef = null != H,
        em = B ?? H ?? es,
        eh = "" === y && "" !== em;
    return (0, n.jsxs)("form", {
        onSubmit: V,
        onDrop: X,
        onDragOver: Q,
        onDragLeave: () => T(!1),
        className: I ? `${ld.DA} ${ld.pV}` : ld.DA,
        children: [
            _.length > 0
                ? (0, n.jsx)("div", {
                      className: ld.lN,
                      children: _.map((e) => (0, n.jsx)(lu, { draft: e, onRemove: F }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${ld.wg} ${ld.LP}${ei}`, style: er, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${ld.wg} ${ld.L3}${ei}`, style: er, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: ld.VA,
                ref: J,
                children: [
                    (0, n.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: Z,
                        className: ld.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == m
                        ? (0, n.jsx)(eG.m, {
                              text: C.intl.string(S.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: ee,
                                  type: "button",
                                  className: `${ld.Y0} ${ld.nu}`,
                                  disabled: !l,
                                  onClick: () => P.current?.click(),
                                  "aria-label": C.intl.string(S.default.d6Rqlu),
                                  children: (0, n.jsx)(tT.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: ld.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tM.Y, {
                              targetElementRef: ee,
                              position: "top",
                              align: "left",
                              animation: tM.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tR.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(tP.rX, {
                                          children: [
                                              (0, n.jsx)(tP.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: tT.H,
                                                  leadingAccessory: { type: "icon", icon: tT.H },
                                                  action: () => P.current?.click(),
                                              }),
                                              null != m
                                                  ? (0, n.jsx)(tP.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(S.default.edKajy),
                                                        iconLeft: t_.q,
                                                        leadingAccessory: { type: "icon", icon: t_.q },
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
                                      ref: ee,
                                      type: "button",
                                      className: `${ld.Y0} ${ld.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(tL.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: ld.Qu,
                                      }),
                                  });
                              },
                          }),
                    eh
                        ? (0, n.jsx)("div", {
                              ref: ed,
                              className: ld.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(lm, { text: em, offering: ef && null == B, typed: null != B }),
                          })
                        : null,
                    (0, n.jsx)(tF.y, {
                        value: y,
                        onChange: (e) => N(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: Y,
                        placeholder: eh ? "" : es,
                        disabled: !l,
                        "aria-label": C.intl.string(S.default.OPr66w),
                        "aria-describedby": eh ? ec : void 0,
                        rows: 1,
                        className: ld.jp,
                    }),
                    eh ? (0, n.jsx)(tx.A, { id: ec, children: es }) : null,
                    (0, n.jsx)("div", {
                        className: ld.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(eG.m, {
                                      text: C.intl.string(S.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${ld.Y0} ${ld.$E}`,
                                          disabled: M,
                                          onClick: W,
                                          "aria-label": C.intl.string(S.default.KdgI4k),
                                          children: (0, n.jsx)(eM.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != j
                                  ? (0, n.jsx)(t0.A, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${ld.Y0} ${ld.$E}`,
                                        icon: (0, n.jsx)(tD.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    E
                        ? (0, n.jsxs)("div", {
                              className: ld.fF,
                              children: [
                                  (0, n.jsx)("div", { className: ld.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: ld.rt,
                                      disabled: !z,
                                      "aria-label": C.intl.string(S.default["22GHMt"]),
                                      children: (0, n.jsx)(t$.SendMessageIcon, {
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
            g && null != p ? (0, n.jsx)(tJ, { targetElementRef: J, onDismiss: p }) : null,
        ],
    });
}
let lx = 1500,
    lg = [
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
function lp(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = lp.mirror;
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
                (lp.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of lg) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
lp.mirror = null;
var lv = l(320095),
    lb = l(963852),
    lj = l(521981),
    ly = l(763754),
    lk = l(491182),
    lN = l(438729),
    lw = l(622868),
    lA = l(448368),
    lE = l(837528),
    lS = l(439762),
    lC = l(715628),
    lI = l(752636),
    lT = l(9842),
    lM = l(589022),
    lR = l(95701),
    lP = l(994500),
    l_ = l(967198);
let lL = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lF(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lD(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function l$(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lD(e, t),
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
    if (lF(a) && lF(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lF(lD(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function lO(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([tO.Ay], () => tO.Ay.useReducedMotion),
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
                      for (; r > 0 && l$(t, r);) r--;
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
        f = a.useRef(0);
    (a.useEffect(() => {
        if (u)
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
                                    for (; n > t + 1 && l - n < 12 && lL.has(e.charAt(n - 1));) n--;
                                    return lL.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && l$(t, o);) o++;
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
    let m = Math.min(o.length, e.length);
    return { text: m >= e.length ? e : e.slice(0, m), revealing: r && m < e.length };
}
var lq = l(803306);
let lz = new Set(),
    lB = new Map();
function lU(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
var lG = l(73432),
    lV = l(441136);
let lW = (0, lR.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    lH = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lK(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lV.Yq, { [lV.x1]: t }), children: e });
}
function lY(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lX(e, t, l) {
    let { content: r } = (0, lS.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lW, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(lN.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lC.A)(i, r);
}
function lQ(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lE.m)(e, lW, t.usernameProfile, r),
        o = (0, lE.Jo)(t.avatarProfile, r),
        u = (0, D.bG)([l_.A], () => l_.A.getGuildId()),
        d = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eu.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(lM.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
function lZ(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, lj.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lV.GV,
                              children: [
                                  (0, n.jsx)(lG.A, { className: lV.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, D.cf)(
            [lP.A],
            () => ({
                isReplyAuthorBlocked: lP.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lP.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, ly.X4)(l),
        c = (0, ly.X4)(t),
        f = lQ(l);
    return (0, n.jsx)(lA.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lW,
        referencedMessage: { state: lT.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
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
function lJ(e) {
    let { message: t, author: l } = e,
        a = lQ(t);
    return (0, n.jsx)(lw.Ay, {
        message: t,
        channel: lW,
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
function l0(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || lz.has(e) || null != eu.default.getUser(e)) return;
                let t = lB.get(e) ?? 0;
                t >= 3 ||
                    (lB.set(e, t + 1),
                    lz.add(e),
                    lq
                        .wz(e)
                        .finally(() => lz.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, D.bG)(
            [eu.default],
            () => lU(r, null != r ? eu.default.getUser(r) : null, eu.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, ly.FT)(o, null), [o]),
        d = a.useMemo(() => (0, eN.LL)(t), [t]),
        c = d?.body ?? t,
        f = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, lb.Ay)({ channelId: lW.id, content: c, author: o });
            return (0, lv.rh)({ ...e, timestamp: lY(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, o, l]);
    return null == f
        ? null
        : (0, n.jsx)(l1, { message: f, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function l1(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = lX(t, a);
    return (0, n.jsx)(lk.A, {
        className: lV.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(lJ, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: lV.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lV.GV,
                              children: [
                                  (0, n.jsx)(lG.A, { className: lV.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lV.WO, children: o }),
                      ],
                  }),
        childrenAccessories: lK(i, "" !== a),
        disableInteraction: !0,
    });
}
function l2(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lO(t, { streaming: u }),
        f = a.useMemo(() => (0, ly.FT)(null, null), []),
        m = a.useMemo(() => ({ ...f, nick: "Conjure", colorString: "var(--text-brand)" }), [f]),
        h = i?.userId,
        x = (0, D.bG)(
            [eu.default],
            () => lU(h, null != h ? eu.default.getUser(h) : null, eu.default.getCurrentUser()),
            [h],
        ),
        g = a.useMemo(() => (null == i ? null : (0, eN.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == x) return null;
            let e = (0, lb.Ay)({ channelId: lW.id, content: g?.body ?? i.content, author: x });
            return (0, lv.rh)({ ...e, id: i.id, timestamp: lY(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, g, x]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lW.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, lb.Ay)({ channelId: lW.id, content: d, author: lH });
            return (0, lv.rh)({
                ...e,
                timestamp: lY(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != v ? { type: P.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = lX(b, d, lV.OS);
    return (0, n.jsxs)("div", {
        className: lV.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(lk.A, {
                className: lV.yE,
                author: m,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(lZ, { baseMessage: b, referenced: p, selected: g?.label, onJumpToReplied: s }),
                childrenHeader: (0, lI.A)({ message: b, channel: lW, author: m, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lK(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lV.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)($.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let l7 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var l5 = l(375068);
function l3(e) {
    let { projectId: t, messages: l, ref: r, onPickIdea: i, onApprovePlan: s, floatingSettingsMessageId: o } = e,
        u = a.useRef(null),
        d = a.useCallback(
            (e) => {
                ((u.current = e), "function" == typeof r ? r(e) : null != r && (r.current = e));
            },
            [r],
        ),
        [c, f] = a.useState(null),
        m = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(m.current), []);
    let h = a.useCallback((e) => {
            let t = u.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                f(e),
                window.clearTimeout(m.current),
                (m.current = window.setTimeout(() => f(null), 1600)));
        }, []),
        x = a.useMemo(
            () =>
                (function (e) {
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
                                            let t = (0, ew.lt)(e.steps);
                                            return null != t
                                                ? t
                                                : null != e.todos && e.todos.length > 0
                                                  ? e.todos
                                                  : null;
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
                        let e = !(0, eA.BL)(t),
                            a = eL({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            r = a.lastStreamedMessage?.key,
                            i = (0, ew.C6)(t.steps, { turnActive: e }),
                            { lastWork: s, open: o } = (0, ew.CT)(i, { turnActive: e }),
                            u = i.at(-1)?.index,
                            d = !1;
                        for (let c of i) {
                            if (null != c.prose && l7.test(c.prose.content)) d = !0;
                            else if (null != c.prose) {
                                let l = `${t.render_id}:${c.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: l,
                                        message: t,
                                        groupStart: !1,
                                        content: c.prose.content,
                                        hostsAttachments:
                                            "streamed" === a.attachmentsHost &&
                                            c.prose.key === r &&
                                            null != t.attachments,
                                        streaming: e && c.index === u && !c.hasWork,
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
                                        active: c.index === o,
                                        closed: c.index !== o,
                                        ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                        reportsDuration: c.index === s,
                                        hostsChecklist: c.hasTodos,
                                        turnActive: eE(t),
                                        checklistSuperseded: c.hasTodos && l.has(t.render_id),
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let c = l7.test(t.content ?? "");
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
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
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
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                            (e &&
                                ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                                n.push(e));
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
                })(l),
            [l],
        ),
        g = l.at(-1);
    return 0 === l.length
        ? (0, n.jsx)("ol", {
              ref: r,
              className: l5.x7,
              children: (0, n.jsx)(l4, {
                  role: "assistant",
                  children: (0, n.jsx)(l2, { content: C.intl.string(S.default.khZEUv) }),
              }),
          })
        : (0, n.jsx)("ol", {
              ref: d,
              className: l5.x7,
              children: x.map((e) => {
                  let a = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                          return (0, n.jsx)(
                              l4,
                              {
                                  role: "user",
                                  anchorId: a.id,
                                  highlighted: c === a.id,
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(l0, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != l ? (0, n.jsx)(eU.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, n.jsx)(
                              l4,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(l2, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, n.jsx)(eU.A, { projectId: t, attachments: a.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, n.jsx)(
                              l4,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tA, {
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
                      case "interrupted":
                          return (0, n.jsx)(
                              l4,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tA, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, n.jsx)(
                              l4,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tA, {
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
                      case "closing":
                          return (0, n.jsx)(
                              l4,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(l2, {
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
                                      onJumpToReplied: null != a.in_reply_to ? () => h(a.in_reply_to) : void 0,
                                      accessories: (0, n.jsx)(tE, {
                                          projectId: t,
                                          steps: a.steps,
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
                                          settingsRequest: a.id === o ? void 0 : a.settingsRequest,
                                          onPickIdea: i,
                                          onApprovePlan: a === g ? s : void 0,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function l4(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(l5.xk, { [l5.Qo]: r, [l5.q3]: s }),
        children: l,
    });
}
function l6(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(S.default.W7oyuf);
        case "closed":
            return C.intl.string(S.default["yBmS+I"]);
        case "failed":
            return C.intl.string(S.default.eE60xI);
    }
}
var l8 = l(559676),
    l9 = l(823376),
    ne = l(495557);
function nt(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = lO(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: ne.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: o,
                className: ne.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tN.PT, ne.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eR.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nl = l(921461);
function nn(e) {
    let { activity: t, compacting: l = !1, restoring: r = !1, controlling: s = !1, spoken: o, onSpokenChange: u } = e,
        d = a.useRef(null),
        c = a.useId(),
        [f, m] = a.useState(null),
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
        x = C.intl.string(h),
        [g, p] = a.useState(o ?? x),
        v = a.useRef(x);
    (a.useEffect(() => {
        v.current = x;
    }, [x]),
        a.useEffect(() => {
            u?.(g);
        }, [g, u]));
    let b = a.useRef(null),
        j = a.useRef(g);
    (a.useEffect(() => {
        j.current = g;
    }, [g]),
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
        N = y && null != k && f === k,
        w = a.useCallback(() => {
            y && null != k && m((e) => (e === k ? null : k));
        }, [y, k]),
        A = a.useCallback(() => m(null), []);
    return (0, n.jsx)(tM.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: N,
        onRequestClose: A,
        renderPopout: () => (0, n.jsx)(nt, { id: c, activity: t }),
        children: () =>
            (0, n.jsxs)(eF.D, {
                innerRef: d,
                className: i()(nl.hF, y && nl.Xd),
                "aria-label": C.intl.string(r ? S.default.pGFXZ0 : S.default.SzdX35),
                "aria-expanded": N,
                "aria-describedby": N ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(h),
                onClick: w,
                children: [
                    (0, n.jsx)("span", {
                        className: nl.bl,
                        children: (0, n.jsx)(l9.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: nl.xu,
                        "aria-hidden": !!s || void 0,
                        children: (0, n.jsx)(tS.o, {
                            ref: b,
                            text: g,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nl.yE,
                        }),
                    }),
                ],
            }),
    });
}
let na = { second: 1e3, minute: 6e4 };
function nr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let l;
            if (null == e) return;
            let a = na[t];
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
var ni = l(979148);
function ns(e) {
    let { startedAt: t } = e,
        l = nr(t);
    return (0, n.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: ni.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, eP.C7)(l),
    });
}
function no(e) {
    let { startedAt: t } = e,
        l = nr(t, "minute");
    return (0, n.jsx)(tx.A, { role: "timer", children: (0, eP.Us)(l) });
}
var nu = l(280894);
function nd(e) {
    return e.toLocaleString();
}
function nc(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: nu.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: nu.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nd((0, t2.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nd(l.input_tokens),
                    " in \xb7 ",
                    nd(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${nd(l.cache_creation_input_tokens)} cache write \xb7 ${nd(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function nf(e) {
    let { project: t } = e,
        l = (0, t2.wU)(t.compaction),
        a = (0, t2.wU)(t.classifier),
        r = (0, t2.wV)(t.orchestrator, t.codegen),
        i = (0, t2.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: nu.si,
        role: "dialog",
        "aria-label": C.intl.string(S.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: nu.Q$,
                children: (0, n.jsxs)("div", {
                    className: nu.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nd((0, t2.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(nc, { label: C.intl.string(S.default.R9aduM), usage: r }),
            (0, n.jsx)(nc, { label: C.intl.string(S.default.Tj6b30), usage: l }),
            (0, n.jsx)(nc, { label: C.intl.string(S.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: nu.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(S.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, t2.sj)(i) ? "\u2014" : `${Math.round(100 * (0, t2.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nm(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tM.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(nf, { project: t }),
        children: (e) =>
            (0, n.jsx)(eF.D, {
                innerRef: l,
                className: nu.Y$,
                "aria-label": C.intl.string(S.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(eV.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nh = l(258216);
function nx(e) {
    let t,
        {
            projectId: l,
            thinking: r,
            turnStartedAt: i,
            restoring: s = !1,
            thinkingActivity: o,
            compacting: u,
            projectUsage: d,
            connState: c,
        } = e,
        f = (0, l8.o4)(l),
        [m, h] = a.useState(null),
        x =
            null == d
                ? null
                : ((t = (0, t2.a7)(d.cost_usd)),
                  {
                      text: C.intl.formatToPlainString(S.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: C.intl.formatToPlainString(S.default["7SZZvj"], { runes: t, turns: d.turns }),
                  }),
        g = r && null != i;
    return (0, n.jsxs)("div", {
        className: nh.jf,
        children: [
            (0, n.jsxs)("div", {
                className: nh.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    r || s || f
                        ? (0, n.jsx)(nn, {
                              activity: o,
                              compacting: u,
                              restoring: s,
                              controlling: f,
                              spoken: m,
                              onSpokenChange: h,
                          })
                        : null,
                    g ? (0, n.jsx)(ns, { startedAt: i }) : null,
                ],
            }),
            g ? (0, n.jsx)(no, { startedAt: i }) : null,
            null == d || null == x
                ? null
                : (0, n.jsxs)("span", {
                      className: nh.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": x.aria,
                              children: x.text,
                          }),
                          (0, n.jsx)(nm, { project: d }),
                      ],
                  }),
            "open" === c
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === c ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(S.default.eDDdhB, { status: l6(c) }),
                      "data-vibegrations-conn": !0,
                      "data-state": c,
                      className: nh.XF,
                      children: l6(c),
                  }),
        ],
    });
}
var ng = l(22231),
    np = l(900797),
    nv = l(477155),
    nb = l(935286),
    nj = l(856795),
    ny = l(424110);
function nk(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eF.D, {
        className: i()(ny.uK, { [ny.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": C.intl.formatToPlainString(d ? S.default.aL1BKQ : S.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: ny.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: ny.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: ny.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: ny.ed,
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
                      className: ny.rM,
                      children: C.intl.string(S.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nN(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(ny.Ge, ny.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(nk, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: ny.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: ny.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(ng.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(ny.Pu, ny.es), children: s }),
                ],
            }),
        ],
    });
}
function nw(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [s, u] = a.useState({}),
        [d, c] = a.useState({}),
        [f, m] = a.useState(0),
        [h, x] = a.useState(null),
        [g, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        N = a.useRef(null),
        [w, A] = a.useState(null),
        E = a.useRef(null),
        I = a.useRef(0),
        T = null == l,
        M = t.questions.length,
        R = Math.min(f, M - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        O = d[P.id] ?? "",
        { text: q, phase: z } = (0, nj.Q)(P.question),
        B = q === P.question,
        U = B && D?.id === P.id && D.truncated;
    a.useLayoutEffect(() => {
        if (null == w || F || !B) return;
        function e() {
            if (null == w) return;
            let e = w.scrollHeight > w.clientHeight + 1;
            $((t) => (t?.id === P.id && t.truncated === e ? t : { id: P.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(w), () => t.disconnect());
    }, [B, w, P.id, F]);
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
                (x({ direction: t, moves: l }), p({ question: P, draft: O, direction: t, moves: l }), k(!0), m(e));
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
                if (T) return;
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
            [s, t, T, R, P.id, V, W],
        ),
        X = a.useCallback(() => {
            if (T || 0 === R) return;
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
        }, [t, T, R, W]),
        Q = R > 0 && !T,
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
            T || R >= M - 1 || W(R + 1, "forward");
        }, [T, R, M, W]),
        er = R < M - 1 && !T;
    return (0, n.jsxs)("section", {
        className: i()(ny.$O, { [ny.fI]: J && !et, [ny.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": T ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: ny.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: N,
                        className: ny.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(ny.TK, ny.R_, { [ny.TB]: "exit" === z, [ny.JU]: "enter" === z }),
                                children: q,
                            }),
                            U || F
                                ? (0, n.jsx)("div", {
                                      className: ny.Q7,
                                      children: (0, n.jsx)(eG.m, {
                                          text: G,
                                          children: (0, n.jsx)(e6.K, {
                                              icon: F ? np.t : tm.a,
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
                                : (0, n.jsx)(eF.D, {
                                      className: i()(ny.gb, ny.Q7),
                                      onClick: en,
                                      "aria-label": C.intl.string(S.default.fMdUNR),
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
                        className: ny.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: ny.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: E,
                                    className: ny.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                nk,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: T,
                                                    onPick: (e) => Y({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: ny.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: ny.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(ng.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tF.y, {
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
                                                    disabled: T,
                                                    rows: 1,
                                                    className: ny.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == g
                                    ? null
                                    : (0, n.jsx)(
                                          nN,
                                          { question: g.question, draft: g.draft, direction: g.direction, disabled: T },
                                          g.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            M > 1
                ? (0, n.jsxs)("div", {
                      className: ny.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: C.intl.formatToPlainString(S.default["7bypa+"], { index: R + 1, total: M }),
                          }),
                          (0, n.jsxs)("div", {
                              className: ny.Np,
                              children: [
                                  (0, n.jsx)(eF.D, {
                                      className: i()(ny.gb, { [ny.yI]: !Q }),
                                      onClick: Q ? X : void 0,
                                      tabIndex: Q ? 0 : -1,
                                      "aria-hidden": !Q,
                                      "aria-disabled": T,
                                      "aria-label": C.intl.string(S.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": Q ? void 0 : "true",
                                      children: (0, n.jsx)(nv.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eF.D, {
                                      className: i()(ny.gb, { [ny.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": T,
                                      "aria-label": C.intl.string(S.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(nb.E, {
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
var nA = l(643278),
    nE = l(191521),
    nS = l(405189);
function nC(e) {
    let { line: t, placement: l, todos: r, todosLive: s = !0, provisionalTodo: o, agents: u, onJumpToActivity: d } = e,
        c = null != l,
        [f, m] = a.useState(l ?? "top"),
        [h, x] = a.useState(c),
        [g, p] = a.useState(!1),
        [v, b] = a.useState(!1),
        [j, y] = a.useState(c);
    (j !== c && (y(c), null != l ? (m(l), x(!0)) : (p(!1), b(!1))),
        a.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => x(!1), 150);
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
        [E, I] = a.useState(v);
    (E !== v && (I(v), v ? N(!0) : A(!1)),
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
              className: nS.qd,
              "data-placement": f,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(nS.vK, { [nS.ho]: g && c, [nS.ET]: !c }),
                      children: [
                          null == d
                              ? (0, n.jsx)("ol", {
                                    className: i()(nS.Rk, tc.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(tt.A, {
                                        glyph: (0, n.jsx)(nE.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eF.D, {
                                    className: nS.pZ,
                                    onClick: d,
                                    "aria-label": C.intl.string(S.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(nS.Rk, tc.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(tt.A, {
                                            glyph: (0, n.jsx)(nE.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, n.jsx)(eG.m, {
                                    text: C.intl.string(S.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eF.D, {
                                        className: nS.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": C.intl.string(S.default.qCRC6c),
                                        children: (0, n.jsx)(nA.ClipboardListIcon, {
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
                            className: i()(nS.vB, { [nS.pg]: v && w, [nS.ui]: !v }),
                            children: (0, n.jsx)(ty, {
                                todos: r,
                                provisional: o,
                                agents: u,
                                live: s,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var nI = l(651649),
    nT = l(522250),
    nM = l(670455),
    nR = l(348800);
let nP = [C.intl.string(S.default["E+Q26x"]), C.intl.string(S.default["06/jqP"]), C.intl.string(S.default["3gSfUa"])];
function n_(e) {
    var t;
    let { projectId: r, restoreState: i } = e,
        s = (0, D.bG)([eA.Ay], () => eA.Ay.getMessages(r), [r]),
        o = (0, D.bG)([f.Ay], () => f.Ay.getConnState(r), [r]),
        u = (0, D.bG)([f.Ay], () => f.Ay.isChatStopped(r), [r]),
        d = (0, D.bG)([eA.Ay], () => eA.Ay.getProjectUsage(r), [r]),
        c = (0, D.bG)([eA.Ay], () => eA.Ay.getThinkingActivity(r), [r]),
        m = (0, D.bG)([eA.Ay], () => eA.Ay.isCompacting(r), [r]),
        h = (0, D.bG)([f.Ay], () => f.Ay.getModelSettings(r), [r]),
        x = a.useRef(null),
        g = a.useRef(null),
        p = a.useRef(null),
        b = a.useRef(!0),
        [j, y] = a.useState(!0);
    a.useEffect(() => {
        b.current && g.current?.scrollToBottom();
    }, [s]);
    let k = a.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        N = a.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            b.current = t < 32;
            let l = t > 1;
            y((e) => (!l === e ? e : !l));
        }, []);
    (a.useLayoutEffect(() => {
        let e = x.current,
            t = p.current;
        if (null == e) return;
        let l = g.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            b.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => g.current?.scrollToBottom())));
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
            (0, f.Hc)(r);
        }, [r]),
        a.useEffect(
            () => () => {
                let e;
                (e = (0, nT.hl)(r)) < nT.qu ||
                    (!(0, nT.Xi)(r) &&
                        nI.A.possiblyShowFeedbackModal(nM.MW.VIBEGRATIONS, () => {
                            ((0, nT.AH)(r),
                                (0, e5.openModalLazy)(async () => {
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
    let w = (0, eI.Q_)(r),
        A = a.useCallback(
            (e, t) => {
                (0, f.dv)(r, e, t);
            },
            [r],
        ),
        E = a.useCallback(
            (e, t) => {
                0 === w.annotations.length
                    ? A(e, t)
                    : (A((0, eN.Mx)({ annotations: w.annotations, metaComment: e, context: w.context }), t),
                      (0, eI.PS)(r));
            },
            [w, A, r],
        ),
        I = a.useCallback(() => (0, f.fu)(r), [r]),
        T = a.useCallback((e) => A(e.implementation_prompt), [A]),
        M = a.useCallback((e) => A(e), [A]),
        R = a.useCallback((e) => (0, f.XZ)(r, e), [r]),
        P = a.useCallback((e) => (0, f.vX)(r, e), [r]),
        _ = a.useCallback(() => A(C.intl.string(S.default.Jj8Ftb)), [A]),
        L = i?.status === "restoring",
        F = "open" === o && !u && !L,
        $ = s[s.length - 1],
        O = null != $ && "assistant" === $.role && null != $.proposal,
        [q, z] = a.useState(null),
        B = $?.clarification != null && $.clarification.id !== q ? $.clarification : null,
        U = a.useCallback(() => {
            null != B && z(B.id);
        }, [B]),
        [G, V] = a.useState(!1);
    a.useEffect(() => {
        if (!(0, eC.Fy)(r)) return;
        let e = setTimeout(() => {
            ((0, eC.fA)(), V(!0));
        }, 0);
        return () => clearTimeout(e);
    }, [r]);
    let W = a.useCallback(() => V(!1), []),
        H = (0, D.bG)([f.Ay], () => f.Ay.getSettings(r), [r]),
        [K, Y] = a.useState(null),
        Q =
            !G &&
            null != $ &&
            "assistant" === $.role &&
            null != $.settingsRequest &&
            $.id !== K &&
            ((t = $.settingsRequest),
            null != H &&
                (t.keys ?? []).some((e) => {
                    let t = H.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return H.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = H.values[e];
                    return null == l || "" === l;
                }))
                ? $
                : null,
        Z = Q?.settingsRequest ?? null,
        J = a.useCallback(() => {
            null != Q && Y(Q.id);
        }, [Q]),
        ee = G || null != Z,
        et = (0, D.bG)([eA.Ay], () => eA.Ay.hasLoadedHistory(r), [r]),
        el = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return nP[e % nP.length];
        }, [r]),
        en = O
            ? C.intl.string(S.default.Jj8Ftb)
            : $?.kind === "plan_implemented"
              ? C.intl.string(S.default["3sTTBu"])
              : et && 0 === s.length
                ? el
                : null,
        ea = a.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, eA.BL)(t)) return t;
            }
        }, [s]),
        er = null != ea,
        ei =
            null != ea
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = eS.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ea)
                : void 0,
        es = O && F ? _ : void 0,
        eo = a.useCallback(() => A(C.intl.string(S.default.ga8too)), [A]),
        eu = O && F,
        [ed, ec] = a.useState(null),
        [ef, em] = a.useState(er);
    (ef !== er && (em(er), er || ec(null)),
        a.useEffect(() => {
            if (!er) return;
            let e = g.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ec(null)
                        : ec(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [er, ea?.steps]));
    let eh = a.useMemo(() => (null != ea ? (0, eT.b)(ea.steps) : ""), [ea]),
        ex = a.useMemo(() => (null != ea ? ((0, ew.lt)(ea.steps) ?? ea.todos) : void 0), [ea]),
        eg = ea?.provisionalTodo,
        ep = null != ea && eE(ea),
        ev = a.useMemo(() => {
            var e;
            return null != ea ? ((e = ea.steps), tw((0, ew.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [ea]);
    return (0, n.jsxs)("section", {
        ref: x,
        "data-vibegrations-chat": !0,
        className: nR.TE,
        children: [
            (0, n.jsx)(nC, {
                onJumpToActivity: k,
                line: eh,
                placement: er && "top" === ed ? "top" : null,
                todos: ex,
                todosLive: ep,
                provisionalTodo: eg,
                agents: ev,
            }),
            (0, n.jsxs)("div", {
                className: nR.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: g,
                        onScroll: N,
                        className: [nR.N$, j ? null : nR.hB, ee ? nR.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(l3, {
                            ref: p,
                            projectId: r,
                            messages: s,
                            floatingSettingsMessageId: Q?.id,
                            onPickIdea: F ? T : void 0,
                            onApprovePlan: eu ? eo : void 0,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: nR.NJ,
                        children: (0, n.jsx)(nx, {
                            projectId: r,
                            thinking: er,
                            turnStartedAt: ei,
                            restoring: L,
                            thinkingActivity: c,
                            compacting: m,
                            projectUsage: d,
                            connState: o,
                        }),
                    }),
                    null == B
                        ? null
                        : (0, n.jsx)("div", {
                              className: ee ? `${nR.B5} ${nR.J9}` : nR.B5,
                              children: (0, n.jsx)(
                                  nw,
                                  { clarification: B, onSubmit: F ? M : void 0, onDismiss: U },
                                  B.id,
                              ),
                          }),
                    null == Z
                        ? null
                        : (0, n.jsx)("div", {
                              className: nR.B5,
                              children: (0, n.jsx)("div", {
                                  className: nR.ws,
                                  children: (0, n.jsx)(te, { projectId: r, request: Z, onDismiss: J }, Q?.id),
                              }),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nR.Jx,
                children: [
                    (0, n.jsx)(nC, {
                        onJumpToActivity: k,
                        line: eh,
                        placement: er && "bottom" === ed ? "bottom" : null,
                        todos: ex,
                        todosLive: ep,
                        provisionalTodo: eg,
                        agents: ev,
                    }),
                    0 === w.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: nR.g0,
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
                                  (0, n.jsx)(X.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: C.intl.string(S.default.B0YARo),
                                      onClick: () => (0, eI.PS)(r),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(lh, {
                        projectId: r,
                        canSend: F,
                        stopped: u,
                        running: er,
                        restoring: L,
                        onSend: E,
                        hasPendingContext: w.annotations.length > 0,
                        onInterrupt: F ? I : void 0,
                        onUploadFile: P,
                        onApprove: es,
                        suggestion: en,
                        questionOpen: null != B || null != Z,
                        tipOpen: G,
                        onDismissTip: W,
                        modelSettings: h,
                        onModelSettingsChange: R,
                    }),
                ],
            }),
        ],
    });
}
var nL = l(661531),
    nF = l(602853),
    nD = l(517461),
    n$ = l(761929),
    nO = l(927506);
function nq(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, nF.r)(nL.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nD.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = a.useState(u ?? 460),
        m = (0, tq.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? m + s : 0);
    }, [m, t, s, r]);
    let h = (0, n$.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: n$.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        x = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, n.jsxs)("div", {
        className: nO.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: nO.Di, onPointerDown: x }),
            (0, n.jsx)("div", { ref: o, className: nO.kL, style: { width: m }, children: i }),
        ],
    });
}
var nz = l(691540),
    nB = l(857250),
    nU = l(97483),
    nG = l(624479),
    nV = l(92446),
    nW = l(761508),
    nH = l(540999),
    nK = l(957565);
let nY = [],
    nX = new Map(),
    nQ = new Map(),
    nZ = new Map(),
    nJ = new Map(),
    n0 = new Map(),
    n1 = new Map(),
    n2 = new Map();
class n7 extends D.Ay.Store {
    getStatus(e) {
        return nX.get(e) ?? null;
    }
    getFetchState(e) {
        return nQ.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nJ.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return n1.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return n0.get(e) ?? null;
    }
    getModelCalls(e) {
        return n2.get(e) ?? nY;
    }
    getForceCompactionState(e) {
        return nZ.get(e) ?? "idle";
    }
}
let n5 = new n7(tU.h, {
    LOGOUT: function () {
        if (
            0 === nX.size &&
            0 === nQ.size &&
            0 === nZ.size &&
            0 === nJ.size &&
            0 === n0.size &&
            0 === n1.size &&
            0 === n2.size
        )
            return !1;
        (nX.clear(), nQ.clear(), nZ.clear(), nJ.clear(), n0.clear(), n1.clear(), n2.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nQ.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === nZ.get(t);
        n &&
            nZ.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === nQ.get(t);
        if ((a && nQ.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nQ.set(t, "failed") : (nX.set(t, l), nQ.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nJ.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        n0.set(e.projectId, {
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
        nZ.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        nZ.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = n2.get(e.projectId);
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
        n2.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, t2.aM)(l.total)) return !1;
        n1.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (nX.delete(t), nQ.delete(t), nZ.delete(t), nJ.delete(t), n0.delete(t), n1.delete(t), n2.delete(t));
    },
});
var n3 = l(972786);
function n4(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function n6(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function n8(e) {
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
function ae(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function at(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function al(e) {
    return C.intl.string("preview" === e ? S.default["+m8XM6"] : S.default.kiOVnt);
}
let an = ["all", "preview", "stable", "web"],
    aa = new Set(["error", "aborted", "length"]);
function ar(e) {
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
function ai(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(S.default.SBkDIZ, {
              p50: n4(e.memory_p50_bytes ?? 0),
              p999: n4(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let as = {
    db: () => S.default.r6cciE,
    db_preview: () => S.default.JmIyL8,
    runtime: () => S.default.bzNyv8,
    runtime_preview: () => S.default["LONZ/8"],
    bot: () => S.default.jdpw3A,
    bot_preview: () => S.default["/g6wUz"],
};
var ao = l(69985);
function au(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: ao.KE,
        children: [
            (0, n.jsx)("div", {
                className: ao.IQ,
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
                                  children: C.intl.formatToPlainString(S.default["4NpaEk"], { time: ae(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(X.$, { variant: "secondary", size: "sm", text: C.intl.string(S.default.aw0IJm), onClick: a }),
        ],
    });
}
function ad(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: ao.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: ao.Gf, children: t }),
            l,
        ],
    });
}
function ac(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: ao.N8,
        children: [
            (0, n.jsxs)("div", {
                className: ao.x7,
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
function af(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: ao.N8,
        children: [
            (0, n.jsxs)("div", {
                className: ao.x7,
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
                className: ao.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? ao.aV : ao.jE,
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
        return (0, n.jsx)(ac, {
            label: C.intl.string(S.default.H6PMwW),
            value: C.intl.string(S.default.TLOZ8J),
            hint: ar(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(ac, {
            label: C.intl.string(S.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(S.default.uAzxdh),
        });
    let a = ai(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ac, { label: C.intl.string(S.default.awAqRi), value: n6(l.cpu_ms) }),
            null != a && (0, n.jsx)(ac, { label: C.intl.string(S.default.WdGviA), value: a }),
        ],
    });
}
function ah(e) {
    let { analytics: t } = e,
        l = C.intl.string(S.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(ad, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: ar(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? as[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(ad, {
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
                          ac,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(S.default.AnRynJ, { cpu: n6(t.cpu_ms) }),
                              hint: ai(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var ax = l(522652);
let ag = [];
function ap(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && aa.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? n6(l.durationMs) : null,
                    `${n8(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${n8(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: ax.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ax.Q5,
                children: n9(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: ax.qN,
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
function av(e, t) {
    return (0, n.jsx)(ac, {
        label: e,
        value: C.intl.formatToPlainString(S.default.U98VaN, { count: n8((0, t2.aM)(t)) }),
        hint: `${n8(t.input_tokens)} in \xb7 ${n8(t.output_tokens)} out \xb7 ${n8(t.cache_read_input_tokens)} cache read`,
    });
}
function ab(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, D.bG)([n5], () => n5.getLastTurnUsage(t), [t]),
        u = (0, D.bG)([n5], () => n5.getLastCompaction(t), [t]),
        d = (0, D.bG)([n5], () => n5.getLastCompactionDecline(t), [t]),
        c = (0, D.bG)([n5], () => n5.getForceCompactionState(t), [t]),
        m = a.useCallback(() => (0, f.Lj)(t), [t]),
        h = a.useCallback(() => (0, f.Lj)(t, !0), [t]),
        x = (0, D.bG)([n5], () => (s ? ag : n5.getModelCalls(t)), [t, s]),
        g = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: ax.Mf,
        children: [
            (0, n.jsx)(au, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(ad, {
                title: C.intl.string(S.default.IYpHtT),
                children:
                    null == g
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ac, {
                                      label: C.intl.string(S.default["8MSJDH"]),
                                      value: n8((0, t2.a7)(g.cost_usd)),
                                      hint: C.intl.formatToPlainString(S.default["6Z2KhK"], { count: n8(g.turns) }),
                                  }),
                                  av(C.intl.string(S.default.hk4jJr), g.orchestrator),
                                  av(C.intl.string(S.default.R9aduM), g.codegen),
                                  av(C.intl.string(S.default.Tj6b30), (0, t2.wU)(g.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(ac, {
                                          label: C.intl.string(S.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${n8(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(ad, {
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
                                  av(C.intl.string(S.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(ac, {
                                      label: C.intl.string(S.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, t2.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(ad, {
                title: C.intl.string(S.default.mn8279),
                children: [
                    null != u && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(af, {
                                      label: C.intl.string(S.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: n8,
                                  }),
                                  (0, n.jsx)(ac, {
                                      label: C.intl.string(S.default.ntZb8d),
                                      value: `${n8(u.tokensBefore)} \u{2192} ${n8(u.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(S.default.jA05ru, {
                                          count: n8(u.retainedMessages),
                                          time: ae(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? C.intl.formatToPlainString(S.default.LKGmsP, { ceiling: n8(j) })
                                      : C.intl.string(S.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(ac, {
                            label: C.intl.string(S.default["se+2ls"]),
                            value: `${n8(d.projected)} / ${n8(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(S.default.KHK44U, { time: ae(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: ax.Lj,
                        children: [
                            (0, n.jsx)(X.$, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(S.default.B0KV7p),
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
                                    if ("idle" === e) return C.intl.string(S.default.wBng42);
                                    if ("pending" === e) return C.intl.string(S.default["0tgo31"]);
                                    let t = ae(e.observedAt);
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
                                        (0, n.jsx)(X.$, {
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
                (0, n.jsx)(ad, {
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
                                          .map((e) => (0, n.jsx)(ap, { call: e }, e.id)),
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
            (null != b || l?.analytics != null) &&
                (0, n.jsxs)(ad, {
                    title: C.intl.string(S.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(ac, {
                                        label: C.intl.string(S.default["wt5X/o"]),
                                        value: ae(b.instance_since),
                                        hint: C.intl.string(S.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(ac, { label: C.intl.string(S.default["4lgurx"]), value: n8(b.sockets) }),
                                    (0, n.jsx)(ac, {
                                        label: C.intl.string(S.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? C.intl.string(S.default["9KlveJ"])
                                            : C.intl.string(S.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(ac, {
                                            label: C.intl.string(S.default["/hOBkc"]),
                                            value: n8(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(am, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(ad, {
                    title: C.intl.string(S.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(ac, { label: C.intl.string(S.default["5iHZLk"]), value: n8(p.max_iterations) }),
                        (0, n.jsx)(ac, {
                            label: C.intl.string(S.default.Rb6m3E),
                            value: n8(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(ac, {
                            label: C.intl.string(S.default.WQ9pMe),
                            value: C.intl.formatToPlainString(S.default.U98VaN, { count: n8(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(ac, {
                            label: C.intl.string(S.default.iEAvzu),
                            value: C.intl.formatToPlainString(S.default.U98VaN, {
                                count: n8(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(ac, {
                            label: C.intl.string(S.default["jbhs+f"]),
                            value: n8(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(ac, { label: C.intl.string(S.default.TOQnq4), value: n8(p.max_build_attempts) }),
                        (0, n.jsx)(ac, { label: C.intl.string(S.default.RIDc6D), value: n8(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var aj = l(629584),
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
                                  (0, n.jsxs)(eF.D, {
                                      className: aE.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": o,
                                      "aria-label": C.intl.string(S.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(tm.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(th._, {
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
                                          className: aE.dF,
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
function aC(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([n3.Ay], () => n3.Ay.getLogs(t), [t]),
        r = (0, D.bG)([n3.Ay], () => n3.Ay.getHistoryState(t, "logs")),
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
                an.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return al(e);
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
            l.length > 0 && (0, n.jsx)(aN, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: m,
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
        (0, n.jsx)(ad, {
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
function aT(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ac, {
                      label: C.intl.formatToPlainString(S.default.f8ix3w, { env: al(l) }),
                      value: ((t = a.connected), C.intl.string(t ? S.default["9KlveJ"] : S.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(ac, {
                      label: C.intl.string(S.default["0AB7l3"]),
                      value: n8(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${ae(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(ac, { label: C.intl.string(S.default.ElaQ0A), value: n8(a.guild_count) }),
                  (0, n.jsx)(ac, {
                      label: C.intl.string(S.default.SJtBTN),
                      value: n8(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(S.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: ae(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(ac, {
                          label: C.intl.string(S.default.N4l504),
                          value: n8(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(ac, { label: al(l), value: C.intl.string(S.default.C6xjtD) });
}
function aM(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(ac, {
        label: al(t),
        value: C.intl.formatToPlainString(S.default.Yur5Zm, { requests: n8(l.requests), failures: n8(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(S.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: ae(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(S.default["1PdrB1"], { time: ae(l.since) }),
    });
}
function aR(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ac, {
                label: C.intl.formatToPlainString(S.default.BVORfc, { env: al(t) }),
                value: n8(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    ac,
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
                                  ? C.intl.formatToPlainString(S.default["7ecbr3"], { time: ae(e.next_run_at) })
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
    return (0, n.jsx)(ac, {
        label: al(t),
        value: C.intl.formatToPlainString(S.default.voXL2a, { calls: n8(l.calls), errors: n8(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function a_(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(ad, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(S.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(ad, {
        title: t,
        children: [
            (0, n.jsx)(ac, {
                label: C.intl.string(S.default.KOnL3g),
                value: n8(l.requests),
                hint: C.intl.formatToPlainString(S.default["1PdrB1"], { time: ae(l.since) }),
            }),
            (0, n.jsx)(ac, { label: C.intl.string(S.default.CjPhyY), value: n8(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(af, {
                              label: C.intl.string(S.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: n6,
                          }),
                          (0, n.jsx)(ac, {
                              label: C.intl.string(S.default["+rYPHD"]),
                              value: n6(r),
                              hint: C.intl.formatToPlainString(S.default["+LxC7W"], {
                                  total: n6(l.cpu_ms_total),
                                  wall: n6(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(ac, {
                      label: C.intl.string(S.default["V/nNbs"]),
                      value: C.intl.string(S.default.YKWIxp),
                      hint: C.intl.string(S.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(ac, { label: C.intl.string(S.default.ueEMPa), value: n6(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(ac, { label: C.intl.string(S.default.vM2krr), value: n8(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(ac, {
                label: C.intl.string(S.default.g1O88C),
                value: n8(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(S.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(ac, { label: C.intl.string(S.default.JUZs7g), value: at(l.build) }),
        ],
    });
}
function aL(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: C.intl.string(S.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(S.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(S.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(ad, {
        title: C.intl.string(S.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(ac, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(ac, {
                                  label: C.intl.formatToPlainString(S.default["9TpIQg"], { env: l }),
                                  value: n4(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? S.default.o45MMA : S.default.S7o3vV,
                                      { count: n8(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(af, {
                                      label: C.intl.formatToPlainString(S.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: n4,
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
        className: ax.Mf,
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
                                renderEnv: (e, t) => (0, n.jsx)(aT, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(aI, {
                                title: C.intl.string(S.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aM, { env: e, metrics: t }),
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
                        null != t.analytics && (0, n.jsx)(ah, { analytics: t.analytics }),
                        (0, n.jsxs)(ad, {
                            title: C.intl.string(S.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(ac, {
                                    label: C.intl.string(S.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? at(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(ac, {
                                    label: C.intl.string(S.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? at(t.deployments.stable_build) : "\u2014",
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
    aB = 0,
    aU = 0;
async function aG(e, t, l) {
    let n = aB,
        a = aq.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aU) return { status: "forbidden" };
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
            if (403 === s.status) return ((aU = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aB) return { status: "failed" };
            var l = o.rich;
            for (aq.set(t, l); aq.size > 100;) {
                let e = aq.keys().next();
                if (!0 === e.done) break;
                aq.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    az.set(t, i);
    let s = await i;
    return (az.get(t) === i && az.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function aV() {
    ((aB += 1), aq.clear(), az.clear(), (aU = 0));
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
let aX = ["model", "tool", "subagent", "delegated", "context"];
function aQ(e, t) {
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
function a5(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: a0.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: a0.D6, children: t }),
            (0, n.jsx)("div", { className: a0.zL, children: l }),
        ],
    });
}
function a3(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(a5, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function a4(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: a0.WA, children: t });
}
function a6(e) {
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
function a8(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: a0.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: a0.p8,
                children: [
                    (0, n.jsx)(th._, { className: a0.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: a0.bG, children: l }),
        ],
    });
}
function a9(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(a5, {
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
    return (0, n.jsx)(a5, {
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
                          a5,
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
                aJ.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
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
        f = a$(l.startedAt, "millis"),
        m = aY(l),
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
                            className: `${a0.PY} ${a7[m]}`,
                            children: aK(m),
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
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(a6, {
                      title: C.intl.string(S.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(a9, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(re, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(rt, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(a6, {
                      title: C.intl.string(S.default.KXrf5F),
                      children: [
                          (0, n.jsx)(a3, {
                              label: C.intl.string(S.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(S.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(a3, {
                                    label: C.intl.string(S.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(a5, {
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
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(a6, {
                      title: C.intl.string(S.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(a4, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(a3, {
                                            label: C.intl.string(S.default.Ran4BY),
                                            value: C.intl.formatToPlainString(S.default["PYO+Jv"], {
                                                tokens: aH(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(a3, {
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
                                      : (0, n.jsx)(a3, {
                                            label: C.intl.string(S.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(a3, {
                                            label: C.intl.string(S.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(a3, {
                                            label: C.intl.string(S.default.VyAl6j),
                                            value: C.intl.formatToPlainString(S.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(a3, {
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
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: a0.E7,
                      children: C.intl.string(S.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(a8, {
                      title: C.intl.string(S.default.T7SFyZ),
                      children: (0, n.jsxs)(a4, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(a5, {
                                        label: C.intl.string(S.default.NnBqcd),
                                        value: (0, n.jsx)(eF.D, {
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
                              0 === o
                                  ? null
                                  : (0, n.jsx)(a3, {
                                        label: C.intl.string(S.default.fI6mzD),
                                        value: C.intl.formatToPlainString(S.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(a3, { label: C.intl.string(S.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(a3, { label: C.intl.string(S.default["XVTP/S"]), value: l.id }),
                              null == f ? null : (0, n.jsx)(a3, { label: C.intl.string(S.default.rD7bm0), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(a3, { label: C.intl.string(S.default.rxmzYT), value: l.stopReason }),
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
                                                    a3,
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
                    return aX.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
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
                children: aX.map((e) => {
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
        o = aY(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(S.default["PYO+Jv"], { tokens: aH(t.promptTokens) })
                : null != t.durationMs
                  ? aW(t.durationMs)
                  : null;
    return (0, n.jsxs)(eF.D, {
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
                        className: `${a0.PY} ${rr[o]}`,
                        children: aK(o),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: a0.G9,
                        children: u,
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
        i = (0, D.yK)([n3.Ay], () => n3.Ay.getTrace(l), [l]),
        s = (0, D.bG)([n3.Ay], () => n3.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => aV, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [f, m] = a.useState(!1),
        h = a.useRef(null),
        x = a.useRef(null),
        g = a.useRef(null),
        p = a.useRef(null),
        b = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, tq.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, tq.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, n$.A)({
            resizableDomNodeRef: x,
            orientation: n$.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, tq.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        T = a.useMemo(() => aQ(i, r), [i, r]),
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
                    .map((e, t) => ({ ...e, index: t, entries: aQ(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = aZ(T, o),
        P = R?.kind === "tool" ? aZ(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = T[T.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = g.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, o]);
    let F = a.useCallback(
        (e) => {
            if (0 === T.length) return;
            let t = T.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(T.length - 1, t));
                (u(T[l].id), document.getElementById(`trace-${T[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? T.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(T.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), j(o));
        },
        [T, o, j],
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
              className: `${a0.uP} ${f ? a0.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: a0.DK,
                      children: [
                          (0, n.jsx)(ra, { entries: i }),
                          (0, n.jsx)(aN, { state: s }),
                          0 === T.length
                              ? (0, n.jsx)("div", {
                                    className: a0.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(S.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: g,
                                    className: a0.Ns,
                                    children: [
                                        (0, n.jsx)(aA, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(S.default["QATZ+A"]),
                                            className: a0.p_,
                                            children: M.map((e) => {
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
                                    ref: x,
                                    className: a0.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(rl, {
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
var ro = l(365199),
    ru = l(402879);
function rd(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([n3.Ay], () => n3.Ay.getTrace(t), [t]),
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
            (0, ru.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
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
            (0, n.jsx)(tM.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tM.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tR.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(tP.rX, {
                            children: (0, n.jsx)(tP.Dr, {
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
                    return (0, n.jsx)(e6.K, {
                        ...e,
                        buttonRef: s,
                        icon: ro.MoreHorizontalIcon,
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
function rf(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, u] = a.useState(""),
        c = (0, D.bG)([nH.A], () => nH.A.isDeveloper),
        m = (0, D.bG)([n5], () => n5.getStatus(t), [t]),
        h = (0, D.bG)([n5], () => n5.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, f.R7)(t);
    }, [t]);
    let x = a.useCallback(() => (0, f.R7)(t), [t]),
        g = a.useCallback(() => {
            (0, nK.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: n5.getStatus(t),
                        last_turn_usage: n5.getLastTurnUsage(t),
                        last_compaction: n5.getLastCompaction(t),
                        last_compaction_decline: n5.getLastCompactionDecline(t),
                        model_calls: n5.getModelCalls(t),
                        logs: n3.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nz.P0)((0, nB.o)(C.intl.string(S.default.sDSDiO), nU.Ck.SUCCESS)),
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
                            icon: nG.CopyIcon,
                            tooltip: C.intl.string(S.default["21ipY1"]),
                            onClick: g,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: nV.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rc.rf,
                children: [
                    (0, n.jsxs)(nW.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(S.default.uNyR86),
                        className: rc.vR,
                        children: [
                            (0, n.jsx)(nW.V.Item, { id: "logs", children: C.intl.string(S.default["1mpzdJ"]) }),
                            (0, n.jsx)(nW.V.Item, { id: "worker", children: C.intl.string(S.default.whGHLD) }),
                            (0, n.jsx)(nW.V.Item, { id: "agent", children: C.intl.string(S.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(nW.V.Item, { id: "trace", children: C.intl.string(S.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(aC, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aF, { status: m, fetchState: h, onRefresh: x })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rc.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rc.XH,
                                          children: (0, n.jsx)(rd, { projectId: t, query: s, onQueryChange: u }),
                                      }),
                                      (0, n.jsx)(rs, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(ab, { projectId: t, status: m, fetchState: h, onRefresh: x, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rm = l(333007),
    rh = l(621466),
    rx = l(103557),
    rg = l(97808),
    rp = l(778712),
    rv = l(365912),
    rb = l(775121),
    rj = l(486020),
    ry = l(277437);
function rk(e) {
    let {
            projectId: t,
            at: l,
            bounds: r,
            kind: s,
            value: o,
            onChange: u,
            onSubmit: d,
            onDismiss: c,
            canSubmit: f,
            closing: m,
            onUploadFile: h,
        } = e,
        {
            drafts: x,
            addFiles: g,
            removeDraft: p,
            settled: v,
            takeRefs: b,
        } = lo({ projectId: t, surface: "design", onUploadFile: h }),
        j = a.useRef(null),
        y = (f || x.length > 0) && v && !m,
        k = a.useCallback(() => {
            if (!y) return;
            let e = b();
            d(e.length > 0 ? e : void 0);
        }, [y, b, d]),
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
    let T = E?.height ?? 44,
        M = r.left + 8,
        R = r.top + 8,
        P = Math.max(l.x, M),
        _ = Math.min(Math.max(l.y + 32 + 4, R), Math.max(R, r.top + r.height - T - 8));
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
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(eG.m, {
                position: "bottom",
                text: C.intl.string(S.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: ry.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": C.intl.string(S.default.d6Rqlu),
                    children: (0, n.jsx)(tT.H, { size: "custom", color: "currentColor", className: ry.WW }),
                }),
            }),
            (0, n.jsx)(tF.y, {
                autoFocus: !0,
                rows: 1,
                className: ry.hF,
                value: o,
                placeholder: "" === s ? C.intl.string(S.default.FK09JH) : `Edit ${s}`,
                "aria-label": C.intl.string(S.default["qR+sGX"]),
                onChange: (e) => u(e.target.value),
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                },
            }),
            x.length > 0
                ? (0, n.jsx)("div", {
                      className: ry.ZO,
                      children: x.map((e) => (0, n.jsx)(lu, { draft: e, onRemove: p }, e.localId)),
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
function rT(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rM(e, t, l, n) {
    let a = rT(e, l, n);
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
        o = null != l && l === r ? t : null,
        { active: u, annotations: d } = (0, eI.Q_)(o),
        c = (0, l8.o4)(o),
        m = (0, e5.useHasAnyModalOpen)(),
        h = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        x = h?.id ?? null,
        [g, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, E] = a.useState(null),
        [I, T] = a.useState(!1),
        M = a.useRef(null),
        R = a.useRef(null),
        P = a.useRef(null),
        [_, L] = a.useState(null),
        [F, $] = a.useState(!1),
        [O, q] = a.useState(null),
        [z, B] = a.useState(null),
        U = a.useRef(!1),
        [G, V] = a.useState(!1),
        [W, H] = a.useState(null),
        K = u && !c && !m;
    null == O || (K && O.projectId === o) || q(null);
    let Y = O?.projectId ?? null;
    (a.useEffect(() => {
        if (null != Y) return () => la(Y, "design");
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
            if (!K || null == o) return;
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
                        null == l ? w(!0) : (j(l), (0, eI._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), w(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, i, o]));
    let Q = a.useRef(null);
    (a.useEffect(() => {
        if (!K || null == g || null == o) return;
        if (null == b) {
            Q.current = g;
            return;
        }
        if (rI(Q.current, g)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            Q.current = g;
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
                        if ("completed" !== e.status || !et.current) return;
                        let l = rP(e.response);
                        null != l && (j(l), (0, eI._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rw(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, eI.fA)(o, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, g, b, d, o, i]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (E(null), q(null), H(null), j(null));
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
                    (0, rE.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rA, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((ee.current = !1), et.current)) {
                                if ("picked" !== t.status || rq(t.target, es.current.rect, es.current.scale))
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
        en = a.useCallback(() => {
            if (null == O) return;
            let e = !U.current;
            (B({ at: O.at, label: O.label, draft: O.draft, instant: e }), V(e), q(null));
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
            let e = setTimeout(() => B(null), rD);
            return () => clearTimeout(e);
        }, [z]));
    let ea = null == b || null == g || b.viewport.width < 1 ? 1 : g.width / b.viewport.width,
        er = null != b || N,
        ei = a.useMemo(() => b?.elements ?? [], [b]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: g, scale: ea };
    }, [g, ea]);
    let eo = a.useCallback(
            (e, t, l) => {
                null != o &&
                    (la(o, "design"),
                    H(null),
                    (U.current = !1),
                    q({ projectId: o, target: e, anchor: t, draft: "", at: l, label: (0, eN.ts)(e) }));
            },
            [o],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ec = a.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = R.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ec);
    let ef = a.useCallback(
            (e) => {
                if (null == g || null != W) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), T(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > r$ || Math.abs(e.clientY - O.at.y) > r$) && (U.current = !0);
                    return;
                }
                if (!er) return void E(null);
                let t = ed(e, g);
                if (F) {
                    let e = (0, eN.jo)(ei, t.x, t.y),
                        l = null != e && rq(e, g, ea) ? null : e;
                    if (null != l) {
                        let e = (0, eN.ts)(l);
                        L((t) => (rO(t, e) ? t : e));
                    }
                    E((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = J.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((J.current = l), (Z.current = l), el());
            },
            [g, ea, er, ed, F, ei, O, W, ec, el],
        ),
        em = a.useCallback(() => {
            (T(!1), E(null), (J.current = null), (Z.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !er || F || null != O || null != W) return;
        let e = P.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((J.current = n), (Z.current = n), el());
    }, [K, I, er, F, O, W, el]);
    let eh = a.useCallback(
            (e) => {
                if (null != O || null != W) {
                    (en(), H(null));
                    return;
                }
                if (null == A || null == g) return;
                let t = ed(e, g);
                eo(A, (0, eN.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, g, ed, O, W, eo, en],
        ),
        ex = a.useCallback(() => {
            null != o && (E(null), (0, eI.PS)(o));
        }, [o]),
        eg = a.useCallback(() => {
            null != o &&
                (null != O
                    ? en()
                    : W?.confirmingRemove === !0
                      ? H({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? H(null)
                        : ex());
        }, [o, O, W, en, ex]),
        ep = a.useRef(eg),
        ev = a.useRef(ex);
    a.useLayoutEffect(() => {
        ((ep.current = eg), (ev.current = ex));
    });
    let eb = a.useRef(null);
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
            "Escape" === e.key && (e.preventDefault(), ep.current());
        }
        function t(e) {
            let t = e.target;
            (0, rh.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rv.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ev.current();
        }
    }, [K, s]);
    let ej = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != O || null != W || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : ei.findIndex((e) => e.ref === A.ref);
                    E(ei[(l + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    eo(A, eN.F6, { x: (g?.left ?? 0) + A.rect.x * ea, y: (g?.top ?? 0) + A.rect.y * ea }));
            },
            [o, O, W, ei, A, eo, eg, g, ea],
        ),
        ey = a.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    (((0, eN.to)(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, f.dv)(o, (0, eN.v_)(O.target, O.draft), e), en(), E(null)));
            },
            [o, O, en],
        ),
        ek = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, f.vX)(o, e)), [o]),
        ew = a.useCallback(() => {
            null == o ||
                null == W ||
                null == x ||
                ((0, eN.to)(W.draft) && ((0, eI.dy)(o, x, W.id, W.draft.trim()), H({ ...W, editing: !1 })));
        }, [o, W, x]),
        eA = a.useCallback(() => {
            null != o && null != W && null != x && ((0, eI.PR)(o, x, W.id), H(null));
        }, [o, W, x]),
        eE = u
            ? y
                ? C.intl.string(S.default.jQQ8i2)
                : N
                  ? C.intl.string(S.default.zvU2QH)
                  : C.intl.formatToPlainString(S.default.A4HDMU, { count: d.length })
            : "",
        eS = K && null != g,
        eC = I && null == W,
        eT = null == W ? null : d.find((e) => e.id === W.id),
        eM = O?.target ?? eT?.target ?? null,
        eR = O ?? z,
        eP = O ?? (z?.instant === !0 ? null : z),
        e_ =
            null != eT && null != g
                ? (function (e, t) {
                      let { left: l, top: n } = rR(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rM(eT.target, eT.anchor, g, ea), g)
                : null;
    return (0, rm.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: rS.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rS.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eE,
                }),
                eS
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rS.MT,
                                  style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                  "data-plain-cursor": eC ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": C.intl.string(S.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ef,
                                  onMouseLeave: em,
                                  onClick: eh,
                                  onKeyDown: ej,
                              }),
                              null != A && null == O && null == W ? (0, n.jsx)(rz, { box: rT(A, g, ea) }) : null,
                              (0, n.jsx)("div", {
                                  ref: M,
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
                                  children: eC
                                      ? (0, n.jsx)(lG.A, { className: rS.u, size: "custom", width: 15, height: 15 })
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
                              null != eM
                                  ? (0, n.jsx)("div", { className: rS.D0, style: rT(eM, g, ea), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rM(e.target, e.anchor, g, ea),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rS.xL,
                                          style: { ...rR(l, g), width: 24, height: 24 },
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
                                              (e.stopPropagation(), en(), H(a));
                                          },
                                          children: (0, n.jsx)(rL, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eR || null == o
                                  ? null
                                  : (0, n.jsx)(rk, {
                                        projectId: o,
                                        at: { x: eR.at.x + 12, y: eR.at.y + 12 },
                                        bounds: g,
                                        kind: eR.label.kind,
                                        value: eR.draft,
                                        canSubmit: null != O && (0, eN.to)(eR.draft),
                                        onChange: (e) => {
                                            null != O && q({ ...O, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: en,
                                        onUploadFile: ek,
                                        closing: null == O,
                                    }),
                              null != eT && null != W && null != e_
                                  ? (0, n.jsxs)(rF, {
                                        point: e_,
                                        frame: g,
                                        authorId: eT.authorId,
                                        title: (0, eN.iw)(eT.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            W.confirmingRemove ? H({ ...W, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            W.editing || W.confirmingRemove || H(null);
                                        },
                                        children: [
                                            W.editing
                                                ? (0, n.jsx)(rx.f, {
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
                                                      children: eT.comment,
                                                  }),
                                            (0, eI.zz)(eT, x)
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
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...W, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(X.$, {
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
                                                                    (0, n.jsx)(X.$, {
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
                                                                        ? (0, n.jsx)(X.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, eN.to)(W.draft),
                                                                              text: C.intl.string(S.default.wIeFN0),
                                                                              onClick: ew,
                                                                          })
                                                                        : (0, n.jsx)(X.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: C.intl.string(S.default.DKZggU),
                                                                              onClick: () =>
                                                                                  H({
                                                                                      ...W,
                                                                                      editing: !0,
                                                                                      draft: eT.comment,
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
        l = (0, D.bG)([eu.default], () => eu.default.getUser(t), [t]);
    return (0, n.jsx)(rg.eu, {
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
        o,
        { point: u, frame: d, authorId: c, title: f, testId: m, onDismiss: h, onMouseLeave: x, children: g } = e,
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
        (s = Math.min(Math.max(u.x - j.x, t), l)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, r), i)), originX: u.x - s, originY: u.y - o }),
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
        "data-testid": m,
        onMouseLeave: x,
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
                        children: f,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rS.zI, children: g }),
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
var rB = l(11055),
    rU = l(533140),
    rG = l(342667);
function rV(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            resolveIframe: i,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, l8.o4)(null != l && l === r ? t : null),
        d = (0, e5.useHasAnyModalOpen)(),
        c = (0, rU.V0)(s);
    a.useEffect(() => {
        u && c && null != s && (0, rU.c2)(s);
    }, [u, c, s]);
    let [f, m] = a.useState(null);
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
    let h = u && null != f && !d,
        x = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height };
    return (0, rm.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: rG.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: u ? C.intl.string(S.default.dIE9zO) : "",
                }),
                h
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rG.om,
                                  style: x,
                                  "data-testid": "vibegrations-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, n.jsx)("div", {
                                  className: rG.A1,
                                  style: x,
                                  children: (0, n.jsxs)("div", {
                                      className: rG.lm,
                                      "data-testid": "vibegrations-control-notice",
                                      children: [
                                          (0, n.jsx)(v.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children: C.intl.string(S.default.dIE9zO),
                                          }),
                                          null != o
                                              ? (0, n.jsxs)("div", {
                                                    className: rG.Nq,
                                                    children: [
                                                        (0, n.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: C.intl.string(S.default.SNcPbe),
                                                        }),
                                                        (0, n.jsx)(X.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: C.intl.string(S.default.kj5epw),
                                                            onClick: o,
                                                        }),
                                                    ],
                                                })
                                              : null,
                                      ],
                                  }),
                              }),
                          ],
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
    rX = l(95477),
    rQ = l(381849),
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
        [u, c] = a.useState(s[0] ?? "stable"),
        [h, x] = a.useState({ status: "loading" }),
        [g, p] = a.useState(""),
        [b, j] = a.useState(""),
        [y, k] = a.useState({ phase: "idle" }),
        N = "busy" === y.phase,
        [w, A] = a.useState(0),
        E = a.useCallback(() => A((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${u}`;
        return (
            Promise.all([(0, f.DM)(l, u), (0, f.ms)(l, u)])
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
    }, [l, u, w]);
    let I = "loading" !== h.status && h.key === `${l}|${u}` ? h : { status: "loading" },
        T = a.useCallback(
            (e, t) => {
                (0, rW.A)({
                    title: C.intl.string(S.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? C.intl.formatToPlainString(S.default["0lt6bH"], { target: e })
                            : C.intl.formatToPlainString(S.default.zVcDfj, {
                                  environment: C.intl.string(
                                      "preview" === u ? S.default["/kYdZe"] : S.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: C.intl.string(S.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (k({ phase: "busy", environment: u, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (k({
                                              phase: "settled",
                                              environment: u,
                                              tone: "positive",
                                              text: C.intl.string(S.default.kIWqXR),
                                          }),
                                          E())
                                        : "expired" === e.code
                                          ? (k({
                                                phase: "settled",
                                                environment: u,
                                                tone: "danger",
                                                text: C.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                            }),
                                            E())
                                          : "unconfirmed" === e.code
                                            ? (k({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: C.intl.string(S.default["2xSPXh"]),
                                              }),
                                              E())
                                            : k({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: C.intl.string(S.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    k({
                                        phase: "settled",
                                        environment: u,
                                        tone: "danger",
                                        text: C.intl.string(S.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [u, s, E],
        ),
        M = a.useCallback(() => {
            (k({ phase: "busy", environment: u, kind: "create" }),
                (0, f._m)(l, u, g)
                    .then(() => {
                        (p(""),
                            k({
                                phase: "settled",
                                environment: u,
                                tone: "positive",
                                text: C.intl.string(S.default.mfAoFT),
                            }),
                            E());
                    })
                    .catch(() => {
                        k({ phase: "settled", environment: u, tone: "danger", text: C.intl.string(S.default.uhhqP3) });
                    }));
        }, [l, u, g, E]),
        R = "loaded" === I.status ? I.window : null,
        P = "loaded" === I.status ? I.nowMs : 0,
        _ = R?.earliestRestoreTimestampMs ?? P - 2592e6,
        L = "" === b ? null : new Date(b).getTime(),
        F = null != L && !Number.isNaN(L) && L >= _ && L <= P,
        D =
            "busy" === y.phase
                ? "restore" === y.kind && y.environment === u
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === y.phase && y.environment === u
                  ? { kind: "notice", tone: y.tone, text: y.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === I.status
                ? (0, n.jsx)("div", { className: rZ.E8, children: (0, n.jsx)(m.y, {}) })
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
                                                relative: (0, rQ.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rQ._e,
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
                                            eF.D,
                                            {
                                                className: rZ.f_,
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
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
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
                                    (0, n.jsxs)(nW.V, {
                                        selectedItem: u,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": C.intl.string(S.default.CNvRyJ),
                                        className: rZ.vR,
                                        children: [
                                            (0, n.jsx)(nW.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(S.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(nW.V.Item, {
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
                                              (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
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
                                            children: (0, n.jsx)(rX.k, {
                                                label: C.intl.string(S.default.hJb78b),
                                                value: g,
                                                onChange: p,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(X.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: C.intl.string(S.default["14UarN"]),
                                            onClick: M,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: rZ._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rZ.kv,
                                            children: (0, n.jsx)(rX.k, {
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
                                        (0, n.jsx)(X.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: C.intl.string(S.default["3D/vYN"]),
                                            disabled: N || !F,
                                            onClick: () => {
                                                null != L && T(new Date(L).toLocaleString(), () => (0, f.dz)(l, u, L));
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
        [s, u] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, f.ST)(l)
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
                ? (0, n.jsx)("div", { className: r2.E8, children: (0, n.jsx)(m.y, {}) })
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
                                                relative: (0, rQ.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rQ._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      eF.D,
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
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
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
var r5 = l(120426),
    r3 = l(873727),
    r4 = l(147248),
    r6 = l(418842),
    r8 = l(363195),
    r9 = l(885386),
    ie = l(171936),
    it = l(796036);
function il(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            header: d,
            mainClassName: c,
            content: f,
            sidebar: m,
            onOpenPublishedApp: h,
        } = e,
        [x, g] = a.useState(null),
        p = (0, u.A)(r, o),
        v = p?.id ?? null;
    (!(function (e, t) {
        let l = (0, D.bG)([r8.A], () => (0, r3.x4)(r8.A.theme)),
            n = (0, D.bG)([r4.A], () => r4.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, D.cf)([tO.Ay], () => ({
                reducedMotion: tO.Ay.useReducedMotion,
                fontScale: (0, r3.U0)(),
                highContrast: tO.Ay.isHighContrastModeEnabled,
                forcedColors: tO.Ay.useForcedColors,
                underlineLinks: tO.Ay.alwaysShowLinkDecorations,
            })),
            d = r9.hH.useSetting(),
            c = (0, r6.C)(),
            f = a.useRef(!1),
            m = a.useRef(!1),
            h = a.useRef(0),
            x = a.useRef(null),
            g = a.useCallback(() => {
                let n = (0, r5.F)(e, t);
                if (null == n) return;
                x.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, r3.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rE.W)(n, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, i, t, s, d, e, r, c, u]),
            p = a.useRef(g);
        a.useLayoutEffect(() => {
            p.current = g;
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
                (g(), v());
            }, [v, g]),
            a.useLayoutEffect(() => {
                let l = (0, r5.F)(e, t);
                null != l && l !== x.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, r5.F)(e, t) && ((x.current = null), v());
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
    })(x, v),
        a.useEffect(() => {
            if (null != t) return (0, ie.mn)(t, () => (0, r5.F)(x, v));
        }, [t, x, v]));
    let b = a.useCallback(() => (0, r5.F)(x, v), [x, v]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: g, className: ej.fm, children: f })],
            }),
            m,
            (0, n.jsx)(rV, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                frameId: v,
                onOpenPublishedApp: h,
            }),
            (0, n.jsx)(r_, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function ia(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: m,
            header: h,
            chatOpen: x,
            onCloseChat: g,
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
            previewGate: T,
            channelMessages: M,
            availability: R,
            activeMode: P,
            widgetApplicationId: _,
            onOpenPublishedApp: L = null,
        } = e,
        F = a.useRef(null),
        [D, $] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (m.type === s.U.MAIN) return ((0, c.HV)(r), () => (0, c.HV)(null));
    }, [r, m.type]),
        a.useEffect(() => {
            null != t && ((0, f.Hc)(t), (0, it.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = F.current;
            if (null == e) return;
            function t() {
                null != e && $(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        a.useLayoutEffect(() => () => (0, c.Zq)(0), []));
    let O = Math.max(360, D - 320),
        q = null != M ? M.open : x,
        z = x || m.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: F,
        className: ej.LB,
        children: (0, n.jsx)(il, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: m,
            header: h,
            onOpenPublishedApp: L,
            mainClassName: null == h ? void 0 : i()(ej.ez, { [ej.zt]: q }),
            content: (0, n.jsx)(ex, {
                applicationId: r,
                previewApplicationId: u,
                surface: m,
                previewReady: I,
                previewGate: T,
                availability: R,
                activeMode: P,
                widgetApplicationId: _,
            }),
            sidebar:
                null != M
                    ? (0, n.jsx)(nq, {
                          open: M.open,
                          maxWidth: O,
                          onWidthChange: c.Zq,
                          children: M.open
                              ? (0, n.jsx)(ey, { channel: M.channel, guild: M.guild, onClose: M.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(nq, {
                            open: x,
                            maxWidth: O,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(rf, { projectId: t, onClose: A ?? (() => {}) }, t)
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
                                                  (0, n.jsx)(rB.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": C.intl.string(C.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == g
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: o.P,
                                                                        tooltip: C.intl.string(S.default.YdgE0j),
                                                                        onClick: g,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(d.Ay.Title, {
                                                          children: C.intl.string(C.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ej.cb,
                                                      children: (0, n.jsx)(n_, { projectId: t, restoreState: E }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
