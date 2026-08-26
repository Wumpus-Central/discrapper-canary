n.d(t, { A: () => lz });
var l,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    o = n(789645),
    u = n(672929),
    c = n(58736),
    d = n(948230),
    m = n(18739),
    h = n(289873),
    f = n(821609),
    g = n(627363),
    p = n(580954),
    x = n(297264),
    v = n(834730),
    j = n(625180),
    b = n(91242),
    y = n(812901),
    A = n(317608),
    k = n(17928),
    w = n(956518),
    N = n(869146),
    C = n(207371),
    S = n(165610),
    I = n(652215),
    E =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    M = n(742023),
    T = n(697744),
    R = n(295813),
    P = n(375708),
    L = n(296167);
function q(e) {
    let { className: t } = e,
        { Component: n, events: l, getDuration: r } = (0, T.c)();
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != r()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, r]),
        i.useEffect(() => {
            let e = setInterval(l.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [l]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: l.onMouseEnter,
            onMouseLeave: l.onMouseLeave,
            children: [
                (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: L.o,
                    children: P.intl.string(R.default.jTuX7C),
                }),
            ],
        })
    );
}
var F = n(328284);
function D(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(F.Bf, l && F.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: F.Ux,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var _ = n(963691);
function O(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: r } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: r,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, S.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        r = (0, k.bG)([b.A], () => b.A.getFrame(l), [l]),
                        s = (0, k.bG)(
                            [N.A, b.A],
                            () => N.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) && b.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: u } = (0, g.YY)(t),
                        c = (0, C.x)(o),
                        d = null != (0, w.Ay)(t),
                        [m, h] = i.useState(null),
                        f = m === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => h(l), [l]),
                        lifecycle: (0, S.x1)(r)
                            ? s
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: r }
                            : f
                              ? { state: "error" }
                              : r?.state === "loading"
                                ? { state: "loading", frame: r }
                                : u
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && d
                                    ? c
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: s } = r;
            return (
                i.useEffect(() => {
                    "awaiting-launch" === s && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [s, t, l, a]),
                r
            );
        })({ applicationId: t, surface: n }),
        s = (0, S.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || N.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT)) return;
                    let n = b.A.getMainFrame()?.id === e;
                    t.intent === S.sV.MAIN
                        ? (n || j.A.promoteFrame(e), j.A.resetFrameLayoutModes(e))
                        : n && j.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = b.A.getFrame(s)) &&
                        ((0, S.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        M.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === S.sV.INLINE && j.A.promoteFrame(s),
                              j.A.updateFrameLayoutMode({ frameId: s, layoutMode: S.y0.PIP }))
                            : e.intent === S.sV.MAIN && j.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        r)
    ) {
        case E.Launched:
            return (0, a.jsx)(A.A, { frameId: l.id, level: y.A.WithinAppContent, className: _.Z7 });
        case E.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: _.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case E.NoApplication:
            return (0, a.jsx)(q, { className: _.qs });
        case E.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: _.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case E.Error:
            return (0, a.jsxs)("div", {
                className: _.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: _.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case E.AwaitingLaunch:
        case E.Loading:
            return (0, a.jsx)("div", { className: _.qs, children: (0, a.jsx)(h.y, {}) });
    }
}
var z = n(323384),
    G = n(308528),
    U = n(334738),
    $ = n(373204),
    B = n(355622),
    W = n(734057),
    H = n(531685),
    V = n(365971),
    Y = n(362417);
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
    return (0, a.jsx)("div", { className: Y.f, children: (0, a.jsx)(h.y, {}) });
}
function K(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, g.YY)(l),
        o = r?.bot?.id ?? null,
        u = (0, k.bG)([W.A], () => {
            if (null == o) return null;
            let e = W.A.getDMFromUserId(o);
            return null != e ? W.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        i.useEffect(() => {
            null != t && G.A.preload(I.ME, t);
        }, [t]),
        (n = (0, k.bG)([H.A], () => H.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, V.Xg)();
            return (
                (0, U.yl)(t, e),
                () => {
                    (0, U.dm)(t, e);
                }
            );
        }, [t, n]);
    let [c, d] = i.useState(null),
        m = null != o && c === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            G.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, a.jsx)(X, {})
        : null == o || m
          ? (0, a.jsx)(Q, { message: P.intl.string(R.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(X, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)($.A, { channel: u, guild: null, chatInputType: B.oU.SIDEBAR }, u.id),
              });
}
var Z = n(148853),
    J = n(598748),
    ee = n(486610),
    et = n(531913),
    en = n(587895),
    el = n(633075),
    ea = n(946356),
    ei = n(139730),
    er = n(520082),
    es = n(287809),
    eo = n(675210),
    eu = n(71495);
