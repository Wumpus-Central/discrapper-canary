l.d(t, { A: () => rb });
var n,
    a = l(477900),
    r = l(582128),
    s = l(503698),
    i = l.n(s),
    o = l(789645),
    u = l(672929),
    d = l(58736),
    c = l(948230),
    m = l(18739),
    f = l(289873),
    h = l(821609),
    g = l(627363),
    x = l(580954),
    p = l(297264),
    v = l(834730),
    j = l(625180),
    b = l(91242),
    y = l(812901),
    k = l(317608),
    N = l(17928),
    A = l(956518),
    w = l(869146),
    S = l(207371),
    C = l(165610),
    E = l(652215),
    I =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n),
    T = l(742023),
    M = l(697744),
    _ = l(295813),
    P = l(375708),
    R = l(296167);
function L(e) {
    let { className: t } = e,
        { Component: l, events: n, getDuration: s } = (0, M.c)();
    return (
        r.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function l() {
                    ((e = null), null != s()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(l));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [n, s]),
        r.useEffect(() => {
            let e = setInterval(n.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [n]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: n.onMouseEnter,
            onMouseLeave: n.onMouseLeave,
            children: [
                (0, a.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: R.o,
                    children: P.intl.string(_.default.jTuX7C),
                }),
            ],
        })
    );
}
var D = l(328284);
function F(e) {
    let { title: t, body: l, wide: n = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: i()(D.Bf, n && D.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: D.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var O = l(963691);
function $(e) {
    let { applicationId: t, surface: l } = e,
        { frame: n, state: s } = (function (e) {
            let { applicationId: t, surface: l } = e,
                {
                    surface: n,
                    setFailed: a,
                    lifecycle: s,
                } = (function (e) {
                    let { applicationId: t, surface: l } = e,
                        n = r.useMemo(() => (0, C.VA)(t, l), [t, l]),
                        a = r.useMemo(() => l, [n]),
                        s = (0, N.bG)([b.A], () => b.A.getFrame(n), [n]),
                        i = (0, N.bG)(
                            [w.A, b.A],
                            () => w.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && b.A.getMainFrame()?.id === n,
                            [n],
                        ),
                        { data: o, isLoading: u } = (0, g.YY)(t),
                        d = (0, S.x)(o),
                        c = null != (0, A.Ay)(t),
                        [m, f] = r.useState(null),
                        h = m === n;
                    return {
                        surface: a,
                        setFailed: r.useCallback(() => f(n), [n]),
                        lifecycle: (0, C.x1)(s)
                            ? i
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : h
                              ? { state: "error" }
                              : s?.state === "loading"
                                ? { state: "loading", frame: s }
                                : u
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && c
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: l }),
                { state: i } = s;
            return (
                r.useEffect(() => {
                    "awaiting-launch" === i && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: n });
                        } catch {
                            a();
                        }
                    }
                }, [i, t, n, a]),
                s
            );
        })({ applicationId: t, surface: l }),
        i = (0, C.VA)(t, l);
    switch (
        (r.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT)) return;
                    let l = b.A.getMainFrame()?.id === e;
                    t.intent === C.sV.MAIN
                        ? (l || j.A.promoteFrame(e), j.A.resetFrameLayoutModes(e))
                        : l && j.A.clearMainFrameSlot();
                })(i),
                () => {
                    let e;
                    null != (e = b.A.getFrame(i)) &&
                        ((0, C.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        T.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === C.sV.INLINE && j.A.promoteFrame(i),
                              j.A.updateFrameLayoutMode({ frameId: i, layoutMode: C.y0.PIP }))
                            : e.intent === C.sV.MAIN && j.A.demoteMainFrame(i));
                }
            ),
            [i],
        ),
        s)
    ) {
        case I.Launched:
            return (0, a.jsx)(k.A, { frameId: n.id, level: y.A.WithinAppContent, className: O.Z7 });
        case I.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: O.qs,
                children: (0, a.jsx)(F, {
                    title: P.intl.string(_.default["4f6Vkr"]),
                    body: P.intl.string(_.default.LJ2q1H),
                }),
            });
        case I.NoApplication:
            return (0, a.jsx)(L, { className: O.qs });
        case I.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: O.qs,
                children: (0, a.jsx)(F, {
                    title: P.intl.string(_.default.FHOJiH),
                    body: P.intl.string(_.default["1yLQoV"]),
                }),
            });
        case I.Error:
            return (0, a.jsxs)("div", {
                className: O.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(_.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: O.tj,
                        children: P.intl.string(_.default["1RCbQT"]),
                    }),
                ],
            });
        case I.AwaitingLaunch:
        case I.Loading:
            return (0, a.jsx)("div", { className: O.qs, children: (0, a.jsx)(f.y, {}) });
    }
}
var q = l(323384),
    z = l(308528),
    G = l(334738),
    B = l(802426),
    U = l(355622),
    V = l(734057),
    H = l(531685),
    W = l(365971),
    Y = l(362417);
