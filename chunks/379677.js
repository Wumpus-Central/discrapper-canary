l.d(t, { A: () => ig });
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
    E = l(50617),
    C = l(375708),
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
                    children: C.intl.string(E.default.jTuX7C),
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
                    title: C.intl.string(E.default["4f6Vkr"]),
                    body: C.intl.string(E.default.LJ2q1H),
                }),
            });
        case N.n.NoApplication:
            return (0, n.jsx)(T, { className: L.qs });
        case N.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(R, {
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
    $ = l(323384),
    O = l(308528),
    q = l(334738),
    z = l(688438),
    U = l(355622),
    B = l(734057),
    G = l(531685),
    W = l(365971),
    V = l(362417);
function H(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: V.f,
        children: [
            (0, n.jsx)($.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function K() {
    return (0, n.jsx)("div", { className: V.f, children: (0, n.jsx)(m.y, {}) });
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
            let e = (0, W.Xg)();
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
          ? (0, n.jsx)(H, { message: C.intl.string(E.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: V.g,
                  children: (0, n.jsx)(z.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
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
function eg(e) {
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
    let b = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, x.z3)(d), "aria-label": (0, x.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eh.R,
        ...b,
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
        i = (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: a });
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
    eA = l(783791);
function eS(e) {
    return !(0, eA.BL)(e) && !0 !== e.stopRequested;
}
var eE = l(935208),
    eC = l(66708),
    eI = l(74029),
    eT = l(717447),
    eM = l(29080),
    eR = l(46054),
    eP = l(76275);
function e_(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : C.intl.string(E.default.MdXWEK);
}
function eL(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        o = (0, ew.B4)(a),
        u = o.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != u &&
            ((t = u.content),
            (l = t.trim()),
            (n = r.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? u
                : null,
        c = o.filter((e) => e !== d),
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
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, ew.Lf)(a) }),
    };
}
(l(134528), l(947204));
var eF = l(191521),
    eD = l(939249),
    e$ = l(478016),
    eO = l(34136);
function eq(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, n.jsxs)("section", {
        className: i()(eO.Nr, r),
        ...o,
        children: [
            (0, n.jsxs)("header", {
                className: i()(eO.wx, null != l && eO.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var ez = l(113757);
function eU(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(eD.D, {
        className: i()(ez.nM, { [ez.f1]: o, [ez.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": C.intl.formatToPlainString(E.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: ez.jo,
                children: [
                    l
                        ? (0, n.jsx)(e$.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ez.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ez.G9,
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
    return (0, n.jsx)(eq, {
        title: C.intl.string(E.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                eU,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eG = l(435619),
    eW = l(866665),
    eV = l(885574),
    eH = l(430392),
    eK = l(632015),
    eY = l(256905),
    eX = l(824757);
function eQ(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: eX.uW,
        children: [
            (0, n.jsxs)("span", {
                className: eX.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eZ() {
    return (0, n.jsx)(eW.m, {
        text: C.intl.string(E.default.DXe2dP),
        children: (0, n.jsx)(eD.D, {
            className: eX.bk,
            "aria-label": C.intl.string(E.default.Y6y4nQ),
            children: (0, n.jsx)(eV.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eJ(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(eQ, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: eX.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: eX.jw,
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
function e0(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? $.k : eH.RobotIcon;
    return (0, n.jsxs)("span", {
        className: eX.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: eX.L6,
                      children: [
                          (0, n.jsx)(eK.f, {
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
                className: eX.L6,
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
function e1(e) {
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
        u = C.intl.string(E.default.FW8UcU),
        d = a.useCallback(() => {
            (0, f.PK)(t, r).then(
                (e) => {
                    (0, eY.R)({
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
        : (0, n.jsx)(eQ, {
              label: C.intl.string(E.default["9W8SbY"]),
              info: (0, n.jsx)(eZ, {}),
              children: (0, n.jsx)(eD.D, {
                  className: eX.xX,
                  onClick: d,
                  "aria-label": C.intl.string(E.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: u, className: eX.sN, onError: o }) : null,
              }),
          });
}
function e2(e) {
    let { projectId: t, proposal: l, onApprove: a } = e;
    return (0, n.jsx)(eq, {
        title: C.intl.string(E.default["60htw+"]),
        trailing: (0, n.jsx)(e0, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: eX.rf,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(e1, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(eQ, {
                          label: C.intl.string(E.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: eX.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: eX.Aw,
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
                    ? (0, n.jsx)(eQ, {
                          label: C.intl.string(C.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: eX.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: eX.uX,
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
                (0, n.jsx)(eJ, { label: C.intl.string(E.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eJ, { label: C.intl.string(E.default.Cn9qix), names: l.privileged_intents ?? [] }),
                null != a
                    ? (0, n.jsx)("div", {
                          className: eX.o1,
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
var e7 = l(530557),
    e5 = l(872162),
    e4 = l(192308),
    e3 = l(479191);
function e6(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, e4.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]),
        s = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: e7.R })), [r.fields]);
    return (0, n.jsxs)("article", {
        className: e3.L,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: C.intl.string(E.default["/e28TK"]),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : C.intl.string(E.default.jxvtin),
            }),
            (0, n.jsx)(e5.C, { label: C.intl.string(E.default["/e28TK"]), size: "xs", items: s }),
            (0, n.jsx)("div", {
                className: e3.s,
                children: (0, n.jsx)(X.$, {
                    variant: "primary",
                    size: "sm",
                    onClick: i,
                    text: C.intl.string(E.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var e8 = l(408278),
    e9 = l(349735),
    te = l(973e3);
function tt(e) {
    let { projectId: t, request: l, onDismiss: a } = e;
    return (0, n.jsx)(e9.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: r, saving: i, submit: s } = e;
            return (0, n.jsxs)("form", {
                className: te.Mk,
                onSubmit: (e) => {
                    (e.preventDefault(), s());
                },
                children: [
                    (0, n.jsxs)("div", {
                        className: te.TS,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                tag: "span",
                                children: C.intl.string(E.default.wgDhiQ),
                            }),
                            null == a
                                ? null
                                : (0, n.jsx)(e8.K, {
                                      icon: o.P,
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
                        className: te.p0,
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
var tl = l(196582);
let tn = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ta = {
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
    tr = {
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
function ti(e) {
    return { ...tr[e], name: C.intl.string(ta[e]()) };
}
function ts(e) {
    return tn.includes(e) ? ti(e) : void 0;
}
function to(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % tn.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, tn[(t + l) % tn.length]);
            }),
            n
        );
    })(e))
        t.set(l, ti(n));
    return t;
}
var tu = l(683063),
    td = l(705754),
    tc = l(883455),
    tf = l(13699);
function tm(e) {
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
                          return C.intl.formatToPlainString(E.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return C.intl.formatToPlainString(E.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return C.intl.formatToPlainString(E.default.vuv9bT, {
                                  task: t,
                                  duration: (0, eP.MB)(e.durationMs),
                              });
                          return C.intl.formatToPlainString(E.default.KS49RN, { task: t });
                      default:
                          return C.intl.formatToPlainString(E.default.KS49RN, { task: t });
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
                                    className: tf.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            tc.A,
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
                                      className: tf.iq,
                                      children: (0, n.jsx)(td.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(tl.A, {
        glyph: (0, n.jsx)(tu.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: e_(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: tf.nC,
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
var th = l(847374),
    tg = l(320448),
    tx = l(140735),
    tp = l(329456);
let tv = [];
function tb(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tp.xL, {
            [tp.Vb]: "in_progress" === t,
            [tp.cT]: "completed" === t,
            [tp.GZ]: "unfinished" === t,
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
                className: tp.Qd,
                itemClassName: tp.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tp.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tp.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tj(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tv), [l, t]),
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
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, n.jsxs)("span", {
        className: tp.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    tu.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tp.MA,
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
                      className: tp.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function ty(e) {
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
            ((t = (s ?? tv).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tv) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tp.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tp.AS, { [tp.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tb, { status: l }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: tp.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", {
                                    className: tp.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, n.jsx)(tj, { agents: d.get(e.id) ?? tv, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tp.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tb, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tp.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tp.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tk(e) {
    let { todos: t, provisional: l, agents: r, announceProgress: i = !0, live: s = !0, superseded: o = !1 } = e,
        u = a.useId(),
        [d, c] = a.useState(!o),
        [f, m] = a.useState(o);
    f !== o && (m(o), c(!o));
    let h = a.useCallback(() => c((e) => !e), []),
        { completed: g, total: x } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === x) return null;
    let p = C.intl.formatToPlainString(E.default.bQvqly, { completed: g, total: x }),
        b = C.intl.formatToPlainString(E.default["QG/EiF"], { completed: g, total: x }),
        j = d ? th.a : tg._;
    return (0, n.jsxs)(eq, {
        title: C.intl.string(E.default.qCRC6c),
        trailing: (0, n.jsxs)("span", {
            className: tp.ZY,
            children: [
                (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: p }),
                o
                    ? (0, n.jsx)(eD.D, {
                          className: tp.L$,
                          onClick: h,
                          "aria-expanded": d,
                          "aria-controls": u,
                          "aria-label": C.intl.string(d ? E.default.fIBJas : E.default.SVhXLT),
                          children: (0, n.jsx)(j, { size: "xs", color: "currentColor" }),
                      })
                    : null,
            ],
        }),
        className: tp.Nr,
        headerClassName: d ? void 0 : tp.RG,
        "data-vibegrations-todo-card": !0,
        "data-superseded": o ? "true" : void 0,
        children: [
            i && !o ? (0, n.jsx)(tx.A, { role: "status", "aria-live": "polite", children: b }) : null,
            (0, n.jsx)("div", {
                id: u,
                className: tp.rf,
                hidden: !d,
                children: (0, n.jsx)(ty, { todos: t, provisional: l, agents: r, live: s }),
            }),
        ],
    });
}
var tN = l(229775),
    tw = l(165648);
function tA(e) {
    let t = to(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? ts(e.task.helperMark) : void 0,
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
function tS(e) {
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
            closed: g = !1,
            segmentDurationMs: x,
        } = e,
        p = a.useMemo(() => (0, ew.GO)(l, { turnActive: r }), [l, r]),
        v = a.useMemo(
            () =>
                null == f
                    ? p
                    : {
                          ...p,
                          steps: p.steps.filter((e) => e.segment === f),
                          controls: p.controls.filter((e) => e.segment === f),
                          tasks: p.tasks.filter((e) => e.task.segment === f),
                      },
            [p, f],
        );
    if (u)
        return (0, n.jsx)("ol", {
            className: tf.pj,
            "data-live": !1,
            children: (0, n.jsx)(tl.A, {
                glyph: (0, n.jsx)(eM.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(E.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let b = r ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        j = m ? ((0, ew.lt)(l) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.controls.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        N = v.controls.map((e) => ({ node: e, ...(0, ew.jw)(e, i) })),
        w = to(k.map((e) => e.taskId)),
        A =
            !g &&
            (r ||
                k.some((e) => "running" === e.task.status) ||
                N.some((e) => {
                    let { live: t } = e;
                    return t;
                })),
        S = tA(k);
    return (0, n.jsx)(tl.l.Provider, {
        value: k.length,
        children: (0, n.jsxs)("ol", {
            className: tf.pj,
            "data-live": A,
            children: [
                (0, n.jsx)(eT.A, {
                    projectId: t,
                    steps: v.steps,
                    fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: g,
                    durationMs: b,
                    connectsDown: N.length > 0 || k.length > 0,
                    tier: p.turn?.tier,
                }),
                N.map((e, t) => {
                    let { node: l, line: a, live: r } = e;
                    return (0, n.jsx)(
                        tl.A,
                        {
                            glyph: (0, n.jsx)("span", { className: tf.nC, children: (0, n.jsx)(eF.A, {}) }),
                            line: a,
                            live: r && !g,
                            settled: !r,
                            connected: !0,
                            connectsDown: t < N.length - 1 || k.length > 0,
                        },
                        l.id,
                    );
                }),
                k.map((e, l) => {
                    let a = null != e.task.helperMark ? ts(e.task.helperMark) : void 0,
                        r = a ?? w.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              tm,
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
                          className: tf.YO,
                          children: (0, n.jsx)(tk, { todos: j, provisional: c, agents: S, live: i, superseded: s }),
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
            sideReply: g = !1,
            hoistedProse: x = !1,
            hoistedAttachmentsHost: p,
        } = e,
        b = a.useMemo(
            () => eL({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        { streamed: j, lastStreamedMessage: y, showsClosingMessage: k, closingContent: N } = b,
        w = (x ? p : void 0) ?? b.attachmentsHost,
        A = k && !x,
        S = null == u ? null : (0, n.jsx)(eG.A, { projectId: t, attachments: u }),
        I = null == S ? null : (0, n.jsx)("div", { className: tf.MT, children: S }),
        T = g
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: tf.ue,
        children: [
            j.length > 0 && !x
                ? (0, n.jsx)("ol", {
                      className: tf.dO,
                      children: j
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: tf.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tw.PT,
                                              children: eR.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === w && e === y ? I : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(e2, { projectId: t, proposal: s, onApprove: h })
                : A
                  ? (0, n.jsxs)("div", {
                        className: i()(tf.ky, tN.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tw.PT, tf.cW),
                                children: eR.A.parse(N, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === w ? I : null,
                            T,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(tf.ky, tN.XR),
                      children: (0, n.jsx)(e6, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(tf.ky, tN.XR),
                      children: (0, n.jsx)(tt, { projectId: t, request: c }),
                  })
                : null,
            "standalone" !== w && ("closing" !== w || A) ? null : S,
            null != o && o.length > 0 ? (0, n.jsx)(eB, { ideas: o, pickedIdeaIds: m, onPick: f }) : null,
            A ? null : T,
        ],
    });
}
var tC = l(864970),
    tI = l(146806),
    tT = l(475358),
    tM = l(81369),
    tR = l(922016),
    tP = l(980707),
    t_ = l(477782),
    tL = l(717400),
    tF = l(663341),
    tD = l(826745),
    t$ = l(783977),
    tO = l(559647),
    tq = l(775602),
    tz = l(435558),
    tU = l.n(tz),
    tB = l(506774),
    tG = l(228366);
let tW = "VibegrationsComposerDrafts";
function tV() {
    return tB.w.get(tW) ?? {};
}
let tH = new Map(),
    tK = tU().throttle(() => {
        if (0 === tH.size) return;
        let e = tV();
        for (let [t, l] of tH) "" === l ? delete e[t] : (e[t] = l);
        (tH.clear(), tB.w.set(tW, e));
    }, 1e3);
class tY extends D.Ay.Store {
    getDraft(e) {
        let t = tH.get(e);
        return null != t ? t : (tV()[e] ?? "");
    }
}
let tX = new tY(tG.h, {
    LOGOUT: function () {
        return (tH.clear(), tK.cancel(), tB.w.remove(tW), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (tH.set(t, l), tK(), "" === l && tK.flush(), !1);
    },
});
var tQ = l(43105),
    tZ = l(252510);
let tJ = [E.default.ZK2O25, E.default["122Ir6"], E.default["9KCASa"]];
function t0(e) {
    let { targetElementRef: t, onDismiss: l } = e,
        r = a.useMemo(() => [{ text: C.intl.string(E.default.sZCqrE), onClick: l }], [l]);
    return (0, n.jsx)(tQ.A, {
        targetElementRef: t,
        title: C.intl.string(E.default.n8wtkv),
        body: C.intl.format(E.default.Oaq2Cc, {
            content: (0, n.jsxs)("div", {
                className: tZ.r,
                children: [
                    C.intl.string(E.default.cK0dk1),
                    (0, n.jsx)("ul", {
                        className: tZ.e,
                        children: tJ.map((e, t) => (0, n.jsx)("li", { children: C.intl.string(e) }, t)),
                    }),
                ],
            }),
        }),
        position: "top",
        actions: r,
        onRequestClose: l,
    });
}
var t1 = l(379307);
(l(323874), l(14289), l(35956));
var t2 = l(285796),
    t7 = l(673724),
    t5 = l(839214);
let t4 = [],
    t3 = 1,
    t6 = (0, t5.D)(() => ({ draftsByProject: {} }));
function t8(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? t4;
}
function t9(e, t) {
    return t8(t6.getState(), e, t);
}
function le(e, t, l) {
    let { draftsByProject: n } = t6.getState();
    t6.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function lt(e, t, l, n) {
    let a = t9(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (le(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function ll(e, t) {
    (0, f.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function ln(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && ll(e, t.ref.id));
}
function la(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = t6.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? t4) l ? ln(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    t6.setState({ draftsByProject: i });
}
function lr(e, t) {
    let l = t9(e, t);
    if (0 !== l.length) {
        for (let t of l) ln(e, t);
        le(e, t, t4);
    }
}
(tG.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(t6.getState().draftsByProject)) la(e, { deleteFromWorker: !0 });
}),
    tG.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        la(t, { deleteFromWorker: !1 });
    }));
var li = l(590380),
    ls = l(298668);
let lo = t7.Is;
function lu(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        r = t6.useState((e) => t8(e, t, l)),
        i = a.useRef(n);
    i.current = n;
    let s = a.useCallback(
            (e) => {
                let n = t9(t, l).length;
                !(function (e, t, l) {
                    if (0 === l.length) return;
                    let n = l.map((e) => {
                        let { draft: t, upload: l } = e;
                        return { draft: { ...t, localId: t3++ }, upload: l };
                    });
                    for (let { draft: l, upload: a } of (le(e, t, [
                        ...t9(e, t),
                        ...n.map((e) => {
                            let { draft: t } = e;
                            return t;
                        }),
                    ]),
                    n))
                        a?.().then(
                            (n) => {
                                "errorText" in n
                                    ? lt(e, t, l.localId, { status: "error", errorText: n.errorText })
                                    : lt(e, t, l.localId, { status: "ready", ref: n })
                                      ? setTimeout(
                                            () =>
                                                lt(e, t, l.localId, {
                                                    status: "error",
                                                    errorText: C.intl.string(E.default.HL9CT6),
                                                }),
                                            t7.$f - 3e5,
                                        )
                                      : ll(e, n.id);
                            },
                            (n) => {
                                (console.error("[vibegrations] attachment upload failed", n),
                                    lt(e, t, l.localId, {
                                        status: "error",
                                        errorText: C.intl.string(E.default.GwEHvn),
                                    }));
                            },
                        );
                })(
                    t,
                    l,
                    e.map((e) => {
                        let t = "" === e.type ? "application/octet-stream" : e.type,
                            l = { name: e.name, contentType: t };
                        if (n++ >= lo)
                            return {
                                draft: {
                                    ...l,
                                    status: "error",
                                    errorText: C.intl.formatToPlainString(E.default.DlX57a, { count: lo }),
                                },
                            };
                        if (!(0, t7.x5)(e.size, t))
                            return {
                                draft: {
                                    ...l,
                                    status: "error",
                                    errorText: C.intl.formatToPlainString(E.default.cI7t94, {
                                        size: (0, t7.ZJ)((0, t7.yr)(t)),
                                    }),
                                },
                            };
                        let a = t7.Wb.has(t) ? URL.createObjectURL(e) : void 0;
                        return { draft: { ...l, status: "uploading", previewUrl: a }, upload: () => i.current(e) };
                    }),
                );
            },
            [t, l],
        ),
        o = a.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = t9(t, l)).find((t) => t.localId === e)) &&
                    (ln(t, a),
                    le(
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
                    let l = t9(e, t);
                    if (0 === l.length) return [];
                    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
                    return (le(e, t, t4), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
                })(t, l),
            [t, l],
        );
    return { drafts: r, addFiles: s, removeDraft: o, settled: r.every((e) => "ready" === e.status), takeRefs: u };
}
function ld(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(li.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: ls.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: ls.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(E.default["3HWvgk"]),
                children: (0, n.jsx)(t2.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lc = l(789438);
let lf = "text-md/normal",
    lm = null;
function lh(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [f, m] = a.useState(0),
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
            (g(i + r), m(s));
            let o = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                f = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : o / c;
            p({
                frontFrom: 1e3 * (0, tI._R)(f),
                frontTo: 1e3 * (0, tI._R)(h),
                backFrom: 1e3 * (0, tI.T)(f),
                backTo: 1e3 * (0, tI.T)(h),
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
        I = (0, D.bG)([tq.Ay], () => tq.Ay.useReducedMotion),
        T = t === C.intl.string(E.default.Jj8Ftb),
        M = s === t && T;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(lc.VT, { [lc.qk]: a }),
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
            children: (0, n.jsx)(tT.e, { shortcut: "tab", className: lc.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tC.o, {
                text: t,
                variant: lf,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(lc.xM, { [lc.s2]: r }),
                onStart: w,
                onComplete: () => o(t),
            }),
            R(lc.IS, l || (!I && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: lc.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: lf, tag: "span", children: t }),
            }),
            M
                ? (0, n.jsxs)("span", {
                      className: lc.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: lf, tag: "span", className: lc.xM, children: t }),
                          R(lc.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function lg(e) {
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
            questionOpen: g = !1,
            tipOpen: x = !1,
            onDismissTip: p,
            hasPendingContext: v = !1,
            modelSettings: b,
            onModelSettingsChange: j,
        } = e,
        [y, k] = a.useState(() => tX.getDraft(t)),
        N = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), k(e));
            },
            [t],
        ),
        [w, A] = a.useState(t);
    w !== t && (A(t), k(tX.getDraft(t)));
    let S = (0, D.bG)([tq.Ay], () => tq.Ay.isSubmitButtonEnabled),
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
        } = lu({ projectId: t, surface: "chat", onUploadFile: d }),
        q = "" !== y.trim() || _.length > 0 || v,
        z = l && q && $,
        [U, B] = a.useState(null);
    a.useEffect(() => {
        if (null == U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]);
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
                null == lm && (lm = document.createElement("canvas").getContext("2d"));
                let i = lm;
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
            ("" !== t && B(t), N(""));
        }, [z, y, o, O, N, p]),
        W = a.useCallback(
            (e) => {
                (e.preventDefault(), G());
            },
            [G],
        ),
        V = a.useCallback(() => {
            null == u || M || (R(!0), u());
        }, [u, M]),
        H = null == h || "" !== y || !l || r || s || v ? null : h,
        K = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !M) {
                    (e.preventDefault(), e.stopPropagation(), V());
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
            [G, f, i, u, M, V, H, N],
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
            let t = lv(e);
            null != t && el(t);
        }
        ea(!0);
        let t = setTimeout(() => ea(!1), lx);
        return () => clearTimeout(t);
    }, [y]);
    let er = a.useMemo(() => ({ "--custom-glow-x": `${et}px` }), [et]),
        ei = en ? ` ${lc.EB}` : "",
        es = s
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
        em = U ?? H ?? es,
        eh = "" === y && "" !== em;
    return (0, n.jsxs)("form", {
        onSubmit: W,
        onDrop: X,
        onDragOver: Q,
        onDragLeave: () => T(!1),
        className: I ? `${lc.DA} ${lc.pV}` : lc.DA,
        children: [
            _.length > 0
                ? (0, n.jsx)("div", {
                      className: lc.lN,
                      children: _.map((e) => (0, n.jsx)(ld, { draft: e, onRemove: F }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${lc.wg} ${lc.LP}${ei}`, style: er, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${lc.wg} ${lc.L3}${ei}`, style: er, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lc.VA,
                ref: J,
                children: [
                    (0, n.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: Z,
                        className: lc.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == m
                        ? (0, n.jsx)(eW.m, {
                              text: C.intl.string(E.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: ee,
                                  type: "button",
                                  className: `${lc.Y0} ${lc.nu}`,
                                  disabled: !l,
                                  onClick: () => P.current?.click(),
                                  "aria-label": C.intl.string(E.default.d6Rqlu),
                                  children: (0, n.jsx)(tM.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: lc.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tR.Y, {
                              targetElementRef: ee,
                              position: "top",
                              align: "left",
                              animation: tR.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tP.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(t_.rX, {
                                          children: [
                                              (0, n.jsx)(t_.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: tM.H,
                                                  leadingAccessory: { type: "icon", icon: tM.H },
                                                  action: () => P.current?.click(),
                                              }),
                                              null != m
                                                  ? (0, n.jsx)(t_.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(E.default.edKajy),
                                                        iconLeft: tL.q,
                                                        leadingAccessory: { type: "icon", icon: tL.q },
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
                                      className: `${lc.Y0} ${lc.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(tF.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: lc.Qu,
                                      }),
                                  });
                              },
                          }),
                    eh
                        ? (0, n.jsx)("div", {
                              ref: ed,
                              className: lc.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(lh, { text: em, offering: ef && null == U, typed: null != U }),
                          })
                        : null,
                    (0, n.jsx)(tD.y, {
                        value: y,
                        onChange: (e) => N(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: Y,
                        placeholder: eh ? "" : es,
                        disabled: !l,
                        "aria-label": C.intl.string(E.default.OPr66w),
                        "aria-describedby": eh ? ec : void 0,
                        rows: 1,
                        className: lc.jp,
                    }),
                    eh ? (0, n.jsx)(tx.A, { id: ec, children: es }) : null,
                    (0, n.jsx)("div", {
                        className: lc.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(eW.m, {
                                      text: C.intl.string(E.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${lc.Y0} ${lc.$E}`,
                                          disabled: M,
                                          onClick: V,
                                          "aria-label": C.intl.string(E.default.KdgI4k),
                                          children: (0, n.jsx)(eM.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != j
                                  ? (0, n.jsx)(t1.A, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${lc.Y0} ${lc.$E}`,
                                        icon: (0, n.jsx)(t$.R, {
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
                              className: lc.fF,
                              children: [
                                  (0, n.jsx)("div", { className: lc.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: lc.rt,
                                      disabled: !z,
                                      "aria-label": C.intl.string(E.default["22GHMt"]),
                                      children: (0, n.jsx)(tO.SendMessageIcon, {
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
            x && null != p ? (0, n.jsx)(t0, { targetElementRef: J, onDismiss: p }) : null,
        ],
    });
}
let lx = 1500,
    lp = [
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
function lv(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = lv.mirror;
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
                (lv.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of lp) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
lv.mirror = null;
var lb = l(114212),
    lj = l(320095),
    ly = l(963852),
    lk = l(521981),
    lN = l(763754),
    lw = l(491182),
    lA = l(438729),
    lS = l(622868),
    lE = l(448368),
    lC = l(837528),
    lI = l(439762),
    lT = l(715628),
    lM = l(752636),
    lR = l(9842),
    lP = l(589022),
    l_ = l(95701),
    lL = l(994500),
    lF = l(967198);
let lD = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function l$(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lO(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lq(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lO(e, t),
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
    if (l$(a) && l$(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && l$(lO(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function lz(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([tq.Ay], () => tq.Ay.useReducedMotion),
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
                      for (; r > 0 && lq(t, r);) r--;
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
                                    for (; n > t + 1 && l - n < 12 && lD.has(e.charAt(n - 1));) n--;
                                    return lD.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lq(t, o);) o++;
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
var lU = l(803306);
let lB = new Set(),
    lG = new Map();
function lW(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
var lV = l(73432),
    lH = l(365199),
    lK = l(194085),
    lY = l(734495),
    lX = l(441136);
function lQ(e) {
    let { message: t, onClose: l } = e,
        a = (0, lY.A)(t);
    return (0, n.jsx)(tP.W, {
        navId: "vibegrations-message-actions",
        "aria-label": C.intl.string(C.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(t_.rX, { children: a }),
    });
}
function lZ(e) {
    let { message: t, groupStart: l } = e,
        [r, s] = a.useState(!1),
        o = a.useRef(null),
        u = a.useCallback(() => s((e) => !e), []),
        d = a.useCallback(() => s(!1), []);
    return null == (0, lY.A)(t)
        ? null
        : (0, n.jsx)("div", {
              className: i()(lX.QE, { [lX.Rn]: l, [lX.vg]: r }),
              children: (0, n.jsx)(lK.Ay, {
                  children: (0, n.jsx)(tR.Y, {
                      targetElementRef: o,
                      renderPopout: (e) => {
                          let { closePopout: l } = e;
                          return (0, n.jsx)(lQ, { message: t, onClose: l });
                      },
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      align: "top",
                      animation: tR.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: l, ...a } = e,
                              { isShown: r } = t;
                          return (0, n.jsx)(lK.qv, {
                              ref: o,
                              label: C.intl.string(C.t["UKOtz+"]),
                              icon: lH.MoreHorizontalIcon,
                              selected: r,
                              onClick: u,
                              ...a,
                          });
                      },
                  }),
              }),
          });
}
let lJ = (0, l_.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    l0 = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function l1(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lX.Yq, { [lX.x1]: t }), children: e });
}
function l2(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function l7(e, t, l) {
    let { content: r } = (0, lI.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lJ, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(lA.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lT.A)(i, r);
}
function l5(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lC.m)(e, lJ, t.usernameProfile, r),
        o = (0, lC.Jo)(t.avatarProfile, r),
        u = (0, D.bG)([lF.A], () => lF.A.getGuildId()),
        d = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eu.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(lP.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
function l4(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, lk.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lX.GV,
                              children: [
                                  (0, n.jsx)(lV.A, { className: lX.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, D.cf)(
            [lL.A],
            () => ({
                isReplyAuthorBlocked: lL.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lL.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, lN.X4)(l),
        c = (0, lN.X4)(t),
        f = l5(l);
    return (0, n.jsx)(lE.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lJ,
        referencedMessage: { state: lR.a.LOADED, message: l },
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
function l3(e) {
    let { message: t, author: l } = e,
        a = l5(t);
    return (0, n.jsx)(lS.Ay, {
        message: t,
        channel: lJ,
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
function l6(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || lB.has(e) || null != eu.default.getUser(e)) return;
                let t = lG.get(e) ?? 0;
                t >= 3 ||
                    (lG.set(e, t + 1),
                    lB.add(e),
                    lU
                        .wz(e)
                        .finally(() => lB.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, D.bG)(
            [eu.default],
            () => lW(r, null != r ? eu.default.getUser(r) : null, eu.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, lN.FT)(o, null), [o]),
        d = a.useMemo(() => (0, eN.LL)(t), [t]),
        c = d?.body ?? t,
        f = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, ly.Ay)({ channelId: lJ.id, content: c, author: o });
            return (0, lj.rh)({ ...e, timestamp: l2(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, o, l]);
    return null == f
        ? null
        : (0, n.jsx)(l8, { message: f, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function l8(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = l7(t, a);
    return (0, n.jsx)(lw.A, {
        className: lX.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(l3, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: lX.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lX.GV,
                              children: [
                                  (0, n.jsx)(lV.A, { className: lX.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lX.WO, children: o }),
                      ],
                  }),
        childrenAccessories: l1(i, "" !== a),
        childrenButtons: (0, n.jsx)(lZ, { message: t, groupStart: s }),
    });
}
function l9(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lz(t, { streaming: u }),
        f = a.useMemo(() => (0, lN.FT)(null, null), []),
        m = a.useMemo(() => ({ ...f, nick: "Conjure", colorString: "var(--text-brand)" }), [f]),
        h = i?.userId,
        g = (0, D.bG)(
            [eu.default],
            () => lW(h, null != h ? eu.default.getUser(h) : null, eu.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, eN.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, ly.Ay)({ channelId: lJ.id, content: x?.body ?? i.content, author: g });
            return (0, lj.rh)({ ...e, id: i.id, timestamp: l2(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lJ.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, ly.Ay)({ channelId: lJ.id, content: d, author: l0 });
            return (0, lj.rh)({
                ...e,
                timestamp: l2(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != v ? { type: P.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = l7(b, d, lX.OS);
    return (0, n.jsxs)("div", {
        className: lX.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(lw.A, {
                className: lX.yE,
                author: m,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(l4, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, lM.A)({ message: b, channel: lJ, author: m, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: l1(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lX.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)($.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let ne = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var nt = l(375068);
function nl(e) {
    let {
            projectId: t,
            messages: l,
            emptyState: r,
            ref: i,
            onPickIdea: s,
            onApprovePlan: o,
            floatingSettingsMessageId: u,
        } = e,
        d = a.useRef(null),
        c = a.useCallback(
            (e) => {
                ((d.current = e), "function" == typeof i ? i(e) : null != i && (i.current = e));
            },
            [i],
        ),
        [f, m] = a.useState(null),
        h = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(h.current), []);
    let g = a.useCallback((e) => {
            let t = d.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                m(e),
                window.clearTimeout(h.current),
                (h.current = window.setTimeout(() => m(null), 1600)));
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
                            if (null != c.prose && ne.test(c.prose.content)) d = !0;
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
                                        turnActive: eS(t),
                                        checklistSuperseded: c.hasTodos && l.has(t.render_id),
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let c = ne.test(t.content ?? "");
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
        p = l.at(-1);
    if (0 === l.length) {
        if ("loading" === r)
            return (0, n.jsx)("ol", { ref: i, className: nt.x7, "aria-busy": !0, children: (0, n.jsx)(nn, {}) });
        let e = "unavailable" === r ? E.default.s4oxNv : E.default.khZEUv;
        return (0, n.jsx)("ol", {
            ref: i,
            className: nt.x7,
            children: (0, n.jsx)(na, { role: "assistant", children: (0, n.jsx)(l9, { content: C.intl.string(e) }) }),
        });
    }
    return (0, n.jsx)("ol", {
        ref: c,
        className: nt.x7,
        children: x.map((e) => {
            let a = e.message;
            switch (e.kind) {
                case "user": {
                    let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                    return (0, n.jsx)(
                        na,
                        {
                            role: "user",
                            anchorId: a.id,
                            highlighted: f === a.id,
                            continuation: !e.groupStart,
                            children: (0, n.jsx)(l6, {
                                groupStart: e.groupStart,
                                content: a.content,
                                createdAt: a.created_at,
                                userId: a.user_id,
                                accessories: null != l ? (0, n.jsx)(eG.A, { projectId: t, attachments: l }) : void 0,
                            }),
                        },
                        e.key,
                    );
                }
                case "prose":
                    return (0, n.jsx)(
                        na,
                        {
                            role: "assistant",
                            continuation: !e.groupStart,
                            children: (0, n.jsx)(l9, {
                                groupStart: e.groupStart,
                                content: e.content,
                                streaming: e.streaming,
                                createdAt: a.created_at,
                                accessories:
                                    e.hostsAttachments && null != a.attachments
                                        ? (0, n.jsx)(eG.A, { projectId: t, attachments: a.attachments })
                                        : void 0,
                            }),
                        },
                        e.key,
                    );
                case "activity":
                    return (0, n.jsx)(
                        na,
                        {
                            role: "assistant",
                            children: (0, n.jsx)(tS, {
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
                        na,
                        {
                            role: "assistant",
                            children: (0, n.jsx)(tS, { projectId: t, interrupted: !0, steps: a.steps }),
                        },
                        e.key,
                    );
                case "legacyTodos":
                    return (0, n.jsx)(
                        na,
                        {
                            role: "assistant",
                            children: (0, n.jsx)(tS, {
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
                        na,
                        {
                            role: "assistant",
                            continuation: !e.groupStart,
                            children: (0, n.jsx)(l9, {
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
                                })(l, a.in_reply_to),
                                onJumpToReplied: null != a.in_reply_to ? () => g(a.in_reply_to) : void 0,
                                accessories: (0, n.jsx)(tE, {
                                    projectId: t,
                                    steps: a.steps,
                                    content: "",
                                    proposal: a.proposal,
                                    interrupted: !0 === a.interrupted,
                                    hoistedProse: !0,
                                    hoistedAttachmentsHost: e.attachmentsHost,
                                    sideReply: e.sideReply,
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
                                                              e.implementation_prompt.trim() === t.content.trim() &&
                                                                  n.add(e.id);
                                                  }
                                                  return n;
                                              })(l, a, a.ideas),
                                    attachments: a.attachments,
                                    secretRequest: a.secretRequest,
                                    settingsRequest: a.id === u ? void 0 : a.settingsRequest,
                                    onPickIdea: s,
                                    onApprovePlan: a === p ? o : void 0,
                                }),
                            }),
                        },
                        e.key,
                    );
            }
        }),
    });
}
let nn = a.memo(function () {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("li", { "aria-hidden": !0, className: nt.Ck, children: (0, n.jsx)(lb.Ay, { messages: 2 }) }),
            (0, n.jsx)("li", { "aria-hidden": !0, className: nt.Ck, children: (0, n.jsx)(lb.Ay, { messages: 1 }) }),
        ],
    });
});
function na(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(nt.xk, { [nt.Qo]: r, [nt.q3]: s }),
        children: l,
    });
}
let nr = [E.default.krnkPq, E.default["8oUm/J"], E.default["6Ea4dF"], E.default.fQx5qC, E.default["phXeK/"]];
function ni(e) {
    return nr.some((t) => C.intl.string(t) === e);
}
function ns(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(E.default.W7oyuf);
        case "closed":
            return C.intl.string(E.default["yBmS+I"]);
        case "failed":
            return C.intl.string(E.default.eE60xI);
    }
}
var no = l(559676),
    nu = l(823376),
    nd = l(495557);
function nc(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = lz(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: nd.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: o,
                className: nd.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tw.PT, nd.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eR.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nf = l(921461);
function nm(e) {
    let {
            activity: t,
            compacting: l = !1,
            restoring: r = !1,
            recalling: s = !1,
            controlling: o = !1,
            spoken: u,
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
                    ? nr[0]
                    : l
                      ? E.default["0vH/5G"]
                      : i
                        ? E.default.Ly7F7x
                        : E.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, recalling: s, controlling: o }),
        x = C.intl.string(g),
        p = g === nr["0"],
        [v, b] = a.useState(u ?? x),
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
        ((N.current = p), !p && ni(k.current) && b(j.current));
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (N.current) {
                    var e;
                    ((w.current = ni(k.current) ? w.current + 1 : 0),
                        b(((e = w.current), C.intl.string(nr[e % nr.length]))));
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
    return (0, n.jsx)(tR.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: M,
        renderPopout: () => (0, n.jsx)(nc, { id: f, activity: t }),
        children: () =>
            (0, n.jsxs)(eD.D, {
                innerRef: c,
                className: i()(nf.hF, A && nf.Xd),
                "aria-label": C.intl.string(r ? E.default.pGFXZ0 : p ? nr["0"] : E.default.SzdX35),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(g),
                onClick: T,
                children: [
                    (0, n.jsx)("span", {
                        className: nf.bl,
                        children: (0, n.jsx)(nu.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: nf.xu,
                        "aria-hidden": !!o || !!p || void 0,
                        children: (0, n.jsx)(tC.o, {
                            ref: y,
                            text: v,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nf.yE,
                        }),
                    }),
                ],
            }),
    });
}
let nh = { second: 1e3, minute: 6e4 };
function ng(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let l;
            if (null == e) return;
            let a = nh[t];
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
var nx = l(979148);
function np(e) {
    let { startedAt: t } = e,
        l = ng(t);
    return (0, n.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: nx.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, eP.C7)(l),
    });
}
function nv(e) {
    let { startedAt: t } = e,
        l = ng(t, "minute");
    return (0, n.jsx)(tx.A, { role: "timer", children: (0, eP.Us)(l) });
}
var nb = l(280894);
function nj(e) {
    return e.toLocaleString();
}
function ny(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: nb.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: nb.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nj((0, t7.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nj(l.input_tokens),
                    " in \xb7 ",
                    nj(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${nj(l.cache_creation_input_tokens)} cache write \xb7 ${nj(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function nk(e) {
    let { project: t } = e,
        l = (0, t7.wU)(t.compaction),
        a = (0, t7.wU)(t.classifier),
        r = (0, t7.wV)(t.orchestrator, t.codegen),
        i = (0, t7.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: nb.si,
        role: "dialog",
        "aria-label": C.intl.string(E.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: nb.Q$,
                children: (0, n.jsxs)("div", {
                    className: nb.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nj((0, t7.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(ny, { label: C.intl.string(E.default.R9aduM), usage: r }),
            (0, n.jsx)(ny, { label: C.intl.string(E.default.Tj6b30), usage: l }),
            (0, n.jsx)(ny, { label: C.intl.string(E.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: nb.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(E.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, t7.sj)(i) ? "\u2014" : `${Math.round(100 * (0, t7.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nN(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tR.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(nk, { project: t }),
        children: (e) =>
            (0, n.jsx)(eD.D, {
                innerRef: l,
                className: nb.Y$,
                "aria-label": C.intl.string(E.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(eV.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nw = l(258216);
function nA(e) {
    let t,
        {
            projectId: l,
            thinking: r,
            turnStartedAt: i,
            restoring: s = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: d,
            projectUsage: c,
            connState: f,
        } = e,
        m = (0, no.o4)(l),
        [h, g] = a.useState(null),
        x = a.useCallback((e) => g(ni(e) ? null : e), []),
        p =
            null == c
                ? null
                : ((t = (0, t7.a7)(c.cost_usd)),
                  {
                      text: C.intl.formatToPlainString(E.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: C.intl.formatToPlainString(E.default["7SZZvj"], { runes: t, turns: c.turns }),
                  }),
        b = r && null != i;
    return (0, n.jsxs)("div", {
        className: nw.jf,
        children: [
            (0, n.jsxs)("div", {
                className: nw.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    r || s || o || m
                        ? (0, n.jsx)(nm, {
                              activity: u,
                              compacting: d,
                              restoring: s,
                              recalling: o,
                              controlling: m,
                              spoken: h,
                              onSpokenChange: x,
                          })
                        : null,
                    b ? (0, n.jsx)(np, { startedAt: i }) : null,
                ],
            }),
            b ? (0, n.jsx)(nv, { startedAt: i }) : null,
            null == c || null == p
                ? null
                : (0, n.jsxs)("span", {
                      className: nw.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": p.aria,
                              children: p.text,
                          }),
                          (0, n.jsx)(nN, { project: c }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(E.default.eDDdhB, { status: ns(f) }),
                      "data-vibegrations-conn": !0,
                      "data-state": f,
                      className: nw.XF,
                      children: ns(f),
                  }),
        ],
    });
}
var nS = l(22231),
    nE = l(900797),
    nC = l(477155),
    nI = l(935286),
    nT = l(856795),
    nM = l(424110);
function nR(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eD.D, {
        className: i()(nM.uK, { [nM.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": C.intl.formatToPlainString(d ? E.default.aL1BKQ : E.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: nM.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: nM.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: nM.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nM.ed,
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
                      className: nM.rM,
                      children: C.intl.string(E.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nP(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(nM.Ge, nM.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(nR, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: nM.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: nM.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(nS.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(nM.Pu, nM.es), children: s }),
                ],
            }),
        ],
    });
}
function n_(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [s, u] = a.useState({}),
        [d, c] = a.useState({}),
        [f, m] = a.useState(0),
        [h, g] = a.useState(null),
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        N = a.useRef(null),
        [w, A] = a.useState(null),
        S = a.useRef(null),
        I = a.useRef(0),
        T = null == l,
        M = t.questions.length,
        R = Math.min(f, M - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        O = d[P.id] ?? "",
        { text: q, phase: z } = (0, nT.Q)(P.question),
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
        W = a.useCallback(
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
        V = a.useCallback(
            (e, t) => {
                I.current += 1;
                let l = I.current;
                (g({ direction: t, moves: l }), p({ question: P, draft: O, direction: t, moves: l }), k(!0), m(e));
            },
            [O, P],
        ),
        H = a.useCallback(() => {
            let e = N.current,
                t = S.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = N.current,
            t = S.current;
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
                null == n ? W(l) : V(n, n < R ? "back" : "forward");
            },
            [s, t, T, R, P.id, W, V],
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
                V(R - 1, "back"));
        }, [t, T, R, V]),
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
            T || R >= M - 1 || V(R + 1, "forward");
        }, [T, R, M, V]),
        er = R < M - 1 && !T;
    return (0, n.jsxs)("section", {
        className: i()(nM.$O, { [nM.fI]: J && !et, [nM.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": T ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: nM.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: N,
                        className: nM.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(nM.TK, nM.R_, { [nM.TB]: "exit" === z, [nM.JU]: "enter" === z }),
                                children: q,
                            }),
                            B || F
                                ? (0, n.jsx)("div", {
                                      className: nM.Q7,
                                      children: (0, n.jsx)(eW.m, {
                                          text: G,
                                          children: (0, n.jsx)(e8.K, {
                                              icon: F ? nE.t : th.a,
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
                                : (0, n.jsx)(eD.D, {
                                      className: i()(nM.gb, nM.Q7),
                                      onClick: en,
                                      "aria-label": C.intl.string(E.default.fMdUNR),
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
                        className: nM.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: nM.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: S,
                                    className: nM.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                nR,
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
                                            className: nM.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: nM.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(nS.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tD.y, {
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
                                                    placeholder: C.intl.string(E.default.qifsdL),
                                                    "aria-label": C.intl.formatToPlainString(E.default.XHESTL, {
                                                        question: P.question,
                                                    }),
                                                    disabled: T,
                                                    rows: 1,
                                                    className: nM.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, n.jsx)(
                                          nP,
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
                      className: nM.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: C.intl.formatToPlainString(E.default["7bypa+"], { index: R + 1, total: M }),
                          }),
                          (0, n.jsxs)("div", {
                              className: nM.Np,
                              children: [
                                  (0, n.jsx)(eD.D, {
                                      className: i()(nM.gb, { [nM.yI]: !Q }),
                                      onClick: Q ? X : void 0,
                                      tabIndex: Q ? 0 : -1,
                                      "aria-hidden": !Q,
                                      "aria-disabled": T,
                                      "aria-label": C.intl.string(E.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": Q ? void 0 : "true",
                                      children: (0, n.jsx)(nC.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eD.D, {
                                      className: i()(nM.gb, { [nM.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": T,
                                      "aria-label": C.intl.string(E.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(nI.E, {
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
var nL = l(643278),
    nF = l(405189);
function nD(e) {
    let { line: t, placement: l, todos: r, todosLive: s = !0, provisionalTodo: o, agents: u, onJumpToActivity: d } = e,
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
              className: nF.qd,
              "data-placement": f,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(nF.vK, { [nF.ho]: x && c, [nF.ET]: !c }),
                      children: [
                          null == d
                              ? (0, n.jsx)("ol", {
                                    className: i()(nF.Rk, tf.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(tl.A, {
                                        glyph: (0, n.jsx)(eF.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eD.D, {
                                    className: nF.pZ,
                                    onClick: d,
                                    "aria-label": C.intl.string(E.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(nF.Rk, tf.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(tl.A, {
                                            glyph: (0, n.jsx)(eF.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, n.jsx)(eW.m, {
                                    text: C.intl.string(E.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eD.D, {
                                        className: nF.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": C.intl.string(E.default.qCRC6c),
                                        children: (0, n.jsx)(nL.ClipboardListIcon, {
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
                            className: i()(nF.vB, { [nF.pg]: v && w, [nF.ui]: !v }),
                            children: (0, n.jsx)(tk, {
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
var n$ = l(651649),
    nO = l(522250),
    nq = l(670455),
    nz = l(348800);
let nU = [C.intl.string(E.default["E+Q26x"]), C.intl.string(E.default["06/jqP"]), C.intl.string(E.default["3gSfUa"])];
function nB(e) {
    var t;
    let { projectId: r, restoreState: i } = e,
        s = (0, D.bG)([eA.Ay], () => eA.Ay.getMessages(r), [r]),
        o = (0, D.bG)([f.Ay], () => f.Ay.getConnState(r), [r]),
        u = (0, D.bG)([f.Ay], () => f.Ay.isChatStopped(r), [r]),
        d = (0, D.bG)([eA.Ay], () => eA.Ay.getProjectUsage(r), [r]),
        c = (0, D.bG)([eA.Ay], () => eA.Ay.getThinkingActivity(r), [r]),
        m = (0, D.bG)([eA.Ay], () => eA.Ay.isCompacting(r), [r]),
        h = (0, D.bG)([f.Ay], () => f.Ay.getModelSettings(r), [r]),
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
                (e = (0, nO.hl)(r)) < nO.qu ||
                    (!(0, nO.Xi)(r) &&
                        n$.A.possiblyShowFeedbackModal(nq.MW.VIBEGRATIONS, () => {
                            ((0, nO.AH)(r),
                                (0, e4.openModalLazy)(async () => {
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
        S = a.useCallback(
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
        _ = a.useCallback(() => A(C.intl.string(E.default.Jj8Ftb)), [A]),
        L = i?.status === "restoring",
        F = "open" === o && !u && !L,
        $ = s[s.length - 1],
        O = null != $ && "assistant" === $.role && null != $.proposal,
        [q, z] = a.useState(null),
        U = $?.clarification != null && $.clarification.id !== q ? $.clarification : null,
        B = a.useCallback(() => {
            null != U && z(U.id);
        }, [U]),
        [G, W] = a.useState(!1);
    a.useEffect(() => {
        if (!(0, eC.Fy)(r)) return;
        let e = setTimeout(() => {
            ((0, eC.fA)(), W(!0));
        }, 0);
        return () => clearTimeout(e);
    }, [r]);
    let V = a.useCallback(() => W(!1), []),
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
        et = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, D.bG)([eA.Ay], () => eA.Ay.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, D.bG)([eA.Ay], () => eA.Ay.isHistoryUnavailable(r), [r]),
            connState: o,
        }),
        el = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return nU[e % nU.length];
        }, [r]),
        en = O
            ? C.intl.string(E.default.Jj8Ftb)
            : $?.kind === "plan_implemented"
              ? C.intl.string(E.default["3sTTBu"])
              : "greeting" === et && 0 === s.length
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
                          let e = eE.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ea)
                : void 0,
        es = O && F ? _ : void 0,
        eo = a.useCallback(() => A(C.intl.string(E.default.ga8too)), [A]),
        eu = O && F,
        [ed, ec] = a.useState(null),
        [ef, em] = a.useState(er);
    (ef !== er && (em(er), er || ec(null)),
        a.useEffect(() => {
            if (!er) return;
            let e = x.current?.getScrollerNode(),
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
        eg = a.useMemo(() => (null != ea ? ((0, ew.lt)(ea.steps) ?? ea.todos) : void 0), [ea]),
        ex = ea?.provisionalTodo,
        ep = null != ea && eS(ea),
        ev = a.useMemo(() => {
            var e;
            return null != ea ? ((e = ea.steps), tA((0, ew.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [ea]);
    return (0, n.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nz.TE,
        children: [
            (0, n.jsx)(nD, {
                onJumpToActivity: k,
                line: eh,
                placement: er && "top" === ed ? "top" : null,
                todos: eg,
                todosLive: ep,
                provisionalTodo: ex,
                agents: ev,
            }),
            (0, n.jsxs)("div", {
                className: nz.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: x,
                        onScroll: N,
                        className: [nz.N$, j ? null : nz.hB, ee ? nz.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(nl, {
                            ref: p,
                            projectId: r,
                            messages: s,
                            emptyState: et,
                            floatingSettingsMessageId: Q?.id,
                            onPickIdea: F ? T : void 0,
                            onApprovePlan: eu ? eo : void 0,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: nz.NJ,
                        children: (0, n.jsx)(nA, {
                            projectId: r,
                            thinking: er,
                            turnStartedAt: ei,
                            restoring: L,
                            recalling: "loading" === et && 0 === s.length,
                            thinkingActivity: c,
                            compacting: m,
                            projectUsage: d,
                            connState: o,
                        }),
                    }),
                    null == U
                        ? null
                        : (0, n.jsx)("div", {
                              className: ee ? `${nz.B5} ${nz.J9}` : nz.B5,
                              children: (0, n.jsx)(
                                  n_,
                                  { clarification: U, onSubmit: F ? M : void 0, onDismiss: B },
                                  U.id,
                              ),
                          }),
                    null == Z
                        ? null
                        : (0, n.jsx)("div", {
                              className: nz.B5,
                              children: (0, n.jsx)("div", {
                                  className: nz.ws,
                                  children: (0, n.jsx)(tt, { projectId: r, request: Z, onDismiss: J }, Q?.id),
                              }),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nz.Jx,
                children: [
                    (0, n.jsx)(nD, {
                        onJumpToActivity: k,
                        line: eh,
                        placement: er && "bottom" === ed ? "bottom" : null,
                        todos: eg,
                        todosLive: ep,
                        provisionalTodo: ex,
                        agents: ev,
                    }),
                    0 === w.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: nz.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: C.intl.formatToPlainString(E.default.Lkx0Kk, {
                                          count: w.annotations.length,
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
                                      onClick: () => (0, eI.PS)(r),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(lg, {
                        projectId: r,
                        canSend: F,
                        stopped: u,
                        running: er,
                        restoring: L,
                        onSend: S,
                        hasPendingContext: w.annotations.length > 0,
                        onInterrupt: F ? I : void 0,
                        onUploadFile: P,
                        onApprove: es,
                        suggestion: en,
                        questionOpen: null != U || null != Z,
                        tipOpen: G,
                        onDismissTip: V,
                        modelSettings: h,
                        onModelSettingsChange: R,
                    }),
                ],
            }),
        ],
    });
}
var nG = l(661531),
    nW = l(602853),
    nV = l(517461),
    nH = l(761929),
    nK = l(927506);
function nY(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, nW.r)(nG.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nV.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = a.useState(u ?? 460),
        m = (0, tz.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? m + s : 0);
    }, [m, t, s, r]);
    let h = (0, nH.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: nH.R.HORIZONTAL_LEFT,
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
        className: nK.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: nK.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: o, className: nK.kL, style: { width: m }, children: i }),
        ],
    });
}
var nX = l(691540),
    nQ = l(857250),
    nZ = l(97483),
    nJ = l(624479),
    n0 = l(92446),
    n1 = l(761508),
    n2 = l(540999),
    n7 = l(957565);
let n5 = [],
    n4 = new Map(),
    n3 = new Map(),
    n6 = new Map(),
    n8 = new Map(),
    n9 = new Map(),
    ae = new Map(),
    at = new Map();
class al extends D.Ay.Store {
    getStatus(e) {
        return n4.get(e) ?? null;
    }
    getFetchState(e) {
        return n3.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return n8.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return ae.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return n9.get(e) ?? null;
    }
    getModelCalls(e) {
        return at.get(e) ?? n5;
    }
    getForceCompactionState(e) {
        return n6.get(e) ?? "idle";
    }
}
let an = new al(tG.h, {
    LOGOUT: function () {
        if (
            0 === n4.size &&
            0 === n3.size &&
            0 === n6.size &&
            0 === n8.size &&
            0 === n9.size &&
            0 === ae.size &&
            0 === at.size
        )
            return !1;
        (n4.clear(), n3.clear(), n6.clear(), n8.clear(), n9.clear(), ae.clear(), at.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        n3.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === n6.get(t);
        n &&
            n6.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === n3.get(t);
        if ((a && n3.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? n3.set(t, "failed") : (n4.set(t, l), n3.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        n8.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        n9.set(e.projectId, {
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
        n6.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        n6.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = at.get(e.projectId);
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
        at.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, t7.aM)(l.total)) return !1;
        ae.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (n4.delete(t), n3.delete(t), n6.delete(t), n8.delete(t), n9.delete(t), ae.delete(t), at.delete(t));
    },
});
var aa = l(972786);
function ar(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function ai(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function as(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function ao(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function au(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function ad(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function ac(e) {
    return C.intl.string("preview" === e ? E.default["+m8XM6"] : E.default.kiOVnt);
}
let af = ["all", "preview", "stable", "web"],
    am = new Set(["error", "aborted", "length"]);
function ah(e) {
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
function ag(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(E.default.SBkDIZ, {
              p50: ar(e.memory_p50_bytes ?? 0),
              p999: ar(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let ax = {
    db: () => E.default.r6cciE,
    db_preview: () => E.default.JmIyL8,
    runtime: () => E.default.bzNyv8,
    runtime_preview: () => E.default["LONZ/8"],
    bot: () => E.default.jdpw3A,
    bot_preview: () => E.default["/g6wUz"],
};
var ap = l(69985);
function av(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: ap.KE,
        children: [
            (0, n.jsx)("div", {
                className: ap.IQ,
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
                                  children: C.intl.formatToPlainString(E.default["4NpaEk"], { time: au(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(X.$, { variant: "secondary", size: "sm", text: C.intl.string(E.default.aw0IJm), onClick: a }),
        ],
    });
}
function ab(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: ap.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: ap.Gf, children: t }),
            l,
        ],
    });
}
function aj(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: ap.N8,
        children: [
            (0, n.jsxs)("div", {
                className: ap.x7,
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
function ay(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: ap.N8,
        children: [
            (0, n.jsxs)("div", {
                className: ap.x7,
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
                className: ap.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? ap.aV : ap.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function ak(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(aj, {
            label: C.intl.string(E.default.H6PMwW),
            value: C.intl.string(E.default.TLOZ8J),
            hint: ah(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(aj, {
            label: C.intl.string(E.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(E.default.uAzxdh),
        });
    let a = ag(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aj, { label: C.intl.string(E.default.awAqRi), value: ai(l.cpu_ms) }),
            null != a && (0, n.jsx)(aj, { label: C.intl.string(E.default.WdGviA), value: a }),
        ],
    });
}
function aN(e) {
    let { analytics: t } = e,
        l = C.intl.string(E.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(ab, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: ah(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? ax[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(ab, {
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
                          aj,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(E.default.AnRynJ, { cpu: ai(t.cpu_ms) }),
                              hint: ag(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var aw = l(522652);
let aA = [];
function aS(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && am.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? ai(l.durationMs) : null,
                    `${as(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${as(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: aw.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aw.Q5,
                children: ao(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: aw.qN,
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
function aE(e, t) {
    return (0, n.jsx)(aj, {
        label: e,
        value: C.intl.formatToPlainString(E.default.U98VaN, { count: as((0, t7.aM)(t)) }),
        hint: `${as(t.input_tokens)} in \xb7 ${as(t.output_tokens)} out \xb7 ${as(t.cache_read_input_tokens)} cache read`,
    });
}
function aC(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, D.bG)([an], () => an.getLastTurnUsage(t), [t]),
        u = (0, D.bG)([an], () => an.getLastCompaction(t), [t]),
        d = (0, D.bG)([an], () => an.getLastCompactionDecline(t), [t]),
        c = (0, D.bG)([an], () => an.getForceCompactionState(t), [t]),
        m = a.useCallback(() => (0, f.Lj)(t), [t]),
        h = a.useCallback(() => (0, f.Lj)(t, !0), [t]),
        g = (0, D.bG)([an], () => (s ? aA : an.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: aw.Mf,
        children: [
            (0, n.jsx)(av, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(ab, {
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
                                  (0, n.jsx)(aj, {
                                      label: C.intl.string(E.default["8MSJDH"]),
                                      value: as((0, t7.a7)(x.cost_usd)),
                                      hint: C.intl.formatToPlainString(E.default["6Z2KhK"], { count: as(x.turns) }),
                                  }),
                                  aE(C.intl.string(E.default.hk4jJr), x.orchestrator),
                                  aE(C.intl.string(E.default.R9aduM), x.codegen),
                                  aE(C.intl.string(E.default.Tj6b30), (0, t7.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(aj, {
                                          label: C.intl.string(E.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${as(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(ab, {
                title: C.intl.string(E.default.lo4mY6),
                children:
                    null == o
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  aE(C.intl.string(E.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(aj, {
                                      label: C.intl.string(E.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, t7.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(ab, {
                title: C.intl.string(E.default.mn8279),
                children: [
                    null != u && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ay, {
                                      label: C.intl.string(E.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: as,
                                  }),
                                  (0, n.jsx)(aj, {
                                      label: C.intl.string(E.default.ntZb8d),
                                      value: `${as(u.tokensBefore)} \u{2192} ${as(u.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(E.default.jA05ru, {
                                          count: as(u.retainedMessages),
                                          time: au(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? C.intl.formatToPlainString(E.default.LKGmsP, { ceiling: as(j) })
                                      : C.intl.string(E.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(aj, {
                            label: C.intl.string(E.default["se+2ls"]),
                            value: `${as(d.projected)} / ${as(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(E.default.KHK44U, { time: au(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: aw.Lj,
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
                                    let t = au(e.observedAt);
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
                (0, n.jsx)(ab, {
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
                                          .map((e) => (0, n.jsx)(aS, { call: e }, e.id)),
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
                (0, n.jsxs)(ab, {
                    title: C.intl.string(E.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(aj, {
                                        label: C.intl.string(E.default["wt5X/o"]),
                                        value: au(b.instance_since),
                                        hint: C.intl.string(E.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(aj, { label: C.intl.string(E.default["4lgurx"]), value: as(b.sockets) }),
                                    (0, n.jsx)(aj, {
                                        label: C.intl.string(E.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? C.intl.string(E.default["9KlveJ"])
                                            : C.intl.string(E.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(aj, {
                                            label: C.intl.string(E.default["/hOBkc"]),
                                            value: as(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(ak, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(ab, {
                    title: C.intl.string(E.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(aj, {
                            label: C.intl.string(E.default.Rb6m3E),
                            value: as(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(aj, {
                            label: C.intl.string(E.default.WQ9pMe),
                            value: C.intl.formatToPlainString(E.default.U98VaN, { count: as(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(aj, {
                            label: C.intl.string(E.default.iEAvzu),
                            value: C.intl.formatToPlainString(E.default.U98VaN, {
                                count: as(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(aj, {
                            label: C.intl.string(E.default["jbhs+f"]),
                            value: as(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(aj, { label: C.intl.string(E.default.TOQnq4), value: as(p.max_build_attempts) }),
                        (0, n.jsx)(aj, { label: C.intl.string(E.default.RIDc6D), value: as(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var aI = l(629584),
    aT = l(683438),
    aM = l(849363);
function aR(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: aM.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(E.default.TV42NS),
              }),
          });
}
function aP(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: aM.qf,
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
              className: aM.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function a_(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: aM.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default["U/qDX9"]),
              }),
          })
        : null;
}
var aL = l(417397);
let aF = a.memo(function (e) {
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
        className: aL.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aL.Mt,
                selectable: !0,
                children: ao(l.ts),
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
                className: aL.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: aL.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: aL.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: aL.Cq,
                            title: l.build ?? void 0,
                            children: C.intl.string(E.default.GO6JcR),
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
                                  (0, n.jsxs)(eD.D, {
                                      className: aL.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": o,
                                      "aria-label": C.intl.string(E.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(th.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(tg._, {
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
                                                      "[\u2026]" === u.marker ? E.default.lXkB6Z : E.default.wkbYxG,
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
                                          className: aL.dF,
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
function aD(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([aa.Ay], () => aa.Ay.getLogs(t), [t]),
        r = (0, D.bG)([aa.Ay], () => aa.Ay.getHistoryState(t, "logs")),
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
                af.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return ac(e);
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
        className: aL.$F,
        children: [
            (0, n.jsxs)("div", {
                className: aL.y4,
                children: [
                    (0, n.jsx)(aI.I, {
                        look: "pill",
                        "aria-label": C.intl.string(E.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: aL.KT,
                        children: (0, n.jsx)(aT.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: C.intl.string(E.default["MX4vr/"]),
                            "aria-label": C.intl.string(E.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(aR, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: m,
                overflow: "auto",
                className: aL.sx,
                children: [
                    (0, n.jsx)(a_, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(aP, {
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
                          : d.map((e) => (0, n.jsx)(aF, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function a$(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(ab, {
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
function aO(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(aj, {
                      label: C.intl.formatToPlainString(E.default.f8ix3w, { env: ac(l) }),
                      value: ((t = a.connected), C.intl.string(t ? E.default["9KlveJ"] : E.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(aj, {
                      label: C.intl.string(E.default["0AB7l3"]),
                      value: as(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${au(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(aj, { label: C.intl.string(E.default.ElaQ0A), value: as(a.guild_count) }),
                  (0, n.jsx)(aj, {
                      label: C.intl.string(E.default.SJtBTN),
                      value: as(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(E.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: au(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(aj, {
                          label: C.intl.string(E.default.N4l504),
                          value: as(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(aj, { label: ac(l), value: C.intl.string(E.default.C6xjtD) });
}
function aq(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(aj, {
        label: ac(t),
        value: C.intl.formatToPlainString(E.default.Yur5Zm, { requests: as(l.requests), failures: as(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(E.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: au(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(E.default["1PdrB1"], { time: au(l.since) }),
    });
}
function az(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aj, {
                label: C.intl.formatToPlainString(E.default.BVORfc, { env: ac(t) }),
                value: as(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    aj,
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
                                  ? C.intl.formatToPlainString(E.default["7ecbr3"], { time: au(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function aU(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(aj, {
        label: ac(t),
        value: C.intl.formatToPlainString(E.default.voXL2a, { calls: as(l.calls), errors: as(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function aB(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(ab, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(E.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(ab, {
        title: t,
        children: [
            (0, n.jsx)(aj, {
                label: C.intl.string(E.default.KOnL3g),
                value: as(l.requests),
                hint: C.intl.formatToPlainString(E.default["1PdrB1"], { time: au(l.since) }),
            }),
            (0, n.jsx)(aj, { label: C.intl.string(E.default.CjPhyY), value: as(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(ay, {
                              label: C.intl.string(E.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: ai,
                          }),
                          (0, n.jsx)(aj, {
                              label: C.intl.string(E.default["+rYPHD"]),
                              value: ai(r),
                              hint: C.intl.formatToPlainString(E.default["+LxC7W"], {
                                  total: ai(l.cpu_ms_total),
                                  wall: ai(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(aj, {
                      label: C.intl.string(E.default["V/nNbs"]),
                      value: C.intl.string(E.default.YKWIxp),
                      hint: C.intl.string(E.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(aj, { label: C.intl.string(E.default.ueEMPa), value: ai(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(aj, { label: C.intl.string(E.default.vM2krr), value: as(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(aj, {
                label: C.intl.string(E.default.g1O88C),
                value: as(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(E.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(aj, { label: C.intl.string(E.default.JUZs7g), value: ad(l.build) }),
        ],
    });
}
function aG(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: C.intl.string(E.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(E.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(E.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(ab, {
        title: C.intl.string(E.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(aj, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(aj, {
                                  label: C.intl.formatToPlainString(E.default["9TpIQg"], { env: l }),
                                  value: ar(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? E.default.o45MMA : E.default.S7o3vV,
                                      { count: as(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(ay, {
                                      label: C.intl.formatToPlainString(E.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: ar,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aW(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aw.Mf,
        children: [
            (0, n.jsx)(av, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(aB, {
                            title: C.intl.string(E.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aB, {
                            title: C.intl.string(E.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aG, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(a$, {
                                title: C.intl.string(E.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aO, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(a$, {
                                title: C.intl.string(E.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aq, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(a$, {
                                title: C.intl.string(E.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(az, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(a$, {
                                title: C.intl.string(E.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aU, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(aN, { analytics: t.analytics }),
                        (0, n.jsxs)(ab, {
                            title: C.intl.string(E.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(aj, {
                                    label: C.intl.string(E.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? ad(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(aj, {
                                    label: C.intl.string(E.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? ad(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function aV(e, t) {
    return String(e).padStart(t, "0");
}
function aH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aV(n.getHours(), 2)}:${aV(n.getMinutes(), 2)}:${aV(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aV(n.getMilliseconds(), 3)}` : a;
}
var aK = l(977129);
let aY = new Map(),
    aX = new Map(),
    aQ = 0,
    aZ = 0;
async function aJ(e, t, l) {
    let n = aQ,
        a = aY.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aZ) return { status: "forbidden" };
    let r = aX.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aK.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((aZ = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aQ) return { status: "failed" };
            var l = o.rich;
            for (aY.set(t, l); aY.size > 100;) {
                let e = aY.keys().next();
                if (!0 === e.done) break;
                aY.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    aX.set(t, i);
    let s = await i;
    return (aX.get(t) === i && aX.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function a0() {
    ((aQ += 1), aY.clear(), aX.clear(), (aZ = 0));
}
function a1(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function a2(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function a7(e) {
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
function a5(e) {
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
let a4 = ["model", "tool", "subagent", "delegated", "context"];
function a3(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(a5(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function a6(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let a8 = ["arguments", "result", "usage", "diagnostics"];
var a9 = l(40715);
let re = { started: a9.Vf, ok: a9.mo, error: a9.Sr };
function rt(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${a9.Om} ${re[t] ?? a9.Vf}`,
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
let rl = { model: a9.WI, subagent: a9.uM, context: a9.eH, tool: a9.pw, delegated: a9.C8 };
function rn(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: a9.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: a9.D6, children: t }),
            (0, n.jsx)("div", { className: a9.zL, children: l }),
        ],
    });
}
function ra(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(rn, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function rr(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: a9.WA, children: t });
}
function ri(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: a9.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: a9.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function rs(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: a9.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: a9.p8,
                children: [
                    (0, n.jsx)(tg._, { className: a9.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: a9.bG, children: l }),
        ],
    });
}
function ro(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(rn, {
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
    return (0, n.jsx)(rn, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: a9.Kv,
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
function ru(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: a9.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: a9.uh,
                          children: C.intl.string(E.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          rn,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: a9.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: a9.Px,
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
function rd(e) {
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
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: a9.E7, children: l });
}
function rc(e) {
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
                a8.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aY.get(t)) return;
                    let l = new AbortController();
                    return (
                        aJ(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aY.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        f = aH(l.startedAt, "millis"),
        m = a5(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: a9._0,
        onKeyDown: h,
        role: "region",
        "aria-label": C.intl.formatToPlainString(E.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: a9.sy,
                children: (0, n.jsxs)("div", {
                    className: a9.HI,
                    children: [
                        (0, n.jsx)(rt, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${a9.PY} ${rl[m]}`,
                            children: a7(m),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: a9.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: a9.l5,
                            children: null == l.durationMs ? C.intl.string(E.default.HpKDyl) : a1(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: a9.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(ri, {
                      title: C.intl.string(E.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(ro, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(ru, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(rd, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(ri, {
                      title: C.intl.string(E.default.KXrf5F),
                      children: [
                          (0, n.jsx)(ra, {
                              label: C.intl.string(E.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(E.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(ra, {
                                    label: C.intl.string(E.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(rn, {
                                    label: C.intl.string(E.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: C.intl.string(E.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(ru, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(ri, {
                      title: C.intl.string(E.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(rr, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(ra, {
                                            label: C.intl.string(E.default.Ran4BY),
                                            value: C.intl.formatToPlainString(E.default["PYO+Jv"], {
                                                tokens: a2(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(ra, {
                                            label: C.intl.string(E.default.vPIcyv),
                                            value: C.intl.formatToPlainString(E.default.Qy2iTq, {
                                                system: a2(l.systemTokens),
                                                tools: a2(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: a2(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(ra, {
                                            label: C.intl.string(E.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(ra, {
                                            label: C.intl.string(E.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(ra, {
                                            label: C.intl.string(E.default.VyAl6j),
                                            value: C.intl.formatToPlainString(E.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(ra, {
                                            label: C.intl.string(E.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: a9.E7,
                              children: C.intl.string(E.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: a9.E7,
                      children: C.intl.string(E.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(rs, {
                      title: C.intl.string(E.default.T7SFyZ),
                      children: (0, n.jsxs)(rr, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(rn, {
                                        label: C.intl.string(E.default.NnBqcd),
                                        value: (0, n.jsx)(eD.D, {
                                            tag: "div",
                                            className: a9.mi,
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
                                  : (0, n.jsx)(ra, {
                                        label: C.intl.string(E.default.fI6mzD),
                                        value: C.intl.formatToPlainString(E.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(ra, { label: C.intl.string(E.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(ra, { label: C.intl.string(E.default["XVTP/S"]), value: l.id }),
                              null == f ? null : (0, n.jsx)(ra, { label: C.intl.string(E.default.rD7bm0), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(ra, { label: C.intl.string(E.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: a9.Hm,
                                                children: C.intl.string(E.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    ra,
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
                className: a9.E7,
                children: C.intl.string(E.default.khAjR0),
            }),
        ],
    });
}
let rf = { model: a9.WI, subagent: a9.uM, context: a9.eH, tool: a9.pw, delegated: a9.C8 };
function rm(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = a5(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return a4.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: a9.M0,
        children: [
            (0, n.jsx)("div", {
                className: a9.pZ,
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
                                            className: `${a9.dL} ${rf[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: a9.z4,
                role: "group",
                "aria-label": C.intl.string(E.default.UZ1OlR),
                children: a4.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: a9.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${a9.A9} ${rf[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a7(e) }),
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
                                          children: a1(a),
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
let rh = { model: a9.WI, subagent: a9.uM, context: a9.eH, tool: a9.pw, delegated: a9.C8 };
function rg(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = a5(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(E.default["PYO+Jv"], { tokens: a2(t.promptTokens) })
                : null != t.durationMs
                  ? a1(t.durationMs)
                  : null;
    return (0, n.jsxs)(eD.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${a9.nM} ${s ? a9.A5 : ""} ${"error" === t.status ? a9.Cr : ""} ${l ? a9.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: a9.sU,
                children: [
                    (0, n.jsx)(rt, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${a9.PY} ${rh[o]}`,
                        children: a7(o),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: a9.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: a9.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: a9.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: a9.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rx(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([aa.Ay], () => aa.Ay.getTrace(l), [l]),
        s = (0, D.bG)([aa.Ay], () => aa.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => a0, [l]);
    let [o, u] = a.useState(null),
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
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, tz.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, tz.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, nH.A)({
            resizableDomNodeRef: g,
            orientation: nH.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, tz.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        T = a.useMemo(() => a3(i, r), [i, r]),
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
                    .map((e, t) => ({ ...e, index: t, entries: a3(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = a6(T, o),
        P = R?.kind === "tool" ? a6(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
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
              className: a9.uP,
              ref: h,
              children: (0, n.jsx)(aP, {
                  state: s,
                  emptyTitle: C.intl.string(E.default.Iyt8OJ),
                  emptyBody: C.intl.string(E.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${a9.uP} ${f ? a9.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: a9.DK,
                      children: [
                          (0, n.jsx)(rm, { entries: i }),
                          (0, n.jsx)(aR, { state: s }),
                          0 === T.length
                              ? (0, n.jsx)("div", {
                                    className: a9.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(E.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: x,
                                    className: a9.Ns,
                                    children: [
                                        (0, n.jsx)(a_, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(E.default["QATZ+A"]),
                                            className: a9.p_,
                                            children: M.map((e) => {
                                                let t = aH(e.startedAt),
                                                    l = C.intl.formatToPlainString(E.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: a9.mf,
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
                                                                              children: a1(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: a9.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        rg,
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
                                    "aria-label": C.intl.string(E.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: a9.b1,
                                    onPointerDown: A,
                                    onKeyDown: S,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: a9.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(rc, {
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
var rp = l(402879);
function rv(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([aa.Ay], () => aa.Ay.getTrace(t), [t]),
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
            (0, rp.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: a9.ED,
                children: (0, n.jsx)(aT.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: C.intl.string(E.default.NfncNw),
                    "aria-label": C.intl.string(E.default.NfncNw),
                }),
            }),
            (0, n.jsx)(tR.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tR.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tP.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(t_.rX, {
                            children: (0, n.jsx)(t_.Dr, {
                                id: "export",
                                label: C.intl.string(E.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(e8.K, {
                        ...e,
                        buttonRef: s,
                        icon: lH.MoreHorizontalIcon,
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
var rb = l(497243);
function rj(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, u] = a.useState(""),
        c = (0, D.bG)([n2.A], () => n2.A.isDeveloper),
        m = (0, D.bG)([an], () => an.getStatus(t), [t]),
        h = (0, D.bG)([an], () => an.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, f.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, f.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, n7.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: an.getStatus(t),
                        last_turn_usage: an.getLastTurnUsage(t),
                        last_compaction: an.getLastCompaction(t),
                        last_compaction_decline: an.getLastCompactionDecline(t),
                        model_calls: an.getModelCalls(t),
                        logs: aa.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nX.P0)((0, nQ.o)(C.intl.string(E.default.sDSDiO), nZ.Ck.SUCCESS)),
            );
        }, [t]),
        p = C.intl.string(E.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rb.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: nJ.CopyIcon,
                            tooltip: C.intl.string(E.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: n0.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rb.rf,
                children: [
                    (0, n.jsxs)(n1.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(E.default.uNyR86),
                        className: rb.vR,
                        children: [
                            (0, n.jsx)(n1.V.Item, { id: "logs", children: C.intl.string(E.default["1mpzdJ"]) }),
                            (0, n.jsx)(n1.V.Item, { id: "worker", children: C.intl.string(E.default.whGHLD) }),
                            (0, n.jsx)(n1.V.Item, { id: "agent", children: C.intl.string(E.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(n1.V.Item, { id: "trace", children: C.intl.string(E.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(aD, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aW, { status: m, fetchState: h, onRefresh: g })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rb.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rb.XH,
                                          children: (0, n.jsx)(rv, { projectId: t, query: s, onQueryChange: u }),
                                      }),
                                      (0, n.jsx)(rx, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(aC, { projectId: t, status: m, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var ry = l(333007),
    rk = l(621466),
    rN = l(103557),
    rw = l(97808),
    rA = l(778712),
    rS = l(365912),
    rE = l(775121),
    rC = l(486020),
    rI = l(277437);
function rT(e) {
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
            drafts: g,
            addFiles: x,
            removeDraft: p,
            settled: v,
            takeRefs: b,
        } = lu({ projectId: t, surface: "design", onUploadFile: h }),
        j = a.useRef(null),
        y = (f || g.length > 0) && v && !m,
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
        [S, I] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = A.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = S?.height ?? 44,
        M = r.left + 8,
        R = r.top + 8,
        P = Math.max(l.x, M),
        _ = Math.min(Math.max(l.y + 32 + 4, R), Math.max(R, r.top + r.height - T - 8));
    return (0, n.jsxs)("div", {
        ref: A,
        className: i()(rI.M0, { [rI.ho]: N && !m, [rI.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: rI.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(eW.m, {
                position: "bottom",
                text: C.intl.string(E.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: rI.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": C.intl.string(E.default.d6Rqlu),
                    children: (0, n.jsx)(tM.H, { size: "custom", color: "currentColor", className: rI.WW }),
                }),
            }),
            (0, n.jsx)(tD.y, {
                autoFocus: !0,
                rows: 1,
                className: rI.hF,
                value: o,
                placeholder: "" === s ? C.intl.string(E.default.FK09JH) : `Edit ${s}`,
                "aria-label": C.intl.string(E.default["qR+sGX"]),
                onChange: (e) => u(e.target.value),
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                },
            }),
            g.length > 0
                ? (0, n.jsx)("div", {
                      className: rI.ZO,
                      children: g.map((e) => (0, n.jsx)(ld, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rM = l(320510);
function rR(e) {
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
function rP(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rR(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var r_ = l(940107),
    rL = l(42843);
let rF = { x: 25, y: 21 };
function rD(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function r$(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rO(e, t, l, n) {
    let a = r$(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rq(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rz(e) {
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
function rU(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        o = null != l && l === r ? t : null,
        { active: u, annotations: d } = (0, eI.Q_)(o),
        c = (0, no.o4)(o),
        m = (0, e4.useHasAnyModalOpen)(),
        h = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, S] = a.useState(null),
        [I, T] = a.useState(!1),
        M = a.useRef(null),
        R = a.useRef(null),
        P = a.useRef(null),
        [_, L] = a.useState(null),
        [F, $] = a.useState(!1),
        [O, q] = a.useState(null),
        [z, U] = a.useState(null),
        B = a.useRef(!1),
        [G, W] = a.useState(!1),
        [V, H] = a.useState(null),
        K = u && !c && !m;
    null == O || (K && O.projectId === o) || q(null);
    let Y = O?.projectId ?? null;
    (a.useEffect(() => {
        if (null != Y) return () => lr(Y, "design");
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
                p((t) => (rD(t, e) ? t : e));
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
                (0, rM.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? rz(t.response) : null;
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
        if (!K || null == x || null == o) return;
        if (null == b) {
            Q.current = x;
            return;
        }
        if (rD(Q.current, x)) return;
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
                    (0, rM.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !et.current) return;
                        let l = rz(e.response);
                        null != l && (j(l), (0, eI._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rR(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, eI.fA)(o, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, x, b, d, o, i]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), q(null), H(null), j(null));
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
                    (0, r_.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rP, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((ee.current = !1), et.current)) {
                                if ("picked" !== t.status || rK(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && $(!0);
                                else {
                                    let e = (0, eN.ts)(t.target);
                                    (L((t) => (rH(t, e) ? t : e)),
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
            if (null == O) return;
            let e = !B.current;
            (U({ at: O.at, label: O.label, draft: O.draft, instant: e }), W(e), q(null));
        }, [O]);
    (a.useEffect(() => {
        if (!G) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => W(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [G]),
        a.useEffect(() => {
            if (null == z) return;
            let e = setTimeout(() => U(null), rW);
            return () => clearTimeout(e);
        }, [z]));
    let ea = null == b || null == x || b.viewport.width < 1 ? 1 : x.width / b.viewport.width,
        er = null != b || N,
        ei = a.useMemo(() => b?.elements ?? [], [b]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: x, scale: ea };
    }, [x, ea]);
    let eo = a.useCallback(
            (e, t, l) => {
                null != o &&
                    (lr(o, "design"),
                    H(null),
                    (B.current = !1),
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
                if (null == x || null != V) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), T(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > rV || Math.abs(e.clientY - O.at.y) > rV) && (B.current = !0);
                    return;
                }
                if (!er) return void S(null);
                let t = ed(e, x);
                if (F) {
                    let e = (0, eN.jo)(ei, t.x, t.y),
                        l = null != e && rK(e, x, ea) ? null : e;
                    if (null != l) {
                        let e = (0, eN.ts)(l);
                        L((t) => (rH(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = J.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((J.current = l), (Z.current = l), el());
            },
            [x, ea, er, ed, F, ei, O, V, ec, el],
        ),
        em = a.useCallback(() => {
            (T(!1), S(null), (J.current = null), (Z.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !er || F || null != O || null != V) return;
        let e = P.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((J.current = n), (Z.current = n), el());
    }, [K, I, er, F, O, V, el]);
    let eh = a.useCallback(
            (e) => {
                if (null != O || null != V) {
                    (en(), H(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = ed(e, x);
                eo(A, (0, eN.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, x, ed, O, V, eo, en],
        ),
        eg = a.useCallback(() => {
            null != o && (S(null), (0, eI.PS)(o));
        }, [o]),
        ex = a.useCallback(() => {
            null != o &&
                (null != O
                    ? en()
                    : V?.confirmingRemove === !0
                      ? H({ ...V, confirmingRemove: !1 })
                      : null != V
                        ? H(null)
                        : eg());
        }, [o, O, V, en, eg]),
        ep = a.useRef(ex),
        ev = a.useRef(eg);
    a.useLayoutEffect(() => {
        ((ep.current = ex), (ev.current = eg));
    });
    let eb = a.useRef(null);
    a.useEffect(() => {
        if (K)
            return (
                rE.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rE.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ep.current());
        }
        function t(e) {
            let t = e.target;
            (0, rk.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rS.J$)(e), !0);
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
                    (e.preventDefault(), e.stopPropagation(), ex());
                    return;
                }
                if (null != O || null != V || 0 === ei.length) return;
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
                    eo(A, eN.F6, { x: (x?.left ?? 0) + A.rect.x * ea, y: (x?.top ?? 0) + A.rect.y * ea }));
            },
            [o, O, V, ei, A, eo, ex, x, ea],
        ),
        ey = a.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    (((0, eN.to)(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, f.dv)(o, (0, eN.v_)(O.target, O.draft), e), en(), S(null)));
            },
            [o, O, en],
        ),
        ek = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, f.vX)(o, e)), [o]),
        ew = a.useCallback(() => {
            null == o ||
                null == V ||
                null == g ||
                ((0, eN.to)(V.draft) && ((0, eI.dy)(o, g, V.id, V.draft.trim()), H({ ...V, editing: !1 })));
        }, [o, V, g]),
        eA = a.useCallback(() => {
            null != o && null != V && null != g && ((0, eI.PR)(o, g, V.id), H(null));
        }, [o, V, g]),
        eS = u
            ? y
                ? C.intl.string(E.default.jQQ8i2)
                : N
                  ? C.intl.string(E.default.zvU2QH)
                  : C.intl.formatToPlainString(E.default.A4HDMU, { count: d.length })
            : "",
        eE = K && null != x,
        eC = I && null == V,
        eT = null == V ? null : d.find((e) => e.id === V.id),
        eM = O?.target ?? eT?.target ?? null,
        eR = O ?? z,
        eP = O ?? (z?.instant === !0 ? null : z),
        e_ =
            null != eT && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = rq(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rO(eT.target, eT.anchor, x, ea), x)
                : null;
    return (0, ry.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: rL.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rL.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eE
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rL.MT,
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
                              null != A && null == O && null == V ? (0, n.jsx)(rY, { box: r$(A, x, ea) }) : null,
                              (0, n.jsx)("div", {
                                  ref: M,
                                  className: rL.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rL.xz,
                                      "data-shown": null != A && null == V && null == O ? "" : void 0,
                                      "data-instant": G ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: rL.Ux,
                                          children: [
                                              null == _
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rL.Tl, children: _.kind }),
                                              null == _ || "" === _.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rL.kh, children: [" ", _.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rL.Y,
                                  children: eC
                                      ? (0, n.jsx)(lV.A, { className: rL.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eP
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rL.aZ,
                                        style: { transform: `translate3d(${eP.at.x + 12}px, ${eP.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rL.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: rL.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rL.Tl, children: eP.label.kind }),
                                                    "" === eP.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rL.kh,
                                                              children: [" ", eP.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eM
                                  ? (0, n.jsx)("div", { className: rL.D0, style: r$(eM, x, ea), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rO(e.target, e.anchor, x, ea),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rL.xL,
                                          style: { ...rq(l, x), width: 24, height: 24 },
                                          "aria-label": C.intl.formatToPlainString(E.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, eN.iw)(e.target),
                                          }),
                                          "aria-expanded": V?.id === e.id,
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
                                          children: (0, n.jsx)(rB, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eR || null == o
                                  ? null
                                  : (0, n.jsx)(rT, {
                                        projectId: o,
                                        at: { x: eR.at.x + 12, y: eR.at.y + 12 },
                                        bounds: x,
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
                              null != eT && null != V && null != e_
                                  ? (0, n.jsxs)(rG, {
                                        point: e_,
                                        frame: x,
                                        authorId: eT.authorId,
                                        title: (0, eN.iw)(eT.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            V.confirmingRemove ? H({ ...V, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            V.editing || V.confirmingRemove || H(null);
                                        },
                                        children: [
                                            V.editing
                                                ? (0, n.jsx)(rN.f, {
                                                      autoFocus: !0,
                                                      label: C.intl.string(E.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: V.draft,
                                                      maxLength: eN.gq,
                                                      rows: 3,
                                                      onChange: (e) => H({ ...V, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ew());
                                                      },
                                                  })
                                                : (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rL.aC,
                                                      children: eT.comment,
                                                  }),
                                            (0, eI.zz)(eT, g)
                                                ? (0, n.jsx)("div", {
                                                      className: rL.eB,
                                                      children: V.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rL.nv,
                                                                        children: C.intl.string(E.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(E.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...V, confirmingRemove: !1 }),
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
                                                                            H({
                                                                                ...V,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    V.editing
                                                                        ? (0, n.jsx)(X.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, eN.to)(V.draft),
                                                                              text: C.intl.string(E.default.wIeFN0),
                                                                              onClick: ew,
                                                                          })
                                                                        : (0, n.jsx)(X.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: C.intl.string(E.default.DKZggU),
                                                                              onClick: () =>
                                                                                  H({
                                                                                      ...V,
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
function rB(e) {
    let { authorId: t } = e,
        l = (0, D.bG)([eu.default], () => eu.default.getUser(t), [t]);
    return (0, n.jsx)(rw.eu, {
        src: null == l ? null : rC.Ay.getUserAvatarURL(l),
        size: rA._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rG(e) {
    let t,
        l,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rF);
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
        S = {
            left: k,
            top: N,
            "--custom-vibegrations-card-origin-x": `${w}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, n.jsxs)("div", {
        ref: p,
        className: rL.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rL.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rL.ip, children: (0, n.jsx)(rB, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rL.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rL.zI, children: x }),
        ],
    });
}
let rW = 300,
    rV = 2;
function rH(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rK(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rY(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rL.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rX = l(11055),
    rQ = l(175841),
    rZ = l(533140),
    rJ = l(342667);
function r0(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: r } = e,
        { stop: i, stopping: s } = (function (e) {
            let t = (0, D.bG)([eA.Ay], () => null != e && eA.Ay.isThinking(e)),
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
        o = "controlling" === t;
    return (0, n.jsxs)("div", {
        className: rJ.M0,
        "data-phase": t,
        "data-testid": "vibegrations-control-notice",
        children: [
            (0, n.jsxs)("div", {
                className: rJ.sp,
                children: [
                    (0, n.jsx)(rQ.SparklesIcon, { size: "sm", color: "currentColor" }),
                    o ? (0, n.jsx)(nu.i, { size: 12, color: "currentColor" }) : null,
                    (0, n.jsxs)("div", {
                        className: rJ.f4,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: rJ.w9,
                                children: C.intl.string(o ? E.default.ydhvN1 : E.default["7U6tIB"]),
                            }),
                            o
                                ? (0, n.jsx)(v.E, {
                                      variant: "text-xs/medium",
                                      color: "none",
                                      className: rJ.Rb,
                                      children: C.intl.string(E.default.NldIIG),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            o
                ? (0, n.jsxs)("div", {
                      className: rJ.lC,
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
function r1(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            resolveIframe: i,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, no.o4)(null != l && l === r ? t : null),
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
        })(u),
        c = (0, e4.useHasAnyModalOpen)(),
        f = (0, rZ.V0)(s);
    a.useEffect(() => {
        u && f && null != s && (0, rZ.c2)(s);
    }, [u, f, s]);
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
    return (0, ry.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: rJ.y4,
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
                          className: rJ.om,
                          style: v,
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
                x
                    ? (0, n.jsx)("div", {
                          className: rJ.D,
                          style: v,
                          children: (0, n.jsx)(r0, { phase: d, projectId: t, onOpenPublishedApp: o }),
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var r2 = l(314116),
    r7 = l(364522),
    r5 = l(237528),
    r4 = l(664121),
    r3 = l(95477),
    r6 = l(381849),
    r8 = l(724401);
function r9(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function ie(e) {
    let t,
        { projectId: l, installScope: r, onClose: i } = e,
        s = "user" === r ? ["stable"] : ["preview", "stable"],
        [u, c] = a.useState(s[0] ?? "stable"),
        [h, g] = a.useState({ status: "loading" }),
        [x, p] = a.useState(""),
        [b, j] = a.useState(""),
        [y, k] = a.useState({ phase: "idle" }),
        N = "busy" === y.phase,
        [w, A] = a.useState(0),
        S = a.useCallback(() => A((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${u}`;
        return (
            Promise.all([(0, f.DM)(l, u), (0, f.ms)(l, u)])
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
    }, [l, u, w]);
    let I = "loading" !== h.status && h.key === `${l}|${u}` ? h : { status: "loading" },
        T = a.useCallback(
            (e, t) => {
                (0, r2.A)({
                    title: C.intl.string(E.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? C.intl.formatToPlainString(E.default["0lt6bH"], { target: e })
                            : C.intl.formatToPlainString(E.default.zVcDfj, {
                                  environment: C.intl.string(
                                      "preview" === u ? E.default["/kYdZe"] : E.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: C.intl.string(E.default.ZlKerR),
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
                                              text: C.intl.string(E.default.kIWqXR),
                                          }),
                                          S())
                                        : "expired" === e.code
                                          ? (k({
                                                phase: "settled",
                                                environment: u,
                                                tone: "danger",
                                                text: C.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                            }),
                                            S())
                                          : "unconfirmed" === e.code
                                            ? (k({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: C.intl.string(E.default["2xSPXh"]),
                                              }),
                                              S())
                                            : k({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: C.intl.string(E.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    k({
                                        phase: "settled",
                                        environment: u,
                                        tone: "danger",
                                        text: C.intl.string(E.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [u, s, S],
        ),
        M = a.useCallback(() => {
            (k({ phase: "busy", environment: u, kind: "create" }),
                (0, f._m)(l, u, x)
                    .then(() => {
                        (p(""),
                            k({
                                phase: "settled",
                                environment: u,
                                tone: "positive",
                                text: C.intl.string(E.default.mfAoFT),
                            }),
                            S());
                    })
                    .catch(() => {
                        k({ phase: "settled", environment: u, tone: "danger", text: C.intl.string(E.default.uhhqP3) });
                    }));
        }, [l, u, x, S]),
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
                ? (0, n.jsx)("div", { className: r8.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: r8.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: r8.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(r7.Ip, {
                          className: r8.p_,
                          children: (0, n.jsx)("div", {
                              className: r8.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, r6.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: r6._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: r8.KW,
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
                                                  (0, n.jsx)(r5.v, {
                                                      text: C.intl.string(E.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: r8.AD,
                                                title: C.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: r8.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            eD.D,
                                            {
                                                className: r8.f_,
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
                                                        className: r8.Pf,
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
            className: r8.nd,
            "aria-label": C.intl.string(E.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: r4.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: r8.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: r8.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(n1.V, {
                                        selectedItem: u,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": C.intl.string(E.default.CNvRyJ),
                                        className: r8.vR,
                                        children: [
                                            (0, n.jsx)(n1.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(E.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(n1.V.Item, {
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
                                        null != R
                                            ? ` ${new Date(R.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === D.kind
                                    ? (0, n.jsxs)("div", {
                                          className: r8.lm,
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
                                            className: r8.lm,
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
                            className: r8.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: r8.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: r8.Fv,
                                            children: (0, n.jsx)(r3.k, {
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
                                            onClick: M,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: r8._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: r8.kv,
                                            children: (0, n.jsx)(r3.k, {
                                                label: C.intl.string(E.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: r9(_),
                                                max: r9(P),
                                                disabled: N || null == R,
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
var it = l(406810),
    il = l(977628);
function ia(e) {
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
                ? (0, n.jsx)("div", { className: il.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: il.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: il.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(r7.Ip, {
                          className: il.p_,
                          children: (0, n.jsx)("div", {
                              className: il.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, r6.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: r6._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      eD.D,
                                      {
                                          className: il.f_,
                                          onClick: () =>
                                              (0, r2.A)({
                                                  title: C.intl.string(E.default.qOUOPE),
                                                  subtitle: C.intl.string(E.default.k2JBj5),
                                                  confirmText: C.intl.string(E.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      (r(), i(e));
                                                  },
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: il.bc,
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
            className: il.nd,
            "aria-label": C.intl.string(E.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: it.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: il.rf, children: t }),
            ],
        })
    );
}
var ir = l(120426),
    ii = l(873727),
    is = l(147248),
    io = l(418842),
    iu = l(363195),
    id = l(885386),
    ic = l(171936),
    im = l(796036);
function ih(e) {
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
        [g, x] = a.useState(null),
        p = (0, u.A)(r, o),
        v = p?.id ?? null;
    (!(function (e, t) {
        let l = (0, D.bG)([iu.A], () => (0, ii.x4)(iu.A.theme)),
            n = (0, D.bG)([is.A], () => is.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, D.cf)([tq.Ay], () => ({
                reducedMotion: tq.Ay.useReducedMotion,
                fontScale: (0, ii.U0)(),
                highContrast: tq.Ay.isHighContrastModeEnabled,
                forcedColors: tq.Ay.useForcedColors,
                underlineLinks: tq.Ay.alwaysShowLinkDecorations,
            })),
            d = id.hH.useSetting(),
            c = (0, io.C)(),
            f = a.useRef(!1),
            m = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, ir.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, ii.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, r_.W)(n, "set-env", a, {
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
                let l = (0, ir.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, ir.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, ic.mn)(t, () => (0, ir.F)(g, v));
        }, [t, g, v]));
    let b = a.useCallback(() => (0, ir.F)(g, v), [g, v]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: x, className: ej.fm, children: f })],
            }),
            m,
            (0, n.jsx)(r1, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                frameId: v,
                onOpenPublishedApp: h,
            }),
            (0, n.jsx)(rU, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function ig(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
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
            null != t && ((0, f.Hc)(t), (0, im.s)());
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
        q = null != M ? M.open : g,
        z = g || m.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: F,
        className: ej.LB,
        children: (0, n.jsx)(ih, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: m,
            header: h,
            onOpenPublishedApp: L,
            mainClassName: null == h ? void 0 : i()(ej.ez, { [ej.zt]: q }),
            content: (0, n.jsx)(eg, {
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
                    ? (0, n.jsx)(nY, {
                          open: M.open,
                          maxWidth: O,
                          onWidthChange: c.Zq,
                          children: M.open
                              ? (0, n.jsx)(ey, { channel: M.channel, guild: M.guild, onClose: M.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(nY, {
                            open: g,
                            maxWidth: O,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(rj, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            ia,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(ie, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(rX.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": C.intl.string(C.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == x
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: o.P,
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
                                                      children: (0, n.jsx)(nB, { projectId: t, restoreState: S }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
