l.d(t, { A: () => aS });
var n,
    a = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
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
    A = l(317608),
    k = l(17928),
    N = l(956518),
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
        { Component: l, events: n, getDuration: i } = (0, M.c)();
    return (
        r.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function l() {
                    ((e = null), null != i()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(l));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [n, i]),
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
var F = l(328284);
function q(e) {
    let { title: t, body: l, wide: n = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: s()(F.Bf, n && F.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: F.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var D = l(963691);
function O(e) {
    let { applicationId: t, surface: l } = e,
        { frame: n, state: i } = (function (e) {
            let { applicationId: t, surface: l } = e,
                {
                    surface: n,
                    setFailed: a,
                    lifecycle: i,
                } = (function (e) {
                    let { applicationId: t, surface: l } = e,
                        n = r.useMemo(() => (0, C.VA)(t, l), [t, l]),
                        a = r.useMemo(() => l, [n]),
                        i = (0, k.bG)([b.A], () => b.A.getFrame(n), [n]),
                        s = (0, k.bG)(
                            [w.A, b.A],
                            () => w.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && b.A.getMainFrame()?.id === n,
                            [n],
                        ),
                        { data: o, isLoading: u } = (0, g.YY)(t),
                        d = (0, S.x)(o),
                        c = null != (0, N.Ay)(t),
                        [m, f] = r.useState(null),
                        h = m === n;
                    return {
                        surface: a,
                        setFailed: r.useCallback(() => f(n), [n]),
                        lifecycle: (0, C.x1)(i)
                            ? s
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: i }
                            : h
                              ? { state: "error" }
                              : i?.state === "loading"
                                ? { state: "loading", frame: i }
                                : u
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && c
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: l }),
                { state: s } = i;
            return (
                r.useEffect(() => {
                    "awaiting-launch" === s && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: n });
                        } catch {
                            a();
                        }
                    }
                }, [s, t, n, a]),
                i
            );
        })({ applicationId: t, surface: l }),
        s = (0, C.VA)(t, l);
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
                })(s),
                () => {
                    let e;
                    null != (e = b.A.getFrame(s)) &&
                        ((0, C.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        T.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === C.sV.INLINE && j.A.promoteFrame(s),
                              j.A.updateFrameLayoutMode({ frameId: s, layoutMode: C.y0.PIP }))
                            : e.intent === C.sV.MAIN && j.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case I.Launched:
            return (0, a.jsx)(A.A, { frameId: n.id, level: y.A.WithinAppContent, className: D.Z7 });
        case I.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: D.qs,
                children: (0, a.jsx)(q, {
                    title: P.intl.string(_.default["4f6Vkr"]),
                    body: P.intl.string(_.default.LJ2q1H),
                }),
            });
        case I.NoApplication:
            return (0, a.jsx)(L, { className: D.qs });
        case I.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: D.qs,
                children: (0, a.jsx)(q, {
                    title: P.intl.string(_.default.FHOJiH),
                    body: P.intl.string(_.default["1yLQoV"]),
                }),
            });
        case I.Error:
            return (0, a.jsxs)("div", {
                className: D.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(_.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: D.tj,
                        children: P.intl.string(_.default["1RCbQT"]),
                    }),
                ],
            });
        case I.AwaitingLaunch:
        case I.Loading:
            return (0, a.jsx)("div", { className: D.qs, children: (0, a.jsx)(f.y, {}) });
    }
}
var z = l(323384),
    $ = l(308528),
    G = l(334738),
    B = l(802426),
    U = l(355622),
    V = l(734057),
    H = l(531685),
    W = l(365971),
    Y = l(362417);