function ec(e) {
    let { applicationId: t } = e,
        n = (0, k.bG)([es.default], () => es.default.getCurrentUser());
    return null == n ? null : (0, a.jsx)(ed, { applicationId: t, user: n });
}
function ed(e) {
    let { applicationId: t, user: n } = e,
        l = (0, k.bG)([en.A], () => en.A.getApplication(t)),
        r = i.useMemo(() => new el.R({ applicationId: t }), [t]),
        s = (0, et.A)(n.id, t),
        o = s.surfaceConfigs,
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
                                    children: (0, a.jsx)(er.A, {
                                        user: n,
                                        widget: r,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != l
                          ? (0, a.jsx)("div", {
                                className: eu.ql,
                                children: (0, a.jsx)(ei.A, { application: l, rendererProps: s, renderText: ee.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var em = n(976102);
function eh(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: r,
            previewGate: s,
            availability: o,
            activeMode: c,
            widgetApplicationId: d,
        } = e,
        m = (0, u.A)(t, l),
        { isLoading: x } = (0, g.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            s?.type === "permissions" && null != m && (0, p.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(h.y, {}) });
    if (s?.type === "permissions")
        return (0, a.jsx)("div", {
            className: em.q,
            children: (0, a.jsx)(D, {
                wide: !0,
                title: P.intl.string(R.default.DYwf2n),
                body: P.intl.string(R.default.WWj3pN),
                children: (0, a.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: P.intl.string(R.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!r) return (0, a.jsx)(q, { className: em.q });
    if (null == t) return null;
    if (x) return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(h.y, {}) });
    let v = o.showModeSwitch && null != c ? { role: "tabpanel", id: (0, Z.z3)(c), "aria-label": (0, Z.kZ)(c) } : {};
    return (0, a.jsxs)("div", {
        className: em.R,
        ...v,
        children: [
            ("frame" === c && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(O, { applicationId: t, surface: l })
                : null,
            "widget" === c && null != d
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: em.q,
                          children: (0, a.jsx)(D, {
                              wide: !0,
                              title: P.intl.string(R.default.SGHO9K),
                              body: P.intl.string(R.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(ec, { applicationId: d })
                : null,
            "bot" === c && null != n ? (0, a.jsx)(K, { previewApplicationId: n }) : null,
        ],
    });
}
var ef = n(534890),
    eg = n(738876),
    ep = n(47167),
    ex = n(31717),
    ev = n(372054);
function ej(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, ep.Ay)(t),
        r = (0, a.jsx)(c.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ev.Wx,
        children: [
            (0, a.jsx)(eg.A, { channel: t, draftType: ex.C.ChannelMessage }),
            (0, a.jsxs)(c.Ay, {
                toolbar: r,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(c.Ay.ChannelIcon, { icon: ef.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(c.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ev.GZ,
                children: (0, a.jsx)($.A, { channel: t, guild: n, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var eb = n(689175),
    ey = n(903586),
    eA = n(783791),
    ek = n(717447),
    ew = n(29080),
    eN = n(46054);
function eC(e) {
    let { steps: t, content: n, hasProposal: l, hasAttachments: a } = e,
        i = (0, ey.B4)(t),
        r = i.filter((e) => "message" === e.type).at(-1),
        s = (0, ey.Lf)(t),
        o = s && null != r && r.content.trim() === n.trim(),
        u = !l && "" !== n && !o;
    return {
        streamed: i,
        lastStreamedMessage: r,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: s }),
    };
}
n(134528), n(947204);
var eS = n(939249),
    eI = n(478016),
    eE = n(34136);
function eM(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: r, ...o } = e;
    return (0, a.jsxs)("section", {
        className: s()(eE.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: s()(eE.wx, null != n && eE.o5, r),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var eT = n(113757);
function eR(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        o = null == l;
    return (0, a.jsxs)(eS.D, {
        className: s()(eT.nM, { [eT.f1]: o, [eT.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: eT.jo,
                children: [
                    n
                        ? (0, a.jsx)(eI.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eT.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eT.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eP(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                s((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsx)(eM, {
        title: P.intl.string(R.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                eR,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eL = n(435619),
    eq = n(430392),
    eF = n(632015),
    eD = n(824757);
function e_(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: eD.uW,
        children: [(0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function eO(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(e_, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: eD.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: eD.jw,
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
    let { isActivity: t, hasWidget: n } = e,
        l = t ? z.k : eq.RobotIcon;
    return (0, a.jsxs)("span", {
        className: eD.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: eD.L6,
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
                              children: P.intl.string(R.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: eD.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: P.intl.string(t ? P.t.IC5Ann : R.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eG(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(eM, {
        title: P.intl.string(R.default["60htw+"]),
        trailing: (0, a.jsx)(ez, { isActivity: !0 === t.is_activity, hasWidget: null != t.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: eD.rf,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(e_, {
                          label: P.intl.string(R.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: eD.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: eD.Aw,
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
                    ? (0, a.jsx)(e_, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: eD.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eD.uX,
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
                (0, a.jsx)(eO, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(eO, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eU = n(192308),
    e$ = n(479191);
function eB(e) {
    let { projectId: t, request: l } = e,
        r = i.useCallback(() => {
            (0, eU.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: e$.Lo,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default["/e28TK"]),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(R.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: e$.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: e$.$H,
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
                className: e$.sq,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r,
                    text: P.intl.string(R.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eW = n(976814),
    eH = n(973e3);
function eV(e) {
    let { projectId: t, request: n } = e,
        l = (0, k.bG)([m.Ay], () => m.Ay.getSettings(t)),
        r = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = i.useCallback(() => {
            (0, eW.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: eH.Mk,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default.wgDhiQ),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : P.intl.string(R.default["V+DBhs"]),
            }),
            r.length > 0
                ? (0, a.jsx)("div", {
                      className: eH.R6,
                      children: r.map((e) =>
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
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(R.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eY = n(196582);
function eQ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function eX(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function eK(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function eZ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function eJ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e0(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e1(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e2(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e6(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e7(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e3(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e5() {
    return [
        { key: "snail", Illocon: eQ, tint: "var(--illo-yellow-40)", name: e8(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: eX, tint: "var(--illo-orange-40)", name: e8(R.default["+FPL+I"]) },
        { key: "frog", Illocon: eK, tint: "var(--illo-green-40)", name: e8(R.default.w4GOfR) },
        { key: "bunny", Illocon: eZ, tint: "var(--illo-pink-40)", name: e8(R.default.XmZT9M) },
        { key: "cat", Illocon: eJ, tint: "var(--illo-pink-40)", name: e8(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: e0, tint: "var(--illo-green-40)", name: e8(R.default["4iXcNT"]) },
        { key: "butterfly", Illocon: e1, tint: "var(--illo-purple-40)", name: e8(R.default.DoTGt5) },
        { key: "dog", Illocon: e2, tint: "var(--illo-yellow-40)", name: e8(R.default["9zxqmP"]) },
        { key: "spider", Illocon: e6, tint: "var(--illo-orange-40)", name: e8(R.default.HF0T3L) },
        { key: "bee", Illocon: e7, tint: "var(--illo-yellow-40)", name: e8(R.default.XTzDga) },
        { key: "bot", Illocon: e3, tint: "var(--illo-purple-40)", name: e8(R.default.abtC2b) },
    ];
}
function e4(e) {
    return e5().find((t) => t.key === e);
}
function e8(e) {
    return P.intl.string(e);
}
function e9(e) {
    let t = e5(),
        n = 0,
        l = e[0] ?? "";
    for (let e = 0; e < l.length; e++) n = (31 * n + l.charCodeAt(e)) % t.length;
    let a = new Map();
    return (
        e.forEach((e, l) => {
            a.set(e, t[(n + l) % t.length]);
        }),
        a
    );
}
var te = n(683063),
    tt = n(705754),
    tn = n(883455),
    tl = n(13699);
function ta(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(R.default.MdXWEK);
}
function ti(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: r, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, ey.SY)(n.steps),
        d = u
            ? null != c
                ? (0, ey.WQ)(c)
                : ta(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ta(e));
                  switch (e.status) {
                      case "failed":
                          return P.intl.formatToPlainString(R.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(R.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return P.intl.formatToPlainString(R.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return P.intl.formatToPlainString(R.default.RsOwXc, { count: t });
                                      let n = Math.round(t / 60);
                                      return n < 60
                                          ? P.intl.formatToPlainString(R.default["z+U4YX"], { count: n })
                                          : P.intl.formatToPlainString(R.default["7Q/vz0"], {
                                                hours: Math.floor(n / 60),
                                                minutes: n % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                      default:
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                  }
              })(o),
        m =
            0 === n.steps.length && 0 === o.detail.length
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: tl.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            tn.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: tl.iq,
                                      children: (0, a.jsx)(tt.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  });
    return (0, a.jsx)(eY.A, {
        glyph: (0, a.jsx)(te.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: r,
            body: ta(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: tl.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: i,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
n(321073);
var tr = n(140735),
    ts = n(329456);
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
                    return P.intl.string(R.default.TkPGOH);
                case "in_progress":
                    return P.intl.string(R.default["oK+fmd"]);
                default:
                    return P.intl.string(R.default.d7lieu);
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
function tc(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : to), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [m, h] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && h(!1));
    let f = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [f, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => h(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: ts.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    te.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: ts.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: ts.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function td(e) {
    let t,
        { todos: n, provisional: l, agents: r } = e,
        s = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
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
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        o =
            ((t = (r ?? to).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? to) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: ts.p_,
        children: [
            n.map((e) =>
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
                            (0, a.jsx)(tc, { agents: o.get(e.id) ?? to, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != l
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
                              children: (0, a.jsx)("span", { className: ts.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tm(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0 } = e,
        { completed: r, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, a.jsxs)(eM, {
              title: P.intl.string(R.default.qCRC6c),
              trailing: (0, a.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: r, total: s }),
              }),
              className: ts.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  i
                      ? (0, a.jsx)(tr.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(R.default["QG/EiF"], { completed: r, total: s }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: ts.rf,
                      children: (0, a.jsx)(td, { todos: t, provisional: n, agents: l }),
                  }),
              ],
          });
}
var th = n(229775),
    tf = n(165648);
function tg(e) {
    let t = e9(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? e4(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: ta(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tp(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            durationMs: r,
            interrupted: s = !1,
            todos: o,
            provisionalTodo: u,
            segment: c,
            hostsChecklist: d = !0,
            reportsDuration: m = !0,
            closed: h = !1,
            segmentDurationMs: f,
        } = e,
        g = i.useMemo(() => (0, ey.GO)(n, { turnActive: l }), [n, l]),
        p = i.useMemo(
            () =>
                null == c
                    ? g
                    : {
                          ...g,
                          steps: g.steps.filter((e) => e.segment === c),
                          tasks: g.tasks.filter((e) => e.task.segment === c),
                      },
            [g, c],
        );
    if (s)
        return (0, a.jsx)("ol", {
            className: tl.pj,
            "data-live": !1,
            children: (0, a.jsx)(eY.A, {
                glyph: (0, a.jsx)(ew.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let x = l ? void 0 : (f ?? (m ? (g.turn?.durationMs ?? r) : void 0)),
        v = d ? ((0, ey.lt)(n) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === p.steps.length && 0 === p.tasks.length && !j) return null;
    let b = p.tasks,
        y = e9(b.map((e) => e.taskId)),
        A = !h && (l || b.some((e) => "running" === e.task.status)),
        k = tg(b);
    return (0, a.jsx)(eY.l.Provider, {
        value: b.length,
        children: (0, a.jsxs)("ol", {
            className: tl.pj,
            "data-live": A,
            children: [
                (0, a.jsx)(ek.Ay, {
                    projectId: t,
                    steps: p.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: h,
                    durationMs: x,
                    connectsDown: b.length > 0,
                }),
                b.map((e, n) => {
                    let l = null != e.task.helperMark ? e4(e.task.helperMark) : void 0,
                        i = l ?? y.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              ti,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: n < b.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, a.jsx)("li", {
                          className: tl.YO,
                          children: (0, a.jsx)(tm, { todos: v, provisional: u, agents: k }),
                      })
                    : null,
            ],
        }),
    });
}
function tx(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            ideas: o,
            attachments: u,
            secretRequest: c,
            settingsRequest: d,
            onPickIdea: m,
            pickedIdeaIds: h,
            sideReply: f = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: p,
            lastStreamedMessage: x,
            showsClosingMessage: j,
            attachmentsHost: b,
        } = i.useMemo(
            () => eC({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        y = null == u ? null : (0, a.jsx)(eL.A, { projectId: t, attachments: u }),
        A = null == y ? null : (0, a.jsx)("div", { className: tl.MT, children: y }),
        k = f
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: tl.ue,
        children: [
            p.length > 0 && !g
                ? (0, a.jsx)("ol", {
                      className: tl.dO,
                      children: p
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: tl.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tf.PT,
                                              children: eN.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === x ? A : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(eG, { proposal: r })
                : j
                  ? (0, a.jsxs)("div", {
                        className: s()(tl.ky, th.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: s()(tf.PT, tl.cW),
                                children: eN.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? A : null,
                            k,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: s()(tl.ky, th.XR),
                      children: (0, a.jsx)(eB, { projectId: t, request: c }),
                  })
                : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: s()(tl.ky, th.XR),
                      children: (0, a.jsx)(eV, { projectId: t, request: d }),
                  })
                : null,
            "standalone" === b ? y : null,
            null != o && o.length > 0 ? (0, a.jsx)(eP, { ideas: o, pickedIdeaIds: h, onPick: m }) : null,
            j ? null : k,
        ],
    });
}
n(323874), n(14289), n(35956);
var tv = n(475358),
    tj = n(922016),
    tb = n(980707),
    ty = n(477782),
    tA = n(81369),
    tk = n(717400),
    tw = n(663341),
    tN = n(826745),
    tC = n(866665),
    tS = n(783977),
    tI = n(559647),
    tE = n(285796),
    tM = n(775602),
    tT = n(673724),
    tR = n(435558),
    tP = n.n(tR),
    tL = n(506774),
    tq = n(228366);
let tF = "VibegrationsComposerDrafts";
function tD() {
    return tL.w.get(tF) ?? {};
}
let t_ = new Map(),
    tO = tP().throttle(() => {
        if (0 === t_.size) return;
        let e = tD();
        for (let [t, n] of t_) "" === n ? delete e[t] : (e[t] = n);
        t_.clear(), tL.w.set(tF, e);
    }, 1e3);
class tz extends k.Ay.Store {
    getDraft(e) {
        let t = t_.get(e);
        return null != t ? t : (tD()[e] ?? "");
    }
}
let tG = new tz(tq.h, {
    LOGOUT: function () {
        return t_.clear(), tO.cancel(), tL.w.remove(tF), !1;
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return t_.set(t, n), tO(), "" === n && tO.flush(), !1;
    },
});
var tU = n(590380),
    t$ = n(311656),
    tB = n(789438);
let tW = tT.Is;
function tH(e) {
    let { text: t } = e,
        [n, l] = i.useState(""),
        [r, s] = i.useState("enterStart"),
        [o, u] = i.useState("");
    t !== o && (u(t), t !== n && ("" === n ? (l(t), s("enterStart")) : "idle" === r && s("exit"))),
        i.useEffect(() => {
            if ("exit" === r) {
                let e = window.setTimeout(() => {
                    l(t), s("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === r) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => s("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [r, t]);
    let c = "exit" === r ? tB.t0 : "enterStart" === r ? tB.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tB.xM} ${tB.nT} ${c}`, children: n }),
            (0, a.jsx)(tv.e, { shortcut: "tab", className: `${tB.xT} ${tB.nT} ${c}`, keyClassName: tB.IS }),
        ],
    });
}
let tV = 0;
function tY(e) {
    let {
            projectId: t,
            canSend: n,
            stopped: l,
            running: r,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: c,
            onDeleteFile: m,
            onApprove: h,
            onImport: f,
            suggestion: g,
            questionOpen: p = !1,
            modelSettings: x,
            onModelSettingsChange: v,
        } = e,
        [j, b] = i.useState(() => tG.getDraft(t)),
        y = i.useCallback(
            (e) => {
                (0, d.I$)(t, e), b(e);
            },
            [t],
        ),
        [A, w] = i.useState(t);
    A !== t && (w(t), b(tG.getDraft(t)));
    let N = (0, k.bG)([tM.Ay], () => tM.Ay.isSubmitButtonEnabled),
        [C, S] = i.useState([]),
        [I, E] = i.useState(!1),
        [M, T] = i.useState(!1);
    i.useEffect(() => {
        r || T(!1);
    }, [r]);
    let L = i.useRef(null),
        q = i.useRef([]),
        F = i.useRef(new Set()),
        D = i.useRef(m);
    D.current = m;
    let _ = i.useCallback((e) => {
            (q.current = e), S(e);
        }, []),
        O = i.useCallback((e) => {
            D.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = F.current;
        return () => {
            for (let t of q.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && O(t.ref);
        };
    }, [O]);
    let z = i.useCallback(
            (e, t) => {
                if (F.current.has(e)) return;
                let n = q.current;
                n.some((t) => t.localId === e) && _(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [_],
        ),
        G = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...q.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++tV,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= tW) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: tW }),
                        });
                        continue;
                    }
                    if (!(0, tT.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, tT.ZJ)((0, tT.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let r = tT.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: r }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (_(t), n))
                    c(e).then(
                        (e) => {
                            F.current.has(l) ? O(e) : z(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            F.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                z(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [O, c, z, _],
        ),
        U = i.useCallback(
            (e) => {
                let t = q.current,
                    n = t.find((t) => t.localId === e);
                F.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && O(n.ref),
                    _(t.filter((t) => t.localId !== e));
            },
            [O, _],
        ),
        $ = C.every((e) => "ready" === e.status),
        B = "" !== j.trim() || C.length > 0,
        W = n && B && $,
        H = i.useCallback(() => {
            if (!W) return;
            let e = q.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (o(j, e.length > 0 ? e : void 0), q.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            y(""), _([]);
        }, [W, j, o, _, y]),
        V = i.useCallback(
            (e) => {
                e.preventDefault(), H();
            },
            [H],
        ),
        Y = i.useCallback(() => {
            null == u || M || (T(!0), u());
        }, [u, M]),
        Q = null == g || "" !== j || !n || l || s ? null : g,
        X = i.useCallback(
            (e) => {
                if ("Escape" === e.key && r && null != u && !M) {
                    e.preventDefault(), e.stopPropagation(), Y();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != Q) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), y(Q);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != h && (e.preventDefault(), h());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), H());
            },
            [H, h, r, u, M, Y, Q, y],
        ),
        K = i.useCallback(
            (e) => {
                if (!n) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), G(t));
            },
            [n, G],
        ),
        Z = i.useCallback(
            (e) => {
                e.preventDefault(), E(!1), n && G(Array.from(e.dataTransfer.files));
            },
            [n, G],
        ),
        J = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), E(!0));
        }, []),
        ee = i.useCallback(
            (e) => {
                G(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [G],
        ),
        et = i.useRef(null),
        en = i.useRef(null),
        [el, ea] = i.useState(0),
        [ei, er] = i.useState(!1);
    i.useEffect(() => {
        if (0 === j.length) return void er(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = tK(e);
            null != t && ea(t);
        }
        er(!0);
        let t = setTimeout(() => er(!1), tQ);
        return () => clearTimeout(t);
    }, [j]);
    let es = i.useMemo(() => ({ "--custom-glow-x": `${el}px` }), [el]),
        eo = ei ? ` ${tB.EB}` : "",
        eu = null != Q;
    return (0, a.jsxs)("form", {
        onSubmit: V,
        onDrop: Z,
        onDragOver: J,
        onDragLeave: () => E(!1),
        className: I ? `${tB.DA} ${tB.pV}` : tB.DA,
        children: [
            C.length > 0
                ? (0, a.jsx)("div", {
                      className: tB.lN,
                      children: C.map((e) => (0, a.jsx)(tZ, { draft: e, onRemove: U }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${tB.wg} ${tB.LP}${eo}`, style: es, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tB.wg} ${tB.L3}${eo}`, style: es, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tB.VA,
                ref: et,
                children: [
                    (0, a.jsx)("input", {
                        ref: L,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: tB.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tj.Y, {
                        targetElementRef: en,
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
                                            action: () => L.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(ty.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(R.default.edKajy),
                                                  iconLeft: tk.q,
                                                  leadingAccessory: { type: "icon", icon: tk.q },
                                                  action: f,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, t) => {
                            let { isShown: l } = t;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: en,
                                type: "button",
                                className: `${tB.Y0} ${tB.nu}`,
                                disabled: !n,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(tw.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tB.Qu,
                                }),
                            });
                        },
                    }),
                    null == Q
                        ? null
                        : (0, a.jsx)("div", {
                              className: tB.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tH, { text: Q }),
                          }),
                    (0, a.jsx)(tN.y, {
                        value: j,
                        onChange: (e) => y(e.currentTarget.value),
                        onKeyDown: X,
                        onPaste: K,
                        placeholder: s
                            ? P.intl.string(R.default.pGFXZ0)
                            : l
                              ? P.intl.string(R.default.JeM47J)
                              : n
                                ? eu
                                    ? ""
                                    : p
                                      ? P.intl.string(R.default.M3ovXY)
                                      : P.intl.string(r ? R.default["67PpcP"] : R.default.ahRdoJ)
                                : P.intl.string(R.default.nm4w9P),
                        disabled: !n,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: tB.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: tB.Sz,
                        children:
                            r && null != u
                                ? (0, a.jsx)(tC.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${tB.Y0} ${tB.$E}`,
                                          disabled: M,
                                          onClick: Y,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(ew.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != x && null != v
                                  ? (0, a.jsx)(t$.A, {
                                        settings: x.settings,
                                        choices: x.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${tB.Y0} ${tB.$E}`,
                                        icon: (0, a.jsx)(tS.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    N
                        ? (0, a.jsxs)("div", {
                              className: tB.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tB.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tB.rt,
                                      disabled: !W,
                                      "aria-label": P.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(tI.SendMessageIcon, {
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
        n = window.getComputedStyle(e);
    for (let e of tX) t.style.setProperty(e, n.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let l = document.createElement("span");
    (l.textContent = "\u200B"), t.appendChild(l);
    let a = l.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function tZ(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(tU.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(h.y, { type: h.t.SPINNING_CIRCLE_SIMPLE, className: tB.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tB.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(tE.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
tK.mirror = null;
var tJ = n(320095),
    t0 = n(963852),
    t1 = n(521981),
    t2 = n(763754),
    t6 = n(491182),
    t7 = n(438729),
    t3 = n(622868),
    t5 = n(308334),
    t4 = n(837528),
    t8 = n(375199),
    t9 = n(715628),
    ne = n(752636),
    nt = n(9842),
    nn = n(589022),
    nl = n(95701),
    na = n(994500),
    ni = n(967198),
    nr = n(803306);
let ns = new Set(),
    no = new Map();
function nu(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
let nc = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function nd(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function nm(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function nh(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = nm(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === a
    )
        return !0;
    if (nd(a) && nd(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && nd(nm(e, l)); ) n++, (l -= 2);
        return n % 2 == 1;
    }
    return !1;
}
function nf(e, t) {
    let { streaming: n } = t,
        l = (0, k.bG)([tM.Ay], () => tM.Ay.useReducedMotion),
        a = n && !l,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let a = Math.min(l, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i); ) i++;
                      for (; i > 0 && nh(t, i); ) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== r && s(o);
    let u = a && o.length < e.length,
        c = i.useRef(o);
    i.useLayoutEffect(() => {
        c.current = o;
    });
    let d = i.useRef(0),
        m = i.useRef(0);
    i.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = c.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    a = Math.min(Math.max(n, 0), t.length),
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let r = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && nc.has(e.charAt(l - 1)); ) l--;
                                    return nc.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && nh(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    d.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(d.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = c.current;
                s({ target: e, length: e.length });
            }
        }, [u]);
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var ng = n(441136);
let np = (0, nl.createChannelRecord)({ id: "vibegrations-builder", type: I.rbe.DM }),
    nx = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nv(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: s()(ng.Yq, { [ng.x1]: t }), children: e });
}
function nj(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nb(e, t, n) {
    let { content: l } = (0, t8.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: np, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(t7.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, t9.A)(r, l);
}
function ny(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, t4.m)(e, np, t.usernameProfile, l),
        o = (0, t4.Jo)(t.avatarProfile, l),
        u = (0, k.bG)([ni.A], () => ni.A.getGuildId()),
        c = (0, k.bG)([es.default], () => es.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = es.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(nn.A, { ...t, user: n, currentUser: c, guildId: u ?? void 0 });
            },
            [c, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: d,
        guildId: u ?? void 0,
    };
}
function nA(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        r = i.useMemo(
            () => ("" !== n.content ? (0, t1.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: s, isReplyAuthorIgnored: o } = (0, k.cf)(
            [na.A],
            () => ({
                isReplyAuthorBlocked: na.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: na.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        u = (0, t2.X4)(n),
        c = (0, t2.X4)(t),
        d = ny(n);
    return (0, a.jsx)(t5.A, {
        repliedAuthor: u,
        baseAuthor: c,
        baseMessage: t,
        channel: np,
        referencedMessage: { state: nt.a.LOADED, message: n },
        content: r,
        compact: !1,
        isReplyAuthorBlocked: s,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != l,
        showReplySpine: !0,
        renderPopout: d.renderPopout,
        showAvatarPopout: d.showAvatarPopout,
        showUsernamePopout: d.showUsernamePopout,
        onClickAvatar: d.onClickAvatar,
        onClickUsername: d.onClickUsername,
        onClickReply: l,
        onPopoutRequestClose: d.onPopoutRequestClose,
    });
}
function nk(e) {
    let { message: t, author: n } = e,
        l = ny(t);
    return (0, a.jsx)(t3.Ay, {
        message: t,
        channel: np,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function nw(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s } = e;
    i.useEffect(
        () =>
            (function (e) {
                if (null == e || ns.has(e) || null != es.default.getUser(e)) return;
                let t = no.get(e) ?? 0;
                t >= 3 ||
                    (no.set(e, t + 1),
                    ns.add(e),
                    nr
                        .getUser(e)
                        .finally(() => ns.delete(e))
                        .catch(() => {}));
            })(l),
        [l],
    );
    let o = (0, k.bG)(
            [es.default],
            () => nu(l, null != l ? es.default.getUser(l) : null, es.default.getCurrentUser()),
            [l],
        ),
        u = i.useMemo(() => (0, t2.FT)(o, null), [o]),
        c = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, t0.Ay)({ channelId: np.id, content: t, author: o });
            return (0, tJ.rh)({ ...e, timestamp: nj(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, o, n]);
    return null == c ? null : (0, a.jsx)(nN, { message: c, author: u, content: t, accessories: r, groupStart: s });
}
function nN(e) {
    let { message: t, author: n, content: l, accessories: i, groupStart: r = !0 } = e,
        s = nb(t, l);
    return (0, a.jsx)(t6.A, {
        className: ng.yE,
        author: n,
        childrenHeader: r ? (0, a.jsx)(nk, { message: t, author: n }) : void 0,
        childrenMessageContent: s,
        childrenAccessories: nv(i, "" !== l),
        disableInteraction: !0,
    });
}
function nC(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: c, revealing: d } = nf(t, { streaming: u }),
        m = i.useMemo(() => (0, t2.FT)(null, null), []),
        h = i.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        f = r?.userId,
        g = (0, k.bG)(
            [es.default],
            () => nu(f, null != f ? es.default.getUser(f) : null, es.default.getCurrentUser()),
            [f],
        ),
        p = i.useMemo(() => {
            if (null == r || null == g) return null;
            let e = (0, t0.Ay)({ channelId: np.id, content: r.content, author: g });
            return (0, tJ.rh)({ ...e, id: r.id, timestamp: nj(r.createdAt, e.timestamp), state: I.cmJ.SENT });
        }, [r, g]),
        x = i.useMemo(() => (null == r ? void 0 : { channel_id: np.id, message_id: r.id }), [r]),
        v = i.useMemo(() => {
            let e = (0, t0.Ay)({ channelId: np.id, content: c, author: nx });
            return (0, tJ.rh)({
                ...e,
                timestamp: nj(n, e.timestamp),
                state: I.cmJ.SENT,
                ...(null != x ? { type: I.lAJ.REPLY, message_reference: x } : {}),
            });
        }, [c, n, x]),
        j = nb(v, c, ng.OS);
    return (0, a.jsxs)("div", {
        className: ng.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": d ? "true" : void 0,
        children: [
            (0, a.jsx)(t6.A, {
                className: ng.yE,
                author: h,
                childrenRepliedMessage:
                    null == p ? null : (0, a.jsx)(nA, { baseMessage: v, referenced: p, onJumpToReplied: s }),
                childrenHeader: (0, ne.A)({ message: v, channel: np, author: h, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: nv(l, "" !== c),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: ng.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(z.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var nS = n(375068);
function nI(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: r } = e,
        s = i.useRef(null),
        o = i.useCallback(
            (e) => {
                (s.current = e), "function" == typeof l ? l(e) : null != l && (l.current = e);
            },
            [l],
        ),
        [u, c] = i.useState(null),
        d = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(d.current), []);
    let m = i.useCallback((e) => {
            let t = s.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                c(e),
                window.clearTimeout(d.current),
                (d.current = window.setTimeout(() => c(null), 1600));
        }, []),
        h = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    function n(e, n) {
                        t.push({ row: e, groupable: { key: e.key, ...n } });
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
                            l = eC({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = l.lastStreamedMessage?.key,
                            i = (0, ey.C6)(t.steps, { turnActive: e }),
                            { lastWork: r, open: s } = (0, ey.CT)(i, { turnActive: e }),
                            o = i.at(-1)?.index;
                        for (let u of i) {
                            if (null != u.prose) {
                                let i = `${t.render_id}:${u.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: i,
                                        message: t,
                                        groupStart: !1,
                                        content: u.prose.content,
                                        hostsAttachments:
                                            "streamed" === l.attachmentsHost &&
                                            u.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && u.index === o && !u.hasWork,
                                    },
                                    { actor: "assistant", boundary: i },
                                );
                            }
                            (u.hasWork || u.hasTodos) &&
                                n(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${u.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: u.index,
                                        active: u.index === s,
                                        closed: u.index !== s,
                                        ...(null != u.durationMs ? { segmentDurationMs: u.durationMs } : {}),
                                        reportsDuration: u.index === r,
                                        hostsChecklist: u.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        if (
                            (!0 === t.interrupted
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
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            l.showsClosingMessage ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === l.attachmentsHost)
                        ) {
                            let a = `${t.render_id}:closing`;
                            n(
                                {
                                    kind: "closing",
                                    key: a,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: l.attachmentsHost,
                                },
                                {
                                    actor: "assistant",
                                    boundary: a,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let l = (function (e) {
                        let t,
                            n,
                            l = [],
                            a = null,
                            i = !1,
                            r = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                l.push(!1), (a = null), (t = void 0), (i = !1), (r = !1), (n = void 0);
                                continue;
                            }
                            let e =
                                !i || a !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || r;
                            e && ((a = s.actor), (t = s.authorId), (i = !0), (r = !0 === s.separate), (n = s.boundary)),
                                l.push(e);
                        }
                        return l;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: l[t] ?? !0 }));
                })(n),
            [n],
        );
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              ref: l,
              className: nS.x7,
              children: (0, a.jsx)(nE, {
                  role: "assistant",
                  children: (0, a.jsx)(nC, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: o,
              className: nS.x7,
              children: h.map((e) => {
                  let l = e.message;
                  switch (e.kind) {
                      case "user": {
                          let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "user",
                                  anchorId: l.id,
                                  highlighted: u === l.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nw, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      userId: l.user_id,
                                      accessories:
                                          null != n ? (0, a.jsx)(eL.A, { projectId: t, attachments: n }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nC, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: l.created_at,
                                      accessories:
                                          e.hostsAttachments && null != l.attachments
                                              ? (0, a.jsx)(eL.A, { projectId: t, attachments: l.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tp, {
                                      projectId: t,
                                      steps: l.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != l.finished_at ? l.finished_at - l.created_at : void 0,
                                      todos: l.todos,
                                      provisionalTodo: l.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tp, { projectId: t, interrupted: !0, steps: l.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tp, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: l.todos,
                                      provisionalTodo: l.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nC, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      replyTo: (function (e, t) {
                                          if (null == t) return;
                                          let n = e.find((e) => e.id === t && "user" === e.role);
                                          if (null != n)
                                              return {
                                                  id: n.id,
                                                  content: n.content,
                                                  ...(null != n.user_id ? { userId: n.user_id } : {}),
                                                  createdAt: n.created_at,
                                              };
                                      })(n, l.in_reply_to),
                                      onJumpToReplied: null != l.in_reply_to ? () => m(l.in_reply_to) : void 0,
                                      accessories: (0, a.jsx)(tx, {
                                          projectId: t,
                                          steps: l.steps,
                                          announcement: l.announcement,
                                          content: "",
                                          proposal: l.proposal,
                                          interrupted: !0 === l.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: l.ideas,
                                          pickedIdeaIds:
                                              null == l.ideas
                                                  ? void 0
                                                  : (function (e, t, n) {
                                                        let l = new Set();
                                                        for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                            let t = e[a];
                                                            if ("user" === t.role)
                                                                for (let e of n)
                                                                    e.implementation_prompt.trim() ===
                                                                        t.content.trim() && l.add(e.id);
                                                        }
                                                        return l;
                                                    })(n, l, l.ideas),
                                          attachments: l.attachments,
                                          secretRequest: l.secretRequest,
                                          settingsRequest: l.settingsRequest,
                                          onPickIdea: r,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function nE(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: r = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: s()(nS.xk, { [nS.Qo]: i, [nS.q3]: r }),
        children: n,
    });
}
var nM = n(625903),
    nT = n(964675);
function nR(e) {
    let { projectId: t } = e,
        n = (0, k.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, eW.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(eS.D, {
              className: nT.h,
              "aria-label": P.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(nM.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var nP = n(863610),
    nL = n(495557);
function nq(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: r } = nf(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: nL.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(eb.Ch, {
                ref: o,
                className: nL.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: s()(tf.PT, nL.bb),
                    "data-vibegrations-revealing": r ? "true" : void 0,
                    children: eN.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nF = n(921461);
function nD(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1, controlling: r = !1 } = e,
        o = i.useRef(null),
        u = i.useId(),
        [c, d] = i.useState(null),
        m = null != t && "end" !== t.phase,
        h = r
            ? R.default.ivvYHP
            : l
              ? R.default.aFffp2
              : n
                ? R.default["0vH/5G"]
                : m
                  ? R.default.Ly7F7x
                  : R.default.QDGuNS,
        f = null != t && "" !== t.text,
        g = t?.session ?? null,
        p = f && null != g && c === g,
        x = i.useCallback(() => {
            f && null != g && d((e) => (e === g ? null : g));
        }, [f, g]),
        j = i.useCallback(() => d(null), []);
    return (0, a.jsx)(tj.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(nq, { id: u, activity: t }),
        children: () =>
            (0, a.jsxs)(eS.D, {
                innerRef: o,
                className: s()(nF.hF, f && nF.Xd),
                "aria-label": P.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: x,
                children: [
                    (0, a.jsx)("span", {
                        className: nF.bl,
                        children: (0, a.jsx)(nP.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!r || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: P.intl.string(h),
                    }),
                ],
            }),
    });
}
var n_ = n(885574),
    nO = n(280894);
function nz(e) {
    return e.toLocaleString();
}
function nG(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: nO.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: nO.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nz((0, tT.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nz(n.input_tokens),
                    " in \xb7 ",
                    nz(n.output_tokens),
                    " out \xb7 ",
                    nz(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nz(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nU(e) {
    let { project: t } = e,
        n = (0, tT.wU)(t.compaction),
        l = (0, tT.wV)((0, tT.wV)(t.orchestrator, t.codegen), n);
    return (0, a.jsxs)("div", {
        className: nO.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: nO.Q$,
                children: (0, a.jsxs)("div", {
                    className: nO.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nz((0, tT.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(nG, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(nG, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsx)(nG, { label: P.intl.string(R.default.Tj6b30), usage: n }),
            (0, a.jsxs)("div", {
                className: nO.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tT.sj)(l) ? "\u2014" : `${Math.round(100 * (0, tT.CA)(l))}%`,
                    }),
                ],
            }),
        ],
    });
}
function n$(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tj.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nU, { project: t }),
        children: (e) =>
            (0, a.jsx)(eS.D, {
                innerRef: n,
                className: nO.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(n_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nB = n(985451),
    nW = n(258216);
function nH(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function nV(e) {
    let {
            projectId: t,
            thinking: n,
            restoring: l = !1,
            thinkingActivity: i,
            compacting: r,
            projectUsage: s,
            connState: o,
        } = e,
        u = (0, nB.o4)(t);
    return (0, a.jsxs)("div", {
        className: nW.jf,
        children: [
            (0, a.jsx)("div", {
                className: nW.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    n || l || u ? (0, a.jsx)(nD, { activity: i, compacting: r, restoring: l, controlling: u }) : null,
            }),
            (0, a.jsx)(nR, { projectId: t }),
            null == s
                ? null
                : (0, a.jsxs)("span", {
                      className: nW.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, tT.a7)(s.cost_usd),
                                  turns: s.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, tT.a7)(s.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(n$, { project: s }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: nH(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: nW.XF,
                      children: nH(o),
                  }),
        ],
    });
}
var nY = n(22231),
    nQ = n(477155),
    nX = n(935286),
    nK = n(424110);
function nZ(e) {
    let { option: t, position: n, disabled: l, onPick: r } = e,
        o = i.useId(),
        u = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eS.D, {
        className: s()(nK.uK, { [nK.ue]: l }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": P.intl.formatToPlainString(u ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": u ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: nK.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: nK.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: nK.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nK.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              id: o,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            u
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nK.rM,
                      children: P.intl.string(R.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nJ(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [r, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, h] = i.useState(0),
        f = null == n,
        g = t.questions.length,
        p = Math.min(m, g - 1),
        x = t.questions[p],
        j = i.useCallback(
            (e) => {
                if (null == n) return;
                let l = t.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                "" !== l && n(l);
            },
            [t, n],
        ),
        b = i.useCallback(
            (e) => {
                if (f) return;
                let n = { ...r, [x.id]: e };
                u(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, p);
                null == l ? j(n) : h(l);
            },
            [r, t, f, p, x.id, j],
        ),
        y = i.useCallback(() => {
            if (f || 0 === p) return;
            let e = t.questions[p - 1];
            u((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                d((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                h(p - 1);
        }, [t, f, p]),
        A = p > 0 && !f,
        k = c[x.id] ?? "",
        w = i.useCallback(() => {
            let e = k.trim();
            "" !== e && b({ kind: "custom", text: e });
        }, [k, b]),
        [N, C] = i.useState(!1),
        [S, I] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => C(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let E = i.useCallback(() => {
            null != l && (I(!0), setTimeout(l, 150));
        }, [l]),
        M = i.useCallback(() => {
            f || p >= g - 1 || h(p + 1);
        }, [f, p, g]),
        T = p < g - 1 && !f;
    return (0, a.jsxs)("section", {
        className: s()(nK.$O, { [nK.fI]: N && !S, [nK.Oh]: S }),
        role: "dialog",
        "aria-label": x.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": p,
        children: [
            (0, a.jsxs)("div", {
                className: nK.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: `${x.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: nK.TK,
                        children: x.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(eS.D, {
                              className: s()(nK.gb, nK.Q7),
                              onClick: E,
                              "aria-label": P.intl.string(R.default.fMdUNR),
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
            (0, a.jsxs)("div", {
                className: nK.Ge,
                role: "group",
                "aria-labelledby": `${x.id}-label`,
                children: [
                    x.options.map((e, t) =>
                        (0, a.jsx)(
                            nZ,
                            {
                                option: e,
                                position: t + 1,
                                disabled: f,
                                onPick: (e) => b({ kind: "option", optionId: e.id, text: e.label }),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsxs)("div", {
                        className: nK.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: nK.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(nY.PencilIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                            (0, a.jsx)(tN.y, {
                                value: k,
                                onChange: (e) => {
                                    let { value: t } = e.currentTarget;
                                    d((e) => ({ ...e, [x.id]: t }));
                                },
                                onKeyDown: (e) => {
                                    "Enter" !== e.key ||
                                        e.shiftKey ||
                                        e.nativeEvent.isComposing ||
                                        (e.preventDefault(), w());
                                },
                                placeholder: P.intl.string(R.default.qifsdL),
                                "aria-label": P.intl.formatToPlainString(R.default.XHESTL, { question: x.question }),
                                disabled: f,
                                rows: 1,
                                className: nK.Pu,
                                "data-vibegrations-clarification-other": x.id,
                            }),
                        ],
                    }),
                ],
            }),
            g > 1
                ? (0, a.jsxs)("div", {
                      className: nK.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: p + 1, total: g }),
                          }),
                          (0, a.jsxs)("div", {
                              className: nK.Np,
                              children: [
                                  (0, a.jsx)(eS.D, {
                                      className: s()(nK.gb, { [nK.yI]: !A }),
                                      onClick: A ? y : void 0,
                                      tabIndex: A ? 0 : -1,
                                      "aria-hidden": !A,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": A ? void 0 : "true",
                                      children: (0, a.jsx)(nQ.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eS.D, {
                                      className: s()(nK.gb, { [nK.yI]: !T }),
                                      onClick: T ? M : void 0,
                                      tabIndex: T ? 0 : -1,
                                      "aria-hidden": !T,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": T ? void 0 : "true",
                                      children: (0, a.jsx)(nX.E, {
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
var n0 = n(643278),
    n1 = n(191521),
    n2 = n(405189);
function n6(e) {
    let { line: t, placement: n, todos: l, provisionalTodo: r, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [h, f] = i.useState(c),
        [g, p] = i.useState(!1),
        [x, v] = i.useState(!1),
        [j, b] = i.useState(c);
    j !== c && (b(c), null != n ? (m(n), f(!0)) : (p(!1), v(!1))),
        i.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => f(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        i.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [h, c]);
    let [y, A] = i.useState(!1),
        [k, w] = i.useState(!1),
        [N, C] = i.useState(x);
    N !== x && (C(x), x ? A(!0) : w(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [x, y]),
        i.useEffect(() => {
            if (!y || !x) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => w(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, x]);
    let S = null != l && l.length > 0,
        I = i.useCallback(() => v((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: n2.qd,
              "data-placement": d,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: s()(n2.vK, { [n2.ho]: g && c, [n2.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: s()(n2.Rk, tl.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(eY.A, {
                                        glyph: (0, a.jsx)(n1.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eS.D, {
                                    className: n2.pZ,
                                    onClick: u,
                                    "aria-label": P.intl.string(R.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: s()(n2.Rk, tl.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(eY.A, {
                                            glyph: (0, a.jsx)(n1.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          S
                              ? (0, a.jsx)(tC.m, {
                                    text: P.intl.string(R.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eS.D, {
                                        className: n2.BO,
                                        onClick: I,
                                        "aria-expanded": x,
                                        "aria-label": P.intl.string(R.default.qCRC6c),
                                        children: (0, a.jsx)(n0.ClipboardListIcon, {
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
                      ? (0, a.jsx)("div", {
                            className: s()(n2.vB, { [n2.pg]: x && k, [n2.ui]: !x }),
                            children: (0, a.jsx)(tm, { todos: l, provisional: r, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var n7 = n(366010),
    n3 = n(825484),
    n5 = n(859703),
    n4 = n(24001),
    n8 = n(291749),
    n9 = n(971276),
    le = n(590202),
    lt = n(710969),
    ln = n(792620),
    ll = n(201805),
    la = n(617986),
    li = n(363195),
    lr = n(749414);
let ls = !1;
function lo(e) {
    let t,
        n,
        l,
        { open: r } = e,
        s =
            ((t = (0, ll.dN)()),
            (n = (0, k.bG)([n5.A], () => n5.A.isQuestAccessSuspended || null != n5.A.questEnrollmentBlockedUntil, [])),
            (l = (0, k.bG)([n5.A], () => null != n5.A.getQuestPreviewOverride(n4.uF.QUEST_BAR_V2), [])),
            null != t && (0, ln.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, n9.s)() || n || (0, lt.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = i.useState(() => ls),
        { mounted: c, closing: d } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1),
                r = i.useRef(null);
            return (
                e && (!t || l) ? (n(!0), a(!1)) : e || !t || l || a(!0),
                i.useEffect(() => {
                    if (!e && t)
                        return (
                            (r.current = setTimeout(() => {
                                (r.current = null), a(!1), n(!1);
                            }, 150)),
                            () => {
                                null != r.current && (clearTimeout(r.current), (r.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: l }
            );
        })(r && !o && null != s),
        [m, h] = i.useState(s);
    null != s && s !== m && h(s);
    let g = s ?? m,
        p = (0, k.bG)([li.A], () => li.A.getState().theme),
        x = (0, n7.M)(p) ? I.NJ8.DARK : I.NJ8.LIGHT,
        j = null != g ? (0, n8.tW)(g, n8.fY.GAME_TILE, x).url : null,
        b = null != j && "" !== j ? j : null,
        y = i.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: n4.uF.QUEST_BAR_V2,
                sourceQuestContent: n4.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: le.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, la.d5)({ quest: s, ...e })
                : await (0, la.e0)(s, { ...e, questContentCTA: le.Cy.ACCEPT_QUEST });
        }, [s]),
        A = i.useCallback(() => {
            (ls = !0), u(!0);
        }, []);
    return c && null != g
        ? (0, a.jsxs)("aside", {
              className: lr.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": d ? "closing" : "open",
              "aria-hidden": d,
              children: [
                  null != b
                      ? (0, a.jsxs)("div", {
                            className: lr.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: lr.Rx, src: b, alt: "" }),
                                (0, a.jsx)("div", { className: lr._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: lr.iB,
                      children: [
                          null != b ? (0, a.jsx)("img", { className: lr.w1, src: b, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: lr.Ug,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: P.intl.string(R.default["09LJ+I"]),
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
                  (0, a.jsxs)(n3.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: A,
                              text: P.intl.string(R.default.egO5fO),
                          }),
                          (0, a.jsx)(f.$, {
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
var lu = n(651649),
    lc = n(670455);
let ld = "shownVibegrationsFeedbackProjectIds";
var lm = n(348800);
let lh = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["3gSfUa"])];
function lf(e) {
    let { projectId: t, restoreState: l } = e,
        r = (0, k.bG)([eA.Ay], () => eA.Ay.getMessages(t), [t]),
        s = (0, k.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, k.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, k.bG)([eA.Ay], () => eA.Ay.getProjectUsage(t), [t]),
        c = (0, k.bG)([eA.Ay], () => eA.Ay.getThinkingActivity(t), [t]),
        d = (0, k.bG)([eA.Ay], () => eA.Ay.isCompacting(t), [t]),
        h = (0, k.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        f = i.useRef(null),
        g = i.useRef(null),
        p = i.useRef(null),
        x = i.useRef(!0),
        [v, j] = i.useState(!0);
    i.useEffect(() => {
        x.current && g.current?.scrollToBottom();
    }, [r]);
    let b = i.useCallback(() => {
            let e = f.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        y = i.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            x.current = t < 32;
            let n = t > 1;
            j((e) => (!n === e ? e : !n));
        }, []);
    i.useLayoutEffect(() => {
        let e = f.current,
            t = p.current;
        if (null == e) return;
        let n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = null;
        function i() {
            x.current &&
                (null != a && cancelAnimationFrame(a), (a = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let r = new ResizeObserver((t) => {
            for (let a of t)
                if (a.target === e) {
                    let e = a.contentRect.width;
                    if (e === n) continue;
                    (n = e), i();
                } else {
                    let e = a.contentRect.height;
                    if (e === l) continue;
                    (l = e), i();
                }
        });
        return (
            r.observe(e),
            null != t && r.observe(t),
            () => {
                r.disconnect(), null != a && cancelAnimationFrame(a);
            }
        );
    }, []),
        i.useEffect(() => {
            (0, m.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = eA.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, eA.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tL.w.get(ld) ?? []).includes(e) ||
                            lu.A.possiblyShowFeedbackModal(lc.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = tL.w.get(ld) ?? []).includes(e) || tL.w.set(ld, [...l, e]),
                                    (0, eU.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("312513"),
                                            n.e("104143"),
                                            n.e("155925"),
                                            n.e("218413"),
                                            n.e("137381"),
                                            n.e("847004"),
                                            n.e("341676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, a.jsx)(l, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let A = i.useCallback(
            (e, n) => {
                (0, m.dv)(t, e, n);
            },
            [t],
        ),
        w = i.useCallback(() => (0, m.fu)(t), [t]),
        N = i.useCallback((e) => A(e.implementation_prompt), [A]),
        C = i.useCallback((e) => A(e), [A]),
        S = i.useCallback((e) => (0, m.XZ)(t, e), [t]),
        I = i.useCallback((e) => (0, m.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, m.Vm)(t, e), [t]),
        M = i.useCallback(() => A(P.intl.string(R.default.Jj8Ftb)), [A]),
        T = l?.status === "restoring",
        L = "open" === s && !o && !T,
        q = r[r.length - 1],
        F = null != q && "assistant" === q.role && null != q.proposal,
        [D, _] = i.useState(null),
        O = q?.clarification != null && q.clarification.id !== D ? q.clarification : null,
        z = i.useCallback(() => {
            null != O && _(O.id);
        }, [O]),
        G = (0, k.bG)([eA.Ay], () => eA.Ay.hasLoadedHistory(t), [t]),
        U = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return lh[e % lh.length];
        }, [t]),
        $ = F
            ? P.intl.string(R.default.Jj8Ftb)
            : q?.kind === "plan_implemented"
              ? P.intl.string(R.default["3sTTBu"])
              : G && 0 === r.length
                ? U
                : null,
        B = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, eA.BL)(t)) return t;
            }
        }, [r]),
        W = null != B,
        H = F && L ? M : void 0,
        [V, Y] = i.useState(null),
        [Q, X] = i.useState(W);
    Q !== W && (X(W), W || Y(null)),
        i.useEffect(() => {
            if (!W) return;
            let e = f.current?.querySelector("[data-vibegrations-chat-log]"),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Y(null)
                        : Y(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return n.observe(t), () => n.disconnect();
        }, [W, B?.steps]);
    let K = i.useMemo(() => (null != B ? (0, ek.b9)(B.steps) : ""), [B]),
        Z = i.useMemo(() => (null != B ? ((0, ey.lt)(B.steps) ?? B.todos) : void 0), [B]),
        J = B?.provisionalTodo,
        ee = i.useMemo(() => {
            var e;
            return null != B ? ((e = B.steps), tg((0, ey.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [B]);
    return (0, a.jsxs)("section", {
        ref: f,
        "data-vibegrations-chat": !0,
        className: lm.TE,
        children: [
            (0, a.jsx)(lo, { open: null != B }),
            (0, a.jsx)(n6, {
                onJumpToActivity: b,
                line: K,
                placement: W && "top" === V ? "top" : null,
                todos: Z,
                provisionalTodo: J,
                agents: ee,
            }),
            (0, a.jsx)(eb.Ch, {
                ref: g,
                onScroll: y,
                "data-vibegrations-chat-log": !0,
                className: v ? lm.N$ : `${lm.N$} ${lm.hB}`,
                children: (0, a.jsx)(nI, { ref: p, projectId: t, messages: r, onPickIdea: L ? N : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: lm.im,
                children: [
                    (0, a.jsx)(nV, {
                        projectId: t,
                        thinking: W,
                        restoring: T,
                        thinkingActivity: c,
                        compacting: d,
                        projectUsage: u,
                        connState: s,
                    }),
                    (0, a.jsxs)("div", {
                        className: lm.Jx,
                        children: [
                            (0, a.jsx)(n6, {
                                onJumpToActivity: b,
                                line: K,
                                placement: W && "bottom" === V ? "bottom" : null,
                                todos: Z,
                                provisionalTodo: J,
                                agents: ee,
                            }),
                            null == O
                                ? null
                                : (0, a.jsx)("div", {
                                      className: lm.B5,
                                      children: (0, a.jsx)(
                                          nJ,
                                          { clarification: O, onSubmit: L ? C : void 0, onDismiss: z },
                                          O.id,
                                      ),
                                  }),
                            (0, a.jsx)(tY, {
                                projectId: t,
                                canSend: L,
                                stopped: o,
                                running: W,
                                restoring: T,
                                onSend: A,
                                onInterrupt: L ? w : void 0,
                                onUploadFile: I,
                                onDeleteFile: E,
                                onApprove: H,
                                suggestion: $,
                                questionOpen: null != O,
                                modelSettings: h,
                                onModelSettingsChange: S,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lg = n(661531),
    lp = n(602853),
    lx = n(517461),
    lv = n(761929),
    lj = n(927506);
function lb(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, lp.r)(lg.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, lx.V)("VibegrationsChatSidebarWidth", 460),
        [d, m] = i.useState(u ?? 460),
        h = (0, tR.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? h + s : 0);
    }, [h, t, s, l]);
    let f = (0, lv.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: lv.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, a.jsxs)("div", {
        className: lj.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: lj.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: lj.kL, style: { width: h }, children: r }),
        ],
    });
}
var ly = n(11055),
    lA = n(333007),
    lk = n(342667);
function lw(e) {
    let { projectId: t, resolveIframe: n } = e,
        l = (0, nB.o4)(t),
        r = (0, eU.useHasAnyModalOpen)(),
        [s, o] = i.useState(null);
    i.useEffect(() => {
        if (!l) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(n());
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
    }, [l, n]);
    let u = l && null != s && !r;
    return (0, lA.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: lk.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: l ? P.intl.string(R.default.dIE9zO) : "",
                }),
                u
                    ? (0, a.jsx)("div", {
                          className: lk.o,
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
var lN = n(314116),
    lC = n(364522),
    lS = n(406810),
    lI = n(381849),
    lE = n(977628);
function lM(e) {
    let t,
        { projectId: n, onClose: l, onRestore: r } = e,
        [s, u] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, m.ST)(n)
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
        }, [n]),
        (t =
            "loading" === s.status
                ? (0, a.jsx)("div", { className: lE.E8, children: (0, a.jsx)(h.y, {}) })
                : "failed" === s.status
                  ? (0, a.jsx)("div", {
                        className: lE.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(R.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, a.jsx)("div", {
                          className: lE.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(R.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(lC.Ip, {
                          className: lE.p_,
                          children: (0, a.jsx)("div", {
                              className: lE.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, lI.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: lI._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: lE.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, lN.A)({
                                                  title: P.intl.string(R.default.qOUOPE),
                                                  subtitle: P.intl.string(R.default.k2JBj5),
                                                  confirmText: P.intl.string(R.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      l(), r(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: lE.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != n.relative &&
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: n.absolute ?? void 0,
                                                      children: n.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, a.jsxs)("section", {
            className: lE.nd,
            "aria-label": P.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)(c.Ay, {
                    "aria-label": P.intl.string(R.default.jAWwzi),
                    toolbar: (0, a.jsx)(c.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(c.Ay.ChannelIcon, { icon: lS.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(c.Ay.Title, { children: P.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: lE.rf, children: t }),
            ],
        })
    );
}
var lT = n(120426),
    lR = n(873727),
    lP = n(147248),
    lL = n(418842),
    lq = n(885386),
    lF = n(940107),
    lD = n(171936),
    l_ = n(796036);
function lO(e) {
    let { projectId: t, applicationId: n, surface: l, header: r, mainClassName: o, content: c, sidebar: d } = e,
        [m, h] = i.useState(null),
        f = (0, u.A)(n, l),
        g = f?.id ?? null;
    !(function (e, t) {
        let n = (0, k.bG)([li.A], () => (0, lR.x4)(li.A.theme)),
            l = (0, k.bG)([lP.A], () => lP.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, k.cf)([tM.Ay], () => ({
                reducedMotion: tM.Ay.useReducedMotion,
                fontScale: (0, lR.U0)(),
                highContrast: tM.Ay.isHighContrastModeEnabled,
                forcedColors: tM.Ay.useForcedColors,
                underlineLinks: tM.Ay.alwaysShowLinkDecorations,
            })),
            c = lq.hH.useSetting(),
            d = (0, lL.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            f = i.useRef(0),
            g = i.useRef(null),
            p = i.useCallback(() => {
                let l = (0, lT.F)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++f.current,
                    baseTheme: n,
                    customTheme: (0, lR.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, lF.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, r, t, s, c, e, a, d, u]),
            x = i.useRef(p);
        i.useLayoutEffect(() => {
            x.current = p;
        });
        let v = i.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    (m.current = !1), h.current || x.current();
                }));
        }, []);
        i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [l, v]),
            i.useLayoutEffect(() => {
                p(), v();
            }, [v, p]),
            i.useLayoutEffect(() => {
                let n = (0, lT.F)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, lT.F)(e, t) && ((g.current = null), v());
                }
                return document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0);
            }, [t, e, v]),
            i.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]);
    })(m, g),
        i.useEffect(() => {
            if (null != t) return (0, lD.mn)(t, () => (0, lT.F)(m, g));
        }, [t, m, g]);
    let p = i.useCallback(() => (0, lT.F)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: s()(ev.Mh, o),
                children: [r, (0, a.jsx)("div", { ref: h, className: ev.fm, children: c })],
            }),
            d,
            (0, a.jsx)(lw, { projectId: t ?? null, resolveIframe: p }),
        ],
    });
}
function lz(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: r,
            header: u,
            chatOpen: h,
            onCloseChat: f,
            versionHistoryOpen: g = !1,
            onCloseVersionHistory: p,
            onRestoreVersion: x,
            restoreState: v,
            previewReady: j,
            previewGate: b,
            channelMessages: y,
            availability: A,
            activeMode: k,
            widgetApplicationId: w,
        } = e,
        N = i.useRef(null),
        [C, I] = i.useState(0);
    i.useLayoutEffect(() => {
        if (r.type === S.U4.MAIN) return (0, d.HV)(n), () => (0, d.HV)(null);
    }, [n, r.type]),
        i.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, l_.s)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = N.current;
            if (null == e) return;
            function t() {
                null != e && I(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, d.Zq)(0), []);
    let E = Math.max(360, C - 320),
        M = null != y ? y.open : h,
        T = h || r.type === S.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: N,
        className: ev.LB,
        children: (0, a.jsx)(lO, {
            projectId: t,
            applicationId: n,
            surface: r,
            header: u,
            mainClassName: null == u ? void 0 : s()(ev.ez, { [ev.zt]: M }),
            content: (0, a.jsx)(eh, {
                applicationId: n,
                previewApplicationId: l,
                surface: r,
                previewReady: j,
                previewGate: b,
                availability: A,
                activeMode: k,
                widgetApplicationId: w,
            }),
            sidebar:
                null != y
                    ? (0, a.jsx)(lb, {
                          open: y.open,
                          maxWidth: E,
                          onWidthChange: d.Zq,
                          children: y.open
                              ? (0, a.jsx)(ej, { channel: y.channel, guild: y.guild, onClose: y.onClose })
                              : null,
                      })
                    : null != t && T
                      ? (0, a.jsx)(lb, {
                            open: h,
                            maxWidth: E,
                            onWidthChange: d.Zq,
                            children: (0, a.jsx)("div", {
                                className: ev.cO,
                                children: g
                                    ? (0, a.jsx)(
                                          lM,
                                          { projectId: t, onClose: p ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(ly.A, { projectId: t }),
                                              (0, a.jsx)(c.Ay, {
                                                  "aria-label": P.intl.string(P.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(c.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: P.intl.string(R.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(c.Ay.Title, {
                                                      children: P.intl.string(P.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: ev.cb,
                                                  children: (0, a.jsx)(lf, { projectId: t, restoreState: v }, t),
                                              }),
                                          ],
                                      }),
                            }),
                        })
                      : null,
        }),
    });
}