function K(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: Y.f,
        children: [
            (0, a.jsx)(q.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function Q() {
    return (0, a.jsx)("div", { className: Y.f, children: (0, a.jsx)(f.y, {}) });
}
function X(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: s, isLoading: i } = (0, g.YY)(n),
        o = s?.bot?.id ?? null,
        u = (0, N.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        r.useEffect(() => {
            null != t && z.A.preload(E.ME, t);
        }, [t]),
        (l = (0, N.bG)([H.A], () => H.A.isFocused())),
        r.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, W.Xg)();
            return (
                (0, G.yl)(t, e),
                () => {
                    (0, G.dm)(t, e);
                }
            );
        }, [t, l]);
    let [d, c] = r.useState(null),
        m = null != o && d === o;
    return (r.useEffect(() => {
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
    i)
        ? (0, a.jsx)(Q, {})
        : null == o || m
          ? (0, a.jsx)(K, { message: P.intl.string(_.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(Q, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)(B.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
              });
}
var Z = l(148853),
    J = l(598748),
    ee = l(486610),
    et = l(531913),
    el = l(587895),
    en = l(633075),
    ea = l(946356),
    er = l(139730),
    es = l(520082),
    ei = l(287809),
    eo = l(675210),
    eu = l(71495);
function ed(e) {
    let { applicationId: t } = e,
        l = (0, N.bG)([ei.default], () => ei.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(ec, { applicationId: t, user: l });
}
function ec(e) {
    let { applicationId: t, user: l } = e,
        n = (0, N.bG)([el.A], () => el.A.getApplication(t)),
        s = r.useMemo(() => new en.R({ applicationId: t }), [t]),
        i = (0, et.A)(l.id, t),
        o = i.surfaceConfigs,
        u = (0, eo.yZ)({
            widgetTop: null != o[J.m.WIDGET_TOP],
            widgetBottom: null != o[J.m.WIDGET_BOTTOM],
            miniProfile: null != o[J.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, a.jsx)("div", {
              className: eu.$C,
              children: (0, a.jsxs)("div", {
                  className: eu.PV,
                  children: [
                      u.hasMainCard
                          ? (0, a.jsx)("div", {
                                className: eu.a9,
                                children: (0, a.jsx)(ea.A.Overlay, {
                                    className: eu.Qb,
                                    children: (0, a.jsx)(es.A, {
                                        user: l,
                                        widget: s,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != n
                          ? (0, a.jsx)("div", {
                                className: eu.ql,
                                children: (0, a.jsx)(er.A, { application: n, rendererProps: i, renderText: ee.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var em = l(976102);
function ef(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: n,
            previewReady: s,
            previewGate: i,
            availability: o,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        m = (0, u.A)(t, n),
        { isLoading: p } = (0, g.YY)(t ?? void 0);
    if (
        (r.useEffect(() => {
            i?.type === "permissions" && null != m && (0, x.A)().leaveFrame(m.id);
        }, [m, i?.type]),
        i?.type === "checking")
    )
        return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(f.y, {}) });
    if (i?.type === "permissions")
        return (0, a.jsx)("div", {
            className: em.q,
            children: (0, a.jsx)(F, {
                wide: !0,
                title: P.intl.string(_.default.DYwf2n),
                body: P.intl.string(_.default.WWj3pN),
                children: (0, a.jsx)(h.$, {
                    variant: "primary",
                    size: "md",
                    text: P.intl.string(_.default["CRfE/E"]),
                    onClick: i.onReviewPermissions,
                    loading: i.loading,
                }),
            }),
        });
    if (!s) return (0, a.jsx)(L, { className: em.q });
    if (null == t) return null;
    if (p) return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(f.y, {}) });
    let v = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, Z.z3)(d), "aria-label": (0, Z.kZ)(d) } : {};
    return (0, a.jsxs)("div", {
        className: em.R,
        ...v,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)($, { applicationId: t, surface: n })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: em.q,
                          children: (0, a.jsx)(F, {
                              wide: !0,
                              title: P.intl.string(_.default.SGHO9K),
                              body: P.intl.string(_.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(ed, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, a.jsx)(X, { previewApplicationId: l }) : null,
        ],
    });
}
var eh = l(534890),
    eg = l(738876),
    ex = l(47167),
    ep = l(31717),
    ev = l(372054);
function ej(e) {
    let { channel: t, guild: l, onClose: n } = e,
        r = (0, ex.Ay)(t),
        s = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n });
    return (0, a.jsxs)("div", {
        className: ev.Wx,
        children: [
            (0, a.jsx)(eg.A, { channel: t, draftType: ep.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: s,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: eh.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: r }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ev.GZ,
                children: (0, a.jsx)(B.A, { channel: t, guild: l, chatInputType: U.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var eb = l(689175),
    ey = l(903586),
    ek = l(783791),
    eN = l(717447),
    eA = l(29080),
    ew = l(46054);
function eS(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, ey.B4)(t),
        s = r.filter((e) => "message" === e.type).at(-1),
        i = (0, ey.Lf)(t),
        o = i && null != s && s.content.trim() === l.trim(),
        u = !n && "" !== l && !o;
    return {
        streamed: r,
        lastStreamedMessage: s,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: i }),
    };
}
l(134528), l(947204);
var eC = l(939249),
    eE = l(478016),
    eI = l(34136);
function eT(e) {
    let { title: t, trailing: l, children: n, className: r, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: i()(eI.Nr, r),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: i()(eI.wx, null != l && eI.o5, s),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var eM = l(113757);
function e_(e) {
    let { idea: t, selected: l, onPick: n } = e,
        s = r.useId(),
        o = null == n;
    return (0, a.jsxs)(eC.D, {
        className: i()(eM.nM, { [eM.f1]: o, [eM.CZ]: l }),
        onClick: o ? void 0 : () => n(t),
        "aria-label": P.intl.formatToPlainString(_.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, a.jsxs)("div", {
                className: eM.jo,
                children: [
                    l
                        ? (0, a.jsx)(eE.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eM.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eM.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eP(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [s, i] = r.useState(() => new Set()),
        o = r.useCallback(
            (e) => {
                i((t) => new Set(t).add(e.id)), n?.(e);
            },
            [n],
        );
    return (0, a.jsx)(eT, {
        title: P.intl.string(_.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                e_,
                { idea: e, selected: s.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eR = l(435619),
    eL = l(866665),
    eD = l(885574),
    eF = l(430392),
    eO = l(632015),
    e$ = l(256905),
    eq = l(824757);
function ez(e) {
    let { label: t, info: l, children: n } = e;
    return (0, a.jsxs)("section", {
        className: eq.uW,
        children: [
            (0, a.jsxs)("span", {
                className: eq.a9,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
function eG() {
    return (0, a.jsx)(eL.m, {
        text: P.intl.string(_.default.DXe2dP),
        children: (0, a.jsx)(eC.D, {
            className: eq.bk,
            "aria-label": P.intl.string(_.default.Y6y4nQ),
            children: (0, a.jsx)(eD.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eB(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, a.jsx)(ez, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: eq.Ip,
                  children: l.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: eq.jw,
                              children: (0, a.jsx)(v.E, {
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
function eU(e) {
    let { isActivity: t, hasWidget: l } = e,
        n = t ? q.k : eF.RobotIcon;
    return (0, a.jsxs)("span", {
        className: eq.K2,
        children: [
            l
                ? (0, a.jsxs)("span", {
                      className: eq.L6,
                      children: [
                          (0, a.jsx)(eO.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: P.intl.string(_.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: eq.L6,
                children: [
                    (0, a.jsx)(n, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: P.intl.string(t ? P.t.IC5Ann : _.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eV(e) {
    let { projectId: t, design: l } = e,
        [n, s] = r.useState(null),
        [i, o] = r.useState(!1),
        { id: u } = l,
        [d, c] = r.useState(0);
    r.useEffect(() => {
        let e = !1;
        return (
            (0, m.PK)(t, u).then(
                (t) => {
                    e || s(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, u, d]);
    let f = P.intl.string(_.default.FW8UcU),
        h = r.useCallback(() => {
            (0, m.PK)(t, u).then(
                (e) => {
                    (0, e$.R)({
                        items: [{ type: "IMAGE", url: e, alt: f }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, u, f]),
        g = r.useCallback(() => {
            s(null),
                (0, m.n6)(t, u).then(
                    (e) => {
                        e ? 0 === d && c(1) : o(!0);
                    },
                    () => {},
                );
        }, [t, u, d]);
    return i
        ? null
        : (0, a.jsx)(ez, {
              label: P.intl.string(_.default["9W8SbY"]),
              info: (0, a.jsx)(eG, {}),
              children: (0, a.jsx)(eC.D, {
                  className: eq.xX,
                  onClick: h,
                  "aria-label": P.intl.string(_.default.CBrpNv),
                  children: null != n ? (0, a.jsx)("img", { src: n, alt: f, className: eq.sN, onError: g }) : null,
              }),
          });
}
function eH(e) {
    let { projectId: t, proposal: l } = e;
    return (0, a.jsx)(eT, {
        title: P.intl.string(_.default["60htw+"]),
        trailing: (0, a.jsx)(eU, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: eq.rf,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, a.jsx)(eV, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, a.jsx)(ez, {
                          label: P.intl.string(_.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: eq.p_,
                              children: l.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: eq.Aw,
                                          children: (0, a.jsx)(v.E, {
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
                    ? (0, a.jsx)(ez, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: eq.p_,
                              children: l.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eq.uX,
                                          children: [
                                              (0, a.jsxs)(v.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(v.E, {
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
                (0, a.jsx)(eB, { label: P.intl.string(_.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, a.jsx)(eB, { label: P.intl.string(_.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eW = l(192308),
    eY = l(479191);
function eK(e) {
    let { projectId: t, request: n } = e,
        s = r.useCallback(() => {
            (0, eW.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, a.jsx)(e, { ...l, projectId: t, request: n });
            });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: eY.Lo,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(_.default["/e28TK"]),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : P.intl.string(_.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: eY.cS,
                children: n.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: eY.$H,
                            children: (0, a.jsx)(v.E, {
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
            (0, a.jsx)("div", {
                className: eY.sq,
                children: (0, a.jsx)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(_.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eQ = l(976814),
    eX = l(973e3);
function eZ(e) {
    let { projectId: t, request: l } = e,
        n = (0, N.bG)([m.Ay], () => m.Ay.getSettings(t)),
        s = (l.keys ?? []).map((e) => n?.schema.find((t) => t.key === e)).filter((e) => null != e),
        i = r.useCallback(() => {
            (0, eQ.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0 });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: eX.Mk,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(_.default.wgDhiQ),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(_.default["V+DBhs"]),
            }),
            s.length > 0
                ? (0, a.jsx)("div", {
                      className: eX.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: eX.K4,
                                  children: (0, a.jsx)(v.E, {
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
            (0, a.jsx)("div", {
                className: eX.p0,
                children: (0, a.jsx)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: P.intl.string(_.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eJ = l(196582);
function e0(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e1(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e2(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e7(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e6(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e5(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e3(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e4(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e8(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e9(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function te(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function tt() {
    return [
        { key: "snail", Illocon: e0, tint: "var(--illo-yellow-40)", name: tn(_.default["2l3AEQ"]) },
        { key: "goat", Illocon: e1, tint: "var(--illo-orange-40)", name: tn(_.default["+FPL+I"]) },
        { key: "frog", Illocon: e2, tint: "var(--illo-green-40)", name: tn(_.default.w4GOfR) },
        { key: "bunny", Illocon: e7, tint: "var(--illo-pink-40)", name: tn(_.default.XmZT9M) },
        { key: "cat", Illocon: e6, tint: "var(--illo-pink-40)", name: tn(_.default.NnydwQ) },
        { key: "caterpillar", Illocon: e5, tint: "var(--illo-green-40)", name: tn(_.default["4iXcNT"]) },
        { key: "butterfly", Illocon: e3, tint: "var(--illo-purple-40)", name: tn(_.default.DoTGt5) },
        { key: "dog", Illocon: e4, tint: "var(--illo-yellow-40)", name: tn(_.default["9zxqmP"]) },
        { key: "spider", Illocon: e8, tint: "var(--illo-orange-40)", name: tn(_.default.HF0T3L) },
        { key: "bee", Illocon: e9, tint: "var(--illo-yellow-40)", name: tn(_.default.XTzDga) },
        { key: "bot", Illocon: te, tint: "var(--illo-purple-40)", name: tn(_.default.abtC2b) },
    ];
}
function tl(e) {
    return tt().find((t) => t.key === e);
}
function tn(e) {
    return P.intl.string(e);
}
function ta(e) {
    let t = tt(),
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
var tr = l(683063),
    ts = l(705754),
    ti = l(883455),
    to = l(13699);
function tu(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(_.default.MdXWEK);
}
function td(e) {
    let { projectId: t, lane: l, Illocon: n, tint: r, name: s, connectsDown: i } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, ey.SY)(l.steps),
        c = u
            ? null != d
                ? (0, ey.WQ)(d)
                : tu(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tu(e));
                  switch (e.status) {
                      case "failed":
                          return P.intl.formatToPlainString(_.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(_.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return P.intl.formatToPlainString(_.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return P.intl.formatToPlainString(_.default.RsOwXc, { count: t });
                                      let l = Math.round(t / 60);
                                      return l < 60
                                          ? P.intl.formatToPlainString(_.default["z+U4YX"], { count: l })
                                          : P.intl.formatToPlainString(_.default["7Q/vz0"], {
                                                hours: Math.floor(l / 60),
                                                minutes: l % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return P.intl.formatToPlainString(_.default.KS49RN, { task: t });
                      default:
                          return P.intl.formatToPlainString(_.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: to.dO,
                                    children: l.steps.map((e) =>
                                        (0, a.jsx)(
                                            ti.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: to.iq,
                                      children: (0, a.jsx)(ts.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(eJ.A, {
        glyph: (0, a.jsx)(tr.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: s,
            body: tu(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: to.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: i,
    });
}
l(321073);
var tc = l(140735),
    tm = l(329456);
let tf = [];
function th(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: i()(tm.xL, { [tm.Vb]: "in_progress" === t, [tm.cT]: "completed" === t }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return P.intl.string(_.default.TkPGOH);
                case "in_progress":
                    return P.intl.string(_.default["oK+fmd"]);
                default:
                    return P.intl.string(_.default.d7lieu);
            }
        })(t),
        children: [
            "in_progress" === t
                ? (0, a.jsx)(f.y, {
                      type: f.y.Type.SPINNING_CIRCLE_SIMPLE,
                      className: tm.Qd,
                      itemClassName: tm.xB,
                      "aria-hidden": !0,
                  })
                : null,
            (0, a.jsx)("svg", {
                className: tm.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: tm.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tg(e) {
    let { agents: t, active: l } = e,
        n = r.useMemo(() => (l ? t : tf), [l, t]),
        s = r.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        i = n.map((e) => e.key).join("\0"),
        [o, u] = r.useState(n),
        [d, c] = r.useState(i),
        [m, f] = r.useState(!1);
    d !== i && (c(i), u([...n, ...o.filter((e) => !s.has(e.key))]), 0 === n.length && f(!1));
    let h = o.some((e) => !s.has(e.key));
    if (
        (r.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, n, l]),
        r.useEffect(() => {
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
    return (0, a.jsxs)("span", {
        className: tm.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: r } = e,
                    { Illocon: i } = l;
                return (0, a.jsx)(
                    tr.u,
                    {
                        asset: (0, a.jsx)(i, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: r,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: tm.MA,
                            "data-leaving": s.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(i, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tm.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tx(e) {
    let t,
        { todos: l, provisional: n, agents: s } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [l, n] = r.useState(() => new Set(e)),
                [a, s] = r.useState(t),
                [i, o] = r.useState(() => new Set());
            return (
                a !== t && (s(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                r.useEffect(() => {
                    if (0 === i.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [i]),
                i
            );
        })(r.useMemo(() => l.map((e) => e.id), [l])),
        u =
            ((t = (s ?? tf).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            r.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tf) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: tm.p_,
        children: [
            l.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: i()(tm.AS, { [tm.J1]: "completed" === e.status }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(th, { status: e.status }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tm.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: tm.Qq, children: e.text }),
                            }),
                            (0, a.jsx)(tg, { agents: u.get(e.id) ?? tf, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != n
                ? (0, a.jsxs)("li", {
                      className: tm.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(th, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tm.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: tm.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tp(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: r = !0 } = e,
        { completed: s, total: i } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === i
        ? null
        : (0, a.jsxs)(eT, {
              title: P.intl.string(_.default.qCRC6c),
              trailing: (0, a.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(_.default.bQvqly, { completed: s, total: i }),
              }),
              className: tm.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, a.jsx)(tc.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(_.default["QG/EiF"], { completed: s, total: i }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tm.rf,
                      children: (0, a.jsx)(tx, { todos: t, provisional: l, agents: n }),
                  }),
              ],
          });
}
var tv = l(229775),
    tj = l(165648);
function tb(e) {
    let t = ta(e.map((e) => e.taskId));
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
                      task: tu(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function ty(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            durationMs: s,
            interrupted: i = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: f = !1,
            segmentDurationMs: h,
        } = e,
        g = r.useMemo(() => (0, ey.GO)(l, { turnActive: n }), [l, n]),
        x = r.useMemo(
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
    if (i)
        return (0, a.jsx)("ol", {
            className: to.pj,
            "data-live": !1,
            children: (0, a.jsx)(eJ.A, {
                glyph: (0, a.jsx)(eA.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(_.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = n ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? s) : void 0)),
        v = c ? ((0, ey.lt)(l) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !j) return null;
    let b = x.tasks,
        y = ta(b.map((e) => e.taskId)),
        k = !f && (n || b.some((e) => "running" === e.task.status)),
        N = tb(b);
    return (0, a.jsx)(eJ.l.Provider, {
        value: b.length,
        children: (0, a.jsxs)("ol", {
            className: to.pj,
            "data-live": k,
            children: [
                (0, a.jsx)(eN.Ay, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: n,
                    closed: f,
                    durationMs: p,
                    connectsDown: b.length > 0,
                }),
                b.map((e, l) => {
                    let n = null != e.task.helperMark ? tl(e.task.helperMark) : void 0,
                        r = n ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, a.jsx)(
                              td,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != n && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: l < b.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, a.jsx)("li", {
                          className: to.YO,
                          children: (0, a.jsx)(tp, { todos: v, provisional: u, agents: N }),
                      })
                    : null,
            ],
        }),
    });
}
function tk(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
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
            showsClosingMessage: j,
            attachmentsHost: b,
        } = r.useMemo(
            () => eS({ steps: l, content: n, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, n, s, u],
        ),
        y = null == u ? null : (0, a.jsx)(eR.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, a.jsx)("div", { className: to.MT, children: y }),
        N = h
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(_.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: to.ue,
        children: [
            x.length > 0 && !g
                ? (0, a.jsx)("ol", {
                      className: to.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: to.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tj.PT,
                                              children: ew.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === p ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, a.jsx)(eH, { projectId: t, proposal: s })
                : j
                  ? (0, a.jsxs)("div", {
                        className: i()(to.ky, tv.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: i()(tj.PT, to.cW),
                                children: ew.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? k : null,
                            N,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: i()(to.ky, tv.XR),
                      children: (0, a.jsx)(eK, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: i()(to.ky, tv.XR),
                      children: (0, a.jsx)(eZ, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === b ? y : null,
            null != o && o.length > 0 ? (0, a.jsx)(eP, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            j ? null : N,
        ],
    });
}
l(323874), l(14289), l(35956);
var tN = l(475358),
    tA = l(922016),
    tw = l(980707),
    tS = l(477782),
    tC = l(81369),
    tE = l(717400),
    tI = l(663341),
    tT = l(826745),
    tM = l(783977),
    t_ = l(559647),
    tP = l(285796),
    tR = l(775602),
    tL = l(673724),
    tD = l(435558),
    tF = l.n(tD),
    tO = l(506774),
    t$ = l(228366);
let tq = "VibegrationsComposerDrafts";
function tz() {
    return tO.w.get(tq) ?? {};
}
let tG = new Map(),
    tB = tF().throttle(() => {
        if (0 === tG.size) return;
        let e = tz();
        for (let [t, l] of tG) "" === l ? delete e[t] : (e[t] = l);
        tG.clear(), tO.w.set(tq, e);
    }, 1e3);
class tU extends N.Ay.Store {
    getDraft(e) {
        let t = tG.get(e);
        return null != t ? t : (tz()[e] ?? "");
    }
}
let tV = new tU(t$.h, {
    LOGOUT: function () {
        return tG.clear(), tB.cancel(), tO.w.remove(tq), !1;
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return tG.set(t, l), tB(), "" === l && tB.flush(), !1;
    },
});
var tH = l(590380),
    tW = l(311656),
    tY = l(789438);
let tK = tL.Is;
function tQ(e) {
    let { text: t } = e,
        [l, n] = r.useState(""),
        [s, i] = r.useState("enterStart"),
        [o, u] = r.useState("");
    t !== o && (u(t), t !== l && ("" === l ? (n(t), i("enterStart")) : "idle" === s && i("exit"))),
        r.useEffect(() => {
            if ("exit" === s) {
                let e = window.setTimeout(() => {
                    n(t), i("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === s) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => i("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [s, t]);
    let d = "exit" === s ? tY.t0 : "enterStart" === s ? tY.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tY.xM} ${tY.nT} ${d}`, children: l }),
            (0, a.jsx)(tN.e, { shortcut: "tab", className: `${tY.xT} ${tY.nT} ${d}`, keyClassName: tY.IS }),
        ],
    });
}
let tX = 0;
function tZ(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: n,
            running: s,
            restoring: i = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            modelSettings: p,
            onModelSettingsChange: v,
        } = e,
        [j, b] = r.useState(() => tV.getDraft(t)),
        y = r.useCallback(
            (e) => {
                (0, c.I$)(t, e), b(e);
            },
            [t],
        ),
        [k, A] = r.useState(t);
    k !== t && (A(t), b(tV.getDraft(t)));
    let w = (0, N.bG)([tR.Ay], () => tR.Ay.isSubmitButtonEnabled),
        [S, C] = r.useState([]),
        [E, I] = r.useState(!1),
        [T, M] = r.useState(!1);
    r.useEffect(() => {
        s || M(!1);
    }, [s]);
    let R = r.useRef(null),
        L = r.useRef([]),
        D = r.useRef(new Set()),
        F = r.useRef(m);
    F.current = m;
    let O = r.useCallback((e) => {
            (L.current = e), C(e);
        }, []),
        $ = r.useCallback((e) => {
            F.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    r.useEffect(() => {
        let e = D.current;
        return () => {
            for (let t of L.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && $(t.ref);
        };
    }, [$]);
    let q = r.useCallback(
            (e, t) => {
                if (D.current.has(e)) return;
                let l = L.current;
                l.some((t) => t.localId === e) && O(l.map((l) => (l.localId === e ? { ...l, ...t } : l)));
            },
            [O],
        ),
        z = r.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...L.current],
                    l = [];
                for (let n of e) {
                    let e = "" === n.type ? "application/octet-stream" : n.type,
                        a = ++tX,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tK) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: P.intl.formatToPlainString(_.default.DlX57a, { count: tK }),
                        });
                        continue;
                    }
                    if (!(0, tL.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: P.intl.formatToPlainString(_.default.cI7t94, {
                                size: (0, tL.ZJ)((0, tL.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = tL.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    t.push({ ...r, previewUrl: s }), l.push({ file: n, localId: a });
                }
                for (let { file: e, localId: n } of (O(t), l))
                    d(e).then(
                        (e) => {
                            D.current.has(n) ? $(e) : q(n, { status: "ready", ref: e });
                        },
                        (e) => {
                            D.current.has(n) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                q(n, { status: "error", errorText: P.intl.string(_.default.GwEHvn) }));
                        },
                    );
            },
            [$, d, q, O],
        ),
        G = r.useCallback(
            (e) => {
                let t = L.current,
                    l = t.find((t) => t.localId === e);
                D.current.add(e),
                    l?.previewUrl != null && URL.revokeObjectURL(l.previewUrl),
                    l?.ref != null && $(l.ref),
                    O(t.filter((t) => t.localId !== e));
            },
            [$, O],
        ),
        B = S.every((e) => "ready" === e.status),
        U = "" !== j.trim() || S.length > 0,
        V = l && U && B,
        H = r.useCallback(() => {
            if (!V) return;
            let e = L.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (o(j, e.length > 0 ? e : void 0), L.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            y(""), O([]);
        }, [V, j, o, O, y]),
        W = r.useCallback(
            (e) => {
                e.preventDefault(), H();
            },
            [H],
        ),
        Y = r.useCallback(() => {
            null == u || T || (M(!0), u());
        }, [u, T]),
        K = null == g || "" !== j || !l || n || i ? null : g,
        Q = r.useCallback(
            (e) => {
                if ("Escape" === e.key && s && null != u && !T) {
                    e.preventDefault(), e.stopPropagation(), Y();
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
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), H());
            },
            [H, f, s, u, T, Y, K, y],
        ),
        X = r.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), z(t));
            },
            [l, z],
        ),
        Z = r.useCallback(
            (e) => {
                e.preventDefault(), I(!1), l && z(Array.from(e.dataTransfer.files));
            },
            [l, z],
        ),
        J = r.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), I(!0));
        }, []),
        ee = r.useCallback(
            (e) => {
                z(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [z],
        ),
        et = r.useRef(null),
        el = r.useRef(null),
        [en, ea] = r.useState(0),
        [er, es] = r.useState(!1);
    r.useEffect(() => {
        if (0 === j.length) return void es(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = t1(e);
            null != t && ea(t);
        }
        es(!0);
        let t = setTimeout(() => es(!1), tJ);
        return () => clearTimeout(t);
    }, [j]);
    let ei = r.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        eo = er ? ` ${tY.EB}` : "",
        eu = null != K;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: Z,
        onDragOver: J,
        onDragLeave: () => I(!1),
        className: E ? `${tY.DA} ${tY.pV}` : tY.DA,
        children: [
            S.length > 0
                ? (0, a.jsx)("div", {
                      className: tY.lN,
                      children: S.map((e) => (0, a.jsx)(t2, { draft: e, onRemove: G }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${tY.wg} ${tY.LP}${eo}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tY.wg} ${tY.L3}${eo}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tY.VA,
                ref: et,
                children: [
                    (0, a.jsx)("input", {
                        ref: R,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: tY.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tA.Y, {
                        targetElementRef: el,
                        position: "top",
                        align: "left",
                        animation: tA.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tw.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(tS.rX, {
                                    children: [
                                        (0, a.jsx)(tS.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: tC.H,
                                            leadingAccessory: { type: "icon", icon: tC.H },
                                            action: () => R.current?.click(),
                                        }),
                                        null != h
                                            ? (0, a.jsx)(tS.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(_.default.edKajy),
                                                  iconLeft: tE.q,
                                                  leadingAccessory: { type: "icon", icon: tE.q },
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: el,
                                type: "button",
                                className: `${tY.Y0} ${tY.nu}`,
                                disabled: !l,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, a.jsx)(tI.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tY.Qu,
                                }),
                            });
                        },
                    }),
                    null == K
                        ? null
                        : (0, a.jsx)("div", {
                              className: tY.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tQ, { text: K }),
                          }),
                    (0, a.jsx)(tT.y, {
                        value: j,
                        onChange: (e) => y(e.currentTarget.value),
                        onKeyDown: Q,
                        onPaste: X,
                        placeholder: i
                            ? P.intl.string(_.default.pGFXZ0)
                            : n
                              ? P.intl.string(_.default.JeM47J)
                              : l
                                ? eu
                                    ? ""
                                    : x
                                      ? P.intl.string(_.default.M3ovXY)
                                      : P.intl.string(s ? _.default["67PpcP"] : _.default.ahRdoJ)
                                : P.intl.string(_.default.nm4w9P),
                        disabled: !l,
                        "aria-label": P.intl.string(_.default.OPr66w),
                        rows: 1,
                        className: tY.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: tY.Sz,
                        children:
                            s && null != u
                                ? (0, a.jsx)(eL.m, {
                                      text: P.intl.string(_.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${tY.Y0} ${tY.$E}`,
                                          disabled: T,
                                          onClick: Y,
                                          "aria-label": P.intl.string(_.default.KdgI4k),
                                          children: (0, a.jsx)(eA.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != p && null != v
                                  ? (0, a.jsx)(tW.A, {
                                        settings: p.settings,
                                        choices: p.choices,
                                        disabled: !l,
                                        onChange: v,
                                        className: `${tY.Y0} ${tY.$E}`,
                                        icon: (0, a.jsx)(tM.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    w
                        ? (0, a.jsxs)("div", {
                              className: tY.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tY.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tY.rt,
                                      disabled: !V,
                                      "aria-label": P.intl.string(_.default["22GHMt"]),
                                      children: (0, a.jsx)(t_.SendMessageIcon, {
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
let tJ = 1500,
    t0 = [
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
function t1(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t1.mirror;
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
                (t1.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of t0) t.style.setProperty(e, l.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let n = document.createElement("span");
    (n.textContent = "\u200B"), t.appendChild(n);
    let a = n.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function t2(e) {
    let { draft: t, onRemove: l } = e;
    return (0, a.jsxs)(tH.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: tY.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tY.o1,
                onClick: () => l(t.localId),
                "aria-label": P.intl.string(_.default["3HWvgk"]),
                children: (0, a.jsx)(tP.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
t1.mirror = null;
var t7 = l(320095),
    t6 = l(963852),
    t5 = l(521981),
    t3 = l(763754),
    t4 = l(491182),
    t8 = l(438729),
    t9 = l(622868),
    le = l(308334),
    lt = l(837528),
    ll = l(432433),
    ln = l(715628),
    la = l(752636),
    lr = l(9842),
    ls = l(589022),
    li = l(95701),
    lo = l(994500),
    lu = l(967198),
    ld = l(803306);
let lc = new Set(),
    lm = new Map();
function lf(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
let lh = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lg(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lx(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lp(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lx(e, t),
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
    if (lg(a) && lg(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lg(lx(e, n)); ) l++, (n -= 2);
        return l % 2 == 1;
    }
    return !1;
}
function lv(e, t) {
    let { streaming: l } = t,
        n = (0, N.bG)([tR.Ay], () => tR.Ay.useReducedMotion),
        a = l && !n,
        [s, i] = r.useState(() => ({ target: e, length: e.length })),
        o = s;
    o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r); ) r++;
                      for (; r > 0 && lp(t, r); ) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== s && i(o);
    let u = a && o.length < e.length,
        d = r.useRef(o);
    r.useLayoutEffect(() => {
        d.current = o;
    });
    let c = r.useRef(0),
        m = r.useRef(0);
    r.useEffect(() => {
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
                                let s = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var i = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && lh.has(e.charAt(n - 1)); ) n--;
                                    return lh.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + s));
                                let o = i;
                                for (; o < t.length && o - i < 32 && lp(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && i({ target: e.target, length: n });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        r.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                i({ target: e, length: e.length });
            }
        }, [u]);
    let f = Math.min(o.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: a && f < e.length };
}
var lj = l(441136);
let lb = (0, li.createChannelRecord)({ id: "vibegrations-builder", type: E.rbe.DM }),
    ly = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lk(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: i()(lj.Yq, { [lj.x1]: t }), children: e });
}
function lN(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lA(e, t, l) {
    let { content: n } = (0, ll.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        s = r.useMemo(() => ({ message: e, channel: lb, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, a.jsx)(t8.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, ln.A)(s, n);
}
function lw(e) {
    let [t, l] = r.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = r.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        s = r.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        i = (0, lt.m)(e, lb, t.usernameProfile, n),
        o = (0, lt.Jo)(t.avatarProfile, n),
        u = (0, N.bG)([lu.A], () => lu.A.getGuildId()),
        d = (0, N.bG)([ei.default], () => ei.default.getCurrentUser()),
        c = r.useCallback(
            (t) => {
                let l = ei.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(ls.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: i,
        onPopoutRequestClose: s,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function lS(e) {
    let { baseMessage: t, referenced: l, onJumpToReplied: n } = e,
        s = r.useMemo(
            () => ("" !== l.content ? (0, t5.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [l],
        ),
        { isReplyAuthorBlocked: i, isReplyAuthorIgnored: o } = (0, N.cf)(
            [lo.A],
            () => ({
                isReplyAuthorBlocked: lo.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lo.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        u = (0, t3.X4)(l),
        d = (0, t3.X4)(t),
        c = lw(l);
    return (0, a.jsx)(le.A, {
        repliedAuthor: u,
        baseAuthor: d,
        baseMessage: t,
        channel: lb,
        referencedMessage: { state: lr.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: i,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != n,
        showReplySpine: !0,
        renderPopout: c.renderPopout,
        showAvatarPopout: c.showAvatarPopout,
        showUsernamePopout: c.showUsernamePopout,
        onClickAvatar: c.onClickAvatar,
        onClickUsername: c.onClickUsername,
        onClickReply: n,
        onPopoutRequestClose: c.onPopoutRequestClose,
    });
}
function lC(e) {
    let { message: t, author: l } = e,
        n = lw(t);
    return (0, a.jsx)(t9.Ay, {
        message: t,
        channel: lb,
        author: l,
        guildId: n.guildId,
        subscribeToGroupId: t.id,
        renderPopout: n.renderPopout,
        showAvatarPopout: n.showAvatarPopout,
        showUsernamePopout: n.showUsernamePopout,
        onClickAvatar: n.onClickAvatar,
        onClickUsername: n.onClickUsername,
        onPopoutRequestClose: n.onPopoutRequestClose,
    });
}
function lE(e) {
    let { content: t, createdAt: l, userId: n, accessories: s, groupStart: i } = e;
    r.useEffect(
        () =>
            (function (e) {
                if (null == e || lc.has(e) || null != ei.default.getUser(e)) return;
                let t = lm.get(e) ?? 0;
                t >= 3 ||
                    (lm.set(e, t + 1),
                    lc.add(e),
                    ld
                        .getUser(e)
                        .finally(() => lc.delete(e))
                        .catch(() => {}));
            })(n),
        [n],
    );
    let o = (0, N.bG)(
            [ei.default],
            () => lf(n, null != n ? ei.default.getUser(n) : null, ei.default.getCurrentUser()),
            [n],
        ),
        u = r.useMemo(() => (0, t3.FT)(o, null), [o]),
        d = r.useMemo(() => {
            if (null == o) return null;
            let e = (0, t6.Ay)({ channelId: lb.id, content: t, author: o });
            return (0, t7.rh)({ ...e, timestamp: lN(l, e.timestamp), state: E.cmJ.SENT });
        }, [t, o, l]);
    return null == d ? null : (0, a.jsx)(lI, { message: d, author: u, content: t, accessories: s, groupStart: i });
}
function lI(e) {
    let { message: t, author: l, content: n, accessories: r, groupStart: s = !0 } = e,
        i = lA(t, n);
    return (0, a.jsx)(t4.A, {
        className: lj.yE,
        author: l,
        childrenHeader: s ? (0, a.jsx)(lC, { message: t, author: l }) : void 0,
        childrenMessageContent: i,
        childrenAccessories: lk(r, "" !== n),
        disableInteraction: !0,
    });
}
function lT(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: s,
            onJumpToReplied: i,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lv(t, { streaming: u }),
        m = r.useMemo(() => (0, t3.FT)(null, null), []),
        f = r.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = s?.userId,
        g = (0, N.bG)(
            [ei.default],
            () => lf(h, null != h ? ei.default.getUser(h) : null, ei.default.getCurrentUser()),
            [h],
        ),
        x = r.useMemo(() => {
            if (null == s || null == g) return null;
            let e = (0, t6.Ay)({ channelId: lb.id, content: s.content, author: g });
            return (0, t7.rh)({ ...e, id: s.id, timestamp: lN(s.createdAt, e.timestamp), state: E.cmJ.SENT });
        }, [s, g]),
        p = r.useMemo(() => (null == s ? void 0 : { channel_id: lb.id, message_id: s.id }), [s]),
        v = r.useMemo(() => {
            let e = (0, t6.Ay)({ channelId: lb.id, content: d, author: ly });
            return (0, t7.rh)({
                ...e,
                timestamp: lN(l, e.timestamp),
                state: E.cmJ.SENT,
                ...(null != p ? { type: E.lAJ.REPLY, message_reference: p } : {}),
            });
        }, [d, l, p]),
        j = lA(v, d, lj.OS);
    return (0, a.jsxs)("div", {
        className: lj.$4,
        "data-replying": null != x ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, a.jsx)(t4.A, {
                className: lj.yE,
                author: f,
                childrenRepliedMessage:
                    null == x ? null : (0, a.jsx)(lS, { baseMessage: v, referenced: x, onJumpToReplied: i }),
                childrenHeader: (0, la.A)({ message: v, channel: lb, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lk(n, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: lj.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(q.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var lM = l(375068);
function l_(e) {
    let { projectId: t, messages: l, ref: n, onPickIdea: s } = e,
        i = r.useRef(null),
        o = r.useCallback(
            (e) => {
                (i.current = e), "function" == typeof n ? n(e) : null != n && (n.current = e);
            },
            [n],
        ),
        [u, d] = r.useState(null),
        c = r.useRef(0);
    r.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = r.useCallback((e) => {
            let t = i.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600));
        }, []),
        f = r.useMemo(
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
                            n = eS({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, ey.C6)(t.steps, { turnActive: e }),
                            { lastWork: s, open: i } = (0, ey.CT)(r, { turnActive: e }),
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
                                        active: u.index === i,
                                        closed: u.index !== i,
                                        ...(null != u.durationMs ? { segmentDurationMs: u.durationMs } : {}),
                                        reportsDuration: u.index === s,
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
                            s = !1;
                        for (let i of e) {
                            if (null == i.actor) {
                                n.push(!1), (a = null), (t = void 0), (r = !1), (s = !1), (l = void 0);
                                continue;
                            }
                            let e =
                                !r || a !== i.actor || t !== i.authorId || i.boundary !== l || !0 === i.separate || s;
                            e && ((a = i.actor), (t = i.authorId), (r = !0), (s = !0 === i.separate), (l = i.boundary)),
                                n.push(e);
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: n[t] ?? !0 }));
                })(l),
            [l],
        );
    return 0 === l.length
        ? (0, a.jsx)("ol", {
              ref: n,
              className: lM.x7,
              children: (0, a.jsx)(lP, {
                  role: "assistant",
                  children: (0, a.jsx)(lT, { content: P.intl.string(_.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: o,
              className: lM.x7,
              children: f.map((e) => {
                  let n = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != n.attachments && n.attachments.length > 0 ? n.attachments : null;
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "user",
                                  anchorId: n.id,
                                  highlighted: u === n.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lE, {
                                      groupStart: e.groupStart,
                                      content: n.content,
                                      createdAt: n.created_at,
                                      userId: n.user_id,
                                      accessories:
                                          null != l ? (0, a.jsx)(eR.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lT, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: n.created_at,
                                      accessories:
                                          e.hostsAttachments && null != n.attachments
                                              ? (0, a.jsx)(eR.A, { projectId: t, attachments: n.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(ty, {
                                      projectId: t,
                                      steps: n.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != n.finished_at ? n.finished_at - n.created_at : void 0,
                                      todos: n.todos,
                                      provisionalTodo: n.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(ty, { projectId: t, interrupted: !0, steps: n.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(ty, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: n.todos,
                                      provisionalTodo: n.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lT, {
                                      groupStart: e.groupStart,
                                      content: n.content,
                                      createdAt: n.created_at,
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
                                      })(l, n.in_reply_to),
                                      onJumpToReplied: null != n.in_reply_to ? () => m(n.in_reply_to) : void 0,
                                      accessories: (0, a.jsx)(tk, {
                                          projectId: t,
                                          steps: n.steps,
                                          announcement: n.announcement,
                                          content: "",
                                          proposal: n.proposal,
                                          interrupted: !0 === n.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: n.ideas,
                                          pickedIdeaIds:
                                              null == n.ideas
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
                                                    })(l, n, n.ideas),
                                          attachments: n.attachments,
                                          secretRequest: n.secretRequest,
                                          settingsRequest: n.settingsRequest,
                                          onPickIdea: s,
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
    let { role: t, children: l, anchorId: n, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": n,
        className: i()(lM.xk, { [lM.Qo]: r, [lM.q3]: s }),
        children: l,
    });
}
var lR = l(625903),
    lL = l(964675);
function lD(e) {
    let { projectId: t } = e,
        l = (0, N.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        n = r.useCallback(() => {
            (0, eQ.A)(t);
        }, [t]);
    return l
        ? (0, a.jsx)(eC.D, {
              className: lL.h,
              "aria-label": P.intl.string(_.default.gTMvzD),
              onClick: n,
              children: (0, a.jsx)(lR.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lF = l(863610),
    lO = l(495557);
function l$(e) {
    let { activity: t, id: l } = e,
        { text: n, revealing: s } = lv(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [n]),
        (0, a.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lO.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(eb.Ch, {
                ref: o,
                className: lO.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: i()(tj.PT, lO.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: ew.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lq = l(921461);
function lz(e) {
    let { activity: t, compacting: l = !1, restoring: n = !1, controlling: s = !1 } = e,
        o = r.useRef(null),
        u = r.useId(),
        [d, c] = r.useState(null),
        m = null != t && "end" !== t.phase,
        f = s
            ? _.default.ivvYHP
            : n
              ? _.default.aFffp2
              : l
                ? _.default["0vH/5G"]
                : m
                  ? _.default.Ly7F7x
                  : _.default.QDGuNS,
        h = null != t && "" !== t.text,
        g = t?.session ?? null,
        x = h && null != g && d === g,
        p = r.useCallback(() => {
            h && null != g && c((e) => (e === g ? null : g));
        }, [h, g]),
        j = r.useCallback(() => c(null), []);
    return (0, a.jsx)(tA.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: x,
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(l$, { id: u, activity: t }),
        children: () =>
            (0, a.jsxs)(eC.D, {
                innerRef: o,
                className: i()(lq.hF, h && lq.Xd),
                "aria-label": P.intl.string(n ? _.default.pGFXZ0 : _.default.SzdX35),
                "aria-expanded": x,
                "aria-describedby": x ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)("span", {
                        className: lq.bl,
                        children: (0, a.jsx)(lF.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!s || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: P.intl.string(f),
                    }),
                ],
            }),
    });
}
var lG = l(280894);
function lB(e) {
    return e.toLocaleString();
}
function lU(e) {
    let { label: t, usage: l } = e;
    return (0, a.jsxs)("div", {
        className: lG.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: lG.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lB((0, tL.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lB(l.input_tokens),
                    " in \xb7 ",
                    lB(l.output_tokens),
                    " out \xb7 ",
                    lB(l.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    lB(l.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function lV(e) {
    let { project: t } = e,
        l = (0, tL.wU)(t.compaction),
        n = (0, tL.wV)((0, tL.wV)(t.orchestrator, t.codegen), l);
    return (0, a.jsxs)("div", {
        className: lG.si,
        role: "dialog",
        "aria-label": P.intl.string(_.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: lG.Q$,
                children: (0, a.jsxs)("div", {
                    className: lG.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lB((0, tL.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(lU, { label: P.intl.string(_.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(lU, { label: P.intl.string(_.default.R9aduM), usage: t.codegen }),
            (0, a.jsx)(lU, { label: P.intl.string(_.default.Tj6b30), usage: l }),
            (0, a.jsxs)("div", {
                className: lG.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(_.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tL.sj)(n) ? "\u2014" : `${Math.round(100 * (0, tL.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function lH(e) {
    let { project: t } = e,
        l = r.useRef(null);
    return (0, a.jsx)(tA.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(lV, { project: t }),
        children: (e) =>
            (0, a.jsx)(eC.D, {
                innerRef: l,
                className: lG.Y$,
                "aria-label": P.intl.string(_.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(eD.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lW = l(985451),
    lY = l(258216);
function lK(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(_.default.W7oyuf);
        case "failed":
            return P.intl.string(_.default.eE60xI);
        case "closed":
            return P.intl.string(_.default["yBmS+I"]);
    }
}
function lQ(e) {
    let {
            projectId: t,
            thinking: l,
            restoring: n = !1,
            thinkingActivity: r,
            compacting: s,
            projectUsage: i,
            connState: o,
        } = e,
        u = (0, lW.o4)(t);
    return (0, a.jsxs)("div", {
        className: lY.jf,
        children: [
            (0, a.jsx)("div", {
                className: lY.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    l || n || u ? (0, a.jsx)(lz, { activity: r, compacting: s, restoring: n, controlling: u }) : null,
            }),
            (0, a.jsx)(lD, { projectId: t }),
            null == i
                ? null
                : (0, a.jsxs)("span", {
                      className: lY.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(_.default["7SZZvj"], {
                                  runes: (0, tL.a7)(i.cost_usd),
                                  turns: i.turns,
                              }),
                              children: P.intl.formatToPlainString(_.default["4PFO2p"], {
                                  runes: (0, tL.a7)(i.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(lH, { project: i }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(_.default.eDDdhB, { status: lK(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: lY.XF,
                      children: lK(o),
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
    let { option: t, position: l, disabled: n, onPick: s, reachable: o = !0 } = e,
        u = r.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eC.D, {
        className: i()(l6.uK, { [l6.ue]: n }),
        onClick: n ? void 0 : () => s(t),
        "aria-label": P.intl.formatToPlainString(d ? _.default.aL1BKQ : _.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": n,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: l6.Gy, "aria-hidden": !0, children: l }),
            (0, a.jsxs)("span", {
                className: l6.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l6.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l6.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, a.jsx)(v.E, {
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
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: l6.rM,
                      children: P.intl.string(_.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function l3(e) {
    let { question: t, draft: l, direction: n, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, a.jsxs)("div", {
        className: i()(l6.Ge, l6.x1),
        "data-direction": n,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, a.jsx)(l5, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, a.jsxs)("div", {
                className: l6.Xy,
                children: [
                    (0, a.jsx)("span", {
                        className: l6.Gy,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(lX.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, a.jsx)("span", { className: i()(l6.Pu, l6.es), children: s }),
                ],
            }),
        ],
    });
}
function l4(e) {
    let { clarification: t, onSubmit: l, onDismiss: n } = e,
        [s, u] = r.useState({}),
        [d, c] = r.useState({}),
        [m, f] = r.useState(0),
        [h, g] = r.useState(null),
        [x, p] = r.useState(null),
        [j, b] = r.useState(null),
        [y, k] = r.useState(!1),
        N = r.useRef(null),
        [A, w] = r.useState(null),
        S = r.useRef(null),
        C = r.useRef(0),
        E = null == l,
        I = t.questions.length,
        T = Math.min(m, I - 1),
        M = t.questions[T],
        [R, L] = r.useState({ id: M.id, expanded: !1 }),
        D = R.id === M.id && R.expanded,
        [F, O] = r.useState(null),
        $ = d[M.id] ?? "",
        { text: q, phase: z } = (0, l7.Q)(M.question),
        G = q === M.question,
        B = G && F?.id === M.id && F.truncated;
    r.useLayoutEffect(() => {
        if (null == A || D || !G) return;
        function e() {
            if (null == A) return;
            let e = A.scrollHeight > A.clientHeight + 1;
            O((t) => (t?.id === M.id && t.truncated === e ? t : { id: M.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return t.observe(A), () => t.disconnect();
    }, [G, A, M.id, D]);
    let U = P.intl.string(D ? P.t.iTcuma : P.t.dcl9MQ),
        V = r.useCallback(
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
        H = r.useCallback(
            (e, t) => {
                C.current += 1;
                let l = C.current;
                g({ direction: t, moves: l }), p({ question: M, draft: $, direction: t, moves: l }), k(!0), f(e);
            },
            [$, M],
        ),
        W = r.useCallback(() => {
            let e = N.current,
                t = S.current;
            null != e && null != t && b({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    r.useLayoutEffect(() => {
        let e = N.current,
            t = S.current;
        if (null == e || null == t) return;
        W();
        let l = new ResizeObserver(W);
        return l.observe(e), l.observe(t), () => l.disconnect();
    }, [W]);
    let Y = h?.moves;
    r.useEffect(() => {
        if (null == Y) return;
        let e = setTimeout(() => p(null), 400),
            t = setTimeout(() => k(!1), 500);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [Y]);
    let K = r.useCallback(
            (e) => {
                if (E) return;
                let l = { ...s, [M.id]: e };
                u(l);
                let n = (function (e, t, l) {
                    let { questions: n } = e;
                    for (let e = 1; e <= n.length; e++) {
                        let a = (l + e) % n.length,
                            r = t[n[a].id];
                        if (null == r || "" === r.text.trim()) return a;
                    }
                    return null;
                })(t, l, T);
                null == n ? V(l) : H(n, n < T ? "back" : "forward");
            },
            [s, t, E, T, M.id, V, H],
        ),
        Q = r.useCallback(() => {
            if (E || 0 === T) return;
            let e = t.questions[T - 1];
            u((t) => {
                let l = { ...t };
                return delete l[e.id], l;
            }),
                c((t) => {
                    let l = { ...t };
                    return delete l[e.id], l;
                }),
                H(T - 1, "back");
        }, [t, E, T, H]),
        X = T > 0 && !E,
        Z = r.useCallback(() => {
            let e = $.trim();
            "" !== e && K({ kind: "custom", text: e });
        }, [$, K]),
        [J, ee] = r.useState(!1),
        [et, el] = r.useState(!1);
    r.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let en = r.useCallback(() => {
            null != n && (el(!0), setTimeout(n, 150));
        }, [n]),
        ea = r.useCallback(() => {
            E || T >= I - 1 || H(T + 1, "forward");
        }, [E, T, I, H]),
        er = T < I - 1 && !E;
    return (0, a.jsxs)("section", {
        className: i()(l6.$O, { [l6.fI]: J && !et, [l6.Oh]: et }),
        role: "dialog",
        "aria-label": M.question,
        "data-vibegrations-clarification": t.id,
        "data-state": E ? "inert" : "open",
        "data-question-expanded": D ? "true" : void 0,
        "data-step": T,
        children: [
            (0, a.jsxs)("div", {
                className: l6.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: N,
                        className: l6.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: w,
                                tag: "span",
                                id: `${M.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: D ? void 0 : 5,
                                className: i()(l6.TK, l6.R_, { [l6.TB]: "exit" === z, [l6.JU]: "enter" === z }),
                                children: q,
                            }),
                            B || D
                                ? (0, a.jsx)("div", {
                                      className: l6.Q7,
                                      children: (0, a.jsx)(eL.m, {
                                          text: U,
                                          children: (0, a.jsx)(lZ.K, {
                                              icon: D ? lJ.t : l0.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: M.id, expanded: !D }),
                                              "aria-label": U,
                                              "aria-controls": `${M.id}-label`,
                                              "aria-expanded": D,
                                          }),
                                      }),
                                  })
                                : null,
                            null == n
                                ? null
                                : (0, a.jsx)(eC.D, {
                                      className: i()(l6.gb, l6.Q7),
                                      onClick: en,
                                      "aria-label": P.intl.string(_.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, a.jsx)(o.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l6.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, a.jsxs)("div", {
                            className: l6.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: S,
                                    className: l6.Ge,
                                    role: "group",
                                    "aria-labelledby": `${M.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        M.options.map((e, t) =>
                                            (0, a.jsx)(
                                                l5,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: E,
                                                    onPick: (e) => K({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, a.jsxs)("div", {
                                            className: l6.Xy,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: l6.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, a.jsx)(lX.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, a.jsx)(tT.y, {
                                                    value: $,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [M.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), Z());
                                                    },
                                                    placeholder: P.intl.string(_.default.qifsdL),
                                                    "aria-label": P.intl.formatToPlainString(_.default.XHESTL, {
                                                        question: M.question,
                                                    }),
                                                    disabled: E,
                                                    rows: 1,
                                                    className: l6.Pu,
                                                    "data-vibegrations-clarification-other": M.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, a.jsx)(
                                          l3,
                                          { question: x.question, draft: x.draft, direction: x.direction, disabled: E },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            I > 1
                ? (0, a.jsxs)("div", {
                      className: l6.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(_.default["7bypa+"], { index: T + 1, total: I }),
                          }),
                          (0, a.jsxs)("div", {
                              className: l6.Np,
                              children: [
                                  (0, a.jsx)(eC.D, {
                                      className: i()(l6.gb, { [l6.yI]: !X }),
                                      onClick: X ? Q : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": E,
                                      "aria-label": P.intl.string(_.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, a.jsx)(l1.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eC.D, {
                                      className: i()(l6.gb, { [l6.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": E,
                                      "aria-label": P.intl.string(_.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, a.jsx)(l2.E, {
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
var l8 = l(643278),
    l9 = l(191521),
    ne = l(405189);
function nt(e) {
    let { line: t, placement: l, todos: n, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        d = null != l,
        [c, m] = r.useState(l ?? "top"),
        [f, h] = r.useState(d),
        [g, x] = r.useState(!1),
        [p, v] = r.useState(!1),
        [j, b] = r.useState(d);
    j !== d && (b(d), null != l ? (m(l), h(!0)) : (x(!1), v(!1))),
        r.useEffect(() => {
            if (d || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [d, f]),
        r.useEffect(() => {
            if (!f || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [f, d]);
    let [y, k] = r.useState(!1),
        [N, A] = r.useState(!1),
        [w, S] = r.useState(p);
    w !== p && (S(p), p ? k(!0) : A(!1)),
        r.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        r.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => A(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, p]);
    let C = null != n && n.length > 0,
        E = r.useCallback(() => v((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: ne.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: i()(ne.vK, { [ne.ho]: g && d, [ne.ET]: !d }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: i()(ne.Rk, to.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(eJ.A, {
                                        glyph: (0, a.jsx)(l9.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eC.D, {
                                    className: ne.pZ,
                                    onClick: u,
                                    "aria-label": P.intl.string(_.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: i()(ne.Rk, to.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(eJ.A, {
                                            glyph: (0, a.jsx)(l9.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          C
                              ? (0, a.jsx)(eL.m, {
                                    text: P.intl.string(_.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eC.D, {
                                        className: ne.BO,
                                        onClick: E,
                                        "aria-expanded": p,
                                        "aria-label": P.intl.string(_.default.qCRC6c),
                                        children: (0, a.jsx)(l8.ClipboardListIcon, {
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
                  y && C
                      ? (0, a.jsx)("div", {
                            className: i()(ne.vB, { [ne.pg]: p && N, [ne.ui]: !p }),
                            children: (0, a.jsx)(tp, { todos: n, provisional: s, agents: o, announceProgress: !1 }),
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
    ns = l(291749),
    ni = l(971276),
    no = l(590202),
    nu = l(710969),
    nd = l(792620),
    nc = l(201805),
    nm = l(617986),
    nf = l(363195),
    nh = l(749414);
let ng = !1;
function nx(e) {
    let t,
        l,
        n,
        { open: s } = e,
        i =
            ((t = (0, nc.dN)()),
            (l = (0, N.bG)([na.A], () => na.A.isQuestAccessSuspended || null != na.A.questEnrollmentBlockedUntil, [])),
            (n = (0, N.bG)([na.A], () => null != na.A.getQuestPreviewOverride(nr.uF.QUEST_BAR_V2), [])),
            null != t && (0, nd.vv)(t)
                ? n
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, ni.s)() || l || (0, nu.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = r.useState(() => ng),
        { mounted: d, closing: c } = (function (e) {
            let [t, l] = r.useState(e),
                [n, a] = r.useState(!1),
                s = r.useRef(null);
            return (
                e && (!t || n) ? (l(!0), a(!1)) : e || !t || n || a(!0),
                r.useEffect(() => {
                    if (!e && t)
                        return (
                            (s.current = setTimeout(() => {
                                (s.current = null), a(!1), l(!1);
                            }, 150)),
                            () => {
                                null != s.current && (clearTimeout(s.current), (s.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: n }
            );
        })(s && !o && null != i),
        [m, f] = r.useState(i);
    null != i && i !== m && f(i);
    let g = i ?? m,
        x = (0, N.bG)([nf.A], () => nf.A.getState().theme),
        p = (0, nl.M)(x) ? E.NJ8.DARK : E.NJ8.LIGHT,
        j = null != g ? (0, ns.tW)(g, ns.fY.GAME_TILE, p).url : null,
        b = null != j && "" !== j ? j : null,
        y = r.useCallback(async () => {
            if (null == i) return;
            let e = {
                questContent: nr.uF.QUEST_BAR_V2,
                sourceQuestContent: nr.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: no.Cy.WATCH_VIDEO,
            };
            i.userStatus?.enrolledAt != null
                ? (0, nm.d5)({ quest: i, ...e })
                : await (0, nm.e0)(i, { ...e, questContentCTA: no.Cy.ACCEPT_QUEST });
        }, [i]),
        k = r.useCallback(() => {
            (ng = !0), u(!0);
        }, []);
    return d && null != g
        ? (0, a.jsxs)("aside", {
              className: nh.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, a.jsxs)("div", {
                            className: nh.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: nh.Rx, src: b, alt: "" }),
                                (0, a.jsx)("div", { className: nh._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: nh.iB,
                      children: [
                          null != b ? (0, a.jsx)("img", { className: nh.w1, src: b, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: nh.Ug,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: P.intl.string(_.default["09LJ+I"]),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: P.intl.format(P.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsxs)(nn.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(h.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: P.intl.string(_.default.egO5fO),
                          }),
                          (0, a.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: P.intl.string(P.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var np = l(651649),
    nv = l(670455);
let nj = "shownVibegrationsFeedbackProjectIds";
var nb = l(348800);
let ny = [P.intl.string(_.default["E+Q26x"]), P.intl.string(_.default["06/jqP"]), P.intl.string(_.default["3gSfUa"])];
function nk(e) {
    let { projectId: t, restoreState: n } = e,
        s = (0, N.bG)([ek.Ay], () => ek.Ay.getMessages(t), [t]),
        i = (0, N.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, N.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, N.bG)([ek.Ay], () => ek.Ay.getProjectUsage(t), [t]),
        d = (0, N.bG)([ek.Ay], () => ek.Ay.getThinkingActivity(t), [t]),
        c = (0, N.bG)([ek.Ay], () => ek.Ay.isCompacting(t), [t]),
        f = (0, N.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        h = r.useRef(null),
        g = r.useRef(null),
        x = r.useRef(null),
        p = r.useRef(!0),
        [v, j] = r.useState(!0);
    r.useEffect(() => {
        p.current && g.current?.scrollToBottom();
    }, [s]);
    let b = r.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        y = r.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            p.current = t < 32;
            let l = t > 1;
            j((e) => (!l === e ? e : !l));
        }, []);
    r.useLayoutEffect(() => {
        let e = h.current,
            t = x.current;
        if (null == e) return;
        let l = g.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            s = null;
        function i() {
            p.current &&
                (null != s && cancelAnimationFrame(s), (s = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let s of t)
                if (s.target === e) {
                    let e = s.contentRect.width;
                    if (e === n) continue;
                    (n = e), i();
                } else if (s.target === l) {
                    let e = s.contentRect.height;
                    if (e === r) continue;
                    (r = e), i();
                } else {
                    let e = s.contentRect.height;
                    if (e === a) continue;
                    (a = e), i();
                }
        });
        return (
            o.observe(e),
            null != l && o.observe(l),
            null != t && o.observe(t),
            () => {
                o.disconnect(), null != s && cancelAnimationFrame(s);
            }
        );
    }, []),
        r.useEffect(() => {
            (0, m.Hc)(t);
        }, [t]),
        r.useEffect(
            () => () =>
                (function (e) {
                    let t = ek.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ek.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tO.w.get(nj) ?? []).includes(e) ||
                            np.A.possiblyShowFeedbackModal(nv.MW.VIBEGRATIONS, () => {
                                let n;
                                (n = tO.w.get(nj) ?? []).includes(e) || tO.w.set(nj, [...n, e]),
                                    (0, eW.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            l.e("312513"),
                                            l.e("104143"),
                                            l.e("155925"),
                                            l.e("218413"),
                                            l.e("137381"),
                                            l.e("847004"),
                                            l.e("341676"),
                                        ]).then(l.bind(l, 580711));
                                        return (l) => (0, a.jsx)(n, { ...l, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let k = r.useCallback(
            (e, l) => {
                (0, m.dv)(t, e, l);
            },
            [t],
        ),
        A = r.useCallback(() => (0, m.fu)(t), [t]),
        w = r.useCallback((e) => k(e.implementation_prompt), [k]),
        S = r.useCallback((e) => k(e), [k]),
        C = r.useCallback((e) => (0, m.XZ)(t, e), [t]),
        E = r.useCallback((e) => (0, m.vX)(t, e), [t]),
        I = r.useCallback((e) => (0, m.Vm)(t, e), [t]),
        T = r.useCallback(() => k(P.intl.string(_.default.Jj8Ftb)), [k]),
        M = n?.status === "restoring",
        R = "open" === i && !o && !M,
        L = s[s.length - 1],
        D = null != L && "assistant" === L.role && null != L.proposal,
        [F, O] = r.useState(null),
        $ = L?.clarification != null && L.clarification.id !== F ? L.clarification : null,
        q = r.useCallback(() => {
            null != $ && O($.id);
        }, [$]),
        z = (0, N.bG)([ek.Ay], () => ek.Ay.hasLoadedHistory(t), [t]),
        G = r.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return ny[e % ny.length];
        }, [t]),
        B = D
            ? P.intl.string(_.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? P.intl.string(_.default["3sTTBu"])
              : z && 0 === s.length
                ? G
                : null,
        U = r.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, ek.BL)(t)) return t;
            }
        }, [s]),
        V = null != U,
        H = D && R ? T : void 0,
        [W, Y] = r.useState(null),
        [K, Q] = r.useState(V);
    K !== V && (Q(V), V || Y(null)),
        r.useEffect(() => {
            if (!V) return;
            let e = g.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Y(null)
                        : Y(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return l.observe(t), () => l.disconnect();
        }, [V, U?.steps]);
    let X = r.useMemo(() => (null != U ? (0, eN.b9)(U.steps) : ""), [U]),
        Z = r.useMemo(() => (null != U ? ((0, ey.lt)(U.steps) ?? U.todos) : void 0), [U]),
        J = U?.provisionalTodo,
        ee = r.useMemo(() => {
            var e;
            return null != U ? ((e = U.steps), tb((0, ey.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [U]);
    return (0, a.jsxs)("section", {
        ref: h,
        "data-vibegrations-chat": !0,
        className: nb.TE,
        children: [
            (0, a.jsx)(nx, { open: null != U }),
            (0, a.jsx)(nt, {
                onJumpToActivity: b,
                line: X,
                placement: V && "top" === W ? "top" : null,
                todos: Z,
                provisionalTodo: J,
                agents: ee,
            }),
            (0, a.jsxs)("div", {
                className: nb.JX,
                children: [
                    (0, a.jsx)(eb.Ch, {
                        ref: g,
                        onScroll: y,
                        className: v ? nb.N$ : `${nb.N$} ${nb.hB}`,
                        children: (0, a.jsx)(l_, { ref: x, projectId: t, messages: s, onPickIdea: R ? w : void 0 }),
                    }),
                    (0, a.jsx)("div", {
                        className: nb.NJ,
                        children: (0, a.jsx)(lQ, {
                            projectId: t,
                            thinking: V,
                            restoring: M,
                            thinkingActivity: d,
                            compacting: c,
                            projectUsage: u,
                            connState: i,
                        }),
                    }),
                    null == $
                        ? null
                        : (0, a.jsx)("div", {
                              className: nb.B5,
                              children: (0, a.jsx)(
                                  l4,
                                  { clarification: $, onSubmit: R ? S : void 0, onDismiss: q },
                                  $.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nb.Jx,
                children: [
                    (0, a.jsx)(nt, {
                        onJumpToActivity: b,
                        line: X,
                        placement: V && "bottom" === W ? "bottom" : null,
                        todos: Z,
                        provisionalTodo: J,
                        agents: ee,
                    }),
                    (0, a.jsx)(tZ, {
                        projectId: t,
                        canSend: R,
                        stopped: o,
                        running: V,
                        restoring: M,
                        onSend: k,
                        onInterrupt: R ? A : void 0,
                        onUploadFile: E,
                        onDeleteFile: I,
                        onApprove: H,
                        suggestion: B,
                        questionOpen: null != $,
                        modelSettings: f,
                        onModelSettingsChange: C,
                    }),
                ],
            }),
        ],
    });
}
var nN = l(661531),
    nA = l(602853),
    nw = l(517461),
    nS = l(761929),
    nC = l(927506);
function nE(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: s } = e,
        i = (0, nA.r)(nN.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = r.useRef(null),
        [u, d] = (0, nw.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = r.useState(u ?? 460),
        f = (0, tD.clamp)(c, 360, l);
    r.useLayoutEffect(() => {
        n(t ? f + i : 0);
    }, [f, t, i, n]);
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
        g = r.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: nC.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: nC.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: nC.kL, style: { width: f }, children: s }),
        ],
    });
}
var nI = l(691540),
    nT = l(857250),
    nM = l(97483),
    n_ = l(624479),
    nP = l(92446),
    nR = l(761508),
    nL = l(540999),
    nD = l(957565);
let nF = [],
    nO = new Map(),
    n$ = new Map(),
    nq = new Map(),
    nz = new Map(),
    nG = new Map(),
    nB = new Map();
class nU extends N.Ay.Store {
    getStatus(e) {
        return nO.get(e) ?? null;
    }
    getFetchState(e) {
        return n$.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nq.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return nG.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return nz.get(e) ?? null;
    }
    getModelCalls(e) {
        return nB.get(e) ?? nF;
    }
}
let nV = new nU(t$.h, {
    LOGOUT: function () {
        if (0 === nO.size && 0 === n$.size && 0 === nq.size && 0 === nz.size && 0 === nG.size && 0 === nB.size)
            return !1;
        nO.clear(), n$.clear(), nq.clear(), nz.clear(), nG.clear(), nB.clear();
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        n$.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l || "loading" !== n$.get(t)) return !1;
        n$.set(t, "failed");
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? n$.set(t, "failed") : (nO.set(t, l), n$.set(t, "loaded"));
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
        nz.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
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
        if (0 === (0, tL.aM)(l.total)) return !1;
        nG.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        nO.delete(t), n$.delete(t), nq.delete(t), nz.delete(t), nG.delete(t), nB.delete(t);
    },
});
var nH = l(972786);
function nW(e) {
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
function nK(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function nQ(e) {
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
var nJ = l(69985);
function n0(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, a.jsxs)("div", {
        className: nJ.KE,
        children: [
            (0, a.jsx)("div", {
                className: nJ.IQ,
                children:
                    "loading" === l
                        ? (0, a.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: P.intl.string(_.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: P.intl.formatToPlainString(_.default["4NpaEk"], { time: nX(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(h.$, { variant: "secondary", size: "sm", text: P.intl.string(_.default.aw0IJm), onClick: n }),
        ],
    });
}
function n1(e) {
    let { title: t, children: l } = e;
    return (0, a.jsxs)("section", {
        className: nJ.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: nJ.Gf, children: t }),
            l,
        ],
    });
}
function n2(e) {
    let { label: t, value: l, hint: n, critical: r = !1 } = e;
    return (0, a.jsxs)("div", {
        className: nJ.N8,
        children: [
            (0, a.jsxs)("div", {
                className: nJ.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != n && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function n7(e) {
    let { label: t, used: l, max: n, formatValue: r } = e,
        s = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        i = s >= 0.9;
    return (0, a.jsxs)("div", {
        className: nJ.N8,
        children: [
            (0, a.jsxs)("div", {
                className: nJ.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: i ? "text-feedback-critical" : "text-default",
                        children: `${r(l)} / ${r(n)}`,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: nJ.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": n,
                "aria-valuenow": Math.min(l, n),
                "aria-valuetext": `${r(l)} of ${r(n)}`,
                children: (0, a.jsx)("div", {
                    className: i ? nJ.aV : nJ.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(s) },
                }),
            }),
        ],
    });
}
function n6(e) {
    switch (e.reason) {
        case "local":
            return P.intl.string(_.default.M7Vn6y);
        case "unconfigured":
            return P.intl.string(_.default.QirpMl);
        case "unauthorized":
            return P.intl.string(_.default.QZ1e4l);
        default:
            return null != e.detail
                ? P.intl.formatToPlainString(_.default.zUTHf7, { detail: e.detail })
                : P.intl.string(_.default.WIAQes);
    }
}
function n5(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : P.intl.formatToPlainString(_.default.SBkDIZ, {
              p50: nW(e.memory_p50_bytes ?? 0),
              p999: nW(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let n3 = {
    db: () => _.default.r6cciE,
    db_preview: () => _.default.JmIyL8,
    runtime: () => _.default.bzNyv8,
    runtime_preview: () => _.default["LONZ/8"],
    bot: () => _.default.jdpw3A,
    bot_preview: () => _.default["/g6wUz"],
};
function n4(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(n2, {
            label: P.intl.string(_.default.H6PMwW),
            value: P.intl.string(_.default.TLOZ8J),
            hint: n6(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, a.jsx)(n2, {
            label: P.intl.string(_.default.H6PMwW),
            value: "\u2014",
            hint: P.intl.string(_.default.uAzxdh),
        });
    let n = n5(l);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n2, { label: P.intl.string(_.default.awAqRi), value: nY(l.cpu_ms) }),
            null != n && (0, a.jsx)(n2, { label: P.intl.string(_.default.WdGviA), value: n }),
        ],
    });
}
function n8(e) {
    let { analytics: t } = e,
        l = P.intl.string(_.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, a.jsx)(n1, {
            title: l,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: n6(t) }),
        });
    let n = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? n3[t] : null) ? P.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(n1, {
        title: l,
        children:
            0 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: P.intl.string(_.default.uAzxdh),
                  })
                : n.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, a.jsx)(
                          n2,
                          {
                              label: l,
                              value: P.intl.formatToPlainString(_.default.AnRynJ, { cpu: nY(t.cpu_ms) }),
                              hint: n5(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var n9 = l(522652);
let ae = new Set(["error", "aborted", "length"]),
    at = [];
function al(e) {
    let { call: t } = e,
        l = null != t.stopReason && ae.has(t.stopReason),
        n = [
            null != t.durationMs ? nY(t.durationMs) : null,
            `${nK(t.inputTokens + t.cacheReadTokens + t.cacheWriteTokens)} \u{2192} ${nK(t.outputTokens)}`,
            l ? t.stopReason : null,
        ]
            .filter((e) => null != e)
            .join(" \xb7 ");
    return (0, a.jsxs)("div", {
        className: n9.p5,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: n9.Q5,
                children: nQ(t.observedAt),
            }),
            (0, a.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: n9.qN,
                children: [t.role, " \xb7 ", t.model],
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: l ? "text-feedback-critical" : "text-muted",
                children: n,
            }),
        ],
    });
}
function an(e, t) {
    return (0, a.jsx)(n2, {
        label: e,
        value: P.intl.formatToPlainString(_.default.U98VaN, { count: nK((0, tL.aM)(t)) }),
        hint: `${nK(t.input_tokens)} in \xb7 ${nK(t.output_tokens)} out \xb7 ${nK(t.cache_read_input_tokens)} cache read`,
    });
}
function aa(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: r, traceVisible: s = !1 } = e,
        i = (0, N.bG)([nV], () => nV.getLastTurnUsage(t), [t]),
        o = (0, N.bG)([nV], () => nV.getLastCompaction(t), [t]),
        u = (0, N.bG)([nV], () => nV.getLastCompactionDecline(t), [t]),
        d = (0, N.bG)([nV], () => (s ? at : nV.getModelCalls(t)), [t, s]),
        c = l?.agent?.lifetime ?? null,
        m = l?.agent?.limits ?? null,
        f = l?.agent?.session ?? null,
        h = o?.promptCeiling ?? m?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: n9.Mf,
        children: [
            (0, a.jsx)(n0, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: r }),
            (0, a.jsx)(n1, {
                title: P.intl.string(_.default.IYpHtT),
                children:
                    null == c
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(_.default.gPabB9),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(n2, {
                                      label: P.intl.string(_.default["8MSJDH"]),
                                      value: nK((0, tL.a7)(c.cost_usd)),
                                      hint: P.intl.formatToPlainString(_.default["6Z2KhK"], { count: nK(c.turns) }),
                                  }),
                                  an(P.intl.string(_.default.hk4jJr), c.orchestrator),
                                  an(P.intl.string(_.default.R9aduM), c.codegen),
                                  an(P.intl.string(_.default.Tj6b30), (0, tL.wU)(c.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(n2, {
                                          label: P.intl.string(_.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${nK(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(n1, {
                title: P.intl.string(_.default.lo4mY6),
                children:
                    null == i
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(_.default.uyPveL),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  an(P.intl.string(_.default["VwF+oY"]), i.total),
                                  (0, a.jsx)(n2, {
                                      label: P.intl.string(_.default["kILb+R"]),
                                      value: `${Math.round((i.cache_hit_rate ?? (0, tL.CA)(i.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(n1, {
                title: P.intl.string(_.default.mn8279),
                children: [
                    null != o && null != h
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(n7, {
                                      label: P.intl.string(_.default.dKFhCg),
                                      used: o.tokensAfter,
                                      max: h,
                                      formatValue: nK,
                                  }),
                                  (0, a.jsx)(n2, {
                                      label: P.intl.string(_.default.ntZb8d),
                                      value: `${nK(o.tokensBefore)} \u{2192} ${nK(o.tokensAfter)}`,
                                      hint: P.intl.formatToPlainString(_.default.jA05ru, {
                                          count: nK(o.retainedMessages),
                                          time: nX(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != h
                                      ? P.intl.formatToPlainString(_.default.LKGmsP, { ceiling: nK(h) })
                                      : P.intl.string(_.default.gPabB9),
                          }),
                    null != u &&
                        (0, a.jsx)(n2, {
                            label: P.intl.string(_.default["se+2ls"]),
                            value: `${nK(u.projected)} / ${nK(u.threshold)}`,
                            critical: !0,
                            hint: P.intl.formatToPlainString(_.default.KHK44U, { time: nX(u.observedAt) }),
                        }),
                ],
            }),
            !s &&
                (0, a.jsx)(n1, {
                    title: P.intl.string(_.default.F5eP7e),
                    children:
                        0 === d.length
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: P.intl.string(_.default.j8NMgl),
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      d
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, a.jsx)(al, { call: e }, e.id)),
                                      d.length > 30 &&
                                          (0, a.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: P.intl.formatToPlainString(_.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: d.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != f || l?.analytics != null) &&
                (0, a.jsxs)(n1, {
                    title: P.intl.string(_.default.ZRxAPD),
                    children: [
                        null != f &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(n2, {
                                        label: P.intl.string(_.default["wt5X/o"]),
                                        value: nX(f.instance_since),
                                        hint: P.intl.string(_.default.QX2UQC),
                                    }),
                                    (0, a.jsx)(n2, { label: P.intl.string(_.default["4lgurx"]), value: nK(f.sockets) }),
                                    (0, a.jsx)(n2, {
                                        label: P.intl.string(_.default["a/LXBt"]),
                                        value: f.turn_inflight
                                            ? P.intl.string(_.default["9KlveJ"])
                                            : P.intl.string(_.default["4tYZVa"]),
                                    }),
                                    f.queued_messages > 0 &&
                                        (0, a.jsx)(n2, {
                                            label: P.intl.string(_.default["/hOBkc"]),
                                            value: nK(f.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, a.jsx)(n4, { analytics: l.analytics }),
                    ],
                }),
            null != m &&
                (0, a.jsxs)(n1, {
                    title: P.intl.string(_.default["EmSF+A"]),
                    children: [
                        (0, a.jsx)(n2, { label: P.intl.string(_.default["5iHZLk"]), value: nK(m.max_iterations) }),
                        (0, a.jsx)(n2, {
                            label: P.intl.string(_.default.Rb6m3E),
                            value: nK(m.max_subagent_iterations),
                        }),
                        (0, a.jsx)(n2, {
                            label: P.intl.string(_.default.WQ9pMe),
                            value: P.intl.formatToPlainString(_.default.U98VaN, { count: nK(m.context_window_tokens) }),
                        }),
                        (0, a.jsx)(n2, {
                            label: P.intl.string(_.default.iEAvzu),
                            value: P.intl.formatToPlainString(_.default.U98VaN, {
                                count: nK(m.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(n2, {
                            label: P.intl.string(_.default["jbhs+f"]),
                            value: nK(m.max_user_message_chars),
                        }),
                        (0, a.jsx)(n2, { label: P.intl.string(_.default.TOQnq4), value: nK(m.max_build_attempts) }),
                        (0, a.jsx)(n2, { label: P.intl.string(_.default.RIDc6D), value: nK(m.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var ar = l(320448),
    as = l(629584),
    ai = l(683438),
    ao = l(849363);
function au(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: ao.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: P.intl.string(_.default.TV42NS),
              }),
          });
}
function ad(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: ao.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: P.intl.string(_.default.TV42NS),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: P.intl.string(_.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: ao.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function ac(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: ao.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(_.default["U/qDX9"]),
              }),
          })
        : null;
}
var am = l(417397);
let af = ["all", "preview", "stable", "web"],
    ah = r.memo(function (e) {
        var t;
        let { entry: l, showSource: n } = e,
            [s, i] = r.useState(!1),
            o = r.useId(),
            u = r.useMemo(
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
                        let s = e.slice(0, a).trim(),
                            i = JSON.stringify(t, null, 2);
                        return Array.isArray(t)
                            ? { prefix: s, pretty: i, marker: "[\u2026]", size: t.length }
                            : { prefix: s, pretty: i, marker: "{\u2026}", size: Object.keys(t).length };
                    })(l.message),
                [l.message],
            ),
            d = "error" === l.level ? "text-feedback-critical" : "text-default";
        return (0, a.jsxs)("div", {
            className: am.vK,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    className: am.Mt,
                    selectable: !0,
                    children: nQ(l.ts),
                }),
                (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "text-xxs/semibold",
                    color:
                        "error" === (t = l.level)
                            ? "text-feedback-critical"
                            : "warn" === t
                              ? "text-feedback-warning"
                              : "text-muted",
                    className: am.dm,
                    children: l.level,
                }),
                (0, a.jsxs)("span", {
                    className: am.t4,
                    children: [
                        n &&
                            null != l.source &&
                            (0, a.jsx)(v.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-subtle",
                                className: am.Cq,
                                children: l.source,
                            }),
                        null != l.kind &&
                            (0, a.jsx)(v.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-feedback-critical",
                                className: am.Cq,
                                title: l.build ?? void 0,
                                children: P.intl.string(_.default.GO6JcR),
                            }),
                        null != u
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      "" !== u.prefix &&
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/normal",
                                              color: d,
                                              selectable: !0,
                                              children: [u.prefix, " "],
                                          }),
                                      (0, a.jsxs)(eC.D, {
                                          className: am.Pq,
                                          "aria-expanded": s,
                                          "aria-controls": o,
                                          "aria-label": P.intl.string(_.default.ehmgbH),
                                          onClick: () => i((e) => !e),
                                          children: [
                                              s
                                                  ? (0, a.jsx)(l0.a, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, a.jsx)(ar._, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    }),
                                              (0, a.jsxs)(v.E, {
                                                  tag: "span",
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  children: [
                                                      u.marker,
                                                      " ",
                                                      P.intl.formatToPlainString(
                                                          "[\u2026]" === u.marker ? _.default.lXkB6Z : _.default.wkbYxG,
                                                          { count: u.size },
                                                      ),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      s &&
                                          (0, a.jsx)(v.E, {
                                              tag: "div",
                                              variant: "text-xs/normal",
                                              color: d,
                                              className: am.dF,
                                              selectable: !0,
                                              id: o,
                                              children: u.pretty,
                                          }),
                                  ],
                              })
                            : (0, a.jsx)(v.E, {
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
function ag(e) {
    let { projectId: t } = e,
        l = (0, N.bG)([nH.Ay], () => nH.Ay.getLogs(t), [t]),
        n = (0, N.bG)([nH.Ay], () => nH.Ay.getHistoryState(t, "logs")),
        [s, i] = r.useState("all"),
        [o, u] = r.useState(""),
        d = r.useMemo(() => {
            let e = o.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === s ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === s) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, s, o]),
        c = r.useRef(null),
        m = r.useRef(!0);
    r.useEffect(() => {
        m.current && c.current?.scrollToBottom();
    }, [d]);
    let f = r.useCallback(() => {
            let e = c.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        h = r.useMemo(
            () =>
                af.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                                return P.intl.string(_.default["+m8XM6"]);
                            case "stable":
                                return P.intl.string(_.default.kiOVnt);
                            case "web":
                                return P.intl.string(_.default.J2TPCe);
                            default:
                                return P.intl.string(_.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: am.$F,
        children: [
            (0, a.jsxs)("div", {
                className: am.y4,
                children: [
                    (0, a.jsx)(as.I, {
                        look: "pill",
                        "aria-label": P.intl.string(_.default.fhnXnM),
                        options: h,
                        value: s,
                        onChange: (e) => i(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: am.KT,
                        children: (0, a.jsx)(ai.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: P.intl.string(_.default["MX4vr/"]),
                            "aria-label": P.intl.string(_.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, a.jsx)(au, { state: n }),
            (0, a.jsxs)(eb.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: am.sx,
                children: [
                    (0, a.jsx)(ac, { state: n }),
                    0 === l.length
                        ? (0, a.jsx)(ad, {
                              state: n,
                              emptyTitle: P.intl.string(_.default.mcFyYc),
                              emptyBody: P.intl.string(_.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: P.intl.string(_.default.oIJbFa),
                            })
                          : d.map((e) => (0, a.jsx)(ah, { entry: e.log, showSource: "all" === s }, e.key)),
                ],
            }),
        ],
    });
}
function ax(e) {
    return P.intl.string("preview" === e ? _.default["+m8XM6"] : _.default.kiOVnt);
}
function ap(e) {
    let { title: t, preview: l, stable: n, renderEnv: s } = e,
        i = [];
    return (
        null != l && i.push((0, a.jsx)(r.Fragment, { children: s("preview", l) }, "preview")),
        null != n && i.push((0, a.jsx)(r.Fragment, { children: s("stable", n) }, "stable")),
        (0, a.jsx)(n1, {
            title: t,
            children:
                i.length > 0
                    ? i
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: P.intl.string(_.default.W4hcKL),
                      }),
        })
    );
}
function av(e) {
    let { env: t, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(n2, {
                      label: P.intl.formatToPlainString(_.default.f8ix3w, { env: ax(t) }),
                      value: l.connected ? P.intl.string(_.default["9KlveJ"]) : P.intl.string(_.default["4tYZVa"]),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(n2, {
                      label: P.intl.string(_.default["0AB7l3"]),
                      value: nK(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${nX(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(n2, { label: P.intl.string(_.default.ElaQ0A), value: nK(l.guild_count) }),
                  (0, a.jsx)(n2, {
                      label: P.intl.string(_.default.SJtBTN),
                      value: nK(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? P.intl.formatToPlainString(_.default.bSzLue, {
                                    code: l.last_close_code,
                                    time: nX(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(n2, {
                          label: P.intl.string(_.default.N4l504),
                          value: nK(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(n2, { label: ax(t), value: P.intl.string(_.default.C6xjtD) });
}
function aj(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, a.jsx)(n2, {
        label: ax(t),
        value: P.intl.formatToPlainString(_.default.Yur5Zm, { requests: nK(l.requests), failures: nK(n + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? P.intl.formatToPlainString(_.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: nX(l.last_failure.at),
                  })
                : P.intl.formatToPlainString(_.default["1PdrB1"], { time: nX(l.since) }),
    });
}
function ab(e) {
    let { env: t, runtime: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n2, {
                label: P.intl.formatToPlainString(_.default.BVORfc, { env: ax(t) }),
                value: nK(l.connections),
            }),
            l.schedules.map((e) =>
                (0, a.jsx)(
                    n2,
                    {
                        label: P.intl.formatToPlainString(_.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? P.intl.formatToPlainString(_.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? P.intl.formatToPlainString(_.default["7ecbr3"], { time: nX(e.next_run_at) })
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
    return (0, a.jsx)(n2, {
        label: ax(t),
        value: P.intl.formatToPlainString(_.default.voXL2a, { calls: nK(l.calls), errors: nK(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function ak(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, a.jsx)(n1, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: P.intl.string(_.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        s = l.cpu_ms_total > 0;
    return (0, a.jsxs)(n1, {
        title: t,
        children: [
            (0, a.jsx)(n2, {
                label: P.intl.string(_.default.KOnL3g),
                value: nK(l.requests),
                hint: P.intl.formatToPlainString(_.default["1PdrB1"], { time: nX(l.since) }),
            }),
            (0, a.jsx)(n2, { label: P.intl.string(_.default.CjPhyY), value: nK(l.errors), critical: l.errors > 0 }),
            s
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(n7, {
                              label: P.intl.string(_.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: nY,
                          }),
                          (0, a.jsx)(n2, {
                              label: P.intl.string(_.default["+rYPHD"]),
                              value: nY(r),
                              hint: P.intl.formatToPlainString(_.default["+LxC7W"], {
                                  total: nY(l.cpu_ms_total),
                                  wall: nY(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(n2, {
                      label: P.intl.string(_.default["V/nNbs"]),
                      value: P.intl.string(_.default.YKWIxp),
                      hint: P.intl.string(_.default["8GAiDk"]),
                  }),
            !s &&
                l.wall_ms_total > 0 &&
                (0, a.jsx)(n2, { label: P.intl.string(_.default.ueEMPa), value: nY(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, a.jsx)(n2, { label: P.intl.string(_.default.vM2krr), value: nK(l.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(n2, {
                label: P.intl.string(_.default.g1O88C),
                value: nK(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: P.intl.formatToPlainString(_.default["5iALNP"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, a.jsx)(n2, { label: P.intl.string(_.default.JUZs7g), value: nZ(l.build) }),
        ],
    });
}
function aN(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: s } = t.storage,
        i = t.worker.limits,
        o = s
            ? [{ key: "shared", label: P.intl.string(_.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: P.intl.string(_.default["+m8XM6"]), metrics: n },
                  { key: "stable", label: P.intl.string(_.default.kiOVnt), metrics: l },
              ];
    return (0, a.jsx)(n1, {
        title: P.intl.string(_.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, a.jsx)(n2, { label: l, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              (0, a.jsx)(n2, {
                                  label: P.intl.formatToPlainString(_.default["9TpIQg"], { env: l }),
                                  value: nW(n.r2_bytes),
                                  hint: P.intl.formatToPlainString(
                                      n.r2_truncated ? _.default.o45MMA : _.default.S7o3vV,
                                      { count: nK(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, a.jsx)(n7, {
                                      label: P.intl.formatToPlainString(_.default["0OIswI"], { env: l }),
                                      used: n.db_bytes,
                                      max: i.db_bytes,
                                      formatValue: nW,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aA(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, a.jsxs)("div", {
        className: n9.Mf,
        children: [
            (0, a.jsx)(n0, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(ak, {
                            title: P.intl.string(_.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(ak, {
                            title: P.intl.string(_.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(aN, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(ap, {
                                title: P.intl.string(_.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(av, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(ap, {
                                title: P.intl.string(_.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(aj, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(ap, {
                                title: P.intl.string(_.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ab, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(ap, {
                                title: P.intl.string(_.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ay, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(n8, { analytics: t.analytics }),
                        (0, a.jsxs)(n1, {
                            title: P.intl.string(_.default["HHe+8E"]),
                            children: [
                                (0, a.jsx)(n2, {
                                    label: P.intl.string(_.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? nZ(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(n2, {
                                    label: P.intl.string(_.default.kiOVnt),
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
function aw(e, t) {
    return String(e).padStart(t, "0");
}
function aS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aw(n.getHours(), 2)}:${aw(n.getMinutes(), 2)}:${aw(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aw(n.getMilliseconds(), 3)}` : a;
}
var aC = l(977129);
let aE = new Map(),
    aI = new Map(),
    aT = 0,
    aM = 0;
async function a_(e, t, l) {
    let n = aT,
        a = aE.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aM) return { status: "forbidden" };
    let r = aI.get(t);
    if (null != r) return r;
    let s = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: s } = await (0, aC.d)(e),
                i = await fetch(
                    ((a = new URL(`${s}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === i.status) return (aM = Date.now() + 6e4), { status: "forbidden" };
            if (!i.ok) return { status: "failed" };
            let o = await i.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aT) return { status: "failed" };
            var l = o.rich;
            for (aE.set(t, l); aE.size > 100; ) {
                let e = aE.keys().next();
                if (!0 === e.done) break;
                aE.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    aI.set(t, s);
    let i = await s;
    return aI.get(t) === s && aI.delete(t), l?.aborted === !0 ? { status: "failed" } : i;
}
function aP() {
    (aT += 1), aE.clear(), aI.clear(), (aM = 0);
}
function aR(e) {
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
let aL = ["model", "tool", "subagent", "delegated", "context"];
function aD(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(aR(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function aF(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aO = ["arguments", "result", "usage", "diagnostics"];
function a$(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aq(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function az(e) {
    switch (e) {
        case "subagent":
            return P.intl.string(_.default["EoY7D+"]);
        case "context":
            return P.intl.string(_.default.KVFrD3);
        case "tool":
            return P.intl.string(_.default["/N6ZU9"]);
        case "delegated":
            return P.intl.string(_.default.HcEbf2);
        default:
            return P.intl.string(_.default.AhOqQs);
    }
}
var aG = l(40715);
let aB = { started: aG.Vf, ok: aG.mo, error: aG.Sr };
function aU(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: `${aG.Om} ${aB[t] ?? aG.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return P.intl.string(_.default.HpKDyl);
                case "error":
                    return P.intl.string(_.default["5T4Dd0"]);
                default:
                    return P.intl.string(_.default.VbEmf0);
            }
        })(t),
    });
}
let aV = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function aH(e) {
    let { label: t, value: l } = e;
    return (0, a.jsxs)("div", {
        className: aG.wV,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: aG.D6, children: t }),
            (0, a.jsx)("div", { className: aG.zL, children: l }),
        ],
    });
}
function aW(e) {
    let { label: t, value: l } = e;
    return (0, a.jsx)(aH, {
        label: t,
        value: (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function aY(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: aG.WA, children: t });
}
function aK(e) {
    let { title: t, children: l } = e,
        n = r.useId();
    return (0, a.jsxs)("section", {
        "aria-labelledby": n,
        className: aG.xd,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: aG.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function aQ(e) {
    let { title: t, children: l } = e;
    return (0, a.jsxs)("details", {
        className: aG.XK,
        children: [
            (0, a.jsxs)("summary", {
                className: aG.p8,
                children: [
                    (0, a.jsx)(ar._, { className: aG.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, a.jsx)("div", { className: aG.bG, children: l }),
        ],
    });
}
function aX(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, a.jsx)(aH, {
            label: t.key,
            value: (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? P.intl.formatToPlainString(_.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? P.intl.formatToPlainString(_.default.OB8Qvn, { count: t.items })
              : null;
    return (0, a.jsx)(aH, {
        label: t.key,
        value: (0, a.jsxs)("div", {
            className: aG.Kv,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return P.intl.string(_.default.xO6bcQ);
                            case "content":
                                return P.intl.string(_.default.gpBZRr);
                            default:
                                return P.intl.string(_.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, a.jsx)(v.E, {
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
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)("div", {
                      className: aG.QR,
                      children: (0, a.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: aG.uh,
                          children: P.intl.string(_.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, a.jsx)(
                          aH,
                          {
                              label: e.key,
                              value: (0, a.jsxs)("div", {
                                  className: aG.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: aG.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: P.intl.string(_.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? P.intl.string(_.default["1kBG9Z"])
                                                        : P.intl.formatToPlainString(_.default.VGSwo4, {
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
    let { detail: t } = e;
    if (null == t || "loaded" === t.status || "forbidden" === t.status) return null;
    let l =
        "loading" === t.status ? _.default["vBF/0G"] : "unavailable" === t.status ? _.default.jEQTot : _.default.fj5wM8;
    return (0, a.jsx)(v.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: aG.E7,
        children: P.intl.string(l),
    });
}
function a0(e) {
    let { projectId: t, entry: l, onClose: n, parent: s, onSelect: i, childCount: o } = e,
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
                aO.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != s }),
        d = (function (e, t) {
            let [l, n] = r.useState(null);
            if (
                (r.useEffect(() => {
                    if (null == t || null != aE.get(t)) return;
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
            let a = aE.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = aS(l.startedAt, "millis"),
        f = aR(l),
        h = r.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, a.jsxs)(eb.Ch, {
        className: aG._0,
        onKeyDown: h,
        role: "region",
        "aria-label": P.intl.formatToPlainString(_.default.TlpZKP, { name: c }),
        children: [
            (0, a.jsx)("div", {
                className: aG.sy,
                children: (0, a.jsxs)("div", {
                    className: aG.HI,
                    children: [
                        (0, a.jsx)(aU, { status: l.status }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${aG.PY} ${aV[f]}`,
                            children: az(f),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: aG.kc,
                            children: c,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: aG.l5,
                            children: null == l.durationMs ? P.intl.string(_.default.HpKDyl) : a$(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aG.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, a.jsxs)(aK, {
                      title: P.intl.string(_.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, a.jsx)(aX, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, a.jsx)(aZ, { entries: d.rich.args })
                              : null,
                          (0, a.jsx)(aJ, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, a.jsxs)(aK, {
                      title: P.intl.string(_.default.KXrf5F),
                      children: [
                          (0, a.jsx)(aW, {
                              label: P.intl.string(_.default["2Aii2k"]),
                              value: P.intl.formatToPlainString(_.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, a.jsx)(aW, {
                                    label: P.intl.string(_.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, a.jsx)(aH, {
                                    label: P.intl.string(_.default["UV2R1/"]),
                                    value: (0, a.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: P.intl.string(_.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, a.jsx)(aZ, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, a.jsxs)(aK, {
                      title: P.intl.string(_.default["W+4BVk"]),
                      children: [
                          (0, a.jsxs)(aY, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, a.jsx)(aW, {
                                            label: P.intl.string(_.default.Ran4BY),
                                            value: P.intl.formatToPlainString(_.default["PYO+Jv"], {
                                                tokens: aq(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, a.jsx)(aW, {
                                            label: P.intl.string(_.default.vPIcyv),
                                            value: P.intl.formatToPlainString(_.default.Qy2iTq, {
                                                system: aq(l.systemTokens),
                                                tools: aq(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: aq(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, a.jsx)(aW, {
                                            label: P.intl.string(_.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, a.jsx)(aW, {
                                            label: P.intl.string(_.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, a.jsx)(aW, {
                                            label: P.intl.string(_.default.VyAl6j),
                                            value: P.intl.formatToPlainString(_.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, a.jsx)(aW, {
                                            label: P.intl.string(_.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: aG.E7,
                              children: P.intl.string(_.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: aG.E7,
                      children: P.intl.string(_.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, a.jsx)(aQ, {
                      title: P.intl.string(_.default.T7SFyZ),
                      children: (0, a.jsxs)(aY, {
                          children: [
                              null == s
                                  ? null
                                  : (0, a.jsx)(aH, {
                                        label: P.intl.string(_.default.NnBqcd),
                                        value: (0, a.jsx)(eC.D, {
                                            tag: "div",
                                            className: aG.mi,
                                            onClick: () => i(s.id),
                                            children: (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === s.kind ? s.model : s.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, a.jsx)(aW, {
                                        label: P.intl.string(_.default.fI6mzD),
                                        value: P.intl.formatToPlainString(_.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, a.jsx)(aW, { label: P.intl.string(_.default.I7cJP0), value: l.turnId }),
                              (0, a.jsx)(aW, { label: P.intl.string(_.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, a.jsx)(aW, { label: P.intl.string(_.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, a.jsx)(aW, { label: P.intl.string(_.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: aG.Hm,
                                                children: P.intl.string(_.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, a.jsx)(
                                                    aW,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? P.intl.formatToPlainString(_.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : P.intl.formatToPlainString(_.default["/L6GFe"], {
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
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aG.E7,
                children: P.intl.string(_.default.khAjR0),
            }),
        ],
    });
}
let a1 = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function a2(e) {
    let { entries: t } = e,
        l = r.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = aR(n);
                        (t[e] += n.durationMs ?? 0), (l[e] += 1);
                    }
                    return aL.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, a.jsxs)("div", {
        className: aG.M0,
        children: [
            (0, a.jsx)("div", {
                className: aG.pZ,
                "aria-hidden": !0,
                children:
                    0 === n
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, a.jsx)(
                                        "div",
                                        {
                                            className: `${aG.dL} ${a1[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, a.jsx)("div", {
                className: aG.z4,
                role: "group",
                "aria-label": P.intl.string(_.default.UZ1OlR),
                children: aL.map((e) => {
                    let t = l.find((t) => t.category === e),
                        r = t?.ms ?? 0,
                        s = t?.calls ?? 0,
                        i = 0 === n ? 0 : Math.round((r / n) * 100);
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: aG.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${aG.A9} ${a1[e]}`, "aria-hidden": !0 }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: az(e) }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: P.intl.formatToPlainString(_.default.UffawN, { percent: i }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: P.intl.formatToPlainString(_.default.w8vPbe, { count: s }),
                                }),
                                0 === r
                                    ? null
                                    : (0, a.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: a$(r),
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
let a7 = { model: aG.WI, subagent: aG.uM, context: aG.eH, tool: aG.pw, delegated: aG.C8 };
function a6(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: r, onKeyDown: s, nested: i } = e,
        o = aR(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? P.intl.formatToPlainString(_.default["PYO+Jv"], { tokens: aq(t.promptTokens) })
                : null != t.durationMs
                  ? a$(t.durationMs)
                  : null;
    return (0, a.jsxs)(eC.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${aG.nM} ${i ? aG.A5 : ""} ${"error" === t.status ? aG.Cr : ""} ${l ? aG.CZ : ""}`,
        onKeyDown: s,
        onClick: () => r(t.id),
        children: [
            (0, a.jsxs)("div", {
                className: aG.sU,
                children: [
                    (0, a.jsx)(aU, { status: t.status }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${aG.PY} ${a7[o]}`,
                        children: az(o),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: aG.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: aG.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aG.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aG.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function a5(e) {
    var t;
    let { projectId: l, query: n } = e,
        s = (0, N.yK)([nH.Ay], () => nH.Ay.getTrace(l), [l]),
        i = (0, N.bG)([nH.Ay], () => nH.Ay.getHistoryState(l, "trace"));
    r.useEffect(() => aP, [l]);
    let [o, u] = r.useState(null),
        [d, c] = r.useState(40),
        [m, f] = r.useState(!1),
        h = r.useRef(null),
        g = r.useRef(null),
        x = r.useRef(null),
        p = r.useRef(null),
        j = r.useId(),
        b = r.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = r.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = r.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, tD.clamp)((e / t) * 100, 25, 75);
        }, []),
        A = r.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, tD.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, nS.A)({
            resizableDomNodeRef: g,
            orientation: nS.R.VERTICAL_TOP,
            getClampedValue: A,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => f(!0),
            onElementResizeEnd: () => f(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        S = r.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), w(e));
            },
            [w],
        ),
        C = r.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, tD.clamp)(e + t, 25, 75)));
        }, []),
        E = r.useCallback(() => {
            u(null), b(o);
        }, [o, b]),
        I = r.useMemo(() => aD(s, n), [s, n]),
        T = r.useMemo(
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
                })(s)
                    .map((e, t) => ({ ...e, index: t, entries: aD(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [s, n],
        ),
        M = aF(I, o),
        R = M?.kind === "tool" ? aF(s, M.parentId ?? null) : null,
        L = null == M ? 0 : ((t = M.id), s.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        D = I[I.length - 1];
    r.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [D, o]);
    let F = r.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(I.length - 1, t));
                u(I[l].id), document.getElementById(`trace-${I[l].id}`)?.scrollIntoView({ block: "nearest" });
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(I.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), b(o));
        },
        [I, o, b],
    );
    return 0 === s.length
        ? (0, a.jsx)("div", {
              className: aG.uP,
              ref: h,
              children: (0, a.jsx)(ad, {
                  state: i,
                  emptyTitle: P.intl.string(_.default.Iyt8OJ),
                  emptyBody: P.intl.string(_.default["8pdPx5"]),
              }),
          })
        : (0, a.jsxs)("div", {
              className: `${aG.uP} ${m ? aG.F4 : ""}`,
              ref: h,
              children: [
                  (0, a.jsxs)("div", {
                      className: aG.DK,
                      children: [
                          (0, a.jsx)(a2, { entries: s }),
                          (0, a.jsx)(au, { state: i }),
                          0 === I.length
                              ? (0, a.jsx)("div", {
                                    className: aG.Ie,
                                    children: (0, a.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: P.intl.string(_.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, a.jsxs)(eb.Ch, {
                                    ref: x,
                                    className: aG.Ns,
                                    children: [
                                        (0, a.jsx)(ac, { state: i }),
                                        (0, a.jsx)("div", {
                                            ref: p,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": P.intl.string(_.default["QATZ+A"]),
                                            className: aG.p_,
                                            children: T.map((e) => {
                                                let t = aS(e.startedAt),
                                                    l = P.intl.formatToPlainString(_.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, a.jsxs)("div", {
                                                                className: aG.mf,
                                                                children: [
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, a.jsx)(v.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: a$(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, a.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: aG.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, a.jsx)(
                                                                        a6,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
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
                  null == M
                      ? null
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": P.intl.string(_.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: aG.b1,
                                    onPointerDown: S,
                                    onKeyDown: C,
                                }),
                                (0, a.jsx)("div", {
                                    ref: g,
                                    className: aG.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, a.jsx)(a0, {
                                        projectId: l,
                                        entry: M,
                                        parent: R,
                                        childCount: L,
                                        onSelect: u,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var a3 = l(365199),
    a4 = l(402879);
function a8(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        s = (0, N.yK)([nH.Ay], () => nH.Ay.getTrace(t), [t]),
        i = r.useRef(null),
        o = r.useCallback(() => {
            let e = JSON.stringify(
                {
                    kind: "vibegrations.trace",
                    version: 1,
                    project_id: t,
                    exported_at: new Date().toISOString(),
                    note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                    entries: s,
                },
                null,
                2,
            );
            (0, a4.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [s, t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: aG.ED,
                children: (0, a.jsx)(ai.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: P.intl.string(_.default.NfncNw),
                    "aria-label": P.intl.string(_.default.NfncNw),
                }),
            }),
            (0, a.jsx)(tA.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: tA.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, a.jsx)(tw.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": P.intl.string(P.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, a.jsx)(tS.rX, {
                            children: (0, a.jsx)(tS.Dr, {
                                id: "export",
                                label: P.intl.string(_.default.A3Z3ar),
                                disabled: 0 === s.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, a.jsx)(lZ.K, {
                        ...e,
                        buttonRef: i,
                        icon: a3.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": P.intl.string(P.t["UKOtz+"]),
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
        [n, s] = r.useState("logs"),
        [i, u] = r.useState(""),
        c = (0, N.bG)([nL.A], () => nL.A.isDeveloper),
        f = (0, N.bG)([nV], () => nV.getStatus(t), [t]),
        h = (0, N.bG)([nV], () => nV.getFetchState(t), [t]);
    r.useEffect(() => {
        (0, m.R7)(t);
    }, [t]);
    let g = r.useCallback(() => (0, m.R7)(t), [t]),
        x = r.useCallback(() => {
            let e = {
                captured_at: new Date().toISOString(),
                project_id: t,
                status: nV.getStatus(t),
                last_turn_usage: nV.getLastTurnUsage(t),
                last_compaction: nV.getLastCompaction(t),
                last_compaction_decline: nV.getLastCompactionDecline(t),
                model_calls: nV.getModelCalls(t),
                logs: nH.Ay.getLogs(t),
            };
            (0, nD.C)(JSON.stringify(e, null, 2), () =>
                (0, nI.P0)((0, nT.o)(P.intl.string(_.default.sDSDiO), nM.Ck.SUCCESS)),
            );
        }, [t]),
        p = P.intl.string(_.default.KampIf);
    return (0, a.jsxs)("section", {
        className: a9.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.Ay.Icon, {
                            icon: n_.CopyIcon,
                            tooltip: P.intl.string(_.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: nP.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: a9.rf,
                children: [
                    (0, a.jsxs)(nR.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": P.intl.string(_.default.uNyR86),
                        className: a9.vR,
                        children: [
                            (0, a.jsx)(nR.V.Item, { id: "logs", children: P.intl.string(_.default["1mpzdJ"]) }),
                            (0, a.jsx)(nR.V.Item, { id: "worker", children: P.intl.string(_.default.whGHLD) }),
                            (0, a.jsx)(nR.V.Item, { id: "agent", children: P.intl.string(_.default.cK3AvL) }),
                            c
                                ? (0, a.jsx)(nR.V.Item, { id: "trace", children: P.intl.string(_.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === n
                        ? (0, a.jsx)(ag, { projectId: t })
                        : "worker" === n
                          ? (0, a.jsx)(aA, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === n && c
                            ? (0, a.jsxs)("div", {
                                  className: a9.uP,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: a9.XH,
                                          children: (0, a.jsx)(a8, { projectId: t, query: i, onQueryChange: u }),
                                      }),
                                      (0, a.jsx)(a5, { projectId: t, query: i }),
                                  ],
                              })
                            : (0, a.jsx)(aa, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rt = l(11055),
    rl = l(333007),
    rn = l(342667);
function ra(e) {
    let { projectId: t, resolveIframe: l } = e,
        n = (0, lW.o4)(t),
        s = (0, eW.useHasAnyModalOpen)(),
        [i, o] = r.useState(null);
    r.useEffect(() => {
        if (!n) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(l());
            o((t) =>
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
    }, [n, l]);
    let u = n && null != i && !s;
    return (0, rl.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: rn.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: n ? P.intl.string(_.default.dIE9zO) : "",
                }),
                u
                    ? (0, a.jsx)("div", {
                          className: rn.o,
                          style: { left: i.left, top: i.top, width: i.width, height: i.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var rr = l(314116),
    rs = l(364522),
    ri = l(406810),
    ro = l(381849),
    ru = l(977628);
function rd(e) {
    let t,
        { projectId: l, onClose: n, onRestore: s } = e,
        [i, u] = r.useState({ status: "loading" });
    return (
        r.useEffect(() => {
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
            "loading" === i.status
                ? (0, a.jsx)("div", { className: ru.E8, children: (0, a.jsx)(f.y, {}) })
                : "failed" === i.status
                  ? (0, a.jsx)("div", {
                        className: ru.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(_.default["mSJn+K"]),
                        }),
                    })
                  : 0 === i.entries.length
                    ? (0, a.jsx)("div", {
                          className: ru.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(_.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(rs.Ip, {
                          className: ru.p_,
                          children: (0, a.jsx)("div", {
                              className: ru.jO,
                              children: i.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, ro.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: ro._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: ru.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, rr.A)({
                                                  title: P.intl.string(_.default.qOUOPE),
                                                  subtitle: P.intl.string(_.default.k2JBj5),
                                                  confirmText: P.intl.string(_.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      n(), s(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: ru.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != l.relative &&
                                                  (0, a.jsx)(v.E, {
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
        (0, a.jsxs)("section", {
            className: ru.nd,
            "aria-label": P.intl.string(_.default.jAWwzi),
            children: [
                (0, a.jsxs)(d.Ay, {
                    "aria-label": P.intl.string(_.default.jAWwzi),
                    toolbar: (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n }),
                    children: [
                        (0, a.jsx)(d.Ay.ChannelIcon, { icon: ri.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(d.Ay.Title, { children: P.intl.string(_.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: ru.rf, children: t }),
            ],
        })
    );
}
var rc = l(120426),
    rm = l(873727),
    rf = l(147248),
    rh = l(418842),
    rg = l(885386),
    rx = l(940107),
    rp = l(171936),
    rv = l(796036);
function rj(e) {
    let { projectId: t, applicationId: l, surface: n, header: s, mainClassName: o, content: d, sidebar: c } = e,
        [m, f] = r.useState(null),
        h = (0, u.A)(l, n),
        g = h?.id ?? null;
    !(function (e, t) {
        let l = (0, N.bG)([nf.A], () => (0, rm.x4)(nf.A.theme)),
            n = (0, N.bG)([rf.A], () => rf.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: i,
                forcedColors: o,
                underlineLinks: u,
            } = (0, N.cf)([tR.Ay], () => ({
                reducedMotion: tR.Ay.useReducedMotion,
                fontScale: (0, rm.U0)(),
                highContrast: tR.Ay.isHighContrastModeEnabled,
                forcedColors: tR.Ay.useForcedColors,
                underlineLinks: tR.Ay.alwaysShowLinkDecorations,
            })),
            d = rg.hH.useSetting(),
            c = (0, rh.C)(),
            m = r.useRef(!1),
            f = r.useRef(!1),
            h = r.useRef(0),
            g = r.useRef(null),
            x = r.useCallback(() => {
                let n = (0, rc.F)(e, t);
                if (null == n) return;
                g.current = n;
                let r = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, rm.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: i,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rx.W)(n, "set-env", r, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, s, t, i, d, e, a, c, u]),
            p = r.useRef(x);
        r.useLayoutEffect(() => {
            p.current = x;
        });
        let v = r.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    (m.current = !1), f.current || p.current();
                }));
        }, []);
        r.useEffect(
            () => (
                (f.current = !1),
                () => {
                    f.current = !0;
                }
            ),
            [],
        ),
            r.useEffect(() => {
                v();
            }, [n, v]),
            r.useLayoutEffect(() => {
                x(), v();
            }, [v, x]),
            r.useLayoutEffect(() => {
                let l = (0, rc.F)(e, t);
                null != l && l !== g.current && v();
            }),
            r.useEffect(() => {
                function l(l) {
                    l.target === (0, rc.F)(e, t) && ((g.current = null), v());
                }
                return document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0);
            }, [t, e, v]),
            r.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]);
    })(m, g),
        r.useEffect(() => {
            if (null != t) return (0, rp.mn)(t, () => (0, rc.F)(m, g));
        }, [t, m, g]);
    let x = r.useCallback(() => (0, rc.F)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: i()(ev.Mh, o),
                children: [s, (0, a.jsx)("div", { ref: f, className: ev.fm, children: d })],
            }),
            c,
            (0, a.jsx)(ra, { projectId: t ?? null, resolveIframe: x }),
        ],
    });
}
function rb(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            surface: s,
            header: u,
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
            widgetApplicationId: S,
        } = e,
        E = r.useRef(null),
        [I, T] = r.useState(0);
    r.useLayoutEffect(() => {
        if (s.type === C.U4.MAIN) return (0, c.HV)(l), () => (0, c.HV)(null);
    }, [l, s.type]),
        r.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, rv.s)());
        }, [t]),
        r.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return l.observe(e), () => l.disconnect();
        }, []),
        r.useEffect(() => () => (0, c.Zq)(0), []);
    let M = Math.max(360, I - 320),
        R = null != N ? N.open : f,
        L = f || s.type === C.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: E,
        className: ev.LB,
        children: (0, a.jsx)(rj, {
            projectId: t,
            applicationId: l,
            surface: s,
            header: u,
            mainClassName: null == u ? void 0 : i()(ev.ez, { [ev.zt]: R }),
            content: (0, a.jsx)(ef, {
                applicationId: l,
                previewApplicationId: n,
                surface: s,
                previewReady: y,
                previewGate: k,
                availability: A,
                activeMode: w,
                widgetApplicationId: S,
            }),
            sidebar:
                null != N
                    ? (0, a.jsx)(nE, {
                          open: N.open,
                          maxWidth: M,
                          onWidthChange: c.Zq,
                          children: N.open
                              ? (0, a.jsx)(ej, { channel: N.channel, guild: N.guild, onClose: N.onClose })
                              : null,
                      })
                    : null != t && L
                      ? (0, a.jsx)(nE, {
                            open: f,
                            maxWidth: M,
                            onWidthChange: c.Zq,
                            children: (0, a.jsx)("div", {
                                className: ev.cO,
                                children: v
                                    ? (0, a.jsx)(re, { projectId: t, onClose: j ?? (() => {}) }, t)
                                    : g
                                      ? (0, a.jsx)(
                                            rd,
                                            { projectId: t, onClose: x ?? (() => {}), onRestore: p ?? (() => {}) },
                                            t,
                                        )
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(rt.A, { projectId: t }),
                                                (0, a.jsx)(d.Ay, {
                                                    "aria-label": P.intl.string(P.t["/VQax8"]),
                                                    toolbar:
                                                        null == h
                                                            ? null
                                                            : (0, a.jsx)(d.Ay.Icon, {
                                                                  icon: o.P,
                                                                  tooltip: P.intl.string(_.default.YdgE0j),
                                                                  onClick: h,
                                                              }),
                                                    children: (0, a.jsx)(d.Ay.Title, {
                                                        children: P.intl.string(P.t["/VQax8"]),
                                                    }),
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: ev.cb,
                                                    children: (0, a.jsx)(nk, { projectId: t, restoreState: b }, t),
                                                }),
                                            ],
                                        }),
                            }),
                        })
                      : null,
        }),
    });
}