function Q(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: Y.f,
        children: [
            (0, a.jsx)(z.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function X() {
    return (0, a.jsx)("div", { className: Y.f, children: (0, a.jsx)(f.y, {}) });
}
function K(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: i, isLoading: s } = (0, g.YY)(n),
        o = i?.bot?.id ?? null,
        u = (0, k.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        r.useEffect(() => {
            null != t && $.A.preload(E.ME, t);
        }, [t]),
        (l = (0, k.bG)([H.A], () => H.A.isFocused())),
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
            $.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, a.jsx)(X, {})
        : null == o || m
          ? (0, a.jsx)(Q, { message: P.intl.string(_.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(X, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)(B.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
              });
}
var J = l(148853),
    Z = l(598748),
    ee = l(486610),
    et = l(531913),
    el = l(587895),
    en = l(633075),
    ea = l(946356),
    er = l(139730),
    ei = l(520082),
    es = l(287809),
    eo = l(675210),
    eu = l(71495);
function ed(e) {
    let { applicationId: t } = e,
        l = (0, k.bG)([es.default], () => es.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(ec, { applicationId: t, user: l });
}
function ec(e) {
    let { applicationId: t, user: l } = e,
        n = (0, k.bG)([el.A], () => el.A.getApplication(t)),
        i = r.useMemo(() => new en.R({ applicationId: t }), [t]),
        s = (0, et.A)(l.id, t),
        o = s.surfaceConfigs,
        u = (0, eo.yZ)({
            widgetTop: null != o[Z.m.WIDGET_TOP],
            widgetBottom: null != o[Z.m.WIDGET_BOTTOM],
            miniProfile: null != o[Z.m.MINI_PROFILE],
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
                                    children: (0, a.jsx)(ei.A, {
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
                      u.hasPopoutCard && null != n
                          ? (0, a.jsx)("div", {
                                className: eu.ql,
                                children: (0, a.jsx)(er.A, { application: n, rendererProps: s, renderText: ee.hO }),
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
            previewReady: i,
            previewGate: s,
            availability: o,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        m = (0, u.A)(t, n),
        { isLoading: p } = (0, g.YY)(t ?? void 0);
    if (
        (r.useEffect(() => {
            s?.type === "permissions" && null != m && (0, x.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(f.y, {}) });
    if (s?.type === "permissions")
        return (0, a.jsx)("div", {
            className: em.q,
            children: (0, a.jsx)(q, {
                wide: !0,
                title: P.intl.string(_.default.DYwf2n),
                body: P.intl.string(_.default.WWj3pN),
                children: (0, a.jsx)(h.$, {
                    variant: "primary",
                    size: "md",
                    text: P.intl.string(_.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!i) return (0, a.jsx)(L, { className: em.q });
    if (null == t) return null;
    if (p) return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(f.y, {}) });
    let v = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, J.z3)(d), "aria-label": (0, J.kZ)(d) } : {};
    return (0, a.jsxs)("div", {
        className: em.R,
        ...v,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(O, { applicationId: t, surface: n })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: em.q,
                          children: (0, a.jsx)(q, {
                              wide: !0,
                              title: P.intl.string(_.default.SGHO9K),
                              body: P.intl.string(_.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(ed, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, a.jsx)(K, { previewApplicationId: l }) : null,
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
        i = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n });
    return (0, a.jsxs)("div", {
        className: ev.Wx,
        children: [
            (0, a.jsx)(eg.A, { channel: t, draftType: ep.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: i,
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
    eA = l(783791),
    ek = l(717447),
    eN = l(29080),
    ew = l(46054);
function eS(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, ey.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, ey.Lf)(t),
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
var eC = l(939249),
    eE = l(478016),
    eI = l(34136);
function eT(e) {
    let { title: t, trailing: l, children: n, className: r, headerClassName: i, ...o } = e;
    return (0, a.jsxs)("section", {
        className: s()(eI.Nr, r),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: s()(eI.wx, null != l && eI.o5, i),
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
        i = r.useId(),
        o = null == n;
    return (0, a.jsxs)(eC.D, {
        className: s()(eM.nM, { [eM.f1]: o, [eM.CZ]: l }),
        onClick: o ? void 0 : () => n(t),
        "aria-label": P.intl.formatToPlainString(_.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : i,
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
                      id: i,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eP(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [i, s] = r.useState(() => new Set()),
        o = r.useCallback(
            (e) => {
                s((t) => new Set(t).add(e.id)), n?.(e);
            },
            [n],
        );
    return (0, a.jsx)(eT, {
        title: P.intl.string(_.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                e_,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eR = l(435619),
    eL = l(430392),
    eF = l(632015),
    eq = l(824757);
function eD(e) {
    let { label: t, children: l } = e;
    return (0, a.jsxs)("section", {
        className: eq.uW,
        children: [(0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), l],
    });
}
function eO(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, a.jsx)(eD, {
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
function ez(e) {
    let { isActivity: t, hasWidget: l } = e,
        n = t ? z.k : eL.RobotIcon;
    return (0, a.jsxs)("span", {
        className: eq.K2,
        children: [
            l
                ? (0, a.jsxs)("span", {
                      className: eq.L6,
                      children: [
                          (0, a.jsx)(eF.f, {
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
function e$(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(eT, {
        title: P.intl.string(_.default["60htw+"]),
        trailing: (0, a.jsx)(ez, { isActivity: !0 === t.is_activity, hasWidget: null != t.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: eq.rf,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(eD, {
                          label: P.intl.string(_.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: eq.p_,
                              children: t.changes.map((e, t) =>
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
                t.commands.length > 0
                    ? (0, a.jsx)(eD, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: eq.p_,
                              children: t.commands.map((e, t) =>
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
                (0, a.jsx)(eO, { label: P.intl.string(_.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(eO, { label: P.intl.string(_.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eG = l(192308),
    eB = l(479191);
function eU(e) {
    let { projectId: t, request: n } = e,
        i = r.useCallback(() => {
            (0, eG.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, a.jsx)(e, { ...l, projectId: t, request: n });
            });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: eB.Lo,
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
                className: eB.cS,
                children: n.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: eB.$H,
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
                className: eB.sq,
                children: (0, a.jsx)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: P.intl.string(_.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eV = l(976814),
    eH = l(973e3);
function eW(e) {
    let { projectId: t, request: l } = e,
        n = (0, k.bG)([m.Ay], () => m.Ay.getSettings(t)),
        i = (l.keys ?? []).map((e) => n?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = r.useCallback(() => {
            (0, eV.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0 });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: eH.Mk,
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
            i.length > 0
                ? (0, a.jsx)("div", {
                      className: eH.R6,
                      children: i.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: eH.K4,
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
                className: eH.p0,
                children: (0, a.jsx)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(_.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eY = l(196582);
function eQ(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function eX(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function eK(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function eJ(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function eZ(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e0(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e1(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e2(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e6(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e7(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e3(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function e4() {
    return [
        { key: "snail", Illocon: eQ, tint: "var(--illo-yellow-40)", name: e8(_.default["2l3AEQ"]) },
        { key: "goat", Illocon: eX, tint: "var(--illo-orange-40)", name: e8(_.default["+FPL+I"]) },
        { key: "frog", Illocon: eK, tint: "var(--illo-green-40)", name: e8(_.default.w4GOfR) },
        { key: "bunny", Illocon: eJ, tint: "var(--illo-pink-40)", name: e8(_.default.XmZT9M) },
        { key: "cat", Illocon: eZ, tint: "var(--illo-pink-40)", name: e8(_.default.NnydwQ) },
        { key: "caterpillar", Illocon: e0, tint: "var(--illo-green-40)", name: e8(_.default["4iXcNT"]) },
        { key: "butterfly", Illocon: e1, tint: "var(--illo-purple-40)", name: e8(_.default.DoTGt5) },
        { key: "dog", Illocon: e2, tint: "var(--illo-yellow-40)", name: e8(_.default["9zxqmP"]) },
        { key: "spider", Illocon: e6, tint: "var(--illo-orange-40)", name: e8(_.default.HF0T3L) },
        { key: "bee", Illocon: e7, tint: "var(--illo-yellow-40)", name: e8(_.default.XTzDga) },
        { key: "bot", Illocon: e3, tint: "var(--illo-purple-40)", name: e8(_.default.abtC2b) },
    ];
}
function e5(e) {
    return e4().find((t) => t.key === e);
}
function e8(e) {
    return P.intl.string(e);
}
function e9(e) {
    let t = e4(),
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
var te = l(683063),
    tt = l(705754),
    tl = l(883455),
    tn = l(13699);
function ta(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(_.default.MdXWEK);
}
function tr(e) {
    let { projectId: t, lane: l, Illocon: n, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, ey.SY)(l.steps),
        c = u
            ? null != d
                ? (0, ey.WQ)(d)
                : ta(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ta(e));
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
                                    className: tn.dO,
                                    children: l.steps.map((e) =>
                                        (0, a.jsx)(
                                            tl.A,
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
                                      className: tn.iq,
                                      children: (0, a.jsx)(tt.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(eY.A, {
        glyph: (0, a.jsx)(te.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ta(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: tn.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
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
var ti = l(140735),
    ts = l(329456);
let to = [];
function tu(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: ts.xL,
        "data-status": t,
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
        children: (0, a.jsx)("svg", {
            className: ts.L5,
            viewBox: "0 0 10.1668 10.1668",
            "aria-hidden": !0,
            focusable: "false",
            children: (0, a.jsx)("path", { d: "M1 5.52L3.92 9.17L9.17 1" }),
        }),
    });
}
function td(e) {
    let { agents: t, active: l } = e,
        n = r.useMemo(() => (l ? t : to), [l, t]),
        i = r.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        s = n.map((e) => e.key).join("\0"),
        [o, u] = r.useState(n),
        [d, c] = r.useState(s),
        [m, f] = r.useState(!1);
    d !== s && (c(s), u([...n, ...o.filter((e) => !i.has(e.key))]), 0 === n.length && f(!1));
    let h = o.some((e) => !i.has(e.key));
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
        className: ts.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: r } = e,
                    { Illocon: s } = l;
                return (0, a.jsx)(
                    te.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: r,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: ts.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: n, ariaHidden: !0 }),
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
                      className: ts.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tc(e) {
    let t,
        { todos: l, provisional: n, agents: i } = e,
        s = (function (e) {
            let t = e.join("\0"),
                [l, n] = r.useState(() => new Set(e)),
                [a, i] = r.useState(t),
                [s, o] = r.useState(() => new Set());
            return (
                a !== t && (i(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                r.useEffect(() => {
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
        })(r.useMemo(() => l.map((e) => e.id), [l])),
        o =
            ((t = (i ?? to).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            r.useMemo(() => {
                let e = new Map();
                for (let t of i ?? to) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: ts.p_,
        children: [
            l.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: ts.AS,
                        "data-status": e.status,
                        "data-arriving": s.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(tu, { status: e.status }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: ts.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: ts.Qq, children: e.text }),
                            }),
                            (0, a.jsx)(td, { agents: o.get(e.id) ?? to, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != n
                ? (0, a.jsxs)("li", {
                      className: ts.AS,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tu, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ts.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: ts.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tm(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, a.jsxs)(eT, {
              title: P.intl.string(_.default.qCRC6c),
              trailing: (0, a.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(_.default.bQvqly, { completed: i, total: s }),
              }),
              className: ts.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, a.jsx)(ti.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(_.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: ts.rf,
                      children: (0, a.jsx)(tc, { todos: t, provisional: l, agents: n }),
                  }),
              ],
          });
}
var tf = l(229775),
    th = l(165648);
function tg(e) {
    let t = e9(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? e5(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: ta(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tx(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
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
    if (s)
        return (0, a.jsx)("ol", {
            className: tn.pj,
            "data-live": !1,
            children: (0, a.jsx)(eY.A, {
                glyph: (0, a.jsx)(eN.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(_.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = n ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, ey.lt)(l) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !j) return null;
    let b = x.tasks,
        y = e9(b.map((e) => e.taskId)),
        A = !f && (n || b.some((e) => "running" === e.task.status)),
        k = tg(b);
    return (0, a.jsx)(eY.l.Provider, {
        value: b.length,
        children: (0, a.jsxs)("ol", {
            className: tn.pj,
            "data-live": A,
            children: [
                (0, a.jsx)(ek.Ay, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: n,
                    closed: f,
                    durationMs: p,
                    connectsDown: b.length > 0,
                }),
                b.map((e, l) => {
                    let n = null != e.task.helperMark ? e5(e.task.helperMark) : void 0,
                        r = n ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, a.jsx)(
                              tr,
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
                          className: tn.YO,
                          children: (0, a.jsx)(tm, { todos: v, provisional: u, agents: k }),
                      })
                    : null,
            ],
        }),
    });
}
function tp(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: i,
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
            () => eS({ steps: l, content: n, hasProposal: null != i, hasAttachments: null != u && u.length > 0 }),
            [l, n, i, u],
        ),
        y = null == u ? null : (0, a.jsx)(eR.A, { projectId: t, attachments: u }),
        A = null == y ? null : (0, a.jsx)("div", { className: tn.MT, children: y }),
        k = h
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(_.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: tn.ue,
        children: [
            x.length > 0 && !g
                ? (0, a.jsx)("ol", {
                      className: tn.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: tn.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: th.PT,
                                              children: ew.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === p ? A : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != i
                ? (0, a.jsx)(e$, { proposal: i })
                : j
                  ? (0, a.jsxs)("div", {
                        className: s()(tn.ky, tf.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: s()(th.PT, tn.cW),
                                children: ew.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? A : null,
                            k,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: s()(tn.ky, tf.XR),
                      children: (0, a.jsx)(eU, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: s()(tn.ky, tf.XR),
                      children: (0, a.jsx)(eW, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === b ? y : null,
            null != o && o.length > 0 ? (0, a.jsx)(eP, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            j ? null : k,
        ],
    });
}
l(323874), l(14289), l(35956);
var tv = l(475358),
    tj = l(922016),
    tb = l(980707),
    ty = l(477782),
    tA = l(81369),
    tk = l(717400),
    tN = l(663341),
    tw = l(826745),
    tS = l(866665),
    tC = l(783977),
    tE = l(559647),
    tI = l(285796),
    tT = l(775602),
    tM = l(673724),
    t_ = l(435558),
    tP = l.n(t_),
    tR = l(506774),
    tL = l(228366);
let tF = "VibegrationsComposerDrafts";
function tq() {
    return tR.w.get(tF) ?? {};
}
let tD = new Map(),
    tO = tP().throttle(() => {
        if (0 === tD.size) return;
        let e = tq();
        for (let [t, l] of tD) "" === l ? delete e[t] : (e[t] = l);
        tD.clear(), tR.w.set(tF, e);
    }, 1e3);
class tz extends k.Ay.Store {
    getDraft(e) {
        let t = tD.get(e);
        return null != t ? t : (tq()[e] ?? "");
    }
}
let t$ = new tz(tL.h, {
    LOGOUT: function () {
        return tD.clear(), tO.cancel(), tR.w.remove(tF), !1;
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return tD.set(t, l), tO(), "" === l && tO.flush(), !1;
    },
});
var tG = l(590380),
    tB = l(311656),
    tU = l(789438);
let tV = tM.Is;
function tH(e) {
    let { text: t } = e,
        [l, n] = r.useState(""),
        [i, s] = r.useState("enterStart"),
        [o, u] = r.useState("");
    t !== o && (u(t), t !== l && ("" === l ? (n(t), s("enterStart")) : "idle" === i && s("exit"))),
        r.useEffect(() => {
            if ("exit" === i) {
                let e = window.setTimeout(() => {
                    n(t), s("enterStart");
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
    let d = "exit" === i ? tU.t0 : "enterStart" === i ? tU.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tU.xM} ${tU.nT} ${d}`, children: l }),
            (0, a.jsx)(tv.e, { shortcut: "tab", className: `${tU.xT} ${tU.nT} ${d}`, keyClassName: tU.IS }),
        ],
    });
}
let tW = 0;
function tY(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: n,
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
            modelSettings: p,
            onModelSettingsChange: v,
        } = e,
        [j, b] = r.useState(() => t$.getDraft(t)),
        y = r.useCallback(
            (e) => {
                (0, c.I$)(t, e), b(e);
            },
            [t],
        ),
        [A, N] = r.useState(t);
    A !== t && (N(t), b(t$.getDraft(t)));
    let w = (0, k.bG)([tT.Ay], () => tT.Ay.isSubmitButtonEnabled),
        [S, C] = r.useState([]),
        [E, I] = r.useState(!1),
        [T, M] = r.useState(!1);
    r.useEffect(() => {
        i || M(!1);
    }, [i]);
    let R = r.useRef(null),
        L = r.useRef([]),
        F = r.useRef(new Set()),
        q = r.useRef(m);
    q.current = m;
    let D = r.useCallback((e) => {
            (L.current = e), C(e);
        }, []),
        O = r.useCallback((e) => {
            q.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    r.useEffect(() => {
        let e = F.current;
        return () => {
            for (let t of L.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && O(t.ref);
        };
    }, [O]);
    let z = r.useCallback(
            (e, t) => {
                if (F.current.has(e)) return;
                let l = L.current;
                l.some((t) => t.localId === e) && D(l.map((l) => (l.localId === e ? { ...l, ...t } : l)));
            },
            [D],
        ),
        $ = r.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...L.current],
                    l = [];
                for (let n of e) {
                    let e = "" === n.type ? "application/octet-stream" : n.type,
                        a = ++tW,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tV) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: P.intl.formatToPlainString(_.default.DlX57a, { count: tV }),
                        });
                        continue;
                    }
                    if (!(0, tM.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: P.intl.formatToPlainString(_.default.cI7t94, {
                                size: (0, tM.ZJ)((0, tM.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = tM.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    t.push({ ...r, previewUrl: i }), l.push({ file: n, localId: a });
                }
                for (let { file: e, localId: n } of (D(t), l))
                    d(e).then(
                        (e) => {
                            F.current.has(n) ? O(e) : z(n, { status: "ready", ref: e });
                        },
                        (e) => {
                            F.current.has(n) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                z(n, { status: "error", errorText: P.intl.string(_.default.GwEHvn) }));
                        },
                    );
            },
            [O, d, z, D],
        ),
        G = r.useCallback(
            (e) => {
                let t = L.current,
                    l = t.find((t) => t.localId === e);
                F.current.add(e),
                    l?.previewUrl != null && URL.revokeObjectURL(l.previewUrl),
                    l?.ref != null && O(l.ref),
                    D(t.filter((t) => t.localId !== e));
            },
            [O, D],
        ),
        B = S.every((e) => "ready" === e.status),
        U = "" !== j.trim() || S.length > 0,
        V = l && U && B,
        H = r.useCallback(() => {
            if (!V) return;
            let e = L.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (o(j, e.length > 0 ? e : void 0), L.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            y(""), D([]);
        }, [V, j, o, D, y]),
        W = r.useCallback(
            (e) => {
                e.preventDefault(), H();
            },
            [H],
        ),
        Y = r.useCallback(() => {
            null == u || T || (M(!0), u());
        }, [u, T]),
        Q = null == g || "" !== j || !l || n || s ? null : g,
        X = r.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !T) {
                    e.preventDefault(), e.stopPropagation(), Y();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != Q) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), y(Q);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), H());
            },
            [H, f, i, u, T, Y, Q, y],
        ),
        K = r.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), $(t));
            },
            [l, $],
        ),
        J = r.useCallback(
            (e) => {
                e.preventDefault(), I(!1), l && $(Array.from(e.dataTransfer.files));
            },
            [l, $],
        ),
        Z = r.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), I(!0));
        }, []),
        ee = r.useCallback(
            (e) => {
                $(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [$],
        ),
        et = r.useRef(null),
        el = r.useRef(null),
        [en, ea] = r.useState(0),
        [er, ei] = r.useState(!1);
    r.useEffect(() => {
        if (0 === j.length) return void ei(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = tK(e);
            null != t && ea(t);
        }
        ei(!0);
        let t = setTimeout(() => ei(!1), tQ);
        return () => clearTimeout(t);
    }, [j]);
    let es = r.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        eo = er ? ` ${tU.EB}` : "",
        eu = null != Q;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: J,
        onDragOver: Z,
        onDragLeave: () => I(!1),
        className: E ? `${tU.DA} ${tU.pV}` : tU.DA,
        children: [
            S.length > 0
                ? (0, a.jsx)("div", {
                      className: tU.lN,
                      children: S.map((e) => (0, a.jsx)(tJ, { draft: e, onRemove: G }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${tU.wg} ${tU.LP}${eo}`, style: es, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tU.wg} ${tU.L3}${eo}`, style: es, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tU.VA,
                ref: et,
                children: [
                    (0, a.jsx)("input", {
                        ref: R,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: tU.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tj.Y, {
                        targetElementRef: el,
                        position: "top",
                        align: "left",
                        animation: tj.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tb.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(ty.rX, {
                                    children: [
                                        (0, a.jsx)(ty.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: tA.H,
                                            leadingAccessory: { type: "icon", icon: tA.H },
                                            action: () => R.current?.click(),
                                        }),
                                        null != h
                                            ? (0, a.jsx)(ty.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(_.default.edKajy),
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
                            let { isShown: n } = t;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: el,
                                type: "button",
                                className: `${tU.Y0} ${tU.nu}`,
                                disabled: !l,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, a.jsx)(tN.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tU.Qu,
                                }),
                            });
                        },
                    }),
                    null == Q
                        ? null
                        : (0, a.jsx)("div", {
                              className: tU.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tH, { text: Q }),
                          }),
                    (0, a.jsx)(tw.y, {
                        value: j,
                        onChange: (e) => y(e.currentTarget.value),
                        onKeyDown: X,
                        onPaste: K,
                        placeholder: s
                            ? P.intl.string(_.default.pGFXZ0)
                            : n
                              ? P.intl.string(_.default.JeM47J)
                              : l
                                ? eu
                                    ? ""
                                    : x
                                      ? P.intl.string(_.default.M3ovXY)
                                      : P.intl.string(i ? _.default["67PpcP"] : _.default.ahRdoJ)
                                : P.intl.string(_.default.nm4w9P),
                        disabled: !l,
                        "aria-label": P.intl.string(_.default.OPr66w),
                        rows: 1,
                        className: tU.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: tU.Sz,
                        children:
                            i && null != u
                                ? (0, a.jsx)(tS.m, {
                                      text: P.intl.string(_.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${tU.Y0} ${tU.$E}`,
                                          disabled: T,
                                          onClick: Y,
                                          "aria-label": P.intl.string(_.default.KdgI4k),
                                          children: (0, a.jsx)(eN.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != p && null != v
                                  ? (0, a.jsx)(tB.A, {
                                        settings: p.settings,
                                        choices: p.choices,
                                        disabled: !l,
                                        onChange: v,
                                        className: `${tU.Y0} ${tU.$E}`,
                                        icon: (0, a.jsx)(tC.R, {
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
                              className: tU.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tU.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tU.rt,
                                      disabled: !V,
                                      "aria-label": P.intl.string(_.default["22GHMt"]),
                                      children: (0, a.jsx)(tE.SendMessageIcon, {
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
let tQ = 1500,
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
function tK(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = tK.mirror;
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
                (tK.mirror = t),
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
    return (0, a.jsxs)(tG.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: tU.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tU.o1,
                onClick: () => l(t.localId),
                "aria-label": P.intl.string(_.default["3HWvgk"]),
                children: (0, a.jsx)(tI.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
tK.mirror = null;
var tZ = l(320095),
    t0 = l(963852),
    t1 = l(521981),
    t2 = l(763754),
    t6 = l(491182),
    t7 = l(438729),
    t3 = l(622868),
    t4 = l(308334),
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
let ld = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lc(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lm(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lf(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lm(e, t),
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
    if (lc(a) && lc(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lc(lm(e, n)); ) l++, (n -= 2);
        return l % 2 == 1;
    }
    return !1;
}
function lh(e, t) {
    let { streaming: l } = t,
        n = (0, k.bG)([tT.Ay], () => tT.Ay.useReducedMotion),
        a = l && !n,
        [i, s] = r.useState(() => ({ target: e, length: e.length })),
        o = i;
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
                      for (; r > 0 && lf(t, r); ) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== i && s(o);
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
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && ld.has(e.charAt(n - 1)); ) n--;
                                    return ld.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lf(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
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
                s({ target: e, length: e.length });
            }
        }, [u]);
    let f = Math.min(o.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: a && f < e.length };
}
var lg = l(441136);
let lx = (0, ln.createChannelRecord)({ id: "vibegrations-builder", type: E.rbe.DM }),
    lp = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lv(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: s()(lg.Yq, { [lg.x1]: t }), children: e });
}
function lj(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lb(e, t, l) {
    let { content: n } = (0, t8.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = r.useMemo(() => ({ message: e, channel: lx, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, a.jsx)(t7.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, t9.A)(i, n);
}
function ly(e) {
    let [t, l] = r.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = r.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = r.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, t5.m)(e, lx, t.usernameProfile, n),
        o = (0, t5.Jo)(t.avatarProfile, n),
        u = (0, k.bG)([lr.A], () => lr.A.getGuildId()),
        d = (0, k.bG)([es.default], () => es.default.getCurrentUser()),
        c = r.useCallback(
            (t) => {
                let l = es.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(ll.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
    let { baseMessage: t, referenced: l, onJumpToReplied: n } = e,
        i = r.useMemo(
            () => ("" !== l.content ? (0, t1.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [l],
        ),
        { isReplyAuthorBlocked: s, isReplyAuthorIgnored: o } = (0, k.cf)(
            [la.A],
            () => ({
                isReplyAuthorBlocked: la.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: la.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        u = (0, t2.X4)(l),
        d = (0, t2.X4)(t),
        c = ly(l);
    return (0, a.jsx)(t4.A, {
        repliedAuthor: u,
        baseAuthor: d,
        baseMessage: t,
        channel: lx,
        referencedMessage: { state: lt.a.LOADED, message: l },
        content: i,
        compact: !1,
        isReplyAuthorBlocked: s,
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
function lk(e) {
    let { message: t, author: l } = e,
        n = ly(t);
    return (0, a.jsx)(t3.Ay, {
        message: t,
        channel: lx,
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
function lN(e) {
    let { content: t, createdAt: l, userId: n, accessories: i, groupStart: s } = e;
    r.useEffect(
        () =>
            (function (e) {
                if (null == e || ls.has(e) || null != es.default.getUser(e)) return;
                let t = lo.get(e) ?? 0;
                t >= 3 ||
                    (lo.set(e, t + 1),
                    ls.add(e),
                    li
                        .getUser(e)
                        .finally(() => ls.delete(e))
                        .catch(() => {}));
            })(n),
        [n],
    );
    let o = (0, k.bG)(
            [es.default],
            () => lu(n, null != n ? es.default.getUser(n) : null, es.default.getCurrentUser()),
            [n],
        ),
        u = r.useMemo(() => (0, t2.FT)(o, null), [o]),
        d = r.useMemo(() => {
            if (null == o) return null;
            let e = (0, t0.Ay)({ channelId: lx.id, content: t, author: o });
            return (0, tZ.rh)({ ...e, timestamp: lj(l, e.timestamp), state: E.cmJ.SENT });
        }, [t, o, l]);
    return null == d ? null : (0, a.jsx)(lw, { message: d, author: u, content: t, accessories: i, groupStart: s });
}
function lw(e) {
    let { message: t, author: l, content: n, accessories: r, groupStart: i = !0 } = e,
        s = lb(t, n);
    return (0, a.jsx)(t6.A, {
        className: lg.yE,
        author: l,
        childrenHeader: i ? (0, a.jsx)(lk, { message: t, author: l }) : void 0,
        childrenMessageContent: s,
        childrenAccessories: lv(r, "" !== n),
        disableInteraction: !0,
    });
}
function lS(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lh(t, { streaming: u }),
        m = r.useMemo(() => (0, t2.FT)(null, null), []),
        f = r.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, k.bG)(
            [es.default],
            () => lu(h, null != h ? es.default.getUser(h) : null, es.default.getCurrentUser()),
            [h],
        ),
        x = r.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, t0.Ay)({ channelId: lx.id, content: i.content, author: g });
            return (0, tZ.rh)({ ...e, id: i.id, timestamp: lj(i.createdAt, e.timestamp), state: E.cmJ.SENT });
        }, [i, g]),
        p = r.useMemo(() => (null == i ? void 0 : { channel_id: lx.id, message_id: i.id }), [i]),
        v = r.useMemo(() => {
            let e = (0, t0.Ay)({ channelId: lx.id, content: d, author: lp });
            return (0, tZ.rh)({
                ...e,
                timestamp: lj(l, e.timestamp),
                state: E.cmJ.SENT,
                ...(null != p ? { type: E.lAJ.REPLY, message_reference: p } : {}),
            });
        }, [d, l, p]),
        j = lb(v, d, lg.OS);
    return (0, a.jsxs)("div", {
        className: lg.$4,
        "data-replying": null != x ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, a.jsx)(t6.A, {
                className: lg.yE,
                author: f,
                childrenRepliedMessage:
                    null == x ? null : (0, a.jsx)(lA, { baseMessage: v, referenced: x, onJumpToReplied: s }),
                childrenHeader: (0, le.A)({ message: v, channel: lx, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lv(n, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: lg.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(z.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var lC = l(375068);
function lE(e) {
    let { projectId: t, messages: l, ref: n, onPickIdea: i } = e,
        s = r.useRef(null),
        o = r.useCallback(
            (e) => {
                (s.current = e), "function" == typeof n ? n(e) : null != n && (n.current = e);
            },
            [n],
        ),
        [u, d] = r.useState(null),
        c = r.useRef(0);
    r.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = r.useCallback((e) => {
            let t = s.current?.querySelector(`[data-vibegrations-message="${e}"]`);
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
                        let e = !(0, eA.BL)(t),
                            n = eS({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, ey.C6)(t.steps, { turnActive: e }),
                            { lastWork: i, open: s } = (0, ey.CT)(r, { turnActive: e }),
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
        ? (0, a.jsx)("ol", {
              ref: n,
              className: lC.x7,
              children: (0, a.jsx)(lI, {
                  role: "assistant",
                  children: (0, a.jsx)(lS, { content: P.intl.string(_.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: o,
              className: lC.x7,
              children: f.map((e) => {
                  let n = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != n.attachments && n.attachments.length > 0 ? n.attachments : null;
                          return (0, a.jsx)(
                              lI,
                              {
                                  role: "user",
                                  anchorId: n.id,
                                  highlighted: u === n.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lN, {
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
                              lI,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lS, {
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
                              lI,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tx, {
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
                              lI,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tx, { projectId: t, interrupted: !0, steps: n.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              lI,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tx, {
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
                              lI,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lS, {
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
                                      accessories: (0, a.jsx)(tp, {
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
function lI(e) {
    let { role: t, children: l, anchorId: n, highlighted: r = !1, continuation: i = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": n,
        className: s()(lC.xk, { [lC.Qo]: r, [lC.q3]: i }),
        children: l,
    });
}
var lT = l(625903),
    lM = l(964675);
function l_(e) {
    let { projectId: t } = e,
        l = (0, k.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        n = r.useCallback(() => {
            (0, eV.A)(t);
        }, [t]);
    return l
        ? (0, a.jsx)(eC.D, {
              className: lM.h,
              "aria-label": P.intl.string(_.default.gTMvzD),
              onClick: n,
              children: (0, a.jsx)(lT.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lP = l(863610),
    lR = l(495557);
function lL(e) {
    let { activity: t, id: l } = e,
        { text: n, revealing: i } = lh(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [n]),
        (0, a.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lR.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(eb.Ch, {
                ref: o,
                className: lR.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: s()(th.PT, lR.bb),
                    "data-vibegrations-revealing": i ? "true" : void 0,
                    children: ew.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lF = l(921461);
function lq(e) {
    let { activity: t, compacting: l = !1, restoring: n = !1, controlling: i = !1 } = e,
        o = r.useRef(null),
        u = r.useId(),
        [d, c] = r.useState(null),
        m = null != t && "end" !== t.phase,
        f = i
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
    return (0, a.jsx)(tj.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: x,
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(lL, { id: u, activity: t }),
        children: () =>
            (0, a.jsxs)(eC.D, {
                innerRef: o,
                className: s()(lF.hF, h && lF.Xd),
                "aria-label": P.intl.string(n ? _.default.pGFXZ0 : _.default.SzdX35),
                "aria-expanded": x,
                "aria-describedby": x ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)("span", {
                        className: lF.bl,
                        children: (0, a.jsx)(lP.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!i || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: P.intl.string(f),
                    }),
                ],
            }),
    });
}
var lD = l(885574),
    lO = l(280894);
function lz(e) {
    return e.toLocaleString();
}
function l$(e) {
    let { label: t, usage: l } = e;
    return (0, a.jsxs)("div", {
        className: lO.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: lO.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lz((0, tM.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lz(l.input_tokens),
                    " in \xb7 ",
                    lz(l.output_tokens),
                    " out \xb7 ",
                    lz(l.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    lz(l.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function lG(e) {
    let { project: t } = e,
        l = (0, tM.wU)(t.compaction),
        n = (0, tM.wV)((0, tM.wV)(t.orchestrator, t.codegen), l);
    return (0, a.jsxs)("div", {
        className: lO.si,
        role: "dialog",
        "aria-label": P.intl.string(_.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: lO.Q$,
                children: (0, a.jsxs)("div", {
                    className: lO.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lz((0, tM.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(l$, { label: P.intl.string(_.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(l$, { label: P.intl.string(_.default.R9aduM), usage: t.codegen }),
            (0, a.jsx)(l$, { label: P.intl.string(_.default.Tj6b30), usage: l }),
            (0, a.jsxs)("div", {
                className: lO.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(_.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tM.sj)(n) ? "\u2014" : `${Math.round(100 * (0, tM.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function lB(e) {
    let { project: t } = e,
        l = r.useRef(null);
    return (0, a.jsx)(tj.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(lG, { project: t }),
        children: (e) =>
            (0, a.jsx)(eC.D, {
                innerRef: l,
                className: lO.Y$,
                "aria-label": P.intl.string(_.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(lD.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lU = l(985451),
    lV = l(258216);
function lH(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(_.default.W7oyuf);
        case "failed":
            return P.intl.string(_.default.eE60xI);
        case "closed":
            return P.intl.string(_.default["yBmS+I"]);
    }
}
function lW(e) {
    let {
            projectId: t,
            thinking: l,
            restoring: n = !1,
            thinkingActivity: r,
            compacting: i,
            projectUsage: s,
            connState: o,
        } = e,
        u = (0, lU.o4)(t);
    return (0, a.jsxs)("div", {
        className: lV.jf,
        children: [
            (0, a.jsx)("div", {
                className: lV.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    l || n || u ? (0, a.jsx)(lq, { activity: r, compacting: i, restoring: n, controlling: u }) : null,
            }),
            (0, a.jsx)(l_, { projectId: t }),
            null == s
                ? null
                : (0, a.jsxs)("span", {
                      className: lV.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(_.default["7SZZvj"], {
                                  runes: (0, tM.a7)(s.cost_usd),
                                  turns: s.turns,
                              }),
                              children: P.intl.formatToPlainString(_.default["4PFO2p"], {
                                  runes: (0, tM.a7)(s.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(lB, { project: s }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(_.default.eDDdhB, { status: lH(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: lV.XF,
                      children: lH(o),
                  }),
        ],
    });
}
var lY = l(22231),
    lQ = l(408278),
    lX = l(900797),
    lK = l(847374),
    lJ = l(477155),
    lZ = l(935286),
    l0 = l(856795),
    l1 = l(424110);
function l2(e) {
    let { option: t, position: l, disabled: n, onPick: i, reachable: o = !0 } = e,
        u = r.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eC.D, {
        className: s()(l1.uK, { [l1.ue]: n }),
        onClick: n ? void 0 : () => i(t),
        "aria-label": P.intl.formatToPlainString(d ? _.default.aL1BKQ : _.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": n,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: l1.Gy, "aria-hidden": !0, children: l }),
            (0, a.jsxs)("span", {
                className: l1.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l1.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l1.ed,
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
                      className: l1.rM,
                      children: P.intl.string(_.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function l6(e) {
    let { question: t, draft: l, direction: n, disabled: r } = e,
        i = "" === l.trim() ? null : l;
    return (0, a.jsxs)("div", {
        className: s()(l1.Ge, l1.x1),
        "data-direction": n,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, a.jsx)(l2, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, a.jsxs)("div", {
                className: l1.Xy,
                children: [
                    (0, a.jsx)("span", {
                        className: l1.Gy,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(lY.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == i ? null : (0, a.jsx)("span", { className: s()(l1.Pu, l1.es), children: i }),
                ],
            }),
        ],
    });
}
function l7(e) {
    let { clarification: t, onSubmit: l, onDismiss: n } = e,
        [i, u] = r.useState({}),
        [d, c] = r.useState({}),
        [m, f] = r.useState(0),
        [h, g] = r.useState(null),
        [x, p] = r.useState(null),
        [j, b] = r.useState(null),
        [y, A] = r.useState(!1),
        k = r.useRef(null),
        [N, w] = r.useState(null),
        S = r.useRef(null),
        C = r.useRef(0),
        E = null == l,
        I = t.questions.length,
        T = Math.min(m, I - 1),
        M = t.questions[T],
        [R, L] = r.useState({ id: M.id, expanded: !1 }),
        F = R.id === M.id && R.expanded,
        [q, D] = r.useState(null),
        O = d[M.id] ?? "",
        { text: z, phase: $ } = (0, l0.Q)(M.question),
        G = z === M.question,
        B = G && q?.id === M.id && q.truncated;
    r.useLayoutEffect(() => {
        if (null == N || F || !G) return;
        function e() {
            if (null == N) return;
            let e = N.scrollHeight > N.clientHeight + 1;
            D((t) => (t?.id === M.id && t.truncated === e ? t : { id: M.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return t.observe(N), () => t.disconnect();
    }, [G, N, M.id, F]);
    let U = P.intl.string(F ? P.t.iTcuma : P.t.dcl9MQ),
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
                g({ direction: t, moves: l }), p({ question: M, draft: O, direction: t, moves: l }), A(!0), f(e);
            },
            [O, M],
        ),
        W = r.useCallback(() => {
            let e = k.current,
                t = S.current;
            null != e && null != t && b({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    r.useLayoutEffect(() => {
        let e = k.current,
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
            t = setTimeout(() => A(!1), 500);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [Y]);
    let Q = r.useCallback(
            (e) => {
                if (E) return;
                let l = { ...i, [M.id]: e };
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
            [i, t, E, T, M.id, V, H],
        ),
        X = r.useCallback(() => {
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
        K = T > 0 && !E,
        J = r.useCallback(() => {
            let e = O.trim();
            "" !== e && Q({ kind: "custom", text: e });
        }, [O, Q]),
        [Z, ee] = r.useState(!1),
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
        className: s()(l1.$O, { [l1.fI]: Z && !et, [l1.Oh]: et }),
        role: "dialog",
        "aria-label": M.question,
        "data-vibegrations-clarification": t.id,
        "data-state": E ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": T,
        children: [
            (0, a.jsxs)("div", {
                className: l1.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: k,
                        className: l1.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: w,
                                tag: "span",
                                id: `${M.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: s()(l1.TK, l1.R_, { [l1.TB]: "exit" === $, [l1.JU]: "enter" === $ }),
                                children: z,
                            }),
                            B || F
                                ? (0, a.jsx)("div", {
                                      className: l1.Q7,
                                      children: (0, a.jsx)(tS.m, {
                                          text: U,
                                          children: (0, a.jsx)(lQ.K, {
                                              icon: F ? lX.t : lK.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: M.id, expanded: !F }),
                                              "aria-label": U,
                                              "aria-controls": `${M.id}-label`,
                                              "aria-expanded": F,
                                          }),
                                      }),
                                  })
                                : null,
                            null == n
                                ? null
                                : (0, a.jsx)(eC.D, {
                                      className: s()(l1.gb, l1.Q7),
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
                        className: l1.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, a.jsxs)("div", {
                            className: l1.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: S,
                                    className: l1.Ge,
                                    role: "group",
                                    "aria-labelledby": `${M.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        M.options.map((e, t) =>
                                            (0, a.jsx)(
                                                l2,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: E,
                                                    onPick: (e) => Q({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, a.jsxs)("div", {
                                            className: l1.Xy,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: l1.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, a.jsx)(lY.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, a.jsx)(tw.y, {
                                                    value: O,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [M.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), J());
                                                    },
                                                    placeholder: P.intl.string(_.default.qifsdL),
                                                    "aria-label": P.intl.formatToPlainString(_.default.XHESTL, {
                                                        question: M.question,
                                                    }),
                                                    disabled: E,
                                                    rows: 1,
                                                    className: l1.Pu,
                                                    "data-vibegrations-clarification-other": M.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, a.jsx)(
                                          l6,
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
                      className: l1.qr,
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
                              className: l1.Np,
                              children: [
                                  (0, a.jsx)(eC.D, {
                                      className: s()(l1.gb, { [l1.yI]: !K }),
                                      onClick: K ? X : void 0,
                                      tabIndex: K ? 0 : -1,
                                      "aria-hidden": !K,
                                      "aria-disabled": E,
                                      "aria-label": P.intl.string(_.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": K ? void 0 : "true",
                                      children: (0, a.jsx)(lJ.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eC.D, {
                                      className: s()(l1.gb, { [l1.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": E,
                                      "aria-label": P.intl.string(_.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, a.jsx)(lZ.E, {
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
    l4 = l(191521),
    l5 = l(405189);
function l8(e) {
    let { line: t, placement: l, todos: n, provisionalTodo: i, agents: o, onJumpToActivity: u } = e,
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
    let [y, A] = r.useState(!1),
        [k, N] = r.useState(!1),
        [w, S] = r.useState(p);
    w !== p && (S(p), p ? A(!0) : N(!1)),
        r.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        r.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, p]);
    let C = null != n && n.length > 0,
        E = r.useCallback(() => v((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: l5.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: s()(l5.vK, { [l5.ho]: g && d, [l5.ET]: !d }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: s()(l5.Rk, tn.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(eY.A, {
                                        glyph: (0, a.jsx)(l4.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eC.D, {
                                    className: l5.pZ,
                                    onClick: u,
                                    "aria-label": P.intl.string(_.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: s()(l5.Rk, tn.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(eY.A, {
                                            glyph: (0, a.jsx)(l4.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          C
                              ? (0, a.jsx)(tS.m, {
                                    text: P.intl.string(_.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eC.D, {
                                        className: l5.BO,
                                        onClick: E,
                                        "aria-expanded": p,
                                        "aria-label": P.intl.string(_.default.qCRC6c),
                                        children: (0, a.jsx)(l3.ClipboardListIcon, {
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
                            className: s()(l5.vB, { [l5.pg]: p && k, [l5.ui]: !p }),
                            children: (0, a.jsx)(tm, { todos: n, provisional: i, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var l9 = l(366010),
    ne = l(825484),
    nt = l(859703),
    nl = l(738822),
    nn = l(291749),
    na = l(971276),
    nr = l(590202),
    ni = l(710969),
    ns = l(792620),
    no = l(201805),
    nu = l(617986),
    nd = l(363195),
    nc = l(749414);
let nm = !1;
function nf(e) {
    let t,
        l,
        n,
        { open: i } = e,
        s =
            ((t = (0, no.dN)()),
            (l = (0, k.bG)([nt.A], () => nt.A.isQuestAccessSuspended || null != nt.A.questEnrollmentBlockedUntil, [])),
            (n = (0, k.bG)([nt.A], () => null != nt.A.getQuestPreviewOverride(nl.uF.QUEST_BAR_V2), [])),
            null != t && (0, ns.vv)(t)
                ? n
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, na.s)() || l || (0, ni.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = r.useState(() => nm),
        { mounted: d, closing: c } = (function (e) {
            let [t, l] = r.useState(e),
                [n, a] = r.useState(!1),
                i = r.useRef(null);
            return (
                e && (!t || n) ? (l(!0), a(!1)) : e || !t || n || a(!0),
                r.useEffect(() => {
                    if (!e && t)
                        return (
                            (i.current = setTimeout(() => {
                                (i.current = null), a(!1), l(!1);
                            }, 150)),
                            () => {
                                null != i.current && (clearTimeout(i.current), (i.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: n }
            );
        })(i && !o && null != s),
        [m, f] = r.useState(s);
    null != s && s !== m && f(s);
    let g = s ?? m,
        x = (0, k.bG)([nd.A], () => nd.A.getState().theme),
        p = (0, l9.M)(x) ? E.NJ8.DARK : E.NJ8.LIGHT,
        j = null != g ? (0, nn.tW)(g, nn.fY.GAME_TILE, p).url : null,
        b = null != j && "" !== j ? j : null,
        y = r.useCallback(async () => {
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
        A = r.useCallback(() => {
            (nm = !0), u(!0);
        }, []);
    return d && null != g
        ? (0, a.jsxs)("aside", {
              className: nc.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, a.jsxs)("div", {
                            className: nc.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: nc.Rx, src: b, alt: "" }),
                                (0, a.jsx)("div", { className: nc._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: nc.iB,
                      children: [
                          null != b ? (0, a.jsx)("img", { className: nc.w1, src: b, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: nc.Ug,
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
                  (0, a.jsxs)(ne.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(h.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: A,
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
var nh = l(651649),
    ng = l(670455);
let nx = "shownVibegrationsFeedbackProjectIds";
var np = l(348800);
let nv = [P.intl.string(_.default["E+Q26x"]), P.intl.string(_.default["06/jqP"]), P.intl.string(_.default["3gSfUa"])];
function nj(e) {
    let { projectId: t, restoreState: n } = e,
        i = (0, k.bG)([eA.Ay], () => eA.Ay.getMessages(t), [t]),
        s = (0, k.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, k.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, k.bG)([eA.Ay], () => eA.Ay.getProjectUsage(t), [t]),
        d = (0, k.bG)([eA.Ay], () => eA.Ay.getThinkingActivity(t), [t]),
        c = (0, k.bG)([eA.Ay], () => eA.Ay.isCompacting(t), [t]),
        f = (0, k.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        h = r.useRef(null),
        g = r.useRef(null),
        x = r.useRef(null),
        p = r.useRef(!0),
        [v, j] = r.useState(!0);
    r.useEffect(() => {
        p.current && g.current?.scrollToBottom();
    }, [i]);
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
        r.useEffect(() => {
            (0, m.Hc)(t);
        }, [t]),
        r.useEffect(
            () => () =>
                (function (e) {
                    let t = eA.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, eA.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tR.w.get(nx) ?? []).includes(e) ||
                            nh.A.possiblyShowFeedbackModal(ng.MW.VIBEGRATIONS, () => {
                                let n;
                                (n = tR.w.get(nx) ?? []).includes(e) || tR.w.set(nx, [...n, e]),
                                    (0, eG.openModalLazy)(async () => {
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
    let A = r.useCallback(
            (e, l) => {
                (0, m.dv)(t, e, l);
            },
            [t],
        ),
        N = r.useCallback(() => (0, m.fu)(t), [t]),
        w = r.useCallback((e) => A(e.implementation_prompt), [A]),
        S = r.useCallback((e) => A(e), [A]),
        C = r.useCallback((e) => (0, m.XZ)(t, e), [t]),
        E = r.useCallback((e) => (0, m.vX)(t, e), [t]),
        I = r.useCallback((e) => (0, m.Vm)(t, e), [t]),
        T = r.useCallback(() => A(P.intl.string(_.default.Jj8Ftb)), [A]),
        M = n?.status === "restoring",
        R = "open" === s && !o && !M,
        L = i[i.length - 1],
        F = null != L && "assistant" === L.role && null != L.proposal,
        [q, D] = r.useState(null),
        O = L?.clarification != null && L.clarification.id !== q ? L.clarification : null,
        z = r.useCallback(() => {
            null != O && D(O.id);
        }, [O]),
        $ = (0, k.bG)([eA.Ay], () => eA.Ay.hasLoadedHistory(t), [t]),
        G = r.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return nv[e % nv.length];
        }, [t]),
        B = F
            ? P.intl.string(_.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? P.intl.string(_.default["3sTTBu"])
              : $ && 0 === i.length
                ? G
                : null,
        U = r.useMemo(() => {
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                if ("assistant" === t.role && !(0, eA.BL)(t)) return t;
            }
        }, [i]),
        V = null != U,
        H = F && R ? T : void 0,
        [W, Y] = r.useState(null),
        [Q, X] = r.useState(V);
    Q !== V && (X(V), V || Y(null)),
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
    let K = r.useMemo(() => (null != U ? (0, ek.b9)(U.steps) : ""), [U]),
        J = r.useMemo(() => (null != U ? ((0, ey.lt)(U.steps) ?? U.todos) : void 0), [U]),
        Z = U?.provisionalTodo,
        ee = r.useMemo(() => {
            var e;
            return null != U ? ((e = U.steps), tg((0, ey.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [U]);
    return (0, a.jsxs)("section", {
        ref: h,
        "data-vibegrations-chat": !0,
        className: np.TE,
        children: [
            (0, a.jsx)(nf, { open: null != U }),
            (0, a.jsx)(l8, {
                onJumpToActivity: b,
                line: K,
                placement: V && "top" === W ? "top" : null,
                todos: J,
                provisionalTodo: Z,
                agents: ee,
            }),
            (0, a.jsxs)("div", {
                className: np.JX,
                children: [
                    (0, a.jsx)(eb.Ch, {
                        ref: g,
                        onScroll: y,
                        className: v ? np.N$ : `${np.N$} ${np.hB}`,
                        children: (0, a.jsx)(lE, { ref: x, projectId: t, messages: i, onPickIdea: R ? w : void 0 }),
                    }),
                    (0, a.jsx)("div", {
                        className: np.NJ,
                        children: (0, a.jsx)(lW, {
                            projectId: t,
                            thinking: V,
                            restoring: M,
                            thinkingActivity: d,
                            compacting: c,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == O
                        ? null
                        : (0, a.jsx)("div", {
                              className: np.B5,
                              children: (0, a.jsx)(
                                  l7,
                                  { clarification: O, onSubmit: R ? S : void 0, onDismiss: z },
                                  O.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: np.Jx,
                children: [
                    (0, a.jsx)(l8, {
                        onJumpToActivity: b,
                        line: K,
                        placement: V && "bottom" === W ? "bottom" : null,
                        todos: J,
                        provisionalTodo: Z,
                        agents: ee,
                    }),
                    (0, a.jsx)(tY, {
                        projectId: t,
                        canSend: R,
                        stopped: o,
                        running: V,
                        restoring: M,
                        onSend: A,
                        onInterrupt: R ? N : void 0,
                        onUploadFile: E,
                        onDeleteFile: I,
                        onApprove: H,
                        suggestion: B,
                        questionOpen: null != O,
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
    nA = l(517461),
    nk = l(761929),
    nN = l(927506);
function nw(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: i } = e,
        s = (0, ny.r)(nb.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = r.useRef(null),
        [u, d] = (0, nA.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = r.useState(u ?? 460),
        f = (0, t_.clamp)(c, 360, l);
    r.useLayoutEffect(() => {
        n(t ? f + s : 0);
    }, [f, t, s, n]);
    let h = (0, nk.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nk.R.HORIZONTAL_LEFT,
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
        className: nN.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: nN.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: nN.kL, style: { width: f }, children: i }),
        ],
    });
}
var nS = l(691540),
    nC = l(857250),
    nE = l(97483),
    nI = l(624479),
    nT = l(92446),
    nM = l(761508),
    n_ = l(957565);
let nP = new Map(),
    nR = new Map();
class nL extends k.Ay.Store {
    getStatus(e) {
        return nP.get(e) ?? null;
    }
    getFetchState(e) {
        return nR.get(e) ?? "idle";
    }
}
let nF = new nL(tL.h, {
    LOGOUT: function () {
        if (0 === nP.size && 0 === nR.size) return !1;
        nP.clear(), nR.clear();
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nR.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l || "loading" !== nR.get(t)) return !1;
        nR.set(t, "failed");
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nR.set(t, "failed") : (nP.set(t, l), nR.set(t, "loaded"));
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        nP.delete(t), nR.delete(t);
    },
});
var nq = l(972786),
    nD = l(320448),
    nO = l(629584),
    nz = l(683438);
function n$(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function nG(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function nB(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function nU(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function nV(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
var nH = l(849363);
function nW(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: nH.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: P.intl.string(_.default.TV42NS),
              }),
          });
}
function nY(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: nH.qf,
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
              className: nH.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function nQ(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: nH.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(_.default["U/qDX9"]),
              }),
          })
        : null;
}
var nX = l(417397);
let nK = ["all", "preview", "stable", "web"],
    nJ = r.memo(function (e) {
        var t;
        let { entry: l, showSource: n } = e,
            [i, s] = r.useState(!1),
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
                        let i = e.slice(0, a).trim(),
                            s = JSON.stringify(t, null, 2);
                        return Array.isArray(t)
                            ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                            : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                    })(l.message),
                [l.message],
            ),
            d = "error" === l.level ? "text-feedback-critical" : "text-default";
        return (0, a.jsxs)("div", {
            className: nX.vK,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    className: nX.Mt,
                    selectable: !0,
                    children: (function (e) {
                        let t = new Date(e);
                        if (Number.isNaN(t.getTime())) return e;
                        let l = String(t.getHours()).padStart(2, "0"),
                            n = String(t.getMinutes()).padStart(2, "0"),
                            a = String(t.getSeconds()).padStart(2, "0");
                        return `${l}:${n}:${a}`;
                    })(l.ts),
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
                    className: nX.dm,
                    children: l.level,
                }),
                (0, a.jsxs)("span", {
                    className: nX.t4,
                    children: [
                        n &&
                            null != l.source &&
                            (0, a.jsx)(v.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-subtle",
                                className: nX.Cq,
                                children: l.source,
                            }),
                        null != l.kind &&
                            (0, a.jsx)(v.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-feedback-critical",
                                className: nX.Cq,
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
                                          className: nX.Pq,
                                          "aria-expanded": i,
                                          "aria-controls": o,
                                          "aria-label": P.intl.string(_.default.ehmgbH),
                                          onClick: () => s((e) => !e),
                                          children: [
                                              i
                                                  ? (0, a.jsx)(lK.a, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, a.jsx)(nD._, {
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
                                      i &&
                                          (0, a.jsx)(v.E, {
                                              tag: "div",
                                              variant: "text-xs/normal",
                                              color: d,
                                              className: nX.dF,
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
function nZ(e) {
    let { projectId: t } = e,
        l = (0, k.bG)([nq.A], () => nq.A.getLogs(t), [t]),
        n = (0, k.bG)([nq.A], () => nq.A.getHistoryState(t, "logs")),
        [i, s] = r.useState("all"),
        [o, u] = r.useState(""),
        d = r.useMemo(() => {
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
                nK.map((e) => ({
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
        className: nX.$F,
        children: [
            (0, a.jsxs)("div", {
                className: nX.y4,
                children: [
                    (0, a.jsx)(nO.I, {
                        look: "pill",
                        "aria-label": P.intl.string(_.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: nX.KT,
                        children: (0, a.jsx)(nz.I, {
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
            l.length > 0 && (0, a.jsx)(nW, { state: n }),
            (0, a.jsxs)(eb.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: nX.sx,
                children: [
                    (0, a.jsx)(nQ, { state: n }),
                    0 === l.length
                        ? (0, a.jsx)(nY, {
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
                          : d.map((e) => (0, a.jsx)(nJ, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
var n0 = l(69985);
function n1(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, a.jsxs)("div", {
        className: n0.KE,
        children: [
            (0, a.jsx)("div", {
                className: n0.IQ,
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
                                  children: P.intl.formatToPlainString(_.default["4NpaEk"], { time: nU(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(h.$, { variant: "secondary", size: "sm", text: P.intl.string(_.default.aw0IJm), onClick: n }),
        ],
    });
}
function n2(e) {
    let { title: t, children: l } = e;
    return (0, a.jsxs)("section", {
        className: n0.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: n0.Gf, children: t }),
            l,
        ],
    });
}
function n6(e) {
    let { label: t, value: l, hint: n, critical: r = !1 } = e;
    return (0, a.jsxs)("div", {
        className: n0.N8,
        children: [
            (0, a.jsxs)("div", {
                className: n0.x7,
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
        i = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: n0.N8,
        children: [
            (0, a.jsxs)("div", {
                className: n0.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(l)} / ${r(n)}`,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: n0.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": n,
                "aria-valuenow": Math.min(l, n),
                "aria-valuetext": `${r(l)} of ${r(n)}`,
                children: (0, a.jsx)("div", {
                    className: s ? n0.aV : n0.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
var n3 = l(522652);
function n4(e) {
    return P.intl.string("preview" === e ? _.default["+m8XM6"] : _.default.kiOVnt);
}
function n5(e) {
    let { title: t, preview: l, stable: n, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, a.jsx)(r.Fragment, { children: i("preview", l) }, "preview")),
        null != n && s.push((0, a.jsx)(r.Fragment, { children: i("stable", n) }, "stable")),
        (0, a.jsx)(n2, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: P.intl.string(_.default.W4hcKL),
                      }),
        })
    );
}
function n8(e) {
    let { env: t, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(n6, {
                      label: P.intl.formatToPlainString(_.default.f8ix3w, { env: n4(t) }),
                      value: l.connected ? P.intl.string(_.default["9KlveJ"]) : P.intl.string(_.default["4tYZVa"]),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(n6, {
                      label: P.intl.string(_.default["0AB7l3"]),
                      value: nB(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${nU(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(n6, { label: P.intl.string(_.default.ElaQ0A), value: nB(l.guild_count) }),
                  (0, a.jsx)(n6, {
                      label: P.intl.string(_.default.SJtBTN),
                      value: nB(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? P.intl.formatToPlainString(_.default.bSzLue, {
                                    code: l.last_close_code,
                                    time: nU(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(n6, {
                          label: P.intl.string(_.default.N4l504),
                          value: nB(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(n6, { label: n4(t), value: P.intl.string(_.default.C6xjtD) });
}
function n9(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, a.jsx)(n6, {
        label: n4(t),
        value: P.intl.formatToPlainString(_.default.Yur5Zm, { requests: nB(l.requests), failures: nB(n + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? P.intl.formatToPlainString(_.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: nU(l.last_failure.at),
                  })
                : P.intl.formatToPlainString(_.default["1PdrB1"], { time: nU(l.since) }),
    });
}
function ae(e) {
    let { env: t, runtime: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n6, {
                label: P.intl.formatToPlainString(_.default.BVORfc, { env: n4(t) }),
                value: nB(l.connections),
            }),
            l.schedules.map((e) =>
                (0, a.jsx)(
                    n6,
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
                                  ? P.intl.formatToPlainString(_.default["7ecbr3"], { time: nU(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function at(e) {
    let { env: t, metrics: l } = e;
    return (0, a.jsx)(n6, {
        label: n4(t),
        value: P.intl.formatToPlainString(_.default.voXL2a, { calls: nB(l.calls), errors: nB(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function al(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, a.jsx)(n2, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: P.intl.string(_.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, a.jsxs)(n2, {
        title: t,
        children: [
            (0, a.jsx)(n6, {
                label: P.intl.string(_.default.KOnL3g),
                value: nB(l.requests),
                hint: P.intl.formatToPlainString(_.default["1PdrB1"], { time: nU(l.since) }),
            }),
            (0, a.jsx)(n6, { label: P.intl.string(_.default.CjPhyY), value: nB(l.errors), critical: l.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(n7, {
                              label: P.intl.string(_.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: nG,
                          }),
                          (0, a.jsx)(n6, {
                              label: P.intl.string(_.default["+rYPHD"]),
                              value: nG(r),
                              hint: P.intl.formatToPlainString(_.default["+LxC7W"], {
                                  total: nG(l.cpu_ms_total),
                                  wall: nG(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(n6, {
                      label: P.intl.string(_.default["V/nNbs"]),
                      value: P.intl.string(_.default.YKWIxp),
                      hint: P.intl.string(_.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, a.jsx)(n6, { label: P.intl.string(_.default.ueEMPa), value: nG(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, a.jsx)(n6, { label: P.intl.string(_.default.vM2krr), value: nB(l.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(n6, {
                label: P.intl.string(_.default.g1O88C),
                value: nB(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: P.intl.formatToPlainString(_.default["5iALNP"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, a.jsx)(n6, { label: P.intl.string(_.default.JUZs7g), value: nV(l.build) }),
        ],
    });
}
function an(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: P.intl.string(_.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: P.intl.string(_.default["+m8XM6"]), metrics: n },
                  { key: "stable", label: P.intl.string(_.default.kiOVnt), metrics: l },
              ];
    return (0, a.jsx)(n2, {
        title: P.intl.string(_.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, a.jsx)(n6, { label: l, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              (0, a.jsx)(n6, {
                                  label: P.intl.formatToPlainString(_.default["9TpIQg"], { env: l }),
                                  value: n$(n.r2_bytes),
                                  hint: P.intl.formatToPlainString(
                                      n.r2_truncated ? _.default.o45MMA : _.default.S7o3vV,
                                      { count: nB(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, a.jsx)(n7, {
                                      label: P.intl.formatToPlainString(_.default["0OIswI"], { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: n$,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aa(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, a.jsxs)("div", {
        className: n3.M,
        children: [
            (0, a.jsx)(n1, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(al, {
                            title: P.intl.string(_.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(al, {
                            title: P.intl.string(_.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(an, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(n5, {
                                title: P.intl.string(_.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(n8, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(n5, {
                                title: P.intl.string(_.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(n9, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(n5, {
                                title: P.intl.string(_.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ae, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(n5, {
                                title: P.intl.string(_.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(at, { env: e, metrics: t }),
                            }),
                        (0, a.jsxs)(n2, {
                            title: P.intl.string(_.default["HHe+8E"]),
                            children: [
                                (0, a.jsx)(n6, {
                                    label: P.intl.string(_.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? nV(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(n6, {
                                    label: P.intl.string(_.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? nV(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var ar = l(497243);
function ai(e) {
    let { projectId: t, onClose: l } = e,
        [n, i] = r.useState("logs"),
        s = (0, k.bG)([nF], () => nF.getStatus(t), [t]),
        u = (0, k.bG)([nF], () => nF.getFetchState(t), [t]);
    r.useEffect(() => {
        (0, m.R7)(t);
    }, [t]);
    let c = r.useCallback(() => (0, m.R7)(t), [t]),
        f = r.useCallback(() => {
            let e = {
                captured_at: new Date().toISOString(),
                project_id: t,
                status: nF.getStatus(t),
                logs: nq.A.getLogs(t),
            };
            (0, n_.C)(JSON.stringify(e, null, 2), () =>
                (0, nS.P0)((0, nC.o)(P.intl.string(_.default.sDSDiO), nE.Ck.SUCCESS)),
            );
        }, [t]),
        h = P.intl.string(_.default.KampIf);
    return (0, a.jsxs)("section", {
        className: ar.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(d.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.Ay.Icon, {
                            icon: nI.CopyIcon,
                            tooltip: P.intl.string(_.default["21ipY1"]),
                            onClick: f,
                        }),
                        (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: nT.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(d.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ar.rf,
                children: [
                    (0, a.jsxs)(nM.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": P.intl.string(_.default.uNyR86),
                        className: ar.vR,
                        children: [
                            (0, a.jsx)(nM.V.Item, { id: "logs", children: P.intl.string(_.default["1mpzdJ"]) }),
                            (0, a.jsx)(nM.V.Item, { id: "worker", children: P.intl.string(_.default.whGHLD) }),
                        ],
                    }),
                    "logs" === n
                        ? (0, a.jsx)(nZ, { projectId: t })
                        : (0, a.jsx)(aa, { status: s, fetchState: u, onRefresh: c }),
                ],
            }),
        ],
    });
}
var as = l(11055),
    ao = l(333007),
    au = l(342667);
function ad(e) {
    let { projectId: t, resolveIframe: l } = e,
        n = (0, lU.o4)(t),
        i = (0, eG.useHasAnyModalOpen)(),
        [s, o] = r.useState(null);
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
    let u = n && null != s && !i;
    return (0, ao.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: au.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: n ? P.intl.string(_.default.dIE9zO) : "",
                }),
                u
                    ? (0, a.jsx)("div", {
                          className: au.o,
                          style: { left: s.left, top: s.top, width: s.width, height: s.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var ac = l(314116),
    am = l(364522),
    af = l(406810),
    ah = l(381849),
    ag = l(977628);
function ax(e) {
    let t,
        { projectId: l, onClose: n, onRestore: i } = e,
        [s, u] = r.useState({ status: "loading" });
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
            "loading" === s.status
                ? (0, a.jsx)("div", { className: ag.E8, children: (0, a.jsx)(f.y, {}) })
                : "failed" === s.status
                  ? (0, a.jsx)("div", {
                        className: ag.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(_.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, a.jsx)("div", {
                          className: ag.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(_.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(am.Ip, {
                          className: ag.p_,
                          children: (0, a.jsx)("div", {
                              className: ag.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, ah.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: ah._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: ag.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, ac.A)({
                                                  title: P.intl.string(_.default.qOUOPE),
                                                  subtitle: P.intl.string(_.default.k2JBj5),
                                                  confirmText: P.intl.string(_.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      n(), i(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: ag.bc,
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
            className: ag.nd,
            "aria-label": P.intl.string(_.default.jAWwzi),
            children: [
                (0, a.jsxs)(d.Ay, {
                    "aria-label": P.intl.string(_.default.jAWwzi),
                    toolbar: (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n }),
                    children: [
                        (0, a.jsx)(d.Ay.ChannelIcon, { icon: af.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(d.Ay.Title, { children: P.intl.string(_.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: ag.rf, children: t }),
            ],
        })
    );
}
var ap = l(120426),
    av = l(873727),
    aj = l(147248),
    ab = l(418842),
    ay = l(885386),
    aA = l(940107),
    ak = l(171936),
    aN = l(796036);
function aw(e) {
    let { projectId: t, applicationId: l, surface: n, header: i, mainClassName: o, content: d, sidebar: c } = e,
        [m, f] = r.useState(null),
        h = (0, u.A)(l, n),
        g = h?.id ?? null;
    !(function (e, t) {
        let l = (0, k.bG)([nd.A], () => (0, av.x4)(nd.A.theme)),
            n = (0, k.bG)([aj.A], () => aj.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, k.cf)([tT.Ay], () => ({
                reducedMotion: tT.Ay.useReducedMotion,
                fontScale: (0, av.U0)(),
                highContrast: tT.Ay.isHighContrastModeEnabled,
                forcedColors: tT.Ay.useForcedColors,
                underlineLinks: tT.Ay.alwaysShowLinkDecorations,
            })),
            d = ay.hH.useSetting(),
            c = (0, ab.C)(),
            m = r.useRef(!1),
            f = r.useRef(!1),
            h = r.useRef(0),
            g = r.useRef(null),
            x = r.useCallback(() => {
                let n = (0, ap.F)(e, t);
                if (null == n) return;
                g.current = n;
                let r = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, av.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, aA.W)(n, "set-env", r, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, i, t, s, d, e, a, c, u]),
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
                let l = (0, ap.F)(e, t);
                null != l && l !== g.current && v();
            }),
            r.useEffect(() => {
                function l(l) {
                    l.target === (0, ap.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, ak.mn)(t, () => (0, ap.F)(m, g));
        }, [t, m, g]);
    let x = r.useCallback(() => (0, ap.F)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: s()(ev.Mh, o),
                children: [i, (0, a.jsx)("div", { ref: f, className: ev.fm, children: d })],
            }),
            c,
            (0, a.jsx)(ad, { projectId: t ?? null, resolveIframe: x }),
        ],
    });
}
function aS(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            surface: i,
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
            previewGate: A,
            channelMessages: k,
            availability: N,
            activeMode: w,
            widgetApplicationId: S,
        } = e,
        E = r.useRef(null),
        [I, T] = r.useState(0);
    r.useLayoutEffect(() => {
        if (i.type === C.U4.MAIN) return (0, c.HV)(l), () => (0, c.HV)(null);
    }, [l, i.type]),
        r.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, aN.s)());
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
        R = null != k ? k.open : f,
        L = f || i.type === C.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: E,
        className: ev.LB,
        children: (0, a.jsx)(aw, {
            projectId: t,
            applicationId: l,
            surface: i,
            header: u,
            mainClassName: null == u ? void 0 : s()(ev.ez, { [ev.zt]: R }),
            content: (0, a.jsx)(ef, {
                applicationId: l,
                previewApplicationId: n,
                surface: i,
                previewReady: y,
                previewGate: A,
                availability: N,
                activeMode: w,
                widgetApplicationId: S,
            }),
            sidebar:
                null != k
                    ? (0, a.jsx)(nw, {
                          open: k.open,
                          maxWidth: M,
                          onWidthChange: c.Zq,
                          children: k.open
                              ? (0, a.jsx)(ej, { channel: k.channel, guild: k.guild, onClose: k.onClose })
                              : null,
                      })
                    : null != t && L
                      ? (0, a.jsx)(nw, {
                            open: f,
                            maxWidth: M,
                            onWidthChange: c.Zq,
                            children: (0, a.jsx)("div", {
                                className: ev.cO,
                                children: v
                                    ? (0, a.jsx)(ai, { projectId: t, onClose: j ?? (() => {}) }, t)
                                    : g
                                      ? (0, a.jsx)(
                                            ax,
                                            { projectId: t, onClose: x ?? (() => {}), onRestore: p ?? (() => {}) },
                                            t,
                                        )
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(as.A, { projectId: t }),
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
                                                    children: (0, a.jsx)(nj, { projectId: t, restoreState: b }, t),
                                                }),
                                            ],
                                        }),
                            }),
                        })
                      : null,
        }),
    });
}
